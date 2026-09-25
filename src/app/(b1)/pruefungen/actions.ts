"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { recordTaggedMistake, updateMastery, topWeakTags } from "@/lib/mistakes";
import { getModelltest, MT_POINTS } from "@/content/modelltests";
import { lesenItems, LESEN_POINTS_PER_ITEM } from "@/content/lesen";
import { findSbItem, SB_POINTS_PER_ITEM } from "@/content/sprachbausteine";
import { hoerItems, HOER_POINTS_PER_ITEM } from "@/content/hoeren";
import { generateFeedback } from "@/lib/ai/feedback";
import { explainAiError } from "@/lib/ai/openai";
import { countWords } from "@/lib/words";
import type { Multi } from "@/lib/types";
import { totalScore, type Feedback } from "@/lib/ai/feedback-schema";

export type MtItem = {
  section: "lesen" | "sprachbausteine" | "hoeren";
  nr: number;
  teil: number;
  correct: boolean;
  given: string;
  answer: string;
  why: Multi;
  tag: string;
};

/**
 * A group of mistakes of the same kind.
 *
 * This is the part that turns a score into something you can act on. A
 * result page that says "14/20" tells you nothing; one that says "you
 * missed four Dativ items and here is the lesson" tells you what to do
 * on Tuesday.
 */
export type MistakeGroup = {
  tag: string;
  count: number;
  items: number[];
  /** Grammar lesson to review, when one covers this tag. */
  lessonSlug?: string;
  /** True when this tag is ALSO one of your long-standing weak spots. */
  recurring: boolean;
};

export type MtResult = {
  code: string;
  attemptId: string | null;
  sections: Record<
    "lesen" | "sprachbausteine" | "hoeren",
    { correct: number; total: number; points: number; maxPoints: number }
  >;
  schreiben: {
    text: string;
    words: number;
    points: number | null;
    feedback: Feedback | null;
    error?: string;
  };
  /** Written total out of 225, including the writing task when marked. */
  totalPoints: number;
  maxPoints: number;
  passMark: number;
  passed: boolean;
  items: MtItem[];
  groups: MistakeGroup[];
};

/**
 * Which grammar lesson covers a mistake tag.
 *
 * Only the four lessons that exist are mapped. A link to a lesson that is
 * not written yet would be worse than no link.
 */
function lessonFor(tag: string): string | undefined {
  if (tag.startsWith("artikel")) return "artikel";
  if (tag.includes("wechselpraeposition")) return "wechselpraepositionen";
  if (tag.includes("dativ")) return "kasus-dativ";
  if (tag.includes("akkusativ")) return "kasus-akkusativ";
  return undefined;
}

