import type { SbSet } from "./types";

/**
 * SB-06 — Eine Beschwerde bei der Bahn (Teil 1) und ein Informationstext
 * über das Deutschlandticket (Teil 2).
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Teil 1 works through the tense system, which travel writing forces you
 * to use properly: a narrative in the Perfekt (gaps 1, 4), one Präteritum
 * form that is normal even in speech (gap 3 — »war«), and a Konjunktiv II
 * request at the end (gap 10). Between them sit the two prepositions that
 * cost the most marks in timetables, »mit« and »nach« (gaps 2, 7).
 *
 * Teil 2 turns on compound nouns: four of the fifteen bank words are
 * built from parts the learner already knows, and the explanations take
 * each one apart rather than translating it whole.
 */
export const sb06: SbSet = {
  code: "SB-06",

  title: {
    de: "Beschwerde bei der Bahn und Infotext zum Deutschlandticket",
    en: "A complaint to the railway and an information text on the Deutschlandticket",
    it: "Un reclamo alle ferrovie e un testo sul Deutschlandticket",
    bn: "রেলে অভিযোগ ও Deutschlandticket নিয়ে তথ্যপত্র",
  },

  intro: {
    de: "Erst ein Beschwerdebrief — eine Erzählung in der Vergangenheit —, dann ein sachlicher Infotext. Achte in Teil 1 darauf, welche Zeitform der Satz schon verlangt.",
    en: "First a complaint letter — a narrative in the past — then a factual information text. In Teil 1, notice which tense the sentence already demands.",
    it: "Prima una lettera di reclamo, un racconto al passato, poi un testo informativo. Nella parte 1 osserva quale tempo verbale la frase richiede già.",
    bn: "প্রথমে একটি অভিযোগপত্র — অতীতের বর্ণনা — তারপর একটি তথ্যমূলক লেখা। অংশ ১-এ খেয়াল করুন বাক্যটি কোন কাল দাবি করছে।",
  },

  /* ================================================================== */
  teil1: {
    heading: "Beschwerde an den Kundenservice",

    text: `Sehr geehrte Damen und Herren,

am vergangenen Freitag {1} ich mit dem Zug von Siegen nach Köln fahren. Ich war {2} meiner Familie unterwegs, wir hatten Sitzplätze reserviert.

Der Zug hatte von Anfang an Verspätung. {3} zeigte die Anzeige zehn Minuten, dann dreißig. Am Ende {4} wir erst zwei Stunden später in Köln angekommen.

Das Schlimmste war aber nicht die Verspätung. Im ganzen Zug {5} es keine Information, und das Personal konnte uns nichts sagen. Meine Tochter ist fünf Jahre alt, und wir mussten {6} eine Stunde im Gang stehen, obwohl wir Plätze gebucht hatten.

Weil wir den Anschlusszug {7} Bonn verpasst haben, sind wir erst um dreiundzwanzig Uhr zu Hause gewesen. Ich {8} Ihnen die Fahrkarten und die Reservierung als Anhang.

Ich hoffe, {9} Sie den Fall prüfen. {10} Sie mir bitte mitteilen, ob ich eine Entschädigung bekomme?

Mit freundlichen Grüßen
Mahdin Islam`,

    items: [
      {
        nr: 1,
        options: ["will", "wollte", "wollen"],
        answerIndex: 1,
        tag: "verbform-praeteritum",
        why: {
          de: "»am vergangenen Freitag« zeigt Vergangenheit, und Modalverben stehen dabei fast immer im Präteritum: wollte, konnte, musste — nicht »habe gewollt«. Merke dir diese Gruppe als Ausnahme von der Perfekt-Regel.",
          en: "'last Friday' signals the past, and modal verbs there are almost always in the Präteritum: wollte, konnte, musste — not 'habe gewollt'. Learn this group as the exception to the Perfekt rule.",
          it: "»venerdì scorso« indica il passato, e i verbi modali stanno quasi sempre al Präteritum: wollte, konnte, musste.",
          bn: "»গত শুক্রবার« অতীত বোঝায়, আর মোডাল ক্রিয়া তখন প্রায় সবসময় Präteritum-এ: wollte, konnte, musste — »habe gewollt« নয়।",
        },
      },
      {
        nr: 2,
        options: ["mit", "bei", "zu"],
        answerIndex: 0,
        tag: "praeposition-dativ",
        why: {
          de: "»mit meiner Familie unterwegs« — in Begleitung von jemandem heißt immer »mit« + Dativ. »bei meiner Familie« wäre ein Ort (zu Hause bei ihnen), nicht eine gemeinsame Reise.",
          en: "'mit meiner Familie unterwegs' — in someone's company is always 'mit' + dative. 'bei meiner Familie' would be a place (at their home), not travelling together.",
          it: "»mit meiner Familie«: in compagnia di qualcuno è sempre »mit« + dativo. »bei« indicherebbe un luogo.",
          bn: "»mit meiner Familie unterwegs« — কারও সঙ্গে থাকা মানে সবসময় »mit« + Dativ। »bei meiner Familie« হতো একটি স্থান।",
        },
      },
      {
        nr: 3,
        options: ["Zuletzt", "Erst", "Zuerst"],
        answerIndex: 2,
        tag: "adverb-reihenfolge",
        why: {
          de: "Der Satz zählt eine Reihenfolge auf: erst zehn Minuten, dann dreißig. »Zuerst« heißt: als Erstes. »Erst« allein hieße »nicht früher als« und passt hier nicht, »zuletzt« wäre das Ende der Reihe.",
          en: "The sentence lists a sequence: first ten minutes, then thirty. 'Zuerst' means first of all. 'Erst' alone would mean 'not before' and does not fit; 'zuletzt' would be the end of the sequence.",
          it: "La frase elenca una sequenza: prima dieci minuti, poi trenta. »Zuerst« significa per primo.",
          bn: "বাক্যটি একটি ক্রম বলছে: প্রথমে দশ মিনিট, তারপর ত্রিশ। »Zuerst« মানে সবার আগে। একা »Erst« মানে হতো »তার আগে নয়«।",
        },
      },
      {
        nr: 4,
        options: ["haben", "waren", "sind"],
        answerIndex: 2,
        tag: "perfekt-hilfsverb",
        why: {
          de: "»ankommen« ist ein Bewegungsverb und bildet das Perfekt mit sein: wir sind angekommen. Das Partizip steht schon am Satzende und verrät dir, dass ein Hilfsverb gesucht ist — du musst nur noch das richtige wählen.",
          en: "'ankommen' is a verb of motion and forms the Perfekt with sein: wir sind angekommen. The participle is already at the end of the sentence, telling you an auxiliary is wanted — you only have to pick the right one.",
          it: "»ankommen« è un verbo di moto e forma il Perfekt con sein. Il participio in fondo ti dice già che serve un ausiliare.",
          bn: "»ankommen« গতিবাচক ক্রিয়া, sein দিয়ে Perfekt গঠন করে। বাক্যের শেষে participle-ই বলে দেয় সহায়ক ক্রিয়া লাগবে।",
        },
      },
      {
        nr: 5,
        options: ["war", "gab", "hatte"],
        answerIndex: 1,
        tag: "wendung",
        why: {
          de: "»es gibt« im Präteritum ist »es gab«. Die Konstruktion ist fest: es gibt / es gab / es hat gegeben — immer mit »es«, immer mit Akkusativ. »es war keine Information« wäre falsches Deutsch.",
          en: "'es gibt' in the past is 'es gab'. The construction is fixed: es gibt / es gab / es hat gegeben — always with 'es', always with the accusative. 'es war keine Information' would be wrong German.",
          it: "»es gibt« al passato è »es gab«. La costruzione è fissa, sempre con »es« e l'accusativo.",
          bn: "»es gibt«-এর অতীত হলো »es gab«। গঠনটি নির্দিষ্ট: সবসময় »es« সহ, সবসময় Akkusativ।",
        },
      },
      {
        nr: 6,
        options: ["über", "mehr", "als"],
        answerIndex: 0,
        tag: "wortschatz-adverb",
        why: {
          de: "»über eine Stunde« heißt: mehr als eine Stunde. Vor einer Zeitangabe steht »über«, nicht »mehr«: über zwei Jahre, über hundert Euro. »mehr als eine Stunde« wäre auch richtig — aber dann bräuchte man beide Wörter, und nur eines passt in die Lücke.",
          en: "'über eine Stunde' means more than an hour. Before a quantity you use 'über', not 'mehr': über zwei Jahre, über hundert Euro. 'mehr als eine Stunde' would also be correct — but that needs two words, and only one fits the gap.",
          it: "»über eine Stunde« significa più di un'ora. Davanti a una quantità si usa »über«, non »mehr«.",
          bn: "»über eine Stunde« মানে এক ঘণ্টার বেশি। পরিমাণের আগে »über« বসে, »mehr« নয়। »mehr als eine Stunde«-ও ঠিক, কিন্তু তাতে দুটি শব্দ লাগত।",
        },
      },
      {
        nr: 7,
        options: ["zu", "in", "nach"],
        answerIndex: 2,
        tag: "praeposition-richtung",
        why: {
          de: "Bei Städten und Ländern ohne Artikel steht »nach«: nach Bonn, nach Köln, nach Italien. »zu« nimmt man bei Personen und Einrichtungen (zum Arzt), »in« bei Ländern mit Artikel (in die Türkei).",
          en: "With towns and countries that take no article you use 'nach': nach Bonn, nach Italien. 'zu' is for people and institutions (zum Arzt), 'in' for countries with an article (in die Türkei).",
          it: "Con città e paesi senza articolo si usa »nach«. »zu« per persone e istituzioni, »in« per paesi con articolo.",
          bn: "আর্টিকেলবিহীন শহর ও দেশের সঙ্গে »nach«: nach Bonn, nach Italien। ব্যক্তি ও প্রতিষ্ঠানে »zu«, আর্টিকেলসহ দেশে »in«।",
        },
      },
      {
        nr: 8,
        options: ["schicken", "schicke", "geschickt"],
        answerIndex: 1,
        tag: "verbform-praesens",
        why: {
          de: "»Ich schicke Ihnen … als Anhang« — der Anhang ist jetzt dabei, also Präsens. Zu »ich« gehört die Endung -e. »geschickt« bräuchte ein »habe« davor, und das fehlt.",
          en: "'Ich schicke Ihnen … als Anhang' — the attachment is with this email, so present tense. 'ich' takes the ending -e. 'geschickt' would need a 'habe' before it, and there is none.",
          it: "»Ich schicke Ihnen … als Anhang«: l'allegato è qui, quindi presente. Con »ich« la desinenza è -e.",
          bn: "»Ich schicke Ihnen … als Anhang« — সংযুক্তি এখনই আছে, তাই বর্তমান কাল। »ich«-এর সঙ্গে -e প্রত্যয়।",
        },
      },
      {
        nr: 9,
        options: ["dass", "ob", "wenn"],
        answerIndex: 0,
        tag: "nebensatz-dass",
        why: {
          de: "»Ich hoffe, dass Sie den Fall prüfen.« Nach »hoffen« steht ein Wunsch als Feststellung, also »dass«. »ob« würde eine offene Frage einleiten — man hofft aber nicht, OB etwas passiert, sondern DASS es passiert.",
          en: "'Ich hoffe, dass Sie den Fall prüfen.' After 'hoffen' comes a wish stated as a fact, so 'dass'. 'ob' would introduce an open question — you do not hope WHETHER something happens, but THAT it happens.",
          it: "Dopo »hoffen« si esprime un desiderio come constatazione, quindi »dass«. Non si spera SE, ma CHE.",
          bn: "»hoffen«-এর পরে ইচ্ছা বিবৃতি হিসেবে আসে, তাই »dass«। »ob« খোলা প্রশ্ন আনত — কেউ আশা করে না »কি না«, আশা করে »যে«।",
        },
      },
      {
        nr: 10,
        options: ["Konnten", "Könnten", "Können"],
        answerIndex: 1,
        tag: "konjunktiv-2",
        why: {
          de: "»Könnten Sie mir bitte mitteilen …?« — der Konjunktiv II macht aus einer Forderung eine Bitte. In einem Beschwerdebrief ist das wichtig: Der Ton entscheidet mit darüber, ob man bekommt, was man will. »Konnten« wäre Vergangenheit.",
          en: "'Könnten Sie mir bitte mitteilen …?' — the Konjunktiv II turns a demand into a request. In a complaint letter that matters: tone is part of whether you get what you want. 'Konnten' would be past.",
          it: "Il Konjunktiv II trasforma una pretesa in una richiesta. In una lettera di reclamo il tono conta.",
          bn: "Konjunktiv II দাবিকে অনুরোধে বদলে দেয়। অভিযোগপত্রে এটা গুরুত্বপূর্ণ: সুরই অনেকটা ঠিক করে আপনি যা চান তা পাবেন কি না।",
        },
      },
    ],
  },

  /* ================================================================== */
  teil2: {
    heading: "Das Deutschlandticket – häufige Fragen",

    text: `Was ist das Deutschlandticket?

Das Deutschlandticket ist ein Abo für den gesamten {11} in Deutschland. Damit fahren Sie in allen Bussen, Straßenbahnen und Regionalzügen, egal in welchem Bundesland.

Wo gilt es nicht?

Im Fernverkehr. ICE, IC und EC sind {12}. Wer diese Züge benutzen möchte, braucht eine zusätzliche {13}.

Wie lange bin ich gebunden?

Gar nicht lange: Das Abo ist monatlich {14}. Sie müssen allerdings bis zum zehnten Tag des Monats {15}, sonst läuft es einen Monat weiter.

Kann ich jemanden {16}?

Leider nein. Das Ticket gilt nur für eine Person und ist nicht {17}. Kinder unter sechs Jahren fahren wie immer kostenlos. Für das Fahrrad brauchen Sie ebenfalls eine eigene Karte.

Gibt es eine Ermäßigung?

Für Studierende und Auszubildende bieten viele Hochschulen und Betriebe einen {18} an. Fragen Sie dort nach.

Wo bekomme ich das Ticket?

Ausschließlich digital, über die App oder als Chipkarte. Ein Ticket aus {19} gibt es nicht mehr.

Noch Fragen? Unser Kundenservice ist täglich {20}.`,

    bank: [
      { key: "a", word: "kündbar" },
      { key: "b", word: "Fahrkarte" },
      { key: "c", word: "Quittung" },
      { key: "d", word: "Nahverkehr" },
      { key: "e", word: "mitnehmen" },
      { key: "f", word: "verbieten" },
      { key: "g", word: "übertragbar" },
      { key: "h", word: "kündigen" },
      { key: "i", word: "teuer" },
      { key: "j", word: "ausgeschlossen" },
      { key: "k", word: "Fernverkehr" },
      { key: "l", word: "Rabatt" },
      { key: "m", word: "Papier" },
      { key: "n", word: "Anmeldung" },
      { key: "o", word: "erreichbar" },
    ],

    items: [
      {
        nr: 11,
        answerKey: "d",
        tag: "wortschatz-nomen",
        why: {
          de: "»ein Abo für den gesamten Nahverkehr« — nah + Verkehr = der Verkehr in der Nähe, also Busse und Regionalzüge. »Fernverkehr« (k) ist das Gegenteil und wird im nächsten Abschnitt ausdrücklich ausgeschlossen.",
          en: "'an abo for the whole Nahverkehr' — nah + Verkehr = transport nearby, so buses and regional trains. 'Fernverkehr' (k) is the opposite and is expressly excluded in the next section.",
          it: "»nah + Verkehr« = trasporto vicino: autobus e treni regionali. »Fernverkehr« (k) è il contrario.",
          bn: "»nah + Verkehr« = কাছের পরিবহন, অর্থাৎ বাস ও আঞ্চলিক ট্রেন। »Fernverkehr« (k) উল্টো, পরের অংশেই বাদ দেওয়া হয়েছে।",
        },
      },
      {
        nr: 12,
        answerKey: "j",
        tag: "wortschatz-adjektiv",
        why: {
          de: "»ICE, IC und EC sind ausgeschlossen« — ausschließen heißt: nicht dazugehören lassen. Nach »sind« steht ein Partizip ohne Endung. »verbieten« (f) wäre ein Verb im Infinitiv und passt grammatisch nicht.",
          en: "'ICE, IC and EC sind ausgeschlossen' — ausschließen means to leave out. After 'sind' comes a participle without an ending. 'verbieten' (f) is an infinitive and does not fit grammatically.",
          it: "»ausschließen« significa escludere. Dopo »sind« serve un participio. »verbieten« (f) è un infinito.",
          bn: "»ausschließen« মানে বাদ দেওয়া। »sind«-এর পরে প্রত্যয়হীন participle। »verbieten« (f) infinitive, ব্যাকরণে মেলে না।",
        },
      },
      {
        nr: 13,
        answerKey: "b",
        tag: "wortschatz-nomen",
        why: {
          de: "»braucht eine zusätzliche Fahrkarte« — »eine zusätzliche« verlangt ein weibliches Nomen. »Quittung« (c) ist zwar auch weiblich, aber eine Quittung bekommt man NACH dem Bezahlen; fahren darf man damit nicht.",
          en: "'braucht eine zusätzliche Fahrkarte' — 'eine zusätzliche' requires a feminine noun. 'Quittung' (c) is feminine too, but a receipt is what you get AFTER paying; it does not let you travel.",
          it: "»eine zusätzliche« richiede un femminile. »Quittung« (c) è femminile ma è la ricevuta, non il biglietto.",
          bn: "»eine zusätzliche« স্ত্রীলিঙ্গ বিশেষ্য চায়। »Quittung« (c)-ও স্ত্রীলিঙ্গ, কিন্তু রসিদ পাওয়া যায় টাকা দেওয়ার পরে; তা দিয়ে ভ্রমণ করা যায় না।",
        },
      },
      {
        nr: 14,
        answerKey: "a",
        tag: "wortschatz-adjektiv",
        why: {
          de: "»Das Abo ist monatlich kündbar.« Das Suffix -bar heißt: man kann es tun. kündbar = man kann kündigen, übertragbar = man kann übertragen, erreichbar = man kann erreichen. Drei Wörter derselben Familie stehen in dieser Bank — das Suffix erkennst du, den Stamm musst du wählen.",
          en: "'Das Abo ist monatlich kündbar.' The suffix -bar means it can be done. kündbar = can be cancelled, übertragbar = can be transferred, erreichbar = can be reached. Three words of that family are in this bank — you recognise the suffix, you choose the stem.",
          it: "Il suffisso -bar significa »si può fare«. Tre parole di questa famiglia sono nella lista.",
          bn: "-bar প্রত্যয় মানে »করা যায়«। kündbar = বাতিল করা যায়, übertragbar = হস্তান্তর করা যায়, erreichbar = পাওয়া যায়। এই তালিকায় এই পরিবারের তিনটি শব্দ আছে।",
        },
      },
      {
        nr: 15,
        answerKey: "h",
        tag: "wortschatz-verb",
        why: {
          de: "»Sie müssen bis zum zehnten Tag kündigen« — nach »müssen« steht der Infinitiv am Satzende. Achtung auf den Unterschied zu Lücke 14: dort das Adjektiv kündbar, hier das Verb kündigen. Die Grammatik des Satzes entscheidet, nicht die Bedeutung.",
          en: "'Sie müssen bis zum zehnten Tag kündigen' — after 'müssen' the infinitive goes at the end. Note the difference from gap 14: there the adjective kündbar, here the verb kündigen. The sentence's grammar decides, not the meaning.",
          it: "Dopo »müssen« l'infinito va in fondo. Attenzione alla differenza con il buco 14: lì l'aggettivo, qui il verbo.",
          bn: "»müssen«-এর পরে infinitive শেষে। ১৪ নম্বরের সঙ্গে পার্থক্য দেখুন: সেখানে বিশেষণ kündbar, এখানে ক্রিয়া kündigen।",
        },
      },
      {
        nr: 16,
        answerKey: "e",
        tag: "wortschatz-verb",
        why: {
          de: "»Kann ich jemanden mitnehmen?« — jemanden mitnehmen heißt: ihn mitfahren lassen. Nach »kann ich« steht der Infinitiv am Ende, und die Antwort darunter (»gilt nur für eine Person«) bestätigt, worum es geht.",
          en: "'Kann ich jemanden mitnehmen?' — to take someone along. After 'kann ich' the infinitive goes at the end, and the answer below ('valid for one person only') confirms the topic.",
          it: "»jemanden mitnehmen« = portare qualcuno con sé. La risposta sotto conferma il tema.",
          bn: "»jemanden mitnehmen« মানে কাউকে সঙ্গে নেওয়া। »kann ich«-এর পরে infinitive শেষে, আর নিচের উত্তরই বিষয়টি নিশ্চিত করে।",
        },
      },
      {
        nr: 17,
        answerKey: "g",
        tag: "wortschatz-adjektiv",
        why: {
          de: "»ist nicht übertragbar« — übertragen heißt hier: an jemand anderen weitergeben. Mit dem Suffix -bar: man kann es nicht weitergeben. Der Satz davor sagt schon, warum: »gilt nur für eine Person«.",
          en: "'ist nicht übertragbar' — übertragen here means to pass on to someone else. With the -bar suffix: it cannot be passed on. The sentence before already says why: 'valid for one person only'.",
          it: "»übertragbar« = trasferibile. La frase precedente spiega il perché.",
          bn: "»übertragbar« মানে অন্যকে দেওয়া যায় এমন। আগের বাক্যটিই কারণ বলে: »কেবল একজনের জন্য বৈধ«।",
        },
      },
      {
        nr: 18,
        answerKey: "l",
        tag: "wortschatz-nomen",
        why: {
          de: "»bieten … einen Rabatt an« — ein Rabatt ist ein Preisnachlass. »einen« zeigt männlich im Akkusativ. Die Überschrift des Abschnitts (»Gibt es eine Ermäßigung?«) ist die Umschreibung desselben Wortes — Prüfungstexte wechseln solche Synonyme absichtlich.",
          en: "'bieten … einen Rabatt an' — a Rabatt is a price reduction. 'einen' marks masculine accusative. The section heading ('Gibt es eine Ermäßigung?') is a paraphrase of the same word — exam texts swap such synonyms deliberately.",
          it: "»Rabatt« è uno sconto. Il titolo della sezione usa il sinonimo »Ermäßigung«.",
          bn: "»Rabatt« মানে ছাড়। »einen« পুংলিঙ্গ Akkusativ বোঝায়। অনুচ্ছেদের শিরোনামে একই অর্থের অন্য শব্দ »Ermäßigung« — পরীক্ষার লেখা ইচ্ছে করেই সমার্থক বদলায়।",
        },
      },
      {
        nr: 19,
        answerKey: "m",
        tag: "wortschatz-nomen",
        why: {
          de: "»Ein Ticket aus Papier gibt es nicht mehr.« Der Gegensatz steht im Satz davor: »Ausschließlich digital«. Digital ↔ Papier — der Text baut den Gegensatz selbst auf, du musst ihn nur sehen.",
          en: "'Ein Ticket aus Papier gibt es nicht mehr.' The contrast is in the sentence before: 'digital only'. Digital ↔ paper — the text builds the contrast itself, you only have to see it.",
          it: "Il contrasto è nella frase precedente: »solo digitale«. Digitale ↔ carta.",
          bn: "বৈপরীত্যটি আগের বাক্যেই: »কেবল ডিজিটাল«। ডিজিটাল ↔ কাগজ — লেখাটিই বৈপরীত্য গড়ে দেয়।",
        },
      },
      {
        nr: 20,
        answerKey: "o",
        tag: "wortschatz-adjektiv",
        why: {
          de: "»Unser Kundenservice ist täglich erreichbar.« Wieder das Suffix -bar: man kann ihn erreichen. Die dritte Form derselben Familie in diesem Text — wenn du die Regel einmal siehst, löst du alle drei.",
          en: "'Unser Kundenservice ist täglich erreichbar.' The -bar suffix again: he can be reached. The third form of the same family in this text — once you see the rule, you solve all three.",
          it: "Ancora il suffisso -bar: raggiungibile. La terza forma della stessa famiglia nel testo.",
          bn: "আবারও -bar প্রত্যয়: পাওয়া যায় এমন। এই লেখায় একই পরিবারের তৃতীয় রূপ — নিয়মটা একবার ধরলে তিনটিই মিলে যায়।",
        },
      },
    ],
  },
};
