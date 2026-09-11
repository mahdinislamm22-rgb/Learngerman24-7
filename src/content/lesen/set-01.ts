import type { LesenSet } from "./types";

/**
 * LES-01 — Alltag in Deutschland.
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Teil 3 contains the trap the real paper always sets: situation 20 wants
 * piano lessons and advert h) offers guitar. A near-miss is still a miss,
 * and learning to answer "x" with confidence is worth several points.
 */
export const les01: LesenSet = {
  code: "LES-01",

  title: {
    de: "Alltag in Deutschland",
    en: "Everyday life in Germany",
    it: "Vita quotidiana in Germania",
    bn: "জার্মানিতে দৈনন্দিন জীবন",
  },

  intro: {
    de: "Kurze Zeitungstexte, ein längerer Text über die Ausbildung und zwölf Kleinanzeigen. Tippe im Text auf ein Wort, um die Bedeutung zu sehen.",
    en: "Short newspaper pieces, a longer text about apprenticeships, and twelve small ads. Tap any word in a text to see what it means.",
    it: "Brevi testi di giornale, un testo più lungo sull'apprendistato e dodici annunci. Tocca una parola nel testo per vederne il significato.",
    bn: "ছোট সংবাদপত্রের লেখা, Ausbildung নিয়ে একটি বড় লেখা এবং বারোটি ছোট বিজ্ঞাপন। অর্থ দেখতে লেখার যেকোনো শব্দে টোকা দিন।",
  },

  teil1: {
    instruction: {
      de: "Lies die fünf Texte und ordne jedem die passende Überschrift zu. Fünf Überschriften bleiben übrig.",
      en: "Read the five texts and match each to the right heading. Five headings are left over.",
      it: "Leggi i cinque testi e abbina a ciascuno il titolo giusto. Cinque titoli restano inutilizzati.",
      bn: "পাঁচটি লেখা পড়ুন এবং প্রতিটির সাথে সঠিক শিরোনাম মেলান। পাঁচটি শিরোনাম বাড়তি থাকবে।",
    },

    headings: [
      { key: "a", text: "Mehr Platz für Radfahrer" },
      { key: "b", text: "Arbeiten, wo man will" },
      { key: "c", text: "Deutsch lernen neben dem Beruf" },
      { key: "d", text: "Hilfe von nebenan" },
      { key: "e", text: "Ohne Handy lernt es sich besser" },
      { key: "f", text: "Teurer Urlaub in den Bergen" },
      { key: "g", text: "Neue Öffnungszeiten im Rathaus" },
      { key: "h", text: "Warum Kinder mehr Sport brauchen" },
      { key: "i", text: "Ein Restaurant schließt nach 40 Jahren" },
      { key: "j", text: "Weniger Autos in der Innenstadt" },
    ],

    texts: [
      {
        nr: 1,
        text: "In Siegen sollen bis zum nächsten Sommer drei neue Radwege entstehen. Die Stadt möchte damit vor allem Berufstätige ansprechen, die bisher mit dem Auto zur Arbeit fahren. Geplant sind breitere Wege und sichere Abstellplätze am Bahnhof. Wer auf das Rad umsteigt, spart Geld und tut gleichzeitig etwas für seine Gesundheit.",
        answerKey: "a",
        why: {
          de: "Der Text handelt von neuen Radwegen und Abstellplätzen — also von mehr Platz für Radfahrer. »Weniger Autos in der Innenstadt« (j) klingt ähnlich, steht aber nirgends: es geht um das Angebot fürs Rad, nicht um ein Verbot fürs Auto.",
          en: "The text is about new cycle paths and parking — that is more space for cyclists. 'Weniger Autos in der Innenstadt' (j) sounds close but is never said: this is about providing for bikes, not restricting cars.",
          it: "Il testo parla di nuove piste ciclabili e parcheggi: quindi più spazio per i ciclisti. »Weniger Autos in der Innenstadt« (j) sembra simile ma non compare: si parla di offerta per le bici, non di divieti per le auto.",
          bn: "লেখাটি নতুন সাইকেল পথ ও রাখার জায়গা নিয়ে — অর্থাৎ সাইকেল চালকদের জন্য বেশি জায়গা। »Weniger Autos in der Innenstadt« (j) কাছাকাছি শোনালেও লেখায় নেই: এখানে সাইকেলের সুবিধার কথা, গাড়ি নিষেধের কথা নয়।",
        },
      },
      {
        nr: 2,
        text: "Seit der Pandemie arbeiten viele Angestellte zwei oder drei Tage pro Woche von zu Hause. Eine neue Studie zeigt: Die meisten sind damit zufrieden und fühlen sich weniger gestresst. Probleme gibt es vor allem dann, wenn die Wohnung klein ist oder die Internetverbindung nicht stabil funktioniert.",
        answerKey: "b",
        why: {
          de: "Es geht um Homeoffice — also darum, den Arbeitsort frei zu wählen. Genau das sagt »Arbeiten, wo man will«.",
          en: "This is about working from home — choosing where you work. That is exactly what 'Arbeiten, wo man will' says.",
          it: "Si parla di lavoro da casa, cioè scegliere dove lavorare. È proprio ciò che dice »Arbeiten, wo man will«.",
          bn: "এটি বাসা থেকে কাজ করা নিয়ে — অর্থাৎ কোথায় কাজ করবেন তা বেছে নেওয়া। »Arbeiten, wo man will« ঠিক তাই বলে।",
        },
      },
      {
        nr: 3,
        text: "Die Volkshochschule bietet ab Oktober Abendkurse für Erwachsene an, die tagsüber arbeiten. Der Unterricht findet zweimal pro Woche von 18 bis 20 Uhr statt. Die Kurse sind besonders für Menschen gedacht, die schon einen Job haben, aber ihre Sprachkenntnisse für den Beruf verbessern möchten.",
        answerKey: "c",
        why: {
          de: "Abendkurse für Berufstätige, die ihr Deutsch für die Arbeit verbessern wollen — »neben dem Beruf« fasst genau das zusammen.",
          en: "Evening classes for people in work who want to improve their German for the job — 'neben dem Beruf' sums that up exactly.",
          it: "Corsi serali per chi lavora e vuole migliorare il tedesco per il lavoro: »neben dem Beruf« riassume esattamente questo.",
          bn: "চাকরিজীবীদের জন্য সন্ধ্যার কোর্স, যারা কাজের জন্য জার্মান উন্নত করতে চান — »neben dem Beruf« ঠিক এটাই বোঝায়।",
        },
      },
      {
        nr: 4,
        text: "In der Marienstraße haben Bewohner eine Gruppe gegründet. Wer Hilfe braucht — beim Einkaufen, bei Formularen oder beim Weg zum Arzt — schreibt eine Nachricht, und jemand aus der Straße meldet sich. Besonders ältere Menschen nutzen das Angebot gern. Bezahlt wird nichts; man hilft sich einfach gegenseitig.",
        answerKey: "d",
        why: {
          de: "Nachbarn helfen Nachbarn, kostenlos. »Hilfe von nebenan« beschreibt genau diese Nachbarschaftshilfe.",
          en: "Neighbours helping neighbours, free of charge. 'Hilfe von nebenan' describes exactly that.",
          it: "Vicini che aiutano vicini, gratuitamente. »Hilfe von nebenan« descrive proprio questo.",
          bn: "প্রতিবেশীরা প্রতিবেশীদের সাহায্য করছেন, বিনামূল্যে। »Hilfe von nebenan« ঠিক সেটাই বোঝায়।",
        },
      },
      {
        nr: 5,
        text: "An einer Schule in Köln müssen Schüler ihre Handys morgens abgeben. Nach einem Jahr ziehen die Lehrer eine positive Bilanz: In den Pausen wird wieder mehr gesprochen und gespielt, und die Noten haben sich leicht verbessert. Einige Eltern waren am Anfang dagegen, sind inzwischen aber überzeugt.",
        answerKey: "e",
        why: {
          de: "Ohne Handy sind die Noten besser geworden. Das ist die Aussage der Überschrift e.",
          en: "Without phones the grades improved. That is what heading e states.",
          it: "Senza cellulari i voti sono migliorati. È ciò che afferma il titolo e.",
          bn: "মোবাইল ছাড়া নম্বর ভালো হয়েছে। শিরোনাম e ঠিক সেটাই বলে।",
        },
      },
    ],
  },

  teil2: {
    instruction: {
      de: "Lies den Text und beantworte die fünf Fragen. Nur eine Antwort ist richtig.",
      en: "Read the text and answer the five questions. Only one answer is correct.",
      it: "Leggi il testo e rispondi alle cinque domande. Solo una risposta è corretta.",
      bn: "লেখাটি পড়ুন এবং পাঁচটি প্রশ্নের উত্তর দিন। কেবল একটি উত্তর সঠিক।",
    },
    heading: "Die duale Ausbildung in Deutschland",
    text: `Wer in Deutschland einen Beruf lernen möchte, wählt meistens eine duale Ausbildung. »Dual« bedeutet, dass die Ausbildung an zwei Orten stattfindet: im Betrieb und in der Berufsschule. An drei oder vier Tagen pro Woche arbeitet man in der Firma, an den übrigen Tagen geht man zur Schule. Eine Ausbildung dauert in der Regel drei Jahre; bei guten Leistungen kann sie auf zweieinhalb Jahre verkürzt werden.

Ein wichtiger Unterschied zu vielen anderen Ländern: Auszubildende bekommen vom ersten Monat an Geld. Die Höhe hängt vom Beruf und vom Bundesland ab, liegt aber meistens zwischen 800 und 1200 Euro im Monat. Wer studiert, zahlt dagegen oft selbst.

Bewerben sollte man sich früh. Viele Betriebe suchen ihre Auszubildenden schon ein Jahr vor Beginn. Für die Bewerbung braucht man ein Anschreiben, einen Lebenslauf und die Zeugnisse der letzten Schuljahre. Ausländische Abschlüsse müssen anerkannt werden; dafür gibt es Beratungsstellen in jeder größeren Stadt.

Sprachkenntnisse sind wichtig, aber viele Betriebe verlangen kein perfektes Deutsch. Für die meisten Ausbildungen reicht das Niveau B1, weil man die Sprache während der Ausbildung ohnehin weiter lernt. Wichtiger sind Pünktlichkeit, Zuverlässigkeit und die Bereitschaft, Fragen zu stellen.

Nach der Ausbildung übernehmen die meisten Betriebe ihre Auszubildenden. Wer möchte, kann danach eine Weiterbildung machen — zum Beispiel zum Meister oder Techniker.`,

    questions: [
      {
        nr: 6,
        question: "Was bedeutet »dual« bei einer Ausbildung?",
        options: [
          "Man lernt an zwei Orten.",
          "Man lernt zwei Berufe gleichzeitig.",
          "Man arbeitet nur zwei Tage pro Woche.",
        ],
        answerIndex: 0,
        why: {
          de: "Der Text erklärt es direkt: »an zwei Orten … im Betrieb und in der Berufsschule«. Die anderen beiden Antworten stehen so nirgends.",
          en: "The text says it directly: 'an zwei Orten … im Betrieb und in der Berufsschule'. The other two answers are never stated.",
          it: "Il testo lo dice esplicitamente: »an zwei Orten … im Betrieb und in der Berufsschule«. Le altre due risposte non compaiono.",
          bn: "লেখাটি সরাসরি বলে: »an zwei Orten … im Betrieb und in der Berufsschule«। বাকি দুটি উত্তর কোথাও নেই।",
        },
      },
      {
        nr: 7,
        question: "Wie lange dauert eine Ausbildung normalerweise?",
        options: ["Drei Jahre", "Zweieinhalb Jahre", "Vier Jahre"],
        answerIndex: 0,
        why: {
          de: "»in der Regel drei Jahre« heißt normalerweise. Zweieinhalb Jahre ist nur möglich, wenn die Leistungen gut sind — das ist die Ausnahme, nicht die Regel.",
          en: "'in der Regel drei Jahre' means normally. Two and a half years is only possible with good results — the exception, not the rule.",
          it: "»in der Regel drei Jahre« significa di norma. Due anni e mezzo è possibile solo con buoni risultati: l'eccezione, non la regola.",
          bn: "»in der Regel drei Jahre« মানে সাধারণত। আড়াই বছর কেবল ভালো ফল হলে সম্ভব — সেটি ব্যতিক্রম, নিয়ম নয়।",
        },
      },
      {
        nr: 8,
        question: "Was sagt der Text über das Geld?",
        options: [
          "Auszubildende bezahlen für die Ausbildung.",
          "Auszubildende bekommen erst im zweiten Jahr Geld.",
          "Auszubildende verdienen ab dem ersten Monat.",
        ],
        answerIndex: 2,
        why: {
          de: "»vom ersten Monat an Geld« ist eindeutig. Antwort a verwechselt die Ausbildung mit dem Studium, das im Text als Gegenbeispiel steht.",
          en: "'vom ersten Monat an Geld' is unambiguous. Answer a confuses apprenticeship with university study, which the text gives as the contrast.",
          it: "»vom ersten Monat an Geld« è inequivocabile. La risposta a confonde l'apprendistato con l'università, citata nel testo come contrasto.",
          bn: "»vom ersten Monat an Geld« স্পষ্ট। উত্তর a Ausbildung-কে বিশ্ববিদ্যালয়ের সাথে গুলিয়ে ফেলে, যা লেখায় বিপরীত উদাহরণ হিসেবে আছে।",
        },
      },
      {
        nr: 9,
        question: "Wann sollte man sich bewerben?",
        options: [
          "Kurz vor dem Beginn der Ausbildung.",
          "Etwa ein Jahr vorher.",
          "Erst nachdem die Zeugnisse anerkannt wurden.",
        ],
        answerIndex: 1,
        why: {
          de: "»schon ein Jahr vor Beginn« steht direkt im Text. Die Anerkennung wird zwar erwähnt, aber nicht als Bedingung für die Bewerbung.",
          en: "'schon ein Jahr vor Beginn' is stated directly. Recognition of certificates is mentioned, but not as a condition for applying.",
          it: "»schon ein Jahr vor Beginn« è scritto esplicitamente. Il riconoscimento è citato, ma non come condizione per candidarsi.",
          bn: "»schon ein Jahr vor Beginn« সরাসরি লেখা আছে। সনদ স্বীকৃতির কথা আছে বটে, তবে আবেদনের শর্ত হিসেবে নয়।",
        },
      },
      {
        nr: 10,
        question: "Welches Sprachniveau reicht für die meisten Ausbildungen?",
        options: ["B1", "A2", "C1"],
        answerIndex: 0,
        why: {
          de: "»Für die meisten Ausbildungen reicht das Niveau B1« — genau dein Ziel. Der Text sagt außerdem, warum: die Sprache wird während der Ausbildung weiter gelernt.",
          en: "'Für die meisten Ausbildungen reicht das Niveau B1' — exactly your target. The text also says why: the language keeps developing during the apprenticeship.",
          it: "»Für die meisten Ausbildungen reicht das Niveau B1«: esattamente il tuo obiettivo. Il testo spiega anche perché: la lingua si continua a imparare durante l'apprendistato.",
          bn: "»Für die meisten Ausbildungen reicht das Niveau B1« — ঠিক আপনার লক্ষ্য। লেখাটি কারণও বলে: Ausbildung চলাকালেই ভাষা শেখা চলতে থাকে।",
        },
      },
    ],
  },

  teil3: {
    instruction: {
      de: "Lies die zehn Situationen und die zwölf Anzeigen. Welche Anzeige passt? Wenn keine passt, wähle x.",
      en: "Read the ten situations and the twelve adverts. Which advert fits? If none fits, choose x.",
      it: "Leggi le dieci situazioni e i dodici annunci. Quale annuncio è adatto? Se nessuno è adatto, scegli x.",
      bn: "দশটি পরিস্থিতি ও বারোটি বিজ্ঞাপন পড়ুন। কোন বিজ্ঞাপনটি মানায়? কোনোটিই না মিললে x বাছুন।",
    },

    anzeigen: [
      {
        key: "a",
        title: "Sprachcafé Siegen",
        text: "Jeden Donnerstag von 18 bis 20 Uhr Deutsch sprechen bei Kaffee und Kuchen. Kostenlos, keine Anmeldung nötig. Alle Niveaus willkommen.",
      },
      {
        key: "b",
        title: "Fahrradwerkstatt Müller",
        text: "Reparaturen aller Art, auch samstags von 9 bis 14 Uhr. Reifen, Bremsen, Licht. Kleine Reparaturen oft noch am selben Tag.",
      },
      {
        key: "c",
        title: "Nachhilfe Mathematik",
        text: "Erfahrene Lehrerin gibt Nachhilfe für Schülerinnen und Schüler der Klassen 5 bis 10. Einzelunterricht bei Ihnen zu Hause.",
      },
      {
        key: "d",
        title: "Umzugshilfe kurzfristig",
        text: "Drei starke Helfer mit Transporter. Wir tragen Kisten und Möbel, auch in obere Stockwerke. Termine auch am Wochenende.",
      },
      {
        key: "e",
        title: "Tagesmutter mit freien Plätzen",
        text: "Liebevolle Betreuung für Kinder ab einem Jahr, Montag bis Freitag, 7 bis 16 Uhr. Zwei Plätze ab sofort frei.",
      },
      {
        key: "f",
        title: "Computerkurs für Senioren",
        text: "E-Mails schreiben, im Internet suchen, Fotos speichern. Dienstags von 10 bis 12 Uhr, in kleinen Gruppen, ganz ohne Vorkenntnisse.",
      },
      {
        key: "g",
        title: "2-Zimmer-Wohnung zu vermieten",
        text: "55 m², zweiter Stock, Balkon, ruhige Lage. Frei ab Januar. Nur an Nichtraucher.",
      },
      {
        key: "h",
        title: "Gitarrenunterricht",
        text: "Gitarre lernen für Anfänger, jeden Alters. Einzelstunden oder online. Erste Stunde kostenlos.",
      },
      {
        key: "i",
        title: "Bewerbungstraining",
        text: "Wir helfen beim Lebenslauf und üben das Vorstellungsgespräch. Für Arbeitssuchende kostenlos. Anmeldung im Bürgerbüro.",
      },
      {
        key: "j",
        title: "Hundebetreuung im Urlaub",
        text: "Ihr Hund wohnt bei uns im Haus mit großem Garten. Tageweise oder für mehrere Wochen. Gassi gehen dreimal täglich.",
      },
      {
        key: "k",
        title: "Deutschkurs B2 — Abendkurs",
        text: "Für Teilnehmende, die B1 abgeschlossen haben. Montags und mittwochs ab 18 Uhr. Anmeldung bis zum 30. September.",
      },
      {
        key: "l",
        title: "Möbel abzugeben",
        text: "Sofa und Esstisch, gut erhalten, kostenlos abzuholen. Nur Selbstabholung, zweiter Stock ohne Aufzug.",
      },
    ],

    situations: [
      {
        nr: 11,
        text: "Sie möchten Deutsch sprechen üben, haben aber wenig Geld und keine Zeit für einen Kurs mit fester Anmeldung.",
        answerKey: "a",
        why: {
          de: "Das Sprachcafé ist kostenlos und braucht keine Anmeldung — beide Bedingungen der Situation sind erfüllt. Der B2-Kurs (k) kostet Zeit und eine Anmeldung.",
          en: "The Sprachcafé is free and needs no registration — both conditions are met. The B2 course (k) requires time and registration.",
          it: "Lo Sprachcafé è gratuito e non richiede iscrizione: entrambe le condizioni sono soddisfatte. Il corso B2 (k) richiede tempo e iscrizione.",
          bn: "Sprachcafé বিনামূল্যে এবং নিবন্ধন লাগে না — দুটি শর্তই পূরণ হয়। B2 কোর্সে (k) সময় ও নিবন্ধন দুটোই লাগে।",
        },
      },
      {
        nr: 12,
        text: "Ihre Mutter ist 68 Jahre alt und möchte lernen, wie man E-Mails schreibt.",
        answerKey: "f",
        why: {
          de: "Der Seniorenkurs nennt »E-Mails schreiben« wörtlich und verlangt keine Vorkenntnisse.",
          en: "The seniors' course names 'E-Mails schreiben' literally and requires no prior knowledge.",
          it: "Il corso per anziani cita letteralmente »E-Mails schreiben« e non richiede conoscenze pregresse.",
          bn: "সিনিয়রদের কোর্সে »E-Mails schreiben« হুবহু লেখা আছে এবং পূর্ব অভিজ্ঞতা লাগে না।",
        },
      },
      {
        nr: 13,
        text: "Sie ziehen nächsten Monat um und brauchen jemanden, der schwere Kisten in den dritten Stock trägt.",
        answerKey: "d",
        why: {
          de: "Die Umzugshilfe nennt genau das: Kisten und Möbel, auch in obere Stockwerke.",
          en: "The removal help states exactly that: boxes and furniture, including upper floors.",
          it: "Il servizio traslochi dice proprio questo: scatole e mobili, anche ai piani alti.",
          bn: "Umzugshilfe ঠিক এটাই বলে: বাক্স ও আসবাব, উপরের তলাতেও।",
        },
      },
      {
        nr: 14,
        text: "Ihr Sohn geht in die siebte Klasse und hat schlechte Noten in Mathematik.",
        answerKey: "c",
        why: {
          de: "Die Nachhilfe deckt die Klassen 5 bis 10 ab, und die siebte Klasse liegt dazwischen. Prüfe bei solchen Anzeigen immer die Zahlen, nicht nur das Thema.",
          en: "The tutoring covers years 5 to 10, and year 7 falls inside that. With adverts like this always check the numbers, not just the subject.",
          it: "Le ripetizioni coprono le classi dalla 5 alla 10, e la settima rientra. In annunci così controlla sempre i numeri, non solo l'argomento.",
          bn: "এই টিউশন ৫ম থেকে ১০ম শ্রেণি পর্যন্ত, আর সপ্তম শ্রেণি তার মধ্যেই পড়ে। এ ধরনের বিজ্ঞাপনে কেবল বিষয় নয়, সংখ্যাগুলোও দেখুন।",
        },
      },
      {
        nr: 15,
        text: "Sie suchen eine Stelle und möchten Hilfe bei Ihrem Lebenslauf.",
        answerKey: "i",
        why: {
          de: "Das Bewerbungstraining nennt den Lebenslauf direkt und ist für Arbeitssuchende kostenlos.",
          en: "The application training names the CV directly and is free for jobseekers.",
          it: "Il training per candidature cita direttamente il curriculum ed è gratuito per chi cerca lavoro.",
          bn: "Bewerbungstraining সরাসরি Lebenslauf-এর কথা বলে এবং চাকরিপ্রার্থীদের জন্য বিনামূল্যে।",
        },
      },
      {
        nr: 16,
        text: "Sie fahren zwei Wochen in den Urlaub und wissen nicht, wohin mit Ihrem Hund.",
        answerKey: "j",
        why: {
          de: "Die Hundebetreuung bietet ausdrücklich auch mehrere Wochen an.",
          en: "The dog-sitting advert explicitly offers stays of several weeks.",
          it: "L'annuncio di pensione per cani offre esplicitamente anche più settimane.",
          bn: "কুকুর দেখাশোনার বিজ্ঞাপনে স্পষ্টভাবেই কয়েক সপ্তাহের কথা আছে।",
        },
      },
      {
        nr: 17,
        text: "Sie haben Ihre B1-Prüfung bestanden und möchten auf dem nächsten Niveau weiterlernen.",
        answerKey: "k",
        why: {
          de: "Der B2-Kurs ist ausdrücklich für Teilnehmende gedacht, die B1 abgeschlossen haben. Das Sprachcafé (a) ist kein Kurs mit Niveau.",
          en: "The B2 course is explicitly for people who have completed B1. The Sprachcafé (a) is not a levelled course.",
          it: "Il corso B2 è esplicitamente per chi ha concluso il B1. Lo Sprachcafé (a) non è un corso con livello.",
          bn: "B2 কোর্সটি স্পষ্টভাবেই তাদের জন্য যারা B1 শেষ করেছেন। Sprachcafé (a) কোনো স্তরভিত্তিক কোর্স নয়।",
        },
      },
      {
        nr: 18,
        text: "Ihr Fahrrad hat einen platten Reifen, und Sie können nur am Samstag vorbeikommen.",
        answerKey: "b",
        why: {
          de: "Die Werkstatt nennt Reifen und hat samstags geöffnet. Beide Teile der Situation müssen stimmen.",
          en: "The workshop mentions tyres and opens on Saturdays. Both halves of the situation have to match.",
          it: "L'officina cita le gomme ed è aperta il sabato. Devono corrispondere entrambe le parti della situazione.",
          bn: "ওয়ার্কশপে টায়ারের কথা আছে এবং শনিবার খোলা থাকে। পরিস্থিতির দুটি অংশই মিলতে হবে।",
        },
      },
      {
        nr: 19,
        text: "Ihre Tochter ist ein Jahr alt und Sie fangen nächste Woche wieder an zu arbeiten.",
        answerKey: "e",
        why: {
          de: "Die Tagesmutter nimmt Kinder ab einem Jahr und hat sofort zwei Plätze frei — »ab sofort« passt zu »nächste Woche«.",
          en: "The childminder takes children from one year old and has two places free immediately — 'ab sofort' matches 'next week'.",
          it: "La tata accoglie bambini da un anno e ha due posti liberi subito: »ab sofort« corrisponde a »la prossima settimana«.",
          bn: "Tagesmutter এক বছর থেকে শিশু নেন এবং এখনই দুটি জায়গা খালি — »ab sofort« »আগামী সপ্তাহ«-এর সাথে মেলে।",
        },
      },
      {
        nr: 20,
        text: "Sie möchten Klavier spielen lernen.",
        answerKey: "x",
        why: {
          de: "Keine Anzeige passt. Anzeige h bietet Gitarrenunterricht — ein anderes Instrument. Genau solche Fast-Treffer sind die häufigste Falle in diesem Teil: fast richtig ist falsch.",
          en: "No advert fits. Advert h offers guitar lessons — a different instrument. These near-misses are the commonest trap in this part: almost right is wrong.",
          it: "Nessun annuncio va bene. L'annuncio h offre lezioni di chitarra, uno strumento diverso. Questi quasi-abbinamenti sono la trappola più comune: quasi giusto è sbagliato.",
          bn: "কোনো বিজ্ঞাপনই মেলে না। বিজ্ঞাপন h গিটার শেখায় — অন্য একটি বাদ্যযন্ত্র। এই প্রায়-মিলই এই অংশের সবচেয়ে সাধারণ ফাঁদ: প্রায় ঠিক মানেই ভুল।",
        },
      },
    ],
  },

  glossary: [
    g("Radwege", "der Radweg", "der", "cycle path", "pista ciclabile", "সাইকেল পথ"),
    g("Berufstätige", "der/die Berufstätige", undefined, "working people", "persone che lavorano", "কর্মজীবী মানুষ"),
    g("Abstellplätze", "der Abstellplatz", "der", "parking space (for bikes)", "posto per parcheggiare", "রাখার জায়গা"),
    g("umsteigt", "umsteigen", undefined, "to switch over; to change (trains)", "passare a; cambiare", "বদলে নেওয়া"),
    g("Angestellte", "der/die Angestellte", undefined, "employee", "impiegato", "কর্মচারী"),
    g("gestresst", "gestresst", undefined, "stressed", "stressato", "চাপগ্রস্ত"),
    g("Internetverbindung", "die Internetverbindung", "die", "internet connection", "connessione internet", "ইন্টারনেট সংযোগ"),
    g("Volkshochschule", "die Volkshochschule", "die", "adult education centre", "università popolare", "প্রাপ্তবয়স্ক শিক্ষাকেন্দ্র"),
    g("Unterricht", "der Unterricht", "der", "lessons, teaching", "lezioni", "পাঠদান"),
    g("Sprachkenntnisse", "die Sprachkenntnisse", "die", "language skills", "conoscenze linguistiche", "ভাষাজ্ঞান"),
    g("Bewohner", "der Bewohner", "der", "resident", "residente", "বাসিন্দা"),
    g("gegründet", "gründen", undefined, "to found, to set up", "fondare", "প্রতিষ্ঠা করা"),
    g("Formularen", "das Formular", "das", "form (to fill in)", "modulo", "ফর্ম"),
    g("gegenseitig", "gegenseitig", undefined, "mutually, each other", "reciprocamente", "পরস্পর"),
    g("abgeben", "abgeben", undefined, "to hand in", "consegnare", "জমা দেওয়া"),
    g("Bilanz", "die Bilanz", "die", "assessment, summing-up", "bilancio", "মূল্যায়ন"),
    g("überzeugt", "überzeugt", undefined, "convinced", "convinto", "নিশ্চিত, রাজি"),
    g("Betrieb", "der Betrieb", "der", "company, firm", "azienda", "প্রতিষ্ঠান"),
    g("Berufsschule", "die Berufsschule", "die", "vocational school", "scuola professionale", "কারিগরি স্কুল"),
    g("übrigen", "übrig", undefined, "remaining", "rimanente", "বাকি"),
    g("Leistungen", "die Leistung", "die", "performance, results", "rendimento", "ফলাফল, কৃতিত্ব"),
    g("verkürzt", "verkürzen", undefined, "to shorten", "accorciare", "সংক্ষিপ্ত করা"),
    g("Auszubildende", "der/die Auszubildende", undefined, "apprentice, trainee", "apprendista", "শিক্ষানবিশ"),
    g("Bundesland", "das Bundesland", "das", "federal state", "stato federale", "রাজ্য"),
    g("Anschreiben", "das Anschreiben", "das", "cover letter", "lettera di presentazione", "প্রেরণপত্র"),
    g("Lebenslauf", "der Lebenslauf", "der", "CV, résumé", "curriculum vitae", "জীবনবৃত্তান্ত"),
    g("Zeugnisse", "das Zeugnis", "das", "certificate, school report", "certificato, pagella", "সনদপত্র"),
    g("Abschlüsse", "der Abschluss", "der", "qualification, degree", "titolo di studio", "ডিগ্রি, সনদ"),
    g("anerkannt", "anerkennen", undefined, "to recognise (a qualification)", "riconoscere", "স্বীকৃতি দেওয়া"),
    g("Beratungsstellen", "die Beratungsstelle", "die", "advice centre", "centro di consulenza", "পরামর্শ কেন্দ্র"),
    g("verlangen", "verlangen", undefined, "to require, to demand", "richiedere", "দাবি করা"),
    g("Pünktlichkeit", "die Pünktlichkeit", "die", "punctuality", "puntualità", "সময়ানুবর্তিতা"),
    g("Zuverlässigkeit", "die Zuverlässigkeit", "die", "reliability", "affidabilità", "নির্ভরযোগ্যতা"),
    g("Bereitschaft", "die Bereitschaft", "die", "willingness", "disponibilità", "প্রস্তুতি, ইচ্ছা"),
    g("übernehmen", "übernehmen", undefined, "to take on, to keep on (staff)", "assumere", "চাকরিতে রেখে দেওয়া"),
    g("Weiterbildung", "die Weiterbildung", "die", "further training", "formazione continua", "উচ্চতর প্রশিক্ষণ"),
    g("Anmeldung", "die Anmeldung", "die", "registration", "iscrizione", "নিবন্ধন"),
    g("Vorkenntnisse", "die Vorkenntnisse", "die", "prior knowledge", "conoscenze pregresse", "পূর্বজ্ঞান"),
    g("Stockwerke", "das Stockwerk", "das", "floor, storey", "piano", "তলা"),
    g("Betreuung", "die Betreuung", "die", "care, looking after", "assistenza", "দেখাশোনা"),
    g("Arbeitssuchende", "der/die Arbeitssuchende", undefined, "jobseeker", "persona in cerca di lavoro", "চাকরিপ্রার্থী"),
    g("Vorstellungsgespräch", "das Vorstellungsgespräch", "das", "job interview", "colloquio di lavoro", "চাকরির সাক্ষাৎকার"),
    g("Selbstabholung", "die Selbstabholung", "die", "collection by the buyer", "ritiro da parte dell'acquirente", "নিজে এসে নেওয়া"),
    g("erhalten", "erhalten", undefined, "here: preserved, in good condition", "qui: conservato", "এখানে: ভালো অবস্থায়"),
  ],
};

/** Compact glossary helper — 44 entries as objects would be unreadable. */
function g(
  word: string,
  base: string,
  article: "der" | "die" | "das" | undefined,
  en: string,
  it: string,
  bn: string,
) {
  return { word, base, article, meaning: { en, it, bn } };
}
