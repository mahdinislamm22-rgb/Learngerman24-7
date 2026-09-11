import type { Multi } from "@/lib/types";

/**
 * Hörverstehen — the telc B1 listening paper.
 *
 * Verified format: 75 points, 20 items, three parts, every item
 * richtig/falsch.
 *   Teil 1 — 5 short announcements and messages, played ONCE.
 *   Teil 2 — one longer conversation, 10 items, played ONCE.
 *   Teil 3 — 5 short announcements, played TWICE.
 *
 * There are no audio files. The recordings are produced in the browser by
 * the speech engine the operating system already has, from the transcripts
 * below. That is an honest trade: a synthetic voice is flatter and more
 * evenly paced than a real speaker, so it is easier than the exam. It
 * costs nothing, needs no account, and works offline — and practising
 * against it still builds the thing that actually fails people, which is
 * catching a detail in one pass without a transcript.
 *
 * Write transcripts the way they will be SPOKEN. Numbers as words
 * ("vierzehn Uhr zwanzig", not "14:20"), because a speech engine reads
 * digits inconsistently across platforms and a learner would be listening
 * for a word the voice never says.
 */

export type HoerItem = {
  /** 1–20, continuous across the three parts, as on the paper. */
  nr: number;
  /** The statement to judge. Always German — this is a listening test. */
  statement: string;
  answer: boolean;
  /** Which part of the transcript proves it, and why the other reading fails. */
  why: Multi;
};

export type HoerTrack = {
  /** Internal id, used for the play-count limit. */
  id: string;
  /** What the learner is told before it plays, e.g. "Durchsage am Bahnhof". */
  label: Multi;
  /** Spoken text. Numbers written out. */
  transcript: string;
  /** Items belonging to this track. */
  items: HoerItem[];
};

export type HoerTeil = {
  teil: 1 | 2 | 3;
  instruction: Multi;
  /** How many times a track in this part may be played. telc: 1, 1, 2. */
  maxPlays: number;
  tracks: HoerTrack[];
};

export type HoerSet = {
  code: string;
  title: Multi;
  intro: Multi;
  teile: [HoerTeil, HoerTeil, HoerTeil];
};

export const HOER_TOTAL_ITEMS = 20;
export const HOER_TOTAL_POINTS = 75;
export const HOER_POINTS_PER_ITEM = HOER_TOTAL_POINTS / HOER_TOTAL_ITEMS; // 3.75

/** Every item of a set, in paper order. */
export function hoerItems(set: HoerSet) {
  return set.teile.flatMap((t) =>
    t.tracks.flatMap((track) =>
      track.items.map((i) => ({ ...i, teil: t.teil, trackId: track.id })),
    ),
  );
}
