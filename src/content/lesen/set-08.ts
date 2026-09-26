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
 * LES-08 — Nachbarn und Wohngemeinschaft.
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Shared-housing texts are full of rules, and rules are where the exam
 * hides its traps:
 *   · Teil 2 question 6 turns on "Ruhezeit" not meaning silence — you may
 *     live normally, you may not be loud, and the text says so twice.
 *   · Teil 1 heading j) says the house rules are getting stricter, while
 *     text 2 is about what such rules may NOT contain.
 *   · Teil 3 situation 17 answers x: the tenant wants to sublet one room,
 *     and the only sublet offer is for whole flats.
 */
export const les08: LesenSet = {
  code: "LES-08",

  title: {
    de: "Nachbarn, Hausordnung und Wohngemeinschaft",
    en: "Neighbours, house rules and shared flats",
    it: "Vicini, regolamento condominiale e coabitazione",
    bn: "প্রতিবেশী, বাড়ির নিয়ম ও শেয়ার্ড ফ্ল্যাট",
  },

  intro: {
    de: "Drei Teile wie in der Prüfung. Viele Wörter hier stehen in echten Mietverträgen — tippe sie an, sie lohnen sich über die Prüfung hinaus.",
    en: "Three parts, as in the exam. Many words here appear in real tenancy agreements — tap them, they pay off beyond the exam.",
    it: "Tre parti, come nell'esame. Molte parole qui compaiono nei contratti d'affitto reali.",
    bn: "পরীক্ষার মতোই তিনটি অংশ। এখানকার অনেক শব্দ সত্যিকারের ভাড়ার চুক্তিতেই থাকে — চাপ দিন, পরীক্ষার বাইরেও কাজে লাগবে।",
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
      { key: "a", text: "Wenn das Treppenhaus zum Lager wird" },
      { key: "b", text: "Nebenkosten – einmal im Jahr wird gerechnet" },
      { key: "c", text: "Gemeinsam kochen, getrennt einkaufen" },
      { key: "d", text: "Ein Garten für alle im Haus" },
      { key: "e", text: "Was in einer Hausordnung nicht stehen darf" },
      { key: "f", text: "Die Waschmaschine im Keller" },
      { key: "g", text: "Streit schlichten, bevor er wächst" },
      { key: "h", text: "Zimmer frei ab Oktober" },
      { key: "i", text: "Mehr Menschen teilen sich eine Wohnung" },
      { key: "j", text: "Die Hausordnung wird strenger" },
    ],

    texts: [
      {
        nr: 1,
        text: "Nicht nur Studierende wohnen heute in Wohngemeinschaften. In vielen Städten teilen sich inzwischen auch Berufstätige über vierzig eine Wohnung, und die Zahl der älteren Menschen, die zusammenziehen, wächst ebenfalls. Der Grund ist selten Geselligkeit: Wer allein wohnen möchte, findet kaum noch etwas, das bezahlbar ist. Die Vermieter reagieren darauf und bieten immer öfter einzelne Zimmer statt ganzer Wohnungen an.",
        answerKey: "i",
        why: {
          de: "»teilen sich inzwischen auch Berufstätige über vierzig eine Wohnung«, »die Zahl … wächst ebenfalls« — mehr Menschen als früher teilen sich eine Wohnung. Vorsicht bei Überschrift h): Ein einzelnes Zimmerangebot wäre eine Anzeige, kein Bericht über eine Entwicklung.",
          en: "'people over forty in work now share a flat too', 'the number … is growing as well' — more people than before are sharing. Careful with heading h): a single room offer would be an advert, not a report on a trend.",
          it: "»anche lavoratori sopra i quaranta condividono un appartamento«, »il numero cresce«: più persone di prima condividono casa.",
          bn: "»চল্লিশোর্ধ্ব চাকরিজীবীরাও এখন ফ্ল্যাট ভাগ করেন«, »সংখ্যাও বাড়ছে« — আগের চেয়ে বেশি মানুষ ভাগ করে থাকছেন। শিরোনাম h) নিয়ে সতর্ক: একটি ঘরের বিজ্ঞাপন কোনো প্রবণতার প্রতিবেদন নয়।",
        },
      },
      {
        nr: 2,
        text: "Ein Vermieter darf vieles regeln, aber nicht alles. Vorschriften über feste Duschzeiten, ein Verbot von Besuch über Nacht oder die Pflicht, die Wohnung nur mit Hausschuhen zu betreten, sind ungültig — selbst wenn sie im Vertrag stehen und der Mieter unterschrieben hat. Erlaubt sind dagegen Regeln zum Zusammenleben, etwa zur Mülltrennung oder zum Reinigungsdienst im Treppenhaus.",
        answerKey: "e",
        why: {
          de: "»sind ungültig — selbst wenn sie im Vertrag stehen« — der Text zählt auf, was NICHT geregelt werden darf. Überschrift j) wäre das Gegenteil: Hier wird nichts strenger, sondern eine Grenze gezogen.",
          en: "'are invalid — even if they are in the contract' — the text lists what may NOT be regulated. Heading j) would be the opposite: nothing is getting stricter here, a limit is being drawn.",
          it: "»sono nulle, anche se scritte nel contratto«: il testo elenca ciò che NON può essere regolato.",
          bn: "»অবৈধ — চুক্তিতে থাকলেও« — লেখাটি বলে কী কী নিয়ম করা যায় না। শিরোনাম j) উল্টো হতো।",
        },
      },
      {
        nr: 3,
        text: "In einem Mehrfamilienhaus in Weidenau haben die Bewohner die Fläche hinter dem Haus gemeinsam hergerichtet. Es gibt jetzt vier Hochbeete, eine Bank und einen Platz für die Kinder. Wer mitmacht, bekommt einen Schlüssel; gegossen wird nach einem Plan, der im Flur hängt. Die Idee kam von einer Mieterin, die vorher jahrelang niemanden im Haus gekannt hatte.",
        answerKey: "d",
        why: {
          de: "»die Fläche hinter dem Haus gemeinsam hergerichtet«, »Wer mitmacht, bekommt einen Schlüssel« — ein Garten, den sich alle im Haus teilen. Genau Überschrift d).",
          en: "'jointly laid out the area behind the house', 'whoever joins in gets a key' — a garden shared by everyone in the building. Exactly heading d).",
          it: "»hanno sistemato insieme lo spazio dietro casa«: un giardino condiviso da tutti.",
          bn: "»বাড়ির পেছনের জায়গাটি সবাই মিলে গুছিয়েছেন« — বাড়ির সবার ভাগের বাগান। ঠিক শিরোনাম d)।",
        },
      },
      {
        nr: 4,
        text: "Kinderwagen, Schuhe, alte Schränke: In vielen Häusern steht im Flur mehr, als dort stehen dürfte. Die Feuerwehr weist regelmäßig darauf hin, dass Fluchtwege frei bleiben müssen. Ein Kinderwagen darf meistens abgestellt werden, wenn genug Platz bleibt; Möbel und Fahrräder dagegen nicht. Wer trotz Aufforderung nichts wegräumt, muss damit rechnen, dass der Vermieter die Sachen entfernen lässt.",
        answerKey: "a",
        why: {
          de: "»steht im Flur mehr, als dort stehen dürfte«, »Fluchtwege frei bleiben müssen« — das Treppenhaus wird als Abstellplatz benutzt. Das ist Überschrift a).",
          en: "'more is standing in the hallway than should be', 'escape routes must stay clear' — the stairwell is being used for storage. That is heading a).",
          it: "»nell'ingresso c'è più roba di quanta dovrebbe«: la tromba delle scale usata come deposito.",
          bn: "»করিডোরে যতটা থাকার কথা তার চেয়ে বেশি আছে« — সিঁড়িঘরকে মালপত্র রাখার জায়গা বানানো হচ্ছে। এটাই শিরোনাম a)।",
        },
      },
      {
        nr: 5,
        text: "Einmal im Jahr bekommen Mieter einen Brief, den viele ungelesen weglegen: die Abrechnung über Heizung, Wasser und Müll. Dabei lohnt sich ein Blick. Fachleute schätzen, dass jede zweite Abrechnung Fehler enthält. Wer etwas nicht versteht, darf die Belege beim Vermieter einsehen, und zwar innerhalb von zwölf Monaten nach Erhalt. Danach ist eine Korrektur meist nicht mehr möglich.",
        answerKey: "b",
        why: {
          de: "»Einmal im Jahr«, »die Abrechnung über Heizung, Wasser und Müll« — genau die Nebenkostenabrechnung. Die Überschrift nennt beides: den Rhythmus und die Sache.",
          en: "'Once a year', 'the statement for heating, water and rubbish' — the service-charge statement. The heading names both the rhythm and the thing.",
          it: "»Una volta all'anno«, »il conguaglio di riscaldamento, acqua e rifiuti«.",
          bn: "»বছরে একবার«, »গরম, পানি ও আবর্জনার হিসাব« — ঠিক অতিরিক্ত খরচের হিসাব। শিরোনামটি সময় ও বিষয় দুটোই বলে।",
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

    heading: "Lärm, Ruhezeit und Nachbarn – was wirklich gilt",

    text: `Kaum ein Thema bringt Nachbarn so schnell gegeneinander auf wie Lärm. Dabei beruhen die meisten Streitigkeiten auf einem Missverständnis darüber, was eine Ruhezeit überhaupt bedeutet.

Üblich sind in Deutschland die Nachtruhe von zweiundzwanzig bis sechs Uhr und die Mittagsruhe an Werktagen, außerdem sind Sonn- und Feiertage geschützt. Entscheidend ist aber: Ruhezeit heißt nicht Stille. Niemand muss im Dunkeln sitzen oder flüstern. Verlangt wird nur die sogenannte Zimmerlautstärke — was in der eigenen Wohnung passiert, soll in der Nachbarwohnung nicht mehr deutlich zu hören sein. Duschen um dreiundzwanzig Uhr ist also erlaubt, eine Bohrmaschine um dieselbe Zeit nicht.

Bei Kindern gilt etwas anderes. Rufen, Weinen und Laufen von kleinen Kindern sind rechtlich kein Lärm, den man verbieten kann, auch wenn es Nachbarn stört. Gerichte sehen darin einen normalen Teil des Lebens. Das heißt nicht, dass Eltern nichts tun müssen: Ein Fußballspiel im Flur um zehn Uhr abends ist etwas anderes als ein weinendes Baby.

Auch eine Feier ist kein Freibrief. Die weit verbreitete Annahme, man dürfe einmal im Monat oder viermal im Jahr laut feiern, steht in keinem Gesetz. Was hilft, ist banal und wirkt trotzdem: rechtzeitig Bescheid sagen, eine Handynummer dalassen und nach zweiundzwanzig Uhr die Fenster schließen.

Und wenn es doch Streit gibt? Der erste Schritt ist ein Gespräch, nicht ein Brief an den Vermieter. Wenn das nichts bringt, bieten viele Städte eine kostenlose Schlichtung an, bei der eine dritte Person vermittelt. Ein Gericht sollte wirklich das Letzte sein — es dauert lange, kostet Geld, und danach wohnt man immer noch Wand an Wand.`,

    questions: [
      {
        nr: 6,
        question: "Was bedeutet Ruhezeit nach dem Text?",
        options: [
          "Dass man in der Wohnung nichts hören darf.",
          "Dass man nicht lauter sein soll als Zimmerlautstärke.",
          "Dass man die Wohnung nicht benutzen darf.",
        ],
        answerIndex: 1,
        why: {
          de: "»Ruhezeit heißt nicht Stille … Verlangt wird nur die sogenannte Zimmerlautstärke«. Der Text widerlegt a) ausdrücklich mit dem Satz »Niemand muss im Dunkeln sitzen oder flüstern«.",
          en: "'Quiet time does not mean silence … all that is required is so-called room volume.' The text refutes a) outright with 'nobody has to sit in the dark or whisper'.",
          it: "»Ruhezeit non significa silenzio: si richiede solo il cosiddetto volume da stanza.«",
          bn: "»Ruhezeit মানে নীরবতা নয় … কেবল তথাকথিত Zimmerlautstärke দরকার«। লেখাটি a)-কে স্পষ্টভাবেই নাকচ করে।",
        },
      },
      {
        nr: 7,
        question: "Was ist nach zweiundzwanzig Uhr erlaubt?",
        options: ["Bohren.", "Duschen.", "Staubsaugen."],
        answerIndex: 1,
        why: {
          de: "»Duschen um dreiundzwanzig Uhr ist also erlaubt, eine Bohrmaschine um dieselbe Zeit nicht.« Der Text gibt beide Beispiele in einem Satz — a) ist genau das Gegenbeispiel, c) kommt gar nicht vor.",
          en: "'Showering at eleven at night is therefore allowed, a drill at the same hour is not.' The text gives both examples in one sentence — a) is precisely the counter-example, c) never appears.",
          it: "»Fare la doccia alle ventitré è permesso, il trapano alla stessa ora no.«",
          bn: "»রাত এগারোটায় গোসল করা তাই অনুমোদিত, একই সময়ে ড্রিল মেশিন নয়।« এক বাক্যেই দুটি উদাহরণ।",
        },
      },
      {
        nr: 8,
        question: "Was sagt der Text über Kinderlärm?",
        options: [
          "Eltern müssen ihn nicht beachten.",
          "Er ist an Sonntagen verboten.",
          "Er gilt rechtlich nicht als verbotener Lärm.",
        ],
        answerIndex: 2,
        why: {
          de: "»Rufen, Weinen und Laufen von kleinen Kindern sind rechtlich kein Lärm, den man verbieten kann.« Antwort a) geht zu weit: Der Text sagt gleich danach »Das heißt nicht, dass Eltern nichts tun müssen«. Ein Text, der eine Regel nennt und sofort einschränkt, prüft genau diese Einschränkung.",
          en: "'Shouting, crying and running by small children are legally not noise that can be banned.' Answer a) goes too far: the text says right after, 'that does not mean parents need do nothing'. A text that states a rule and immediately limits it is testing that limit.",
          it: "»Gridare, piangere e correre dei bambini piccoli non sono giuridicamente rumore vietabile.« La a) va oltre: il testo aggiunge subito che i genitori non sono esentati.",
          bn: "»ছোট শিশুদের চিৎকার, কান্না ও দৌড়ানো আইনত নিষিদ্ধযোগ্য শব্দ নয়।« a) বাড়াবাড়ি: লেখাটি সঙ্গে সঙ্গেই বলে »এর মানে বাবা-মায়ের কিছু করার নেই তা নয়«।",
        },
      },
      {
        nr: 9,
        question: "Was gilt für Feiern?",
        options: [
          "Man darf einmal im Monat laut feiern.",
          "Es gibt dafür keine gesetzliche Regel.",
          "Feiern sind nach zweiundzwanzig Uhr verboten.",
        ],
        answerIndex: 1,
        why: {
          de: "»Die weit verbreitete Annahme, man dürfe einmal im Monat … laut feiern, steht in keinem Gesetz.« Antwort a) ist genau diese Annahme — sie steht im Text, aber als Irrtum. Was zitiert wird, ist nicht automatisch wahr.",
          en: "'The widespread assumption that you may party loudly once a month … is in no law.' Answer a) is that very assumption — it appears in the text, but as an error. What is quoted is not automatically true.",
          it: "»La diffusa convinzione che si possa fare festa una volta al mese non è in nessuna legge.« La a) è proprio quella convinzione, citata come errore.",
          bn: "»মাসে একবার জোরে উৎসব করা যায় — এই প্রচলিত ধারণা কোনো আইনে নেই।« a) ঠিক সেই ধারণাটাই — লেখায় আছে, তবে ভুল হিসেবে।",
        },
      },
      {
        nr: 10,
        question: "Was empfiehlt der Text bei Streit als Erstes?",
        options: [
          "Mit dem Nachbarn zu sprechen.",
          "Dem Vermieter zu schreiben.",
          "Eine Schlichtung zu beantragen.",
        ],
        answerIndex: 0,
        why: {
          de: "»Der erste Schritt ist ein Gespräch, nicht ein Brief an den Vermieter.« Die Schlichtung aus c) kommt erst danach: »Wenn das nichts bringt«. Die Reihenfolge ist die Antwort.",
          en: "'The first step is a conversation, not a letter to the landlord.' The mediation in c) comes only afterwards: 'if that does not help'. The order is the answer.",
          it: "»Il primo passo è un colloquio, non una lettera al padrone di casa.« La conciliazione viene dopo.",
          bn: "»প্রথম পদক্ষেপ হলো কথা বলা, বাড়িওয়ালাকে চিঠি নয়।« c)-র মধ্যস্থতা আসে পরে: »তাতে কাজ না হলে«। ক্রমটাই উত্তর।",
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
        title: "Schlichtungsstelle Nachbarschaft",
        text: "Streit mit dem Nachbarn? Zwei ausgebildete Vermittler führen ein Gespräch mit beiden Seiten. Kostenlos für Bewohner der Stadt Siegen, Termine abends.",
      },
      {
        key: "b",
        title: "Mieterverein Siegen",
        text: "Wir prüfen Ihre Nebenkostenabrechnung und Ihren Mietvertrag. Nur für Mitglieder, Jahresbeitrag neunzig Euro. Erstberatung auch für Neumitglieder.",
      },
      {
        key: "c",
        title: "Möbel-Abholung und Entrümpelung",
        text: "Wir holen alte Schränke, Sofas und Elektrogeräte ab. Preis nach Menge, kostenloser Kostenvoranschlag. Abholung auch aus dem Keller.",
      },
      {
        key: "d",
        title: "WG-Zimmer in Weidenau frei",
        text: "Ab Oktober, zwanzig Quadratmeter in einer Dreier-WG, dreihundert Euro warm. Wir sind zwei Berufstätige Ende zwanzig. Nichtraucher-Wohnung.",
      },
      {
        key: "e",
        title: "Hausmeisterservice Klein",
        text: "Treppenhausreinigung, Gartenpflege und Winterdienst für Mehrfamilienhäuser. Angebote nur für Eigentümer und Hausverwaltungen, nicht für einzelne Mieter.",
      },
      {
        key: "f",
        title: "Gemeinschaftsgarten Fischbacherberg",
        text: "Noch drei Hochbeete frei. Jahresbeitrag zwanzig Euro, Werkzeug und Wasser vorhanden. Wer mitmacht, gießt nach einem gemeinsamen Plan.",
      },
      {
        key: "g",
        title: "Umzugshelfer gesucht und geboten",
        text: "Studierende helfen beim Tragen und Packen, zwölf Euro pro Stunde. Transporter kann gegen Aufpreis gestellt werden. Auch kurzfristig am Wochenende.",
      },
      {
        key: "h",
        title: "Wohnung zur Zwischenmiete",
        text: "Komplette Zweizimmerwohnung für drei bis sechs Monate abzugeben, möbliert. Nur ganze Wohnungen, keine einzelnen Zimmer. Ab sofort.",
      },
      {
        key: "i",
        title: "Beratung zur Nebenkostenabrechnung",
        text: "Die Verbraucherzentrale prüft Ihre Abrechnung auf Fehler. Zwanzig Euro pro Termin, Anmeldung nötig. Bringen Sie Abrechnung und Mietvertrag mit.",
      },
      {
        key: "j",
        title: "Waschsalon am Bahnhof",
        text: "Waschen und Trocknen täglich von sechs bis dreiundzwanzig Uhr. Große Maschinen für Bettwäsche. Nur Kartenzahlung, keine Anmeldung.",
      },
      {
        key: "k",
        title: "Deutsch-Treff im Nachbarschaftshaus",
        text: "Jeden Donnerstag ab siebzehn Uhr reden wir gemeinsam Deutsch, ohne Unterricht und ohne Anmeldung. Teilnahme und Kaffee kostenlos, alle Niveaus willkommen.",
      },
      {
        key: "l",
        title: "Hausordnung und Mietrecht – Vortrag",
        text: "Was darf in einer Hausordnung stehen und was nicht? Vortrag am fünften November, neunzehn Uhr, im Rathaus. Eintritt frei, ohne Anmeldung.",
      },
    ],

    situations: [
      {
        nr: 11,
        text: "Ihr Nachbar hört jeden Abend sehr laut Musik. Gespräche haben nichts gebracht, vor Gericht wollen Sie nicht.",
        answerKey: "a",
        why: {
          de: "»Zwei ausgebildete Vermittler führen ein Gespräch mit beiden Seiten« — genau der Mittelweg zwischen Gespräch und Gericht, den auch der Lesetext empfiehlt.",
          en: "'Two trained mediators hold a conversation with both sides' — exactly the middle way between talking and going to court that the reading text recommends.",
          it: "»Due mediatori formati parlano con entrambe le parti«: proprio la via di mezzo fra colloquio e tribunale.",
          bn: "»দুজন প্রশিক্ষিত মধ্যস্থতাকারী দুই পক্ষের সঙ্গেই কথা বলেন« — কথা বলা ও আদালতের মাঝামাঝি পথ।",
        },
      },
      {
        nr: 12,
        text: "Sie haben Ihre Abrechnung für Heizung und Wasser bekommen und glauben, dass etwas nicht stimmt. Mitglied in einem Verein sind Sie nicht.",
        answerKey: "i",
        why: {
          de: "»Die Verbraucherzentrale prüft Ihre Abrechnung auf Fehler« — und das ohne Mitgliedschaft. Anzeige b prüft dasselbe, aber »Nur für Mitglieder«; diese eine Bedingung entscheidet.",
          en: "'The consumer centre checks your statement for errors' — and without membership. Advert b checks the same thing but is 'members only'; that one condition decides it.",
          it: "»Il centro consumatori controlla il conguaglio«: senza tessera. L'annuncio b è »solo per soci«.",
          bn: "»ভোক্তা কেন্দ্র আপনার হিসাব যাচাই করে« — সদস্যপদ ছাড়াই। বিজ্ঞাপন b একই কাজ করে, কিন্তু »কেবল সদস্যদের জন্য«।",
        },
      },
      {
        nr: 13,
        text: "Sie möchten Ihr Deutsch im Alltag üben und suchen etwas ohne Kurs und ohne Kosten.",
        answerKey: "k",
        why: {
          de: "»reden wir gemeinsam Deutsch, ohne Unterricht und ohne Anmeldung. Teilnahme und Kaffee kostenlos« — kein Kurs, keine Kosten. Beide Bedingungen stehen wörtlich da.",
          en: "'we speak German together, no lessons and no registration. Participation and coffee free' — no course, no cost. Both conditions are there literally.",
          it: "»parliamo tedesco insieme, senza lezioni e senza iscrizione«.",
          bn: "»আমরা একসঙ্গে জার্মান বলি, ক্লাস ছাড়া, নিবন্ধন ছাড়া« — কোর্সও নয়, খরচও নয়।",
        },
      },
      {
        nr: 14,
        text: "Sie suchen ab Oktober ein Zimmer in einer Wohngemeinschaft und rauchen nicht.",
        answerKey: "d",
        why: {
          de: "»Ab Oktober … in einer Dreier-WG … Nichtraucher-Wohnung.« Zeitpunkt, Wohnform und die Nichtraucher-Bedingung passen alle drei.",
          en: "'From October … in a three-person flatshare … non-smoking flat.' Timing, type of housing and the non-smoking condition all three fit.",
          it: "»Da ottobre … in un appartamento condiviso da tre … casa per non fumatori.«",
          bn: "»অক্টোবর থেকে … তিনজনের WG-তে … ধূমপানমুক্ত ফ্ল্যাট।« সময়, ধরন ও শর্ত তিনটিই মেলে।",
        },
      },
      {
        nr: 15,
        text: "Sie ziehen am Samstag um und brauchen jemanden, der beim Tragen hilft.",
        answerKey: "g",
        why: {
          de: "»Studierende helfen beim Tragen und Packen … Auch kurzfristig am Wochenende.« Anzeige c holt zwar auch Möbel, aber um sie zu entsorgen, nicht um beim Umzug zu helfen.",
          en: "'Students help with carrying and packing … also at short notice at the weekend.' Advert c also takes furniture, but to dispose of it, not to help you move.",
          it: "»Studenti aiutano a trasportare e imballare, anche last minute nel weekend.«",
          bn: "»শিক্ষার্থীরা বওয়া ও গোছানোয় সাহায্য করে … সপ্তাহান্তে অল্প সময়ের নোটিশেও।« বিজ্ঞাপন c আসবাব নেয় ফেলে দেওয়ার জন্য।",
        },
      },
      {
        nr: 16,
        text: "Im Keller steht ein altes Sofa, das niemandem gehört und das weg soll.",
        answerKey: "c",
        why: {
          de: "»Wir holen alte Schränke, Sofas und Elektrogeräte ab … Abholung auch aus dem Keller.« Der letzte Halbsatz ist der entscheidende: Genau dort steht das Sofa.",
          en: "'We collect old wardrobes, sofas and appliances … collection from the cellar too.' The last clause is what decides it: that is exactly where the sofa is.",
          it: "»Ritiriamo vecchi armadi, divani ed elettrodomestici … anche dalla cantina.«",
          bn: "»আমরা পুরনো আলমারি, সোফা ও যন্ত্র নিয়ে যাই … বেসমেন্ট থেকেও।« শেষ অংশটাই নির্ণায়ক।",
        },
      },
      {
        nr: 17,
        text: "Sie sind sechs Monate im Ausland und möchten in dieser Zeit nur Ihr Zimmer in der WG untervermieten.",
        answerKey: "x",
        why: {
          de: "Anzeige h ist das einzige Angebot zur Zwischenmiete — aber »Nur ganze Wohnungen, keine einzelnen Zimmer«, und Anzeige d ist ein Angebot, kein Gesuch. Die Dauer passt, die Wohnform nicht. In Teil 3 reicht eine falsche Bedingung, um eine sonst perfekte Anzeige auszuschließen.",
          en: "Advert h is the only sublet offer — but 'whole flats only, no single rooms', and advert d is an offer, not a request. The duration fits, the type of housing does not. In Teil 3 one wrong condition is enough to rule out an otherwise perfect advert.",
          it: "L'annuncio h è l'unico per la sublocazione, ma »solo appartamenti interi, non singole stanze«. La durata combacia, il tipo di alloggio no.",
          bn: "বিজ্ঞাপন h-ই একমাত্র সাবলেট অফার — কিন্তু »কেবল পুরো ফ্ল্যাট, একক ঘর নয়«। সময় মেলে, ধরন মেলে না। একটি ভুল শর্তই যথেষ্ট।",
        },
      },
      {
        nr: 18,
        text: "Sie möchten wissen, welche Regeln ein Vermieter überhaupt aufstellen darf, und haben am Abend Zeit.",
        answerKey: "l",
        why: {
          de: "»Was darf in einer Hausordnung stehen und was nicht? … neunzehn Uhr … Eintritt frei.« Das Thema und die Uhrzeit passen beide.",
          en: "'What may and may not be in house rules? … seven in the evening … free entry.' Topic and time both fit.",
          it: "»Cosa può contenere un regolamento condominiale e cosa no? … alle diciannove.«",
          bn: "»বাড়ির নিয়মে কী থাকতে পারে আর কী নয়? … সন্ধ্যা সাতটা … প্রবেশ ফ্রি।«",
        },
      },
      {
        nr: 19,
        text: "Ihre Waschmaschine ist kaputt und Sie müssen am Abend noch Bettwäsche waschen.",
        answerKey: "j",
        why: {
          de: "»täglich von sechs bis dreiundzwanzig Uhr. Große Maschinen für Bettwäsche.« Beides zusammen — spät geöffnet und groß genug — macht diese Anzeige zur einzigen passenden.",
          en: "'daily from six to eleven at night. Large machines for bedding.' The two together — open late and big enough — make this the only fit.",
          it: "»tutti i giorni dalle sei alle ventitré. Macchine grandi per la biancheria da letto.«",
          bn: "»প্রতিদিন ছয়টা থেকে তেইশটা। বিছানার চাদরের জন্য বড় মেশিন।« দুটো মিলেই এটি একমাত্র মানানসই।",
        },
      },
      {
        nr: 20,
        text: "Sie möchten gemeinsam mit anderen Gemüse anbauen.",
        answerKey: "f",
        why: {
          de: "»Noch drei Hochbeete frei … Wer mitmacht, gießt nach einem gemeinsamen Plan.« Anzeige e pflegt zwar auch Gärten, aber als Dienstleistung — und ausdrücklich »nicht für einzelne Mieter«.",
          en: "'Three raised beds still free … whoever joins waters according to a shared plan.' Advert e also tends gardens, but as a service — and expressly 'not for individual tenants'.",
          it: "»Ancora tre aiuole libere … chi partecipa annaffia secondo un piano comune.«",
          bn: "»এখনো তিনটি উঁচু বেড খালি … যিনি যোগ দেন, সবার পরিকল্পনা অনুযায়ী পানি দেন।«",
        },
      },
    ],
  },

  /* ================================================================== */
  glossary: [
    g("wohngemeinschaften", "die Wohngemeinschaft", "die", "shared flats (WG)", "appartamenti condivisi", "শেয়ার্ড ফ্ল্যাট"),
    g("berufstätige", "berufstätig", undefined, "people in work", "persone che lavorano", "চাকরিজীবী"),
    g("geselligkeit", "die Geselligkeit", "die", "sociability, company", "socialità", "সঙ্গ / মেলামেশা"),
    g("bezahlbar", "bezahlbar", undefined, "affordable", "accessibile", "সাধ্যের মধ্যে"),
    g("vermieter", "der Vermieter", "der", "landlord", "locatore", "বাড়িওয়ালা"),
    g("vorschriften", "die Vorschrift", "die", "rules, regulations", "prescrizioni", "বিধি"),
    g("ungültig", "ungültig", undefined, "invalid, not binding", "non valido", "অবৈধ"),
    g("mieter", "der Mieter", "der", "tenant", "inquilino", "ভাড়াটিয়া"),
    g("mülltrennung", "die Mülltrennung", "die", "separating rubbish for recycling", "raccolta differenziata", "আবর্জনা আলাদা করা"),
    g("treppenhaus", "das Treppenhaus", "das", "stairwell, communal staircase", "tromba delle scale", "সিঁড়িঘর"),
    g("mehrfamilienhaus", "das Mehrfamilienhaus", "das", "block of flats", "condominio", "বহুতল আবাসিক ভবন"),
    g("hergerichtet", "herrichten", undefined, "laid out, got into shape", "sistemato", "গুছিয়ে তোলা"),
    g("hochbeete", "das Hochbeet", "das", "raised beds", "aiuole rialzate", "উঁচু বাগান-বেড"),
    g("gegossen", "gießen", undefined, "watered (plants)", "annaffiato", "পানি দেওয়া"),
    g("fluchtwege", "der Fluchtweg", "der", "escape routes", "vie di fuga", "নির্গমন পথ"),
    g("abgestellt", "abstellen", undefined, "parked, put down", "posato, parcheggiato", "রেখে দেওয়া"),
    g("aufforderung", "die Aufforderung", "die", "formal request to act", "sollecito", "আহ্বান / তাগাদা"),
    g("abrechnung", "die Abrechnung", "die", "statement of costs", "conguaglio, rendiconto", "হিসাবপত্র"),
    g("belege", "der Beleg", "der", "receipts, supporting documents", "giustificativi", "প্রমাণপত্র"),
    g("einsehen", "einsehen", undefined, "to inspect, look at", "prendere visione", "দেখে নেওয়া"),
    g("erhalt", "der Erhalt", "der", "receipt (of something)", "ricezione", "প্রাপ্তি"),
    g("streitigkeiten", "die Streitigkeit", "die", "disputes", "controversie", "বিরোধ"),
    g("nachtruhe", "die Nachtruhe", "die", "night-time quiet hours", "riposo notturno", "রাতের নীরবতার সময়"),
    g("werktagen", "der Werktag", "der", "working days", "giorni feriali", "কর্মদিবস"),
    g("flüstern", "flüstern", undefined, "to whisper", "sussurrare", "ফিসফিস করা"),
    g("zimmerlautstärke", "die Zimmerlautstärke", "die", "room volume — not audible next door", "volume da stanza", "ঘরের মধ্যে সীমিত শব্দ"),
    g("bohrmaschine", "die Bohrmaschine", "die", "drill", "trapano", "ড্রিল মেশিন"),
    g("gerichte", "das Gericht", "das", "courts", "tribunali", "আদালত"),
    g("freibrief", "der Freibrief", "der", "carte blanche, licence to do anything", "carta bianca", "যা খুশি করার ছাড়পত্র"),
    g("annahme", "die Annahme", "die", "assumption", "supposizione", "ধারণা"),
    g("banal", "banal", undefined, "obvious, unremarkable", "banale", "সাধারণ"),
    g("schlichtung", "die Schlichtung", "die", "mediation", "conciliazione", "মধ্যস্থতা"),
    g("vermittelt", "vermitteln", undefined, "mediates", "media", "মধ্যস্থতা করে"),
    g("vermittler", "der Vermittler", "der", "mediators", "mediatori", "মধ্যস্থতাকারী"),
    g("mietvertrag", "der Mietvertrag", "der", "tenancy agreement", "contratto d'affitto", "ভাড়ার চুক্তি"),
    g("jahresbeitrag", "der Jahresbeitrag", "der", "annual membership fee", "quota annuale", "বার্ষিক চাঁদা"),
    g("entrümpelung", "die Entrümpelung", "die", "clearance of unwanted things", "sgombero", "পুরনো জিনিস সরানো"),
    g("winterdienst", "der Winterdienst", "der", "snow and ice clearing", "servizio invernale", "শীতকালীন পরিচ্ছন্নতা"),
    g("hausverwaltungen", "die Hausverwaltung", "die", "property management companies", "amministrazioni condominiali", "ভবন ব্যবস্থাপনা"),
    g("zwischenmiete", "die Zwischenmiete", "die", "temporary sublet", "sublocazione temporanea", "অস্থায়ী সাবলেট"),
    g("möbliert", "möbliert", undefined, "furnished", "ammobiliato", "আসবাবসহ"),
    g("bettwäsche", "die Bettwäsche", "die", "bed linen", "biancheria da letto", "বিছানার চাদর"),
    g("hausordnung", "die Hausordnung", "die", "house rules", "regolamento condominiale", "বাড়ির নিয়মাবলি"),
  ],
};
