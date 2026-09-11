import "server-only";
import type { SupabaseClient } from "@supabase/supabase-js";
import type { Feedback } from "./ai/feedback-schema";

/**
 * File each correction into the Mistake Bank.
 *
 * The `mistakes` table has unique (user_id, category, tag, original), so a
 * mistake the learner makes again lands on the SAME row and increments
 * times_wrong. That counter is the whole point: it is what lets the app
 * say "you get this wrong repeatedly" instead of just listing errors.
 */
export async function recordCorrections(
  supabase: SupabaseClient,
  userId: string,
  corrections: Feedback["corrections"],
  source: { kind: "writing"; id: string },
): Promise<void> {
  if (corrections.length === 0) return;

  for (const c of corrections) {
    const key = {
      user_id: userId,
      category: c.category,
      tag: c.tag,
      original: c.original,
    };

    const { data: existing } = await supabase
      .from("mistakes")
      .select("id, times_wrong")
      .match(key)
      .maybeSingle();

    if (existing) {
      await supabase
        .from("mistakes")
        .update({
          times_wrong: (existing.times_wrong ?? 0) + 1,
          times_right_since: 0,
          corrected: c.corrected,
          explanation: c.why,
          status: "open",
          last_seen_at: new Date().toISOString(),
        })
        .eq("id", existing.id);
    } else {
      await supabase.from("mistakes").insert({
        ...key,
        corrected: c.corrected,
        explanation: c.why,
        source_kind: source.kind,
        source_id: source.id,
        times_wrong: 1,
      });
    }
  }
}

/**
 * Move a skill score toward the latest result.
 *
 * An exponential moving average, not a lifetime average: what you did last
 * week should count for less than what you did today, otherwise the
 * dashboard keeps punishing you for mistakes you have already fixed.
 */
export async function updateMastery(
  supabase: SupabaseClient,
  userId: string,
  dimension: string,
  ratio: number,
): Promise<void> {
  const clamped = Math.max(0, Math.min(1, ratio));

  const { data: row } = await supabase
    .from("skill_mastery")
    .select("score, samples")
    .match({ user_id: userId, dimension })
    .maybeSingle();

  // Weight the first few results heavily so the bar moves at all early on,
  // then settle to a stable 0.3 once there is history to smooth against.
  const samples = (row?.samples ?? 0) + 1;
  const alpha = samples <= 3 ? 0.6 : 0.3;
  const previous = row ? Number(row.score) : clamped;
  const score = row ? previous + alpha * (clamped - previous) : clamped;

  await supabase.from("skill_mastery").upsert(
    {
      user_id: userId,
      dimension,
      score,
      samples,
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,dimension" },
  );
}

/** The learner's most frequent open mistakes, to give the corrector context. */
export async function topWeakTags(
  supabase: SupabaseClient,
  userId: string,
  limit = 8,
): Promise<string[]> {
  const { data } = await supabase
    .from("mistakes")
    .select("tag, times_wrong")
    .eq("user_id", userId)
    .eq("status", "open")
    .order("times_wrong", { ascending: false })
    .limit(limit);

  return (data ?? []).map((r) => r.tag as string).filter(Boolean);
}
