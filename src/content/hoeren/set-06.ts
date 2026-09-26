import type { HoerSet } from "./types";

/**
 * HOER-06 — Bahnhof, Flughafen und unterwegs.
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Station announcements are the fastest German in the exam, and they are
 * built on a handful of moves that repeat:
 *   · a platform change said once, late in the sentence (item 1),
 *   · "voraussichtlich" — a forecast, not a fact (item 4),
 *   · two destinations in one announcement, only one of them affected
 *     (item 16),
 *   · an instruction addressed to a subgroup, not to everyone (item 19),
 *   · and in the interview, a number that belongs to a different year
 *     than the statement claims (item 11).
 */
export const hoer06: HoerSet = {
  code: "HOER-06",

  title: {
    de: "Am Bahnhof, am Flughafen und unterwegs",
    en: "At the station, at the airport and on the move",
    it: "In stazione, in aeroporto e in viaggio",
    bn: "স্টেশনে, বিমানবন্দরে ও পথে",
  },

  intro: {
    de: "Drei Teile wie in der Prüfung. Teil 1 und 2 hörst du nur einmal, Teil 3 zweimal. Durchsagen sind schnell — achte besonders auf Zahlen und Gleise.",
    en: "Three parts, as in the exam. You hear parts 1 and 2 once, part 3 twice. Announcements are fast — watch the numbers and platforms especially.",
    it: "Tre parti, come nell'esame. Le parti 1 e 2 una volta, la 3 due volte. Gli annunci sono veloci: attenzione a numeri e binari.",
    bn: "পরীক্ষার মতোই তিনটি অংশ। অংশ ১ ও ২ একবার, অংশ ৩ দুবার। ঘোষণা দ্রুত হয় — সংখ্যা ও প্ল্যাটফর্মে বিশেষ নজর দিন।",
  },

  teile: [
    // ------------------------------------------------------------------
    {
      teil: 1,
      maxPlays: 1,
      instruction: {
        de: "Du hörst fünf kurze Durchsagen und Nachrichten — jede nur einmal. Ist die Aussage richtig oder falsch?",
        en: "You will hear five short announcements and messages, each only once. Is the statement true or false?",
        it: "Ascolterai cinque brevi annunci e messaggi, ciascuno una sola volta. L'affermazione è vera o falsa?",
        bn: "আপনি পাঁচটি ছোট ঘোষণা ও বার্তা শুনবেন, প্রতিটি একবারই। বক্তব্যটি সত্য না মিথ্যা?",
      },
      tracks: [
        {
          id: "h6-t1-1",
          label: {
            de: "Durchsage am Bahnhof",
            en: "Station announcement",
            it: "Annuncio in stazione",
            bn: "স্টেশনের ঘোষণা",
          },
          transcript:
            "Information für die Reisenden nach Frankfurt: Der Intercity um sechzehn Uhr zwölf fährt heute nicht von Gleis vier, sondern von Gleis sieben. Wir wiederholen: heute von Gleis sieben. Der Zug ist pünktlich.",
          items: [
            {
              nr: 1,
              statement: "Der Zug nach Frankfurt fährt heute von Gleis vier.",
              answer: false,
              why: {
                de: "»fährt heute nicht von Gleis vier, sondern von Gleis sieben«. Beide Zahlen kommen vor, und die Durchsage wiederholt sogar die richtige — Gleiswechsel werden in der Prüfung fast immer zweimal gesagt, weil sie sonst unfair wären. Nutze die Wiederholung.",
                en: "'is not leaving from platform four today but from platform seven'. Both numbers occur, and the announcement even repeats the right one — platform changes are almost always said twice in the exam, because otherwise they would be unfair. Use the repetition.",
                it: "»non parte dal binario quattro ma dal sette«. Entrambi i numeri compaiono e l'annuncio ripete quello giusto.",
                bn: "»আজ চার নম্বর নয়, সাত নম্বর প্ল্যাটফর্ম থেকে«। দুটি সংখ্যাই আছে, আর ঘোষণাটি সঠিকটি আবার বলে — প্ল্যাটফর্ম বদল পরীক্ষায় প্রায় সবসময় দুবার বলা হয়।",
              },
            },
          ],
        },
        {
          id: "h6-t1-2",
          label: {
            de: "Nachricht einer Freundin",
            en: "Message from a friend",
            it: "Messaggio di un'amica",
            bn: "এক বন্ধুর বার্তা",
          },
          transcript:
            "Hallo, ich bin's, Nina. Du, ich schaffe den Zug um acht nicht mehr, der Bus zum Bahnhof hatte Verspätung. Ich nehme den nächsten, der ist um neun Uhr zwanzig. Du musst mich nicht abholen, ich komme mit der Straßenbahn zu dir.",
          items: [
            {
              nr: 2,
              statement: "Nina möchte am Bahnhof abgeholt werden.",
              answer: false,
              why: {
                de: "»Du musst mich nicht abholen, ich komme mit der Straßenbahn zu dir.« Sie sagt das Gegenteil, und sie sagt auch gleich, wie sie stattdessen kommt.",
                en: "'You don't have to pick me up, I'll come to you by tram.' She says the opposite, and immediately says how she will come instead.",
                it: "»Non devi venirmi a prendere, arrivo in tram.« Dice il contrario.",
                bn: "»আমাকে আনতে হবে না, আমি ট্রামে তোমার কাছে আসছি।« তিনি উল্টোটাই বলেন, আর কীভাবে আসবেন তাও বলেন।",
              },
            },
          ],
        },
        {
          id: "h6-t1-3",
          label: {
            de: "Ansage im Bus",
            en: "Announcement on the bus",
            it: "Annuncio sull'autobus",
            bn: "বাসের ঘোষণা",
          },
          transcript:
            "Nächste Haltestelle: Rathaus. Bitte beachten Sie, dass die Haltestelle Marktplatz wegen einer Baustelle nicht angefahren wird. Steigen Sie am Rathaus aus, von dort sind es etwa fünf Minuten zu Fuß.",
          items: [
            {
              nr: 3,
              statement: "Der Bus hält heute nicht am Marktplatz.",
              answer: true,
              why: {
                de: "»die Haltestelle Marktplatz wegen einer Baustelle nicht angefahren wird« — nicht anfahren heißt: nicht halten. Der Vorschlag, am Rathaus auszusteigen, bestätigt es.",
                en: "'the Marktplatz stop is not being served because of building works' — nicht anfahren means not stopping. The suggestion to get off at the Rathaus confirms it.",
                it: "»la fermata Marktplatz non viene servita per lavori«: non si ferma.",
                bn: "»নির্মাণকাজের কারণে Marktplatz স্টপে যাওয়া হচ্ছে না« — anfahren না মানে থামবে না। Rathaus-এ নামার পরামর্শই তা নিশ্চিত করে।",
              },
            },
          ],
        },
        {
          id: "h6-t1-4",
          label: {
            de: "Durchsage am Flughafen",
            en: "Airport announcement",
            it: "Annuncio in aeroporto",
            bn: "বিমানবন্দরের ঘোষণা",
          },
          transcript:
            "Eine Information für die Passagiere des Fluges nach Istanbul: Der Abflug verzögert sich voraussichtlich um vierzig Minuten. Eine neue Abflugzeit geben wir Ihnen bis achtzehn Uhr bekannt. Das Gate bleibt unverändert.",
          items: [
            {
              nr: 4,
              statement: "Die neue Abflugzeit steht schon fest.",
              answer: false,
              why: {
                de: "»verzögert sich voraussichtlich« und »Eine neue Abflugzeit geben wir Ihnen bis achtzehn Uhr bekannt«. »voraussichtlich« heißt: wahrscheinlich, noch nicht sicher — und der zweite Satz sagt ausdrücklich, dass die Zeit erst noch kommt.",
                en: "'is expected to be delayed' and 'we will announce a new departure time by six'. 'voraussichtlich' means probably, not yet certain — and the second sentence says outright that the time is still to come.",
                it: "»voraussichtlich« significa presumibilmente, non ancora certo; la seconda frase lo conferma.",
                bn: "»voraussichtlich« মানে সম্ভবত, এখনো নিশ্চিত নয় — আর দ্বিতীয় বাক্যে স্পষ্ট বলা, সময়টা এখনো জানানো হবে।",
              },
            },
          ],
        },
        {
          id: "h6-t1-5",
          label: {
            de: "Ansage am Ticketschalter",
            en: "Ticket desk announcement",
            it: "Annuncio alla biglietteria",
            bn: "টিকিট কাউন্টারের ঘোষণা",
          },
          transcript:
            "Liebe Kundinnen und Kunden, unser Schalter schließt heute bereits um achtzehn Uhr. Fahrkarten bekommen Sie danach am Automaten in der Halle oder über unsere App. Der Automat nimmt Karten und Bargeld.",
          items: [
            {
              nr: 5,
              statement: "Nach achtzehn Uhr kann man keine Fahrkarte mehr kaufen.",
              answer: false,
              why: {
                de: "»Fahrkarten bekommen Sie danach am Automaten … oder über unsere App.« Der Schalter schließt, der Verkauf nicht. Ein geschlossener Schalter ist nicht dasselbe wie kein Ticket — dieselbe Denkfigur wie bei der geschlossenen Kantine in einer anderen Prüfung.",
                en: "'Afterwards you can get tickets from the machine … or through our app.' The desk closes, the selling does not. A closed desk is not the same as no ticket.",
                it: "»Dopo può acquistare i biglietti al distributore o sull'app.« Chiude lo sportello, non la vendita.",
                bn: "»এরপর টিকিট পাবেন মেশিনে … বা আমাদের অ্যাপে।« কাউন্টার বন্ধ হচ্ছে, বিক্রি নয়।",
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
          id: "h6-t2-1",
          label: {
            de: "Radiointerview mit einer Pendlerin",
            en: "Radio interview with a commuter",
            it: "Intervista radiofonica con una pendolare",
            bn: "এক যাত্রীর সঙ্গে রেডিও সাক্ষাৎকার",
          },
          transcript:
            "Moderator: Frau Dietrich, Sie pendeln jeden Tag von Siegen nach Köln. Wie lange sind Sie unterwegs? " +
            "Frau Dietrich: Einfache Fahrt etwa eine Stunde und zwanzig Minuten, wenn alles gut läuft. Hin und zurück sind das fast drei Stunden am Tag. " +
            "Moderator: Und läuft alles gut? " +
            "Frau Dietrich: Im letzten Jahr hatte ich siebenundzwanzig Tage mit größeren Verspätungen. Ich führe seitdem eine Liste. Dieses Jahr sind es bis jetzt erst neun. Es wird also besser, langsam. " +
            "Moderator: Warum steigen Sie nicht aufs Auto um? " +
            "Frau Dietrich: Das habe ich zwei Monate lang gemacht. Mit dem Auto bin ich im Berufsverkehr nicht schneller, und ich komme gestresst an. Im Zug arbeite ich. Das ist der eigentliche Grund. " +
            "Moderator: Sie arbeiten im Zug? " +
            "Frau Dietrich: Ja, ich beantworte E-Mails und lese Unterlagen. Mein Arbeitgeber rechnet mir eine halbe Stunde davon als Arbeitszeit an. Nicht alle Firmen machen das, das weiß ich. " +
            "Moderator: Was kostet Sie das im Monat? " +
            "Frau Dietrich: Ich habe eine Monatskarte für den Fernverkehr, die ist nicht billig. Das Deutschlandticket würde mir nichts nützen, weil der ICE damit nicht geht. Viele wissen das nicht und ärgern sich dann. " +
            "Moderator: Würden Sie es wieder so machen? " +
            "Frau Dietrich: Ja, aber ich würde früher damit anfangen, mir die Zeit einzuteilen. Am Anfang habe ich im Zug nur aus dem Fenster geschaut und mich über jede Verspätung geärgert. Das war verlorene Zeit. " +
            "Moderator: Haben Sie einen Tipp für andere Pendler? " +
            "Frau Dietrich: Einen sehr praktischen: Sitzplatz reservieren, auch wenn es zwei Euro extra kostet. Wer eine Stunde steht, kann nicht arbeiten, und dann ist der ganze Vorteil weg. " +
            "Moderator: Frau Dietrich, danke für das Gespräch.",
          items: [
            {
              nr: 6,
              statement: "Frau Dietrich ist täglich etwa drei Stunden unterwegs.",
              answer: true,
              why: {
                de: "»Hin und zurück sind das fast drei Stunden am Tag.« Sie rechnet es selbst vor — eine Stunde zwanzig einfach, also knapp drei hin und zurück.",
                en: "'There and back that is nearly three hours a day.' She does the sum herself — an hour twenty each way, so just under three in total.",
                it: "»Andata e ritorno fanno quasi tre ore al giorno.« Fa il conto lei stessa.",
                bn: "»যাওয়া-আসা মিলিয়ে দিনে প্রায় তিন ঘণ্টা।« তিনি নিজেই হিসাবটা করে দেন।",
              },
            },
            {
              nr: 7,
              statement: "Sie notiert sich die Tage mit Verspätung.",
              answer: true,
              why: {
                de: "»Ich führe seitdem eine Liste.« Eine Liste führen heißt: regelmäßig aufschreiben. Die Zahlen davor und danach zeigen, was auf der Liste steht.",
                en: "'I have kept a list ever since.' Keeping a list means writing things down regularly. The figures before and after show what is on it.",
                it: "»Da allora tengo una lista.« Tenere una lista significa annotare regolarmente.",
                bn: "»তখন থেকে আমি একটি তালিকা রাখি।« তালিকা রাখা মানে নিয়মিত লিখে রাখা।",
              },
            },
            {
              nr: 8,
              statement: "In diesem Jahr gab es mehr Verspätungen als im letzten.",
              answer: false,
              why: {
                de: "»Im letzten Jahr … siebenundzwanzig Tage … Dieses Jahr sind es bis jetzt erst neun.« Weniger, nicht mehr — und sie sagt es danach selbst: »Es wird also besser.« Bei zwei Zahlen aus zwei Zeiträumen musst du immer prüfen, welche zu welchem Jahr gehört.",
                en: "'Last year … twenty-seven days … This year only nine so far.' Fewer, not more — and she says so herself: 'so it is getting better'. With two figures from two periods, always check which belongs to which year.",
                it: "»L'anno scorso ventisette giorni … quest'anno finora solo nove.« Meno, non di più.",
                bn: "»গত বছর … সাতাশ দিন … এ বছর এখন পর্যন্ত মাত্র নয়।« কম, বেশি নয় — তিনি নিজেই বলেন »তাই উন্নতি হচ্ছে«।",
              },
            },
            {
              nr: 9,
              statement: "Mit dem Auto wäre sie schneller in Köln.",
              answer: false,
              why: {
                de: "»Mit dem Auto bin ich im Berufsverkehr nicht schneller.« Sie hat es zwei Monate ausprobiert, das ist keine Vermutung, sondern Erfahrung.",
                en: "'By car I am no faster in rush hour.' She tried it for two months; this is experience, not a guess.",
                it: "»In auto non sono più veloce nel traffico.« L'ha provato per due mesi.",
                bn: "»গাড়িতে ব্যস্ত সময়ে আমি দ্রুত পৌঁছাই না।« তিনি দুই মাস চেষ্টা করেছেন — অনুমান নয়, অভিজ্ঞতা।",
              },
            },
            {
              nr: 10,
              statement: "Ihr Arbeitgeber erkennt einen Teil der Fahrzeit als Arbeitszeit an.",
              answer: true,
              why: {
                de: "»Mein Arbeitgeber rechnet mir eine halbe Stunde davon als Arbeitszeit an.« Achte auf »eine halbe Stunde davon« — ein Teil, nicht die ganze Fahrt. Die Aussage sagt genau das: einen Teil.",
                en: "'My employer counts half an hour of it as working time.' Note 'half an hour of it' — a part, not the whole journey. The statement says exactly that: a part.",
                it: "»Il mio datore di lavoro conta mezz'ora come orario di lavoro«: una parte, non tutto il viaggio.",
                bn: "»আমার নিয়োগকর্তা এর আধা ঘণ্টা কর্মঘণ্টা হিসেবে ধরেন।« »এর আধা ঘণ্টা« খেয়াল করুন — একটি অংশ, পুরো যাত্রা নয়।",
              },
            },
            {
              nr: 11,
              statement: "Alle Firmen rechnen die Fahrzeit als Arbeitszeit an.",
              answer: false,
              why: {
                de: "»Nicht alle Firmen machen das, das weiß ich.« Sie schränkt ihre eigene Aussage sofort ein. Solche Nachsätze sind fast immer ein Item — wenn jemand sagt »nicht alle«, ist die Aussage mit »alle« falsch.",
                en: "'Not all firms do that, I know.' She limits her own statement at once. Such follow-ups are almost always an item — when someone says 'not all', a statement with 'all' is false.",
                it: "»Non tutte le aziende lo fanno, lo so.« Limita subito la propria affermazione.",
                bn: "»সব কোম্পানি তা করে না, আমি জানি।« তিনি নিজের কথাটাই সঙ্গে সঙ্গে সীমিত করেন। কেউ »সব নয়« বললে »সব« দিয়ে করা বক্তব্য মিথ্যা।",
              },
            },
            {
              nr: 12,
              statement: "Mit dem Deutschlandticket könnte sie Geld sparen.",
              answer: false,
              why: {
                de: "»Das Deutschlandticket würde mir nichts nützen, weil der ICE damit nicht geht.« Der Grund steht gleich dabei — und er ist derselbe, der auch im Lesetext dieses Modelltests vorkommt.",
                en: "'The Deutschlandticket would be no use to me, because the ICE is not included.' The reason is given at once — and it is the same one the reading text of this mock exam makes.",
                it: "»Il Deutschlandticket non mi servirebbe, perché l'ICE non è incluso.«",
                bn: "»Deutschlandticket আমার কাজে লাগত না, কারণ ICE এতে চলে না।« কারণটা সঙ্গে সঙ্গেই বলা।",
              },
            },
            {
              nr: 13,
              statement: "Am Anfang hat sie die Fahrzeit nicht gut genutzt.",
              answer: true,
              why: {
                de: "»Am Anfang habe ich im Zug nur aus dem Fenster geschaut … Das war verlorene Zeit.« Sie bewertet es selbst als verloren — deutlicher wird es nicht.",
                en: "'At first I just looked out of the window … That was wasted time.' She judges it wasted herself — it does not get clearer than that.",
                it: "»All'inizio guardavo solo fuori dal finestrino … Era tempo perso.«",
                bn: "»প্রথমে আমি জানালা দিয়ে তাকিয়ে থাকতাম … সেটা নষ্ট সময় ছিল।« তিনি নিজেই সেটাকে নষ্ট বলেন।",
              },
            },
            {
              nr: 14,
              statement: "Sie würde heute wieder mit dem Zug pendeln.",
              answer: true,
              why: {
                de: "»Ja, aber ich würde früher damit anfangen, mir die Zeit einzuteilen.« Das »aber« ändert nur, WIE sie es machen würde, nicht OB. Ein »ja, aber« bleibt ein Ja.",
                en: "'Yes, but I would start organising my time sooner.' The 'aber' changes only HOW she would do it, not WHETHER. A 'yes, but' is still a yes.",
                it: "»Sì, ma comincerei prima a organizzarmi il tempo.« Il »ma« cambia il come, non il se.",
                bn: "»হ্যাঁ, তবে সময় ভাগ করা আরও আগে শুরু করতাম।« »aber« বদলায় কীভাবে, হ্যাঁ কি না তা নয়। »হ্যাঁ, তবে« মানে হ্যাঁ-ই।",
              },
            },
            {
              nr: 15,
              statement: "Sie empfiehlt, einen Sitzplatz zu reservieren.",
              answer: true,
              why: {
                de: "»Sitzplatz reservieren, auch wenn es zwei Euro extra kostet.« Auf die Frage nach einem Tipp antwortet sie »Einen sehr praktischen« und begründet ihn im nächsten Satz.",
                en: "'Reserve a seat, even if it costs two euros extra.' She calls it 'a very practical tip' herself and justifies it in the next sentence.",
                it: "»Prenotare il posto, anche se costa due euro in più.«",
                bn: "»আসন সংরক্ষণ করুন, দুই ইউরো বেশি লাগলেও।« তিনি নিজেই এটাকে »খুব ব্যবহারিক পরামর্শ« বলেন।",
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
          id: "h6-t3-1",
          label: {
            de: "Durchsage im Zug",
            en: "Announcement on the train",
            it: "Annuncio sul treno",
            bn: "ট্রেনের ঘোষণা",
          },
          transcript:
            "Sehr geehrte Fahrgäste, wir erreichen in Kürze Hagen. Reisende nach Dortmund steigen bitte hier um. Reisende nach Düsseldorf bleiben sitzen, dieser Zug fährt direkt weiter.",
          items: [
            {
              nr: 16,
              statement: "Alle Reisenden müssen in Hagen umsteigen.",
              answer: false,
              why: {
                de: "Nur »Reisende nach Dortmund« steigen um; wer nach Düsseldorf will, »bleibt sitzen«. Eine Durchsage spricht oft zwei Gruppen an und gibt ihnen verschiedene Anweisungen — hör bis zum Ende, bevor du dich angesprochen fühlst.",
                en: "Only 'travellers to Dortmund' change; anyone going to Düsseldorf 'stays seated'. An announcement often addresses two groups with different instructions — listen to the end before assuming it means you.",
                it: "Solo i viaggiatori per Dortmund cambiano; chi va a Düsseldorf resta seduto.",
                bn: "কেবল »Dortmund-গামী যাত্রীরা« বদলাবেন; Düsseldorf-গামীরা »বসে থাকবেন«। একটি ঘোষণা প্রায়ই দুই দলকে আলাদা নির্দেশ দেয়।",
              },
            },
          ],
        },
        {
          id: "h6-t3-2",
          label: {
            de: "Ansage am Automaten",
            en: "Ticket machine message",
            it: "Messaggio del distributore",
            bn: "টিকিট মেশিনের বার্তা",
          },
          transcript:
            "Hinweis: Dieser Automat nimmt zurzeit keine Geldscheine an. Münzen und Karten funktionieren wie gewohnt. Der Automat auf der anderen Seite der Halle nimmt auch Scheine.",
          items: [
            {
              nr: 17,
              statement: "An diesem Automaten kann man mit Karte bezahlen.",
              answer: true,
              why: {
                de: "»Münzen und Karten funktionieren wie gewohnt.« Nur Geldscheine gehen nicht. Ein Verbot für eine Zahlungsart ist kein Verbot für alle — lies die Aussage genau: sie fragt nach der Karte.",
                en: "'Coins and cards work as usual.' Only notes are refused. A ban on one payment method is not a ban on all — read the statement closely: it asks about cards.",
                it: "»Monete e carte funzionano normalmente.« Solo le banconote non sono accettate.",
                bn: "»কয়েন ও কার্ড স্বাভাবিকভাবেই চলে।« কেবল নোট চলে না। এক পদ্ধতির নিষেধ মানে সবের নিষেধ নয়।",
              },
            },
          ],
        },
        {
          id: "h6-t3-3",
          label: {
            de: "Ansage der Fluggesellschaft",
            en: "Airline announcement",
            it: "Annuncio della compagnia aerea",
            bn: "বিমান সংস্থার ঘোষণা",
          },
          transcript:
            "Liebe Fluggäste, das Boarding beginnt in zehn Minuten. Wir bitten zunächst Familien mit kleinen Kindern und Passagiere, die Hilfe benötigen, an das Gate. Alle anderen Reisenden bleiben bitte noch sitzen.",
          items: [
            {
              nr: 18,
              statement: "Zuerst sollen nur bestimmte Passagiere zum Gate kommen.",
              answer: true,
              why: {
                de: "»Wir bitten zunächst Familien mit kleinen Kindern und Passagiere, die Hilfe benötigen« — und danach: »Alle anderen … bleiben bitte noch sitzen«. Das Wort »zunächst« kündigt die Reihenfolge an.",
                en: "'We first ask families with small children and passengers needing assistance' — and then: 'everyone else please stay seated'. The word 'zunächst' announces the order.",
                it: "»Chiediamo dapprima alle famiglie con bambini piccoli e ai passeggeri che necessitano assistenza«.",
                bn: "»আমরা প্রথমে ছোট শিশুসহ পরিবার ও সাহায্যপ্রয়োজন যাত্রীদের অনুরোধ করছি« — তারপর: »বাকিরা বসে থাকুন«।",
              },
            },
          ],
        },
        {
          id: "h6-t3-4",
          label: {
            de: "Ansage im Reisebüro",
            en: "Travel agency announcement",
            it: "Annuncio in agenzia di viaggi",
            bn: "ট্রাভেল এজেন্সির ঘোষণা",
          },
          transcript:
            "Guten Tag und willkommen im Reisebüro Weltweit. Unsere Beratung ist für Sie kostenlos, wenn Sie bei uns buchen. Buchen Sie nicht bei uns, berechnen wir fünfundzwanzig Euro für das Gespräch. Termine vereinbaren Sie telefonisch.",
          items: [
            {
              nr: 19,
              statement: "Die Beratung ist immer kostenlos.",
              answer: false,
              why: {
                de: "»kostenlos, wenn Sie bei uns buchen« — eine Bedingung. Im nächsten Satz steht, was sonst passiert: fünfundzwanzig Euro. »Immer« ist deshalb falsch. Achte auf »wenn«: es macht aus einer Zusage eine Bedingung.",
                en: "'free of charge if you book with us' — a condition. The next sentence says what happens otherwise: twenty-five euros. So 'always' is false. Watch for 'wenn': it turns a promise into a condition.",
                it: "»gratuita se prenota da noi«: una condizione. La frase dopo dice cosa succede altrimenti.",
                bn: "»আমাদের কাছে বুক করলে বিনামূল্যে« — একটি শর্ত। পরের বাক্যে বলা, নইলে পঁচিশ ইউরো। »wenn« প্রতিশ্রুতিকে শর্তে বদলে দেয়।",
              },
            },
          ],
        },
        {
          id: "h6-t3-5",
          label: {
            de: "Durchsage am Bahnsteig",
            en: "Platform announcement",
            it: "Annuncio sul binario",
            bn: "প্ল্যাটফর্মের ঘোষণা",
          },
          transcript:
            "Achtung am Gleis zwei: Der Regionalexpress nach Betzdorf fällt heute aus. Bitte benutzen Sie den Bus, der vor dem Bahnhof bereitsteht. Ihre Fahrkarte gilt im Bus ohne Aufpreis.",
          items: [
            {
              nr: 20,
              statement: "Für den Bus muss man extra bezahlen.",
              answer: false,
              why: {
                de: "»Ihre Fahrkarte gilt im Bus ohne Aufpreis.« Ein Aufpreis ist genau das »extra«, nach dem die Aussage fragt — und er wird ausgeschlossen.",
                en: "'Your ticket is valid on the bus at no extra charge.' An Aufpreis is exactly the 'extra' the statement asks about — and it is ruled out.",
                it: "»Il suo biglietto vale sull'autobus senza supplemento.«",
                bn: "»আপনার টিকিট বাসে অতিরিক্ত খরচ ছাড়াই চলবে।« Aufpreis-ই সেই »অতিরিক্ত«, আর তা বাদ দেওয়া হয়েছে।",
              },
            },
          ],
        },
      ],
    },
  ],
};
