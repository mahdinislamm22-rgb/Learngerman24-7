import type { A0Lesson } from "./types";

export const zahlen: A0Lesson = {
  slug: "zahlen",
  order: 3,
  title: {
    de: "Zahlen von 0 bis 100",
    en: "Numbers from 0 to 100",
    it: "I numeri da 0 a 100",
    bn: "০ থেকে ১০০ পর্যন্ত সংখ্যা",
  },
  goals: [
    {
      en: "Count from 0 to 20",
      it: "Contare da 0 a 20",
      bn: "০ থেকে ২০ পর্যন্ত গুনতে পারা",
    },
    {
      en: "Build any number up to 100 yourself",
      it: "Costruire da solo qualsiasi numero fino a 100",
      bn: "১০০ পর্যন্ত যেকোনো সংখ্যা নিজে বানাতে পারা",
    },
    {
      en: "Understand why Germans say numbers backwards",
      it: "Capire perché i tedeschi dicono i numeri al contrario",
      bn: "জার্মানরা কেন সংখ্যা উল্টো করে বলে তা বোঝা",
    },
  ],

  blocks: [
    {
      kind: "table",
      title: {
        en: "0 to 12 — these you simply learn",
        it: "Da 0 a 12 — questi si imparano e basta",
        bn: "০ থেকে ১২ — এগুলো শুধু মুখস্থ করতে হয়",
      },
      headers: ["#", "Deutsch", "Say it"],
      rows: [
        ["0", "null", "NULL"],
        ["1", "eins", "AINS"],
        ["2", "zwei", "TSVAI"],
        ["3", "drei", "DRAI"],
        ["4", "vier", "FEER"],
        ["5", "fünf", "FUENF"],
        ["6", "sechs", "ZEKS"],
        ["7", "sieben", "ZEE-ben"],
        ["8", "acht", "AHKHT"],
        ["9", "neun", "NOYN"],
        ["10", "zehn", "TSAYN"],
        ["11", "elf", "ELF"],
        ["12", "zwölf", "TSVUELF"],
      ],
      note: {
        en: "On the phone, Germans often say zwo instead of zwei, so that two and three (zwei / drei) cannot be confused. You do not need to say it, but you will hear it.",
        it: "Al telefono i tedeschi spesso dicono zwo invece di zwei, per non confondere due e tre (zwei / drei). Non devi usarlo, ma lo sentirai.",
        bn: "ফোনে জার্মানরা প্রায়ই zwei-এর বদলে zwo বলে, যাতে দুই আর তিন (zwei / drei) গুলিয়ে না যায়। আপনাকে বলতে হবে না, কিন্তু শুনবেন।",
      },
    },
    {
      kind: "text",
      body: {
        en: "From 13 to 19 a pattern starts, and it saves you a lot of memorising: take the small number and add -zehn (ten) on the end. That is exactly what English does with -teen.",
        it: "Da 13 a 19 parte uno schema che ti risparmia molta memoria: prendi il numero piccolo e aggiungi -zehn (dieci) alla fine. È esattamente ciò che fa l'inglese con -teen.",
        bn: "১৩ থেকে ১৯ পর্যন্ত একটা প্যাটার্ন শুরু হয়, যা অনেক মুখস্থের কাজ বাঁচিয়ে দেয়: ছোট সংখ্যাটা নিন আর শেষে -zehn (দশ) যোগ করুন। ইংরেজিতে -teen দিয়ে ঠিক এটাই করা হয়।",
      },
    },
    {
      kind: "table",
      headers: ["#", "Deutsch", "Built from"],
      rows: [
        ["13", "dreizehn", "drei + zehn"],
        ["14", "vierzehn", "vier + zehn"],
        ["15", "fünfzehn", "fünf + zehn"],
        ["16", "sechzehn", "sechs loses its s"],
        ["17", "siebzehn", "sieben loses its en"],
        ["18", "achtzehn", "acht + zehn"],
        ["19", "neunzehn", "neun + zehn"],
      ],
      note: {
        en: "Only 16 and 17 are irregular, and only slightly: sechzehn drops the s of sechs, siebzehn drops the -en of sieben. Both changes exist because the full forms are awkward to say quickly. The same two shorten again at 60 and 70.",
        it: "Solo 16 e 17 sono irregolari, e di poco: sechzehn perde la s di sechs, siebzehn perde -en di sieben. Entrambi i cambiamenti esistono perché le forme piene sono scomode da dire in fretta. Gli stessi due si accorciano di nuovo a 60 e 70.",
        bn: "শুধু ১৬ আর ১৭ নিয়মভাঙা, তাও সামান্য: sechzehn-এ sechs-এর s পড়ে যায়, siebzehn-এ sieben-এর -en পড়ে যায়। দুটো পরিবর্তনই হয়েছে কারণ পুরো রূপ দুটো দ্রুত বলা কষ্টকর। এই দুটোই ৬০ আর ৭০-এ আবার ছোট হয়ে যায়।",
      },
    },

    {
      kind: "compare",
      german: "einundzwanzig  =  ein + und + zwanzig  =  one-and-twenty",
      english: "twenty-one  (big number first)",
      italian: "ventuno  (numero grande prima)",
      bengali: "একুশ  (এক + বিশ, ছোট সংখ্যা আগে)",
      why: {
        en: "German says the SMALL number first: 21 is literally 'one-and-twenty'. English and Italian do the opposite. But Bengali does the same thing German does — একুশ starts with the 'one'. So if Bengali is your first language, this rule is not new to you, and you already have the instinct that English speakers have to fight for. Old English did it too, which is why 'four and twenty blackbirds' still survives in the nursery rhyme.",
        it: "Il tedesco dice prima il numero PICCOLO: 21 è letteralmente «uno-e-venti». Inglese e italiano fanno il contrario. Il bengalese però fa come il tedesco — একুশ inizia dall'«uno». Quindi chi ha il bengalese come prima lingua ha già l'istinto giusto.",
        bn: "জার্মান আগে ছোট সংখ্যাটা বলে: ২১ আক্ষরিক অর্থে 'এক-এবং-বিশ'। ইংরেজি ও ইতালীয় উল্টোটা করে। কিন্তু বাংলাও জার্মানের মতোই করে — 'একুশ' শুরু হয় 'এক' দিয়ে। তাই বাংলা যাঁদের প্রথম ভাষা, তাঁদের কাছে এই নিয়ম নতুন নয়; ইংরেজিভাষীদের যে অভ্যাসের সঙ্গে লড়তে হয়, সেটা আপনার আগে থেকেই আছে।",
      },
    },
    {
      kind: "table",
      title: {
        en: "The tens",
        it: "Le decine",
        bn: "দশকগুলো",
      },
      headers: ["#", "Deutsch", "Note"],
      rows: [
        ["20", "zwanzig", "not zweizig — learn this one"],
        ["30", "dreißig", "ß, not z — the only one"],
        ["40", "vierzig", "regular"],
        ["50", "fünfzig", "regular"],
        ["60", "sechzig", "sechs loses its s again"],
        ["70", "siebzig", "sieben loses its -en again"],
        ["80", "achtzig", "regular"],
        ["90", "neunzig", "regular"],
        ["100", "hundert", "no 'ein' needed"],
      ],
    },
    {
      kind: "tip",
      body: {
        en: "The recipe for every number from 21 to 99: small number + und + ten, written as ONE word with no spaces. 42 → zwei + und + vierzig → zweiundvierzig. 67 → sieben + und + sechzig → siebenundsechzig. One exception inside the recipe: 1 is ein, not eins — einundzwanzig, never einsundzwanzig.",
        it: "La ricetta per ogni numero da 21 a 99: numero piccolo + und + decina, scritti come UNA parola senza spazi. 42 → zweiundvierzig. 67 → siebenundsechzig. Un'eccezione dentro la ricetta: 1 è ein, non eins — einundzwanzig, mai einsundzwanzig.",
        bn: "২১ থেকে ৯৯ পর্যন্ত প্রতিটি সংখ্যার নিয়ম: ছোট সংখ্যা + und + দশক, সব মিলিয়ে একটাই শব্দ, কোনো ফাঁক নেই। ৪২ → zweiundvierzig। ৬৭ → siebenundsechzig। নিয়মের ভেতরে একটাই ব্যতিক্রম: ১ এখানে ein, eins নয় — einundzwanzig, কখনোই einsundzwanzig নয়।",
      },
    },
    {
      kind: "warn",
      body: {
        en: "This one costs real money, so it is worth taking seriously. When you hear 'sechsundvierzig Euro', the first sound is six but the price is forty-six. Beginners hear the six, reach for six euros, and get it wrong. Train yourself to wait for the END of the word before deciding what the number is.",
        it: "Questo costa soldi veri, quindi prendilo sul serio. Quando senti «sechsundvierzig Euro», il primo suono è sei ma il prezzo è quarantasei. I principianti sentono il sei e sbagliano. Abituati ad aspettare la FINE della parola prima di decidere qual è il numero.",
        bn: "এই ভুলটার দাম সত্যিকারের টাকায় দিতে হয়, তাই গুরুত্ব দিন। যখন শোনেন 'sechsundvierzig Euro', প্রথম ধ্বনিটা ছয় কিন্তু দাম ছেচল্লিশ। নতুনরা ছয় শুনে ছয় ইউরো বের করে ফেলে, আর ভুল করে। অভ্যাস করুন — শব্দের শেষ পর্যন্ত অপেক্ষা করে তারপর ঠিক করুন সংখ্যাটা কী।",
      },
    },
  ],

  quiz: [
    {
      id: "z1",
      ask: {
        en: "How do you say 21 in German?",
        it: "Come si dice 21 in tedesco?",
        bn: "জার্মানে ২১ কীভাবে বলবেন?",
      },
      options: ["zwanzigeins", "einundzwanzig", "einsundzwanzig"],
      answerIndex: 1,
      why: {
        en: "Small number first, joined with und: ein + und + zwanzig. Note it is ein, not eins — the s is dropped inside a bigger number.",
        it: "Prima il numero piccolo, unito con und: ein + und + zwanzig. Nota ein, non eins — la s cade dentro un numero più grande.",
        bn: "আগে ছোট সংখ্যা, und দিয়ে জোড়া: ein + und + zwanzig। খেয়াল করুন eins নয়, ein — বড় সংখ্যার ভেতরে s পড়ে যায়।",
      },
    },
    {
      id: "z2",
      ask: {
        en: "A price is 'siebenundachtzig Euro'. How much is it?",
        it: "Un prezzo è «siebenundachtzig Euro». Quanto costa?",
        bn: "একটি দাম বলা হলো 'siebenundachtzig Euro'। কত টাকা?",
      },
      german: "siebenundachtzig Euro",
      options: ["78 €", "87 €", "7,80 €"],
      answerIndex: 1,
      why: {
        en: "sieben (7) + und + achtzig (80) = 87. The seven comes first in the word but it is the smaller part. Always wait for the end of the word.",
        it: "sieben (7) + und + achtzig (80) = 87. Il sette viene prima nella parola ma è la parte piccola. Aspetta sempre la fine della parola.",
        bn: "sieben (৭) + und + achtzig (৮০) = ৮৭। শব্দে সাতটা আগে আসে, কিন্তু সেটাই ছোট অংশ। সবসময় শব্দের শেষ পর্যন্ত অপেক্ষা করুন।",
      },
    },
    {
      id: "z3",
      ask: {
        en: "Which number is spelled with ß?",
        it: "Quale numero si scrive con ß?",
        bn: "কোন সংখ্যাটি ß দিয়ে লেখা হয়?",
      },
      options: ["zwanzig (20)", "dreißig (30)", "vierzig (40)"],
      answerIndex: 1,
      why: {
        en: "dreißig is the only ten written with ß instead of z. Every other ten ends in -zig.",
        it: "dreißig è l'unica decina scritta con ß invece di z. Tutte le altre finiscono in -zig.",
        bn: "dreißig-ই একমাত্র দশক যা z-এর বদলে ß দিয়ে লেখা হয়। বাকি সব দশক শেষ হয় -zig দিয়ে।",
      },
    },
    {
      id: "z4",
      ask: {
        en: "Build the number 46.",
        it: "Costruisci il numero 46.",
        bn: "৪৬ সংখ্যাটি বানান।",
      },
      options: ["sechsundvierzig", "vierundsechzig", "sechzigvier"],
      answerIndex: 0,
      why: {
        en: "46 = sechs (6) + und + vierzig (40). Careful: vierundsechzig is vier (4) + sechzig (60) = 64 — the same two digits the other way round.",
        it: "46 = sechs (6) + und + vierzig (40). Attenzione: vierundsechzig è vier (4) + sechzig (60) = 64 — le stesse due cifre invertite.",
        bn: "৪৬ = sechs (৬) + und + vierzig (৪০)। সাবধান: vierundsechzig মানে vier (৪) + sechzig (৬০) = ৬৪ — একই দুটি অঙ্ক, উল্টো করে।",
      },
    },
  ],
};
