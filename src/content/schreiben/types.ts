import type { Multi } from "@/lib/types";

/**
 * A telc-B1-format writing task.
 *
 * ALL of these are ORIGINAL material written in the telc format. None is a
 * licensed telc exam question, and the UI always labels them as practice.
 *
 * The real exam gives one semi-formal letter with exactly four Leitpunkte
 * and about 30 minutes. These match that shape.
 */
export type SchreibenTask = {
  /** SCH-01 … */
  code: string;
  category:
    | "einladung"
    | "beschwerde"
    | "absage"
    | "bitte"
    | "entschuldigung"
    | "termin"
    | "wohnung"
    | "kurs"
    | "bewerbung";
  register: "formell" | "halbformell" | "informell";
  /** Who you are writing to and why, in the learner's language. */
  situation: Multi;
  /** The German task text, as it would appear on the exam sheet. */
  taskDe: string;
  /** telc B1 always gives exactly four. */
  leitpunkte: [string, string, string, string];
  /** Opening and closing that suit this register. */
  anrede: string;
  gruss: string;
  usefulPhrases: { de: string; note: Multi }[];
  targetWords: number;
  /** A model answer that would score well — not a perfect one. */
  modelAnswerDe: string;
  /** Why the model answer works, for the results page. */
  modelNotes: Multi;
};
