"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { updateMastery } from "@/lib/mistakes";
import { findWord, studySet, type Theme } from "@/content/vokabeln";

export type VocabAnswer = { correct: boolean; meaning: string };

/** What the learner already knows, as word → streak. */
async function knownMap(): Promise<Map<string, number>> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return new Map();

  const { data } = await supabase
    .from("vocab_progress")
    .select("word, streak, known")
    .eq("user_id", user.id);

  return new Map(
    (data ?? []).map((r) => [
      String(r.word).toLowerCase(),
      // A word marked known by hand is treated as a long streak, so it
      // stops crowding out words that still need work.
      r.known ? 99 : Number(r.streak ?? 0),
    ]),
  );
}

/** Pick the next words to study, weakest and highest-priority first. */
export async function pickVocab(
  theme: Theme | "alle",
  count = 20,
): Promise<string[]> {
  const known = await knownMap();
  return studySet(known, theme, count).map((w) => w.de);
}

/**
 * Record one answer.
 *
 * Graded here rather than in the browser, for the same reason as every
 * other exercise: the page should not be able to tell the database it was
 * right.
 */
export async function answerVocab(
  wordDe: string,
  givenWord: string,
): Promise<VocabAnswer> {
  const word = findWord(wordDe);
  if (!word) return { correct: false, meaning: "" };

  const correct =
    givenWord.trim().toLocaleLowerCase("de-DE") === word.de.trim().toLocaleLowerCase("de-DE");

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { correct, meaning: word.meaning.en };

  const { data: row } = await supabase
    .from("vocab_progress")
    .select("streak, times_seen, times_wrong")
    .match({ user_id: user.id, word: word.de })
    .maybeSingle();

  await supabase.from("vocab_progress").upsert(
    {
      user_id: user.id,
      word: word.de,
      streak: correct ? Number(row?.streak ?? 0) + 1 : 0,
      times_seen: Number(row?.times_seen ?? 0) + 1,
      times_wrong: Number(row?.times_wrong ?? 0) + (correct ? 0 : 1),
      last_seen_at: new Date().toISOString(),
    },
    { onConflict: "user_id,word" },
  );

  return { correct, meaning: word.meaning.en };
}

/** Mark a word as already known, or put it back into rotation. */
export async function setKnown(wordDe: string, known: boolean): Promise<void> {
  const word = findWord(wordDe);
  if (!word) return;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  await supabase.from("vocab_progress").upsert(
    {
      user_id: user.id,
      word: word.de,
      known,
      last_seen_at: new Date().toISOString(),
    },
    { onConflict: "user_id,word" },
  );

  revalidatePath("/vokabeln");
}

/** Save a finished round and move the vocabulary bar on the dashboard. */
export async function finishVocabRound(
  correct: number,
  total: number,
): Promise<void> {
  if (total <= 0) return;
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  await updateMastery(supabase, user.id, "wortschatz", correct / total);
  revalidatePath("/vokabeln");
  revalidatePath("/dashboard");
}
