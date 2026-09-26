import { les01 } from "./set-01";
import { les02 } from "./set-02";
import { les03 } from "./set-03";
import { les04 } from "./set-04";
import { les05 } from "./set-05";
import { les06 } from "./set-06";
import { les07 } from "./set-07";
import { les08 } from "./set-08";
import { les09 } from "./set-09";
import { tokenize, type LesenSet } from "./types";

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

export const LESEN_SETS: LesenSet[] = [les01, les02, les03, les04, les05, les06, les07, les08, les09];

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

/** Compare quotes loosely: punctuation and spacing vary, wording must not. */
function normalise(s: string): string {
  return s.toLowerCase().replace(/[.,;:!?»«"'…–—]/g, "").replace(/\s+/g, " ").trim();
}

/** Multi-word German phrases an explanation quotes from the material. */
function quotedParts(why: string): string[] {
  const out: string[] = [];
  for (const m of why.matchAll(/»([^«]+)«/g))
    for (const part of m[1].split("…")) {
      const t = part.trim();
      if (t.includes(" ") && t.length >= 18) out.push(t);
    }
  return out;
}

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

  // An answer key that runs a, b, c, d, e — or a Teil 2 where one option
  // is right four times out of five — can be solved without reading any
  // German at all. An audit found exactly that in the first two sets, and
  // nothing in the type system or the other checks could see it, so the
  // pattern itself gets checked from here on.
  const t1Keys = set.teil1.texts.map((t) => t.answerKey);
  const alphabet = "abcdefghij";
  if (t1Keys.join("") === alphabet.slice(0, t1Keys.length)) {
    p(`Teil 1 answers run ${t1Keys.join("")} — solvable without reading. Reorder the headings.`);
  }

  // Teil 3 has the same failure mode: ten situations answered a, b, c, d …
  // in order are ten free points. The "x" answers are skipped, since they
  // are not part of the letter sequence.
  const t3Keys = set.teil3.situations.map((s) => s.answerKey).filter((k) => k !== "x");
  const runsInOrder =
    t3Keys.length > 3 &&
    t3Keys.every((k, i) => i === 0 || alphabet.indexOf(k) > alphabet.indexOf(t3Keys[i - 1]));
  if (runsInOrder) {
    p(`Teil 3 answers climb ${t3Keys.join("")} — reorder the adverts.`);
  }

  const t2 = set.teil2.questions.map((q) => q.answerIndex);
  for (const opt of [0, 1, 2] as const) {
    const n = t2.filter((a) => a === opt).length;
    if (n > 3) {
      p(`Teil 2: option ${"abc"[opt]} is the answer ${n} times out of ${t2.length} — guessable.`);
    }
  }

  // A glossary entry whose word never occurs in the set is invisible: the
  // learner taps a word, the lookup misses, and nothing happens. Silent
  // again — so it gets checked.
  const allText = [
    ...set.teil1.texts.map((t) => t.text),
    set.teil2.heading,
    set.teil2.text,
    ...set.teil2.questions.flatMap((q) => [q.question, ...q.options]),
    ...set.teil3.anzeigen.flatMap((a) => [a.title, a.text]),
    ...set.teil3.situations.map((s) => s.text),
  ].join(" ");
  const words = new Set(tokenize(allText).map((t) => t.word.toLowerCase()));
  for (const entry of set.glossary) {
    if (!words.has(entry.word.toLowerCase())) {
      p(`glossary word "${entry.word}" never appears in the texts.`);
    }
  }

  // An explanation that quotes the text is only worth reading if the quote
  // is really there. Rewriting a text — or reordering the adverts — can
  // leave a quote pointing at words the learner will never find, so every
  // German quote is checked against the German material.
  const corpus = normalise(
    [
      ...set.teil1.texts.map((t) => t.text),
      ...set.teil1.headings.map((h) => h.text),
      set.teil2.heading,
      set.teil2.text,
      ...set.teil2.questions.flatMap((q) => [q.question, ...q.options]),
      ...set.teil3.anzeigen.flatMap((a) => [a.title, a.text]),
      ...set.teil3.situations.map((x) => x.text),
    ].join(" · "),
  );
  const whys: [string, string][] = [
    ...set.teil1.texts.map((t) => [`text ${t.nr}`, t.why.de ?? ""] as [string, string]),
    ...set.teil2.questions.map((q) => [`question ${q.nr}`, q.why.de ?? ""] as [string, string]),
    ...set.teil3.situations.map((x) => [`situation ${x.nr}`, x.why.de ?? ""] as [string, string]),
  ];
  for (const [where, why] of whys)
    for (const part of quotedParts(why))
      if (!corpus.includes(normalise(part)))
        p(`${where}: the explanation quotes "${part}", which is not in the material.`);
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
