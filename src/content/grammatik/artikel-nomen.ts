import type { Multi } from "@/lib/types";

/**
 * The word list behind the article trainer.
 *
 * Written with a positional helper rather than object literals: 110 nouns
 * in four languages as full objects would be unreadable, and unreadable
 * content does not get corrected when it is wrong.
 *
 * `level` is frequency, not difficulty — 1 is everyday vocabulary a B1
 * candidate certainly needs, 3 is exam and officialdom vocabulary.
 */

export type RuleKey =
  | "ung"
  | "heitkeit"
  | "schaft"
  | "iontaet"
  | "chenlein"
  | "ling"
  | "ismus"
  | "e"
  | "erPerson"
  | "um"
  | "zeit"
  | "wetter"
  | "infinitiv"
  | "ge"
  | "ausnahme";

export type TrainerNoun = {
  de: string;
  article: "der" | "die" | "das";
  meaning: Multi;
  /** Which ending rule explains this word, when one does. */
  rule?: RuleKey;
  level: 1 | 2 | 3;
};

/** Each rule, explained once, reused by every noun that follows it. */
export const ARTICLE_RULES: Record<RuleKey, { label: string; why: Multi }> = {
  ung: {
    label: "-ung → die",
    why: {
      de: "Nomen auf die Nachsilbe -ung sind feminin.",
      en: "Nouns ending in the suffix -ung are feminine.",
      it: "I sostantivi che finiscono con il suffisso -ung sono femminili.",
      bn: "-ung প্রত্যয় দিয়ে শেষ হওয়া বিশেষ্য স্ত্রীলিঙ্গ।",
    },
  },
  heitkeit: {
    label: "-heit / -keit → die",
    why: {
      de: "Diese beiden Nachsilben sind ohne Ausnahme feminin.",
      en: "These two suffixes are feminine without exception.",
      it: "Questi due suffissi sono femminili senza eccezioni.",
      bn: "এই দুটি প্রত্যয় ব্যতিক্রমহীনভাবে স্ত্রীলিঙ্গ।",
    },
  },
  schaft: {
    label: "-schaft → die",
    why: {
      de: "-schaft macht ein Nomen immer feminin.",
      en: "-schaft always makes a noun feminine.",
      it: "-schaft rende sempre femminile un sostantivo.",
      bn: "-schaft সবসময় বিশেষ্যকে স্ত্রীলিঙ্গ করে।",
    },
  },
  iontaet: {
    label: "-ion / -tät / -ur / -ik → die",
    why: {
      de: "Diese Endungen kommen aus dem Lateinischen und sind immer feminin — wie das italienische -zione, -tà.",
      en: "These endings come from Latin and are always feminine — like Italian -zione, -tà.",
      it: "Queste desinenze vengono dal latino e sono sempre femminili — come l'italiano -zione, -tà.",
      bn: "এই শেষাংশগুলো ল্যাটিন থেকে এসেছে এবং সবসময় স্ত্রীলিঙ্গ — ইতালীয় -zione, -tà এর মতো।",
    },
  },
  chenlein: {
    label: "-chen / -lein → das",
    why: {
      de: "Verkleinerungsformen sind immer neutrum, auch bei Personen.",
      en: "Diminutives are always neuter, even for people.",
      it: "I diminutivi sono sempre neutri, anche per le persone.",
      bn: "ক্ষুদ্রার্থক রূপ সবসময় ক্লীবলিঙ্গ, এমনকি ব্যক্তির ক্ষেত্রেও।",
    },
  },
  ling: {
    label: "-ling → der",
    why: {
      de: "Nomen auf -ling sind maskulin.",
      en: "Nouns ending in -ling are masculine.",
      it: "I sostantivi in -ling sono maschili.",
      bn: "-ling দিয়ে শেষ হওয়া বিশেষ্য পুংলিঙ্গ।",
    },
  },
  ismus: {
    label: "-ismus → der",
    why: {
      de: "Nomen auf -ismus sind maskulin.",
      en: "Nouns ending in -ismus are masculine.",
      it: "I sostantivi in -ismus sono maschili.",
      bn: "-ismus দিয়ে শেষ হওয়া বিশেষ্য পুংলিঙ্গ।",
    },
  },
  e: {
    label: "-e → meistens die",
    why: {
      de: "Etwa 90 % der Nomen auf -e sind feminin. Es ist eine Tendenz, keine Regel: der Name, der Junge, das Auge.",
      en: "Around 90% of nouns ending in -e are feminine. It is a tendency, not a rule: der Name, der Junge, das Auge.",
      it: "Circa il 90% dei sostantivi in -e è femminile. È una tendenza, non una regola: der Name, der Junge, das Auge.",
      bn: "-e দিয়ে শেষ হওয়া প্রায় ৯০% বিশেষ্য স্ত্রীলিঙ্গ। এটি একটি প্রবণতা, নিয়ম নয়: der Name, der Junge, das Auge।",
    },
  },
  erPerson: {
    label: "-er (Person, Gerät) → der",
    why: {
      de: "Wer etwas tut oder womit man etwas tut, ist meist maskulin — aber nicht die Mutter, die Butter oder das Fenster.",
      en: "Someone who does something, or a device you do it with, is usually masculine — but not die Mutter, die Butter or das Fenster.",
      it: "Chi fa qualcosa, o l'apparecchio con cui la si fa, è di solito maschile — ma non die Mutter, die Butter o das Fenster.",
      bn: "যে কাজ করে বা যে যন্ত্র দিয়ে কাজ হয়, তা সাধারণত পুংলিঙ্গ — তবে die Mutter, die Butter বা das Fenster নয়।",
    },
  },
  um: {
    label: "-um → das",
    why: {
      de: "Lateinische Nomen auf -um sind neutrum — Ausnahmen: der Reichtum, der Irrtum.",
      en: "Latin nouns in -um are neuter — exceptions: der Reichtum, der Irrtum.",
      it: "I sostantivi latini in -um sono neutri — eccezioni: der Reichtum, der Irrtum.",
      bn: "-um যুক্ত ল্যাটিন বিশেষ্য ক্লীবলিঙ্গ — ব্যতিক্রম: der Reichtum, der Irrtum।",
    },
  },
  zeit: {
    label: "Tage, Monate, Jahreszeiten → der",
    why: {
      de: "Alles im Kalender ist maskulin.",
      en: "Everything in the calendar is masculine.",
      it: "Tutto ciò che sta nel calendario è maschile.",
      bn: "ক্যালেন্ডারের সবকিছুই পুংলিঙ্গ।",
    },
  },
  wetter: {
    label: "Wetter → meistens der",
    why: {
      de: "Wetterwörter sind meist maskulin — Ausnahmen: die Sonne, das Gewitter.",
      en: "Weather words are usually masculine — exceptions: die Sonne, das Gewitter.",
      it: "Le parole del meteo sono per lo più maschili — eccezioni: die Sonne, das Gewitter.",
      bn: "আবহাওয়ার শব্দ সাধারণত পুংলিঙ্গ — ব্যতিক্রম: die Sonne, das Gewitter।",
    },
  },
  infinitiv: {
    label: "Verb als Nomen → das",
    why: {
      de: "Ein großgeschriebener Infinitiv ist immer neutrum.",
      en: "A capitalised infinitive used as a noun is always neuter.",
      it: "Un infinito sostantivato è sempre neutro.",
      bn: "বিশেষ্য হিসেবে ব্যবহৃত infinitiv সবসময় ক্লীবলিঙ্গ।",
    },
  },
  ge: {
    label: "Ge- (Sammelbegriff) → meistens das",
    why: {
      de: "Ge- bildet oft Sammelbegriffe im Neutrum — aber der Gedanke, die Gefahr und der Geschmack brechen die Regel.",
      en: "Ge- often forms neuter collective nouns — but der Gedanke, die Gefahr and der Geschmack break the rule.",
      it: "Ge- forma spesso nomi collettivi neutri — ma der Gedanke, die Gefahr e der Geschmack rompono la regola.",
      bn: "Ge- প্রায়ই ক্লীবলিঙ্গ সমষ্টিবাচক শব্দ তৈরি করে — তবে der Gedanke, die Gefahr ও der Geschmack নিয়মটি ভাঙে।",
    },
  },
  ausnahme: {
    label: "Ausnahme — einfach lernen",
    why: {
      de: "Für dieses Wort gibt es keine hilfreiche Regel. Es muss mit dem Artikel auswendig gelernt werden.",
      en: "There is no helpful rule for this word. It has to be memorised together with its article.",
      it: "Per questa parola non esiste una regola utile. Va imparata a memoria con il suo articolo.",
      bn: "এই শব্দের জন্য কোনো কাজের নিয়ম নেই। আর্টিকেলসহ মুখস্থ করতে হবে।",
    },
  },
};

