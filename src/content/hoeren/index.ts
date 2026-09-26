import { hoer01 } from "./set-01";
import { hoer02 } from "./set-02";
import { hoer03 } from "./set-03";
import { hoer04 } from "./set-04";
import { hoer05 } from "./set-05";
import { hoer06 } from "./set-06";
import { hoer07 } from "./set-07";
import { hoer08 } from "./set-08";
import { hoer09 } from "./set-09";
import { hoerItems, type HoerSet } from "./types";

export type { HoerSet, HoerTeil, HoerTrack, HoerItem } from "./types";
export {
  hoerItems,
  HOER_TOTAL_ITEMS,
  HOER_TOTAL_POINTS,
  HOER_POINTS_PER_ITEM,
} from "./types";

export const HOER_SETS: HoerSet[] = [hoer01, hoer02, hoer03, hoer04, hoer05, hoer06, hoer07, hoer08, hoer09];

export function getHoerSet(code: string): HoerSet | undefined {
  return HOER_SETS.find((s) => s.code === code);
}

/**
 * Check a set against the telc format.
 *
 * Same reasoning as the other papers: a missing item renders as nothing
 * rather than as an error, so it gets checked rather than eyeballed.
 */
/** Compare quotes loosely: punctuation and spacing vary, wording must not. */
function normalise(s: string): string {
  return s.toLowerCase().replace(/[.,;:!?»«"'\u2026]/g, "").replace(/\s+/g, " ").trim();
}

/**
 * The German phrases an explanation quotes from the recording.
 *
 * Only multi-word quotes are returned: a single quoted word is usually a
 * grammar term ("erst", "weder \u2026 noch") rather than a citation, and an
 * ellipsis inside a quote marks an omission, so each side is checked
 * separately.
 */
function quotedParts(why: string): string[] {
  const out: string[] = [];
  for (const m of why.matchAll(/\u00bb([^\u00ab]+)\u00ab/g)) {
    for (const part of m[1].split("\u2026")) {
      const t = part.trim();
      if (t.includes(" ") && t.length >= 18) out.push(t);
    }
  }
  return out;
}

export function validateHoerSet(set: HoerSet): string[] {
  const problems: string[] = [];
  const p = (m: string) => problems.push(`${set.code}: ${m}`);

  const expected = { 1: { items: 5, plays: 1 }, 2: { items: 10, plays: 1 }, 3: { items: 5, plays: 2 } };

  for (const teil of set.teile) {
    const want = expected[teil.teil];
    const got = teil.tracks.reduce((n, t) => n + t.items.length, 0);
    if (got !== want.items) p(`Teil ${teil.teil} has ${got} items, expected ${want.items}.`);
    if (teil.maxPlays !== want.plays) {
      p(`Teil ${teil.teil} allows ${teil.maxPlays} plays, telc allows ${want.plays}.`);
    }
    for (const track of teil.tracks) {
      if (!track.transcript.trim()) p(`track ${track.id} has an empty transcript.`);
      // Digits are read inconsistently by speech engines, so transcripts
      // must spell numbers out. A stray digit means a learner listens for
      // a word the voice never says.
      if (/\d/.test(track.transcript)) {
        p(`track ${track.id} contains digits — write numbers as words.`);
      }
    }
  }

  const nrs = hoerItems(set).map((i) => i.nr);
  for (let n = 1; n <= 20; n++) {
    if (!nrs.includes(n)) p(`item ${n} is missing.`);
  }
  const dupes = nrs.filter((n, i) => nrs.indexOf(n) !== i);
  if (dupes.length) p(`duplicate item numbers: ${dupes.join(", ")}.`);

  // An explanation quotes the recording to prove its point. Edit a
  // transcript and the quote can silently become something nobody says —
  // which is worse than no explanation, because the learner replays the
  // audio looking for words that were never there. So every German quote
  // of any length must still be findable in its own track.
  for (const teil of set.teile) {
    for (const track of teil.tracks) {
      const spoken = normalise(track.transcript);
      for (const item of track.items) {
        for (const part of quotedParts(item.why.de ?? "")) {
          if (!spoken.includes(normalise(part))) {
            p(`item ${item.nr}: the explanation quotes "${part}", which is not in the recording.`);
          }
        }
      }
    }
  }

  // With only two possible answers, a lopsided paper is a free 70 %: tick
  // everything "falsch" and pass. The same audit that caught the
  // Sprachbausteine pattern added this one.
  const richtig = hoerItems(set).filter((i) => i.answer).length;
  if (richtig < 7 || richtig > 13) {
    p(`${richtig} of 20 items are richtig — too lopsided to practise against.`);
  }

  return problems;
}

export function validateAllHoerSets(): string[] {
  return HOER_SETS.flatMap(validateHoerSet);
}
