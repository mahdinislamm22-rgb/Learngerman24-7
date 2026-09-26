import type { SbSet } from "./types";

/**
 * SB-09 — Eine Bitte an die Kita (Teil 1) und ein Elternbrief (Teil 2).
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Teil 1 is the one set built around time. Family letters are full of it,
 * and B1 learners lose marks on it constantly: a preposition that decides
 * a case (gaps 2, 6), a subordinating conjunction chosen by whether the
 * event happened once or repeatedly (gap 4 — als versus wenn), and a
 * two-part connector that must be completed correctly (gap 8).
 *
 * Teil 2 is a school letter: the register a parent actually has to read,
 * with the nouns and set phrases that recur in every one of them.
 */
export const sb09: SbSet = {
  code: "SB-09",

  title: {
    de: "Bitte an die Kita und ein Elternbrief",
    en: "A request to the nursery and a letter to parents",
    it: "Una richiesta all'asilo e una lettera ai genitori",
    bn: "কিন্ডারগার্টেনে অনুরোধ ও অভিভাবকদের চিঠি",
  },

  intro: {
    de: "Erst eine höfliche Bitte an die Kita, dann ein Elternbrief der Schule. In Teil 1 geht es viel um Zeit — achte auf die kleinen Wörter davor.",
    en: "First a polite request to the nursery, then a letter from the school. Teil 1 leans heavily on time — watch the small words in front of it.",
    it: "Prima una richiesta cortese all'asilo, poi una lettera della scuola. La parte 1 verte sul tempo.",
    bn: "প্রথমে কিন্ডারগার্টেনে ভদ্র অনুরোধ, তারপর স্কুলের চিঠি। অংশ ১-এ সময় নিয়েই বেশি — আগের ছোট শব্দগুলোয় নজর দিন।",
  },

  /* ================================================================== */
  teil1: {
    heading: "E-Mail an die Kita",

    text: `Sehr geehrte Frau Hofmann,

ich schreibe Ihnen {1} meiner Tochter Amira, die seit September in der Gruppe Sonnenblume ist.

{2} nächsten Monat fange ich wieder an zu arbeiten. Meine Schicht beginnt um sieben Uhr dreißig, und ich schaffe es deshalb nicht, Amira {3} neun Uhr zu bringen.

{4} ich mich im Sommer angemeldet habe, war noch nicht klar, wann genau ich anfangen würde. Jetzt steht es fest, und ich wollte Sie so früh wie möglich informieren.

Wäre es möglich, dass Amira schon {5} sieben Uhr kommt? Ich habe gelesen, dass Sie eine Frühbetreuung anbieten, {6} ich bin nicht sicher, ob es dafür noch freie Plätze gibt.

Falls das nicht geht, {7} ich auch eine andere Lösung suchen. Mein Mann könnte sie an manchen Tagen bringen, aber {8} an Montagen noch an Freitagen.

Über eine kurze Rückmeldung {9} ich mich sehr freuen. Sie erreichen mich am besten abends {10} Telefon.

Mit freundlichen Grüßen
Leyla Demir`,

    items: [
      {
        nr: 1,
        options: ["für", "über", "wegen"],
        answerIndex: 2,
        tag: "praeposition-grund",
        why: {
          de: "»ich schreibe Ihnen wegen meiner Tochter« — wegen nennt den Grund oder das Thema und steht mit Genitiv: wegen meiner Tochter. »für« würde heißen, der Brief sei ein Geschenk an sie, »über« passt zu einem Bericht, nicht zu einer Bitte.",
          en: "'ich schreibe Ihnen wegen meiner Tochter' — wegen gives the reason or subject and takes the genitive. 'für' would mean the letter is for her, 'über' suits a report, not a request.",
          it: "»wegen« indica il motivo e regge il genitivo. »für« significherebbe che la lettera è per lei.",
          bn: "»wegen« কারণ বা বিষয় বোঝায় এবং Genitiv নেয়। »für« হলে চিঠিটা তার জন্য হতো।",
        },
      },
      {
        nr: 2,
        options: ["Ab", "Seit", "In"],
        answerIndex: 0,
        tag: "praeposition-zeit",
        why: {
          de: "»Ab nächsten Monat fange ich wieder an« — ab nennt den Beginn von etwas in der Zukunft. »seit« wäre die Vergangenheit bis jetzt, und genau diese beiden verwechselt man ständig: seit schaut zurück, ab schaut nach vorn.",
          en: "'Ab nächsten Monat fange ich wieder an' — ab names the start of something in the future. 'seit' would look back to now, and these two get confused constantly: seit looks back, ab looks forward.",
          it: "»ab« indica l'inizio nel futuro; »seit« guarda al passato. Sono i due più confusi.",
          bn: "»ab« ভবিষ্যতে শুরুর সময় বোঝায়; »seit« অতীত থেকে এখন পর্যন্ত। এ দুটোই সবচেয়ে বেশি গুলিয়ে যায়।",
        },
      },
      {
        nr: 3,
        options: ["schon um", "erst um", "bis um"],
        answerIndex: 1,
        tag: "wortschatz-adverb",
        why: {
          de: "»erst um neun Uhr« heißt: nicht früher als neun. Genau das geht nicht, denn ihre Schicht beginnt schon um halb acht — um neun ist sie längst bei der Arbeit. »schon um« wäre das Gegenteil, und »bis um« gibt es so nicht. Der Satz davor nennt die Schichtzeit; erst mit ihr wird die Lücke lösbar.",
          en: "'ich schaffe es nicht, Amira erst um neun Uhr zu bringen' — 'erst um neun' means not before nine, which is exactly the problem: her shift starts at half past seven, so a nine o'clock drop-off is impossible for her.",
          it: "»erst um neun« significa non prima delle nove: proprio il problema, visto che il turno inizia alle sette e mezza.",
          bn: "»erst um neun« মানে নয়টার আগে নয় — সেটাই সমস্যা, কারণ তাঁর শিফট শুরু সাড়ে সাতটায়।",
        },
      },
      {
        nr: 4,
        options: ["Wenn", "Als", "Wann"],
        answerIndex: 1,
        tag: "nebensatz-als-wenn",
        why: {
          de: "»Als ich mich im Sommer angemeldet habe« — die Anmeldung war EINMAL, in der Vergangenheit: Dafür steht immer »als«. »wenn« nimmt man für wiederholte Ereignisse (immer wenn) oder für die Zukunft, »wann« nur in Fragen. Diese drei sind eine der zuverlässigsten Prüfungsfallen überhaupt.",
          en: "'Als ich mich im Sommer angemeldet habe' — the registration happened ONCE, in the past: that always takes 'als'. 'wenn' is for repeated events or the future, 'wann' only in questions. These three are one of the most reliable exam traps there is.",
          it: "L'iscrizione è avvenuta UNA VOLTA nel passato: si usa sempre »als«. »wenn« per eventi ripetuti o il futuro.",
          bn: "নিবন্ধন হয়েছিল অতীতে একবার: তখন সবসময় »als«। »wenn« পুনরাবৃত্ত ঘটনা বা ভবিষ্যতের জন্য, »wann« কেবল প্রশ্নে।",
        },
      },
      {
        nr: 5,
        options: ["ab", "seit", "um"],
        answerIndex: 2,
        tag: "praeposition-zeit",
        why: {
          de: "»dass Amira schon um sieben Uhr kommt« — bei einer Uhrzeit steht immer »um«: um sieben Uhr, um halb acht. Merke die drei Zeitwörter zusammen: um (Uhrzeit), am (Tag), im (Monat).",
          en: "'dass Amira schon um sieben Uhr kommt' — with a clock time it is always 'um': um sieben Uhr. Learn the three together: um (clock time), am (day), im (month).",
          it: "Con un'ora si usa sempre »um«. I tre insieme: um (ora), am (giorno), im (mese).",
          bn: "ঘড়ির সময়ে সবসময় »um«। তিনটি একসঙ্গে মনে রাখুন: um (সময়), am (দিন), im (মাস)।",
        },
      },
      {
        nr: 6,
        options: ["aber", "weil", "damit"],
        answerIndex: 0,
        tag: "konnektor-hauptsatz",
        why: {
          de: "»Sie eine Frühbetreuung anbieten, aber ich bin nicht sicher« — sieh dir die Wortstellung an: »ich bin« steht mit dem Verb an zweiter Stelle, also ein Hauptsatz. Nur »aber« verbindet zwei Hauptsätze; weil und damit würden das Verb ans Ende schicken.",
          en: "'Sie eine Frühbetreuung anbieten, aber ich bin nicht sicher' — look at the word order: 'ich bin' has the verb second, so a main clause. Only 'aber' joins two main clauses; weil and damit would send the verb to the end.",
          it: "Guarda l'ordine: »ich bin« ha il verbo in seconda posizione, quindi una principale. Solo »aber« le unisce.",
          bn: "শব্দক্রম দেখুন: »ich bin«-এ ক্রিয়া দ্বিতীয় স্থানে, অর্থাৎ প্রধান বাক্য। কেবল »aber« দুটি প্রধান বাক্য জোড়ে।",
        },
      },
      {
        nr: 7,
        options: ["muss", "müsste", "musste"],
        answerIndex: 1,
        tag: "konjunktiv-2",
        why: {
          de: "»Falls das nicht geht, müsste ich auch eine andere Lösung suchen« — »falls« macht den Fall hypothetisch, und dazu passt der Konjunktiv II: müsste, nicht muss. »musste« wäre Vergangenheit. Der Unterschied ist nur ein Umlaut, und er entscheidet zwischen Tatsache und Möglichkeit.",
          en: "'Falls das nicht geht, müsste ich auch eine andere Lösung suchen' — 'falls' makes the case hypothetical, which takes the Konjunktiv II: müsste, not muss. 'musste' would be past. The difference is one umlaut, and it separates fact from possibility.",
          it: "»falls« rende il caso ipotetico: serve il Konjunktiv II »müsste«. La differenza è un solo Umlaut.",
          bn: "»falls« অবস্থাটিকে অনুমাননির্ভর করে, তাই Konjunktiv II »müsste«। »musste« অতীত। পার্থক্য কেবল একটি Umlaut।",
        },
      },
      {
        nr: 8,
        options: ["nicht", "kein", "weder"],
        answerIndex: 2,
        tag: "konnektor-weder-noch",
        why: {
          de: "»aber weder an Montagen noch an Freitagen« — das »noch« später im Satz verrät dir die erste Hälfte: weder … noch gehört immer zusammen. Es heißt: an beiden Tagen nicht. Wenn du im Satz ein »noch« ohne Partner siehst, suche nach »weder«.",
          en: "'aber weder an Montagen noch an Freitagen' — the 'noch' later in the sentence gives the first half away: weder … noch always belong together. It means: on neither day. If you see a 'noch' without a partner, look for 'weder'.",
          it: "Il »noch« più avanti rivela la prima metà: weder … noch vanno sempre insieme.",
          bn: "বাক্যের পরের »noch«-ই প্রথম অংশ ফাঁস করে: weder … noch সবসময় একসঙ্গে। মানে: দুই দিনের কোনোটিতেই নয়।",
        },
      },
      {
        nr: 9,
        options: ["würde", "werde", "wurde"],
        answerIndex: 0,
        tag: "konjunktiv-2",
        why: {
          de: "»Über eine kurze Rückmeldung würde ich mich sehr freuen« — die höfliche Schlussformel steht im Konjunktiv II. »werde« wäre eine Ankündigung, »wurde« Vergangenheit. Diesen Satz lohnt es sich auswendig zu lernen: Er passt an das Ende fast jeder höflichen Bitte.",
          en: "'Über eine kurze Rückmeldung würde ich mich sehr freuen' — the polite closing formula takes the Konjunktiv II. 'werde' would be an announcement, 'wurde' past. This sentence is worth memorising whole: it fits the end of almost any polite request.",
          it: "La formula di chiusura cortese vuole il Konjunktiv II. Vale la pena impararla a memoria.",
          bn: "ভদ্র সমাপ্তি বাক্যে Konjunktiv II বসে। এই বাক্যটি গোটা মুখস্থ করার মতো — প্রায় যেকোনো ভদ্র অনুরোধের শেষে চলে।",
        },
      },
      {
        nr: 10,
        options: ["mit", "per", "am"],
        answerIndex: 1,
        tag: "wendung",
        why: {
          de: "»Sie erreichen mich am besten abends per Telefon« — per steht bei Übermittlungswegen: per Telefon, per E-Mail, per Post. »am Telefon« gibt es auch, heißt aber: gerade am Apparat sein. Hier geht es um den Weg, nicht um den Ort.",
          en: "'Sie erreichen mich am besten abends per Telefon' — per goes with means of contact: per Telefon, per E-Mail, per Post. 'am Telefon' exists too but means being on the line right now. Here it is the means, not the place.",
          it: "»per« indica il mezzo: per Telefon, per E-Mail, per Post. »am Telefon« significa essere al telefono in quel momento.",
          bn: "»per« যোগাযোগের মাধ্যম বোঝায়: per Telefon, per E-Mail, per Post। »am Telefon« মানে এই মুহূর্তে ফোনে থাকা।",
        },
      },
    ],
  },

  /* ================================================================== */
  teil2: {
    heading: "Elternbrief der Grundschule",

    text: `Liebe Eltern,

das neue Schuljahr hat gut begonnen, und wir möchten Sie über einige {11} informieren.

Der Elternabend findet am zwölften Oktober um neunzehn Uhr statt. Bitte geben Sie Ihrem Kind den {12} unterschrieben mit, damit wir wissen, mit wie vielen Personen wir rechnen können.

Am siebzehnten Oktober machen wir einen {13} in den Wald. Ihr Kind braucht feste Schuhe, etwas zu trinken und ein Lunchpaket. Die Kosten für den Bus {14} fünf Euro.

Wenn Ihr Kind krank ist, {15} Sie uns bitte vor acht Uhr im Sekretariat an. Ab dem dritten Tag brauchen wir eine schriftliche {16}.

Die Hausaufgaben sollten in der zweiten Klasse etwa dreißig Minuten {17}. Dauert es bei Ihrem Kind regelmäßig deutlich länger, sprechen Sie uns bitte an — das ist kein Grund zur {18}, aber wir schauen gern gemeinsam nach.

Zum Schluss eine Bitte: Viele Kinder kommen mit dem Auto. Wenn Sie können, lassen Sie Ihr Kind das letzte Stück zu Fuß gehen. Das ist {19} für alle, und der Schulweg wird für die Kinder sicherer.

Herzliche Grüße und vielen Dank für Ihre {20}
Das Team der Grundschule Weidenau`,

    bank: [
      { key: "a", word: "Neuigkeiten" },
      { key: "b", word: "melden" },
      { key: "c", word: "Ausflug" },
      { key: "d", word: "Zettel" },
      { key: "e", word: "Unterstützung" },
      { key: "f", word: "informieren" },
      { key: "g", word: "betragen" },
      { key: "h", word: "Entschuldigung" },
      { key: "i", word: "Zeit" },
      { key: "j", word: "Sorge" },
      { key: "k", word: "ruhiger" },
      { key: "l", word: "Ferien" },
      { key: "m", word: "kosten" },
      { key: "n", word: "Antwort" },
      { key: "o", word: "dauern" },
    ],

    items: [
      {
        nr: 11,
        answerKey: "a",
        tag: "wortschatz-nomen",
        why: {
          de: "»über einige Neuigkeiten informieren« — Neuigkeiten sind neue Informationen, und »einige« verlangt einen Plural. »Ferien« (l) wäre auch Plural, aber davon handelt der Brief nicht.",
          en: "'über einige Neuigkeiten informieren' — Neuigkeiten are new pieces of information, and 'einige' requires a plural. 'Ferien' (l) is plural too, but the letter is not about holidays.",
          it: "»Neuigkeiten« sono novità, e »einige« richiede un plurale. »Ferien« (l) è plurale ma fuori tema.",
          bn: "»Neuigkeiten« মানে নতুন খবর, আর »einige« বহুবচন চায়। »Ferien« (l)-ও বহুবচন, কিন্তু চিঠিটি ছুটি নিয়ে নয়।",
        },
      },
      {
        nr: 12,
        answerKey: "d",
        tag: "wortschatz-nomen",
        why: {
          de: "»geben Sie Ihrem Kind den Zettel unterschrieben mit« — »den« zeigt männlich im Akkusativ, und ein Zettel ist das, was man unterschreibt und zurückschickt. Der Nebensatz danach erklärt, wozu: damit die Schule die Zahl der Gäste kennt.",
          en: "'geben Sie Ihrem Kind den Zettel unterschrieben mit' — 'den' marks masculine accusative, and a slip is what you sign and send back. The clause after explains why: so the school knows how many are coming.",
          it: "»den« indica maschile accusativo, e il foglietto è ciò che si firma e si rimanda.",
          bn: "»den« পুংলিঙ্গ Akkusativ বোঝায়, আর কাগজটাই সই করে ফেরত পাঠানো হয়।",
        },
      },
      {
        nr: 13,
        answerKey: "c",
        tag: "wortschatz-nomen",
        why: {
          de: "»machen wir einen Ausflug in den Wald« — einen Ausflug machen ist die feste Wendung. »einen« verlangt männlich, und die Ausrüstung im nächsten Satz (feste Schuhe, Lunchpaket) bestätigt, worum es geht.",
          en: "'machen wir einen Ausflug in den Wald' — einen Ausflug machen is the set phrase. 'einen' requires masculine, and the kit in the next sentence confirms what is meant.",
          it: "»einen Ausflug machen« è l'espressione fissa; l'attrezzatura nella frase dopo lo conferma.",
          bn: "»einen Ausflug machen« নির্দিষ্ট বাগধারা। পরের বাক্যের সরঞ্জামই বিষয়টি নিশ্চিত করে।",
        },
      },
      {
        nr: 14,
        answerKey: "g",
        tag: "wortschatz-verb",
        why: {
          de: "»Die Kosten für den Bus betragen fünf Euro« — betragen heißt bei Beträgen: sich belaufen auf. »kosten« (m) klingt richtig, passt aber nicht: Man sagt »der Bus kostet fünf Euro«, nicht »die Kosten kosten«. Das Subjekt ist Plural, deshalb die Endung -en.",
          en: "'Die Kosten für den Bus betragen fünf Euro' — betragen is what amounts do. 'kosten' (m) sounds right but does not fit: you say 'der Bus kostet fünf Euro', not 'die Kosten kosten'. The subject is plural, hence -en.",
          it: "»betragen« si usa per gli importi. »kosten« (m) suona giusto ma »die Kosten kosten« non si dice.",
          bn: "অঙ্কের ক্ষেত্রে »betragen« বসে। »kosten« (m) শুনতে ঠিক, কিন্তু »die Kosten kosten« বলা হয় না।",
        },
      },
      {
        nr: 15,
        answerKey: "b",
        tag: "wortschatz-verb",
        why: {
          de: "»melden Sie uns bitte vor acht Uhr im Sekretariat an« — das trennbare Verb anmelden: der Stamm vorn, die Vorsilbe »an« am Satzende. Das einsame »an« hinten ist immer der Hinweis auf ein trennbares Verb.",
          en: "'melden Sie uns bitte vor acht Uhr im Sekretariat an' — the separable verb anmelden: stem first, prefix 'an' at the end. A lone 'an' at the end is always the sign of a separable verb.",
          it: "»anmelden« è separabile: radice davanti, »an« in fondo. L'»an« isolato è sempre l'indizio.",
          bn: "»anmelden« বিচ্ছেদযোগ্য: মূল অংশ আগে, »an« শেষে। শেষের একা »an«-ই বিচ্ছেদযোগ্য ক্রিয়ার চিহ্ন।",
        },
      },
      {
        nr: 16,
        answerKey: "h",
        tag: "wortschatz-nomen",
        why: {
          de: "»brauchen wir eine schriftliche Entschuldigung« — bei einer Schule ist eine Entschuldigung das Schreiben, mit dem Eltern das Fehlen erklären. »eine schriftliche« verlangt ein weibliches Nomen. Achtung: Das Wort heißt hier nicht »Verzeihung«, sondern ist ein Dokument.",
          en: "'brauchen wir eine schriftliche Entschuldigung' — at a school an Entschuldigung is the note in which parents explain an absence. 'eine schriftliche' requires a feminine noun. Note: here the word is a document, not an apology.",
          it: "A scuola l'»Entschuldigung« è la giustificazione scritta dei genitori, non delle scuse.",
          bn: "স্কুলে »Entschuldigung« মানে অভিভাবকের লেখা অনুপস্থিতির ব্যাখ্যাপত্র — ক্ষমা চাওয়া নয়।",
        },
      },
      {
        nr: 17,
        answerKey: "o",
        tag: "wortschatz-verb",
        why: {
          de: "»sollten etwa dreißig Minuten dauern« — dauern sagt, wie lange etwas geht, und nach »sollten« steht der Infinitiv am Satzende. Der nächste Satz greift es auf: »Dauert es bei Ihrem Kind regelmäßig länger …« — dasselbe Verb, nur als Frage. Wenn ein Wort im Folgesatz wiederkommt, ist es fast immer die Lösung.",
          en: "'sollten etwa dreißig Minuten dauern' — dauern says how long something takes, and after 'sollten' the infinitive goes to the end. The next sentence picks it up: 'Dauert es bei Ihrem Kind regelmäßig länger …' — the same verb, now as a question. When a word returns in the following sentence, it is almost always the answer.",
          it: "»dauern« dice quanto dura qualcosa, e dopo »sollten« l'infinito va in fondo. La frase successiva riprende lo stesso verbo.",
          bn: "»dauern« বলে কতক্ষণ লাগে, আর »sollten«-এর পরে infinitive শেষে বসে। পরের বাক্যেই শব্দটি ফিরে আসে — একই ক্রিয়া, প্রশ্ন হিসেবে। পরের বাক্যে ফিরে আসা শব্দই প্রায় সবসময় উত্তর।",
        },
      },
      {
        nr: 18,
        answerKey: "j",
        tag: "wortschatz-nomen",
        why: {
          de: "»das ist kein Grund zur Sorge« — eine feste Wendung: Es besteht kein Anlass, sich Sorgen zu machen. »zur« ist »zu der«, also ein weibliches Nomen. Der ganze Satz beruhigt die Eltern, bevor er zum Angebot übergeht.",
          en: "'das ist kein Grund zur Sorge' — a set phrase: no cause for worry. 'zur' is 'zu der', so a feminine noun. The sentence reassures parents before it offers help.",
          it: "»kein Grund zur Sorge« è un'espressione fissa. »zur« = »zu der«, quindi femminile.",
          bn: "»kein Grund zur Sorge« নির্দিষ্ট বাগধারা: দুশ্চিন্তার কারণ নেই। »zur« = »zu der«, তাই স্ত্রীলিঙ্গ বিশেষ্য।",
        },
      },
      {
        nr: 19,
        answerKey: "k",
        tag: "komparativ",
        why: {
          de: "»Das ist ruhiger für alle« — und der zweite Halbsatz sagt dasselbe noch einmal: »der Schulweg wird für die Kinder sicherer«. Beide sind Komparative: Es wird ruhiger und sicherer als vorher. Die Parallele im Satz zeigt dir die Form.",
          en: "'Das ist ruhiger für alle' — and the second half says the same again: 'the way to school becomes safer for the children'. Both are comparatives: quieter and safer than before. The parallel in the sentence shows you the form.",
          it: "»ruhiger« e »sicherer« sono entrambi comparativi: la struttura parallela ti mostra la forma.",
          bn: "»ruhiger« ও »sicherer« দুটোই তুলনামূলক রূপ: আগের চেয়ে শান্ত ও নিরাপদ। বাক্যের সমান্তরাল গঠনই রূপটি দেখায়।",
        },
      },
      {
        nr: 20,
        answerKey: "e",
        tag: "wortschatz-nomen",
        why: {
          de: "»vielen Dank für Ihre Unterstützung« — die übliche Schlussformel eines Elternbriefs. Nach »Ihre« steht ein weibliches Nomen, und »danken für« verlangt den Akkusativ.",
          en: "'vielen Dank für Ihre Unterstützung' — the usual closing formula of a letter to parents. After 'Ihre' comes a feminine noun, and 'danken für' takes the accusative.",
          it: "»vielen Dank für Ihre Unterstützung« è la formula di chiusura abituale.",
          bn: "»vielen Dank für Ihre Unterstützung« — অভিভাবকদের চিঠির প্রচলিত সমাপ্তি। »Ihre«-এর পরে স্ত্রীলিঙ্গ বিশেষ্য।",
        },
      },
    ],
  },
};