function n(
  de: string,
  art: "der" | "die" | "das",
  en: string,
  it: string,
  bn: string,
  rule?: RuleKey,
  level: 1 | 2 | 3 = 1,
): TrainerNoun {
  return { de, article: art, meaning: { en, it, bn }, rule, level };
}

export const TRAINER_NOUNS: TrainerNoun[] = [
  // --- everyday, rule-supported -------------------------------------------
  n("Wohnung", "die", "flat, apartment", "appartamento", "ফ্ল্যাট", "ung", 1),
  n("Zeitung", "die", "newspaper", "giornale", "সংবাদপত্র", "ung", 1),
  n("Rechnung", "die", "bill, invoice", "conto, fattura", "বিল", "ung", 2),
  n("Anmeldung", "die", "registration", "iscrizione", "নিবন্ধন", "ung", 2),
  n("Verspätung", "die", "delay", "ritardo", "দেরি", "ung", 2),
  n("Einladung", "die", "invitation", "invito", "নিমন্ত্রণ", "ung", 1),
  n("Erfahrung", "die", "experience", "esperienza", "অভিজ্ঞতা", "ung", 2),
  n("Bestätigung", "die", "confirmation", "conferma", "নিশ্চিতকরণ", "ung", 3),
  n("Gesundheit", "die", "health", "salute", "স্বাস্থ্য", "heitkeit", 1),
  n("Freiheit", "die", "freedom", "libertà", "স্বাধীনতা", "heitkeit", 2),
  n("Möglichkeit", "die", "possibility", "possibilità", "সম্ভাবনা", "heitkeit", 2),
  n("Schwierigkeit", "die", "difficulty", "difficoltà", "অসুবিধা", "heitkeit", 3),
  n("Freundschaft", "die", "friendship", "amicizia", "বন্ধুত্ব", "schaft", 2),
  n("Mannschaft", "die", "team", "squadra", "দল", "schaft", 2),
  n("Information", "die", "information", "informazione", "তথ্য", "iontaet", 1),
  n("Situation", "die", "situation", "situazione", "পরিস্থিতি", "iontaet", 2),
  n("Universität", "die", "university", "università", "বিশ্ববিদ্যালয়", "iontaet", 1),
  n("Musik", "die", "music", "musica", "সঙ্গীত", "iontaet", 1),
  n("Natur", "die", "nature", "natura", "প্রকৃতি", "iontaet", 2),
  n("Mädchen", "das", "girl", "ragazza", "মেয়ে", "chenlein", 1),
  n("Brötchen", "das", "bread roll", "panino", "ছোট রুটি", "chenlein", 1),
  n("Päckchen", "das", "small parcel", "pacchetto", "ছোট প্যাকেট", "chenlein", 2),
  n("Frühling", "der", "spring", "primavera", "বসন্ত", "ling", 1),
  n("Lehrling", "der", "apprentice", "apprendista", "শিক্ষানবিশ", "ling", 3),
  n("Tourismus", "der", "tourism", "turismo", "পর্যটন", "ismus", 3),

  // --- -e (tendency) -------------------------------------------------------
  n("Lampe", "die", "lamp", "lampada", "বাতি", "e", 1),
  n("Straße", "die", "street", "strada", "রাস্তা", "e", 1),
  n("Sprache", "die", "language", "lingua", "ভাষা", "e", 1),
  n("Küche", "die", "kitchen", "cucina", "রান্নাঘর", "e", 1),
  n("Woche", "die", "week", "settimana", "সপ্তাহ", "e", 1),
  n("Frage", "die", "question", "domanda", "প্রশ্ন", "e", 1),
  n("Miete", "die", "rent", "affitto", "ভাড়া", "e", 2),
  n("Reise", "die", "journey, trip", "viaggio", "ভ্রমণ", "e", 1),

  // --- -er, -um ------------------------------------------------------------
  n("Lehrer", "der", "teacher", "insegnante", "শিক্ষক", "erPerson", 1),
  n("Computer", "der", "computer", "computer", "কম্পিউটার", "erPerson", 1),
  n("Kühlschrank", "der", "fridge", "frigorifero", "ফ্রিজ", undefined, 1),
  n("Fernseher", "der", "television set", "televisore", "টেলিভিশন", "erPerson", 1),
  n("Arbeiter", "der", "worker", "operaio", "শ্রমিক", "erPerson", 2),
  n("Museum", "das", "museum", "museo", "জাদুঘর", "um", 1),
  n("Zentrum", "das", "centre", "centro", "কেন্দ্র", "um", 2),
  n("Praktikum", "das", "internship", "tirocinio", "ইন্টার্নশিপ", "um", 2),

  // --- calendar and weather -----------------------------------------------
  n("Montag", "der", "Monday", "lunedì", "সোমবার", "zeit", 1),
  n("Januar", "der", "January", "gennaio", "জানুয়ারি", "zeit", 1),
  n("Sommer", "der", "summer", "estate", "গ্রীষ্ম", "zeit", 1),
  n("Winter", "der", "winter", "inverno", "শীত", "zeit", 1),
  n("Regen", "der", "rain", "pioggia", "বৃষ্টি", "wetter", 1),
  n("Wind", "der", "wind", "vento", "বাতাস", "wetter", 1),
  n("Schnee", "der", "snow", "neve", "তুষার", "wetter", 2),
  n("Sonne", "die", "sun", "sole", "সূর্য", "ausnahme", 1),
  n("Gewitter", "das", "thunderstorm", "temporale", "বজ্রঝড়", "ausnahme", 3),

  // --- infinitives and Ge- -------------------------------------------------
  n("Essen", "das", "food, meal", "cibo, pasto", "খাবার", "infinitiv", 1),
  n("Leben", "das", "life", "vita", "জীবন", "infinitiv", 1),
  n("Lernen", "das", "learning", "l'imparare", "শেখা", "infinitiv", 2),
  n("Gebäude", "das", "building", "edificio", "ভবন", "ge", 2),
  n("Gemüse", "das", "vegetables", "verdura", "সবজি", "ge", 1),
  n("Geschenk", "das", "present, gift", "regalo", "উপহার", "ge", 1),
  n("Gedanke", "der", "thought", "pensiero", "চিন্তা", "ausnahme", 3),

  // --- high-frequency words with no useful rule ---------------------------
  n("Mann", "der", "man, husband", "uomo, marito", "পুরুষ, স্বামী", "ausnahme", 1),
  n("Frau", "die", "woman, wife", "donna, moglie", "নারী, স্ত্রী", "ausnahme", 1),
  n("Kind", "das", "child", "bambino", "শিশু", "ausnahme", 1),
  n("Haus", "das", "house", "casa", "বাড়ি", "ausnahme", 1),
  n("Auto", "das", "car", "automobile", "গাড়ি", "ausnahme", 1),
  n("Buch", "das", "book", "libro", "বই", "ausnahme", 1),
  n("Tisch", "der", "table", "tavolo", "টেবিল", "ausnahme", 1),
  n("Stuhl", "der", "chair", "sedia", "চেয়ার", "ausnahme", 1),
  n("Bett", "das", "bed", "letto", "বিছানা", "ausnahme", 1),
  n("Fenster", "das", "window", "finestra", "জানালা", "ausnahme", 1),
  n("Tür", "die", "door", "porta", "দরজা", "ausnahme", 1),
  n("Zimmer", "das", "room", "stanza", "ঘর", "ausnahme", 1),
  n("Stadt", "die", "city, town", "città", "শহর", "ausnahme", 1),
  n("Land", "das", "country, countryside", "paese, campagna", "দেশ", "ausnahme", 1),
  n("Arbeit", "die", "work, job", "lavoro", "কাজ", "ausnahme", 1),
  n("Geld", "das", "money", "denaro", "টাকা", "ausnahme", 1),
  n("Zeit", "die", "time", "tempo", "সময়", "ausnahme", 1),
  n("Tag", "der", "day", "giorno", "দিন", "ausnahme", 1),
  n("Nacht", "die", "night", "notte", "রাত", "ausnahme", 1),
  n("Jahr", "das", "year", "anno", "বছর", "ausnahme", 1),
  n("Monat", "der", "month", "mese", "মাস", "ausnahme", 1),
  n("Freund", "der", "friend", "amico", "বন্ধু", "ausnahme", 1),
  n("Familie", "die", "family", "famiglia", "পরিবার", "e", 1),
  n("Bruder", "der", "brother", "fratello", "ভাই", "ausnahme", 1),
  n("Schwester", "die", "sister", "sorella", "বোন", "ausnahme", 1),
  n("Vater", "der", "father", "padre", "বাবা", "ausnahme", 1),
  n("Mutter", "die", "mother", "madre", "মা", "ausnahme", 1),
  n("Wasser", "das", "water", "acqua", "পানি", "ausnahme", 1),
  n("Brot", "das", "bread", "pane", "রুটি", "ausnahme", 1),
  n("Bier", "das", "beer", "birra", "বিয়ার", "ausnahme", 2),
  n("Wein", "der", "wine", "vino", "ওয়াইন", "ausnahme", 2),
  n("Kaffee", "der", "coffee", "caffè", "কফি", "ausnahme", 1),
  n("Milch", "die", "milk", "latte", "দুধ", "ausnahme", 1),

  // --- exam and officialdom ------------------------------------------------
  n("Termin", "der", "appointment", "appuntamento", "সাক্ষাৎকারের সময়", "ausnahme", 2),
  n("Vertrag", "der", "contract", "contratto", "চুক্তি", "ausnahme", 2),
  n("Ausweis", "der", "ID card", "documento d'identità", "পরিচয়পত্র", "ausnahme", 2),
  n("Formular", "das", "form", "modulo", "ফর্ম", "ausnahme", 2),
  n("Amt", "das", "public office", "ufficio pubblico", "সরকারি দপ্তর", "ausnahme", 3),
  n("Antrag", "der", "application", "domanda", "আবেদন", "ausnahme", 3),
  n("Kurs", "der", "course", "corso", "কোর্স", "ausnahme", 1),
  n("Prüfung", "die", "exam", "esame", "পরীক্ষা", "ung", 1),
  n("Zeugnis", "das", "certificate, report", "certificato, pagella", "সনদপত্র", "ausnahme", 3),
  n("Lebenslauf", "der", "CV", "curriculum", "জীবনবৃত্তান্ত", "ausnahme", 3),
  n("Bewerbung", "die", "application (job)", "candidatura", "চাকরির আবেদন", "ung", 2),
  n("Praxis", "die", "doctor's surgery; practice", "ambulatorio; pratica", "চেম্বার; অনুশীলন", "ausnahme", 3),
  n("Krankenhaus", "das", "hospital", "ospedale", "হাসপাতাল", "ausnahme", 2),
  n("Apotheke", "die", "pharmacy", "farmacia", "ফার্মেসি", "e", 2),
  n("Bahnhof", "der", "railway station", "stazione", "রেলস্টেশন", "ausnahme", 1),
  n("Flughafen", "der", "airport", "aeroporto", "বিমানবন্দর", "ausnahme", 2),
  n("Fahrkarte", "die", "ticket", "biglietto", "টিকিট", "e", 1),
  n("Rechner", "der", "computer, calculator", "computer, calcolatrice", "কম্পিউটার, ক্যালকুলেটর", "erPerson", 2),
  n("Nachbar", "der", "neighbour", "vicino", "প্রতিবেশী", "ausnahme", 2),
  n("Vermieter", "der", "landlord", "locatore", "বাড়িওয়ালা", "erPerson", 2),
  n("Miete", "die", "rent", "affitto", "ভাড়া", "e", 2),
  n("Heizung", "die", "heating", "riscaldamento", "হিটার", "ung", 2),
  n("Lärm", "der", "noise", "rumore", "শব্দদূষণ", "ausnahme", 2),
  n("Nachricht", "die", "message, news item", "messaggio, notizia", "বার্তা", "ausnahme", 2),
];

/** Deduplicated by German word — the list is hand-written, so guard it. */
export const TRAINER_WORDS: TrainerNoun[] = Array.from(
  new Map(TRAINER_NOUNS.map((w) => [w.de, w])).values(),
);
