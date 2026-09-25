import type { GlossaryEntry, LesenSet } from "./types";

/** Local helper so a glossary entry stays one readable line. */
function g(
  word: string,
  base: string | undefined,
  article: "der" | "die" | "das" | undefined,
  en: string,
  it: string,
  bn: string,
): GlossaryEntry {
  return { word, base, article, meaning: { en, it, bn } };
}

/**
 * LES-05 — Ausbildung und Weiterbildung.
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Where the traps are:
 *   · Teil 1 text 4 is about people who BREAK OFF an apprenticeship;
 *     heading c) "Warum so viele abbrechen" fits, while heading g)
 *     "Zu wenige Bewerber" describes a different problem the text also
 *     mentions in passing. The heading must match the whole text, not
 *     one sentence of it.
 *   · Teil 2 question 7 rests on "dual" meaning two PLACES (company and
 *     school), not two qualifications.
 *   · Teil 3 situation 15 answers x: the applicant wants an evening
 *     course, and the only evening offer is for people who already have
 *     a qualification.
 */
export const les05: LesenSet = {
  code: "LES-05",

  title: {
    de: "Ausbildung, Umschulung und Weiterbildung",
    en: "Apprenticeships, retraining and further education",
    it: "Formazione, riqualificazione e aggiornamento",
    bn: "প্রশিক্ষণ, পুনঃপ্রশিক্ষণ ও উচ্চতর শিক্ষা",
  },

  intro: {
    de: "Drei Teile wie in der Prüfung. Dieses Thema betrifft dich direkt — die Wörter hier wirst du in echten Bewerbungen wiedersehen.",
    en: "Three parts, as in the exam. This topic concerns you directly — you will meet these words again in real applications.",
    it: "Tre parti, come nell'esame. Questo tema ti riguarda da vicino: ritroverai queste parole in candidature reali.",
    bn: "পরীক্ষার মতোই তিনটি অংশ। এই বিষয়টি সরাসরি আপনার কাজে লাগবে — এই শব্দগুলো সত্যিকারের আবেদনেও আবার পাবেন।",
  },

  /* ================================================================== */
  teil1: {
    instruction: {
      de: "Lies die fünf Texte und die Überschriften a–j. Welche Überschrift passt zu welchem Text? Fünf Überschriften bleiben übrig.",
      en: "Read the five texts and the headings a–j. Which heading fits which text? Five headings are left over.",
      it: "Leggi i cinque testi e i titoli a–j. Quale titolo va con quale testo? Cinque titoli restano inutilizzati.",
      bn: "পাঁচটি লেখা ও a–j শিরোনামগুলো পড়ুন। কোন শিরোনাম কোন লেখার সঙ্গে যায়? পাঁচটি শিরোনাম অব্যবহৃত থাকবে।",
    },

    headings: [
      { key: "a", text: "Lernen neben dem Beruf" },
      { key: "b", text: "Mit über dreißig noch einmal von vorn" },
      { key: "c", text: "Warum so viele die Ausbildung abbrechen" },
      { key: "d", text: "Das Praktikum als Eintrittskarte" },
      { key: "e", text: "Geld verdienen und lernen zugleich" },
      { key: "f", text: "Prüfungsangst ist normal" },
      { key: "g", text: "Zu wenige Bewerber für zu viele Stellen" },
      { key: "h", text: "Ein Zeugnis aus dem Ausland zählt auch" },
      { key: "i", text: "Kleine Betriebe bilden besser aus" },
      { key: "j", text: "Nach der Ausbildung ins Studium" },
    ],

    texts: [
      {
        nr: 1,
        text: "Wer in Deutschland eine Ausbildung macht, sitzt nicht nur in der Schule. Drei Tage in der Woche arbeitet man im Betrieb, zwei Tage lernt man in der Berufsschule. Und anders als beim Studium bekommt man vom ersten Monat an ein Gehalt. Es ist nicht hoch, aber es steigt in jedem Lehrjahr, und man muss keine Gebühren zahlen. Für viele ist genau das der Grund, sich gegen die Universität zu entscheiden.",
        answerKey: "e",
        why: {
          de: "»bekommt man vom ersten Monat an ein Gehalt« und gleichzeitig »lernt man in der Berufsschule« — beides zusammen, das ist Überschrift e). Überschrift j) wäre falsch: von einem Studium NACH der Ausbildung ist nirgends die Rede.",
          en: "'you get a salary from the first month' and at the same time 'you learn at vocational school' — both together, that is heading e). Heading j) would be wrong: a degree AFTER the apprenticeship is never mentioned.",
          it: "»si riceve uno stipendio dal primo mese« e insieme »si studia alla scuola professionale«: entrambe le cose, cioè il titolo e).",
          bn: "»প্রথম মাস থেকেই বেতন পাওয়া যায়« আর একই সঙ্গে »বৃত্তিমূলক স্কুলে শেখা« — দুটো একসঙ্গে, এটাই শিরোনাম e)।",
        },
      },
      {
        nr: 2,
        text: "Ein Praktikum wird oft unterschätzt. Dabei ist es der einfachste Weg in einen Betrieb: Man zeigt vier Wochen lang, was man kann, und lernt gleichzeitig, ob der Beruf überhaupt zu einem passt. Viele Firmen bieten ihren Praktikanten danach direkt einen Ausbildungsplatz an — oft, ohne die Stelle überhaupt auszuschreiben. Wer sich nur schriftlich bewirbt, erfährt von diesen Plätzen nie.",
        answerKey: "d",
        why: {
          de: "»der einfachste Weg in einen Betrieb«, »bieten ihren Praktikanten danach direkt einen Ausbildungsplatz an« — das Praktikum öffnet die Tür, also Eintrittskarte.",
          en: "'the easiest way into a company', 'offer their interns an apprenticeship directly afterwards' — the placement opens the door, hence the 'ticket in'.",
          it: "»la via più facile per entrare in un'azienda«: il tirocinio apre la porta, quindi il biglietto d'ingresso.",
          bn: "»কোম্পানিতে ঢোকার সবচেয়ে সহজ পথ« — ইন্টার্নশিপই দরজা খোলে, তাই প্রবেশপত্র।",
        },
      },
      {
        nr: 3,
        text: "Abends um sieben füllt sich der Computerraum der Volkshochschule. Die meisten hier sind zwischen fünfundzwanzig und fünfzig, haben tagsüber gearbeitet und lernen jetzt für einen Abschluss, den sie in ihrem Beruf brauchen. Manche zahlen selbst, bei anderen übernimmt der Arbeitgeber die Kosten. Der Kurs dauert ein Jahr und findet zweimal pro Woche statt — Freitag und Samstag bleiben frei.",
        answerKey: "a",
        why: {
          de: "»haben tagsüber gearbeitet und lernen jetzt« — Beruf am Tag, Lernen am Abend. Genau Überschrift a). Überschrift b) passt nicht: hier fängt niemand von vorn an, alle bleiben in ihrem Beruf.",
          en: "'they worked during the day and are now studying' — job by day, learning by evening. Exactly heading a). Heading b) does not fit: nobody starts over here, they stay in their profession.",
          it: "»hanno lavorato di giorno e ora studiano«: lavoro di giorno, studio la sera. Proprio il titolo a).",
          bn: "»দিনে কাজ করেছেন, এখন শিখছেন« — দিনে চাকরি, সন্ধ্যায় পড়া। ঠিক শিরোনাম a)।",
        },
      },
      {
        nr: 4,
        text: "Etwa jeder vierte Auszubildende beendet seine Ausbildung nicht. Die Gründe sind selten fachlich: Am häufigsten genannt werden Konflikte im Betrieb, unklare Aufgaben und das Gefühl, nur billige Arbeitskraft zu sein. Fachleute fordern deshalb mehr Betreuung im ersten Jahr. Dass es gleichzeitig zu wenige Bewerber gibt, macht die Lage für die Betriebe noch schwieriger.",
        answerKey: "c",
        why: {
          de: "»Etwa jeder vierte Auszubildende beendet seine Ausbildung nicht« und danach die Gründe — der ganze Text erklärt das Abbrechen. Überschrift g) beschreibt zwar den letzten Satz, aber eine Überschrift muss zum GANZEN Text passen, nicht zu einem Nebensatz am Ende.",
          en: "'About one apprentice in four does not finish' followed by the reasons — the whole text explains dropping out. Heading g) does describe the last sentence, but a heading has to fit the WHOLE text, not a closing aside.",
          it: "»Circa un apprendista su quattro non finisce«, poi i motivi: tutto il testo spiega l'abbandono. Il titolo g) descrive solo l'ultima frase.",
          bn: "»প্রায় প্রতি চারজনের একজন প্রশিক্ষণার্থী শেষ করেন না« আর তারপর কারণগুলো — পুরো লেখাটাই ঝরে পড়া নিয়ে। শিরোনাম g) কেবল শেষ বাক্যটি বোঝায়।",
        },
      },
      {
        nr: 5,
        text: "Mit siebenunddreißig noch einmal die Schulbank drücken? Für Anja Weber war das der einzige Weg. Nach fünfzehn Jahren im Verkauf konnte sie wegen ihres Rückens nicht mehr stehen. Die Agentur für Arbeit bezahlte ihr eine zweijährige Umschulung zur Bürokauffrau. Heute sagt sie, die schwierigste Zeit sei nicht der Unterricht gewesen, sondern die ersten Wochen, in denen sie die Jüngste im Kurs nicht war, aber auch nicht mehr die Schnellste.",
        answerKey: "b",
        why: {
          de: "»Mit siebenunddreißig noch einmal die Schulbank drücken«, »Umschulung« — ein kompletter Neuanfang nach dreißig. Das ist Überschrift b).",
          en: "'Going back to school at thirty-seven', 'retraining' — a complete new start after thirty. That is heading b).",
          it: "»Tornare sui banchi a trentasette anni«, »riqualificazione«: un nuovo inizio dopo i trenta.",
          bn: "»সাঁইত্রিশে আবার স্কুলের বেঞ্চে«, »Umschulung« — ত্রিশের পরে পুরো নতুন শুরু। এটাই শিরোনাম b)।",
        },
      },
    ],
  },

  /* ================================================================== */
  teil2: {
    instruction: {
      de: "Lies den Text und beantworte die Fragen 6–10. Nur eine Antwort ist richtig.",
      en: "Read the text and answer questions 6–10. Only one answer is correct.",
      it: "Leggi il testo e rispondi alle domande 6–10. Solo una risposta è corretta.",
      bn: "লেখাটি পড়ুন এবং ৬–১০ প্রশ্নের উত্তর দিন। কেবল একটি উত্তর সঠিক।",
    },

    heading: "Die duale Ausbildung – was sie ist und für wen sie sich lohnt",

    text: `Das deutsche Ausbildungssystem wird im Ausland oft bewundert und selten verstanden. Der Kern ist das Wort „dual": Eine Ausbildung findet an zwei Orten gleichzeitig statt — im Betrieb und in der Berufsschule. Man erwirbt also nicht zwei Abschlüsse, sondern einen, der an zwei Orten erarbeitet wird. Üblich sind drei Tage Betrieb und zwei Tage Schule, bei manchen Berufen auch Blockunterricht von mehreren Wochen am Stück.

Eine Ausbildung dauert meist drei Jahre, in einigen Berufen zweieinhalb. Wer gute Noten hat oder schon Vorkenntnisse mitbringt, kann sie auf Antrag verkürzen. Das ist keine Ausnahme: Etwa ein Fünftel aller Auszubildenden macht davon Gebrauch. Umgekehrt kann man verlängern, wenn es nicht gut läuft — auch das ist vorgesehen und kein Makel.

Bezahlt wird vom ersten Tag an. Die Vergütung steigt jedes Lehrjahr und liegt am Anfang je nach Beruf zwischen achthundert und tausendzweihundert Euro im Monat. Reich wird davon niemand, aber es ist ein entscheidender Unterschied zu einem Studium, das Geld kostet statt welches zu bringen.

Für Bewerberinnen und Bewerber aus dem Ausland gibt es zwei verbreitete Missverständnisse. Das erste: Man brauche ein anerkanntes deutsches Schulzeugnis. Das stimmt nicht — für die meisten Ausbildungsberufe gibt es überhaupt keine gesetzliche Mindestvoraussetzung, die Betriebe entscheiden selbst. Das zweite: Man müsse perfekt Deutsch sprechen. Verlangt wird in der Regel B1, manchmal B2, und viele Betriebe sind flexibel, wenn der Rest stimmt.

Was wirklich zählt, sagen Ausbilder erstaunlich einheitlich: Zuverlässigkeit. Wer pünktlich kommt, Bescheid sagt, wenn etwas nicht klappt, und nachfragt statt zu raten, hat bessere Karten als jemand mit besseren Noten. Das lässt sich in keiner Bewerbung behaupten — aber in einem Praktikum zeigen.`,

    questions: [
      {
        nr: 6,
        question: "Wie lange dauert eine Ausbildung normalerweise?",
        options: ["Zweieinhalb Jahre.", "Ein Fünftel kürzer.", "Meistens drei Jahre."],
        answerIndex: 2,
        why: {
          de: "»Eine Ausbildung dauert meist drei Jahre, in einigen Berufen zweieinhalb.« a) nennt die Ausnahme, b) verdreht das »ein Fünftel« — das bezieht sich auf die Zahl der Personen, nicht auf die Dauer.",
          en: "'An apprenticeship usually lasts three years, in some occupations two and a half.' a) names the exception; b) twists 'a fifth', which refers to the number of people, not the length.",
          it: "»Di solito tre anni, in alcune professioni due anni e mezzo.« La b) travisa »un quinto«, che riguarda le persone.",
          bn: "»সাধারণত তিন বছর, কিছু পেশায় আড়াই বছর।« a) ব্যতিক্রমটি বলে; b) »এক-পঞ্চমাংশ«কে বিকৃত করে — সেটা মানুষের সংখ্যা, সময় নয়।",
        },
      },
      {
        nr: 7,
        question: "Was bedeutet das Wort „dual\" in diesem Zusammenhang?",
        options: [
          "Man lernt an zwei Orten.",
          "Man bekommt zwei Abschlüsse.",
          "Man arbeitet in zwei Betrieben.",
        ],
        answerIndex: 0,
        why: {
          de: "»Eine Ausbildung findet an zwei Orten gleichzeitig statt — im Betrieb und in der Berufsschule.« Der Text widerlegt b) sogar ausdrücklich: »nicht zwei Abschlüsse, sondern einen«.",
          en: "'Training takes place in two places at once — the company and the vocational school.' The text explicitly refutes b): 'not two qualifications, but one'.",
          it: "»La formazione avviene in due luoghi: azienda e scuola professionale.« Il testo smentisce esplicitamente la b).",
          bn: "»প্রশিক্ষণ একই সঙ্গে দুই জায়গায় হয় — কোম্পানিতে ও বৃত্তিমূলক স্কুলে।« লেখাটি b)-কে স্পষ্টভাবেই নাকচ করে।",
        },
      },
      {
        nr: 8,
        question: "Was ist über das Verkürzen der Ausbildung richtig?",
        options: [
          "Es ist nur in Ausnahmefällen erlaubt.",
          "Es ist ziemlich verbreitet.",
          "Es geht nur bei sehr guten Noten.",
        ],
        answerIndex: 1,
        why: {
          de: "»Das ist keine Ausnahme: Etwa ein Fünftel aller Auszubildenden macht davon Gebrauch.« Der Text sagt »keine Ausnahme«, a) sagt das Gegenteil. Und c) übersieht »oder schon Vorkenntnisse mitbringt«.",
          en: "'That is not an exception: about a fifth of all apprentices make use of it.' The text says 'not an exception'; a) says the opposite. And c) overlooks 'or already brings prior knowledge'.",
          it: "»Non è un'eccezione: circa un quinto lo fa.« La c) ignora »o ha già conoscenze pregresse«.",
          bn: "»এটা ব্যতিক্রম নয়: প্রায় এক-পঞ্চমাংশ প্রশিক্ষণার্থী এটি করেন।« c) ভুলে যায় »বা আগে থেকেই জ্ঞান থাকলে« অংশটি।",
        },
      },
      {
        nr: 9,
        question: "Was sagt der Text über Schulzeugnisse aus dem Ausland?",
        options: [
          "Ohne anerkanntes deutsches Zeugnis geht es nicht.",
          "Nur die Berufsschule entscheidet darüber.",
          "Für die meisten Berufe gibt es keine gesetzliche Vorschrift.",
        ],
        answerIndex: 2,
        why: {
          de: "»für die meisten Ausbildungsberufe gibt es überhaupt keine gesetzliche Mindestvoraussetzung, die Betriebe entscheiden selbst«. a) ist genau das Missverständnis, das der Text aufräumt — und es steht als Zitat im Text, was es gefährlich macht.",
          en: "'for most training occupations there is no legal minimum requirement at all; the companies decide themselves'. a) is exactly the misconception the text clears up — and it appears quoted in the text, which is what makes it dangerous.",
          it: "»per la maggior parte delle professioni non c'è alcun requisito minimo di legge«. La a) è proprio il malinteso che il testo smonta.",
          bn: "»বেশিরভাগ প্রশিক্ষণ পেশায় আইনি কোনো ন্যূনতম শর্তই নেই, কোম্পানিই ঠিক করে«। a) ঠিক সেই ভুল ধারণা যা লেখাটি ভাঙে — আর সেটি উদ্ধৃতি হিসেবে লেখাতেই আছে, তাই বিপজ্জনক।",
        },
      },
      {
        nr: 10,
        question: "Was ist Ausbildern nach dem Text am wichtigsten?",
        options: ["Dass man sich auf jemanden verlassen kann.", "Gute Schulnoten.", "Perfektes Deutsch."],
        answerIndex: 0,
        why: {
          de: "»Zuverlässigkeit. Wer pünktlich kommt, Bescheid sagt … hat bessere Karten als jemand mit besseren Noten.« Zuverlässig sein heißt genau: man kann sich auf die Person verlassen.",
          en: "'Reliability. Someone who turns up on time, says when something is wrong … has better cards than someone with better marks.' Being reliable means precisely that you can be counted on.",
          it: "»Affidabilità … ha più possibilità di chi ha voti migliori.« Affidabile significa proprio che ci si può contare.",
          bn: "»নির্ভরযোগ্যতা। যিনি সময়মতো আসেন, কিছু না হলে জানান … তিনি ভালো নম্বরধারীর চেয়ে এগিয়ে।« নির্ভরযোগ্য মানেই তাঁর ওপর ভরসা করা যায়।",
        },
      },
    ],
  },

  /* ================================================================== */
  teil3: {
    instruction: {
      de: "Lies die Situationen 11–20 und die Anzeigen a–l. Welche Anzeige passt? Wenn keine passt, antworte x.",
      en: "Read situations 11–20 and adverts a–l. Which advert fits? If none fits, answer x.",
      it: "Leggi le situazioni 11–20 e gli annunci a–l. Quale annuncio va bene? Se nessuno va bene, rispondi x.",
      bn: "১১–২০ পরিস্থিতি ও a–l বিজ্ঞাপন পড়ুন। কোন বিজ্ঞাপনটি মানানসই? কোনোটি না মিললে x লিখুন।",
    },

    anzeigen: [
      {
        key: "a",
        title: "Novatec sucht Auszubildende",
        text: "Zum ersten September suchen wir zwei Auszubildende als Fachinformatiker. Deutsch mindestens B1. Bewerbung per E-Mail mit Lebenslauf, ein Anschreiben ist erwünscht.",
      },
      {
        key: "b",
        title: "Berufsberatung der Agentur für Arbeit",
        text: "Sie wissen noch nicht, welcher Beruf zu Ihnen passt? Wir beraten Sie kostenlos, mit Termin. Auch geeignet für Menschen, die den Beruf wechseln möchten.",
      },
      {
        key: "c",
        title: "Umschulung mit Bildungsgutschein",
        text: "Zweijährige Umschulung im kaufmännischen Bereich. Voraussetzung ist ein Bildungsgutschein der Agentur für Arbeit. Beginn im Januar und im August.",
      },
      {
        key: "d",
        title: "Praktikumsbörse der IHK",
        text: "Freie Praktikumsplätze in Betrieben der Region, von zwei Wochen bis drei Monaten. Auch für Schülerinnen und Schüler und für Erwachsene ohne Abschluss.",
      },
      {
        key: "e",
        title: "Abendkurs: Vorbereitung auf die Abschlussprüfung",
        text: "Dienstags und donnerstags, achtzehn bis einundzwanzig Uhr. Nur für Teilnehmende, die bereits eine abgeschlossene Berufsausbildung haben.",
      },
      {
        key: "f",
        title: "Deutsch für den Beruf – B2",
        text: "Zwölf Wochen, vormittags. Für alle, die B1 bestanden haben und im Beruf sicherer sprechen wollen. Kosten werden oft vom Arbeitgeber übernommen.",
      },
      {
        key: "g",
        title: "Anerkennungsberatung",
        text: "Sie haben im Ausland eine Ausbildung abgeschlossen? Wir prüfen, ob Ihr Abschluss in Deutschland anerkannt werden kann. Kostenlos, Beratung auch auf Englisch.",
      },
      {
        key: "h",
        title: "Bewerbungstraining",
        text: "An zwei Samstagen üben wir Anschreiben, Lebenslauf und das Vorstellungsgespräch. Kleine Gruppen, kostenlos. Anmeldung erforderlich.",
      },
      {
        key: "i",
        title: "Einstiegsqualifizierung im Handwerk",
        text: "Sechs bis zwölf Monate im Betrieb als Vorbereitung auf eine Ausbildung. Für junge Leute unter fünfundzwanzig ohne Ausbildungsplatz. Mit Vergütung.",
      },
      {
        key: "j",
        title: "Nachhilfe für Auszubildende",
        text: "Sie haben Probleme in der Berufsschule? Unsere ausbildungsbegleitenden Hilfen unterstützen Sie kostenlos, damit Sie die Ausbildung nicht abbrechen müssen.",
      },
      {
        key: "k",
        title: "Tag der offenen Tür im Berufskolleg",
        text: "Am zwölften November von zehn bis sechzehn Uhr. Lehrkräfte und Auszubildende beantworten Ihre Fragen zu allen Bildungsgängen. Ohne Anmeldung.",
      },
      {
        key: "l",
        title: "Computerkurs für Anfänger",
        text: "Grundlagen am PC: Textverarbeitung, E-Mail, Internet. Zehn Termine, montags vormittags. Für Menschen ohne Vorkenntnisse, achtzig Euro.",
      },
    ],

    situations: [
      {
        nr: 11,
        text: "Sie haben Ihr Deutsch-B1-Zertifikat und möchten sich als Fachinformatiker bewerben.",
        answerKey: "a",
        why: {
          de: "»Auszubildende als Fachinformatiker. Deutsch mindestens B1.« Beruf und Sprachniveau stimmen beide — zwei Treffer in einer Anzeige.",
          en: "'Apprentices as IT specialists. German at least B1.' Both the occupation and the language level match — two hits in one advert.",
          it: "»Apprendisti come informatici. Tedesco almeno B1.« Professione e livello linguistico coincidono.",
          bn: "»Fachinformatiker হিসেবে প্রশিক্ষণার্থী। জার্মান অন্তত B1।« পেশা ও ভাষার স্তর দুটোই মেলে।",
        },
      },
      {
        nr: 12,
        text: "Sie haben in Ihrem Heimatland eine Ausbildung gemacht und wollen wissen, ob sie hier etwas gilt.",
        answerKey: "g",
        why: {
          de: "»Wir prüfen, ob Ihr Abschluss in Deutschland anerkannt werden kann.« Anzeige b berät zur Berufswahl — das ist etwas anderes als Anerkennung.",
          en: "'We check whether your qualification can be recognised in Germany.' Advert b advises on choosing a career, which is a different thing from recognition.",
          it: "»Verifichiamo se il suo titolo può essere riconosciuto.« L'annuncio b riguarda la scelta della professione.",
          bn: "»আমরা যাচাই করি আপনার সনদ জার্মানিতে স্বীকৃত হতে পারে কি না।« বিজ্ঞাপন b পেশা বাছাইয়ের পরামর্শ — ভিন্ন জিনিস।",
        },
      },
      {
        nr: 13,
        text: "Sie sind zwanzig, haben keinen Ausbildungsplatz gefunden und möchten trotzdem schon in einem Betrieb anfangen.",
        answerKey: "i",
        why: {
          de: "»Für junge Leute unter fünfundzwanzig ohne Ausbildungsplatz. Mit Vergütung.« Alter und Lage passen genau. Anzeige d bietet zwar auch Betriebserfahrung, aber unbezahlt und kürzer.",
          en: "'For young people under twenty-five without an apprenticeship. Paid.' Age and situation fit exactly. Advert d also offers company experience, but unpaid and shorter.",
          it: "»Per giovani sotto i venticinque senza posto di formazione. Retribuito.« Età e situazione combaciano.",
          bn: "»পঁচিশের নিচে, প্রশিক্ষণের জায়গা পাননি এমন তরুণদের জন্য। বেতনসহ।« বয়স ও অবস্থা দুটোই মেলে।",
        },
      },
      {
        nr: 14,
        text: "Ihr Sohn macht eine Ausbildung, kommt in der Berufsschule nicht mit und denkt ans Aufhören.",
        answerKey: "j",
        why: {
          de: "»Sie haben Probleme in der Berufsschule? … damit Sie die Ausbildung nicht abbrechen müssen.« Die Anzeige beschreibt genau diese Lage, bis hin zum Gedanken ans Aufhören.",
          en: "'Struggling at vocational school? … so that you do not have to break off your training.' The advert describes exactly this situation, right down to the thought of quitting.",
          it: "»Problemi alla scuola professionale? … per non dover interrompere la formazione.«",
          bn: "»বৃত্তিমূলক স্কুলে সমস্যা? … যাতে প্রশিক্ষণ ছাড়তে না হয়।« বিজ্ঞাপনটি ঠিক এই অবস্থাই বর্ণনা করে।",
        },
      },
      {
        nr: 15,
        text: "Sie arbeiten tagsüber, haben keine abgeschlossene Ausbildung und suchen einen Kurs am Abend.",
        answerKey: "x",
        why: {
          de: "Anzeige e ist der einzige Abendkurs — aber »Nur für Teilnehmende, die bereits eine abgeschlossene Berufsausbildung haben«. Sie haben keine. Anzeige f und l laufen vormittags, also während Ihrer Arbeitszeit. Jede Anzeige scheitert an einer anderen Bedingung; das ist das typische x-Muster.",
          en: "Advert e is the only evening course — but 'only for participants who already have a completed vocational qualification'. You do not. Adverts f and l run in the morning, during your working hours. Each advert fails on a different condition; that is the typical x pattern.",
          it: "L'annuncio e è l'unico serale, ma »solo per chi ha già una formazione conclusa«. Gli annunci f e l sono di mattina. Ogni annuncio fallisce su una condizione diversa.",
          bn: "বিজ্ঞাপন e-ই একমাত্র সান্ধ্য কোর্স — কিন্তু »কেবল যাঁদের প্রশিক্ষণ ইতিমধ্যে সম্পন্ন«। আপনার তা নেই। f ও l সকালে, অর্থাৎ আপনার কাজের সময়ে। প্রতিটি বিজ্ঞাপন আলাদা শর্তে আটকে যায় — এটাই চেনা x-ধরন।",
        },
      },
      {
        nr: 16,
        text: "Sie haben B1 geschafft und möchten im Beruf sicherer sprechen.",
        answerKey: "f",
        why: {
          de: "»Für alle, die B1 bestanden haben und im Beruf sicherer sprechen wollen.« Die Anzeige wiederholt die Situation fast Wort für Wort.",
          en: "'For everyone who has passed B1 and wants to speak more confidently at work.' The advert repeats the situation almost word for word.",
          it: "»Per chi ha superato il B1 e vuole parlare con più sicurezza al lavoro.«",
          bn: "»যাঁরা B1 পাস করেছেন এবং কাজে আরও আত্মবিশ্বাসে কথা বলতে চান।« বিজ্ঞাপনটি পরিস্থিতিটাই প্রায় হুবহু বলে।",
        },
      },
      {
        nr: 17,
        text: "Sie schreiben seit Monaten Bewerbungen und bekommen nur Absagen. Sie möchten üben, was Sie falsch machen.",
        answerKey: "h",
        why: {
          de: "»üben wir Anschreiben, Lebenslauf und das Vorstellungsgespräch«. Genau die drei Stellen, an denen es schiefgehen kann.",
          en: "'we practise the covering letter, the CV and the interview' — exactly the three places where it can go wrong.",
          it: "»esercitiamo lettera, curriculum e colloquio«: i tre punti in cui si può sbagliare.",
          bn: "»আমরা অনুরোধপত্র, জীবনবৃত্তান্ত ও ইন্টারভিউ অনুশীলন করি« — ঠিক যে তিন জায়গায় ভুল হতে পারে।",
        },
      },
      {
        nr: 18,
        text: "Sie möchten sich einen Tag lang in Ruhe über verschiedene Bildungsgänge informieren, ohne sich vorher anzumelden.",
        answerKey: "k",
        why: {
          de: "»beantworten Ihre Fragen zu allen Bildungsgängen. Ohne Anmeldung.« Beide Bedingungen — Überblick und keine Anmeldung — stehen ausdrücklich da.",
          en: "'answer your questions about all courses of study. No registration needed.' Both conditions — an overview and no booking — are stated explicitly.",
          it: "»rispondono alle domande su tutti i percorsi. Senza iscrizione.«",
          bn: "»সব শিক্ষাধারা নিয়ে আপনার প্রশ্নের উত্তর দেন। নিবন্ধন ছাড়াই।« দুটি শর্তই স্পষ্ট।",
        },
      },
      {
        nr: 19,
        text: "Sie waren fünfzehn Jahre im Verkauf und können den Beruf aus gesundheitlichen Gründen nicht mehr ausüben. Die Agentur für Arbeit hat Ihnen einen Bildungsgutschein gegeben.",
        answerKey: "c",
        why: {
          de: "»Voraussetzung ist ein Bildungsgutschein der Agentur für Arbeit.« Der Gutschein in der Situation ist der Schlüssel: ohne ihn wäre die Anzeige nicht nutzbar, mit ihm passt sie exakt.",
          en: "'The prerequisite is an education voucher from the employment agency.' The voucher in the situation is the key: without it the advert is unusable, with it it fits exactly.",
          it: "»Il requisito è un buono formativo dell'agenzia del lavoro.« Il buono è la chiave.",
          bn: "»শর্ত হলো কর্মসংস্থান দপ্তরের Bildungsgutschein।« পরিস্থিতির সেই ভাউচারটিই চাবিকাঠি।",
        },
      },
      {
        nr: 20,
        text: "Sie sind sechsundvierzig, möchten den Beruf wechseln und wissen noch nicht, welcher zu Ihnen passt.",
        answerKey: "b",
        why: {
          de: "»Sie wissen noch nicht, welcher Beruf zu Ihnen passt? … Auch geeignet für Menschen, die den Beruf wechseln möchten.« Der zweite Satz fängt genau das Alter und die Absicht auf; Anzeige i wäre wegen der Altersgrenze ausgeschlossen.",
          en: "'Not sure which occupation suits you? … Also suitable for people who want to change career.' The second sentence catches exactly this age and intention; advert i would be ruled out by its age limit.",
          it: "»Non sa quale professione fa per lei? … Adatto anche a chi vuole cambiare lavoro.« L'annuncio i sarebbe escluso per il limite d'età.",
          bn: "»কোন পেশা আপনার জন্য জানেন না? … পেশা বদলাতে চাওয়া মানুষদের জন্যও।« দ্বিতীয় বাক্যটিই বয়স ও উদ্দেশ্য ধরে ফেলে; বিজ্ঞাপন i বয়সসীমার কারণে বাদ।",
        },
      },
    ],
  },

  /* ================================================================== */
  glossary: [
    g("betrieb", "der Betrieb", "der", "company, firm (as a workplace)", "azienda", "প্রতিষ্ঠান / কারখানা"),
    g("berufsschule", "die Berufsschule", "die", "vocational school", "scuola professionale", "বৃত্তিমূলক স্কুল"),
    g("gehalt", "das Gehalt", "das", "salary", "stipendio", "বেতন"),
    g("lehrjahr", "das Lehrjahr", "das", "year of the apprenticeship", "anno di apprendistato", "প্রশিক্ষণ বছর"),
    g("gebühren", "die Gebühr", "die", "fees", "tasse", "ফি"),
    g("praktikum", "das Praktikum", "das", "work placement, internship", "tirocinio", "ইন্টার্নশিপ"),
    g("unterschätzt", "unterschätzen", undefined, "underestimated", "sottovalutato", "কম গুরুত্ব দেওয়া"),
    g("praktikanten", "der Praktikant", "der", "interns", "tirocinanti", "ইন্টার্ন"),
    g("ausbildungsplatz", "der Ausbildungsplatz", "der", "apprenticeship place", "posto di formazione", "প্রশিক্ষণের জায়গা"),
    g("auszuschreiben", "ausschreiben", undefined, "to advertise (a position)", "mettere a bando", "বিজ্ঞপ্তি দেওয়া"),
    g("abschluss", "der Abschluss", "der", "qualification, final certificate", "titolo, diploma", "সনদ / ডিগ্রি"),
    g("arbeitgeber", "der Arbeitgeber", "der", "employer", "datore di lavoro", "নিয়োগকর্তা"),
    g("auszubildende", "der/die Auszubildende", undefined, "apprentices, trainees", "apprendisti", "প্রশিক্ষণার্থী"),
    g("konflikte", "der Konflikt", "der", "conflicts", "conflitti", "দ্বন্দ্ব"),
    g("arbeitskraft", "die Arbeitskraft", "die", "labour, worker", "manodopera", "শ্রমশক্তি"),
    g("betreuung", "die Betreuung", "die", "support, supervision", "assistenza", "তত্ত্বাবধান"),
    g("bewerber", "der Bewerber", "der", "applicants", "candidati", "আবেদনকারী"),
    g("umschulung", "die Umschulung", "die", "retraining for a new occupation", "riqualificazione", "পুনঃপ্রশিক্ষণ"),
    g("bürokauffrau", "die Bürokauffrau", "die", "office administrator (female)", "impiegata amministrativa", "অফিস প্রশাসক"),
    g("bewundert", "bewundern", undefined, "admired", "ammirato", "প্রশংসিত"),
    g("erwirbt", "erwerben", undefined, "acquires, gains", "acquisisce", "অর্জন করে"),
    g("blockunterricht", "der Blockunterricht", "der", "block teaching (several weeks at a time)", "insegnamento a blocchi", "ব্লক ক্লাস"),
    g("vorkenntnisse", "die Vorkenntnisse", "die", "prior knowledge", "conoscenze pregresse", "পূর্বজ্ঞান"),
    g("verkürzen", "verkürzen", undefined, "to shorten", "accorciare", "সংক্ষিপ্ত করা"),
    g("makel", "der Makel", "der", "blemish, something to be ashamed of", "macchia, difetto", "কলঙ্ক / লজ্জার বিষয়"),
    g("vergütung", "die Vergütung", "die", "pay, remuneration", "retribuzione", "পারিশ্রমিক"),
    g("missverständnisse", "das Missverständnis", "das", "misunderstandings", "malintesi", "ভুল বোঝাবুঝি"),
    g("mindestvoraussetzung", "die Mindestvoraussetzung", "die", "minimum requirement", "requisito minimo", "ন্যূনতম শর্ত"),
    g("zuverlässigkeit", "die Zuverlässigkeit", "die", "reliability", "affidabilità", "নির্ভরযোগ্যতা"),
    g("ausbilder", "der Ausbilder", "der", "trainers, instructors", "formatori", "প্রশিক্ষক"),
    g("lebenslauf", "der Lebenslauf", "der", "CV, résumé", "curriculum vitae", "জীবনবৃত্তান্ত"),
    g("anschreiben", "das Anschreiben", "das", "covering letter", "lettera di presentazione", "আবেদনপত্র"),
    g("bildungsgutschein", "der Bildungsgutschein", "der", "training voucher from the employment agency", "buono formativo", "শিক্ষা ভাউচার"),
    g("kaufmännischen", "kaufmännisch", undefined, "commercial, business (field)", "commerciale", "বাণিজ্যিক"),
    g("einstiegsqualifizierung", "die Einstiegsqualifizierung", "die", "entry qualification, pre-apprenticeship", "qualificazione d'ingresso", "প্রারম্ভিক যোগ্যতা"),
    g("handwerk", "das Handwerk", "das", "skilled trades, crafts", "artigianato", "কারিগরি পেশা"),
    g("ausbildungsbegleitenden", "ausbildungsbegleitend", undefined, "accompanying the apprenticeship", "di accompagnamento alla formazione", "প্রশিক্ষণের সহায়ক"),
    g("abbrechen", "abbrechen", undefined, "to break off, drop out", "interrompere", "মাঝপথে ছেড়ে দেওয়া"),
    g("bildungsgängen", "der Bildungsgang", "der", "courses of study, educational pathways", "percorsi formativi", "শিক্ষাধারা"),
    g("textverarbeitung", "die Textverarbeitung", "die", "word processing", "videoscrittura", "ওয়ার্ড প্রসেসিং"),
    g("vorstellungsgespräch", "das Vorstellungsgespräch", "das", "job interview", "colloquio di lavoro", "চাকরির সাক্ষাৎকার"),
  ],
};
