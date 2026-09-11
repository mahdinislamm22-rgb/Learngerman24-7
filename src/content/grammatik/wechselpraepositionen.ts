import type { GrammarLesson } from "@/lib/types";
import { gap, mc, order, truefalse } from "./types";

/**
 * Wechselpräpositionen — the nine prepositions that take either case.
 *
 * The usual shortcut ("movement = Akkusativ") is not quite true and
 * produces a specific, very common error: running *around inside* a park
 * is movement, but it is still the Dativ. The lesson teaches the accurate
 * version — change of location, not motion — and says so explicitly.
 */
export const wechselpraepositionen: GrammarLesson = {
  slug: "wechselpraepositionen",
  category: "kasus",
  level: "b1",
  telcWeight: 3,

  title: {
    de: "Wechselpräpositionen — Akkusativ oder Dativ?",
    en: "Two-way prepositions — Akkusativ or Dativ?",
    it: "Preposizioni a doppio caso — Akkusativ o Dativ?",
    bn: "Wechselpräposition — Akkusativ না Dativ?",
  },

  telcRelevance: {
    de: "Neun Präpositionen, die beide Fälle nehmen können. Sie sind ein Lieblingsthema der Sprachbausteine und einer der häufigsten Fehler im Brief.",
    en: "Nine prepositions that can take either case. They are a favourite of the Sprachbausteine section and one of the most frequent errors in the letter.",
    it: "Nove preposizioni che possono reggere entrambi i casi. Sono un tema prediletto dei Sprachbausteine e uno degli errori più frequenti nella lettera.",
    bn: "নয়টি Präposition যেগুলো দুটি কারকই নিতে পারে। Sprachbausteine অংশের প্রিয় বিষয় এবং চিঠির অন্যতম সাধারণ ভুল।",
  },

  whatIsIt: {
    de: "Neun Präpositionen — an, auf, hinter, in, neben, über, unter, vor, zwischen — können den Akkusativ oder den Dativ verlangen. Welchen, entscheidet nicht die Präposition, sondern die Bedeutung des Satzes.",
    en: "Nine prepositions — an, auf, hinter, in, neben, über, unter, vor, zwischen — can take either the Akkusativ or the Dativ. Which one is decided not by the preposition but by the meaning of the sentence.",
    it: "Nove preposizioni — an, auf, hinter, in, neben, über, unter, vor, zwischen — possono reggere l'Akkusativ o il Dativ. A deciderlo non è la preposizione, ma il significato della frase.",
    bn: "নয়টি Präposition — an, auf, hinter, in, neben, über, unter, vor, zwischen — Akkusativ বা Dativ, দুটোই নিতে পারে। কোনটি হবে তা Präposition নয়, বাক্যের অর্থ ঠিক করে।",
  },

  whyNeeded: {
    de: "Der Kasus ändert hier die Bedeutung, nicht nur die Form. »Ich hänge das Bild an die Wand« (ich hänge es jetzt hin) ist etwas anderes als »Das Bild hängt an der Wand« (es ist schon dort).",
    en: "Here the case changes the meaning, not merely the form. 'Ich hänge das Bild an die Wand' (I am putting it up now) is not the same as 'Das Bild hängt an der Wand' (it is already there).",
    it: "Qui il caso cambia il significato, non solo la forma. »Ich hänge das Bild an die Wand« (lo sto appendendo ora) non è come »Das Bild hängt an der Wand« (è già lì).",
    bn: "এখানে কারক কেবল রূপ নয়, অর্থও বদলে দেয়। »Ich hänge das Bild an die Wand« (আমি এখন টাঙাচ্ছি) আর »Das Bild hängt an der Wand« (সেটি আগে থেকেই সেখানে) — এক নয়।",
  },

  simple: {
    de: "Zwei Fragen entscheiden alles. Wohin? → Akkusativ. Wo? → Dativ. Frage immer zuerst, ob sich der Ort ändert.",
    en: "Two questions decide everything. Wohin? (where to) → Akkusativ. Wo? (where at) → Dativ. Always ask first whether the location changes.",
    it: "Due domande decidono tutto. Wohin? (dove verso) → Akkusativ. Wo? (dove) → Dativ. Chiediti sempre prima se il luogo cambia.",
    bn: "দুটি প্রশ্নই সব ঠিক করে দেয়। Wohin? (কোথায় যাচ্ছে) → Akkusativ। Wo? (কোথায় আছে) → Dativ। সবসময় আগে জিজ্ঞেস করুন, স্থানটি বদলাচ্ছে কিনা।",
  },

  pattern: {
    de: "Wechsel des Ortes → Akkusativ. Kein Wechsel des Ortes → Dativ. Es geht um den Ortswechsel, nicht um Bewegung an sich.",
    en: "Change of location → Akkusativ. No change of location → Dativ. What matters is the change of place, not motion as such.",
    it: "Cambio di luogo → Akkusativ. Nessun cambio di luogo → Dativ. Conta il cambio di posto, non il movimento in sé.",
    bn: "স্থান পরিবর্তন → Akkusativ। স্থান পরিবর্তন নেই → Dativ। মূল কথা স্থান বদলানো, নিছক নড়াচড়া নয়।",
  },

  compare: [
    {
      german: "Ich gehe in die Schule. / Ich bin in der Schule.",
      english: "I go to school. / I am at school.",
      why: {
        de: "Englisch benutzt zwei verschiedene Präpositionen (to / at), Deutsch benutzt dieselbe Präposition mit zwei Fällen. Die Unterscheidung ist also bekannt — nur wird sie anders ausgedrückt.",
        en: "English uses two different prepositions (to / at); German uses the same preposition with two cases. The distinction is familiar — it is just expressed differently.",
        it: "L'inglese usa due preposizioni diverse (to / at); il tedesco usa la stessa preposizione con due casi. La distinzione è nota, cambia solo il modo di esprimerla.",
        bn: "ইংরেজি দুটি আলাদা Präposition ব্যবহার করে (to / at); জার্মান একই Präposition-এর সাথে দুটি কারক ব্যবহার করে। পার্থক্যটি আপনার চেনা — শুধু প্রকাশের ধরন আলাদা।",
      },
    },
    {
      german: "Ich fahre nach Italien. / Ich bin in Italien.",
      italian: "Vado in Italia. / Sono in Italia.",
      why: {
        de: "Im Italienischen bleibt »in Italia« in beiden Sätzen gleich. Deutsch verlangt zwei verschiedene Konstruktionen. Wer aus dem Italienischen kommt, hat für diesen Unterschied kein Vorbild und muss ihn wirklich neu lernen.",
        en: "In Italian 'in Italia' stays the same in both sentences. German requires two different constructions. Coming from Italian you have no model for this distinction and genuinely have to learn it from scratch.",
        it: "In italiano »in Italia« resta uguale in entrambe le frasi. Il tedesco richiede due costruzioni diverse. Chi viene dall'italiano non ha un modello per questa distinzione e deve impararla davvero da zero.",
        bn: "ইতালীয়তে »in Italia« দুই বাক্যেই একই থাকে। জার্মানে দুটি আলাদা গঠন লাগে। ইতালীয় থেকে এলে এই পার্থক্যের কোনো নমুনা আপনার নেই — একেবারে নতুন করে শিখতে হবে।",
      },
    },
    {
      german: "Ich laufe im Park. / Ich laufe in den Park.",
      english: "I run in the park. / I run into the park.",
      why: {
        de: "Beide Sätze enthalten Bewegung. Trotzdem steht der erste im Dativ, weil der Ort sich nicht ändert — man läuft innerhalb des Parks. Genau hier scheitert die Kurzregel »Bewegung = Akkusativ«.",
        en: "Both sentences contain movement. The first is still Dativ, because the location does not change — you are running around inside the park. This is exactly where the short rule 'movement = Akkusativ' breaks down.",
        it: "Entrambe le frasi contengono movimento. La prima è comunque al Dativ, perché il luogo non cambia — si corre dentro il parco. È proprio qui che la regola breve »movimento = Akkusativ« crolla.",
        bn: "দুটি বাক্যেই নড়াচড়া আছে। তবু প্রথমটি Dativ, কারণ স্থান বদলাচ্ছে না — পার্কের ভেতরেই দৌড়ানো হচ্ছে। »নড়াচড়া = Akkusativ« সংক্ষিপ্ত নিয়মটি ঠিক এখানেই ভেঙে পড়ে।",
      },
    },
  ],

  tables: [
    {
      caption: {
        de: "Die neun Wechselpräpositionen",
        en: "The nine two-way prepositions",
        it: "Le nove preposizioni a doppio caso",
        bn: "নয়টি Wechselpräposition",
      },
      headers: ["Präposition", "Bedeutung", "Wohin? (Akk.)", "Wo? (Dat.)"],
      rows: [
        ["an", "at, on (vertical)", "an die Wand", "an der Wand"],
        ["auf", "on (horizontal)", "auf den Tisch", "auf dem Tisch"],
        ["hinter", "behind", "hinter das Haus", "hinter dem Haus"],
        ["in", "in, into", "in die Stadt", "in der Stadt"],
        ["neben", "next to", "neben den Stuhl", "neben dem Stuhl"],
        ["über", "over, above", "über die Straße", "über der Straße"],
        ["unter", "under", "unter den Tisch", "unter dem Tisch"],
        ["vor", "in front of; before", "vor die Tür", "vor der Tür"],
        ["zwischen", "between", "zwischen die Häuser", "zwischen den Häusern"],
      ],
      note: {
        de: "Lerne sie in dieser Reihenfolge — sie ist in fast jedem Lehrbuch gleich, und die Wiederholung derselben Kette macht sie abrufbar.",
        en: "Learn them in this order — nearly every textbook uses it, and repeating the same chain is what makes them retrievable.",
        it: "Imparale in quest'ordine — quasi ogni manuale lo usa, e ripetere la stessa catena è ciò che le rende richiamabili.",
        bn: "এই ক্রমেই শিখুন — প্রায় সব পাঠ্যবইয়ে এই ক্রম, আর একই শৃঙ্খল বারবার বলাই এগুলো মনে রাখার উপায়।",
      },
    },
    {
      caption: {
        de: "Verbpaare: hinstellen oder stehen?",
        en: "Verb pairs: putting something somewhere, or being there",
        it: "Coppie di verbi: mettere o stare",
        bn: "ক্রিয়া-জোড়া: রাখা নাকি থাকা",
      },
      headers: ["Wohin? + Akkusativ", "Wo? + Dativ", "Beispielpaar"],
      rows: [
        ["legen (legte, gelegt)", "liegen (lag, gelegen)", "Ich lege das Buch auf den Tisch. / Es liegt auf dem Tisch."],
        ["stellen (stellte, gestellt)", "stehen (stand, gestanden)", "Ich stelle die Flasche in den Kühlschrank. / Sie steht im Kühlschrank."],
        ["setzen (setzte, gesetzt)", "sitzen (saß, gesessen)", "Ich setze mich auf den Stuhl. / Ich sitze auf dem Stuhl."],
        ["hängen (hängte, gehängt)", "hängen (hing, gehangen)", "Ich hänge das Bild an die Wand. / Es hängt an der Wand."],
      ],
      note: {
        de: "Die Akkusativ-Verben sind regelmäßig, die Dativ-Verben unregelmäßig. Wer sich das merkt, erkennt am Partizip schon, welcher Fall gemeint war: gelegt = Akkusativ, gelegen = Dativ.",
        en: "The Akkusativ verbs are regular; the Dativ verbs are irregular. Remember that and the participle alone tells you which case was meant: gelegt = Akkusativ, gelegen = Dativ.",
        it: "I verbi con l'Akkusativ sono regolari, quelli con il Dativ irregolari. Ricordandolo, il participio da solo ti dice quale caso era inteso: gelegt = Akkusativ, gelegen = Dativ.",
        bn: "Akkusativ-ক্রিয়াগুলো নিয়মিত, Dativ-ক্রিয়াগুলো অনিয়মিত। এটি মনে রাখলে কেবল participle দেখেই বোঝা যায় কোন কারক ছিল: gelegt = Akkusativ, gelegen = Dativ।",
      },
    },
  ],

  memoryTricks: [
    {
      isShortcut: true,
      rule: "Wohin? → Akkusativ. Wo? → Dativ.",
      meaning: {
        de: "Stell die Frage vor dem Schreiben. Antwortet der Satz auf »wohin?«, nimm den Akkusativ; antwortet er auf »wo?«, nimm den Dativ.",
        en: "Ask the question before you write. If the sentence answers 'wohin?', use the Akkusativ; if it answers 'wo?', use the Dativ.",
        it: "Poni la domanda prima di scrivere. Se la frase risponde a »wohin?«, usa l'Akkusativ; se risponde a »wo?«, usa il Dativ.",
        bn: "লেখার আগে প্রশ্নটি করুন। বাক্যটি »wohin?« এর উত্তর দিলে Akkusativ, আর »wo?« এর উত্তর দিলে Dativ।",
      },
      example: "Ich gehe in die Küche (wohin?). · Ich koche in der Küche (wo?).",
      counterExample:
        "»Bewegung = Akkusativ« stimmt nicht: »Ich laufe im Park« ist Bewegung und trotzdem Dativ, weil der Ort derselbe bleibt. Entscheidend ist der Ortswechsel, nicht die Bewegung.",
      memoryTrick: {
        de: "Akkusativ hat ein A wie Ankunft — ein neues Ziel. Dativ hat ein D wie dableiben.",
        en: "Akkusativ starts with A, as in arrival — a new destination. Dativ starts with D, as in 'staying' put.",
        it: "Akkusativ inizia con A come arrivo — una nuova destinazione. Dativ inizia con D come »restare dove si è«.",
        bn: "Akkusativ শুরু A দিয়ে, যেমন arrival — নতুন গন্তব্য। Dativ শুরু D দিয়ে, যেমন »যেখানে আছে সেখানেই থাকা«।",
      },
      examTip: {
        de: "Im Brief sind die häufigsten Fälle einfach: »Ich komme zu dir« (zu ist immer Dativ), aber »Ich gehe in die Stadt« und »Ich wohne in der Stadt«.",
        en: "In the letter the common cases are simple: 'Ich komme zu dir' (zu is always Dativ), but 'Ich gehe in die Stadt' and 'Ich wohne in der Stadt'.",
        it: "Nella lettera i casi frequenti sono semplici: »Ich komme zu dir« (zu è sempre Dativ), ma »Ich gehe in die Stadt« e »Ich wohne in der Stadt«.",
        bn: "চিঠিতে সাধারণ ক্ষেত্রগুলো সহজ: »Ich komme zu dir« (zu সবসময় Dativ), কিন্তু »Ich gehe in die Stadt« ও »Ich wohne in der Stadt«।",
      },
    },
    {
      isShortcut: true,
      rule: "Unregelmäßiges Verb → Dativ. Regelmäßiges Verb → Akkusativ.",
      meaning: {
        de: "Bei den Verbpaaren liegen/legen, stehen/stellen, sitzen/setzen ist das unregelmäßige Verb immer das mit dem Dativ.",
        en: "In the pairs liegen/legen, stehen/stellen, sitzen/setzen, the irregular verb is always the one that takes the Dativ.",
        it: "Nelle coppie liegen/legen, stehen/stellen, sitzen/setzen, il verbo irregolare è sempre quello che regge il Dativ.",
        bn: "liegen/legen, stehen/stellen, sitzen/setzen জোড়াগুলোতে অনিয়মিত ক্রিয়াটিই সবসময় Dativ নেয়।",
      },
      example: "liegen – lag – gelegen (Dativ) · legen – legte – gelegt (Akkusativ)",
      counterExample:
        "»hängen« ist in beiden Bedeutungen dasselbe Wort im Infinitiv. Erst im Präteritum trennen sie sich: hing (Dativ) gegen hängte (Akkusativ).",
      memoryTrick: {
        de: "Das »faule« Verb ist unregelmäßig und bleibt liegen — Dativ. Das aktive Verb ist regelmäßig und legt etwas hin — Akkusativ.",
        en: "The 'lazy' verb is irregular and just lies there — Dativ. The active verb is regular and puts something down — Akkusativ.",
        it: "Il verbo »pigro« è irregolare e resta lì — Dativ. Il verbo attivo è regolare e posa qualcosa — Akkusativ.",
        bn: "»অলস« ক্রিয়াটি অনিয়মিত, সে শুধু পড়ে থাকে — Dativ। সক্রিয় ক্রিয়াটি নিয়মিত, সে কিছু রাখে — Akkusativ।",
      },
      examTip: {
        de: "In den Sprachbausteinen steht oft das Verb schon da. Siehst du »liegt«, muss die Lücke ein Dativ sein — ohne dass du den Satz verstehen musst.",
        en: "In Sprachbausteine the verb is often already given. If you see 'liegt', the gap must be a Dativ — without your needing to understand the sentence.",
        it: "Nei Sprachbausteine il verbo è spesso già dato. Se vedi »liegt«, lo spazio deve essere un Dativ — senza dover capire la frase.",
        bn: "Sprachbausteine-এ ক্রিয়াটি প্রায়ই আগে থেকেই দেওয়া থাকে। »liegt« দেখলেই বুঝবেন ফাঁকটি Dativ — বাক্যটি না বুঝলেও চলবে।",
      },
    },
  ],

  cheatCodes: [
    {
      isShortcut: true,
      rule: "»über« im Sinne von »worüber« ist immer Akkusativ.",
      meaning: {
        de: "Wenn über nicht den Ort meint, sondern das Thema, gibt es keine Wahl: es steht immer der Akkusativ.",
        en: "When über does not refer to a place but to a topic, there is no choice: it always takes the Akkusativ.",
        it: "Quando über non indica un luogo ma un argomento, non c'è scelta: regge sempre l'Akkusativ.",
        bn: "über যখন স্থান নয়, বিষয় বোঝায়, তখন কোনো বিকল্প নেই: সবসময় Akkusativ।",
      },
      example: "Wir sprechen über den Film. · Ich schreibe über meine Erfahrungen.",
      counterExample:
        "Räumlich bleibt über eine Wechselpräposition: »Die Lampe hängt über dem Tisch« (wo?) gegen »Ich hänge die Lampe über den Tisch« (wohin?).",
      memoryTrick: {
        de: "Kein Ort, keine Wahl. Sobald über ein Thema einführt, ist die Frage »wo/wohin« sinnlos — also Akkusativ.",
        en: "No place, no choice. As soon as über introduces a topic, the 'wo/wohin' question is meaningless — so Akkusativ.",
        it: "Nessun luogo, nessuna scelta. Appena über introduce un argomento, la domanda »wo/wohin« è insensata — quindi Akkusativ.",
        bn: "স্থান নেই, বিকল্পও নেই। über যখন বিষয় আনে, তখন »wo/wohin« প্রশ্নটাই অর্থহীন — তাই Akkusativ।",
      },
      examTip: {
        de: "Im Brief sehr nützlich: »Ich möchte mich über den Lärm beschweren«, »Ich freue mich über Ihre Antwort«.",
        en: "Very useful in a letter: 'Ich möchte mich über den Lärm beschweren', 'Ich freue mich über Ihre Antwort'.",
        it: "Molto utile in una lettera: »Ich möchte mich über den Lärm beschweren«, »Ich freue mich über Ihre Antwort«.",
        bn: "চিঠিতে খুব কাজের: »Ich möchte mich über den Lärm beschweren«, »Ich freue mich über Ihre Antwort«।",
      },
    },
    {
      isShortcut: true,
      rule: "Zeitangaben mit an, in, vor stehen immer im Dativ.",
      meaning: {
        de: "Wenn eine Wechselpräposition eine Zeit angibt statt eines Ortes, gilt automatisch der Dativ.",
        en: "When a two-way preposition marks a time rather than a place, the Dativ applies automatically.",
        it: "Quando una preposizione a doppio caso indica un tempo invece di un luogo, vale automaticamente il Dativ.",
        bn: "Wechselpräposition যখন স্থানের বদলে সময় বোঝায়, তখন স্বয়ংক্রিয়ভাবে Dativ হয়।",
      },
      example: "am Montag · im Sommer · in einer Woche · vor drei Jahren",
      counterExample:
        "Nicht bei Zeitangaben ohne Präposition: »nächsten Montag« steht im Akkusativ, weil dort gar keine Präposition steht.",
      memoryTrick: {
        de: "Zeit ist ein Ort, an dem man ist, nicht einer, zu dem man geht. Deshalb Dativ.",
        en: "Time is a place you are at, not one you travel to. Hence the Dativ.",
        it: "Il tempo è un luogo in cui si è, non uno verso cui si va. Da qui il Dativ.",
        bn: "সময় এমন একটি স্থান যেখানে আপনি আছেন, যেখানে যাচ্ছেন তা নয়। তাই Dativ।",
      },
      examTip: {
        de: "am, im, vor — diese drei kommen in fast jedem Brief vor. »Am 15. Mai«, »im nächsten Monat«, »vor einer Woche«.",
        en: "am, im, vor — these three appear in almost every letter. 'Am 15. Mai', 'im nächsten Monat', 'vor einer Woche'.",
        it: "am, im, vor — questi tre compaiono in quasi ogni lettera. »Am 15. Mai«, »im nächsten Monat«, »vor einer Woche«.",
        bn: "am, im, vor — এই তিনটি প্রায় প্রতিটি চিঠিতে আসে। »Am 15. Mai«, »im nächsten Monat«, »vor einer Woche«।",
      },
    },
  ],

  commonMistakes: [
    {
      wrong: "Ich gehe in der Schule.",
      right: "Ich gehe in die Schule.",
      why: {
        de: "»gehen« zeigt einen Ortswechsel — wohin? → Akkusativ: in die Schule. Mit Dativ hieße der Satz, dass man innerhalb der Schule herumgeht.",
        en: "'gehen' shows a change of location — wohin? → Akkusativ: in die Schule. With the Dativ the sentence would mean walking around inside the school.",
        it: "»gehen« indica un cambio di luogo — wohin? → Akkusativ: in die Schule. Con il Dativ la frase significherebbe camminare dentro la scuola.",
        bn: "»gehen« স্থান পরিবর্তন বোঝায় — wohin? → Akkusativ: in die Schule। Dativ দিলে বাক্যটির মানে দাঁড়াত স্কুলের ভেতরে হাঁটাহাঁটি করা।",
      },
    },
    {
      wrong: "Das Buch liegt auf den Tisch.",
      right: "Das Buch liegt auf dem Tisch.",
      why: {
        de: "»liegen« beschreibt einen Zustand, keinen Ortswechsel — wo? → Dativ. Das aktive Gegenstück wäre: Ich lege das Buch auf den Tisch.",
        en: "'liegen' describes a state, not a change of place — wo? → Dativ. The active counterpart would be: Ich lege das Buch auf den Tisch.",
        it: "»liegen« descrive uno stato, non un cambio di luogo — wo? → Dativ. Il corrispettivo attivo sarebbe: Ich lege das Buch auf den Tisch.",
        bn: "»liegen« একটি অবস্থা বোঝায়, স্থান পরিবর্তন নয় — wo? → Dativ। এর সক্রিয় রূপটি হতো: Ich lege das Buch auf den Tisch।",
      },
    },
    {
      wrong: "Wir sprechen über dem Problem.",
      right: "Wir sprechen über das Problem.",
      why: {
        de: "Hier ist über kein Ort, sondern ein Thema — und dann steht immer der Akkusativ, egal ob etwas sich bewegt.",
        en: "Here über marks a topic, not a place — and then the Akkusativ always applies, regardless of movement.",
        it: "Qui über indica un argomento, non un luogo — e allora vale sempre l'Akkusativ, a prescindere dal movimento.",
        bn: "এখানে über স্থান নয়, বিষয় বোঝাচ্ছে — আর তখন গতি থাকুক বা না থাকুক, সবসময় Akkusativ।",
      },
    },
  ],

  exercises: {
    mini: [
      gap({
        id: "wp-mini-1",
        difficulty: 1,
        tags: ["wechselpraeposition", "wechselpraeposition-akkusativ"],
        prompt: {
          de: "Wohin oder wo? Ergänze den Artikel.",
          en: "Wohin or wo? Fill in the article.",
          it: "Wohin o wo? Inserisci l'articolo.",
          bn: "Wohin না wo? সঠিক আর্টিকেল বসান।",
        },
        before: "Ich gehe in",
        after: "Supermarkt.",
        options: ["den", "dem", "der"],
        answer: "den",
        explanation: {
          de: "Wohin? Der Ort ändert sich → Akkusativ; »der Supermarkt« ist maskulin → in den Supermarkt.",
          en: "Wohin? The location changes → Akkusativ; 'der Supermarkt' is masculine → in den Supermarkt.",
          it: "Wohin? Il luogo cambia → Akkusativ; »der Supermarkt« è maschile → in den Supermarkt.",
          bn: "Wohin? স্থান বদলাচ্ছে → Akkusativ; »der Supermarkt« পুংলিঙ্গ → in den Supermarkt।",
        },
      }),
      gap({
        id: "wp-mini-2",
        difficulty: 1,
        tags: ["wechselpraeposition", "wechselpraeposition-dativ"],
        prompt: {
          de: "Wohin oder wo? Ergänze den Artikel.",
          en: "Wohin or wo? Fill in the article.",
          it: "Wohin o wo? Inserisci l'articolo.",
          bn: "Wohin না wo? সঠিক আর্টিকেল বসান।",
        },
        before: "Die Tasche steht unter",
        after: "Tisch.",
        options: ["den", "dem", "der"],
        answer: "dem",
        explanation: {
          de: "Wo? Nichts bewegt sich → Dativ; »der Tisch« ist maskulin → unter dem Tisch.",
          en: "Wo? Nothing moves → Dativ; 'der Tisch' is masculine → unter dem Tisch.",
          it: "Wo? Niente si muove → Dativ; »der Tisch« è maschile → unter dem Tisch.",
          bn: "Wo? কিছুই নড়ছে না → Dativ; »der Tisch« পুংলিঙ্গ → unter dem Tisch।",
        },
      }),
      mc({
        id: "wp-mini-3",
        difficulty: 1,
        tags: ["wechselpraeposition"],
        prompt: {
          de: "Welche Frage passt zu diesem Satz?",
          en: "Which question fits this sentence?",
          it: "Quale domanda si adatta a questa frase?",
          bn: "এই বাক্যের সাথে কোন প্রশ্নটি মানানসই?",
        },
        german: "Ich hänge das Bild an die Wand.",
        options: ["Wo?", "Wohin?", "Wann?", "Wie?"],
        answer: 1,
        explanation: {
          de: "Das Bild kommt an einen neuen Ort → wohin? → Akkusativ (die Wand).",
          en: "The picture is moving to a new place → wohin? → Akkusativ (die Wand).",
          it: "Il quadro va in un nuovo posto → wohin? → Akkusativ (die Wand).",
          bn: "ছবিটি নতুন জায়গায় যাচ্ছে → wohin? → Akkusativ (die Wand)।",
        },
      }),
      truefalse({
        id: "wp-mini-4",
        difficulty: 1,
        tags: ["wechselpraeposition"],
        prompt: {
          de: "Richtig oder falsch?",
          en: "True or false?",
          it: "Vero o falso?",
          bn: "সত্য না মিথ্যা?",
        },
        statement: "»mit« ist eine Wechselpräposition.",
        answer: false,
        explanation: {
          de: "Falsch. »mit« verlangt immer den Dativ. Die neun Wechselpräpositionen sind an, auf, hinter, in, neben, über, unter, vor, zwischen.",
          en: "False. 'mit' always takes the Dativ. The nine two-way prepositions are an, auf, hinter, in, neben, über, unter, vor, zwischen.",
          it: "Falso. »mit« regge sempre il Dativ. Le nove preposizioni a doppio caso sono an, auf, hinter, in, neben, über, unter, vor, zwischen.",
          bn: "মিথ্যা। »mit« সবসময় Dativ নেয়। নয়টি Wechselpräposition হলো an, auf, hinter, in, neben, über, unter, vor, zwischen।",
        },
      }),
    ],

    medium: [
      gap({
        id: "wp-med-1",
        difficulty: 2,
        tags: ["wechselpraeposition", "wechselpraeposition-dativ", "verbpaar"],
        prompt: {
          de: "Ergänze den Artikel.",
          en: "Fill in the article.",
          it: "Inserisci l'articolo.",
          bn: "সঠিক আর্টিকেল বসান।",
        },
        before: "Der Schlüssel liegt auf",
        after: "Kommode.",
        options: ["die", "der", "den"],
        answer: "der",
        explanation: {
          de: "»liegen« ist ein Zustandsverb → Dativ; »die Kommode« ist feminin, feminin Dativ ist der.",
          en: "'liegen' describes a state → Dativ; 'die Kommode' is feminine and the feminine Dativ is der.",
          it: "»liegen« descrive uno stato → Dativ; »die Kommode« è femminile e il femminile al Dativ è der.",
          bn: "»liegen« একটি অবস্থাবাচক ক্রিয়া → Dativ; »die Kommode« স্ত্রীলিঙ্গ, আর স্ত্রীলিঙ্গের Dativ হলো der।",
        },
      }),
      gap({
        id: "wp-med-2",
        difficulty: 2,
        tags: ["wechselpraeposition", "ueber-thema"],
        prompt: {
          de: "Ergänze den Artikel.",
          en: "Fill in the article.",
          it: "Inserisci l'articolo.",
          bn: "সঠিক আর্টিকেল বসান।",
        },
        before: "Ich möchte mich über",
        after: "Lärm beschweren.",
        options: ["der", "den", "dem"],
        answer: "den",
        explanation: {
          de: "Hier ist über ein Thema, kein Ort → immer Akkusativ; »der Lärm« ist maskulin → über den Lärm.",
          en: "Here über marks a topic, not a place → always Akkusativ; 'der Lärm' is masculine → über den Lärm.",
          it: "Qui über indica un argomento, non un luogo → sempre Akkusativ; »der Lärm« è maschile → über den Lärm.",
          bn: "এখানে über বিষয় বোঝাচ্ছে, স্থান নয় → সবসময় Akkusativ; »der Lärm« পুংলিঙ্গ → über den Lärm।",
        },
      }),
      mc({
        id: "wp-med-3",
        difficulty: 2,
        tags: ["wechselpraeposition", "verbpaar"],
        prompt: {
          de: "Welches Verb passt?",
          en: "Which verb fits?",
          it: "Quale verbo va bene?",
          bn: "কোন ক্রিয়াটি মানানসই?",
        },
        german: "Ich ___ die Flasche in den Kühlschrank.",
        options: ["stehe", "stelle", "stand", "steht"],
        answer: 1,
        explanation: {
          de: "»in den Kühlschrank« ist Akkusativ, also braucht es das aktive Verb stellen. stehen würde den Dativ verlangen.",
          en: "'in den Kühlschrank' is Akkusativ, so the active verb stellen is needed. stehen would require the Dativ.",
          it: "»in den Kühlschrank« è Akkusativ, quindi serve il verbo attivo stellen. stehen richiederebbe il Dativ.",
          bn: "»in den Kühlschrank« Akkusativ, তাই সক্রিয় ক্রিয়া stellen লাগবে। stehen হলে Dativ লাগত।",
        },
      }),
      gap({
        id: "wp-med-4",
        difficulty: 2,
        tags: ["wechselpraeposition", "zeitangabe-dativ"],
        prompt: {
          de: "Ergänze die kurze Form.",
          en: "Fill in the contracted form.",
          it: "Inserisci la forma contratta.",
          bn: "সংক্ষিপ্ত রূপটি বসান।",
        },
        before: "Der Kurs beginnt",
        after: "Montag um neun Uhr.",
        options: ["am", "im", "an die"],
        answer: "am",
        explanation: {
          de: "Zeitangabe mit an → Dativ; »der Montag« ist maskulin → an dem → am.",
          en: "A time expression with an → Dativ; 'der Montag' is masculine → an dem → am.",
          it: "Espressione di tempo con an → Dativ; »der Montag« è maschile → an dem → am.",
          bn: "an দিয়ে সময়-প্রকাশ → Dativ; »der Montag« পুংলিঙ্গ → an dem → am।",
        },
      }),
    ],

    hard: [
      mc({
        id: "wp-hard-1",
        difficulty: 3,
        tags: ["wechselpraeposition", "wechselpraeposition-dativ"],
        prompt: {
          de: "Welcher Satz bedeutet, dass jemand INNERHALB des Parks läuft?",
          en: "Which sentence means someone is running AROUND INSIDE the park?",
          it: "Quale frase significa che qualcuno corre DENTRO il parco?",
          bn: "কোন বাক্যটি বোঝায় যে কেউ পার্কের ভেতরে দৌড়াচ্ছে?",
        },
        options: [
          "Ich laufe in den Park.",
          "Ich laufe im Park.",
          "Ich laufe zu dem Park.",
          "Ich laufe an den Park.",
        ],
        answer: 1,
        explanation: {
          de: "»im Park« ist Dativ und beschreibt Bewegung ohne Ortswechsel. »in den Park« hieße, dass man von außen hineinläuft. Hier versagt die Regel »Bewegung = Akkusativ«.",
          en: "'im Park' is Dativ and describes movement without a change of place. 'in den Park' would mean running in from outside. This is where 'movement = Akkusativ' fails.",
          it: "»im Park« è Dativ e descrive movimento senza cambio di luogo. »in den Park« significherebbe entrarvi da fuori. Qui la regola »movimento = Akkusativ« fallisce.",
          bn: "»im Park« হলো Dativ এবং স্থান পরিবর্তন ছাড়া নড়াচড়া বোঝায়। »in den Park« মানে হতো বাইরে থেকে ভেতরে ঢোকা। এখানেই »নড়াচড়া = Akkusativ« নিয়মটি ব্যর্থ হয়।",
        },
      }),
      order({
        id: "wp-hard-2",
        difficulty: 3,
        tags: ["wechselpraeposition", "wortstellung"],
        prompt: {
          de: "Bilde einen korrekten Satz.",
          en: "Put the words into a correct sentence.",
          it: "Metti le parole in una frase corretta.",
          bn: "শব্দগুলো সাজিয়ে সঠিক বাক্য তৈরি করুন।",
        },
        words: ["Ich", "stelle", "die", "Blumen", "auf", "den", "Balkon"],
        answer: ["Ich", "stelle", "die", "Blumen", "auf", "den", "Balkon"],
        explanation: {
          de: "stellen ist das aktive Verb und verlangt hier »wohin?« → Akkusativ: auf den Balkon. Mit stehen wäre es auf dem Balkon.",
          en: "stellen is the active verb and asks 'wohin?' here → Akkusativ: auf den Balkon. With stehen it would be auf dem Balkon.",
          it: "stellen è il verbo attivo e qui chiede »wohin?« → Akkusativ: auf den Balkon. Con stehen sarebbe auf dem Balkon.",
          bn: "stellen সক্রিয় ক্রিয়া এবং এখানে »wohin?« চায় → Akkusativ: auf den Balkon। stehen হলে auf dem Balkon হতো।",
        },
      }),
      gap({
        id: "wp-hard-3",
        difficulty: 3,
        tags: ["wechselpraeposition", "wechselpraeposition-dativ"],
        prompt: {
          de: "Ergänze den Artikel.",
          en: "Fill in the article.",
          it: "Inserisci l'articolo.",
          bn: "সঠিক আর্টিকেল বসান।",
        },
        before: "Vor",
        after: "Haus stehen zwei Fahrräder.",
        options: ["das", "dem", "den"],
        answer: "dem",
        explanation: {
          de: "»stehen« beschreibt einen Zustand → wo? → Dativ; »das Haus« ist neutrum, neutrum Dativ ist dem.",
          en: "'stehen' describes a state → wo? → Dativ; 'das Haus' is neuter and the neuter Dativ is dem.",
          it: "»stehen« descrive uno stato → wo? → Dativ; »das Haus« è neutro e il neutro al Dativ è dem.",
          bn: "»stehen« একটি অবস্থা বোঝায় → wo? → Dativ; »das Haus« ক্লীবলিঙ্গ, আর ক্লীবলিঙ্গের Dativ হলো dem।",
        },
      }),
    ],
  },

  quickTest: [
    gap({
      id: "wp-test-1",
      difficulty: 2,
      tags: ["wechselpraeposition", "wechselpraeposition-akkusativ"],
      prompt: {
        de: "Ergänze den Artikel.",
        en: "Fill in the article.",
        it: "Inserisci l'articolo.",
        bn: "সঠিক আর্টিকেল বসান।",
      },
      before: "Am Samstag fahre ich in",
      after: "Stadt.",
      options: ["die", "der", "den"],
      answer: "die",
      explanation: {
        de: "Wohin? → Akkusativ; »die Stadt« ist feminin und ändert sich im Akkusativ nicht: in die Stadt.",
        en: "Wohin? → Akkusativ; 'die Stadt' is feminine and does not change in the Akkusativ: in die Stadt.",
        it: "Wohin? → Akkusativ; »die Stadt« è femminile e non cambia all'Akkusativ: in die Stadt.",
        bn: "Wohin? → Akkusativ; »die Stadt« স্ত্রীলিঙ্গ এবং Akkusativ-এ বদলায় না: in die Stadt।",
      },
    }),
    gap({
      id: "wp-test-2",
      difficulty: 2,
      tags: ["wechselpraeposition", "wechselpraeposition-dativ"],
      prompt: {
        de: "Ergänze den Artikel.",
        en: "Fill in the article.",
        it: "Inserisci l'articolo.",
        bn: "সঠিক আর্টিকেল বসান।",
      },
      before: "Ich warte vor",
      after: "Tür.",
      options: ["die", "der", "den"],
      answer: "der",
      explanation: {
        de: "»warten« ist kein Ortswechsel → wo? → Dativ; »die Tür« ist feminin → vor der Tür.",
        en: "'warten' involves no change of place → wo? → Dativ; 'die Tür' is feminine → vor der Tür.",
        it: "»warten« non comporta cambio di luogo → wo? → Dativ; »die Tür« è femminile → vor der Tür.",
        bn: "»warten«-এ স্থান পরিবর্তন নেই → wo? → Dativ; »die Tür« স্ত্রীলিঙ্গ → vor der Tür।",
      },
    }),
    mc({
      id: "wp-test-3",
      difficulty: 3,
      tags: ["wechselpraeposition"],
      prompt: {
        de: "Welcher Satz ist falsch?",
        en: "Which sentence is wrong?",
        it: "Quale frase è sbagliata?",
        bn: "কোন বাক্যটি ভুল?",
      },
      options: [
        "Das Auto steht vor dem Haus.",
        "Ich lege das Handy auf den Tisch.",
        "Wir sprechen über dem Wetter.",
        "Sie geht in die Küche.",
      ],
      answer: 2,
      explanation: {
        de: "Über als Thema verlangt immer den Akkusativ: über das Wetter. Die anderen drei Sätze sind korrekt.",
        en: "über meaning 'about' always takes the Akkusativ: über das Wetter. The other three sentences are correct.",
        it: "über nel senso di »riguardo a« regge sempre l'Akkusativ: über das Wetter. Le altre tre frasi sono corrette.",
        bn: "»সম্পর্কে« অর্থে über সবসময় Akkusativ নেয়: über das Wetter। বাকি তিনটি বাক্য ঠিক আছে।",
      },
    }),
    truefalse({
      id: "wp-test-4",
      difficulty: 3,
      tags: ["wechselpraeposition"],
      prompt: {
        de: "Richtig oder falsch?",
        en: "True or false?",
        it: "Vero o falso?",
        bn: "সত্য না মিথ্যা?",
      },
      statement: "Wenn im Satz eine Bewegung vorkommt, steht immer der Akkusativ.",
      answer: false,
      explanation: {
        de: "Falsch. Entscheidend ist der Ortswechsel, nicht die Bewegung: »Ich laufe im Park« ist Bewegung, aber Dativ, weil der Ort gleich bleibt.",
        en: "False. What matters is the change of place, not movement: 'Ich laufe im Park' is movement but Dativ, because the location stays the same.",
        it: "Falso. Conta il cambio di luogo, non il movimento: »Ich laufe im Park« è movimento ma Dativ, perché il luogo resta lo stesso.",
        bn: "মিথ্যা। মূল বিষয় স্থান পরিবর্তন, নড়াচড়া নয়: »Ich laufe im Park«-এ নড়াচড়া আছে, তবু Dativ, কারণ স্থান একই থাকে।",
      },
    }),
    gap({
      id: "wp-test-5",
      difficulty: 2,
      tags: ["wechselpraeposition", "zeitangabe-dativ"],
      prompt: {
        de: "Ergänze die kurze Form.",
        en: "Fill in the contracted form.",
        it: "Inserisci la forma contratta.",
        bn: "সংক্ষিপ্ত রূপটি বসান।",
      },
      before: "Ich mache",
      after: "Sommer Urlaub in Italien.",
      options: ["am", "im", "in den"],
      answer: "im",
      explanation: {
        de: "Zeitangabe mit in → Dativ; »der Sommer« ist maskulin → in dem → im Sommer.",
        en: "A time expression with in → Dativ; 'der Sommer' is masculine → in dem → im Sommer.",
        it: "Espressione di tempo con in → Dativ; »der Sommer« è maschile → in dem → im Sommer.",
        bn: "in দিয়ে সময়-প্রকাশ → Dativ; »der Sommer« পুংলিঙ্গ → in dem → im Sommer।",
      },
    }),
    mc({
      id: "wp-test-6",
      difficulty: 3,
      tags: ["wechselpraeposition", "verbpaar"],
      prompt: {
        de: "Welche Ergänzung ist richtig?",
        en: "Which completion is correct?",
        it: "Quale completamento è corretto?",
        bn: "কোন পূরণটি সঠিক?",
      },
      german: "Das Bild hängt ___ .",
      options: ["an die Wand", "an der Wand", "an den Wand", "auf die Wand"],
      answer: 1,
      explanation: {
        de: "»hängen« im Sinne von »sich befinden« ist ein Zustand → Dativ; »die Wand« ist feminin → an der Wand.",
        en: "'hängen' in the sense of 'to be located' describes a state → Dativ; 'die Wand' is feminine → an der Wand.",
        it: "»hängen« nel senso di »trovarsi« descrive uno stato → Dativ; »die Wand« è femminile → an der Wand.",
        bn: "»অবস্থান করা« অর্থে »hängen« একটি অবস্থা বোঝায় → Dativ; »die Wand« স্ত্রীলিঙ্গ → an der Wand।",
      },
    }),
  ],
};
