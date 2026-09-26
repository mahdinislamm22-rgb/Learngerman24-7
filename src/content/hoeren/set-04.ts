import type { HoerSet } from "./types";

/**
 * HOER-04 — Ämter, Termine und Formulare.
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Official announcements are the fastest, flattest German you will meet,
 * and they hide their meaning in small words. The traps built in here:
 *   · a rule with an exception attached (item 1, item 16),
 *   · "erst" — which means "not until", not "first" (item 5),
 *   · a requirement stated as its opposite (item 9: he did NOT need it),
 *   · a plan that changes mid-sentence (item 14),
 *   · "beantragen" versus "abholen" — apply for versus collect, two
 *     different visits to the same office (item 19).
 */
export const hoer04: HoerSet = {
  code: "HOER-04",

  title: {
    de: "Auf dem Amt: Durchsagen, ein Beratungsgespräch und Ansagen",
    en: "At the office: announcements, an advice session and messages",
    it: "All'ufficio: annunci, una consulenza e messaggi",
    bn: "দপ্তরে: ঘোষণা, একটি পরামর্শ আলাপ ও বার্তা",
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
        de: "Du hörst fünf kurze Durchsagen und Nachrichten — jede nur einmal. Ist die Aussage richtig oder falsch?",
        en: "You will hear five short announcements and messages, each only once. Is the statement true or false?",
        it: "Ascolterai cinque brevi annunci e messaggi, ciascuno una sola volta. L'affermazione è vera o falsa?",
        bn: "আপনি পাঁচটি ছোট ঘোষণা ও বার্তা শুনবেন, প্রতিটি একবারই। বক্তব্যটি সত্য না মিথ্যা?",
      },
      tracks: [
        {
          id: "h4-t1-1",
          label: {
            de: "Durchsage im Bürgeramt",
            en: "Announcement in the citizens' office",
            it: "Annuncio all'anagrafe",
            bn: "নাগরিক দপ্তরের ঘোষণা",
          },
          transcript:
            "Ein Hinweis an alle Wartenden: Wir bedienen heute ausschließlich Kundinnen und Kunden mit einem gebuchten Termin. Eine Ausnahme machen wir nur bei Sterbefällen und bei Personen, deren Pass innerhalb der nächsten drei Tage abläuft. Alle anderen bitten wir, online einen Termin zu buchen.",
          items: [
            {
              nr: 1,
              statement: "Heute wird niemand ohne Termin bedient.",
              answer: false,
              why: {
                de: "»Eine Ausnahme machen wir nur bei Sterbefällen und bei Personen, deren Pass … abläuft.« Eine Ausnahme ist genau der Fall, in dem die Regel nicht gilt — »niemand« ist deshalb zu absolut.",
                en: "'We make an exception only for deaths and for people whose passport is about to expire.' An exception is precisely where the rule does not hold — so 'nobody' is too absolute.",
                it: "»Facciamo un'eccezione solo per i decessi e per chi ha il passaporto in scadenza.« Un'eccezione è dove la regola non vale.",
                bn: "»আমরা ব্যতিক্রম করি কেবল মৃত্যুর ক্ষেত্রে ও যাদের পাসপোর্টের মেয়াদ শেষ হচ্ছে।« ব্যতিক্রম মানেই নিয়ম খাটে না — তাই »কেউ না« বড্ড চূড়ান্ত।",
              },
            },
          ],
        },
        {
          id: "h4-t1-2",
          label: {
            de: "Nachricht der Ausländerbehörde",
            en: "Message from the immigration office",
            it: "Messaggio dell'ufficio stranieri",
            bn: "বিদেশি দপ্তরের বার্তা",
          },
          transcript:
            "Guten Tag, Herr Islam, hier ist die Ausländerbehörde Siegen. Ihr Antrag ist bei uns eingegangen. Es fehlt allerdings noch der Nachweis über Ihre Krankenversicherung. Bitte senden Sie ihn uns per E-Mail. Sobald das Dokument da ist, bearbeiten wir Ihren Antrag weiter.",
          items: [
            {
              nr: 2,
              statement: "Der Antrag ist noch nicht vollständig.",
              answer: true,
              why: {
                de: "»Es fehlt allerdings noch der Nachweis über Ihre Krankenversicherung.« Eingegangen heißt nur: angekommen — nicht: vollständig. Die beiden Sätze stehen direkt nebeneinander, und der zweite schränkt den ersten ein.",
                en: "'However, the proof of your health insurance is still missing.' Received only means it arrived, not that it is complete. The two sentences sit side by side, and the second limits the first.",
                it: "»Manca però ancora la prova dell'assicurazione sanitaria.« Ricevuto non significa completo.",
                bn: "»তবে স্বাস্থ্যবিমার প্রমাণপত্রটি এখনো নেই।« পৌঁছানো মানে সম্পূর্ণ নয়। দ্বিতীয় বাক্যটি প্রথমটিকে সীমিত করে।",
              },
            },
          ],
        },
        {
          id: "h4-t1-3",
          label: {
            de: "Ansage der Führerscheinstelle",
            en: "Driving licence office recorded message",
            it: "Messaggio dell'ufficio patenti",
            bn: "লাইসেন্স দপ্তরের বার্তা",
          },
          transcript:
            "Willkommen bei der Führerscheinstelle. Die Umschreibung eines ausländischen Führerscheins dauert etwa sechs Wochen. Sie erhalten von uns eine Nachricht, sobald Ihr neuer Führerschein abholbereit ist. Bitte rufen Sie vorher nicht an, um den Stand zu erfragen — das verlängert die Bearbeitung für alle.",
          items: [
            {
              nr: 3,
              statement: "Man soll anrufen, um zu erfahren, wie weit die Bearbeitung ist.",
              answer: false,
              why: {
                de: "»Bitte rufen Sie vorher nicht an, um den Stand zu erfragen.« Genau das Gegenteil wird gesagt — und begründet: es verlängert die Bearbeitung.",
                en: "'Please do not ring beforehand to ask about progress.' The exact opposite is said — and justified: it slows processing.",
                it: "»Non telefoni prima per chiedere a che punto è.« Viene detto esattamente il contrario.",
                bn: "»অগ্রগতি জানতে আগে ফোন করবেন না।« ঠিক উল্টোটাই বলা হয়েছে — কারণসহ।",
              },
            },
          ],
        },
        {
          id: "h4-t1-4",
          label: {
            de: "Nachricht eines Freundes",
            en: "Message from a friend",
            it: "Messaggio di un amico",
            bn: "এক বন্ধুর বার্তা",
          },
          transcript:
            "Hey, ich bin's, Karim. Ich war heute beim Bürgeramt wegen der Anmeldung. Ganz wichtig: Nimm die Wohnungsgeberbestätigung mit, nicht nur den Mietvertrag. Den Mietvertrag wollten die gar nicht sehen. Ich musste noch mal nach Hause fahren, das hat mich zwei Stunden gekostet.",
          items: [
            {
              nr: 4,
              statement: "Karim konnte die Anmeldung beim ersten Versuch erledigen.",
              answer: false,
              why: {
                de: "»Ich musste noch mal nach Hause fahren« — er musste zurück, also hat es beim ersten Mal nicht geklappt. Die zwei Stunden sind der Beweis.",
                en: "'I had to go home again' — he had to go back, so it did not work the first time. The two hours prove it.",
                it: "»Ho dovuto tornare a casa«: non è riuscito al primo tentativo.",
                bn: "»আমাকে আবার বাসায় যেতে হলো« — অর্থাৎ প্রথমবারে হয়নি। দুই ঘণ্টাই তার প্রমাণ।",
              },
            },
          ],
        },
        {
          id: "h4-t1-5",
          label: {
            de: "Ansage im Rathaus",
            en: "Town hall announcement",
            it: "Annuncio in municipio",
            bn: "টাউন হলের ঘোষণা",
          },
          transcript:
            "Liebe Besucherinnen und Besucher, die Kasse im Erdgeschoss ist heute erst ab elf Uhr geöffnet. Gebühren können Sie bis dahin nur mit Karte bezahlen, nicht bar. Wir bitten um Ihr Verständnis.",
          items: [
            {
              nr: 5,
              statement: "Die Kasse öffnet heute später als sonst.",
              answer: true,
              why: {
                de: "»erst ab elf Uhr geöffnet« — »erst« heißt hier: nicht früher, später als üblich. Verwechsle es nicht mit »zuerst« (als Erstes). Dieses kleine Wort ist eine der häufigsten Fallen im Hörverstehen.",
                en: "'not open until eleven' — 'erst' here means: no earlier, later than usual. Do not confuse it with 'zuerst' (first of all). This little word is one of the commonest listening traps.",
                it: "»erst ab elf Uhr« significa: non prima delle undici, quindi più tardi del solito. Da non confondere con »zuerst«.",
                bn: "»erst ab elf Uhr« মানে: এগারোটার আগে নয়, অর্থাৎ স্বাভাবিকের চেয়ে দেরিতে। »zuerst« (প্রথমে)-এর সঙ্গে গুলিয়ে ফেলবেন না।",
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
          id: "h4-t2-1",
          label: {
            de: "Beratungsgespräch in der Migrationsberatung",
            en: "Session at the migration advice centre",
            it: "Colloquio al centro di consulenza per migranti",
            bn: "অভিবাসন পরামর্শ কেন্দ্রে আলাপ",
          },
          transcript:
            "Beraterin: Guten Tag, Herr Demir, setzen Sie sich. Was kann ich für Sie tun? " +
            "Herr Demir: Ich bin vor drei Wochen nach Siegen gezogen und komme mit den Ämtern nicht zurecht. Ich weiß nicht mehr, was ich zuerst machen soll. " +
            "Beraterin: Das geht vielen so. Haben Sie sich schon angemeldet? " +
            "Herr Demir: Ja, letzte Woche. Das hat geklappt, aber ich musste zweimal hin. Beim ersten Mal hatte ich die Wohnungsgeberbestätigung nicht dabei. " +
            "Beraterin: Der Klassiker. Immerhin ist das erledigt. Dann kommt als Nächstes die Steuer-Identifikationsnummer — aber die müssen Sie gar nicht beantragen, die kommt automatisch mit der Post. " +
            "Herr Demir: Automatisch? Das wusste ich nicht. Ich wollte morgen zum Finanzamt fahren. " +
            "Beraterin: Das können Sie sich sparen. Warten Sie zwei bis drei Wochen. Wenn nach vier Wochen nichts gekommen ist, dann melden Sie sich wieder bei mir. " +
            "Herr Demir: Gut. Und das Bankkonto? " +
            "Beraterin: Dafür brauchen Sie die Meldebescheinigung, die Sie bei der Anmeldung bekommen haben. Die meisten Banken verlangen außerdem den Pass. Manche wollen auch die Steuernummer, aber das ist nicht überall so. " +
            "Herr Demir: Und meine Frau? Sie kommt im Januar nach. " +
            "Beraterin: Dann melden Sie sie ebenfalls an, wieder innerhalb von zwei Wochen. Wichtig: Der Antrag auf Familiennachzug muss aber vorher gestellt sein, nicht erst wenn sie da ist. Das ist der Fehler, den ich hier am häufigsten sehe. " +
            "Herr Demir: Den Antrag habe ich schon im August gestellt. " +
            "Beraterin: Sehr gut, dann sind Sie weiter, als Sie denken. " +
            "Herr Demir: Eine Sache noch: Ich verstehe die Briefe oft nicht. " +
            "Beraterin: Bringen Sie sie einfach mit. Ich lese sie mit Ihnen durch — das ist kostenlos, dafür gibt es uns. Nur einen Termin brauchen Sie, weil dienstags meistens zu viele Leute kommen. " +
            "Herr Demir: Dann hätte ich gern gleich einen für nächste Woche. " +
            "Beraterin: Machen wir. Donnerstag um vierzehn Uhr?",
          items: [
            {
              nr: 6,
              statement: "Herr Demir wohnt seit etwa drei Wochen in Siegen.",
              answer: true,
              why: {
                de: "»Ich bin vor drei Wochen nach Siegen gezogen.« Direkt gesagt, gleich zu Beginn — solche leichten Einstiegsitems gibt es in jedem Teil 2.",
                en: "'I moved to Siegen three weeks ago.' Said directly, right at the start — every Teil 2 has such an easy opening item.",
                it: "»Mi sono trasferito a Siegen tre settimane fa.« Detto subito, all'inizio.",
                bn: "»তিন সপ্তাহ আগে আমি Siegen-এ এসেছি।« শুরুতেই সরাসরি বলা।",
              },
            },
            {
              nr: 7,
              statement: "Die Anmeldung hat beim ersten Versuch funktioniert.",
              answer: false,
              why: {
                de: "»Das hat geklappt, aber ich musste zweimal hin.« Das »aber« kippt den Satz. Geklappt hat es am Ende — beim ersten Versuch aber nicht.",
                en: "'It worked, but I had to go twice.' The 'aber' flips the sentence. It worked in the end — just not on the first attempt.",
                it: "»Ha funzionato, ma ci sono dovuto andare due volte.« L'»aber« ribalta la frase.",
                bn: "»হয়েছে, তবে দুবার যেতে হয়েছে।« »aber« বাক্যটি উল্টে দেয়। শেষমেশ হয়েছে — প্রথমবারে নয়।",
              },
            },
            {
              nr: 8,
              statement: "Beim ersten Mal fehlte ihm ein Dokument.",
              answer: true,
              why: {
                de: "»Beim ersten Mal hatte ich die Wohnungsgeberbestätigung nicht dabei.« Genau ein fehlendes Dokument, und die Beraterin nennt es sogar »den Klassiker«.",
                en: "'The first time I didn't have the landlord's confirmation with me.' Exactly one missing document — the adviser even calls it 'the classic'.",
                it: "»La prima volta non avevo la conferma del locatore.« Esattamente un documento mancante.",
                bn: "»প্রথমবার বাড়িওয়ালার প্রত্যয়নপত্রটি সঙ্গে ছিল না।« ঠিক একটি কাগজ অনুপস্থিত।",
              },
            },
            {
              nr: 9,
              statement: "Er muss die Steuernummer selbst beantragen.",
              answer: false,
              why: {
                de: "»die müssen Sie gar nicht beantragen, die kommt automatisch mit der Post«. Das »gar nicht« ist stark und eindeutig — und Herr Demir ist selbst überrascht, was die Stelle im Gespräch hervorhebt.",
                en: "'you don't have to apply for it at all, it comes automatically by post'. The 'gar nicht' is strong and clear — and Herr Demir is himself surprised, which highlights the moment.",
                it: "»non deve richiederlo affatto, arriva automaticamente per posta«.",
                bn: "»সেটার জন্য আবেদনই করতে হয় না, ডাকে আপনাআপনি আসে«। »gar nicht« জোরালো ও স্পষ্ট।",
              },
            },
            {
              nr: 10,
              statement: "Die Beraterin rät ihm, morgen zum Finanzamt zu fahren.",
              answer: false,
              why: {
                de: "»Das können Sie sich sparen. Warten Sie zwei bis drei Wochen.« Er wollte fahren, sie rät ab. Wer nur »Finanzamt« und »morgen« hört, antwortet falsch.",
                en: "'You can spare yourself that. Wait two to three weeks.' He wanted to go; she advises against it. Anyone who only hears 'Finanzamt' and 'morgen' answers wrongly.",
                it: "»Se lo può risparmiare. Aspetti due o tre settimane.« Lui voleva andarci, lei lo sconsiglia.",
                bn: "»ওটা বাদ দিন। দুই-তিন সপ্তাহ অপেক্ষা করুন।« তিনি যেতে চেয়েছিলেন, পরামর্শদাতা নিষেধ করছেন।",
              },
            },
            {
              nr: 11,
              statement: "Nach vier Wochen ohne Post soll er sich wieder melden.",
              answer: true,
              why: {
                de: "»Wenn nach vier Wochen nichts gekommen ist, dann melden Sie sich wieder bei mir.« Achte auf die beiden Zahlen: zwei bis drei Wochen warten, nach vier Wochen melden.",
                en: "'If nothing has arrived after four weeks, then get back in touch with me.' Note the two figures: wait two to three weeks, report back after four.",
                it: "»Se dopo quattro settimane non è arrivato nulla, si rifaccia vivo.« Attenzione ai due numeri.",
                bn: "»চার সপ্তাহেও কিছু না এলে আবার যোগাযোগ করবেন।« দুটি সংখ্যা খেয়াল করুন: অপেক্ষা দুই-তিন সপ্তাহ, যোগাযোগ চার সপ্তাহ পরে।",
              },
            },
            {
              nr: 12,
              statement: "Für ein Bankkonto braucht man auf jeden Fall die Steuernummer.",
              answer: false,
              why: {
                de: "»Manche wollen auch die Steuernummer, aber das ist nicht überall so.« »Manche« und »nicht überall« widersprechen dem »auf jeden Fall« der Aussage. Sicher verlangt wird nur die Meldebescheinigung.",
                en: "'Some also want the tax number, but that is not the case everywhere.' 'Manche' and 'nicht überall' contradict the statement's 'definitely'. Only the registration certificate is certain.",
                it: "»Alcune vogliono anche il codice fiscale, ma non ovunque.« »Alcune« contraddice »in ogni caso«.",
                bn: "»কেউ কেউ ট্যাক্স নম্বরও চায়, তবে সবখানে নয়।« »কেউ কেউ« ও »সবখানে নয়« বক্তব্যের »অবশ্যই«-কে খণ্ডন করে।",
              },
            },
            {
              nr: 13,
              statement: "Seine Frau muss sich nach ihrer Ankunft ebenfalls anmelden.",
              answer: true,
              why: {
                de: "»Dann melden Sie sie ebenfalls an, wieder innerhalb von zwei Wochen.« Die gleiche Frist gilt für sie.",
                en: "'Then register her as well, again within two weeks.' The same deadline applies to her.",
                it: "»Allora registri anche lei, sempre entro due settimane.«",
                bn: "»তখন তাঁকেও নিবন্ধন করাবেন, আবারও দুই সপ্তাহের মধ্যে।« একই সময়সীমা তাঁর জন্যও।",
              },
            },
            {
              nr: 14,
              statement: "Den Antrag auf Familiennachzug hat er noch nicht gestellt.",
              answer: false,
              why: {
                de: "»Den Antrag habe ich schon im August gestellt.« Die Beraterin warnt vorher vor genau diesem Fehler, und er sagt dann, dass er ihn nicht gemacht hat. Wer beim Warnsatz aufhört zuzuhören, antwortet falsch.",
                en: "'I already submitted the application in August.' The adviser warns about exactly this mistake, and he then says he did not make it. Anyone who stops listening at the warning answers wrongly.",
                it: "»La domanda l'ho già presentata ad agosto.« La consulente mette in guardia proprio su questo errore, e lui dice di non averlo fatto.",
                bn: "»আবেদনটা আমি আগস্টেই করেছি।« পরামর্শদাতা ঠিক এই ভুল নিয়েই সতর্ক করেন, আর তিনি বলেন তিনি সেটা করেননি।",
              },
            },
            {
              nr: 15,
              statement: "Für das gemeinsame Lesen der Briefe braucht er einen Termin.",
              answer: true,
              why: {
                de: "»Nur einen Termin brauchen Sie, weil dienstags meistens zu viele Leute kommen.« Kostenlos ist es zwar — das eine schließt das andere nicht aus.",
                en: "'You just need an appointment, because Tuesdays are usually too busy.' It is free of charge — but free and appointment-only are not contradictory.",
                it: "»Le serve solo un appuntamento, perché il martedì viene troppa gente.« Gratuito non significa senza appuntamento.",
                bn: "»শুধু একটা অ্যাপয়েন্টমেন্ট লাগবে, কারণ মঙ্গলবার সাধারণত অনেক ভিড় হয়।« বিনামূল্যে হলেও অ্যাপয়েন্টমেন্ট লাগে।",
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
          id: "h4-t3-1",
          label: {
            de: "Ansage der Familienkasse",
            en: "Child benefit office recorded message",
            it: "Messaggio dell'ufficio assegni familiari",
            bn: "শিশু ভাতা দপ্তরের বার্তা",
          },
          transcript:
            "Willkommen bei der Familienkasse. Anträge auf Kindergeld können Sie online oder schriftlich stellen. Eine persönliche Vorsprache ist dafür nicht nötig. Beratung erhalten Sie telefonisch von montags bis donnerstags, freitags ist unsere Hotline geschlossen.",
          items: [
            {
              nr: 16,
              statement: "Am Freitag kann man telefonisch beraten werden.",
              answer: false,
              why: {
                de: "»von montags bis donnerstags, freitags ist unsere Hotline geschlossen«. Der Nachsatz nennt die Ausnahme ausdrücklich — sonst könnte man »bis donnerstags« überhören.",
                en: "'Mondays to Thursdays; on Fridays our hotline is closed.' The second half names the exception explicitly — otherwise 'bis donnerstags' is easy to miss.",
                it: "»dal lunedì al giovedì; il venerdì la nostra linea è chiusa«.",
                bn: "»সোম থেকে বৃহস্পতি, শুক্রবার আমাদের হটলাইন বন্ধ«। শেষ অংশটি ব্যতিক্রমটি স্পষ্ট করে বলে।",
              },
            },
          ],
        },
        {
          id: "h4-t3-2",
          label: {
            de: "Durchsage in der Stadtbibliothek",
            en: "Announcement in the town library",
            it: "Annuncio nella biblioteca comunale",
            bn: "শহরের লাইব্রেরির ঘোষণা",
          },
          transcript:
            "Ein Hinweis auf unser Angebot hier in der Stadtbibliothek: Jeden Dienstag und Freitag hilft Ihnen jemand beim Ausfüllen von Anträgen. Das Angebot ist kostenlos und ohne Anmeldung. Wir können allerdings keine Rechtsberatung geben — dafür wenden Sie sich bitte an einen Anwalt.",
          items: [
            {
              nr: 17,
              statement: "In der Bibliothek bekommt man auch rechtliche Beratung.",
              answer: false,
              why: {
                de: "»Wir können allerdings keine Rechtsberatung geben.« Das Wort »allerdings« kündigt fast immer eine Einschränkung an — hör auf dieses Signal, es steht meist direkt vor dem Item.",
                en: "'We cannot, however, give legal advice.' The word 'allerdings' almost always announces a limitation — listen for that signal, it usually sits right before the item.",
                it: "»Non possiamo però dare consulenza legale.« »allerdings« annuncia quasi sempre una limitazione.",
                bn: "»তবে আমরা আইনি পরামর্শ দিতে পারি না।« »allerdings« শব্দটি প্রায় সবসময় সীমাবদ্ধতা ঘোষণা করে।",
              },
            },
          ],
        },
        {
          id: "h4-t3-3",
          label: {
            de: "Ansage der Wohngeldstelle",
            en: "Housing benefit office announcement",
            it: "Annuncio dell'ufficio sussidi casa",
            bn: "বাসস্থান ভাতা দপ্তরের ঘোষণা",
          },
          transcript:
            "Ein wichtiger Hinweis: Wohngeld wird ab dem Monat gezahlt, in dem der Antrag bei uns eingeht. Für die Zeit davor können wir leider nichts zahlen, auch wenn Sie schon länger Anspruch gehabt hätten. Stellen Sie den Antrag deshalb so früh wie möglich.",
          items: [
            {
              nr: 18,
              statement: "Man bekommt das Geld auch für die Monate vor dem Antrag.",
              answer: false,
              why: {
                de: "»Für die Zeit davor können wir leider nichts zahlen.« Der Satz danach erklärt die Folge: deshalb früh beantragen. Genau deshalb ist die Aussage falsch.",
                en: "'For the period before that we unfortunately cannot pay anything.' The next sentence spells out the consequence: apply early. That is precisely why the statement is false.",
                it: "»Per il periodo precedente non possiamo purtroppo pagare nulla.«",
                bn: "»তার আগের সময়ের জন্য দুঃখিত, আমরা কিছু দিতে পারি না।« পরের বাক্যটি ফলাফলই বলে: তাই আগেভাগে আবেদন করুন।",
              },
            },
          ],
        },
        {
          id: "h4-t3-4",
          label: {
            de: "Ansage der Pass- und Ausweisstelle",
            en: "Passport office announcement",
            it: "Annuncio dell'ufficio passaporti",
            bn: "পাসপোর্ট দপ্তরের ঘোষণা",
          },
          transcript:
            "Eine Information zu Ihrem neuen Personalausweis: Für die Beantragung brauchen Sie einen Termin. Für die Abholung dagegen nicht — kommen Sie einfach während unserer Öffnungszeiten vorbei und bringen Sie den alten Ausweis mit.",
          items: [
            {
              nr: 19,
              statement: "Zum Abholen des neuen Ausweises braucht man keinen Termin.",
              answer: true,
              why: {
                de: "»Für die Abholung dagegen nicht.« Beantragen und Abholen sind zwei verschiedene Besuche mit verschiedenen Regeln — das Wort »dagegen« markiert den Gegensatz.",
                en: "'For collection, on the other hand, you don't.' Applying and collecting are two different visits with different rules — the word 'dagegen' marks the contrast.",
                it: "»Per il ritiro invece no.« Richiesta e ritiro sono due visite diverse con regole diverse.",
                bn: "»তোলার জন্য অবশ্য লাগে না।« আবেদন আর সংগ্রহ দুটি আলাদা যাওয়া, আলাদা নিয়ম — »dagegen« বৈপরীত্য চিহ্নিত করে।",
              },
            },
          ],
        },
        {
          id: "h4-t3-5",
          label: {
            de: "Durchsage im Rathaus",
            en: "Town hall announcement",
            it: "Annuncio in municipio",
            bn: "টাউন হলের ঘোষণা",
          },
          transcript:
            "Liebe Besucherinnen und Besucher, am kommenden Montag bleibt das Rathaus wegen einer Betriebsversammlung geschlossen. Bereits vereinbarte Termine verschieben sich automatisch auf den Dienstag zur gleichen Uhrzeit. Sie müssen sich darum nicht selbst kümmern.",
          items: [
            {
              nr: 20,
              statement: "Wer am Montag einen Termin hatte, muss selbst einen neuen buchen.",
              answer: false,
              why: {
                de: "»verschieben sich automatisch auf den Dienstag … Sie müssen sich darum nicht selbst kümmern.« Zweimal gesagt, einmal positiv (automatisch) und einmal negativ (nicht selbst) — solche Doppelungen sind eine Einladung, genau hinzuhören.",
                en: "'are automatically moved to Tuesday … you do not have to do anything yourself.' Said twice, once positively (automatically) and once negatively (not yourself) — such doublings invite you to listen closely.",
                it: "»si spostano automaticamente a martedì … non deve occuparsene lei«.",
                bn: "»আপনাআপনি মঙ্গলবারে সরে যাবে … আপনাকে নিজে কিছু করতে হবে না।« দুবার বলা — একবার ইতিবাচক, একবার নেতিবাচকভাবে।",
              },
            },
          ],
        },
      ],
    },
  ],
};
