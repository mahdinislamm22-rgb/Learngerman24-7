import type { GrammarLesson } from "@/lib/types";
import { article, gap, mc, truefalse } from "./types";

/**
 * der / die / das — the article master system.
 *
 * This is the foundation lesson. Every case ending in German hangs off the
 * gender of the noun, so a wrong gender quietly turns into a wrong
 * Akkusativ, a wrong Dativ and a wrong adjective ending later on.
 *
 * The ending rules below are the reliable ones only. Where a rule has real
 * exceptions they are named in `counterExample` — a shortcut that hides its
 * exceptions teaches confidence in the wrong place.
 */
export const artikel: GrammarLesson = {
  slug: "artikel",
  category: "wortarten",
  level: "b1",
  telcWeight: 3,

  title: {
    de: "der, die, das — das Artikelsystem",
    en: "der, die, das — the article system",
    it: "der, die, das — il sistema degli articoli",
    bn: "der, die, das — আর্টিকেল ব্যবস্থা",
  },

  telcRelevance: {
    de: "Artikel entscheiden über fast jede Endung im Deutschen. In den Sprachbausteinen kommen sie direkt vor, im Schreiben kosten falsche Artikel Punkte bei »Grammatik«.",
    en: "Articles decide nearly every ending in German. They appear directly in Sprachbausteine, and in the writing task a wrong article costs you points under 'Grammatik'.",
    it: "Gli articoli determinano quasi ogni desinenza in tedesco. Compaiono direttamente nei Sprachbausteine e nella prova scritta un articolo sbagliato costa punti in »Grammatik«.",
    bn: "জার্মান ভাষায় প্রায় প্রতিটি শব্দরূপ আর্টিকেলের উপর নির্ভর করে। Sprachbausteine অংশে এগুলো সরাসরি আসে, আর লেখার অংশে ভুল আর্টিকেল »Grammatik« বিভাগে নম্বর কমায়।",
  },

  whatIsIt: {
    de: "Jedes deutsche Nomen hat ein Geschlecht: der (maskulin), die (feminin) oder das (neutrum). Im Plural ist es immer die. Das Geschlecht gehört zum Wort, nicht zur Bedeutung.",
    en: "Every German noun has a gender: der (masculine), die (feminine) or das (neuter). In the plural it is always die. The gender belongs to the word itself, not to its meaning.",
    it: "Ogni sostantivo tedesco ha un genere: der (maschile), die (femminile) o das (neutro). Al plurale è sempre die. Il genere appartiene alla parola, non al suo significato.",
    bn: "প্রতিটি জার্মান বিশেষ্যের একটি লিঙ্গ আছে: der (পুংলিঙ্গ), die (স্ত্রীলিঙ্গ) বা das (ক্লীবলিঙ্গ)। বহুবচনে সবসময় die। লিঙ্গটি শব্দের নিজের বৈশিষ্ট্য, তার অর্থের সাথে সম্পর্ক নেই।",
  },

  whyNeeded: {
    de: "Der Artikel ändert sich mit dem Kasus: der Mann → den Mann → dem Mann. Wenn das Geschlecht falsch ist, ist auch der Kasus falsch — und danach die Adjektivendung. Ein Fehler wird zu drei.",
    en: "The article changes with the case: der Mann → den Mann → dem Mann. If the gender is wrong, the case is wrong too — and then the adjective ending. One mistake becomes three.",
    it: "L'articolo cambia con il caso: der Mann → den Mann → dem Mann. Se il genere è sbagliato, lo è anche il caso — e poi la desinenza dell'aggettivo. Un errore ne diventa tre.",
    bn: "কারক অনুযায়ী আর্টিকেল বদলায়: der Mann → den Mann → dem Mann। লিঙ্গ ভুল হলে কারকও ভুল হয়, তারপর বিশেষণের শেষাংশও ভুল হয়। একটি ভুল থেকে তিনটি ভুল তৈরি হয়।",
  },

  simple: {
    de: "Lerne ein Nomen nie allein. Lerne immer »die Wohnung«, nie »Wohnung«. Der Artikel ist Teil des Wortes — so wie die Aussprache.",
    en: "Never learn a noun on its own. Always learn 'die Wohnung', never 'Wohnung'. The article is part of the word, in the same way its pronunciation is.",
    it: "Non imparare mai un sostantivo da solo. Impara sempre »die Wohnung«, mai »Wohnung«. L'articolo fa parte della parola, come la pronuncia.",
    bn: "কোনো বিশেষ্য কখনও একা মুখস্থ করবেন না। সবসময় »die Wohnung« শিখবেন, শুধু »Wohnung« নয়। উচ্চারণের মতোই আর্টিকেলটাও শব্দের অংশ।",
  },

  pattern: {
    de: "Artikel = Geschlecht × Kasus. Zwei Fragen, immer in dieser Reihenfolge: (1) Welches Geschlecht hat das Nomen? (2) In welchem Kasus steht es hier?",
    en: "Article = gender × case. Two questions, always in this order: (1) What gender is the noun? (2) What case is it in here?",
    it: "Articolo = genere × caso. Due domande, sempre in quest'ordine: (1) Che genere ha il sostantivo? (2) In quale caso si trova qui?",
    bn: "আর্টিকেল = লিঙ্গ × কারক। সবসময় এই ক্রমে দুটি প্রশ্ন: (১) বিশেষ্যটির লিঙ্গ কী? (২) এখানে সেটি কোন কারকে আছে?",
  },

  compare: [
    {
      german: "die Sonne, der Mond",
      italian: "il sole, la luna",
      english: "the sun, the moon",
      why: {
        de: "Im Italienischen ist die Sonne maskulin, im Deutschen feminin — genau umgekehrt. Das Geschlecht lässt sich nie aus der Muttersprache übernehmen.",
        en: "In Italian the sun is masculine and the moon feminine; in German it is exactly the other way round. Gender can never be carried over from your own language.",
        it: "In italiano il sole è maschile e la luna femminile; in tedesco è esattamente il contrario. Il genere non si può mai trasferire dalla propria lingua.",
        bn: "ইতালীয় ভাষায় সূর্য পুংলিঙ্গ ও চাঁদ স্ত্রীলিঙ্গ; জার্মানে ঠিক উল্টো। নিজের ভাষা থেকে লিঙ্গ অনুমান করা কখনওই কাজ করে না।",
      },
    },
    {
      german: "Ich lese das Buch.",
      bengali: "আমি বইটা পড়ি।",
      english: "I am reading the book.",
      why: {
        de: "Bengalisch hängt -টা an das Nomen, um »bestimmt« zu markieren. Deutsch benutzt dafür ein eigenes Wort, das gleichzeitig Geschlecht und Kasus zeigt. Deshalb gibt es nicht ein »the«, sondern sechs Formen.",
        en: "Bengali attaches -টা to the noun to mark 'definite'. German uses a separate word which shows gender and case at the same time. That is why there is no single 'the' but six forms.",
        it: "Il bengalese aggiunge -টা al sostantivo per indicare »determinato«. Il tedesco usa una parola a sé che indica insieme genere e caso. Per questo non esiste un solo »the« ma sei forme.",
        bn: "বাংলায় নির্দিষ্টতা বোঝাতে বিশেষ্যের সাথে -টা যোগ হয়। জার্মানে এর জন্য আলাদা একটি শব্দ থাকে, যেটি একই সঙ্গে লিঙ্গ ও কারক দেখায়। তাই ইংরেজির মতো একটিমাত্র »the« নেই, বরং ছয়টি রূপ আছে।",
      },
    },
    {
      german: "Das Mädchen ist neu. Es kommt aus Polen.",
      english: "The girl is new. She comes from Poland.",
      italian: "La ragazza è nuova. Viene dalla Polonia.",
      why: {
        de: "»Mädchen« endet auf -chen und ist deshalb grammatisch neutrum — obwohl es ein Mädchen ist. Das Pronomen folgt der Grammatik, nicht der Person: es, nicht sie.",
        en: "'Mädchen' ends in -chen and is therefore grammatically neuter, even though it refers to a girl. The pronoun follows the grammar, not the person: es, not sie.",
        it: "»Mädchen« finisce in -chen ed è quindi grammaticalmente neutro, benché indichi una ragazza. Il pronome segue la grammatica, non la persona: es, non sie.",
        bn: "»Mädchen« শব্দটি -chen দিয়ে শেষ হয়, তাই ব্যাকরণগতভাবে এটি ক্লীবলিঙ্গ — যদিও এটি একজন মেয়েকে বোঝায়। সর্বনাম ব্যাকরণ মেনে চলে, ব্যক্তি মেনে নয়: sie নয়, es।",
      },
    },
  ],

  tables: [
    {
      caption: {
        de: "Bestimmter Artikel — der, die, das",
        en: "Definite article — der, die, das",
        it: "Articolo determinativo — der, die, das",
        bn: "নির্দিষ্ট আর্টিকেল — der, die, das",
      },
      headers: ["Kasus", "maskulin", "feminin", "neutrum", "Plural"],
      rows: [
        ["Nominativ", "der", "die", "das", "die"],
        ["Akkusativ", "den", "die", "das", "die"],
        ["Dativ", "dem", "der", "dem", "den"],
        ["Genitiv", "des", "der", "des", "der"],
      ],
      note: {
        de: "Lies die Tabelle senkrecht, nicht waagerecht. Auffällig: nur die maskuline Spalte ändert sich vom Nominativ zum Akkusativ. Alles andere bleibt gleich.",
        en: "Read the table down the columns, not across. Notice: only the masculine column changes between Nominativ and Akkusativ. Everything else stays the same.",
        it: "Leggi la tabella per colonne, non per righe. Nota: solo la colonna maschile cambia tra Nominativ e Akkusativ. Tutto il resto resta uguale.",
        bn: "টেবিলটি সারি ধরে নয়, কলাম ধরে পড়ুন। লক্ষ্য করুন: Nominativ থেকে Akkusativ-এ কেবল পুংলিঙ্গ কলামটাই বদলায়। বাকি সব একই থাকে।",
      },
    },
    {
      caption: {
        de: "Unbestimmter Artikel und kein-",
        en: "Indefinite article and kein-",
        it: "Articolo indeterminativo e kein-",
        bn: "অনির্দিষ্ট আর্টিকেল ও kein-",
      },
      headers: ["Kasus", "maskulin", "feminin", "neutrum", "Plural (kein-)"],
      rows: [
        ["Nominativ", "ein", "eine", "ein", "keine"],
        ["Akkusativ", "einen", "eine", "ein", "keine"],
        ["Dativ", "einem", "einer", "einem", "keinen"],
        ["Genitiv", "eines", "einer", "eines", "keiner"],
      ],
      note: {
        de: "kein-, mein-, dein-, sein-, ihr-, unser- haben genau dieselben Endungen wie ein-. Wer eine Zeile kann, kann sie alle.",
        en: "kein-, mein-, dein-, sein-, ihr-, unser- take exactly the same endings as ein-. Learn one row and you have them all.",
        it: "kein-, mein-, dein-, sein-, ihr-, unser- prendono esattamente le stesse desinenze di ein-. Impari una riga e le hai tutte.",
        bn: "kein-, mein-, dein-, sein-, ihr-, unser- — এদের শেষাংশ ein- এর সাথে হুবহু এক। একটি সারি শিখলেই সবগুলো শেখা হয়ে যায়।",
      },
    },
    {
      caption: {
        de: "Endungen, die das Geschlecht verraten",
        en: "Endings that give the gender away",
        it: "Desinenze che rivelano il genere",
        bn: "যেসব শেষাংশ লিঙ্গ ধরিয়ে দেয়",
      },
      headers: ["Endung", "Artikel", "Beispiel", "Sicherheit"],
      rows: [
        ["-ung", "die", "die Wohnung, die Zeitung", "sehr hoch"],
        ["-heit / -keit", "die", "die Freiheit, die Möglichkeit", "ohne Ausnahme"],
        ["-schaft", "die", "die Mannschaft, die Freundschaft", "ohne Ausnahme"],
        ["-ion / -tät / -ur / -ik", "die", "die Information, die Universität", "ohne Ausnahme"],
        ["-chen / -lein", "das", "das Mädchen, das Brötchen", "ohne Ausnahme"],
        ["-ling", "der", "der Frühling, der Lehrling", "ohne Ausnahme"],
        ["-ismus", "der", "der Tourismus", "ohne Ausnahme"],
        ["-e", "die", "die Lampe, die Straße", "ca. 90 %"],
        ["-er (Person)", "der", "der Lehrer, der Arbeiter", "hoch"],
        ["-um", "das", "das Museum, das Zentrum", "hoch"],
      ],
      note: {
        de: "»Sicherheit« ist ehrlich gemeint: -e ist nur eine Tendenz (der Name, der Junge, das Auge), -er gilt für Personen und Geräte, aber nicht für die Mutter oder das Fenster.",
        en: "The 'certainty' column is meant honestly: -e is only a tendency (der Name, der Junge, das Auge), and -er holds for people and devices but not for die Mutter or das Fenster.",
        it: "La colonna »certezza« è sincera: -e è solo una tendenza (der Name, der Junge, das Auge) e -er vale per persone e apparecchi, ma non per die Mutter o das Fenster.",
        bn: "»Sicherheit« (নিশ্চয়তা) কলামটি সৎভাবে লেখা: -e কেবল একটি প্রবণতা (der Name, der Junge, das Auge), আর -er ব্যক্তি ও যন্ত্রের ক্ষেত্রে খাটে, কিন্তু die Mutter বা das Fenster-এ নয়।",
      },
    },
  ],

  memoryTricks: [
    {
      isShortcut: true,
      rule: "Nur maskulin ändert sich im Akkusativ.",
      meaning: {
        de: "Vom Nominativ zum Akkusativ wird nur der zu den. die bleibt die, das bleibt das, Plural die bleibt die.",
        en: "Going from Nominativ to Akkusativ, only der becomes den. die stays die, das stays das, plural die stays die.",
        it: "Dal Nominativ all'Akkusativ, solo der diventa den. die resta die, das resta das, il plurale die resta die.",
        bn: "Nominativ থেকে Akkusativ-এ যেতে কেবল der হয়ে যায় den। die থাকে die, das থাকে das, বহুবচনের die-ও থাকে die।",
      },
      example: "Der Mann kommt. → Ich sehe den Mann.",
      counterExample:
        "Im Dativ gilt das nicht: dort ändert sich alles — dem Mann, der Frau, dem Kind, den Kindern.",
      memoryTrick: {
        de: "»Der verliert seinen Kopf im Akkusativ«: der → den. Nur er.",
        en: "'Only der loses its head in the Akkusativ': der → den. Nobody else changes.",
        it: "»Solo der perde la testa all'Akkusativ«: der → den. Nessun altro cambia.",
        bn: "»Akkusativ-এ কেবল der-ই মাথা হারায়«: der → den। আর কেউ বদলায় না।",
      },
      examTip: {
        de: "In den Sprachbausteinen ist das die schnellste Prüfung: Steht dort kein maskulines Nomen, ist Nominativ und Akkusativ oft gleich — such den Fehler woanders.",
        en: "In Sprachbausteine this is the fastest check: if there is no masculine noun, Nominativ and Akkusativ often look identical — so look for the mistake elsewhere.",
        it: "Nei Sprachbausteine è il controllo più rapido: se non c'è un sostantivo maschile, Nominativ e Akkusativ spesso coincidono — cerca l'errore altrove.",
        bn: "Sprachbausteine-এ এটাই সবচেয়ে দ্রুত পরীক্ষা: যদি পুংলিঙ্গ বিশেষ্য না থাকে, তবে Nominativ আর Akkusativ প্রায়ই একরকম দেখায় — তাই ভুলটা অন্য কোথাও খুঁজুন।",
      },
    },
    {
      isShortcut: true,
      rule: "-ung, -heit, -keit, -schaft, -ion, -tät → immer die.",
      meaning: {
        de: "Diese Nachsilben machen ein Nomen feminin. Das gilt für tausende Wörter und ist im Alltag die nützlichste Artikelregel überhaupt.",
        en: "These suffixes make a noun feminine. It holds for thousands of words and is the single most useful article rule in everyday German.",
        it: "Questi suffissi rendono femminile il sostantivo. Vale per migliaia di parole ed è la regola sull'articolo più utile in assoluto.",
        bn: "এই প্রত্যয়গুলো বিশেষ্যকে স্ত্রীলিঙ্গ করে দেয়। হাজার হাজার শব্দে এটি খাটে এবং দৈনন্দিন জার্মানে এটাই আর্টিকেলের সবচেয়ে কাজের নিয়ম।",
      },
      example: "die Wohnung, die Gesundheit, die Möglichkeit, die Freundschaft, die Situation",
      counterExample:
        "Nur wenn -ung wirklich die Nachsilbe ist. »der Sprung« und »der Ursprung« enden zufällig auf diese Buchstaben und sind maskulin.",
      memoryTrick: {
        de: "Merksatz: »UNG HEIT KEIT SCHAFT ION TÄT — die Damen kommen immer spät.« Sechs Endungen, ein Artikel.",
        en: "Chant them as one word: UNG-HEIT-KEIT-SCHAFT-ION-TÄT. Six endings, one article: die.",
        it: "Ripetili come una parola sola: UNG-HEIT-KEIT-SCHAFT-ION-TÄT. Sei desinenze, un articolo: die.",
        bn: "একটানা একটি শব্দের মতো আওড়ান: UNG-HEIT-KEIT-SCHAFT-ION-TÄT। ছয়টি শেষাংশ, একটাই আর্টিকেল: die।",
      },
      examTip: {
        de: "Viele Prüfungswörter sind genau so gebaut: die Anmeldung, die Bestätigung, die Verspätung, die Einladung. Wenn du im Brief unsicher bist, prüfe zuerst die Endung.",
        en: "A lot of exam vocabulary is built exactly this way: die Anmeldung, die Bestätigung, die Verspätung, die Einladung. When you are unsure in a letter, check the ending first.",
        it: "Molto lessico d'esame è costruito così: die Anmeldung, die Bestätigung, die Verspätung, die Einladung. Se sei incerto in una lettera, controlla prima la desinenza.",
        bn: "পরীক্ষার অনেক শব্দ ঠিক এভাবেই তৈরি: die Anmeldung, die Bestätigung, die Verspätung, die Einladung। চিঠি লেখার সময় সন্দেহ হলে আগে শেষাংশটা দেখুন।",
      },
    },
    {
      isShortcut: true,
      rule: "-chen und -lein → immer das.",
      meaning: {
        de: "Diese Verkleinerungsformen sind ausnahmslos neutrum — unabhängig davon, worum es geht.",
        en: "These diminutive forms are neuter without exception, no matter what they refer to.",
        it: "Questi diminutivi sono neutri senza eccezioni, qualunque cosa indichino.",
        bn: "এই ক্ষুদ্রার্থক রূপগুলো ব্যতিক্রমহীনভাবে ক্লীবলিঙ্গ — যা-ই বোঝাক না কেন।",
      },
      example: "das Brötchen, das Mädchen, das Häuschen, das Fräulein",
      counterExample:
        "Die Regel sagt nur den Artikel, nicht das Pronomen-Gefühl: »Das Mädchen … es«, obwohl eine Person gemeint ist. Und Wörter wie »der Kuchen« enden nicht auf die Nachsilbe -chen.",
      memoryTrick: {
        de: "Klein gemacht = neutral gemacht. Sobald ein Wort schrumpft, verliert es sein Geschlecht.",
        en: "Made small = made neutral. As soon as a word shrinks, it loses its gender.",
        it: "Reso piccolo = reso neutro. Appena una parola si rimpicciolisce, perde il suo genere.",
        bn: "ছোট করা মানেই লিঙ্গহীন করা। শব্দ ছোট হয়ে গেলেই তার লিঙ্গ হারিয়ে যায়।",
      },
      examTip: {
        de: "Im Hörverstehen hilft das doppelt: Du hörst -chen und weißt sofort das, ohne das Wort zu kennen.",
        en: "In the listening paper this helps twice over: you hear -chen and instantly know das, without knowing the word at all.",
        it: "Nella comprensione orale aiuta doppiamente: senti -chen e sai subito das, senza conoscere la parola.",
        bn: "শোনার পরীক্ষায় এটি দ্বিগুণ কাজে দেয়: -chen শুনলেই সঙ্গে সঙ্গে das বুঝে যাবেন, শব্দটা না জানলেও।",
      },
    },
  ],

  cheatCodes: [
    {
      isShortcut: true,
      rule: "Tage, Monate, Jahreszeiten, Wetter → der.",
      meaning: {
        de: "Alles, was mit Zeit im Kalender oder mit Wetter zu tun hat, ist maskulin.",
        en: "Anything to do with calendar time or the weather is masculine.",
        it: "Tutto ciò che riguarda il tempo del calendario o il meteo è maschile.",
        bn: "ক্যালেন্ডারের সময় বা আবহাওয়া সংক্রান্ত সবকিছুই পুংলিঙ্গ।",
      },
      example: "der Montag, der Januar, der Sommer, der Regen, der Wind, der Schnee",
      counterExample:
        "»das Gewitter« (Gewitter, thunderstorm) und »die Sonne« brechen die Wetterregel. Die Nacht ist feminin, der Tag maskulin.",
      memoryTrick: {
        de: "Der Kalender ist ein Mann: der Montag, der Mai, der Sommer.",
        en: "The calendar is a man: der Montag, der Mai, der Sommer.",
        it: "Il calendario è un uomo: der Montag, der Mai, der Sommer.",
        bn: "ক্যালেন্ডার একজন পুরুষ: der Montag, der Mai, der Sommer।",
      },
      examTip: {
        de: "Im Brief schreibst du oft »am Montag«, »im Sommer« — beides Dativ von der. Deshalb am (an dem) und im (in dem), nie »an der Montag«.",
        en: "In letters you constantly write 'am Montag', 'im Sommer' — both the Dativ of der. That is why it is am (an dem) and im (in dem), never 'an der Montag'.",
        it: "Nelle lettere scrivi spesso »am Montag«, »im Sommer« — entrambi Dativ di der. Per questo am (an dem) e im (in dem), mai »an der Montag«.",
        bn: "চিঠিতে প্রায়ই লিখবেন »am Montag«, »im Sommer« — দুটোই der-এর Dativ। তাই am (an dem) ও im (in dem) হয়, কখনও »an der Montag« নয়।",
      },
    },
    {
      isShortcut: true,
      rule: "Verb als Nomen → immer das.",
      meaning: {
        de: "Jeder Infinitiv kann groß geschrieben zum Nomen werden, und dann ist er neutrum.",
        en: "Any infinitive can be capitalised and used as a noun, and it is then neuter.",
        it: "Qualsiasi infinito può essere scritto maiuscolo e usato come sostantivo, e allora è neutro.",
        bn: "যেকোনো infinitiv বড় হাতের অক্ষরে লিখে বিশেষ্য বানানো যায়, আর তখন সেটি ক্লীবলিঙ্গ হয়।",
      },
      example: "das Essen, das Lernen, das Schwimmen, das Rauchen ist verboten",
      counterExample:
        "Nicht jedes Nomen, das nach einem Verb aussieht, ist so gebildet: »die Arbeit« kommt von arbeiten, ist aber ein eigenes Wort und feminin.",
      memoryTrick: {
        de: "Eine Tätigkeit ist kein Mann und keine Frau — sie ist einfach eine Sache: das.",
        en: "An activity is neither a man nor a woman — it is just a thing: das.",
        it: "Un'attività non è né uomo né donna — è semplicemente una cosa: das.",
        bn: "কোনো কাজ পুরুষও নয়, নারীও নয় — সেটি কেবল একটি বস্তু: das।",
      },
      examTip: {
        de: "Sehr nützlich im Schreiben: »Das Warten war lang«, »beim Kochen«, »zum Lernen«. Damit klingt ein B1-Text sofort erwachsener.",
        en: "Very useful in the writing task: 'Das Warten war lang', 'beim Kochen', 'zum Lernen'. It makes a B1 text sound noticeably more grown-up.",
        it: "Molto utile nella prova scritta: »Das Warten war lang«, »beim Kochen«, »zum Lernen«. Fa suonare subito più maturo un testo B1.",
        bn: "লেখার অংশে খুব কাজের: »Das Warten war lang«, »beim Kochen«, »zum Lernen«। এতে B1 লেখা সঙ্গে সঙ্গে অনেক পরিণত শোনায়।",
      },
    },
    {
      isShortcut: true,
      rule: "Das letzte Wort bestimmt den Artikel.",
      meaning: {
        de: "Bei zusammengesetzten Nomen zählt nur der letzte Teil. Alles davor beschreibt nur.",
        en: "In a compound noun only the last part counts. Everything before it is just description.",
        it: "In un sostantivo composto conta solo l'ultima parte. Tutto ciò che precede è solo descrizione.",
        bn: "যৌগিক বিশেষ্যে কেবল শেষ অংশটাই গোনা হয়। তার আগের সবকিছু শুধু বর্ণনা।",
      },
      example: "die Tür + der Griff = der Türgriff · der Haus + die Tür = die Haustür",
      counterExample:
        "Es sagt dir nichts über das Geschlecht des letzten Wortes — das musst du trotzdem wissen. Bei »das Hausaufgabenheft« hilft die Regel nur, wenn du »das Heft« kennst.",
      memoryTrick: {
        de: "Deutsche Komposita liest man von hinten: Türgriff ist ein Griff, kein Tür.",
        en: "Read German compounds from the back: a Türgriff is a Griff (handle), not a Tür (door).",
        it: "Leggi i composti tedeschi dalla fine: un Türgriff è un Griff (maniglia), non una Tür (porta).",
        bn: "জার্মান যৌগিক শব্দ পেছন থেকে পড়ুন: Türgriff আসলে একটি Griff (হাতল), Tür (দরজা) নয়।",
      },
      examTip: {
        de: "Prüfungswörter sind oft lang und zusammengesetzt: die Anmeldebestätigung (die Bestätigung), der Mietvertrag (der Vertrag). Streiche gedanklich alles vor dem letzten Wort.",
        en: "Exam vocabulary is often long and compound: die Anmeldebestätigung (die Bestätigung), der Mietvertrag (der Vertrag). Mentally delete everything before the last word.",
        it: "Il lessico d'esame è spesso lungo e composto: die Anmeldebestätigung (die Bestätigung), der Mietvertrag (der Vertrag). Cancella mentalmente tutto ciò che precede l'ultima parola.",
        bn: "পরীক্ষার শব্দ প্রায়ই লম্বা ও যৌগিক: die Anmeldebestätigung (die Bestätigung), der Mietvertrag (der Vertrag)। মনে মনে শেষ শব্দের আগের সবকিছু মুছে ফেলুন।",
      },
    },
  ],

  commonMistakes: [
    {
      wrong: "Ich habe eine Problem.",
      right: "Ich habe ein Problem.",
      why: {
        de: "»das Problem« ist neutrum, also ein — nicht eine. Wörter auf -em/-ma aus dem Griechischen sind oft neutrum: das Problem, das System, das Thema.",
        en: "'das Problem' is neuter, so ein — not eine. Greek-derived words in -em/-ma are often neuter: das Problem, das System, das Thema.",
        it: "»das Problem« è neutro, quindi ein — non eine. Le parole di origine greca in -em/-ma sono spesso neutre: das Problem, das System, das Thema.",
        bn: "»das Problem« ক্লীবলিঙ্গ, তাই eine নয়, ein হবে। গ্রিক থেকে আসা -em/-ma যুক্ত শব্দ প্রায়ই ক্লীবলিঙ্গ: das Problem, das System, das Thema।",
      },
    },
    {
      wrong: "Die Mädchen ist meine Schwester.",
      right: "Das Mädchen ist meine Schwester.",
      why: {
        de: "-chen macht das Wort neutrum, auch wenn eine weibliche Person gemeint ist. Grammatik schlägt Bedeutung.",
        en: "-chen makes the word neuter even when a female person is meant. Grammar beats meaning.",
        it: "-chen rende la parola neutra anche quando si intende una persona femminile. La grammatica batte il significato.",
        bn: "-chen শব্দটিকে ক্লীবলিঙ্গ করে দেয়, এমনকি নারী বোঝালেও। এখানে ব্যাকরণ অর্থের উপরে।",
      },
    },
    {
      wrong: "Ich wohne in eine Wohnung.",
      right: "Ich wohne in einer Wohnung.",
      why: {
        de: "»wohnen« antwortet auf »wo?«, also Dativ. Feminin Dativ ist einer, nicht eine. Der Artikel war richtig gewählt, der Kasus nicht.",
        en: "'wohnen' answers 'wo?', so it takes the Dativ. The feminine Dativ is einer, not eine. The gender was right; the case was not.",
        it: "»wohnen« risponde a »wo?«, quindi richiede il Dativ. Il femminile al Dativ è einer, non eine. Il genere era giusto, il caso no.",
        bn: "»wohnen« »wo?« প্রশ্নের উত্তর দেয়, তাই Dativ হবে। স্ত্রীলিঙ্গের Dativ হলো einer, eine নয়। লিঙ্গ ঠিক ছিল, কারকটাই ভুল।",
      },
    },
    {
      wrong: "Der Universität ist groß.",
      right: "Die Universität ist groß.",
      why: {
        de: "-tät ist immer feminin. Diese Endung stammt aus dem Lateinischen und verhält sich wie das italienische -tà (la università).",
        en: "-tät is always feminine. The ending comes from Latin and behaves like Italian -tà (la università).",
        it: "-tät è sempre femminile. La desinenza viene dal latino e si comporta come l'italiano -tà (la università).",
        bn: "-tät সবসময় স্ত্রীলিঙ্গ। এই শেষাংশটি ল্যাটিন থেকে এসেছে এবং ইতালীয় -tà (la università) এর মতোই আচরণ করে।",
      },
    },
  ],

  exercises: {
    mini: [
      article({
        id: "art-mini-1",
        difficulty: 1,
        tags: ["artikel", "artikel-endung-ung"],
        prompt: {
          de: "Welcher Artikel?",
          en: "Which article?",
          it: "Quale articolo?",
          bn: "কোন আর্টিকেল?",
        },
        noun: "Wohnung",
        answer: "die",
        explanation: {
          de: "-ung ist eine feminine Nachsilbe: die Wohnung.",
          en: "-ung is a feminine suffix: die Wohnung.",
          it: "-ung è un suffisso femminile: die Wohnung.",
          bn: "-ung একটি স্ত্রীলিঙ্গ প্রত্যয়: die Wohnung।",
        },
      }),
      article({
        id: "art-mini-2",
        difficulty: 1,
        tags: ["artikel", "artikel-endung-chen"],
        prompt: {
          de: "Welcher Artikel?",
          en: "Which article?",
          it: "Quale articolo?",
          bn: "কোন আর্টিকেল?",
        },
        noun: "Mädchen",
        answer: "das",
        explanation: {
          de: "-chen ist immer neutrum, auch bei Personen: das Mädchen.",
          en: "-chen is always neuter, even for people: das Mädchen.",
          it: "-chen è sempre neutro, anche per le persone: das Mädchen.",
          bn: "-chen সবসময় ক্লীবলিঙ্গ, ব্যক্তির ক্ষেত্রেও: das Mädchen।",
        },
      }),
      article({
        id: "art-mini-3",
        difficulty: 1,
        tags: ["artikel", "artikel-zeit"],
        prompt: {
          de: "Welcher Artikel?",
          en: "Which article?",
          it: "Quale articolo?",
          bn: "কোন আর্টিকেল?",
        },
        noun: "Sommer",
        answer: "der",
        explanation: {
          de: "Jahreszeiten sind maskulin: der Sommer, der Winter.",
          en: "Seasons are masculine: der Sommer, der Winter.",
          it: "Le stagioni sono maschili: der Sommer, der Winter.",
          bn: "ঋতু পুংলিঙ্গ: der Sommer, der Winter।",
        },
      }),
      article({
        id: "art-mini-4",
        difficulty: 1,
        tags: ["artikel", "artikel-endung-keit"],
        prompt: {
          de: "Welcher Artikel?",
          en: "Which article?",
          it: "Quale articolo?",
          bn: "কোন আর্টিকেল?",
        },
        noun: "Möglichkeit",
        answer: "die",
        explanation: {
          de: "-keit ist ohne Ausnahme feminin: die Möglichkeit.",
          en: "-keit is feminine without exception: die Möglichkeit.",
          it: "-keit è femminile senza eccezioni: die Möglichkeit.",
          bn: "-keit ব্যতিক্রমহীনভাবে স্ত্রীলিঙ্গ: die Möglichkeit।",
        },
      }),
    ],

    medium: [
      gap({
        id: "art-med-1",
        difficulty: 2,
        tags: ["artikel", "artikel-akkusativ"],
        prompt: {
          de: "Ergänze den Artikel im Akkusativ.",
          en: "Fill in the article in the Akkusativ.",
          it: "Inserisci l'articolo all'Akkusativ.",
          bn: "Akkusativ-এ সঠিক আর্টিকেল বসান।",
        },
        before: "Ich sehe",
        after: "Mann dort drüben.",
        options: ["der", "den", "dem", "das"],
        answer: "den",
        explanation: {
          de: "»sehen« verlangt den Akkusativ, und nur maskulin ändert sich: der → den.",
          en: "'sehen' takes the Akkusativ, and only the masculine changes: der → den.",
          it: "»sehen« richiede l'Akkusativ e solo il maschile cambia: der → den.",
          bn: "»sehen« Akkusativ নেয়, আর কেবল পুংলিঙ্গ বদলায়: der → den।",
        },
      }),
      gap({
        id: "art-med-2",
        difficulty: 2,
        tags: ["artikel", "artikel-unbestimmt", "kasus-akkusativ"],
        prompt: {
          de: "Ergänze den unbestimmten Artikel.",
          en: "Fill in the indefinite article.",
          it: "Inserisci l'articolo indeterminativo.",
          bn: "অনির্দিষ্ট আর্টিকেল বসান।",
        },
        before: "Wir suchen",
        after: "Wohnung in Siegen.",
        options: ["ein", "einen", "eine", "einem"],
        answer: "eine",
        explanation: {
          de: "»die Wohnung« ist feminin, und feminin ist im Akkusativ gleich wie im Nominativ: eine.",
          en: "'die Wohnung' is feminine, and the feminine Akkusativ looks like the Nominativ: eine.",
          it: "»die Wohnung« è femminile, e il femminile all'Akkusativ è uguale al Nominativ: eine.",
          bn: "»die Wohnung« স্ত্রীলিঙ্গ, আর স্ত্রীলিঙ্গে Akkusativ দেখতে Nominativ-এর মতোই: eine।",
        },
      }),
      mc({
        id: "art-med-3",
        difficulty: 2,
        tags: ["artikel", "artikel-kompositum"],
        prompt: {
          de: "Welcher Artikel gehört zu diesem zusammengesetzten Nomen?",
          en: "Which article does this compound noun take?",
          it: "Quale articolo prende questo sostantivo composto?",
          bn: "এই যৌগিক বিশেষ্যটি কোন আর্টিকেল নেয়?",
        },
        german: "___ Haustür",
        options: ["der", "die", "das"],
        answer: 1,
        explanation: {
          de: "Das letzte Wort entscheidet: die Tür → die Haustür.",
          en: "The last word decides: die Tür → die Haustür.",
          it: "Decide l'ultima parola: die Tür → die Haustür.",
          bn: "শেষ শব্দটাই ঠিক করে দেয়: die Tür → die Haustür।",
        },
      }),
      article({
        id: "art-med-4",
        difficulty: 2,
        tags: ["artikel", "artikel-ausnahme-e"],
        prompt: {
          de: "Vorsicht — hier hilft die -e-Regel nicht.",
          en: "Careful — the -e rule does not help here.",
          it: "Attenzione — qui la regola di -e non aiuta.",
          bn: "সাবধান — এখানে -e নিয়মটি কাজে আসবে না।",
        },
        noun: "Name",
        answer: "der",
        explanation: {
          de: "»der Name« ist eine der bekanntesten Ausnahmen zur -e-Regel, zusammen mit der Junge und das Auge.",
          en: "'der Name' is one of the best-known exceptions to the -e rule, along with der Junge and das Auge.",
          it: "»der Name« è una delle eccezioni più note alla regola di -e, insieme a der Junge e das Auge.",
          bn: "»der Name« হলো -e নিয়মের সবচেয়ে পরিচিত ব্যতিক্রমগুলোর একটি, সাথে der Junge ও das Auge।",
        },
      }),
    ],

    hard: [
      gap({
        id: "art-hard-1",
        difficulty: 3,
        tags: ["artikel", "kasus-dativ", "artikel-dativ"],
        prompt: {
          de: "Ergänze den Artikel.",
          en: "Fill in the article.",
          it: "Inserisci l'articolo.",
          bn: "সঠিক আর্টিকেল বসান।",
        },
        before: "Ich helfe",
        after: "Frau mit dem Koffer.",
        options: ["die", "der", "den", "dem"],
        answer: "der",
        explanation: {
          de: "»helfen« verlangt immer den Dativ, und feminin Dativ ist der. Das sieht aus wie maskulin Nominativ — deshalb ist es so schwer.",
          en: "'helfen' always takes the Dativ, and the feminine Dativ is der. It looks identical to the masculine Nominativ, which is exactly why it is hard.",
          it: "»helfen« richiede sempre il Dativ, e il femminile al Dativ è der. Sembra identico al maschile Nominativ: per questo è difficile.",
          bn: "»helfen« সবসময় Dativ নেয়, আর স্ত্রীলিঙ্গের Dativ হলো der। দেখতে হুবহু পুংলিঙ্গ Nominativ-এর মতো — তাই এটি কঠিন।",
        },
      }),
      mc({
        id: "art-hard-2",
        difficulty: 3,
        tags: ["artikel", "artikel-plural-dativ"],
        prompt: {
          de: "Welche Form ist richtig?",
          en: "Which form is correct?",
          it: "Quale forma è corretta?",
          bn: "কোন রূপটি সঠিক?",
        },
        german: "Ich spiele mit ___ Kindern.",
        options: ["die", "der", "den", "dem"],
        answer: 2,
        explanation: {
          de: "»mit« verlangt Dativ, und der Plural im Dativ ist den — außerdem bekommt das Nomen ein -n: den Kindern.",
          en: "'mit' takes the Dativ, and the plural Dativ is den — and the noun itself adds -n: den Kindern.",
          it: "»mit« richiede il Dativ, e il plurale al Dativ è den — inoltre il sostantivo aggiunge -n: den Kindern.",
          bn: "»mit« Dativ নেয়, আর বহুবচনের Dativ হলো den — উপরন্তু বিশেষ্যটিতে একটি -n যোগ হয়: den Kindern।",
        },
      }),
      article({
        id: "art-hard-3",
        difficulty: 3,
        tags: ["artikel", "artikel-ausnahme-ung"],
        prompt: {
          de: "Achtung: Endet dieses Wort wirklich auf die Nachsilbe -ung?",
          en: "Careful: does this word really end in the suffix -ung?",
          it: "Attenzione: questa parola finisce davvero con il suffisso -ung?",
          bn: "খেয়াল করুন: এই শব্দটি কি সত্যিই -ung প্রত্যয় দিয়ে শেষ হয়েছে?",
        },
        noun: "Sprung",
        answer: "der",
        explanation: {
          de: "Nein — »Sprung« ist keine -ung-Ableitung, sondern ein eigenes maskulines Wort: der Sprung. Genauso der Ursprung.",
          en: "No — 'Sprung' is not an -ung derivation but a masculine word in its own right: der Sprung. Same with der Ursprung.",
          it: "No — »Sprung« non è una derivazione in -ung ma una parola maschile a sé: der Sprung. Lo stesso vale per der Ursprung.",
          bn: "না — »Sprung« -ung প্রত্যয় থেকে তৈরি নয়, বরং এটি নিজেই একটি পুংলিঙ্গ শব্দ: der Sprung। একইভাবে der Ursprung।",
        },
      }),
    ],
  },

  quickTest: [
    article({
      id: "art-test-1",
      difficulty: 2,
      tags: ["artikel", "artikel-endung-ion"],
      prompt: {
        de: "Welcher Artikel?",
        en: "Which article?",
        it: "Quale articolo?",
        bn: "কোন আর্টিকেল?",
      },
      noun: "Information",
      answer: "die",
      explanation: {
        de: "-ion ist ohne Ausnahme feminin.",
        en: "-ion is feminine without exception.",
        it: "-ion è femminile senza eccezioni.",
        bn: "-ion ব্যতিক্রমহীনভাবে স্ত্রীলিঙ্গ।",
      },
    }),
    article({
      id: "art-test-2",
      difficulty: 2,
      tags: ["artikel", "artikel-endung-ling"],
      prompt: {
        de: "Welcher Artikel?",
        en: "Which article?",
        it: "Quale articolo?",
        bn: "কোন আর্টিকেল?",
      },
      noun: "Frühling",
      answer: "der",
      explanation: {
        de: "-ling ist immer maskulin — und Jahreszeiten sind es ohnehin.",
        en: "-ling is always masculine — and seasons are anyway.",
        it: "-ling è sempre maschile — e le stagioni lo sono comunque.",
        bn: "-ling সবসময় পুংলিঙ্গ — আর ঋতু এমনিতেই পুংলিঙ্গ।",
      },
    }),
    gap({
      id: "art-test-3",
      difficulty: 2,
      tags: ["artikel", "kasus-akkusativ"],
      prompt: {
        de: "Ergänze den Artikel.",
        en: "Fill in the article.",
        it: "Inserisci l'articolo.",
        bn: "সঠিক আর্টিকেল বসান।",
      },
      before: "Kannst du bitte",
      after: "Fenster schließen?",
      options: ["der", "die", "das", "den"],
      answer: "das",
      explanation: {
        de: "»das Fenster« ist neutrum, und neutrum ändert sich im Akkusativ nicht.",
        en: "'das Fenster' is neuter, and the neuter does not change in the Akkusativ.",
        it: "»das Fenster« è neutro, e il neutro non cambia all'Akkusativ.",
        bn: "»das Fenster« ক্লীবলিঙ্গ, আর ক্লীবলিঙ্গ Akkusativ-এ বদলায় না।",
      },
    }),
    truefalse({
      id: "art-test-4",
      difficulty: 2,
      tags: ["artikel", "artikel-genus"],
      prompt: {
        de: "Richtig oder falsch?",
        en: "True or false?",
        it: "Vero o falso?",
        bn: "সত্য না মিথ্যা?",
      },
      statement:
        "Das Geschlecht eines deutschen Nomens kann man meistens aus der Bedeutung erraten.",
      answer: false,
      explanation: {
        de: "Falsch. Das Geschlecht hängt am Wort, nicht an der Bedeutung — »das Mädchen« ist der klarste Beweis. Endungen helfen, Bedeutung nicht.",
        en: "False. Gender belongs to the word, not to the meaning — 'das Mädchen' is the clearest proof. Endings help; meaning does not.",
        it: "Falso. Il genere appartiene alla parola, non al significato — »das Mädchen« ne è la prova più chiara. Aiutano le desinenze, non il significato.",
        bn: "মিথ্যা। লিঙ্গ শব্দের সাথে যুক্ত, অর্থের সাথে নয় — »das Mädchen« তার সবচেয়ে স্পষ্ট প্রমাণ। শেষাংশ সাহায্য করে, অর্থ করে না।",
      },
    }),
    mc({
      id: "art-test-5",
      difficulty: 3,
      tags: ["artikel", "kasus-dativ"],
      prompt: {
        de: "Welche Form ist richtig?",
        en: "Which form is correct?",
        it: "Quale forma è corretta?",
        bn: "কোন রূপটি সঠিক?",
      },
      german: "Ich fahre mit ___ Bus zur Arbeit.",
      options: ["der", "den", "dem", "das"],
      answer: 2,
      explanation: {
        de: "»mit« verlangt Dativ; »der Bus« ist maskulin, also dem Bus.",
        en: "'mit' takes the Dativ; 'der Bus' is masculine, so dem Bus.",
        it: "»mit« richiede il Dativ; »der Bus« è maschile, quindi dem Bus.",
        bn: "»mit« Dativ নেয়; »der Bus« পুংলিঙ্গ, তাই dem Bus।",
      },
    }),
    article({
      id: "art-test-6",
      difficulty: 3,
      tags: ["artikel", "artikel-kompositum"],
      prompt: {
        de: "Welcher Artikel? Denk an das letzte Wort.",
        en: "Which article? Think about the last word.",
        it: "Quale articolo? Pensa all'ultima parola.",
        bn: "কোন আর্টিকেল? শেষ শব্দটির কথা ভাবুন।",
      },
      noun: "Anmeldebestätigung",
      answer: "die",
      explanation: {
        de: "Das letzte Wort ist »die Bestätigung« — und -ung ist feminin. Also die Anmeldebestätigung.",
        en: "The last word is 'die Bestätigung' — and -ung is feminine. So die Anmeldebestätigung.",
        it: "L'ultima parola è »die Bestätigung« — e -ung è femminile. Quindi die Anmeldebestätigung.",
        bn: "শেষ শব্দটি »die Bestätigung« — আর -ung স্ত্রীলিঙ্গ। তাই die Anmeldebestätigung।",
      },
    }),
  ],
};
