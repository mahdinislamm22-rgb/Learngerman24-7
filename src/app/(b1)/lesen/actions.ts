"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { recordTaggedMistake, updateMastery } from "@/lib/mistakes";
import {
  getLesenSet,
  lesenItems,
  LESEN_POINTS_PER_ITEM,
  LESEN_TOTAL_POINTS,
} from "@/content/lesen";
import type { Multi } from "@/lib/types";

export type LesenItemResult = {
  nr: number;
  teil: 1 | 2 | 3;
  correct: boolean;
  given: string;
  answer: string;
  why: Multi;
};

export type LesenResult = {
  code: string;
  correct: number;
  total: number;
  points: number;
  maxPoints: number;
  /** Per part, so the learner sees which of the three is weakest. */
  byTeil: Record<1 | 2 | 3, { correct: number; total: number }>;
  items: LesenItemResult[];
};

/**
 * Grade a whole reading paper.
 *
 * Answers come in as gap number to key: a heading letter for Teil 1, an
 * option index for Teil 2, an advert letter or "x" for Teil 3. As
 * everywhere else, the correct answers are looked up here rather than
 * trusted from the browser.
 */
export async function gradeLesenSet(
  code: string,
  answers: Record<string, string>,
): Promise<LesenResult | { error: string }> {
  const set = getLesenSet(code);
  if (!set) return { error: "That set does not exist." };

  const items = lesenItems(set).map((item) => {
    const given = answers[String(item.nr)] ?? "";
    return {
      nr: item.nr,
      teil: item.teil,
      correct: given === item.answer,
      given,
      answer: item.answer,
      why: item.why,
      tag: item.tag,
    };
  });

  const byTeil = { 1: { correct: 0, total: 0 }, 2: { correct: 0, total: 0 }, 3: { correct: 0, total: 0 } } as LesenResult["byTeil"];
  for (const i of items) {
    byTeil[i.teil].total += 1;
    if (i.correct) byTeil[i.teil].correct += 1;
  }

  const correct = items.filter((i) => i.correct).length;
  const result: LesenResult = {
    code,
    correct,
    total: items.length,
    points: Math.round(correct * LESEN_POINTS_PER_ITEM * 10) / 10,
    maxPoints: LESEN_TOTAL_POINTS,
    byTeil,
    // Built field by field rather than by spreading: `tag` is internal and
    // must not travel to the browser with the rest of the item.
    items: items.map((i) => ({
      nr: i.nr,
      teil: i.teil,
      correct: i.correct,
      given: i.given,
      answer: i.answer,
      why: i.why,
    })),
  };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return result;

  await supabase.from("attempts").insert(
    items.map((i) => ({
      user_id: user.id,
      exercise_code: `${code}-${i.nr}`,
      topic_slug: `lesen:${code}`,
      skill: "lesen",
      tags: [i.tag, `lesen-teil-${i.teil}`],
      given: i.given as never,
      is_correct: i.correct,
      mode: "exam" as const,
    })),
  );

  for (const i of items) {
    if (i.correct) continue;
    await recordTaggedMistake(supabase, user.id, {
      tag: i.tag,
      original: `${code} Nr. ${i.nr}: ${i.given || "(keine Antwort)"}`,
      corrected: i.answer,
      explanation: i.why,
      sourceKind: "exercise",
      sourceId: `${code}-${i.nr}`,
    });
  }

  await updateMastery(supabase, user.id, "lesen", items.length ? correct / items.length : 0);

  await supabase.from("grammar_progress").upsert(
    {
      user_id: user.id,
      topic_slug: `lesen:${code}`,
      lesson_read: true,
      answered: items.length,
      correct,
      best_test: Math.round((correct / (items.length || 20)) * 100),
      mastered: correct / (items.length || 20) >= 0.8,
      last_seen_at: new Date().toISOString(),
    },
    { onConflict: "user_id,topic_slug" },
  );

  revalidatePath("/lesen");
  revalidatePath("/dashboard");
  revalidatePath("/fehler");

  return result;
}
