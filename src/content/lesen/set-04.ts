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
 * LES-04 — Ämter, Formulare und Anmeldungen.
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * This is the hardest vocabulary field in the whole exam, because German
 * officialese names ordinary things with long compound nouns: Anmeldung,
 * Meldebescheinigung, Aufenthaltstitel, Bearbeitungsgebühr. The glossary
 * is therefore larger than usual and deliberately breaks the compounds
 * apart in the explanations — that is a skill, not a crutch.
 *
 * The built-in traps:
 *   · Teil 1 heading e) and text 2 both speak about "Termine", but the
 *     text is about what to do when you cannot GET one.
 *   · Teil 2 question 7 turns on when the two-week deadline starts —
 *     the day you move in, not the day you sign the contract.
 *   · Teil 3 situation 17 answers x: an advert offers exactly the right
 *     help, but only to people who live in a different district.
 */
export const les04: LesenSet = {
  code: "LES-04",

  title: {
    de: "Ämter, Formulare und Anmeldungen",
    en: "Offices, forms and registration",
    it: "Uffici, moduli e iscrizioni",
    bn: "দপ্তর, ফর্ম ও নিবন্ধন",
  },

  intro: {
    de: "Drei Teile wie in der Prüfung. Die Wörter aus der Amtssprache sind lang — tippe sie an, dann siehst du, aus welchen Teilen sie bestehen.",
    en: "Three parts, as in the exam. The official vocabulary is long — tap a word to see what parts it is built from.",
    it: "Tre parti, come nell'esame. Il lessico burocratico è lungo: tocca una parola per vedere da quali parti è composta.",
    bn: "পরীক্ষার মতোই তিনটি অংশ। সরকারি ভাষার শব্দগুলো লম্বা — চাপ দিলে দেখবেন কোন কোন অংশে গড়া।",
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
      { key: "a", text: "Innerhalb von zwei Wochen zum Amt" },
      { key: "b", text: "Wenn das Formular auf Deutsch zu schwer ist" },
      { key: "c", text: "Neue Gebühren für den Reisepass" },
      { key: "d", text: "Vieles geht inzwischen von zu Hause aus" },
      { key: "e", text: "Kein Termin frei – was nun?" },
      { key: "f", text: "Das Bürgeramt zieht um" },
      { key: "g", text: "Warum so viele Anträge abgelehnt werden" },
      { key: "h", text: "Hilfe beim Ausfüllen – kostenlos und ohne Anmeldung" },
      { key: "i", text: "Öffnungszeiten am Samstag" },
      { key: "j", text: "Ein Ausweis für Kinder" },
    ],

    texts: [
      {
        nr: 1,
        text: "Wer in Deutschland umzieht, muss sich in der neuen Stadt anmelden. Dafür hat man genau vierzehn Tage Zeit, gerechnet ab dem Tag des Einzugs. Wer die Frist verpasst, muss im schlimmsten Fall eine Geldstrafe zahlen. Mitzubringen sind der Pass und die Wohnungsgeberbestätigung — ein Papier, das der Vermieter ausfüllt und unterschreibt. Ohne dieses Papier kann das Amt die Anmeldung nicht bearbeiten.",
        answerKey: "a",
        why: {
          de: "»genau vierzehn Tage Zeit« = innerhalb von zwei Wochen, und es geht darum, zum Amt zu gehen. Überschrift e) passt nicht: von fehlenden Terminen ist hier gar nicht die Rede.",
          en: "'exactly fourteen days' = within two weeks, and the point is going to the office. Heading e) does not fit: missing appointments are never mentioned here.",
          it: "»esattamente quattordici giorni« = entro due settimane, e si tratta di andare all'ufficio. Il titolo e) non c'entra.",
          bn: "»ঠিক চৌদ্দ দিন সময়« = দুই সপ্তাহের মধ্যে, আর কথা হচ্ছে দপ্তরে যাওয়া নিয়ে। শিরোনাম e) মেলে না।",
        },
      },
      {
        nr: 2,
        text: "In vielen Städten sind die Termine im Bürgeramt wochenlang ausgebucht. Wer dringend etwas braucht, sollte trotzdem nicht aufgeben: Oft werden am frühen Morgen Termine frei, weil andere absagen. Manche Ämter halten außerdem jeden Tag eine kleine Zahl von Plätzen für Notfälle zurück. Ein Anruf lohnt sich also, auch wenn der Kalender im Internet leer aussieht.",
        answerKey: "e",
        why: {
          de: "»wochenlang ausgebucht« und dann Tipps, was man dann machen kann — genau die Frage in Überschrift e). Achte darauf: Der Text löst ein Problem, er beschreibt keine neue Regel.",
          en: "'booked up for weeks' and then tips on what to do — exactly the question in heading e). Note: the text solves a problem, it does not describe a new rule.",
          it: "»esaurito per settimane« e poi consigli su cosa fare: proprio la domanda del titolo e).",
          bn: "»সপ্তাহের পর সপ্তাহ সব বুকড« আর তারপর কী করা যায় তার পরামর্শ — শিরোনাম e)-এর প্রশ্নটাই।",
        },
      },
      {
        nr: 3,
        text: "Immer mehr Wege zum Amt kann man sich sparen. Eine Meldebescheinigung, eine Geburtsurkunde oder die Ummeldung des Autos lassen sich in vielen Städten inzwischen im Internet bestellen. Man braucht dafür nur den Personalausweis mit Online-Funktion und ein Kartenlesegerät oder ein Handy mit der passenden App. Die Papiere kommen dann mit der Post nach Hause.",
        answerKey: "d",
        why: {
          de: "»kann man sich sparen«, »im Internet bestellen«, »mit der Post nach Hause« — alles heißt: von zu Hause aus. Das ist Überschrift d).",
          en: "'you can save yourself the trip', 'order online', 'come home by post' — all of it means: from home. That is heading d).",
          it: "»si può risparmiare«, »ordinare online«, »arrivano per posta«: tutto significa da casa.",
          bn: "»যাওয়া বাঁচানো যায়«, »ইন্টারনেটে অর্ডার«, »ডাকে বাড়িতে আসে« — সবই বলছে বাড়ি থেকে। এটাই শিরোনাম d)।",
        },
      },
      {
        nr: 4,
        text: "Amtliche Formulare sind auch für Muttersprachler schwer. In der Stadtbibliothek sitzt deshalb jeden Dienstag und Freitag jemand bereit, der beim Ausfüllen hilft — bei Anträgen für Wohngeld, Kindergeld oder das Jobcenter. Man muss sich nicht anmelden und zahlt nichts. Mitbringen sollte man alle Briefe, die man vom Amt bekommen hat, auch die, die man nicht versteht.",
        answerKey: "h",
        why: {
          de: "»beim Ausfüllen hilft«, »muss sich nicht anmelden«, »zahlt nichts« — die drei Teile der Überschrift h) stehen alle im Text. Überschrift b) klingt ähnlich, betont aber die Sprache; hier geht es um das Ausfüllen allgemein.",
          en: "'helps with filling in', 'no appointment needed', 'costs nothing' — all three parts of heading h) are in the text. Heading b) sounds similar but stresses language; here it is about filling forms in general.",
          it: "»aiuta a compilare«, »senza appuntamento«, »gratis«: le tre parti del titolo h) ci sono tutte.",
          bn: "»পূরণে সাহায্য«, »নিবন্ধন লাগে না«, »খরচ নেই« — শিরোনাম h)-এর তিনটি অংশই লেখায় আছে।",
        },
      },
      {
        nr: 5,
        text: "Ab dem ersten November finden Sie uns nicht mehr in der Kölner Straße. Das Bürgeramt befindet sich dann im neuen Verwaltungsgebäude am Markt, direkt neben der Post. Alle bereits vereinbarten Termine bleiben gültig, nur der Ort ändert sich. Die Bushaltestelle vor dem Gebäude heißt weiterhin Rathaus. Bitte beachten Sie, dass es am neuen Standort keine eigenen Parkplätze gibt.",
        answerKey: "f",
        why: {
          de: "»finden Sie uns nicht mehr in der Kölner Straße«, »befindet sich dann im neuen Verwaltungsgebäude« — ein Umzug. Überschrift i) wäre falsch: Öffnungszeiten werden nirgends genannt.",
          en: "'you will no longer find us in Kölner Straße', 'will then be in the new administrative building' — a move. Heading i) would be wrong: opening hours are never mentioned.",
          it: "»non ci troverete più in Kölner Straße«: un trasloco. Il titolo i) sarebbe sbagliato.",
          bn: "»আমাদের আর Kölner Straße-এ পাবেন না« — অর্থাৎ স্থানান্তর। শিরোনাম i) ভুল হতো: খোলার সময়ের কথা নেই।",
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

    heading: "Der erste Gang zum Bürgeramt – was wirklich wichtig ist",

    text: `Fast jeder, der neu in eine deutsche Stadt kommt, hat denselben ersten Termin: die Anmeldung beim Bürgeramt. Sie klingt harmlos, ist aber die Grundlage für fast alles, was danach kommt — für das Bankkonto, für die Steuernummer, manchmal sogar für den Handyvertrag.

Die Frist beträgt zwei Wochen. Wichtig ist, wie man sie rechnet: Sie beginnt am Tag des Einzugs, nicht am Tag der Vertragsunterschrift. Wer am ersten März einzieht, muss sich also bis zum fünfzehnten März angemeldet haben. Erst nach diesen zwei Wochen gilt man als verspätet — und erst dann darf das Amt überhaupt eine Gebühr verlangen. In der Praxis passiert das selten, wenn man einen guten Grund nennen kann.

Das wichtigste Papier heißt Wohnungsgeberbestätigung. Der Vermieter bestätigt darin, dass man wirklich dort wohnt. Viele scheitern genau daran: Sie erscheinen mit Pass und Mietvertrag, aber ohne dieses eine Formular — und der Mietvertrag ersetzt es nicht. Wer zur Untermiete wohnt, braucht die Bestätigung von der Person, die den Hauptmietvertrag hat.

Wie lange man auf einen Termin wartet, hängt stark von der Stadt ab. In kleineren Städten bekommt man oft innerhalb weniger Tage einen Platz, in großen kann es sechs Wochen dauern. Das ist ärgerlich, aber kein Grund zur Panik: Die Frist gilt als eingehalten, wenn man den Termin rechtzeitig gebucht hat, auch wenn er später stattfindet. Ein Screenshot der Buchung ist deshalb sinnvoll.

Und schließlich die Sprache. Niemand erwartet, dass man Amtsdeutsch beherrscht. Man darf eine Begleitperson mitbringen, die übersetzt, und die meisten Formulare gibt es auch in einfacher Sprache. Fragen kostet nichts — im Gegensatz zu einem falsch ausgefüllten Antrag, der Wochen später zurückkommt.`,

    questions: [
      {
        nr: 6,
        question: "Warum ist die Anmeldung laut Text so wichtig?",
        options: [
          "Weil man ohne sie keine Wohnung mieten darf.",
          "Weil viele andere Dinge davon abhängen.",
          "Weil sie in jeder Stadt anders ist.",
        ],
        answerIndex: 1,
        why: {
          de: "»die Grundlage für fast alles, was danach kommt — für das Bankkonto, für die Steuernummer …«. a) steht umgekehrt im Text: Man meldet sich an, NACHDEM man eingezogen ist.",
          en: "'the basis for almost everything that follows — the bank account, the tax number …'. a) is the reverse of the text: you register AFTER moving in.",
          it: "»la base per quasi tutto ciò che segue«. La a) è il contrario: ci si registra dopo il trasloco.",
          bn: "»এরপরের প্রায় সবকিছুর ভিত্তি — ব্যাংক অ্যাকাউন্ট, ট্যাক্স নম্বর …«। a) লেখার উল্টো: বাসায় ওঠার পরেই নিবন্ধন হয়।",
        },
      },
      {
        nr: 7,
        question: "Ab wann läuft die Frist von zwei Wochen?",
        options: [
          "Ab dem Tag, an dem man den Mietvertrag unterschreibt.",
          "Ab dem Tag, an dem man den Termin bucht.",
          "Ab dem Tag, an dem man einzieht.",
        ],
        answerIndex: 2,
        why: {
          de: "»Sie beginnt am Tag des Einzugs, nicht am Tag der Vertragsunterschrift.« Der Text nennt die falsche Antwort ausdrücklich — das macht er nur bei Punkten, die oft verwechselt werden.",
          en: "'It starts on the day you move in, not the day you sign.' The text names the wrong answer explicitly — it only does that for points people commonly confuse.",
          it: "»Comincia il giorno del trasloco, non della firma.« Il testo nomina apposta la risposta sbagliata.",
          bn: "»এটি শুরু হয় বাসায় ওঠার দিন থেকে, চুক্তিতে সই করার দিন থেকে নয়।« লেখাটি ভুল উত্তরটি স্পষ্ট করেই বলে দেয়।",
        },
      },
      {
        nr: 8,
        question: "Was ist das häufigste Problem bei der Anmeldung?",
        options: [
          "Die Wohnungsgeberbestätigung fehlt.",
          "Der Pass ist abgelaufen.",
          "Der Mietvertrag ist nicht unterschrieben.",
        ],
        answerIndex: 0,
        why: {
          de: "»Viele scheitern genau daran: Sie erscheinen mit Pass und Mietvertrag, aber ohne dieses eine Formular«. Der Satz sagt sogar dazu, warum c) nicht reicht: »der Mietvertrag ersetzt es nicht«.",
          en: "'Many come unstuck exactly there: they turn up with passport and tenancy agreement but without this one form.' The sentence even says why c) is not enough: 'the tenancy agreement does not replace it'.",
          it: "»Molti si bloccano proprio lì: arrivano con passaporto e contratto ma senza quel modulo.«",
          bn: "»অনেকে ঠিক এখানেই আটকে যান: পাসপোর্ট আর ভাড়ার চুক্তি নিয়ে আসেন, কিন্তু এই ফর্মটি ছাড়া।«",
        },
      },
      {
        nr: 9,
        question: "Was gilt, wenn man erst in sechs Wochen einen Termin bekommt?",
        options: [
          "Man muss eine Gebühr zahlen.",
          "Man hat die Frist trotzdem eingehalten.",
          "Man muss sich in einer anderen Stadt anmelden.",
        ],
        answerIndex: 1,
        why: {
          de: "»Die Frist gilt als eingehalten, wenn man den Termin rechtzeitig gebucht hat, auch wenn er später stattfindet.« Entscheidend ist der Tag der BUCHUNG, nicht der Tag des Termins. Genau diese Unterscheidung ist die Aufgabe.",
          en: "'The deadline counts as met if you booked the appointment in time, even if it takes place later.' What matters is the day of BOOKING, not the day of the appointment. That distinction is the whole question.",
          it: "»Il termine è rispettato se si è prenotato in tempo, anche se l'appuntamento è più tardi.«",
          bn: "»সময়মতো বুক করলে সময়সীমা মানা হয়েছে ধরা হয়, অ্যাপয়েন্টমেন্ট পরে হলেও।« বুকিংয়ের দিনই আসল, অ্যাপয়েন্টমেন্টের দিন নয়।",
        },
      },
      {
        nr: 10,
        question: "Was sagt der Text über die Sprache beim Amt?",
        options: [
          "Man muss die Formulare allein ausfüllen können.",
          "Das Amt stellt immer einen Dolmetscher.",
          "Man darf jemanden mitbringen, der übersetzt.",
        ],
        answerIndex: 2,
        why: {
          de: "»Man darf eine Begleitperson mitbringen, die übersetzt«. b) wäre schön, steht aber nicht da — das Amt stellt niemanden, man bringt selbst jemanden mit.",
          en: "'You may bring someone with you to translate.' b) would be nice but is not there — the office provides no one, you bring someone yourself.",
          it: "»Si può portare un accompagnatore che traduca.« La b) non è nel testo.",
          bn: "»অনুবাদ করার জন্য কাউকে সঙ্গে আনা যায়।« b) লেখায় নেই — দপ্তর কাউকে দেয় না, আপনি নিজে আনেন।",
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
        title: "Führerscheinstelle",
        text: "Umschreibung ausländischer Führerscheine. Termine montags bis mittwochs. Bearbeitungszeit etwa sechs Wochen, Gebühr fünfunddreißig Euro.",
      },
      {
        key: "b",
        title: "Bürgerbüro Online",
        text: "Meldebescheinigung, Geburtsurkunde und Ummeldung des Autos bequem von zu Hause. Sie brauchen den Personalausweis mit Online-Funktion.",
      },
      {
        key: "c",
        title: "Ausländerbehörde – Aufenthaltstitel",
        text: "Verlängerung Ihres Aufenthaltstitels: Bitte stellen Sie den Antrag spätestens sechs Wochen vor Ablauf. Terminvergabe ausschließlich per E-Mail.",
      },
      {
        key: "d",
        title: "Pass- und Ausweisstelle",
        text: "Neuer Personalausweis oder Reisepass, auch für Kinder. Termin erforderlich. Biometrisches Foto können Sie vor Ort machen lassen.",
      },
      {
        key: "e",
        title: "Familienkasse – Kindergeld",
        text: "Anträge auf Kindergeld stellen Sie online oder per Post. Beratung telefonisch montags bis donnerstags von neun bis fünfzehn Uhr.",
      },
      {
        key: "f",
        title: "Bürgeramt Siegen – Anmeldung",
        text: "Termine für die Anmeldung einer Wohnung buchen Sie online. Bringen Sie Pass und Wohnungsgeberbestätigung mit. Ohne Termin ist keine Anmeldung möglich.",
      },
      {
        key: "g",
        title: "Sprachmittlung für Behördengänge",
        text: "Ehrenamtliche begleiten Sie zu Ämtern und übersetzen. Nur für Bewohnerinnen und Bewohner des Stadtteils Weidenau. Anfrage per Telefon.",
      },
      {
        key: "h",
        title: "Hilfe beim Ausfüllen von Anträgen",
        text: "Jeden Dienstag und Freitag, vierzehn bis siebzehn Uhr in der Stadtbibliothek. Ohne Anmeldung, kostenlos. Bitte alle Briefe vom Amt mitbringen.",
      },
      {
        key: "i",
        title: "Wohngeldstelle",
        text: "Ist Ihre Miete zu hoch für Ihr Einkommen? Wir prüfen Ihren Anspruch auf Wohngeld. Antragsformulare erhalten Sie am Empfang oder im Internet.",
      },
      {
        key: "j",
        title: "Anerkennung ausländischer Abschlüsse",
        text: "Sie haben im Ausland studiert oder eine Ausbildung gemacht? Wir prüfen kostenlos, ob und wie Ihr Zeugnis in Deutschland anerkannt wird. Beratung nach Vereinbarung.",
      },
      {
        key: "k",
        title: "Beglaubigte Kopien im Rathaus",
        text: "Wir beglaubigen Kopien von Zeugnissen und Urkunden. Ohne Termin, Montag bis Freitag von acht bis zwölf Uhr. Pro Seite drei Euro.",
      },
      {
        key: "l",
        title: "Finanzamt – Steuer-Identifikationsnummer",
        text: "Sie haben Ihre Steuer-Identifikationsnummer verloren? Fordern Sie sie schriftlich neu an. Der Brief kommt innerhalb von vier Wochen per Post.",
      },
    ],

    situations: [
      {
        nr: 11,
        text: "Sie sind letzte Woche nach Siegen gezogen und müssen sich anmelden.",
        answerKey: "f",
        why: {
          de: "»Termine für die Anmeldung einer Wohnung« — genau das. Anzeige b klingt ähnlich, bietet aber Bescheinigungen an, keine Anmeldung.",
          en: "'Appointments for registering an address' — exactly that. Advert b sounds similar but offers certificates, not registration.",
          it: "»Appuntamenti per la registrazione di un'abitazione«: proprio così. L'annuncio b offre certificati, non la registrazione.",
          bn: "»বাসা নিবন্ধনের অ্যাপয়েন্টমেন্ট« — ঠিক এটাই। বিজ্ঞাপন b একই রকম শোনায়, কিন্তু সেখানে সনদ দেওয়া হয়, নিবন্ধন নয়।",
        },
      },
      {
        nr: 12,
        text: "Ihr Aufenthaltstitel läuft in zwei Monaten ab und Sie möchten ihn verlängern lassen.",
        answerKey: "c",
        why: {
          de: "»Verlängerung Ihres Aufenthaltstitels … spätestens sechs Wochen vor Ablauf«. Zwei Monate sind mehr als sechs Wochen, also ist man rechtzeitig.",
          en: "'Extension of your residence permit … at the latest six weeks before it expires.' Two months is more than six weeks, so you are in time.",
          it: "»Rinnovo del permesso di soggiorno … al più tardi sei settimane prima.« Due mesi sono più di sei settimane.",
          bn: "»রেসিডেন্স পারমিট নবায়ন … মেয়াদ শেষের অন্তত ছয় সপ্তাহ আগে«। দুই মাস ছয় সপ্তাহের বেশি, তাই সময়মতো।",
        },
      },
      {
        nr: 13,
        text: "Sie haben im Ausland eine Ausbildung gemacht und möchten wissen, ob Ihr Zeugnis in Deutschland etwas wert ist.",
        answerKey: "j",
        why: {
          de: "»Wir prüfen kostenlos, ob und wie Ihr Zeugnis in Deutschland anerkannt wird.« Anzeige k beglaubigt nur Kopien — das sagt nichts über den Wert des Abschlusses.",
          en: "'We check free of charge whether and how your qualification is recognised in Germany.' Advert k only certifies copies, which says nothing about the value of the qualification.",
          it: "»Verifichiamo gratuitamente se e come il suo titolo è riconosciuto.« L'annuncio k autentica solo copie.",
          bn: "»আমরা বিনামূল্যে যাচাই করি আপনার সনদ জার্মানিতে স্বীকৃত কি না।« বিজ্ঞাপন k কেবল কপি সত্যায়ন করে।",
        },
      },
      {
        nr: 14,
        text: "Sie haben einen Brief vom Jobcenter bekommen und verstehen das Formular nicht. Einen Termin haben Sie nicht.",
        answerKey: "h",
        why: {
          de: "»Hilfe beim Ausfüllen von Anträgen … Ohne Anmeldung … Bitte alle Briefe vom Amt mitbringen.« Alle drei Bedingungen treffen zu.",
          en: "'Help filling in applications … no appointment … please bring all letters from the office.' All three conditions apply.",
          it: "»Aiuto per compilare domande … senza appuntamento … portate le lettere dell'ufficio.«",
          bn: "»আবেদন পূরণে সাহায্য … নিবন্ধন ছাড়া … দপ্তরের সব চিঠি আনুন।« তিনটি শর্তই মেলে।",
        },
      },
      {
        nr: 15,
        text: "Sie möchten Ihren Führerschein aus dem Ausland in einen deutschen umschreiben lassen.",
        answerKey: "a",
        why: {
          de: "»Umschreibung ausländischer Führerscheine« — das Wort steht wörtlich in der Anzeige.",
          en: "'Conversion of foreign driving licences' — the word is literally in the advert.",
          it: "»Conversione di patenti estere«: la parola è letteralmente nell'annuncio.",
          bn: "»বিদেশি ড্রাইভিং লাইসেন্স রূপান্তর« — শব্দটি বিজ্ঞাপনে হুবহু আছে।",
        },
      },
      {
        nr: 16,
        text: "Sie brauchen für Ihre Bewerbung eine beglaubigte Kopie Ihres Schulzeugnisses.",
        answerKey: "k",
        why: {
          de: "»Wir beglaubigen Kopien von Zeugnissen und Urkunden.« Beglaubigen heißt: amtlich bestätigen, dass die Kopie echt ist — nicht dasselbe wie anerkennen (Anzeige j).",
          en: "'We certify copies of certificates and documents.' Beglaubigen means officially confirming a copy is genuine — not the same as recognition (advert j).",
          it: "»Autentichiamo copie di attestati e documenti.« Non è lo stesso del riconoscimento (annuncio j).",
          bn: "»আমরা সনদ ও দলিলের কপি সত্যায়ন করি।« beglaubigen মানে কপিটি আসল তা সরকারিভাবে নিশ্চিত করা — স্বীকৃতি (বিজ্ঞাপন j) নয়।",
        },
      },
      {
        nr: 17,
        text: "Sie wohnen im Stadtteil Geisweid und suchen jemanden, der Sie zum Amt begleitet und übersetzt.",
        answerKey: "x",
        why: {
          de: "Anzeige g bietet genau das an — aber »Nur für Bewohnerinnen und Bewohner des Stadtteils Weidenau«. Sie wohnen in Geisweid. Eine einzige Einschränkung reicht, um eine sonst perfekte Anzeige auszuschließen, und genau darauf zielt Teil 3. Lies bei jeder Anzeige auch den letzten Satz.",
          en: "Advert g offers exactly that — but 'only for residents of the Weidenau district'. You live in Geisweid. A single restriction is enough to rule out an otherwise perfect advert, and that is exactly what Teil 3 is testing. Always read an advert's last sentence too.",
          it: "L'annuncio g offre proprio questo, ma »solo per residenti nel quartiere Weidenau«. Lei abita a Geisweid. Una sola restrizione basta a escludere un annuncio perfetto.",
          bn: "বিজ্ঞাপন g ঠিক এটাই দেয় — কিন্তু »কেবল Weidenau এলাকার বাসিন্দাদের জন্য«। আপনি থাকেন Geisweid-এ। একটিমাত্র শর্তই নিখুঁত বিজ্ঞাপনকে বাদ দিতে যথেষ্ট — Teil 3 ঠিক এটাই পরীক্ষা করে। প্রতিটি বিজ্ঞাপনের শেষ বাক্যটিও পড়ুন।",
        },
      },
      {
        nr: 18,
        text: "Sie brauchen eine Meldebescheinigung und möchten dafür nicht extra zum Amt gehen.",
        answerKey: "b",
        why: {
          de: "»Meldebescheinigung … bequem von zu Hause«. Anzeige f wäre der Weg zum Amt — genau das, was vermieden werden soll.",
          en: "'Registration certificate … conveniently from home.' Advert f would mean going to the office — exactly what is to be avoided.",
          it: "»Certificato di residenza … comodamente da casa.«",
          bn: "»নিবন্ধন সনদ … ঘরে বসেই আরামে«। বিজ্ঞাপন f মানে দপ্তরে যাওয়া — যা এড়াতেই চাওয়া।",
        },
      },
      {
        nr: 19,
        text: "Ihre Miete ist sehr hoch und Sie verdienen wenig. Jemand hat Ihnen gesagt, der Staat zahle vielleicht etwas dazu.",
        answerKey: "i",
        why: {
          de: "»Ist Ihre Miete zu hoch für Ihr Einkommen? Wir prüfen Ihren Anspruch auf Wohngeld.« Die Anzeige stellt genau die Frage, die in der Situation steht.",
          en: "'Is your rent too high for your income? We check your entitlement to housing benefit.' The advert asks exactly the question the situation poses.",
          it: "»L'affitto è troppo alto per il suo reddito? Verifichiamo il diritto al sussidio per l'alloggio.«",
          bn: "»আপনার আয়ের তুলনায় ভাড়া কি বেশি? আমরা Wohngeld-এর অধিকার যাচাই করি।« বিজ্ঞাপনটি পরিস্থিতির প্রশ্নটাই করছে।",
        },
      },
      {
        nr: 20,
        text: "Ihre Tochter braucht zum ersten Mal einen Reisepass.",
        answerKey: "d",
        why: {
          de: "»Neuer Personalausweis oder Reisepass, auch für Kinder.« Das »auch für Kinder« ist der entscheidende Zusatz — ohne ihn wäre die Anzeige nur halb passend.",
          en: "'New identity card or passport, also for children.' That 'also for children' is the deciding addition — without it the advert would only half fit.",
          it: "»Nuova carta d'identità o passaporto, anche per bambini.«",
          bn: "»নতুন পরিচয়পত্র বা পাসপোর্ট, শিশুদের জন্যও।« »শিশুদের জন্যও« অংশটাই নির্ণায়ক।",
        },
      },
    ],
  },

  /* ================================================================== */
  glossary: [
    g("anmelden", "sich anmelden", undefined, "to register (an address)", "registrarsi", "নিবন্ধন করা"),
    g("frist", "die Frist", "die", "deadline, time limit", "termine, scadenza", "সময়সীমা"),
    g("einzugs", "der Einzug", "der", "moving in", "trasloco (entrata)", "বাসায় ওঠা"),
    g("geldstrafe", "die Geldstrafe", "die", "fine", "multa", "জরিমানা"),
    g("wohnungsgeberbestätigung", "die Wohnungsgeberbestätigung", "die", "landlord's confirmation of residence (Wohnung + Geber + Bestätigung = flat + giver + confirmation)", "conferma del locatore", "বাড়িওয়ালার বসবাসের প্রত্যয়ন"),
    g("vermieter", "der Vermieter", "der", "landlord", "locatore", "বাড়িওয়ালা"),
    g("bearbeiten", "bearbeiten", undefined, "to process (an application)", "elaborare, trattare", "প্রক্রিয়া করা"),
    g("bürgeramt", "das Bürgeramt", "das", "citizens' office (Bürger + Amt = citizen + office)", "ufficio anagrafe", "নাগরিক দপ্তর"),
    g("ausgebucht", "ausgebucht", undefined, "fully booked", "tutto prenotato", "সব বুকড"),
    g("meldebescheinigung", "die Meldebescheinigung", "die", "certificate of registration", "certificato di residenza", "নিবন্ধন সনদ"),
    g("geburtsurkunde", "die Geburtsurkunde", "die", "birth certificate", "certificato di nascita", "জন্ম সনদ"),
    g("ummeldung", "die Ummeldung", "die", "re-registration (e.g. of a car)", "cambio di registrazione", "পুনঃনিবন্ধন"),
    g("personalausweis", "der Personalausweis", "der", "identity card", "carta d'identità", "পরিচয়পত্র"),
    g("amtliche", "amtlich", undefined, "official", "ufficiale", "সরকারি"),
    g("formulare", "das Formular", "das", "forms", "moduli", "ফর্ম"),
    g("anträgen", "der Antrag", "der", "applications", "domande, richieste", "আবেদন"),
    g("wohngeld", "das Wohngeld", "das", "housing benefit", "sussidio per l'alloggio", "বাসস্থান ভাতা"),
    g("kindergeld", "das Kindergeld", "das", "child benefit", "assegno familiare", "শিশু ভাতা"),
    g("verwaltungsgebäude", "das Verwaltungsgebäude", "das", "administration building", "edificio amministrativo", "প্রশাসনিক ভবন"),
    g("gültig", "gültig", undefined, "valid", "valido", "বৈধ"),
    g("standort", "der Standort", "der", "location, site", "sede, luogo", "অবস্থান"),
    g("grundlage", "die Grundlage", "die", "basis, foundation", "base", "ভিত্তি"),
    g("steuernummer", "die Steuernummer", "die", "tax number", "codice fiscale", "কর নম্বর"),
    g("vertragsunterschrift", "die Vertragsunterschrift", "die", "signing of the contract", "firma del contratto", "চুক্তিতে সই"),
    g("verspätet", "verspätet", undefined, "late, delayed", "in ritardo", "দেরিতে"),
    g("gebühr", "die Gebühr", "die", "fee", "tassa, spesa", "ফি"),
    g("scheitern", "scheitern", undefined, "to fail, come unstuck", "fallire", "ব্যর্থ হওয়া"),
    g("mietvertrag", "der Mietvertrag", "der", "tenancy agreement", "contratto d'affitto", "ভাড়ার চুক্তি"),
    g("untermiete", "die Untermiete", "die", "sublet", "subaffitto", "সাবলেট"),
    g("eingehalten", "einhalten", undefined, "met, complied with (a deadline)", "rispettato", "মানা হয়েছে"),
    g("amtsdeutsch", "das Amtsdeutsch", "das", "officialese, bureaucratic German", "burocratese tedesco", "সরকারি জার্মান ভাষা"),
    g("begleitperson", "die Begleitperson", "die", "someone who comes with you", "accompagnatore", "সঙ্গী"),
    g("aufenthaltstitel", "der Aufenthaltstitel", "der", "residence permit", "permesso di soggiorno", "বসবাসের অনুমতি"),
    g("ablauf", "der Ablauf", "der", "expiry", "scadenza", "মেয়াদ শেষ"),
    g("terminvergabe", "die Terminvergabe", "die", "appointment booking", "assegnazione appuntamenti", "সময় বরাদ্দ"),
    g("anerkannt", "anerkennen", undefined, "recognised (a qualification)", "riconosciuto", "স্বীকৃত"),
    g("umschreibung", "die Umschreibung", "die", "conversion (of a licence)", "conversione", "রূপান্তর"),
    g("bearbeitungszeit", "die Bearbeitungszeit", "die", "processing time", "tempo di elaborazione", "প্রক্রিয়াকরণের সময়"),
    g("beglaubigen", "beglaubigen", undefined, "to certify a copy as genuine", "autenticare", "সত্যায়ন করা"),
    g("urkunden", "die Urkunde", "die", "official documents, certificates", "documenti ufficiali", "দলিল"),
    g("ehrenamtliche", "ehrenamtlich", undefined, "volunteers, unpaid helpers", "volontari", "স্বেচ্ছাসেবক"),
    g("anspruch", "der Anspruch", "der", "entitlement, claim", "diritto", "অধিকার / দাবি"),
    g("einkommen", "das Einkommen", "das", "income", "reddito", "আয়"),
    g("biometrisches", "biometrisch", undefined, "biometric", "biometrico", "বায়োমেট্রিক"),
  ],
};
