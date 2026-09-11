import type { Multi } from "@/lib/types";

/**
 * Vocabulary — the words the telc B1 exam actually uses.
 *
 * Chosen by where they appear in the exam, not by frequency in German as a
 * whole. "Bescheinigung" is rare in conversation and common in the reading
 * paper; "schön" is the opposite. This list follows the exam.
 *
 * Every entry carries its article and an example sentence. A noun without
 * its gender is half-learnt, and a word without a sentence is a word you
 * can recognise but not use — and the writing paper needs you to use it.
 */

export type Theme =
  | "arbeit"
  | "wohnen"
  | "gesundheit"
  | "behoerden"
  | "ausbildung"
  | "reisen"
  | "einkaufen"
  | "freizeit"
  | "umwelt"
  | "gefuehle"
  | "verben"
  | "konnektoren";

export type VocabWord = {
  /** The German word, in its dictionary form. */
  de: string;
  article?: "der" | "die" | "das";
  /** Plural, where a B1 candidate is likely to need it. */
  plural?: string;
  meaning: Multi;
  /** One natural sentence, at B1 level, in a situation the exam uses. */
  example: string;
  theme: Theme;
  /**
   * 1 = you will almost certainly meet this in the exam
   * 2 = likely
   * 3 = useful, less certain
   */
  priority: 1 | 2 | 3;
  /** Where the word already appears elsewhere in the app, if it does. */
  seenIn?: string;
};

export const THEMES: { key: Theme; label: Multi }[] = [
  {
    key: "arbeit",
    label: { de: "Arbeit und Beruf", en: "Work and jobs", it: "Lavoro e professione", bn: "কাজ ও পেশা" },
  },
  {
    key: "wohnen",
    label: { de: "Wohnen", en: "Housing", it: "Abitare", bn: "বাসস্থান" },
  },
  {
    key: "gesundheit",
    label: { de: "Gesundheit", en: "Health", it: "Salute", bn: "স্বাস্থ্য" },
  },
  {
    key: "behoerden",
    label: { de: "Ämter und Formulare", en: "Offices and forms", it: "Uffici e moduli", bn: "দপ্তর ও ফর্ম" },
  },
  {
    key: "ausbildung",
    label: { de: "Ausbildung und Schule", en: "Training and school", it: "Formazione e scuola", bn: "প্রশিক্ষণ ও স্কুল" },
  },
  {
    key: "reisen",
    label: { de: "Reisen und Verkehr", en: "Travel and transport", it: "Viaggi e trasporti", bn: "ভ্রমণ ও যাতায়াত" },
  },
  {
    key: "einkaufen",
    label: { de: "Einkaufen und Geld", en: "Shopping and money", it: "Acquisti e denaro", bn: "কেনাকাটা ও টাকা" },
  },
  {
    key: "freizeit",
    label: { de: "Freizeit und Kontakte", en: "Free time and people", it: "Tempo libero e contatti", bn: "অবসর ও সম্পর্ক" },
  },
  {
    key: "umwelt",
    label: { de: "Umwelt und Wetter", en: "Environment and weather", it: "Ambiente e meteo", bn: "পরিবেশ ও আবহাওয়া" },
  },
  {
    key: "gefuehle",
    label: { de: "Meinung und Gefühle", en: "Opinion and feelings", it: "Opinione e sentimenti", bn: "মতামত ও অনুভূতি" },
  },
  {
    key: "verben",
    label: { de: "Wichtige Verben", en: "Key verbs", it: "Verbi chiave", bn: "গুরুত্বপূর্ণ ক্রিয়া" },
  },
  {
    key: "konnektoren",
    label: { de: "Konnektoren und Wendungen", en: "Connectors and set phrases", it: "Connettivi ed espressioni", bn: "সংযোজক ও বাগ্‌ধারা" },
  },
];

/** Compact authoring helper — 200 full object literals would be unreadable. */
export function w(
  de: string,
  article: "der" | "die" | "das" | undefined,
  en: string,
  it: string,
  bn: string,
  example: string,
  theme: Theme,
  priority: 1 | 2 | 3 = 1,
  plural?: string,
): VocabWord {
  return { de, article, meaning: { en, it, bn }, example, theme, priority, plural };
}
