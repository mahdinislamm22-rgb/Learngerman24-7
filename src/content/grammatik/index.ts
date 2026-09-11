import type { Exercise, GrammarLesson } from "@/lib/types";
import { artikel } from "./artikel";
import { kasusAkkusativ } from "./kasus-akkusativ";
import { kasusDativ } from "./kasus-dativ";
import { wechselpraepositionen } from "./wechselpraepositionen";
import type { LessonSummary } from "./types";

export type { LessonSummary } from "./types";
export type {
  McPayload,
  GapPayload,
  ArticlePayload,
  TrueFalsePayload,
  OrderPayload,
} from "./types";
export { ARTICLE_RULES, TRAINER_WORDS } from "./artikel-nomen";
export type { TrainerNoun, RuleKey } from "./artikel-nomen";

/**
 * Every grammar lesson, in teaching order.
 *
 * The order is not alphabetical and not by difficulty — it is the order
 * in which the topics actually depend on each other. Articles come first
 * because every case ending is built on them.
 */
export const LESSONS: GrammarLesson[] = [
  artikel,
  kasusAkkusativ,
  kasusDativ,
  wechselpraepositionen,
];

export function getLesson(slug: string): GrammarLesson | undefined {
  return LESSONS.find((l) => l.slug === slug);
}

export function lessonSummaries(): LessonSummary[] {
  return LESSONS.map((l) => ({
    slug: l.slug,
    category: l.category,
    telcWeight: l.telcWeight,
    title: l.title,
    telcRelevance: l.telcRelevance,
    exerciseCount:
      l.exercises.mini.length +
      l.exercises.medium.length +
      l.exercises.hard.length,
  }));
}

/** The next lesson in teaching order, for the "carry on" button. */
export function nextLesson(slug: string): GrammarLesson | undefined {
  const i = LESSONS.findIndex((l) => l.slug === slug);
  return i >= 0 ? LESSONS[i + 1] : undefined;
}

/** All practice exercises of one lesson, easiest band first. */
export function practiceSet(lesson: GrammarLesson): Exercise[] {
  return [
    ...lesson.exercises.mini,
    ...lesson.exercises.medium,
    ...lesson.exercises.hard,
  ];
}

/**
 * Find an exercise anywhere in the content by its id.
 *
 * The client sends back only the id, never the answer — the answer is
 * looked up again on the server, so a modified page cannot award itself
 * a correct result.
 */
export function findExercise(id: string): Exercise | undefined {
  for (const lesson of LESSONS) {
    const all = [...practiceSet(lesson), ...lesson.quickTest];
    const hit = all.find((e) => e.id === id);
    if (hit) return hit;
  }
  return undefined;
}

/** Which lesson an exercise belongs to — needed to record progress. */
export function lessonOfExercise(id: string): GrammarLesson | undefined {
  return LESSONS.find((lesson) =>
    [...practiceSet(lesson), ...lesson.quickTest].some((e) => e.id === id),
  );
}