export async function gradeModelltest(input: {
  code: string;
  answers: Record<string, string>;
  schreibenText: string;
  seconds?: { lesenSb?: number; hoeren?: number; schreiben?: number };
}): Promise<MtResult | { error: string }> {
  const mt = getModelltest(input.code);
  if (!mt) return { error: "That mock exam does not exist." };

  const items: MtItem[] = [];

  // --- Leseverstehen ---------------------------------------------------
  for (const item of lesenItems(mt.lesen)) {
    const given = input.answers[`lesen:${item.nr}`] ?? "";
    items.push({
      section: "lesen",
      nr: item.nr,
      teil: item.teil,
      correct: given === item.answer,
      given,
      answer: item.answer,
      why: item.why,
      tag: item.tag,
    });
  }

  // --- Sprachbausteine -------------------------------------------------
  const sbAll = [
    ...mt.sprachbausteine.teil1.items,
    ...mt.sprachbausteine.teil2.items,
  ];
  for (const raw of sbAll) {
    const meta = findSbItem(mt.sprachbausteine.code, raw.nr);
    if (!meta) continue;
    const given = input.answers[`sb:${raw.nr}`] ?? "";

    if (meta.teil === 1) {
      const t1 = mt.sprachbausteine.teil1.items.find((i) => i.nr === raw.nr)!;
      const chosen = Number.parseInt(given, 10);
      items.push({
        section: "sprachbausteine",
        nr: raw.nr,
        teil: 1,
        correct: chosen === meta.answerIndex,
        given: Number.isInteger(chosen) ? (t1.options[chosen] ?? "") : "",
        answer: meta.answer,
        why: meta.why,
        tag: meta.tag,
      });
    } else {
      const word =
        mt.sprachbausteine.teil2.bank.find((b) => b.key === given)?.word ?? "";
      items.push({
        section: "sprachbausteine",
        nr: raw.nr,
        teil: 2,
        correct: given === meta.answer,
        given: word,
        answer: meta.answerWord ?? "",
        why: meta.why,
        tag: meta.tag,
      });
    }
  }

  // --- Hörverstehen ----------------------------------------------------
  for (const item of hoerItems(mt.hoeren)) {
    const given = input.answers[`hoeren:${item.nr}`] ?? "";
    items.push({
      section: "hoeren",
      nr: item.nr,
      teil: item.teil,
      correct: given === String(item.answer),
      given: given === "true" ? "richtig" : given === "false" ? "falsch" : "",
      answer: item.answer ? "richtig" : "falsch",
      why: item.why,
      tag: `hoeren-teil-${item.teil}`,
    });
  }

  const count = (s: MtItem["section"]) => {
    const rows = items.filter((i) => i.section === s);
    return { correct: rows.filter((i) => i.correct).length, total: rows.length };
  };

  const l = count("lesen");
  const s = count("sprachbausteine");
  const h = count("hoeren");

  const sections = {
    lesen: {
      ...l,
      points: round(l.correct * LESEN_POINTS_PER_ITEM),
      maxPoints: MT_POINTS.lesen,
    },
    sprachbausteine: {
      ...s,
      points: round(s.correct * SB_POINTS_PER_ITEM),
      maxPoints: MT_POINTS.sprachbausteine,
    },
    hoeren: {
      ...h,
      points: round(h.correct * HOER_POINTS_PER_ITEM),
      maxPoints: MT_POINTS.hoeren,
    },
  };

  // --- Schriftlicher Ausdruck -----------------------------------------
  const text = input.schreibenText.trim();
  const words = countWords(text);
  let feedback: Feedback | null = null;
  let schreibenPoints: number | null = null;
  let schreibenError: string | undefined;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (text.length > 0) {
    try {
      const weak = user ? await topWeakTags(supabase, user.id) : [];
      feedback = await generateFeedback({
        task: mt.schreiben,
        text,
        knownWeakTags: weak,
      });
      // The schema stores the four criteria; the total is derived.
      schreibenPoints = totalScore(feedback.scores);
    } catch (e) {
      // A failed correction must not lose the other three sections. The
      // exam is still scored; the writing part is simply marked pending.
      schreibenError = explainAiError(e);
    }
  }

  const totalPoints = round(
    sections.lesen.points +
      sections.sprachbausteine.points +
      sections.hoeren.points +
      (schreibenPoints ?? 0),
  );

  // --- Mistake analysis ------------------------------------------------
  const weakTags = user ? new Set(await topWeakTags(supabase, user.id, 12)) : new Set<string>();
  const byTag = new Map<string, number[]>();
  for (const i of items) {
    if (i.correct) continue;
    byTag.set(i.tag, [...(byTag.get(i.tag) ?? []), i.nr]);
  }

  const groups: MistakeGroup[] = [...byTag.entries()]
    .map(([tag, nrs]) => ({
      tag,
      count: nrs.length,
      items: nrs,
      lessonSlug: lessonFor(tag),
      recurring: weakTags.has(tag),
    }))
    .sort((a, b) => b.count - a.count);

  const result: MtResult = {
    code: mt.code,
    attemptId: null,
    sections,
    schreiben: { text, words, points: schreibenPoints, feedback, error: schreibenError },
    totalPoints,
    maxPoints: MT_POINTS.total,
    passMark: MT_POINTS.pass,
    passed: totalPoints >= MT_POINTS.pass,
    items,
    groups,
  };

  if (!user) return result;

  // --- Persist ----------------------------------------------------------
  const { data: attempt } = await supabase
    .from("modelltest_attempts")
    .insert({
      user_id: user.id,
      code: mt.code,
      answers: input.answers as never,
      lesen_points: sections.lesen.points,
      sprachbausteine_points: sections.sprachbausteine.points,
      hoeren_points: sections.hoeren.points,
      schreiben_points: schreibenPoints,
      lesen_correct: sections.lesen.correct,
      sprachbausteine_correct: sections.sprachbausteine.correct,
      hoeren_correct: sections.hoeren.correct,
      schreiben_text: text || null,
      schreiben_feedback: (feedback as never) ?? null,
      seconds_lesen_sb: input.seconds?.lesenSb ?? null,
      seconds_hoeren: input.seconds?.hoeren ?? null,
      seconds_schreiben: input.seconds?.schreiben ?? null,
      finished_at: new Date().toISOString(),
    })
    .select("id")
    .single();

  result.attemptId = attempt?.id ?? null;

  // Every wrong answer joins the same Mistake Bank as everything else, so
  // a Dativ slip in a mock exam and one in a letter land on one row.
  for (const i of items) {
    if (i.correct) continue;
    await recordTaggedMistake(supabase, user.id, {
      tag: i.tag,
      original: `${mt.code} ${i.section} Nr. ${i.nr}: ${i.given || "(keine Antwort)"}`,
      corrected: i.answer,
      explanation: i.why,
      sourceKind: "exercise",
      sourceId: `${mt.code}-${i.section}-${i.nr}`,
    });
  }

  await updateMastery(supabase, user.id, "lesen", ratio(l));
  await updateMastery(supabase, user.id, "sprachbausteine", ratio(s));
  await updateMastery(supabase, user.id, "hoeren", ratio(h));
  if (schreibenPoints !== null) {
    await updateMastery(supabase, user.id, "schreiben", schreibenPoints / MT_POINTS.schreiben);
  }

  revalidatePath("/pruefungen");
  revalidatePath("/dashboard");
  revalidatePath("/fehler");

  return result;
}

function ratio(x: { correct: number; total: number }): number {
  return x.total ? x.correct / x.total : 0;
}

function round(n: number): number {
  return Math.round(n * 10) / 10;
}
