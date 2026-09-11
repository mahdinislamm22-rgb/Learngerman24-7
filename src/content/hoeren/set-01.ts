import type { HoerSet } from "./types";

/**
 * HOER-01 — Durchsagen, ein Interview und Ansagen.
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * The false statements are written the way the exam writes them: each one
 * is true of something that WAS said, just not of what the statement
 * claims. Item 8 is the clearest example — the interview really does say
 * "neun Monate", but only for someone who also practises at home.
 * Half-hearing is what the paper punishes.
 */
export const hoer01: HoerSet = {
  code: "HOER-01",

  title: {
    de: "Durchsagen, Interview und Ansagen",
    en: "Announcements, an interview and messages",
    it: "Annunci, un'intervista e messaggi",
    bn: "ঘোষণা, একটি সাক্ষাৎকার ও বার্তা",
  },

  intro: {
    de: "Drei Teile wie in der Prüfung. Teil 1 und 2 hörst du nur einmal, Teil 3 zweimal. Der Text wird erst nach der Auswertung sichtbar.",
    en: "Three parts, as in the exam. You hear parts 1 and 2 once, part 3 twice. The transcript only appears after grading.",
    it: "Tre parti, come nell'esame. Le parti 1 e 2 si ascoltano una volta, la parte 3 due volte. La trascrizione appare solo dopo la correzione.",
    bn: "পরীক্ষার মতোই তিনটি অংশ। অংশ ১ ও ২ একবার শুনবেন, অংশ ৩ দুবার। উত্তর মেলানোর পরেই কেবল লেখাটি দেখা যাবে।",
  },

  teile: [
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
          id: "t1-1",
          label: {
            de: "Durchsage am Bahnhof",
            en: "Station announcement",
            it: "Annuncio in stazione",
            bn: "স্টেশনের ঘোষণা",
          },
          transcript:
            "Achtung auf Gleis drei. Der Regionalexpress nach Köln, Abfahrt vierzehn Uhr zwanzig, hat heute etwa fünfzehn Minuten Verspätung. Grund dafür ist eine Störung auf der Strecke. Wir bitten um Ihr Verständnis.",
          items: [
            {
              nr: 1,
              statement: "Der Zug nach Köln fährt pünktlich ab.",
              answer: false,
              why: {
                de: "Die Durchsage nennt »etwa fünfzehn Minuten Verspätung«. Die Uhrzeit vierzehn Uhr zwanzig ist die geplante Abfahrt, nicht die tatsächliche.",
                en: "The announcement says 'about fifteen minutes late'. The time 14:20 is the scheduled departure, not the real one.",
                it: "L'annuncio dice »circa quindici minuti di ritardo«. L'orario 14:20 è la partenza prevista, non quella effettiva.",
                bn: "ঘোষণায় বলা হয়েছে »প্রায় পনেরো মিনিট দেরি«। ১৪:২০ হলো নির্ধারিত সময়, প্রকৃত সময় নয়।",
              },
            },
          ],
        },
        {
          id: "t1-2",
          label: {
            de: "Anrufbeantworter einer Arztpraxis",
            en: "Doctor's surgery answerphone",
            it: "Segreteria di uno studio medico",
            bn: "ডাক্তারের চেম্বারের ভয়েসমেইল",
          },
          transcript:
            "Guten Tag, hier ist die Praxis Doktor Neumann. Unsere Praxis bleibt von Montag bis Mittwoch wegen Urlaub geschlossen. Ab Donnerstag sind wir wieder für Sie da. In dringenden Fällen wenden Sie sich bitte an die Praxis Doktor Weber in der Bahnhofstraße.",
          items: [
            {
              nr: 2,
              statement: "Die Praxis ist am Donnerstag wieder geöffnet.",
              answer: true,
              why: {
                de: "»Ab Donnerstag sind wir wieder für Sie da« — geschlossen ist nur Montag bis Mittwoch.",
                en: "'Ab Donnerstag sind wir wieder für Sie da' — it is closed only Monday to Wednesday.",
                it: "»Ab Donnerstag sind wir wieder für Sie da«: è chiuso solo da lunedì a mercoledì.",
                bn: "»Ab Donnerstag sind wir wieder für Sie da« — সোম থেকে বুধবারই কেবল বন্ধ।",
              },
            },
          ],
        },
        {
          id: "t1-3",
          label: {
            de: "Durchsage im Supermarkt",
            en: "Supermarket announcement",
            it: "Annuncio al supermercato",
            bn: "সুপারমার্কেটের ঘোষণা",
          },
          transcript:
            "Liebe Kundinnen und Kunden, wir möchten Sie darauf hinweisen, dass unser Markt heute bereits um achtzehn Uhr schließt. Der Grund ist eine Betriebsversammlung. Ab morgen gelten wieder die normalen Öffnungszeiten bis zwanzig Uhr.",
          items: [
            {
              nr: 3,
              statement: "Der Markt schließt morgen um achtzehn Uhr.",
              answer: false,
              why: {
                de: "Achtzehn Uhr gilt nur für HEUTE. Ab morgen ist wieder bis zwanzig Uhr geöffnet. Die Zahl stimmt, der Tag nicht.",
                en: "Six o'clock applies only to TODAY. From tomorrow it is open until eight again. The number is right; the day is not.",
                it: "Le diciotto valgono solo per OGGI. Da domani è di nuovo aperto fino alle venti. Il numero è giusto, il giorno no.",
                bn: "আঠারোটা কেবল আজকের জন্য। আগামীকাল থেকে আবার রাত আটটা পর্যন্ত খোলা। সংখ্যাটা ঠিক, দিনটা নয়।",
              },
            },
          ],
        },
        {
          id: "t1-4",
          label: {
            de: "Nachricht von einer Freundin",
            en: "Message from a friend",
            it: "Messaggio di un'amica",
            bn: "বন্ধুর বার্তা",
          },
          transcript:
            "Hallo Tim, ich bin es, Sara. Du, wir treffen uns heute Abend doch nicht im Kino, sondern im Café gegenüber. Der Film fängt erst um halb neun an, und ich möchte vorher noch etwas essen. Bis später!",
          items: [
            {
              nr: 4,
              statement: "Sara möchte vor dem Film etwas essen.",
              answer: true,
              why: {
                de: "»ich möchte vorher noch etwas essen« — »vorher« heißt vor dem Film. Deshalb auch der Treffpunkt im Café statt im Kino.",
                en: "'ich möchte vorher noch etwas essen' — 'vorher' means before the film. That is also why they meet at the café instead of the cinema.",
                it: "»ich möchte vorher noch etwas essen«: »vorher« significa prima del film. Per questo si incontrano al bar invece che al cinema.",
                bn: "»ich möchte vorher noch etwas essen« — »vorher« মানে সিনেমার আগে। সেজন্যই সিনেমা হলের বদলে ক্যাফেতে দেখা হচ্ছে।",
              },
            },
          ],
        },
        {
          id: "t1-5",
          label: {
            de: "Wetterbericht",
            en: "Weather forecast",
            it: "Previsioni del tempo",
            bn: "আবহাওয়ার পূর্বাভাস",
          },
          transcript:
            "Und nun das Wetter für morgen. Am Vormittag ist es im ganzen Land stark bewölkt, am Nachmittag kommt im Süden die Sonne heraus. Die Temperaturen liegen zwischen zwölf und siebzehn Grad. Regen erwarten wir morgen nicht.",
          items: [
            {
              nr: 5,
              statement: "Morgen regnet es im Süden.",
              answer: false,
              why: {
                de: "»Regen erwarten wir morgen nicht.« Im Süden kommt sogar die Sonne heraus. Der Satz mit »nicht« steht am Ende — genau dort, wo man beim Hören schon abschaltet.",
                en: "'Regen erwarten wir morgen nicht.' In the south the sun even comes out. The sentence with 'nicht' comes last — exactly where listeners have already switched off.",
                it: "»Regen erwarten wir morgen nicht.« Al sud esce addirittura il sole. La frase con »nicht« è l'ultima: proprio dove chi ascolta si è già distratto.",
                bn: "»Regen erwarten wir morgen nicht.« দক্ষিণে বরং রোদ উঠবে। »nicht« যুক্ত বাক্যটি একেবারে শেষে — ঠিক যেখানে শ্রোতার মন সরে যায়।",
              },
            },
          ],
        },
      ],
    },

    {
      teil: 2,
      maxPlays: 1,
      instruction: {
        de: "Du hörst ein Interview — nur einmal. Entscheide bei jeder Aussage: richtig oder falsch?",
        en: "You will hear an interview, once only. Decide for each statement: true or false?",
        it: "Ascolterai un'intervista, una sola volta. Decidi per ogni affermazione: vero o falso?",
        bn: "আপনি একটি সাক্ষাৎকার শুনবেন, একবারই। প্রতিটি বক্তব্যের জন্য ঠিক করুন: সত্য না মিথ্যা?",
      },
      tracks: [
        {
          id: "t2-1",
          label: {
            de: "Radiointerview mit einer Sprachschulleiterin",
            en: "Radio interview with a language-school director",
            it: "Intervista radiofonica con la direttrice di una scuola di lingue",
            bn: "ভাষা স্কুলের পরিচালকের সাথে রেডিও সাক্ষাৎকার",
          },
          transcript: `Moderator: Guten Morgen und herzlich willkommen. Heute ist Frau Petra Klein bei uns. Sie leitet seit zehn Jahren eine Sprachschule hier in Siegen. Frau Klein, wer kommt zu Ihnen in die Kurse?

Frau Klein: Sehr unterschiedliche Menschen. Früher waren es vor allem Studenten, heute sind die meisten Teilnehmer berufstätig. Viele arbeiten schon und möchten ihr Deutsch für die Arbeit verbessern.

Moderator: Wie lange dauert es, bis man das Niveau B ein erreicht?

Frau Klein: Das hängt stark vom Einzelnen ab. Wer regelmäßig kommt und zu Hause übt, braucht meistens etwa neun Monate. Ohne das Üben zu Hause dauert es deutlich länger. Ich sage immer: Der Kurs allein reicht nicht.

Moderator: Was ist für Ihre Teilnehmer am schwierigsten?

Frau Klein: Ganz klar das Sprechen. Viele verstehen schon sehr gut und schreiben ordentlich, aber sie trauen sich nicht zu sprechen. Sie haben Angst, Fehler zu machen. Dabei ist genau das der Weg: Man lernt durch Fehler.

Moderator: Haben Sie einen Tipp?

Frau Klein: Ja, einen ganz einfachen. Suchen Sie sich Menschen, mit denen Sie regelmäßig Deutsch sprechen — Nachbarn, Kollegen, oder eine Gruppe. Fünfzehn Minuten am Tag helfen mehr als drei Stunden am Wochenende.

Moderator: Und die Prüfung? Viele haben davor Angst.

Frau Klein: Die Prüfung ist kein Geheimnis. Das Format ist immer gleich, und man kann es üben. Wer drei oder vier Modelltests gemacht hat, weiß genau, was kommt. Die meisten scheitern nicht am Deutsch, sondern an der Zeit. Deshalb üben wir immer mit Uhr.

Moderator: Frau Klein, vielen Dank für das Gespräch.

Frau Klein: Sehr gern.`,
          items: [
            {
              nr: 6,
              statement: "Frau Klein leitet die Sprachschule seit zehn Jahren.",
              answer: true,
              why: {
                de: "Der Moderator sagt es in der Vorstellung: »Sie leitet seit zehn Jahren eine Sprachschule«.",
                en: "The presenter says so in the introduction: 'Sie leitet seit zehn Jahren eine Sprachschule'.",
                it: "Il conduttore lo dice nella presentazione: »Sie leitet seit zehn Jahren eine Sprachschule«.",
                bn: "উপস্থাপক পরিচয় দেওয়ার সময়ই বলেন: »Sie leitet seit zehn Jahren eine Sprachschule«।",
              },
            },
            {
              nr: 7,
              statement: "Die meisten Teilnehmer sind heute Studenten.",
              answer: false,
              why: {
                de: "»Früher waren es vor allem Studenten, heute sind die meisten berufstätig.« Das Wort »früher« kehrt die Aussage um.",
                en: "'Früher waren es vor allem Studenten, heute sind die meisten berufstätig.' The word 'früher' reverses the claim.",
                it: "»Früher waren es vor allem Studenten, heute sind die meisten berufstätig.« La parola »früher« ribalta l'affermazione.",
                bn: "»Früher waren es vor allem Studenten, heute sind die meisten berufstätig.« »früher« শব্দটিই বক্তব্যটি উল্টে দেয়।",
              },
            },
            {
              nr: 8,
              statement: "Für das Niveau B1 braucht man immer etwa neun Monate.",
              answer: false,
              why: {
                de: "Neun Monate gelten nur für die, die regelmäßig kommen UND zu Hause üben. »Ohne das Üben zu Hause dauert es deutlich länger.« Die Zahl stimmt, die Bedingung fehlt.",
                en: "Nine months applies only to people who attend regularly AND practise at home. 'Ohne das Üben zu Hause dauert es deutlich länger.' The number is right; the condition is missing.",
                it: "I nove mesi valgono solo per chi frequenta regolarmente E si esercita a casa. »Ohne das Üben zu Hause dauert es deutlich länger.« Il numero è giusto, manca la condizione.",
                bn: "নয় মাস কেবল তাদের জন্য যারা নিয়মিত আসেন এবং বাসায়ও অনুশীলন করেন। »Ohne das Üben zu Hause dauert es deutlich länger.« সংখ্যা ঠিক, শর্তটাই বাদ পড়েছে।",
              },
            },
            {
              nr: 9,
              statement: "Frau Klein sagt, der Kurs allein reicht aus.",
              answer: false,
              why: {
                de: "Sie sagt wörtlich das Gegenteil: »Der Kurs allein reicht nicht.«",
                en: "She says literally the opposite: 'Der Kurs allein reicht nicht.'",
                it: "Dice letteralmente il contrario: »Der Kurs allein reicht nicht.«",
                bn: "তিনি ঠিক উল্টোটাই বলেন: »Der Kurs allein reicht nicht.«",
              },
            },
            {
              nr: 10,
              statement: "Das Sprechen ist für viele Teilnehmer am schwierigsten.",
              answer: true,
              why: {
                de: "»Ganz klar das Sprechen« — auf die Frage nach dem Schwierigsten.",
                en: "'Ganz klar das Sprechen' — in answer to what is hardest.",
                it: "»Ganz klar das Sprechen«, in risposta a cosa sia più difficile.",
                bn: "সবচেয়ে কঠিন কী — এই প্রশ্নের উত্তরে »Ganz klar das Sprechen«।",
              },
            },
            {
              nr: 11,
              statement: "Die Teilnehmer können meistens schlecht schreiben.",
              answer: false,
              why: {
                de: "»Viele verstehen schon sehr gut und schreiben ordentlich« — das Schreiben ist gerade nicht das Problem.",
                en: "'Viele verstehen schon sehr gut und schreiben ordentlich' — writing is precisely not the problem.",
                it: "»Viele verstehen schon sehr gut und schreiben ordentlich«: la scrittura non è il problema.",
                bn: "»Viele verstehen schon sehr gut und schreiben ordentlich« — লেখাটাই বরং সমস্যা নয়।",
              },
            },
            {
              nr: 12,
              statement: "Frau Klein empfiehlt, jeden Tag kurz Deutsch zu sprechen.",
              answer: true,
              why: {
                de: "»Fünfzehn Minuten am Tag helfen mehr als drei Stunden am Wochenende.«",
                en: "'Fünfzehn Minuten am Tag helfen mehr als drei Stunden am Wochenende.'",
                it: "»Fünfzehn Minuten am Tag helfen mehr als drei Stunden am Wochenende.«",
                bn: "»Fünfzehn Minuten am Tag helfen mehr als drei Stunden am Wochenende.«",
              },
            },
            {
              nr: 13,
              statement: "Drei Stunden am Wochenende sind besser als jeden Tag fünfzehn Minuten.",
              answer: false,
              why: {
                de: "Genau umgekehrt. Beide Zahlen kommen vor — wer nur die Zahlen hört und nicht »mehr als«, wählt falsch.",
                en: "Exactly the other way round. Both numbers occur — anyone who hears only the numbers and not 'mehr als' gets it wrong.",
                it: "Esattamente il contrario. Compaiono entrambi i numeri: chi sente solo i numeri e non »mehr als« sbaglia.",
                bn: "ঠিক উল্টো। দুটি সংখ্যাই আসে — যে কেবল সংখ্যা শোনে, »mehr als« শোনে না, সে ভুল করে।",
              },
            },
            {
              nr: 14,
              statement: "Das Format der Prüfung ändert sich oft.",
              answer: false,
              why: {
                de: "»Das Format ist immer gleich, und man kann es üben.«",
                en: "'Das Format ist immer gleich, und man kann es üben.'",
                it: "»Das Format ist immer gleich, und man kann es üben.«",
                bn: "»Das Format ist immer gleich, und man kann es üben.«",
              },
            },
            {
              nr: 15,
              statement: "Die meisten Teilnehmer haben in der Prüfung Probleme mit der Zeit.",
              answer: true,
              why: {
                de: "»Die meisten scheitern nicht am Deutsch, sondern an der Zeit.« Deshalb übt die Schule immer mit Uhr.",
                en: "'Die meisten scheitern nicht am Deutsch, sondern an der Zeit.' That is why the school always practises against the clock.",
                it: "»Die meisten scheitern nicht am Deutsch, sondern an der Zeit.« Per questo la scuola si esercita sempre a cronometro.",
                bn: "»Die meisten scheitern nicht am Deutsch, sondern an der Zeit.« তাই স্কুলে সবসময় ঘড়ি ধরে অনুশীলন হয়।",
              },
            },
          ],
        },
      ],
    },

    {
      teil: 3,
      maxPlays: 2,
      instruction: {
        de: "Du hörst fünf kurze Ansagen — diesmal zweimal. Richtig oder falsch?",
        en: "You will hear five short announcements, this time twice each. True or false?",
        it: "Ascolterai cinque brevi annunci, questa volta due volte ciascuno. Vero o falso?",
        bn: "আপনি পাঁচটি ছোট ঘোষণা শুনবেন, এবার প্রতিটি দুবার। সত্য না মিথ্যা?",
      },
      tracks: [
        {
          id: "t3-1",
          label: {
            de: "Ansage im Zug",
            en: "Announcement on a train",
            it: "Annuncio sul treno",
            bn: "ট্রেনের ঘোষণা",
          },
          transcript:
            "Sehr geehrte Fahrgäste, in wenigen Minuten erreichen wir Frankfurt Hauptbahnhof. Bitte achten Sie beim Aussteigen auf Ihr Gepäck. Anschlüsse in Richtung München finden Sie auf Gleis sieben.",
          items: [
            {
              nr: 16,
              statement: "Der Zug nach München fährt von Gleis sieben.",
              answer: true,
              why: {
                de: "»Anschlüsse in Richtung München finden Sie auf Gleis sieben.«",
                en: "'Anschlüsse in Richtung München finden Sie auf Gleis sieben.'",
                it: "»Anschlüsse in Richtung München finden Sie auf Gleis sieben.«",
                bn: "»Anschlüsse in Richtung München finden Sie auf Gleis sieben.«",
              },
            },
          ],
        },
        {
          id: "t3-2",
          label: {
            de: "Nachricht der Hausverwaltung",
            en: "Message from the building management",
            it: "Messaggio dell'amministrazione",
            bn: "বাড়ি ব্যবস্থাপনার বার্তা",
          },
          transcript:
            "Hallo Herr Islam, hier ist Frau Berger von der Hausverwaltung. Der Techniker kommt am Freitag zwischen neun und zwölf Uhr. Bitte sorgen Sie dafür, dass jemand zu Hause ist. Falls das nicht geht, rufen Sie mich bitte zurück.",
          items: [
            {
              nr: 17,
              statement: "Der Techniker kommt am Freitag nachmittags.",
              answer: false,
              why: {
                de: "»zwischen neun und zwölf Uhr« ist vormittags. Der Tag stimmt, die Tageszeit nicht.",
                en: "'zwischen neun und zwölf Uhr' is the morning. The day is right, the time of day is not.",
                it: "»zwischen neun und zwölf Uhr« è la mattina. Il giorno è giusto, il momento no.",
                bn: "»zwischen neun und zwölf Uhr« মানে সকাল। দিনটা ঠিক, সময়টা নয়।",
              },
            },
          ],
        },
        {
          id: "t3-3",
          label: {
            de: "Ansage im Museum",
            en: "Museum announcement",
            it: "Annuncio al museo",
            bn: "জাদুঘরের ঘোষণা",
          },
          transcript:
            "Willkommen im Stadtmuseum. Der Eintritt ist für Kinder unter sechs Jahren frei. Erwachsene zahlen acht Euro, Studenten und Rentner fünf Euro. Jeden ersten Sonntag im Monat ist der Eintritt für alle kostenlos.",
          items: [
            {
              nr: 18,
              statement: "Studenten zahlen acht Euro.",
              answer: false,
              why: {
                de: "Acht Euro zahlen Erwachsene; Studenten zahlen fünf. Beide Zahlen stehen direkt nebeneinander — genau darauf zielt die Aufgabe.",
                en: "Eight euros is the adult price; students pay five. Both figures come one after the other — which is exactly what the item is testing.",
                it: "Otto euro è il prezzo per gli adulti; gli studenti pagano cinque. Le due cifre sono consecutive: è proprio questo che l'item verifica.",
                bn: "আট ইউরো প্রাপ্তবয়স্কদের জন্য; শিক্ষার্থীরা দেয় পাঁচ। দুটি সংখ্যা পরপরই আসে — প্রশ্নটি ঠিক সেটাই পরীক্ষা করে।",
              },
            },
          ],
        },
        {
          id: "t3-4",
          label: {
            de: "Ansage im Sportstudio",
            en: "Announcement at a gym",
            it: "Annuncio in palestra",
            bn: "জিমের ঘোষণা",
          },
          transcript:
            "Der Yogakurs am Dienstagabend fällt diese Woche leider aus, weil die Trainerin krank ist. Der Kurs am Donnerstag findet wie geplant statt. Wir informieren Sie, sobald es einen Ersatztermin gibt.",
          items: [
            {
              nr: 19,
              statement: "Der Kurs am Donnerstag findet statt.",
              answer: true,
              why: {
                de: "»Der Kurs am Donnerstag findet wie geplant statt.« Nur der Dienstag fällt aus.",
                en: "'Der Kurs am Donnerstag findet wie geplant statt.' Only Tuesday is cancelled.",
                it: "»Der Kurs am Donnerstag findet wie geplant statt.« Solo il martedì è annullato.",
                bn: "»Der Kurs am Donnerstag findet wie geplant statt.« কেবল মঙ্গলবারেরটি বাতিল।",
              },
            },
          ],
        },
        {
          id: "t3-5",
          label: {
            de: "Durchsage am Flughafen",
            en: "Airport announcement",
            it: "Annuncio in aeroporto",
            bn: "বিমানবন্দরের ঘোষণা",
          },
          transcript:
            "Passagiere des Fluges nach Hamburg werden gebeten, sich zum Ausgang B zwölf zu begeben. Der Ausgang wurde von B acht geändert. Das Boarding beginnt in zehn Minuten.",
          items: [
            {
              nr: 20,
              statement: "Der Ausgang wurde geändert.",
              answer: true,
              why: {
                de: "»Der Ausgang wurde von B acht geändert« — neu ist B zwölf. Wer nur die erste Zahl hört, merkt die Änderung nicht.",
                en: "'Der Ausgang wurde von B acht geändert' — the new one is B12. Anyone who catches only the first number misses the change.",
                it: "»Der Ausgang wurde von B acht geändert«: il nuovo è B12. Chi sente solo il primo numero non coglie il cambio.",
                bn: "»Der Ausgang wurde von B acht geändert« — নতুনটি B12। যে কেবল প্রথম সংখ্যাটি শোনে, সে পরিবর্তনটা ধরতে পারে না।",
              },
            },
          ],
        },
      ],
    },
  ],
};
