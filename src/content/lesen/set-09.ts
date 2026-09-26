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
 * LES-09 — Familie und Kinderbetreuung.
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * The family topic is dense with benefits and entitlements whose names
 * sound alike — Kindergeld, Elterngeld, Elternzeit, Kinderzuschlag — and
 * the paper exploits that:
 *   · Teil 2 question 7 turns on Elternzeit being unpaid leave while
 *     Elterngeld is the money, two different things people merge.
 *   · Teil 1 heading d) offers grandparents as daily help, while text 3
 *     is about a mother whose parents live far away.
 *   · Teil 3 situation 13 answers x: care is needed for a Saturday, and
 *     no offer covers a whole working day at the weekend.
 */
export const les09: LesenSet = {
  code: "LES-09",

  title: {
    de: "Familie, Kinderbetreuung und Elternzeit",
    en: "Family, childcare and parental leave",
    it: "Famiglia, assistenza ai bambini e congedo parentale",
    bn: "পরিবার, শিশু দেখাশোনা ও অভিভাবক-ছুটি",
  },

  intro: {
    de: "Drei Teile wie in der Prüfung. Vier Wörter sehen sich hier sehr ähnlich: Kindergeld, Elterngeld, Elternzeit und Kinderzuschlag. Tippe sie an, wenn sie im Text auftauchen.",
    en: "Three parts, as in the exam. Four words look very alike here: Kindergeld, Elterngeld, Elternzeit and Kinderzuschlag. Tap them when they appear.",
    it: "Tre parti, come nell'esame. Qui quattro parole si somigliano molto: Kindergeld, Elterngeld, Elternzeit e Kinderzuschlag.",
    bn: "পরীক্ষার মতোই তিনটি অংশ। এখানে চারটি শব্দ খুব মিলে যায়: Kindergeld, Elterngeld, Elternzeit ও Kinderzuschlag। লেখায় পেলে চাপ দিন।",
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
      { key: "a", text: "Wenn beide Eltern arbeiten" },
      { key: "b", text: "Ein Platz in der Kita – und wie man ihn bekommt" },
      { key: "c", text: "Väter nehmen sich mehr Zeit" },
      { key: "d", text: "Großeltern als tägliche Hilfe" },
      { key: "e", text: "Vorlesen wirkt länger als gedacht" },
      { key: "f", text: "Neue Öffnungszeiten im Kindergarten" },
      { key: "g", text: "Hilfe für Familien mit wenig Geld" },
      { key: "h", text: "Fernsehen ist nicht das Problem" },
      { key: "i", text: "Allein mit Kind in einer neuen Stadt" },
      { key: "j", text: "Was Kinder wirklich kosten" },
    ],

    texts: [
      {
        nr: 1,
        text: "Noch vor zehn Jahren nahmen die meisten Männer nur zwei Monate Elternzeit, wenn überhaupt. Inzwischen ist es fast jeder zweite Vater, und viele bleiben deutlich länger zu Hause. Die Betriebe haben sich daran gewöhnt, auch wenn es in kleineren Firmen immer noch schwieriger ist. Am stärksten verändert hat sich nicht das Gesetz, sondern das, was Kollegen dazu sagen.",
        answerKey: "c",
        why: {
          de: "»nahmen die meisten Männer nur zwei Monate«, »Inzwischen ist es fast jeder zweite Vater« — eine Entwicklung bei den Vätern. Überschrift a) passt nicht: Von arbeitenden Müttern ist nirgends die Rede.",
          en: "'most men took only two months', 'now it is nearly every second father' — a change among fathers. Heading a) does not fit: working mothers are never mentioned.",
          it: "»la maggior parte prendeva solo due mesi«, »ora è quasi un padre su due«: un cambiamento fra i padri.",
          bn: "»বেশিরভাগ পুরুষ কেবল দুই মাস নিতেন«, »এখন প্রায় প্রতি দ্বিতীয় বাবা« — বাবাদের মধ্যে পরিবর্তন। শিরোনাম a) মেলে না।",
        },
      },
      {
        nr: 2,
        text: "Wer in einer größeren Stadt einen Betreuungsplatz sucht, meldet sich am besten schon während der Schwangerschaft an. Die meisten Städte haben dafür ein Portal im Internet, in dem man mehrere Einrichtungen gleichzeitig angeben kann. Wichtig ist, die Anmeldung jedes Jahr zu bestätigen — wer das vergisst, rutscht in der Liste nach unten, ohne es zu merken.",
        answerKey: "b",
        why: {
          de: "»einen Betreuungsplatz sucht«, »meldet sich am besten schon während der Schwangerschaft an« — wie man an einen Platz kommt. Genau Überschrift b). Überschrift f) wäre falsch: Öffnungszeiten kommen nicht vor.",
          en: "'looking for a childcare place', 'best to register during pregnancy' — how to get a place. Exactly heading b). Heading f) would be wrong: opening hours never appear.",
          it: "»cerca un posto«, »conviene iscriversi già in gravidanza«: come ottenere un posto.",
          bn: "»দেখাশোনার জায়গা খুঁজছেন«, »গর্ভাবস্থাতেই নাম লেখানো ভালো« — কীভাবে জায়গা পাওয়া যায়। ঠিক শিরোনাম b)।",
        },
      },
      {
        nr: 3,
        text: "Nuria K. ist vor zwei Jahren mit ihrer Tochter nach Siegen gezogen. Ihre Eltern leben achthundert Kilometer entfernt, der Vater des Kindes in einem anderen Land. Am Anfang, sagt sie, sei das Schwierigste nicht das Geld gewesen, sondern die Tage, an denen das Kind krank war und niemand einspringen konnte. Heute hat sie zwei Nachbarinnen, mit denen sie sich abwechselt.",
        answerKey: "i",
        why: {
          de: "»mit ihrer Tochter nach Siegen gezogen«, »Ihre Eltern leben achthundert Kilometer entfernt« — allein mit Kind, ohne Familie in der Nähe. Vorsicht bei Überschrift d): Großeltern kommen vor, aber gerade als die Hilfe, die es NICHT gibt.",
          en: "'moved to Siegen with her daughter', 'her parents live eight hundred kilometres away' — alone with a child, no family nearby. Careful with heading d): grandparents appear, but precisely as the help that is NOT there.",
          it: "»si è trasferita a Siegen con la figlia«, »i suoi genitori vivono a ottocento chilometri«: sola con la figlia.",
          bn: "»মেয়েকে নিয়ে Siegen-এ এসেছেন«, »তাঁর বাবা-মা আটশো কিলোমিটার দূরে« — সন্তান নিয়ে একা। শিরোনাম d) নিয়ে সতর্ক: দাদা-দাদির কথা আছে, কিন্তু যে সাহায্যটা নেই সেই অর্থে।",
        },
      },
      {
        nr: 4,
        text: "Fünfzehn Minuten am Abend genügen. Eine Untersuchung an mehreren Grundschulen zeigt, dass Kinder, denen regelmäßig vorgelesen wurde, auch in der vierten Klasse noch einen größeren Wortschatz haben — unabhängig davon, wie viel die Eltern verdienen. Die Sprache, in der vorgelesen wird, spielt dabei keine Rolle. Wichtig ist nur, dass es täglich passiert.",
        answerKey: "e",
        why: {
          de: "»denen regelmäßig vorgelesen wurde«, »auch in der vierten Klasse noch einen größeren Wortschatz« — die Wirkung hält lange an. Das ist Überschrift e). Bemerkenswert und prüfungsrelevant: Es kommt nicht auf die Sprache an.",
          en: "'children who were read to regularly', 'still have a larger vocabulary in year four' — the effect lasts. That is heading e). Note, and it matters for the exam: the language does not matter.",
          it: "»a cui è stato letto regolarmente«, »hanno ancora un vocabolario più ampio in quarta«: l'effetto dura.",
          bn: "»যাদের নিয়মিত পড়ে শোনানো হয়েছে«, »চতুর্থ শ্রেণিতেও বেশি শব্দভাণ্ডার« — প্রভাব দীর্ঘস্থায়ী। এটাই শিরোনাম e)।",
        },
      },
      {
        nr: 5,
        text: "Neben dem Kindergeld, das alle bekommen, gibt es eine Leistung, die viele nicht kennen: den Kinderzuschlag. Er ist für Eltern gedacht, die zwar arbeiten, deren Einkommen aber für die ganze Familie nicht reicht. Beantragt wird er bei der Familienkasse, und seit der Antrag online möglich ist, stellen ihn deutlich mehr Familien. Wer ihn bekommt, zahlt außerdem keine Kita-Gebühren.",
        answerKey: "g",
        why: {
          de: "»für Eltern gedacht, die zwar arbeiten, deren Einkommen aber … nicht reicht« — eine Hilfe für Familien mit wenig Geld. Überschrift j) wäre etwas anderes: Was Kinder kosten, steht nirgends.",
          en: "'meant for parents who do work but whose income is not enough' — help for families with little money. Heading j) would be something else: what children cost is never stated.",
          it: "»pensato per genitori che lavorano ma il cui reddito non basta«: un aiuto per famiglie con pochi mezzi.",
          bn: "»যে বাবা-মা কাজ করেন কিন্তু আয় যথেষ্ট নয়, তাঁদের জন্য« — কম আয়ের পরিবারের সহায়তা। শিরোনাম j) অন্য জিনিস।",
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

    heading: "Elternzeit und Elterngeld – zwei Wörter, die oft verwechselt werden",

    text: `Wer in Deutschland ein Kind bekommt, stößt schnell auf zwei Begriffe, die fast gleich klingen und trotzdem etwas ganz Verschiedenes meinen.

Die Elternzeit ist eine Freistellung von der Arbeit. Man bleibt angestellt, der Arbeitsplatz ist geschützt, aber man arbeitet nicht — und bekommt vom Arbeitgeber in dieser Zeit auch kein Gehalt. Jeder Elternteil hat Anspruch darauf, bis das Kind drei Jahre alt ist, und beide können sie gleichzeitig nehmen. Angemeldet werden muss sie spätestens sieben Wochen vor Beginn, schriftlich.

Das Elterngeld dagegen ist Geld vom Staat, das diese Lücke teilweise füllt. Es ersetzt etwa zwei Drittel des früheren Nettoeinkommens, allerdings nur bis zu einer Höchstgrenze — wer vorher sehr gut verdient hat, bekommt deutlich weniger als zwei Drittel. Umgekehrt gibt es einen Mindestbetrag, auch für Eltern, die vorher gar nicht gearbeitet haben.

Der wichtigste Unterschied für die Planung: Elternzeit kann man bis zu drei Jahre nehmen, Elterngeld aber nur zwölf Monate lang beziehen, in einer geteilten Variante vierzehn. Viele merken das erst, wenn das Geld nach einem Jahr aufhört, die Elternzeit aber noch läuft.

Ein Punkt wird regelmäßig übersehen: Während der Elternzeit darf man bis zu zweiunddreißig Stunden pro Woche arbeiten, auch beim eigenen Arbeitgeber. Das ist kein Schlupfloch, sondern ausdrücklich vorgesehen. Wer das nutzt, sollte allerdings vorher rechnen, denn Teilzeitverdienst wird auf das Elterngeld angerechnet.`,

    questions: [
      {
        nr: 6,
        question: "Was ist die Elternzeit?",
        options: [
          "Eine Zahlung vom Staat.",
          "Eine Freistellung von der Arbeit.",
          "Ein Kurs für werdende Eltern.",
        ],
        answerIndex: 1,
        why: {
          de: "»Die Elternzeit ist eine Freistellung von der Arbeit.« Der erste Satz des Absatzes definiert es. Antwort a) beschreibt das Elterngeld — genau die Verwechslung, um die es im ganzen Text geht.",
          en: "'Elternzeit is a release from work.' The paragraph's first sentence defines it. Answer a) describes Elterngeld — exactly the confusion the whole text is about.",
          it: "»L'Elternzeit è un'astensione dal lavoro.« La a) descrive l'Elterngeld: proprio la confusione di cui parla il testo.",
          bn: "»Elternzeit হলো কাজ থেকে অব্যাহতি।« অনুচ্ছেদের প্রথম বাক্যই সংজ্ঞা দেয়। a) আসলে Elterngeld — এই গুলিয়ে ফেলা নিয়েই পুরো লেখা।",
        },
      },
      {
        nr: 7,
        question: "Wie viel muss der Arbeitgeber während der Elternzeit zahlen?",
        options: ["Zwei Drittel des Gehalts.", "Den Mindestbetrag.", "Nichts."],
        answerIndex: 2,
        why: {
          de: "»bekommt vom Arbeitgeber in dieser Zeit auch kein Gehalt«. Die zwei Drittel aus a) stehen im Text, gehören aber zum Elterngeld vom Staat — und der Mindestbetrag aus b) ebenfalls. Beide falschen Antworten sind echte Zahlen aus dem falschen Absatz.",
          en: "'receives no salary from the employer during this time'. The two thirds in a) are in the text but belong to the state's Elterngeld — and so does the minimum in b). Both wrong answers are real figures from the wrong paragraph.",
          it: "»non riceve stipendio dal datore di lavoro«. I due terzi e il minimo appartengono all'Elterngeld statale.",
          bn: "»এই সময়ে নিয়োগকর্তার কাছ থেকে কোনো বেতন পান না«। a)-র দুই-তৃতীয়াংশ ও b)-র ন্যূনতম অঙ্ক — দুটোই রাষ্ট্রের Elterngeld-এর, অন্য অনুচ্ছেদের।",
        },
      },
      {
        nr: 8,
        question: "Wie lange kann man Elterngeld bekommen?",
        options: ["Bis zu drei Jahre.", "Höchstens vierzehn Monate.", "Sieben Wochen."],
        answerIndex: 1,
        why: {
          de: "»Elterngeld aber nur zwölf Monate lang beziehen, in einer geteilten Variante vierzehn«. Die drei Jahre aus a) gelten für die Elternzeit, die sieben Wochen aus c) sind die Anmeldefrist. Alle drei Zahlen stehen im Text — nur eine gehört zur Frage.",
          en: "'Elterngeld, however, only for twelve months, fourteen in a shared variant'. The three years in a) apply to Elternzeit; the seven weeks in c) are the notice period. All three figures are in the text — only one belongs to the question.",
          it: "»L'Elterngeld solo dodici mesi, quattordici nella variante condivisa«. I tre anni valgono per l'Elternzeit.",
          bn: "»Elterngeld কিন্তু কেবল বারো মাস, ভাগ করা রূপে চোদ্দো«। a)-র তিন বছর Elternzeit-এর, c)-র সাত সপ্তাহ নিবন্ধনের সময়সীমা। তিনটি সংখ্যাই লেখায় আছে।",
        },
      },
      {
        nr: 9,
        question: "Darf man während der Elternzeit arbeiten?",
        options: [
          "Ja, bis zu zweiunddreißig Stunden pro Woche.",
          "Nein, das ist verboten.",
          "Nur bei einem anderen Arbeitgeber.",
        ],
        answerIndex: 0,
        why: {
          de: "»darf man bis zu zweiunddreißig Stunden pro Woche arbeiten, auch beim eigenen Arbeitgeber«. Das »auch beim eigenen Arbeitgeber« schließt Antwort c) ausdrücklich aus — der Text beantwortet die falsche Antwort mit.",
          en: "'you may work up to thirty-two hours a week, including for your own employer'. That 'including for your own employer' rules out answer c) explicitly — the text answers the wrong option too.",
          it: "»si possono lavorare fino a trentadue ore, anche per il proprio datore di lavoro«: esclude la c).",
          bn: "»সপ্তাহে বত্রিশ ঘণ্টা পর্যন্ত কাজ করা যায়, নিজের নিয়োগকর্তার কাছেও«। »নিজের নিয়োগকর্তার কাছেও« অংশটাই c)-কে বাদ দেয়।",
        },
      },
      {
        nr: 10,
        question: "Was rät der Text jemandem, der in der Elternzeit arbeiten möchte?",
        options: [
          "Den Arbeitgeber nicht zu informieren.",
          "Damit bis zum zweiten Jahr zu warten.",
          "Vorher zu rechnen, weil der Verdienst angerechnet wird.",
        ],
        answerIndex: 2,
        why: {
          de: "»sollte allerdings vorher rechnen, denn Teilzeitverdienst wird auf das Elterngeld angerechnet«. Anrechnen heißt hier: Das Elterngeld wird dadurch kleiner. Der Rat steht im letzten Satz — lies bei Teil 2 immer bis zum Ende.",
          en: "'should, however, do the sums first, because part-time earnings are set off against the Elterngeld'. Anrechnen here means the Elterngeld gets smaller. The advice is in the last sentence — in Teil 2 always read to the end.",
          it: "»dovrebbe però fare i conti, perché il guadagno part-time viene conteggiato sull'Elterngeld«.",
          bn: "»তবে আগে হিসাব করা উচিত, কারণ খণ্ডকালীন আয় Elterngeld থেকে কেটে নেওয়া হয়«। পরামর্শটি শেষ বাক্যে।",
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
        title: "Krabbelgruppe im Familienzentrum",
        text: "Für Kinder von null bis drei Jahren mit einem Elternteil. Montags und mittwochs von neun bis elf Uhr. Ohne Anmeldung, zwei Euro pro Vormittag.",
      },
      {
        key: "b",
        title: "Tagesmutter mit freiem Platz",
        text: "Ab Januar ein Platz frei für ein Kind unter drei Jahren. Betreuung von sieben bis sechzehn Uhr, Montag bis Freitag. Erfahrung seit zwölf Jahren, Referenzen vorhanden.",
      },
      {
        key: "c",
        title: "Beratung zu Elterngeld und Elternzeit",
        text: "Wir helfen beim Ausfüllen der Anträge und rechnen mit Ihnen durch, welche Variante sich lohnt. Termine donnerstags, kostenlos, auch auf Englisch.",
      },
      {
        key: "d",
        title: "Hausaufgabenhilfe für Grundschulkinder",
        text: "Montag bis Donnerstag von vierzehn bis sechzehn Uhr im Nachbarschaftshaus. Für Klasse eins bis vier. Kostenlos, Anmeldung über die Schule.",
      },
      {
        key: "e",
        title: "Babysitter-Börse der Stadt",
        text: "Wir vermitteln geprüfte Babysitter für einzelne Abende ab achtzehn Uhr. Stundenlohn nach Absprache, mindestens zwölf Euro. Anfrage online.",
      },
      {
        key: "f",
        title: "Kita Sonnenblume – Anmeldung",
        text: "Anmeldungen für das kommende Kitajahr nehmen wir ab Oktober entgegen, ausschließlich über das Portal der Stadt. Aufnahme ab dem ersten Geburtstag.",
      },
      {
        key: "g",
        title: "Deutschkurs mit Kinderbetreuung",
        text: "Sprachkurs für Eltern vormittags, Ihr Kind wird im selben Haus betreut. Dienstag bis Freitag, neun bis zwölf Uhr. Für Kinder ab zwei Jahren.",
      },
      {
        key: "h",
        title: "Familienkasse – Kinderzuschlag",
        text: "Sie arbeiten, aber das Einkommen reicht für die Familie nicht? Prüfen Sie Ihren Anspruch online in wenigen Minuten. Antrag ebenfalls digital möglich.",
      },
      {
        key: "i",
        title: "Vorlesestunde in der Stadtbibliothek",
        text: "Jeden Samstag um elf Uhr lesen wir Kindern ab vier Jahren vor, einmal im Monat auf Türkisch und Arabisch. Eintritt frei, ohne Anmeldung.",
      },
      {
        key: "j",
        title: "Kinderärztlicher Notdienst",
        text: "Am Wochenende und an Feiertagen von zehn bis achtzehn Uhr für akut kranke Kinder. Bitte Versichertenkarte und Impfpass mitbringen.",
      },
      {
        key: "k",
        title: "Alleinerziehenden-Treff",
        text: "Einmal im Monat, freitags um achtzehn Uhr, treffen sich Mütter und Väter, die ihre Kinder allein erziehen. Kinder können mitgebracht werden.",
      },
      {
        key: "l",
        title: "Secondhand-Basar für Kindersachen",
        text: "Kleidung, Spielzeug und Kinderwagen. Am neunten November von zehn bis vierzehn Uhr in der Turnhalle. Wer selbst verkaufen möchte, meldet sich vorher an.",
      },
    ],

    situations: [
      {
        nr: 11,
        text: "Sie möchten ab Januar wieder arbeiten und suchen eine Betreuung für Ihre einjährige Tochter an Wochentagen.",
        answerKey: "b",
        why: {
          de: "»Ab Januar ein Platz frei für ein Kind unter drei Jahren … Montag bis Freitag.« Zeitpunkt, Alter und Wochentage stimmen alle drei. Anzeige f nimmt zwar auch kleine Kinder, aber erst ab Oktober für das nächste Kitajahr.",
          en: "'A place free from January for a child under three … Monday to Friday.' Timing, age and weekdays all three match. Advert f also takes small children, but only from October for the next nursery year.",
          it: "»Da gennaio un posto per un bambino sotto i tre anni … dal lunedì al venerdì.« Data, età e giorni combaciano.",
          bn: "»জানুয়ারি থেকে তিন বছরের কম বয়সী একটি শিশুর জায়গা খালি … সোম থেকে শুক্র।« সময়, বয়স ও দিন তিনটিই মেলে।",
        },
      },
      {
        nr: 12,
        text: "Sie arbeiten Vollzeit, verdienen aber wenig und fragen sich, ob Ihnen zusätzlich Geld zusteht.",
        answerKey: "h",
        why: {
          de: "»Sie arbeiten, aber das Einkommen reicht für die Familie nicht? Prüfen Sie Ihren Anspruch« — die Anzeige stellt genau die Frage aus der Situation. Anzeige c berät zu Elterngeld, das etwas anderes ist.",
          en: "'You work but the income is not enough for the family? Check your entitlement' — the advert asks exactly the situation's question. Advert c advises on Elterngeld, which is a different thing.",
          it: "»Lavora ma il reddito non basta? Verifichi il suo diritto«: l'annuncio pone la stessa domanda.",
          bn: "»কাজ করেন কিন্তু আয় পরিবারের জন্য যথেষ্ট নয়? আপনার অধিকার যাচাই করুন« — বিজ্ঞাপনটি পরিস্থিতির প্রশ্নটাই করছে।",
        },
      },
      {
        nr: 13,
        text: "Sie müssen am Samstag arbeiten und brauchen für diesen einen Tag eine Betreuung für Ihren dreijährigen Sohn.",
        answerKey: "x",
        why: {
          de: "Keine Anzeige passt. Die Tagesmutter (b) und der Deutschkurs (g) betreuen nur an Wochentagen, die Krabbelgruppe (a) montags und mittwochs, und die Babysitter-Börse (e) vermittelt nur »für einzelne Abende ab achtzehn Uhr«, nicht für einen ganzen Arbeitstag. Prüfe bei Betreuung immer zuerst den Wochentag und die Uhrzeit: Sie schließen in diesem Thema die meisten Anzeigen aus.",
          en: "Nothing fits. The childminder (b) and the language course (g) only cover weekdays, the toddler group (a) Mondays and Wednesdays, and the babysitter agency (e) places sitters only 'for individual evenings from six o'clock', not for a whole working day. With childcare always check the day and the hours first: in this topic they rule out most adverts.",
          it: "Nessun annuncio va bene: la tata (b) e il corso (g) coprono solo i giorni feriali, il gruppo (a) lunedì e mercoledì, e l'agenzia (e) copre solo »singole serate dalle diciotto«, non un'intera giornata lavorativa.",
          bn: "কোনোটিই মেলে না। Tagesmutter (b) ও ভাষা কোর্স (g) কেবল কর্মদিবসে, Krabbelgruppe (a) সোম ও বুধবার, আর babysitter সংস্থা (e) কেবল »সন্ধ্যা ছয়টার পর একক সন্ধ্যার জন্য« দেয়, পুরো কর্মদিবসের জন্য নয়।",
        },
      },
      {
        nr: 14,
        text: "Sie möchten Deutsch lernen, haben aber niemanden, der auf Ihr zweijähriges Kind aufpasst.",
        answerKey: "g",
        why: {
          de: "»Sprachkurs für Eltern vormittags, Ihr Kind wird im selben Haus betreut … Für Kinder ab zwei Jahren.« Das Alter passt genau — bei »ab zwei Jahren« ist ein zweijähriges Kind eingeschlossen.",
          en: "'Language course for parents in the mornings, your child is looked after in the same building … for children from two.' The age fits exactly — 'from two' includes a two-year-old.",
          it: "»Corso di lingua la mattina, il bambino è accudito nello stesso edificio … da due anni.«",
          bn: "»সকালে অভিভাবকদের ভাষা কোর্স, আপনার শিশু একই ভবনেই থাকবে … দুই বছর থেকে।« বয়সটা ঠিক মেলে।",
        },
      },
      {
        nr: 15,
        text: "Ihre Tochter ist in der zweiten Klasse und kommt bei den Hausaufgaben nicht mit.",
        answerKey: "d",
        why: {
          de: "»Hausaufgabenhilfe … Für Klasse eins bis vier.« Die zweite Klasse liegt in diesem Bereich. Prüfe solche Spannen immer gegen die Angabe in der Situation.",
          en: "'Homework help … for years one to four.' Year two falls within that range. Always check such ranges against the figure in the situation.",
          it: "»Aiuto compiti … dalla prima alla quarta.« La seconda rientra.",
          bn: "»হোমওয়ার্ক সহায়তা … প্রথম থেকে চতুর্থ শ্রেণি।« দ্বিতীয় শ্রেণি এর মধ্যেই পড়ে।",
        },
      },
      {
        nr: 16,
        text: "Sie erziehen Ihren Sohn allein und möchten andere Eltern in derselben Lage kennenlernen.",
        answerKey: "k",
        why: {
          de: "»treffen sich Mütter und Väter, die ihre Kinder allein erziehen. Kinder können mitgebracht werden.« Die Anzeige beschreibt genau diese Lage und löst gleich das Problem mit, wohin mit dem Kind.",
          en: "'mothers and fathers raising their children alone meet up. Children may be brought along.' The advert describes exactly this situation and solves the question of what to do with the child.",
          it: "»si incontrano madri e padri che crescono i figli da soli; i bambini possono essere portati«.",
          bn: "»একা সন্তান বড় করা মা-বাবারা মিলিত হন। শিশুদের সঙ্গে আনা যায়।«",
        },
      },
      {
        nr: 17,
        text: "Sie wissen nicht, ob Sie Elterngeld für zwölf oder vierzehn Monate nehmen sollen, und möchten das mit jemandem durchrechnen.",
        answerKey: "c",
        why: {
          de: "»rechnen mit Ihnen durch, welche Variante sich lohnt« — genau die Frage aus der Situation, und die Anzeige nennt sogar dasselbe Wort »Variante«.",
          en: "'work through with you which variant pays off' — exactly the situation's question, and the advert even uses the same word 'Variante'.",
          it: "»calcoliamo con lei quale variante conviene«: proprio la domanda della situazione.",
          bn: "»কোন রূপটি লাভজনক তা আপনার সঙ্গে হিসাব করে দেখি« — পরিস্থিতির প্রশ্নটাই, এমনকি একই শব্দ »Variante«।",
        },
      },
      {
        nr: 18,
        text: "Ihr Kind hat am Sonntagvormittag hohes Fieber.",
        answerKey: "j",
        why: {
          de: "»Am Wochenende und an Feiertagen von zehn bis achtzehn Uhr für akut kranke Kinder.« Sonntagvormittag liegt in diesem Zeitraum — die Uhrzeit ist hier der entscheidende Teil.",
          en: "'At weekends and on public holidays from ten to six for acutely ill children.' Sunday morning falls within that — the time is the deciding part here.",
          it: "»Nei fine settimana e nei festivi dalle dieci alle diciotto per bambini acutamente malati.«",
          bn: "»সপ্তাহান্ত ও ছুটির দিনে দশটা থেকে আঠারোটা পর্যন্ত, হঠাৎ অসুস্থ শিশুদের জন্য।« রবিবার সকাল এর মধ্যেই।",
        },
      },
      {
        nr: 19,
        text: "Sie möchten Ihrem vierjährigen Sohn am Wochenende etwas bieten und suchen etwas Kostenloses.",
        answerKey: "i",
        why: {
          de: "»Jeden Samstag um elf Uhr lesen wir Kindern ab vier Jahren vor … Eintritt frei.« Alter, Wochenende und der Preis stimmen alle drei. Anzeige l ist auch am Wochenende, aber ein Basar zum Einkaufen, kein Angebot für das Kind.",
          en: "'Every Saturday at eleven we read to children from four … free entry.' Age, weekend and price all three match. Advert l is also at the weekend but is a sale, not something for the child.",
          it: "»Ogni sabato alle undici leggiamo ai bambini dai quattro anni … ingresso libero.«",
          bn: "»প্রতি শনিবার এগারোটায় আমরা চার বছরের বেশি শিশুদের পড়ে শোনাই … প্রবেশ ফ্রি।« বয়স, সপ্তাহান্ত ও দাম তিনটিই মেলে।",
        },
      },
      {
        nr: 20,
        text: "Ihr Kind ist aus seiner Winterkleidung herausgewachsen und Sie möchten günstig etwas kaufen.",
        answerKey: "l",
        why: {
          de: "»Kleidung, Spielzeug und Kinderwagen« auf einem Secondhand-Basar — günstig einkaufen. Der Nachsatz über das Anmelden gilt nur für Verkäufer, nicht für Käufer; solche Zusätze muss man lesen, aber nicht auf sich beziehen.",
          en: "'Clothes, toys and prams' at a secondhand sale — buying cheaply. The closing note about registering applies only to sellers, not buyers; such additions must be read but not always applied to yourself.",
          it: "»Vestiti, giocattoli e passeggini« a un mercatino dell'usato. La nota sull'iscrizione vale solo per chi vende.",
          bn: "»জামাকাপড়, খেলনা ও প্র্যাম« — সেকেন্ডহ্যান্ড বাজারে সস্তায় কেনা। নিবন্ধনের কথাটি কেবল বিক্রেতাদের জন্য, ক্রেতাদের নয়।",
        },
      },
    ],
  },

  /* ================================================================== */
  glossary: [
    g("elternzeit", "die Elternzeit", "die", "parental leave — time off work, unpaid by the employer", "congedo parentale", "অভিভাবক-ছুটি"),
    g("betriebe", "der Betrieb", "der", "companies", "aziende", "প্রতিষ্ঠান"),
    g("gewöhnt", "sich gewöhnen", undefined, "got used to it", "abituato", "অভ্যস্ত হয়েছে"),
    g("betreuungsplatz", "der Betreuungsplatz", "der", "childcare place", "posto all'asilo", "দেখাশোনার জায়গা"),
    g("schwangerschaft", "die Schwangerschaft", "die", "pregnancy", "gravidanza", "গর্ভাবস্থা"),
    g("einrichtungen", "die Einrichtung", "die", "facilities, institutions", "strutture", "প্রতিষ্ঠান / কেন্দ্র"),
    g("bestätigen", "bestätigen", undefined, "to confirm", "confermare", "নিশ্চিত করা"),
    g("einspringen", "einspringen", undefined, "to step in, cover for someone", "sostituire, dare una mano", "হাল ধরা / বদলি হওয়া"),
    g("abwechselt", "sich abwechseln", undefined, "takes turns", "si alterna", "পালা করে"),
    g("untersuchung", "die Untersuchung", "die", "study, investigation", "studio, indagine", "গবেষণা"),
    g("grundschulen", "die Grundschule", "die", "primary schools", "scuole elementari", "প্রাথমিক বিদ্যালয়"),
    g("vorgelesen", "vorlesen", undefined, "read aloud to someone", "letto ad alta voce", "পড়ে শোনানো"),
    g("wortschatz", "der Wortschatz", "der", "vocabulary", "lessico", "শব্দভাণ্ডার"),
    g("kindergeld", "das Kindergeld", "das", "child benefit — paid for every child", "assegno per figli", "শিশু ভাতা"),
    g("leistung", "die Leistung", "die", "benefit, state payment", "prestazione, sussidio", "সরকারি সুবিধা"),
    g("kinderzuschlag", "der Kinderzuschlag", "der", "extra benefit for working parents on low pay", "supplemento per figli", "নিম্ন আয়ের অভিভাবক ভাতা"),
    g("einkommen", "das Einkommen", "das", "income", "reddito", "আয়"),
    g("familienkasse", "die Familienkasse", "die", "family benefits office", "ufficio assegni familiari", "পারিবারিক ভাতা দপ্তর"),
    g("begriffe", "der Begriff", "der", "terms, concepts", "termini", "পরিভাষা"),
    g("freistellung", "die Freistellung", "die", "release from work duties", "esonero dal lavoro", "কাজ থেকে অব্যাহতি"),
    g("angestellt", "angestellt", undefined, "employed", "assunto", "চাকরিরত"),
    g("elternteil", "der Elternteil", "der", "parent (one of the two)", "genitore", "একজন অভিভাবক"),
    g("anspruch", "der Anspruch", "der", "entitlement", "diritto", "অধিকার"),
    g("elterngeld", "das Elterngeld", "das", "parental allowance — the money from the state", "indennità parentale", "অভিভাবক ভাতা"),
    g("nettoeinkommens", "das Nettoeinkommen", "das", "net income, take-home pay", "reddito netto", "নিট আয়"),
    g("höchstgrenze", "die Höchstgrenze", "die", "upper limit, cap", "tetto massimo", "সর্বোচ্চ সীমা"),
    g("mindestbetrag", "der Mindestbetrag", "der", "minimum amount", "importo minimo", "ন্যূনতম অঙ্ক"),
    g("beziehen", "beziehen", undefined, "to draw, receive (a benefit)", "percepire", "সুবিধা নেওয়া"),
    g("übersehen", "übersehen", undefined, "overlooked", "trascurato", "নজর এড়ানো"),
    g("schlupfloch", "das Schlupfloch", "das", "loophole", "scappatoia", "ফাঁকফোকর"),
    g("vorgesehen", "vorsehen", undefined, "provided for, intended by the rules", "previsto", "নিয়মে রাখা আছে"),
    g("teilzeitverdienst", "der Teilzeitverdienst", "der", "part-time earnings", "guadagno part-time", "খণ্ডকালীন আয়"),
    g("angerechnet", "anrechnen", undefined, "set off against, counted towards", "conteggiato", "হিসাবে ধরা / কেটে নেওয়া"),
    g("krabbelgruppe", "die Krabbelgruppe", "die", "toddler group", "gruppo gioco per piccoli", "শিশুদের দল"),
    g("tagesmutter", "die Tagesmutter", "die", "childminder", "assistente all'infanzia", "দিবাযত্নকারী"),
    g("referenzen", "die Referenz", "die", "references", "referenze", "সুপারিশপত্র"),
    g("hausaufgabenhilfe", "die Hausaufgabenhilfe", "die", "homework support", "aiuto compiti", "হোমওয়ার্ক সহায়তা"),
    g("vermitteln", "vermitteln", undefined, "to place, put people in touch", "mettere in contatto", "মিলিয়ে দেওয়া"),
    g("stundenlohn", "der Stundenlohn", "der", "hourly rate", "paga oraria", "ঘণ্টাপ্রতি মজুরি"),
    g("aufnahme", "die Aufnahme", "die", "admission, taking in", "ammissione", "ভর্তি"),
    g("Alleinerziehenden-Treff", "alleinerziehend", undefined, "single-parent", "genitore single", "একা সন্তান লালনকারী"),
    g("erziehen", "erziehen", undefined, "to bring up, raise", "crescere, educare", "লালনপালন করা"),
    g("impfpass", "der Impfpass", "der", "vaccination record", "libretto delle vaccinazioni", "টিকা কার্ড"),
    g("turnhalle", "die Turnhalle", "die", "sports hall", "palestra", "জিমনেসিয়াম"),
  ],
};
