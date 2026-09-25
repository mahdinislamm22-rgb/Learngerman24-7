import type { SchreibenTask } from "./types";

/**
 * Work and application letters.
 *
 * SCH-09 is the one you personally will have to write for real. The telc
 * paper never asks for a full Bewerbung with Lebenslauf — it asks for a
 * short semi-formal letter around a situation — so this is written as the
 * exam would write it: an enquiry about an advertised Ausbildungsplatz,
 * four Leitpunkte, about 150 words.
 */
export const tasksC: SchreibenTask[] = [
  /* ------------------------------------------------------------------ */
  {
    code: "SCH-09",
    category: "bewerbung",
    register: "formell",
    situation: {
      en: "You saw an advertisement for an apprenticeship (Ausbildungsplatz) as an IT specialist at a company in Siegen. You are writing to ask about it and to introduce yourself.",
      it: "Hai visto un annuncio per un posto di formazione (Ausbildungsplatz) come informatico presso un'azienda di Siegen. Scrivi per chiedere informazioni e presentarti.",
      bn: "আপনি Siegen-এর একটি কোম্পানিতে IT বিশেষজ্ঞ হিসেবে প্রশিক্ষণের (Ausbildungsplatz) বিজ্ঞাপন দেখেছেন। আপনি খোঁজ নিতে ও নিজের পরিচয় দিতে চিঠি লিখছেন।",
    },
    taskDe:
      "Sie haben im Internet eine Anzeige der Firma Novatec gelesen. Die Firma sucht einen Auszubildenden als Fachinformatiker. Schreiben Sie eine E-Mail an die Firma.",
    leitpunkte: [
      "Woher kennen Sie die Anzeige und warum schreiben Sie?",
      "Stellen Sie sich kurz vor: Sprachen, Schule, Erfahrung",
      "Fragen Sie nach dem Beginn der Ausbildung und nach den Unterlagen",
      "Schlagen Sie ein Gespräch oder ein Praktikum vor",
    ],
    anrede: "Sehr geehrte Damen und Herren,",
    gruss: "Mit freundlichen Grüßen\n…",
    usefulPhrases: [
      {
        de: "mit großem Interesse habe ich Ihre Anzeige gelesen.",
        note: {
          en: "The standard opening of a German application. Note the lowercase 'm' — the sentence continues after the comma of the Anrede.",
          it: "L'apertura standard di una candidatura tedesca. Nota la minuscola: la frase continua dopo la virgola dell'Anrede.",
          bn: "জার্মান আবেদনের প্রচলিত শুরু। ছোট হাতের অক্ষর খেয়াল করুন — Anrede-র কমার পর বাক্যটি চলতেই থাকে।",
        },
      },
      {
        de: "Zurzeit besuche ich einen Deutschkurs auf dem Niveau B1.",
        note: {
          en: "auf dem Niveau — Dativ after auf here, because it answers wo, not wohin.",
          it: "auf dem Niveau — dativo dopo auf, perché risponde a wo, non a wohin.",
          bn: "auf dem Niveau — এখানে auf-এর পরে Dativ, কারণ এটি wo-এর উত্তর দেয়, wohin-এর নয়।",
        },
      },
      {
        de: "Ich würde mich freuen, wenn Sie mir mitteilen könnten, wann die Ausbildung beginnt.",
        note: {
          en: "Konjunktiv II (würde, könnten) is the politeness register of a German application letter. Two verbs at the end: … mitteilen könnten.",
          it: "Il Konjunktiv II (würde, könnten) è il registro di cortesia della lettera di candidatura. Due verbi in fondo: … mitteilen könnten.",
          bn: "Konjunktiv II (würde, könnten) জার্মান আবেদনপত্রের ভদ্র ভঙ্গি। শেষে দুটি ক্রিয়া: … mitteilen könnten।",
        },
      },
      {
        de: "Welche Unterlagen soll ich Ihnen schicken?",
        note: {
          en: "schicken takes Dativ for the person and Akkusativ for the thing: Ihnen (Dativ) + Unterlagen (Akkusativ).",
          it: "schicken vuole il dativo per la persona e l'accusativo per la cosa: Ihnen (dativo) + Unterlagen (accusativo).",
          bn: "schicken-এ ব্যক্তির জন্য Dativ, বস্তুর জন্য Akkusativ: Ihnen (Dativ) + Unterlagen (Akkusativ)।",
        },
      },
      {
        de: "Gern stelle ich mich Ihnen in einem persönlichen Gespräch vor.",
        note: {
          en: "sich vorstellen is separable: stelle … vor. With 'Gern' in first position the verb still comes second.",
          it: "sich vorstellen è separabile: stelle … vor. Con «Gern» in prima posizione il verbo resta in seconda.",
          bn: "sich vorstellen বিচ্ছেদযোগ্য: stelle … vor। প্রথমে 'Gern' থাকলেও ক্রিয়া দ্বিতীয় স্থানেই।",
        },
      },
    ],
    targetWords: 150,
    modelAnswerDe: `Sehr geehrte Damen und Herren,

mit großem Interesse habe ich Ihre Anzeige auf Ihrer Internetseite gelesen. Sie suchen einen Auszubildenden als Fachinformatiker, und ich möchte mich gern bei Ihnen bewerben.

Ich bin zweiundzwanzig Jahre alt und wohne seit zwei Jahren in Siegen. In meiner Heimat habe ich die Schule abgeschlossen und danach ein Jahr in einem kleinen Computerladen gearbeitet. Zurzeit besuche ich einen Deutschkurs auf dem Niveau B1. Außerdem spreche ich Englisch und Italienisch.

Ich würde mich freuen, wenn Sie mir mitteilen könnten, wann die Ausbildung beginnt. Welche Unterlagen soll ich Ihnen schicken?

Gern stelle ich mich Ihnen in einem persönlichen Gespräch vor. Wenn es möglich ist, würde ich vorher auch ein Praktikum in Ihrer Firma machen, damit ich den Betrieb kennenlerne.

Vielen Dank für Ihre Mühe.

Mit freundlichen Grüßen
Mahdin Islam`,
    modelNotes: {
      en: "Four paragraphs for four Leitpunkte, in the order the task gives them — an examiner should never have to hunt. The letter earns its B1 grammar honestly: a damit-clause, a wenn-clause, an indirect question and one Konjunktiv II request, rather than a chain of short main clauses. Note that it does NOT list every skill; a B1 letter that stays short and correct scores higher than a long one full of repair work.",
      it: "Quattro paragrafi per quattro Leitpunkte, nell'ordine dato: l'esaminatore non deve cercarli. La grammatica B1 è vera: una frase con damit, una con wenn, una domanda indiretta e una richiesta al Konjunktiv II, invece di una catena di frasi principali brevi. E non elenca tutte le competenze: una lettera breve e corretta vale più di una lunga piena di errori.",
      bn: "চারটি Leitpunkt-এর জন্য চারটি অনুচ্ছেদ, প্রশ্নের ক্রমেই — পরীক্ষককে যেন খুঁজতে না হয়। ব্যাকরণটাও সত্যিকারের B1: একটি damit-বাক্য, একটি wenn-বাক্য, একটি পরোক্ষ প্রশ্ন আর একটি Konjunktiv II অনুরোধ, ছোট ছোট প্রধান বাক্যের সারির বদলে। খেয়াল করুন, সব যোগ্যতার তালিকা দেওয়া হয়নি: ছোট ও নির্ভুল চিঠি লম্বা ভুলে-ভরা চিঠির চেয়ে বেশি নম্বর পায়।",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    code: "SCH-10",
    category: "termin",
    register: "formell",
    situation: {
      en: "You have an appointment at the doctor's next Tuesday, but you cannot come. You are writing to cancel it and ask for a new one.",
      it: "Hai un appuntamento dal medico martedì prossimo ma non puoi andarci. Scrivi per disdirlo e chiederne uno nuovo.",
      bn: "আগামী মঙ্গলবার আপনার ডাক্তারের অ্যাপয়েন্টমেন্ট আছে, কিন্তু আপনি যেতে পারবেন না। আপনি সেটি বাতিল করে নতুন সময় চেয়ে লিখছেন।",
    },
    taskDe:
      "Sie haben am nächsten Dienstag einen Termin in der Praxis Dr. Behrens, können aber nicht kommen. Schreiben Sie eine E-Mail an die Praxis.",
    leitpunkte: [
      "Sagen Sie, welchen Termin Sie haben",
      "Erklären Sie, warum Sie nicht kommen können",
      "Bitten Sie um einen neuen Termin und nennen Sie mögliche Zeiten",
      "Fragen Sie, ob Sie etwas mitbringen sollen",
    ],
    anrede: "Sehr geehrte Damen und Herren,",
    gruss: "Mit freundlichen Grüßen\n…",
    usefulPhrases: [
      {
        de: "leider kann ich den Termin am Dienstag nicht wahrnehmen.",
        note: {
          en: "einen Termin wahrnehmen is the formal way to say 'attend an appointment'. 'Ich kann nicht kommen' is fine too, but this earns vocabulary points.",
          it: "einen Termin wahrnehmen è il modo formale di dire «presentarsi a un appuntamento».",
          bn: "einen Termin wahrnehmen হলো 'অ্যাপয়েন্টমেন্টে উপস্থিত হওয়া'র আনুষ্ঠানিক রূপ। শব্দভাণ্ডারে নম্বর আনে।",
        },
      },
      {
        de: "Der Grund dafür ist, dass ich an diesem Tag arbeiten muss.",
        note: {
          en: "dass sends the verb to the end, and a modal verb goes last of all: … arbeiten muss.",
          it: "dass manda il verbo in fondo, e il modale va per ultimo: … arbeiten muss.",
          bn: "dass ক্রিয়াকে শেষে পাঠায়, আর মোডাল ক্রিয়া সবার শেষে: … arbeiten muss।",
        },
      },
      {
        de: "Könnten Sie mir bitte einen neuen Termin geben?",
        note: {
          en: "Könnten = Konjunktiv II, the polite form. 'Können Sie mir geben?' is not wrong, just blunter.",
          it: "Könnten = Konjunktiv II, la forma cortese.",
          bn: "Könnten = Konjunktiv II, ভদ্র রূপ। 'Können Sie …?' ভুল নয়, শুধু একটু রূঢ়।",
        },
      },
      {
        de: "Am besten passt mir ein Termin am Nachmittag.",
        note: {
          en: "passen takes Dativ for the person: mir passt, Ihnen passt. Never 'passt mich'.",
          it: "passen regge il dativo per la persona: mir passt. Mai «passt mich».",
          bn: "passen ব্যক্তির জন্য Dativ নেয়: mir passt। কখনোই 'passt mich' নয়।",
        },
      },
      {
        de: "Soll ich meine Versichertenkarte und die alten Befunde mitbringen?",
        note: {
          en: "sollen asks what someone else wants you to do — exactly right when asking a practice for instructions.",
          it: "sollen chiede cosa un altro vuole che tu faccia: perfetto per chiedere istruzioni.",
          bn: "sollen দিয়ে জানতে চাওয়া হয় অন্যজন কী চান — চেম্বারের নির্দেশ জানতে ঠিক এটাই।",
        },
      },
    ],
    targetWords: 150,
    modelAnswerDe: `Sehr geehrte Damen und Herren,

leider kann ich den Termin am nächsten Dienstag um zehn Uhr bei Doktor Behrens nicht wahrnehmen. Ich möchte ihn deshalb rechtzeitig absagen.

Der Grund dafür ist, dass ich an diesem Tag arbeiten muss. Mein Chef hat die Schichten kurzfristig geändert, und ich habe erst gestern davon erfahren. Es tut mir leid, dass ich so spät schreibe.

Könnten Sie mir bitte einen neuen Termin geben? Am besten passt mir ein Termin am Nachmittag, zum Beispiel am Donnerstag oder am Freitag nach sechzehn Uhr. Wenn das nicht möglich ist, komme ich auch gern früh am Morgen.

Eine Frage habe ich noch: Soll ich meine Versichertenkarte und die alten Befunde mitbringen?

Vielen Dank für Ihre Mühe.

Mit freundlichen Grüßen
Mahdin Islam`,
    modelNotes: {
      en: "Cancelling is the easiest of the four Leitpunkte to underwrite — one line and you are done — so the model spends its second paragraph giving a real reason and apologising, which is what 'Kommunikation' is scored on. The alternatives offered in paragraph three ('wenn das nicht möglich ist, …') are the single cheapest way to show a conditional clause under exam pressure.",
      it: "Disdire è il punto più facile da liquidare in una riga: per questo il modello dedica il secondo paragrafo a una motivazione vera e a delle scuse, che è ciò che valuta la «Kommunikation». Le alternative del terzo paragrafo sono il modo più economico di mostrare una subordinata condizionale.",
      bn: "বাতিল করার কথাটা এক লাইনেই শেষ করা যায় — তাই মডেল উত্তরটি দ্বিতীয় অনুচ্ছেদে সত্যিকারের কারণ ও দুঃখপ্রকাশে সময় দেয়, কারণ 'Kommunikation'-এ এটাই দেখা হয়। তৃতীয় অনুচ্ছেদের বিকল্প সময়গুলো ('wenn das nicht möglich ist, …') পরীক্ষার চাপে শর্তবাচক বাক্য দেখানোর সবচেয়ে সহজ উপায়।",
    },
  },
];
