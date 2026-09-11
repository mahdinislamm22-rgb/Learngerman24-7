import type { SchreibenTask } from "./types";

export const tasksB: SchreibenTask[] = [
  /* ------------------------------------------------------------------ */
  {
    code: "SCH-05",
    category: "entschuldigung",
    register: "formell",
    situation: {
      en: "You missed two days of your German course because you were ill. You are writing to your teacher, Frau Keller, to explain and ask what you missed.",
      it: "Hai saltato due giorni del corso di tedesco perché eri malato. Scrivi alla tua insegnante, Frau Keller, per spiegare e chiedere cosa ti sei perso.",
      bn: "অসুস্থ থাকায় আপনি জার্মান কোর্সের দুটি দিন মিস করেছেন। আপনার শিক্ষিকা Frau Keller-কে লিখে ব্যাখ্যা করছেন এবং কী মিস হয়েছে জানতে চাইছেন।",
    },
    taskDe:
      "Sie waren zwei Tage krank und konnten nicht zum Deutschkurs kommen. Schreiben Sie eine E-Mail an Ihre Lehrerin, Frau Keller.",
    leitpunkte: [
      "Entschuldigen Sie sich und erklären Sie, warum Sie gefehlt haben",
      "Sagen Sie, wann Sie wiederkommen",
      "Fragen Sie nach den Hausaufgaben",
      "Bitten Sie um einen Termin für Fragen",
    ],
    anrede: "Sehr geehrte Frau Keller,",
    gruss: "Mit freundlichen Grüßen\n…",
    usefulPhrases: [
      {
        de: "leider konnte ich am Montag und Dienstag nicht am Unterricht teilnehmen.",
        note: {
          en: "teilnehmen AN + Dativ. A separable verb: the nehmen part goes to the end.",
          it: "teilnehmen AN + dativo. Verbo separabile: la parte nehmen va in fondo.",
          bn: "teilnehmen AN + Dativ। বিচ্ছেদযোগ্য ক্রিয়া: nehmen অংশটি শেষে যায়।",
        },
      },
      {
        de: "Ich hatte eine starke Erkältung und war beim Arzt.",
        note: {
          en: "hatte and war are Präteritum. With haben and sein, Germans use Präteritum even in speech.",
          it: "hatte e war sono Präteritum. Con haben e sein i tedeschi usano il Präteritum anche parlando.",
          bn: "hatte আর war হলো Präteritum। haben ও sein-এর ক্ষেত্রে জার্মানরা কথাতেও Präteritum ব্যবহার করে।",
        },
      },
      {
        de: "Ab Donnerstag bin ich wieder da.",
        note: {
          en: "ab + Dativ for 'from (a time) onwards'. Time first, so the verb comes second.",
          it: "ab + dativo per «da (un momento) in poi». Tempo per primo, quindi il verbo va in seconda posizione.",
          bn: "'(কোনো সময়) থেকে' বোঝাতে ab + Dativ। সময় আগে বসায় ক্রিয়া দ্বিতীয় স্থানে।",
        },
      },
      {
        de: "Könnten Sie mir bitte sagen, welche Hausaufgaben ich machen soll?",
        note: {
          en: "welche + noun in an indirect question. soll = 'am supposed to', not 'should' in the advice sense.",
          it: "welche + sostantivo in domanda indiretta. soll = «devo / si suppone che», non «dovrei» come consiglio.",
          bn: "পরোক্ষ প্রশ্নে welche + বিশেষ্য। soll = 'আমার করার কথা', পরামর্শের 'উচিত' নয়।",
        },
      },
      {
        de: "Hätten Sie nach dem Unterricht kurz Zeit für mich?",
        note: {
          en: "hätten is Konjunktiv II of haben — the polite way to ask for someone's time.",
          it: "hätten è il Konjunktiv II di haben: il modo educato di chiedere del tempo a qualcuno.",
          bn: "hätten হলো haben-এর Konjunktiv II — কারও সময় চাওয়ার ভদ্র উপায়।",
        },
      },
    ],
    targetWords: 150,
    modelAnswerDe: `Sehr geehrte Frau Keller,

leider konnte ich am Montag und am Dienstag nicht am Unterricht teilnehmen, und dafür möchte ich mich entschuldigen. Ich hatte eine starke Erkältung mit Fieber und war am Montagmorgen beim Arzt. Die Krankmeldung bringe ich Ihnen gern mit.

Inzwischen geht es mir wieder besser. Ab Donnerstag bin ich also wieder im Kurs und kann normal mitarbeiten.

Könnten Sie mir bitte sagen, welche Hausaufgaben ich nachholen soll? Eine Mitschülerin hat mir erzählt, dass Sie das Passiv erklärt haben. Genau dieses Thema finde ich schwierig, deshalb möchte ich es unbedingt nachholen.

Hätten Sie vielleicht am Donnerstag nach dem Unterricht kurz Zeit für mich? Dann könnte ich Ihnen meine Fragen direkt stellen.

Vielen Dank für Ihr Verständnis.

Mit freundlichen Grüßen
Mahdin Islam`,
    modelNotes: {
      en: "The reason is concrete (Erkältung, Fieber, beim Arzt) rather than a vague 'ich war krank' — examiners reward detail. Notice dass after erzählt sending haben to the end, and the polite Konjunktiv II chain: könnten, hätten, könnte.",
      it: "Il motivo è concreto (Erkältung, Fieber, beim Arzt) invece di un vago «ich war krank»: gli esaminatori premiano il dettaglio. Nota dass dopo erzählt che manda haben in fondo, e la catena di Konjunktiv II: könnten, hätten, könnte.",
      bn: "কারণটি সুনির্দিষ্ট (Erkältung, Fieber, beim Arzt), অস্পষ্ট 'ich war krank' নয় — পরীক্ষকরা বিস্তারিত পছন্দ করেন। খেয়াল করুন erzählt-এর পরে dass কীভাবে haben-কে শেষে পাঠায়, আর ভদ্র Konjunktiv II-এর ধারা: könnten, hätten, könnte।",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    code: "SCH-06",
    category: "wohnung",
    register: "formell",
    situation: {
      en: "You found a flat advertisement online. You want to arrange a viewing and introduce yourself as a tenant.",
      it: "Hai trovato online un annuncio per un appartamento. Vuoi fissare una visita e presentarti come inquilino.",
      bn: "অনলাইনে একটি ফ্ল্যাটের বিজ্ঞাপন পেয়েছেন। আপনি ফ্ল্যাটটি দেখার সময় ঠিক করতে চান এবং ভাড়াটে হিসেবে নিজের পরিচয় দিতে চান।",
    },
    taskDe:
      "Sie haben im Internet eine Anzeige für eine Zweizimmerwohnung gefunden. Schreiben Sie eine E-Mail an den Vermieter, Herrn Schuster.",
    leitpunkte: [
      "Woher haben Sie die Anzeige?",
      "Stellen Sie sich kurz vor (Beruf, Person)",
      "Stellen Sie zwei Fragen zur Wohnung",
      "Schlagen Sie einen Besichtigungstermin vor",
    ],
    anrede: "Sehr geehrter Herr Schuster,",
    gruss: "Mit freundlichen Grüßen\n…",
    usefulPhrases: [
      {
        de: "auf der Internetseite … habe ich Ihre Anzeige gefunden.",
        note: {
          en: "auf + Dativ for a website (a flat surface, in German logic). Position, not movement.",
          it: "auf + dativo per un sito (una superficie, nella logica tedesca). Posizione, non movimento.",
          bn: "ওয়েবসাইটের জন্য auf + Dativ (জার্মান যুক্তিতে এটি একটি তল)। অবস্থান, গতি নয়।",
        },
      },
      {
        de: "Ich bin 24 Jahre alt und mache eine Ausbildung als Fachinformatiker.",
        note: {
          en: "sein for age, NOT haben. Ich bin 24 Jahre alt — never 'ich habe 24 Jahre'.",
          it: "sein per l'età, NON haben. Ich bin 24 Jahre alt — mai «ich habe 24 Jahre».",
          bn: "বয়সের জন্য sein, haben নয়। Ich bin 24 Jahre alt — কখনোই 'ich habe 24 Jahre' নয়।",
        },
      },
      {
        de: "Ich bin Nichtraucher und habe keine Haustiere.",
        note: {
          en: "Exactly what a German landlord wants to read. kein negates a noun; nicht negates a verb.",
          it: "Esattamente ciò che un padrone di casa tedesco vuole leggere. kein nega un sostantivo, nicht un verbo.",
          bn: "জার্মান বাড়িওয়ালা ঠিক এটাই পড়তে চান। kein বিশেষ্যকে নেতিবাচক করে, nicht ক্রিয়াকে।",
        },
      },
      {
        de: "Sind die Nebenkosten in der Miete enthalten?",
        note: {
          en: "Nebenkosten (heating, water, rubbish) is the question every German asks. Warmmiete = with them.",
          it: "Le Nebenkosten (riscaldamento, acqua, spazzatura) sono la domanda che ogni tedesco fa. Warmmiete = incluse.",
          bn: "Nebenkosten (গরম করা, পানি, আবর্জনা) — এই প্রশ্নটাই প্রত্যেক জার্মান করে। Warmmiete = এগুলো সহ।",
        },
      },
      {
        de: "Wäre es möglich, die Wohnung am Samstag zu besichtigen?",
        note: {
          en: "wäre = Konjunktiv II of sein. Followed by an infinitive with zu.",
          it: "wäre = Konjunktiv II di sein. Seguito da un infinito con zu.",
          bn: "wäre = sein-এর Konjunktiv II। এরপর zu সহ infinitive।",
        },
      },
    ],
    targetWords: 150,
    modelAnswerDe: `Sehr geehrter Herr Schuster,

auf der Internetseite immowelt.de habe ich Ihre Anzeige für die Zweizimmerwohnung in der Koblenzer Straße gefunden. Die Wohnung gefällt mir sehr gut, deshalb schreibe ich Ihnen.

Kurz zu mir: Ich heiße Mahdin Islam, bin 24 Jahre alt und mache eine Ausbildung als Fachinformatiker. Ich bin Nichtraucher, habe keine Haustiere und bin ruhig. Meine Ausbildungsvergütung kann ich Ihnen gern nachweisen.

Ich hätte zwei Fragen: Sind die Nebenkosten in der Miete von 520 Euro schon enthalten? Und gibt es einen Kellerraum oder einen Platz für ein Fahrrad?

Wäre es möglich, die Wohnung am Samstag oder am Sonntag zu besichtigen? Ich bin an beiden Tagen den ganzen Tag frei und kann mich auch nach Ihnen richten.

Über eine Rückmeldung würde ich mich sehr freuen.

Mit freundlichen Grüßen
Mahdin Islam`,
    modelNotes: {
      en: "Notice deshalb in the first paragraph: it is a main-clause connector, so the verb comes straight after it (deshalb SCHREIBE ich). Compare weil, which sends the verb to the end. Getting this pair right is worth real marks — mixing them up is the most common connector mistake at B1.",
      it: "Nota deshalb nel primo paragrafo: è un connettivo di frase principale, quindi il verbo lo segue subito (deshalb SCHREIBE ich). Confronta con weil, che manda il verbo in fondo. Confonderli è l'errore di connettivo più comune al B1.",
      bn: "প্রথম অনুচ্ছেদে deshalb লক্ষ করুন: এটি প্রধান বাক্যের সংযোজক, তাই ক্রিয়া সরাসরি এর পরে আসে (deshalb SCHREIBE ich)। তুলনা করুন weil-এর সঙ্গে, যা ক্রিয়াকে শেষে পাঠায়। এই জোড়াটা গুলিয়ে ফেলাই B1-এ সংযোজক নিয়ে সবচেয়ে সাধারণ ভুল।",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    code: "SCH-07",
    category: "termin",
    register: "formell",
    situation: {
      en: "You have a doctor's appointment on Thursday but you have to work. You need to move it.",
      it: "Hai un appuntamento dal medico giovedì ma devi lavorare. Devi spostarlo.",
      bn: "বৃহস্পতিবার ডাক্তারের অ্যাপয়েন্টমেন্ট আছে, কিন্তু সেদিন আপনার কাজ পড়েছে। সময়টা বদলাতে হবে।",
    },
    taskDe:
      "Sie haben am Donnerstag einen Termin in der Praxis Dr. Neumann, können aber nicht kommen. Schreiben Sie eine E-Mail an die Praxis.",
    leitpunkte: [
      "Nennen Sie Ihren Termin (Tag und Uhrzeit)",
      "Erklären Sie, warum Sie nicht kommen können",
      "Bitten Sie um einen neuen Termin und nennen Sie mögliche Zeiten",
      "Fragen Sie, ob Sie etwas mitbringen sollen",
    ],
    anrede: "Sehr geehrtes Praxisteam,",
    gruss: "Mit freundlichen Grüßen\n…",
    usefulPhrases: [
      {
        de: "ich habe am Donnerstag, den 17. Oktober, um 10:30 Uhr einen Termin bei Ihnen.",
        note: {
          en: "Dates take Akkusativ after am … den. Give day AND time — that is Leitpunkt 1.",
          it: "Le date vogliono l'accusativo dopo am … den. Indica giorno E ora: è il Leitpunkt 1.",
          bn: "am … den-এর পরে তারিখ Akkusativ নেয়। দিন এবং সময় দুটোই বলুন — এটাই প্রথম Leitpunkt।",
        },
      },
      {
        de: "Leider muss ich an diesem Tag arbeiten.",
        note: {
          en: "an diesem Tag — Dativ after an for a point in time. Not 'in diesem Tag'.",
          it: "an diesem Tag — dativo dopo an per un momento nel tempo. Non «in diesem Tag».",
          bn: "an diesem Tag — সময়ের একটি বিন্দু বোঝাতে an-এর পরে Dativ। 'in diesem Tag' নয়।",
        },
      },
      {
        de: "Ich möchte den Termin deshalb gern verschieben.",
        note: {
          en: "verschieben = to move/postpone an appointment. absagen would mean cancelling it entirely.",
          it: "verschieben = spostare/rimandare un appuntamento. absagen significherebbe annullarlo del tutto.",
          bn: "verschieben = অ্যাপয়েন্টমেন্ট সরানো/পেছানো। absagen মানে হতো পুরোপুরি বাতিল করা।",
        },
      },
      {
        de: "Mir würde jeder Nachmittag ab 16 Uhr passen.",
        note: {
          en: "passen takes Dativ: MIR passt es. Offering concrete times is Leitpunkt 3 — 'irgendwann' loses the mark.",
          it: "passen regge il dativo: MIR passt es. Proporre orari concreti è il Leitpunkt 3.",
          bn: "passen Dativ নেয়: MIR passt es। নির্দিষ্ট সময় প্রস্তাব করাই তৃতীয় Leitpunkt — 'যেকোনো সময়' বললে নম্বর যায়।",
        },
      },
      {
        de: "Soll ich meine Versichertenkarte mitbringen?",
        note: {
          en: "mitbringen is separable: the mit goes to the end of a main clause, but stays attached after a modal.",
          it: "mitbringen è separabile: il mit va in fondo nella principale, ma resta attaccato dopo un modale.",
          bn: "mitbringen বিচ্ছেদযোগ্য: প্রধান বাক্যে mit শেষে যায়, কিন্তু মোডাল ক্রিয়ার পরে জোড়া থাকে।",
        },
      },
    ],
    targetWords: 150,
    modelAnswerDe: `Sehr geehrtes Praxisteam,

ich habe am Donnerstag, den 17. Oktober, um 10:30 Uhr einen Termin bei Dr. Neumann. Mein Name ist Mahdin Islam, geboren am 4. März 2002.

Leider muss ich an diesem Tag arbeiten, weil ein Kollege krank geworden ist und ich seine Schicht übernehmen muss. Ich kann deshalb nicht in die Praxis kommen und möchte den Termin gern verschieben.

Wäre nächste Woche ein neuer Termin möglich? Mir würde jeder Nachmittag ab 16 Uhr passen, am besten Dienstag oder Donnerstag. Freitags kann ich leider nie, weil ich dann Berufsschule habe.

Eine Frage habe ich noch: Soll ich außer meiner Versichertenkarte noch etwas mitbringen? Beim letzten Mal hatte ich einen Befund von der Augenärztin dabei.

Vielen Dank für Ihre Mühe.

Mit freundlichen Grüßen
Mahdin Islam`,
    modelNotes: {
      en: "Giving your name and date of birth in a medical email is a real-world touch that also fills out Leitpunkt 1. Two weil-clauses, both with the verb correctly at the end (geworden ist, habe). The alternatives offered are specific — 'Dienstag oder Donnerstag ab 16 Uhr' — which is what Leitpunkt 3 actually asks for.",
      it: "Dare nome e data di nascita in una email medica è un tocco realistico che completa anche il Leitpunkt 1. Due frasi con weil, entrambe con il verbo correttamente in fondo. Le alternative offerte sono precise, ed è ciò che il Leitpunkt 3 chiede davvero.",
      bn: "ডাক্তারকে লেখা ইমেইলে নাম ও জন্মতারিখ দেওয়া বাস্তবসম্মত, আবার প্রথম Leitpunkt-ও পূরণ করে। দুটি weil-বাক্য, দুটোতেই ক্রিয়া ঠিকভাবে শেষে। প্রস্তাবিত বিকল্প সময়গুলো সুনির্দিষ্ট — তৃতীয় Leitpunkt আসলে সেটাই চায়।",
    },
  },

  /* ------------------------------------------------------------------ */
  {
    code: "SCH-08",
    category: "bitte",
    register: "informell",
    situation: {
      en: "You are going on holiday for two weeks. You want to ask your neighbour Jonas to look after your flat.",
      it: "Vai in vacanza per due settimane. Vuoi chiedere al tuo vicino Jonas di occuparsi del tuo appartamento.",
      bn: "আপনি দুই সপ্তাহের ছুটিতে যাচ্ছেন। প্রতিবেশী ইওনাসকে আপনার ফ্ল্যাটটি একটু দেখে রাখতে বলতে চান।",
    },
    taskDe:
      "Sie fahren zwei Wochen in den Urlaub. Sie möchten Ihren Nachbarn Jonas um Hilfe bitten. Schreiben Sie ihm eine Nachricht.",
    leitpunkte: [
      "Sagen Sie, wann und wohin Sie fahren",
      "Bitten Sie ihn um zwei konkrete Gefallen",
      "Sagen Sie, wo der Schlüssel ist",
      "Bieten Sie ihm etwas als Dank an",
    ],
    anrede: "Hallo Jonas,",
    gruss: "Viele Grüße\n…",
    usefulPhrases: [
      {
        de: "vom 5. bis zum 19. August bin ich nicht da.",
        note: {
          en: "von … bis zu + Dativ for a period. Both articles change: vom, zum.",
          it: "von … bis zu + dativo per un periodo. Entrambi gli articoli cambiano: vom, zum.",
          bn: "একটি সময়কাল বোঝাতে von … bis zu + Dativ। দুটি আর্টিকেলই বদলায়: vom, zum।",
        },
      },
      {
        de: "Könntest du mir einen Gefallen tun?",
        note: {
          en: "könntest = du-form of Konjunktiv II. Polite even between friends.",
          it: "könntest = forma du del Konjunktiv II. Educato anche tra amici.",
          bn: "könntest = Konjunktiv II-এর du রূপ। বন্ধুদের মধ্যেও ভদ্র।",
        },
      },
      {
        de: "Könntest du bitte die Blumen gießen und den Briefkasten leeren?",
        note: {
          en: "Two concrete favours = Leitpunkt 2. Both nouns are Akkusativ objects: die Blumen, den Briefkasten.",
          it: "Due favori concreti = Leitpunkt 2. Entrambi i sostantivi sono oggetti all'accusativo.",
          bn: "দুটি সুনির্দিষ্ট অনুরোধ = দ্বিতীয় Leitpunkt। দুটি বিশেষ্যই Akkusativ কর্ম: die Blumen, den Briefkasten।",
        },
      },
      {
        de: "Den Schlüssel gebe ich dir am Freitag.",
        note: {
          en: "geben takes Dativ (dir) for the person and Akkusativ (den Schlüssel) for the thing. Two objects, two cases.",
          it: "geben regge il dativo (dir) per la persona e l'accusativo (den Schlüssel) per la cosa. Due oggetti, due casi.",
          bn: "geben ব্যক্তির জন্য Dativ (dir) আর জিনিসের জন্য Akkusativ (den Schlüssel) নেয়। দুই কর্ম, দুই কারক।",
        },
      },
      {
        de: "Ich bringe dir auf jeden Fall etwas mit.",
        note: {
          en: "mitbringen split around the sentence: bringe … mit. auf jeden Fall = definitely.",
          it: "mitbringen si separa: bringe … mit. auf jeden Fall = di sicuro.",
          bn: "mitbringen বাক্যের দুই প্রান্তে ভাগ হয়: bringe … mit। auf jeden Fall = নিশ্চিতভাবে।",
        },
      },
    ],
    targetWords: 150,
    modelAnswerDe: `Hallo Jonas,

wie geht es dir? Ich habe eine Bitte an dich. Vom 5. bis zum 19. August fahre ich nach Italien und besuche meine Familie in Rom. Ich bin also zwei Wochen nicht zu Hause.

Könntest du in dieser Zeit bitte die Blumen auf dem Balkon gießen? Sie brauchen ungefähr alle drei Tage Wasser. Und könntest du außerdem ab und zu meinen Briefkasten leeren? Sonst sieht man von draußen sofort, dass niemand da ist.

Den Schlüssel gebe ich dir am Freitagabend, wenn du zu Hause bist. Falls es dir nicht passt, lege ich ihn bei Frau Öztürk aus dem Erdgeschoss ab.

Als Dank lade ich dich nach dem Urlaub zum Essen ein, und ich bringe dir auf jeden Fall etwas aus Italien mit. Sag mir einfach, ob das für dich okay ist.

Viele Grüße
Mahdin`,
    modelNotes: {
      en: "Informal throughout: du, Hallo, Viele Grüße. Notice the reason attached to the second favour (sonst sieht man …) — giving a reason makes a request easier to say yes to, and it gives you another sentence structure to show off. falls works like wenn and also sends the verb to the end.",
      it: "Informale ovunque: du, Hallo, Viele Grüße. Nota il motivo attaccato al secondo favore (sonst sieht man …): dare una ragione rende più facile dire di sì e ti offre un'altra struttura da mostrare. falls funziona come wenn e manda il verbo in fondo.",
      bn: "পুরোটাই ঘরোয়া: du, Hallo, Viele Grüße। খেয়াল করুন দ্বিতীয় অনুরোধের সঙ্গে জুড়ে দেওয়া কারণ (sonst sieht man …) — কারণ দিলে অনুরোধে রাজি হওয়া সহজ হয়, আর আপনি আরেকটি বাক্যগঠনও দেখাতে পারেন। falls কাজ করে wenn-এর মতো, ক্রিয়াকে শেষে পাঠায়।",
    },
  },
];
