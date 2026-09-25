import type { LesenSet } from "./types";

/**
 * LES-02 — Arbeit und Bewerbung.
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Two traps are deliberate and both are the exam's favourites. In Teil 1,
 * heading j) is about holiday rules and text 1 mentions holiday in passing
 * — a shared word is not a shared topic. In Teil 3, situation 20 wants
 * work clothing and no advert offers it, so the answer is x.
 */
export const les02: LesenSet = {
  code: "LES-02",

  title: {
    de: "Arbeit und Bewerbung",
    en: "Work and job applications",
    it: "Lavoro e candidature",
    bn: "কাজ ও চাকরির আবেদন",
  },

  intro: {
    de: "Fünf kurze Zeitungstexte über die Arbeitswelt, ein längerer Text über Bewerbungen und zwölf Anzeigen rund um Arbeit und Beratung.",
    en: "Five short newspaper pieces about working life, a longer text about job applications, and twelve adverts about work and advice services.",
    it: "Cinque brevi testi di giornale sul mondo del lavoro, un testo più lungo sulle candidature e dodici annunci su lavoro e consulenza.",
    bn: "কর্মজগৎ নিয়ে পাঁচটি ছোট সংবাদপত্রের লেখা, চাকরির আবেদন নিয়ে একটি বড় লেখা এবং কাজ ও পরামর্শ সংক্রান্ত বারোটি বিজ্ঞাপন।",
  },

  teil1: {
    instruction: {
      de: "Lies die fünf Texte und ordne jedem die passende Überschrift zu. Fünf Überschriften bleiben übrig.",
      en: "Read the five texts and match each to the right heading. Five headings are left over.",
      it: "Leggi i cinque testi e abbina a ciascuno il titolo giusto. Cinque titoli restano inutilizzati.",
      bn: "পাঁচটি লেখা পড়ুন এবং প্রতিটির সাথে সঠিক শিরোনাম মেলান। পাঁচটি শিরোনাম বাড়তি থাকবে।",
    },

    headings: [
      { key: "a", text: "Neue Regeln für den Urlaub" },
      { key: "b", text: "Lernen, ohne den Job aufzugeben" },
      { key: "c", text: "Arbeiten im Ausland — was man wissen muss" },
      { key: "d", text: "Kleine Jobs, klare Regeln" },
      { key: "e", text: "Die ersten Tage im neuen Betrieb" },
      { key: "f", text: "Ein Betrieb zieht in eine andere Stadt" },
      { key: "g", text: "Weniger Stunden, mehr Zeit für die Familie" },
      { key: "h", text: "Warum viele Firmen keine Leute finden" },
      { key: "i", text: "Die Bewerbung ohne Foto" },
      { key: "j", text: "Mehr Geld für Auszubildende" },
    ],

    texts: [
      {
        nr: 1,
        text: "Wer neben dem Studium oder der Ausbildung etwas dazuverdienen möchte, wählt oft einen Minijob. Bis zu einer bestimmten Grenze im Monat zahlt man darauf keine Steuern. Wichtig ist aber: Auch bei einem Minijob gilt der Mindestlohn, und man hat Anspruch auf bezahlten Urlaub. Viele wissen das nicht und fragen nie danach.",
        answerKey: "d",
        why: {
          de: "Es geht um Minijobs und die Regeln, die dafür gelten. Überschrift a) spricht zwar auch von Urlaub, aber der Text nennt Urlaub nur als eines von mehreren Rechten — ein gemeinsames Wort ist noch kein gemeinsames Thema.",
          en: "The text is about mini-jobs and the rules that apply to them. Heading a) also mentions holiday, but the text names holiday only as one right among several — a shared word is not a shared topic.",
          it: "Il testo parla dei mini-job e delle regole che li riguardano. Anche il titolo a) cita le ferie, ma il testo le nomina solo come uno dei diritti: una parola in comune non fa un tema in comune.",
          bn: "লেখাটি মিনিজব ও তার নিয়ম নিয়ে। শিরোনাম a)-তেও ছুটির কথা আছে, কিন্তু লেখায় ছুটি কেবল অনেক অধিকারের একটি — একটি শব্দ মিললেই বিষয় মেলে না।",
        },
      },
      {
        nr: 2,
        text: "Immer mehr Beschäftigte reduzieren ihre Arbeitszeit auf dreißig Stunden pro Woche. Der Lohn sinkt dadurch natürlich, aber viele sagen, dass sich der Tausch lohnt. Sie holen ihre Kinder selbst von der Schule ab und sind am Nachmittag zu Hause. Besonders Väter nutzen dieses Modell heute häufiger als noch vor zehn Jahren.",
        answerKey: "g",
        why: {
          de: "Kürzere Arbeitszeit, dafür mehr Zeit für die Kinder — genau das sagt Überschrift g).",
          en: "Shorter hours in exchange for more time with the children — exactly what heading g) says.",
          it: "Meno ore in cambio di più tempo con i figli: proprio ciò che dice il titolo g).",
          bn: "কম কর্মঘণ্টার বিনিময়ে সন্তানদের সাথে বেশি সময় — শিরোনাম g) ঠিক তাই বলে।",
        },
      },
      {
        nr: 3,
        text: "Die Industrie- und Handelskammer bietet ab Herbst Kurse an, die neben der Arbeit besucht werden können. Der Unterricht findet freitagabends und samstags statt. So kann man einen zusätzlichen Abschluss machen, ohne die Stelle zu kündigen. Der Arbeitgeber zahlt in vielen Fällen einen Teil der Gebühren.",
        answerKey: "b",
        why: {
          de: "Kurse neben der Arbeit, ohne zu kündigen — »ohne den Job aufzugeben« fasst genau das zusammen.",
          en: "Courses alongside work, without resigning — 'ohne den Job aufzugeben' sums that up exactly.",
          it: "Corsi accanto al lavoro, senza licenziarsi: »ohne den Job aufzugeben« lo riassume esattamente.",
          bn: "চাকরি না ছেড়ে কাজের পাশাপাশি কোর্স — »ohne den Job aufzugeben« ঠিক সেটাই বোঝায়।",
        },
      },
      {
        nr: 4,
        text: "Früher gehörte ein Foto selbstverständlich zu jeder Bewerbung. Heute verzichten viele Unternehmen bewusst darauf. Der Grund: Ein Bild kann dazu führen, dass Bewerberinnen und Bewerber nach dem Aussehen beurteilt werden und nicht nach ihren Fähigkeiten. Wer trotzdem ein Foto schicken möchte, darf das aber weiterhin tun.",
        answerKey: "i",
        why: {
          de: "Das Thema ist das Bewerbungsfoto und warum es wegfällt. Überschrift i) trifft es direkt.",
          en: "The topic is the application photo and why it is being dropped. Heading i) names it directly.",
          it: "Il tema è la foto nella candidatura e perché si sta abbandonando. Il titolo i) lo dice direttamente.",
          bn: "বিষয়টি আবেদনের ছবি এবং কেন তা বাদ পড়ছে। শিরোনাম i) সরাসরি সেটাই বলে।",
        },
      },
      {
        nr: 5,
        text: "Am Anfang ist alles neu: die Kollegen, die Maschinen, die Pausenzeiten. Fachleute raten, in der ersten Woche vor allem Fragen zu stellen und sich Notizen zu machen. Niemand erwartet, dass man sofort alles kann. Wer nachfragt, wirkt nicht unsicher, sondern interessiert — und macht später weniger Fehler.",
        answerKey: "e",
        why: {
          de: "Der Text beschreibt die erste Woche im neuen Betrieb und was man da tun sollte. Überschrift e) sagt genau das.",
          en: "The text describes the first week in a new workplace and what to do there. Heading e) says exactly that.",
          it: "Il testo descrive la prima settimana nella nuova azienda e cosa fare. Il titolo e) dice proprio questo.",
          bn: "লেখাটি নতুন প্রতিষ্ঠানে প্রথম সপ্তাহ ও তখন কী করা উচিত তা বর্ণনা করে। শিরোনাম e) ঠিক সেটাই বলে।",
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
    heading: "Was in einer Bewerbung wirklich zählt",
    text: `Wer sich in Deutschland um eine Stelle bewirbt, schickt in der Regel drei Dinge: ein Anschreiben, einen Lebenslauf und die Zeugnisse. Das Anschreiben ist dabei das einzige Dokument, das man für jede Firma neu schreibt. Genau das wird am häufigsten falsch gemacht — viele verschicken denselben Text an zwanzig Betriebe und wundern sich über die Absagen.

Ein gutes Anschreiben ist kurz. Eine Seite reicht, und der wichtigste Satz steht am Anfang: Warum bewirbst du dich bei genau dieser Firma? Wer schreibt »Ich interessiere mich für Ihre Stelle«, sagt nichts. Wer schreibt »Ich möchte in der IT-Abteilung arbeiten, weil ich schon in der Schule Netzwerke eingerichtet habe«, sagt etwas.

Der Lebenslauf dagegen bleibt fast immer gleich. Er wird rückwärts geschrieben: die neueste Station zuerst. Lücken von mehreren Monaten fallen auf, deshalb ist es besser, sie zu erklären, als sie zu verstecken. Ein Umzug in ein anderes Land ist keine Lücke, sondern ein Grund.

Bei ausländischen Abschlüssen fragen Betriebe oft nach der Anerkennung. Man kann sich aber auch ohne sie bewerben und im Anschreiben erwähnen, dass das Verfahren läuft. Viele Personalabteilungen kennen das und rechnen damit.

Und das Wichtigste: Fehler im Anschreiben fallen mehr auf als ein schwaches Niveau. Ein B1-Text ohne Rechtschreibfehler wirkt besser als ein B2-Text voller Fehler. Lass jemanden gegenlesen, bevor du abschickst.`,

    questions: [
      {
        nr: 6,
        question: "Welches Dokument schreibt man für jede Firma neu?",
        options: ["Den Lebenslauf", "Die Zeugnisse", "Das Anschreiben"],
        answerIndex: 2,
        why: {
          de: "»Das Anschreiben ist dabei das einzige Dokument, das man für jede Firma neu schreibt.« Der Lebenslauf bleibt laut Text fast immer gleich.",
          en: "'Das Anschreiben ist dabei das einzige Dokument, das man für jede Firma neu schreibt.' The CV, the text says, stays almost the same.",
          it: "»Das Anschreiben ist dabei das einzige Dokument, das man für jede Firma neu schreibt.« Il curriculum, dice il testo, resta quasi uguale.",
          bn: "»Das Anschreiben ist dabei das einzige Dokument, das man für jede Firma neu schreibt.« লেখা অনুযায়ী জীবনবৃত্তান্ত প্রায় একই থাকে।",
        },
      },
      {
        nr: 7,
        question: "Was soll im Anschreiben ganz am Anfang stehen?",
        options: [
          "Die Gehaltsvorstellung",
          "Warum man sich gerade bei dieser Firma bewirbt",
          "Eine Liste der bisherigen Stellen",
        ],
        answerIndex: 1,
        why: {
          de: "»der wichtigste Satz steht am Anfang: Warum bewirbst du dich bei genau dieser Firma?« Gehalt und Stellenliste kommen im Text gar nicht vor.",
          en: "'der wichtigste Satz steht am Anfang: Warum bewirbst du dich bei genau dieser Firma?' Salary and a list of posts are not mentioned at all.",
          it: "»der wichtigste Satz steht am Anfang: Warum bewirbst du dich bei genau dieser Firma?« Stipendio ed elenco dei posti non compaiono affatto.",
          bn: "»der wichtigste Satz steht am Anfang: Warum bewirbst du dich bei genau dieser Firma?« বেতন বা পদের তালিকার কথা লেখায় নেই।",
        },
      },
      {
        nr: 8,
        question: "Wie soll man mit Lücken im Lebenslauf umgehen?",
        options: [
          "Sie erklären",
          "Sie weglassen, damit sie nicht auffallen",
          "Den Lebenslauf vorwärts schreiben, dann fallen sie weniger auf",
        ],
        answerIndex: 0,
        why: {
          de: "»deshalb ist es besser, sie zu erklären, als sie zu verstecken«. Der Text sagt außerdem, dass ein Umzug ins Ausland gar keine Lücke ist, sondern ein Grund.",
          en: "'deshalb ist es besser, sie zu erklären, als sie zu verstecken'. The text also says a move abroad is not a gap at all but a reason.",
          it: "»deshalb ist es besser, sie zu erklären, als sie zu verstecken«. Il testo aggiunge che un trasferimento all'estero non è un vuoto ma una ragione.",
          bn: "»deshalb ist es besser, sie zu erklären, als sie zu verstecken«। লেখাটি আরও বলে, বিদেশে চলে আসা কোনো ফাঁক নয়, বরং একটি কারণ।",
        },
      },
      {
        nr: 9,
        question: "Was gilt für ausländische Abschlüsse?",
        options: [
          "Ohne Anerkennung darf man sich nicht bewerben.",
          "Die Anerkennung übernimmt immer der Betrieb.",
          "Man kann sich bewerben und schreiben, dass das Verfahren läuft.",
        ],
        answerIndex: 2,
        why: {
          de: "»Man kann sich aber auch ohne sie bewerben und im Anschreiben erwähnen, dass das Verfahren läuft.« Antwort a behauptet ein Verbot, das im Text nicht steht.",
          en: "'Man kann sich aber auch ohne sie bewerben und im Anschreiben erwähnen, dass das Verfahren läuft.' Answer a claims a ban the text never states.",
          it: "»Man kann sich aber auch ohne sie bewerben und im Anschreiben erwähnen, dass das Verfahren läuft.« La risposta a afferma un divieto che il testo non dice.",
          bn: "»Man kann sich aber auch ohne sie bewerben und im Anschreiben erwähnen, dass das Verfahren läuft.« উত্তর a এমন একটি নিষেধাজ্ঞার কথা বলে যা লেখায় নেই।",
        },
      },
      {
        nr: 10,
        question: "Was ist laut Text wichtiger?",
        options: [
          "Ein B2-Text, auch mit Fehlern",
          "Ein fehlerfreier Text auf B1-Niveau",
          "Ein möglichst langes Anschreiben",
        ],
        answerIndex: 1,
        why: {
          de: "»Ein B1-Text ohne Rechtschreibfehler wirkt besser als ein B2-Text voller Fehler.« Genau deshalb lohnt sich das Korrekturlesen mehr als schwierige Wörter.",
          en: "'Ein B1-Text ohne Rechtschreibfehler wirkt besser als ein B2-Text voller Fehler.' That is exactly why proof-reading pays better than difficult vocabulary.",
          it: "»Ein B1-Text ohne Rechtschreibfehler wirkt besser als ein B2-Text voller Fehler.« Per questo rileggere conviene più che usare parole difficili.",
          bn: "»Ein B1-Text ohne Rechtschreibfehler wirkt besser als ein B2-Text voller Fehler.« তাই কঠিন শব্দের চেয়ে বানান মিলিয়ে দেখা বেশি কাজে দেয়।",
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
{ key: "a", title: "Bewerbungstraining in der Gruppe", text: "Wir üben das Vorstellungsgespräch mit Video. Vier Termine, jeweils montags. Für Teilnehmende ab Niveau A2." },
      { key: "b", title: "Deutsch am Arbeitsplatz", text: "Kurs für Berufstätige mit Niveau B1. Fachwörter, Telefonate und E-Mails. Dienstag- und Donnerstagabend, 18 bis 20 Uhr." },
      { key: "c", title: "Praktikumsplätze Informatik", text: "Drei Plätze ab Januar in einem IT-Betrieb. Dauer: drei Monate. Bewerbung per E-Mail mit kurzem Lebenslauf." },
      { key: "d", title: "IHK-Abendkurse", text: "Zusätzliche Abschlüsse neben dem Beruf. Unterricht freitagabends und samstags. Anmeldung bis Ende September." },
      { key: "e", title: "Bewerbungsmappe prüfen lassen", text: "Wir lesen Ihr Anschreiben und Ihren Lebenslauf und geben schriftliche Rückmeldung innerhalb von drei Tagen. Kostenlos für Arbeitssuchende." },
      { key: "f", title: "Rechtsberatung Arbeitsrecht", text: "Fragen zu Kündigung, Lohn oder Arbeitsvertrag? Erstberatung dienstags von 15 bis 18 Uhr, ohne Anmeldung." },
      { key: "g", title: "Aushilfe im Lager gesucht", text: "Zehn Stunden pro Woche, Arbeitszeit nach Absprache am Wochenende. Kein Deutsch auf hohem Niveau nötig. Sofort zu besetzen." },
      { key: "h", title: "Computerkurs für den Wiedereinstieg", text: "Grundlagen von Word, Excel und E-Mail. Vormittags, in kleinen Gruppen, für Menschen nach längerer Pause." },
      { key: "i", title: "Anerkennungsberatung", text: "Beratung zu ausländischen Schul- und Berufsabschlüssen. Wir sagen Ihnen, welche Stelle zuständig ist und welche Unterlagen Sie brauchen. Termine nach Vereinbarung." },
      { key: "j", title: "Kinderbetreuung für Schichtarbeitende", text: "Betreuung auch früh morgens und abends, für Eltern mit unregelmäßigen Arbeitszeiten. Ab zwei Jahren." },
      { key: "k", title: "Bewerbungsfotos im Studio", text: "Professionelle Fotos für Ihre Bewerbung, Termin innerhalb einer Woche. Digitale Dateien am selben Tag." },
      { key: "l", title: "Fahrdienst zur Arbeit", text: "Mitfahrgelegenheit ins Industriegebiet, Abfahrt täglich 5.30 Uhr ab Bahnhof. Kostenbeteiligung nach Absprache." },
    ],

    situations: [
      {
        nr: 11,
        text: "Sie haben Ihr Anschreiben fertig und möchten wissen, ob es gut genug ist, bevor Sie es abschicken.",
        answerKey: "e",
        why: {
          de: "Anzeige e) prüft genau Anschreiben und Lebenslauf und gibt schriftliche Rückmeldung. Anzeige a) übt das Gespräch, nicht die Unterlagen.",
          en: "Advert e) checks exactly the cover letter and CV and gives written feedback. Advert a) practises the interview, not the documents.",
          it: "L'annuncio e) verifica proprio lettera e curriculum con riscontro scritto. L'annuncio a) allena il colloquio, non i documenti.",
          bn: "বিজ্ঞাপন e) ঠিক প্রেরণপত্র ও জীবনবৃত্তান্ত দেখে লিখিত মতামত দেয়। বিজ্ঞাপন a) সাক্ষাৎকারের অনুশীলন করায়, কাগজপত্রের নয়।",
        },
      },
      {
        nr: 12,
        text: "Ihr Schulabschluss ist aus Italien und Sie wissen nicht, welche Behörde ihn anerkennt.",
        answerKey: "i",
        why: {
          de: "Anzeige i) berät zu ausländischen Abschlüssen und nennt ausdrücklich die zuständige Stelle.",
          en: "Advert i) advises on foreign qualifications and explicitly names the responsible office.",
          it: "L'annuncio i) offre consulenza sui titoli esteri e indica esplicitamente l'ufficio competente.",
          bn: "বিজ্ঞাপন i) বিদেশি সনদ নিয়ে পরামর্শ দেয় এবং দায়িত্বপ্রাপ্ত দপ্তরের কথা স্পষ্ট বলে।",
        },
      },
      {
        nr: 13,
        text: "Sie arbeiten tagsüber und möchten Ihr Deutsch für Telefonate und E-Mails im Job verbessern.",
        answerKey: "b",
        why: {
          de: "Anzeige b) nennt Telefonate und E-Mails wörtlich und findet abends statt. Beide Bedingungen stimmen.",
          en: "Advert b) names phone calls and emails literally and runs in the evening. Both conditions match.",
          it: "L'annuncio b) cita letteralmente telefonate ed e-mail e si tiene la sera. Entrambe le condizioni corrispondono.",
          bn: "বিজ্ঞাপন b)-তে ফোন ও ই-মেইলের কথা হুবহু আছে এবং ক্লাস সন্ধ্যায়। দুটি শর্তই মেলে।",
        },
      },
      {
        nr: 14,
        text: "Sie suchen einen kleinen Job am Wochenende, trauen sich aber mit Ihrem Deutsch noch nicht viel zu.",
        answerKey: "g",
        why: {
          de: "Anzeige g) bietet Wochenendarbeit und sagt ausdrücklich, dass kein hohes Deutschniveau nötig ist.",
          en: "Advert g) offers weekend work and states explicitly that a high level of German is not needed.",
          it: "L'annuncio g) offre lavoro nel fine settimana e dice esplicitamente che non serve un tedesco di alto livello.",
          bn: "বিজ্ঞাপন g) সপ্তাহান্তের কাজ দেয় এবং স্পষ্ট বলে যে উঁচু স্তরের জার্মান লাগবে না।",
        },
      },
      {
        nr: 15,
        text: "Sie möchten neben Ihrer Stelle einen weiteren Abschluss machen und können nur am Wochenende.",
        answerKey: "d",
        why: {
          de: "Anzeige d) bietet zusätzliche Abschlüsse neben dem Beruf, freitagabends und samstags. Anzeige b) ist ein Sprachkurs, kein Abschluss.",
          en: "Advert d) offers extra qualifications alongside work, on Friday evenings and Saturdays. Advert b) is a language course, not a qualification.",
          it: "L'annuncio d) offre titoli aggiuntivi accanto al lavoro, venerdì sera e sabato. L'annuncio b) è un corso di lingua, non un titolo.",
          bn: "বিজ্ঞাপন d) চাকরির পাশাপাশি অতিরিক্ত সনদ দেয়, শুক্রবার সন্ধ্যা ও শনিবার। বিজ্ঞাপন b) একটি ভাষা কোর্স, সনদ নয়।",
        },
      },
      {
        nr: 16,
        text: "Sie arbeiten in wechselnden Schichten und brauchen früh morgens jemanden für Ihr Kind.",
        answerKey: "j",
        why: {
          de: "Anzeige j) betreut ausdrücklich früh morgens und abends, für Eltern mit unregelmäßigen Arbeitszeiten.",
          en: "Advert j) explicitly offers early-morning and evening care for parents with irregular hours.",
          it: "L'annuncio j) offre esplicitamente assistenza la mattina presto e la sera per genitori con orari irregolari.",
          bn: "বিজ্ঞাপন j) স্পষ্টভাবেই ভোরে ও সন্ধ্যায় দেখাশোনা করে, অনিয়মিত সময়ে কাজ করা অভিভাবকদের জন্য।",
        },
      },
      {
        nr: 17,
        text: "Ihr Chef hat Ihnen gekündigt und Sie wissen nicht, ob das erlaubt war.",
        answerKey: "f",
        why: {
          de: "Anzeige f) berät zu Kündigung und Arbeitsvertrag, ohne Anmeldung. Das ist eine Rechtsfrage, keine Bewerbungsfrage.",
          en: "Advert f) advises on dismissal and employment contracts, no appointment needed. This is a legal question, not an application question.",
          it: "L'annuncio f) offre consulenza su licenziamento e contratto, senza appuntamento. È una questione legale, non di candidatura.",
          bn: "বিজ্ঞাপন f) চাকরিচ্যুতি ও চুক্তি নিয়ে পরামর্শ দেয়, আগে থেকে সময় নেওয়া লাগে না। এটি আইনি প্রশ্ন, আবেদনের নয়।",
        },
      },
      {
        nr: 18,
        text: "Sie suchen einen Praktikumsplatz im IT-Bereich ab Anfang des Jahres.",
        answerKey: "c",
        why: {
          de: "Anzeige c) bietet drei IT-Praktikumsplätze ab Januar. Anfang des Jahres und Januar sind dasselbe.",
          en: "Advert c) offers three IT internships from January. 'Beginning of the year' and January are the same thing.",
          it: "L'annuncio c) offre tre tirocini IT da gennaio. »Inizio anno« e gennaio coincidono.",
          bn: "বিজ্ঞাপন c) জানুয়ারি থেকে তিনটি IT ইন্টার্নশিপ দেয়। »বছরের শুরু« আর জানুয়ারি একই।",
        },
      },
      {
        nr: 19,
        text: "Sie haben lange nicht gearbeitet und möchten erst einmal wieder mit Word und E-Mail umgehen lernen.",
        answerKey: "h",
        why: {
          de: "Anzeige h) ist genau für Menschen nach längerer Pause und nennt Word, Excel und E-Mail.",
          en: "Advert h) is aimed exactly at people returning after a long break and names Word, Excel and email.",
          it: "L'annuncio h) è pensato proprio per chi rientra dopo una lunga pausa e cita Word, Excel ed e-mail.",
          bn: "বিজ্ঞাপন h) ঠিক দীর্ঘ বিরতির পরে ফেরা মানুষদের জন্য এবং Word, Excel ও ই-মেইলের কথা বলে।",
        },
      },
      {
        nr: 20,
        text: "Ihr neuer Betrieb verlangt Sicherheitsschuhe und Arbeitskleidung. Sie suchen, wo man so etwas günstig bekommt.",
        answerKey: "x",
        why: {
          de: "Keine Anzeige passt. Alle zwölf drehen sich um Beratung, Kurse, Jobs oder Betreuung — Arbeitskleidung verkauft keine davon. Fast richtig ist auch hier falsch.",
          en: "No advert fits. All twelve are about advice, courses, jobs or childcare — none sells work clothing. Almost right is wrong here too.",
          it: "Nessun annuncio va bene. Tutti e dodici riguardano consulenza, corsi, lavoro o assistenza: nessuno vende abbigliamento da lavoro. Anche qui, quasi giusto è sbagliato.",
          bn: "কোনো বিজ্ঞাপনই মেলে না। বারোটিই পরামর্শ, কোর্স, চাকরি বা শিশু দেখাশোনা নিয়ে — কেউই কাজের পোশাক বিক্রি করে না। এখানেও প্রায় ঠিক মানে ভুল।",
        },
      },
    ],
  },

  glossary: [
    g("dazuverdienen", "dazuverdienen", undefined, "to earn extra on the side", "guadagnare qualcosa in più", "বাড়তি আয় করা"),
    g("Mindestlohn", "der Mindestlohn", "der", "minimum wage", "salario minimo", "ন্যূনতম মজুরি"),
    g("Anspruch", "der Anspruch", "der", "entitlement, claim", "diritto", "অধিকার, দাবি"),
    g("Beschäftigte", "der/die Beschäftigte", undefined, "employee", "dipendente", "কর্মচারী"),
    g("reduzieren", "reduzieren", undefined, "to reduce", "ridurre", "কমানো"),
    g("Lohn", "der Lohn", "der", "wage, pay", "salario", "মজুরি"),
    g("Gebühren", "die Gebühr", "die", "fee", "tassa, quota", "ফি"),
    g("verzichten", "verzichten auf", undefined, "to do without, to drop", "rinunciare a", "বাদ দেওয়া"),
    g("beurteilt", "beurteilen", undefined, "to judge, assess", "giudicare", "বিচার করা"),
    g("Fähigkeiten", "die Fähigkeit", "die", "ability, skill", "capacità", "দক্ষতা"),
    g("Pausenzeiten", "die Pausenzeit", "die", "break times", "orari delle pause", "বিরতির সময়"),
    g("unsicher", "unsicher", undefined, "unsure, insecure", "insicuro", "অনিশ্চিত"),
    g("Anschreiben", "das Anschreiben", "das", "cover letter", "lettera di presentazione", "প্রেরণপত্র"),
    g("Lebenslauf", "der Lebenslauf", "der", "CV, résumé", "curriculum vitae", "জীবনবৃত্তান্ত"),
    g("Zeugnisse", "das Zeugnis", "das", "certificate, reference", "certificato", "সনদপত্র"),
    g("Absagen", "die Absage", "die", "rejection", "rifiuto", "প্রত্যাখ্যান"),
    g("IT-Abteilung", "die Abteilung", "die", "IT department", "reparto", "বিভাগ"),
    g("eingerichtet", "einrichten", undefined, "to set up", "configurare", "স্থাপন করা"),
    g("rückwärts", "rückwärts", undefined, "backwards", "all'indietro", "উল্টো দিকে"),
    g("Lücken", "die Lücke", "die", "gap", "vuoto, lacuna", "ফাঁক"),
    g("verstecken", "verstecken", undefined, "to hide", "nascondere", "লুকানো"),
    g("Anerkennung", "die Anerkennung", "die", "recognition (of a qualification)", "riconoscimento", "স্বীকৃতি"),
    g("Verfahren", "das Verfahren", "das", "procedure, process", "procedura", "প্রক্রিয়া"),
    g("Personalabteilungen", "die Personalabteilung", "die", "HR department", "ufficio del personale", "কর্মী বিভাগ"),
    g("Rechtschreibfehler", "der Rechtschreibfehler", "der", "spelling mistake", "errore di ortografia", "বানান ভুল"),
    g("gegenlesen", "gegenlesen", undefined, "to proof-read", "rileggere", "মিলিয়ে পড়া"),
    g("Rückmeldung", "die Rückmeldung", "die", "feedback", "riscontro", "মতামত"),
    g("zuständig", "zuständig", undefined, "responsible, in charge", "competente", "দায়িত্বপ্রাপ্ত"),
    g("Aushilfe", "die Aushilfe", "die", "temporary helper", "aiutante temporaneo", "সাময়িক সহকারী"),
    g("Absprache", "die Absprache", "die", "arrangement", "accordo", "সমঝোতা"),
    g("Vereinbarung", "die Vereinbarung", "die", "agreement, appointment", "accordo", "চুক্তি, সময় নির্ধারণ"),
    g("Schichtarbeitende", "der/die Schichtarbeitende", undefined, "shift worker", "turnista", "শিফটে কাজ করা ব্যক্তি"),
    g("unregelmäßigen", "unregelmäßig", undefined, "irregular", "irregolare", "অনিয়মিত"),
    g("Kündigung", "die Kündigung", "die", "dismissal, notice", "licenziamento", "চাকরিচ্যুতি"),
    g("Erstberatung", "die Erstberatung", "die", "initial consultation", "prima consulenza", "প্রাথমিক পরামর্শ"),
    g("Mitfahrgelegenheit", "die Mitfahrgelegenheit", "die", "lift, car share", "passaggio in auto", "গাড়িতে সঙ্গী হওয়ার সুযোগ"),
    g("Kostenbeteiligung", "die Kostenbeteiligung", "die", "sharing of costs", "partecipazione alle spese", "খরচ ভাগাভাগি"),
    g("Wiedereinstieg", "der Wiedereinstieg", "der", "return to work", "rientro al lavoro", "কাজে ফেরা"),
    g("Sicherheitsschuhe", "der Sicherheitsschuh", "der", "safety shoes", "scarpe antinfortunistiche", "নিরাপত্তা জুতা"),
  ],
};

/** Compact glossary helper — the same one the other reading sets use. */
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
