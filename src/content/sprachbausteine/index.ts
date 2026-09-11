import { sb01 } from "./set-01";
import { sb02 } from "./set-02";
import { splitGaps, type SbSet } from "./types";

export type { SbSet, SbTeil1Item, SbTeil2Item, SbBankEntry } from "./types";
export {
  splitGaps,
  SB_POINTS_PER_ITEM,
  SB_TOTAL_ITEMS,
  SB_TOTAL_POINTS,
} from "./types";

export const SB_SETS: SbSet[] = [sb01, sb02];

export function getSbSet(code: string): SbSet | undefined {
  return SB_SETS.find((s) => s.code === code);
}

/**
 * Check a set against the telc format and against itself.
 *
 * A gap that exists in the items but not in the text renders as nothing at
 * all — the exercise silently has nine questions instead of ten, and
 * nobody notices until a learner is confused. That happened while writing
 * these, so the check is part of the module rather than a note in a
 * README.
 *
 * Returns a list of problems; an empty list means the set is sound.
 */
export function validateSet(set: SbSet): string[] {
  const problems: string[] = [];

  const gapsIn = (text: string) =>
    splitGaps(text).filter((p): p is number => typeof p === "number");

  // --- Teil 1: ten gaps, numbered 1–10, three options each -------------
  const t1Text = gapsIn(set.teil1.text);
  const t1Items = set.teil1.items.map((i) => i.nr);

  if (t1Items.length !== 10) {
    problems.push(`${set.code} Teil 1: ${t1Items.length} items, expected 10.`);
  }
  for (const nr of t1Items) {
    if (!t1Text.includes(nr)) {
      problems.push(`${set.code}: item ${nr} has no gap {${nr}} in the Teil 1 text.`);
    }
  }
  for (const nr of t1Text) {
    if (!t1Items.includes(nr)) {
      problems.push(`${set.code}: gap {${nr}} in the Teil 1 text has no item.`);
    }
  }
  for (const item of set.teil1.items) {
    if (item.options.length !== 3) {
      problems.push(`${set.code} item ${item.nr}: needs exactly 3 options.`);
    }
    if (new Set(item.options).size !== item.options.length) {
      problems.push(`${set.code} item ${item.nr}: duplicate options.`);
    }
  }

  // --- Teil 2: ten gaps numbered 11–20, fifteen bank words -------------
  const t2Text = gapsIn(set.teil2.text);
  const t2Items = set.teil2.items.map((i) => i.nr);

  if (t2Items.length !== 10) {
    problems.push(`${set.code} Teil 2: ${t2Items.length} items, expected 10.`);
  }
  if (set.teil2.bank.length !== 15) {
    problems.push(
      `${set.code} Teil 2: bank has ${set.teil2.bank.length} words, expected 15.`,
    );
  }
  for (const nr of t2Items) {
    if (!t2Text.includes(nr)) {
      problems.push(`${set.code}: item ${nr} has no gap {${nr}} in the Teil 2 text.`);
    }
  }
  for (const nr of t2Text) {
    if (!t2Items.includes(nr)) {
      problems.push(`${set.code}: gap {${nr}} in the Teil 2 text has no item.`);
    }
  }

  const keys = new Set(set.teil2.bank.map((b) => b.key));
  const used = new Set<string>();
  for (const item of set.teil2.items) {
    if (!keys.has(item.answerKey)) {
      problems.push(`${set.code} item ${item.nr}: answer "${item.answerKey}" is not in the bank.`);
    }
    // Each bank word may be used only once — that is the whole difficulty
    // of Teil 2, and a repeated answer would make the exercise unsolvable.
    if (used.has(item.answerKey)) {
      problems.push(`${set.code}: bank word "${item.answerKey}" is the answer twice.`);
    }
    used.add(item.answerKey);
  }

  return problems;
}

export function validateAllSets(): string[] {
  return SB_SETS.flatMap(validateSet);
}

/** Find one item by set code and gap number, for server-side grading. */
export function findSbItem(code: string, nr: number) {
  const set = getSbSet(code);
  if (!set) return undefined;

  const t1 = set.teil1.items.find((i) => i.nr === nr);
  if (t1) {
    return {
      teil: 1 as const,
      tag: t1.tag,
      why: t1.why,
      answer: t1.options[t1.answerIndex],
      answerIndex: t1.answerIndex,
    };
  }

  const t2 = set.teil2.items.find((i) => i.nr === nr);
  if (t2) {
    const word = set.teil2.bank.find((b) => b.key === t2.answerKey)?.word ?? "";
    return {
      teil: 2 as const,
      tag: t2.tag,
      why: t2.why,
      answer: t2.answerKey,
      answerWord: word,
    };
  }

  return undefined;
}
