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
 * LES-03 — Gesundheit und Arztbesuch.
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * The health topic is where the exam gets sly with near-synonyms, so the
 * traps are built out of them on purpose:
 *   · Teil 1, heading j) "Krank zur Arbeit" is about the same word field
 *     as text 3 but says the opposite of it.
 *   · Teil 2 question 8 turns on "sollte" versus "muss" — advice is not
 *     an obligation, and B1 candidates routinely read one as the other.
 *   · Teil 3 situation 20 wants a dentist for a CHILD at the weekend;
 *     there is a children's dentist (weekdays) and a weekend emergency
 *     service (adults). Each advert matches half the situation, which is
 *     exactly why the answer is x.
 */
export const les03: LesenSet = {
  code: "LES-03",

  title: {
    de: "Gesundheit, Arztbesuch und Krankenkasse",
    en: "Health, the doctor and health insurance",
    it: "Salute, visita medica e cassa malattia",
    bn: "স্বাস্থ্য, ডাক্তার দেখানো ও স্বাস্থ্যবিমা",
  },

  intro: {
    de: "Drei Teile wie in der Prüfung. Tippe beim Lesen auf ein Wort, wenn du es nicht kennst.",
    en: "Three parts, as in the exam. Tap any word while reading if you don't know it.",
    it: "Tre parti, come nell'esame. Tocca una parola mentre leggi se non la conosci.",
    bn: "পরীক্ষার মতোই তিনটি অংশ। পড়ার সময় কোনো শব্দ না জানলে সেটিতে চাপ দিন।",
  },

  /* ================================================================== */
  /* Teil 1 — five texts, ten headings, five of them never used.        */
  /* ================================================================== */
  teil1: {
    instruction: {
      de: "Lies die fünf Texte und die Überschriften a–j. Welche Überschrift passt zu welchem Text? Fünf Überschriften bleiben übrig.",
      en: "Read the five texts and the headings a–j. Which heading fits which text? Five headings are left over.",
      it: "Leggi i cinque testi e i titoli a–j. Quale titolo va con quale testo? Cinque titoli restano inutilizzati.",
      bn: "পাঁচটি লেখা ও a–j শিরোনামগুলো পড়ুন। কোন শিরোনাম কোন লেখার সঙ্গে যায়? পাঁচটি শিরোনাম অব্যবহৃত থাকবে।",
    },

    headings: [
      { key: "a", text: "Termine online statt am Telefon" },
      { key: "b", text: "Wenn die Apotheke nachts geöffnet hat" },
      { key: "c", text: "Bewegung hilft mehr als jede Tablette" },
      { key: "d", text: "Was die Kasse zahlt – und was nicht" },
      { key: "e", text: "Angst vor dem Zahnarzt" },
      { key: "f", text: "Neue Öffnungszeiten der Praxis" },
      { key: "g", text: "Rauchen aufhören – in der Gruppe leichter" },
      { key: "h", text: "Gesund essen ohne viel Geld" },
      { key: "i", text: "Immer mehr Menschen schlafen schlecht" },
      { key: "j", text: "Krank zur Arbeit gehen" },
    ],

    texts: [
      {
        nr: 1,
        text: "Wer in Deutschland einen Arzttermin braucht, musste früher oft lange in der Warteschleife hängen. Immer mehr Praxen bieten deshalb einen Kalender im Internet an: Man sucht sich selbst eine freie Zeit aus und bekommt sofort eine Bestätigung per E-Mail. Ältere Patienten dürfen natürlich weiterhin anrufen. Die Praxen berichten, dass seit der Umstellung deutlich weniger Patienten ihren Termin vergessen, weil das System am Vortag automatisch eine Erinnerung schickt.",
        answerKey: "a",
        why: {
          de: "Der ganze Text dreht sich um das Buchen von Terminen im Internet statt am Telefon. »Warteschleife«, »Kalender im Internet«, »Bestätigung per E-Mail« — alles dasselbe Thema. Überschrift f) »Neue Öffnungszeiten« wäre etwas anderes: von Öffnungszeiten ist nie die Rede.",
          en: "The whole text is about booking appointments online instead of by phone. 'Warteschleife', 'calendar online', 'confirmation by email' — all the same topic. Heading f) 'New opening hours' would be something else: opening hours are never mentioned.",
          it: "Tutto il testo parla di prenotare appuntamenti online invece che per telefono. Il titolo f) »Nuovi orari« sarebbe altro: gli orari non compaiono mai.",
          bn: "পুরো লেখাটি ফোনের বদলে ইন্টারনেটে অ্যাপয়েন্টমেন্ট নেওয়া নিয়ে। শিরোনাম f) »নতুন খোলার সময়« অন্য জিনিস: খোলার সময়ের কথা কোথাও নেই।",
        },
      },
      {
        nr: 2,
        text: "Eine Krankenkasse bezahlt längst nicht alles. Die Untersuchung beim Hausarzt, Medikamente auf Rezept und der Krankenhausaufenthalt sind abgedeckt. Bei den Zähnen wird es schon schwieriger: Eine einfache Füllung übernimmt die Kasse, für eine schönere aus weißem Material muss man selbst etwas dazuzahlen. Auch Brillen zahlen die gesetzlichen Kassen für Erwachsene meistens nicht mehr. Wer unsicher ist, sollte vor der Behandlung fragen, was sie kostet.",
        answerKey: "d",
        why: {
          de: "Der Text zählt auf, was bezahlt wird (Hausarzt, Rezept, Krankenhaus) und was nicht (schöne Füllung, Brille). Genau diese Zweiteilung steht in Überschrift d).",
          en: "The text lists what is paid for (GP, prescription, hospital) and what is not (white filling, glasses). That split is exactly heading d).",
          it: "Il testo elenca ciò che è coperto e ciò che non lo è. Questa divisione è esattamente il titolo d).",
          bn: "লেখাটি বলে কী কী দেওয়া হয় (হাউসআর্ট্স, প্রেসক্রিপশন, হাসপাতাল) আর কী নয় (সাদা ফিলিং, চশমা)। এই দুই ভাগই শিরোনাম d)।",
        },
      },
      {
        nr: 3,
        text: "Viele Beschäftigte gehen ins Büro, obwohl sie Fieber haben oder stark husten. Fachleute halten das für einen Fehler. Wer krank arbeitet, braucht länger, bis er wieder gesund ist, macht mehr Fehler und steckt außerdem die Kollegen an. Ein Betriebsarzt sagt es deutlich: Zwei Tage zu Hause sind billiger als zwei Wochen mit halber Kraft. Wer sich krank fühlt, soll zum Arzt gehen und sich krankschreiben lassen.",
        answerKey: "j",
        why: {
          de: "Das Thema ist genau das: krank trotzdem zur Arbeit gehen — und warum das schadet. Vorsicht: Überschrift j) bewertet nicht, sie benennt nur das Thema. Eine Überschrift muss zum Thema passen, nicht zur Meinung des Textes.",
          en: "The topic is precisely going to work while ill — and why it backfires. Careful: heading j) does not judge, it only names the topic. A heading has to match the topic, not the text's opinion.",
          it: "Il tema è proprio andare al lavoro da malati e perché è dannoso. Attenzione: il titolo j) non giudica, nomina solo il tema.",
          bn: "বিষয়টা ঠিক এটাই: অসুস্থ অবস্থাতেও কাজে যাওয়া — আর কেন তা ক্ষতিকর। সতর্কতা: শিরোনাম j) মতামত দেয় না, কেবল বিষয়টি নাম দেয়।",
        },
      },
      {
        nr: 4,
        text: "Drei von zehn Erwachsenen liegen abends lange wach oder wachen mitten in der Nacht auf. Besonders betroffen sind Menschen, die im Schichtdienst arbeiten, und junge Leute, die das Handy mit ins Bett nehmen. Ärzte raten zu festen Zeiten: jeden Tag ungefähr gleich ins Bett und wieder aufstehen, auch am Wochenende. Tabletten helfen kurz, lösen das Problem aber nicht.",
        answerKey: "i",
        why: {
          de: "»Drei von zehn Erwachsenen liegen abends lange wach« — eine wachsende Gruppe mit Schlafproblemen. Überschrift c) wäre falsch: Bewegung kommt im Text gar nicht vor, nur feste Zeiten.",
          en: "'Three in ten adults lie awake' — a growing group with sleep problems. Heading c) would be wrong: exercise is never mentioned, only fixed times.",
          it: "»Tre adulti su dieci restano svegli« — un gruppo crescente con problemi di sonno. Il titolo c) sarebbe sbagliato: il movimento non compare.",
          bn: "»দশজনের মধ্যে তিনজন প্রাপ্তবয়স্ক জেগে থাকেন« — ঘুমের সমস্যায় বাড়তে থাকা দল। শিরোনাম c) ভুল হতো: ব্যায়ামের কথা লেখায় নেই।",
        },
      },
      {
        nr: 5,
        text: "Frisches Gemüse ist teurer geworden, gesund essen muss aber nicht viel kosten. Wer saisonal einkauft, zahlt oft die Hälfte: Kohl im Winter, Tomaten im Sommer. Tiefkühlgemüse ohne Soße ist genauso gut wie frisches und hält länger. Und wer zweimal in der Woche selbst kocht und die Reste am nächsten Tag mitnimmt, spart mehr als mit jedem Sonderangebot.",
        answerKey: "h",
        why: {
          de: "Der ganze Text gibt Tipps, wie gesunde Ernährung billig bleibt — saisonal, tiefgekühlt, selbst kochen. Das ist Überschrift h).",
          en: "The whole text gives tips on keeping healthy eating cheap — seasonal, frozen, cooking yourself. That is heading h).",
          it: "Tutto il testo dà consigli per mangiare sano spendendo poco. È il titolo h).",
          bn: "পুরো লেখাটি কম খরচে স্বাস্থ্যকর খাওয়ার পরামর্শ দেয় — মৌসুমি, হিমায়িত, নিজে রান্না। এটাই শিরোনাম h)।",
        },
      },
    ],
  },

  /* ================================================================== */
  /* Teil 2 — one longer text, five multiple-choice questions.          */
  /* ================================================================== */
  teil2: {
    instruction: {
      de: "Lies den Text und beantworte die Fragen 6–10. Nur eine Antwort ist richtig.",
      en: "Read the text and answer questions 6–10. Only one answer is correct.",
      it: "Leggi il testo e rispondi alle domande 6–10. Solo una risposta è corretta.",
      bn: "লেখাটি পড়ুন এবং ৬–১০ প্রশ্নের উত্তর দিন। কেবল একটি উত্তর সঠিক।",
    },

    heading: "Der erste Besuch beim Hausarzt – worauf man achten sollte",

    text: `Wer neu in Deutschland ist, sucht sich am besten früh einen Hausarzt – also nicht erst dann, wenn man wirklich krank ist. Der Hausarzt ist die erste Adresse für fast alles: Erkältung, Rückenschmerzen, Impfungen, Blutwerte. Nur in wenigen Fällen geht man direkt zu einem Facharzt, zum Beispiel zum Zahnarzt oder zum Augenarzt.

Zum ersten Termin bringt man die Versichertenkarte mit. Ohne diese Karte wird der Besuch zwar nicht abgelehnt, aber die Praxis darf eine Rechnung schreiben, wenn die Karte nicht innerhalb von zehn Tagen nachgereicht wird. Sinnvoll ist außerdem eine Liste aller Medikamente, die man regelmäßig nimmt – am einfachsten fotografiert man die Packungen.

Viele Patienten unterschätzen, wie kurz ein Termin ist. Im Schnitt hat ein Hausarzt etwa acht Minuten pro Patient. Wer drei verschiedene Probleme hat, sollte gleich zu Beginn sagen, welches das wichtigste ist. Sonst bleibt am Ende keine Zeit mehr dafür. Fachleute empfehlen, die zwei oder drei wichtigsten Fragen vorher auf einen Zettel zu schreiben. Das klingt banal, verändert das Gespräch aber deutlich.

Sprachlich muss niemand perfekt sein. Es ist völlig in Ordnung zu sagen: „Das habe ich nicht verstanden, können Sie das bitte noch einmal langsam erklären?" Ein guter Arzt wiederholt es gern. Wer sich unsicher fühlt, darf auch eine Begleitperson mitbringen. Ein Dolmetscher wird von der Krankenkasse allerdings normalerweise nicht bezahlt – das überrascht viele.

Und noch etwas: Wenn ein Termin nicht passt, sollte man ihn absagen, am besten einen Tag vorher. Manche Praxen verlangen sonst eine Gebühr. Vor allem aber bekommt so jemand anderes den Platz – und beim nächsten Mal bekommt man selbst schneller einen Termin.`,

    questions: [
      {
        nr: 6,
        question: "Wann sollte man sich laut Text einen Hausarzt suchen?",
        options: [
          "Bevor man krank wird.",
          "Erst wenn man Schmerzen hat.",
          "Wenn der Facharzt es empfiehlt.",
        ],
        answerIndex: 0,
        why: {
          de: "»am besten früh … also nicht erst dann, wenn man wirklich krank ist«. Das »nicht erst dann« ist die Antwort: vorher, nicht im Krankheitsfall.",
          en: "'best done early … not only once you are really ill'. That 'nicht erst dann' is the answer: beforehand, not when illness strikes.",
          it: "»meglio presto … non solo quando si è davvero malati«. Quel »nicht erst dann« è la risposta.",
          bn: "»সবচেয়ে ভালো আগেই … অর্থাৎ সত্যিই অসুস্থ হওয়ার পরে নয়«। এই »nicht erst dann«-ই উত্তর।",
        },
      },
      {
        nr: 7,
        question: "Was passiert, wenn man die Versichertenkarte vergisst?",
        options: [
          "Man wird nicht behandelt.",
          "Man muss sofort bar bezahlen.",
          "Man kann die Karte noch nachreichen.",
        ],
        answerIndex: 2,
        why: {
          de: "»wird der Besuch zwar nicht abgelehnt, aber die Praxis darf eine Rechnung schreiben, wenn die Karte nicht innerhalb von zehn Tagen nachgereicht wird«. Man darf sie also nachreichen — a) und b) beschreiben nur, was passiert, wenn man es nicht tut.",
          en: "'the visit is not refused, but the practice may bill you if the card is not handed in within ten days'. So you may hand it in later — a) and b) only describe what happens if you don't.",
          it: "»la visita non viene rifiutata, ma lo studio può emettere fattura se la tessera non arriva entro dieci giorni«. Quindi si può consegnarla dopo.",
          bn: "»সাক্ষাৎ প্রত্যাখ্যান করা হয় না, তবে দশ দিনের মধ্যে কার্ড না দিলে চেম্বার বিল পাঠাতে পারে«। অর্থাৎ পরে দেওয়া যায়।",
        },
      },
      {
        nr: 8,
        question: "Was empfiehlt der Text Patienten mit mehreren Problemen?",
        options: [
          "Für jedes Problem einen eigenen Termin zu machen.",
          "Am Anfang zu sagen, was am wichtigsten ist.",
          "Dem Arzt eine schriftliche Liste zu geben.",
        ],
        answerIndex: 1,
        why: {
          de: "»sollte gleich zu Beginn sagen, welches das wichtigste ist«. Achtung bei c): Der Zettel ist für einen selbst gedacht (»vorher auf einen Zettel zu schreiben«), nicht zum Abgeben. Und »sollte« ist ein Rat, keine Pflicht — der Text schreibt nirgends etwas vor.",
          en: "'should say right at the start which one matters most'. Careful with c): the note is for yourself ('write them down beforehand'), not to hand over. And 'sollte' is advice, not an obligation — the text never prescribes anything.",
          it: "»dovrebbe dire subito quale è il più importante«. Attenzione a c): il foglietto è per sé, non da consegnare.",
          bn: "»শুরুতেই বলা উচিত কোনটা সবচেয়ে জরুরি«। c) নিয়ে সতর্ক: কাগজটা নিজের জন্য (»আগে থেকে লিখে রাখা«), জমা দেওয়ার জন্য নয়।",
        },
      },
      {
        nr: 9,
        question: "Was sagt der Text über Dolmetscher?",
        options: [
          "Die Krankenkasse bezahlt sie normalerweise nicht.",
          "Jede Praxis stellt einen Dolmetscher.",
          "Man darf keine Begleitperson mitbringen.",
        ],
        answerIndex: 0,
        why: {
          de: "»Ein Dolmetscher wird von der Krankenkasse allerdings normalerweise nicht bezahlt«. c) steht sogar umgekehrt im Text: eine Begleitperson darf man mitbringen.",
          en: "'An interpreter is normally not paid for by the health insurer.' c) is the opposite of what the text says: you may bring someone with you.",
          it: "»L'interprete di solito non è pagato dalla cassa malattia«. La c) è il contrario del testo.",
          bn: "»দোভাষীর খরচ সাধারণত স্বাস্থ্যবিমা দেয় না«। c) লেখার ঠিক উল্টো: সঙ্গী আনা যায়।",
        },
      },
      {
        nr: 10,
        question: "Warum soll man einen Termin rechtzeitig absagen?",
        options: [
          "Weil die Praxis sonst die Krankenkasse informiert.",
          "Weil man sonst keinen neuen Termin mehr bekommt.",
          "Weil dann jemand anderes den Platz bekommen kann.",
        ],
        answerIndex: 2,
        why: {
          de: "»Vor allem aber bekommt so jemand anderes den Platz«. Die Gebühr wird zwar erwähnt, aber »vor allem« zeigt, was der Text für den Hauptgrund hält. b) ist übertrieben: man bekommt schneller einen Termin, nicht gar keinen.",
          en: "'Above all, someone else gets the slot.' The fee is mentioned, but 'vor allem' marks what the text calls the main reason. b) overstates it: you get one faster, not never.",
          it: "»Soprattutto così qualcun altro ottiene il posto«. La b) esagera: si ottiene prima, non mai.",
          bn: "»সবচেয়ে বড় কথা, এতে অন্য কেউ জায়গাটা পায়«। b) বাড়াবাড়ি: দ্রুত পাওয়া যায়, একেবারে না-পাওয়া নয়।",
        },
      },
    ],
  },

  /* ================================================================== */
  /* Teil 3 — twelve adverts, ten situations, one with no match.        */
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
        title: "Praxis Dr. Behrens – Hausarzt",
        text: "Offene Sprechstunde ohne Termin: Montag bis Freitag von acht bis zehn Uhr. Auch für Patienten, die noch nicht bei uns waren. Bitte Versichertenkarte mitbringen.",
      },
      {
        key: "b",
        title: "Zahnarztpraxis Lang – nur für Kinder",
        text: "Wir behandeln ausschließlich Kinder bis vierzehn Jahre. Termine Montag bis Donnerstag von acht bis achtzehn Uhr, auf Wunsch auch nach der Schule. Am Wochenende geschlossen.",
      },
      {
        key: "c",
        title: "Zahnärztlicher Notdienst",
        text: "Samstag und Sonntag von zehn bis achtzehn Uhr für Erwachsene mit starken Schmerzen. Kinder bitten wir, den Kinderzahnarzt in der Woche aufzusuchen.",
      },
      {
        key: "d",
        title: "Apotheke am Markt – Nachtdienst",
        text: "Diese Woche haben wir Nachtdienst. Von zwanzig Uhr bis acht Uhr morgens klingeln Sie bitte am Nachtschalter. Rezepte werden auch nachts angenommen.",
      },
      {
        key: "e",
        title: "Rückenkurs der Krankenkasse",
        text: "Zehn Termine, dienstags um achtzehn Uhr im Sportzentrum. Für Versicherte kostenlos, wenn man mindestens acht Mal kommt. Anmeldung online.",
      },
      {
        key: "f",
        title: "Physiotherapie Kaya",
        text: "Behandlung nur mit Rezept vom Arzt. Freie Termine ab nächster Woche, auch am späten Nachmittag. Hausbesuche nach Absprache möglich.",
      },
      {
        key: "g",
        title: "Kurs: Mit dem Rauchen aufhören",
        text: "Sechs Abende in einer kleinen Gruppe, immer mittwochs. Die Krankenkasse übernimmt achtzig Prozent der Kosten. Beginn im Oktober.",
      },
      {
        key: "h",
        title: "Beratung zur Krankenversicherung",
        text: "Sie sind neu in Deutschland und wissen nicht, welche Kasse zu Ihnen passt? Kostenlose Beratung, auch auf Englisch, jeden Donnerstagnachmittag im Rathaus.",
      },
      {
        key: "i",
        title: "Augenarzt Dr. Simon",
        text: "Sehtest und Brillenrezept. Terminvergabe nur telefonisch, montags bis freitags von neun bis zwölf Uhr. Wartezeit derzeit etwa vier Wochen.",
      },
      {
        key: "j",
        title: "Ernährungsberatung im Gesundheitszentrum",
        text: "Einzelberatung für Menschen, die abnehmen oder sich gesünder ernähren möchten. Erstes Gespräch kostenlos, danach zwanzig Euro pro Stunde.",
      },
      {
        key: "k",
        title: "Kinderarztpraxis Sonnenschein",
        text: "Impfungen und Vorsorgeuntersuchungen für Kinder von null bis achtzehn Jahren. Sprechstunde für akut kranke Kinder täglich von acht bis neun Uhr.",
      },
      {
        key: "l",
        title: "Krankengymnastik im Wasser",
        text: "Gruppen für Menschen mit Gelenkproblemen, samstags vormittags im Hallenbad. Ohne Rezept, achtzig Euro für zehn Termine.",
      },
    ],

    situations: [
      {
        nr: 11,
        text: "Sie sind gerade nach Siegen gezogen, haben noch keinen Arzt und heute Morgen Halsschmerzen bekommen. Einen Termin haben Sie nicht.",
        answerKey: "a",
        why: {
          de: "»Offene Sprechstunde ohne Termin … auch für Patienten, die noch nicht bei uns waren.« Beide Bedingungen — kein Termin und neu — stehen ausdrücklich in der Anzeige.",
          en: "'Walk-in surgery without appointment … also for patients who have not been here before.' Both conditions — no appointment and new — are stated in the advert.",
          it: "»Ambulatorio senza appuntamento … anche per nuovi pazienti.« Entrambe le condizioni sono nell'annuncio.",
          bn: "»অ্যাপয়েন্টমেন্ট ছাড়া খোলা সময় … আগে না আসা রোগীদের জন্যও।« দুটি শর্তই বিজ্ঞাপনে আছে।",
        },
      },
      {
        nr: 12,
        text: "Ihr Arzt hat Ihnen wegen Ihrer Rückenschmerzen ein Rezept für Physiotherapie gegeben. Sie arbeiten bis siebzehn Uhr.",
        answerKey: "f",
        why: {
          de: "Anzeige f verlangt genau ein Rezept und bietet Termine »auch am späten Nachmittag« — das passt zum Arbeitsende. Der Rückenkurs e wäre falsch: der ist ohne Rezept und ein Kurs, keine Behandlung.",
          en: "Advert f requires exactly a prescription and offers appointments 'also in the late afternoon'. Course e would be wrong: no prescription, and a class rather than treatment.",
          it: "L'annuncio f richiede la ricetta e offre appuntamenti nel tardo pomeriggio. Il corso e sarebbe sbagliato.",
          bn: "বিজ্ঞাপন f-এ ঠিক প্রেসক্রিপশন লাগে এবং »বিকেলের শেষেও« সময় আছে। কোর্স e ভুল হতো।",
        },
      },
      {
        nr: 13,
        text: "Sie möchten endlich mit dem Rauchen aufhören und schaffen es allein nicht.",
        answerKey: "g",
        why: {
          de: "»Mit dem Rauchen aufhören«, »in einer kleinen Gruppe« — genau das Problem und genau die Lösung.",
          en: "'Stop smoking', 'in a small group' — precisely the problem and precisely the answer.",
          it: "»Smettere di fumare«, »in un piccolo gruppo« — proprio il problema e la soluzione.",
          bn: "»ধূমপান ছাড়া«, »ছোট দলে« — ঠিক সমস্যাটাই, ঠিক সমাধানটাই।",
        },
      },
      {
        nr: 14,
        text: "Ihr Sohn ist zwei Jahre alt und soll seine nächste Impfung bekommen.",
        answerKey: "k",
        why: {
          de: "»Impfungen und Vorsorgeuntersuchungen für Kinder von null bis achtzehn Jahren«. Anzeige b ist zwar auch für Kinder, aber ein Zahnarzt — Impfungen gibt es dort nicht.",
          en: "'Vaccinations and check-ups for children from nought to eighteen.' Advert b is also for children but is a dentist — no vaccinations there.",
          it: "»Vaccinazioni e controlli per bambini da zero a diciotto anni.« L'annuncio b è per bambini ma è un dentista.",
          bn: "»শূন্য থেকে আঠারো বছরের শিশুদের টিকা ও নিয়মিত পরীক্ষা«। বিজ্ঞাপন b শিশুদের জন্য হলেও দাঁতের ডাক্তার।",
        },
      },
      {
        nr: 15,
        text: "Es ist dreiundzwanzig Uhr, Ihre Tochter hat Fieber und Sie brauchen dringend ein Fiebermittel.",
        answerKey: "d",
        why: {
          de: "»Von zwanzig Uhr bis acht Uhr morgens klingeln Sie bitte am Nachtschalter.« Dreiundzwanzig Uhr liegt in diesem Zeitraum. Man braucht ein Medikament, keinen Arzt — deshalb nicht k.",
          en: "'From eight in the evening until eight in the morning, ring at the night hatch.' Eleven at night falls inside that. A medicine is needed, not a doctor — hence not k.",
          it: "»Dalle venti alle otto del mattino suonate allo sportello notturno.« Le ventitré rientrano.",
          bn: "»রাত আটটা থেকে সকাল আটটা পর্যন্ত নাইট কাউন্টারে বেল দিন।« রাত এগারোটা এর মধ্যেই পড়ে।",
        },
      },
      {
        nr: 16,
        text: "Sie sind seit zwei Monaten in Deutschland und wissen nicht, bei welcher Krankenkasse Sie sich anmelden sollen. Ihr Deutsch ist noch nicht gut.",
        answerKey: "h",
        why: {
          de: "»Sie sind neu in Deutschland und wissen nicht, welche Kasse zu Ihnen passt? … auch auf Englisch.« Die Sprache ist der zweite Treffer, und genau deshalb passt keine andere Anzeige.",
          en: "'New to Germany and unsure which insurer suits you? … also in English.' The language is the second match, and that is why no other advert fits.",
          it: "»Nuovo in Germania e non sa quale cassa scegliere? … anche in inglese.«",
          bn: "»জার্মানিতে নতুন, জানেন না কোন বিমা আপনার জন্য? … ইংরেজিতেও।« ভাষাটাই দ্বিতীয় মিল।",
        },
      },
      {
        nr: 17,
        text: "Sie haben Probleme mit den Knien und suchen eine Bewegungsgruppe am Wochenende.",
        answerKey: "l",
        why: {
          de: "»Gruppen für Menschen mit Gelenkproblemen, samstags vormittags« — Gelenke und Wochenende. Der Rückenkurs e ist dienstags und für den Rücken, also doppelt falsch.",
          en: "'Groups for people with joint problems, Saturday mornings' — joints and weekend. Course e is Tuesdays and for the back: wrong twice over.",
          it: "»Gruppi per problemi articolari, il sabato mattina«. Il corso e è di martedì e per la schiena.",
          bn: "»গাঁটের সমস্যায় ভোগা মানুষের দল, শনিবার সকালে« — গাঁট ও সপ্তাহান্ত। কোর্স e মঙ্গলবার এবং পিঠের জন্য।",
        },
      },
      {
        nr: 18,
        text: "Sie sehen in letzter Zeit schlecht und möchten eine neue Brille.",
        answerKey: "i",
        why: {
          de: "»Sehtest und Brillenrezept«. Die lange Wartezeit ändert nichts daran, dass dies die einzige passende Anzeige ist — die Frage ist immer, was passt, nicht was bequem ist.",
          en: "'Eye test and glasses prescription.' The long wait does not change that this is the only fitting advert — the question is always what fits, not what is convenient.",
          it: "»Test della vista e ricetta per occhiali.« La lunga attesa non cambia che sia l'unico annuncio adatto.",
          bn: "»দৃষ্টি পরীক্ষা ও চশমার প্রেসক্রিপশন«। দীর্ঘ অপেক্ষা থাকলেও এটিই একমাত্র মানানসই বিজ্ঞাপন।",
        },
      },
      {
        nr: 19,
        text: "Ihre Ärztin hat gesagt, Sie sollten sich gesünder ernähren, und Sie möchten mit jemandem persönlich darüber sprechen.",
        answerKey: "j",
        why: {
          de: "»Einzelberatung für Menschen, die … sich gesünder ernähren möchten«. »Einzelberatung« entspricht dem »persönlich darüber sprechen« der Situation.",
          en: "'One-to-one advice for people who want to eat more healthily.' 'Einzelberatung' matches the 'speak to someone in person' of the situation.",
          it: "»Consulenza individuale per chi vuole mangiare in modo più sano.«",
          bn: "»যারা স্বাস্থ্যকর খেতে চান তাদের জন্য একক পরামর্শ«। »Einzelberatung« পরিস্থিতির »সরাসরি কথা বলা«র সঙ্গে মেলে।",
        },
      },
      {
        nr: 20,
        text: "Es ist Sonntag. Ihre achtjährige Tochter hat starke Zahnschmerzen und Sie brauchen sofort Hilfe.",
        answerKey: "x",
        why: {
          de: "Keine Anzeige passt — und zwar knapp. b ist für Kinder, aber »am Wochenende geschlossen«. c hat sonntags geöffnet, schickt Kinder aber ausdrücklich in die Woche zum Kinderzahnarzt. Jede Anzeige erfüllt die Hälfte der Bedingungen, und die halbe Erfüllung ist in Teil 3 immer falsch. Prüfe bei jeder Situation ALLE Bedingungen — hier: Kind, Sonntag, Zähne.",
          en: "Nothing fits — narrowly. b is for children but 'closed at weekends'. c is open on Sunday but explicitly sends children to the children's dentist on weekdays. Each advert meets half the conditions, and half is always wrong in Teil 3. Check EVERY condition — here: child, Sunday, teeth.",
          it: "Nessun annuncio va bene, per poco. b è per bambini ma chiuso nel weekend; c è aperto la domenica ma manda i bambini in settimana. Metà delle condizioni non basta mai.",
          bn: "কোনো বিজ্ঞাপনই মেলে না — অল্পের জন্য। b শিশুদের জন্য কিন্তু »সপ্তাহান্তে বন্ধ«। c রবিবার খোলা কিন্তু শিশুদের সপ্তাহের দিনে পাঠায়। প্রতিটি বিজ্ঞাপন অর্ধেক শর্ত মেটায় — Teil 3-এ অর্ধেক মানেই ভুল।",
        },
      },
    ],
  },

  /* ================================================================== */
  glossary: [
    g("warteschleife", "die Warteschleife", "die", "phone queue, being on hold", "attesa telefonica", "ফোনে অপেক্ষার সারি"),
    g("bestätigung", "die Bestätigung", "die", "confirmation", "conferma", "নিশ্চিতকরণ"),
    g("erinnerung", "die Erinnerung", "die", "reminder", "promemoria", "স্মারক / মনে করিয়ে দেওয়া"),
    g("umstellung", "die Umstellung", "die", "change, switch-over", "cambiamento", "পরিবর্তন"),
    g("krankenkasse", "die Krankenkasse", "die", "health insurance fund", "cassa malattia", "স্বাস্থ্যবিমা তহবিল"),
    g("untersuchung", "die Untersuchung", "die", "examination, check-up", "visita, esame", "পরীক্ষা"),
    g("hausarzt", "der Hausarzt", "der", "GP, family doctor", "medico di base", "পারিবারিক ডাক্তার"),
    g("rezept", "das Rezept", "das", "prescription (also: recipe)", "ricetta", "প্রেসক্রিপশন"),
    g("abgedeckt", "abdecken", undefined, "covered (by insurance)", "coperto", "আওতাভুক্ত"),
    g("füllung", "die Füllung", "die", "filling (tooth)", "otturazione", "দাঁতের ফিলিং"),
    g("dazuzahlen", "dazuzahlen", undefined, "to pay extra on top", "pagare in più", "অতিরিক্ত দিতে হয়"),
    g("gesetzlichen", "gesetzlich", undefined, "statutory, public (insurance)", "obbligatorio, pubblico", "সরকারি / আইনি"),
    g("behandlung", "die Behandlung", "die", "treatment", "trattamento", "চিকিৎসা"),
    g("beschäftigte", "der/die Beschäftigte", undefined, "employees", "dipendenti", "কর্মচারীরা"),
    g("fieber", "das Fieber", "das", "fever", "febbre", "জ্বর"),
    g("husten", "husten", undefined, "to cough", "tossire", "কাশি"),
    g("steckt", "anstecken", undefined, "infects (someone)", "contagia", "সংক্রমিত করে"),
    g("betriebsarzt", "der Betriebsarzt", "der", "company doctor", "medico aziendale", "কোম্পানির ডাক্তার"),
    g("krankschreiben", "krankschreiben", undefined, "to sign someone off sick", "mettere in malattia", "অসুস্থ ছুটির সনদ দেওয়া"),
    g("schichtdienst", "der Schichtdienst", "der", "shift work", "lavoro a turni", "শিফট ডিউটি"),
    g("saisonal", "saisonal", undefined, "seasonal", "stagionale", "মৌসুমি"),
    g("tiefkühlgemüse", "das Tiefkühlgemüse", "das", "frozen vegetables", "verdure surgelate", "হিমায়িত সবজি"),
    g("reste", "der Rest", "der", "leftovers", "avanzi", "উদ্বৃত্ত খাবার"),
    g("sonderangebot", "das Sonderangebot", "das", "special offer", "offerta speciale", "বিশেষ ছাড়"),
    g("facharzt", "der Facharzt", "der", "specialist doctor", "medico specialista", "বিশেষজ্ঞ ডাক্তার"),
    g("impfungen", "die Impfung", "die", "vaccinations", "vaccinazioni", "টিকা"),
    g("blutwerte", "die Blutwerte", "die", "blood test results", "valori del sangue", "রক্ত পরীক্ষার ফল"),
    g("versichertenkarte", "die Versichertenkarte", "die", "health insurance card", "tessera sanitaria", "বিমা কার্ড"),
    g("abgelehnt", "ablehnen", undefined, "refused, turned down", "rifiutato", "প্রত্যাখ্যাত"),
    g("rechnung", "die Rechnung", "die", "invoice, bill", "fattura", "বিল"),
    g("nachgereicht", "nachreichen", undefined, "handed in later", "consegnato in seguito", "পরে জমা দেওয়া"),
    g("unterschätzen", "unterschätzen", undefined, "to underestimate", "sottovalutare", "কম গুরুত্ব দেওয়া"),
    g("zettel", "der Zettel", "der", "slip of paper, note", "foglietto", "কাগজের টুকরা"),
    g("banal", "banal", undefined, "trivial, obvious", "banale", "তুচ্ছ / সাধারণ"),
    g("begleitperson", "die Begleitperson", "die", "someone who comes with you", "accompagnatore", "সঙ্গী"),
    g("dolmetscher", "der Dolmetscher", "der", "interpreter", "interprete", "দোভাষী"),
    g("absagen", "absagen", undefined, "to cancel", "disdire", "বাতিল করা"),
    g("gebühr", "die Gebühr", "die", "fee, charge", "tassa, spesa", "ফি"),
    g("sprechstunde", "die Sprechstunde", "die", "consultation hours", "orario di visita", "রোগী দেখার সময়"),
    g("notdienst", "der Notdienst", "der", "emergency service", "servizio di emergenza", "জরুরি সেবা"),
    g("nachtschalter", "der Nachtschalter", "der", "night counter at a pharmacy", "sportello notturno", "রাতের কাউন্টার"),
    g("versicherte", "der/die Versicherte", undefined, "insured people, members", "assicurati", "বিমাগ্রহীতা"),
    g("hausbesuche", "der Hausbesuch", "der", "home visits", "visite a domicilio", "বাড়িতে এসে দেখা"),
    g("absprache", "die Absprache", "die", "arrangement, agreement", "accordo", "পূর্ব আলোচনা"),
    g("vorsorgeuntersuchungen", "die Vorsorgeuntersuchung", "die", "preventive check-ups", "visite di prevenzione", "প্রতিরোধমূলক পরীক্ষা"),
    g("gelenkproblemen", "das Gelenkproblem", "das", "joint problems", "problemi articolari", "গাঁটের সমস্যা"),
    g("hallenbad", "das Hallenbad", "das", "indoor swimming pool", "piscina coperta", "ইনডোর সুইমিং পুল"),
    g("ernährungsberatung", "die Ernährungsberatung", "die", "dietary advice service", "alimentazione", "পুষ্টি / খাদ্যাভ্যাস"),
    g("abnehmen", "abnehmen", undefined, "to lose weight", "dimagrire", "ওজন কমানো"),
    g("sehtest", "der Sehtest", "der", "eye test", "test della vista", "দৃষ্টি পরীক্ষা"),
  ],
};
