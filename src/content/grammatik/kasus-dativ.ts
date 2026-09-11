import type { GrammarLesson } from "@/lib/types";
import { gap, mc, order, truefalse } from "./types";

/**
 * Dativ — the indirect object, and the case that actually costs points.
 *
 * The Akkusativ changes one form; the Dativ changes all four. It is also
 * where the learner's own language actively misleads: helfen, danken and
 * gefallen take the Dativ in German but a direct object in English,
 * Italian and Bengali.
 */
export const kasusDativ: GrammarLesson = {
  slug: "kasus-dativ",
  category: "kasus",
  level: "b1",
  telcWeight: 3,

  title: {
    de: "Der Dativ",
    en: "The Dativ (indirect object)",
    it: "Il Dativ (complemento di termine)",
    bn: "Dativ (সম্প্রদান কারক)",
  },

  telcRelevance: {
    de: "Der Dativ ist der häufigste Fehler in B1-Briefen. Fast jede Ortsangabe und jede höfliche Formulierung braucht ihn: bei mir, mit dem Bus, zu Ihrem Kurs.",
    en: "The Dativ is the single most common error in B1 letters. Almost every location and every polite phrase needs it: bei mir, mit dem Bus, zu Ihrem Kurs.",
    it: "Il Dativ è l'errore più frequente nelle lettere B1. Quasi ogni indicazione di luogo e ogni formula di cortesia lo richiede: bei mir, mit dem Bus, zu Ihrem Kurs.",
    bn: "B1 চিঠিতে সবচেয়ে বেশি ভুল হয় Dativ নিয়ে। প্রায় প্রতিটি স্থান-নির্দেশ ও ভদ্র বাক্যাংশে এটি লাগে: bei mir, mit dem Bus, zu Ihrem Kurs।",
  },

  whatIsIt: {
    de: "Der Dativ markiert die Person, für die oder zu der etwas geschieht — das indirekte Objekt. Die Frage lautet: wem?",
    en: "The Dativ marks the person something happens to or for — the indirect object. The question is: wem? (to whom).",
    it: "Il Dativ segna la persona a cui o per cui accade qualcosa — il complemento di termine. La domanda è: wem? (a chi).",
    bn: "যার প্রতি বা যার জন্য কিছু ঘটে, সেই ব্যক্তিকে Dativ চিহ্নিত করে — অর্থাৎ পরোক্ষ কর্ম। প্রশ্ন হলো: wem? (কাকে)।",
  },

  whyNeeded: {
    de: "Zwei Gründe. Erstens verlangen sehr viele alltägliche Präpositionen zwingend den Dativ. Zweitens gibt es Verben, die nur den Dativ zulassen — und genau die sehen in deiner Muttersprache nach einem direkten Objekt aus.",
    en: "Two reasons. First, a great many everyday prepositions force the Dativ. Second, some verbs allow nothing else — and those are exactly the ones that look like direct objects in your own language.",
    it: "Due motivi. Primo, moltissime preposizioni quotidiane impongono il Dativ. Secondo, alcuni verbi non ammettono altro — e sono proprio quelli che nella tua lingua sembrano complementi oggetto.",
    bn: "দুটি কারণ। প্রথমত, দৈনন্দিন বহু Präposition বাধ্যতামূলকভাবে Dativ চায়। দ্বিতীয়ত, কিছু ক্রিয়া কেবল Dativ-ই নেয় — আর ঠিক সেগুলোই আপনার নিজের ভাষায় সরাসরি কর্মের মতো দেখায়।",
  },

  simple: {
    de: "Im Dativ ändert sich alles: dem, der, dem, den. Merke dir vor allem, dass feminin der wird — das ist die Form, die alle verwirrt, weil sie wie maskulin Nominativ aussieht.",
    en: "In the Dativ everything changes: dem, der, dem, den. Above all remember that the feminine becomes der — the form that confuses everyone, because it looks like the masculine Nominativ.",
    it: "Al Dativ cambia tutto: dem, der, dem, den. Ricorda soprattutto che il femminile diventa der — la forma che confonde tutti, perché sembra il maschile Nominativ.",
    bn: "Dativ-এ সবকিছুই বদলায়: dem, der, dem, den। বিশেষ করে মনে রাখুন স্ত্রীলিঙ্গ হয়ে যায় der — এই রূপটাই সবাইকে বিভ্রান্ত করে, কারণ দেখতে পুংলিঙ্গ Nominativ-এর মতো।",
  },

  pattern: {
    de: "Person im Dativ, Sache im Akkusativ: »Ich gebe dem Kind das Buch.« Wem? dem Kind. Was? das Buch.",
    en: "Person in the Dativ, thing in the Akkusativ: 'Ich gebe dem Kind das Buch.' To whom? dem Kind. What? das Buch.",
    it: "Persona al Dativ, cosa all'Akkusativ: »Ich gebe dem Kind das Buch.« A chi? dem Kind. Che cosa? das Buch.",
    bn: "ব্যক্তি Dativ-এ, বস্তু Akkusativ-এ: »Ich gebe dem Kind das Buch.« কাকে? dem Kind। কী? das Buch।",
  },

  compare: [
    {
      german: "Ich helfe der Frau.",
      italian: "Aiuto la donna.",
      english: "I help the woman.",
      why: {
        de: "Im Italienischen und Englischen ist »die Frau« ein direktes Objekt. Im Deutschen verlangt helfen den Dativ. Deshalb sagen Lernende so oft »Ich helfe die Frau« — die Muttersprache führt hier direkt in den Fehler.",
        en: "In Italian and English 'the woman' is a direct object. In German helfen demands the Dativ. That is why learners so often say 'Ich helfe die Frau' — your first language leads you straight into the error.",
        it: "In italiano e in inglese »la donna« è complemento oggetto. In tedesco helfen richiede il Dativ. Per questo si sente spesso »Ich helfe die Frau« — la lingua madre porta dritti all'errore.",
        bn: "ইতালীয় ও ইংরেজিতে »the woman« সরাসরি কর্ম। জার্মানে helfen Dativ চায়। তাই শিক্ষার্থীরা প্রায়ই বলেন »Ich helfe die Frau« — এখানে মাতৃভাষাই সরাসরি ভুলের দিকে নিয়ে যায়।",
      },
    },
    {
      german: "Das Buch gefällt mir.",
      italian: "Il libro mi piace.",
      english: "I like the book.",
      why: {
        de: "Deutsch und Italienisch bauen den Satz identisch: das Buch ist das Subjekt, die Person steht im Dativ. Englisch dreht es um. Wer Italienisch kann, hat hier einen echten Vorteil — mi piace = gefällt mir.",
        en: "German and Italian build this sentence identically: the book is the subject and the person is in the Dativ. English flips it round. If you know Italian you have a real advantage here — mi piace = gefällt mir.",
        it: "Tedesco e italiano costruiscono la frase allo stesso modo: il libro è il soggetto e la persona sta al Dativ. L'inglese la ribalta. Chi sa l'italiano ha qui un vantaggio reale — mi piace = gefällt mir.",
        bn: "জার্মান ও ইতালীয় বাক্যটি একইভাবে গড়ে: বইটিই কর্তা, আর ব্যক্তি Dativ-এ। ইংরেজি উল্টো করে। ইতালীয় জানা থাকলে এখানে সত্যিকারের সুবিধা — mi piace = gefällt mir।",
      },
    },
    {
      german: "Ich gebe ihm das Buch.",
      bengali: "আমি তাকে বইটা দিই।",
      why: {
        de: "Bengalisch benutzt -কে sowohl für das direkte als auch für das indirekte Objekt. Deutsch trennt beides: die Person im Dativ (ihm), die Sache im Akkusativ (das Buch). Dieselbe Idee, feiner aufgeteilt.",
        en: "Bengali uses -কে for both the direct and the indirect object. German separates the two: the person in the Dativ (ihm), the thing in the Akkusativ (das Buch). The same idea, split more finely.",
        it: "Il bengalese usa -কে sia per l'oggetto diretto sia per quello indiretto. Il tedesco li separa: la persona al Dativ (ihm), la cosa all'Akkusativ (das Buch). Stessa idea, divisa più finemente.",
        bn: "বাংলায় প্রত্যক্ষ ও পরোক্ষ — দুই কর্মেই -কে ব্যবহার হয়। জার্মান দুটোকে আলাদা করে: ব্যক্তি Dativ-এ (ihm), বস্তু Akkusativ-এ (das Buch)। একই ধারণা, আরও সূক্ষ্মভাবে ভাগ করা।",
      },
    },
  ],

  tables: [
    {
      caption: {
        de: "Der Dativ — alle Formen",
        en: "The Dativ — all forms",
        it: "Il Dativ — tutte le forme",
        bn: "Dativ — সবগুলো রূপ",
      },
      headers: ["", "maskulin", "feminin", "neutrum", "Plural"],
      rows: [
        ["bestimmt", "dem", "der", "dem", "den + -n"],
        ["unbestimmt", "einem", "einer", "einem", "keinen + -n"],
        ["Possessiv", "meinem", "meiner", "meinem", "meinen + -n"],
        ["Pronomen", "ihm", "ihr", "ihm", "ihnen"],
      ],
      note: {
        de: "Maskulin und neutrum sind im Dativ immer gleich — das halbiert die Arbeit. Die feminine Form der ist die einzige echte Stolperfalle.",
        en: "Masculine and neuter are always identical in the Dativ, which halves the work. The feminine der is the only real trap.",
        it: "Maschile e neutro sono sempre identici al Dativ, il che dimezza il lavoro. Il femminile der è l'unica vera insidia.",
        bn: "Dativ-এ পুংলিঙ্গ ও ক্লীবলিঙ্গ সবসময় এক — এতে কাজ অর্ধেক হয়ে যায়। একমাত্র আসল ফাঁদ হলো স্ত্রীলিঙ্গের der।",
      },
    },
    {
      caption: {
        de: "Präpositionen, die immer den Dativ verlangen",
        en: "Prepositions that always take the Dativ",
        it: "Preposizioni che reggono sempre il Dativ",
        bn: "যেসব Präposition সবসময় Dativ নেয়",
      },
      headers: ["Präposition", "Bedeutung", "Beispiel"],
      rows: [
        ["aus", "out of, from (origin)", "aus der Türkei, aus dem Haus"],
        ["bei", "at (a person, a firm)", "bei meiner Familie, bei Siemens"],
        ["mit", "with, by (transport)", "mit dem Bus, mit meinem Mann"],
        ["nach", "after; to (cities, countries)", "nach dem Kurs, nach Berlin"],
        ["seit", "since, for (time)", "seit einem Jahr"],
        ["von", "from, of", "von meinem Chef"],
        ["zu", "to (people, places)", "zu meiner Schwester, zum Arzt"],
      ],
      note: {
        de: "Diese sieben sind die wichtigsten, aber nicht alle: außer, gegenüber und ab verlangen ebenfalls den Dativ.",
        en: "These seven are the important ones but not the complete set: außer, gegenüber and ab also take the Dativ.",
        it: "Queste sette sono le principali ma non tutte: anche außer, gegenüber e ab reggono il Dativ.",
        bn: "এই সাতটি সবচেয়ে গুরুত্বপূর্ণ, তবে পুরো তালিকা নয়: außer, gegenüber ও ab-ও Dativ নেয়।",
      },
    },
    {
      caption: {
        de: "Verben, die den Dativ verlangen",
        en: "Verbs that take the Dativ",
        it: "Verbi che reggono il Dativ",
        bn: "যেসব ক্রিয়া Dativ নেয়",
      },
      headers: ["Verb", "Beispiel", "Falle"],
      rows: [
        ["helfen", "Ich helfe dir.", "englisch/italienisch: direktes Objekt"],
        ["danken", "Ich danke Ihnen.", "»danke dich« gibt es nicht"],
        ["gefallen", "Die Wohnung gefällt mir.", "Subjekt ist die Sache"],
        ["gehören", "Das Buch gehört meiner Frau.", "kein »von«"],
        ["passen", "Der Termin passt mir nicht.", "sehr häufig im Brief"],
        ["schmecken", "Das Essen schmeckt uns.", "Subjekt ist das Essen"],
        ["antworten", "Ich antworte dem Vermieter.", "aber: eine Frage beantworten (Akk.)"],
        ["gratulieren", "Ich gratuliere dir!", ""],
      ],
      note: {
        de: "Diese Liste lohnt sich auswendig. Es sind nicht viele Verben, aber sie kommen im Brief ständig vor — besonders passen, gefallen und helfen.",
        en: "This list is worth memorising. There are not many such verbs, but they turn up constantly in letters — especially passen, gefallen and helfen.",
        it: "Vale la pena impararla a memoria. Non sono molti verbi, ma ricorrono di continuo nelle lettere — soprattutto passen, gefallen e helfen.",
        bn: "এই তালিকাটি মুখস্থ করার মতো। ক্রিয়া বেশি নয়, কিন্তু চিঠিতে বারবার আসে — বিশেষ করে passen, gefallen ও helfen।",
      },
    },
    {
      caption: {
        de: "Verschmelzungen — Präposition + Artikel",
        en: "Contractions — preposition + article",
        it: "Forme contratte — preposizione + articolo",
        bn: "সংক্ষিপ্ত রূপ — Präposition + আর্টিকেল",
      },
      headers: ["lang", "kurz", "Beispiel"],
      rows: [
        ["zu dem", "zum", "zum Arzt"],
        ["zu der", "zur", "zur Arbeit"],
        ["bei dem", "beim", "beim Essen"],
        ["von dem", "vom", "vom Bahnhof"],
        ["in dem", "im", "im Sommer"],
        ["an dem", "am", "am Montag"],
      ],
      note: {
        de: "Im Alltag klingt die lange Form fast falsch: man sagt »zum Arzt«, nicht »zu dem Arzt«. Sichtbar bleibt der Dativ trotzdem — zur zeigt feminin, zum maskulin oder neutrum.",
        en: "In everyday German the long form sounds almost wrong: you say 'zum Arzt', not 'zu dem Arzt'. The Dativ is still visible though — zur means feminine, zum means masculine or neuter.",
        it: "Nel tedesco quotidiano la forma lunga suona quasi sbagliata: si dice »zum Arzt«, non »zu dem Arzt«. Il Dativ resta però visibile — zur indica femminile, zum maschile o neutro.",
        bn: "দৈনন্দিন জার্মানে লম্বা রূপটি প্রায় ভুল শোনায়: বলা হয় »zum Arzt«, »zu dem Arzt« নয়। তবু Dativ দেখা যায় — zur মানে স্ত্রীলিঙ্গ, zum মানে পুংলিঙ্গ বা ক্লীবলিঙ্গ।",
      },
    },
  ],

  memoryTricks: [
    {
      isShortcut: true,
      rule: "aus – bei – mit – nach – seit – von – zu: immer Dativ.",
      meaning: {
        de: "Sieben Präpositionen, nach denen nie etwas anderes als der Dativ kommt.",
        en: "Seven prepositions after which nothing but the Dativ can ever follow.",
        it: "Sette preposizioni dopo le quali non può mai seguire altro che il Dativ.",
        bn: "সাতটি Präposition, যেগুলোর পরে Dativ ছাড়া আর কিছুই আসতে পারে না।",
      },
      example: "aus dem Haus · bei der Arbeit · mit dem Zug · nach dem Essen · seit einem Jahr · von der Schule · zu meiner Mutter",
      counterExample:
        "Die Liste ist unvollständig: außer, gegenüber, ab und entgegen verlangen ebenfalls Dativ. Sie einfach mitzudenken ist sicherer, als sich auf die sieben zu verlassen.",
      memoryTrick: {
        de: "Sprich sie in einem Atemzug: AUS-BEI-MIT-NACH-SEIT-VON-ZU. Viele lernen sie als kleine Melodie — das funktioniert wirklich.",
        en: "Say them in one breath: AUS-BEI-MIT-NACH-SEIT-VON-ZU. Many people learn them as a little tune, and it genuinely works.",
        it: "Dille in un fiato: AUS-BEI-MIT-NACH-SEIT-VON-ZU. Molti le imparano come una melodia, e funziona davvero.",
        bn: "এক নিঃশ্বাসে বলুন: AUS-BEI-MIT-NACH-SEIT-VON-ZU। অনেকে এটি ছোট্ট সুরে মুখস্থ করেন — সত্যিই কাজে দেয়।",
      },
      examTip: {
        de: "In den Sprachbausteinen entscheidet sich damit die Lücke ohne Nachdenken. »mit ___ Bus« kann nur dem sein.",
        en: "In Sprachbausteine this decides the gap without any thinking. 'mit ___ Bus' can only be dem.",
        it: "Nei Sprachbausteine questo risolve lo spazio senza pensare. »mit ___ Bus« può essere solo dem.",
        bn: "Sprachbausteine-এ এতে না ভেবেই ফাঁক পূরণ হয়ে যায়। »mit ___ Bus«-এ কেবল dem-ই বসতে পারে।",
      },
    },
    {
      isShortcut: true,
      rule: "Im Dativ Plural bekommt das Nomen ein -n.",
      meaning: {
        de: "Nicht nur der Artikel ändert sich, sondern auch das Nomen selbst: die Kinder → den Kindern.",
        en: "Not only the article changes but the noun itself: die Kinder → den Kindern.",
        it: "Non cambia solo l'articolo ma il sostantivo stesso: die Kinder → den Kindern.",
        bn: "কেবল আর্টিকেল নয়, বিশেষ্যটিও বদলায়: die Kinder → den Kindern।",
      },
      example: "mit den Kindern · von meinen Freunden · aus den Fenstern",
      counterExample:
        "Nicht, wenn der Plural schon auf -n endet (die Frauen → den Frauen) oder auf -s (die Autos → den Autos). Zweimal -n schreibt man nie.",
      memoryTrick: {
        de: "Dativ Plural ist die einzige Stelle, an der das Nomen selbst mitmacht. Ein einsames -n am Wortende ist fast immer das hier.",
        en: "The Dativ plural is the only place where the noun itself joins in. A lone -n on the end of a noun is nearly always this.",
        it: "Il Dativ plurale è l'unico punto in cui il sostantivo stesso partecipa. Una -n solitaria in fondo a un sostantivo è quasi sempre questa.",
        bn: "Dativ বহুবচনই একমাত্র জায়গা যেখানে বিশেষ্য নিজেও অংশ নেয়। বিশেষ্যের শেষে একলা একটি -n থাকলে প্রায় সবসময় সেটি এটাই।",
      },
      examTip: {
        de: "Ein sehr sichtbarer Fehler im Brief. »mit meinen Kollegen« ist richtig, »mit meinen Kollege« fällt sofort auf.",
        en: "A very visible error in a letter. 'mit meinen Kollegen' is right; 'mit meinen Kollege' stands out immediately.",
        it: "Un errore molto visibile in una lettera. »mit meinen Kollegen« è giusto; »mit meinen Kollege« salta subito all'occhio.",
        bn: "চিঠিতে এটি খুব চোখে পড়ার মতো ভুল। »mit meinen Kollegen« ঠিক, »mit meinen Kollege« সঙ্গে সঙ্গে ধরা পড়ে।",
      },
    },
  ],

  cheatCodes: [
    {
      isShortcut: true,
      rule: "Wenn eine Person Empfänger ist, steht sie im Dativ.",
      meaning: {
        de: "geben, schicken, schreiben, erklären, zeigen, bringen: die Person bekommt den Dativ, die Sache den Akkusativ.",
        en: "geben, schicken, schreiben, erklären, zeigen, bringen: the person takes the Dativ and the thing takes the Akkusativ.",
        it: "geben, schicken, schreiben, erklären, zeigen, bringen: la persona prende il Dativ e la cosa l'Akkusativ.",
        bn: "geben, schicken, schreiben, erklären, zeigen, bringen: ব্যক্তি Dativ নেয়, বস্তু Akkusativ নেয়।",
      },
      example: "Ich schicke Ihnen die Unterlagen. · Ich zeige dem Kind den Weg.",
      counterExample:
        "Es gilt nur, wenn wirklich zwei Objekte da sind. »Ich frage den Lehrer« hat nur eines — und fragen verlangt den Akkusativ, obwohl eine Person gemeint ist.",
      memoryTrick: {
        de: "Wer kriegt, kriegt Dativ. Was gegeben wird, kriegt Akkusativ.",
        en: "Whoever receives gets the Dativ. Whatever is given gets the Akkusativ.",
        it: "Chi riceve prende il Dativ. Ciò che viene dato prende l'Akkusativ.",
        bn: "যে পায়, সে Dativ পায়। যা দেওয়া হয়, তা Akkusativ পায়।",
      },
      examTip: {
        de: "Genau dieses Muster brauchst du im telc-Brief: »Ich schicke Ihnen eine Kopie«, »Können Sie mir bitte einen Termin geben?«",
        en: "This is exactly the pattern the telc letter needs: 'Ich schicke Ihnen eine Kopie', 'Können Sie mir bitte einen Termin geben?'",
        it: "È esattamente il modello che serve nella lettera telc: »Ich schicke Ihnen eine Kopie«, »Können Sie mir bitte einen Termin geben?«",
        bn: "telc চিঠিতে ঠিক এই কাঠামোটাই দরকার: »Ich schicke Ihnen eine Kopie«, »Können Sie mir bitte einen Termin geben?«",
      },
    },
  ],

  commonMistakes: [
    {
      wrong: "Ich helfe meine Mutter.",
      right: "Ich helfe meiner Mutter.",
      why: {
        de: "helfen verlangt den Dativ, und feminin Dativ ist meiner. Im Italienischen und Englischen ist es ein direktes Objekt — daher der Fehler.",
        en: "helfen takes the Dativ, and the feminine Dativ is meiner. In Italian and English it is a direct object, which is where the mistake comes from.",
        it: "helfen regge il Dativ, e il femminile al Dativ è meiner. In italiano e inglese è complemento oggetto: da lì nasce l'errore.",
        bn: "helfen Dativ নেয়, আর স্ত্রীলিঙ্গের Dativ হলো meiner। ইতালীয় ও ইংরেজিতে এটি সরাসরি কর্ম — ভুলটা সেখান থেকেই আসে।",
      },
    },
    {
      wrong: "Ich fahre mit der Bus.",
      right: "Ich fahre mit dem Bus.",
      why: {
        de: "mit verlangt Dativ; »der Bus« ist maskulin, also dem Bus. Hier wurde der Nominativ stehen gelassen.",
        en: "mit takes the Dativ; 'der Bus' is masculine, so dem Bus. Here the Nominativ was simply left in place.",
        it: "mit regge il Dativ; »der Bus« è maschile, quindi dem Bus. Qui è rimasto il Nominativ.",
        bn: "mit Dativ নেয়; »der Bus« পুংলিঙ্গ, তাই dem Bus। এখানে Nominativ-ই রয়ে গেছে।",
      },
    },
    {
      wrong: "Der Termin passt mich nicht.",
      right: "Der Termin passt mir nicht.",
      why: {
        de: "passen ist ein Dativverb: mir, nicht mich. Dieser Satz kommt in Absage-Briefen fast immer vor — er lohnt sich als fertiger Baustein.",
        en: "passen is a Dativ verb: mir, not mich. This sentence appears in nearly every letter declining an appointment, so it is worth learning as a ready-made block.",
        it: "passen è un verbo che regge il Dativ: mir, non mich. Questa frase compare in quasi ogni lettera di rifiuto: conviene impararla come blocco pronto.",
        bn: "passen একটি Dativ-ক্রিয়া: mich নয়, mir। সময় বাতিলের চিঠিতে এই বাক্যটি প্রায় সবসময় আসে — তাই তৈরি বাক্যাংশ হিসেবে শিখে রাখা ভালো।",
      },
    },
    {
      wrong: "Ich wohne seit ein Jahr in Deutschland.",
      right: "Ich wohne seit einem Jahr in Deutschland.",
      why: {
        de: "seit verlangt Dativ; »das Jahr« ist neutrum, also einem Jahr. Sehr häufig im ersten Satz eines Bewerbungs- oder Kursbriefes.",
        en: "seit takes the Dativ; 'das Jahr' is neuter, so einem Jahr. Extremely common in the opening line of an application or course letter.",
        it: "seit regge il Dativ; »das Jahr« è neutro, quindi einem Jahr. Frequentissimo nella prima riga di una lettera di candidatura o di iscrizione.",
        bn: "seit Dativ নেয়; »das Jahr« ক্লীবলিঙ্গ, তাই einem Jahr। আবেদন বা কোর্সের চিঠির প্রথম বাক্যে এটি খুব সাধারণ।",
      },
    },
  ],

  exercises: {
    mini: [
      gap({
        id: "dat-mini-1",
        difficulty: 1,
        tags: ["kasus-dativ", "praeposition-dativ"],
        prompt: {
          de: "Ergänze den Artikel.",
          en: "Fill in the article.",
          it: "Inserisci l'articolo.",
          bn: "সঠিক আর্টিকেল বসান।",
        },
        before: "Ich fahre mit",
        after: "Zug.",
        options: ["der", "den", "dem"],
        answer: "dem",
        explanation: {
          de: "mit → Dativ; »der Zug« ist maskulin → dem Zug.",
          en: "mit → Dativ; 'der Zug' is masculine → dem Zug.",
          it: "mit → Dativ; »der Zug« è maschile → dem Zug.",
          bn: "mit → Dativ; »der Zug« পুংলিঙ্গ → dem Zug।",
        },
      }),
      gap({
        id: "dat-mini-2",
        difficulty: 1,
        tags: ["kasus-dativ", "dativverb"],
        prompt: {
          de: "Ergänze das Pronomen.",
          en: "Fill in the pronoun.",
          it: "Inserisci il pronome.",
          bn: "সঠিক সর্বনাম বসান।",
        },
        before: "Kannst du",
        after: "bitte helfen?",
        options: ["mich", "mir", "meiner"],
        answer: "mir",
        explanation: {
          de: "helfen ist ein Dativverb → mir, nie mich.",
          en: "helfen is a Dativ verb → mir, never mich.",
          it: "helfen regge il Dativ → mir, mai mich.",
          bn: "helfen একটি Dativ-ক্রিয়া → mir, কখনও mich নয়।",
        },
      }),
      gap({
        id: "dat-mini-3",
        difficulty: 1,
        tags: ["kasus-dativ", "praeposition-dativ"],
        prompt: {
          de: "Ergänze den Artikel.",
          en: "Fill in the article.",
          it: "Inserisci l'articolo.",
          bn: "সঠিক আর্টিকেল বসান।",
        },
        before: "Sie kommt aus",
        after: "Türkei.",
        options: ["die", "der", "dem"],
        answer: "der",
        explanation: {
          de: "aus → Dativ; »die Türkei« ist feminin, feminin Dativ ist der.",
          en: "aus → Dativ; 'die Türkei' is feminine, and the feminine Dativ is der.",
          it: "aus → Dativ; »die Türkei« è femminile, e il femminile al Dativ è der.",
          bn: "aus → Dativ; »die Türkei« স্ত্রীলিঙ্গ, আর স্ত্রীলিঙ্গের Dativ হলো der।",
        },
      }),
      truefalse({
        id: "dat-mini-4",
        difficulty: 1,
        tags: ["kasus-dativ"],
        prompt: {
          de: "Richtig oder falsch?",
          en: "True or false?",
          it: "Vero o falso?",
          bn: "সত্য না মিথ্যা?",
        },
        statement: "Im Dativ sind maskulin und neutrum gleich.",
        answer: true,
        explanation: {
          de: "Richtig: beide werden dem (bzw. einem, meinem). Das spart die Hälfte der Arbeit.",
          en: "True: both become dem (or einem, meinem). That saves half the work.",
          it: "Vero: entrambi diventano dem (o einem, meinem). Questo dimezza il lavoro.",
          bn: "সত্য: দুটোই হয় dem (বা einem, meinem)। এতে অর্ধেক পরিশ্রম বাঁচে।",
        },
      }),
    ],

    medium: [
      gap({
        id: "dat-med-1",
        difficulty: 2,
        tags: ["kasus-dativ", "dativ-plural"],
        prompt: {
          de: "Ergänze Artikel und Nomen.",
          en: "Fill in the article and noun.",
          it: "Inserisci articolo e sostantivo.",
          bn: "আর্টিকেল ও বিশেষ্য বসান।",
        },
        before: "Ich spreche gern mit",
        after: "in meinem Kurs.",
        options: ["den Kollegen", "die Kollegen", "dem Kollegen"],
        answer: "den Kollegen",
        explanation: {
          de: "mit → Dativ, Plural → den, und das Nomen bekommt sein -n: den Kollegen.",
          en: "mit → Dativ, plural → den, and the noun adds its -n: den Kollegen.",
          it: "mit → Dativ, plurale → den, e il sostantivo aggiunge la -n: den Kollegen.",
          bn: "mit → Dativ, বহুবচন → den, আর বিশেষ্যে -n যোগ হয়: den Kollegen।",
        },
      }),
      mc({
        id: "dat-med-2",
        difficulty: 2,
        tags: ["kasus-dativ", "dativverb"],
        prompt: {
          de: "Welche Form ist richtig?",
          en: "Which form is correct?",
          it: "Quale forma è corretta?",
          bn: "কোন রূপটি সঠিক?",
        },
        german: "Die Wohnung gefällt ___ sehr gut.",
        options: ["uns", "wir", "unser", "unseren"],
        answer: 0,
        explanation: {
          de: "gefallen ist ein Dativverb. Subjekt ist die Wohnung, die Person steht im Dativ: uns.",
          en: "gefallen is a Dativ verb. The subject is the flat and the person is in the Dativ: uns.",
          it: "gefallen regge il Dativ. Il soggetto è l'appartamento e la persona sta al Dativ: uns.",
          bn: "gefallen একটি Dativ-ক্রিয়া। কর্তা হলো ফ্ল্যাটটি, আর ব্যক্তি Dativ-এ: uns।",
        },
      }),
      gap({
        id: "dat-med-3",
        difficulty: 2,
        tags: ["kasus-dativ", "verschmelzung"],
        prompt: {
          de: "Ergänze die kurze Form.",
          en: "Fill in the contracted form.",
          it: "Inserisci la forma contratta.",
          bn: "সংক্ষিপ্ত রূপটি বসান।",
        },
        before: "Morgen früh muss ich",
        after: "Arzt.",
        options: ["zum", "zur", "zu der"],
        answer: "zum",
        explanation: {
          de: "»der Arzt« ist maskulin → zu dem → zum. zur wäre feminin.",
          en: "'der Arzt' is masculine → zu dem → zum. zur would be feminine.",
          it: "»der Arzt« è maschile → zu dem → zum. zur sarebbe femminile.",
          bn: "»der Arzt« পুংলিঙ্গ → zu dem → zum। zur হলে স্ত্রীলিঙ্গ হতো।",
        },
      }),
      gap({
        id: "dat-med-4",
        difficulty: 2,
        tags: ["kasus-dativ", "praeposition-dativ"],
        prompt: {
          de: "Ergänze den Artikel.",
          en: "Fill in the article.",
          it: "Inserisci l'articolo.",
          bn: "সঠিক আর্টিকেল বসান।",
        },
        before: "Ich lerne Deutsch seit",
        after: "Jahr.",
        options: ["ein", "einen", "einem"],
        answer: "einem",
        explanation: {
          de: "seit → Dativ; »das Jahr« ist neutrum → einem Jahr.",
          en: "seit → Dativ; 'das Jahr' is neuter → einem Jahr.",
          it: "seit → Dativ; »das Jahr« è neutro → einem Jahr.",
          bn: "seit → Dativ; »das Jahr« ক্লীবলিঙ্গ → einem Jahr।",
        },
      }),
    ],

    hard: [
      order({
        id: "dat-hard-1",
        difficulty: 3,
        tags: ["kasus-dativ", "wortstellung"],
        prompt: {
          de: "Bilde einen höflichen Satz für einen Brief.",
          en: "Build a polite sentence for a letter.",
          it: "Costruisci una frase cortese per una lettera.",
          bn: "চিঠির জন্য একটি ভদ্র বাক্য গড়ুন।",
        },
        words: ["Können", "Sie", "mir", "bitte", "einen", "Termin", "geben"],
        answer: ["Können", "Sie", "mir", "bitte", "einen", "Termin", "geben"],
        explanation: {
          de: "Person im Dativ (mir) vor Sache im Akkusativ (einen Termin); das zweite Verb steht am Satzende. Ein fertiger Baustein für den telc-Brief.",
          en: "Person in the Dativ (mir) before thing in the Akkusativ (einen Termin); the second verb goes to the end. A ready-made block for the telc letter.",
          it: "Persona al Dativ (mir) prima della cosa all'Akkusativ (einen Termin); il secondo verbo va alla fine. Un blocco pronto per la lettera telc.",
          bn: "ব্যক্তি Dativ-এ (mir) আগে, বস্তু Akkusativ-এ (einen Termin) পরে; দ্বিতীয় ক্রিয়া বাক্যের শেষে। telc চিঠির জন্য একটি তৈরি বাক্যাংশ।",
        },
      }),
      mc({
        id: "dat-hard-2",
        difficulty: 3,
        tags: ["kasus-dativ", "kasus-akkusativ"],
        prompt: {
          de: "Welcher Satz ist richtig?",
          en: "Which sentence is correct?",
          it: "Quale frase è corretta?",
          bn: "কোন বাক্যটি সঠিক?",
        },
        options: [
          "Ich danke Sie für Ihre Antwort.",
          "Ich danke Ihnen für Ihre Antwort.",
          "Ich danke Ihnen für Ihrer Antwort.",
          "Ich danke Sie für Ihrer Antwort.",
        ],
        answer: 1,
        explanation: {
          de: "danken verlangt Dativ (Ihnen), für verlangt Akkusativ — »die Antwort« ist feminin und ändert sich im Akkusativ nicht: für Ihre Antwort.",
          en: "danken takes the Dativ (Ihnen); für takes the Akkusativ — and 'die Antwort' is feminine, which does not change in the Akkusativ: für Ihre Antwort.",
          it: "danken regge il Dativ (Ihnen); für regge l'Akkusativ — e »die Antwort« è femminile, che all'Akkusativ non cambia: für Ihre Antwort.",
          bn: "danken Dativ নেয় (Ihnen); für Akkusativ নেয় — আর »die Antwort« স্ত্রীলিঙ্গ, যা Akkusativ-এ বদলায় না: für Ihre Antwort।",
        },
      }),
      gap({
        id: "dat-hard-3",
        difficulty: 3,
        tags: ["kasus-dativ", "dativ-plural"],
        prompt: {
          de: "Ergänze Artikel und Nomen richtig.",
          en: "Fill in the article and noun correctly.",
          it: "Inserisci correttamente articolo e sostantivo.",
          bn: "আর্টিকেল ও বিশেষ্য সঠিকভাবে বসান।",
        },
        before: "Der Bus hält vor",
        after: ".",
        options: ["den Häusern", "den Häuser", "die Häuser", "dem Häusern"],
        answer: "den Häusern",
        explanation: {
          de: "»vor« ist hier Ort (wo?) → Dativ; Plural Dativ ist den, und das Nomen bekommt sein -n: den Häusern.",
          en: "'vor' is a location here (wo?) → Dativ; the plural Dativ is den and the noun adds -n: den Häusern.",
          it: "»vor« qui indica luogo (wo?) → Dativ; il plurale al Dativ è den e il sostantivo aggiunge -n: den Häusern.",
          bn: "এখানে »vor« অবস্থান বোঝায় (wo?) → Dativ; বহুবচনের Dativ হলো den, আর বিশেষ্যে -n যোগ হয়: den Häusern।",
        },
      }),
    ],
  },

  quickTest: [
    gap({
      id: "dat-test-1",
      difficulty: 2,
      tags: ["kasus-dativ", "praeposition-dativ"],
      prompt: {
        de: "Ergänze den Artikel.",
        en: "Fill in the article.",
        it: "Inserisci l'articolo.",
        bn: "সঠিক আর্টিকেল বসান।",
      },
      before: "Nach",
      after: "Kurs gehe ich einkaufen.",
      options: ["der", "den", "dem"],
      answer: "dem",
      explanation: {
        de: "nach → Dativ; »der Kurs« ist maskulin → dem Kurs.",
        en: "nach → Dativ; 'der Kurs' is masculine → dem Kurs.",
        it: "nach → Dativ; »der Kurs« è maschile → dem Kurs.",
        bn: "nach → Dativ; »der Kurs« পুংলিঙ্গ → dem Kurs।",
      },
    }),
    mc({
      id: "dat-test-2",
      difficulty: 2,
      tags: ["dativverb"],
      prompt: {
        de: "Welches Verb verlangt NICHT den Dativ?",
        en: "Which verb does NOT take the Dativ?",
        it: "Quale verbo NON regge il Dativ?",
        bn: "কোন ক্রিয়াটি Dativ নেয় না?",
      },
      options: ["helfen", "danken", "besuchen", "gefallen"],
      answer: 2,
      explanation: {
        de: "besuchen verlangt den Akkusativ: Ich besuche meinen Freund. Die anderen drei sind Dativverben.",
        en: "besuchen takes the Akkusativ: Ich besuche meinen Freund. The other three are Dativ verbs.",
        it: "besuchen regge l'Akkusativ: Ich besuche meinen Freund. Gli altri tre reggono il Dativ.",
        bn: "besuchen Akkusativ নেয়: Ich besuche meinen Freund। বাকি তিনটি Dativ-ক্রিয়া।",
      },
    }),
    gap({
      id: "dat-test-3",
      difficulty: 2,
      tags: ["kasus-dativ", "dativverb"],
      prompt: {
        de: "Ergänze das Pronomen.",
        en: "Fill in the pronoun.",
        it: "Inserisci il pronome.",
        bn: "সঠিক সর্বনাম বসান।",
      },
      before: "Leider passt der Termin",
      after: "nicht.",
      options: ["mich", "mir", "meiner"],
      answer: "mir",
      explanation: {
        de: "passen ist ein Dativverb → mir. Dieser Satz gehört in jeden Absagebrief.",
        en: "passen is a Dativ verb → mir. This sentence belongs in every letter declining something.",
        it: "passen regge il Dativ → mir. Questa frase serve in ogni lettera di rifiuto.",
        bn: "passen একটি Dativ-ক্রিয়া → mir। প্রত্যাখ্যানের প্রতিটি চিঠিতে এই বাক্যটি লাগে।",
      },
    }),
    mc({
      id: "dat-test-4",
      difficulty: 3,
      tags: ["kasus-dativ", "dativ-plural"],
      prompt: {
        de: "Welche Form ist richtig?",
        en: "Which form is correct?",
        it: "Quale forma è corretta?",
        bn: "কোন রূপটি সঠিক?",
      },
      german: "Ich wohne bei ___ .",
      options: ["meine Eltern", "meinen Eltern", "meinem Eltern", "meiner Eltern"],
      answer: 1,
      explanation: {
        de: "bei → Dativ, Plural → meinen. »Eltern« endet schon auf -n, also kommt kein zweites dazu.",
        en: "bei → Dativ, plural → meinen. 'Eltern' already ends in -n, so no second one is added.",
        it: "bei → Dativ, plurale → meinen. »Eltern« finisce già in -n, quindi non se ne aggiunge un'altra.",
        bn: "bei → Dativ, বহুবচন → meinen। »Eltern« আগে থেকেই -n দিয়ে শেষ, তাই আর একটি যোগ হয় না।",
      },
    }),
    truefalse({
      id: "dat-test-5",
      difficulty: 2,
      tags: ["kasus-dativ"],
      prompt: {
        de: "Richtig oder falsch?",
        en: "True or false?",
        it: "Vero o falso?",
        bn: "সত্য না মিথ্যা?",
      },
      statement: "»der« kann sowohl maskulin Nominativ als auch feminin Dativ sein.",
      answer: true,
      explanation: {
        de: "Richtig — der Mann (Nominativ) und mit der Frau (Dativ). Deshalb muss man immer auf das Verb oder die Präposition schauen, nicht nur auf das Wort.",
        en: "True — der Mann (Nominativ) and mit der Frau (Dativ). That is why you must always look at the verb or preposition, not just at the word.",
        it: "Vero — der Mann (Nominativ) e mit der Frau (Dativ). Per questo bisogna sempre guardare il verbo o la preposizione, non solo la parola.",
        bn: "সত্য — der Mann (Nominativ) ও mit der Frau (Dativ)। তাই সবসময় ক্রিয়া বা Präposition দেখতে হয়, শুধু শব্দটি নয়।",
      },
    }),
    gap({
      id: "dat-test-6",
      difficulty: 3,
      tags: ["kasus-dativ", "verschmelzung"],
      prompt: {
        de: "Ergänze die kurze Form.",
        en: "Fill in the contracted form.",
        it: "Inserisci la forma contratta.",
        bn: "সংক্ষিপ্ত রূপটি বসান।",
      },
      before: "Ich fahre jeden Morgen",
      after: "Arbeit.",
      options: ["zum", "zur", "zu"],
      answer: "zur",
      explanation: {
        de: "»die Arbeit« ist feminin → zu der → zur Arbeit.",
        en: "'die Arbeit' is feminine → zu der → zur Arbeit.",
        it: "»die Arbeit« è femminile → zu der → zur Arbeit.",
        bn: "»die Arbeit« স্ত্রীলিঙ্গ → zu der → zur Arbeit।",
      },
    }),
  ],
};
