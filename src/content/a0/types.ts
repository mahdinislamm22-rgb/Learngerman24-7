import type { Multi } from "@/lib/types";

/**
 * A0 lesson shapes.
 *
 * Deliberately simpler than the B1 `GrammarLesson`: a complete beginner
 * needs a short sequence of small blocks, not a twenty-part structure.
 * Same principle though — content is data, never JSX.
 */

export type A0Word = {
  de: string;
  /** Article for nouns; omitted for everything else. */
  article?: "der" | "die" | "das";
  ipa?: string;
  /** How to say it, written for a Bengali/Italian/English speaker. */
  sayIt?: string;
  meaning: Multi;
  example?: string;
  exampleMeaning?: Multi;
};

export type A0Block =
  | { kind: "text"; body: Multi }
  | { kind: "tip"; body: Multi }
  | { kind: "warn"; body: Multi }
  | { kind: "words"; title?: Multi; words: A0Word[] }
  | {
      kind: "table";
      title?: Multi;
      headers: string[];
      rows: string[][];
      note?: Multi;
    }
  | {
      kind: "compare";
      german: string;
      english?: string;
      italian?: string;
      bengali?: string;
      why: Multi;
    };

export type A0Question = {
  id: string;
  /** The question itself, in the learner's language. */
  ask: Multi;
  /** Optional German prompt shown above the options. */
  german?: string;
  options: string[];
  answerIndex: number;
  why: Multi;
};

export type A0Lesson = {
  slug: string;
  order: number;
  title: Multi;
  goals: Multi[];
  blocks: A0Block[];
  quiz: A0Question[];
};
