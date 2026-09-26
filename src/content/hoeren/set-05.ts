import type { HoerSet } from "./types";

/**
 * HOER-05 — Ausbildung, Berufsschule und Weiterbildung.
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * The traps, each a different listening skill:
 *   · a number corrected mid-sentence (item 3 — "zwei, nein, drei"),
 *   · a reported opinion that is not the speaker's own (item 8),
 *   · "weder … noch" (item 12), which is a double negative said fast,
 *   · a condition that inverts the claim (item 17: only if you ask),
 *   · a comparison where the statement swaps the two sides (item 13).
 */
export const hoer05: HoerSet = {
  code: "HOER-05",

  title: {
    de: "Ausbildung, Berufsschule und Weiterbildung",
    en: "Apprenticeship, vocational school and further training",
    it: "Formazione, scuola professionale e aggiornamento",
    bn: "প্রশিক্ষণ, বৃত্তিমূলক স্কুল ও উচ্চতর শিক্ষা",
  },

  intro: {
    de: "Drei Teile wie in der Prüfung. Teil 1 und 2 hörst du nur einmal, Teil 3 zweimal. Der Text wird erst nach der Auswertung sichtbar.",
    en: "Three parts, as in the exam. You hear parts 1 and 2 once, part 3 twice. The transcript only appears after grading.",
    it: "Tre parti, come nell'esame. Le parti 1 e 2 si ascoltano una volta, la parte 3 due volte. La trascrizione appare solo dopo la correzione.",
    bn: "পরীক্ষার মতোই তিনটি অংশ। অংশ ১ ও ২ একবার শুনবেন, অংশ ৩ দুবার। উত্তর মেলানোর পরেই কেবল লেখাটি দেখা যাবে।",
  },

  teile: [
    // ------------------------------------------------------------------
    {
      teil: 1,
      maxPlays: 1,
      instruction: {
        de: "Du hörst fünf kurze Nachrichten und Ansagen — jede nur einmal. Ist die Aussage richtig oder falsch?",
        en: "You will hear five short messages and announcements, each only once. Is the statement true or false?",
        it: "Ascolterai cinque brevi messaggi e annunci, ciascuno una sola volta. L'affermazione è vera o falsa?",
        bn: "আপনি পাঁচটি ছোট বার্তা ও ঘোষণা শুনবেন, প্রতিটি একবারই। বক্তব্যটি সত্য না মিথ্যা?",
      },
      tracks: [
        {
          id: "h5-t1-1",
          label: {
            de: "Durchsage in der Berufsschule",
            en: "Announcement at the vocational school",
            it: "Annuncio alla scuola professionale",
            bn: "বৃত্তিমূলক স্কুলের ঘোষণা",
          },
          transcript:
            "Eine Information für die Klasse Fachinformatik zwei: Die schriftliche Zwischenprüfung findet nicht wie geplant im März statt, sondern erst im April. Den genauen Tag erfahren Sie in der nächsten Woche. Der Praxisteil bleibt unverändert im März.",
          items: [
            {
              nr: 1,
              statement: "Die schriftliche Prüfung wurde verschoben.",
              answer: true,
              why: {
                de: "»findet nicht wie geplant im März statt, sondern erst im April« — verschoben heißt genau das. Achtung: Nur der schriftliche Teil, der Praxisteil bleibt im März. Wer den letzten Satz hört und durcheinanderkommt, antwortet falsch.",
                en: "'is not taking place in March as planned, but only in April' — that is exactly what postponed means. Note: only the written part; the practical stays in March. Anyone who hears the last sentence and mixes it up answers wrongly.",
                it: "»non si terrà a marzo come previsto, ma solo ad aprile«: è esattamente il significato di rinviato.",
                bn: "»পরিকল্পনামতো মার্চে নয়, এপ্রিলেই হবে« — পিছিয়ে দেওয়া মানে ঠিক এটাই। খেয়াল রাখুন: কেবল লিখিত অংশ, ব্যবহারিক অংশ মার্চেই।",
              },
            },
          ],
        },
        {
          id: "h5-t1-2",
          label: {
            de: "Nachricht des Ausbilders",
            en: "Message from the trainer",
            it: "Messaggio del formatore",
            bn: "প্রশিক্ষকের বার্তা",
          },
          transcript:
            "Hallo Herr Islam, hier ist Herr Brandt. Sie haben mir Ihre Unterlagen geschickt, vielen Dank. Der Lebenslauf ist gut. Was mir fehlt, ist ein Nachweis über Ihre Deutschkenntnisse. Ein Zertifikat genügt, eine Bestätigung vom Kurs reicht auch. Schicken Sie es mir bitte bis Freitag.",
          items: [
            {
              nr: 2,
              statement: "Herr Brandt braucht noch einen Nachweis über die Deutschkenntnisse.",
              answer: true,
              why: {
                de: "»Was mir fehlt, ist ein Nachweis über Ihre Deutschkenntnisse.« Er nennt danach zwei Möglichkeiten, was das sein kann — das ändert nichts daran, dass etwas fehlt.",
                en: "'What I am missing is proof of your German.' He then names two things that would do — that does not change the fact that something is missing.",
                it: "»Quello che mi manca è una prova del suo tedesco.« Poi nomina due possibilità.",
                bn: "»আমার যেটা নেই তা হলো আপনার জার্মান দক্ষতার প্রমাণ।« পরে তিনি দুটি বিকল্প বলেন — তাতে ঘাটতিটা বদলায় না।",
              },
            },
          ],
        },
        {
          id: "h5-t1-3",
          label: {
            de: "Ansage der Volkshochschule",
            en: "Adult education centre announcement",
            it: "Annuncio del centro di formazione per adulti",
            bn: "প্রাপ্তবয়স্ক শিক্ষাকেন্দ্রের ঘোষণা",
          },
          transcript:
            "Willkommen bei der Volkshochschule Siegen. Der Vorbereitungskurs auf die Abschlussprüfung findet zweimal, nein, entschuldigen Sie, dreimal pro Woche statt: montags, mittwochs und freitags, jeweils von achtzehn bis einundzwanzig Uhr.",
          items: [
            {
              nr: 3,
              statement: "Der Kurs findet dreimal pro Woche statt.",
              answer: true,
              why: {
                de: "Die Sprecherin korrigiert sich selbst: »zweimal, nein, entschuldigen Sie, dreimal«. Die Korrektur gilt, nicht der erste Versuch — und die drei Wochentage danach bestätigen sie. Selbstkorrekturen sind in der Prüfung immer Absicht.",
                en: "The speaker corrects herself: 'twice, no, sorry, three times'. The correction stands, not the first attempt — and the three weekdays afterwards confirm it. Self-corrections in the exam are always deliberate.",
                it: "La voce si corregge: »due, no, scusate, tre volte«. Vale la correzione, e i tre giorni lo confermano.",
                bn: "বক্তা নিজেই শুধরে নেন: »দুবার, না, মাফ করবেন, তিনবার«। শুদ্ধিটাই প্রযোজ্য, আর পরের তিনটি দিন তা নিশ্চিত করে। পরীক্ষায় আত্মসংশোধন সবসময়ই ইচ্ছাকৃত।",
              },
            },
          ],
        },
        {
          id: "h5-t1-4",
          label: {
            de: "Nachricht einer Mitschülerin",
            en: "Message from a classmate",
            it: "Messaggio di una compagna di corso",
            bn: "সহপাঠীর বার্তা",
          },
          transcript:
            "Hi, ich bin's, Elif. Du, morgen fällt der Unterricht bei Frau Koch aus, sie ist krank. Aber wir haben trotzdem Schule: Herr Sadiq macht in der Zeit Wiederholung für die Prüfung. Anwesenheitspflicht besteht wie immer.",
          items: [
            {
              nr: 4,
              statement: "Morgen muss man nicht zur Schule kommen.",
              answer: false,
              why: {
                de: "»Aber wir haben trotzdem Schule … Anwesenheitspflicht besteht wie immer.« Ein Lehrer fällt aus, der Unterricht nicht. »Aber« ist hier das Signalwort — was davor steht, wird gleich eingeschränkt.",
                en: "'But we still have school … attendance is compulsory as always.' One teacher is off, the lessons are not cancelled. 'Aber' is the signal word here — whatever came before is about to be limited.",
                it: "»Ma abbiamo comunque scuola … l'obbligo di presenza resta.« Manca un'insegnante, non la lezione.",
                bn: "»তবু আমাদের স্কুল আছে … উপস্থিতি বরাবরের মতোই বাধ্যতামূলক।« একজন শিক্ষক অনুপস্থিত, ক্লাস নয়।",
              },
            },
          ],
        },
        {
          id: "h5-t1-5",
          label: {
            de: "Ansage der Agentur für Arbeit",
            en: "Employment agency announcement",
            it: "Annuncio dell'agenzia del lavoro",
            bn: "কর্মসংস্থান দপ্তরের ঘোষণা",
          },
          transcript:
            "Ein Hinweis zur Weiterbildung: Einen Bildungsgutschein bekommen Sie nur, wenn Sie vorher mit Ihrer Beraterin gesprochen haben. Melden Sie sich also bitte zuerst bei uns und buchen Sie erst danach einen Kurs. Anders herum können wir die Kosten nicht übernehmen.",
          items: [
            {
              nr: 5,
              statement: "Man soll den Kurs buchen und danach zur Beratung gehen.",
              answer: false,
              why: {
                de: "»Melden Sie sich also bitte zuerst bei uns und buchen Sie erst danach einen Kurs.« Die Reihenfolge ist umgekehrt — und der letzte Satz sagt sogar, was passiert, wenn man es falsch macht.",
                en: "'So please contact us first and only book a course afterwards.' The order is the other way round — and the last sentence even says what happens if you get it wrong.",
                it: "»Si rivolga prima a noi e solo dopo prenoti un corso.« L'ordine è invertito.",
                bn: "»তাই আগে আমাদের সঙ্গে যোগাযোগ করুন, কোর্স বুক করুন তারপরে।« ক্রমটি উল্টো — আর শেষ বাক্যে বলা আছে ভুল করলে কী হয়।",
              },
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      teil: 2,
      maxPlays: 1,
      instruction: {
        de: "Du hörst ein Interview — nur einmal. Entscheide bei jeder Aussage: richtig oder falsch?",
        en: "You will hear one interview, only once. Decide for each statement: true or false?",
        it: "Ascolterai un'intervista, una sola volta. Decidi per ogni affermazione: vero o falso?",
        bn: "আপনি একটি সাক্ষাৎকার শুনবেন, একবারই। প্রতিটি বক্তব্য সম্পর্কে ঠিক করুন: সত্য না মিথ্যা?",
      },
      tracks: [
        {
          id: "h5-t2-1",
          label: {
            de: "Interview mit einem Ausbilder",
            en: "Interview with a company trainer",
            it: "Intervista con un formatore aziendale",
            bn: "একজন কোম্পানি প্রশিক্ষকের সাক্ষাৎকার",
          },
          transcript:
            "Moderatorin: Herr Brandt, Sie bilden seit zwölf Jahren Fachinformatiker aus. Worauf achten Sie bei einer Bewerbung zuerst? " +
            "Herr Brandt: Ehrlich gesagt nicht auf die Noten. Ich schaue zuerst, ob jemand überhaupt geschrieben hat, warum er zu UNS will. Neun von zehn Anschreiben könnte man an jede beliebige Firma schicken. " +
            "Moderatorin: Und die Noten spielen wirklich keine Rolle? " +
            "Herr Brandt: Eine kleine. In Mathematik schaue ich schon hin. Aber ich habe Auszubildende gehabt, die in der Schule schlecht waren und im Betrieb hervorragend — und umgekehrt. " +
            "Moderatorin: Viele sagen, man brauche unbedingt ein sehr gutes Deutsch. " +
            "Herr Brandt: Das höre ich auch oft, aber ich sehe das anders. B eins reicht für den Anfang völlig. Was zählt, ist, dass jemand nachfragt, wenn er etwas nicht verstanden hat. Wer schweigt und dann falsch arbeitet, kostet mich mehr Zeit als jemand, der fünfmal fragt. " +
            "Moderatorin: Wie viele Bewerbungen bekommen Sie im Jahr? " +
            "Herr Brandt: Für zwei Plätze etwa sechzig. Klingt viel, ist aber weniger als vor zehn Jahren. Damals waren es über hundert. " +
            "Moderatorin: Woran liegt das? " +
            "Herr Brandt: Es gibt schlicht weniger junge Leute. Und viele gehen lieber an die Universität, weil sie glauben, eine Ausbildung sei weniger wert. Ich halte das für einen Irrtum, aber das ist eine lange Diskussion. " +
            "Moderatorin: Was raten Sie jemandem, der sich bewerben will? " +
            "Herr Brandt: Ein Praktikum machen. Zwei Wochen bei uns sagen mir mehr als jede Mappe. Und wer bei uns ein Praktikum gemacht hat, bekommt bei gleicher Eignung den Platz. " +
            "Moderatorin: Nehmen Sie auch Leute, die schon älter sind? " +
            "Herr Brandt: Selbstverständlich. Mein bester Azubi der letzten Jahre war einunddreißig und hatte vorher im Lager gearbeitet. Eine Altersgrenze haben wir weder im Gesetz noch im Betrieb. " +
            "Moderatorin: Und wenn jemand die Prüfung nicht besteht? " +
            "Herr Brandt: Dann wiederholt er sie. Das ist kein Drama. Etwa einer von zehn braucht einen zweiten Versuch, und fast alle schaffen es dann. " +
            "Moderatorin: Herr Brandt, vielen Dank.",
          items: [
            {
              nr: 6,
              statement: "Herr Brandt bildet seit mehr als zehn Jahren aus.",
              answer: true,
              why: {
                de: "»seit zwölf Jahren« — zwölf ist mehr als zehn. Solche Rechenschritte sind im Hörverstehen üblich: Die Zahl wird genannt, der Vergleich musst du selbst ziehen.",
                en: "'for twelve years' — twelve is more than ten. Such small calculations are normal in listening: the number is given, the comparison is yours to make.",
                it: "»da dodici anni«: dodici è più di dieci. Il numero è dato, il confronto lo fai tu.",
                bn: "»বারো বছর ধরে« — বারো দশের বেশি। এমন ছোট হিসাব শ্রবণ পরীক্ষায় স্বাভাবিক: সংখ্যা দেওয়া থাকে, তুলনাটা আপনাকেই করতে হয়।",
              },
            },
            {
              nr: 7,
              statement: "Als Erstes sieht er sich die Schulnoten an.",
              answer: false,
              why: {
                de: "»Ehrlich gesagt nicht auf die Noten. Ich schaue zuerst, ob jemand … geschrieben hat, warum er zu UNS will.« Das Wort »zuerst« kommt vor — aber bei etwas anderem.",
                en: "'Honestly, not at the marks. I look first at whether someone has written why they want to come to US.' The word 'zuerst' does occur — but attached to something else.",
                it: "»Sinceramente non i voti. Guardo prima se qualcuno ha scritto perché vuole venire da NOI.«",
                bn: "»সত্যি বলতে নম্বরে নয়। আমি প্রথমে দেখি কেউ লিখেছে কি না কেন সে আমাদের কাছেই আসতে চায়।« »zuerst« শব্দটি আছে — কিন্তু অন্য কিছুর সঙ্গে।",
              },
            },
            {
              nr: 8,
              statement: "Er ist der Meinung, dass man sehr gutes Deutsch braucht.",
              answer: false,
              why: {
                de: "»Das höre ich auch oft, aber ich sehe das anders. B eins reicht für den Anfang völlig.« Die Moderatorin gibt die Meinung ANDERER wieder; er widerspricht ihr. Fremde Meinungen im Interview sind eine der häufigsten Fallen — frag dich immer: Wer sagt das eigentlich?",
                en: "'I hear that a lot too, but I see it differently. B1 is quite enough to begin with.' The presenter reports OTHER people's view; he contradicts it. Reported opinions are one of the commonest traps — always ask: who is actually saying this?",
                it: "»Lo sento dire spesso, ma la penso diversamente.« La conduttrice riporta l'opinione di ALTRI.",
                bn: "»আমিও প্রায়ই শুনি, কিন্তু আমি ভিন্নভাবে দেখি। শুরুর জন্য B1-ই যথেষ্ট।« উপস্থাপক অন্যদের মত বলছেন; তিনি তা খণ্ডন করেন। সবসময় ভাবুন: আসলে কে বলছে?",
              },
            },
            {
              nr: 9,
              statement: "Ihm ist wichtig, dass Auszubildende nachfragen.",
              answer: true,
              why: {
                de: "»Was zählt, ist, dass jemand nachfragt, wenn er etwas nicht verstanden hat.« Er begründet es sogar: Schweigen kostet ihn mehr Zeit.",
                en: "'What counts is that someone asks when they have not understood something.' He even gives the reason: staying silent costs him more time.",
                it: "»Ciò che conta è che qualcuno chieda quando non ha capito.«",
                bn: "»যা গুরুত্বপূর্ণ তা হলো কেউ না বুঝলে জিজ্ঞেস করে।« কারণও বলেন: চুপ থাকলে তাঁর বেশি সময় নষ্ট হয়।",
              },
            },
            {
              nr: 10,
              statement: "Er bekommt jedes Jahr etwa sechzig Bewerbungen für zwei Plätze.",
              answer: true,
              why: {
                de: "»Für zwei Plätze etwa sechzig.« Beide Zahlen stehen im Satz, und die Aussage ordnet sie richtig zu.",
                en: "'For two places, about sixty.' Both figures are in the sentence, and the statement matches them up correctly.",
                it: "»Per due posti, circa sessanta.« Entrambi i numeri sono nella frase.",
                bn: "»দুটি জায়গার জন্য প্রায় ষাটটি।« দুটি সংখ্যাই বাক্যে আছে, আর বক্তব্যটি ঠিকভাবেই মেলায়।",
              },
            },
            {
              nr: 11,
              statement: "Vor zehn Jahren waren es weniger Bewerbungen.",
              answer: false,
              why: {
                de: "»Klingt viel, ist aber weniger als vor zehn Jahren. Damals waren es über hundert.« Früher mehr, heute weniger — die Aussage dreht die Richtung um. Bei Vergleichen immer prüfen, welche Seite größer ist.",
                en: "'Sounds a lot, but it is fewer than ten years ago. Back then there were over a hundred.' More before, fewer now — the statement reverses the direction. With comparisons, always check which side is bigger.",
                it: "»Sembra tanto, ma è meno di dieci anni fa. Allora erano oltre cento.« L'affermazione inverte la direzione.",
                bn: "»শুনতে অনেক, কিন্তু দশ বছর আগের চেয়ে কম। তখন ছিল একশোর বেশি।« আগে বেশি, এখন কম — বক্তব্যটি দিক উল্টে দিয়েছে।",
              },
            },
            {
              nr: 12,
              statement: "Es gibt in seinem Betrieb eine Altersgrenze.",
              answer: false,
              why: {
                de: "»Eine Altersgrenze haben wir weder im Gesetz noch im Betrieb.« »weder … noch« ist eine doppelte Verneinung: nicht das eine und auch nicht das andere. Sie wird schnell gesprochen und deshalb oft überhört.",
                en: "'We have no age limit, neither in law nor in the company.' 'weder … noch' is a double negative: not one and not the other either. It is spoken quickly and so is often missed.",
                it: "»Non abbiamo limiti d'età, né per legge né in azienda.« »weder … noch« è una doppia negazione.",
                bn: "»বয়সসীমা আমাদের আইনেও নেই, কোম্পানিতেও নেই।« »weder … noch« দ্বৈত নেতিবাচক। দ্রুত বলা হয় বলে প্রায়ই কান এড়ায়।",
              },
            },
            {
              nr: 13,
              statement: "Sein bester Auszubildender der letzten Jahre war über dreißig.",
              answer: true,
              why: {
                de: "»Mein bester Azubi der letzten Jahre war einunddreißig« — einunddreißig ist über dreißig. Er nennt ihn außerdem als Beweis dafür, dass das Alter keine Rolle spielt.",
                en: "'My best apprentice of recent years was thirty-one' — thirty-one is over thirty. He names him as proof that age does not matter.",
                it: "»Il mio miglior apprendista degli ultimi anni aveva trentuno anni.«",
                bn: "»সাম্প্রতিক বছরগুলোর সেরা প্রশিক্ষণার্থীর বয়স ছিল একত্রিশ« — একত্রিশ ত্রিশের বেশি।",
              },
            },
            {
              nr: 14,
              statement: "Ein Praktikum bei ihm ist bei gleicher Eignung ein Vorteil.",
              answer: true,
              why: {
                de: "»wer bei uns ein Praktikum gemacht hat, bekommt bei gleicher Eignung den Platz«. Die Einschränkung »bei gleicher Eignung« steht sowohl im Text als auch in der Aussage — genau deshalb ist sie richtig.",
                en: "'whoever has done a placement with us gets the place, other things being equal'. The qualifier 'bei gleicher Eignung' is in both the text and the statement — which is exactly why it is true.",
                it: "»chi ha fatto un tirocinio da noi ottiene il posto a parità di idoneità«.",
                bn: "»যিনি আমাদের এখানে ইন্টার্নশিপ করেছেন, সমান যোগ্যতায় তিনিই জায়গাটি পান«। শর্তটি লেখা ও বক্তব্য দুটোতেই আছে।",
              },
            },
            {
              nr: 15,
              statement: "Wer die Prüfung nicht besteht, muss die Ausbildung beenden.",
              answer: false,
              why: {
                de: "»Dann wiederholt er sie. Das ist kein Drama.« Und weiter: »fast alle schaffen es dann«. Nichts davon bedeutet aufhören.",
                en: "'Then they repeat it. That's no disaster.' And further: 'almost all of them manage it then'. None of that means stopping.",
                it: "»Allora lo ripete. Non è un dramma.« E poi: »quasi tutti ce la fanno«.",
                bn: "»তখন আবার দেয়। এটা বিপর্যয় নয়।« আরও: »তখন প্রায় সবাই পেরে যায়«। এর কোনোটাই ছেড়ে দেওয়া বোঝায় না।",
              },
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    {
      teil: 3,
      maxPlays: 2,
      instruction: {
        de: "Du hörst fünf kurze Ansagen — jede zweimal. Ist die Aussage richtig oder falsch?",
        en: "You will hear five short announcements, each twice. Is the statement true or false?",
        it: "Ascolterai cinque brevi annunci, ciascuno due volte. L'affermazione è vera o falsa?",
        bn: "আপনি পাঁচটি ছোট ঘোষণা শুনবেন, প্রতিটি দুবার। বক্তব্যটি সত্য না মিথ্যা?",
      },
      tracks: [
        {
          id: "h5-t3-1",
          label: {
            de: "Ansage der IHK",
            en: "Chamber of commerce announcement",
            it: "Annuncio della camera di commercio",
            bn: "চেম্বার অব কমার্সের ঘোষণা",
          },
          transcript:
            "Ein Hinweis zur Anmeldung für die Abschlussprüfung: Diese übernimmt Ihr Ausbildungsbetrieb für Sie. Sie selbst müssen nichts tun. Sollten Sie bis Ende Februar keine Bestätigung erhalten haben, fragen Sie bitte in Ihrem Betrieb nach.",
          items: [
            {
              nr: 16,
              statement: "Die Auszubildenden melden sich selbst zur Prüfung an.",
              answer: false,
              why: {
                de: "»Diese übernimmt Ihr Ausbildungsbetrieb für Sie. Sie selbst müssen nichts tun.« Der Betrieb meldet an, nicht man selbst. Das Nachfragen im letzten Satz ist etwas anderes als das Anmelden.",
                en: "'Your training company does it for you. You yourself need do nothing.' The company registers you, not you yourself. Chasing it up in the last sentence is not the same as registering.",
                it: "»Se ne occupa la sua azienda formativa. Lei non deve fare nulla.«",
                bn: "»এটি আপনার প্রশিক্ষণ প্রতিষ্ঠানই করে দেয়। আপনাকে কিছু করতে হবে না।« প্রতিষ্ঠানই নিবন্ধন করে। শেষ বাক্যের খোঁজ নেওয়া নিবন্ধন নয়।",
              },
            },
          ],
        },
        {
          id: "h5-t3-2",
          label: {
            de: "Durchsage im Berufskolleg",
            en: "Announcement at the vocational college",
            it: "Annuncio al collegio professionale",
            bn: "বৃত্তিমূলক কলেজের ঘোষণা",
          },
          transcript:
            "Liebe Schülerinnen und Schüler, die Bibliothek ist ab nächster Woche auch samstags geöffnet, allerdings nur während der Prüfungszeit. Nach den Prüfungen gelten wieder die normalen Zeiten von Montag bis Freitag.",
          items: [
            {
              nr: 17,
              statement: "Die Bibliothek hat ab jetzt immer samstags geöffnet.",
              answer: false,
              why: {
                de: "»allerdings nur während der Prüfungszeit« — eine befristete Ausnahme, kein Dauerzustand. Der Nachsatz sagt es noch einmal: danach gelten wieder die normalen Zeiten.",
                en: "'but only during the exam period' — a temporary exception, not a permanent state. The closing sentence repeats it: normal hours return afterwards.",
                it: "»però solo durante il periodo d'esame«: un'eccezione temporanea.",
                bn: "»তবে কেবল পরীক্ষার সময়ে« — সাময়িক ব্যতিক্রম, স্থায়ী নয়। শেষ বাক্যটি আবার তা বলে।",
              },
            },
          ],
        },
        {
          id: "h5-t3-3",
          label: {
            de: "Ansage eines Weiterbildungsanbieters",
            en: "Training provider announcement",
            it: "Annuncio di un ente di formazione",
            bn: "প্রশিক্ষণ প্রতিষ্ঠানের ঘোষণা",
          },
          transcript:
            "Guten Tag und willkommen. Unser Kurs Deutsch für den Beruf beginnt am ersten Oktober. Es sind noch vier Plätze frei. Die Kosten betragen dreihundert Euro, für Teilnehmende mit Bildungsgutschein ist der Kurs kostenlos.",
          items: [
            {
              nr: 18,
              statement: "Manche Teilnehmer zahlen für den Kurs nichts.",
              answer: true,
              why: {
                de: "»für Teilnehmende mit Bildungsgutschein ist der Kurs kostenlos«. Beide Preise werden genannt — dreihundert Euro für die einen, nichts für die anderen. Die Aussage trifft auf die zweite Gruppe zu, und »manche« deckt genau das ab.",
                en: "'for participants with a training voucher the course is free'. Both prices are given — three hundred euros for some, nothing for others. The statement applies to the second group, and 'manche' covers exactly that.",
                it: "»per chi ha il buono formativo il corso è gratuito«. Vengono detti entrambi i prezzi.",
                bn: "»Bildungsgutschein থাকা অংশগ্রহণকারীদের জন্য কোর্সটি বিনামূল্যে«। দুটি দামই বলা — কারও জন্য তিনশো ইউরো, কারও জন্য কিছু নয়।",
              },
            },
          ],
        },
        {
          id: "h5-t3-4",
          label: {
            de: "Nachricht der Berufsberatung",
            en: "Careers advice message",
            it: "Messaggio dell'orientamento professionale",
            bn: "পেশা পরামর্শের বার্তা",
          },
          transcript:
            "Guten Tag, hier ist die Berufsberatung. Ihr Termin am Donnerstag bleibt bestehen. Bringen Sie bitte Ihre Zeugnisse mit, auch die aus dem Ausland. Eine Übersetzung brauchen Sie nicht — die lassen wir bei Bedarf selbst anfertigen.",
          items: [
            {
              nr: 19,
              statement: "Die ausländischen Zeugnisse muss man übersetzen lassen.",
              answer: false,
              why: {
                de: "»Eine Übersetzung brauchen Sie nicht — die lassen wir bei Bedarf selbst anfertigen.« Mitbringen ja, übersetzen nein. Zwei Anweisungen in einem Atemzug, und die Aussage mischt sie.",
                en: "'You do not need a translation — we have one made ourselves if required.' Bring them yes, translate them no. Two instructions in one breath, and the statement mixes them.",
                it: "»Non serve una traduzione: se necessario la facciamo fare noi.« Portarli sì, tradurli no.",
                bn: "»অনুবাদ আপনার লাগবে না — প্রয়োজনে আমরাই করিয়ে নিই।« আনতে হবে, অনুবাদ নয়। এক নিঃশ্বাসে দুটি নির্দেশ, বক্তব্য সেগুলো মিশিয়ে ফেলেছে।",
              },
            },
          ],
        },
        {
          id: "h5-t3-5",
          label: {
            de: "Durchsage im Betrieb",
            en: "Announcement at the company",
            it: "Annuncio in azienda",
            bn: "কোম্পানির ঘোষণা",
          },
          transcript:
            "Eine Information für alle Auszubildenden: Wer im Sommer an der Prüfung teilnimmt, bekommt in der Woche davor zwei Tage frei zum Lernen. Diese Tage werden nicht vom Urlaub abgezogen. Sprechen Sie bitte rechtzeitig mit Ihrem Ausbilder, welche Tage es sein sollen.",
          items: [
            {
              nr: 20,
              statement: "Die zwei freien Tage gehen vom Urlaub ab.",
              answer: false,
              why: {
                de: "»Diese Tage werden nicht vom Urlaub abgezogen.« Der Satz enthält genau die Wörter der Aussage plus ein »nicht« — die einfachste und zugleich am leichtesten überhörte Form einer Falschaussage.",
                en: "'These days are not deducted from your holiday.' The sentence contains exactly the statement's words plus a 'nicht' — the simplest and most easily missed form of a false statement.",
                it: "»Questi giorni non vengono detratti dalle ferie.« La frase contiene le stesse parole più un »nicht«.",
                bn: "»এই দিনগুলো ছুটি থেকে কাটা হয় না।« বাক্যটিতে বক্তব্যের শব্দগুলোই আছে, সঙ্গে একটি »nicht« — সবচেয়ে সরল, আবার সবচেয়ে সহজে কান-এড়ানো ফাঁদ।",
              },
            },
          ],
        },
      ],
    },
  ],
};
