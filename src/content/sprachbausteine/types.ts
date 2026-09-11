import type { Multi } from "@/lib/types";

/**
 * Sprachbausteine — the telc B1 "language elements" section.
 *
 * Verified format: 30 points, 20 items, two parts.
 *   Teil 1 — 10 gaps, three options each (a/b/c). Grammar: cases,
 *            prepositions, connectors, verb forms, word order.
 *   Teil 2 — 10 gaps filled from a shared bank of 15 words (a–o).
 *            Vocabulary and fixed expressions. Five words are never used,
 *            and each word can be used only once — which is what makes it
 *            harder than it looks.
 *
 * Lesen and Sprachbausteine share one self-paced 90-minute block, so the
 * timing here is a guideline rather than a hard limit.
 */

export type SbTeil1Item = {
  /** Gap number as printed, 1–10. */
  nr: number;
  /** Exactly three options, as in the real exam. */
  options: [string, string, string];
  answerIndex: 0 | 1 | 2;
  /** Precise mistake tag, shared with the grammar lessons. */
  tag: string;
  /** Why the right one is right AND why the other two are wrong. */
  why: Multi;
};

export type SbTeil2Item = {
  nr: number;
  /** The key into the bank, 'a'–'o'. */
  answerKey: string;
  tag: string;
  why: Multi;
};

export type SbBankEntry = {
  key: string;
  word: string;
};

export type SbSet = {
  code: string;
  title: Multi;
  /** What the learner is about to read, in their own language. */
  intro: Multi;

  teil1: {
    /** Heading of the text, as it would be printed. */
    heading: string;
    /**
     * The text with `{1}` … `{10}` marking the gaps. Rendered by splitting
     * on those markers, so the content stays plain data.
     */
    text: string;
    items: SbTeil1Item[];
  };

  teil2: {
    heading: string;
    text: string;
    /** Exactly 15 entries; only 10 are ever correct. */
    bank: SbBankEntry[];
    items: SbTeil2Item[];
  };
};

/** One point per item, 30 points across 20 items — 1.5 per item. */
export const SB_POINTS_PER_ITEM = 1.5;
export const SB_TOTAL_ITEMS = 20;
export const SB_TOTAL_POINTS = 30;

/** Split a gapped text into literal pieces and gap numbers. */
export function splitGaps(text: string): Array<string | number> {
  const out: Array<string | number> = [];
  const re = /\{(\d+)\}/g;
  let last = 0;
  let m: RegExpExecArray | null;

  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    out.push(Number(m[1]));
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}
