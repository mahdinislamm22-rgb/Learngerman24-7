"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { updateMastery } from "@/lib/mistakes";
import { findExercise, lessonOfExercise, TRAINER_WORDS } from "@/content/grammatik";

/**
 * Grading happens here, never in the browser.
 *
 * The client sends the exercise id and what the learner chose. The answer
 * is looked up again from the content on the server, so the page cannot
 * tell the database it was right.
 */
export type GradeResult = {
  correct: boolean;
  /** Only ever sent back after an answer has been submitted. */
  answer: unknown;
};

export async function gradeExercise(
  exerciseId: string,
  given: unknown,
  mode: "learn" | "practice" | "exam" = "practice",
): Promise<GradeResult> {
  const exercise = findExercise(exerciseId);
  if (!exercise) return { correct: false, answer: null };

  const correct = isCorrect(exercise.answer, given);

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Practising without an account still works — it just is not recorded.
  if (!user) return { correct, answer: exercise.answer };

  const lesson = lessonOfExercise(exerciseId);

  await supabase.from("attempts").insert({
    user_id: user.id,
    exercise_code: exercise.id,
    topic_slug: lesson?.slug ?? null,
    skill: "grammatik",
    tags: exercise.tags,
    given: given as never,
    is_correct: correct,
    mode,
  });

  // A wrong answer becomes a Mistake Bank row, exactly like a writing
  // correction — one bank, whatever the mistake came from.
  if (!correct) {
    await recordExerciseMistake(supabase, user.id, {
      tag: exercise.tags[0] ?? "grammatik",
      original: String(given ?? ""),
      corrected: String(exercise.answer ?? ""),
      explanation: exercise.explanation,
      exerciseId: exercise.id,
    });
  }

  if (lesson) await bumpTopic(supabase, user.id, lesson.slug, correct);

  return { correct, answer: exercise.answer };
}

/** Save a finished quick test and update the mastery bar for that topic. */
export async function finishQuickTest(
  topicSlug: string,
  score: number,
  total: number,
): Promise<void> {
  if (total <= 0) return;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  const pct = Math.round((score / total) * 100);

  const { data: row } = await supabase
    .from("grammar_progress")
    .select("best_test")
    .match({ user_id: user.id, topic_slug: topicSlug })
    .maybeSingle();

  await supabase.from("grammar_progress").upsert(
    {
      user_id: user.id,
      topic_slug: topicSlug,
      best_test: Math.max(pct, Number(row?.best_test ?? 0)),
      // 80% is the line at which the study plan stops pushing this topic.
      mastered: pct >= 80,
      last_seen_at: new Date().toISOString(),
    },
    { onConflict: "user_id,topic_slug" },
  );

  await updateMastery(supabase, user.id, `grammatik:${topicSlug}`, score / total);

  revalidatePath("/grammatik");
  revalidatePath(`/grammatik/${topicSlug}`);
  revalidatePath("/dashboard");
}

/** Mark that the learner has read a lesson, so the list can show it. */
export async function markLessonRead(topicSlug: string): Promise<void> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return;

  await supabase.from("grammar_progress").upsert(
    {
      user_id: user.id,
      topic_slug: topicSlug,
      lesson_read: true,
      last_seen_at: new Date().toISOString(),
    },
    { onConflict: "user_id,topic_slug" },
  );

  revalidatePath("/grammatik");
}

/* ------------------------------------------------------------------ */
/* Article trainer                                                     */
/* ------------------------------------------------------------------ */

export type ArticleResult = {
  correct: boolean;
  answer: "der" | "die" | "das";
};

export async function answerArticle(
  noun: string,
  given: "der" | "die" | "das",
): Promise<ArticleResult> {
  const word = TRAINER_WORDS.find((w) => w.de === noun);
  if (!word) return { correct: false, answer: "die" };

  const correct = word.article === given;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { correct, answer: word.article };

  const { data: row } = await supabase
    .from("article_progress")
    .select("streak, times_seen, times_wrong")
    .match({ user_id: user.id, noun })
    .maybeSingle();

  await supabase.from("article_progress").upsert(
    {
      user_id: user.id,
      noun,
      // A streak only means something if a wrong answer resets it.
      streak: correct ? Number(row?.streak ?? 0) + 1 : 0,
      times_seen: Number(row?.times_seen ?? 0) + 1,
      times_wrong: Number(row?.times_wrong ?? 0) + (correct ? 0 : 1),
      last_seen_at: new Date().toISOString(),
    },
    { onConflict: "user_id,noun" },
  );

  if (!correct) {
    await recordExerciseMistake(supabase, user.id, {
      tag: "artikel-genus",
      original: `${given} ${noun}`,
      corrected: `${word.article} ${noun}`,
      explanation: word.meaning,
      exerciseId: `artikel:${noun}`,
    });
  }

  return { correct, answer: word.article };
}

