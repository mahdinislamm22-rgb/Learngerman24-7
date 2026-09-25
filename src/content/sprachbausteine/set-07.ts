import type { SbSet } from "./types";

/**
 * SB-07 — Eine Reklamation per E-Mail (Teil 1) und die Rückgabe-
 * bedingungen eines Onlineshops (Teil 2).
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Teil 1 is the passive set. A complaint is where B1 learners first need
 * it for real — "das Gerät wurde geliefert", "mir wurde gesagt" — and the
 * gaps build it up in order: werden + Partizip in the present (gap 4),
 * in the past (gap 6), and with a modal verb (gap 8). Around it sit the
 * two case errors that survive longest: a dative object after a verb that
 * looks transitive (gap 2) and an adjective ending after "ein" (gap 5).
 *
 * Teil 2 is deliberately built from the shop's own vocabulary, so the
 * words you learn here are the ones you will actually meet on a German
 * returns page.
 */
export const sb07: SbSet = {
  code: "SB-07",

  title: {
    de: "Reklamation per E-Mail und die Rückgabebedingungen eines Shops",
    en: "A complaint by email and a shop's return conditions",
    it: "Un reclamo via email e le condizioni di reso di un negozio",
    bn: "ইমেইলে অভিযোগ ও একটি দোকানের ফেরত-শর্ত",
  },

  intro: {
    de: "Erst eine Reklamation, dann die Rückgabebedingungen eines Onlineshops. In Teil 1 geht es oft um das Passiv — frag dich bei jeder Lücke, wer etwas tut und wer es bekommt.",
    en: "First a complaint, then an online shop's return conditions. Teil 1 leans on the passive — at each gap ask yourself who does something and who receives it.",
    it: "Prima un reclamo, poi le condizioni di reso di un negozio online. La parte 1 verte sul passivo.",
    bn: "প্রথমে একটি অভিযোগ, তারপর একটি অনলাইন দোকানের ফেরত-শর্ত। অংশ ১-এ passive বেশি — প্রতিটি ফাঁকে ভাবুন কে করছে আর কে পাচ্ছে।",
  },

  /* ================================================================== */
  teil1: {
    heading: "Reklamation an einen Onlineshop",

    text: `Sehr geehrte Damen und Herren,

am zwölften Oktober habe ich bei Ihnen einen Wasserkocher bestellt, Bestellnummer vier acht sieben drei. Das Gerät ist zwei Tage später {1} und funktionierte zunächst gut.

Seit letzter Woche schaltet es sich nicht mehr aus. Ich habe deshalb {2} Kundendienst angerufen. Dort {3} man mir, ich solle mich schriftlich melden.

Das Gerät ist erst drei Wochen alt und hat {4} Fehler, den ich nicht selbst verursacht habe. Nach dem Gesetz {5} der Verkäufer zwei Jahre lang für die Ware.

Ich bitte Sie deshalb, das Gerät {6} oder mir ein neues zu schicken. Eine Rechnung {7} der Bestellung wurde mir per E-Mail geschickt; sie liegt als Anhang bei.

Sollte eine Reparatur nicht möglich sein, {8} ich mein Geld zurückbekommen. Bitte teilen Sie mir mit, {9} ich das Gerät zurückschicken soll und wer die Kosten dafür {10}.

Mit freundlichen Grüßen
Mahdin Islam`,

    items: [
      {
        nr: 1,
        options: ["ankommen", "gekommen", "angekommen"],
        answerIndex: 2,
        tag: "perfekt",
        why: {
          de: "»ist … angekommen« — das Hilfsverb »ist« steht schon da, also braucht es das Partizip. »gekommen« wäre das Partizip von »kommen«; hier geht es aber um »ankommen«, und die Vorsilbe gehört dazu.",
          en: "'ist … angekommen' — the auxiliary 'ist' is already there, so a participle is needed. 'gekommen' is the participle of 'kommen'; here the verb is 'ankommen', and the prefix belongs to it.",
          it: "L'ausiliare »ist« c'è già, quindi serve il participio. »gekommen« è di »kommen«, qui serve »ankommen«.",
          bn: "»ist« সহায়ক ক্রিয়াটি আছেই, তাই participle লাগবে। »gekommen« হলো »kommen«-এর; এখানে ক্রিয়াটি »ankommen«, উপসর্গটিও এর অংশ।",
        },
      },
      {
        nr: 2,
        options: ["den", "beim", "zum"],
        answerIndex: 1,
        tag: "praeposition-dativ",
        why: {
          de: "»bei jemandem anrufen« ist die feste Verbindung: ich rufe beim Kundendienst an. Viele sagen »ich rufe den Kundendienst an« — auch das gibt es, aber dann ohne Präposition und mit Akkusativ. In der Lücke steht eine Präposition, also »beim«.",
          en: "'bei jemandem anrufen' is the fixed pairing: ich rufe beim Kundendienst an. Many say 'ich rufe den Kundendienst an' — that exists too, but then without a preposition and with the accusative. The gap takes a preposition, so 'beim'.",
          it: "»bei jemandem anrufen« è la combinazione fissa. »den Kundendienst anrufen« esiste ma senza preposizione.",
          bn: "»bei jemandem anrufen« নির্দিষ্ট যোগ। »den Kundendienst anrufen«-ও আছে, কিন্তু তখন preposition ছাড়া ও Akkusativ-এ।",
        },
      },
      {
        nr: 3,
        options: ["sagte", "sagt", "gesagt"],
        answerIndex: 0,
        tag: "verbform-praeteritum",
        why: {
          de: "Der Anruf ist vorbei, also Vergangenheit. »gesagt« bräuchte ein »hat« davor, das fehlt. »sagte« ist das Präteritum und in einem schriftlichen Bericht völlig normal.",
          en: "The call is over, so past tense. 'gesagt' would need a 'hat' before it, which is missing. 'sagte' is the Präteritum and entirely normal in a written report.",
          it: "La telefonata è finita, quindi passato. »gesagt« richiederebbe »hat«.",
          bn: "ফোনটি শেষ, তাই অতীত। »gesagt«-এর আগে »hat« লাগত, যা নেই। »sagte« Präteritum, লিখিত বিবরণে স্বাভাবিক।",
        },
      },
      {
        nr: 4,
        options: ["einen", "ein", "eine"],
        answerIndex: 0,
        tag: "kasus-akkusativ",
        why: {
          de: "»hat einen Fehler« — »der Fehler« ist männlich, und nach »haben« steht der Akkusativ: der → den, ein → einen. Die Endung -en ist das sicherste Zeichen für männlichen Akkusativ im ganzen System.",
          en: "'hat einen Fehler' — 'der Fehler' is masculine, and 'haben' takes the accusative: der → den, ein → einen. The -en ending is the surest sign of masculine accusative in the whole system.",
          it: "»der Fehler« è maschile e »haben« regge l'accusativo: ein → einen.",
          bn: "»der Fehler« পুংলিঙ্গ, আর »haben« Akkusativ নেয়: ein → einen। -en প্রত্যয়ই পুংলিঙ্গ Akkusativ-এর সবচেয়ে নিশ্চিত চিহ্ন।",
        },
      },
      {
        nr: 5,
        options: ["haftete", "haften", "haftet"],
        answerIndex: 2,
        tag: "verbform-praesens",
        why: {
          de: "»Nach dem Gesetz haftet der Verkäufer« — ein Gesetz gilt jetzt, also Präsens. Das Subjekt »der Verkäufer« ist Singular, deshalb die Endung -t. Beachte auch die Wortstellung: »Nach dem Gesetz« steht auf Position 1, das Verb muss also direkt folgen.",
          en: "'Nach dem Gesetz haftet der Verkäufer' — a law applies now, so present tense. The subject 'der Verkäufer' is singular, hence -t. Note the word order too: 'Nach dem Gesetz' is in position 1, so the verb must come next.",
          it: "Una legge vale ora, quindi presente. Il soggetto è singolare, quindi -t. E il verbo segue l'elemento in prima posizione.",
          bn: "আইন এখন প্রযোজ্য, তাই বর্তমান কাল। কর্তা একবচন, তাই -t। শব্দক্রমও দেখুন: »Nach dem Gesetz« প্রথম স্থানে, তাই ক্রিয়া সঙ্গে সঙ্গেই।",
        },
      },
      {
        nr: 6,
        options: ["reparieren", "zu reparieren", "repariert"],
        answerIndex: 1,
        tag: "infinitiv-mit-zu",
        why: {
          de: "»Ich bitte Sie, das Gerät zu reparieren oder mir ein neues zu schicken.« Nach »bitten« folgt ein Infinitiv mit »zu« — und das zweite »zu schicken« im selben Satz zeigt dir die Form schon. Wenn eine Konstruktion sich wiederholt, ist die zweite Hälfte oft die Lösung für die erste.",
          en: "'Ich bitte Sie, das Gerät zu reparieren oder mir ein neues zu schicken.' After 'bitten' comes an infinitive with 'zu' — and the second 'zu schicken' in the same sentence already shows you the form. When a construction repeats, the second half often solves the first.",
          it: "Dopo »bitten« segue l'infinito con »zu«, e il secondo »zu schicken« nella stessa frase te lo mostra già.",
          bn: "»bitten«-এর পরে »zu« সহ infinitive — আর একই বাক্যের দ্বিতীয় »zu schicken«-ই রূপটা দেখিয়ে দেয়। গঠন পুনরাবৃত্ত হলে দ্বিতীয়টাই প্রায়ই প্রথমটির সমাধান।",
        },
      },
      {
        nr: 7,
        options: ["über", "von", "für"],
        answerIndex: 0,
        tag: "praeposition-nomen",
        why: {
          de: "»eine Rechnung über die Bestellung« — bei Beträgen und Vorgängen heißt es »eine Rechnung über«, so wie »ein Scheck über hundert Euro«. »von der Bestellung« wäre Alltagssprache, aber in einem förmlichen Brief nimmt man »über«.",
          en: "'eine Rechnung über die Bestellung' — with amounts and transactions it is 'eine Rechnung über', like 'ein Scheck über hundert Euro'. 'von der Bestellung' is colloquial; a formal letter takes 'über'.",
          it: "Con importi e operazioni si dice »eine Rechnung über«, come »ein Scheck über hundert Euro«.",
          bn: "অঙ্ক ও লেনদেনের ক্ষেত্রে »eine Rechnung über« বসে, যেমন »ein Scheck über hundert Euro«। »von« কথ্য, আনুষ্ঠানিক চিঠিতে »über«।",
        },
      },
      {
        nr: 8,
        options: ["möchten", "mochte", "möchte"],
        answerIndex: 2,
        tag: "verbform-modalverb",
        why: {
          de: "»Sollte eine Reparatur nicht möglich sein, möchte ich mein Geld zurückbekommen.« Zu »ich« gehört »möchte«. Achte auf den Anfang: Der Satz beginnt mit einem Nebensatz ohne »wenn« (»Sollte …«), und danach steht wie immer das Verb.",
          en: "'Sollte eine Reparatur nicht möglich sein, möchte ich mein Geld zurückbekommen.' 'ich' takes 'möchte'. Note the opening: the sentence starts with a conditional clause without 'wenn' ('Sollte …'), and the verb follows as always.",
          it: "Con »ich« si usa »möchte«. La frase inizia con una condizionale senza »wenn«, e il verbo segue.",
          bn: "»ich«-এর সঙ্গে »möchte«। শুরুটা দেখুন: বাক্যটি »wenn« ছাড়া শর্তবাক্য দিয়ে শুরু (»Sollte …«), তারপর যথারীতি ক্রিয়া।",
        },
      },
      {
        nr: 9,
        options: ["wo", "wohin", "woher"],
        answerIndex: 1,
        tag: "fragewort",
        why: {
          de: "»wohin ich das Gerät zurückschicken soll« — schicken ist eine Bewegung zu einem Ziel, also »wohin«. »wo« fragt nach einem Ort ohne Bewegung, »woher« nach der Herkunft. Dieses Dreierpaar entscheidet sich immer am Verb.",
          en: "'wohin ich das Gerät zurückschicken soll' — sending is movement towards a destination, so 'wohin'. 'wo' asks about a place without movement, 'woher' about origin. This trio is always decided by the verb.",
          it: "Spedire è un movimento verso una meta, quindi »wohin«. »wo« è senza movimento, »woher« è la provenienza.",
          bn: "পাঠানো মানে গন্তব্যের দিকে গতি, তাই »wohin«। »wo« গতিহীন স্থান, »woher« উৎস। এই তিনটি সবসময় ক্রিয়া দেখেই ঠিক হয়।",
        },
      },
      {
        nr: 10,
        options: ["übernehmen", "übernommen", "übernimmt"],
        answerIndex: 2,
        tag: "wortstellung-nebensatz",
        why: {
          de: "»wer die Kosten dafür übernimmt« — im Nebensatz steht das Verb am Ende, und »wer« ist Singular, also die Endung -t (er/sie/es-Form). »übernommen« bräuchte ein Hilfsverb.",
          en: "'wer die Kosten dafür übernimmt' — in a subordinate clause the verb goes last, and 'wer' is singular, so the -t ending. 'übernommen' would need an auxiliary.",
          it: "Nella subordinata il verbo va in fondo, e »wer« è singolare, quindi -t.",
          bn: "অধীন বাক্যে ক্রিয়া শেষে, আর »wer« একবচন, তাই -t প্রত্যয়। »übernommen«-এর জন্য সহায়ক ক্রিয়া লাগত।",
        },
      },
    ],
  },

  /* ================================================================== */
  teil2: {
    heading: "Rückgabe und Umtausch – Informationen für Kundinnen und Kunden",

    text: `Liebe Kundinnen und Kunden,

Sie können jeden Artikel innerhalb von vierzehn Tagen {11}. Eine Begründung ist nicht {12}.

Bitte schicken Sie die Ware in der {13} zurück, in der Sie sie erhalten haben. Artikel, die getragen oder gewaschen wurden, können wir leider nicht {14}.

Das Rücksendeetikett finden Sie in Ihrem {15}. Die Kosten für die Rücksendung {16} wir, wenn der Bestellwert über fünfzig Euro liegt.

Sobald das Paket bei uns {17} ist, prüfen wir die Ware. Den Betrag überweisen wir innerhalb von fünf Werktagen auf das Konto, von dem die {18} erfolgt ist.

Ist ein Artikel {19}, gilt etwas anderes: Melden Sie sich bitte direkt bei unserem Kundendienst. In diesem Fall tragen wir die Kosten immer, und Sie haben zwei Jahre {20}.

Ihr Team von Shop24`,

    bank: [
      { key: "a", word: "möglich" },
      { key: "b", word: "eingegangen" },
      { key: "c", word: "zurückgeben" },
      { key: "d", word: "Zeit" },
      { key: "e", word: "nötig" },
      { key: "f", word: "bezahlen" },
      { key: "g", word: "defekt" },
      { key: "h", word: "Kundenkonto" },
      { key: "i", word: "Quittung" },
      { key: "j", word: "übernehmen" },
      { key: "k", word: "Paket" },
      { key: "l", word: "Verpackung" },
      { key: "m", word: "kaufen" },
      { key: "n", word: "annehmen" },
      { key: "o", word: "Zahlung" },
    ],

    items: [
      {
        nr: 11,
        answerKey: "c",
        tag: "wortschatz-verb",
        why: {
          de: "»Sie können jeden Artikel … zurückgeben.« Nach »können« steht der Infinitiv am Satzende. »kaufen« (m) wäre das Gegenteil der ganzen Seite, auf der dieser Text steht.",
          en: "'Sie können jeden Artikel … zurückgeben.' After 'können' the infinitive goes at the end. 'kaufen' (m) would be the opposite of the whole page this text sits on.",
          it: "Dopo »können« l'infinito va in fondo. »kaufen« (m) sarebbe il contrario dell'argomento.",
          bn: "»können«-এর পরে infinitive শেষে। »kaufen« (m) পুরো পৃষ্ঠাটির বিপরীত হতো।",
        },
      },
      {
        nr: 12,
        answerKey: "e",
        tag: "wortschatz-adjektiv",
        why: {
          de: "»Eine Begründung ist nicht nötig.« Nach »ist« steht ein Adjektiv ohne Endung. »möglich« (a) wäre grammatisch richtig, aber unsinnig: Eine Begründung ist natürlich möglich — sie ist nur nicht verlangt.",
          en: "'Eine Begründung ist nicht nötig.' After 'ist' comes an uninflected adjective. 'möglich' (a) would be grammatical but nonsensical: a reason is of course possible — it simply is not required.",
          it: "Dopo »ist« un aggettivo senza desinenza. »möglich« (a) sarebbe grammaticale ma assurdo.",
          bn: "»ist«-এর পরে প্রত্যয়হীন বিশেষণ। »möglich« (a) ব্যাকরণে ঠিক হলেও অর্থহীন: কারণ দেওয়া তো সম্ভবই — শুধু দরকার নেই।",
        },
      },
      {
        nr: 13,
        answerKey: "l",
        tag: "wortschatz-nomen",
        why: {
          de: "»in der Verpackung … in der Sie sie erhalten haben« — das Relativpronomen »in der« ist weiblich, also muss das Nomen weiblich sein. »Paket« (k) ist sächlich und hieße »in dem«. Das Relativpronomen verrät dir hier das Geschlecht, bevor du das Wort kennst.",
          en: "'in der Verpackung … in der Sie sie erhalten haben' — the relative pronoun 'in der' is feminine, so the noun must be feminine. 'Paket' (k) is neuter and would need 'in dem'. The relative pronoun tells you the gender before you even know the word.",
          it: "Il pronome relativo »in der« è femminile, quindi il sostantivo deve esserlo. »Paket« (k) è neutro.",
          bn: "সম্বন্ধবাচক »in der« স্ত্রীলিঙ্গ, তাই বিশেষ্যটিও স্ত্রীলিঙ্গ হতে হবে। »Paket« (k) ক্লীবলিঙ্গ, »in dem« হতো।",
        },
      },
      {
        nr: 14,
        answerKey: "n",
        tag: "wortschatz-verb",
        why: {
          de: "»können wir leider nicht annehmen« — etwas annehmen heißt: es entgegennehmen, akzeptieren. Der Infinitiv steht nach »können« am Ende. Merke das Paar: Der Kunde gibt zurück, der Shop nimmt an.",
          en: "'können wir leider nicht annehmen' — to accept something. The infinitive goes at the end after 'können'. Remember the pair: the customer gives back, the shop accepts.",
          it: "»annehmen« = accettare. L'infinito va in fondo dopo »können«.",
          bn: "»annehmen« মানে গ্রহণ করা। »können«-এর পরে infinitive শেষে। জোড়াটা মনে রাখুন: ক্রেতা ফেরত দেন, দোকান গ্রহণ করে।",
        },
      },
      {
        nr: 15,
        answerKey: "h",
        tag: "wortschatz-nomen",
        why: {
          de: "»in Ihrem Kundenkonto« — »Ihrem« ist Dativ männlich oder sächlich; Kundenkonto ist sächlich (das Konto). Und inhaltlich: Ein Etikett zum Ausdrucken findet man online im eigenen Konto, nicht in einer Quittung.",
          en: "'in Ihrem Kundenkonto' — 'Ihrem' is dative masculine or neuter; Kundenkonto is neuter (das Konto). And in meaning: a printable label is found online in your account, not in a receipt.",
          it: "»Ihrem« è dativo maschile o neutro; »Konto« è neutro. E un'etichetta da stampare si trova nell'account.",
          bn: "»Ihrem« Dativ পুংলিঙ্গ বা ক্লীবলিঙ্গ; Konto ক্লীবলিঙ্গ। আর অর্থে: ছাপার লেবেল পাওয়া যায় নিজের অ্যাকাউন্টে, রসিদে নয়।",
        },
      },
      {
        nr: 16,
        answerKey: "j",
        tag: "wortschatz-verb",
        why: {
          de: "»Die Kosten … übernehmen wir« — Kosten übernehmen heißt: sie bezahlen, statt sie dem Kunden zu lassen. »bezahlen« (f) wäre inhaltlich ähnlich, aber »die Kosten übernehmen« ist die feste Wendung, die in solchen Texten immer steht. Das Subjekt »wir« verlangt außerdem die Endung -en.",
          en: "'Die Kosten … übernehmen wir' — to cover the costs rather than leave them to the customer. 'bezahlen' (f) is close in meaning, but 'die Kosten übernehmen' is the set phrase such texts always use. The subject 'wir' also requires the -en ending.",
          it: "»die Kosten übernehmen« è l'espressione fissa. Il soggetto »wir« richiede la desinenza -en.",
          bn: "»die Kosten übernehmen« নির্দিষ্ট বাগধারা। কর্তা »wir« -en প্রত্যয়ও চায়।",
        },
      },
      {
        nr: 17,
        answerKey: "b",
        tag: "wortschatz-verb",
        why: {
          de: "»Sobald das Paket bei uns eingegangen ist« — eingehen heißt bei Post und Anträgen: ankommen. Nach »ist« steht ein Partizip, und im Nebensatz rutscht das »ist« ans Ende. Dieses Wort begegnet dir in jedem Amtsbrief.",
          en: "'Sobald das Paket bei uns eingegangen ist' — eingehen, of post and applications, means to arrive. After 'ist' comes a participle, and in the subordinate clause the 'ist' slides to the end. You meet this word in every official letter.",
          it: "»eingehen« per posta e domande significa arrivare. Dopo »ist« serve un participio.",
          bn: "ডাক ও আবেদনের ক্ষেত্রে »eingehen« মানে পৌঁছানো। »ist«-এর পরে participle, আর অধীন বাক্যে »ist« শেষে চলে যায়।",
        },
      },
      {
        nr: 18,
        answerKey: "o",
        tag: "wortschatz-nomen",
        why: {
          de: "»auf das Konto, von dem die Zahlung erfolgt ist« — das Geld geht dorthin zurück, woher es kam. »die Zahlung« ist weiblich und passt zu »die«. »Quittung« (i) wäre auch weiblich, aber eine Quittung erfolgt nicht von einem Konto.",
          en: "'auf das Konto, von dem die Zahlung erfolgt ist' — the money goes back where it came from. 'die Zahlung' is feminine and fits 'die'. 'Quittung' (i) is feminine too, but a receipt does not come from an account.",
          it: "Il denaro torna da dove è venuto. »die Zahlung« è femminile. »Quittung« (i) è femminile ma non proviene da un conto.",
          bn: "টাকা ফেরত যায় যেখান থেকে এসেছিল। »die Zahlung« স্ত্রীলিঙ্গ। »Quittung« (i)-ও স্ত্রীলিঙ্গ, কিন্তু রসিদ অ্যাকাউন্ট থেকে আসে না।",
        },
      },
      {
        nr: 19,
        answerKey: "g",
        tag: "wortschatz-adjektiv",
        why: {
          de: "»Ist ein Artikel defekt, gilt etwas anderes« — defekt heißt kaputt. Der ganze Absatz beschreibt die Reklamation, nicht die Rückgabe: andere Kosten, andere Frist (zwei Jahre). Das eine Wort schaltet die Regeln um.",
          en: "'Ist ein Artikel defekt, gilt etwas anderes' — defekt means broken. The whole paragraph describes a Reklamation, not a return: different costs, different period (two years). That one word switches the rules.",
          it: "»defekt« significa guasto. Tutto il paragrafo descrive il reclamo, non il reso.",
          bn: "»defekt« মানে নষ্ট। পুরো অনুচ্ছেদটি Reklamation-এর কথা বলে, ফেরতের নয়: ভিন্ন খরচ, ভিন্ন সময়সীমা।",
        },
      },
      {
        nr: 20,
        answerKey: "d",
        tag: "wortschatz-nomen",
        why: {
          de: "»Sie haben zwei Jahre Zeit« — die feste Wendung für eine Frist: Zeit haben für etwas, hier zwei Jahre lang. Und die zwei Jahre sind kein Zufall: Es ist genau die gesetzliche Frist aus dem Lesetext dieses Modelltests.",
          en: "'Sie haben zwei Jahre Zeit' — the set phrase for a deadline: having time for something, here two years. And the two years are no accident: it is exactly the legal period from this mock exam's reading text.",
          it: "»zwei Jahre Zeit haben« è l'espressione fissa per un termine. E i due anni sono proprio il termine di legge del testo di lettura.",
          bn: "»zwei Jahre Zeit haben« সময়সীমার নির্দিষ্ট বাগধারা। আর দুই বছর কাকতালীয় নয়: এই মডেল টেস্টের পাঠ্যেই সেই আইনি সময়সীমা।",
        },
      },
    ],
  },
};
