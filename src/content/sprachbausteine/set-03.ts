import type { SbSet } from "./types";

/**
 * SB-03 — Entschuldigung beim Arbeitgeber (Teil 1) und ein Kursangebot
 * der Krankenkasse (Teil 2).
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Teil 1 is built around the three things that actually decide these
 * gaps at B1, in rotation so you cannot fall into a rhythm:
 *   · what the WORD ORDER around the gap proves (gaps 2, 6, 9),
 *   · which case a fixed preposition demands (gaps 3, 5, 8),
 *   · which verb form the rest of the sentence has already fixed
 *     (gaps 1, 4, 7, 10).
 *
 * Teil 2 punishes exactly one habit: choosing a word because it "sounds
 * about right" instead of checking what the sentence needs grammatically.
 * Several of the five unused words fit the topic perfectly and fit the
 * sentence not at all.
 */
export const sb03: SbSet = {
  code: "SB-03",

  title: {
    de: "Entschuldigung beim Arbeitgeber und ein Kursangebot",
    en: "An apology to an employer and a course offer",
    it: "Una scusa al datore di lavoro e l'offerta di un corso",
    bn: "নিয়োগকর্তার কাছে দুঃখপ্রকাশ ও একটি কোর্সের প্রস্তাব",
  },

  intro: {
    de: "Erst eine förmliche E-Mail an den Chef, dann ein Informationstext der Krankenkasse. Lies bei Teil 1 immer den ganzen Satz zu Ende, bevor du wählst — oft entscheidet das letzte Wort.",
    en: "First a formal email to the boss, then an information text from the health insurer. In Teil 1 always read to the end of the sentence before choosing — often the last word decides it.",
    it: "Prima un'email formale al capo, poi un testo informativo della cassa malattia. Nella parte 1 leggi sempre la frase fino in fondo prima di scegliere.",
    bn: "প্রথমে বসকে আনুষ্ঠানিক ইমেইল, তারপর স্বাস্থ্যবিমার তথ্যপত্র। অংশ ১-এ বেছে নেওয়ার আগে পুরো বাক্যটি শেষ পর্যন্ত পড়ুন — প্রায়ই শেষ শব্দটাই ঠিক করে দেয়।",
  },

  /* ================================================================== */
  teil1: {
    heading: "E-Mail an den Arbeitgeber",

    text: `Sehr geehrter Herr Brandt,

leider {1} ich Ihnen mitteilen, dass ich heute nicht zur Arbeit kommen kann. Ich bin seit gestern Abend krank, {2} ich habe hohes Fieber.

Heute Morgen war ich {3} Arzt. Er hat mich bis Freitag krankgeschrieben. Die Krankmeldung {4} ich Ihnen morgen per Post.

Es tut mir sehr leid, weil wir diese Woche viel {5} tun haben. Ich habe Frau Özdemir schon gefragt, {6} sie die Bestellung für Herrn Keller übernehmen kann. Sie hat zugesagt.

Falls es etwas Dringendes gibt, {7} Sie mich gern anrufen. Ich bin zu Hause und gehe ans Telefon.

Ich hoffe, dass ich {8} Montag wieder gesund bin. Sobald ich {9}, melde ich mich bei Ihnen.

Vielen Dank für Ihr Verständnis. Ich {10} mich für die Umstände.

Mit freundlichen Grüßen
Mahdin Islam`,

    items: [
      {
        nr: 1,
        options: ["muss", "musste", "müssen"],
        answerIndex: 0,
        tag: "verbform-praesens",
        why: {
          de: "Die Nachricht handelt von heute: »ich muss Ihnen mitteilen«. »musste« wäre Vergangenheit, »müssen« passt nicht zu »ich«. Merke: Nach »leider« steht das Verb, weil »leider« Position 1 besetzt — Verb an zweiter Stelle.",
          en: "The message is about today: 'ich muss Ihnen mitteilen'. 'musste' is past; 'müssen' does not agree with 'ich'. Note: after 'leider' the verb comes next, because 'leider' occupies position 1 — verb second.",
          it: "Il messaggio riguarda oggi: »ich muss Ihnen mitteilen«. »musste« è passato, »müssen« non concorda con »ich«.",
          bn: "বার্তাটি আজকের: »ich muss Ihnen mitteilen«। »musste« অতীত, »müssen« »ich«-এর সঙ্গে মেলে না। মনে রাখুন: »leider« প্রথম স্থানে থাকায় ক্রিয়া দ্বিতীয় স্থানে।",
        },
      },
      {
        nr: 2,
        options: ["denn", "weil", "obwohl"],
        answerIndex: 0,
        tag: "konnektor-hauptsatz",
        why: {
          de: "Sieh dir die Wortstellung an: »ich habe hohes Fieber« — Verb an zweiter Stelle, also ein Hauptsatz. Nur »denn« verbindet zwei Hauptsätze. »weil« würde verlangen: weil ich hohes Fieber habe.",
          en: "Look at the word order: 'ich habe hohes Fieber' — verb second, so a main clause. Only 'denn' joins two main clauses. 'weil' would require: weil ich hohes Fieber habe.",
          it: "Guarda l'ordine: »ich habe hohes Fieber« — verbo in seconda posizione, quindi principale. Solo »denn« unisce due principali.",
          bn: "শব্দক্রম দেখুন: »ich habe hohes Fieber« — ক্রিয়া দ্বিতীয় স্থানে, অর্থাৎ প্রধান বাক্য। কেবল »denn« দুটি প্রধান বাক্য জোড়ে।",
        },
      },
      {
        nr: 3,
        options: ["beim", "zum", "im"],
        answerIndex: 0,
        tag: "praeposition-ort",
        why: {
          de: "»Ich war beim Arzt« — wo ich WAR, das ist Dativ: bei dem = beim. »zum Arzt« (wohin) braucht ein Bewegungsverb: ich gehe zum Arzt. Faustregel: war → beim, gehe → zum.",
          en: "'Ich war beim Arzt' — where I WAS, so Dativ: bei dem = beim. 'zum Arzt' (where to) needs a verb of motion: ich gehe zum Arzt. Rule of thumb: war → beim, gehe → zum.",
          it: "»Ich war beim Arzt« — dove ERO, quindi dativo. »zum Arzt« richiede un verbo di moto.",
          bn: "»Ich war beim Arzt« — কোথায় ছিলাম, তাই Dativ: bei dem = beim। »zum Arzt« (কোথায় যাচ্ছি) গতিবাচক ক্রিয়া চায়। নিয়ম: war → beim, gehe → zum।",
        },
      },
      {
        nr: 4,
        options: ["schicke", "schicken", "geschickt"],
        answerIndex: 0,
        tag: "verbform-praesens",
        why: {
          de: "»morgen« zeigt Zukunft, und im Deutschen nimmt man dafür ganz normal das Präsens: ich schicke sie morgen. »geschickt« bräuchte ein Hilfsverb (habe geschickt) und wäre Vergangenheit.",
          en: "'morgen' signals the future, and German normally uses the present for that: ich schicke sie morgen. 'geschickt' would need an auxiliary (habe geschickt) and would be past.",
          it: "»morgen« indica il futuro, e in tedesco si usa normalmente il presente.",
          bn: "»morgen« ভবিষ্যৎ বোঝায়, আর জার্মানে তার জন্য সাধারণ বর্তমান কালই চলে: ich schicke sie morgen।",
        },
      },
      {
        nr: 5,
        options: ["zu", "für", "um"],
        answerIndex: 0,
        tag: "wendung",
        why: {
          de: "»viel zu tun haben« ist eine feste Wendung: viel zu tun, nichts zu tun, wenig zu tun. Hier hilft kein Regeldenken — solche Wendungen lernt man als Ganzes.",
          en: "'viel zu tun haben' is a fixed expression: viel zu tun, nichts zu tun, wenig zu tun. No rule helps here — learn such phrases whole.",
          it: "»viel zu tun haben« è un'espressione fissa. Qui non serve una regola: si impara intera.",
          bn: "»viel zu tun haben« একটি নির্দিষ্ট বাগধারা। এখানে নিয়ম কাজে লাগে না — এমন বাগধারা গোটা শেখাই ভালো।",
        },
      },
      {
        nr: 6,
        options: ["ob", "dass", "wenn"],
        answerIndex: 0,
        tag: "nebensatz-ob",
        why: {
          de: "»Ich habe gefragt, ob …« — bei einer Frage ohne Fragewort steht ob. »dass« würde eine Feststellung einleiten, und die fragt man nicht. Eselsbrücke: ob = ja/nein.",
          en: "'Ich habe gefragt, ob …' — an indirect yes/no question takes ob. 'dass' would introduce a statement, and you do not ask a statement. Mnemonic: ob = yes/no.",
          it: "»Ich habe gefragt, ob …« — una domanda sì/no indiretta vuole ob.",
          bn: "»Ich habe gefragt, ob …« — হ্যাঁ/না প্রশ্নে ob বসে। »dass« বিবৃতি আনত, আর বিবৃতি জিজ্ঞেস করা হয় না। মনে রাখুন: ob = হ্যাঁ/না।",
        },
      },
      {
        nr: 7,
        options: ["können", "könnten", "konnten"],
        answerIndex: 0,
        tag: "verbform-modalverb",
        why: {
          de: "»Sie« (Höflichkeitsform) verlangt »können«: Sie können mich anrufen. »könnten« wäre ebenfalls höflich, aber hier gibt der Schreiber eine Erlaubnis, keine Bitte. »konnten« ist Vergangenheit und passt gar nicht.",
          en: "'Sie' (polite form) takes 'können': Sie können mich anrufen. 'könnten' would also be polite, but here the writer is granting permission, not making a request. 'konnten' is past and does not fit at all.",
          it: "»Sie« richiede »können«. »könnten« sarebbe una richiesta; qui si concede un permesso.",
          bn: "»Sie« (ভদ্র রূপ) »können« চায়। »könnten« অনুরোধ হতো; এখানে লেখক অনুমতি দিচ্ছেন। »konnten« অতীত, একেবারেই মেলে না।",
        },
      },
      {
        nr: 8,
        options: ["am", "im", "um"],
        answerIndex: 0,
        tag: "praeposition-zeit",
        why: {
          de: "Wochentage bekommen »am«: am Montag, am Freitag. »im« steht bei Monaten und Jahreszeiten (im Mai, im Winter), »um« bei Uhrzeiten (um acht Uhr). Diese drei sind die häufigste Zeitfalle der ganzen Prüfung.",
          en: "Days of the week take 'am': am Montag, am Freitag. 'im' is for months and seasons (im Mai, im Winter), 'um' for clock times (um acht Uhr). These three are the commonest time trap in the whole exam.",
          it: "I giorni della settimana vogliono »am«; »im« per mesi e stagioni, »um« per le ore.",
          bn: "সপ্তাহের দিনে »am«: am Montag। মাস ও ঋতুতে »im«, ঘড়ির সময়ে »um«। এই তিনটিই পুরো পরীক্ষার সবচেয়ে সাধারণ সময়-ফাঁদ।",
        },
      },
      {
        nr: 9,
        options: ["kann", "könnte", "kannst"],
        answerIndex: 0,
        tag: "wortstellung-nebensatz",
        why: {
          de: "»Sobald ich kann, melde ich mich« — im Nebensatz steht das Verb am Ende, und zu »ich« gehört »kann«. »kannst« gehört zu »du«. Das Komma danach zeigt: der Hauptsatz beginnt mit dem Verb (melde ich mich).",
          en: "'Sobald ich kann, melde ich mich' — in a subordinate clause the verb goes last, and 'ich' takes 'kann'. 'kannst' belongs to 'du'. The comma shows the main clause then starts with the verb (melde ich mich).",
          it: "»Sobald ich kann, melde ich mich« — nella subordinata il verbo va in fondo; con »ich« si usa »kann«.",
          bn: "»Sobald ich kann, melde ich mich« — অধীন বাক্যে ক্রিয়া শেষে, আর »ich«-এর সঙ্গে »kann«। »kannst« »du«-র জন্য।",
        },
      },
      {
        nr: 10,
        options: ["entschuldige", "entschuldigen", "entschuldigt"],
        answerIndex: 0,
        tag: "verbform-reflexiv",
        why: {
          de: "»Ich entschuldige mich« — reflexiv, und zu »ich« gehört die Endung -e. Das »mich« im Satz verrät dir schon, dass die Form zu »ich« passen muss.",
          en: "'Ich entschuldige mich' — reflexive, and 'ich' takes the ending -e. The 'mich' in the sentence already tells you the form must match 'ich'.",
          it: "»Ich entschuldige mich« — riflessivo, e con »ich« la desinenza è -e.",
          bn: "»Ich entschuldige mich« — আত্মবাচক, আর »ich«-এর সঙ্গে -e প্রত্যয়। বাক্যের »mich«-ই বলে দেয় রূপটি »ich«-এর সঙ্গে মিলতে হবে।",
        },
      },
    ],
  },

  /* ================================================================== */
  teil2: {
    heading: "Information der Krankenkasse: Kurse zur Gesundheit",

    text: `Liebe Versicherte,

Bewegung, Entspannung und gutes Essen sind die drei wichtigsten {11} für ein gesundes Leben. Deshalb bieten wir auch in diesem Jahr wieder zahlreiche Kurse an.

Neu im Programm ist ein Rückenkurs für alle, die im Büro arbeiten und viel {12}. Der Kurs findet zehn Mal statt und beginnt im Oktober. Die {13} ist online oder telefonisch möglich.

Die {14} für unsere Kurse übernehmen wir zu achtzig Prozent, wenn Sie mindestens acht Termine besuchen. Den Rest zahlen Sie selbst. Bitte {15} Sie daran, die Bestätigung am Ende aufzuheben — ohne sie können wir das Geld nicht zurückerstatten.

Wer lieber zu Hause übt, findet auf unserer Internetseite kurze {16} mit einfachen Übungen. Diese sind für alle Versicherten {17}.

Haben Sie {18}? Unser Team hilft Ihnen gern weiter. Sie {19} uns montags bis freitags von acht bis achtzehn Uhr.

Wir {20} uns auf Ihre Anmeldung.

Ihre Gesundheitskasse Siegen`,

    bank: [
      { key: "a", word: "Voraussetzungen" },
      { key: "b", word: "sitzen" },
      { key: "c", word: "Anmeldung" },
      { key: "d", word: "Kosten" },
      { key: "e", word: "denken" },
      { key: "f", word: "Videos" },
      { key: "g", word: "kostenlos" },
      { key: "h", word: "Fragen" },
      { key: "i", word: "erreichen" },
      { key: "j", word: "freuen" },
      { key: "k", word: "Krankheiten" },
      { key: "l", word: "bezahlen" },
      { key: "m", word: "Termine" },
      { key: "n", word: "gesund" },
      { key: "o", word: "wohnen" },
    ],

    items: [
      {
        nr: 11,
        answerKey: "a",
        tag: "wortschatz-nomen",
        why: {
          de: "»die drei wichtigsten Voraussetzungen für ein gesundes Leben« — eine Voraussetzung ist das, was nötig ist, damit etwas gelingt. »Krankheiten« (k) passt zum Thema, aber nicht zum Sinn: Krankheiten sind keine Bedingung für ein gesundes Leben.",
          en: "'the three most important prerequisites for a healthy life' — a Voraussetzung is what must be in place for something to work. 'Krankheiten' (k) fits the topic but not the sense: illnesses are not a condition for a healthy life.",
          it: "»i tre presupposti più importanti per una vita sana«. »Krankheiten« (k) è in tema ma non ha senso qui.",
          bn: "»সুস্থ জীবনের তিনটি প্রধান পূর্বশর্ত« — Voraussetzung মানে যা থাকা দরকার। »Krankheiten« (k) বিষয়ের সঙ্গে মেলে, অর্থের সঙ্গে নয়।",
        },
      },
      {
        nr: 12,
        answerKey: "b",
        tag: "wortschatz-verb",
        why: {
          de: "»die im Büro arbeiten und viel sitzen« — das ist der Grund für einen Rückenkurs. Der Satzbau verlangt hier ein Verb im Plural (»die … arbeiten und …«), also »sitzen«, nicht »wohnen« (o), das inhaltlich nichts mit dem Rücken zu tun hat.",
          en: "'who work in an office and sit a lot' — that is why a back course exists. The structure needs a plural verb ('die … arbeiten und …'), so 'sitzen', not 'wohnen' (o), which has nothing to do with backs.",
          it: "»che lavorano in ufficio e stanno molto seduti«. Serve un verbo al plurale: »sitzen«.",
          bn: "»যারা অফিসে কাজ করেন আর অনেকক্ষণ বসে থাকেন« — পিঠের কোর্সের কারণ এটাই। গঠনটি বহুবচন ক্রিয়া চায়: »sitzen«।",
        },
      },
      {
        nr: 13,
        answerKey: "c",
        tag: "wortschatz-nomen",
        why: {
          de: "»Die Anmeldung ist online oder telefonisch möglich.« Das Artikelwort »Die« und das Verb »ist« zeigen: hier steht ein Nomen im Singular. »Termine« (m) wäre Plural und würde »sind« verlangen.",
          en: "'Die Anmeldung ist online oder telefonisch möglich.' The article 'Die' and the verb 'ist' show a singular noun is needed. 'Termine' (m) is plural and would require 'sind'.",
          it: "»Die Anmeldung ist …« — l'articolo e »ist« indicano un singolare. »Termine« (m) richiederebbe »sind«.",
          bn: "»Die Anmeldung ist …« — »Die« ও »ist« দেখায় এখানে একবচন বিশেষ্য লাগবে। »Termine« (m) বহুবচন, »sind« চাইত।",
        },
      },
      {
        nr: 14,
        answerKey: "d",
        tag: "wortschatz-nomen",
        why: {
          de: "»Die Kosten für unsere Kurse übernehmen wir zu achtzig Prozent.« Kosten übernehmen ist die feste Wendung; »bezahlen« (l) ist ein Verb und würde hier nicht hinter »Die« stehen können.",
          en: "'Die Kosten für unsere Kurse übernehmen wir …' — Kosten übernehmen is the set phrase; 'bezahlen' (l) is a verb and could not follow 'Die'.",
          it: "»Die Kosten … übernehmen wir« è l'espressione fissa; »bezahlen« (l) è un verbo.",
          bn: "»Die Kosten … übernehmen wir« — নির্দিষ্ট বাগধারা; »bezahlen« (l) ক্রিয়া, »Die«-এর পরে বসতে পারত না।",
        },
      },
      {
        nr: 15,
        answerKey: "e",
        tag: "wortschatz-verb",
        why: {
          de: "»Bitte denken Sie daran, …« — die feste Verbindung ist denken AN etwas, und das »daran« im Satz verrät sie schon. Ein Imperativ mit Sie: Verb zuerst, dann Sie.",
          en: "'Bitte denken Sie daran, …' — the fixed pairing is denken AN something, and the 'daran' in the sentence already gives it away. A Sie-imperative: verb first, then Sie.",
          it: "»Bitte denken Sie daran …« — la combinazione fissa è denken AN, e il »daran« lo rivela.",
          bn: "»Bitte denken Sie daran, …« — নির্দিষ্ট যোগ denken AN, আর বাক্যের »daran«-ই তা ফাঁস করে দেয়।",
        },
      },
      {
        nr: 16,
        answerKey: "f",
        tag: "wortschatz-nomen",
        why: {
          de: "»findet … kurze Videos mit einfachen Übungen« — »kurze« ist ein Adjektiv im Plural, also folgt ein Nomen im Plural, und zwar etwas, das man auf einer Internetseite findet.",
          en: "'findet … kurze Videos mit einfachen Übungen' — 'kurze' is a plural adjective, so a plural noun follows, and one you would find on a website.",
          it: "»kurze Videos« — »kurze« è plurale, quindi serve un sostantivo plurale che si trovi su un sito.",
          bn: "»kurze Videos« — »kurze« বহুবচন বিশেষণ, তাই বহুবচন বিশেষ্য চাই, আর তা ওয়েবসাইটে পাওয়া যায় এমন কিছু।",
        },
      },
      {
        nr: 17,
        answerKey: "g",
        tag: "wortschatz-adjektiv",
        why: {
          de: "»Diese sind für alle Versicherten kostenlos.« Nach »sind« steht ein Adjektiv ohne Endung. »gesund« (n) wäre grammatisch möglich, ergibt aber keinen Sinn: Videos sind nicht gesund, sie sind gratis.",
          en: "'Diese sind für alle Versicherten kostenlos.' After 'sind' comes an uninflected adjective. 'gesund' (n) would be grammatically possible but makes no sense: videos are not healthy, they are free.",
          it: "Dopo »sind« serve un aggettivo. »gesund« (n) sarebbe grammaticale ma senza senso.",
          bn: "»Diese sind … kostenlos।« »sind«-এর পরে প্রত্যয়হীন বিশেষণ। »gesund« (n) ব্যাকরণে চলত, অর্থে নয়।",
        },
      },
      {
        nr: 18,
        answerKey: "h",
        tag: "wortschatz-nomen",
        why: {
          de: "»Haben Sie Fragen?« — die übliche Formel, bevor eine Telefonnummer kommt. Der nächste Satz (»Unser Team hilft Ihnen gern weiter«) bestätigt es.",
          en: "'Haben Sie Fragen?' — the usual formula before a phone number is given. The next sentence ('our team will be glad to help') confirms it.",
          it: "»Haben Sie Fragen?« — la formula abituale prima di un recapito.",
          bn: "»Haben Sie Fragen?« — ফোন নম্বর দেওয়ার আগে চেনা বাক্য। পরের বাক্যটিই তা নিশ্চিত করে।",
        },
      },
      {
        nr: 19,
        answerKey: "i",
        tag: "wortschatz-verb",
        why: {
          de: "»Sie erreichen uns montags bis freitags …« — jemanden erreichen heißt: ihn telefonisch antreffen. Achtung: »Sie« steht hier für den Leser, deshalb die Endung -en.",
          en: "'Sie erreichen uns montags bis freitags …' — jemanden erreichen means to reach someone by phone. Note: 'Sie' here is the reader, hence the ending -en.",
          it: "»Sie erreichen uns …« — erreichen significa raggiungere qualcuno al telefono.",
          bn: "»Sie erreichen uns …« — কাউকে erreichen মানে ফোনে পাওয়া। এখানে »Sie« পাঠক, তাই -en প্রত্যয়।",
        },
      },
      {
        nr: 20,
        answerKey: "j",
        tag: "wortschatz-verb",
        why: {
          de: "»Wir freuen uns auf Ihre Anmeldung.« Das »uns« im Satz zeigt ein reflexives Verb an, und sich freuen AUF + Akkusativ ist die Standardformel am Briefende.",
          en: "'Wir freuen uns auf Ihre Anmeldung.' The 'uns' signals a reflexive verb, and sich freuen AUF + accusative is the standard closing formula.",
          it: "»Wir freuen uns auf …« — l'»uns« segnala un verbo riflessivo; sich freuen AUF + accusativo chiude la lettera.",
          bn: "»Wir freuen uns auf …« — »uns« আত্মবাচক ক্রিয়ার ইঙ্গিত; sich freuen AUF + Akkusativ চিঠির শেষের প্রচলিত রূপ।",
        },
      },
    ],
  },
};
