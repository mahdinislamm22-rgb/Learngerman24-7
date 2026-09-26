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
 * LES-07 — Einkaufen und Reklamation.
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Consumer texts run on a handful of words that look interchangeable and
 * are not: umtauschen, reklamieren, zurückgeben, widerrufen. The whole
 * set is built to force those apart, because the exam does the same:
 *   · Teil 2 question 7 rests on the difference between a legal right
 *     (Reklamation, because something is broken) and a shop's goodwill
 *     (Umtausch, because you changed your mind).
 *   · Teil 3 situation 14 wants a repair AND collection; advert a repairs
 *     but makes you carry it and help, advert b does both.
 *   · Teil 1 heading b) promises a manufacturer's guarantee, while text 5
 *     is about the legal right you have regardless of one.
 */
export const les07: LesenSet = {
  code: "LES-07",

  title: {
    de: "Einkaufen, Umtausch und Reklamation",
    en: "Shopping, exchanges and complaints",
    it: "Acquisti, cambi e reclami",
    bn: "কেনাকাটা, বদল ও অভিযোগ",
  },

  intro: {
    de: "Drei Teile wie in der Prüfung. Vier Wörter musst du hier sauber trennen: umtauschen, reklamieren, zurückgeben und widerrufen. Tippe sie an, wenn du sie im Text siehst.",
    en: "Three parts, as in the exam. Four words must be kept apart here: umtauschen, reklamieren, zurückgeben and widerrufen. Tap them when you meet them in the text.",
    it: "Tre parti, come nell'esame. Qui vanno distinte quattro parole: umtauschen, reklamieren, zurückgeben e widerrufen.",
    bn: "পরীক্ষার মতোই তিনটি অংশ। এখানে চারটি শব্দ আলাদা করে বুঝতে হবে: umtauschen, reklamieren, zurückgeben ও widerrufen। লেখায় পেলে চাপ দিন।",
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
      { key: "a", text: "Im Internet bestellt – und es gefällt nicht" },
      { key: "b", text: "Zwei Jahre Garantie vom Hersteller" },
      { key: "c", text: "Wenn der Laden nichts zurücknehmen muss" },
      { key: "d", text: "Weniger Verpackung im Supermarkt" },
      { key: "e", text: "Reparieren statt wegwerfen" },
      { key: "f", text: "Neue Preise ab Montag" },
      { key: "g", text: "Warum Kassenbons wichtig sind" },
      { key: "h", text: "Einkaufen ohne Bargeld" },
      { key: "i", text: "Das Recht, das jeder Kunde hat" },
      { key: "j", text: "Öffnungszeiten am Sonntag" },
    ],

    texts: [
      {
        nr: 1,
        text: "Viele glauben, sie dürften gekaufte Kleidung immer zurückbringen. Das stimmt nicht. Wer im Laden etwas kauft und es zu Hause nicht mehr mag, hat kein Recht darauf, es zurückzugeben. Dass die meisten Geschäfte es trotzdem erlauben, ist Kulanz, keine Pflicht. Anders liegt der Fall nur, wenn die Ware kaputt ist.",
        answerKey: "c",
        why: {
          de: "»hat kein Recht darauf, es zurückzugeben«, »ist Kulanz, keine Pflicht« — der ganze Text erklärt, wann ein Laden NICHTS zurücknehmen muss. Überschrift i) wäre das Gegenteil.",
          en: "'has no right to return it', 'is goodwill, not an obligation' — the whole text explains when a shop does NOT have to take something back. Heading i) would be the opposite.",
          it: "»non ha diritto di restituirlo«, »è cortesia, non un obbligo«: il testo spiega quando un negozio non deve riprendere nulla.",
          bn: "»ফেরত দেওয়ার অধিকার নেই«, »এটা সদিচ্ছা, বাধ্যবাধকতা নয়« — পুরো লেখাটি বলে কখন দোকান কিছুই ফেরত নিতে বাধ্য নয়।",
        },
      },
      {
        nr: 2,
        text: "Wer online bestellt, hat vierzehn Tage Zeit, es sich anders zu überlegen. Man muss keinen Grund nennen: Die Bluse passt nicht, die Farbe gefällt nicht, man hat es sich anders überlegt — alles reicht. Die Frist beginnt an dem Tag, an dem das Paket ankommt, nicht am Tag der Bestellung. Die Rücksendung ist bei vielen Händlern kostenlos, aber nicht bei allen.",
        answerKey: "a",
        why: {
          de: "Es geht ausschließlich um Bestellungen im Internet und um die vierzehn Tage, in denen man zurückschicken darf, ohne einen Grund zu nennen. Das ist Überschrift a).",
          en: "The text is entirely about online orders and the fourteen days in which you may send goods back without giving a reason. That is heading a).",
          it: "Il testo riguarda solo gli ordini online e i quattordici giorni per restituire senza motivo.",
          bn: "পুরো লেখাটি অনলাইন অর্ডার আর সেই চৌদ্দ দিন নিয়ে, যখন কারণ ছাড়াই ফেরত পাঠানো যায়। এটাই শিরোনাম a)।",
        },
      },
      {
        nr: 3,
        text: "Eine kaputte Waschmaschine muss nicht das Ende bedeuten. In immer mehr Städten gibt es Werkstätten, in denen Ehrenamtliche beim Reparieren helfen — vom Toaster bis zum Fahrrad. Man bringt das Gerät mit und arbeitet selbst mit, Werkzeug und Rat sind kostenlos. Etwa die Hälfte der mitgebrachten Sachen funktioniert danach wieder.",
        answerKey: "e",
        why: {
          de: "»beim Reparieren helfen«, »funktioniert danach wieder« — die Idee ist, Dinge zu retten statt sie wegzuwerfen. Genau Überschrift e).",
          en: "'help with repairs', 'works again afterwards' — the idea is saving things instead of throwing them away. Exactly heading e).",
          it: "»aiutano a riparare«, »poi funziona di nuovo«: salvare invece di buttare.",
          bn: "»মেরামতে সাহায্য করেন«, »এরপর আবার চলে« — ফেলে না দিয়ে বাঁচানোর ভাবনা। ঠিক শিরোনাম e)।",
        },
      },
      {
        nr: 4,
        text: "Bald stehen in mehreren Filialen Automaten, an denen man Reis, Nudeln und Müsli in eigene Behälter füllen kann. Der Preis richtet sich nach dem Gewicht. Die Kette will damit jährlich mehrere Tonnen Plastik sparen. Wer keine eigene Dose dabeihat, kann im Laden eine kaufen — die kostet allerdings extra.",
        answerKey: "d",
        why: {
          de: "»in eigene Behälter füllen«, »mehrere Tonnen Plastik sparen« — es geht um weniger Verpackung. Überschrift f) wäre falsch: Preise ändern sich nicht, sie richten sich nur nach dem Gewicht.",
          en: "'fill into your own containers', 'save several tonnes of plastic' — this is about less packaging. Heading f) would be wrong: prices do not change, they simply go by weight.",
          it: "»riempire i propri contenitori«, »risparmiare plastica«: meno imballaggi.",
          bn: "»নিজের পাত্রে ভরা«, »কয়েক টন প্লাস্টিক বাঁচানো« — কম মোড়কের কথা। শিরোনাম f) ভুল হতো।",
        },
      },
      {
        nr: 5,
        text: "Unabhängig davon, was ein Hersteller verspricht, haftet der Verkäufer zwei Jahre lang dafür, dass eine Ware in Ordnung ist. Zeigt sich in den ersten zwölf Monaten ein Fehler, muss der Verkäufer beweisen, dass die Ware beim Kauf noch heil war — nicht der Kunde. Diese Regel gilt in ganz Europa, und niemand kann sie im Kleingedruckten ausschließen.",
        answerKey: "i",
        why: {
          de: "»haftet der Verkäufer zwei Jahre lang«, »niemand kann sie im Kleingedruckten ausschließen« — ein Recht, das jedem Kunden zusteht. Vorsicht bei Überschrift b): Der Text sagt ausdrücklich »unabhängig davon, was ein Hersteller verspricht« — eine Garantie ist etwas Freiwilliges, dieses Recht nicht.",
          en: "'the seller is liable for two years', 'nobody can exclude it' — a right every customer has. Careful with heading b): the text says explicitly 'regardless of what a manufacturer promises' — a guarantee is voluntary, this right is not.",
          it: "»il venditore risponde per due anni«, »nessuno può escluderlo«: un diritto di ogni cliente. Attenzione al titolo b): la garanzia è volontaria, questo diritto no.",
          bn: "»বিক্রেতা দুই বছর দায়ী«, »কেউ এটা বাদ দিতে পারে না« — প্রতিটি ক্রেতার অধিকার। শিরোনাম b) নিয়ে সতর্ক: গ্যারান্টি স্বেচ্ছামূলক, এই অধিকার নয়।",
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

    heading: "Umtausch, Reklamation, Widerruf – drei Wörter, drei verschiedene Rechte",

    text: `Kaum ein Bereich wird so oft missverstanden wie der Umgang mit gekaufter Ware. Das liegt daran, dass drei ganz verschiedene Dinge oft in einen Topf geworfen werden.

Der Umtausch ist das, woran die meisten zuerst denken: Der Pullover hat die falsche Größe, man bringt ihn zurück und holt sich einen anderen. Überraschend für viele: Darauf besteht im Laden kein Anspruch. Kein Gesetz zwingt ein Geschäft, einwandfreie Ware zurückzunehmen, nur weil der Kunde seine Meinung geändert hat. Die meisten Läden tun es freiwillig, und viele schreiben es sogar auf den Kassenbon — aber sie dürfen es auch an Bedingungen knüpfen, etwa an eine Frist von zwei Wochen oder daran, dass das Etikett noch dran ist.

Die Reklamation ist etwas anderes. Hier ist die Ware nicht in Ordnung: Der Reißverschluss klemmt, das Gerät geht nach drei Wochen kaputt. Dann hat der Kunde ein Recht, und zwar zwei Jahre lang. Der Verkäufer darf zuerst versuchen, die Sache zu reparieren oder zu ersetzen. Erst wenn das zweimal misslingt oder zu lange dauert, kann der Kunde das Geld zurückverlangen. Wichtig ist, dass man sich an den Verkäufer wendet, nicht an den Hersteller — auch wenn das Gerät eine Herstellergarantie hat.

Der Widerruf gilt schließlich nur für Verträge, die nicht im Laden geschlossen wurden: online, am Telefon, an der Haustür. Vierzehn Tage lang darf man ohne jede Begründung zurücktreten. Der Gedanke dahinter ist einfach: Wer eine Hose im Laden anprobieren kann, braucht diesen Schutz nicht; wer sie nur auf einem Foto gesehen hat, schon.

Ein praktischer Rat zum Schluss: Der Kassenbon ist kein Beweis für das Recht, aber der einfachste Beweis dafür, wann und wo man gekauft hat. Ein Foto davon genügt, denn das Papier verblasst oft schon nach wenigen Monaten.`,

    questions: [
      {
        nr: 6,
        question: "Warum werden die drei Begriffe oft verwechselt?",
        options: [
          "Weil sie in verschiedenen Ländern anders heißen.",
          "Weil sie oft für dasselbe gehalten werden.",
          "Weil die Gesetze sich häufig ändern.",
        ],
        answerIndex: 1,
        why: {
          de: "»drei ganz verschiedene Dinge oft in einen Topf geworfen werden« — die Redewendung in einen Topf werfen heißt: nicht unterscheiden, für dasselbe halten. Eine Redewendung, die du dir merken kannst.",
          en: "'three quite different things are often thrown into one pot' — 'in einen Topf werfen' means treating them as the same. An idiom worth remembering.",
          it: "»mettere nello stesso calderone« significa non distinguere, considerare uguali.",
          bn: "»তিনটি ভিন্ন জিনিস প্রায়ই এক পাত্রে ফেলা হয়« — »in einen Topf werfen« মানে আলাদা না করা, এক ভাবা।",
        },
      },
      {
        nr: 7,
        question: "Was gilt für den Umtausch im Laden?",
        options: [
          "Der Laden muss die Ware zurücknehmen.",
          "Er ist gesetzlich auf zwei Wochen begrenzt.",
          "Der Laden entscheidet selbst, ob er ihn anbietet.",
        ],
        answerIndex: 2,
        why: {
          de: "»Kein Gesetz zwingt ein Geschäft … Die meisten Läden tun es freiwillig … aber sie dürfen es auch an Bedingungen knüpfen.« Die zwei Wochen aus b) kommen im Text vor, aber als Beispiel für eine Bedingung, die der Laden SELBST setzen darf — nicht als Gesetz.",
          en: "'No law forces a shop … Most shops do it voluntarily … but they may attach conditions.' The two weeks in b) do appear in the text, but as an example of a condition the shop itself may set — not as a law.",
          it: "»Nessuna legge obbliga un negozio … la maggior parte lo fa volontariamente.« Le due settimane sono un esempio di condizione, non una legge.",
          bn: "»কোনো আইন দোকানকে বাধ্য করে না … বেশিরভাগ দোকান স্বেচ্ছায় করে … তবে শর্ত জুড়ে দিতে পারে।« b)-র দুই সপ্তাহ লেখায় আছে, কিন্তু দোকানের নিজের শর্তের উদাহরণ হিসেবে, আইন হিসেবে নয়।",
        },
      },
      {
        nr: 8,
        question: "An wen soll sich der Kunde bei einer Reklamation wenden?",
        options: ["An den Verkäufer.", "An den Hersteller.", "An beide gleichzeitig."],
        answerIndex: 0,
        why: {
          de: "»Wichtig ist, dass man sich an den Verkäufer wendet, nicht an den Hersteller — auch wenn das Gerät eine Herstellergarantie hat.« Der Text nennt die falsche Antwort ausdrücklich und entkräftet sogar die Ausrede, die man dafür hätte.",
          en: "'It matters that you turn to the seller, not the manufacturer — even if the device has a manufacturer's guarantee.' The text names the wrong answer outright and even disarms the excuse for it.",
          it: "»Bisogna rivolgersi al venditore, non al produttore, anche se c'è una garanzia del produttore.«",
          bn: "»গুরুত্বপূর্ণ হলো বিক্রেতার কাছে যাওয়া, উৎপাদকের কাছে নয় — যন্ত্রটির উৎপাদক-গ্যারান্টি থাকলেও।«",
        },
      },
      {
        nr: 9,
        question: "Wann kann der Kunde bei einer Reklamation sein Geld zurückverlangen?",
        options: [
          "Sofort, wenn die Ware kaputt ist.",
          "Wenn die Reparatur zweimal misslingt.",
          "Nur innerhalb von vierzehn Tagen.",
        ],
        answerIndex: 1,
        why: {
          de: "»Der Verkäufer darf zuerst versuchen, die Sache zu reparieren … Erst wenn das zweimal misslingt oder zu lange dauert, kann der Kunde das Geld zurückverlangen.« Das Wort »erst« ist der Schlüssel: nicht sofort. Und die vierzehn Tage aus c) gehören zum Widerruf, einem anderen Absatz — die häufigste Verwechslung in diesem Text.",
          en: "'The seller may first try to repair the item … Only when that fails twice or takes too long may the customer demand the money back.' The word 'erst' is the key: not immediately. And the fourteen days in c) belong to the Widerruf, a different paragraph — the commonest confusion in this text.",
          it: "»Solo se la riparazione fallisce due volte o dura troppo si può chiedere il rimborso.« I quattordici giorni della c) riguardano il recesso.",
          bn: "»বিক্রেতা প্রথমে মেরামতের চেষ্টা করতে পারেন … দুবার ব্যর্থ হলে বা বেশি দেরি হলে তবেই ক্রেতা টাকা ফেরত চাইতে পারেন।« »erst« শব্দটাই চাবি: সঙ্গে সঙ্গে নয়। আর c)-র চৌদ্দ দিন Widerruf-এর, অন্য অনুচ্ছেদের।",
        },
      },
      {
        nr: 10,
        question: "Warum rät der Text, den Kassenbon zu fotografieren?",
        options: [
          "Weil man ohne Bon kein Recht hat.",
          "Weil der Laden ein Foto verlangt.",
          "Weil die Schrift auf dem Papier verschwindet.",
        ],
        answerIndex: 2,
        why: {
          de: "»denn das Papier verblasst oft schon nach wenigen Monaten«. Antwort a) widerspricht dem Satz davor: »Der Kassenbon ist kein Beweis für das Recht« — man hat das Recht also auch ohne ihn, er macht es nur leichter.",
          en: "'because the paper often fades within a few months'. Answer a) contradicts the sentence before: 'the receipt is not proof of the right' — you have the right without it, it merely makes things easier.",
          it: "»perché la carta sbiadisce dopo pochi mesi«. La a) contraddice la frase precedente.",
          bn: "»কারণ কাগজের লেখা কয়েক মাসেই মুছে যায়«। a) আগের বাক্যের বিপরীত: »রসিদ অধিকারের প্রমাণ নয়« — রসিদ ছাড়াও অধিকার থাকে।",
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
        title: "Repair-Café Siegen",
        text: "Jeden ersten Samstag im Monat reparieren wir mit Ihnen kleine Elektrogeräte, Kleidung und Fahrräder. Werkzeug und Hilfe kostenlos, Ersatzteile zahlen Sie selbst.",
      },
      {
        key: "b",
        title: "Elektro Wagner – Kundendienst",
        text: "Reparaturen aller Marken, auch außerhalb der Garantie. Kostenvoranschlag zwanzig Euro, bei Auftrag kostenlos. Abholung großer Geräte möglich.",
      },
      {
        key: "c",
        title: "Verbraucherzentrale NRW",
        text: "Streit mit einem Händler? Wir prüfen Ihren Fall und schreiben für Sie einen Brief. Beratung fünfzehn Euro, für Menschen mit geringem Einkommen kostenlos.",
      },
      {
        key: "d",
        title: "Garantie-Verlängerung Media Center",
        text: "Verlängern Sie die Herstellergarantie auf fünf Jahre. Abschluss nur innerhalb von vier Wochen nach dem Kauf möglich, Preis je nach Gerät.",
      },
      {
        key: "e",
        title: "Secondhand-Laden Wendepunkt",
        text: "Gut erhaltene Kleidung für Damen, Herren und Kinder. Wir kaufen auch an: bringen Sie saubere Sachen mit, Termin nicht nötig.",
      },
      {
        key: "f",
        title: "Unverpackt-Laden Korn",
        text: "Nudeln, Reis, Müsli und Gewürze zum Abfüllen. Bitte eigene Behälter mitbringen. Gläser können Sie auch bei uns kaufen oder leihen.",
      },
      {
        key: "g",
        title: "Online-Shop Rückversand",
        text: "Sie möchten Ihre Bestellung zurückschicken? Drucken Sie das Etikett in Ihrem Kundenkonto aus. Rücksendung innerhalb von vierzehn Tagen kostenlos.",
      },
      {
        key: "h",
        title: "Schuhreparatur Kılıç",
        text: "Absätze, Sohlen und Reißverschlüsse. Fertig in zwei bis drei Tagen. Montag bis Freitag von neun bis achtzehn Uhr, samstags bis dreizehn Uhr.",
      },
      {
        key: "i",
        title: "Wochenmarkt am Kornmarkt",
        text: "Jeden Mittwoch und Samstag von sieben bis vierzehn Uhr. Obst, Gemüse, Käse und Brot direkt vom Erzeuger. Barzahlung an den meisten Ständen.",
      },
      {
        key: "j",
        title: "Möbelhaus Lohmann – Lieferung",
        text: "Lieferung innerhalb von Siegen fünfundzwanzig Euro, Aufbau gegen Aufpreis. Beschädigte Teile melden Sie bitte innerhalb von sieben Tagen.",
      },
      {
        key: "k",
        title: "Schlichtungsstelle Onlinehandel",
        text: "Wenn ein Onlineshop nicht reagiert, vermitteln wir zwischen Ihnen und dem Händler. Das Verfahren ist für Verbraucher kostenlos und dauert etwa drei Monate.",
      },
      {
        key: "l",
        title: "Handy-Werkstatt am Markt",
        text: "Displaytausch und Akkuwechsel meist innerhalb einer Stunde. Nur für Smartphones und Tablets. Ohne Termin, Kartenzahlung möglich.",
      },
    ],

    situations: [
      {
        nr: 11,
        text: "Sie haben online eine Jacke bestellt, die Ihnen nicht gefällt, und möchten sie zurückschicken.",
        answerKey: "g",
        why: {
          de: "»Rücksendung innerhalb von vierzehn Tagen kostenlos« — genau der Widerruf, den der Lesetext beschreibt. Kein Grund nötig, weil online bestellt.",
          en: "'Return free of charge within fourteen days' — exactly the Widerruf the reading text describes. No reason needed, because it was ordered online.",
          it: "»Reso gratuito entro quattordici giorni«: proprio il recesso descritto nel testo.",
          bn: "»চৌদ্দ দিনের মধ্যে বিনামূল্যে ফেরত« — লেখায় বর্ণিত Widerruf-ই। অনলাইনে কেনা বলে কারণ লাগে না।",
        },
      },
      {
        nr: 12,
        text: "Der Reißverschluss an Ihren Stiefeln ist kaputt. Sie möchten sie nicht wegwerfen.",
        answerKey: "h",
        why: {
          de: "»Absätze, Sohlen und Reißverschlüsse« — Schuhe und genau dieser Schaden. Anzeige a repariert zwar auch, aber nur einmal im Monat und mit eigener Mitarbeit; h ist die Werkstatt dafür.",
          en: "'Heels, soles and zips' — shoes and exactly this fault. Advert a also repairs, but only once a month and with your own labour; h is the workshop for it.",
          it: "»Tacchi, suole e cerniere«: scarpe e proprio questo guasto.",
          bn: "»হিল, সোল ও জিপার« — জুতা এবং ঠিক এই সমস্যাটাই।",
        },
      },
      {
        nr: 13,
        text: "Sie kaufen Reis und Nudeln und möchten dabei kein Plastik mitnehmen.",
        answerKey: "f",
        why: {
          de: "»Nudeln, Reis … zum Abfüllen. Bitte eigene Behälter mitbringen.« Beide genannten Waren stehen in der Anzeige.",
          en: "'Pasta, rice … to fill yourself. Please bring your own containers.' Both named goods are in the advert.",
          it: "»Pasta, riso … da riempire. Portate i vostri contenitori.«",
          bn: "»নুডলস, চাল … নিজে ভরার জন্য। নিজের পাত্র আনুন।« দুটি পণ্যই বিজ্ঞাপনে আছে।",
        },
      },
      {
        nr: 14,
        text: "Ihre Waschmaschine ist zwei Jahre alt und geht nicht mehr. Sie möchten sie reparieren lassen, ohne sie selbst zu tragen.",
        answerKey: "b",
        why: {
          de: "»Reparaturen aller Marken, auch außerhalb der Garantie. … Abholung großer Geräte möglich.« Beide Bedingungen — nach der Garantie und ohne selbst zu tragen — stehen ausdrücklich da. Anzeige a repariert nur kleine Geräte und verlangt, dass man mitbringt und mitarbeitet.",
          en: "'Repairs of all makes, also outside the guarantee. … Collection of large appliances possible.' Both conditions — past the guarantee and no carrying — are stated. Advert a only does small appliances and expects you to bring it and help.",
          it: "»Riparazioni di tutte le marche, anche fuori garanzia … ritiro di grandi elettrodomestici«. Entrambe le condizioni ci sono.",
          bn: "»সব ব্র্যান্ডের মেরামত, গ্যারান্টির বাইরেও … বড় যন্ত্র নিয়ে আসার ব্যবস্থা আছে।« দুটি শর্তই স্পষ্ট।",
        },
      },
      {
        nr: 15,
        text: "Ein Onlineshop antwortet seit Wochen nicht auf Ihre E-Mails, und Sie warten noch auf Ihr Geld.",
        answerKey: "k",
        why: {
          de: "»Wenn ein Onlineshop nicht reagiert, vermitteln wir« — genau die Lage. Anzeige c berät zwar auch bei Streit, schreibt aber nur einen Brief; hier geht es um einen Händler, der gar nicht antwortet.",
          en: "'If an online shop does not respond, we mediate' — exactly the situation. Advert c also advises in disputes but only writes a letter; here the trader is not responding at all.",
          it: "»Se un negozio online non risponde, facciamo da mediatori«: proprio questo caso.",
          bn: "»অনলাইন দোকান সাড়া না দিলে আমরা মধ্যস্থতা করি« — ঠিক এই অবস্থা।",
        },
      },
      {
        nr: 16,
        text: "Sie haben gestern einen Fernseher gekauft und möchten die Garantie auf mehrere Jahre verlängern.",
        answerKey: "d",
        why: {
          de: "»Abschluss nur innerhalb von vier Wochen nach dem Kauf möglich« — gestern gekauft heißt: die Frist läuft noch. Prüfe bei Anzeigen mit Fristen immer, ob die Situation noch hineinpasst.",
          en: "'Can only be taken out within four weeks of purchase' — bought yesterday means the window is still open. With time-limited adverts always check that the situation still fits.",
          it: "»Sottoscrivibile solo entro quattro settimane dall'acquisto«: comprato ieri, quindi in tempo.",
          bn: "»কেনার চার সপ্তাহের মধ্যেই কেবল নেওয়া যায়« — গতকাল কেনা মানে সময় এখনো আছে।",
        },
      },
      {
        nr: 17,
        text: "Ihr Handy-Display ist gesprungen und Sie brauchen das Gerät noch heute.",
        answerKey: "l",
        why: {
          de: "»Displaytausch … meist innerhalb einer Stunde. … Ohne Termin.« Beides zusammen macht »noch heute« möglich.",
          en: "'Screen replacement … usually within an hour. … No appointment.' The two together make 'still today' possible.",
          it: "»Sostituzione display … di solito entro un'ora … senza appuntamento«.",
          bn: "»ডিসপ্লে বদল … সাধারণত এক ঘণ্টার মধ্যে … অ্যাপয়েন্টমেন্ট ছাড়াই।« দুটো মিলেই »আজই« সম্ভব হয়।",
        },
      },
      {
        nr: 18,
        text: "Sie möchten Kinderkleidung, aus der Ihre Tochter herausgewachsen ist, verkaufen.",
        answerKey: "e",
        why: {
          de: "»Wir kaufen auch an: bringen Sie saubere Sachen mit« — ankaufen heißt: sie kaufen von dir. Das »auch« ist wichtig: Der Laden verkauft UND kauft.",
          en: "'We also buy in: bring clean items' — ankaufen means they buy from you. The 'auch' matters: the shop sells AND buys.",
          it: "»Acquistiamo anche: portate capi puliti.« »Ankaufen« significa che comprano da te.",
          bn: "»আমরা কিনিও: পরিষ্কার জিনিস আনুন« — ankaufen মানে তারা আপনার কাছ থেকে কেনে।",
        },
      },
      {
        nr: 19,
        text: "Sie brauchen am Samstagvormittag frisches Gemüse und haben nur Bargeld dabei.",
        answerKey: "i",
        why: {
          de: "»Jeden Mittwoch und Samstag von sieben bis vierzehn Uhr … Barzahlung an den meisten Ständen.« Tag, Zeit und Zahlungsart passen alle drei.",
          en: "'Every Wednesday and Saturday from seven to two … cash accepted at most stalls.' Day, time and payment all three fit.",
          it: "»Ogni mercoledì e sabato dalle sette alle quattordici … pagamento in contanti«.",
          bn: "»প্রতি বুধ ও শনিবার সাতটা থেকে চৌদ্দটা … বেশিরভাগ স্টলে নগদ চলে।« দিন, সময় ও পরিশোধ — তিনটিই মেলে।",
        },
      },
      {
        nr: 20,
        text: "Sie haben vor zwei Monaten im Laden Schuhe gekauft, die Ihnen nicht mehr gefallen. Die Schuhe sind heil, und Sie möchten Ihr Geld zurück.",
        answerKey: "x",
        why: {
          de: "Keine Anzeige hilft — und der Lesetext erklärt, warum. Die Schuhe sind heil, also ist es keine Reklamation; gekauft wurde im Laden, also gibt es keinen Widerruf; und zwei Monate sind ohnehin über jeder Umtauschfrist. Anzeige c und k helfen nur bei einem Streit, in dem man im Recht ist — hier hat man schlicht keinen Anspruch. Teil 3 prüft, ob du erkennst, wann es nichts zu holen gibt.",
          en: "No advert helps — and the reading text explains why. The shoes are undamaged, so it is not a Reklamation; they were bought in a shop, so there is no Widerruf; and two months is beyond any exchange window anyway. Adverts c and k only help in a dispute where you are in the right — here there is simply no claim. Teil 3 tests whether you can see when there is nothing to be had.",
          it: "Nessun annuncio aiuta, e il testo spiega perché: le scarpe sono intatte, quindi niente reclamo; comprate in negozio, quindi niente recesso; e due mesi superano ogni termine di cambio.",
          bn: "কোনো বিজ্ঞাপনই কাজে আসে না — আর পাঠ্যটিই কারণ বলে। জুতা অক্ষত, তাই Reklamation নয়; দোকানে কেনা, তাই Widerruf নেই; আর দুই মাস যেকোনো বদলের সময়সীমার বাইরে। c ও k কেবল তখনই সাহায্য করে যখন আপনি অধিকারে আছেন।",
        },
      },
    ],
  },

  /* ================================================================== */
  glossary: [
    g("zurückzugeben", "zurückgeben", undefined, "to give back, return", "restituire", "ফেরত দেওয়া"),
    g("kulanz", "die Kulanz", "die", "goodwill — doing more than the law requires", "cortesia commerciale", "সদিচ্ছা"),
    g("pflicht", "die Pflicht", "die", "duty, obligation", "obbligo", "বাধ্যবাধকতা"),
    g("ware", "die Ware", "die", "goods, merchandise", "merce", "পণ্য"),
    g("bestellung", "die Bestellung", "die", "order", "ordine", "অর্ডার"),
    g("frist", "die Frist", "die", "deadline, time limit", "termine", "সময়সীমা"),
    g("rücksendung", "die Rücksendung", "die", "return shipment", "spedizione di reso", "ফেরত পাঠানো"),
    g("händlern", "der Händler", "der", "traders, retailers", "commercianti", "ব্যবসায়ী"),
    g("werkstätten", "die Werkstatt", "die", "workshops", "officine", "কর্মশালা"),
    g("ehrenamtliche", "ehrenamtlich", undefined, "volunteers", "volontari", "স্বেচ্ছাসেবক"),
    g("gerät", "das Gerät", "das", "device, appliance", "apparecchio", "যন্ত্র"),
    g("werkzeug", "das Werkzeug", "das", "tools", "attrezzi", "যন্ত্রপাতি"),
    g("filialen", "die Filiale", "die", "branches (of a chain)", "filiali", "শাখা"),
    g("behälter", "der Behälter", "der", "containers", "contenitori", "পাত্র"),
    g("gewicht", "das Gewicht", "das", "weight", "peso", "ওজন"),
    g("hersteller", "der Hersteller", "der", "manufacturer", "produttore", "উৎপাদক"),
    g("haftet", "haften", undefined, "is liable", "risponde, è responsabile", "দায়ী থাকে"),
    g("verkäufer", "der Verkäufer", "der", "seller", "venditore", "বিক্রেতা"),
    g("beweisen", "beweisen", undefined, "to prove", "dimostrare", "প্রমাণ করা"),
    g("kleingedruckten", "das Kleingedruckte", "das", "the small print", "le clausole in piccolo", "সূক্ষ্ম অক্ষরের শর্ত"),
    g("umgang", "der Umgang", "der", "handling, dealing with", "gestione", "ব্যবহার / আচরণ"),
    g("umtausch", "der Umtausch", "der", "exchange — swapping undamaged goods", "cambio merce", "বদল"),
    g("anspruch", "der Anspruch", "der", "legal claim, entitlement", "diritto", "অধিকার"),
    g("einwandfreie", "einwandfrei", undefined, "faultless, in perfect condition", "impeccabile", "ত্রুটিহীন"),
    g("kassenbon", "der Kassenbon", "der", "till receipt", "scontrino", "ক্যাশ রসিদ"),
    g("etikett", "das Etikett", "das", "label, tag", "etichetta", "লেবেল"),
    g("reklamation", "die Reklamation", "die", "complaint about faulty goods", "reclamo", "ত্রুটির অভিযোগ"),
    g("reißverschluss", "der Reißverschluss", "der", "zip", "cerniera", "জিপার"),
    g("ersetzen", "ersetzen", undefined, "to replace", "sostituire", "বদলে দেওয়া"),
    g("misslingt", "misslingen", undefined, "fails, does not work out", "fallisce", "ব্যর্থ হয়"),
    g("herstellergarantie", "die Herstellergarantie", "die", "manufacturer's guarantee — voluntary, unlike the legal right", "garanzia del produttore", "উৎপাদকের গ্যারান্টি"),
    g("widerruf", "der Widerruf", "der", "withdrawal from a distance contract", "recesso", "চুক্তি প্রত্যাহার"),
    g("verträge", "der Vertrag", "der", "contracts", "contratti", "চুক্তি"),
    g("begründung", "die Begründung", "die", "reason, justification", "motivazione", "কারণ দর্শানো"),
    g("zurücktreten", "zurücktreten", undefined, "to withdraw from a contract", "recedere", "চুক্তি থেকে সরে আসা"),
    g("anprobieren", "anprobieren", undefined, "to try on", "provare (un capo)", "পরে দেখা"),
    g("verblasst", "verblassen", undefined, "fades", "sbiadisce", "বিবর্ণ হয়ে যায়"),
    g("kostenvoranschlag", "der Kostenvoranschlag", "der", "written estimate of cost", "preventivo", "খরচের প্রাক্কলন"),
    g("verbraucherzentrale", "die Verbraucherzentrale", "die", "consumer advice centre", "centro tutela consumatori", "ভোক্তা পরামর্শ কেন্দ্র"),
    g("schlichtungsstelle", "die Schlichtungsstelle", "die", "arbitration body", "organismo di conciliazione", "মধ্যস্থতা দপ্তর"),
    g("verbraucher", "der Verbraucher", "der", "consumers", "consumatori", "ভোক্তা"),
    g("erzeuger", "der Erzeuger", "der", "producer, grower", "produttore agricolo", "উৎপাদক / চাষি"),
    g("aufpreis", "der Aufpreis", "der", "surcharge, extra charge", "supplemento", "অতিরিক্ত খরচ"),
    g("akkuwechsel", "der Akkuwechsel", "der", "battery replacement", "sostituzione batteria", "ব্যাটারি বদল"),
  ],
};