/**
 * The words to drill next.
 *
 * Weakest first: anything answered wrongly comes back before anything
 * already on a streak, and unseen words are mixed in so the set does not
 * shrink to the same twenty words.
 */
export async function pickTrainerWords(count = 20): Promise<string[]> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const all = TRAINER_WORDS.map((w) => w.de);
  if (!user) return shuffle(all).slice(0, count);

  const { data } = await supabase
    .from("article_progress")
    .select("noun, streak, times_wrong")
    .eq("user_id", user.id);

  const seen = new Map(
    (data ?? []).map((r) => [
      r.noun as string,
      { streak: Number(r.streak ?? 0), wrong: Number(r.times_wrong ?? 0) },
    ]),
  );

  const weak = all.filter((w) => {
    const s = seen.get(w);
    return s && (s.streak < 3 || s.wrong > 0);
  });
  const fresh = all.filter((w) => !seen.has(w));
  const known = all.filter((w) => {
    const s = seen.get(w);
    return s && s.streak >= 3 && s.wrong === 0;
  });

  // Two thirds weak or new, one third revision of words already known.
  const target = Math.ceil(count * 0.66);
  const front = shuffle([...weak, ...fresh]).slice(0, target);
  const back = shuffle(known).slice(0, count - front.length);

  const picked = [...front, ...back];
  return picked.length >= count
    ? shuffle(picked)
    : shuffle([...picked, ...shuffle(all).filter((w) => !picked.includes(w))]).slice(
        0,
        count,
      );
}

/* ------------------------------------------------------------------ */
/* Helpers                                                             */
/* ------------------------------------------------------------------ */

/** Compare an answer to what was given, tolerating shape and spacing. */
function isCorrect(answer: unknown, given: unknown): boolean {
  if (Array.isArray(answer)) {
    if (!Array.isArray(given) || given.length !== answer.length) return false;
    return answer.every((a, i) => String(a) === String(given[i]));
  }
  if (typeof answer === "boolean") return answer === given;
  if (typeof answer === "number") return answer === given;
  return (
    String(answer).trim().toLowerCase() === String(given ?? "").trim().toLowerCase()
  );
}

type SupabaseLike = Awaited<ReturnType<typeof createClient>>;

/**
 * Keep the running answered/correct tally for a topic.
 *
 * Read-then-write rather than an SQL increment: the row may not exist yet,
 * and Supabase's upsert cannot add to a column it is also inserting.
 */
async function bumpTopic(
  supabase: SupabaseLike,
  userId: string,
  topicSlug: string,
  correct: boolean,
): Promise<void> {
  const { data: row } = await supabase
    .from("grammar_progress")
    .select("answered, correct")
    .match({ user_id: userId, topic_slug: topicSlug })
    .maybeSingle();

  await supabase.from("grammar_progress").upsert(
    {
      user_id: userId,
      topic_slug: topicSlug,
      answered: Number(row?.answered ?? 0) + 1,
      correct: Number(row?.correct ?? 0) + (correct ? 1 : 0),
      last_seen_at: new Date().toISOString(),
    },
    { onConflict: "user_id,topic_slug" },
  );
}

/**
 * One Mistake Bank row per distinct mistake, with a counter.
 *
 * Same unique key as writing corrections (user, category, tag, original),
 * so getting the same thing wrong in an exercise and in a letter lands on
 * the same row and shows the real repeat count.
 */
async function recordExerciseMistake(
  supabase: SupabaseLike,
  userId: string,
  m: {
    tag: string;
    original: string;
    corrected: string;
    explanation: unknown;
    exerciseId: string;
  },
): Promise<void> {
  const key = {
    user_id: userId,
    category: categoryForTag(m.tag),
    tag: m.tag,
    original: m.original,
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
        times_wrong: Number(existing.times_wrong ?? 0) + 1,
        times_right_since: 0,
        status: "open",
        last_seen_at: new Date().toISOString(),
      })
      .eq("id", existing.id);
    return;
  }

  await supabase.from("mistakes").insert({
    ...key,
    corrected: m.corrected,
    explanation: m.explanation as never,
    source_kind: "exercise",
    source_id: m.exerciseId,
    times_wrong: 1,
  });
}

/**
 * Map an exercise tag onto one of the nine Mistake Bank categories.
 *
 * The Mistake Bank groups by category, and the writing corrector already
 * uses these nine — so exercise mistakes have to land in the same buckets
 * or the bank would show two parallel taxonomies.
 */
function categoryForTag(tag: string): string {
  if (tag.startsWith("artikel")) return "artikel";
  if (tag.startsWith("kasus") || tag.includes("dativ") || tag.includes("akkusativ")) {
    return "kasus";
  }
  if (tag.includes("praeposition")) return "praeposition";
  if (tag.includes("wortstellung") || tag.includes("wortfolge")) return "wortstellung";
  if (tag.includes("verb")) return "verbform";
  if (tag.includes("konnektor")) return "konnektor";
  return "kasus";
}

function shuffle<T>(items: T[]): T[] {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
