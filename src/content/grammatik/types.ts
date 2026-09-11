import type { Exercise, GrammarLesson, Multi } from "@/lib/types";

/**
 * Exercise payload shapes.
 *
 * `Exercise.payload` is deliberately `Record<string, unknown>` in lib/types
 * so the database column and the code agree. These narrower types are what
 * the CONTENT is written against, so a typo in a lesson file is caught at
 * compile time instead of rendering an empty exercise.
 *
 * Only these five kinds are implemented by the exercise engine. Authoring
 * a "match" or "wordbank" item would type-check but not render, so the
 * helpers below are the only sanctioned way to write one.
 */

/** Multiple choice. `answer` is the index of the correct option. */
export type McPayload = {
  /** The German sentence or question shown above the options. */
  german?: string;
  options: string[];
};

/** A sentence with one gap. `answer` is the exact string that fills it. */
export type GapPayload = {
  before: string;
  after: string;
  /** Buttons to choose from. Without these it becomes a typed answer. */
  options?: string[];
};

/** der / die / das for one noun. `answer` is one of the three. */
export type ArticlePayload = { noun: string };

/** `answer` is true or false. */
export type TrueFalsePayload = { statement: string };

/** Put the words in order. `answer` is the correct sequence. */
export type OrderPayload = { words: string[] };

/* ------------------------------------------------------------------ */
/* Authoring helpers                                                    */
/*                                                                      */
/* These exist so a lesson file reads as content, not as type noise —   */
/* and so `answer` can never drift out of range of `options`.           */
/* ------------------------------------------------------------------ */

type Base = {
  id: string;
  difficulty: 1 | 2 | 3;
  tags: string[];
  prompt: Multi;
  explanation: Multi;
};

export function mc(
  e: Base & { german?: string; options: string[]; answer: number },
): Exercise {
  if (e.answer < 0 || e.answer >= e.options.length) {
    throw new Error(`Exercise ${e.id}: answer index is outside options.`);
  }
  return {
    id: e.id,
    kind: "mc",
    difficulty: e.difficulty,
    tags: e.tags,
    prompt: e.prompt,
    payload: { german: e.german, options: e.options } satisfies McPayload,
    answer: e.answer,
    explanation: e.explanation,
  };
}

export function gap(
  e: Base & {
    before: string;
    after: string;
    options?: string[];
    answer: string;
  },
): Exercise {
  if (e.options && !e.options.includes(e.answer)) {
    throw new Error(`Exercise ${e.id}: answer is not one of the options.`);
  }
  return {
    id: e.id,
    kind: "gap",
    difficulty: e.difficulty,
    tags: e.tags,
    prompt: e.prompt,
    payload: {
      before: e.before,
      after: e.after,
      options: e.options,
    } satisfies GapPayload,
    answer: e.answer,
    explanation: e.explanation,
  };
}

export function article(
  e: Base & { noun: string; answer: "der" | "die" | "das" },
): Exercise {
  return {
    id: e.id,
    kind: "article",
    difficulty: e.difficulty,
    tags: e.tags,
    prompt: e.prompt,
    payload: { noun: e.noun } satisfies ArticlePayload,
    answer: e.answer,
    explanation: e.explanation,
  };
}

export function truefalse(
  e: Base & { statement: string; answer: boolean },
): Exercise {
  return {
    id: e.id,
    kind: "truefalse",
    difficulty: e.difficulty,
    tags: e.tags,
    prompt: e.prompt,
    payload: { statement: e.statement } satisfies TrueFalsePayload,
    answer: e.answer,
    explanation: e.explanation,
  };
}

export function order(
  e: Base & { words: string[]; answer: string[] },
): Exercise {
  const a = [...e.words].sort().join("|");
  const b = [...e.answer].sort().join("|");
  if (a !== b) {
    throw new Error(`Exercise ${e.id}: answer uses different words than words.`);
  }
  return {
    id: e.id,
    kind: "order",
    difficulty: e.difficulty,
    tags: e.tags,
    prompt: e.prompt,
    // Shown shuffled by the engine; stored in a fixed order so the render
    // is stable between server and client.
    payload: { words: e.words } satisfies OrderPayload,
    answer: e.answer,
    explanation: e.explanation,
  };
}

/** A lesson plus the metadata the list page needs. */
export type LessonSummary = Pick<
  GrammarLesson,
  "slug" | "category" | "telcWeight" | "title" | "telcRelevance"
> & { exerciseCount: number };
