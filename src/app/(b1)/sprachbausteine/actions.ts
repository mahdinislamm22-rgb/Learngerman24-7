"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { recordTaggedMistake, updateMastery } from "@/lib/mistakes";
import {
  findSbItem,
  getSbSet,
  SB_POINTS_PER_ITEM,
  SB_TOTAL_ITEMS,
  SB_TOTAL_POINTS,
} from "@/content/sprachbausteine";
import type { Multi } from "@/lib/types";

export type SbItemResult = {
  nr: number;
  teil: 1 | 2;
  correct: boolean;
  /** What the learner chose, already resolved to readable German. */
  given: string;
  /** The right answer, in the same readable form. */
  answer: string;
  why: Multi;
};

export type SbResult = {
  code: string;
  correct: number;
  total: number;
  /** Scaled to the real paper: 30 points across 20 items. */
  points: number;
  maxPoints: number;
  items: SbItemResult[];
};

/**
 * Grade a whole set at once, the way the real paper works.
 *
 * Answers arrive as a map of gap number to the learner's choice: an option
 * index for Teil 1, a bank key for Teil 2. Nothing about correctness comes
 * from the browser — every answer is looked up again here.
 */
export async function gradeSbSet(
  code: string,
  answers: Record<string, string>,
): Promise<SbResult | { error: string }> {
  const set = getSbSet(code);
  if (!set) return { error: "That set does not exist." };

  const items: SbItemResult[] = [];

  for (const nr of [...set.teil1.items, ...set.teil2.items].map((i) => i.nr)) {
    const item = findSbItem(code, nr);
    if (!item) continue;

    const raw = answers[String(nr)] ?? "";

    if (item.teil === 1) {
      const chosen = Number.parseInt(raw, 10);
      const t1 = set.teil1.items.find((i) => i.nr === nr)!;
      const given = Number.isInteger(chosen) ? (t1.options[chosen] ?? "") : "";
      items.push({
        nr,
        teil: 1,
        correct: chosen === item.answerIndex,
        given,
        answer: item.answer,
        why: item.why,
      });
    } else {
      const given = set.teil2.bank.find((b) => b.key === raw)?.word ?? "";
      items.push({
        nr,
        teil: 2,
        correct: raw === item.answer,
        given,
        answer: item.answerWord ?? "",
        why: item.why,
      });
    }
  }

  const correct = items.filter((i) => i.correct).length;
  const result: SbResult = {
    code,
    correct,
    total: items.length,
    points: Math.round(correct * SB_POINTS_PER_ITEM * 10) / 10,
    maxPoints: SB_TOTAL_POINTS,
    items,
  };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Practising signed out still works; it just is not recorded.
  if (!user) return result;

  // One attempt row per item, so the Mistake Bank and the progress bars
  // see Sprachbausteine exactly like any other exercise.
  const rows = items.map((i) => {
    const meta = findSbItem(code, i.nr);
    return {
      user_id: user.id,
      exercise_code: `${code}-${i.nr}`,
      topic_slug: `sprachbausteine:${code}`,
      skill: "sprachbausteine",
      tags: meta ? [meta.tag] : [],
      given: i.given as never,
      is_correct: i.correct,
      mode: "exam" as const,
    };
  });
  await supabase.from("attempts").insert(rows);

  for (const i of items) {
    if (i.correct) continue;
    const meta = findSbItem(code, i.nr);
    if (!meta) continue;
    await recordTaggedMistake(supabase, user.id, {
      tag: meta.tag,
      // An unanswered gap is still a gap you could not fill.
      original: i.given || "(keine Antwort)",
      corrected: i.answer,
      explanation: i.why,
      sourceKind: "exercise",
      sourceId: `${code}-${i.nr}`,
    });
  }

  await updateMastery(
    supabase,
    user.id,
    "sprachbausteine",
    items.length ? correct / items.length : 0,
  );

  await supabase.from("grammar_progress").upsert(
    {
      user_id: user.id,
      topic_slug: `sprachbausteine:${code}`,
      lesson_read: true,
      answered: items.length,
      correct,
      best_test: Math.round((correct / (items.length || SB_TOTAL_ITEMS)) * 100),
      mastered: correct / (items.length || SB_TOTAL_ITEMS) >= 0.8,
      last_seen_at: new Date().toISOString(),
    },
    { onConflict: "user_id,topic_slug" },
  );

  revalidatePath("/sprachbausteine");
  revalidatePath("/dashboard");
  revalidatePath("/fehler");

  return result;
}
