import type { SchreibenTask } from "./types";

/**
 * Official letters and course enquiries.
 *
 * SCH-11 is the register the telc paper likes most for the formal task:
 * writing to an office about something that went wrong with a deadline.
 * SCH-12 is its opposite — a semi-formal enquiry where you are the one
 * asking for something, and politeness carries the marks.
 */
export const tasksD: SchreibenTask[] = [
  /* ------------------------------------------------------------------ */
  {
    code: "SCH-11",
    category: "entschuldigung",
    register: "formell",
    situation: {
      en: "You should have registered your new address within two weeks but you missed the deadline. You are writing to the citizens' office to explain and ask what to do.",
      it: "Avresti dovuto registrare il nuovo indirizzo entro due settimane ma hai superato il termine. Scrivi all'anagrafe per spiegare e chiedere cosa fare.",
      bn: "নতুন ঠিকানা দুই সপ্তাহের মধ্যে নিবন্ধন করার কথা ছিল, কিন্তু সময়সীমা পেরিয়ে গেছে। আপনি নাগরিক দপ্তরে ব্যাখ্যা ও করণীয় জানতে লিখছেন।",
    },
    taskDe:
      "Sie sind vor vier Wochen umgezogen und haben die Frist für die Anmeldung verpasst. Schreiben Sie eine E-Mail an das Bürgeramt.",
    leitpunkte: [
      "Sagen Sie, wann Sie umgezogen sind",
      "Erklären Sie, warum Sie die Frist nicht eingehalten haben",
      "Fragen Sie, wie Sie das jetzt nachholen können",
      "Fragen Sie, welche Unterlagen Sie mitbringen müssen",
    ],
    anrede: "Sehr geehrte Damen und Herren,",
    gruss: "Mit freundlichen Grüßen\n…",
    usefulPhrases: [
      {
        de: "ich bin am ersten September nach Siegen gezogen.",
        note: {
          en: "ziehen (to move house) takes sein in the Perfekt: ich bin gezogen, never ich habe gezogen.",
          it: "ziehen (traslocare) vuole sein nel Perfekt: ich bin gezogen.",
          bn: "ziehen (বাসা বদলানো) Perfekt-এ sein নেয়: ich bin gezogen, কখনোই ich habe gezogen নয়।",
        },
      },
      {
        de: "Leider habe ich die Frist von zwei Wochen nicht eingehalten.",
        note: {
          en: "eine Frist einhalten — the fixed phrase for meeting a deadline. Its opposite is 'eine Frist versäumen'.",
          it: "eine Frist einhalten — l'espressione fissa per rispettare un termine.",
          bn: "eine Frist einhalten — সময়সীমা মানার নির্দিষ্ট বাগধারা। বিপরীত: eine Frist versäumen।",
        },
      },
      {
        de: "Der Grund dafür ist, dass ich mehrere Wochen krank war.",
        note: {
          en: "Give ONE clear reason, not three. Examiners reward a Leitpunkt that is answered clearly, not at length.",
          it: "Dai UNA ragione chiara, non tre. Gli esaminatori premiano la chiarezza, non la lunghezza.",
          bn: "একটাই স্পষ্ট কারণ দিন, তিনটি নয়। পরীক্ষক দৈর্ঘ্য নয়, স্পষ্টতা দেখেন।",
        },
      },
      {
        de: "Können Sie mir mitteilen, wie ich die Anmeldung jetzt nachholen kann?",
        note: {
          en: "nachholen = to do something later that you should have done already. Very useful with Termin, Prüfung, Anmeldung.",
          it: "nachholen = recuperare, fare più tardi ciò che si doveva già fare.",
          bn: "nachholen = যা আগেই করার কথা ছিল, তা পরে করা। Termin, Prüfung, Anmeldung-এর সঙ্গে খুব কাজে লাগে।",
        },
      },
      {
        de: "Welche Unterlagen soll ich zu dem Termin mitbringen?",
        note: {
          en: "die Unterlagen is plural only — never 'eine Unterlage' for documents you submit.",
          it: "die Unterlagen è solo plurale.",
          bn: "die Unterlagen কেবল বহুবচন — জমা দেওয়ার কাগজপত্র বোঝাতে 'eine Unterlage' নয়।",
        },
      },
    ],
    targetWords: 150,
    modelAnswerDe: `Sehr geehrte Damen und Herren,

ich bin am ersten September nach Siegen gezogen und wohne jetzt in der Weidenauer Straße zwölf. Leider habe ich die Frist von zwei Wochen für die Anmeldung nicht eingehalten.

Der Grund dafür ist, dass ich kurz nach dem Umzug krank geworden bin und drei Wochen lang zu Hause bleiben musste. Mein Arzt hat mich bis Ende September krankgeschrieben. Es tut mir leid, dass ich mich nicht früher gemeldet habe.

Können Sie mir bitte mitteilen, wie ich die Anmeldung jetzt nachholen kann? Im Internet habe ich leider keinen freien Termin gefunden. Wäre es möglich, die Unterlagen per Post zu schicken?

Außerdem möchte ich fragen, welche Unterlagen ich mitbringen muss. Ich habe meinen Pass, den Mietvertrag und die Wohnungsgeberbestätigung.

Vielen Dank für Ihre Hilfe.

Mit freundlichen Grüßen
Mahdin Islam`,
    modelNotes: {
      en: "Apology letters fail when the writer apologises four times and answers two Leitpunkte. Here the apology is one sentence and every Leitpunkt gets its own paragraph. The third paragraph does something worth copying: it asks the question AND offers a solution ('Wäre es möglich, …'), which is what moves a letter from B1 into the upper half of the Kommunikation band.",
      it: "Le lettere di scuse falliscono quando ci si scusa quattro volte e si rispondono due Leitpunkte. Qui le scuse sono una frase sola e ogni Leitpunkt ha il suo paragrafo. Il terzo paragrafo fa una cosa da copiare: pone la domanda E propone una soluzione.",
      bn: "ক্ষমা চাওয়ার চিঠি ব্যর্থ হয় যখন চারবার দুঃখ প্রকাশ করে দুটি Leitpunkt-এর উত্তর দেওয়া হয়। এখানে ক্ষমা এক বাক্যে, আর প্রতিটি Leitpunkt আলাদা অনুচ্ছেদে। তৃতীয় অনুচ্ছেদে অনুকরণযোগ্য একটা কাজ হয়েছে: প্রশ্ন করার সঙ্গে সমাধানও প্রস্তাব করা হয়েছে ('Wäre es möglich, …')।",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    code: "SCH-12",
    category: "kurs",
    register: "formell",
    situation: {
      en: "You saw an advert for an evening course preparing for a final vocational exam. You want to know whether you can join and what it costs.",
      it: "Hai visto un annuncio per un corso serale di preparazione all'esame finale. Vuoi sapere se puoi iscriverti e quanto costa.",
      bn: "চূড়ান্ত বৃত্তিমূলক পরীক্ষার প্রস্তুতির একটি সান্ধ্য কোর্সের বিজ্ঞাপন দেখেছেন। জানতে চান আপনি ভর্তি হতে পারবেন কি না ও খরচ কত।",
    },
    taskDe:
      "Sie haben eine Anzeige für einen Abendkurs zur Prüfungsvorbereitung gelesen. Schreiben Sie eine E-Mail an die Volkshochschule.",
    leitpunkte: [
      "Sagen Sie, woher Sie die Anzeige kennen",
      "Beschreiben Sie kurz Ihre Situation und Ihre Vorkenntnisse",
      "Fragen Sie nach Terminen, Dauer und Kosten",
      "Fragen Sie, ob es am Ende ein Zertifikat gibt",
    ],
    anrede: "Sehr geehrte Damen und Herren,",
    gruss: "Mit freundlichen Grüßen\n…",
    usefulPhrases: [
      {
        de: "ich habe Ihre Anzeige auf Ihrer Internetseite gelesen.",
        note: {
          en: "auf + Dativ for a website: auf der Internetseite. With 'in der Zeitung' it is in, not auf — learn each one with its noun.",
          it: "auf + dativo per un sito: auf der Internetseite. Con »in der Zeitung« si usa in.",
          bn: "ওয়েবসাইটে auf + Dativ: auf der Internetseite। পত্রিকায় হলে in der Zeitung — প্রতিটি বিশেষ্যের সঙ্গেই শিখুন।",
        },
      },
      {
        de: "Zurzeit mache ich eine Ausbildung als Fachinformatiker im zweiten Lehrjahr.",
        note: {
          en: "Time expression first pushes the verb to second position: Zurzeit MACHE ich. Never 'Zurzeit ich mache'.",
          it: "L'espressione di tempo in prima posizione spinge il verbo in seconda: Zurzeit MACHE ich.",
          bn: "সময়সূচক শব্দ আগে বসলে ক্রিয়া দ্বিতীয় স্থানে: Zurzeit MACHE ich। কখনোই 'Zurzeit ich mache' নয়।",
        },
      },
      {
        de: "Ich würde gern wissen, wann der Kurs beginnt und wie lange er dauert.",
        note: {
          en: "Two indirect questions joined by und — a cheap and reliable way to show subordinate word order twice in one sentence.",
          it: "Due domande indirette unite da und: un modo semplice per mostrare due volte l'ordine della subordinata.",
          bn: "und দিয়ে জোড়া দুটি পরোক্ষ প্রশ্ন — এক বাক্যে দুবার অধীন বাক্যের শব্দক্রম দেখানোর সহজ উপায়।",
        },
      },
      {
        de: "Können die Kosten von der Krankenkasse oder vom Arbeitgeber übernommen werden?",
        note: {
          en: "A passive question (werden + Partizip). One well-placed passive in a formal letter is worth more than three in a row.",
          it: "Una domanda al passivo (werden + participio). Un passivo ben collocato vale più di tre di fila.",
          bn: "একটি passive প্রশ্ন (werden + participle)। আনুষ্ঠানিক চিঠিতে একটি ভালোভাবে বসানো passive পরপর তিনটির চেয়ে ভালো।",
        },
      },
      {
        de: "Erhält man am Ende des Kurses ein Zertifikat?",
        note: {
          en: "erhalten is the formal twin of bekommen. Also note the genitive: am Ende DES Kurses.",
          it: "erhalten è il gemello formale di bekommen. Nota il genitivo: am Ende DES Kurses.",
          bn: "erhalten হলো bekommen-এর আনুষ্ঠানিক রূপ। Genitiv-টিও খেয়াল করুন: am Ende DES Kurses।",
        },
      },
    ],
    targetWords: 150,
    modelAnswerDe: `Sehr geehrte Damen und Herren,

ich habe Ihre Anzeige für den Abendkurs zur Prüfungsvorbereitung auf Ihrer Internetseite gelesen und interessiere mich sehr dafür.

Zurzeit mache ich eine Ausbildung als Fachinformatiker und bin im zweiten Lehrjahr. In der Berufsschule komme ich gut mit, aber vor der schriftlichen Prüfung habe ich Respekt, besonders vor den Aufgaben, die man erklären muss. Deutsch lerne ich seit zwei Jahren und habe die Prüfung B1 gemacht.

Ich würde gern wissen, wann der Kurs beginnt und wie lange er dauert. Außerdem interessiert mich, wie viel er kostet. Können die Kosten vielleicht vom Arbeitgeber übernommen werden?

Eine letzte Frage: Erhält man am Ende des Kurses ein Zertifikat?

Über eine Antwort würde ich mich sehr freuen.

Mit freundlichen Grüßen
Mahdin Islam`,
    modelNotes: {
      en: "The second paragraph is the one candidates rush. Notice that it does not just state a level — it says what specifically is hard ('die Aufgaben, die man erklären muss'), which is a relative clause earned by content rather than bolted on. The closing 'Über eine Antwort würde ich mich sehr freuen' is a phrase worth memorising whole: it works at the end of almost any formal enquiry.",
      it: "Il secondo paragrafo è quello che i candidati liquidano in fretta. Qui non si limita a dichiarare un livello: dice cosa è difficile nello specifico, con una relativa nata dal contenuto. La chiusura »Über eine Antwort würde ich mich sehr freuen« va imparata intera.",
      bn: "দ্বিতীয় অনুচ্ছেদেই পরীক্ষার্থীরা তাড়াহুড়ো করেন। খেয়াল করুন, এখানে শুধু স্তর বলা হয়নি — কোনটা কঠিন তা নির্দিষ্ট করে বলা হয়েছে ('die Aufgaben, die man erklären muss'), আর সম্বন্ধবাচক বাক্যটি বিষয়বস্তু থেকেই এসেছে, জোর করে বসানো নয়। শেষ বাক্যটি গোটা মুখস্থ করার মতো: প্রায় যেকোনো আনুষ্ঠানিক জিজ্ঞাসার শেষে চলে।",
    },
  },
];
