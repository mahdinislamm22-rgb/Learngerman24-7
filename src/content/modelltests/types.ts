import type { Multi } from "@/lib/types";
import type { LesenSet } from "@/content/lesen";
import type { SbSet } from "@/content/sprachbausteine";
import type { HoerSet } from "@/content/hoeren";
import type { SchreibenTask } from "@/content/schreiben";

/**
 * A Modelltest — one complete written telc B1 paper.
 *
 * Deliberately a BUNDLE of the existing section types rather than a new
 * content format. A Lesen set is a Lesen set whether you meet it on its
 * own or inside a mock exam, so the same content, the same validators and
 * the same rendering serve both. The only thing a Modelltest adds is the
 * exam frame: real timing, no feedback until the end, and one score.
 *
 * The oral exam is not included — by your choice, and because it cannot be
 * marked without a person.
 *
 * Points, verified against the telc B1 format:
 *   Leseverstehen        75
 *   Sprachbausteine      30
 *   Hörverstehen         75
 *   Schriftlicher Ausdruck 45
 *   ------------------------
 *   Written total       225, pass at 135 (60 %).
 */
export type Modelltest = {
  code: string;
  nr: number;
  title: Multi;
  /** The thematic centre of gravity, so fifteen tests cover the range on purpose. */
  focus: Multi;
  lesen: LesenSet;
  sprachbausteine: SbSet;
  hoeren: HoerSet;
  schreiben: SchreibenTask;
};

export const MT_POINTS = {
  lesen: 75,
  sprachbausteine: 30,
  hoeren: 75,
  schreiben: 45,
  total: 225,
  pass: 135,
} as const;

/** Minutes per stage, as the real paper is timed. */
export const MT_MINUTES = {
  /** Lesen and Sprachbausteine share one self-paced block. */
  lesenUndSprachbausteine: 90,
  hoeren: 30,
  schreiben: 30,
} as const;

export type SectionKey = "lesen" | "sprachbausteine" | "hoeren" | "schreiben";

/**
 * The planned theme of each of the twenty tests.
 *
 * Written out in full before the content exists, because fifteen tests
 * assembled one at a time drift towards whatever is easiest to write —
 * and then three of them are about renting a flat and none is about the
 * doctor. The exam draws on the whole of everyday life; this list is what
 * keeps the set honest about covering it.
 */
export const MT_PLAN: { nr: number; theme: Multi }[] = [
  { nr: 1, theme: { de: "Alltag, Kurse und Wohnen", en: "Everyday life, courses and housing", it: "Vita quotidiana, corsi e casa", bn: "দৈনন্দিন জীবন, কোর্স ও বাসস্থান" } },
  { nr: 2, theme: { de: "Arbeit und Bewerbung", en: "Work and job applications", it: "Lavoro e candidature", bn: "কাজ ও চাকরির আবেদন" } },
  { nr: 3, theme: { de: "Gesundheit und Arztbesuch", en: "Health and the doctor", it: "Salute e visita medica", bn: "স্বাস্থ্য ও ডাক্তার দেখানো" } },
  { nr: 4, theme: { de: "Ämter, Formulare und Anmeldungen", en: "Offices, forms and registration", it: "Uffici, moduli e iscrizioni", bn: "দপ্তর, ফর্ম ও নিবন্ধন" } },
  { nr: 5, theme: { de: "Ausbildung und Weiterbildung", en: "Training and further education", it: "Formazione e aggiornamento", bn: "প্রশিক্ষণ ও উচ্চতর শিক্ষা" } },
  { nr: 6, theme: { de: "Reisen, Bahn und Verkehr", en: "Travel, trains and transport", it: "Viaggi, treni e trasporti", bn: "ভ্রমণ, ট্রেন ও যাতায়াত" } },
  { nr: 7, theme: { de: "Einkaufen und Reklamation", en: "Shopping and complaints", it: "Acquisti e reclami", bn: "কেনাকাটা ও অভিযোগ" } },
  { nr: 8, theme: { de: "Nachbarn und Wohngemeinschaft", en: "Neighbours and shared housing", it: "Vicini e coabitazione", bn: "প্রতিবেশী ও সহাবস্থান" } },
  { nr: 9, theme: { de: "Familie und Kinderbetreuung", en: "Family and childcare", it: "Famiglia e assistenza ai bambini", bn: "পরিবার ও শিশু দেখাশোনা" } },
  { nr: 10, theme: { de: "Umwelt und Nachhaltigkeit", en: "Environment and sustainability", it: "Ambiente e sostenibilità", bn: "পরিবেশ ও টেকসইতা" } },
  { nr: 11, theme: { de: "Medien, Internet und Handy", en: "Media, internet and phones", it: "Media, internet e cellulare", bn: "মিডিয়া, ইন্টারনেট ও মোবাইল" } },
  { nr: 12, theme: { de: "Essen, Ernährung und Restaurant", en: "Food, diet and restaurants", it: "Cibo, alimentazione e ristoranti", bn: "খাবার, পুষ্টি ও রেস্তোরাঁ" } },
  { nr: 13, theme: { de: "Feste, Einladungen und Absagen", en: "Celebrations, invitations and declining", it: "Feste, inviti e rifiuti", bn: "উৎসব, নিমন্ত্রণ ও প্রত্যাখ্যান" } },
  { nr: 14, theme: { de: "Geld, Bank und Verträge", en: "Money, banking and contracts", it: "Denaro, banca e contratti", bn: "টাকা, ব্যাংক ও চুক্তি" } },
  { nr: 15, theme: { de: "Technik, Reparatur und Zukunftspläne", en: "Technology, repairs and future plans", it: "Tecnologia, riparazioni e progetti futuri", bn: "প্রযুক্তি, মেরামত ও ভবিষ্যৎ পরিকল্পনা" } },
];
