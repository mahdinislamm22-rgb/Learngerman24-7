import type { SchreibenTask } from "./types";

/**
 * Travel and consumer letters.
 *
 * SCH-13 asks for compensation after a delay; SCH-14 is a complaint about
 * a faulty item. Both are the register telc likes most for the formal
 * task: something went wrong, you are not angry, you want a specific
 * outcome by a specific date.
 */
export const tasksE: SchreibenTask[] = [
  /* ------------------------------------------------------------------ */
  {
    code: "SCH-13",
    category: "beschwerde",
    register: "formell",
    situation: {
      en: "Your train was two hours late and you missed your connection. You are writing to the railway's customer service to ask for compensation.",
      it: "Il tuo treno ha avuto due ore di ritardo e hai perso la coincidenza. Scrivi al servizio clienti delle ferrovie per chiedere un rimborso.",
      bn: "আপনার ট্রেন দুই ঘণ্টা দেরি করেছে এবং আপনি সংযোগ ট্রেন ধরতে পারেননি। আপনি রেলের গ্রাহকসেবায় ক্ষতিপূরণ চেয়ে লিখছেন।",
    },
    taskDe:
      "Ihr Zug hatte zwei Stunden Verspätung und Sie haben den Anschlusszug verpasst. Schreiben Sie eine E-Mail an den Kundenservice der Bahn.",
    leitpunkte: [
      "Beschreiben Sie die Fahrt: wann, von wo nach wo",
      "Erklären Sie, was genau passiert ist",
      "Sagen Sie, welche Folgen das für Sie hatte",
      "Nennen Sie Ihre Forderung und eine Frist",
    ],
    anrede: "Sehr geehrte Damen und Herren,",
    gruss: "Mit freundlichen Grüßen\n…",
    usefulPhrases: [
      {
        de: "am vergangenen Freitag bin ich mit dem Zug von Siegen nach Köln gefahren.",
        note: {
          en: "fahren takes sein in the Perfekt: ich bin gefahren. Almost every verb of motion does.",
          it: "fahren vuole sein nel Perfekt: ich bin gefahren. Quasi tutti i verbi di moto.",
          bn: "fahren Perfekt-এ sein নেয়: ich bin gefahren। প্রায় সব গতিবাচক ক্রিয়াই তাই।",
        },
      },
      {
        de: "Der Zug hatte bereits bei der Abfahrt vierzig Minuten Verspätung.",
        note: {
          en: "Verspätung haben, not 'sein spät'. Learn the noun with haben — it is how Germans say it.",
          it: "Verspätung haben, non «sein spät». Impara il sostantivo con haben.",
          bn: "Verspätung haben, 'spät sein' নয়। বিশেষ্যটি haben-সহই শিখুন — জার্মানরা এভাবেই বলে।",
        },
      },
      {
        de: "Dadurch habe ich meinen Anschlusszug verpasst.",
        note: {
          en: "dadurch = 'as a result of that'. It links cause to consequence in one word, and it counts as a connector.",
          it: "dadurch = «di conseguenza». Collega causa ed effetto in una parola.",
          bn: "dadurch = 'তার ফলে'। এক শব্দেই কারণ ও ফল জোড়ে, আর এটি connector হিসেবেই গোনা হয়।",
        },
      },
      {
        de: "Ich musste zwei Stunden am Bahnhof warten und kam erst um dreiundzwanzig Uhr zu Hause an.",
        note: {
          en: "Two past tenses in one sentence: musste (modal → Präteritum) and kam an. Both are normal in writing.",
          it: "Due passati in una frase: musste (modale → Präteritum) e kam an.",
          bn: "এক বাক্যে দুটি অতীত: musste (মোডাল → Präteritum) আর kam an। লেখায় দুটোই স্বাভাবিক।",
        },
      },
      {
        de: "Ich bitte Sie, mir den Betrag bis zum 30. November zu erstatten.",
        note: {
          en: "A deadline turns a complaint into a request that can be answered. erstatten = to refund.",
          it: "Una scadenza trasforma un reclamo in una richiesta a cui si può rispondere. erstatten = rimborsare.",
          bn: "একটি সময়সীমা অভিযোগকে উত্তরযোগ্য অনুরোধে বদলে দেয়। erstatten = ফেরত দেওয়া।",
        },
      },
    ],
    targetWords: 150,
    modelAnswerDe: `Sehr geehrte Damen und Herren,

am vergangenen Freitag, dem siebten November, bin ich mit dem Zug von Siegen nach Köln gefahren. Meine Fahrkarte und die Reservierung schicke ich Ihnen als Anhang mit.

Der Zug hatte bereits bei der Abfahrt vierzig Minuten Verspätung. In Hagen mussten wir noch einmal warten, weil ein anderer Zug vor uns stand. Am Ende sind wir mit zwei Stunden Verspätung in Köln angekommen. Eine Information gab es während der ganzen Fahrt nicht.

Dadurch habe ich meinen Anschlusszug verpasst. Ich musste zwei Stunden am Bahnhof warten und kam erst um dreiundzwanzig Uhr zu Hause an. Am nächsten Morgen hatte ich um sieben Uhr einen Termin.

Nach Ihren eigenen Bedingungen habe ich ab zwei Stunden Anspruch auf die Hälfte des Fahrpreises. Ich bitte Sie deshalb, mir den Betrag bis zum dreißigsten November zu erstatten.

Mit freundlichen Grüßen
Mahdin Islam`,
    modelNotes: {
      en: "A complaint is judged on whether it is usable, not on how upset it sounds. Three things make this one usable: the journey is identifiable (date, route, attachments), the consequence is concrete (a missed appointment, not 'it was terrible'), and the demand names both an amount and a date. Note the fourth paragraph cites the company's own rule — that is the single most effective sentence in any German complaint, and it needs no anger at all.",
      it: "Un reclamo si valuta su quanto è utilizzabile, non su quanto suona arrabbiato. Qui: il viaggio è identificabile, la conseguenza è concreta e la richiesta indica importo e data. Il quarto paragrafo cita la regola dell'azienda stessa: la frase più efficace in qualsiasi reclamo tedesco.",
      bn: "অভিযোগ বিচার হয় কতটা কাজে লাগে তা দিয়ে, কতটা রাগী শোনায় তা দিয়ে নয়। এখানে তিনটি জিনিস: যাত্রাটি শনাক্তযোগ্য (তারিখ, পথ, সংযুক্তি), ফলাফল সুনির্দিষ্ট (মিস করা অ্যাপয়েন্টমেন্ট, 'ভয়ানক ছিল' নয়), আর দাবিতে অঙ্ক ও তারিখ দুটোই। চতুর্থ অনুচ্ছেদে কোম্পানির নিজের নিয়মই উদ্ধৃত — জার্মান অভিযোগপত্রে এটাই সবচেয়ে কার্যকর বাক্য, আর তাতে রাগের দরকার নেই।",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    code: "SCH-14",
    category: "beschwerde",
    register: "formell",
    situation: {
      en: "You ordered a pair of headphones online. They arrived damaged and the shop has not replied to your first email. You are writing again.",
      it: "Hai ordinato delle cuffie online. Sono arrivate danneggiate e il negozio non ha risposto alla tua prima email. Scrivi di nuovo.",
      bn: "আপনি অনলাইনে একটি হেডফোন অর্ডার করেছেন। সেটি ভাঙা অবস্থায় এসেছে এবং দোকান আপনার প্রথম ইমেইলের উত্তর দেয়নি। আপনি আবার লিখছেন।",
    },
    taskDe:
      "Sie haben online Kopfhörer bestellt. Das Gerät war beschädigt, und auf Ihre erste E-Mail haben Sie keine Antwort bekommen. Schreiben Sie erneut an den Onlineshop.",
    leitpunkte: [
      "Nennen Sie Bestellnummer und Datum",
      "Beschreiben Sie den Schaden",
      "Erinnern Sie an Ihre erste E-Mail",
      "Sagen Sie, was Sie jetzt erwarten, und setzen Sie eine Frist",
    ],
    anrede: "Sehr geehrte Damen und Herren,",
    gruss: "Mit freundlichen Grüßen\n…",
    usefulPhrases: [
      {
        de: "am 3. Oktober habe ich bei Ihnen Kopfhörer bestellt, Bestellnummer 4873.",
        note: {
          en: "Put the identifying facts in the first line. A service team that cannot find your order will not act on your letter.",
          it: "Metti i dati identificativi nella prima riga: senza numero d'ordine nessuno può agire.",
          bn: "শনাক্তকারী তথ্য প্রথম লাইনেই দিন। অর্ডার খুঁজে না পেলে কেউ ব্যবস্থা নিতে পারে না।",
        },
      },
      {
        de: "Das Gerät war bei der Lieferung bereits beschädigt.",
        note: {
          en: "bereits = already. It quietly rules out the suspicion that you broke it yourself — which is the whole argument.",
          it: "bereits = già. Esclude con discrezione il sospetto che l'abbia rotto tu.",
          bn: "bereits = ইতিমধ্যেই। এটি নীরবে বাদ দেয় এই সন্দেহ যে আপনি নিজে ভেঙেছেন — পুরো যুক্তিটাই এখানে।",
        },
      },
      {
        de: "Auf meine E-Mail vom 10. Oktober habe ich bis heute keine Antwort erhalten.",
        note: {
          en: "State the silence as a fact with a date, not as an accusation. 'bis heute' does the work.",
          it: "Indica il silenzio come un fatto con una data, non come un'accusa.",
          bn: "নীরবতাকে তারিখসহ তথ্য হিসেবে বলুন, অভিযোগ হিসেবে নয়। 'bis heute'-ই কাজটা করে।",
        },
      },
      {
        de: "Ich erwarte entweder ein neues Gerät oder die Rückzahlung des Kaufpreises.",
        note: {
          en: "entweder … oder gives them a choice and you a result either way. A very useful pair at B1.",
          it: "entweder … oder: dai loro una scelta e a te un risultato in ogni caso.",
          bn: "entweder … oder তাদের বিকল্প দেয়, আর আপনাকে যেকোনোভাবেই ফল। B1-এ খুব কাজের জোড়া।",
        },
      },
      {
        de: "Sollte ich bis zum 5. November nichts von Ihnen hören, wende ich mich an die Verbraucherzentrale.",
        note: {
          en: "A conditional clause without 'wenn': Sollte ich …, wende ich … The verb comes first. It sounds formal and calm, which is exactly the tone you want.",
          it: "Una condizionale senza «wenn»: Sollte ich …, wende ich … Il verbo per primo. Suona formale e calmo.",
          bn: "»wenn« ছাড়া শর্তবাক্য: Sollte ich …, wende ich … ক্রিয়া আগে। শোনায় আনুষ্ঠানিক ও শান্ত — ঠিক যে সুরটা দরকার।",
        },
      },
    ],
    targetWords: 150,
    modelAnswerDe: `Sehr geehrte Damen und Herren,

am dritten Oktober habe ich bei Ihnen Kopfhörer bestellt, Bestellnummer vier acht sieben drei. Die Lieferung kam zwei Tage später bei mir an.

Das Gerät war bei der Lieferung bereits beschädigt. Der rechte Bügel ist gebrochen, und das Kabel lag lose in der Verpackung. Ich habe die Kopfhörer weder benutzt noch geöffnet. Fotos von der Verpackung und vom Schaden finden Sie im Anhang.

Auf meine E-Mail vom zehnten Oktober habe ich bis heute keine Antwort erhalten. Deshalb schreibe ich Ihnen erneut.

Ich erwarte entweder ein neues Gerät oder die Rückzahlung des Kaufpreises. Bitte teilen Sie mir außerdem mit, wohin ich die Kopfhörer zurückschicken soll und wer die Kosten dafür übernimmt. Sollte ich bis zum fünften November nichts von Ihnen hören, wende ich mich an die Verbraucherzentrale.

Mit freundlichen Grüßen
Mahdin Islam`,
    modelNotes: {
      en: "The second paragraph is where this letter is won. 'Ich habe die Kopfhörer weder benutzt noch geöffnet' answers the objection before it is made, and the photos turn a claim into evidence — both are content decisions, not grammar ones, and content is where most marks are lost. The closing sentence escalates without threatening: it names a next step and a date, and stops there.",
      it: "Il secondo paragrafo è dove si vince questa lettera: «non le ho né usate né aperte» risponde all'obiezione prima che arrivi, e le foto trasformano un'affermazione in prova. La chiusura alza il tiro senza minacciare: nomina un passo successivo e una data.",
      bn: "এই চিঠিটা জেতা হয় দ্বিতীয় অনুচ্ছেদে। 'Ich habe die Kopfhörer weder benutzt noch geöffnet' আপত্তি ওঠার আগেই তার উত্তর দেয়, আর ছবিগুলো দাবিকে প্রমাণে বদলায় — দুটোই বিষয়বস্তুর সিদ্ধান্ত, ব্যাকরণের নয়, আর বেশিরভাগ নম্বর যায় বিষয়বস্তুতেই। শেষ বাক্যটি হুমকি না দিয়েই চাপ বাড়ায়: পরের ধাপ ও তারিখ বলে থেমে যায়।",
    },
  },
];
