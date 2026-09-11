import type { A0Lesson } from "./types";

export const alphabet: A0Lesson = {
  slug: "alphabet",
  order: 2,
  title: {
    de: "Alphabet und Aussprache",
    en: "The alphabet and pronunciation",
    it: "L'alfabeto e la pronuncia",
    bn: "বর্ণমালা ও উচ্চারণ",
  },
  goals: [
    {
      en: "Recognise the four extra letters: ä, ö, ü, ß",
      it: "Riconoscere le quattro lettere in più: ä, ö, ü, ß",
      bn: "অতিরিক্ত চারটি অক্ষর চেনা: ä, ö, ü, ß",
    },
    {
      en: "Read any German word out loud, even a new one",
      it: "Leggere ad alta voce qualsiasi parola tedesca, anche nuova",
      bn: "যেকোনো জার্মান শব্দ — এমনকি নতুন শব্দও — জোরে পড়তে পারা",
    },
  ],

  blocks: [
    {
      kind: "text",
      body: {
        en: "Here is the good news, and it is genuinely good: German spelling is almost completely regular. Unlike English, a German letter makes the same sound nearly every time. Once you learn the handful of rules below, you can read a German word you have never seen before and say it correctly. English speakers find this surprising. Bengali speakers will find it familiar — Bengali is regular in the same way.",
        it: "Ecco la buona notizia, ed è davvero buona: l'ortografia tedesca è quasi del tutto regolare. A differenza dell'inglese, una lettera tedesca fa quasi sempre lo stesso suono. Imparata la manciata di regole qui sotto, potrai leggere una parola tedesca mai vista e pronunciarla bene. Per chi parla italiano è un terreno familiare.",
        bn: "একটা সুখবর, আর এটা সত্যিই ভালো খবর: জার্মান বানান প্রায় পুরোপুরি নিয়মমাফিক। ইংরেজির মতো নয় — জার্মানে একটা অক্ষর প্রায় সবসময় একই শব্দ করে। নিচের অল্প কয়েকটা নিয়ম শিখে ফেললে আপনি আগে কখনো দেখেননি এমন জার্মান শব্দও ঠিকভাবে পড়ে ফেলতে পারবেন। বাংলাও ঠিক এভাবেই নিয়মমাফিক, তাই আপনার কাছে ব্যাপারটা পরিচিত লাগবে।",
      },
    },
    {
      kind: "table",
      title: {
        en: "The four extra letters",
        it: "Le quattro lettere in più",
        bn: "অতিরিক্ত চারটি অক্ষর",
      },
      headers: ["Letter", "Sound", "Example", "Meaning"],
      rows: [
        ["ä", "like 'e' in bed", "Mädchen", "girl"],
        ["ö", "say 'e', keep lips round", "schön", "beautiful"],
        ["ü", "say 'ee', keep lips round", "über", "over / about"],
        ["ß", "always 'ss'", "Straße", "street"],
      ],
      note: {
        en: "ö and ü have no English equivalent. The trick is mechanical, not musical: make the vowel your mouth already knows, then round your lips as if to whistle without moving your tongue. For ü say 'ee' then round. For ö say 'e' then round.",
        it: "ö e ü non esistono in italiano. Il trucco è meccanico, non musicale: fai la vocale che la tua bocca già conosce, poi arrotonda le labbra come per fischiare, senza muovere la lingua. Per ü di' «i» e arrotonda. Per ö di' «e» e arrotonda.",
        bn: "ö আর ü বাংলায় নেই। কৌশলটা যান্ত্রিক, সুরের ব্যাপার নয়: আপনার মুখ যে স্বরটা এমনিতেই জানে সেটা বলুন, তারপর জিভ না নড়িয়ে ঠোঁট গোল করুন যেন শিস দিচ্ছেন। ü-এর জন্য 'ঈ' বলে ঠোঁট গোল করুন। ö-এর জন্য 'এ' বলে ঠোঁট গোল করুন।",
      },
    },
    {
      kind: "tip",
      body: {
        en: "No German keyboard? Type ae, oe, ue and ss instead. Schön becomes schoen, Straße becomes Strasse. Every German reads this without blinking — it is the normal fallback, not a mistake.",
        it: "Non hai una tastiera tedesca? Scrivi ae, oe, ue e ss. Schön diventa schoen, Straße diventa Strasse. Ogni tedesco lo legge senza battere ciglio: è la soluzione normale, non un errore.",
        bn: "জার্মান কিবোর্ড নেই? তার বদলে ae, oe, ue আর ss লিখুন। Schön হয়ে যায় schoen, Straße হয়ে যায় Strasse। যেকোনো জার্মান এটা স্বাভাবিকভাবেই পড়ে নেয় — এটা ভুল নয়, স্বীকৃত বিকল্প।",
      },
    },
    {
      kind: "table",
      title: {
        en: "The letters that surprise you",
        it: "Le lettere che ti sorprendono",
        bn: "যে অক্ষরগুলো আপনাকে অবাক করবে",
      },
      headers: ["Spelling", "Sound", "Example", "Say it"],
      rows: [
        ["w", "like English V", "Wasser (water)", "VAS-ser"],
        ["v", "like English F", "Vater (father)", "FAH-ter"],
        ["z", "like TS", "Zeit (time)", "TSAIT"],
        ["s + vowel", "like English Z", "sagen (to say)", "ZAH-gen"],
        ["sch", "like English SH", "Schule (school)", "SHOO-le"],
        ["st- at start", "SHT", "Straße (street)", "SHTRAH-se"],
        ["sp- at start", "SHP", "sprechen (to speak)", "SHPRE-khen"],
        ["j", "like English Y", "ja (yes)", "YAH"],
        ["r", "in the throat", "rot (red)", "ROHT"],
      ],
    },
    {
      kind: "warn",
      body: {
        en: "The v/w swap is the single most common beginner mistake, because it is the exact opposite of what your eyes expect. Wasser sounds like 'Vasser'. Vater sounds like 'Fater'. Say both out loud three times now — this one is worth drilling early, because it never stops mattering.",
        it: "Lo scambio v/w è l'errore più comune dei principianti, perché è esattamente il contrario di quello che si aspettano gli occhi. Wasser suona «Vasser». Vater suona «Fater». Dilli entrambi ad alta voce tre volte adesso.",
        bn: "v/w-এর অদলবদল শুরুর দিকের সবচেয়ে সাধারণ ভুল, কারণ চোখ যা আশা করে ঠিক তার উল্টো। Wasser শোনায় 'ভাসার'-এর মতো। Vater শোনায় 'ফাটার'-এর মতো। এখনই দুটোই তিনবার জোরে বলুন — এই একটা জিনিস শুরুতেই রপ্ত করা মূল্যবান।",
      },
    },
    {
      kind: "table",
      title: {
        en: "Two letters together",
        it: "Due lettere insieme",
        bn: "দুটি অক্ষর একসঙ্গে",
      },
      headers: ["Spelling", "Sound", "Example", "Meaning"],
      rows: [
        ["ei", "like English 'eye'", "nein", "no"],
        ["ie", "like English 'ee'", "sieben", "seven"],
        ["eu / äu", "like English 'oy'", "neun / Häuser", "nine / houses"],
        ["au", "like English 'ow'", "Haus", "house"],
      ],
      note: {
        en: "ei and ie are the pair beginners mix up most. Here is the cheat: the SECOND letter tells you the sound. ei ends in i → say 'eye'. ie ends in e → say 'ee'. So nein = 'nine' and sieben = 'ZEE-ben'.",
        it: "ei e ie sono la coppia che i principianti confondono di più. Il trucco: la SECONDA lettera dice il suono. ei finisce in i → «ai». ie finisce in e → «i». Quindi nein = «nain» e sieben = «ZI-ben».",
        bn: "ei আর ie — এই জোড়াটাই নতুনরা সবচেয়ে বেশি গুলিয়ে ফেলে। কৌশলটা হলো: দ্বিতীয় অক্ষরটাই উচ্চারণ ঠিক করে। ei শেষ হয় i দিয়ে → বলুন 'আই'। ie শেষ হয় e দিয়ে → বলুন 'ঈ'। তাই nein = 'নাইন' আর sieben = 'ৎসীবেন'।",
      },
    },
    {
      kind: "compare",
      german: "Alle Nomen schreibt man groß: das Haus, die Frau, der Mann.",
      english: "English only capitalises names: the house, the woman, the man.",
      italian: "L'italiano scrive tutto minuscolo: la casa, la donna, l'uomo.",
      bengali: "বাংলায় বড়/ছোট হাতের অক্ষরই নেই।",
      why: {
        en: "German writes EVERY noun with a capital letter, not just names. No other major language does this. It looks strange for a week — then it becomes useful, because a capital letter in the middle of a sentence is a free signal that says 'this word is a thing'. That helps you read long sentences later.",
        it: "Il tedesco scrive OGNI sostantivo con la maiuscola, non solo i nomi propri. Nessun'altra lingua importante lo fa. Per una settimana sembra strano — poi diventa utile: una maiuscola in mezzo alla frase è un segnale gratuito che dice «questa parola è una cosa».",
        bn: "জার্মানে প্রতিটি বিশেষ্য বড় হাতের অক্ষরে লেখা হয়, শুধু নাম নয়। আর কোনো বড় ভাষা এটা করে না। এক সপ্তাহ অদ্ভুত লাগবে — তারপর কাজে লাগবে, কারণ বাক্যের মাঝখানে বড় অক্ষর দেখলেই বিনা খরচে বোঝা যায় 'এই শব্দটা একটা জিনিস'। পরে লম্বা বাক্য পড়তে এটা সাহায্য করবে।",
      },
    },
  ],

  quiz: [
    {
      id: "a1",
      ask: {
        en: "How do you say the word Wasser?",
        it: "Come si pronuncia la parola Wasser?",
        bn: "Wasser শব্দটি কীভাবে উচ্চারণ করবেন?",
      },
      german: "Wasser",
      options: ["WOSS-er (w as in English water)", "VAS-ser (w like English v)"],
      answerIndex: 1,
      why: {
        en: "German w is always the English V sound. Wasser = VAS-ser. There is no exception to learn here.",
        it: "La w tedesca è sempre il suono della v italiana. Wasser = VAS-ser. Qui non ci sono eccezioni.",
        bn: "জার্মান w সবসময় ইংরেজি v-এর মতো শোনায়। Wasser = ভাসার। এখানে কোনো ব্যতিক্রম নেই।",
      },
    },
    {
      id: "a2",
      ask: {
        en: "Which word rhymes with English 'fine'?",
        it: "Quale parola fa rima con l'inglese «fine»?",
        bn: "কোন শব্দটি ইংরেজি 'fine'-এর সঙ্গে মিল খায়?",
      },
      options: ["nein", "sieben", "schön"],
      answerIndex: 0,
      why: {
        en: "nein has ei, and ei ends in i → the 'eye' sound. sieben has ie → 'ee'. Remember: the second letter decides.",
        it: "nein ha ei, e ei finisce in i → suono «ai». sieben ha ie → «i». Ricorda: decide la seconda lettera.",
        bn: "nein-এ আছে ei, আর ei শেষ হয় i দিয়ে → 'আই' ধ্বনি। sieben-এ আছে ie → 'ঈ'। মনে রাখুন: দ্বিতীয় অক্ষরই ঠিক করে দেয়।",
      },
    },
    {
      id: "a3",
      ask: {
        en: "Which of these is written correctly in German?",
        it: "Quale di queste è scritta correttamente in tedesco?",
        bn: "এর মধ্যে কোনটি জার্মানে সঠিকভাবে লেখা?",
      },
      options: ["Ich wohne in einer stadt.", "Ich wohne in einer Stadt."],
      answerIndex: 1,
      why: {
        en: "Stadt (city) is a noun, so it takes a capital S — even in the middle of the sentence. Every German noun does.",
        it: "Stadt (città) è un sostantivo, quindi vuole la S maiuscola, anche a metà frase. Vale per ogni sostantivo tedesco.",
        bn: "Stadt (শহর) একটি বিশেষ্য, তাই বাক্যের মাঝখানে হলেও বড় হাতের S হবে। জার্মানের প্রতিটি বিশেষ্যেই তাই।",
      },
    },
    {
      id: "a4",
      ask: {
        en: "You have no German keyboard. How do you write schön?",
        it: "Non hai una tastiera tedesca. Come scrivi schön?",
        bn: "আপনার জার্মান কিবোর্ড নেই। schön কীভাবে লিখবেন?",
      },
      options: ["schon", "schoen", "schn"],
      answerIndex: 1,
      why: {
        en: "ö becomes oe. Careful — schon without the dots is a real and different word meaning 'already', so dropping them changes the meaning.",
        it: "ö diventa oe. Attenzione: schon senza puntini è una parola vera e diversa che significa «già», quindi toglierli cambia il senso.",
        bn: "ö হয়ে যায় oe। সাবধান — বিন্দু ছাড়া schon একটি আলাদা সত্যিকারের শব্দ, যার মানে 'ইতিমধ্যে'; তাই বিন্দু বাদ দিলে অর্থ বদলে যায়।",
      },
    },
  ],
};
