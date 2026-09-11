import type { SchreibenTask } from "./types";

export const tasksA: SchreibenTask[] = [
  /* ------------------------------------------------------------------ */
  {
    code: "SCH-01",
    category: "einladung",
    register: "informell",
    situation: {
      en: "Your friend Lena has just moved into a new flat in your city. You want to invite her to a small welcome dinner at your place on Saturday.",
      it: "La tua amica Lena si è appena trasferita in un nuovo appartamento nella tua città. Vuoi invitarla a una piccola cena di benvenuto da te sabato.",
      bn: "আপনার বন্ধু লেনা সবেমাত্র আপনার শহরে নতুন একটি ফ্ল্যাটে উঠেছে। আপনি তাকে শনিবার আপনার বাসায় ছোট একটি স্বাগত-নৈশভোজে আমন্ত্রণ জানাতে চান।",
    },
    taskDe:
      "Ihre Freundin Lena ist gerade in Ihre Stadt gezogen. Sie möchten sie am Samstag zu einem kleinen Abendessen einladen. Schreiben Sie eine E-Mail an Lena.",
    leitpunkte: [
      "Warum schreiben Sie? — laden Sie Lena ein",
      "Wann und wo findet das Essen statt?",
      "Wen haben Sie noch eingeladen?",
      "Fragen Sie, ob sie etwas nicht essen darf",
    ],
    anrede: "Liebe Lena,",
    gruss: "Liebe Grüße\nDein/e …",
    usefulPhrases: [
      {
        de: "Ich freue mich sehr, dass du jetzt hier wohnst.",
        note: {
          en: "Warm opening — shows the letter is friendly, not just functional.",
          it: "Apertura calorosa: mostra che la lettera è amichevole, non solo funzionale.",
          bn: "উষ্ণ শুরু — চিঠিটা যে শুধু কাজের নয়, বন্ধুত্বপূর্ণ, তা বোঝায়।",
        },
      },
      {
        de: "Ich möchte dich gern zu … einladen.",
        note: {
          en: "The standard invitation phrase. einladen zu + Dativ.",
          it: "La frase standard per invitare. einladen zu + dativo.",
          bn: "আমন্ত্রণের প্রচলিত বাক্য। einladen zu + Dativ।",
        },
      },
      {
        de: "Hast du am Samstag um 19 Uhr Zeit?",
        note: {
          en: "Zeit haben, not 'frei sein', is what Germans actually say.",
          it: "I tedeschi dicono Zeit haben, non «frei sein».",
          bn: "জার্মানরা 'frei sein' নয়, Zeit haben বলে।",
        },
      },
      {
        de: "Sag mir bitte Bescheid, ob du kommen kannst.",
        note: {
          en: "Bescheid sagen = to let someone know. Very common, sounds natural.",
          it: "Bescheid sagen = far sapere. Molto comune, suona naturale.",
          bn: "Bescheid sagen = জানানো। খুব প্রচলিত, স্বাভাবিক শোনায়।",
        },
      },
      {
        de: "Gibt es etwas, das du nicht isst?",
        note: {
          en: "A relative clause with das — a B1 structure that earns marks.",
          it: "Una relativa con das: una struttura B1 che porta punti.",
          bn: "das দিয়ে একটি রিলেটিভ ক্লজ — B1 স্তরের গঠন, নম্বর আনে।",
        },
      },
    ],
    targetWords: 150,
    modelAnswerDe: `Liebe Lena,

ich freue mich sehr, dass du jetzt auch hier in der Stadt wohnst! Weil du gerade erst umgezogen bist, möchte ich dich gern zu einem kleinen Abendessen bei mir einladen.

Das Essen findet am Samstag um 19 Uhr bei mir zu Hause statt, in der Bergstraße 14. Von der Haltestelle Marktplatz sind es nur fünf Minuten zu Fuß.

Ich habe auch Tim und Sara eingeladen, weil du die beiden ja schon vom Deutschkurs kennst. So bist du nicht allein unter Fremden, und wir können in Ruhe reden.

Sag mir bitte noch Bescheid, ob es etwas gibt, das du nicht isst. Ich koche nämlich gern etwas Vegetarisches, aber ich möchte vorher sicher sein.

Ich hoffe, du hast Zeit. Melde dich einfach kurz.

Liebe Grüße
Mahdin`,
    modelNotes: {
      en: "All four Leitpunkte are covered in order, one per paragraph. Notice the connectors doing real work: weil, so, nämlich, aber. It also uses du consistently — mixing du and Sie in one letter is a classic register mistake.",
      it: "Tutti e quattro i Leitpunkte sono trattati in ordine, uno per paragrafo. Nota i connettivi che fanno un lavoro vero: weil, so, nämlich, aber. Usa sempre du: mescolare du e Sie nella stessa lettera è un errore classico di registro.",
      bn: "চারটি Leitpunkt-ই ক্রম অনুযায়ী এসেছে, প্রতিটি অনুচ্ছেদে একটি করে। খেয়াল করুন সংযোজকগুলো সত্যিকারের কাজ করছে: weil, so, nämlich, aber। পুরো চিঠিতে du ব্যবহার করা হয়েছে — একই চিঠিতে du আর Sie মেশানো রেজিস্টারের চিরাচরিত ভুল।",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    code: "SCH-02",
    category: "beschwerde",
    register: "formell",
    situation: {
      en: "You bought a washing machine from Elektro Wagner two weeks ago. It was delivered late and it makes a loud noise. You are writing a complaint.",
      it: "Due settimane fa hai comprato una lavatrice da Elektro Wagner. È stata consegnata in ritardo e fa molto rumore. Scrivi un reclamo.",
      bn: "দুই সপ্তাহ আগে আপনি Elektro Wagner থেকে একটি ওয়াশিং মেশিন কিনেছেন। সেটি দেরিতে পৌঁছেছে এবং জোরে শব্দ করে। আপনি অভিযোগ লিখছেন।",
    },
    taskDe:
      "Sie haben vor zwei Wochen bei Elektro Wagner eine Waschmaschine gekauft. Es gibt Probleme. Schreiben Sie einen Beschwerdebrief an die Firma.",
    leitpunkte: [
      "Was haben Sie wann gekauft?",
      "Beschreiben Sie das Problem genau",
      "Was haben Sie schon versucht?",
      "Was erwarten Sie von der Firma? Nennen Sie eine Frist",
    ],
    anrede: "Sehr geehrte Damen und Herren,",
    gruss: "Mit freundlichen Grüßen\n…",
    usefulPhrases: [
      {
        de: "am 3. September habe ich bei Ihnen eine Waschmaschine gekauft.",
        note: {
          en: "A formal German letter starts lowercase after the comma of the Anrede. This trips up almost everyone.",
          it: "Una lettera formale tedesca continua in minuscolo dopo la virgola dell'Anrede. Quasi tutti ci cascano.",
          bn: "জার্মান আনুষ্ঠানিক চিঠিতে Anrede-র কমার পর ছোট হাতের অক্ষরে শুরু হয়। প্রায় সবাই এখানে ভুল করে।",
        },
      },
      {
        de: "Leider muss ich Ihnen mitteilen, dass …",
        note: {
          en: "The standard polite way to open a complaint. dass sends the verb to the end.",
          it: "Il modo educato standard per aprire un reclamo. dass manda il verbo in fondo.",
          bn: "অভিযোগ শুরুর প্রচলিত ভদ্র উপায়। dass ক্রিয়াপদকে বাক্যের শেষে পাঠায়।",
        },
      },
      {
        de: "Ich habe bereits mehrmals versucht, Sie telefonisch zu erreichen.",
        note: {
          en: "Infinitive with zu after versuchen — a B1 structure examiners look for.",
          it: "Infinito con zu dopo versuchen: una struttura B1 che gli esaminatori cercano.",
          bn: "versuchen-এর পরে zu সহ infinitive — পরীক্ষকরা এই B1 গঠনটি খোঁজেন।",
        },
      },
      {
        de: "Ich bitte Sie, das Gerät bis zum 30. September zu reparieren.",
        note: {
          en: "Naming a deadline is Leitpunkt 4. Vague complaints lose the point.",
          it: "Indicare una scadenza è il Leitpunkt 4. I reclami vaghi perdono il punto.",
          bn: "একটি সময়সীমা বলা চতুর্থ Leitpunkt। অস্পষ্ট অভিযোগে এই নম্বর হারায়।",
        },
      },
      {
        de: "Andernfalls möchte ich vom Kaufvertrag zurücktreten.",
        note: {
          en: "A firm but polite consequence. andernfalls = otherwise.",
          it: "Una conseguenza ferma ma educata. andernfalls = altrimenti.",
          bn: "দৃঢ় কিন্তু ভদ্র পরিণতি। andernfalls = নাহলে।",
        },
      },
    ],
    targetWords: 150,
    modelAnswerDe: `Sehr geehrte Damen und Herren,

am 3. September habe ich in Ihrem Geschäft eine Waschmaschine der Marke Bosch gekauft (Rechnungsnummer 2847). Die Lieferung war für den 8. September vereinbart.

Leider muss ich Ihnen mitteilen, dass es zwei Probleme gibt. Erstens wurde die Maschine erst am 15. September geliefert, also eine Woche später als versprochen. Zweitens macht sie beim Waschen ein sehr lautes Geräusch, sodass man im Nebenzimmer nicht mehr fernsehen kann.

Ich habe bereits dreimal versucht, Sie telefonisch zu erreichen, aber es hat sich niemand gemeldet. Auch auf meine E-Mail vom 18. September habe ich keine Antwort bekommen.

Deshalb bitte ich Sie, das Gerät bis zum 30. September zu reparieren oder auszutauschen. Andernfalls möchte ich vom Kaufvertrag zurücktreten.

Über eine schnelle Antwort würde ich mich freuen.

Mit freundlichen Grüßen
Mahdin Islam`,
    modelNotes: {
      en: "Formal register held throughout: Sie, Mit freundlichen Grüßen, and lowercase after the Anrede comma. Erstens / Zweitens separates the two problems so the examiner can see both. Note sodass introducing a consequence and the Konjunktiv II 'würde mich freuen' at the end — both are B1 markers.",
      it: "Registro formale mantenuto ovunque: Sie, Mit freundlichen Grüßen e minuscola dopo la virgola dell'Anrede. Erstens / Zweitens separa i due problemi. Nota sodass per la conseguenza e il Konjunktiv II «würde mich freuen» in chiusura: entrambi sono marcatori B1.",
      bn: "পুরো চিঠিতে আনুষ্ঠানিক রেজিস্টার ধরে রাখা হয়েছে: Sie, Mit freundlichen Grüßen, আর Anrede-র কমার পরে ছোট হাতের অক্ষর। Erstens / Zweitens দুটি সমস্যা আলাদা করে দেখায়। খেয়াল করুন পরিণতি বোঝাতে sodass এবং শেষে Konjunktiv II 'würde mich freuen' — দুটোই B1-এর চিহ্ন।",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    code: "SCH-03",
    category: "absage",
    register: "halbformell",
    situation: {
      en: "Your colleague Herr Brandt invited you to his birthday party on Friday. You cannot go because you are travelling to a family event. You must cancel politely.",
      it: "Il tuo collega Herr Brandt ti ha invitato alla sua festa di compleanno venerdì. Non puoi andare perché parti per un evento di famiglia. Devi disdire in modo educato.",
      bn: "আপনার সহকর্মী Herr Brandt আপনাকে শুক্রবার তাঁর জন্মদিনের অনুষ্ঠানে আমন্ত্রণ জানিয়েছেন। পারিবারিক একটি অনুষ্ঠানে যাওয়ার কারণে আপনি যেতে পারছেন না। ভদ্রভাবে না বলতে হবে।",
    },
    taskDe:
      "Ihr Kollege Herr Brandt hat Sie zu seiner Geburtstagsfeier am Freitag eingeladen. Sie können nicht kommen. Schreiben Sie ihm eine E-Mail.",
    leitpunkte: [
      "Bedanken Sie sich für die Einladung",
      "Sagen Sie ab und begründen Sie warum",
      "Machen Sie einen anderen Vorschlag",
      "Wünschen Sie ihm etwas für den Tag",
    ],
    anrede: "Sehr geehrter Herr Brandt,",
    gruss: "Mit freundlichen Grüßen\n…",
    usefulPhrases: [
      {
        de: "vielen Dank für Ihre nette Einladung.",
        note: {
          en: "Always thank first. Leitpunkt 1 is free marks if you don't forget it.",
          it: "Ringrazia sempre per primo. Il Leitpunkt 1 è un punto regalato, se non lo dimentichi.",
          bn: "সবসময় আগে ধন্যবাদ দিন। প্রথম Leitpunkt সহজ নম্বর — শুধু ভুলবেন না।",
        },
      },
      {
        de: "Leider kann ich nicht kommen, weil …",
        note: {
          en: "weil sends the verb to the very end. This is the single most tested structure at B1.",
          it: "weil manda il verbo proprio in fondo. È la struttura più testata al B1.",
          bn: "weil ক্রিয়াপদকে একদম শেষে পাঠায়। B1-এ সবচেয়ে বেশি পরীক্ষা করা গঠন এটাই।",
        },
      },
      {
        de: "Es tut mir wirklich leid.",
        note: {
          en: "leidtun works with the Dativ: es tut MIR leid, never 'ich bin leid'.",
          it: "leidtun regge il dativo: es tut MIR leid, mai «ich bin leid».",
          bn: "leidtun Dativ নেয়: es tut MIR leid, কখনোই 'ich bin leid' নয়।",
        },
      },
      {
        de: "Vielleicht könnten wir nächste Woche zusammen Mittag essen?",
        note: {
          en: "könnten is Konjunktiv II — it makes a suggestion polite instead of demanding.",
          it: "könnten è Konjunktiv II: rende la proposta educata invece che perentoria.",
          bn: "könnten হলো Konjunktiv II — এটি প্রস্তাবটিকে দাবির বদলে ভদ্র করে তোলে।",
        },
      },
      {
        de: "Ich wünsche Ihnen einen schönen Tag und viel Spaß mit Ihren Gästen.",
        note: {
          en: "wünschen takes Dativ for the person and Akkusativ for the thing: Ihnen (Dat) einen Tag (Akk).",
          it: "wünschen vuole il dativo per la persona e l'accusativo per la cosa: Ihnen (dat) einen Tag (acc).",
          bn: "wünschen ব্যক্তির জন্য Dativ আর জিনিসের জন্য Akkusativ নেয়: Ihnen (Dativ) einen Tag (Akkusativ)।",
        },
      },
    ],
    targetWords: 150,
    modelAnswerDe: `Sehr geehrter Herr Brandt,

vielen Dank für Ihre nette Einladung zu Ihrer Geburtstagsfeier am Freitag. Ich habe mich sehr darüber gefreut.

Leider muss ich Ihnen absagen, weil meine Schwester am selben Wochenende heiratet. Die Hochzeit findet in Frankfurt statt, und ich fahre schon am Donnerstagabend los. Es tut mir wirklich leid, denn ich wäre gern gekommen.

Vielleicht könnten wir aber nächste Woche zusammen Mittag essen? Ich würde Ihnen dann auch Ihr Geschenk persönlich geben. Wenn es Ihnen passt, schlage ich Dienstag oder Mittwoch vor. Sagen Sie mir einfach, welcher Tag Ihnen besser passt.

Ich wünsche Ihnen einen wunderschönen Geburtstag und viel Spaß mit Ihren Gästen. Feiern Sie schön!

Mit freundlichen Grüßen
Mahdin Islam`,
    modelNotes: {
      en: "Semi-formal: Sie with a colleague, but warmer than a complaint. The refusal is softened by thanking first and offering an alternative — cancelling flat would still cover the Leitpunkt but reads badly. Watch 'ich wäre gern gekommen': Konjunktiv II for something that did not happen.",
      it: "Semi-formale: Sie con un collega, ma più caldo di un reclamo. Il rifiuto è ammorbidito dal ringraziamento iniziale e dall'alternativa. Nota «ich wäre gern gekommen»: Konjunktiv II per qualcosa che non è successo.",
      bn: "আধা-আনুষ্ঠানিক: সহকর্মীর সঙ্গে Sie, কিন্তু অভিযোগপত্রের চেয়ে উষ্ণ। আগে ধন্যবাদ আর বিকল্প প্রস্তাব দিয়ে প্রত্যাখ্যানটি নরম করা হয়েছে। খেয়াল করুন 'ich wäre gern gekommen': যা ঘটেনি তার জন্য Konjunktiv II।",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    code: "SCH-04",
    category: "kurs",
    register: "formell",
    situation: {
      en: "You saw an advertisement for a German course at the Volkshochschule. You want more information before you sign up.",
      it: "Hai visto un annuncio per un corso di tedesco alla Volkshochschule. Vuoi più informazioni prima di iscriverti.",
      bn: "আপনি Volkshochschule-এ একটি জার্মান কোর্সের বিজ্ঞাপন দেখেছেন। ভর্তি হওয়ার আগে আরও তথ্য চান।",
    },
    taskDe:
      "Sie haben eine Anzeige für einen Deutschkurs an der Volkshochschule gelesen. Sie möchten mehr Informationen. Schreiben Sie eine E-Mail an die Volkshochschule.",
    leitpunkte: [
      "Woher kennen Sie den Kurs und warum interessieren Sie sich dafür?",
      "Fragen Sie nach Terminen und Preis",
      "Beschreiben Sie Ihre Deutschkenntnisse",
      "Fragen Sie nach dem Zertifikat am Ende",
    ],
    anrede: "Sehr geehrte Damen und Herren,",
    gruss: "Mit freundlichen Grüßen\n…",
    usefulPhrases: [
      {
        de: "ich interessiere mich für Ihren Deutschkurs.",
        note: {
          en: "sich interessieren FÜR + Akkusativ. The preposition is fixed — learn the verb with it.",
          it: "sich interessieren FÜR + accusativo. La preposizione è fissa: impara il verbo insieme a essa.",
          bn: "sich interessieren FÜR + Akkusativ। প্রিপোজিশনটি নির্দিষ্ট — ক্রিয়ার সঙ্গেই শিখুন।",
        },
      },
      {
        de: "Ich habe Ihre Anzeige in der Zeitung gelesen.",
        note: {
          en: "Perfekt with haben — the normal past tense in a letter.",
          it: "Perfekt con haben: il passato normale in una lettera.",
          bn: "haben দিয়ে Perfekt — চিঠিতে এটাই স্বাভাবিক অতীত কাল।",
        },
      },
      {
        de: "Könnten Sie mir bitte mitteilen, wann der Kurs beginnt?",
        note: {
          en: "An indirect question: wann sends the verb to the end. Politer than 'Wann beginnt der Kurs?'",
          it: "Domanda indiretta: wann manda il verbo in fondo. Più educata di «Wann beginnt der Kurs?»",
          bn: "পরোক্ষ প্রশ্ন: wann ক্রিয়াপদকে শেষে পাঠায়। 'Wann beginnt der Kurs?'-এর চেয়ে ভদ্র।",
        },
      },
      {
        de: "Zurzeit besuche ich einen B1-Kurs.",
        note: {
          en: "Time expression first pushes the verb to position 2: Zurzeit BESUCHE ich. Never 'Zurzeit ich besuche'.",
          it: "L'espressione di tempo in prima posizione spinge il verbo in seconda: Zurzeit BESUCHE ich. Mai «Zurzeit ich besuche».",
          bn: "সময়সূচক শব্দ আগে বসলে ক্রিয়া দ্বিতীয় স্থানে যায়: Zurzeit BESUCHE ich। কখনোই 'Zurzeit ich besuche' নয়।",
        },
      },
      {
        de: "Bekommt man am Ende ein Zertifikat?",
        note: {
          en: "man = 'one / you in general'. Useful when you don't want to say 'ich'.",
          it: "man = «si» impersonale. Utile quando non vuoi dire «ich».",
          bn: "man = 'একজন / সাধারণভাবে কেউ'। 'ich' বলতে না চাইলে কাজে লাগে।",
        },
      },
    ],
    targetWords: 150,
    modelAnswerDe: `Sehr geehrte Damen und Herren,

ich habe Ihre Anzeige für den Deutschkurs in der Siegener Zeitung gelesen und interessiere mich sehr für diesen Kurs. Ich möchte im November die telc-Prüfung B1 machen und suche deshalb einen guten Vorbereitungskurs.

Könnten Sie mir bitte mitteilen, wann der Kurs beginnt und an welchen Tagen der Unterricht stattfindet? Außerdem würde ich gern wissen, wie viel der Kurs kostet und ob man in Raten zahlen kann.

Zurzeit besuche ich einen A2-Kurs und lerne seit etwa einem Jahr Deutsch. Ich kann mich im Alltag gut verständigen, aber beim Schreiben habe ich noch Probleme, besonders mit der Grammatik.

Eine letzte Frage: Bekommt man am Ende des Kurses ein Zertifikat?

Vielen Dank im Voraus für Ihre Antwort.

Mit freundlichen Grüßen
Mahdin Islam`,
    modelNotes: {
      en: "Every Leitpunkt gets its own paragraph, in order — the easiest way to make sure the examiner finds all four. Two indirect questions (wann … beginnt, wie viel … kostet) and one ob-clause show real B1 sentence structure rather than a list of short main clauses.",
      it: "Ogni Leitpunkt ha il suo paragrafo, in ordine: il modo più semplice perché l'esaminatore li trovi tutti e quattro. Due domande indirette e una subordinata con ob mostrano vera struttura B1.",
      bn: "প্রতিটি Leitpunkt আলাদা অনুচ্ছেদে, ক্রম অনুযায়ী — পরীক্ষক যাতে চারটিই খুঁজে পান, তার সবচেয়ে সহজ উপায়। দুটি পরোক্ষ প্রশ্ন আর একটি ob-clause ছোট ছোট বাক্যের তালিকার বদলে সত্যিকারের B1 গঠন দেখায়।",
    },
  },
];
