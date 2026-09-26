import type { SbSet } from "./types";

/**
 * SB-08 — Ein Aushang im Treppenhaus (Teil 1) und die Hausordnung eines
 * Vermieters (Teil 2).
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Teil 1 is the reflexive-and-dative set. Living with other people is
 * where German makes you choose a case constantly — sich vorstellen, sich
 * freuen, jemandem Bescheid sagen, bei jemandem klingeln — and gaps 2, 5
 * and 9 each turn on which person the verb actually governs.
 *
 * Teil 2 is written in the register of a real Hausordnung: impersonal,
 * passive, and fond of nouns where English would use a verb. Three of the
 * five unused bank words are the verbs those nouns replace, so choosing
 * by meaning alone is not enough.
 */
export const sb08: SbSet = {
  code: "SB-08",

  title: {
    de: "Aushang im Treppenhaus und eine Hausordnung",
    en: "A notice in the stairwell and a set of house rules",
    it: "Un avviso nella tromba delle scale e un regolamento",
    bn: "সিঁড়িঘরের নোটিশ ও একটি বাড়ির নিয়মাবলি",
  },

  intro: {
    de: "Erst ein freundlicher Aushang an die Nachbarn, dann eine förmliche Hausordnung. Achte darauf, wie derselbe Inhalt zweimal ganz anders klingt.",
    en: "First a friendly notice to the neighbours, then formal house rules. Notice how the same content sounds completely different twice over.",
    it: "Prima un avviso amichevole ai vicini, poi un regolamento formale. Osserva come lo stesso contenuto suoni in due modi diversi.",
    bn: "প্রথমে প্রতিবেশীদের জন্য বন্ধুত্বপূর্ণ নোটিশ, তারপর আনুষ্ঠানিক নিয়মাবলি। খেয়াল করুন একই বিষয় দুবার কত আলাদা শোনায়।",
  },

  /* ================================================================== */
  teil1: {
    heading: "Aushang im Treppenhaus",

    text: `Liebe Nachbarinnen und Nachbarn,

wir sind vor zwei Monaten in die Wohnung im zweiten Stock {1}. Viele von Ihnen haben wir schon kurz im Flur gesehen, aber richtig {2} haben wir uns noch nicht.

Am Samstag, dem achtzehnten, werden wir das nachholen: Wir feiern unseren Einzug und laden Sie {3} ein. Es gibt Kuchen und Getränke, kommen Sie einfach vorbei — {4} zwischen fünfzehn und zwanzig Uhr.

Es kann sein, dass es am Abend etwas lauter {5} als sonst. Ab zweiundzwanzig Uhr schließen wir die Fenster, und um Mitternacht ist Schluss. Falls Sie trotzdem etwas stört, {6} Sie bitte einfach bei uns. Unsere Handynummer steht unten.

Wenn Sie am Samstag keine Zeit haben, ist das natürlich kein Problem. Wir {7} uns auch über ein Gespräch im Treppenhaus.

Eine Bitte haben wir noch: Der Kinderwagen im Flur gehört uns. Wenn er im Weg steht, geben Sie {8} bitte Bescheid — wir stellen ihn dann woanders hin.

Wir freuen uns darauf, Sie alle {9} kennenzulernen.

Viele Grüße
Familie Islam, zweiter {10}`,

    items: [
      {
        nr: 1,
        options: ["gezogen", "eingezogen", "umgezogen"],
        answerIndex: 1,
        tag: "wortschatz-verb",
        why: {
          de: "»in eine Wohnung einziehen« — man zieht EIN, wenn man neu in eine Wohnung kommt. »umziehen« heißt: die Wohnung wechseln, und »ziehen« allein bräuchte ein Ziel mit »nach«. Die drei sehen ähnlich aus und bedeuten drei verschiedene Bewegungen.",
          en: "'in eine Wohnung einziehen' — you move IN when you arrive in a new flat. 'umziehen' means to change flats, and plain 'ziehen' would need a destination with 'nach'. The three look alike and describe three different movements.",
          it: "»einziehen« = entrare in una nuova casa; »umziehen« = traslocare; »ziehen« da solo richiede »nach«.",
          bn: "»einziehen« মানে নতুন বাসায় ওঠা; »umziehen« মানে বাসা বদলানো; একা »ziehen«-এর সঙ্গে »nach« লাগত। তিনটি দেখতে একরকম, অর্থ তিনরকম।",
        },
      },
      {
        nr: 2,
        options: ["vorstellen", "uns vorgestellt", "vorgestellt"],
        answerIndex: 2,
        tag: "perfekt-reflexiv",
        why: {
          de: "»richtig vorgestellt haben wir uns noch nicht« — das »uns« steht schon hinter »haben«, also darf es nicht noch einmal in die Lücke. Gebraucht wird nur das Partizip. Lies bei reflexiven Verben immer den ganzen Satz: Das Reflexivpronomen steht oft weit vom Verb entfernt.",
          en: "'richtig vorgestellt haben wir uns noch nicht' — the 'uns' already sits after 'haben', so it must not appear again in the gap. Only the participle is needed. With reflexive verbs always read the whole sentence: the pronoun often sits far from the verb.",
          it: "L'»uns« è già dopo »haben«, quindi non va ripetuto nel buco: serve solo il participio.",
          bn: "»uns« ইতিমধ্যেই »haben«-এর পরে আছে, তাই ফাঁকে আবার বসবে না — কেবল participle দরকার। আত্মবাচক ক্রিয়ায় পুরো বাক্য পড়ুন।",
        },
      },
      {
        nr: 3,
        options: ["herzlich", "herzliche", "herzlichen"],
        answerIndex: 0,
        tag: "adjektiv-adverb",
        why: {
          de: "»laden Sie herzlich ein« — hier beschreibt das Wort nicht ein Nomen, sondern das Verb einladen: WIE laden wir ein? Herzlich. Ein Adverb bekommt im Deutschen nie eine Endung. Endungen gäbe es nur vor einem Nomen: eine herzliche Einladung.",
          en: "'laden Sie herzlich ein' — the word describes the verb einladen, not a noun: HOW do we invite? Warmly. A German adverb never takes an ending. Endings appear only before a noun: eine herzliche Einladung.",
          it: "Qui la parola descrive il verbo, non un sostantivo: un avverbio in tedesco non prende mai desinenza.",
          bn: "এখানে শব্দটি বিশেষ্য নয়, ক্রিয়াকে বর্ণনা করে: কীভাবে নিমন্ত্রণ? আন্তরিকভাবে। জার্মানে ক্রিয়াবিশেষণে কখনো প্রত্যয় বসে না।",
        },
      },
      {
        nr: 4,
        options: ["irgendwo", "irgendwie", "irgendwann"],
        answerIndex: 2,
        tag: "wortschatz-adverb",
        why: {
          de: "»irgendwann zwischen fünfzehn und zwanzig Uhr« — es geht um eine ZEIT, also irgendwann. Merke dir die Familie: irgendwo (Ort), irgendwann (Zeit), irgendwie (Art und Weise). Die Angabe hinter der Lücke verrät dir immer, welches gemeint ist.",
          en: "'irgendwann zwischen fünfzehn und zwanzig Uhr' — this is about a TIME, so irgendwann. Learn the family: irgendwo (place), irgendwann (time), irgendwie (manner). What follows the gap always tells you which is meant.",
          it: "Si tratta di un orario, quindi »irgendwann«. La famiglia: irgendwo (luogo), irgendwann (tempo), irgendwie (modo).",
          bn: "এটি সময়ের কথা, তাই »irgendwann«। পরিবারটি মনে রাখুন: irgendwo (স্থান), irgendwann (সময়), irgendwie (উপায়)।",
        },
      },
      {
        nr: 5,
        options: ["ist", "wird", "war"],
        answerIndex: 1,
        tag: "verbform-werden",
        why: {
          de: "»dass es am Abend etwas lauter wird« — »lauter werden« beschreibt eine Veränderung, »lauter sein« einen Zustand. Der ganze Satz spricht über Samstag, also über etwas, das noch kommt: Da passt nur werden. »war« wäre Vergangenheit.",
          en: "'dass es am Abend etwas lauter wird' — 'lauter werden' describes a change, 'lauter sein' a state. The sentence is about Saturday, something still to come: only werden fits. 'war' would be past.",
          it: "»lauter werden« indica un cambiamento, »sein« uno stato. La frase parla di sabato, quindi del futuro.",
          bn: "»lauter werden« পরিবর্তন বোঝায়, »sein« অবস্থা। বাক্যটি শনিবারের কথা বলছে, অর্থাৎ যা এখনো আসেনি।",
        },
      },
      {
        nr: 6,
        options: ["klingeln", "rufen", "sagen"],
        answerIndex: 0,
        tag: "wortschatz-verb",
        why: {
          de: "»klingeln Sie bitte einfach bei uns« — bei jemandem klingeln heißt: an seiner Tür läuten. »rufen« bräuchte »an« (anrufen), und »sagen« bräuchte ein Objekt. Das »bei uns« nach der Lücke ist der Hinweis: Nur klingeln verbindet sich so.",
          en: "'klingeln Sie bitte einfach bei uns' — bei jemandem klingeln means to ring at their door. 'rufen' would need 'an' (anrufen), and 'sagen' would need an object. The 'bei uns' after the gap is the clue: only klingeln pairs that way.",
          it: "»bei jemandem klingeln« = suonare alla porta. Il »bei uns« dopo il buco è l'indizio.",
          bn: "»bei jemandem klingeln« মানে কারও দরজায় বেল বাজানো। ফাঁকের পরের »bei uns«-ই সংকেত।",
        },
      },
      {
        nr: 7,
        options: ["freut", "gefreut", "freuen"],
        answerIndex: 2,
        tag: "verbform-reflexiv",
        why: {
          de: "»Wir freuen uns auch über ein Gespräch« — zu »wir« gehört die Endung -en, und das »uns« dahinter zeigt, dass ein reflexives Verb gesucht ist. Achte auf das kleine »über«: sich freuen ÜBER etwas (jetzt) gegenüber sich freuen AUF etwas (später).",
          en: "'Wir freuen uns auch über ein Gespräch' — 'wir' takes the ending -en, and the 'uns' after it shows a reflexive verb is wanted. Note the little 'über': sich freuen ÜBER something (now) versus sich freuen AUF something (later).",
          it: "Con »wir« la desinenza è -en, e l'»uns« segnala il riflessivo. Attenzione: freuen ÜBER (ora) vs. AUF (dopo).",
          bn: "»wir«-এর সঙ্গে -en প্রত্যয়, আর পরের »uns« আত্মবাচক ক্রিয়ার ইঙ্গিত। ছোট্ট »über« খেয়াল করুন: এখনকার জন্য ÜBER, পরের জন্য AUF।",
        },
      },
      {
        nr: 8,
        options: ["uns", "wir", "unsere"],
        answerIndex: 0,
        tag: "kasus-dativ",
        why: {
          de: "»geben Sie uns bitte Bescheid« — geben hat zwei Objekte: WEM (Dativ) und WAS (Akkusativ). Bescheid ist das Was, wir sind das Wem, also »uns«. »wir« wäre Nominativ und kann nie Objekt sein. Merke: Bei geben, schicken, sagen, zeigen steht die Person immer im Dativ.",
          en: "'geben Sie uns bitte Bescheid' — geben takes two objects: to WHOM (dative) and WHAT (accusative). Bescheid is the what, we are the whom, so 'uns'. 'wir' is nominative and can never be an object. Remember: with geben, schicken, sagen, zeigen the person is always dative.",
          it: "»geben« regge due oggetti: a CHI (dativo) e CHE COSA (accusativo). »wir« è nominativo e non può essere oggetto.",
          bn: "»geben«-এর দুটি object: কাকে (Dativ) আর কী (Akkusativ)। Bescheid হলো কী, আমরা হলাম কাকে — তাই »uns«। »wir« Nominativ, object হতে পারে না।",
        },
      },
      {
        nr: 9,
        options: ["besser", "näher", "mehr"],
        answerIndex: 1,
        tag: "wortschatz-adverb",
        why: {
          de: "»Sie alle näher kennenzulernen« — jemanden näher kennenlernen ist die übliche Verbindung: ihn besser, genauer kennenlernen. »besser« wäre nicht falsch, aber »näher kennenlernen« ist die Wendung, die im Deutschen dafür steht.",
          en: "'Sie alle näher kennenzulernen' — jemanden näher kennenlernen is the usual pairing: to get to know someone better. 'besser' is not wrong, but 'näher kennenlernen' is the phrase German uses for this.",
          it: "»jemanden näher kennenlernen« è la combinazione abituale.",
          bn: "»jemanden näher kennenlernen« প্রচলিত যোগ: কাউকে আরও ভালোভাবে চেনা।",
        },
      },
      {
        nr: 10,
        options: ["Etage", "Boden", "Stock"],
        answerIndex: 2,
        tag: "wortschatz-nomen",
        why: {
          de: "»Familie Islam, zweiter Stock« — der Stock und die Etage bedeuten dasselbe, aber »zweiter« ist männlich und passt deshalb nur zu »Stock« (die Etage wäre »zweite Etage«). »Boden« ist der Fußboden oder der Dachboden, etwas ganz anderes. Die Endung des Adjektivs entscheidet, nicht die Bedeutung.",
          en: "'Familie Islam, zweiter Stock' — Stock and Etage mean the same, but 'zweiter' is masculine and so fits only 'Stock' (Etage would be 'zweite Etage'). 'Boden' is the floor or the attic, something else entirely. The adjective ending decides, not the meaning.",
          it: "»Stock« ed »Etage« sono sinonimi, ma »zweiter« è maschile e vale solo per »Stock«. La desinenza decide.",
          bn: "»Stock« ও »Etage« একই অর্থ, কিন্তু »zweiter« পুংলিঙ্গ, তাই কেবল »Stock«-এর সঙ্গে যায়। বিশেষণের প্রত্যয়ই ঠিক করে, অর্থ নয়।",
        },
      },
    ],
  },

  /* ================================================================== */
  teil2: {
    heading: "Hausordnung – Auszug",

    text: `Sehr geehrte Mieterinnen und Mieter,

die folgende Hausordnung ist Bestandteil Ihres {11}. Wir bitten um Ihr Verständnis und um {12}.

Ruhezeiten: Von zweiundzwanzig bis sechs Uhr sowie an Sonn- und Feiertagen ist auf {13} zu achten. Das bedeutet nicht Stille, sondern nur, dass Geräusche in der Nachbarwohnung nicht deutlich {14} sein sollen.

Treppenhaus: Flure und Treppen sind {15} und müssen frei bleiben. Das Abstellen von Möbeln und Fahrrädern ist deshalb nicht {16}. Ein Kinderwagen darf stehen, wenn genügend Platz bleibt.

Reinigung: Die {17} des Treppenhauses erfolgt nach dem Plan, der im Erdgeschoss aushängt. Sind Sie verhindert, {18} Sie sich bitte rechtzeitig mit einem Nachbarn ab.

Müll: Bitte beachten Sie die {19} in Papier, Verpackung und Restmüll. Falsch befüllte Tonnen werden nicht geleert.

Bei Fragen wenden Sie sich an die Hausverwaltung. Wir danken Ihnen für Ihre {20}.`,

    bank: [
      { key: "a", word: "Rücksicht" },
      { key: "b", word: "Fluchtwege" },
      { key: "c", word: "Mitarbeit" },
      { key: "d", word: "Mietvertrags" },
      { key: "e", word: "hören" },
      { key: "f", word: "Zimmerlautstärke" },
      { key: "g", word: "Mülltrennung" },
      { key: "h", word: "reinigen" },
      { key: "i", word: "erlaubt" },
      { key: "j", word: "sprechen" },
      { key: "k", word: "Reinigung" },
      { key: "l", word: "Wohnung" },
      { key: "m", word: "hörbar" },
      { key: "n", word: "stimmen" },
      { key: "o", word: "Keller" },
    ],

    items: [
      {
        nr: 11,
        answerKey: "d",
        tag: "wortschatz-nomen",
        why: {
          de: "»Bestandteil Ihres Mietvertrags« — nach »Ihres« steht ein Genitiv, und die Endung -s zeigt männlich oder sächlich. »Wohnung« (l) ist weiblich und hieße »Ihrer Wohnung«. Die Endung entscheidet, bevor du über die Bedeutung nachdenkst.",
          en: "'Bestandteil Ihres Mietvertrags' — after 'Ihres' comes a genitive, and the -s ending marks masculine or neuter. 'Wohnung' (l) is feminine and would need 'Ihrer Wohnung'. The ending decides before you think about meaning.",
          it: "Dopo »Ihres« serve un genitivo maschile o neutro; »Wohnung« (l) è femminile.",
          bn: "»Ihres«-এর পরে Genitiv, আর -s প্রত্যয় পুংলিঙ্গ বা ক্লীবলিঙ্গ বোঝায়। »Wohnung« (l) স্ত্রীলিঙ্গ।",
        },
      },
      {
        nr: 12,
        answerKey: "a",
        tag: "wortschatz-nomen",
        why: {
          de: "»Wir bitten um Ihr Verständnis und um Rücksicht« — Rücksicht nehmen heißt: an die anderen denken. Das Wort passt zum ganzen Thema und steht hier parallel zu »Verständnis«, also wieder ein Nomen nach »um«.",
          en: "'Wir bitten um Ihr Verständnis und um Rücksicht' — Rücksicht nehmen means considering others. It matches the whole topic and stands parallel to 'Verständnis', so another noun after 'um'.",
          it: "»Rücksicht« = riguardo verso gli altri; sta in parallelo a »Verständnis«, quindi un sostantivo dopo »um«.",
          bn: "»Rücksicht« মানে অন্যদের কথা ভাবা। এটি »Verständnis«-এর সমান্তরালে, তাই »um«-এর পরে আরেকটি বিশেষ্য।",
        },
      },
      {
        nr: 13,
        answerKey: "f",
        tag: "wortschatz-nomen",
        why: {
          de: "»ist auf Zimmerlautstärke zu achten« — genau der Begriff, den der Lesetext dieses Modelltests erklärt: so leise, dass man es nebenan nicht deutlich hört. Der nächste Satz definiert ihn sogar.",
          en: "'ist auf Zimmerlautstärke zu achten' — precisely the term the reading text of this mock exam explains: quiet enough not to be clearly heard next door. The next sentence even defines it.",
          it: "»Zimmerlautstärke« è il termine spiegato nel testo di lettura di questa prova.",
          bn: "»Zimmerlautstärke« — এই মডেল টেস্টের পাঠ্যেই ব্যাখ্যা করা শব্দ। পরের বাক্যটি তো সংজ্ঞাই দেয়।",
        },
      },
      {
        nr: 14,
        answerKey: "m",
        tag: "wortschatz-adjektiv",
        why: {
          de: "»nicht deutlich hörbar sein sollen« — nach »sein« steht ein Adjektiv, nicht ein Verb. »hören« (e) ist der Infinitiv und passt nicht hinter »deutlich«. Das Suffix -bar heißt wieder: man kann es tun — hörbar = man kann es hören.",
          en: "'nicht deutlich hörbar sein sollen' — after 'sein' comes an adjective, not a verb. 'hören' (e) is the infinitive and cannot follow 'deutlich'. The -bar suffix again means it can be done: hörbar = able to be heard.",
          it: "Dopo »sein« serve un aggettivo. Il suffisso -bar: udibile.",
          bn: "»sein«-এর পরে বিশেষণ, ক্রিয়া নয়। -bar প্রত্যয় আবারও: শোনা যায় এমন।",
        },
      },
      {
        nr: 15,
        answerKey: "b",
        tag: "wortschatz-nomen",
        why: {
          de: "»Flure und Treppen sind Fluchtwege« — ein Fluchtweg ist der Weg, über den man bei einem Brand hinauskommt. Das erklärt auch den nächsten Satz: Deshalb dürfen dort keine Möbel stehen. Das Subjekt ist Plural, deshalb »sind«.",
          en: "'Flure und Treppen sind Fluchtwege' — an escape route is how you get out in a fire. That also explains the next sentence: hence no furniture there. The subject is plural, hence 'sind'.",
          it: "Una »Fluchtweg« è la via d'uscita in caso d'incendio: spiega perché non si possono lasciare mobili.",
          bn: "»Fluchtweg« মানে আগুন লাগলে বেরোনোর পথ। পরের বাক্যের কারণও এটাই।",
        },
      },
      {
        nr: 16,
        answerKey: "i",
        tag: "wortschatz-adjektiv",
        why: {
          de: "»ist deshalb nicht erlaubt« — nach »ist« ein Adjektiv ohne Endung. Das Subjekt ist »Das Abstellen«, ein Nomen aus einem Verb; darum steht das Verb im Singular.",
          en: "'ist deshalb nicht erlaubt' — an uninflected adjective after 'ist'. The subject is 'Das Abstellen', a noun made from a verb, which is why the verb is singular.",
          it: "Dopo »ist« un aggettivo senza desinenza. Il soggetto »Das Abstellen« è singolare.",
          bn: "»ist«-এর পরে প্রত্যয়হীন বিশেষণ। কর্তা »Das Abstellen« একবচন।",
        },
      },
      {
        nr: 17,
        answerKey: "k",
        tag: "wortschatz-nomen",
        why: {
          de: "»Die Reinigung des Treppenhauses erfolgt …« — »Die« verlangt ein Nomen, und »reinigen« (h) ist das Verb dazu. Genau dieses Paar prüft die Aufgabe: Amtsdeutsch nimmt fast immer das Nomen, wo man im Gespräch das Verb sagen würde.",
          en: "'Die Reinigung des Treppenhauses erfolgt …' — 'Die' requires a noun, and 'reinigen' (h) is its verb. That pair is exactly what this item tests: official German almost always takes the noun where speech would use the verb.",
          it: "»Die« richiede un sostantivo; »reinigen« (h) è il verbo. Il burocratese preferisce il sostantivo.",
          bn: "»Die« বিশেষ্য চায়, আর »reinigen« (h) তার ক্রিয়া। সরকারি জার্মান প্রায় সবসময় বিশেষ্যই বেছে নেয়।",
        },
      },
      {
        nr: 18,
        answerKey: "j",
        tag: "wortschatz-verb",
        why: {
          de: "»sprechen Sie sich bitte rechtzeitig mit einem Nachbarn ab« — das trennbare Verb absprechen: der Stamm vorn, die Vorsilbe »ab« am Satzende. Das »ab« hinten und das »sich« davor sind zusammen der Hinweis.",
          en: "'sprechen Sie sich bitte rechtzeitig mit einem Nachbarn ab' — the separable verb absprechen: stem first, prefix 'ab' at the end. The 'ab' at the end and the 'sich' before it are the clue together.",
          it: "»absprechen« è separabile: radice davanti, »ab« in fondo. L'»ab« finale e il »sich« sono l'indizio.",
          bn: "»absprechen« বিচ্ছেদযোগ্য: মূল অংশ আগে, »ab« শেষে। শেষের »ab« আর আগের »sich« একসঙ্গেই সংকেত।",
        },
      },
      {
        nr: 19,
        answerKey: "g",
        tag: "wortschatz-nomen",
        why: {
          de: "»beachten Sie die Mülltrennung in Papier, Verpackung und Restmüll« — Müll + Trennung: das Trennen des Mülls. Die drei Sorten hinter der Lücke zeigen, worum es geht, noch bevor man das Wort kennt.",
          en: "'beachten Sie die Mülltrennung in Papier, Verpackung und Restmüll' — Müll + Trennung: the separating of rubbish. The three categories after the gap show what is meant before you even know the word.",
          it: "Müll + Trennung: la separazione dei rifiuti. Le tre categorie dopo il buco lo rivelano.",
          bn: "Müll + Trennung: আবর্জনা আলাদা করা। ফাঁকের পরের তিনটি ভাগই বুঝিয়ে দেয়।",
        },
      },
      {
        nr: 20,
        answerKey: "c",
        tag: "wortschatz-nomen",
        why: {
          de: "»Wir danken Ihnen für Ihre Mitarbeit.« — Mitarbeit heißt hier: dass alle mitmachen. Nach »Ihre« steht ein weibliches Nomen, und der Satz ist die übliche Schlussformel eines solchen Aushangs.",
          en: "'Wir danken Ihnen für Ihre Mitarbeit.' — Mitarbeit here means everyone playing their part. After 'Ihre' comes a feminine noun, and the sentence is the usual closing formula of such a notice.",
          it: "»Mitarbeit« = la collaborazione di tutti. Dopo »Ihre« un sostantivo femminile.",
          bn: "»Mitarbeit« মানে সবার সহযোগিতা। »Ihre«-এর পরে স্ত্রীলিঙ্গ বিশেষ্য।",
        },
      },
    ],
  },
};
