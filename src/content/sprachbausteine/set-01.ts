import type { SbSet } from "./types";

/**
 * SB-01 — Kursanfrage (Teil 1) und Heizungsproblem (Teil 2).
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Teil 1 deliberately mixes the five things this part actually tests:
 * verb + preposition, case after a preposition, subordinating
 * conjunctions, relative pronouns, and verb position. Teil 2 is built so
 * that the five unused bank words are each plausible in the wrong slot —
 * that, not the vocabulary itself, is what makes the real exam hard.
 */
export const sb01: SbSet = {
  code: "SB-01",

  title: {
    de: "Kursanfrage und Heizungsproblem",
    en: "Course enquiry and a broken heater",
    it: "Richiesta di un corso e problema al riscaldamento",
    bn: "কোর্সের অনুসন্ধান ও হিটারের সমস্যা",
  },

  intro: {
    de: "Zwei Briefe, wie sie in der Prüfung vorkommen: eine Anfrage an eine Sprachschule und eine Beschwerde an die Hausverwaltung.",
    en: "Two letters of the kind the exam uses: an enquiry to a language school and a complaint to the building management.",
    it: "Due lettere del tipo usato nell'esame: una richiesta a una scuola di lingue e un reclamo all'amministrazione del condominio.",
    bn: "পরীক্ষায় যেমন আসে তেমন দুটি চিঠি: একটি ভাষা স্কুলে অনুসন্ধান, আরেকটি বাড়ি ব্যবস্থাপনায় অভিযোগ।",
  },

  teil1: {
    heading: "Anfrage: Deutschkurs",
    text: `Sehr geehrte Damen und Herren,

ich interessiere mich {1} einen Deutschkurs an Ihrer Sprachschule. Ich wohne seit einem Jahr in Siegen und arbeite {2} einem Restaurant. Mein Deutsch ist noch nicht perfekt, und ich möchte es verbessern, {3} ich eine Ausbildung beginnen kann.

Im Moment besuche ich einen Abendkurs, {4} mir ein Freund empfohlen hat. Leider passt {5} der Termin am Montag nicht, weil ich bis 18 Uhr arbeite.

Könnten Sie mir bitte mitteilen, {6} es auch Kurse am Wochenende gibt? Ich würde gern {7} einem Kurs auf dem Niveau B1 teilnehmen. Falls der Kurs schon voll ist, {8}.

Über eine kurze Antwort {9} ich mich sehr freuen. Vielen Dank {10} Voraus.

Mit freundlichen Grüßen
Mahdin Islam`,

    items: [
      {
        nr: 1,
        options: ["für", "auf", "an"],
        answerIndex: 0,
        tag: "verben-mit-praeposition",
        why: {
          de: "»sich interessieren für« ist fest mit für + Akkusativ verbunden. »auf« gehört zu »sich freuen auf«, »an« zu »denken an«.",
          en: "'sich interessieren für' is fixed: für + Akkusativ. 'auf' belongs to 'sich freuen auf', 'an' to 'denken an'.",
          it: "»sich interessieren für« è fisso: für + Akkusativ. »auf« appartiene a »sich freuen auf«, »an« a »denken an«.",
          bn: "»sich interessieren für« একটি নির্দিষ্ট গঠন: für + Akkusativ। »auf« যায় »sich freuen auf«-এর সাথে, »an« যায় »denken an«-এর সাথে।",
        },
      },
      {
        nr: 2,
        options: ["bei", "zu", "in"],
        answerIndex: 2,
        tag: "praeposition-ort",
        why: {
          de: "Bei einem Ort sagt man »in einem Restaurant arbeiten«. »bei« benutzt man mit Firmen oder Personen (bei Siemens, bei meinem Onkel), »zu« zeigt eine Richtung.",
          en: "With a place you say 'in einem Restaurant arbeiten'. 'bei' is used with companies or people (bei Siemens, bei meinem Onkel), and 'zu' shows direction.",
          it: "Con un luogo si dice »in einem Restaurant arbeiten«. »bei« si usa con aziende o persone (bei Siemens, bei meinem Onkel), »zu« indica direzione.",
          bn: "স্থান বোঝাতে বলা হয় »in einem Restaurant arbeiten«। »bei« ব্যবহার হয় প্রতিষ্ঠান বা ব্যক্তির সাথে (bei Siemens, bei meinem Onkel), আর »zu« দিক বোঝায়।",
        },
      },
      {
        nr: 3,
        options: ["weil", "damit", "obwohl"],
        answerIndex: 1,
        tag: "nebensatz-damit",
        why: {
          de: "»damit« nennt das Ziel: Ich verbessere mein Deutsch, um danach eine Ausbildung beginnen zu können. »weil« nennt einen Grund, »obwohl« einen Gegensatz — beides passt hier nicht.",
          en: "'damit' states the purpose: I improve my German so that I can then start an apprenticeship. 'weil' gives a reason and 'obwohl' a contrast — neither fits here.",
          it: "»damit« indica lo scopo: miglioro il tedesco per poter poi iniziare un apprendistato. »weil« dà un motivo e »obwohl« un contrasto: nessuno dei due va bene qui.",
          bn: "»damit« উদ্দেশ্য বোঝায়: আমি জার্মান উন্নত করছি যাতে পরে Ausbildung শুরু করতে পারি। »weil« কারণ বোঝায়, »obwohl« বৈপরীত্য — এখানে দুটোর কোনোটিই মানায় না।",
        },
      },
      {
        nr: 4,
        options: ["der", "dem", "den"],
        answerIndex: 2,
        tag: "relativsatz-akkusativ",
        why: {
          de: "Das Relativpronomen richtet sich nach dem Nomen (der Kurs, maskulin) und nach seiner Rolle im Nebensatz. »empfehlen« braucht hier ein Akkusativobjekt — also den.",
          en: "The relative pronoun takes its gender from the noun (der Kurs, masculine) and its case from its role in the clause. 'empfehlen' needs an accusative object here — so den.",
          it: "Il pronome relativo prende il genere dal sostantivo (der Kurs, maschile) e il caso dal suo ruolo nella frase. »empfehlen« qui richiede un oggetto all'accusativo: quindi den.",
          bn: "সম্বন্ধসূচক সর্বনাম লিঙ্গ নেয় বিশেষ্য থেকে (der Kurs, পুংলিঙ্গ) আর কারক নেয় বাক্যে তার ভূমিকা থেকে। এখানে »empfehlen« একটি Akkusativ কর্ম চায় — তাই den।",
        },
      },
      {
        nr: 5,
        options: ["mir", "mich", "ich"],
        answerIndex: 0,
        tag: "dativverb",
        why: {
          de: "»passen« ist ein Dativverb: Der Termin passt mir nicht. Genau dieser Satz kommt in fast jedem Absagebrief vor.",
          en: "'passen' is a Dativ verb: Der Termin passt mir nicht. This exact sentence turns up in almost every letter declining an appointment.",
          it: "»passen« regge il Dativ: Der Termin passt mir nicht. Questa frase compare in quasi ogni lettera di rifiuto.",
          bn: "»passen« একটি Dativ-ক্রিয়া: Der Termin passt mir nicht। প্রায় প্রতিটি প্রত্যাখ্যানের চিঠিতে এই বাক্যটি আসে।",
        },
      },
      {
        nr: 6,
        options: ["dass", "ob", "wenn"],
        answerIndex: 1,
        tag: "nebensatz-ob",
        why: {
          de: "»ob« leitet eine indirekte Ja/Nein-Frage ein. »dass« würde eine Tatsache melden, »wenn« eine Bedingung — hier wird aber gefragt.",
          en: "'ob' introduces an indirect yes/no question. 'dass' would report a fact and 'wenn' a condition — but here something is being asked.",
          it: "»ob« introduce una domanda indiretta sì/no. »dass« riporterebbe un fatto e »wenn« una condizione: qui invece si sta chiedendo.",
          bn: "»ob« পরোক্ষ হ্যাঁ/না প্রশ্ন শুরু করে। »dass« তথ্য জানাত, »wenn« শর্ত বোঝাত — কিন্তু এখানে প্রশ্ন করা হচ্ছে।",
        },
      },
      {
        nr: 7,
        options: ["auf", "in", "an"],
        answerIndex: 2,
        tag: "verben-mit-praeposition",
        why: {
          de: "»teilnehmen an« + Dativ ist fest: an einem Kurs teilnehmen. Die Präposition gehört zum Verb und lässt sich nicht aus der Bedeutung ableiten.",
          en: "'teilnehmen an' + Dativ is fixed: an einem Kurs teilnehmen. The preposition belongs to the verb and cannot be worked out from the meaning.",
          it: "»teilnehmen an« + Dativ è fisso: an einem Kurs teilnehmen. La preposizione appartiene al verbo e non si deduce dal significato.",
          bn: "»teilnehmen an« + Dativ একটি নির্দিষ্ট গঠন: an einem Kurs teilnehmen। Präposition-টি ক্রিয়ার অংশ, অর্থ থেকে অনুমান করা যায় না।",
        },
      },
      {
        nr: 8,
        options: [
          "könnte ich auch bis Januar warten",
          "ich könnte auch bis Januar warten",
          "auch bis Januar warten könnte ich",
        ],
        answerIndex: 0,
        tag: "wortstellung",
        why: {
          de: "Der Nebensatz »Falls der Kurs schon voll ist« besetzt Position 1, also muss das Verb direkt danach kommen und das Subjekt dahinter: …, könnte ich … Das ist die Verb-an-zweiter-Stelle-Regel.",
          en: "The subordinate clause 'Falls der Kurs schon voll ist' occupies position 1, so the verb must come immediately after it and the subject after that: …, könnte ich … That is the verb-second rule.",
          it: "La subordinata »Falls der Kurs schon voll ist« occupa la posizione 1, quindi il verbo deve seguirla subito e il soggetto viene dopo: …, könnte ich … È la regola del verbo in seconda posizione.",
          bn: "»Falls der Kurs schon voll ist« অধীন বাক্যটি ১ম স্থান দখল করে, তাই ক্রিয়া ঠিক তার পরেই আসবে এবং কর্তা তারপরে: …, könnte ich … এটাই ক্রিয়া-দ্বিতীয়-স্থান নিয়ম।",
        },
      },
      {
        nr: 9,
        options: ["werde", "würde", "wäre"],
        answerIndex: 1,
        tag: "konjunktiv-2",
        why: {
          de: "»Ich würde mich freuen« ist die höfliche Konjunktiv-II-Form und der übliche Schlusssatz eines formellen Briefes. »werde« wäre Futur, »wäre« passt nicht zu »freuen«.",
          en: "'Ich würde mich freuen' is the polite Konjunktiv II and the standard closing line of a formal letter. 'werde' would be future tense, and 'wäre' does not combine with 'freuen'.",
          it: "»Ich würde mich freuen« è il Konjunktiv II di cortesia e la chiusura tipica di una lettera formale. »werde« sarebbe futuro e »wäre« non si combina con »freuen«.",
          bn: "»Ich würde mich freuen« হলো ভদ্র Konjunktiv II এবং আনুষ্ঠানিক চিঠির প্রচলিত শেষ বাক্য। »werde« ভবিষ্যৎ কাল বোঝাত, আর »wäre« »freuen«-এর সাথে বসে না।",
        },
      },
      {
        nr: 10,
        options: ["in", "zu", "im"],
        answerIndex: 2,
        tag: "feste-wendung",
        why: {
          de: "»Vielen Dank im Voraus« ist eine feste Wendung und wird immer mit im geschrieben. Solche Formeln lohnt sich als Ganzes zu lernen.",
          en: "'Vielen Dank im Voraus' is a fixed expression, always with im. Formulas like this are worth learning as whole blocks.",
          it: "»Vielen Dank im Voraus« è un'espressione fissa, sempre con im. Vale la pena impararle come blocchi interi.",
          bn: "»Vielen Dank im Voraus« একটি নির্দিষ্ট বাগ্‌ধারা, সবসময় im দিয়ে। এ ধরনের বাক্যাংশ পুরোটা একসাথে শেখাই ভালো।",
        },
      },
    ],
  },

  teil2: {
    heading: "Nachricht an die Hausverwaltung",
    text: `Sehr geehrte Frau Berger,

ich wohne seit zwei Jahren in der Wohnung im zweiten Stock. Leider muss ich Ihnen mitteilen, dass die Heizung seit einer Woche nicht mehr richtig {11}. Am Abend wird es im Wohnzimmer sehr {12}, und meine Tochter ist letzte Woche krank geworden.

Ich habe schon zweimal im Büro {13}, aber leider hat niemand den Hörer abgenommen. Deshalb schreibe ich Ihnen jetzt eine {14}.

Könnten Sie bitte einen Techniker {15}? Ich bin von Montag bis Freitag ab 16 Uhr zu {16}. Am Wochenende geht es auch den ganzen Tag.

Falls Reparaturkosten {17}, teilen Sie mir das bitte vorher mit. Ich hoffe sehr, dass wir das Problem schnell {18} können.

Vielen Dank für Ihre {19}. Über eine schnelle Antwort würde ich mich sehr {20}.

Mit freundlichen Grüßen
Mahdin Islam`,

    bank: [
      { key: "a", word: "angerufen" },
      { key: "b", word: "kalt" },
      { key: "c", word: "lösen" },
      { key: "d", word: "warm" },
      { key: "e", word: "kaufen" },
      { key: "f", word: "Arbeit" },
      { key: "g", word: "entstehen" },
      { key: "h", word: "Hause" },
      { key: "i", word: "bringen" },
      { key: "j", word: "geschrieben" },
      { key: "k", word: "Hilfe" },
      { key: "l", word: "E-Mail" },
      { key: "m", word: "schicken" },
      { key: "n", word: "freuen" },
      { key: "o", word: "funktioniert" },
    ],

    items: [
      {
        nr: 11,
        answerKey: "o",
        tag: "wortschatz-verb",
        why: {
          de: "»Die Heizung funktioniert nicht« ist die normale Formulierung für ein kaputtes Gerät. Das Verb steht am Ende, weil »dass« einen Nebensatz einleitet.",
          en: "'Die Heizung funktioniert nicht' is the normal way to say a device is broken. The verb goes last because 'dass' introduces a subordinate clause.",
          it: "»Die Heizung funktioniert nicht« è il modo normale di dire che un apparecchio è rotto. Il verbo va in fondo perché »dass« introduce una subordinata.",
          bn: "কোনো যন্ত্র নষ্ট বোঝাতে স্বাভাবিক বাক্য হলো »Die Heizung funktioniert nicht«। »dass« অধীন বাক্য শুরু করায় ক্রিয়াটি শেষে বসে।",
        },
      },
      {
        nr: 12,
        answerKey: "b",
        tag: "wortschatz-adjektiv",
        why: {
          de: "Eine kaputte Heizung macht es kalt, nicht warm. »warm« steht auch im Wortkasten — genau als Falle.",
          en: "A broken heater makes it cold, not warm. 'warm' is also in the word bank, precisely as a trap.",
          it: "Un riscaldamento rotto rende freddo, non caldo. »warm« è nel riquadro proprio come trappola.",
          bn: "নষ্ট হিটারে ঘর ঠান্ডা হয়, গরম নয়। »warm« শব্দটিও তালিকায় আছে — ঠিক ফাঁদ হিসেবেই।",
        },
      },
      {
        nr: 13,
        answerKey: "a",
        tag: "perfekt",
        why: {
          de: "»Ich habe angerufen« — Perfekt mit haben. Der nächste Satz (»niemand hat den Hörer abgenommen«) zeigt, dass telefoniert wurde, nicht geschrieben.",
          en: "'Ich habe angerufen' — Perfekt with haben. The next sentence ('nobody picked up') shows this was a phone call, not a letter.",
          it: "»Ich habe angerufen« — Perfekt con haben. La frase seguente (»nessuno ha risposto«) mostra che si trattava di una telefonata, non di una lettera.",
          bn: "»Ich habe angerufen« — haben দিয়ে Perfekt। পরের বাক্য (»কেউ ফোন ধরেনি«) দেখায় যে ফোন করা হয়েছিল, লেখা হয়নি।",
        },
      },
      {
        nr: 14,
        answerKey: "l",
        tag: "wortschatz-nomen",
        why: {
          de: "»eine« zeigt ein feminines Nomen: die E-Mail. »geschrieben« ist ein Partizip und passt nach »eine« grammatisch nicht.",
          en: "'eine' signals a feminine noun: die E-Mail. 'geschrieben' is a participle and cannot follow 'eine'.",
          it: "»eine« indica un sostantivo femminile: die E-Mail. »geschrieben« è un participio e non può seguire »eine«.",
          bn: "»eine« একটি স্ত্রীলিঙ্গ বিশেষ্য নির্দেশ করে: die E-Mail। »geschrieben« একটি participle, »eine«-এর পরে বসতে পারে না।",
        },
      },
      {
        nr: 15,
        answerKey: "m",
        tag: "wortschatz-verb",
        why: {
          de: "»einen Techniker schicken« ist die übliche Bitte. »bringen« würde bedeuten, dass Sie ihn selbst mitbringen.",
          en: "'einen Techniker schicken' is the usual request. 'bringen' would mean you bring him along yourself.",
          it: "»einen Techniker schicken« è la richiesta abituale. »bringen« significherebbe portarlo di persona.",
          bn: "»einen Techniker schicken« হলো প্রচলিত অনুরোধ। »bringen« হলে বোঝাত আপনি নিজেই তাকে নিয়ে আসছেন।",
        },
      },
      {
        nr: 16,
        answerKey: "h",
        tag: "feste-wendung",
        why: {
          de: "»zu Hause« ist eine feste Wendung und wird ohne Artikel geschrieben. Sie bedeutet »wo?«, nicht »wohin?« — dafür sagt man »nach Hause«.",
          en: "'zu Hause' is a fixed expression written without an article. It means 'where?', not 'where to?' — for that you say 'nach Hause'.",
          it: "»zu Hause« è un'espressione fissa senza articolo. Significa »dove?«, non »verso dove?«: per quello si dice »nach Hause«.",
          bn: "»zu Hause« একটি নির্দিষ্ট বাগ্‌ধারা, আর্টিকেল ছাড়াই লেখা হয়। এটি »কোথায়?« বোঝায়, »কোথায় যাচ্ছে?« নয় — তার জন্য »nach Hause«।",
        },
      },
      {
        nr: 17,
        answerKey: "g",
        tag: "wortschatz-verb",
        why: {
          de: "»Kosten entstehen« ist die feste Verbindung: Kosten kommen zustande. Nach »Falls« steht ein Nebensatz, das Verb also am Ende.",
          en: "'Kosten entstehen' is the fixed collocation: costs arise. 'Falls' introduces a subordinate clause, so the verb goes to the end.",
          it: "»Kosten entstehen« è la collocazione fissa: i costi sorgono. »Falls« introduce una subordinata, quindi il verbo va in fondo.",
          bn: "»Kosten entstehen« একটি প্রচলিত সংযোগ: খরচ তৈরি হওয়া। »Falls« অধীন বাক্য শুরু করে, তাই ক্রিয়া শেষে বসে।",
        },
      },
      {
        nr: 18,
        answerKey: "c",
        tag: "wortschatz-verb",
        why: {
          de: "»ein Problem lösen« ist die richtige Verbindung. Im Deutschen wird ein Problem gelöst, nicht »gemacht« oder »gebracht«.",
          en: "'ein Problem lösen' is the correct collocation. In German a problem is solved, not 'made' or 'brought'.",
          it: "»ein Problem lösen« è la collocazione corretta. In tedesco un problema si risolve, non si »fa« né si »porta«.",
          bn: "»ein Problem lösen« সঠিক সংযোগ। জার্মানে সমস্যা »সমাধান« করা হয়, »বানানো« বা »আনা« নয়।",
        },
      },
      {
        nr: 19,
        answerKey: "k",
        tag: "wortschatz-nomen",
        why: {
          de: "»Vielen Dank für Ihre Hilfe« ist die Standardformel. »Arbeit« steht ebenfalls im Kasten, klingt hier aber unhöflich und unpassend.",
          en: "'Vielen Dank für Ihre Hilfe' is the standard formula. 'Arbeit' is also in the bank but sounds impolite and out of place here.",
          it: "»Vielen Dank für Ihre Hilfe« è la formula standard. »Arbeit« è nel riquadro ma qui suona scortese e fuori luogo.",
          bn: "»Vielen Dank für Ihre Hilfe« হলো প্রচলিত সূত্র। »Arbeit« তালিকায় আছে বটে, কিন্তু এখানে অভদ্র ও বেমানান শোনায়।",
        },
      },
      {
        nr: 20,
        answerKey: "n",
        tag: "verben-mit-praeposition",
        why: {
          de: "»sich über etwas freuen« — und nach »würde ich mich sehr« fehlt der Infinitiv am Satzende: freuen.",
          en: "'sich über etwas freuen' — and after 'würde ich mich sehr' the infinitive is missing at the end: freuen.",
          it: "»sich über etwas freuen« — e dopo »würde ich mich sehr« manca l'infinito alla fine: freuen.",
          bn: "»sich über etwas freuen« — আর »würde ich mich sehr«-এর পরে বাক্যের শেষে infinitiv দরকার: freuen।",
        },
      },
    ],
  },
};
