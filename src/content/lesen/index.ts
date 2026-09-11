import { les01 } from "./set-01";
import type { LesenSet } from "./types";

export type {
  LesenSet,
  LesenHeading,
  LesenAnzeige,
  LesenTeil1Text,
  LesenTeil2Question,
  LesenSituation,
  GlossaryEntry,
} from "./types";
export {
  tokenize,
  lookup,
  LESEN_TOTAL_ITEMS,
  LESEN_TOTAL_POINTS,
  LESEN_POINTS_PER_ITEM,
} from "./types";

export const LESEN_SETS: LesenSet[] = [les01];

export function getLesenSet(code: string): LesenSet | undefined {
  return LESEN_SETS.find((s) => s.code === code);
}

/** Every item of a set, flattened, in paper order (1–20). */
export function lesenItems(set: LesenSet) {
  return [
    ...set.teil1.texts.map((t) => ({
      nr: t.nr,
      teil: 1 as const,
      answer: t.answerKey,
      why: t.why,
      tag: "lesen-ueberschrift",
    })),
    ...set.teil2.questions.map((q) => ({
      nr: q.nr,
      teil: 2 as const,
      answer: String(q.answerIndex),
      why: q.why,
      tag: "lesen-detail",
    })),
    ...set.teil3.situations.map((s) => ({
      nr: s.nr,
      teil: 3 as const,
      answer: s.answerKey,
      why: s.why,
      tag: "lesen-anzeige",
    })),
  ];
}

/**
 * Check a set against the telc format.
 *
 * The Sprachbausteine sets taught this lesson: a content mistake renders
 * as nothing at all rather than as an error, so it has to be checked
 * rather than reviewed by eye.
 */
export function validateLesenSet(set: LesenSet): string[] {
  const problems: string[] = [];
  const p = (msg: string) => problems.push(`${set.code}: ${msg}`);

  if (set.teil1.texts.length !== 5) p(`Teil 1 has ${set.teil1.texts.length} texts, expected 5.`);
  if (set.teil1.headings.length !== 10) {
    p(`Teil 1 has ${set.teil1.headings.length} headings, expected 10.`);
  }
  if (set.teil2.questions.length !== 5) {
    p(`Teil 2 has ${set.teil2.questions.length} questions, expected 5.`);
  }
  if (set.teil3.anzeigen.length !== 12) {
    p(`Teil 3 has ${set.teil3.anzeigen.length} adverts, expected 12.`);
  }
  if (set.teil3.situations.length !== 10) {
    p(`Teil 3 has ${set.teil3.situations.length} situations, expected 10.`);
  }

  const headingKeys = new Set(set.teil1.headings.map((h) => h.key));
  const usedHeadings = new Set<string>();
  for (const t of set.teil1.texts) {
    if (!headingKeys.has(t.answerKey)) p(`text ${t.nr} answers "${t.answerKey}", not a heading.`);
    // A heading can only be the answer once, or the task is unsolvable.
    if (usedHeadings.has(t.answerKey)) p(`heading "${t.answerKey}" is the answer twice.`);
    usedHeadings.add(t.answerKey);
  }

  const adKeys = new Set(set.teil3.anzeigen.map((a) => a.key));
  const usedAds = new Set<string>();
  for (const s of set.teil3.situations) {
    if (s.answerKey !== "x" && !adKeys.has(s.answerKey)) {
      p(`situation ${s.nr} answers "${s.answerKey}", not an advert.`);
    }
    if (s.answerKey !== "x") {
      if (usedAds.has(s.answerKey)) p(`advert "${s.answerKey}" is the answer twice.`);
      usedAds.add(s.answerKey);
    }
  }

  // Numbering must run 1–20 across the three parts, as on the paper.
  const nrs = lesenItems(set).map((i) => i.nr);
  for (let n = 1; n <= 20; n++) {
    if (!nrs.includes(n)) p(`item ${n} is missing.`);
  }

  return problems;
}

export function validateAllLesenSets(): string[] {
  return LESEN_SETS.flatMap(validateLesenSet);
}
