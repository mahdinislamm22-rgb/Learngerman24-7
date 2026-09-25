import type { SbSet } from "./types";

/**
 * SB-04 — Anfrage an das Bürgeramt (Teil 1) und ein Informationsblatt
 * über die Anmeldung (Teil 2).
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Teil 1 concentrates on the three prepositions that cost the most marks
 * in official language — bei, seit, bis zum — and on two gaps (7 and 9)
 * that can only be solved by noticing where the verb sits, not by
 * understanding the sentence. That is a real exam skill: when the meaning
 * escapes you, the word order still tells you the answer.
 *
 * Teil 2's bank contains four words that fit the topic and one that fits
 * the grammar but not the sense — the two ways a plausible word can still
 * be wrong.
 */
export const sb04: SbSet = {
  code: "SB-04",

  title: {
    de: "Anfrage an das Bürgeramt und ein Informationsblatt",
    en: "An enquiry to the citizens' office and an information sheet",
    it: "Una richiesta all'anagrafe e un foglio informativo",
    bn: "নাগরিক দপ্তরে জিজ্ঞাসা ও একটি তথ্যপত্র",
  },

  intro: {
    de: "Erst eine förmliche E-Mail an ein Amt, dann ein Informationsblatt. Amtssprache ist knapp und unpersönlich — achte darauf, wie selten »ich« vorkommt.",
    en: "First a formal email to an office, then an information sheet. Official German is terse and impersonal — notice how rarely 'ich' appears.",
    it: "Prima un'email formale a un ufficio, poi un foglio informativo. Il linguaggio burocratico è asciutto e impersonale.",
    bn: "প্রথমে একটি দপ্তরে আনুষ্ঠানিক ইমেইল, তারপর একটি তথ্যপত্র। সরকারি ভাষা সংক্ষিপ্ত ও নৈর্ব্যক্তিক — খেয়াল করুন »ich« কত কম আসে।",
  },

  /* ================================================================== */
  teil1: {
    heading: "E-Mail an das Bürgeramt",

    text: `Sehr geehrte Damen und Herren,

ich bin am ersten März nach Siegen gezogen und möchte mich {1} anmelden. Leider ist im Online-Kalender kein Termin frei.

Ich habe gelesen, dass man sich {2} zwei Wochen nach dem Einzug anmelden muss. Diese Frist endet {3} fünfzehnten März. Ich möchte gern wissen, {4} ich in diesem Fall tun soll.

Alle Unterlagen habe ich bereits {5}: meinen Reisepass, den Mietvertrag und die Wohnungsgeberbestätigung. Der Vermieter {6} sie mir gestern gegeben.

Können Sie mir sagen, ob es {7} auch Termine ohne Voranmeldung gibt? Eine Kollegin hat mir erzählt, dass man am frühen Morgen manchmal {8} Glück hat.

Falls das nicht möglich ist, {9} ich Ihnen die Unterlagen auch gern per Post. Bitte teilen Sie mir mit, {10} das geht.

Vielen Dank für Ihre Hilfe.

Mit freundlichen Grüßen
Mahdin Islam`,

    items: [
      {
        nr: 1,
        options: ["zu Ihnen", "an Ihnen", "bei Ihnen"],
        answerIndex: 2,
        tag: "praeposition-dativ",
        why: {
          de: "»sich bei einer Behörde anmelden« ist die feste Verbindung — man meldet sich BEI jemandem an, nicht ZU jemandem. »bei« steht immer mit Dativ: bei Ihnen, bei mir, bei der Firma.",
          en: "'sich bei einer Behörde anmelden' is the fixed pairing — you register WITH someone, not TO someone. 'bei' always takes the dative: bei Ihnen, bei mir, bei der Firma.",
          it: "»sich bei … anmelden« è la combinazione fissa: ci si registra PRESSO qualcuno. »bei« regge sempre il dativo.",
          bn: "»sich bei … anmelden« নির্দিষ্ট যোগ — কারও কাছে (BEI) নিবন্ধন হয়, কারও দিকে (ZU) নয়। »bei« সবসময় Dativ নেয়।",
        },
      },
      {
        nr: 2,
        options: ["nach", "innerhalb von", "seit"],
        answerIndex: 1,
        tag: "praeposition-zeit",
        why: {
          de: "»innerhalb von zwei Wochen« = irgendwann in diesen zwei Wochen. »nach zwei Wochen« hieße: erst danach — das Gegenteil der Vorschrift. Diese beiden verwechselt man in der Prüfung ständig; hier hilft der nächste Satz, der von einer Frist spricht, die ENDET.",
          en: "'innerhalb von zwei Wochen' = at some point within those two weeks. 'nach zwei Wochen' would mean only afterwards — the opposite of the rule. These two get confused constantly; here the next sentence, about a deadline that ENDS, settles it.",
          it: "»innerhalb von zwei Wochen« = entro due settimane. »nach zwei Wochen« significherebbe solo dopo: il contrario della norma.",
          bn: "»innerhalb von zwei Wochen« = এই দুই সপ্তাহের মধ্যে। »nach zwei Wochen« মানে হতো তার পরে — নিয়মের উল্টো। পরীক্ষায় এ দুটো সবসময় গুলিয়ে যায়।",
        },
      },
      {
        nr: 3,
        options: ["am", "im", "um"],
        answerIndex: 0,
        tag: "praeposition-zeit",
        why: {
          de: "Bei einem Datum steht »am«: am fünfzehnten März, am Montag, am ersten Tag. »im« gehört zu Monaten ohne Tag (im März), »um« zu Uhrzeiten (um acht Uhr).",
          en: "With a date you use 'am': am fünfzehnten März, am Montag. 'im' goes with a month alone (im März), 'um' with clock times (um acht Uhr).",
          it: "Con una data si usa »am«; »im« con il mese da solo, »um« con l'ora.",
          bn: "তারিখের সঙ্গে »am«: am fünfzehnten März। কেবল মাসের সঙ্গে »im«, ঘড়ির সময়ে »um«।",
        },
      },
      {
        nr: 4,
        options: ["dass", "was", "ob"],
        answerIndex: 1,
        tag: "nebensatz-fragewort",
        why: {
          de: "»Ich möchte wissen, was ich tun soll.« Die versteckte Frage ist »Was soll ich tun?« — sie hat ein Fragewort, also bleibt das Fragewort. »ob« nimmt man nur bei Ja-/Nein-Fragen.",
          en: "'Ich möchte wissen, was ich tun soll.' The hidden question is 'Was soll ich tun?' — it has a question word, so the question word stays. 'ob' is only for yes/no questions.",
          it: "La domanda nascosta è »Was soll ich tun?«: ha una parola interrogativa, quindi resta. »ob« solo per domande sì/no.",
          bn: "লুকানো প্রশ্নটি »Was soll ich tun?« — এতে প্রশ্নবাচক শব্দ আছে, তাই সেটিই থাকে। »ob« কেবল হ্যাঁ/না প্রশ্নে।",
        },
      },
      {
        nr: 5,
        options: ["zusammengestellt", "zusammen", "gestellt"],
        answerIndex: 0,
        tag: "perfekt",
        why: {
          de: "»habe ich bereits zusammengestellt« — nach »habe« braucht es ein Partizip. »zusammen« allein ist kein Verb, und »gestellt« ohne die Vorsilbe heißt etwas anderes (eine Frage stellen).",
          en: "'habe ich bereits zusammengestellt' — after 'habe' a participle is needed. 'zusammen' alone is not a verb, and 'gestellt' without the prefix means something else (to ask a question).",
          it: "Dopo »habe« serve un participio. »zusammen« da solo non è un verbo.",
          bn: "»habe«-এর পরে participle লাগে। »zusammen« একা ক্রিয়া নয়, আর উপসর্গ ছাড়া »gestellt« অন্য অর্থ দেয়।",
        },
      },
      {
        nr: 6,
        options: ["ist", "hatte", "hat"],
        answerIndex: 2,
        tag: "perfekt-hilfsverb",
        why: {
          de: "»geben« bildet das Perfekt mit haben: er hat sie mir gegeben. Mit »sein« geht es nur bei Bewegungs- und Zustandsänderungsverben (gehen, fahren, werden). »hatte« wäre Plusquamperfekt und passt hier nicht zu »gestern«.",
          en: "'geben' forms the Perfekt with haben: er hat sie mir gegeben. 'sein' is only for verbs of motion or change of state. 'hatte' would be pluperfect and does not suit 'gestern' here.",
          it: "»geben« forma il Perfekt con haben. »sein« si usa solo per verbi di moto o cambiamento di stato.",
          bn: "»geben« haben দিয়ে Perfekt গঠন করে। »sein« কেবল গতিবাচক ও অবস্থা-পরিবর্তনের ক্রিয়ায়।",
        },
      },
      {
        nr: 7,
        options: ["Ihnen", "bei Ihnen", "zu Ihnen"],
        answerIndex: 1,
        tag: "praeposition-ort",
        why: {
          de: "»ob es bei Ihnen auch Termine gibt« — »es gibt« braucht für den Ort eine Präposition, hier »bei« im Sinne von »in Ihrem Amt«. Ein bloßes »Ihnen« wäre ein Dativobjekt, und »es gibt« hat keines.",
          en: "'ob es bei Ihnen auch Termine gibt' — 'es gibt' needs a preposition for the place, here 'bei' meaning 'at your office'. A bare 'Ihnen' would be a dative object, and 'es gibt' has none.",
          it: "»es gibt« richiede una preposizione per il luogo: »bei Ihnen«. Un semplice »Ihnen« sarebbe un oggetto al dativo.",
          bn: "»es gibt«-এর সঙ্গে স্থানের জন্য preposition লাগে, এখানে »bei«। শুধু »Ihnen« হতো Dativ object, কিন্তু »es gibt«-এর তা নেই।",
        },
      },
      {
        nr: 8,
        options: ["mit", "bei", "von"],
        answerIndex: 0,
        tag: "wendung",
        why: {
          de: "»Glück haben« wird mit »mit« ergänzt: mit etwas Glück, mit viel Glück. Eine feste Wendung — hier hilft keine Regel, nur das Wiedererkennen.",
          en: "'Glück haben' is completed with 'mit': mit etwas Glück, mit viel Glück. A fixed expression — no rule helps, only recognition.",
          it: "»Glück haben« si completa con »mit«: mit etwas Glück. Espressione fissa.",
          bn: "»Glück haben«-এর সঙ্গে »mit« বসে: mit etwas Glück। নির্দিষ্ট বাগধারা — নিয়ম নয়, চেনাই কাজে লাগে।",
        },
      },
      {
        nr: 9,
        options: ["schicken", "geschickt", "schicke"],
        answerIndex: 2,
        tag: "wortstellung-hauptsatz",
        why: {
          de: "»Falls das nicht möglich ist, schicke ich Ihnen …« Nach einem Nebensatz und Komma beginnt der Hauptsatz mit dem konjugierten Verb — und zu »ich« gehört »schicke«. Diese Umkehrung ist einer der häufigsten Fehler überhaupt.",
          en: "'Falls das nicht möglich ist, schicke ich Ihnen …' After a subordinate clause and a comma, the main clause starts with the conjugated verb — and 'ich' takes 'schicke'. This inversion is one of the commonest mistakes there is.",
          it: "Dopo una subordinata e la virgola, la principale inizia con il verbo coniugato: »schicke ich«.",
          bn: "অধীন বাক্য ও কমার পরে প্রধান বাক্য শুরু হয় রূপান্তরিত ক্রিয়া দিয়ে — »ich«-এর সঙ্গে »schicke«। এই উল্টোক্রম সবচেয়ে সাধারণ ভুলগুলোর একটি।",
        },
      },
      {
        nr: 10,
        options: ["dass", "wenn", "ob"],
        answerIndex: 2,
        tag: "nebensatz-ob",
        why: {
          de: "»Bitte teilen Sie mir mit, ob das geht.« Die Frage dahinter ist »Geht das?« — eine Ja-/Nein-Frage, also »ob«. »dass« würde behaupten, dass es geht, und dann müsste man nicht fragen.",
          en: "'Bitte teilen Sie mir mit, ob das geht.' The question behind it is 'Geht das?' — a yes/no question, so 'ob'. 'dass' would assert that it works, and then there would be nothing to ask.",
          it: "La domanda dietro è »Geht das?«: sì/no, quindi »ob«.",
          bn: "পেছনের প্রশ্নটি »Geht das?« — হ্যাঁ/না প্রশ্ন, তাই »ob«। »dass« হলে দাবি করা হতো যে হয়, তখন জিজ্ঞেস করার কিছু থাকত না।",
        },
      },
    ],
  },

  /* ================================================================== */
  teil2: {
    heading: "Informationsblatt: Anmeldung einer Wohnung",

    text: `Sehr geehrte Neubürgerinnen und Neubürger,

wer nach Siegen zieht, muss sich innerhalb von zwei Wochen anmelden. Die {11} beginnt am Tag des Einzugs.

Für die Anmeldung {12} Sie folgende Unterlagen: einen gültigen Pass oder Personalausweis und die Bestätigung Ihres {13}. Diese Bestätigung ist ein eigenes Formular; der Mietvertrag allein {14} nicht.

Termine vereinbaren Sie {15} über unsere Internetseite. Bitte erscheinen Sie {16} zum vereinbarten Termin, damit wir alle Bürgerinnen und Bürger bedienen können.

Wenn Sie den Termin nicht wahrnehmen können, {17} Sie ihn bitte rechtzeitig ab. So bekommt jemand anderes den Platz.

Die Anmeldung selbst ist {18}. Für zusätzliche Bescheinigungen erheben wir eine kleine {19}.

Bei Fragen {20} Sie uns montags bis freitags von acht bis zwölf Uhr.

Ihr Bürgeramt Siegen`,

    bank: [
      { key: "a", word: "genügt" },
      { key: "b", word: "Frist" },
      { key: "c", word: "Wohnung" },
      { key: "d", word: "Nachbarn" },
      { key: "e", word: "erreichen" },
      { key: "f", word: "ausschließlich" },
      { key: "g", word: "Termin" },
      { key: "h", word: "Gebühr" },
      { key: "i", word: "pünktlich" },
      { key: "j", word: "bezahlen" },
      { key: "k", word: "benötigen" },
      { key: "l", word: "sagen" },
      { key: "m", word: "teuer" },
      { key: "n", word: "Vermieters" },
      { key: "o", word: "kostenlos" },
    ],

    items: [
      {
        nr: 11,
        answerKey: "b",
        tag: "wortschatz-nomen",
        why: {
          de: "»Die Frist beginnt am Tag des Einzugs.« Eine Frist ist ein Zeitraum, der anfängt und endet — »Termin« (g) wäre ein einzelner Zeitpunkt und würde nicht »beginnen«.",
          en: "'Die Frist beginnt am Tag des Einzugs.' A Frist is a period that starts and ends — 'Termin' (g) is a single point in time and would not 'begin'.",
          it: "»Die Frist beginnt …« Una Frist è un periodo; »Termin« (g) è un singolo momento.",
          bn: "»Die Frist beginnt …« Frist একটি সময়সীমা যা শুরু ও শেষ হয় — »Termin« (g) একটি নির্দিষ্ট মুহূর্ত, তা »beginnen« করে না।",
        },
      },
      {
        nr: 12,
        answerKey: "k",
        tag: "wortschatz-verb",
        why: {
          de: "»Für die Anmeldung benötigen Sie folgende Unterlagen« — benötigen ist das förmliche Wort für brauchen. Amtstexte benutzen es fast immer statt »brauchen«.",
          en: "'Für die Anmeldung benötigen Sie folgende Unterlagen' — benötigen is the formal word for brauchen. Official texts almost always use it instead.",
          it: "»benötigen« è la parola formale per »brauchen«.",
          bn: "»benötigen« হলো »brauchen«-এর আনুষ্ঠানিক রূপ। সরকারি লেখায় প্রায় সবসময় এটাই ব্যবহৃত হয়।",
        },
      },
      {
        nr: 13,
        answerKey: "n",
        tag: "wortschatz-nomen",
        why: {
          de: "»die Bestätigung Ihres Vermieters« — nach »Ihres« steht ein Nomen im Genitiv, und die Endung -s zeigt: männlich oder sächlich. »Wohnung« (c) ist weiblich und hieße »Ihrer Wohnung«.",
          en: "'die Bestätigung Ihres Vermieters' — after 'Ihres' comes a genitive noun, and the -s ending shows masculine or neuter. 'Wohnung' (c) is feminine and would need 'Ihrer Wohnung'.",
          it: "Dopo »Ihres« serve un genitivo maschile o neutro. »Wohnung« (c) è femminile.",
          bn: "»Ihres«-এর পরে Genitiv বিশেষ্য, আর -s প্রত্যয় দেখায় পুংলিঙ্গ বা ক্লীবলিঙ্গ। »Wohnung« (c) স্ত্রীলিঙ্গ, »Ihrer Wohnung« হতো।",
        },
      },
      {
        nr: 14,
        answerKey: "a",
        tag: "wortschatz-verb",
        why: {
          de: "»der Mietvertrag allein genügt nicht« — genügen heißt: reichen, ausreichend sein. Das Subjekt ist »der Mietvertrag« (Singular), deshalb die Endung -t.",
          en: "'der Mietvertrag allein genügt nicht' — genügen means to suffice. The subject is 'der Mietvertrag' (singular), hence the -t ending.",
          it: "»genügen« significa bastare. Il soggetto è singolare, quindi la desinenza -t.",
          bn: "»genügen« মানে যথেষ্ট হওয়া। কর্তা »der Mietvertrag« একবচন, তাই -t প্রত্যয়।",
        },
      },
      {
        nr: 15,
        answerKey: "f",
        tag: "wortschatz-adverb",
        why: {
          de: "»Termine vereinbaren Sie ausschließlich über unsere Internetseite« — ausschließlich = nur, und kein anderer Weg. Genau dieses Wort macht aus einer Möglichkeit eine Vorschrift.",
          en: "'Termine vereinbaren Sie ausschließlich über unsere Internetseite' — ausschließlich = only, no other way. That single word turns an option into a rule.",
          it: "»ausschließlich« = soltanto, nessun'altra via. È la parola che trasforma un'opzione in un obbligo.",
          bn: "»ausschließlich« = কেবল, অন্য কোনো উপায় নেই। এই একটি শব্দই সম্ভাবনাকে নিয়মে বদলে দেয়।",
        },
      },
      {
        nr: 16,
        answerKey: "i",
        tag: "wortschatz-adverb",
        why: {
          de: "»Bitte erscheinen Sie pünktlich zum vereinbarten Termin« — pünktlich heißt: genau zur richtigen Zeit. Der Nebensatz »damit wir alle bedienen können« erklärt, warum.",
          en: "'Bitte erscheinen Sie pünktlich zum vereinbarten Termin' — pünktlich means exactly on time. The damit-clause explains why.",
          it: "»pünktlich« significa esattamente in orario. La frase con damit spiega il perché.",
          bn: "»pünktlich« মানে ঠিক সময়ে। damit-বাক্যটি কারণ ব্যাখ্যা করে।",
        },
      },
      {
        nr: 17,
        answerKey: "l",
        tag: "wortschatz-verb",
        why: {
          de: "»sagen Sie ihn bitte rechtzeitig ab« — das trennbare Verb absagen: der Stamm steht vorn, die Vorsilbe »ab« wandert ans Ende. Das »ab« am Satzende ist der Hinweis; suche in der Liste nach dem passenden Stamm.",
          en: "'sagen Sie ihn bitte rechtzeitig ab' — the separable verb absagen: the stem goes first, the prefix 'ab' moves to the end. The 'ab' at the end is the clue; look in the list for the matching stem.",
          it: "»absagen« è separabile: la radice davanti, il prefisso »ab« in fondo. L'»ab« finale è l'indizio.",
          bn: "»absagen« বিচ্ছেদযোগ্য ক্রিয়া: মূল অংশ আগে, উপসর্গ »ab« শেষে। বাক্যের শেষের »ab«-ই সংকেত।",
        },
      },
      {
        nr: 18,
        answerKey: "o",
        tag: "wortschatz-adjektiv",
        why: {
          de: "»Die Anmeldung selbst ist kostenlos.« Der nächste Satz beweist es: für ZUSÄTZLICHE Bescheinigungen wird eine Gebühr erhoben — also für die Anmeldung selbst nicht. »teuer« (m) wäre das Gegenteil.",
          en: "'Die Anmeldung selbst ist kostenlos.' The next sentence proves it: a fee is charged for ADDITIONAL certificates — so not for the registration itself. 'teuer' (m) would be the opposite.",
          it: "La frase successiva lo prova: la tassa è per i certificati aggiuntivi, non per la registrazione.",
          bn: "পরের বাক্যটিই প্রমাণ: ফি নেওয়া হয় অতিরিক্ত সনদের জন্য — নিবন্ধনের জন্য নয়। »teuer« (m) উল্টো হতো।",
        },
      },
      {
        nr: 19,
        answerKey: "h",
        tag: "wortschatz-nomen",
        why: {
          de: "»erheben wir eine kleine Gebühr« — »eine kleine« verlangt ein weibliches Nomen, und eine Gebühr ist genau das, was ein Amt »erhebt«. »bezahlen« (j) ist ein Verb und könnte nicht hinter »eine kleine« stehen.",
          en: "'erheben wir eine kleine Gebühr' — 'eine kleine' requires a feminine noun, and a Gebühr is exactly what an office 'erhebt'. 'bezahlen' (j) is a verb and could not follow 'eine kleine'.",
          it: "»eine kleine« richiede un sostantivo femminile, e una Gebühr è ciò che un ufficio »erhebt«.",
          bn: "»eine kleine« স্ত্রীলিঙ্গ বিশেষ্য চায়, আর দপ্তর যা »erhebt« তা হলো Gebühr। »bezahlen« (j) ক্রিয়া।",
        },
      },
      {
        nr: 20,
        answerKey: "e",
        tag: "wortschatz-verb",
        why: {
          de: "»Bei Fragen erreichen Sie uns montags bis freitags …« — jemanden erreichen heißt hier: ihn telefonisch antreffen. Die Zeitangabe danach zeigt, dass es um Erreichbarkeit geht, nicht um eine Handlung.",
          en: "'Bei Fragen erreichen Sie uns montags bis freitags …' — to reach someone here means to get hold of them by phone. The time span afterwards shows this is about availability, not an action.",
          it: "»erreichen« qui significa raggiungere per telefono. L'orario che segue lo conferma.",
          bn: "এখানে »erreichen« মানে ফোনে পাওয়া। পরের সময়সূচিই দেখায় প্রসঙ্গটা যোগাযোগের সুযোগ, কোনো কাজ নয়।",
        },
      },
    ],
  },
};
