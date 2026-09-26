import type { HoerSet } from "./types";

/**
 * HOER-07 — Im Laden, am Telefon und beim Kundendienst.
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Service calls are where German gets politely evasive, and the listening
 * traps follow from that:
 *   · an offer that sounds like a yes and is a no (item 2),
 *   · "in der Regel" — usually, therefore not always (item 5),
 *   · a price quoted for one thing while the statement claims it for
 *     another (item 17),
 *   · a speaker who names a rule and then says it does not apply here
 *     (item 9),
 *   · and one item where the customer, not the shop, is shown to be in
 *     the wrong (item 12), because the exam does not always take your
 *     side.
 */
export const hoer07: HoerSet = {
  code: "HOER-07",

  title: {
    de: "Im Laden, am Telefon und beim Kundendienst",
    en: "In the shop, on the phone and at customer service",
    it: "In negozio, al telefono e al servizio clienti",
    bn: "দোকানে, ফোনে ও গ্রাহকসেবায়",
  },

  intro: {
    de: "Drei Teile wie in der Prüfung. Teil 1 und 2 hörst du nur einmal, Teil 3 zweimal. Achte auf höfliche Formulierungen — im Deutschen steckt das Nein oft mitten im freundlichen Satz.",
    en: "Three parts, as in the exam. Parts 1 and 2 once, part 3 twice. Watch the polite phrasing — in German the 'no' often sits in the middle of a friendly sentence.",
    it: "Tre parti, come nell'esame. Attenzione alle formule di cortesia: in tedesco il no sta spesso in mezzo a una frase gentile.",
    bn: "পরীক্ষার মতোই তিনটি অংশ। ভদ্র বাক্যভঙ্গিতে খেয়াল রাখুন — জার্মানে »না« প্রায়ই বন্ধুত্বপূর্ণ বাক্যের মাঝখানেই থাকে।",
  },

  teile: [
    // ------------------------------------------------------------------
    {
      teil: 1,
      maxPlays: 1,
      instruction: {
        de: "Du hörst fünf kurze Nachrichten und Durchsagen — jede nur einmal. Ist die Aussage richtig oder falsch?",
        en: "You will hear five short messages and announcements, each only once. Is the statement true or false?",
        it: "Ascolterai cinque brevi messaggi e annunci, ciascuno una sola volta. L'affermazione è vera o falsa?",
        bn: "আপনি পাঁচটি ছোট বার্তা ও ঘোষণা শুনবেন, প্রতিটি একবারই। বক্তব্যটি সত্য না মিথ্যা?",
      },
      tracks: [
        {
          id: "h7-t1-1",
          label: {
            de: "Durchsage im Supermarkt",
            en: "Supermarket announcement",
            it: "Annuncio al supermercato",
            bn: "সুপারমার্কেটের ঘোষণা",
          },
          transcript:
            "Liebe Kundinnen und Kunden, wegen einer Störung können Sie an den Kassen zwei und drei zurzeit nur bar bezahlen. An Kasse eins und vier funktioniert die Kartenzahlung wie gewohnt. Wir bitten um Ihr Verständnis.",
          items: [
            {
              nr: 1,
              statement: "Im ganzen Supermarkt kann man nur bar bezahlen.",
              answer: false,
              why: {
                de: "»An Kasse eins und vier funktioniert die Kartenzahlung wie gewohnt.« Betroffen sind nur zwei von vier Kassen. Eine Störung an einer Stelle ist keine Störung überall — »im ganzen« ist deshalb zu weit gefasst.",
                en: "'At tills one and four card payment works as usual.' Only two of four tills are affected. A fault in one place is not a fault everywhere — 'in the whole shop' is too broad.",
                it: "»Alle casse uno e quattro il pagamento con carta funziona normalmente.« Solo due casse su quattro sono coinvolte.",
                bn: "»এক ও চার নম্বর কাউন্টারে কার্ড পেমেন্ট স্বাভাবিকভাবেই চলে।« চারটির মধ্যে দুটি কাউন্টারই কেবল প্রভাবিত।",
              },
            },
          ],
        },
        {
          id: "h7-t1-2",
          label: {
            de: "Anruf vom Kundendienst",
            en: "Call from customer service",
            it: "Chiamata dal servizio clienti",
            bn: "গ্রাহকসেবা থেকে ফোন",
          },
          transcript:
            "Guten Tag, Herr Islam, hier ist der Kundendienst von Elektro Wagner. Wir haben Ihre Reklamation erhalten. Das Gerät ist leider nicht mehr zu reparieren. Wir bieten Ihnen gern einen Gutschein über den Kaufpreis an — Geld können wir in diesem Fall nicht auszahlen.",
          items: [
            {
              nr: 2,
              statement: "Herr Islam bekommt sein Geld zurück.",
              answer: false,
              why: {
                de: "»Wir bieten Ihnen gern einen Gutschein über den Kaufpreis an — Geld können wir in diesem Fall nicht auszahlen.« Der Satz klingt freundlich und ist trotzdem eine Absage. Ein Gutschein ist kein Geld: Man kann ihn nur in demselben Laden ausgeben.",
                en: "'We are glad to offer you a voucher — we cannot pay out cash in this case.' The sentence sounds friendly and is still a refusal. A voucher is not money: you can only spend it in that same shop.",
                it: "»Le offriamo volentieri un buono — in questo caso non possiamo rimborsare in denaro.« Suona gentile ma è un rifiuto.",
                bn: "»আমরা সানন্দে একটি ভাউচার দিচ্ছি — এ ক্ষেত্রে নগদ দিতে পারি না।« বাক্যটি বন্ধুত্বপূর্ণ শোনায়, তবু এটি প্রত্যাখ্যান।",
              },
            },
          ],
        },
        {
          id: "h7-t1-3",
          label: {
            de: "Nachricht eines Nachbarn",
            en: "Message from a neighbour",
            it: "Messaggio di un vicino",
            bn: "এক প্রতিবেশীর বার্তা",
          },
          transcript:
            "Hallo, hier ist Ernst von nebenan. Dein Paket ist heute Morgen gekommen, ich habe es angenommen. Es steht bei mir im Flur. Ich bin bis acht Uhr abends zu Hause, danach fahre ich weg und komme erst Sonntag zurück.",
          items: [
            {
              nr: 3,
              statement: "Ernst ist bis Sonntag durchgehend zu Hause.",
              answer: false,
              why: {
                de: "»Ich bin bis acht Uhr abends zu Hause, danach fahre ich weg und komme erst Sonntag zurück.« Bis acht Uhr ist er da, dann erst wieder ab Sonntag — dazwischen niemand. »durchgehend« ist genau das, was die Nachricht ausschließt.",
                en: "'I'm home until eight in the evening, after that I go away and am not back until Sunday.' He is there until eight, then again from Sunday — nobody in between. 'durchgehend' is exactly what the message rules out.",
                it: "»Sono a casa fino alle otto, poi parto e torno solo domenica.« Nel mezzo non c'è nessuno.",
                bn: "»রাত আটটা পর্যন্ত বাসায় আছি, তারপর চলে যাব, ফিরব রবিবার।« মাঝখানে কেউ নেই। বক্তব্যটি দুটি সময়বিন্দুকে একটানা সময় বানিয়ে ফেলেছে।",
              },
            },
          ],
        },
        {
          id: "h7-t1-4",
          label: {
            de: "Ansage einer Hotline",
            en: "Hotline recorded message",
            it: "Messaggio di una hotline",
            bn: "হটলাইনের বার্তা",
          },
          transcript:
            "Willkommen bei Shop vierundzwanzig. Rücksendungen bearbeiten wir in der Regel innerhalb von fünf Werktagen. In Zeiten mit vielen Bestellungen kann es etwas länger dauern. Den Stand sehen Sie jederzeit in Ihrem Kundenkonto.",
          items: [
            {
              nr: 4,
              statement: "Eine Rücksendung wird immer innerhalb von fünf Werktagen bearbeitet.",
              answer: false,
              why: {
                de: "»in der Regel innerhalb von fünf Werktagen« — in der Regel heißt: meistens, also nicht immer. Der nächste Satz sagt sogar, wann es länger dauert. »In der Regel« ist eines der wichtigsten Signalwörter der ganzen Prüfung: Es macht aus einem Versprechen eine Tendenz.",
                en: "'as a rule within five working days' — in der Regel means usually, therefore not always. The next sentence even says when it takes longer. 'In der Regel' is one of the most important signal phrases in the whole exam: it turns a promise into a tendency.",
                it: "»di norma entro cinque giorni lavorativi«: di norma significa di solito, non sempre.",
                bn: "»সাধারণত পাঁচ কর্মদিবসের মধ্যে« — in der Regel মানে বেশিরভাগ সময়, অর্থাৎ সবসময় নয়। পরের বাক্যেই বলা কখন দেরি হয়।",
              },
            },
          ],
        },
        {
          id: "h7-t1-5",
          label: {
            de: "Nachricht einer Kollegin",
            en: "Message from a colleague",
            it: "Messaggio di una collega",
            bn: "এক সহকর্মীর বার্তা",
          },
          transcript:
            "Hi, ich bin's, Petra. Ich war heute in dem Laden, von dem ich dir erzählt habe. Die Jacke, die du wolltest, gibt es leider nicht mehr in deiner Größe. In Blau hätten sie noch eine, aber du wolltest ja Schwarz. Sag mir Bescheid, ob ich sie trotzdem mitnehmen soll.",
          items: [
            {
              nr: 5,
              statement: "Die Jacke ist in der gewünschten Größe nicht mehr da.",
              answer: true,
              why: {
                de: "»gibt es leider nicht mehr in deiner Größe«. Die blaue Jacke gibt es zwar — aber die Aussage fragt nach der Größe, nicht nach der Farbe. Lies die Aussage genau, bevor du das Gehörte zuordnest.",
                en: "'is unfortunately no longer available in your size'. The blue jacket does exist — but the statement asks about the size, not the colour. Read the statement closely before matching what you heard.",
                it: "»purtroppo non c'è più nella tua taglia«. La giacca blu c'è, ma l'affermazione riguarda la taglia.",
                bn: "»দুঃখিত, আপনার মাপে আর নেই«। নীল জ্যাকেটটি আছে — কিন্তু বক্তব্যটি মাপ নিয়ে, রং নিয়ে নয়।",
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
        de: "Du hörst ein Beratungsgespräch — nur einmal. Entscheide bei jeder Aussage: richtig oder falsch?",
        en: "You will hear one advice conversation, only once. Decide for each statement: true or false?",
        it: "Ascolterai una consulenza, una sola volta. Decidi per ogni affermazione: vero o falso?",
        bn: "আপনি একটি পরামর্শ আলাপ শুনবেন, একবারই। প্রতিটি বক্তব্য সম্পর্কে ঠিক করুন: সত্য না মিথ্যা?",
      },
      tracks: [
        {
          id: "h7-t2-1",
          label: {
            de: "Gespräch in der Verbraucherzentrale",
            en: "Conversation at the consumer advice centre",
            it: "Colloquio al centro tutela consumatori",
            bn: "ভোক্তা পরামর্শ কেন্দ্রে আলাপ",
          },
          transcript:
            "Berater: Guten Tag, nehmen Sie Platz. Worum geht es? " +
            "Frau Novak: Ich habe vor vier Monaten einen Staubsauger gekauft, und jetzt geht er nicht mehr. Der Laden sagt, die Garantie sei abgelaufen. " +
            "Berater: Moment. Wie lange war die Garantie denn? " +
            "Frau Novak: Drei Monate, sagt der Verkäufer. " +
            "Berater: Dann verwechselt er zwei Dinge — oder hofft, dass Sie sie verwechseln. Die Garantie ist eine freiwillige Zusage des Herstellers. Daneben gibt es Ihr gesetzliches Recht gegenüber dem Verkäufer, und das gilt zwei Jahre. Vier Monate sind also kein Problem. " +
            "Frau Novak: Das wusste ich nicht. Muss ich beweisen, dass ich nichts kaputt gemacht habe? " +
            "Berater: Im ersten Jahr nicht. Da muss der Verkäufer beweisen, dass das Gerät beim Kauf in Ordnung war. Nach zwölf Monaten dreht sich das um, dann sind Sie in der Pflicht. Aber Sie sind ja erst bei vier. " +
            "Frau Novak: Und wenn der Laden sich weigert? " +
            "Berater: Dann schreiben Sie ihm schriftlich und setzen eine Frist, zwei Wochen reichen. Wichtig: Sie müssen ihm erst die Chance zur Reparatur geben. Sofort das Geld zurückverlangen können Sie nicht. " +
            "Frau Novak: Ich habe den Kassenbon leider nicht mehr. " +
            "Berater: Das ist ärgerlich, aber nicht das Ende. Der Bon ist nur ein Beweismittel unter mehreren. Haben Sie mit Karte bezahlt? " +
            "Frau Novak: Ja, mit EC-Karte. " +
            "Berater: Dann haben Sie den Kontoauszug, und der reicht völlig. " +
            "Frau Novak: Was kostet mich Ihre Hilfe? " +
            "Berater: Die Beratung heute kostet fünfzehn Euro. Wenn wir einen Brief für Sie schreiben, kommen noch einmal fünfzehn dazu. Bei geringem Einkommen entfällt beides, dafür bräuchte ich aber einen Nachweis. " +
            "Frau Novak: Den habe ich nicht dabei. " +
            "Berater: Kein Problem, Sie können ihn nachreichen. Fangen wir an.",
          items: [
            {
              nr: 6,
              statement: "Der Staubsauger ist seit vier Monaten kaputt.",
              answer: false,
              why: {
                de: "»vor vier Monaten einen Staubsauger gekauft, und jetzt geht er nicht mehr«. Gekauft vor vier Monaten, kaputt seit jetzt. Die Aussage verschiebt die vier Monate vom Kauf auf den Defekt — ein sehr häufiger Prüfungstrick mit Zeitangaben.",
                en: "'bought a vacuum cleaner four months ago, and now it has stopped working'. Bought four months ago, broken now. The statement moves the four months from the purchase to the fault — a very common exam trick with time expressions.",
                it: "»comprato quattro mesi fa, e ora non funziona più«. L'affermazione sposta i quattro mesi dall'acquisto al guasto.",
                bn: "»চার মাস আগে কেনা, আর এখন চলছে না«। কেনা চার মাস আগে, নষ্ট এখন। বক্তব্যটি চার মাসকে কেনা থেকে সরিয়ে নষ্ট হওয়ায় বসিয়েছে।",
              },
            },
            {
              nr: 7,
              statement: "Der Verkäufer hat gesagt, die Garantie sei abgelaufen.",
              answer: true,
              why: {
                de: "»Der Laden sagt, die Garantie sei abgelaufen.« Die Form »sei« zeigt, dass jemand anderes das behauptet — sie gibt wieder, was der Laden gesagt hat. Ob es stimmt, ist eine andere Frage; die Aussage fragt nur, ob er es gesagt hat.",
                en: "'The shop says the guarantee has run out.' The form 'sei' shows this is someone else's claim — she is reporting what the shop said. Whether it is true is another matter; the statement only asks whether he said it.",
                it: "La forma »sei« indica che è un'affermazione altrui: riporta ciò che ha detto il negozio.",
                bn: "»sei« রূপটি দেখায় এটি অন্যের দাবি — তিনি দোকানের কথাই বলছেন। সত্য কি না আলাদা প্রশ্ন; বক্তব্য জানতে চায় তিনি বলেছেন কি না।",
              },
            },
            {
              nr: 8,
              statement: "Das gesetzliche Recht gilt länger als die Garantie des Herstellers.",
              answer: true,
              why: {
                de: "Garantie drei Monate, gesetzliches Recht zwei Jahre — zwei Jahre sind länger. Der Berater trennt die beiden Begriffe ausdrücklich: »Die Garantie ist eine freiwillige Zusage des Herstellers. Daneben gibt es Ihr gesetzliches Recht.«",
                en: "Guarantee three months, legal right two years — two years is longer. The adviser separates the two terms explicitly: 'The guarantee is a voluntary promise from the manufacturer. Alongside it you have your legal right.'",
                it: "Garanzia tre mesi, diritto di legge due anni. Il consulente distingue esplicitamente i due concetti.",
                bn: "গ্যারান্টি তিন মাস, আইনি অধিকার দুই বছর — দুই বছর দীর্ঘ। পরামর্শদাতা দুটি ধারণা স্পষ্ট আলাদা করেন।",
              },
            },
            {
              nr: 9,
              statement: "Frau Novak muss beweisen, dass sie das Gerät nicht beschädigt hat.",
              answer: false,
              why: {
                de: "»Im ersten Jahr nicht. Da muss der Verkäufer beweisen … Nach zwölf Monaten dreht sich das um … Aber Sie sind ja erst bei vier.« Die Regel für später wird genannt und dann für diesen Fall ausgeschlossen. Wer nur »dann sind Sie in der Pflicht« hört, antwortet falsch.",
                en: "'Not in the first year. There the seller must prove … After twelve months it reverses … But you are only at four.' The later rule is named and then ruled out for this case. Anyone who only hears 'you are the one who must prove it' answers wrongly.",
                it: "»Nel primo anno no … dopo dodici mesi si inverte … ma lei è solo a quattro.« La regola successiva viene nominata e poi esclusa.",
                bn: "»প্রথম বছরে নয়। তখন বিক্রেতাকে প্রমাণ করতে হয় … বারো মাস পরে উল্টে যায় … কিন্তু আপনার তো মাত্র চার।« পরের নিয়মটি বলা হয়ে এই ক্ষেত্রে বাদ দেওয়া হয়।",
              },
            },
            {
              nr: 10,
              statement: "Sie kann sofort ihr Geld zurückverlangen.",
              answer: false,
              why: {
                de: "»Sie müssen ihm erst die Chance zur Reparatur geben. Sofort das Geld zurückverlangen können Sie nicht.« Der Berater sagt beides — erst die Regel, dann ausdrücklich das Gegenteil der Aussage.",
                en: "'You must first give him the chance to repair it. You cannot demand the money back straight away.' The adviser says both — first the rule, then explicitly the opposite of the statement.",
                it: "»Deve prima dargli la possibilità di riparare. Non può chiedere subito il rimborso.«",
                bn: "»আগে তাঁকে মেরামতের সুযোগ দিতে হবে। সঙ্গে সঙ্গে টাকা ফেরত চাইতে পারবেন না।«",
              },
            },
            {
              nr: 11,
              statement: "Ohne Kassenbon kann sie nichts machen.",
              answer: false,
              why: {
                de: "»Das ist ärgerlich, aber nicht das Ende. Der Bon ist nur ein Beweismittel unter mehreren.« Und gleich darauf die Lösung: der Kontoauszug. Achte auf »aber« — es kündigt hier wie so oft die Einschränkung an.",
                en: "'That's annoying, but not the end. The receipt is only one piece of evidence among several.' And straight after, the solution: the bank statement. Watch for 'aber' — here as so often it announces the limitation.",
                it: "»È seccante, ma non è la fine. Lo scontrino è solo una prova fra tante.«",
                bn: "»বিরক্তিকর, তবে শেষ নয়। রসিদ কেবল একাধিক প্রমাণের একটি।« আর সঙ্গে সঙ্গেই সমাধান: ব্যাংক স্টেটমেন্ট।",
              },
            },
            {
              nr: 12,
              statement: "Sie hat mit Karte bezahlt.",
              answer: true,
              why: {
                de: "»Ja, mit EC-Karte.« Eine kurze Antwort auf eine direkte Frage — in Teil 2 gibt es immer ein paar solcher Items, und sie sind geschenkt, wenn man konzentriert bleibt.",
                en: "'Yes, by debit card.' A short answer to a direct question — Teil 2 always has a few such items, and they are free marks if you stay focused.",
                it: "»Sì, con bancomat.« Una risposta breve a una domanda diretta.",
                bn: "»হ্যাঁ, EC-কার্ডে।« সরাসরি প্রশ্নের ছোট উত্তর — মনোযোগ থাকলে এগুলো সহজ নম্বর।",
              },
            },
            {
              nr: 13,
              statement: "Die Beratung und der Brief kosten zusammen dreißig Euro.",
              answer: true,
              why: {
                de: "»Die Beratung heute kostet fünfzehn Euro. Wenn wir einen Brief für Sie schreiben, kommen noch einmal fünfzehn dazu.« Fünfzehn plus fünfzehn — die Prüfung erwartet, dass du selbst addierst. »kommen dazu« heißt immer: zusätzlich.",
                en: "'The advice today costs fifteen euros. If we write a letter for you, another fifteen is added.' Fifteen plus fifteen — the exam expects you to add up yourself. 'kommen dazu' always means: on top.",
                it: "»La consulenza costa quindici euro. Se scriviamo una lettera, altri quindici.« Quindici più quindici.",
                bn: "»আজকের পরামর্শ পনেরো ইউরো। চিঠি লিখলে আরও পনেরো যোগ হবে।« পনেরো + পনেরো — পরীক্ষা চায় আপনি নিজেই যোগ করুন।",
              },
            },
            {
              nr: 14,
              statement: "Bei geringem Einkommen ist die Beratung kostenlos.",
              answer: true,
              why: {
                de: "»Bei geringem Einkommen entfällt beides« — entfallen heißt: wegfallen, nicht anfallen. Die Bedingung dazu (ein Nachweis) ändert nichts daran, dass es kostenlos ist.",
                en: "'With a low income both are waived' — entfallen means they do not apply. The condition attached (proof) does not change the fact that it is free.",
                it: "»Con un reddito basso decadono entrambi«: entfallen significa che non si pagano.",
                bn: "»কম আয় হলে দুটোই বাদ যায়« — entfallen মানে লাগে না। শর্তটি (প্রমাণপত্র) বিনামূল্যে হওয়ার সত্যটা বদলায় না।",
              },
            },
            {
              nr: 15,
              statement: "Den Nachweis über ihr Einkommen kann sie später bringen.",
              answer: true,
              why: {
                de: "»Kein Problem, Sie können ihn nachreichen.« Nachreichen heißt: später bringen. Dasselbe Wort kommt im Lesetext über die Arztpraxis vor — es lohnt sich, es zu behalten.",
                en: "'No problem, you can hand it in later.' Nachreichen means to submit later. The same word appears in the reading text about the doctor's surgery — worth keeping.",
                it: "»Nessun problema, può consegnarlo dopo.« Nachreichen significa presentare in seguito.",
                bn: "»সমস্যা নেই, পরে দিতে পারবেন।« nachreichen মানে পরে জমা দেওয়া। দপ্তর নিয়ে মডেল টেস্টেও শব্দটি ছিল।",
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
          id: "h7-t3-1",
          label: {
            de: "Ansage im Möbelhaus",
            en: "Furniture store announcement",
            it: "Annuncio nel negozio di mobili",
            bn: "ফার্নিচার দোকানের ঘোষণা",
          },
          transcript:
            "Liebe Kundinnen und Kunden, unsere Lieferung innerhalb der Stadt kostet fünfundzwanzig Euro. Der Aufbau vor Ort ist nicht enthalten und wird extra berechnet. Ab einem Einkaufswert von tausend Euro liefern wir kostenlos.",
          items: [
            {
              nr: 16,
              statement: "Der Aufbau der Möbel ist im Lieferpreis enthalten.",
              answer: false,
              why: {
                de: "»Der Aufbau vor Ort ist nicht enthalten und wird extra berechnet.« Zwei Leistungen, zwei Preise — die Durchsage trennt sie ausdrücklich, und die Aussage wirft sie zusammen.",
                en: "'Assembly on site is not included and is charged separately.' Two services, two prices — the announcement separates them explicitly, and the statement merges them.",
                it: "»Il montaggio non è incluso e viene fatturato a parte.« Due servizi, due prezzi.",
                bn: "»স্থানে সংযোজন অন্তর্ভুক্ত নয়, আলাদা হিসাব হয়।« দুটি সেবা, দুটি দাম — ঘোষণাটি আলাদা করে, বক্তব্যটি মিশিয়ে ফেলে।",
              },
            },
          ],
        },
        {
          id: "h7-t3-2",
          label: {
            de: "Ansage einer Reparaturwerkstatt",
            en: "Repair shop message",
            it: "Messaggio di un'officina",
            bn: "মেরামত কর্মশালার বার্তা",
          },
          transcript:
            "Guten Tag, hier ist die Handy-Werkstatt am Markt. Ein Displaytausch kostet bei uns neunundachtzig Euro. Ein neuer Akku kostet neunundvierzig. Beides zusammen machen wir für hundertzwanzig.",
          items: [
            {
              nr: 17,
              statement: "Ein neuer Akku kostet neunundachtzig Euro.",
              answer: false,
              why: {
                de: "Neunundachtzig ist der Preis für den Displaytausch; der Akku kostet neunundvierzig. Drei Preise in drei Sätzen — schreib beim Hören mit, welcher Preis zu welcher Leistung gehört, sonst vertauscht man sie fast zwangsläufig.",
                en: "Eighty-nine is the price for the screen; the battery costs forty-nine. Three prices in three sentences — note down which price belongs to which service while listening, or you will almost inevitably swap them.",
                it: "Ottantanove è il prezzo del display; la batteria costa quarantanove. Tre prezzi in tre frasi.",
                bn: "ঊননব্বই ডিসপ্লে বদলের দাম; ব্যাটারি ঊনপঞ্চাশ। তিন বাক্যে তিন দাম — শোনার সময় কোন দাম কোন সেবার, লিখে রাখুন।",
              },
            },
          ],
        },
        {
          id: "h7-t3-3",
          label: {
            de: "Durchsage im Kaufhaus",
            en: "Department store announcement",
            it: "Annuncio nel grande magazzino",
            bn: "ডিপার্টমেন্ট স্টোরের ঘোষণা",
          },
          transcript:
            "Ein Hinweis zu unserer Rabattaktion: Die zwanzig Prozent gelten auf Winterkleidung. Ausgenommen sind Schuhe und bereits reduzierte Ware. Die Aktion läuft noch bis Samstag.",
          items: [
            {
              nr: 18,
              statement: "Auf Schuhe bekommt man ebenfalls zwanzig Prozent.",
              answer: false,
              why: {
                de: "»Ausgenommen sind Schuhe und bereits reduzierte Ware.« Ausgenommen heißt: gilt nicht für sie. Dieses eine Wort ist in Werbedurchsagen fast immer die Falle — es kommt spät und wird schnell gesprochen.",
                en: "'Shoes and already reduced items are excluded.' Ausgenommen means the offer does not apply to them. In advertising announcements this one word is nearly always the trap — it comes late and is spoken fast.",
                it: "»Sono escluse le scarpe e la merce già ribassata.« »Ausgenommen« è quasi sempre la trappola.",
                bn: "»জুতা ও আগেই ছাড় দেওয়া পণ্য বাদ।« ausgenommen মানে তাদের জন্য প্রযোজ্য নয়। বিজ্ঞাপনী ঘোষণায় এই শব্দটাই প্রায় সবসময় ফাঁদ।",
              },
            },
          ],
        },
        {
          id: "h7-t3-4",
          label: {
            de: "Ansage eines Onlineshops",
            en: "Online shop recorded message",
            it: "Messaggio di un negozio online",
            bn: "অনলাইন দোকানের বার্তা",
          },
          transcript:
            "Willkommen bei Shop vierundzwanzig. Möchten Sie etwas zurückschicken, drucken Sie bitte das Etikett in Ihrem Kundenkonto aus. Liegt der Bestellwert über fünfzig Euro, übernehmen wir das Porto. Darunter ziehen wir vier Euro neunzig ab.",
          items: [
            {
              nr: 19,
              statement: "Bei einer Bestellung über sechzig Euro ist die Rücksendung kostenlos.",
              answer: true,
              why: {
                de: "»Liegt der Bestellwert über fünfzig Euro, übernehmen wir das Porto.« Sechzig ist mehr als fünfzig, also greift die Regel. Die Prüfung nennt eine Grenze und erwartet, dass du den Fall selbst einordnest.",
                en: "'If the order value is over fifty euros, we cover the postage.' Sixty is more than fifty, so the rule applies. The exam names a threshold and expects you to place the case yourself.",
                it: "»Se l'ordine supera i cinquanta euro, paghiamo noi la spedizione.« Sessanta è più di cinquanta.",
                bn: "»অর্ডার পঞ্চাশ ইউরোর বেশি হলে ডাকখরচ আমরা দিই।« ষাট পঞ্চাশের বেশি, তাই নিয়মটি খাটে।",
              },
            },
          ],
        },
        {
          id: "h7-t3-5",
          label: {
            de: "Ansage des Wochenmarkts",
            en: "Weekly market announcement",
            it: "Annuncio del mercato settimanale",
            bn: "সাপ্তাহিক বাজারের ঘোষণা",
          },
          transcript:
            "Liebe Besucherinnen und Besucher, der Wochenmarkt findet am kommenden Mittwoch nicht auf dem Kornmarkt statt, sondern auf dem Parkplatz hinter dem Rathaus. Der Grund ist ein Stadtfest. Am Samstag sind wir wieder am gewohnten Ort.",
          items: [
            {
              nr: 20,
              statement: "Am Samstag ist der Markt wieder auf dem Kornmarkt.",
              answer: true,
              why: {
                de: "»Am Samstag sind wir wieder am gewohnten Ort« — der gewohnte Ort ist der Kornmarkt, der im ersten Satz genannt wird. Die Durchsage sagt »am gewohnten Ort« statt den Namen noch einmal zu nennen, und genau diese Umschreibung musst du auflösen.",
                en: "'On Saturday we are back at the usual place' — the usual place is the Kornmarkt, named in the first sentence. The announcement says 'at the usual place' rather than repeating the name, and that paraphrase is what you have to resolve.",
                it: "»Sabato torniamo nel luogo abituale«: è il Kornmarkt, nominato nella prima frase.",
                bn: "»শনিবার আমরা আবার চেনা জায়গায়« — চেনা জায়গা মানে Kornmarkt, প্রথম বাক্যেই বলা। ঘোষণাটি নাম না বলে ঘুরিয়ে বলে, সেটাই মেলাতে হবে।",
              },
            },
          ],
        },
      ],
    },
  ],
};
