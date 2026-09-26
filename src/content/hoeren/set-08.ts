import type { HoerSet } from "./types";

/**
 * HOER-08 — Im Haus, unter Nachbarn und in der WG.
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Neighbour talk is polite, indirect and full of softeners, so the traps
 * are about hearing what was actually agreed:
 *   · an offer that is declined in the same breath (item 3),
 *   · "eigentlich" — which signals that what follows is not the case
 *     (item 5),
 *   · a request that is granted only in part (item 12),
 *   · a rule quoted by someone who then says it does not apply (item 9),
 *   · a plan two people settle on after changing it twice (item 14).
 */
export const hoer08: HoerSet = {
  code: "HOER-08",

  title: {
    de: "Im Haus, unter Nachbarn und in der WG",
    en: "In the building, among neighbours and in a shared flat",
    it: "In casa, tra vicini e in coabitazione",
    bn: "বাড়িতে, প্রতিবেশীদের মধ্যে ও শেয়ার্ড ফ্ল্যাটে",
  },

  intro: {
    de: "Drei Teile wie in der Prüfung. Teil 1 und 2 hörst du nur einmal, Teil 3 zweimal. Im Gespräch unter Nachbarn wird viel höflich umschrieben — hör darauf, was am Ende wirklich vereinbart wird.",
    en: "Three parts, as in the exam. Parts 1 and 2 once, part 3 twice. Neighbours talk in polite circumlocutions — listen for what is actually agreed in the end.",
    it: "Tre parti, come nell'esame. Tra vicini si parla per giri di parole: ascolta cosa viene davvero concordato.",
    bn: "পরীক্ষার মতোই তিনটি অংশ। প্রতিবেশীদের কথায় অনেক ভদ্র ঘুরিয়ে বলা থাকে — শেষে আসলে কী ঠিক হলো, সেটাই শুনুন।",
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
          id: "h8-t1-1",
          label: {
            de: "Nachricht der Hausverwaltung",
            en: "Message from the property manager",
            it: "Messaggio dell'amministrazione",
            bn: "ভবন ব্যবস্থাপনার বার্তা",
          },
          transcript:
            "Guten Tag, hier ist die Hausverwaltung Berger. Am Donnerstag kommt zwischen acht und zwölf Uhr ein Techniker wegen der Heizung. Sie müssen nicht zu Hause sein, wenn Sie uns einen Schlüssel geben. Falls Ihnen das nicht recht ist, rufen Sie uns bitte bis Mittwoch an.",
          items: [
            {
              nr: 1,
              statement: "Man muss am Donnerstag zu Hause bleiben.",
              answer: false,
              why: {
                de: "»Sie müssen nicht zu Hause sein, wenn Sie uns einen Schlüssel geben.« Es gibt also eine Alternative. Achte auf »wenn«: Es macht aus einer Pflicht eine Wahl.",
                en: "'You do not have to be at home if you give us a key.' So there is an alternative. Watch for 'wenn': it turns an obligation into a choice.",
                it: "»Non deve essere a casa se ci lascia una chiave«: c'è un'alternativa.",
                bn: "»চাবি দিলে আপনাকে বাসায় থাকতে হবে না।« অর্থাৎ বিকল্প আছে। »wenn« বাধ্যবাধকতাকে পছন্দে বদলায়।",
              },
            },
          ],
        },
        {
          id: "h8-t1-2",
          label: {
            de: "Nachricht einer Nachbarin",
            en: "Message from a neighbour",
            it: "Messaggio di una vicina",
            bn: "এক প্রতিবেশীর বার্তা",
          },
          transcript:
            "Hallo, hier ist Frau Weber von unten. Ihr Paket ist heute gekommen, der Bote hat es bei mir abgegeben. Ich bin heute Abend ab achtzehn Uhr da und morgen den ganzen Tag. Klingeln Sie einfach, wann es Ihnen passt.",
          items: [
            {
              nr: 2,
              statement: "Das Paket liegt bei Frau Weber.",
              answer: true,
              why: {
                de: "»der Bote hat es bei mir abgegeben« — bei mir abgeben heißt: mir übergeben, damit es dort liegt. Der Rest der Nachricht sagt nur, wann man es abholen kann.",
                en: "'the courier left it with me' — bei mir abgeben means handed to me, so it is there. The rest of the message only says when it can be collected.",
                it: "»il corriere l'ha lasciato da me«: il pacco è lì.",
                bn: "»কুরিয়ার এটি আমার কাছে দিয়ে গেছে« — অর্থাৎ প্যাকেটটি তাঁর কাছেই আছে।",
              },
            },
          ],
        },
        {
          id: "h8-t1-3",
          label: {
            de: "Nachricht eines Mitbewohners",
            en: "Message from a flatmate",
            it: "Messaggio di un coinquilino",
            bn: "এক সহবাসীর বার্তা",
          },
          transcript:
            "Hey, ich bin's, Tobias. Du, ich könnte am Samstag putzen, wenn du willst. Aber ehrlich gesagt bin ich am Wochenende bei meinen Eltern. Ich mache es lieber schon am Freitagabend, wenn dir das auch recht ist.",
          items: [
            {
              nr: 3,
              statement: "Tobias will am Samstag putzen.",
              answer: false,
              why: {
                de: "»ich könnte am Samstag putzen … Aber ehrlich gesagt bin ich am Wochenende bei meinen Eltern. Ich mache es lieber schon am Freitagabend.« Er bietet den Samstag an und nimmt ihn im selben Atemzug zurück. »lieber« zeigt, wofür er sich entscheidet.",
                en: "'I could clean on Saturday … But honestly I'm at my parents' at the weekend. I'd rather do it on Friday evening.' He offers Saturday and withdraws it in the same breath. 'lieber' shows what he settles on.",
                it: "»Potrei pulire sabato … ma sarò dai miei. Preferisco farlo venerdì sera.« Offre e ritira nella stessa frase.",
                bn: "»শনিবার পরিষ্কার করতে পারতাম … তবে সত্যি বলতে সপ্তাহান্তে বাবা-মায়ের কাছে থাকব। বরং শুক্রবার সন্ধ্যাতেই করব।« একই নিঃশ্বাসে প্রস্তাব দিয়ে ফিরিয়ে নেন।",
              },
            },
          ],
        },
        {
          id: "h8-t1-4",
          label: {
            de: "Aushang im Treppenhaus",
            en: "Notice in the stairwell",
            it: "Avviso nella tromba delle scale",
            bn: "সিঁড়িঘরের নোটিশ",
          },
          transcript:
            "Eine Information für alle Bewohner: Am Montag wird der Aufzug gewartet und steht den ganzen Tag still. Wer Hilfe beim Tragen braucht, meldet sich bitte vorher bei der Hausverwaltung. Am Dienstag funktioniert wieder alles wie gewohnt.",
          items: [
            {
              nr: 4,
              statement: "Der Aufzug ist am Montag den ganzen Tag außer Betrieb.",
              answer: true,
              why: {
                de: "»steht den ganzen Tag still« — stillstehen heißt: nicht fahren, also außer Betrieb. Die Aussage benutzt ein anderes Wort für dieselbe Sache, und genau das prüft die Aufgabe.",
                en: "'stands still all day' — stillstehen means not running, so out of service. The statement uses a different word for the same thing, and that is what the item tests.",
                it: "»resta fermo tutto il giorno«: fuori servizio. L'affermazione usa un'altra parola.",
                bn: "»সারাদিন বন্ধ থাকবে« — অর্থাৎ চলবে না। বক্তব্যটি একই জিনিসের জন্য অন্য শব্দ ব্যবহার করে।",
              },
            },
          ],
        },
        {
          id: "h8-t1-5",
          label: {
            de: "Nachricht einer Vermieterin",
            en: "Message from a landlady",
            it: "Messaggio della proprietaria",
            bn: "বাড়িওয়ালির বার্তা",
          },
          transcript:
            "Guten Tag, Herr Islam, hier ist Frau Sommer. Eigentlich wollte ich morgen die Fenster anschauen, aber mein Handwerker ist krank geworden. Wir verschieben das auf nächste Woche, ich melde mich noch einmal wegen des Termins.",
          items: [
            {
              nr: 5,
              statement: "Frau Sommer kommt morgen zu Herrn Islam.",
              answer: false,
              why: {
                de: "»Eigentlich wollte ich morgen die Fenster anschauen, aber …« — das Wort »eigentlich« kündigt fast immer an, dass es anders kommt. Der Satz danach bestätigt es: »Wir verschieben das auf nächste Woche.«",
                en: "'I was actually going to look at the windows tomorrow, but …' — 'eigentlich' almost always signals that things will turn out otherwise. The next sentence confirms it: 'we're postponing it to next week'.",
                it: "»eigentlich« annuncia quasi sempre che andrà diversamente; la frase dopo lo conferma.",
                bn: "»eigentlich« প্রায় সবসময়ই বোঝায় যে অন্যরকম হবে। পরের বাক্যই তা নিশ্চিত করে।",
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
        de: "Du hörst ein Gespräch — nur einmal. Entscheide bei jeder Aussage: richtig oder falsch?",
        en: "You will hear one conversation, only once. Decide for each statement: true or false?",
        it: "Ascolterai una conversazione, una sola volta. Decidi per ogni affermazione: vero o falso?",
        bn: "আপনি একটি কথোপকথন শুনবেন, একবারই। প্রতিটি বক্তব্য সম্পর্কে ঠিক করুন: সত্য না মিথ্যা?",
      },
      tracks: [
        {
          id: "h8-t2-1",
          label: {
            de: "Gespräch zwischen zwei Nachbarn",
            en: "Conversation between two neighbours",
            it: "Conversazione fra due vicini",
            bn: "দুই প্রতিবেশীর কথোপকথন",
          },
          transcript:
            "Herr Krause: Frau Aydin, haben Sie kurz Zeit? Ich wollte schon länger mit Ihnen sprechen. " +
            "Frau Aydin: Ja, natürlich. Geht es um die Musik? " +
            "Herr Krause: Genau. Ich will mich gar nicht beschweren, das möchte ich vorausschicken. Aber zweimal in der Woche geht es bis nach Mitternacht, und ich stehe um halb fünf auf. " +
            "Frau Aydin: Das tut mir wirklich leid. Ich wusste nicht, dass Sie so früh raus müssen. Das ist mein Sohn, er übt Schlagzeug. " +
            "Herr Krause: Ach so, ich dachte, das sei eine Anlage. " +
            "Frau Aydin: Nein, er spielt selbst. Er hat nächsten Monat eine Prüfung an der Musikschule. " +
            "Herr Krause: Das ändert die Sache natürlich. Wie lange braucht er denn? " +
            "Frau Aydin: Ungefähr eine Stunde am Tag. Ich kann ihn bitten, früher zu üben, sagen wir nur bis zwanzig Uhr. Ganz aufhören kann er nicht, das verstehen Sie sicher. " +
            "Herr Krause: Das erwarte ich auch gar nicht. Bis zwanzig Uhr wäre für mich völlig in Ordnung. " +
            "Frau Aydin: Gut. Dann machen wir das so. Und wenn es doch mal später wird, sagen Sie mir bitte direkt Bescheid, ja? Nicht der Hausverwaltung. " +
            "Herr Krause: Einverstanden. Ich bin froh, dass wir geredet haben. Der Vormieter hat damals gleich einen Brief geschrieben, das war sehr unangenehm. " +
            "Frau Aydin: Übrigens, wegen des Treppenhauses: Sind Sie diese Woche mit Putzen dran oder ich? " +
            "Herr Krause: Ich glaube, Sie. Aber der Plan hängt unten, da können wir nachsehen. " +
            "Frau Aydin: Mache ich. Und danke, dass Sie zu mir gekommen sind.",
          items: [
            {
              nr: 6,
              statement: "Herr Krause möchte sich über die Musik beschweren.",
              answer: false,
              why: {
                de: "»Ich will mich gar nicht beschweren, das möchte ich vorausschicken.« Er sagt es ausdrücklich, bevor er sein Anliegen nennt. Ein Gespräch über ein Problem ist nicht dasselbe wie eine Beschwerde.",
                en: "'I don't want to complain at all, let me say that first.' He states it explicitly before raising his concern. A conversation about a problem is not the same as a complaint.",
                it: "»Non voglio affatto lamentarmi, lo premetto.« Lo dice esplicitamente.",
                bn: "»আমি মোটেও অভিযোগ করতে চাই না, এটা আগেই বলে রাখি।« তিনি স্পষ্ট করেই বলেন।",
              },
            },
            {
              nr: 7,
              statement: "Herr Krause muss sehr früh aufstehen.",
              answer: true,
              why: {
                de: "»ich stehe um halb fünf auf« — halb fünf ist vier Uhr dreißig, also sehr früh. Das ist der eigentliche Grund für das Gespräch.",
                en: "'I get up at half past four' — that is very early indeed. It is the real reason for the conversation.",
                it: "»mi alzo alle quattro e mezza«: molto presto.",
                bn: "»আমি সাড়ে চারটায় উঠি« — অর্থাৎ খুব ভোরে। এটাই আলাপের আসল কারণ।",
              },
            },
            {
              nr: 8,
              statement: "Die Musik kommt von einer Musikanlage.",
              answer: false,
              why: {
                de: "»Nein, er spielt selbst.« Herr Krause vermutet eine Anlage, und Frau Aydin widerspricht sofort. Wenn im Gespräch jemand korrigiert wird, ist fast immer ein Item darauf gebaut.",
                en: "'No, he plays himself.' Herr Krause assumes a stereo and Frau Aydin corrects him at once. When someone is corrected in a conversation, an item is almost always built on it.",
                it: "»No, suona lui.« Herr Krause suppone uno stereo e viene subito corretto.",
                bn: "»না, সে নিজেই বাজায়।« Herr Krause অনুমান করেন, Frau Aydin সঙ্গে সঙ্গে শুধরে দেন।",
              },
            },
            {
              nr: 9,
              statement: "Ihr Sohn übt für eine Prüfung.",
              answer: true,
              why: {
                de: "»Er hat nächsten Monat eine Prüfung an der Musikschule.« Das ist auch der Satz, der Herrn Krause umstimmt: »Das ändert die Sache natürlich.«",
                en: "'He has an exam at music school next month.' It is also the sentence that changes Herr Krause's mind: 'that does change things, of course'.",
                it: "»Il mese prossimo ha un esame alla scuola di musica.«",
                bn: "»আগামী মাসে তার সংগীত স্কুলে পরীক্ষা আছে।« এই বাক্যটিই Herr Krause-এর মত বদলায়।",
              },
            },
            {
              nr: 10,
              statement: "Der Sohn soll ganz aufhören zu üben.",
              answer: false,
              why: {
                de: "»Ganz aufhören kann er nicht« — und Herr Krause antwortet: »Das erwarte ich auch gar nicht.« Beide Seiten schließen es aus. Vereinbart wird nur eine frühere Uhrzeit.",
                en: "'He can't stop altogether' — and Herr Krause replies: 'I don't expect that either.' Both sides rule it out. What is agreed is only an earlier time.",
                it: "»Non può smettere del tutto« e lui risponde »non me lo aspetto«. Si concorda solo un orario più presto.",
                bn: "»সে একেবারে বন্ধ করতে পারবে না« — আর Herr Krause বলেন »আমি তা আশাও করি না«। কেবল সময়টাই এগিয়ে আনা হয়।",
              },
            },
            {
              nr: 11,
              statement: "Sie einigen sich darauf, dass er bis zwanzig Uhr übt.",
              answer: true,
              why: {
                de: "»sagen wir nur bis zwanzig Uhr« — »Bis zwanzig Uhr wäre für mich völlig in Ordnung« — »Dann machen wir das so.« Drei Sätze, und erst der dritte macht daraus eine Vereinbarung. Warte beim Hören immer auf die Zustimmung.",
                en: "'let's say only until eight' — 'until eight would be completely fine by me' — 'then let's do that'. Three sentences, and only the third turns it into an agreement. When listening, always wait for the assent.",
                it: "»diciamo fino alle venti« — »per me va benissimo« — »allora facciamo così«. Solo la terza frase chiude l'accordo.",
                bn: "»ধরুন রাত আটটা পর্যন্ত« — »আমার জন্য একদম ঠিক আছে« — »তাহলে তাই হোক।« তৃতীয় বাক্যেই সমঝোতা হয়। সম্মতির জন্য অপেক্ষা করুন।",
              },
            },
            {
              nr: 12,
              statement: "Bei Problemen soll Herr Krause die Hausverwaltung informieren.",
              answer: false,
              why: {
                de: "»sagen Sie mir bitte direkt Bescheid, ja? Nicht der Hausverwaltung.« Die Hausverwaltung wird genannt — aber als das, was er NICHT tun soll. Ein genanntes Wort ist noch keine richtige Antwort.",
                en: "'tell me directly, would you? Not the property manager.' The property manager is mentioned — but as what he should NOT do. A word being said is not yet a correct answer.",
                it: "»Me lo dica direttamente, non all'amministrazione.« È nominata, ma come ciò da non fare.",
                bn: "»সরাসরি আমাকেই বলবেন, ঠিক আছে? ব্যবস্থাপনাকে নয়।« নামটি এসেছে — কিন্তু যা করা উচিত নয় সেই অর্থে।",
              },
            },
            {
              nr: 13,
              statement: "Der frühere Mieter hatte sofort einen Brief geschrieben.",
              answer: true,
              why: {
                de: "»Der Vormieter hat damals gleich einen Brief geschrieben« — Vormieter heißt: der Mieter vor ihm. »gleich« entspricht dem »sofort« der Aussage.",
                en: "'The previous tenant wrote a letter straight away back then' — Vormieter means the tenant before him. 'gleich' matches the statement's 'sofort'.",
                it: "»L'inquilino precedente scrisse subito una lettera.«",
                bn: "»আগের ভাড়াটিয়া তখন সঙ্গে সঙ্গেই চিঠি লিখেছিলেন« — Vormieter মানে তাঁর আগের ভাড়াটিয়া।",
              },
            },
            {
              nr: 14,
              statement: "Sie wissen sicher, wer diese Woche das Treppenhaus putzt.",
              answer: false,
              why: {
                de: "»Ich glaube, Sie. Aber der Plan hängt unten, da können wir nachsehen.« »Ich glaube« ist keine Sicherheit, und der zweite Satz sagt, warum: Sie müssen erst nachsehen.",
                en: "'I think you. But the rota is downstairs, we can check.' 'Ich glaube' is not certainty, and the second sentence says why: they have to look first.",
                it: "»Credo lei. Ma il piano è giù, possiamo controllare.« »Credo« non è certezza.",
                bn: "»আমার মনে হয় আপনি। তবে পরিকল্পনাটা নিচে ঝোলানো, দেখে নেওয়া যাবে।« »মনে হয়« নিশ্চয়তা নয়।",
              },
            },
            {
              nr: 15,
              statement: "Frau Aydin findet es gut, dass er zu ihr gekommen ist.",
              answer: true,
              why: {
                de: "»Und danke, dass Sie zu mir gekommen sind.« Der letzte Satz des Gesprächs — in Teil 2 steht am Ende oft ein leichtes Item, wenn man bis zum Schluss konzentriert bleibt.",
                en: "'And thank you for coming to me.' The last sentence of the conversation — Teil 2 often puts an easy item at the end, if you stay focused to the finish.",
                it: "»E grazie per essere venuto da me.« L'ultima frase del dialogo.",
                bn: "»আর ধন্যবাদ যে আপনি আমার কাছে এসেছেন।« কথোপকথনের শেষ বাক্য।",
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
          id: "h8-t3-1",
          label: {
            de: "Ansage der Hausverwaltung",
            en: "Property manager's recorded message",
            it: "Messaggio dell'amministrazione",
            bn: "ভবন ব্যবস্থাপনার বার্তা",
          },
          transcript:
            "Willkommen bei der Hausverwaltung Berger. Unsere Sprechzeiten sind dienstags und donnerstags von neun bis zwölf Uhr. Bei einem Wasserschaden oder einem Heizungsausfall erreichen Sie unseren Notdienst rund um die Uhr unter der Nummer auf Ihrem Mietvertrag.",
          items: [
            {
              nr: 16,
              statement: "Bei einem Wasserschaden muss man bis Dienstag warten.",
              answer: false,
              why: {
                de: "»erreichen Sie unseren Notdienst rund um die Uhr« — rund um die Uhr heißt: jederzeit, Tag und Nacht. Die Sprechzeiten gelten für alles andere.",
                en: "'you can reach our emergency service round the clock' — rund um die Uhr means any time, day or night. The office hours apply to everything else.",
                it: "»il servizio di emergenza è raggiungibile ventiquattr'ore su ventiquattro«: gli orari valgono per il resto.",
                bn: "»জরুরি সেবা চব্বিশ ঘণ্টাই পাওয়া যায়« — বাকি সব কিছুর জন্য অফিস সময়। দুই ক্ষেত্রে দুই নম্বর।",
              },
            },
          ],
        },
        {
          id: "h8-t3-2",
          label: {
            de: "Durchsage im Waschkeller",
            en: "Announcement in the laundry room",
            it: "Annuncio in lavanderia",
            bn: "লন্ড্রি রুমের ঘোষণা",
          },
          transcript:
            "Ein Hinweis für alle Bewohner: Die linke Waschmaschine ist defekt, der Techniker kommt am Freitag. Bitte benutzen Sie bis dahin nur die rechte Maschine und tragen Sie sich in die Liste ein, damit es keinen Streit gibt.",
          items: [
            {
              nr: 17,
              statement: "Bis Freitag steht nur eine Waschmaschine zur Verfügung.",
              answer: true,
              why: {
                de: "»Die linke Waschmaschine ist defekt … benutzen Sie bis dahin nur die rechte Maschine.« Von zwei Maschinen fällt eine aus, also bleibt eine. Die Prüfung erwartet, dass du das selbst zusammenrechnest.",
                en: "'The left machine is broken … until then please use only the right one.' Of two machines one is out, so one remains. The exam expects you to work that out yourself.",
                it: "»La lavatrice di sinistra è guasta … usate solo quella di destra.« Di due ne resta una.",
                bn: "»বাঁ দিকের মেশিনটি নষ্ট … ততদিন কেবল ডানেরটি ব্যবহার করুন।« দুটির একটি বন্ধ, তাই একটি থাকে।",
              },
            },
          ],
        },
        {
          id: "h8-t3-3",
          label: {
            de: "Ansage des Nachbarschaftshauses",
            en: "Community centre announcement",
            it: "Annuncio del centro di quartiere",
            bn: "পাড়া কেন্দ্রের ঘোষণা",
          },
          transcript:
            "Guten Tag und willkommen im Nachbarschaftshaus. Unser Deutsch-Treff findet jeden Donnerstag ab siebzehn Uhr statt. Eine Anmeldung ist nicht erforderlich, und es kostet nichts. In den Schulferien machen wir allerdings Pause.",
          items: [
            {
              nr: 18,
              statement: "Der Deutsch-Treff findet auch in den Schulferien statt.",
              answer: false,
              why: {
                de: "»In den Schulferien machen wir allerdings Pause.« Wieder das Signalwort »allerdings« am Ende — es kündigt in fast jeder Ansage die eine Einschränkung an, die das Item ausmacht. Hör die letzten Sätze besonders genau.",
                en: "'In the school holidays, however, we take a break.' The signal word 'allerdings' again, right at the end — in almost every announcement it introduces the one limitation the item is built on. Listen especially closely to the closing sentences.",
                it: "»Durante le vacanze scolastiche però facciamo pausa.« Ancora »allerdings« alla fine.",
                bn: "»তবে স্কুল ছুটিতে আমরা বিরতি নিই।« আবারও শেষে »allerdings« — প্রায় প্রতিটি ঘোষণায় এটাই সেই সীমাবদ্ধতা আনে।",
              },
            },
          ],
        },
        {
          id: "h8-t3-4",
          label: {
            de: "Ansage einer Schlichtungsstelle",
            en: "Mediation service announcement",
            it: "Annuncio del servizio di conciliazione",
            bn: "মধ্যস্থতা কেন্দ্রের ঘোষণা",
          },
          transcript:
            "Sie haben die Schiedsstelle für Nachbarschaftsfragen erreicht. Wir vermitteln bei Streit um Lärm, Gerüche oder Bäume an der Grundstücksgrenze. Beide Seiten müssen freiwillig teilnehmen. Wenn eine Seite nicht möchte, können wir leider nichts tun.",
          items: [
            {
              nr: 19,
              statement: "Die Schlichtung funktioniert nur, wenn beide Seiten mitmachen wollen.",
              answer: true,
              why: {
                de: "»Beide Seiten müssen freiwillig teilnehmen. Wenn eine Seite nicht möchte, können wir leider nichts tun.« Die Bedingung wird zweimal gesagt, einmal positiv und einmal negativ — solche Doppelungen sind eine Einladung, genau hinzuhören.",
                en: "'Both sides must take part voluntarily. If one side does not want to, unfortunately we can do nothing.' The condition is stated twice, once positively and once negatively — such doubling invites close listening.",
                it: "»Entrambe le parti devono partecipare volontariamente.« La condizione è detta due volte.",
                bn: "»দুই পক্ষকেই স্বেচ্ছায় অংশ নিতে হবে। এক পক্ষ না চাইলে আমরা কিছুই করতে পারি না।« শর্তটি দুবার বলা।",
              },
            },
          ],
        },
        {
          id: "h8-t3-5",
          label: {
            de: "Durchsage im Haus",
            en: "Announcement in the building",
            it: "Annuncio in condominio",
            bn: "ভবনের ঘোষণা",
          },
          transcript:
            "Liebe Bewohnerinnen und Bewohner, am Samstag räumen wir gemeinsam den Hof auf. Wir treffen uns um zehn Uhr unten. Werkzeug ist da, bringen Sie bitte nur Handschuhe mit. Für Kuchen und Kaffee ist gesorgt.",
          items: [
            {
              nr: 20,
              statement: "Man soll eigenes Werkzeug mitbringen.",
              answer: false,
              why: {
                de: "»Werkzeug ist da, bringen Sie bitte nur Handschuhe mit.« Das Wort »nur« grenzt ab: Handschuhe ja, alles andere nein. Beide Dinge werden genannt, und die Aussage nimmt das falsche.",
                en: "'Tools are provided, please bring only gloves.' The word 'nur' draws the line: gloves yes, everything else no. Both things are mentioned, and the statement takes the wrong one.",
                it: "»Gli attrezzi ci sono, portate solo i guanti.« Il »nur« traccia il confine.",
                bn: "»যন্ত্রপাতি আছে, শুধু দস্তানা আনুন।« »nur« সীমা টানে: দস্তানা হ্যাঁ, বাকি সব না।",
              },
            },
          ],
        },
      ],
    },
  ],
};
