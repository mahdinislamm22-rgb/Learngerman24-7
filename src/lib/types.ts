/**
 * Core content types.
 *
 * The whole teaching philosophy rests on one idea: an explainable string
 * is never a `string`. It is a `Multi` — the same idea in German and in
 * the three languages the learner actually thinks in.
 */

export const LANGS = ["de", "en", "it", "bn"] as const;
export type Lang = (typeof LANGS)[number];

/** Explanation language the learner can switch to. German is optional
 *  because some explanations only make sense in a language they know. */
export type Multi = {
  de?: string;
  en: string;
  it: string;
  bn: string;
};

export const LANG_LABELS: Record<Lang, { flag: string; name: string; short: string }> = {
  de: { flag: "🇩🇪", name: "Deutsch", short: "DE" },
  en: { flag: "🇬🇧", name: "English", short: "EN" },
  it: { flag: "🇮🇹", name: "Italiano", short: "IT" },
  bn: { flag: "🇧🇩", name: "বাংলা", short: "BN" },
};

/** Read a Multi in the chosen language, falling back sensibly rather
 *  than showing an empty box. */
export function pick(m: Multi | undefined, lang: Lang): string {
  if (!m) return "";
  return m[lang] ?? m.en ?? m.de ?? "";
}

/* ------------------------------------------------------------------ */
/* Grammar                                                             */
/* ------------------------------------------------------------------ */

export type Comparison = {
  german: string;
  /** Why the structures differ — this is the point, not the translation. */
  why: Multi;
  bengali?: string;
  english?: string;
  italian?: string;
};

export type GrammarTable = {
  caption: Multi;
  headers: string[];
  rows: string[][];
  /** Explains the table instead of expecting blind memorisation. */
  note?: Multi;
};

/**
 * A memory shortcut. `counterExample` and `isShortcut` are NOT optional:
 * a trick cannot be authored without stating where it breaks, and the UI
 * cannot render one without the "not the full rule" badge. Requirement
 * #31 enforced by the type system rather than by good intentions.
 */
export type CheatCode = {
  rule: string;
  meaning: Multi;
  example: string;
  counterExample: string;
  memoryTrick: Multi;
  examTip: Multi;
  isShortcut: true;
};

export type CommonMistake = {
  wrong: string;
  right: string;
  why: Multi;
};

export type ExerciseKind =
  | "mc"
  | "gap"
  | "wordbank"
  | "match"
  | "truefalse"
  | "order"
  | "article";

export type Exercise = {
  id: string;
  kind: ExerciseKind;
  difficulty: 1 | 2 | 3;
  /** Precise mistake tags, e.g. "wechselpraeposition-akkusativ" — this is
   *  what turns wrong answers into a Mistake Bank entry. */
  tags: string[];
  prompt: Multi;
  payload: Record<string, unknown>;
  answer: unknown;
  /** Why the right answer is right AND why each distractor is wrong. */
  explanation: Multi;
};

export type GrammarLesson = {
  slug: string;
  category: "kasus" | "verben" | "satzbau" | "wortarten";
  level: "a0" | "b1";
  /** 1–3. Drives study-plan priority. */
  telcWeight: 1 | 2 | 3;
  title: Multi;
  telcRelevance: Multi;
  whatIsIt: Multi;
  whyNeeded: Multi;
  simple: Multi;
  compare: Comparison[];
  pattern: Multi;
  tables: GrammarTable[];
  memoryTricks: CheatCode[];
  cheatCodes: CheatCode[];
  commonMistakes: CommonMistake[];
  exercises: { mini: Exercise[]; medium: Exercise[]; hard: Exercise[] };
  quickTest: Exercise[];
};

/* ------------------------------------------------------------------ */
/* Writing                                                             */
/* ------------------------------------------------------------------ */

export type WritingTask = {
  code: string;
  category: string;
  register: "formell" | "halbformell" | "informell";
  situation: Multi;
  taskDe: string;
  /** telc B1 always gives exactly four. */
  leitpunkte: [string, string, string, string];
  usefulPhrases: { de: string; note: Multi }[];
  targetWords: number;
  modelAnswerDe: string;
};

export type CorrectionCategory =
  | "artikel"
  | "kasus"
  | "praeposition"
  | "wortstellung"
  | "verbform"
  | "wortschatz"
  | "rechtschreibung"
  | "konnektor"
  | "register";

export type Correction = {
  original: string;
  corrected: string;
  category: CorrectionCategory;
  tag: string;
  why: Multi;
};

export type WritingFeedback = {
  scores: {
    inhalt: number;
    kommunikation: number;
    grammatik: number;
    wortschatz: number;
    total: number;
  };
  leitpunkte: { index: number; covered: boolean; comment: Multi }[];
  corrections: Correction[];
  betterB1Version: string;
  recurringPattern: Multi;
  recommendedTopics: string[];
};
