import type { GrammarLesson } from "@/lib/types";
import { gap, mc, order, truefalse } from "./types";

/**
 * Akkusativ — the direct object.
 *
 * Taught second, immediately after the articles, because it is the case
 * that costs the least to learn: exactly one form changes.
 */
export const kasusAkkusativ: GrammarLesson = {
  slug: "kasus-akkusativ",
  category: "kasus",
  level: "b1",
  telcWeight: 3,

  title: {
    de: "Der Akkusativ",
    en: "The Akkusativ (direct object)",
    it: "L'Akkusativ (complemento oggetto)",
    bn: "Akkusativ (কর্ম কারক)",
  },

  telcRelevance: {
    de: "Der Akkusativ ist der häufigste Kasus nach dem Nominativ. In den Sprachbausteinen und im Brief kommt er in fast jedem Satz vor.",
    en: "After the Nominativ, the Akkusativ is the most frequent case. It turns up in nearly every sentence of Sprachbausteine and of your letter.",
    it: "Dopo il Nominativ, l'Akkusativ è il caso più frequente. Compare in quasi ogni frase dei Sprachbausteine e della lettera.",
    bn: "Nominativ-এর পরে Akkusativ-ই সবচেয়ে বেশি ব্যবহৃত কারক। Sprachbausteine ও চিঠির প্রায় প্রতিটি বাক্যে এটি আসে।",
  },

  whatIsIt: {
    de: "Der Akkusativ markiert das, was direkt von der Handlung betroffen ist — das direkte Objekt. Die Frage dazu lautet: wen? oder was?",
    en: "The Akkusativ marks the thing directly affected by the action — the direct object. The question is: wen? (whom) or was? (what).",
    it: "L'Akkusativ segna ciò che è direttamente coinvolto nell'azione — il complemento oggetto. La domanda è: wen? (chi) o was? (che cosa).",
    bn: "ক্রিয়ার দ্বারা সরাসরি প্রভাবিত জিনিসটিকে Akkusativ চিহ্নিত করে — অর্থাৎ কর্ম। প্রশ্ন হলো: wen? (কাকে) বা was? (কী)।",
  },

  whyNeeded: {
    de: "Ohne Akkusativ kann man im Deutschen nicht sagen, wer etwas tut und wem es passiert. »Den Hund beißt der Mann« heißt etwas anderes als »Der Hund beißt den Mann« — obwohl die Wortstellung gleich aussieht.",
    en: "Without the Akkusativ, German cannot show who does something and who it happens to. 'Den Hund beißt der Mann' means something different from 'Der Hund beißt den Mann', even though the word order looks the same.",
    it: "Senza l'Akkusativ il tedesco non può mostrare chi fa qualcosa e a chi accade. »Den Hund beißt der Mann« significa altro rispetto a »Der Hund beißt den Mann«, benché l'ordine delle parole sembri uguale.",
    bn: "Akkusativ ছাড়া জার্মান ভাষায় বোঝানো যায় না কে কাজটি করছে আর কার উপর ঘটছে। »Den Hund beißt der Mann« আর »Der Hund beißt den Mann« — শব্দক্রম একরকম দেখালেও অর্থ আলাদা।",
  },

  simple: {
    de: "Es ändert sich nur ein einziges Wort: der wird zu den. die, das und der Plural bleiben genau gleich. Mehr ist der Akkusativ nicht.",
    en: "Only one single word changes: der becomes den. die, das and the plural stay exactly as they are. That is all the Akkusativ is.",
    it: "Cambia una sola parola: der diventa den. die, das e il plurale restano identici. L'Akkusativ è tutto qui.",
    bn: "মাত্র একটি শব্দ বদলায়: der হয়ে যায় den। die, das ও বহুবচন হুবহু একই থাকে। Akkusativ এইটুকুই।",
  },

  pattern: {
    de: "Subjekt (Nominativ) + Verb + Objekt (Akkusativ). Frage nach dem Verb: »wen oder was?« — die Antwort steht im Akkusativ.",
    en: "Subject (Nominativ) + verb + object (Akkusativ). Ask after the verb: 'wen oder was?' — the answer is in the Akkusativ.",
    it: "Soggetto (Nominativ) + verbo + oggetto (Akkusativ). Chiedi dopo il verbo: »wen oder was?« — la risposta è all'Akkusativ.",
    bn: "কর্তা (Nominativ) + ক্রিয়া + কর্ম (Akkusativ)। ক্রিয়ার পরে প্রশ্ন করুন: »wen oder was?« — উত্তরটিই Akkusativ-এ থাকবে।",
  },

  compare: [
    {
      german: "Ich sehe den Mann.",
      bengali: "আমি লোকটাকে দেখি।",
      why: {
        de: "Bengalisch hat dieselbe Idee: -কে markiert das Objekt bei Personen. Wer Bengalisch spricht, kennt den Akkusativ also schon — nur steht die Markierung im Deutschen vorne am Artikel statt hinten am Nomen.",
        en: "Bengali has the same idea: -কে marks the object when it is a person. So if you speak Bengali you already know the Akkusativ — German just puts the marker at the front, on the article, instead of at the end of the noun.",
        it: "Il bengalese ha la stessa idea: -কে segna l'oggetto quando è una persona. Chi parla bengalese conosce già l'Akkusativ — il tedesco mette solo il segno davanti, sull'articolo, invece che in fondo al sostantivo.",
        bn: "বাংলায় ঠিক একই ধারণা আছে: ব্যক্তিবাচক কর্মে -কে বসে। তাই বাংলা জানলে আপনি Akkusativ আগে থেকেই জানেন — জার্মান শুধু চিহ্নটা বিশেষ্যের শেষে না বসিয়ে সামনে আর্টিকেলে বসায়।",
      },
    },
    {
      german: "Ich sehe ihn.",
      english: "I see him.",
      why: {
        de: "Englisch macht genau dasselbe, nur bei Pronomen: he → him. Deutsch macht es zusätzlich beim Artikel: der → den. Das Prinzip ist also bekannt.",
        en: "English does exactly the same thing, but only with pronouns: he → him. German does it with the article as well: der → den. So the principle is already familiar.",
        it: "L'inglese fa esattamente lo stesso, ma solo con i pronomi: he → him. Il tedesco lo fa anche con l'articolo: der → den. Il principio è quindi già noto.",
        bn: "ইংরেজিতেও ঠিক এটাই হয়, তবে শুধু সর্বনামে: he → him। জার্মানে আর্টিকেলেও হয়: der → den। তাই ধারণাটা আপনার চেনা।",
      },
    },
    {
      german: "Ich habe einen Bruder.",
      italian: "Ho un fratello.",
      why: {
        de: "Im Italienischen bleibt »un fratello« unverändert, egal ob Subjekt oder Objekt. Im Deutschen wird aus ein sofort einen. Genau hier machen italienische Muttersprachler den häufigsten Fehler.",
        en: "In Italian 'un fratello' stays the same whether it is subject or object. In German ein immediately becomes einen. This is exactly where Italian speakers most often slip.",
        it: "In italiano »un fratello« resta uguale sia come soggetto sia come oggetto. In tedesco ein diventa subito einen. È proprio qui che gli italofoni sbagliano più spesso.",
        bn: "ইতালীয় ভাষায় »un fratello« কর্তা হোক বা কর্ম, একই থাকে। জার্মানে ein সঙ্গে সঙ্গে einen হয়ে যায়। ইতালীয়ভাষীরা ঠিক এখানেই সবচেয়ে বেশি ভুল করেন।",
      },
    },
  ],

  tables: [
    {
      caption: {
        de: "Nominativ und Akkusativ nebeneinander",
        en: "Nominativ and Akkusativ side by side",
        it: "Nominativ e Akkusativ a confronto",
        bn: "Nominativ ও Akkusativ পাশাপাশি",
      },
      headers: ["", "maskulin", "feminin", "neutrum", "Plural"],
      rows: [
        ["Nominativ", "der / ein", "die / eine", "das / ein", "die / keine"],
        ["Akkusativ", "den / einen", "die / eine", "das / ein", "die / keine"],
        ["ändert sich?", "JA", "nein", "nein", "nein"],
      ],
      note: {
        de: "Drei von vier Spalten sind identisch. Wenn du dir nur »der → den« und »ein → einen« merkst, hast du den ganzen Akkusativ.",
        en: "Three of the four columns are identical. Remember only 'der → den' and 'ein → einen' and you have the whole Akkusativ.",
        it: "Tre colonne su quattro sono identiche. Ricorda solo »der → den« ed »ein → einen« e hai tutto l'Akkusativ.",
        bn: "চারটির মধ্যে তিনটি কলামই একরকম। শুধু »der → den« আর »ein → einen« মনে রাখলেই পুরো Akkusativ আপনার।",
      },
    },
    {
      caption: {
        de: "Präpositionen, die immer den Akkusativ verlangen",
        en: "Prepositions that always take the Akkusativ",
        it: "Preposizioni che reggono sempre l'Akkusativ",
        bn: "যেসব Präposition সবসময় Akkusativ নেয়",
      },
      headers: ["Präposition", "Bedeutung", "Beispiel"],
      rows: [
        ["durch", "through", "durch den Park"],
        ["für", "for", "für meinen Bruder"],
        ["gegen", "against, around (time)", "gegen den Wind, gegen 8 Uhr"],
        ["ohne", "without", "ohne den Schlüssel"],
        ["um", "around, at (clock time)", "um den Tisch, um 9 Uhr"],
        ["bis", "until, as far as", "bis nächsten Freitag"],
      ],
      note: {
        de: "Diese Präpositionen fragen nie nach dem Kasus — sie schreiben ihn vor. Egal ob Bewegung oder nicht: nach für steht immer der Akkusativ.",
        en: "These prepositions never ask about the case — they dictate it. Movement or not, für is always followed by the Akkusativ.",
        it: "Queste preposizioni non chiedono il caso — lo impongono. Movimento o no, dopo für c'è sempre l'Akkusativ.",
        bn: "এই Präposition-গুলো কারক জিজ্ঞেস করে না — নির্ধারণ করে দেয়। গতি থাকুক বা না থাকুক, für-এর পরে সবসময় Akkusativ।",
      },
    },
    {
      caption: {
        de: "Häufige Verben mit Akkusativ",
        en: "Common verbs that take the Akkusativ",
        it: "Verbi comuni che reggono l'Akkusativ",
        bn: "সাধারণ যেসব ক্রিয়া Akkusativ নেয়",
      },
      headers: ["Verb", "Beispiel"],
      rows: [
        ["haben", "Ich habe einen Termin."],
        ["brauchen", "Ich brauche einen Rat."],
        ["suchen / finden", "Wir suchen einen Kurs."],
        ["kaufen / bezahlen", "Er kauft den Fahrschein."],
        ["sehen / lesen / hören", "Ich lese den Vertrag."],
        ["besuchen", "Ich besuche meinen Freund."],
        ["es gibt", "Es gibt einen Fehler."],
      ],
      note: {
        de: "»es gibt« steht immer mit Akkusativ, obwohl es sich wie ein Subjekt anfühlt: Es gibt einen Kurs — nie »ein Kurs«.",
        en: "'es gibt' always takes the Akkusativ, even though it feels like a subject: Es gibt einen Kurs — never 'ein Kurs'.",
        it: "»es gibt« regge sempre l'Akkusativ, anche se sembra un soggetto: Es gibt einen Kurs — mai »ein Kurs«.",
        bn: "»es gibt« সবসময় Akkusativ নেয়, যদিও দেখতে কর্তার মতো লাগে: Es gibt einen Kurs — কখনও »ein Kurs« নয়।",
      },
    },
  ],

  memoryTricks: [
    {
      isShortcut: true,
      rule: "durch – für – gegen – ohne – um: immer Akkusativ.",
      meaning: {
        de: "Fünf Präpositionen, die den Kasus nicht zur Wahl stellen. Nach ihnen steht ausnahmslos der Akkusativ.",
        en: "Five prepositions that give you no choice of case. They are followed by the Akkusativ without exception.",
        it: "Cinque preposizioni che non lasciano scelta sul caso. Sono seguite dall'Akkusativ senza eccezioni.",
        bn: "পাঁচটি Präposition যেগুলো কারক বেছে নেওয়ার সুযোগ দেয় না। এদের পরে ব্যতিক্রমহীনভাবে Akkusativ বসে।",
      },
      example: "durch den Wald · für den Kurs · gegen den Plan · ohne den Ausweis · um den Platz",
      counterExample:
        "»bis« und »entlang« gehören auch dazu, stehen aber nicht im Merkspruch. Und »um … zu« ist etwas ganz anderes — dort folgt kein Nomen, sondern ein Infinitiv.",
      memoryTrick: {
        de: "Sprich sie als einen Takt: DURCH-FÜR-GEGEN-OHNE-UM. Fünf Silben, ein Kasus.",
        en: "Say them as one rhythm: DURCH-FÜR-GEGEN-OHNE-UM. Five beats, one case.",
        it: "Dille come un solo ritmo: DURCH-FÜR-GEGEN-OHNE-UM. Cinque battute, un caso.",
        bn: "একটানা ছন্দে বলুন: DURCH-FÜR-GEGEN-OHNE-UM। পাঁচটি মাত্রা, একটি কারক।",
      },
      examTip: {
        de: "In den Sprachbausteinen ist das ein Geschenk: Steht eine dieser Präpositionen in der Lücke davor, brauchst du gar nicht über die Bedeutung nachzudenken.",
        en: "In Sprachbausteine this is a gift: if one of these prepositions sits before the gap, you do not need to think about meaning at all.",
        it: "Nei Sprachbausteine è un regalo: se una di queste preposizioni precede lo spazio, non devi pensare al significato.",
        bn: "Sprachbausteine-এ এটি একেবারে উপহার: ফাঁকের আগে এই Präposition-গুলোর একটি থাকলে অর্থ নিয়ে ভাবারই দরকার নেই।",
      },
    },
    {
      isShortcut: true,
      rule: "Zeitangaben ohne Präposition stehen im Akkusativ.",
      meaning: {
        de: "Wenn eine Zeitangabe ohne Präposition im Satz steht, bekommt sie den Akkusativ: jeden Tag, letzte Woche, nächsten Monat.",
        en: "When a time expression appears without a preposition, it goes into the Akkusativ: jeden Tag, letzte Woche, nächsten Monat.",
        it: "Quando un'espressione di tempo compare senza preposizione, va all'Akkusativ: jeden Tag, letzte Woche, nächsten Monat.",
        bn: "Präposition ছাড়া সময়ের প্রকাশ বাক্যে এলে সেটি Akkusativ নেয়: jeden Tag, letzte Woche, nächsten Monat।",
      },
      example: "Ich arbeite jeden Tag. · Nächsten Montag habe ich einen Termin.",
      counterExample:
        "Mit Präposition gilt die Präposition: »am Montag« ist Dativ, weil an hier Dativ verlangt. Der Trick greift nur ohne Präposition.",
      memoryTrick: {
        de: "Keine Präposition davor? Dann Akkusativ. Der Satz »Nächsten Freitag« hat ein -en, »am Freitag« nicht.",
        en: "No preposition in front? Then Akkusativ. 'Nächsten Freitag' has the -en; 'am Freitag' does not.",
        it: "Nessuna preposizione davanti? Allora Akkusativ. »Nächsten Freitag« ha la -en; »am Freitag« no.",
        bn: "সামনে Präposition নেই? তাহলে Akkusativ। »Nächsten Freitag«-এ -en আছে, »am Freitag«-এ নেই।",
      },
      examTip: {
        de: "Im Brief brauchst du das ständig: »Nächsten Samstag feiere ich meinen Geburtstag.« Zwei Akkusative in einem Satz.",
        en: "You need this constantly in the letter: 'Nächsten Samstag feiere ich meinen Geburtstag.' Two Akkusativ forms in one sentence.",
        it: "Nella lettera serve di continuo: »Nächsten Samstag feiere ich meinen Geburtstag.« Due Akkusativ in una frase.",
        bn: "চিঠিতে এটি বারবার লাগে: »Nächsten Samstag feiere ich meinen Geburtstag.« এক বাক্যে দুটি Akkusativ।",
      },
    },
  ],

  cheatCodes: [
    {
      isShortcut: true,
      rule: "Ein -n am Ende heißt fast immer: hier ist der Akkusativ.",
      meaning: {
        de: "den, einen, meinen, keinen, ihn — das -n ist das sichtbare Zeichen des maskulinen Akkusativs.",
        en: "den, einen, meinen, keinen, ihn — that -n is the visible sign of the masculine Akkusativ.",
        it: "den, einen, meinen, keinen, ihn — quella -n è il segno visibile dell'Akkusativ maschile.",
        bn: "den, einen, meinen, keinen, ihn — এই -n-ই পুংলিঙ্গ Akkusativ-এর দৃশ্যমান চিহ্ন।",
      },
      example: "Ich brauche einen neuen Vertrag für meinen Chef.",
      counterExample:
        "Im Dativ Plural steht auch ein -n: »mit den Kindern«. Das -n allein beweist also nichts, wenn ein Plural im Spiel ist.",
      memoryTrick: {
        de: "N wie Nomen-Ziel: Was das Verb trifft, bekommt beim Maskulinum ein -n.",
        en: "N for 'the one it lands on': whatever the verb hits gets an -n, if it is masculine.",
        it: "N come »ciò che il verbo colpisce«: se è maschile, prende una -n.",
        bn: "N মানে »ক্রিয়া যার উপর পড়ে«: পুংলিঙ্গ হলে সেটি একটি -n পায়।",
      },
      examTip: {
        de: "Beim Korrekturlesen deines Briefes: Suche jedes maskuline Nomen nach einem Verb und prüfe, ob das -n da ist. Das findet die meisten Kasusfehler in zwei Minuten.",
        en: "When proof-reading your letter: find every masculine noun after a verb and check the -n is there. That catches most case errors in two minutes.",
        it: "Quando rileggi la lettera: cerca ogni sostantivo maschile dopo un verbo e verifica che ci sia la -n. Trova la maggior parte degli errori di caso in due minuti.",
        bn: "চিঠি পুনরায় পড়ার সময়: ক্রিয়ার পরে থাকা প্রতিটি পুংলিঙ্গ বিশেষ্য খুঁজুন আর দেখুন -n আছে কিনা। দুই মিনিটেই বেশিরভাগ কারক-ভুল ধরা পড়বে।",
      },
    },
  ],

  commonMistakes: [
    {
      wrong: "Ich habe ein Termin am Montag.",
      right: "Ich habe einen Termin am Montag.",
      why: {
        de: "»der Termin« ist maskulin und steht als Objekt von haben im Akkusativ: ein → einen.",
        en: "'der Termin' is masculine and is the object of haben, so it is Akkusativ: ein → einen.",
        it: "»der Termin« è maschile ed è oggetto di haben, quindi Akkusativ: ein → einen.",
        bn: "»der Termin« পুংলিঙ্গ এবং haben-এর কর্ম, তাই Akkusativ: ein → einen।",
      },
    },
    {
      wrong: "Das Geschenk ist für mein Bruder.",
      right: "Das Geschenk ist für meinen Bruder.",
      why: {
        de: "»für« verlangt immer den Akkusativ, auch wenn nichts sich bewegt. mein → meinen.",
        en: "'für' always takes the Akkusativ, even when nothing is moving. mein → meinen.",
        it: "»für« regge sempre l'Akkusativ, anche se nulla si muove. mein → meinen.",
        bn: "»für« সবসময় Akkusativ নেয়, কিছু নড়াচড়া না করলেও। mein → meinen।",
      },
    },
    {
      wrong: "Es gibt ein Problem mit die Heizung.",
      right: "Es gibt ein Problem mit der Heizung.",
      why: {
        de: "»es gibt« ist hier richtig mit Akkusativ (das Problem bleibt aber gleich, weil neutrum). Der Fehler ist »mit die«: mit verlangt Dativ, feminin Dativ ist der.",
        en: "'es gibt' is correctly followed by the Akkusativ here (das Problem does not change, being neuter). The error is 'mit die': mit takes the Dativ, and the feminine Dativ is der.",
        it: "»es gibt« è giusto con l'Akkusativ qui (das Problem non cambia perché neutro). L'errore è »mit die«: mit regge il Dativ, e il femminile al Dativ è der.",
        bn: "এখানে »es gibt« ঠিকই Akkusativ নিয়েছে (das Problem ক্লীবলিঙ্গ বলে বদলায়নি)। ভুলটি »mit die«-তে: mit Dativ নেয়, আর স্ত্রীলিঙ্গের Dativ হলো der।",
      },
    },
  ],

  exercises: {
    mini: [
      gap({
        id: "akk-mini-1",
        difficulty: 1,
        tags: ["kasus-akkusativ", "artikel-akkusativ"],
        prompt: {
          de: "Ergänze den Artikel.",
          en: "Fill in the article.",
          it: "Inserisci l'articolo.",
          bn: "সঠিক আর্টিকেল বসান।",
        },
        before: "Ich lese",
        after: "Brief.",
        options: ["der", "den", "dem"],
        answer: "den",
        explanation: {
          de: "»der Brief« ist maskulin und Objekt von lesen → den Brief.",
          en: "'der Brief' is masculine and the object of lesen → den Brief.",
          it: "»der Brief« è maschile e oggetto di lesen → den Brief.",
          bn: "»der Brief« পুংলিঙ্গ এবং lesen-এর কর্ম → den Brief।",
        },
      }),
      gap({
        id: "akk-mini-2",
        difficulty: 1,
        tags: ["kasus-akkusativ"],
        prompt: {
          de: "Ergänze den Artikel.",
          en: "Fill in the article.",
          it: "Inserisci l'articolo.",
          bn: "সঠিক আর্টিকেল বসান।",
        },
        before: "Wir kaufen",
        after: "Zeitung.",
        options: ["der", "die", "den"],
        answer: "die",
        explanation: {
          de: "»die Zeitung« ist feminin — feminin ändert sich im Akkusativ nicht.",
          en: "'die Zeitung' is feminine — the feminine does not change in the Akkusativ.",
          it: "»die Zeitung« è femminile — il femminile non cambia all'Akkusativ.",
          bn: "»die Zeitung« স্ত্রীলিঙ্গ — স্ত্রীলিঙ্গ Akkusativ-এ বদলায় না।",
        },
      }),
      gap({
        id: "akk-mini-3",
        difficulty: 1,
        tags: ["kasus-akkusativ", "praeposition-akkusativ"],
        prompt: {
          de: "Ergänze den Artikel.",
          en: "Fill in the article.",
          it: "Inserisci l'articolo.",
          bn: "সঠিক আর্টিকেল বসান।",
        },
        before: "Das ist ein Geschenk für",
        after: "Lehrer.",
        options: ["der", "den", "dem"],
        answer: "den",
        explanation: {
          de: "»für« verlangt Akkusativ, »der Lehrer« ist maskulin → für den Lehrer.",
          en: "'für' takes the Akkusativ and 'der Lehrer' is masculine → für den Lehrer.",
          it: "»für« regge l'Akkusativ e »der Lehrer« è maschile → für den Lehrer.",
          bn: "»für« Akkusativ নেয়, আর »der Lehrer« পুংলিঙ্গ → für den Lehrer।",
        },
      }),
      truefalse({
        id: "akk-mini-4",
        difficulty: 1,
        tags: ["kasus-akkusativ"],
        prompt: {
          de: "Richtig oder falsch?",
          en: "True or false?",
          it: "Vero o falso?",
          bn: "সত্য না মিথ্যা?",
        },
        statement: "Im Akkusativ ändern sich alle vier Formen: der, die, das und der Plural.",
        answer: false,
        explanation: {
          de: "Falsch — nur maskulin ändert sich (der → den). Die anderen drei bleiben gleich.",
          en: "False — only the masculine changes (der → den). The other three stay the same.",
          it: "Falso — cambia solo il maschile (der → den). Gli altri tre restano uguali.",
          bn: "মিথ্যা — কেবল পুংলিঙ্গ বদলায় (der → den)। বাকি তিনটি একই থাকে।",
        },
      }),
    ],

    medium: [
      gap({
        id: "akk-med-1",
        difficulty: 2,
        tags: ["kasus-akkusativ", "artikel-unbestimmt"],
        prompt: {
          de: "Ergänze den unbestimmten Artikel.",
          en: "Fill in the indefinite article.",
          it: "Inserisci l'articolo indeterminativo.",
          bn: "অনির্দিষ্ট আর্টিকেল বসান।",
        },
        before: "Ich suche",
        after: "Deutschkurs in Siegen.",
        options: ["ein", "eine", "einen", "einem"],
        answer: "einen",
        explanation: {
          de: "»der Kurs« ist maskulin, Objekt von suchen → einen Deutschkurs.",
          en: "'der Kurs' is masculine and the object of suchen → einen Deutschkurs.",
          it: "»der Kurs« è maschile ed è oggetto di suchen → einen Deutschkurs.",
          bn: "»der Kurs« পুংলিঙ্গ এবং suchen-এর কর্ম → einen Deutschkurs।",
        },
      }),
      mc({
        id: "akk-med-2",
        difficulty: 2,
        tags: ["kasus-akkusativ", "zeitangabe-akkusativ"],
        prompt: {
          de: "Welche Zeitangabe ist richtig?",
          en: "Which time expression is correct?",
          it: "Quale espressione di tempo è corretta?",
          bn: "কোন সময়-প্রকাশটি সঠিক?",
        },
        german: "___ Montag fahre ich nach Köln.",
        options: ["Nächste", "Nächsten", "Nächstem", "Nächster"],
        answer: 1,
        explanation: {
          de: "Zeitangabe ohne Präposition → Akkusativ; »der Montag« ist maskulin → nächsten Montag.",
          en: "A time expression with no preposition takes the Akkusativ; 'der Montag' is masculine → nächsten Montag.",
          it: "Un'espressione di tempo senza preposizione va all'Akkusativ; »der Montag« è maschile → nächsten Montag.",
          bn: "Präposition ছাড়া সময়-প্রকাশ Akkusativ নেয়; »der Montag« পুংলিঙ্গ → nächsten Montag।",
        },
      }),
      gap({
        id: "akk-med-3",
        difficulty: 2,
        tags: ["kasus-akkusativ", "es-gibt"],
        prompt: {
          de: "Ergänze den Artikel.",
          en: "Fill in the article.",
          it: "Inserisci l'articolo.",
          bn: "সঠিক আর্টিকেল বসান।",
        },
        before: "In unserem Haus gibt es",
        after: "Aufzug.",
        options: ["ein", "einen", "einem"],
        answer: "einen",
        explanation: {
          de: "»es gibt« steht immer mit Akkusativ; »der Aufzug« ist maskulin → einen Aufzug.",
          en: "'es gibt' always takes the Akkusativ; 'der Aufzug' is masculine → einen Aufzug.",
          it: "»es gibt« regge sempre l'Akkusativ; »der Aufzug« è maschile → einen Aufzug.",
          bn: "»es gibt« সবসময় Akkusativ নেয়; »der Aufzug« পুংলিঙ্গ → einen Aufzug।",
        },
      }),
      mc({
        id: "akk-med-4",
        difficulty: 2,
        tags: ["kasus-akkusativ", "possessiv"],
        prompt: {
          de: "Welche Form ist richtig?",
          en: "Which form is correct?",
          it: "Quale forma è corretta?",
          bn: "কোন রূপটি সঠিক?",
        },
        german: "Ohne ___ Ausweis darf ich nicht rein.",
        options: ["mein", "meinen", "meinem", "meiner"],
        answer: 1,
        explanation: {
          de: "»ohne« verlangt Akkusativ; »der Ausweis« ist maskulin → meinen Ausweis.",
          en: "'ohne' takes the Akkusativ; 'der Ausweis' is masculine → meinen Ausweis.",
          it: "»ohne« regge l'Akkusativ; »der Ausweis« è maschile → meinen Ausweis.",
          bn: "»ohne« Akkusativ নেয়; »der Ausweis« পুংলিঙ্গ → meinen Ausweis।",
        },
      }),
    ],

    hard: [
      order({
        id: "akk-hard-1",
        difficulty: 3,
        tags: ["kasus-akkusativ", "wortstellung"],
        prompt: {
          de: "Bilde einen korrekten Satz.",
          en: "Put the words into a correct sentence.",
          it: "Metti le parole in una frase corretta.",
          bn: "শব্দগুলো সাজিয়ে সঠিক বাক্য তৈরি করুন।",
        },
        words: ["Ich", "schreibe", "meinem", "Vermieter", "einen", "Brief"],
        answer: ["Ich", "schreibe", "meinem", "Vermieter", "einen", "Brief"],
        explanation: {
          de: "Zwei Objekte: die Person steht im Dativ (meinem Vermieter), die Sache im Akkusativ (einen Brief). Dativ vor Akkusativ, wenn beide Nomen sind.",
          en: "Two objects: the person goes in the Dativ (meinem Vermieter), the thing in the Akkusativ (einen Brief). Dativ before Akkusativ when both are nouns.",
          it: "Due oggetti: la persona al Dativ (meinem Vermieter), la cosa all'Akkusativ (einen Brief). Dativ prima di Akkusativ quando sono entrambi sostantivi.",
          bn: "দুটি কর্ম: ব্যক্তি Dativ-এ (meinem Vermieter), বস্তু Akkusativ-এ (einen Brief)। দুটোই বিশেষ্য হলে Dativ আগে, Akkusativ পরে।",
        },
      }),
      mc({
        id: "akk-hard-2",
        difficulty: 3,
        tags: ["kasus-akkusativ", "kasus-nominativ"],
        prompt: {
          de: "Welcher Satz ist richtig?",
          en: "Which sentence is correct?",
          it: "Quale frase è corretta?",
          bn: "কোন বাক্যটি সঠিক?",
        },
        options: [
          "Der Hund beißt den Mann.",
          "Den Hund beißt den Mann.",
          "Der Hund beißt der Mann.",
          "Dem Hund beißt der Mann.",
        ],
        answer: 0,
        explanation: {
          de: "Ein Satz braucht genau ein Subjekt im Nominativ (der Hund) und hier ein Objekt im Akkusativ (den Mann). Zwei Akkusative oder zwei Nominative gehen nicht.",
          en: "A sentence needs exactly one subject in the Nominativ (der Hund) and here one object in the Akkusativ (den Mann). Two Akkusativ or two Nominativ forms cannot work.",
          it: "Una frase ha esattamente un soggetto al Nominativ (der Hund) e qui un oggetto all'Akkusativ (den Mann). Due Akkusativ o due Nominativ non funzionano.",
          bn: "একটি বাক্যে ঠিক একটি কর্তা Nominativ-এ (der Hund) আর এখানে একটি কর্ম Akkusativ-এ (den Mann) থাকতে হবে। দুটি Akkusativ বা দুটি Nominativ চলে না।",
        },
      }),
      gap({
        id: "akk-hard-3",
        difficulty: 3,
        tags: ["kasus-akkusativ", "praeposition-akkusativ"],
        prompt: {
          de: "Ergänze den Artikel.",
          en: "Fill in the article.",
          it: "Inserisci l'articolo.",
          bn: "সঠিক আর্টিকেল বসান।",
        },
        before: "Der Bus fährt durch",
        after: "Tunnel und dann über die Brücke.",
        options: ["der", "den", "dem", "das"],
        answer: "den",
        explanation: {
          de: "»durch« verlangt immer Akkusativ; »der Tunnel« ist maskulin → durch den Tunnel. »über« wäre eine Wechselpräposition, aber hier nicht gefragt.",
          en: "'durch' always takes the Akkusativ; 'der Tunnel' is masculine → durch den Tunnel. 'über' would be a two-way preposition, but it is not the gap here.",
          it: "»durch« regge sempre l'Akkusativ; »der Tunnel« è maschile → durch den Tunnel. »über« sarebbe una preposizione a doppio caso, ma non è lo spazio da riempire.",
          bn: "»durch« সবসময় Akkusativ নেয়; »der Tunnel« পুংলিঙ্গ → durch den Tunnel। »über« একটি Wechselpräposition, তবে এখানে সেটি ফাঁক নয়।",
        },
      }),
    ],
  },

  quickTest: [
    gap({
      id: "akk-test-1",
      difficulty: 2,
      tags: ["kasus-akkusativ"],
      prompt: {
        de: "Ergänze den Artikel.",
        en: "Fill in the article.",
        it: "Inserisci l'articolo.",
        bn: "সঠিক আর্টিকেল বসান।",
      },
      before: "Ich brauche",
      after: "neuen Vertrag.",
      options: ["ein", "einen", "einem"],
      answer: "einen",
      explanation: {
        de: "»der Vertrag« ist maskulin, Objekt von brauchen → einen.",
        en: "'der Vertrag' is masculine and the object of brauchen → einen.",
        it: "»der Vertrag« è maschile e oggetto di brauchen → einen.",
        bn: "»der Vertrag« পুংলিঙ্গ এবং brauchen-এর কর্ম → einen।",
      },
    }),
    mc({
      id: "akk-test-2",
      difficulty: 2,
      tags: ["praeposition-akkusativ"],
      prompt: {
        de: "Welche Präposition verlangt NICHT den Akkusativ?",
        en: "Which preposition does NOT take the Akkusativ?",
        it: "Quale preposizione NON regge l'Akkusativ?",
        bn: "কোন Präposition-টি Akkusativ নেয় না?",
      },
      options: ["für", "ohne", "mit", "gegen"],
      answer: 2,
      explanation: {
        de: "»mit« verlangt immer den Dativ. für, ohne und gegen verlangen den Akkusativ.",
        en: "'mit' always takes the Dativ. für, ohne and gegen take the Akkusativ.",
        it: "»mit« regge sempre il Dativ. für, ohne e gegen reggono l'Akkusativ.",
        bn: "»mit« সবসময় Dativ নেয়। für, ohne ও gegen Akkusativ নেয়।",
      },
    }),
    gap({
      id: "akk-test-3",
      difficulty: 2,
      tags: ["kasus-akkusativ", "zeitangabe-akkusativ"],
      prompt: {
        de: "Ergänze richtig.",
        en: "Fill in the correct form.",
        it: "Inserisci la forma corretta.",
        bn: "সঠিক রূপটি বসান।",
      },
      before: "Ich gehe",
      after: "Tag zu Fuß zur Arbeit.",
      options: ["jeder", "jeden", "jedem"],
      answer: "jeden",
      explanation: {
        de: "Zeitangabe ohne Präposition → Akkusativ, maskulin → jeden Tag.",
        en: "Time expression with no preposition → Akkusativ, masculine → jeden Tag.",
        it: "Espressione di tempo senza preposizione → Akkusativ, maschile → jeden Tag.",
        bn: "Präposition ছাড়া সময়-প্রকাশ → Akkusativ, পুংলিঙ্গ → jeden Tag।",
      },
    }),
    mc({
      id: "akk-test-4",
      difficulty: 3,
      tags: ["kasus-akkusativ"],
      prompt: {
        de: "Welcher Satz enthält einen Fehler?",
        en: "Which sentence contains a mistake?",
        it: "Quale frase contiene un errore?",
        bn: "কোন বাক্যে ভুল আছে?",
      },
      options: [
        "Ich habe einen Hund.",
        "Wir suchen eine Wohnung.",
        "Er kauft ein Auto.",
        "Sie besucht ihr Bruder.",
      ],
      answer: 3,
      explanation: {
        de: "»besuchen« verlangt Akkusativ und »der Bruder« ist maskulin: ihren Bruder, nicht ihr Bruder.",
        en: "'besuchen' takes the Akkusativ and 'der Bruder' is masculine: ihren Bruder, not ihr Bruder.",
        it: "»besuchen« regge l'Akkusativ e »der Bruder« è maschile: ihren Bruder, non ihr Bruder.",
        bn: "»besuchen« Akkusativ নেয় এবং »der Bruder« পুংলিঙ্গ: ihr Bruder নয়, ihren Bruder।",
      },
    }),
    truefalse({
      id: "akk-test-5",
      difficulty: 2,
      tags: ["praeposition-akkusativ"],
      prompt: {
        de: "Richtig oder falsch?",
        en: "True or false?",
        it: "Vero o falso?",
        bn: "সত্য না মিথ্যা?",
      },
      statement: "Nach »für« steht der Akkusativ nur, wenn eine Bewegung stattfindet.",
      answer: false,
      explanation: {
        de: "Falsch. »für« verlangt immer den Akkusativ, ganz unabhängig von Bewegung. Bewegung entscheidet nur bei den Wechselpräpositionen.",
        en: "False. 'für' always takes the Akkusativ, regardless of movement. Movement only decides for the two-way prepositions.",
        it: "Falso. »für« regge sempre l'Akkusativ, indipendentemente dal movimento. Il movimento decide solo per le preposizioni a doppio caso.",
        bn: "মিথ্যা। »für« সবসময় Akkusativ নেয়, গতি থাকুক বা না থাকুক। গতি কেবল Wechselpräposition-এর ক্ষেত্রে সিদ্ধান্ত নেয়।",
      },
    }),
    gap({
      id: "akk-test-6",
      difficulty: 3,
      tags: ["kasus-akkusativ", "kasus-dativ"],
      prompt: {
        de: "Ergänze den Artikel.",
        en: "Fill in the article.",
        it: "Inserisci l'articolo.",
        bn: "সঠিক আর্টিকেল বসান।",
      },
      before: "Ich schenke meiner Schwester",
      after: "Buch.",
      options: ["ein", "einen", "einem"],
      answer: "ein",
      explanation: {
        de: "»das Buch« ist neutrum und steht als Sache im Akkusativ — neutrum ändert sich nicht: ein Buch. »meiner Schwester« ist der Dativ.",
        en: "'das Buch' is neuter and is the thing given, so Akkusativ — and the neuter does not change: ein Buch. 'meiner Schwester' is the Dativ.",
        it: "»das Buch« è neutro ed è la cosa donata, quindi Akkusativ — e il neutro non cambia: ein Buch. »meiner Schwester« è il Dativ.",
        bn: "»das Buch« ক্লীবলিঙ্গ এবং দেওয়া বস্তু, তাই Akkusativ — ক্লীবলিঙ্গ বদলায় না: ein Buch। »meiner Schwester« হলো Dativ।",
      },
    }),
  ],
};
