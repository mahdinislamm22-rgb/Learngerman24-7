import type { SbSet } from "./types";

/**
 * SB-05 — Ein Brief über die Berufswahl (Teil 1) und ein Kurstext über
 * Weiterbildung (Teil 2).
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Teil 1 is the first set in this series to lean on comparison and
 * relative clauses — the two structures that separate a solid B1 from an
 * A2 pretending to be one:
 *   · comparative and superlative (gaps 2 and 8),
 *   · a relative pronoun whose case comes from its own clause, not from
 *     the noun it refers back to (gap 5) — the single most misunderstood
 *     rule at this level,
 *   · um … zu versus damit (gap 7), decided by whether the subject
 *     stays the same.
 *
 * Teil 2's bank includes two verbs that differ only by prefix
 * (»stellen« / »einstellen«), because in official German the prefix is
 * usually where the meaning lives.
 */
export const sb05: SbSet = {
  code: "SB-05",

  title: {
    de: "Brief über die Berufswahl und ein Text über Weiterbildung",
    en: "A letter about choosing a career and a text on further training",
    it: "Una lettera sulla scelta professionale e un testo sulla formazione",
    bn: "পেশা বাছাই নিয়ে চিঠি ও উচ্চতর প্রশিক্ষণ নিয়ে একটি লেখা",
  },

  intro: {
    de: "Erst ein halbformeller Brief an einen Bekannten, dann ein Informationstext. In Teil 1 geht es oft um Vergleiche und Nebensätze — lies bis zum Satzende, bevor du wählst.",
    en: "First a semi-formal letter to an acquaintance, then an information text. Teil 1 leans on comparisons and subordinate clauses — read to the end of the sentence before choosing.",
    it: "Prima una lettera semiformale a un conoscente, poi un testo informativo. La parte 1 verte su confronti e subordinate.",
    bn: "প্রথমে এক পরিচিতজনকে আধা-আনুষ্ঠানিক চিঠি, তারপর একটি তথ্যমূলক লেখা। অংশ ১-এ তুলনা ও অধীন বাক্য বেশি — বেছে নেওয়ার আগে বাক্য শেষ পর্যন্ত পড়ুন।",
  },

  /* ================================================================== */
  teil1: {
    heading: "Brief an einen Bekannten",

    text: `Lieber Herr Wagner,

vielen Dank für Ihren Rat beim letzten Gespräch. Ich habe lange darüber {1} und mich jetzt entschieden.

Ein Studium wäre für mich {2} als eine Ausbildung, denn ich müsste drei Jahre ohne Einkommen leben. Deshalb bewerbe ich mich um einen Ausbildungsplatz.

Sie hatten mir eine Firma empfohlen, {3} Sie früher gearbeitet haben. Dort habe ich angerufen. Die Kollegin, {4} ich gesprochen habe, war sehr freundlich. Sie hat mir eine Adresse gegeben, {5} ich meine Unterlagen schicken soll.

Am Montag fahre ich nach Köln, {6} mir den Betrieb anzusehen. Ich nehme meinen Lebenslauf mit, {7} sie gleich sehen können, was ich bisher gemacht habe.

Das {8} Problem ist immer noch die Sprache. Aber seit ich jeden Tag eine Stunde übe, {9} es deutlich besser.

Ich melde mich wieder, {10} ich eine Antwort habe.

Herzliche Grüße
Mahdin Islam`,

    items: [
      {
        nr: 1,
        options: ["nachgedacht", "nachdenken", "gedacht"],
        answerIndex: 0,
        tag: "perfekt",
        why: {
          de: "»Ich habe … nachgedacht« — nach »habe« steht das Partizip. »über etwas nachdenken« ist die feste Verbindung; »gedacht« allein passt zu »denken an«, nicht zu »nachdenken über«.",
          en: "'Ich habe … nachgedacht' — after 'habe' comes the participle. 'über etwas nachdenken' is the fixed pairing; 'gedacht' alone belongs to 'denken an', not 'nachdenken über'.",
          it: "Dopo »habe« serve il participio. »über etwas nachdenken« è la combinazione fissa.",
          bn: "»habe«-এর পরে participle বসে। »über etwas nachdenken« নির্দিষ্ট যোগ; একা »gedacht« »denken an«-এর সঙ্গে যায়।",
        },
      },
      {
        nr: 2,
        options: ["schwierig", "schwieriger", "am schwierigsten"],
        answerIndex: 1,
        tag: "komparativ",
        why: {
          de: "Das »als« nach der Lücke verrät alles: Nach »als« steht immer ein Komparativ. Merke die drei Formen: schwierig – schwieriger als – am schwierigsten. Ein Superlativ mit »als« gibt es nicht.",
          en: "The 'als' after the gap gives it away: after 'als' there is always a comparative. Remember the three forms: schwierig – schwieriger als – am schwierigsten. A superlative with 'als' does not exist.",
          it: "L'»als« dopo il buco rivela tutto: dopo »als« c'è sempre un comparativo.",
          bn: "ফাঁকের পরের »als«-ই সব বলে দেয়: »als«-এর পরে সবসময় তুলনামূলক রূপ। তিনটি রূপ মনে রাখুন: schwierig – schwieriger als – am schwierigsten।",
        },
      },
      {
        nr: 3,
        options: ["die", "der", "bei der"],
        answerIndex: 2,
        tag: "relativsatz",
        why: {
          de: "»eine Firma, bei der Sie gearbeitet haben« — man arbeitet BEI einer Firma, und »bei« verlangt Dativ: bei der. Die Präposition im Relativsatz richtet sich nach dem Verb dort, nicht nach dem Hauptsatz.",
          en: "'eine Firma, bei der Sie gearbeitet haben' — you work AT a company, and 'bei' takes the dative: bei der. The preposition in a relative clause follows the verb inside it, not the main clause.",
          it: "»bei der Sie gearbeitet haben«: si lavora PRESSO un'azienda, e »bei« regge il dativo.",
          bn: "»bei der Sie gearbeitet haben« — কোম্পানিতে (BEI) কাজ করা হয়, আর »bei« Dativ চায়। সম্বন্ধবাচক বাক্যের preposition সেই বাক্যের ক্রিয়া অনুযায়ী ঠিক হয়।",
        },
      },
      {
        nr: 4,
        options: ["die", "mit der", "der"],
        answerIndex: 1,
        tag: "relativsatz",
        why: {
          de: "»sprechen mit jemandem« — also mit + Dativ, und weil »die Kollegin« weiblich ist: mit der. Dieselbe Regel wie eben, nur mit einem anderen Verb. Frag dich immer: Welche Präposition verlangt das Verb IM Relativsatz?",
          en: "'sprechen mit jemandem' — so mit + dative, and since 'die Kollegin' is feminine: mit der. The same rule as just now, with a different verb. Always ask: which preposition does the verb INSIDE the relative clause need?",
          it: "»sprechen mit jemandem«: mit + dativo, e »die Kollegin« è femminile, quindi »mit der«.",
          bn: "»sprechen mit jemandem« — mit + Dativ, আর »die Kollegin« স্ত্রীলিঙ্গ বলে: mit der। সবসময় ভাবুন: সম্বন্ধবাচক বাক্যের ভেতরের ক্রিয়া কোন preposition চায়?",
        },
      },
      {
        nr: 5,
        options: ["die", "der", "an die"],
        answerIndex: 2,
        tag: "relativsatz",
        why: {
          de: "»eine Adresse, an die ich meine Unterlagen schicken soll« — schicken AN + Akkusativ, weil etwas irgendwohin geht. Achte auf den Unterschied zu Lücke 3 und 4: dort Dativ (Ort), hier Akkusativ (Richtung). Der Kasus kommt vom Verb im Relativsatz, nie vom Wort »Adresse«.",
          en: "'eine Adresse, an die ich meine Unterlagen schicken soll' — schicken AN + accusative, because something is going somewhere. Note the difference from gaps 3 and 4: dative there (place), accusative here (direction). The case comes from the verb in the relative clause, never from the word 'Adresse'.",
          it: "»schicken AN« + accusativo, perché qualcosa va verso un luogo. A differenza dei buchi 3 e 4, dove c'era il dativo.",
          bn: "»schicken AN« + Akkusativ, কারণ কিছু কোথাও যাচ্ছে। ৩ ও ৪ নম্বরের সঙ্গে পার্থক্য দেখুন: সেখানে Dativ (স্থান), এখানে Akkusativ (দিক)। কারক আসে সম্বন্ধবাচক বাক্যের ক্রিয়া থেকে, »Adresse« শব্দ থেকে নয়।",
        },
      },
      {
        nr: 6,
        options: ["um", "damit", "für"],
        answerIndex: 0,
        tag: "finalsatz",
        why: {
          de: "»fahre ich nach Köln, um mir den Betrieb anzusehen« — das »zu« vor »anzusehen« verlangt »um«. Die Regel: gleiches Subjekt (ich fahre, ich sehe an) → um … zu.",
          en: "'fahre ich nach Köln, um mir den Betrieb anzusehen' — the 'zu' in 'anzusehen' requires 'um'. The rule: same subject (I travel, I look) → um … zu.",
          it: "Lo »zu« in »anzusehen« richiede »um«. La regola: stesso soggetto → um … zu.",
          bn: "»anzusehen«-এর »zu«-ই »um« দাবি করে। নিয়ম: একই কর্তা (আমি যাচ্ছি, আমি দেখছি) → um … zu।",
        },
      },
      {
        nr: 7,
        options: ["um", "weil", "damit"],
        answerIndex: 2,
        tag: "finalsatz",
        why: {
          de: "Hier wechselt das Subjekt: ICH nehme mit, damit SIE sehen können. Bei verschiedenen Subjekten geht nur »damit«. Vergleiche mit Lücke 6 — dieselbe Absicht, aber ein anderes Subjekt, also ein anderes Wort.",
          en: "Here the subject changes: I take it so that THEY can see. With different subjects only 'damit' works. Compare gap 6 — same purpose, different subject, so a different word.",
          it: "Qui il soggetto cambia: IO porto, affinché LORO vedano. Con soggetti diversi serve »damit«.",
          bn: "এখানে কর্তা বদলায়: আমি নিচ্ছি, যাতে তারা দেখতে পারে। ভিন্ন কর্তা হলে কেবল »damit« চলে। ৬ নম্বরের সঙ্গে মিলিয়ে দেখুন।",
        },
      },
      {
        nr: 8,
        options: ["größer", "größte", "groß"],
        answerIndex: 1,
        tag: "superlativ",
        why: {
          de: "»Das größte Problem« — vor einem Nomen mit »das« steht der Superlativ mit Endung: das größte, der größte, die größte. »größer« bräuchte ein »als«, und das steht hier nicht.",
          en: "'Das größte Problem' — before a noun with 'das' the superlative takes an ending: das größte. 'größer' would need an 'als', which is not there.",
          it: "»Das größte Problem«: davanti a un sostantivo con »das« il superlativo prende la desinenza.",
          bn: "»Das größte Problem« — »das« সহ বিশেষ্যের আগে superlative প্রত্যয়সহ বসে। »größer« হলে একটা »als« লাগত, যা এখানে নেই।",
        },
      },
      {
        nr: 9,
        options: ["wird", "werden", "ist"],
        answerIndex: 0,
        tag: "wortstellung-hauptsatz",
        why: {
          de: "»Aber seit ich jeden Tag übe, wird es deutlich besser.« Nach dem Nebensatz und Komma steht das Verb, und zu »es« gehört »wird«. »besser werden« beschreibt eine Veränderung — »ist« wäre ein Zustand und würde das »seit« sinnlos machen.",
          en: "'Aber seit ich jeden Tag übe, wird es deutlich besser.' After the subordinate clause and comma comes the verb, and 'es' takes 'wird'. 'besser werden' describes a change — 'ist' would be a state and would make the 'seit' pointless.",
          it: "Dopo la subordinata e la virgola viene il verbo, e con »es« si usa »wird«. »besser werden« indica un cambiamento.",
          bn: "অধীন বাক্য ও কমার পরে ক্রিয়া, আর »es«-এর সঙ্গে »wird«। »besser werden« পরিবর্তন বোঝায় — »ist« হতো অবস্থা, তাতে »seit« অর্থহীন হয়ে যেত।",
        },
      },
      {
        nr: 10,
        options: ["obwohl", "sobald", "trotzdem"],
        answerIndex: 1,
        tag: "konnektor-nebensatz",
        why: {
          de: "»Ich melde mich wieder, sobald ich eine Antwort habe.« — sobald = in dem Moment, in dem. »obwohl« wäre ein Gegensatz und ergäbe keinen Sinn, »trotzdem« ist kein Nebensatzwort und würde das Verb nicht ans Ende schicken.",
          en: "'Ich melde mich wieder, sobald ich eine Antwort habe.' — sobald = as soon as. 'obwohl' would be a contrast and make no sense; 'trotzdem' does not introduce a subordinate clause and would not send the verb to the end.",
          it: "»sobald« = non appena. »trotzdem« non introduce una subordinata.",
          bn: "»sobald« = যেই মুহূর্তে। »obwohl« বৈপরীত্য বোঝাত, অর্থহীন হতো; »trotzdem« অধীন বাক্য আনে না, ক্রিয়াকে শেষে পাঠাত না।",
        },
      },
    ],
  },

  /* ================================================================== */
  teil2: {
    heading: "Weiterbildung – Informationen der Volkshochschule",

    text: `Liebe Interessentinnen und Interessenten,

eine Weiterbildung lohnt sich in fast jedem Alter. Wer heute einen {11} erwirbt, verbessert seine Chancen auf dem Arbeitsmarkt deutlich.

Unsere Kurse finden am Abend und am Wochenende statt, damit Sie sie neben dem {12} besuchen können. Die meisten dauern zwischen drei Monaten und einem Jahr.

Viele Arbeitgeber {13} sich an den Kosten, manche zahlen sie sogar vollständig. Fragen Sie in Ihrer Firma nach, bevor Sie den {14} unterschreiben.

Wenn Sie arbeitslos sind, kann die Agentur für Arbeit die Weiterbildung {15}. Dafür brauchen Sie einen Bildungsgutschein, den Sie dort {16} müssen.

Am Ende jedes Kurses steht eine {17}. Wer sie besteht, erhält ein Zertifikat. Wer sie nicht besteht, kann sie einmal {18}.

Unsere Beraterinnen helfen Ihnen gern, den passenden Kurs zu {19}. Ein erstes Gespräch ist immer {20}.

Ihre Volkshochschule Siegen`,

    bank: [
      { key: "a", word: "Prüfung" },
      { key: "b", word: "wiederholen" },
      { key: "c", word: "Aufgabe" },
      { key: "d", word: "Abschluss" },
      { key: "e", word: "Vertrag" },
      { key: "f", word: "verdienen" },
      { key: "g", word: "finden" },
      { key: "h", word: "teuer" },
      { key: "i", word: "verlieren" },
      { key: "j", word: "beteiligen" },
      { key: "k", word: "beantragen" },
      { key: "l", word: "Unterricht" },
      { key: "m", word: "kostenlos" },
      { key: "n", word: "Beruf" },
      { key: "o", word: "bezahlen" },
    ],

    items: [
      {
        nr: 11,
        answerKey: "d",
        tag: "wortschatz-nomen",
        why: {
          de: "»Wer heute einen Abschluss erwirbt« — einen Abschluss erwerben ist die übliche Verbindung. »einen« zeigt männlich oder sächlich im Akkusativ; »Prüfung« (a) ist weiblich und hieße »eine«.",
          en: "'Wer heute einen Abschluss erwirbt' — erwerben pairs with Abschluss. 'einen' marks masculine accusative; 'Prüfung' (a) is feminine and would need 'eine'.",
          it: "»einen Abschluss erwerben« è la combinazione usuale. »einen« indica maschile accusativo.",
          bn: "»einen Abschluss erwerben« প্রচলিত যোগ। »einen« পুংলিঙ্গ Akkusativ বোঝায়; »Prüfung« (a) স্ত্রীলিঙ্গ, »eine« হতো।",
        },
      },
      {
        nr: 12,
        answerKey: "n",
        tag: "wortschatz-nomen",
        why: {
          de: "»neben dem Beruf« ist die feste Wendung für: zusätzlich zur Arbeit. »Unterricht« (l) wäre unsinnig — man besucht die Kurse ja nicht neben dem Unterricht, die Kurse SIND der Unterricht.",
          en: "'neben dem Beruf' is the set phrase for alongside your job. 'Unterricht' (l) would be nonsense — you do not attend the courses alongside the teaching; the courses ARE the teaching.",
          it: "»neben dem Beruf« è l'espressione fissa. »Unterricht« (l) sarebbe assurdo: i corsi SONO le lezioni.",
          bn: "»neben dem Beruf« নির্দিষ্ট বাগধারা: চাকরির পাশাপাশি। »Unterricht« (l) অর্থহীন হতো — কোর্সগুলোই তো ক্লাস।",
        },
      },
      {
        nr: 13,
        answerKey: "j",
        tag: "wortschatz-verb",
        why: {
          de: "»Viele Arbeitgeber beteiligen sich an den Kosten« — sich beteiligen AN + Dativ heißt: einen Teil übernehmen. Das »sich« im Satz zeigt, dass ein reflexives Verb gesucht ist, und der nächste Satz (»manche zahlen sie sogar vollständig«) bestätigt: hier geht es erst um einen Teil.",
          en: "'Viele Arbeitgeber beteiligen sich an den Kosten' — sich beteiligen AN + dative means to cover part of something. The 'sich' shows a reflexive verb is wanted, and the next clause ('some even pay in full') confirms this is about a share.",
          it: "»sich beteiligen an« significa contribuire in parte. Il »sich« segnala un verbo riflessivo.",
          bn: "»sich beteiligen AN« মানে একটি অংশ বহন করা। বাক্যের »sich« আত্মবাচক ক্রিয়ার ইঙ্গিত, আর পরের বাক্য (»কেউ কেউ পুরোটাই দেয়«) নিশ্চিত করে এটি অংশের কথা।",
        },
      },
      {
        nr: 14,
        answerKey: "e",
        tag: "wortschatz-nomen",
        why: {
          de: "»bevor Sie den Vertrag unterschreiben« — unterschrieben wird ein Vertrag. »den« zeigt männlich im Akkusativ, und der Rat ergibt nur Sinn, wenn es um die verbindliche Anmeldung geht.",
          en: "'bevor Sie den Vertrag unterschreiben' — what gets signed is a contract. 'den' marks masculine accusative, and the advice only makes sense if it is about the binding booking.",
          it: "Si firma un contratto. »den« indica maschile accusativo.",
          bn: "সই করা হয় চুক্তিতে। »den« পুংলিঙ্গ Akkusativ বোঝায়, আর পরামর্শটি তখনই অর্থবহ যখন এটি বাধ্যতামূলক নিবন্ধনের কথা।",
        },
      },
      {
        nr: 15,
        answerKey: "o",
        tag: "wortschatz-verb",
        why: {
          de: "»kann die Agentur für Arbeit die Weiterbildung bezahlen« — nach »kann« steht der Infinitiv am Satzende. »verdienen« (f) wäre das Gegenteil: Geld bekommen statt geben.",
          en: "'kann die Agentur für Arbeit die Weiterbildung bezahlen' — after 'kann' the infinitive goes at the end. 'verdienen' (f) would be the opposite: receiving money rather than paying it.",
          it: "Dopo »kann« l'infinito va in fondo. »verdienen« (f) sarebbe il contrario.",
          bn: "»kann«-এর পরে infinitive বাক্যের শেষে। »verdienen« (f) উল্টো হতো: টাকা দেওয়া নয়, পাওয়া।",
        },
      },
      {
        nr: 16,
        answerKey: "k",
        tag: "wortschatz-verb",
        why: {
          de: "»einen Bildungsgutschein, den Sie dort beantragen müssen« — einen Gutschein beantragt man, man bezahlt ihn nicht. Merke das Paar: einen Antrag stellen = etwas beantragen.",
          en: "'einen Bildungsgutschein, den Sie dort beantragen müssen' — you apply for a voucher, you do not pay for it. Remember the pair: einen Antrag stellen = etwas beantragen.",
          it: "Un buono si richiede, non si paga. Ricorda: einen Antrag stellen = etwas beantragen.",
          bn: "ভাউচারের জন্য আবেদন করা হয়, কেনা হয় না। জোড়াটি মনে রাখুন: einen Antrag stellen = etwas beantragen।",
        },
      },
      {
        nr: 17,
        answerKey: "a",
        tag: "wortschatz-nomen",
        why: {
          de: "»Am Ende jedes Kurses steht eine Prüfung.« Der nächste Satz beweist es: »Wer sie besteht, erhält ein Zertifikat« — bestehen kann man nur eine Prüfung. »eine« passt außerdem zum weiblichen Nomen.",
          en: "'Am Ende jedes Kurses steht eine Prüfung.' The next sentence proves it: 'whoever passes it gets a certificate' — you can only pass an exam. 'eine' also matches the feminine noun.",
          it: "La frase successiva lo prova: si può superare solo un esame. »eine« concorda con il femminile.",
          bn: "পরের বাক্যটিই প্রমাণ: »যিনি পাস করেন তিনি সনদ পান« — পাস করা যায় কেবল পরীক্ষায়। »eine« স্ত্রীলিঙ্গের সঙ্গেও মেলে।",
        },
      },
      {
        nr: 18,
        answerKey: "b",
        tag: "wortschatz-verb",
        why: {
          de: "»kann sie einmal wiederholen« — eine Prüfung wiederholen heißt: sie noch einmal machen. Das »einmal« davor zeigt schon, dass es um eine zweite Gelegenheit geht.",
          en: "'kann sie einmal wiederholen' — to repeat an exam means to sit it again. The 'einmal' before it already signals a second chance.",
          it: "»wiederholen« un esame significa rifarlo. L'»einmal« segnala la seconda occasione.",
          bn: "পরীক্ষা »wiederholen« মানে আবার দেওয়া। আগের »einmal«-ই দ্বিতীয় সুযোগের ইঙ্গিত দেয়।",
        },
      },
      {
        nr: 19,
        answerKey: "g",
        tag: "wortschatz-verb",
        why: {
          de: "»helfen Ihnen gern, den passenden Kurs zu finden« — nach »zu« steht der Infinitiv. Einen Kurs findet man; »verlieren« (i) wäre das Gegenteil und ergäbe keinen Sinn.",
          en: "'helfen Ihnen gern, den passenden Kurs zu finden' — after 'zu' comes the infinitive. You find a course; 'verlieren' (i) would be the opposite and make no sense.",
          it: "Dopo »zu« serve l'infinito. Un corso si trova; »verlieren« (i) sarebbe il contrario.",
          bn: "»zu«-এর পরে infinitive। কোর্স খুঁজে পাওয়া যায়; »verlieren« (i) উল্টো, অর্থহীন হতো।",
        },
      },
      {
        nr: 20,
        answerKey: "m",
        tag: "wortschatz-adjektiv",
        why: {
          de: "»Ein erstes Gespräch ist immer kostenlos.« Nach »ist« steht ein Adjektiv ohne Endung. »teuer« (h) wäre grammatisch möglich, passt aber nicht zu einem Werbetext, der zur Beratung einlädt.",
          en: "'Ein erstes Gespräch ist immer kostenlos.' After 'ist' comes an uninflected adjective. 'teuer' (h) would be grammatically possible but does not suit a text inviting you to come for advice.",
          it: "Dopo »ist« un aggettivo senza desinenza. »teuer« (h) sarebbe grammaticale ma non adatto a un testo che invita.",
          bn: "»ist«-এর পরে প্রত্যয়হীন বিশেষণ। »teuer« (h) ব্যাকরণে চলত, কিন্তু পরামর্শে আমন্ত্রণ জানানো লেখায় মানায় না।",
        },
      },
    ],
  },
};
