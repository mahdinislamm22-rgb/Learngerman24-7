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
 * LES-06 — Reisen, Bahn und Verkehr.
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Travel texts are dense with times, prices and conditions, so the traps
 * here are mostly about holding two facts apart:
 *   · Teil 1 text 2 and heading j) both concern cancelled trains, but the
 *     text is about what you get BACK, not about the cancellations.
 *   · Teil 2 question 8 turns on "ab" versus "bis" in a price — "ab
 *     neunzehn Euro" is the cheapest fare, not the only one.
 *   · Teil 3 situation 16 answers x: the traveller needs a bike on a long
 *     distance train, and the only bike offer is for regional trains.
 */
export const les06: LesenSet = {
  code: "LES-06",

  title: {
    de: "Reisen, Bahn und Verkehr",
    en: "Travel, trains and transport",
    it: "Viaggi, treni e trasporti",
    bn: "ভ্রমণ, ট্রেন ও যাতায়াত",
  },

  intro: {
    de: "Drei Teile wie in der Prüfung. In diesem Thema stehen viele Zahlen — lies langsam und halte fest, wozu jede Zahl gehört.",
    en: "Three parts, as in the exam. This topic is full of numbers — read slowly and note what each number belongs to.",
    it: "Tre parti, come nell'esame. Questo tema è pieno di numeri: leggi con calma e annota a cosa si riferisce ciascuno.",
    bn: "পরীক্ষার মতোই তিনটি অংশ। এই বিষয়ে অনেক সংখ্যা থাকে — ধীরে পড়ুন এবং কোন সংখ্যা কীসের, তা মনে রাখুন।",
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
      { key: "a", text: "Mit dem Rad zur Arbeit" },
      { key: "b", text: "Geld zurück bei Verspätung" },
      { key: "c", text: "Neue Fahrpläne ab Dezember" },
      { key: "d", text: "Ein Ticket für das ganze Land" },
      { key: "e", text: "Wenn der Koffer nicht ankommt" },
      { key: "f", text: "Parken wird teurer" },
      { key: "g", text: "Warum so viele Züge ausfallen" },
      { key: "h", text: "Ohne Auto aufs Land" },
      { key: "i", text: "Nachtzüge kommen zurück" },
      { key: "j", text: "Reisen mit Kindern" },
    ],

    texts: [
      {
        nr: 1,
        text: "Seit einigen Jahren gibt es wieder mehr Nachtzüge in Europa. Wer abends in Köln einsteigt, kann am nächsten Morgen in Wien oder Zürich frühstücken. Die Betreiber sagen, viele Reisende wollten das Flugzeug vermeiden und hätten trotzdem keine Lust, einen ganzen Tag im Zug zu sitzen. Neue Wagen mit kleinen Einzelkabinen sind oft Wochen im Voraus ausgebucht.",
        answerKey: "i",
        why: {
          de: "»Seit einigen Jahren gibt es wieder mehr Nachtzüge« — »wieder« heißt: sie waren weg und sind zurück. Genau das sagt die Überschrift.",
          en: "'For some years there have been more night trains again' — 'wieder' means they were gone and are back. That is exactly what the heading says.",
          it: "»Da qualche anno ci sono di nuovo più treni notturni«: »wieder« significa che erano spariti e sono tornati.",
          bn: "»কয়েক বছর ধরে আবার বেশি নাইট ট্রেন চলছে« — »wieder« মানে সেগুলো চলে গিয়েছিল, ফিরে এসেছে।",
        },
      },
      {
        nr: 2,
        text: "Wenn ein Zug mehr als eine Stunde später ankommt, hat man Anspruch auf ein Viertel des Fahrpreises. Ab zwei Stunden ist es die Hälfte. Das gilt auch für Sparpreise und sogar dann, wenn man gar nicht mehr gefahren ist. Den Antrag stellt man online oder auf einem Formular im Zug; das Geld kommt als Überweisung oder als Gutschein, wobei man selbst entscheiden darf.",
        answerKey: "b",
        why: {
          de: "Der ganze Text erklärt, wie viel Geld man bei Verspätung zurückbekommt. Überschrift g) wäre falsch: warum Züge ausfallen, steht nirgends — es geht nur um die Folge für den Fahrgast.",
          en: "The whole text explains how much money you get back when a train is late. Heading g) would be wrong: why trains are cancelled is never said — only what it means for the passenger.",
          it: "Tutto il testo spiega quanto si riottiene in caso di ritardo. Il titolo g) sarebbe sbagliato.",
          bn: "পুরো লেখাটি ব্যাখ্যা করে দেরি হলে কত টাকা ফেরত পাওয়া যায়। শিরোনাম g) ভুল হতো: ট্রেন কেন বাতিল হয় তা কোথাও নেই।",
        },
      },
      {
        nr: 3,
        text: "Wer in einem kleinen Dorf wohnt und keinen Führerschein hat, wartet oft stundenlang auf den nächsten Bus. In mehreren Landkreisen fahren deshalb jetzt Kleinbusse auf Bestellung: Man ruft an oder nutzt eine App, und der Bus kommt innerhalb einer halben Stunde zur nächsten Haltestelle. Der Preis liegt kaum über dem eines normalen Tickets.",
        answerKey: "h",
        why: {
          de: "»in einem kleinen Dorf«, »keinen Führerschein« — es geht darum, ohne eigenes Auto auf dem Land mobil zu sein. Das ist Überschrift h).",
          en: "'in a small village', 'no driving licence' — the point is getting around the countryside without a car of your own. That is heading h).",
          it: "»in un piccolo paese«, »senza patente«: muoversi in campagna senza auto propria.",
          bn: "»ছোট গ্রামে«, »ড্রাইভিং লাইসেন্স নেই« — গ্রামে নিজের গাড়ি ছাড়া চলাচলের কথা। এটাই শিরোনাম h)।",
        },
      },
      {
        nr: 4,
        text: "Etwa jeder hundertste Koffer kommt nicht mit demselben Flugzeug an wie sein Besitzer. Meistens taucht er nach ein bis zwei Tagen wieder auf. Wichtig ist, den Verlust noch am Flughafen zu melden und den Beleg aufzuheben. Wer das versäumt, bekommt später oft nichts ersetzt. Fachleute raten außerdem, Medikamente und einen Satz Kleidung ins Handgepäck zu legen.",
        answerKey: "e",
        why: {
          de: "»kommt nicht mit demselben Flugzeug an wie sein Besitzer« — der Koffer kommt nicht (mit) an. Die Überschrift benennt genau diese Situation.",
          en: "'does not arrive on the same plane as its owner' — the case does not arrive. The heading names exactly that situation.",
          it: "»non arriva con lo stesso aereo del proprietario«: la valigia non arriva.",
          bn: "»মালিকের সঙ্গে একই বিমানে আসে না« — স্যুটকেসটি পৌঁছায় না। শিরোনামটি ঠিক এই অবস্থাই বলে।",
        },
      },
      {
        nr: 5,
        text: "In der Innenstadt kostet eine Stunde ab Januar zwei Euro statt bisher einem Euro fünfzig. Für Anwohner mit Ausweis bleibt alles wie bisher. Die Stadt begründet den Schritt damit, dass die Plätze schneller frei werden sollen. Wer länger bleiben möchte, kann das Parkhaus am Bahnhof nutzen, das weiterhin einen Tagespreis anbietet.",
        answerKey: "f",
        why: {
          de: "»kostet eine Stunde ab Januar zwei Euro statt bisher einem Euro fünfzig« — der Preis steigt. Vorsicht bei Überschrift c): Von Fahrplänen ist nicht die Rede, nur von Parkgebühren.",
          en: "'an hour will cost two euros from January instead of one fifty' — the price is going up. Careful with heading c): timetables are never mentioned, only parking charges.",
          it: "»un'ora costerà due euro invece di uno e cinquanta«: il prezzo aumenta.",
          bn: "»জানুয়ারি থেকে এক ঘণ্টা দুই ইউরো, আগের দেড় ইউরোর বদলে« — দাম বাড়ছে। শিরোনাম c) নিয়ে সতর্ক: সময়সূচির কথা নেই।",
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

    heading: "Günstig Bahn fahren – was man vorher wissen sollte",

    text: `Eine Bahnfahrt kann in Deutschland fünfzehn Euro kosten oder hundertfünfzig. Der Unterschied liegt fast nie an der Strecke, sondern daran, wann und wie man bucht.

Der normale Preis, der Flexpreis, ändert sich nie. Man kauft ihn noch am Bahnsteig, fährt mit jedem beliebigen Zug und darf die Fahrkarte bis zum letzten Tag zurückgeben. Wer ihn zahlt, zahlt für Freiheit.

Daneben gibt es den Sparpreis, oft ab neunzehn Euro. Wichtig ist dieses kleine Wort „ab": Neunzehn Euro ist der günstigste Fall, nicht der Normalfall. Je näher der Reisetag rückt, desto teurer wird auch der Sparpreis, und irgendwann liegt er über dem Flexpreis. Der Haken ist außerdem die Bindung: Ein Sparpreis gilt nur für den gebuchten Zug. Verpasst man ihn, ist die Fahrkarte wertlos — es sei denn, der Grund war eine Verspätung der Bahn selbst.

Viele unterschätzen die BahnCard. Die günstigste Variante kostet im Jahr etwa so viel wie zwei längere Fahrten und halbiert danach nicht den Sparpreis, sondern den Flexpreis. Sie lohnt sich also vor allem für Menschen, die spontan fahren, und weniger für die, die ohnehin drei Monate im Voraus planen. Ein zweiter Punkt wird oft vergessen: Die Karte verlängert sich automatisch, wenn man nicht rechtzeitig kündigt.

Und schließlich das Deutschlandticket: ein Monatsabo für alle Busse, Straßenbahnen und Regionalzüge im ganzen Land. Im Fernverkehr gilt es nicht. Für eine Fahrt von Siegen nach Köln reicht es also — sie dauert dann allerdings deutlich länger als mit dem ICE.`,

    questions: [
      {
        nr: 6,
        question: "Wovon hängt der Preis einer Bahnfahrt laut Text vor allem ab?",
        options: [
          "Von der Länge der Strecke.",
          "Vom Zeitpunkt und der Art der Buchung.",
          "Von der Tageszeit.",
        ],
        answerIndex: 1,
        why: {
          de: "»Der Unterschied liegt fast nie an der Strecke, sondern daran, wann und wie man bucht.« Der Text nennt die falsche Antwort a) ausdrücklich und schließt sie aus.",
          en: "'The difference almost never comes from the route, but from when and how you book.' The text names wrong answer a) explicitly and rules it out.",
          it: "»La differenza non dipende quasi mai dal percorso, ma da quando e come si prenota.«",
          bn: "»পার্থক্যটা প্রায় কখনোই দূরত্বের নয়, বরং কখন ও কীভাবে বুক করা হয় তার।« লেখাটি ভুল উত্তর a)-কে স্পষ্টভাবে বাদ দেয়।",
        },
      },
      {
        nr: 7,
        question: "Was ist der Vorteil des Flexpreises?",
        options: [
          "Er ist immer billiger als der Sparpreis.",
          "Er gilt auch im Nahverkehr.",
          "Man ist nicht an einen bestimmten Zug gebunden.",
        ],
        answerIndex: 2,
        why: {
          de: "»fährt mit jedem beliebigen Zug und darf die Fahrkarte bis zum letzten Tag zurückgeben«. Der Text fasst es selbst zusammen: »Wer ihn zahlt, zahlt für Freiheit.«",
          en: "'you travel on any train you like and may return the ticket up to the last day'. The text sums it up itself: 'whoever pays it, pays for freedom'.",
          it: "»si viaggia su qualsiasi treno e si può restituire il biglietto fino all'ultimo giorno«.",
          bn: "»যেকোনো ট্রেনে চড়া যায় এবং শেষ দিন পর্যন্ত টিকিট ফেরত দেওয়া যায়«। লেখাটি নিজেই বলে: »যিনি এটা দেন, তিনি স্বাধীনতার জন্য দেন।«",
        },
      },
      {
        nr: 8,
        question: "Was bedeutet „Sparpreis ab neunzehn Euro\"?",
        options: [
          "Neunzehn Euro ist der niedrigste mögliche Preis.",
          "Jede Fahrt kostet neunzehn Euro.",
          "Der Preis steigt nie über neunzehn Euro.",
        ],
        answerIndex: 0,
        why: {
          de: "»Neunzehn Euro ist der günstigste Fall, nicht der Normalfall.« Das Wörtchen »ab« nennt immer eine Untergrenze. In Anzeigen und Fahrplänen ist es eines der wichtigsten Wörter überhaupt — es verspricht viel weniger, als die meisten lesen.",
          en: "'Nineteen euros is the cheapest case, not the normal one.' The little word 'ab' always names a lower limit. In adverts and timetables it is one of the most important words there is — it promises far less than most people read into it.",
          it: "»Diciannove euro è il caso più economico, non la norma.« La parolina »ab« indica sempre un minimo.",
          bn: "»উনিশ ইউরো সবচেয়ে সস্তা ক্ষেত্র, স্বাভাবিক নয়।« ছোট্ট »ab« সবসময় সর্বনিম্ন সীমা বোঝায় — বিজ্ঞাপনে ও সময়সূচিতে এটি সবচেয়ে গুরুত্বপূর্ণ শব্দগুলোর একটি।",
        },
      },
      {
        nr: 9,
        question: "Für wen lohnt sich die BahnCard nach dem Text besonders?",
        options: [
          "Für Menschen, die lange im Voraus planen.",
          "Für Menschen, die spontan fahren.",
          "Für Menschen, die nur im Nahverkehr fahren.",
        ],
        answerIndex: 1,
        why: {
          de: "»Sie lohnt sich also vor allem für Menschen, die spontan fahren, und weniger für die, die ohnehin drei Monate im Voraus planen.« Beide Gruppen stehen im Satz — die Aussage muss die richtige nehmen.",
          en: "'So it pays off above all for people who travel spontaneously, and less for those who plan three months ahead anyway.' Both groups are in the sentence — the answer has to take the right one.",
          it: "»Conviene soprattutto a chi viaggia all'improvviso, meno a chi pianifica con tre mesi di anticipo.«",
          bn: "»তাই এটি বিশেষত তাঁদের জন্য লাভজনক যাঁরা হঠাৎ ভ্রমণ করেন, আর কম তাঁদের জন্য যাঁরা তিন মাস আগেই পরিকল্পনা করেন।« দুটি দলই বাক্যে আছে।",
        },
      },
      {
        nr: 10,
        question: "Was gilt für das Deutschlandticket?",
        options: [
          "Man kann damit auch ICE fahren.",
          "Es gilt nur in einer Stadt.",
          "Im Fernverkehr gilt es nicht.",
        ],
        answerIndex: 2,
        why: {
          de: "»Im Fernverkehr gilt es nicht.« Der ICE ist Fernverkehr — deshalb ist a) falsch, obwohl der ICE im letzten Satz vorkommt. Und b) widerspricht »im ganzen Land«.",
          en: "'It is not valid on long-distance services.' The ICE is long-distance — so a) is wrong, even though the ICE appears in the last sentence. And b) contradicts 'across the whole country'.",
          it: "»Non vale sull'alta velocità.« L'ICE è lunga percorrenza, quindi la a) è sbagliata.",
          bn: "»দূরপাল্লায় এটি চলে না।« ICE দূরপাল্লার ট্রেন — তাই a) ভুল, যদিও শেষ বাক্যে ICE আছে। আর b) »পুরো দেশে«-র বিপরীত।",
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
        title: "Mitfahrzentrale Siegen",
        text: "Freie Plätze in Privatautos, meist freitags und sonntags. Kosten teilen sich Fahrer und Mitfahrer. Anmeldung nur über die App, Barzahlung im Auto.",
      },
      {
        key: "b",
        title: "Fahrradmitnahme im Nahverkehr",
        text: "In allen Regionalzügen und S-Bahnen können Sie Ihr Fahrrad mitnehmen. Fahrradkarte drei Euro fünfzig, montags bis freitags nicht vor neun Uhr.",
      },
      {
        key: "c",
        title: "Fundbüro am Hauptbahnhof",
        text: "Etwas im Zug vergessen? Melden Sie den Verlust online. Gefundene Gegenstände werden vier Wochen aufbewahrt, danach versteigert.",
      },
      {
        key: "d",
        title: "Nachtbus zum Flughafen",
        text: "Jede Nacht um ein Uhr und um drei Uhr ab Busbahnhof. Fahrtzeit etwa neunzig Minuten. Tickets nur vorab online, keine Barzahlung im Bus.",
      },
      {
        key: "e",
        title: "Entschädigung bei Verspätung",
        text: "Ihr Zug hatte mehr als sechzig Minuten Verspätung? Füllen Sie das Formular aus, wir überweisen Ihnen einen Teil des Fahrpreises zurück.",
      },
      {
        key: "f",
        title: "Rufbus im Kreis Siegen-Wittgenstein",
        text: "Kein Bus in der Nähe? Rufen Sie eine Stunde vorher an, wir holen Sie an der Haltestelle ab. Täglich von sechs bis dreiundzwanzig Uhr.",
      },
      {
        key: "g",
        title: "Deutschlandticket",
        text: "Monatlich kündbar, gültig in allen Bussen, Straßenbahnen und Regionalzügen bundesweit. Nicht gültig in ICE, IC und EC.",
      },
      {
        key: "h",
        title: "Autovermietung Bahnhof",
        text: "Kleinwagen ab neununddreißig Euro pro Tag. Mindestalter einundzwanzig Jahre, Führerschein seit mindestens einem Jahr. Abholung rund um die Uhr.",
      },
      {
        key: "i",
        title: "Gepäckaufbewahrung",
        text: "Schließfächer am Gleis eins, fünf Euro für vierundzwanzig Stunden. Große Fächer für Koffer und Rucksäcke vorhanden. Nur Kartenzahlung.",
      },
      {
        key: "j",
        title: "Schienenersatzverkehr Bauarbeiten",
        text: "Zwischen Siegen und Betzdorf fahren vom achten bis zum zwanzigsten Juli Busse statt Züge. Bitte planen Sie dreißig Minuten mehr ein.",
      },
      {
        key: "k",
        title: "Reisebüro Weltweit",
        text: "Wir beraten Sie persönlich zu Flügen, Hotels und Rundreisen. Termine nach Vereinbarung, auch samstags. Beratung kostenlos bei Buchung.",
      },
      {
        key: "l",
        title: "Parkhaus am Bahnhof",
        text: "Tagespreis sechs Euro, Monatskarte fünfundsechzig Euro. Überdacht und videoüberwacht, Einfahrt Tag und Nacht möglich.",
      },
    ],

    situations: [
      {
        nr: 11,
        text: "Ihr Zug nach Köln kam neunzig Minuten zu spät an und Sie möchten einen Teil des Geldes zurück.",
        answerKey: "e",
        why: {
          de: "»mehr als sechzig Minuten Verspätung« — neunzig ist mehr als sechzig, also erfüllt die Bedingung. Die Anzeige nennt sogar genau das, was man will: einen Teil des Fahrpreises zurück.",
          en: "'more than sixty minutes late' — ninety is more than sixty, so the condition is met. The advert names exactly what is wanted: part of the fare back.",
          it: "»più di sessanta minuti di ritardo«: novanta è più di sessanta.",
          bn: "»ষাট মিনিটের বেশি দেরি« — নব্বই ষাটের বেশি, তাই শর্ত মেলে।",
        },
      },
      {
        nr: 12,
        text: "Sie müssen um halb vier morgens am Flughafen sein und haben kein Auto.",
        answerKey: "d",
        why: {
          de: "»Jede Nacht um ein Uhr und um drei Uhr« — der Bus um ein Uhr passt, denn die Fahrt dauert neunzig Minuten. Rechne kurz nach: ein Uhr plus anderthalb Stunden ist halb drei, also früh genug.",
          en: "'Every night at one and at three' — the one o'clock bus works, since the trip takes ninety minutes. Do the sum: one plus an hour and a half is half past two, so early enough.",
          it: "»Ogni notte all'una e alle tre«: l'autobus dell'una va bene, il viaggio dura novanta minuti.",
          bn: "»প্রতি রাতে একটা ও তিনটায়« — একটার বাসটি মানানসই, কারণ যাত্রা নব্বই মিনিট। হিসাব করুন: একটা + দেড় ঘণ্টা = আড়াইটা।",
        },
      },
      {
        nr: 13,
        text: "Sie haben Ihren Schal im Regionalzug liegen lassen.",
        answerKey: "c",
        why: {
          de: "»Etwas im Zug vergessen? Melden Sie den Verlust online.« Die Anzeige beschreibt genau diese Situation.",
          en: "'Left something on the train? Report the loss online.' The advert describes exactly this situation.",
          it: "»Dimenticato qualcosa sul treno? Segnala la perdita online.«",
          bn: "»ট্রেনে কিছু ফেলে এসেছেন? অনলাইনে জানান।« বিজ্ঞাপনটি ঠিক এই অবস্থাই বলে।",
        },
      },
      {
        nr: 14,
        text: "Sie fahren einen Monat lang jeden Tag mit dem Bus zur Arbeit und wollen nicht jedes Mal ein Ticket kaufen.",
        answerKey: "g",
        why: {
          de: "»Monatlich kündbar, gültig in allen Bussen« — ein Monatsabo für Busse. Anzeige l ist auch eine Monatskarte, aber fürs Parken, nicht fürs Fahren.",
          en: "'Cancellable monthly, valid on all buses' — a monthly pass for buses. Advert l is also a monthly card, but for parking, not travelling.",
          it: "»Disdicibile mensilmente, valido su tutti gli autobus.« L'annuncio l è un abbonamento per il parcheggio.",
          bn: "»মাসিক বাতিলযোগ্য, সব বাসে বৈধ« — বাসের মাসিক পাস। বিজ্ঞাপন l-ও মাসিক কার্ড, কিন্তু পার্কিংয়ের জন্য।",
        },
      },
      {
        nr: 15,
        text: "Sie kommen mit dem Zug an, haben bis zum Abend Zeit und möchten Ihren großen Rucksack nicht den ganzen Tag tragen.",
        answerKey: "i",
        why: {
          de: "»Große Fächer für Koffer und Rucksäcke vorhanden.« Die Größe ist hier entscheidend — ein kleines Schließfach wäre nur die halbe Lösung.",
          en: "'Large lockers for suitcases and rucksacks available.' Size is what decides here — a small locker would only be half the answer.",
          it: "»Armadietti grandi per valigie e zaini.« La dimensione è decisiva.",
          bn: "»স্যুটকেস ও ব্যাকপ্যাকের জন্য বড় লকার আছে।« আকারটাই এখানে নির্ণায়ক।",
        },
      },
      {
        nr: 16,
        text: "Sie möchten mit dem ICE nach Hamburg fahren und Ihr Fahrrad mitnehmen.",
        answerKey: "x",
        why: {
          de: "Anzeige b ist das einzige Fahrradangebot — aber »In allen Regionalzügen und S-Bahnen«, und der ICE ist keins von beiden. Anzeige g nennt den ICE sogar ausdrücklich als Ausnahme. Beide Anzeigen berühren dein Problem, keine löst es. Prüfe bei Verkehrsmitteln immer, ob Nah- oder Fernverkehr gemeint ist — das ist in diesem Thema die häufigste Falle.",
          en: "Advert b is the only bike offer — but 'on all regional and suburban trains', and the ICE is neither. Advert g even names the ICE as an exception. Both adverts touch your problem; neither solves it. With transport always check whether local or long-distance services are meant — that is the commonest trap in this topic.",
          it: "L'annuncio b è l'unica offerta per le bici, ma vale »su tutti i treni regionali«, e l'ICE non lo è. L'annuncio g cita l'ICE proprio come eccezione.",
          bn: "বিজ্ঞাপন b-ই একমাত্র সাইকেল-সুবিধা — কিন্তু »সব আঞ্চলিক ও S-Bahn ট্রেনে«, আর ICE এর কোনোটিই নয়। বিজ্ঞাপন g তো ICE-কে ব্যতিক্রম হিসেবেই বলে। দুটোই সমস্যাটি ছোঁয়, কোনোটিই সমাধান করে না।",
        },
      },
      {
        nr: 17,
        text: "Sie wohnen in einem Dorf ohne Busverbindung am Abend und müssen um zwanzig Uhr in die Stadt.",
        answerKey: "f",
        why: {
          de: "»Rufen Sie eine Stunde vorher an … Täglich von sechs bis dreiundzwanzig Uhr.« Zwanzig Uhr liegt in diesem Zeitraum — prüfe solche Zeitfenster immer gegen die Uhrzeit in der Situation.",
          en: "'Ring an hour beforehand … daily from six to eleven at night.' Eight in the evening falls inside that — always check such windows against the time in the situation.",
          it: "»Chiami un'ora prima … tutti i giorni dalle sei alle ventitré.« Le venti rientrano.",
          bn: "»এক ঘণ্টা আগে ফোন করুন … প্রতিদিন ছয়টা থেকে তেইশটা পর্যন্ত।« রাত আটটা এর মধ্যেই পড়ে।",
        },
      },
      {
        nr: 18,
        text: "Sie brauchen am Wochenende ein Auto für zwei Tage. Sie sind dreiundzwanzig und haben den Führerschein seit drei Jahren.",
        answerKey: "h",
        why: {
          de: "»Mindestalter einundzwanzig Jahre, Führerschein seit mindestens einem Jahr« — beide Bedingungen erfüllst du. Bei Anzeigen mit Bedingungen musst du jede einzeln prüfen, nicht nur die erste.",
          en: "'Minimum age twenty-one, licence held for at least a year' — you meet both conditions. With conditional adverts you must check each one separately, not just the first.",
          it: "»Età minima ventuno anni, patente da almeno un anno«: soddisfi entrambe.",
          bn: "»সর্বনিম্ন বয়স একুশ, অন্তত এক বছরের লাইসেন্স« — দুটি শর্তই মেলে। শর্তযুক্ত বিজ্ঞাপনে প্রতিটি শর্ত আলাদা করে দেখতে হয়।",
        },
      },
      {
        nr: 19,
        text: "Sie wollen am zwölften Juli von Siegen nach Betzdorf fahren und fragen sich, warum die Fahrt länger dauert.",
        answerKey: "j",
        why: {
          de: "»vom achten bis zum zwanzigsten Juli Busse statt Züge … Bitte planen Sie dreißig Minuten mehr ein.« Der zwölfte liegt zwischen dem achten und dem zwanzigsten.",
          en: "'from the eighth to the twentieth of July buses instead of trains … please allow thirty minutes extra.' The twelfth falls between the eighth and the twentieth.",
          it: "»dall'otto al venti luglio autobus al posto dei treni«: il dodici è compreso.",
          bn: "»আট থেকে বিশ জুলাই ট্রেনের বদলে বাস … ত্রিশ মিনিট বেশি ধরুন।« বারো তারিখ আট ও বিশের মধ্যেই।",
        },
      },
      {
        nr: 20,
        text: "Sie möchten am Freitag günstig nach Frankfurt und hätten nichts dagegen, mit jemandem im Auto zu fahren.",
        answerKey: "a",
        why: {
          de: "»Freie Plätze in Privatautos, meist freitags und sonntags. Kosten teilen sich Fahrer und Mitfahrer.« Freitag und günstig — beide Bedingungen stehen in der Anzeige.",
          en: "'Free seats in private cars, mostly Fridays and Sundays. Driver and passenger share the cost.' Friday and cheap — both conditions are in the advert.",
          it: "»Posti liberi in auto private, per lo più venerdì e domenica. I costi si dividono.«",
          bn: "»ব্যক্তিগত গাড়িতে খালি আসন, বেশিরভাগ শুক্র ও রবিবার। খরচ ভাগাভাগি।« শুক্রবার ও সাশ্রয়ী — দুটি শর্তই আছে।",
        },
      },
    ],
  },

  /* ================================================================== */
  glossary: [
    g("nachtzüge", "der Nachtzug", "der", "night trains", "treni notturni", "নাইট ট্রেন"),
    g("betreiber", "der Betreiber", "der", "operators (of a service)", "gestori", "পরিচালনাকারী"),
    g("vermeiden", "vermeiden", undefined, "to avoid", "evitare", "এড়ানো"),
    g("ausgebucht", "ausgebucht", undefined, "fully booked", "tutto prenotato", "সব বুকড"),
    g("anspruch", "der Anspruch", "der", "entitlement, claim", "diritto", "অধিকার / দাবি"),
    g("fahrpreises", "der Fahrpreis", "der", "fare", "prezzo del biglietto", "ভাড়া"),
    g("sparpreise", "der Sparpreis", "der", "saver fare (cheap, train-bound)", "tariffa economica", "সাশ্রয়ী ভাড়া"),
    g("überweisung", "die Überweisung", "die", "bank transfer", "bonifico", "ব্যাংক ট্রান্সফার"),
    g("gutschein", "der Gutschein", "der", "voucher", "buono", "ভাউচার"),
    g("landkreisen", "der Landkreis", "der", "rural districts", "circondari", "গ্রামীণ জেলা"),
    g("bestellung", "die Bestellung", "die", "order, request", "prenotazione, ordine", "ফরমায়েশ"),
    g("haltestelle", "die Haltestelle", "die", "stop (bus or tram)", "fermata", "স্টপ"),
    g("verlust", "der Verlust", "der", "loss", "perdita", "হারানো"),
    g("beleg", "der Beleg", "der", "receipt, written proof", "ricevuta", "রসিদ"),
    g("versäumt", "versäumen", undefined, "misses, fails to do", "trascura, perde", "বাদ দেওয়া"),
    g("handgepäck", "das Handgepäck", "das", "hand luggage", "bagaglio a mano", "হাতব্যাগ"),
    g("anwohner", "der Anwohner", "der", "local residents", "residenti", "স্থানীয় বাসিন্দা"),
    g("parkhaus", "das Parkhaus", "das", "multi-storey car park", "parcheggio coperto", "পার্কিং ভবন"),
    g("tagespreis", "der Tagespreis", "der", "daily rate", "tariffa giornaliera", "দৈনিক দাম"),
    g("bahnsteig", "der Bahnsteig", "der", "platform", "binario", "প্ল্যাটফর্ম"),
    g("fahrkarte", "die Fahrkarte", "die", "ticket", "biglietto", "টিকিট"),
    g("bindung", "die Bindung", "die", "tie, restriction to one train", "vincolo", "বাঁধন / শর্ত"),
    g("haken", "der Haken", "der", "catch, drawback", "inghippo", "ফাঁদ / অসুবিধা"),
    g("wertlos", "wertlos", undefined, "worthless", "senza valore", "মূল্যহীন"),
    g("halbiert", "halbieren", undefined, "halves", "dimezza", "অর্ধেক করে"),
    g("spontan", "spontan", undefined, "spontaneously, at short notice", "all'improvviso", "হঠাৎ"),
    g("kündigt", "kündigen", undefined, "cancels (a contract)", "disdice", "বাতিল করে"),
    g("fernverkehr", "der Fernverkehr", "der", "long-distance services", "lunga percorrenza", "দূরপাল্লার পরিবহন"),
    g("mitfahrzentrale", "die Mitfahrzentrale", "die", "car-sharing agency", "agenzia di car pooling", "রাইড-শেয়ার সংস্থা"),
    g("fahrradmitnahme", "die Fahrradmitnahme", "die", "taking a bike on board", "trasporto bici", "সাইকেল সঙ্গে নেওয়া"),
    g("nahverkehr", "der Nahverkehr", "der", "local and regional services", "trasporto locale", "স্থানীয় পরিবহন"),
    g("fundbüro", "das Fundbüro", "das", "lost property office", "ufficio oggetti smarriti", "হারানো জিনিসের দপ্তর"),
    g("versteigert", "versteigern", undefined, "auctioned off", "messo all'asta", "নিলামে বিক্রি"),
    g("entschädigung", "die Entschädigung", "die", "compensation", "risarcimento", "ক্ষতিপূরণ"),
    g("rufbus", "der Rufbus", "der", "bus that comes when you call", "bus a chiamata", "ডাকে আসা বাস"),
    g("schließfächer", "das Schließfach", "das", "lockers", "armadietti", "লকার"),
    g("schienenersatzverkehr", "der Schienenersatzverkehr", "der", "rail replacement service (Schiene + Ersatz + Verkehr = rail + replacement + transport)", "servizio sostitutivo su gomma", "ট্রেনের বদলে বাস সার্ভিস"),
    g("bauarbeiten", "die Bauarbeiten", "die", "engineering works", "lavori", "নির্মাণকাজ"),
    g("rundreisen", "die Rundreise", "die", "round trips, touring holidays", "viaggi itineranti", "ভ্রমণ সফর"),
    g("videoüberwacht", "videoüberwacht", undefined, "monitored by camera", "videosorvegliato", "সিসিটিভি নজরদারিতে"),
  ],
};
