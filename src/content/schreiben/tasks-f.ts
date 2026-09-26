import type { SchreibenTask } from "./types";

/**
 * Neighbours and family letters.
 *
 * SCH-15 is the hardest register in the exam: a complaint to someone you
 * will still meet on the stairs tomorrow. SCH-16 is a request to an
 * institution on behalf of a child — polite, specific, and with a reason
 * the reader can act on.
 */
export const tasksF: SchreibenTask[] = [
  /* ------------------------------------------------------------------ */
  {
    code: "SCH-15",
    category: "bitte",
    register: "halbformell",
    situation: {
      en: "Your upstairs neighbours are often loud late at night. You have to get up at five. You are writing them a note — you still want a good relationship with them.",
      it: "I vicini del piano di sopra fanno spesso rumore fino a tardi. Tu ti alzi alle cinque. Scrivi loro un biglietto, ma vuoi mantenere buoni rapporti.",
      bn: "উপরতলার প্রতিবেশীরা প্রায়ই রাতে শব্দ করেন। আপনাকে পাঁচটায় উঠতে হয়। আপনি তাঁদের একটি চিঠি লিখছেন — সম্পর্ক ভালো রাখতেই চান।",
    },
    taskDe:
      "Ihre Nachbarn über Ihnen sind abends oft laut. Sie müssen früh aufstehen. Schreiben Sie Ihren Nachbarn einen Brief.",
    leitpunkte: [
      "Stellen Sie sich kurz vor",
      "Beschreiben Sie das Problem sachlich",
      "Erklären Sie, warum es für Sie schwierig ist",
      "Machen Sie einen konkreten Vorschlag",
    ],
    anrede: "Liebe Familie Krause,",
    gruss: "Viele Grüße\n…",
    usefulPhrases: [
      {
        de: "ich wohne seit einem Jahr in der Wohnung unter Ihnen.",
        note: {
          en: "seit + Dativ, and with a present-tense verb: German says 'I live here since a year', not 'I have lived'. This catches almost every English and Italian speaker.",
          it: "seit + dativo e verbo al presente: il tedesco dice »ich wohne seit einem Jahr«, non un passato.",
          bn: "seit + Dativ, আর ক্রিয়া বর্তমান কালে: জার্মানে বলা হয় »ich wohne seit einem Jahr«, অতীত নয়।",
        },
      },
      {
        de: "In den letzten Wochen war es abends mehrmals bis nach Mitternacht laut.",
        note: {
          en: "Describe what happened, not who is to blame. 'Es war laut' is far easier to answer than 'Sie sind laut'.",
          it: "Descrivi il fatto, non la colpa: »Es war laut« è più facile da accogliere di »Sie sind laut«.",
          bn: "কী ঘটেছে তা বলুন, কে দায়ী তা নয়। »Es war laut« বলা »Sie sind laut«-এর চেয়ে সহজে গ্রহণযোগ্য।",
        },
      },
      {
        de: "Ich muss leider schon um fünf Uhr aufstehen, weil meine Schicht um sechs beginnt.",
        note: {
          en: "weil sends the verb to the end: … beginnt. Giving a reason is what turns a complaint into a request.",
          it: "weil manda il verbo in fondo. Dare una ragione trasforma una lamentela in una richiesta.",
          bn: "weil ক্রিয়াকে শেষে পাঠায়। কারণ দেওয়াই অভিযোগকে অনুরোধে বদলে দেয়।",
        },
      },
      {
        de: "Wäre es möglich, nach zweiundzwanzig Uhr etwas leiser zu sein?",
        note: {
          en: "Wäre es möglich …? is the politest request form in German, and the infinitive with zu follows it. Learn it whole.",
          it: "»Wäre es möglich …?« è la forma di richiesta più cortese, seguita dall'infinito con zu.",
          bn: "»Wäre es möglich …?« জার্মানে সবচেয়ে ভদ্র অনুরোধের রূপ, পরে zu সহ infinitive।",
        },
      },
      {
        de: "Sprechen Sie mich gern an, wenn Sie etwas stört.",
        note: {
          en: "Offering the same thing back is what keeps a neighbour letter friendly. It costs one sentence and changes the whole tone.",
          it: "Offrire la stessa cosa in cambio mantiene amichevole la lettera: una frase che cambia il tono.",
          bn: "একই সুযোগ ফিরিয়ে দেওয়াই চিঠিটিকে বন্ধুত্বপূর্ণ রাখে — এক বাক্যেই পুরো সুর বদলায়।",
        },
      },
    ],
    targetWords: 150,
    modelAnswerDe: `Liebe Familie Krause,

ich wohne seit einem Jahr in der Wohnung unter Ihnen und wollte mich eigentlich schon länger einmal richtig vorstellen. Mein Name ist Mahdin Islam.

Ich schreibe Ihnen, weil ich eine Bitte habe. In den letzten Wochen war es abends mehrmals bis nach Mitternacht laut — ich höre vor allem Musik und Schritte. Ich möchte mich nicht beschweren, denn ein bisschen Lärm gehört in einem Haus dazu.

Mein Problem ist nur: Ich muss leider schon um fünf Uhr aufstehen, weil meine Schicht um sechs beginnt. Wenn ich erst nach Mitternacht einschlafe, schaffe ich den Tag kaum.

Wäre es möglich, nach zweiundzwanzig Uhr etwas leiser zu sein? Am Wochenende ist es für mich überhaupt kein Problem, da schlafe ich länger.

Sprechen Sie mich gern an, wenn Sie etwas stört. Ich bin meistens nach achtzehn Uhr zu Hause.

Viele Grüße
Mahdin Islam, Erdgeschoss`,
    modelNotes: {
      en: "The hardest thing about this task is tone, and tone is scored under Kommunikation. Three moves do the work: the writer introduces himself before asking for anything, says explicitly that he is not complaining, and concedes something ('am Wochenende ist es kein Problem') before making the request. The last line offers the neighbours the same right in return — that single sentence is what makes the letter answerable rather than merely polite.",
      it: "La difficoltà qui è il tono, ed è proprio ciò che valuta la »Kommunikation«. Tre mosse: presentarsi prima di chiedere, dire esplicitamente di non volersi lamentare e concedere qualcosa prima della richiesta. L'ultima frase offre ai vicini lo stesso diritto: è ciò che rende la lettera davvero rispondibile.",
      bn: "এই কাজের সবচেয়ে কঠিন দিক সুর, আর সুরই 'Kommunikation'-এ মূল্যায়ন হয়। তিনটি কৌশল কাজ করে: কিছু চাওয়ার আগে নিজের পরিচয় দেওয়া, স্পষ্ট করে বলা যে অভিযোগ করছেন না, আর অনুরোধের আগে কিছু ছেড়ে দেওয়া ('সপ্তাহান্তে সমস্যা নেই')। শেষ লাইনে প্রতিবেশীদের একই অধিকার ফিরিয়ে দেওয়া — এই এক বাক্যই চিঠিটিকে ভদ্র নয়, উত্তরযোগ্য করে তোলে।",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    code: "SCH-16",
    category: "bitte",
    register: "formell",
    situation: {
      en: "You are starting work again and need earlier childcare for your daughter than the nursery currently offers. You are writing to the nursery manager.",
      it: "Ricominci a lavorare e ti serve per tua figlia un orario all'asilo più mattiniero di quello attuale. Scrivi alla direttrice.",
      bn: "আপনি আবার কাজ শুরু করছেন এবং মেয়ের জন্য কিন্ডারগার্টেনের বর্তমান সময়ের চেয়ে আগে দেখাশোনা দরকার। আপনি পরিচালিকাকে লিখছেন।",
    },
    taskDe:
      "Sie fangen wieder an zu arbeiten und brauchen für Ihre Tochter eine frühere Betreuung. Schreiben Sie eine E-Mail an die Leiterin der Kita.",
    leitpunkte: [
      "Sagen Sie, wer Sie sind und um welches Kind es geht",
      "Erklären Sie Ihre neue Arbeitssituation",
      "Sagen Sie genau, welche Zeit Sie brauchen",
      "Fragen Sie nach Kosten und Anmeldung",
    ],
    anrede: "Sehr geehrte Frau Hofmann,",
    gruss: "Mit freundlichen Grüßen\n…",
    usefulPhrases: [
      {
        de: "ich schreibe Ihnen wegen meiner Tochter Amira aus der Gruppe Sonnenblume.",
        note: {
          en: "wegen + Genitiv. Name the child and the group in the first line — the reader has a hundred children to keep apart.",
          it: "wegen + genitivo. Nomina bambino e gruppo nella prima riga: chi legge ha cento bambini da distinguere.",
          bn: "wegen + Genitiv। প্রথম লাইনেই শিশু ও দলের নাম বলুন — পাঠকের কাছে একশো শিশু আছে।",
        },
      },
      {
        de: "Ab dem ersten März arbeite ich wieder in Vollzeit.",
        note: {
          en: "ab for a starting point in the future, seit for one in the past. Mixing these two is one of the most common B1 errors.",
          it: "»ab« per un inizio nel futuro, »seit« per il passato: confonderli è uno degli errori B1 più comuni.",
          bn: "ভবিষ্যতে শুরুর জন্য »ab«, অতীতের জন্য »seit«। এ দুটো গুলিয়ে ফেলা B1-এর সবচেয়ে সাধারণ ভুলগুলোর একটি।",
        },
      },
      {
        de: "Deshalb bräuchte ich eine Betreuung ab sieben Uhr statt ab neun Uhr.",
        note: {
          en: "Say the exact time you need. A request the reader can answer with yes or no is worth more than a description of your difficulties.",
          it: "Indica l'orario esatto: una richiesta a cui si può rispondere sì o no vale più di una descrizione delle difficoltà.",
          bn: "ঠিক কোন সময় দরকার তা বলুন। যে অনুরোধে হ্যাঁ বা না বলা যায়, তা সমস্যার বর্ণনার চেয়ে বেশি কাজের।",
        },
      },
      {
        de: "Könnten Sie mir mitteilen, ob es dafür noch freie Plätze gibt?",
        note: {
          en: "An indirect yes/no question takes ob and sends the verb to the end: … gibt. Two grammar points in one useful sentence.",
          it: "Una domanda indiretta sì/no vuole ob e manda il verbo in fondo: due punti di grammatica in una frase utile.",
          bn: "পরোক্ষ হ্যাঁ/না প্রশ্নে ob বসে ও ক্রিয়া শেষে যায় — এক কাজের বাক্যে দুটি ব্যাকরণ।",
        },
      },
      {
        de: "Außerdem würde ich gern wissen, was die Frühbetreuung zusätzlich kostet.",
        note: {
          en: "Außerdem opens a new point and pushes the verb to second place: Außerdem WÜRDE ich. Never 'Außerdem ich würde'.",
          it: "»Außerdem« apre un nuovo punto e spinge il verbo in seconda posizione.",
          bn: "»Außerdem« নতুন প্রসঙ্গ আনে ও ক্রিয়াকে দ্বিতীয় স্থানে পাঠায়। কখনোই 'Außerdem ich würde' নয়।",
        },
      },
    ],
    targetWords: 150,
    modelAnswerDe: `Sehr geehrte Frau Hofmann,

ich schreibe Ihnen wegen meiner Tochter Amira aus der Gruppe Sonnenblume. Sie ist seit September bei Ihnen und geht sehr gern in die Kita.

Ab dem ersten März arbeite ich wieder in Vollzeit. Meine Schicht beginnt um halb acht, und mein Weg zur Arbeit dauert etwa dreißig Minuten. Ich schaffe es deshalb nicht mehr, Amira erst um neun Uhr zu bringen.

Deshalb bräuchte ich eine Betreuung ab sieben Uhr statt ab neun Uhr. Ich habe gelesen, dass Sie eine Frühbetreuung anbieten. Könnten Sie mir mitteilen, ob es dafür noch freie Plätze gibt?

Außerdem würde ich gern wissen, was die Frühbetreuung zusätzlich kostet und ob ich einen neuen Antrag stellen muss.

Falls es keinen Platz mehr gibt, sagen Sie mir bitte trotzdem Bescheid. Dann muss ich mit meinem Mann eine andere Lösung finden.

Mit freundlichen Grüßen
Leyla Demir`,
    modelNotes: {
      en: "Notice what the second paragraph does: it gives the shift time AND the travel time, which together prove the problem instead of asserting it. That is the difference between 'I need earlier childcare' and a request an administrator can act on. The closing paragraph is the part most candidates leave out — asking for an answer even if it is a no. It costs two lines and it is the reason letters get replied to.",
      it: "Il secondo paragrafo dà l'orario del turno E il tempo di viaggio: insieme dimostrano il problema invece di affermarlo. Il paragrafo finale è quello che quasi tutti omettono: chiedere una risposta anche se negativa. Due righe, ed è il motivo per cui si ottiene una risposta.",
      bn: "দ্বিতীয় অনুচ্ছেদটি কী করছে খেয়াল করুন: শিফটের সময় আর যাতায়াতের সময় — দুটো মিলে সমস্যাটা প্রমাণ করে, কেবল দাবি করে না। 'আগে দেখাশোনা দরকার' বলা আর প্রশাসকের কাজে লাগার মতো অনুরোধ — পার্থক্য এখানেই। শেষ অনুচ্ছেদটি বেশিরভাগ পরীক্ষার্থী বাদ দেন: না হলেও উত্তর চাওয়া। দুই লাইনেই চিঠির উত্তর আসে।",
    },
  },
];
