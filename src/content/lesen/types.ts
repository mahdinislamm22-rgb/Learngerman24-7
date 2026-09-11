import type { Multi } from "@/lib/types";

/**
 * Leseverstehen — the telc B1 reading paper.
 *
 * Verified format: 75 points, 20 items, three parts.
 *   Teil 1 — 5 short texts, each matched to one of 10 headings. Five
 *            headings are never used.
 *   Teil 2 — one longer text with 5 multiple-choice questions (a/b/c).
 *   Teil 3 — 10 everyday situations matched to 12 small adverts (a–l).
 *            One or more situations have NO matching advert; those are
 *            answered "x". That is the part candidates lose most on,
 *            because an advert that is nearly right is still wrong.
 *
 * Lesen and Sprachbausteine share one self-paced 90-minute block.
 */

export type GlossaryEntry = {
  /** The word exactly as it appears in the text, lower-cased for lookup. */
  word: string;
  /** Dictionary form, when it differs — shown so it can be looked up again. */
  base?: string;
  /** Article for nouns, so the word is learnt with its gender. */
  article?: "der" | "die" | "das";
  meaning: Multi;
};

export type LesenTeil1Text = {
  /** Label printed next to the text: 1–5. */
  nr: number;
  text: string;
  /** Key of the correct heading, 'a'–'j'. */
  answerKey: string;
  why: Multi;
};

export type LesenHeading = { key: string; text: string };

export type LesenTeil2Question = {
  nr: number;
  question: string;
  options: [string, string, string];
  answerIndex: 0 | 1 | 2;
  why: Multi;
};

export type LesenSituation = {
  nr: number;
  text: string;
  /** 'a'–'l' for an advert, or 'x' when nothing fits. */
  answerKey: string;
  why: Multi;
};

export type LesenAnzeige = { key: string; title: string; text: string };

export type LesenSet = {
  code: string;
  title: Multi;
  intro: Multi;

  teil1: {
    instruction: Multi;
    /** Exactly 10; only 5 are ever correct. */
    headings: LesenHeading[];
    texts: LesenTeil1Text[];
  };

  teil2: {
    instruction: Multi;
    heading: string;
    text: string;
    questions: LesenTeil2Question[];
  };

  teil3: {
    instruction: Multi;
    /** Exactly 12, labelled a–l. */
    anzeigen: LesenAnzeige[];
    situations: LesenSituation[];
  };

  /** Words worth tapping, gathered from all three parts. */
  glossary: GlossaryEntry[];
};

export const LESEN_TOTAL_ITEMS = 20;
export const LESEN_TOTAL_POINTS = 75;
export const LESEN_POINTS_PER_ITEM = LESEN_TOTAL_POINTS / LESEN_TOTAL_ITEMS; // 3.75

/**
 * Split a German text into words and the punctuation between them.
 *
 * Used to make every word tappable. Keeping the separators in the output
 * means the text can be rebuilt exactly as written — no lost spacing, no
 * lost punctuation, and no guessing where a sentence ended.
 */
export function tokenize(text: string): Array<{ word: string; sep: string }> {
  const out: Array<{ word: string; sep: string }> = [];
  // German letters plus the ones that actually occur inside words.
  const re = /([A-Za-zÄÖÜäöüß][A-Za-zÄÖÜäöüß-]*)|([^A-Za-zÄÖÜäöüß]+)/g;
  let m: RegExpExecArray | null;
  let pending: { word: string; sep: string } | null = null;

  while ((m = re.exec(text)) !== null) {
    if (m[1] !== undefined) {
      if (pending) out.push(pending);
      pending = { word: m[1], sep: "" };
    } else if (pending) {
      pending.sep += m[2];
    } else {
      out.push({ word: "", sep: m[2] });
    }
  }
  if (pending) out.push(pending);
  return out;
}

/** Look a word up, tolerating case and a trailing full stop. */
export function lookup(
  glossary: GlossaryEntry[],
  word: string,
): GlossaryEntry | undefined {
  const needle = word.toLowerCase();
  return glossary.find((g) => g.word.toLowerCase() === needle);
}
