import { hoer01 } from "./set-01";
import { hoerItems, type HoerSet } from "./types";

export type { HoerSet, HoerTeil, HoerTrack, HoerItem } from "./types";
export {
  hoerItems,
  HOER_TOTAL_ITEMS,
  HOER_TOTAL_POINTS,
  HOER_POINTS_PER_ITEM,
} from "./types";

export const HOER_SETS: HoerSet[] = [hoer01];

export function getHoerSet(code: string): HoerSet | undefined {
  return HOER_SETS.find((s) => s.code === code);
}

/**
 * Check a set against the telc format.
 *
 * Same reasoning as the other papers: a missing item renders as nothing
 * rather than as an error, so it gets checked rather than eyeballed.
 */
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

  return problems;
}

export function validateAllHoerSets(): string[] {
  return HOER_SETS.flatMap(validateHoerSet);
}
