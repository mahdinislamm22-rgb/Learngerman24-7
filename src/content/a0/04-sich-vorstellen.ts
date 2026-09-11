import type { A0Lesson } from "./types";

export const sichVorstellen: A0Lesson = {
  slug: "sich-vorstellen",
  order: 4,
  title: {
    de: "Sich vorstellen — das Verb sein",
    en: "Introducing yourself — the verb sein",
    it: "Presentarsi — il verbo sein",
    bn: "নিজের পরিচয় দেওয়া — sein ক্রিয়াপদ",
  },
  goals: [
    {
      en: "Say your name, where you are from and where you live",
      it: "Dire il tuo nome, da dove vieni e dove abiti",
      bn: "নিজের নাম, কোথা থেকে এসেছেন আর কোথায় থাকেন তা বলা",
    },
    {
      en: "Use sein (to be) in all six forms",
      it: "Usare sein (essere) in tutte e sei le forme",
      bn: "sein (হওয়া) ক্রিয়ার ছয়টি রূপ ব্যবহার করা",
    },
    {
      en: "Say your age the way Germans actually say it",
      it: "Dire la tua età come la dicono davvero i tedeschi",
      bn: "জার্মানরা যেভাবে বয়স বলে, সেভাবে বলা",
    },
  ],

  blocks: [
    {
      kind: "text",
      body: {
        en: "sein means 'to be'. It is the most useful verb in German and also the most irregular — the forms do not look like the original word at all. That is annoying, but it is the same in every language you already know: English is/am/are, Italian sono/sei/è, and Bengali changes shape too. Irregular verbs are irregular because they are used constantly, and you will learn these six by using them, not by staring at them.",
        it: "sein significa «essere». È il verbo più utile del tedesco e anche il più irregolare — le forme non somigliano per niente alla parola di partenza. È fastidioso, ma succede in ogni lingua che già conosci: italiano sono/sei/è, inglese is/am/are. I verbi irregolari sono irregolari proprio perché si usano di continuo.",
        bn: "sein মানে 'হওয়া'। এটি জার্মানের সবচেয়ে দরকারি ক্রিয়া, আবার সবচেয়ে নিয়মভাঙাও — রূপগুলো মূল শব্দটার মতো দেখতেই নয়। বিরক্তিকর, কিন্তু আপনার জানা প্রতিটি ভাষাতেই এমন হয়: ইংরেজিতে is/am/are, ইতালীয়তে sono/sei/è, বাংলাতেও রূপ বদলায়। যে ক্রিয়াগুলো সারাক্ষণ ব্যবহার হয়, সেগুলোই নিয়ম ভাঙে — আর এই ছয়টা আপনি ব্যবহার করতে করতেই শিখে ফেলবেন, তাকিয়ে থেকে নয়।",
      },
    },
    {
      kind: "table",
      title: {
        en: "sein — to be",
        it: "sein — essere",
        bn: "sein — হওয়া",
      },
      headers: ["Deutsch", "English", "Italiano", "বাংলা"],
      rows: [
        ["ich bin", "I am", "io sono", "আমি আছি / আমি হই"],
        ["du bist", "you are (informal)", "tu sei", "তুমি আছো"],
        ["er / sie / es ist", "he / she / it is", "lui / lei è", "সে আছে"],
        ["wir sind", "we are", "noi siamo", "আমরা আছি"],
        ["ihr seid", "you are (plural, informal)", "voi siete", "তোমরা আছো"],
        ["sie / Sie sind", "they are / you are (polite)", "loro sono / Lei è", "তারা আছে / আপনি আছেন"],
      ],
      note: {
        en: "Notice that sie sind (they are) and Sie sind (you, polite) are identical except for the capital letter. Germans hear the difference from context; you will read it from the capital S.",
        it: "Nota che sie sind (loro sono) e Sie sind (Lei) sono identici a parte la maiuscola. I tedeschi distinguono dal contesto; tu lo leggi dalla S maiuscola.",
        bn: "খেয়াল করুন, sie sind (তারা আছে) আর Sie sind (আপনি আছেন) — বড় হাতের অক্ষর ছাড়া দুটো একদম এক। জার্মানরা প্রসঙ্গ থেকে বোঝে; আপনি বড় হাতের S দেখে পড়ে নেবেন।",
      },
    },
    {
      kind: "words",
      title: {
        en: "The four sentences you need on day one",
        it: "Le quattro frasi che ti servono il primo giorno",
        bn: "প্রথম দিনেই যে চারটি বাক্য লাগবে",
      },
      words: [
        {
          de: "Ich heiße Mahdin.",
          sayIt: "ikh HAI-se",
          meaning: {
            en: "My name is Mahdin. (literally: I am called Mahdin)",
            it: "Mi chiamo Mahdin. (letteralmente: io mi chiamo)",
            bn: "আমার নাম মাহদিন। (আক্ষরিক: আমাকে মাহদিন বলে ডাকা হয়)",
          },
        },
        {
          de: "Ich komme aus Bangladesch.",
          sayIt: "ikh KO-me ows",
          meaning: {
            en: "I come from Bangladesh.",
            it: "Vengo dal Bangladesh.",
            bn: "আমি বাংলাদেশ থেকে এসেছি।",
          },
        },
        {
          de: "Ich wohne in Siegen.",
          sayIt: "ikh VOH-ne in",
          meaning: {
            en: "I live in Siegen.",
            it: "Abito a Siegen.",
            bn: "আমি জিগেনে থাকি।",
          },
        },
        {
          de: "Ich bin 20 Jahre alt.",
          sayIt: "ikh bin TSVAN-tsikh YAH-re alt",
          meaning: {
            en: "I am 20 years old.",
            it: "Ho 20 anni.",
            bn: "আমার বয়স ২০ বছর।",
          },
        },
      ],
    },

    {
      kind: "compare",
      german: "Ich bin 20 Jahre alt.  (I AM 20 years old)",
      english: "I am 20 years old.  (also 'to be')",
      italian: "Ho 20 anni.  (letteralmente: I HAVE 20 years)",
      bengali: "আমার বয়স ২০ বছর।  (literally: my age IS 20 years)",
      why: {
        en: "This is the classic mistake for Italian speakers. Italian says ho 20 anni — 'I HAVE 20 years' — so Italian speakers reach for haben and say 'Ich habe 20 Jahre'. That is wrong in German. German uses sein, like English: Ich BIN 20 Jahre alt. If you think in English here you will get it right; if you think in Italian you will get it wrong. Bengali is closer to German than Italian is on this one, because Bengali also does not use 'have'.",
        it: "Questo è l'errore classico per chi parla italiano. L'italiano dice «ho 20 anni», quindi viene istintivo usare haben e dire «Ich habe 20 Jahre». In tedesco è sbagliato. Il tedesco usa sein, come l'inglese: Ich BIN 20 Jahre alt. Su questo punto, pensa in inglese e non in italiano.",
        bn: "ইতালীয়ভাষীদের জন্য এটাই চিরাচরিত ভুল। ইতালীয়তে বলে ho 20 anni — 'আমার ২০ বছর আছে' — তাই তাঁরা haben ব্যবহার করে বলে ফেলেন 'Ich habe 20 Jahre'। জার্মানে এটা ভুল। জার্মান ইংরেজির মতো sein ব্যবহার করে: Ich BIN 20 Jahre alt। এখানে ইংরেজিতে ভাবলে ঠিক হবে, ইতালীয়তে ভাবলে ভুল হবে।",
      },
    },
    {
      kind: "warn",
      body: {
        en: "Never say 'Ich habe 20 Jahre'. It is understandable but clearly wrong, and it is one of the first things a teacher will correct. The German sentence needs three parts: bin + the number + Jahre alt. Leaving off alt sounds unfinished.",
        it: "Non dire mai «Ich habe 20 Jahre». Si capisce, ma è chiaramente sbagliato ed è una delle prime cose che un insegnante corregge. La frase tedesca ha tre parti: bin + il numero + Jahre alt. Senza alt suona incompiuta.",
        bn: "কখনোই বলবেন না 'Ich habe 20 Jahre'। বোঝা যাবে, কিন্তু স্পষ্টতই ভুল — শিক্ষক প্রথমেই যেগুলো শুধরে দেন এটা তার একটি। জার্মান বাক্যে তিনটি অংশ লাগে: bin + সংখ্যা + Jahre alt। alt বাদ দিলে বাক্যটা অসম্পূর্ণ শোনায়।",
      },
    },
    {
      kind: "compare",
      german: "Ich heiße Mahdin.  (I am called Mahdin)",
      english: "My name is Mahdin.",
      italian: "Mi chiamo Mahdin.",
      bengali: "আমার নাম মাহদিন।",
      why: {
        en: "German does not usually say 'my name is'. It uses one verb, heißen, meaning 'to be called'. Italian does exactly the same with mi chiamo — so if you speak Italian, this one is free. You CAN say Mein Name ist Mahdin and it is correct, but it sounds formal, like filling in a form. Ich heiße is what people actually say.",
        it: "Il tedesco di solito non dice «il mio nome è». Usa un verbo solo, heißen, «chiamarsi». L'italiano fa esattamente lo stesso con «mi chiamo» — quindi questa ti è già regalata. Puoi dire Mein Name ist Mahdin ed è corretto, ma suona formale, da modulo da compilare.",
        bn: "জার্মান সাধারণত 'আমার নাম' বলে না। এটি একটিই ক্রিয়া ব্যবহার করে — heißen, মানে 'ডাকা হওয়া'। ইতালীয় ভাষাও ঠিক এটাই করে (mi chiamo)। আপনি Mein Name ist Mahdin বলতে পারেন, সেটা ভুলও নয়, কিন্তু শুনতে ফর্ম পূরণের মতো আনুষ্ঠানিক লাগে। মানুষ আসলে বলে Ich heiße।",
      },
    },
    {
      kind: "tip",
      body: {
        en: "Put it together and you have a complete self-introduction, four sentences long: Hallo, ich heiße … Ich komme aus … Ich wohne in … Ich bin … Jahre alt. Say it out loud now with your own details. This is the single most reusable thing in this whole lesson — you will use it at the Bürgeramt, in a class, at a job interview and at every party.",
        it: "Mettile insieme e hai una presentazione completa in quattro frasi: Hallo, ich heiße … Ich komme aus … Ich wohne in … Ich bin … Jahre alt. Dilla ad alta voce adesso con i tuoi dati. È la cosa più riutilizzabile di tutta la lezione.",
        bn: "সবগুলো জোড়া লাগালেই চার বাক্যের একটি সম্পূর্ণ আত্মপরিচয় তৈরি: Hallo, ich heiße … Ich komme aus … Ich wohne in … Ich bin … Jahre alt। এখনই নিজের তথ্য দিয়ে জোরে বলুন। এই গোটা পাঠের মধ্যে এটাই সবচেয়ে বেশি কাজে লাগবে — Bürgeramt-এ, ক্লাসে, চাকরির ইন্টারভিউতে, প্রতিটি অনুষ্ঠানে।",
      },
    },
  ],

  quiz: [
    {
      id: "s1",
      ask: {
        en: "Complete: Ich ___ Student.",
        it: "Completa: Ich ___ Student.",
        bn: "পূরণ করুন: Ich ___ Student.",
      },
      german: "Ich ___ Student.",
      options: ["bin", "bist", "ist"],
      answerIndex: 0,
      why: {
        en: "ich always takes bin. bist goes with du, ist goes with er/sie/es.",
        it: "ich vuole sempre bin. bist va con du, ist con er/sie/es.",
        bn: "ich-এর সঙ্গে সবসময় bin বসে। bist যায় du-এর সঙ্গে, ist যায় er/sie/es-এর সঙ্গে।",
      },
    },
    {
      id: "s2",
      ask: {
        en: "How do you say 'I am 20 years old'?",
        it: "Come si dice «ho 20 anni»?",
        bn: "'আমার বয়স ২০ বছর' কীভাবে বলবেন?",
      },
      options: [
        "Ich habe 20 Jahre.",
        "Ich bin 20 Jahre alt.",
        "Ich bin 20 Jahre.",
      ],
      answerIndex: 1,
      why: {
        en: "German uses sein, not haben — and it needs alt at the end. Ich habe 20 Jahre is the Italian structure translated word for word, which is exactly the trap. Ich bin 20 Jahre without alt is incomplete.",
        it: "Il tedesco usa sein, non haben — e serve alt alla fine. «Ich habe 20 Jahre» è la struttura italiana tradotta parola per parola: proprio la trappola.",
        bn: "জার্মান haben নয়, sein ব্যবহার করে — আর শেষে alt লাগে। Ich habe 20 Jahre হলো ইতালীয় গঠনের শব্দে-শব্দে অনুবাদ, আর সেটাই ফাঁদ। alt ছাড়া Ich bin 20 Jahre অসম্পূর্ণ।",
      },
    },
    {
      id: "s3",
      ask: {
        en: "Which sentence means 'I live in Siegen'?",
        it: "Quale frase significa «abito a Siegen»?",
        bn: "কোন বাক্যটির মানে 'আমি জিগেনে থাকি'?",
      },
      options: [
        "Ich komme aus Siegen.",
        "Ich wohne in Siegen.",
        "Ich heiße Siegen.",
      ],
      answerIndex: 1,
      why: {
        en: "wohnen = to live somewhere (right now). kommen aus = to come from (your origin). The two are often confused: you can come from Bangladesh AND live in Siegen at the same time.",
        it: "wohnen = abitare da qualche parte (adesso). kommen aus = venire da (l'origine). Si confondono spesso: puoi venire dal Bangladesh E abitare a Siegen nello stesso momento.",
        bn: "wohnen = কোথাও থাকা (এখন)। kommen aus = কোথা থেকে আসা (আপনার উৎস)। এই দুটো প্রায়ই গুলিয়ে যায়: আপনি একই সঙ্গে বাংলাদেশ থেকে আসতে পারেন আর জিগেনে থাকতে পারেন।",
      },
    },
    {
      id: "s4",
      ask: {
        en: "Complete: Wir ___ aus Italien.",
        it: "Completa: Wir ___ aus Italien.",
        bn: "পূরণ করুন: Wir ___ aus Italien.",
      },
      german: "Wir ___ aus Italien.",
      options: ["sind", "seid", "bin"],
      answerIndex: 0,
      why: {
        en: "wir (we) takes sind. seid belongs to ihr (you, plural). An easy way to keep them apart: wir and sie both take sind — the two 'plural' words share a form.",
        it: "wir (noi) vuole sind. seid appartiene a ihr (voi). Un modo facile per distinguerli: wir e sie prendono entrambi sind.",
        bn: "wir (আমরা)-এর সঙ্গে sind বসে। seid যায় ihr (তোমরা)-এর সঙ্গে। আলাদা রাখার সহজ উপায়: wir আর sie — দুটোতেই sind বসে।",
      },
    },
  ],
};
