import type { SbSet } from "./types";

/**
 * SB-02 — Brief an eine Freundin (Teil 1) und Praktikumsbewerbung (Teil 2).
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Teil 1 is deliberately informal, because the exam mixes registers and
 * the du-forms trip people who have only practised formal letters. Two
 * neighbouring gaps (2 and 3) test the same idea from opposite sides:
 * a coordinating conjunction keeps normal word order, a subordinating one
 * sends the verb to the end. Reading the word order is how you tell them
 * apart without understanding the sentence at all.
 */
export const sb02: SbSet = {
  code: "SB-02",

  title: {
    de: "Brief an eine Freundin und Praktikumsbewerbung",
    en: "Letter to a friend and an internship application",
    it: "Lettera a un'amica e candidatura per un tirocinio",
    bn: "বন্ধুকে লেখা চিঠি ও ইন্টার্নশিপের আবেদন",
  },

  intro: {
    de: "Erst ein privater Brief mit du-Formen, dann eine förmliche Bewerbung. Achte darauf, wie sich der Ton ändert.",
    en: "First a private letter using du-forms, then a formal application. Notice how the tone changes.",
    it: "Prima una lettera privata con le forme del du, poi una candidatura formale. Nota come cambia il tono.",
    bn: "প্রথমে du-রূপে একটি ব্যক্তিগত চিঠি, তারপর একটি আনুষ্ঠানিক আবেদন। খেয়াল করুন সুরটা কীভাবে বদলায়।",
  },

  teil1: {
    heading: "Brief an eine Freundin",
    text: `Liebe Ana,

endlich habe ich Zeit, dir zu schreiben! Vor drei Wochen {1} ich nach Siegen gezogen. Die Wohnung ist klein, {2} sie hat einen schönen Balkon.

Am Anfang war alles schwierig, {3} ich niemanden kannte. Inzwischen habe ich aber schon ein paar Leute {4}. Meine Nachbarin heißt Petra und hilft {5} sehr oft.

Nächsten Monat fange ich {6} einem Praktikum an. Ich freue mich schon {7} den ersten Tag, aber ich bin auch ein bisschen nervös.

{8} du mich im Sommer besuchen? Du kannst gern {9} mir schlafen. Schreib mir einfach, wenn du Zeit hast. Ich hoffe, {10} wir uns bald sehen.

Liebe Grüße
Mahdin`,

    items: [
      {
        nr: 1,
        options: ["habe", "war", "bin"],
        answerIndex: 2,
        tag: "perfekt-hilfsverb",
        why: {
          de: "»ziehen« im Sinne von umziehen beschreibt eine Ortsveränderung, und solche Verben bilden das Perfekt mit sein: ich bin gezogen.",
          en: "'ziehen' in the sense of moving house describes a change of place, and such verbs form the Perfekt with sein: ich bin gezogen.",
          it: "»ziehen« nel senso di traslocare indica un cambio di luogo, e questi verbi formano il Perfekt con sein: ich bin gezogen.",
          bn: "বাসা বদলানোর অর্থে »ziehen« স্থান পরিবর্তন বোঝায়, আর এ ধরনের ক্রিয়া sein দিয়ে Perfekt গঠন করে: ich bin gezogen।",
        },
      },
      {
        nr: 2,
        options: ["aber", "weil", "obwohl"],
        answerIndex: 0,
        tag: "konnektor-hauptsatz",
        why: {
          de: "Schau auf die Wortstellung: »sie hat« — Verb an zweiter Stelle, also ein Hauptsatz. Nur »aber« verbindet zwei Hauptsätze; weil und obwohl würden das Verb ans Ende schicken.",
          en: "Look at the word order: 'sie hat' — verb second, so a main clause. Only 'aber' joins two main clauses; weil and obwohl would send the verb to the end.",
          it: "Guarda l'ordine delle parole: »sie hat« — verbo in seconda posizione, quindi una principale. Solo »aber« unisce due principali; weil e obwohl manderebbero il verbo in fondo.",
          bn: "শব্দক্রম দেখুন: »sie hat« — ক্রিয়া দ্বিতীয় স্থানে, অর্থাৎ প্রধান বাক্য। কেবল »aber« দুটি প্রধান বাক্য জোড়ে; weil ও obwohl ক্রিয়াকে শেষে পাঠাত।",
        },
      },
      {
        nr: 3,
        options: ["denn", "weil", "aber"],
        answerIndex: 1,
        tag: "nebensatz-weil",
        why: {
          de: "Hier ist es umgekehrt: »ich niemanden kannte« hat das Verb am Ende, also ein Nebensatz — das verlangt weil. Mit denn müsste es heißen: denn ich kannte niemanden.",
          en: "Here it is the other way round: 'ich niemanden kannte' has the verb at the end, so it is a subordinate clause — that requires weil. With denn it would have to be: denn ich kannte niemanden.",
          it: "Qui è il contrario: »ich niemanden kannte« ha il verbo in fondo, quindi è una subordinata: serve weil. Con denn sarebbe: denn ich kannte niemanden.",
          bn: "এখানে উল্টো: »ich niemanden kannte«-এ ক্রিয়া শেষে, অর্থাৎ অধীন বাক্য — তাই weil লাগবে। denn হলে হতো: denn ich kannte niemanden।",
        },
      },
      {
        nr: 4,
        options: ["kennengelernt", "kennenlernen", "gekennt"],
        answerIndex: 0,
        tag: "perfekt",
        why: {
          de: "»habe … kennengelernt« ist das Perfekt-Partizip. »gekennt« gibt es nicht — das Partizip von kennen ist gekannt, aber hier ist kennenlernen gemeint.",
          en: "'habe … kennengelernt' is the Perfekt participle. 'gekennt' does not exist — the participle of kennen is gekannt, but the verb meant here is kennenlernen.",
          it: "»habe … kennengelernt« è il participio del Perfekt. »gekennt« non esiste: il participio di kennen è gekannt, ma qui si intende kennenlernen.",
          bn: "»habe … kennengelernt« হলো Perfekt-এর participle। »gekennt« বলে কিছু নেই — kennen-এর participle হলো gekannt, তবে এখানে kennenlernen বোঝানো হয়েছে।",
        },
      },
      {
        nr: 5,
        options: ["mich", "meiner", "mir"],
        answerIndex: 2,
        tag: "dativverb",
        why: {
          de: "»helfen« verlangt immer den Dativ: Sie hilft mir. Im Englischen und Italienischen ist es ein direktes Objekt — daher der häufige Fehler »hilft mich«.",
          en: "'helfen' always takes the Dativ: Sie hilft mir. In English and Italian it is a direct object, which is where the common error 'hilft mich' comes from.",
          it: "»helfen« regge sempre il Dativ: Sie hilft mir. In inglese e italiano è un complemento oggetto: da lì nasce l'errore frequente »hilft mich«.",
          bn: "»helfen« সবসময় Dativ নেয়: Sie hilft mir। ইংরেজি ও ইতালীয়তে এটি সরাসরি কর্ম — তাই »hilft mich« ভুলটি এত সাধারণ।",
        },
      },
      {
        nr: 6,
        options: ["an", "mit", "zu"],
        answerIndex: 1,
        tag: "verben-mit-praeposition",
        why: {
          de: "»anfangen mit« + Dativ: Ich fange mit einem Praktikum an. Das »an« steht schon am Satzende, weil anfangen trennbar ist.",
          en: "'anfangen mit' + Dativ: Ich fange mit einem Praktikum an. The 'an' is already at the end of the sentence, because anfangen is separable.",
          it: "»anfangen mit« + Dativ: Ich fange mit einem Praktikum an. L'»an« è già in fondo alla frase, perché anfangen è separabile.",
          bn: "»anfangen mit« + Dativ: Ich fange mit einem Praktikum an। »an« অংশটি আগেই বাক্যের শেষে আছে, কারণ anfangen একটি পৃথকযোগ্য ক্রিয়া।",
        },
      },
      {
        nr: 7,
        options: ["auf", "über", "für"],
        answerIndex: 0,
        tag: "verben-mit-praeposition",
        why: {
          de: "»sich freuen auf« blickt nach vorn, »sich freuen über« blickt zurück. Der erste Tag liegt in der Zukunft, also auf.",
          en: "'sich freuen auf' looks forward, 'sich freuen über' looks back. The first day is still in the future, so auf.",
          it: "»sich freuen auf« guarda avanti, »sich freuen über« guarda indietro. Il primo giorno è nel futuro, quindi auf.",
          bn: "»sich freuen auf« সামনের দিকে তাকায়, »sich freuen über« পেছনের দিকে। প্রথম দিনটি ভবিষ্যতে, তাই auf।",
        },
      },
      {
        nr: 8,
        options: ["Möchte", "Möchtet", "Möchtest"],
        answerIndex: 2,
        tag: "verbform",
        why: {
          de: "Das Subjekt ist »du«, also endet das Verb auf -st: Möchtest du …? »Möchtet« gehört zu ihr, »möchte« zu ich oder er/sie/es.",
          en: "The subject is 'du', so the verb ends in -st: Möchtest du …? 'Möchtet' goes with ihr, and 'möchte' with ich or er/sie/es.",
          it: "Il soggetto è »du«, quindi il verbo finisce in -st: Möchtest du …? »Möchtet« va con ihr e »möchte« con ich o er/sie/es.",
          bn: "কর্তা »du«, তাই ক্রিয়া -st দিয়ে শেষ হয়: Möchtest du …? »Möchtet« যায় ihr-এর সাথে, আর »möchte« যায় ich বা er/sie/es-এর সাথে।",
        },
      },
      {
        nr: 9,
        options: ["mit", "bei", "zu"],
        answerIndex: 1,
        tag: "praeposition-dativ",
        why: {
          de: "»bei mir schlafen« heißt: in meiner Wohnung übernachten. bei + Dativ benutzt man für Personen und ihre Wohnung.",
          en: "'bei mir schlafen' means staying the night at my place. bei + Dativ is used for people and their homes.",
          it: "»bei mir schlafen« significa dormire a casa mia. bei + Dativ si usa per le persone e le loro case.",
          bn: "»bei mir schlafen« মানে আমার বাসায় রাত কাটানো। bei + Dativ ব্যবহার হয় ব্যক্তি ও তাদের বাসার ক্ষেত্রে।",
        },
      },
      {
        nr: 10,
        options: ["dass", "ob", "weil"],
        answerIndex: 0,
        tag: "nebensatz-dass",
        why: {
          de: "Nach »ich hoffe« folgt ein Wunsch als Tatsache, also dass. »ob« würde eine Frage einleiten, »weil« einen Grund.",
          en: "After 'ich hoffe' comes a wish stated as a fact, so dass. 'ob' would introduce a question and 'weil' a reason.",
          it: "Dopo »ich hoffe« segue un desiderio espresso come fatto, quindi dass. »ob« introdurrebbe una domanda e »weil« un motivo.",
          bn: "»ich hoffe«-এর পরে ইচ্ছাটি তথ্যের মতো আসে, তাই dass। »ob« প্রশ্ন শুরু করত, »weil« কারণ বোঝাত।",
        },
      },
    ],
  },

  teil2: {
    heading: "Bewerbung um einen Praktikumsplatz",
    text: `Sehr geehrter Herr Wagner,

im Internet habe ich Ihre Anzeige {11} und möchte mich gern um einen Praktikumsplatz {12}.

Ich bin 22 Jahre alt und komme {13} Bangladesch. In Italien habe ich die Schule mit dem Schwerpunkt Informatik {14}. Zurzeit besuche ich einen Deutschkurs auf dem Niveau B1 und arbeite nebenbei als {15} in einem Restaurant.

Besonders {16} mich die Arbeit mit Computern und Netzwerken. Ich lerne schnell und arbeite gern im {17}.

Meine Unterlagen finden Sie im {18} dieser E-Mail. Gern stelle ich mich auch persönlich {19}.

Über eine Einladung zu einem Gespräch würde ich mich sehr {20}.

Mit freundlichen Grüßen
Mahdin Islam`,

    bank: [
      { key: "a", word: "aus" },
      { key: "b", word: "bewerben" },
      { key: "c", word: "freuen" },
      { key: "d", word: "vor" },
      { key: "e", word: "interessiert" },
      { key: "f", word: "Zimmer" },
      { key: "g", word: "gefällt" },
      { key: "h", word: "Anhang" },
      { key: "i", word: "Kellner" },
      { key: "j", word: "abgeschlossen" },
      { key: "k", word: "Beruf" },
      { key: "l", word: "gehört" },
      { key: "m", word: "gelesen" },
      { key: "n", word: "nach" },
      { key: "o", word: "Team" },
    ],

    items: [
      {
        nr: 11,
        answerKey: "m",
        tag: "wortschatz-verb",
        why: {
          de: "Eine Anzeige im Internet liest man. »gehört« steht auch im Kasten, passt aber nur zu Radio oder Gespräch.",
          en: "An advertisement on the internet is something you read. 'gehört' is also in the bank but only fits radio or conversation.",
          it: "Un annuncio su internet si legge. »gehört« è nel riquadro ma va bene solo per radio o conversazione.",
          bn: "ইন্টারনেটের বিজ্ঞাপন পড়া হয়। »gehört« তালিকায় আছে, তবে তা কেবল রেডিও বা কথাবার্তার সাথে মানায়।",
        },
      },
      {
        nr: 12,
        answerKey: "b",
        tag: "verben-mit-praeposition",
        why: {
          de: "»sich um etwas bewerben« ist die feste Verbindung für eine Bewerbung. Das »um« steht schon im Satz, gesucht ist der Infinitiv am Ende.",
          en: "'sich um etwas bewerben' is the fixed collocation for applying. The 'um' is already in the sentence; what is missing is the infinitive at the end.",
          it: "»sich um etwas bewerben« è la collocazione fissa per candidarsi. L'»um« è già nella frase; manca l'infinito finale.",
          bn: "আবেদন করার নির্দিষ্ট গঠন হলো »sich um etwas bewerben«। »um« আগেই বাক্যে আছে; শেষে infinitiv-টি দরকার।",
        },
      },
      {
        nr: 13,
        answerKey: "a",
        tag: "praeposition-herkunft",
        why: {
          de: "Herkunft wird immer mit »aus« ausgedrückt: Ich komme aus Bangladesch. »nach« zeigt eine Richtung, nicht die Herkunft.",
          en: "Origin is always expressed with 'aus': Ich komme aus Bangladesch. 'nach' shows direction, not origin.",
          it: "L'origine si esprime sempre con »aus«: Ich komme aus Bangladesch. »nach« indica direzione, non provenienza.",
          bn: "উৎস সবসময় »aus« দিয়ে বোঝানো হয়: Ich komme aus Bangladesch। »nach« দিক বোঝায়, উৎস নয়।",
        },
      },
      {
        nr: 14,
        answerKey: "j",
        tag: "wortschatz-verb",
        why: {
          de: "»die Schule abschließen« heißt sie beenden und einen Abschluss bekommen. Das ist genau das Wort, das in einen Lebenslauf gehört.",
          en: "'die Schule abschließen' means finishing it with a qualification. That is exactly the word a CV needs.",
          it: "»die Schule abschließen« significa concluderla con un titolo. È proprio la parola che serve in un curriculum.",
          bn: "»die Schule abschließen« মানে সনদসহ পড়াশোনা শেষ করা। জীবনবৃত্তান্তে ঠিক এই শব্দটিই দরকার।",
        },
      },
      {
        nr: 15,
        answerKey: "i",
        tag: "wortschatz-nomen",
        why: {
          de: "»als Kellner arbeiten« — nach »als« steht der Beruf ohne Artikel. »Beruf« selbst steht im Kasten, ergibt hier aber keinen Sinn.",
          en: "'als Kellner arbeiten' — after 'als' the job title takes no article. 'Beruf' itself is in the bank but makes no sense here.",
          it: "»als Kellner arbeiten« — dopo »als« la professione va senza articolo. »Beruf« è nel riquadro ma qui non ha senso.",
          bn: "»als Kellner arbeiten« — »als«-এর পরে পেশার নাম আর্টিকেল ছাড়াই বসে। »Beruf« তালিকায় আছে, কিন্তু এখানে অর্থহীন।",
        },
      },
      {
        nr: 16,
        answerKey: "e",
        tag: "kasus-akkusativ",
        why: {
          de: "»Etwas interessiert mich« — mit Akkusativ. »gefällt« steht auch im Kasten, würde aber »mir« verlangen: Die Arbeit gefällt mir. Die Grammatik entscheidet, nicht die Bedeutung.",
          en: "'Etwas interessiert mich' — with the Akkusativ. 'gefällt' is also in the bank but would require 'mir': Die Arbeit gefällt mir. Grammar decides here, not meaning.",
          it: "»Etwas interessiert mich« — con l'Akkusativ. »gefällt« è nel riquadro ma richiederebbe »mir«: Die Arbeit gefällt mir. Qui decide la grammatica, non il significato.",
          bn: "»Etwas interessiert mich« — Akkusativ দিয়ে। »gefällt« তালিকায় আছে, কিন্তু তার জন্য »mir« লাগত: Die Arbeit gefällt mir। এখানে অর্থ নয়, ব্যাকরণই সিদ্ধান্ত নেয়।",
        },
      },
      {
        nr: 17,
        answerKey: "o",
        tag: "feste-wendung",
        why: {
          de: "»im Team arbeiten« ist eine feste Wendung und ein Standardsatz in jeder Bewerbung.",
          en: "'im Team arbeiten' is a fixed expression and a standard line in any application.",
          it: "»im Team arbeiten« è un'espressione fissa e una frase standard in ogni candidatura.",
          bn: "»im Team arbeiten« একটি নির্দিষ্ট বাগ্‌ধারা এবং যেকোনো আবেদনের প্রচলিত বাক্য।",
        },
      },
      {
        nr: 18,
        answerKey: "h",
        tag: "wortschatz-nomen",
        why: {
          de: "»im Anhang« heißt: als Datei an die E-Mail gehängt. »Zimmer« steht im Kasten, hat aber nichts mit einer E-Mail zu tun.",
          en: "'im Anhang' means attached to the email as a file. 'Zimmer' is in the bank but has nothing to do with an email.",
          it: "»im Anhang« significa allegato all'e-mail come file. »Zimmer« è nel riquadro ma non c'entra con un'e-mail.",
          bn: "»im Anhang« মানে ই-মেইলের সাথে ফাইল হিসেবে সংযুক্ত। »Zimmer« তালিকায় আছে, কিন্তু ই-মেইলের সাথে তার সম্পর্ক নেই।",
        },
      },
      {
        nr: 19,
        answerKey: "d",
        tag: "trennbares-verb",
        why: {
          de: "»sich vorstellen« ist trennbar, und bei einem trennbaren Verb steht die Vorsilbe im Hauptsatz am Ende: Gern stelle ich mich … vor.",
          en: "'sich vorstellen' is separable, and with a separable verb the prefix goes to the end of the main clause: Gern stelle ich mich … vor.",
          it: "»sich vorstellen« è separabile, e con un verbo separabile il prefisso va in fondo alla principale: Gern stelle ich mich … vor.",
          bn: "»sich vorstellen« পৃথকযোগ্য ক্রিয়া, আর পৃথকযোগ্য ক্রিয়ায় উপসর্গটি প্রধান বাক্যের শেষে বসে: Gern stelle ich mich … vor।",
        },
      },
      {
        nr: 20,
        answerKey: "c",
        tag: "verben-mit-praeposition",
        why: {
          de: "»sich über etwas freuen« — der Infinitiv fehlt am Satzende. Dieser Schlusssatz passt in jede Bewerbung.",
          en: "'sich über etwas freuen' — the infinitive is missing at the end. This closing line suits any application.",
          it: "»sich über etwas freuen« — manca l'infinito alla fine. Questa chiusura va bene in ogni candidatura.",
          bn: "»sich über etwas freuen« — বাক্যের শেষে infinitiv-টি নেই। এই শেষ বাক্যটি যেকোনো আবেদনে মানায়।",
        },
      },
    ],
  },
};
