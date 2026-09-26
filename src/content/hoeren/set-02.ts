import type { HoerSet } from "./types";

/**
 * HOER-02 — Arbeit und Bewerbung.
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * The traps here are the ones the real paper uses on working life:
 *   · a number that is said but belongs to something else (item 3 — the
 *     shift starts at six, the MEETING is at half past five),
 *   · a plan that is mentioned and then dropped (item 9 — she wanted to
 *     study, and says plainly that she did not),
 *   · a word the statement swaps for a near neighbour (item 16 —
 *     "Bewerbungsmappe" versus "Lebenslauf"),
 *   · and one item where nothing at all is said about the thing claimed
 *     (item 13), because in the exam "the text does not say so" is a
 *     falsch, not a maybe.
 */
export const hoer02: HoerSet = {
  code: "HOER-02",

  title: {
    de: "Am Arbeitsplatz und bei der Bewerbung",
    en: "At work and applying for a job",
    it: "Al lavoro e nella candidatura",
    bn: "কর্মক্ষেত্রে ও চাকরির আবেদনে",
  },

  intro: {
    de: "Drei Teile wie in der Prüfung. Teil 1 und 2 hörst du nur einmal, Teil 3 zweimal. Der Text wird erst nach der Auswertung sichtbar.",
    en: "Three parts, as in the exam. You hear parts 1 and 2 once, part 3 twice. The transcript only appears after grading.",
    it: "Tre parti, come nell'esame. Le parti 1 e 2 si ascoltano una volta, la parte 3 due volte. La trascrizione appare solo dopo la correzione.",
    bn: "পরীক্ষার মতোই তিনটি অংশ। অংশ ১ ও ২ একবার শুনবেন, অংশ ৩ দুবার। উত্তর মেলানোর পরেই কেবল লেখাটি দেখা যাবে।",
  },

  teile: [
    // ------------------------------------------------------------------
    // Teil 1 — five short messages, one play each.
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
          id: "h2-t1-1",
          label: {
            de: "Anruf einer Personalabteilung",
            en: "Call from an HR department",
            it: "Chiamata dell'ufficio personale",
            bn: "কর্মী বিভাগ থেকে ফোন",
          },
          transcript:
            "Guten Tag, Herr Rahman, hier ist Frau Kessler von der Firma Bertram. Wir haben Ihre Bewerbung erhalten und möchten Sie gern kennenlernen. Passt Ihnen der kommende Dienstag um zehn Uhr? Bringen Sie bitte Ihre Zeugnisse im Original mit. Eine Bestätigung brauchen wir nicht, wir erwarten Sie einfach.",
          items: [
            {
              nr: 1,
              statement: "Herr Rahman soll die Originale seiner Zeugnisse mitbringen.",
              answer: true,
              why: {
                de: "»Bringen Sie bitte Ihre Zeugnisse im Original mit.« — genau das steht in der Nachricht. Achte auf »im Original«: Kopien wären etwas anderes.",
                en: "'Please bring your certificates in the original' — exactly what the message says. Note 'im Original': copies would be something else.",
                it: "»Porti i suoi attestati in originale« — proprio quello che dice il messaggio. Attenzione a »im Original«: le copie sarebbero altro.",
                bn: "»আপনার সনদপত্রগুলো মূল কপিতে আনবেন« — বার্তায় ঠিক এটাই বলা আছে। »im Original« খেয়াল করুন: ফটোকপি আলাদা জিনিস।",
              },
            },
          ],
        },
        {
          id: "h2-t1-2",
          label: {
            de: "Durchsage in einer Firma",
            en: "Announcement inside a company",
            it: "Annuncio in azienda",
            bn: "একটি কোম্পানির ঘোষণা",
          },
          transcript:
            "Liebe Kolleginnen und Kollegen, eine kurze Information: Die Kantine bleibt am Freitag geschlossen, weil die Küche renoviert wird. An diesem Tag steht ein Imbisswagen auf dem Hof. Ab Montag kochen wir wieder wie gewohnt.",
          items: [
            {
              nr: 2,
              statement: "Am Freitag bekommen die Mitarbeiter gar nichts zu essen.",
              answer: false,
              why: {
                de: "Die Kantine ist zu, aber »ein Imbisswagen auf dem Hof« steht bereit. Geschlossen heißt hier nicht: kein Essen.",
                en: "The canteen is shut, but 'a snack van in the yard' is there. Closed does not mean no food here.",
                it: "La mensa è chiusa, ma c'è »un furgoncino di panini nel cortile«. Chiuso non significa niente da mangiare.",
                bn: "ক্যান্টিন বন্ধ, কিন্তু »উঠানে একটি খাবারের গাড়ি« থাকবে। বন্ধ মানে এখানে খাবার নেই নয়।",
              },
            },
          ],
        },
        {
          id: "h2-t1-3",
          label: {
            de: "Nachricht auf der Mailbox",
            en: "Voicemail message",
            it: "Messaggio in segreteria",
            bn: "ভয়েসমেইল বার্তা",
          },
          transcript:
            "Hallo Tarek, hier ist Jonas. Du, die Schicht morgen fängt wie immer um sechs Uhr an, aber der Chef will uns vorher noch kurz sprechen. Wir treffen uns deshalb schon um halb sechs in der Werkstatt. Es dauert nur zehn Minuten, versprochen.",
          items: [
            {
              nr: 3,
              statement: "Tarek muss morgen erst um sechs Uhr da sein.",
              answer: false,
              why: {
                de: "Sechs Uhr ist der Schichtbeginn, aber da sein soll er schon »um halb sechs«, wegen des Gesprächs mit dem Chef. »erst um sechs« hieße: nicht früher — und genau das stimmt nicht.",
                en: "Six is when the shift starts, but he must be there at 'half past five' for the talk with the boss. 'erst um sechs' would mean not before six — which is exactly what is not true.",
                it: "Le sei è l'inizio del turno, ma deve essere lì »alle cinque e mezza« per parlare con il capo. »erst um sechs« significherebbe non prima delle sei, e non è così.",
                bn: "ছয়টা শিফট শুরুর সময়, কিন্তু তাকে থাকতে হবে »সাড়ে পাঁচটায়«, বসের সঙ্গে কথা বলার জন্য। »erst um sechs« মানে ছয়টার আগে নয় — সেটাই ঠিক নয়।",
              },
            },
          ],
        },
        {
          id: "h2-t1-4",
          label: {
            de: "Ansage der Agentur für Arbeit",
            en: "Employment agency recorded message",
            it: "Messaggio registrato dell'agenzia del lavoro",
            bn: "কর্মসংস্থান দপ্তরের রেকর্ড বার্তা",
          },
          transcript:
            "Willkommen bei der Agentur für Arbeit. Unsere Beratung ohne Termin findet montags und donnerstags von acht bis zwölf Uhr statt. Für ein persönliches Beratungsgespräch vereinbaren Sie bitte vorher einen Termin, entweder telefonisch oder online.",
          items: [
            {
              nr: 4,
              statement: "Ohne Termin kann man nur an zwei Tagen in der Woche beraten werden.",
              answer: true,
              why: {
                de: "»montags und donnerstags« — das sind zwei Tage. Für alles andere braucht man einen Termin.",
                en: "'Mondays and Thursdays' — two days. Everything else needs an appointment.",
                it: "»lunedì e giovedì« — due giorni. Per il resto serve un appuntamento.",
                bn: "»সোম ও বৃহস্পতিবার« — দুই দিন। বাকি সবকিছুর জন্য অ্যাপয়েন্টমেন্ট লাগে।",
              },
            },
          ],
        },
        {
          id: "h2-t1-5",
          label: {
            de: "Nachricht einer Kollegin",
            en: "Message from a colleague",
            it: "Messaggio di una collega",
            bn: "এক সহকর্মীর বার্তা",
          },
          transcript:
            "Hallo, hier ist Sabine. Ich habe leider die Grippe und bleibe diese Woche zu Hause. Ich habe schon beim Chef Bescheid gesagt. Die Krankmeldung schicke ich morgen per Post. Könntest du bitte die Bestellung für den Kunden Wagner übernehmen? Danke dir.",
          items: [
            {
              nr: 5,
              statement: "Sabine hat ihren Chef noch nicht informiert.",
              answer: false,
              why: {
                de: "»Ich habe schon beim Chef Bescheid gesagt.« Offen ist nur die Krankmeldung, die erst morgen kommt — informiert ist er längst.",
                en: "'I've already told the boss.' Only the sick note is still outstanding, coming tomorrow — he has long since been informed.",
                it: "»Ho già avvisato il capo.« Manca solo il certificato, che arriva domani — informato lo è già.",
                bn: "»আমি বসকে আগেই জানিয়ে দিয়েছি।« কেবল অসুস্থতার সনদ বাকি, সেটা কাল আসবে — জানানো হয়ে গেছে।",
              },
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    // Teil 2 — one longer interview, ten items, one play.
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
          id: "h2-t2-1",
          label: {
            de: "Radiointerview: »Mein Weg in die Ausbildung«",
            en: "Radio interview: 'How I got my apprenticeship'",
            it: "Intervista radiofonica: »Il mio percorso verso la formazione«",
            bn: "রেডিও সাক্ষাৎকার: »প্রশিক্ষণে আমার পথ«",
          },
          transcript:
            "Moderator: Heute zu Gast ist Frau Amina Yusuf. Sie macht eine Ausbildung zur Fachinformatikerin. Frau Yusuf, wie lange sind Sie schon in Deutschland? " +
            "Amina: Seit knapp vier Jahren. Die ersten anderthalb Jahre habe ich fast nur Deutsch gelernt. " +
            "Moderator: Und wie ging es dann weiter? " +
            "Amina: Ich wollte eigentlich an der Universität studieren, so wie in meinem Heimatland. Aber mein Abschluss wurde hier nicht voll anerkannt, und ehrlich gesagt hatte ich auch kein Geld für drei oder vier Jahre ohne Einkommen. Also habe ich mich für eine Ausbildung entschieden. Studiert habe ich am Ende nicht. " +
            "Moderator: War das eine schwere Entscheidung? " +
            "Amina: Am Anfang schon. Ich dachte, eine Ausbildung sei weniger wert. Heute sehe ich das anders: Ich verdiene ab dem ersten Monat Geld und lerne im Betrieb genau das, was die Firma wirklich braucht. " +
            "Moderator: Wie viele Bewerbungen haben Sie geschrieben? " +
            "Amina: Ungefähr vierzig. Zu drei Vorstellungsgesprächen wurde ich eingeladen, und beim dritten hat es geklappt. " +
            "Moderator: Vierzig Bewerbungen — das klingt nach viel Geduld. " +
            "Amina: Ja, und nach vielen Absagen. Das Schwierigste war nicht die Sprache, sondern das Warten. Manche Firmen haben gar nicht geantwortet. " +
            "Moderator: Was hat Ihnen am meisten geholfen? " +
            "Amina: Ein Bewerbungstraining bei einem Verein hier im Stadtteil. Das war kostenlos. Dort hat man mit mir geübt, wie man sich im Gespräch vorstellt, und meine Unterlagen durchgesehen. Vorher hatte ich zum Beispiel kein richtiges Anschreiben, nur einen Lebenslauf. " +
            "Moderator: Und wie ist der Alltag jetzt? " +
            "Amina: Drei Tage im Betrieb, zwei Tage in der Berufsschule. Die Schule fällt mir leichter als gedacht, aber im Betrieb sprechen die Kollegen sehr schnell. Ich frage inzwischen einfach nach, wenn ich etwas nicht verstehe. Am Anfang habe ich das nie getan, aus Angst, dumm zu wirken. Das war mein größter Fehler. " +
            "Moderator: Was raten Sie anderen? " +
            "Amina: Früh anfangen und sich nicht nur auf große Firmen bewerben. Die kleinen Betriebe hier in der Region suchen wirklich Leute. Und: einen Praktikumsplatz nehmen, wenn man einen bekommt. Mein Praktikum hat mir den Weg geöffnet. " +
            "Moderator: Vielen Dank, Frau Yusuf, und weiterhin viel Erfolg.",
          items: [
            {
              nr: 6,
              statement: "Amina lebt seit ungefähr vier Jahren in Deutschland.",
              answer: true,
              why: {
                de: "»Seit knapp vier Jahren.« — »knapp« heißt: etwas weniger als vier, also ungefähr vier. Die Aussage passt.",
                en: "'For just under four years.' 'Knapp' means slightly less than four, so about four. The statement fits.",
                it: "»Da quasi quattro anni.« »Knapp« significa poco meno di quattro, quindi circa quattro. L'affermazione va bene.",
                bn: "»প্রায় চার বছর ধরে।« »knapp« মানে চারের একটু কম, অর্থাৎ মোটামুটি চার। বক্তব্যটি মেলে।",
              },
            },
            {
              nr: 7,
              statement: "Sie hat die ersten anderthalb Jahre hauptsächlich Deutsch gelernt.",
              answer: true,
              why: {
                de: "»Die ersten anderthalb Jahre habe ich fast nur Deutsch gelernt.« »fast nur« = hauptsächlich.",
                en: "'For the first eighteen months I did almost nothing but learn German.' 'fast nur' = mainly.",
                it: "»I primi un anno e mezzo ho fatto quasi solo tedesco.« »fast nur« = principalmente.",
                bn: "»প্রথম দেড় বছর আমি প্রায় কেবল জার্মানই শিখেছি।« »fast nur« = প্রধানত।",
              },
            },
            {
              nr: 8,
              statement: "Ihr ausländischer Abschluss wurde in Deutschland vollständig anerkannt.",
              answer: false,
              why: {
                de: "»Mein Abschluss wurde hier nicht voll anerkannt.« Das kleine »nicht« entscheidet alles — und es steht mitten im Satz, wo man es leicht überhört.",
                en: "'My qualification wasn't fully recognised here.' The little 'nicht' decides everything — and it sits mid-sentence, where it is easy to miss.",
                it: "»Il mio titolo non è stato riconosciuto del tutto.« Il piccolo »nicht« decide tutto — ed è a metà frase, dove sfugge facilmente.",
                bn: "»আমার সনদ এখানে পুরোপুরি স্বীকৃতি পায়নি।« ছোট্ট »nicht« সবকিছু ঠিক করে দেয় — আর সেটা বাক্যের মাঝখানে, সহজেই কান এড়িয়ে যায়।",
              },
            },
            {
              nr: 9,
              statement: "Amina hat schließlich doch an der Universität studiert.",
              answer: false,
              why: {
                de: "Sie sagt, sie »wollte eigentlich an der Universität studieren« — und dann ausdrücklich: »Studiert habe ich am Ende nicht.« Ein Plan, der genannt und wieder fallen gelassen wird, ist ein klassischer Prüfungstrick.",
                en: "She says she 'actually wanted to study' — and then plainly: 'In the end I didn't study.' A plan that is mentioned and then dropped is a classic exam trick.",
                it: "Dice che »in realtà voleva studiare« — e poi chiaramente: »Alla fine non ho studiato.« Un piano nominato e poi abbandonato è un classico trucco d'esame.",
                bn: "তিনি বলেন »আসলে পড়তে চেয়েছিলেন« — এবং পরে স্পষ্টভাবে: »শেষ পর্যন্ত পড়িনি।« একটি পরিকল্পনা বলা হয়ে পরে বাদ দেওয়া — পরীক্ষার চেনা ফাঁদ।",
              },
            },
            {
              nr: 10,
              statement: "Sie verdient während der Ausbildung schon Geld.",
              answer: true,
              why: {
                de: "»Ich verdiene ab dem ersten Monat Geld.« Das ist genau der Vorteil, den sie an der Ausbildung nennt.",
                en: "'I earn money from the first month.' That is exactly the advantage she names.",
                it: "»Guadagno dal primo mese.« È proprio il vantaggio che nomina.",
                bn: "»আমি প্রথম মাস থেকেই টাকা আয় করি।« এটাই সেই সুবিধা যা তিনি উল্লেখ করেন।",
              },
            },
            {
              nr: 11,
              statement: "Sie hat etwa vierzig Bewerbungen geschrieben.",
              answer: true,
              why: {
                de: "»Ungefähr vierzig.« Die Zahl wird sogar zweimal genannt — der Moderator wiederholt sie.",
                en: "'About forty.' The number is even said twice — the presenter repeats it.",
                it: "»Circa quaranta.« Il numero viene detto due volte — il conduttore lo ripete.",
                bn: "»প্রায় চল্লিশ।« সংখ্যাটি দুবার বলা হয় — উপস্থাপক পুনরাবৃত্তি করেন।",
              },
            },
            {
              nr: 12,
              statement: "Beim ersten Vorstellungsgespräch hat sie die Stelle bekommen.",
              answer: false,
              why: {
                de: "»Zu drei Vorstellungsgesprächen wurde ich eingeladen, und beim dritten hat es geklappt.« Erst beim dritten, nicht beim ersten.",
                en: "'I was invited to three interviews, and the third one worked out.' The third, not the first.",
                it: "»Sono stata invitata a tre colloqui, e al terzo è andata bene.« Il terzo, non il primo.",
                bn: "»আমাকে তিনটি ইন্টারভিউতে ডাকা হয়, আর তৃতীয়টিতে কাজ হয়ে যায়।« তৃতীয়টিতে, প্রথমটিতে নয়।",
              },
            },
            {
              nr: 13,
              statement: "Ihre Eltern haben ihr bei der Bewerbung geholfen.",
              answer: false,
              why: {
                de: "Von den Eltern ist im ganzen Interview nicht die Rede. Geholfen hat ein Bewerbungstraining bei einem Verein. In der Prüfung gilt: Was im Text nicht vorkommt, ist immer falsch — nie vielleicht.",
                en: "Her parents are not mentioned anywhere in the interview. What helped was an application training course at a local association. In the exam, 'not in the text' is always falsch, never 'maybe'.",
                it: "I genitori non compaiono mai nell'intervista. Ad aiutarla è stato un corso per candidature presso un'associazione. All'esame »non c'è nel testo« è sempre falso, mai »forse«.",
                bn: "পুরো সাক্ষাৎকারে বাবা-মায়ের কথা একবারও নেই। সাহায্য করেছে একটি সংগঠনের আবেদন-প্রশিক্ষণ। পরীক্ষায় »লেখায় নেই« মানে সবসময় falsch, কখনোই »হয়তো« নয়।",
              },
            },
            {
              nr: 14,
              statement: "Das Bewerbungstraining musste sie nicht bezahlen.",
              answer: true,
              why: {
                de: "»Das war kostenlos.« — kostenlos = man muss nichts bezahlen. Achte auf solche Wort-für-Sinn-Paare: die Aussage benutzt nie dasselbe Wort wie der Text.",
                en: "'It was free of charge.' — kostenlos = you pay nothing. Watch for such word-to-sense pairs: the statement never uses the text's own word.",
                it: "»Era gratuito.« — kostenlos = non si paga nulla. Attenzione a queste coppie parola-senso: l'affermazione non usa mai la parola del testo.",
                bn: "»সেটা বিনামূল্যে ছিল।« — kostenlos মানে কিছু দিতে হয় না। এমন শব্দ-অর্থ জোড়ায় খেয়াল রাখুন: বক্তব্য কখনো টেক্সটের শব্দটাই ব্যবহার করে না।",
              },
            },
            {
              nr: 15,
              statement: "Sie fragt heute nach, wenn sie im Betrieb etwas nicht versteht.",
              answer: true,
              why: {
                de: "»Ich frage inzwischen einfach nach.« — »inzwischen« heißt: heute ja, früher nicht. Die Aussage fragt nach dem Heute.",
                en: "'These days I simply ask.' — 'inzwischen' means: now yes, earlier no. The statement asks about now.",
                it: "»Ormai chiedo e basta.« — »inzwischen« significa: ora sì, prima no. L'affermazione riguarda l'oggi.",
                bn: "»এখন আমি সহজেই জিজ্ঞেস করি।« — »inzwischen« মানে: এখন হ্যাঁ, আগে না। বক্তব্যটি বর্তমান নিয়ে।",
              },
            },
          ],
        },
      ],
    },

    // ------------------------------------------------------------------
    // Teil 3 — five short announcements, two plays.
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
          id: "h2-t3-1",
          label: {
            de: "Ansage in der Volkshochschule",
            en: "Announcement at the adult education centre",
            it: "Annuncio al centro di formazione per adulti",
            bn: "প্রাপ্তবয়স্ক শিক্ষাকেন্দ্রের ঘোষণা",
          },
          transcript:
            "Ein Hinweis für alle Teilnehmenden am Kurs »Bewerbung schreiben«: Bitte bringen Sie zum nächsten Termin Ihren Lebenslauf mit, gern auch auf dem Handy. Eine vollständige Bewerbungsmappe brauchen Sie noch nicht. Wir beginnen um achtzehn Uhr im Raum zwei null vier.",
          items: [
            {
              nr: 16,
              statement: "Die Teilnehmer sollen eine komplette Bewerbungsmappe mitbringen.",
              answer: false,
              why: {
                de: "Mitbringen sollen sie den Lebenslauf. Die Bewerbungsmappe wird ausdrücklich ausgenommen: »brauchen Sie noch nicht«. Beide Wörter kommen vor — die Aussage nimmt das falsche.",
                en: "They are to bring the CV. The full application folder is explicitly excluded: 'you don't need it yet'. Both words occur — the statement takes the wrong one.",
                it: "Devono portare il curriculum. Il fascicolo completo è escluso: »non vi serve ancora«. Compaiono entrambe le parole — l'affermazione prende quella sbagliata.",
                bn: "তাদের আনতে হবে জীবনবৃত্তান্ত। পূর্ণ আবেদনপত্রের ফোল্ডার স্পষ্টভাবে বাদ: »এখনো লাগবে না«। দুটো শব্দই আছে — বক্তব্য ভুলটা নিয়েছে।",
              },
            },
          ],
        },
        {
          id: "h2-t3-2",
          label: {
            de: "Durchsage im Betrieb",
            en: "Announcement at the workplace",
            it: "Annuncio in azienda",
            bn: "কারখানার ঘোষণা",
          },
          transcript:
            "Achtung, eine Information für die Lagerarbeiter: Ab nächster Woche gilt in der gesamten Halle Helmpflicht. Die Helme bekommen Sie kostenlos beim Meister. Wer ohne Helm arbeitet, muss die Halle verlassen.",
          items: [
            {
              nr: 17,
              statement: "Die Arbeiter müssen die Helme selbst kaufen.",
              answer: false,
              why: {
                de: "»Die Helme bekommen Sie kostenlos beim Meister.« Pflicht heißt hier nicht: auf eigene Kosten.",
                en: "'You get the helmets free from the foreman.' Compulsory does not mean at your own expense.",
                it: "»I caschi li ricevete gratis dal capoturno.« Obbligatorio non significa a proprie spese.",
                bn: "»হেলমেট আপনারা মিস্ত্রির কাছ থেকে বিনামূল্যে পাবেন।« বাধ্যতামূলক মানে নিজের খরচে নয়।",
              },
            },
          ],
        },
        {
          id: "h2-t3-3",
          label: {
            de: "Ansage einer Zeitarbeitsfirma",
            en: "Temping agency recorded message",
            it: "Messaggio di un'agenzia interinale",
            bn: "অস্থায়ী কর্মসংস্থান সংস্থার বার্তা",
          },
          transcript:
            "Guten Tag und willkommen bei Team Plus. Wir suchen derzeit Mitarbeiter für Lager und Produktion. Ein Führerschein ist nicht nötig, gute Deutschkenntnisse dagegen schon. Schicken Sie uns einfach eine kurze Nachricht über unsere Internetseite, wir melden uns dann innerhalb von zwei Tagen.",
          items: [
            {
              nr: 18,
              statement: "Für die Stellen braucht man einen Führerschein.",
              answer: false,
              why: {
                de: "»Ein Führerschein ist nicht nötig« — nötig sind gute Deutschkenntnisse. Der Satz stellt beides gegenüber (»dagegen schon«), und genau da entscheidet sich die Antwort.",
                en: "'A driving licence isn't necessary' — good German is. The sentence contrasts the two ('dagegen schon'), and that is where the answer is decided.",
                it: "»La patente non serve« — serve un buon tedesco. La frase contrappone le due cose (»dagegen schon«), ed è lì che si decide la risposta.",
                bn: "»ড্রাইভিং লাইসেন্স দরকার নেই« — দরকার ভালো জার্মান। বাক্যটি দুটোকে মুখোমুখি রাখে (»dagegen schon«), সেখানেই উত্তর ঠিক হয়।",
              },
            },
          ],
        },
        {
          id: "h2-t3-4",
          label: {
            de: "Ansage in der Berufsschule",
            en: "Announcement at the vocational school",
            it: "Annuncio alla scuola professionale",
            bn: "বৃত্তিমূলক স্কুলের ঘোষণা",
          },
          transcript:
            "Liebe Auszubildende, der Unterricht am Freitag fällt aus, weil die Lehrerinnen und Lehrer eine Fortbildung haben. Die Arbeit in der Firma ist davon nicht betroffen — bitte gehen Sie an diesem Tag normal in Ihren Betrieb.",
          items: [
            {
              nr: 19,
              statement: "Am Freitag haben die Auszubildenden komplett frei.",
              answer: false,
              why: {
                de: "Nur die Schule fällt aus. »Bitte gehen Sie an diesem Tag normal in Ihren Betrieb« — gearbeitet wird trotzdem.",
                en: "Only school is cancelled. 'Please go to your company as normal that day' — they still work.",
                it: "Solo la scuola è sospesa. »Quel giorno andate normalmente in azienda« — si lavora comunque.",
                bn: "কেবল স্কুল বন্ধ। »সেদিন স্বাভাবিকভাবে কোম্পানিতে যাবেন« — কাজ কিন্তু থাকছে।",
              },
            },
          ],
        },
        {
          id: "h2-t3-5",
          label: {
            de: "Nachricht vom Betriebsrat",
            en: "Message from the works council",
            it: "Messaggio del consiglio aziendale",
            bn: "কর্মী পরিষদের বার্তা",
          },
          transcript:
            "Eine Bitte des Betriebsrats: Wer im Sommer Urlaub nehmen möchte, soll den Antrag bis Ende März abgeben. Später eingehende Anträge können wir zwar noch annehmen, aber dann entscheidet die Reihenfolge des Eingangs.",
          items: [
            {
              nr: 20,
              statement: "Nach Ende März werden keine Urlaubsanträge mehr angenommen.",
              answer: false,
              why: {
                de: "»Später eingehende Anträge können wir zwar noch annehmen« — sie werden also angenommen, nur schlechter behandelt. Das Paar »zwar … aber« kündigt fast immer eine Einschränkung an, keine Absage.",
                en: "'We can still accept later applications' — they are accepted, just treated less favourably. The pair 'zwar … aber' almost always signals a limitation, not a refusal.",
                it: "»Le domande successive possiamo comunque accettarle« — vengono accettate, solo trattate peggio. La coppia »zwar … aber« segnala quasi sempre una limitazione, non un rifiuto.",
                bn: "»পরে আসা আবেদনও আমরা নিতে পারি« — অর্থাৎ নেওয়া হয়, শুধু সুবিধা কম। »zwar … aber« জোড়া প্রায় সবসময় সীমাবদ্ধতা বোঝায়, প্রত্যাখ্যান নয়।",
              },
            },
          ],
        },
      ],
    },
  ],
};
