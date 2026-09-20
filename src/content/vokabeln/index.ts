import { CORE_WORDS } from "./core";
import { B1_WORDS } from "./b1-wordlist";
import { THEMES, type Theme, type VocabWord } from "./types";
import { les01 } from "@/content/lesen/set-01";
import { TRAINER_WORDS } from "@/content/grammatik/artikel-nomen";

export type { VocabWord, Theme } from "./types";
export { THEMES } from "./types";
export { CORE_WORDS } from "./core";
export { B1_WORDS } from "./b1-wordlist";

/**
 * Every word the app teaches, in one place.
 *
 * Three sources feed this, and that is the point: a word you met in a
 * reading text, a noun you drilled in the article trainer and a word from
 * the core exam list are all the same word. Keeping three separate lists
 * would mean learning "die Bescheinigung" three times and tracking it
 * nowhere.
 *
 * Precedence is deliberate. A core entry wins over a glossary entry,
 * because the core list carries an example sentence and the glossary
 * carries only the meaning that fitted one text.
 */

/** Words that appear in the reading paper, with the meaning used there. */
function fromLesen(): VocabWord[] {
  return les01.glossary.map((g) => ({
    // Prefer the dictionary form; the inflected form is what was in the text.
    de: (g.base ?? g.word).replace(/^(der|die|das)\s+/, ""),
    article: g.article,
    meaning: g.meaning,
    example: importedExample(g.base ?? g.word, guessTheme(g.base ?? g.word)),
    theme: guessTheme(g.base ?? g.word),
    priority: 2 as const,
    seenIn: `Lesen ${les01.code}`,
  }));
}

/** Nouns from the der/die/das trainer. */
function fromTrainer(): VocabWord[] {
  return TRAINER_WORDS.map((n) => ({
    de: n.de,
    article: n.article,
    meaning: n.meaning,
    example: importedExample(n.de, guessTheme(n.de)),
    theme: guessTheme(n.de),
    priority: (n.level === 1 ? 1 : n.level === 2 ? 2 : 3) as 1 | 2 | 3,
    seenIn: "Artikeltrainer",
  }));
}

/**
 * Imported vocabulary has meaning and context, but not always a sentence.
 * Keep the fallback grammatical for every part of speech while still making
 * it useful as a model for formal B1 vocabulary study.
 */
function importedExample(word: string, theme: Theme): string {
  const contexts: Record<Theme, string> = {
    arbeit: "Arbeit und Beruf",
    wohnen: "Wohnen",
    gesundheit: "Gesundheit",
    behoerden: "Ämter und Formulare",
    ausbildung: "Ausbildung und Schule",
    reisen: "Reisen und Verkehr",
    einkaufen: "Einkaufen und Geld",
    freizeit: "Freizeit und Kontakte",
    umwelt: "Umwelt und Wetter",
    gefuehle: "Meinungen und Gefühlen",
    verben: "den Alltag",
    konnektoren: "schriftliche Kommunikation",
  };

  return `Der Ausdruck „${word}“ wird häufig im Zusammenhang mit ${contexts[theme]} verwendet.`;
}

/**
 * Put an imported word into a theme.
 *
 * Deliberately crude: it only has to be good enough to make the theme
 * filter useful. Anything it cannot place lands in "verben" or the closest
 * everyday theme rather than inventing a category nobody browses.
 */
function guessTheme(word: string): Theme {
  const s = word.toLowerCase();
  if (/arbeit|beruf|stelle|kolleg|lehrer|vermieter|chef|kellner|praktik|bewerb|lebenslauf/.test(s)) return "arbeit";
  if (/wohn|miete|haus|zimmer|tür|fenster|heizung|nachbar|küche|bett|stock/.test(s)) return "wohnen";
  if (/arzt|kranken|apotheke|gesund|praxis|medizin/.test(s)) return "gesundheit";
  if (/amt|formular|antrag|ausweis|anmeld|bescheinig|zeugnis|abschluss|anerkenn|beratung/.test(s)) return "behoerden";
  if (/schule|kurs|prüfung|lernen|universität|ausbildung|unterricht|sprach|weiterbild/.test(s)) return "ausbildung";
  if (/bahn|zug|bus|flug|reise|fahr|verkehr|straße|weg|gleis/.test(s)) return "reisen";
  if (/kauf|geld|preis|rechnung|markt|euro|zahl/.test(s)) return "einkaufen";
  if (/wetter|regen|sonne|wind|schnee|umwelt|natur|winter|sommer|gewitter/.test(s)) return "umwelt";
  if (/freund|familie|bruder|schwester|mutter|vater|kind|mädchen|frau|mann|essen|musik|freizeit/.test(s)) return "freizeit";
  return "verben";
}

/**
 * The merged list: core words first, then anything from elsewhere in the
 * app that the core list does not already cover.
 */
export const ALL_WORDS: VocabWord[] = (() => {
  const byWord = new Map<string, VocabWord>();

  for (const word of CORE_WORDS) byWord.set(key(word.de), word);

  for (const word of [...B1_WORDS, ...fromLesen(), ...fromTrainer()]) {
    const k = key(word.de);
    if (!byWord.has(k)) byWord.set(k, word);
  }

  return [...byWord.values()].sort(
    (a, b) => a.priority - b.priority || a.de.localeCompare(b.de, "de"),
  );
})();

function key(de: string): string {
  return de.toLowerCase().replace(/\s+/g, " ").trim();
}

export function wordsByTheme(theme: Theme): VocabWord[] {
  return ALL_WORDS.filter((w) => w.theme === theme);
}

export function themeCounts(): { theme: Theme; count: number }[] {
  return THEMES.map((t) => ({
    theme: t.key,
    count: ALL_WORDS.filter((w) => w.theme === t.key).length,
  }));
}

export function findWord(de: string): VocabWord | undefined {
  return ALL_WORDS.find((w) => key(w.de) === key(de));
}

/**
 * A study set: the highest-priority words first, and anything the learner
 * has already got right several times pushed to the back.
 */
export function studySet(
  known: Map<string, number>,
  theme: Theme | "alle",
  count = 20,
): VocabWord[] {
  const pool = theme === "alle" ? ALL_WORDS : wordsByTheme(theme);

  const weight = (word: VocabWord) => {
    const streak = known.get(key(word.de)) ?? 0;
    // Priority decides first; a long streak demotes a word without ever
    // removing it, because vocabulary that is never seen again is lost.
    return word.priority * 10 + Math.min(streak, 5) * 6;
  };

  return [...pool].sort((a, b) => weight(a) - weight(b)).slice(0, count);
}
