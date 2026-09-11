import type { A0Lesson } from "./types";

export const begruessung: A0Lesson = {
  slug: "begruessung",
  order: 1,
  title: {
    de: "Begrüßung — Hallo sagen",
    en: "Greetings — saying hello",
    it: "Saluti — dire ciao",
    bn: "সম্ভাষণ — হ্যালো বলা",
  },
  goals: [
    {
      en: "Greet someone at any time of day",
      it: "Salutare qualcuno a qualsiasi ora del giorno",
      bn: "দিনের যেকোনো সময় কাউকে অভিবাদন জানানো",
    },
    {
      en: "Ask how someone is, and answer",
      it: "Chiedere come sta qualcuno e rispondere",
      bn: "কেমন আছেন জিজ্ঞেস করা এবং উত্তর দেওয়া",
    },
    {
      en: "Know when to say du and when to say Sie",
      it: "Sapere quando dire du e quando dire Sie",
      bn: "কখন du আর কখন Sie বলতে হয় তা জানা",
    },
  ],

  blocks: [
    {
      kind: "text",
      body: {
        en: "German has a different greeting for different times of day. This sounds like extra work, but it is actually easier than English — you never have to guess. Look at the clock, and the clock tells you which word to use.",
        it: "Il tedesco ha un saluto diverso per ogni momento della giornata. Sembra lavoro in più, ma in realtà è più facile dell'inglese: non devi mai indovinare. Guardi l'orologio e l'orologio ti dice quale parola usare.",
        bn: "জার্মানে দিনের বিভিন্ন সময়ের জন্য আলাদা আলাদা সম্ভাষণ আছে। শুনতে বাড়তি ঝামেলা মনে হয়, কিন্তু আসলে এটা ইংরেজির চেয়ে সহজ — আপনাকে কখনো আন্দাজ করতে হয় না। ঘড়ির দিকে তাকান, ঘড়িই বলে দেবে কোন শব্দটা বলতে হবে।",
      },
    },
    {
      kind: "words",
      title: {
        en: "The greetings",
        it: "I saluti",
        bn: "সম্ভাষণগুলো",
      },
      words: [
        {
          de: "Hallo",
          sayIt: "HA-lo",
          meaning: {
            en: "Hello (any time, informal, always safe)",
            it: "Ciao (a qualsiasi ora, informale, sempre sicuro)",
            bn: "হ্যালো (যেকোনো সময়, ঘরোয়া, সবসময় নিরাপদ)",
          },
        },
        {
          de: "Guten Morgen",
          sayIt: "GOO-ten MOR-gen",
          meaning: {
            en: "Good morning (until about 11:00)",
            it: "Buongiorno (fino alle 11 circa)",
            bn: "সুপ্রভাত (আনুমানিক ১১টা পর্যন্ত)",
          },
        },
        {
          de: "Guten Tag",
          sayIt: "GOO-ten TAHK",
          meaning: {
            en: "Good day (about 11:00 to 18:00) — the polite everyday greeting",
            it: "Buon giorno (dalle 11 alle 18 circa) — il saluto formale di tutti i giorni",
            bn: "শুভ দিন (প্রায় ১১টা থেকে ১৮টা) — প্রতিদিনের ভদ্র সম্ভাষণ",
          },
        },
        {
          de: "Guten Abend",
          sayIt: "GOO-ten AH-bent",
          meaning: {
            en: "Good evening (from about 18:00)",
            it: "Buonasera (dalle 18 circa)",
            bn: "শুভ সন্ধ্যা (প্রায় ১৮টা থেকে)",
          },
        },
        {
          de: "Gute Nacht",
          sayIt: "GOO-te NAHKHT",
          meaning: {
            en: "Good night — only when someone is going to sleep, never as a hello",
            it: "Buonanotte — solo quando qualcuno va a dormire, mai come saluto d'arrivo",
            bn: "শুভ রাত্রি — শুধু কেউ ঘুমাতে গেলে, কখনোই দেখা হওয়ার সময় নয়",
          },
        },
        {
          de: "Tschüss",
          sayIt: "CHUESS",
          meaning: {
            en: "Bye (informal)",
            it: "Ciao (in partenza, informale)",
            bn: "বিদায় (ঘরোয়া)",
          },
        },
        {
          de: "Auf Wiedersehen",
          sayIt: "owf VEE-der-zay-en",
          meaning: {
            en: "Goodbye (polite)",
            it: "Arrivederci (formale)",
            bn: "বিদায় (ভদ্র)",
          },
        },
      ],
    },
    {
      kind: "warn",
      body: {
        en: "Gute Nacht is not a greeting. It means the day is over and you are going to bed. If you say it when you arrive somewhere in the evening, people will look confused. Use Guten Abend to arrive, Gute Nacht to leave for bed.",
        it: "Gute Nacht non è un saluto d'arrivo. Vuol dire che la giornata è finita e vai a dormire. Se lo dici arrivando la sera, la gente ti guarderà perplessa. Usa Guten Abend per arrivare, Gute Nacht per andare a letto.",
        bn: "Gute Nacht দেখা হওয়ার সম্ভাষণ নয়। এর মানে দিন শেষ, আপনি ঘুমাতে যাচ্ছেন। সন্ধ্যায় কোথাও পৌঁছে এটা বললে লোকে অবাক হয়ে তাকাবে। পৌঁছানোর সময় Guten Abend, ঘুমাতে যাওয়ার সময় Gute Nacht।",
      },
    },

    {
      kind: "text",
      body: {
        en: "Now the one thing that trips up English speakers: German has TWO words for 'you'.",
        it: "Ora la cosa che fa inciampare chi parla inglese: il tedesco ha DUE parole per «tu».",
        bn: "এবার যেটা ইংরেজিভাষীদের বিভ্রান্ত করে: জার্মানে 'তুমি/আপনি' বোঝাতে দুটি আলাদা শব্দ আছে।",
      },
    },
    {
      kind: "compare",
      german: "Wie geht es dir?  /  Wie geht es Ihnen?",
      english: "How are you?  (English has only one form)",
      italian: "Come stai?  /  Come sta?",
      bengali: "তুমি কেমন আছো?  /  আপনি কেমন আছেন?",
      why: {
        en: "You already know this idea. Italian has tu and Lei; Bengali has তুমি and আপনি. German works the same way: du for friends, family and children — Sie for strangers, officials, older people and at work. English is the odd one out here, not German. If you can feel the difference between তুমি and আপনি, you already understand du and Sie.",
        it: "Questa idea la conosci già. L'italiano ha tu e Lei; il bengalese ha তুমি e আপনি. Il tedesco funziona allo stesso modo: du per amici, familiari e bambini — Sie per sconosciuti, uffici, persone più anziane e al lavoro. Qui l'eccezione è l'inglese, non il tedesco.",
        bn: "এই ধারণাটা আপনি আগে থেকেই জানেন। বাংলায় আছে তুমি আর আপনি; ইতালীয় ভাষায় tu আর Lei। জার্মানও ঠিক একইভাবে কাজ করে: বন্ধু, পরিবার ও শিশুদের জন্য du — অপরিচিত, অফিস, বয়স্ক মানুষ ও কর্মক্ষেত্রে Sie। এখানে ব্যতিক্রম ইংরেজি, জার্মান নয়। তুমি আর আপনির পার্থক্য বুঝলে du আর Sie-ও বোঝা হয়ে গেছে।",
      },
    },
    {
      kind: "tip",
      body: {
        en: "When you are not sure, use Sie. Being too polite is never a problem in Germany. Being too casual with a stranger can be. Note that Sie is always written with a capital S — that capital letter is how you can tell it apart from sie (she / they).",
        it: "Se non sei sicuro, usa Sie. Essere troppo formali non è mai un problema in Germania; essere troppo confidenziali con uno sconosciuto può esserlo. Nota che Sie si scrive sempre con la S maiuscola — è così che lo distingui da sie (lei / loro).",
        bn: "নিশ্চিত না হলে Sie ব্যবহার করুন। জার্মানিতে বেশি ভদ্র হওয়া কখনো সমস্যা নয়; অপরিচিত কারো সঙ্গে বেশি ঘরোয়া হওয়া সমস্যা হতে পারে। খেয়াল রাখুন, Sie সবসময় বড় হাতের S দিয়ে লেখা হয় — এই বড় অক্ষরটাই sie (সে / তারা) থেকে একে আলাদা করে।",
      },
    },
    {
      kind: "table",
      title: {
        en: "Asking how someone is",
        it: "Chiedere come sta qualcuno",
        bn: "কেমন আছেন জিজ্ঞেস করা",
      },
      headers: ["Deutsch", "English", "Italiano", "বাংলা"],
      rows: [
        [
          "Wie geht's?",
          "How's it going? (informal)",
          "Come va? (informale)",
          "কেমন চলছে? (ঘরোয়া)",
        ],
        [
          "Wie geht es Ihnen?",
          "How are you? (polite)",
          "Come sta? (formale)",
          "আপনি কেমন আছেন? (ভদ্র)",
        ],
        ["Danke, gut.", "Fine, thanks.", "Bene, grazie.", "ধন্যবাদ, ভালো।"],
        ["Sehr gut!", "Very good!", "Molto bene!", "খুব ভালো!"],
        ["Es geht.", "So-so.", "Così così.", "মোটামুটি।"],
        [
          "Und dir? / Und Ihnen?",
          "And you? (informal / polite)",
          "E tu? / E Lei?",
          "আর তুমি? / আর আপনি?",
        ],
      ],
      note: {
        en: "Wie geht's? is just a short spoken form of Wie geht es dir? — Germans say the short one constantly.",
        it: "Wie geht's? è solo la forma parlata breve di Wie geht es dir? — i tedeschi usano continuamente quella corta.",
        bn: "Wie geht's? আসলে Wie geht es dir?-এর সংক্ষিপ্ত মুখের রূপ — জার্মানরা সারাক্ষণ ছোটটাই বলে।",
      },
    },
  ],

  quiz: [
    {
      id: "b1",
      ask: {
        en: "It is 9 in the morning. You walk into a bakery. What do you say?",
        it: "Sono le 9 del mattino. Entri in una panetteria. Cosa dici?",
        bn: "সকাল ৯টা। আপনি একটা বেকারিতে ঢুকলেন। কী বলবেন?",
      },
      options: ["Guten Abend", "Guten Morgen", "Gute Nacht"],
      answerIndex: 1,
      why: {
        en: "Before about 11:00 it is Guten Morgen. Guten Abend is for the evening, and Gute Nacht is only for going to bed.",
        it: "Prima delle 11 circa si dice Guten Morgen. Guten Abend è per la sera e Gute Nacht solo per andare a dormire.",
        bn: "প্রায় ১১টার আগে বলা হয় Guten Morgen। Guten Abend সন্ধ্যার জন্য, আর Gute Nacht শুধু ঘুমাতে যাওয়ার সময়।",
      },
    },
    {
      id: "b2",
      ask: {
        en: "You are speaking to a police officer you have never met. Which form do you use?",
        it: "Parli con un poliziotto che non hai mai visto. Quale forma usi?",
        bn: "আপনি এমন একজন পুলিশ অফিসারের সঙ্গে কথা বলছেন যাকে আগে কখনো দেখেননি। কোন রূপটি ব্যবহার করবেন?",
      },
      options: ["du", "Sie"],
      answerIndex: 1,
      why: {
        en: "A stranger, and someone in an official role — that is Sie. Same instinct as আপনি in Bengali or Lei in Italian.",
        it: "Uno sconosciuto, per di più in veste ufficiale: si usa Sie. Stesso istinto di Lei in italiano o আপনি in bengalese.",
        bn: "অপরিচিত, তার উপর সরকারি দায়িত্বে — এখানে Sie। বাংলায় আপনি বা ইতালীয় Lei-এর মতোই।",
      },
    },
    {
      id: "b3",
      ask: {
        en: "Someone asks 'Wie geht es Ihnen?'. Which reply fits?",
        it: "Qualcuno chiede «Wie geht es Ihnen?». Quale risposta va bene?",
        bn: "কেউ জিজ্ঞেস করল 'Wie geht es Ihnen?'। কোন উত্তরটি মানানসই?",
      },
      german: "Wie geht es Ihnen?",
      options: ["Danke, gut. Und Ihnen?", "Gute Nacht.", "Auf Wiedersehen."],
      answerIndex: 0,
      why: {
        en: "They asked politely with Ihnen, so you answer and hand the question back the same polite way: Und Ihnen? The other two are goodbyes, not answers.",
        it: "Ti ha chiesto in modo formale con Ihnen, quindi rispondi e restituisci la domanda con la stessa forma: Und Ihnen? Le altre due sono saluti d'addio, non risposte.",
        bn: "সে Ihnen দিয়ে ভদ্রভাবে জিজ্ঞেস করেছে, তাই আপনি উত্তর দিয়ে একই ভদ্র রূপে প্রশ্নটা ফিরিয়ে দিন: Und Ihnen? বাকি দুটো বিদায়ের কথা, উত্তর নয়।",
      },
    },
    {
      id: "b4",
      ask: {
        en: "Which word is written with a capital letter when it means the polite 'you'?",
        it: "Quale parola si scrive con la maiuscola quando significa il «Lei» formale?",
        bn: "ভদ্র 'আপনি' বোঝাতে কোন শব্দটি বড় হাতের অক্ষরে লেখা হয়?",
      },
      options: ["sie", "Sie", "Both are the same"],
      answerIndex: 1,
      why: {
        en: "Capital Sie = polite 'you'. Small sie = 'she' or 'they'. In German the capital letter is not decoration — it changes the meaning.",
        it: "Sie maiuscolo = «Lei» formale. sie minuscolo = «lei» o «loro». In tedesco la maiuscola non è decorazione: cambia il significato.",
        bn: "বড় হাতের Sie = ভদ্র 'আপনি'। ছোট হাতের sie = 'সে' বা 'তারা'। জার্মানে বড় অক্ষর সাজসজ্জা নয় — এটা অর্থ বদলে দেয়।",
      },
    },
  ],
};
