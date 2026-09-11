"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { recordTaggedMistake, updateMastery } from "@/lib/mistakes";
import {
  getHoerSet,
  hoerItems,
  HOER_POINTS_PER_ITEM,
  HOER_TOTAL_POINTS,
} from "@/content/hoeren";
import type { Multi } from "@/lib/types";

export type HoerItemResult = {
  nr: number;
  teil: 1 | 2 | 3;
  correct: boolean;
  /** "" when the learner left it blank. */
  given: string;
  answer: boolean;
  statement: string;
  why: Multi;
};

export type HoerResult = {
  code: string;
  correct: number;
  total: number;
  points: number;
  maxPoints: number;
  byTeil: Record<1 | 2 | 3, { correct: number; total: number }>;
  items: HoerItemResult[];
};

export async function gradeHoerSet(
  code: string,
  answers: Record<string, string>,
): Promise<HoerResult | { error: string }> {
  const set = getHoerSet(code);
  if (!set) return { error: "That set does not exist." };

  const graded = hoerItems(set).map((item) => {
    const raw = answers[String(item.nr)] ?? "";
    return {
      nr: item.nr,
      teil: item.teil,
      // A blank answer is wrong, not skipped — the exam scores it that way.
      correct: raw === String(item.answer),
      given: raw,
      answer: item.answer,
      statement: item.statement,
      why: item.why,
    };
  });

  const byTeil = {
    1: { correct: 0, total: 0 },
    2: { correct: 0, total: 0 },
    3: { correct: 0, total: 0 },
  } as HoerResult["byTeil"];
  for (const i of graded) {
    byTeil[i.teil].total += 1;
    if (i.correct) byTeil[i.teil].correct += 1;
  }

  const correct = graded.filter((i) => i.correct).length;
  const result: HoerResult = {
    code,
    correct,
    total: graded.length,
    points: Math.round(correct * HOER_POINTS_PER_ITEM * 10) / 10,
    maxPoints: HOER_TOTAL_POINTS,
    byTeil,
    items: graded,
  };

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return result;

  await supabase.from("attempts").insert(
    graded.map((i) => ({
      user_id: user.id,
      exercise_code: `${code}-${i.nr}`,
      topic_slug: `hoeren:${code}`,
      skill: "hoeren",
      tags: [`hoeren-teil-${i.teil}`],
      given: i.given as never,
      is_correct: i.correct,
      mode: "exam" as const,
    })),
  );

  for (const i of graded) {
    if (i.correct) continue;
    await recordTaggedMistake(supabase, user.id, {
      // Listening mistakes are their own kind: not a grammar gap but a
      // detail missed in one pass. Tagging them apart keeps the Mistake
      // Bank honest about what actually needs practising.
      tag: `hoeren-teil-${i.teil}`,
      original: `${code} Nr. ${i.nr}: ${i.statement}`,
      corrected: i.answer ? "richtig" : "falsch",
      explanation: i.why,
      sourceKind: "exercise",
      sourceId: `${code}-${i.nr}`,
    });
  }

  await updateMastery(supabase, user.id, "hoeren", graded.length ? correct / graded.length : 0);

  await supabase.from("grammar_progress").upsert(
    {
      user_id: user.id,
      topic_slug: `hoeren:${code}`,
      lesson_read: true,
      answered: graded.length,
      correct,
      best_test: Math.round((correct / (graded.length || 20)) * 100),
      mastered: correct / (graded.length || 20) >= 0.8,
      last_seen_at: new Date().toISOString(),
    },
    { onConflict: "user_id,topic_slug" },
  );

  revalidatePath("/hoeren");
  revalidatePath("/dashboard");
  revalidatePath("/fehler");

  return result;
}
