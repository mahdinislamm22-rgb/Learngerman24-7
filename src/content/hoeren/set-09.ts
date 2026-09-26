import type { HoerSet } from "./types";

/**
 * HOER-09 — Kita, Schule und Familienalltag.
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Listening traps, each a different skill:
 *   · an age limit that excludes the child in question (item 1),
 *   · "beziehungsweise" — a correction slipped in mid-sentence (item 4),
 *   · a benefit two people confuse, corrected by the third (item 8),
 *   · a promise that is conditional on something the speaker doubts
 *     (item 12),
 *   · "nicht nur … sondern auch", which adds rather than replaces
 *     (item 18).
 */
export const hoer09: HoerSet = {
  code: "HOER-09",

  title: {
    de: "Kita, Schule und Familienalltag",
    en: "Nursery, school and family life",
    it: "Asilo, scuola e vita familiare",
    bn: "কিন্ডারগার্টেন, স্কুল ও পারিবারিক জীবন",
  },

  intro: {
    de: "Drei Teile wie in der Prüfung. Teil 1 und 2 hörst du nur einmal, Teil 3 zweimal. Achte besonders auf Altersangaben und Uhrzeiten — in diesem Thema entscheiden sie fast jedes Item.",
    en: "Three parts, as in the exam. Parts 1 and 2 once, part 3 twice. Watch ages and times especially — in this topic they decide almost every item.",
    it: "Tre parti, come nell'esame. Attenzione soprattutto a età e orari: in questo tema decidono quasi ogni item.",
    bn: "পরীক্ষার মতোই তিনটি অংশ। বয়স ও সময়ে বিশেষ নজর দিন — এই বিষয়ে প্রায় প্রতিটি প্রশ্ন সেগুলোই ঠিক করে।",
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
          id: "h9-t1-1",
          label: {
            de: "Ansage des Familienzentrums",
            en: "Family centre recorded message",
            it: "Messaggio del centro famiglie",
            bn: "পারিবারিক কেন্দ্রের বার্তা",
          },
          transcript:
            "Willkommen im Familienzentrum Weidenau. Unsere Krabbelgruppe ist für Kinder bis drei Jahre gedacht und trifft sich montags und mittwochs. Für ältere Kinder haben wir am Nachmittag ein offenes Spielangebot, dafür ist keine Anmeldung nötig.",
          items: [
            {
              nr: 1,
              statement: "Ein vierjähriges Kind kann in die Krabbelgruppe kommen.",
              answer: false,
              why: {
                de: "»für Kinder bis drei Jahre gedacht« — vier ist mehr als drei. Für ältere Kinder gibt es etwas anderes, und genau das nennt die Ansage im nächsten Satz. Bei Altersangaben lohnt es sich, die Zahl aus der Aussage sofort mit der Grenze zu vergleichen.",
                en: "'intended for children up to three' — four is more than three. There is something else for older children, which the announcement names in the next sentence. With ages, compare the statement's number against the limit at once.",
                it: "»pensato per bambini fino a tre anni«: quattro è di più. Per i più grandi c'è un'altra offerta.",
                bn: "»তিন বছর পর্যন্ত শিশুদের জন্য« — চার তিনের বেশি। বড় শিশুদের জন্য আলাদা ব্যবস্থা আছে।",
              },
            },
          ],
        },
        {
          id: "h9-t1-2",
          label: {
            de: "Nachricht aus der Kita",
            en: "Message from the nursery",
            it: "Messaggio dall'asilo",
            bn: "কিন্ডারগার্টেন থেকে বার্তা",
          },
          transcript:
            "Guten Morgen, Frau Demir, hier ist die Kita Sonnenblume. Amira hat ein bisschen Fieber, achtunddreißig Grad. Sie ist nicht krank genug, dass Sie sofort kommen müssten, aber wir wollten Ihnen Bescheid sagen. Wenn es schlimmer wird, rufen wir noch einmal an.",
          items: [
            {
              nr: 2,
              statement: "Frau Demir soll ihre Tochter sofort abholen.",
              answer: false,
              why: {
                de: "»Sie ist nicht krank genug, dass Sie sofort kommen müssten, aber wir wollten Ihnen Bescheid sagen.« Der Anruf ist eine Information, keine Aufforderung. Das »aber« trennt die beiden: nicht kommen, nur wissen.",
                en: "'She is not ill enough for you to have to come straight away, but we wanted to let you know.' The call is information, not a summons. The 'aber' separates the two: not come, just know.",
                it: "»Non è abbastanza malata perché debba venire subito, ma volevamo avvisarla.« È un'informazione, non una richiesta.",
                bn: "»এখনই আসতে হবে এমন অসুস্থ নয়, তবে জানিয়ে রাখতে চেয়েছিলাম।« ফোনটি তথ্য, ডাক নয়।",
              },
            },
          ],
        },
        {
          id: "h9-t1-3",
          label: {
            de: "Nachricht einer Freundin",
            en: "Message from a friend",
            it: "Messaggio di un'amica",
            bn: "এক বন্ধুর বার্তা",
          },
          transcript:
            "Hallo, ich bin's, Sandra. Du, morgen kann ich deine Kinder doch nicht nehmen, mein Sohn ist krank geworden. Übermorgen ginge es bei mir, wenn dir das hilft. Sag mir kurz Bescheid, dann plane ich den Nachmittag frei.",
          items: [
            {
              nr: 3,
              statement: "Sandra kann morgen auf die Kinder aufpassen.",
              answer: false,
              why: {
                de: "»morgen kann ich deine Kinder doch nicht nehmen« — das kleine »doch nicht« zeigt, dass es vorher anders geplant war. Angeboten wird jetzt übermorgen. Zwei Tage in einer Nachricht, und die Aussage nimmt den falschen.",
                en: "'tomorrow I can't take your children after all' — the little 'doch nicht' shows the plan has changed. What is offered now is the day after. Two days in one message, and the statement takes the wrong one.",
                it: "»domani non posso più prendere i tuoi figli«: il »doch nicht« segnala il cambio di programma.",
                bn: "»কাল আমি তোমার বাচ্চাদের নিতে পারব না« — ছোট্ট »doch nicht« দেখায় আগে অন্যরকম ঠিক ছিল। এখন পরশুর প্রস্তাব।",
              },
            },
          ],
        },
        {
          id: "h9-t1-4",
          label: {
            de: "Ansage der Familienkasse",
            en: "Family benefits office message",
            it: "Messaggio dell'ufficio assegni familiari",
            bn: "পারিবারিক ভাতা দপ্তরের বার্তা",
          },
          transcript:
            "Willkommen bei der Familienkasse. Anträge auf Kindergeld stellen Sie bitte online, beziehungsweise schriftlich, wenn Sie keinen Internetzugang haben. Die Bearbeitung dauert derzeit etwa sechs Wochen. Bitte sehen Sie von Nachfragen vor Ablauf dieser Frist ab.",
          items: [
            {
              nr: 4,
              statement: "Den Antrag kann man nur online stellen.",
              answer: false,
              why: {
                de: "»online, beziehungsweise schriftlich, wenn Sie keinen Internetzugang haben« — »beziehungsweise« schiebt eine zweite Möglichkeit nach. Es wird schnell gesprochen und klingt fast wie ein Füllwort, ändert aber die Aussage vollständig.",
                en: "'online, or in writing if you have no internet access' — 'beziehungsweise' slips in a second option. It is spoken fast and sounds almost like filler, yet it changes the statement completely.",
                it: "»beziehungsweise« introduce una seconda possibilità: si pronuncia in fretta ma cambia tutto.",
                bn: "»beziehungsweise« দ্বিতীয় একটি সম্ভাবনা ঢুকিয়ে দেয়। দ্রুত বলা হয়, প্রায় ভরাট শব্দের মতো শোনায়, কিন্তু অর্থ পুরো বদলে দেয়।",
              },
            },
          ],
        },
        {
          id: "h9-t1-5",
          label: {
            de: "Durchsage in der Grundschule",
            en: "Primary school announcement",
            it: "Annuncio alla scuola elementare",
            bn: "প্রাথমিক বিদ্যালয়ের ঘোষণা",
          },
          transcript:
            "Liebe Eltern, der Elternabend am Donnerstag beginnt eine halbe Stunde später als angekündigt, also um neunzehn Uhr dreißig. Der Grund ist eine Konferenz davor. Das Ende bleibt wie geplant bei einundzwanzig Uhr.",
          items: [
            {
              nr: 5,
              statement: "Der Elternabend beginnt um halb acht.",
              answer: true,
              why: {
                de: "»um neunzehn Uhr dreißig« — das ist halb acht am Abend. Die Prüfung wechselt gern zwischen der Vierundzwanzig-Stunden-Zeit und der Alltagssprache; beide musst du ineinander umrechnen können.",
                en: "'at nineteen thirty' — that is half past seven in the evening. The exam likes switching between the twenty-four-hour clock and everyday speech; you have to convert between them.",
                it: "»alle diciannove e trenta« = le sette e mezza di sera. L'esame alterna volentieri i due modi.",
                bn: "»উনিশটা ত্রিশ« মানে সন্ধ্যা সাড়ে সাতটা। পরীক্ষা চব্বিশ ঘণ্টার সময় আর দৈনন্দিন ভাষার মধ্যে বদল করে।",
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
        en: "You will hear one advice session, only once. Decide for each statement: true or false?",
        it: "Ascolterai una consulenza, una sola volta. Decidi per ogni affermazione: vero o falso?",
        bn: "আপনি একটি পরামর্শ আলাপ শুনবেন, একবারই। প্রতিটি বক্তব্য সম্পর্কে ঠিক করুন: সত্য না মিথ্যা?",
      },
      tracks: [
        {
          id: "h9-t2-1",
          label: {
            de: "Beratung zu Elterngeld und Elternzeit",
            en: "Advice session on parental leave and allowance",
            it: "Consulenza su congedo e indennità parentale",
            bn: "অভিভাবক-ছুটি ও ভাতা নিয়ে পরামর্শ",
          },
          transcript:
            "Beraterin: Guten Tag, Sie beide. Setzen Sie sich. Wann kommt das Kind denn? " +
            "Frau Petrov: Im März. Wir wollten schon jetzt klären, wie wir das mit der Arbeit machen. " +
            "Beraterin: Sehr vernünftig, das ist früh genug. Arbeiten Sie beide? " +
            "Herr Petrov: Ja. Meine Frau in Vollzeit, ich dreißig Stunden. " +
            "Beraterin: Gut. Dann zuerst die wichtigste Unterscheidung: Elternzeit ist die Freistellung, Elterngeld ist das Geld. Das sind zwei getrennte Anträge an zwei verschiedene Stellen. " +
            "Frau Petrov: Das wusste ich nicht. Ich dachte, das ist dasselbe. " +
            "Beraterin: Das denken die meisten. Die Elternzeit melden Sie bei Ihrem Arbeitgeber an, spätestens sieben Wochen vorher und schriftlich. Das Elterngeld beantragen Sie bei der Elterngeldstelle, und zwar erst nach der Geburt. " +
            "Herr Petrov: Und wie lange bekommt man das Geld? " +
            "Beraterin: Zwölf Monate, wenn einer allein zu Hause bleibt. Vierzehn, wenn beide Eltern mindestens zwei Monate nehmen. Deshalb heißen die beiden Extramonate umgangssprachlich Vätermonate, obwohl sie natürlich für beide gelten. " +
            "Herr Petrov: Dann würde ich die zwei Monate nehmen. " +
            "Beraterin: Das können Sie so machen. Sie müssen es aber Ihrem Arbeitgeber rechtzeitig sagen — sieben Wochen, wie gesagt. Und noch etwas: Sie dürfen in der Elternzeit bis zu zweiunddreißig Stunden arbeiten. " +
            "Frau Petrov: Also könnte ich weiterarbeiten und trotzdem Elterngeld bekommen? " +
            "Beraterin: Im Prinzip ja. Aber der Verdienst wird angerechnet, das heißt, das Elterngeld wird kleiner. Ob sich das lohnt, müssen wir ausrechnen — bringen Sie dafür bitte Ihre letzten zwölf Gehaltsabrechnungen mit. " +
            "Frau Petrov: Die habe ich nicht alle. " +
            "Beraterin: Dann fragen Sie in der Personalabteilung, die müssen sie Ihnen geben. Machen wir einen zweiten Termin, wenn Sie alles beisammen haben? " +
            "Herr Petrov: Gern. Kostet die Beratung etwas? " +
            "Beraterin: Nein, wir sind eine städtische Stelle. Für den zweiten Termin melden Sie sich bitte vorher an, donnerstags ist immer viel los.",
          items: [
            {
              nr: 6,
              statement: "Das Kind kommt im Frühjahr zur Welt.",
              answer: true,
              why: {
                de: "»Im März.« März gehört zum Frühjahr. Die Aussage benutzt ein Oberwort statt des Monats — solche Umschreibungen sind in Teil 2 üblich und verlangen ein bisschen Weltwissen.",
                en: "'In March.' March is in spring. The statement uses a general word instead of the month — such paraphrases are normal in Teil 2 and need a little world knowledge.",
                it: "»A marzo«: marzo è primavera. L'affermazione usa un iperonimo invece del mese.",
                bn: "»মার্চে।« মার্চ বসন্তকাল। বক্তব্যটি মাসের বদলে বড় শব্দ ব্যবহার করে।",
              },
            },
            {
              nr: 7,
              statement: "Beide Eltern arbeiten zurzeit.",
              answer: true,
              why: {
                de: "»Meine Frau in Vollzeit, ich dreißig Stunden.« Beide werden genannt, nur mit unterschiedlichem Umfang. Dreißig Stunden sind Teilzeit, aber eben doch Arbeit.",
                en: "'My wife full-time, I work thirty hours.' Both are named, only with different hours. Thirty hours is part-time, but it is still work.",
                it: "»Mia moglie a tempo pieno, io trenta ore.« Entrambi lavorano, con orari diversi.",
                bn: "»আমার স্ত্রী পূর্ণকালীন, আমি ত্রিশ ঘণ্টা।« দুজনেরই কথা আছে, কেবল সময় ভিন্ন।",
              },
            },
            {
              nr: 8,
              statement: "Elternzeit und Elterngeld sind dasselbe.",
              answer: false,
              why: {
                de: "»Elternzeit ist die Freistellung, Elterngeld ist das Geld. Das sind zwei getrennte Anträge.« Frau Petrov sagt danach selbst, sie habe es verwechselt — und die Beraterin bestätigt, dass fast alle das tun. Wenn im Gespräch jemand korrigiert wird, steht dort fast immer ein Item.",
                en: "'Elternzeit is the leave, Elterngeld is the money. Those are two separate applications.' Frau Petrov then says she had confused them, and the adviser confirms nearly everyone does. When someone is corrected, there is almost always an item there.",
                it: "»L'Elternzeit è l'astensione, l'Elterngeld è il denaro: due domande separate.«",
                bn: "»Elternzeit হলো ছুটি, Elterngeld হলো টাকা। দুটি আলাদা আবেদন।« Frau Petrov নিজেই বলেন তিনি গুলিয়ে ফেলেছিলেন।",
              },
            },
            {
              nr: 9,
              statement: "Die Elternzeit muss man beim Arbeitgeber anmelden.",
              answer: true,
              why: {
                de: "»Die Elternzeit melden Sie bei Ihrem Arbeitgeber an, spätestens sieben Wochen vorher und schriftlich.« Im selben Satz stehen drei Informationen: wo, wann, wie. Die Aussage fragt nur nach dem Wo.",
                en: "'You register the Elternzeit with your employer, at least seven weeks beforehand and in writing.' One sentence, three facts: where, when, how. The statement asks only about the where.",
                it: "»L'Elternzeit si comunica al datore di lavoro, almeno sette settimane prima e per iscritto.«",
                bn: "»Elternzeit নিয়োগকর্তার কাছে জানাতে হয়, অন্তত সাত সপ্তাহ আগে, লিখিতভাবে।« এক বাক্যে তিন তথ্য।",
              },
            },
            {
              nr: 10,
              statement: "Das Elterngeld beantragt man schon vor der Geburt.",
              answer: false,
              why: {
                de: "»Das Elterngeld beantragen Sie bei der Elterngeldstelle, und zwar erst nach der Geburt.« Das »erst« ist entscheidend: nicht vorher. Die Elternzeit dagegen meldet man vorher an — beide Fristen stehen nebeneinander, und die Aussage vertauscht sie.",
                en: "'You apply for Elterngeld at the Elterngeld office, and only after the birth.' The 'erst' decides it: not before. Elternzeit, by contrast, is registered beforehand — the two deadlines sit side by side and the statement swaps them.",
                it: "»L'Elterngeld si richiede solo dopo la nascita.« L'»erst« è decisivo; l'Elternzeit invece si comunica prima.",
                bn: "»Elterngeld-এর আবেদন জন্মের পরেই।« »erst«-ই নির্ণায়ক: আগে নয়। Elternzeit উল্টো — আগেই জানাতে হয়।",
              },
            },
            {
              nr: 11,
              statement: "Vierzehn Monate Elterngeld gibt es nur, wenn beide Eltern mindestens zwei Monate nehmen.",
              answer: true,
              why: {
                de: "»Vierzehn, wenn beide Eltern mindestens zwei Monate nehmen.« Die Bedingung steht direkt dabei. Die zwölf Monate gelten, wenn nur einer zu Hause bleibt — beide Zahlen kommen vor, die Bedingung trennt sie.",
                en: "'Fourteen, if both parents take at least two months.' The condition is stated right there. Twelve applies if only one stays at home — both figures occur, and the condition separates them.",
                it: "»Quattordici, se entrambi i genitori prendono almeno due mesi.« La condizione è lì.",
                bn: "»চোদ্দো, যদি দুই অভিভাবকই অন্তত দুই মাস নেন।« শর্তটি পাশেই।",
              },
            },
            {
              nr: 12,
              statement: "Die zwei Extramonate stehen nur Vätern zu.",
              answer: false,
              why: {
                de: "»heißen die beiden Extramonate umgangssprachlich Vätermonate, obwohl sie natürlich für beide gelten«. Das Wort »Vätermonate« wird gesagt — aber sofort eingeschränkt. Ein Name ist keine Regel, und »obwohl« ist hier das Signalwort.",
                en: "'the two extra months are colloquially called father's months, although of course they apply to both'. The word is said — and immediately qualified. A nickname is not a rule, and 'obwohl' is the signal here.",
                it: "»vengono chiamati mesi del padre, benché valgano naturalmente per entrambi«. Un soprannome non è una regola.",
                bn: "»দুই বাড়তি মাসকে কথ্যভাষায় Vätermonate বলা হয়, যদিও তা দুজনের জন্যই প্রযোজ্য«। নামটা নিয়ম নয়, আর »obwohl« এখানে সংকেত।",
              },
            },
            {
              nr: 13,
              statement: "In der Elternzeit darf man gar nicht arbeiten.",
              answer: false,
              why: {
                de: "»Sie dürfen in der Elternzeit bis zu zweiunddreißig Stunden arbeiten.« Eine Obergrenze ist kein Verbot. »gar nicht« ist wieder eine Verabsolutierung — und die ist in dieser Prüfung fast immer falsch.",
                en: "'You may work up to thirty-two hours during Elternzeit.' An upper limit is not a ban. 'gar nicht' is another absolute — and absolutes are almost always wrong in this exam.",
                it: "»Si possono lavorare fino a trentadue ore.« Un limite non è un divieto.",
                bn: "»Elternzeit-এ বত্রিশ ঘণ্টা পর্যন্ত কাজ করা যায়।« সর্বোচ্চ সীমা মানে নিষেধ নয়।",
              },
            },
            {
              nr: 14,
              statement: "Wenn Frau Petrov weiterarbeitet, bleibt das Elterngeld gleich hoch.",
              answer: false,
              why: {
                de: "»Aber der Verdienst wird angerechnet, das heißt, das Elterngeld wird kleiner.« Die Beraterin antwortet zuerst »Im Prinzip ja« — wer dort aufhört zu hören, antwortet falsch. »Im Prinzip« kündigt fast immer ein Aber an.",
                en: "'But the earnings are set off, which means the Elterngeld gets smaller.' The adviser first says 'in principle yes' — anyone who stops listening there answers wrongly. 'Im Prinzip' almost always announces a but.",
                it: "»Ma il guadagno viene conteggiato, quindi l'indennità si riduce.« »In linea di principio« annuncia quasi sempre un ma.",
                bn: "»তবে আয় হিসাবে ধরা হয়, অর্থাৎ Elterngeld কমে যায়।« পরামর্শদাতা প্রথমে বলেন »নীতিগতভাবে হ্যাঁ« — সেখানেই থেমে গেলে ভুল উত্তর।",
              },
            },
            {
              nr: 15,
              statement: "Die Beratung ist kostenlos.",
              answer: true,
              why: {
                de: "»Nein, wir sind eine städtische Stelle.« Die Antwort auf »Kostet die Beratung etwas?« ist ein Nein — also kostenlos. Achte darauf, worauf sich ein Nein bezieht: Hier verneint es die Kosten, nicht das Angebot.",
                en: "'No, we are a municipal service.' The answer to 'does the advice cost anything?' is no — so it is free. Watch what a 'no' refers to: here it negates the cost, not the service.",
                it: "»No, siamo un servizio comunale.« Il no risponde alla domanda sul costo.",
                bn: "»না, আমরা পৌর সংস্থা।« »পরামর্শে খরচ আছে?«-এর উত্তর না — অর্থাৎ বিনামূল্যে।",
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
          id: "h9-t3-1",
          label: {
            de: "Ansage der Kita",
            en: "Nursery recorded message",
            it: "Messaggio dell'asilo",
            bn: "কিন্ডারগার্টেনের বার্তা",
          },
          transcript:
            "Hier ist die Kita Sonnenblume. Bitte melden Sie Ihr Kind vor acht Uhr ab, wenn es krank ist. Anmeldungen für das nächste Kitajahr nehmen wir nicht hier entgegen, sondern ausschließlich über das Portal der Stadt.",
          items: [
            {
              nr: 16,
              statement: "Neue Kinder meldet man direkt in der Kita an.",
              answer: false,
              why: {
                de: "»nehmen wir nicht hier entgegen, sondern ausschließlich über das Portal der Stadt«. Das Paar »nicht … sondern« ersetzt: nicht das eine, dafür das andere. Unterscheide es von »nicht nur … sondern auch«, das ergänzt.",
                en: "'we do not take them here, but exclusively through the city portal'. The pair 'nicht … sondern' replaces: not this, but that instead. Distinguish it from 'nicht nur … sondern auch', which adds.",
                it: "»non qui, ma esclusivamente sul portale della città«. »nicht … sondern« sostituisce.",
                bn: "»এখানে নয়, কেবল শহরের পোর্টালে«। »nicht … sondern« জোড়া প্রতিস্থাপন করে: এটা নয়, বরং ওটা।",
              },
            },
          ],
        },
        {
          id: "h9-t3-2",
          label: {
            de: "Durchsage in der Schule",
            en: "School announcement",
            it: "Annuncio a scuola",
            bn: "স্কুলের ঘোষণা",
          },
          transcript:
            "Liebe Eltern, der Ausflug am Freitag findet bei jedem Wetter statt. Denken Sie bitte an eine Regenjacke. Nur bei Sturm müssten wir ihn absagen, dann bekommen Sie am Donnerstagabend eine Nachricht.",
          items: [
            {
              nr: 17,
              statement: "Bei Regen fällt der Ausflug aus.",
              answer: false,
              why: {
                de: "»findet bei jedem Wetter statt … Nur bei Sturm müssten wir ihn absagen.« Regen und Sturm sind nicht dasselbe, und die Regenjacke im zweiten Satz beweist es: Man rechnet mit Regen und geht trotzdem.",
                en: "'takes place in any weather … only in a storm would we have to cancel'. Rain and storm are not the same, and the raincoat in the second sentence proves it: rain is expected and they go anyway.",
                it: "»si svolge con qualsiasi tempo … solo in caso di tempesta«. Pioggia e tempesta non sono la stessa cosa.",
                bn: "»যেকোনো আবহাওয়ায় হবে … কেবল ঝড় হলে বাতিল করতে হতো।« বৃষ্টি আর ঝড় এক নয় — রেইনকোটই তার প্রমাণ।",
              },
            },
          ],
        },
        {
          id: "h9-t3-3",
          label: {
            de: "Ansage der Stadtbibliothek",
            en: "Library announcement",
            it: "Annuncio della biblioteca",
            bn: "শহরের লাইব্রেরির ঘোষণা",
          },
          transcript:
            "Ein Hinweis auf unsere Vorlesestunde: Wir lesen nicht nur auf Deutsch vor, sondern einmal im Monat auch auf Türkisch und Arabisch. Der Termin steht jeweils auf unserer Internetseite. Der Eintritt ist frei.",
          items: [
            {
              nr: 18,
              statement: "Es wird auch auf Deutsch vorgelesen.",
              answer: true,
              why: {
                de: "»Wir lesen nicht nur auf Deutsch vor, sondern … auch auf Türkisch und Arabisch.« Hier ergänzt »nicht nur … sondern auch«: Deutsch bleibt, die anderen kommen dazu. Genau der Gegensatz zu Item sechzehn — dieselben Wörter, andere Wirkung.",
                en: "'We read not only in German, but also in Turkish and Arabic once a month.' Here 'nicht nur … sondern auch' adds: German stays, the others come on top. Exactly the opposite of item sixteen — same words, different effect.",
                it: "»Non leggiamo solo in tedesco, ma anche in turco e arabo«: qui si aggiunge, non si sostituisce.",
                bn: "»আমরা কেবল জার্মানেই পড়ি না, বরং তুর্কি ও আরবিতেও« — এখানে যোগ হচ্ছে: জার্মান থাকছেই। ষোলো নম্বরের ঠিক উল্টো।",
              },
            },
          ],
        },
        {
          id: "h9-t3-4",
          label: {
            de: "Ansage der Elterngeldstelle",
            en: "Parental allowance office message",
            it: "Messaggio dell'ufficio indennità",
            bn: "অভিভাবক ভাতা দপ্তরের বার্তা",
          },
          transcript:
            "Sie haben die Elterngeldstelle erreicht. Reichen Sie Ihren Antrag bitte erst nach der Geburt ein, zusammen mit der Geburtsurkunde. Wir zahlen rückwirkend für höchstens drei Monate, deshalb sollten Sie nicht zu lange warten.",
          items: [
            {
              nr: 19,
              statement: "Man kann den Antrag beliebig lange aufschieben.",
              answer: false,
              why: {
                de: "»Wir zahlen rückwirkend für höchstens drei Monate, deshalb sollten Sie nicht zu lange warten.« Man darf später beantragen, verliert dann aber Geld. Das »deshalb« verbindet Regel und Rat — hör auf dieses Wort, es führt oft direkt zum Item.",
                en: "'We pay retroactively for at most three months, so you should not wait too long.' You may apply later but lose money. The 'deshalb' links rule and advice — listen for that word, it often leads straight to the item.",
                it: "»Paghiamo retroattivamente al massimo tre mesi, quindi non aspetti troppo.«",
                bn: "»আমরা সর্বোচ্চ তিন মাস পিছিয়ে দিই, তাই বেশি দেরি করবেন না।« পরে আবেদন করা যায়, কিন্তু টাকা হারাতে হয়।",
              },
            },
          ],
        },
        {
          id: "h9-t3-5",
          label: {
            de: "Durchsage im Schwimmbad",
            en: "Swimming pool announcement",
            it: "Annuncio in piscina",
            bn: "সুইমিং পুলের ঘোষণা",
          },
          transcript:
            "Liebe Gäste, das Babybecken bleibt heute wegen einer Reinigung geschlossen. Das große Becken ist normal geöffnet. Kinder unter sieben Jahren dürfen nur in Begleitung eines Erwachsenen ins Wasser.",
          items: [
            {
              nr: 20,
              statement: "Das Schwimmbad ist heute ganz geschlossen.",
              answer: false,
              why: {
                de: "»Das Babybecken bleibt heute … geschlossen. Das große Becken ist normal geöffnet.« Ein Teil ist zu, der andere offen. »ganz geschlossen« macht aus einer Einschränkung eine Absage — dieselbe Denkfigur wie bei den zwei Kassen im Supermarkt.",
                en: "'The baby pool stays closed today. The main pool is open as usual.' One part is shut, the other open. 'ganz geschlossen' turns a limitation into a cancellation — the same figure as the two tills in the supermarket.",
                it: "»La vasca per bambini resta chiusa; la vasca grande è aperta normalmente.« Una parte chiusa, l'altra aperta.",
                bn: "»আজ শিশু পুল বন্ধ। বড় পুল স্বাভাবিকভাবেই খোলা।« একটি অংশ বন্ধ, অন্যটি খোলা।",
              },
            },
          ],
        },
      ],
    },
  ],
};
