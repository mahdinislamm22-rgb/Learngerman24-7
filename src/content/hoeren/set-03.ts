import type { HoerSet } from "./types";

/**
 * HOER-03 — Gesundheit, Praxis und Krankenkasse.
 *
 * Original material in telc B1 format, not official telc questions.
 *
 * Listening traps, chosen because they are the ones that actually cost
 * points on this topic:
 *   · a negation buried mid-sentence (item 2, item 18),
 *   · two numbers in one breath where the statement takes the wrong one
 *     (item 4),
 *   · a condition attached to a benefit — true only IF (item 12),
 *   · a fact that sounds plausible and is simply never said (item 11),
 *   · "nicht mehr" versus "noch nicht", which sound alike and mean
 *     opposite things (item 20).
 */
export const hoer03: HoerSet = {
  code: "HOER-03",

  title: {
    de: "In der Praxis, in der Apotheke und bei der Kasse",
    en: "At the surgery, the pharmacy and the health insurer",
    it: "Dal medico, in farmacia e alla cassa malattia",
    bn: "চেম্বারে, ফার্মেসিতে ও স্বাস্থ্যবিমায়",
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
          id: "h3-t1-1",
          label: {
            de: "Anrufbeantworter einer Arztpraxis",
            en: "Surgery answerphone",
            it: "Segreteria di uno studio medico",
            bn: "ডাক্তারের চেম্বারের ভয়েসমেইল",
          },
          transcript:
            "Guten Tag, hier ist die Praxis Doktor Behrens. Wir haben Montag bis Freitag von acht bis achtzehn Uhr geöffnet, mittwochs nur bis zwölf Uhr. Termine vereinbaren Sie bitte über unsere Internetseite. Für Notfälle außerhalb der Sprechzeiten wählen Sie bitte die eins eins sechs eins eins sieben.",
          items: [
            {
              nr: 1,
              statement: "Am Mittwoch ist die Praxis nachmittags geschlossen.",
              answer: true,
              why: {
                de: "»mittwochs nur bis zwölf Uhr« — nach zwölf ist Nachmittag, also zu. Die allgemeine Zeit acht bis achtzehn Uhr gilt für die anderen Tage.",
                en: "'on Wednesdays only until twelve' — after twelve is the afternoon, so closed. The general eight-to-six applies to the other days.",
                it: "»il mercoledì solo fino a mezzogiorno« — dopo è pomeriggio, quindi chiuso.",
                bn: "»বুধবার কেবল বারোটা পর্যন্ত« — বারোটার পরই বিকেল, অর্থাৎ বন্ধ। আটটা–আঠারোটা বাকি দিনের জন্য।",
              },
            },
          ],
        },
        {
          id: "h3-t1-2",
          label: {
            de: "Durchsage in der Apotheke",
            en: "Pharmacy announcement",
            it: "Annuncio in farmacia",
            bn: "ফার্মেসির ঘোষণা",
          },
          transcript:
            "Liebe Kundinnen und Kunden, wir möchten Sie darauf hinweisen, dass wir dieses Medikament nicht ohne Rezept abgeben dürfen. Bitte lassen Sie sich von Ihrem Hausarzt ein Rezept ausstellen. Rezeptfreie Mittel gegen Erkältung finden Sie im Regal rechts neben der Kasse.",
          items: [
            {
              nr: 2,
              statement: "Man kann das Medikament auch ohne Rezept kaufen.",
              answer: false,
              why: {
                de: "»dass wir dieses Medikament nicht ohne Rezept abgeben dürfen«. Das »nicht« steht mitten im Nebensatz, weit vom Anfang entfernt — genau da überhört man es. Rezeptfrei sind nur die Erkältungsmittel im Regal.",
                en: "'that we may not hand this medicine out without a prescription.' The 'nicht' sits mid-clause, far from the start — exactly where it gets missed. Only the cold remedies on the shelf are prescription-free.",
                it: "»che non possiamo dare questo medicinale senza ricetta«. Il »nicht« è a metà frase, dove sfugge.",
                bn: "»এই ওষুধ আমরা প্রেসক্রিপশন ছাড়া দিতে পারি না«। »nicht« বাক্যের মাঝখানে — ঠিক সেখানেই কান এড়ায়।",
              },
            },
          ],
        },
        {
          id: "h3-t1-3",
          label: {
            de: "Nachricht einer Freundin",
            en: "Message from a friend",
            it: "Messaggio di un'amica",
            bn: "এক বন্ধুর বার্তা",
          },
          transcript:
            "Hallo, ich bin's, Lena. Du, ich schaffe es heute Abend leider nicht zum Sport. Mein Knie tut seit gestern wieder weh, und der Arzt hat gesagt, ich soll zwei Wochen pausieren. Schwimmen darf ich aber. Vielleicht gehen wir am Samstag zusammen ins Hallenbad?",
          items: [
            {
              nr: 3,
              statement: "Lena darf im Moment gar keinen Sport machen.",
              answer: false,
              why: {
                de: "»Schwimmen darf ich aber.« Ein kurzer Satz, der die ganze Aussage kippt. Pausieren heißt hier: diese eine Sportart, nicht jede.",
                en: "'But I am allowed to swim.' One short sentence overturns the whole statement. Pausing here means this one sport, not all of them.",
                it: "»Nuotare però posso.« Una frase breve ribalta tutto.",
                bn: "»তবে সাঁতার কাটতে পারি।« একটি ছোট বাক্যই পুরো বক্তব্য উল্টে দেয়।",
              },
            },
          ],
        },
        {
          id: "h3-t1-4",
          label: {
            de: "Ansage der Krankenkasse",
            en: "Health insurer recorded message",
            it: "Messaggio della cassa malattia",
            bn: "স্বাস্থ্যবিমার রেকর্ড বার্তা",
          },
          transcript:
            "Willkommen bei der Gesundheitskasse. Unsere Geschäftsstelle in der Bahnhofstraße erreichen Sie von neun bis sechzehn Uhr. Unsere Telefonberatung ist länger für Sie da, nämlich von acht bis achtzehn Uhr. Bitte halten Sie Ihre Versichertennummer bereit.",
          items: [
            {
              nr: 4,
              statement: "Die Geschäftsstelle ist bis achtzehn Uhr geöffnet.",
              answer: false,
              why: {
                de: "Achtzehn Uhr gilt für die Telefonberatung, die Geschäftsstelle schließt um sechzehn Uhr. Zwei Zeiten in einem Atemzug, und die Aussage nimmt die falsche — ein Standardtrick in Teil 1.",
                en: "Six in the evening applies to the phone line; the office closes at four. Two times in one breath, and the statement picks the wrong one — a standard Teil 1 trick.",
                it: "Le diciotto valgono per il telefono; l'ufficio chiude alle sedici. Due orari di seguito, e l'affermazione prende quello sbagliato.",
                bn: "আঠারোটা ফোন পরামর্শের জন্য, অফিস বন্ধ ষোলোটায়। এক নিঃশ্বাসে দুটি সময়, বক্তব্য ভুলটা নিয়েছে।",
              },
            },
          ],
        },
        {
          id: "h3-t1-5",
          label: {
            de: "Nachricht der Praxis",
            en: "Message from the surgery",
            it: "Messaggio dello studio medico",
            bn: "চেম্বার থেকে বার্তা",
          },
          transcript:
            "Guten Tag, Frau Haddad, hier ist die Praxis Doktor Neumann. Ihre Blutwerte sind da und sehen gut aus. Sie müssen deswegen nicht extra vorbeikommen. Nur wenn Sie Fragen haben, rufen Sie uns bitte zurück.",
          items: [
            {
              nr: 5,
              statement: "Frau Haddad muss nur anrufen, wenn sie etwas wissen möchte.",
              answer: true,
              why: {
                de: "»Nur wenn Sie Fragen haben, rufen Sie uns bitte zurück.« Der Rückruf ist an eine Bedingung geknüpft, und die Aussage gibt genau diese Bedingung wieder.",
                en: "'Only if you have questions, please call us back.' The call-back is tied to a condition, and the statement reproduces exactly that condition.",
                it: "»Solo se ha domande, ci richiami.« La telefonata è legata a una condizione.",
                bn: "»কেবল প্রশ্ন থাকলে আমাদের ফোন করবেন।« ফোন করাটা একটি শর্তে বাঁধা, বক্তব্যটি ঠিক সেই শর্তই বলছে।",
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
          id: "h3-t2-1",
          label: {
            de: "Radiogespräch mit einer Hausärztin",
            en: "Radio conversation with a GP",
            it: "Conversazione radiofonica con una medica di base",
            bn: "একজন পারিবারিক ডাক্তারের সঙ্গে রেডিও আলাপ",
          },
          transcript:
            "Moderator: Bei uns im Studio ist heute Doktor Miriam Falk, Hausärztin hier in Siegen. Frau Doktor Falk, was ist der häufigste Grund, warum Menschen zu Ihnen kommen? " +
            "Ärztin: Rückenschmerzen. Mit Abstand. Danach kommen Erkältungen, aber der Rücken steht seit Jahren auf Platz eins. " +
            "Moderator: Und woran liegt das? " +
            "Ärztin: Fast immer daran, dass wir zu lange sitzen und uns zu wenig bewegen. Das Alter spielt dabei eine viel kleinere Rolle, als die meisten denken. Ich sehe Fünfundzwanzigjährige mit den gleichen Beschwerden wie Sechzigjährige. " +
            "Moderator: Was raten Sie diesen Patienten? " +
            "Ärztin: Zuerst einmal: Bewegung, jeden Tag ein bisschen. Zwanzig Minuten zu Fuß sind besser als einmal in der Woche zwei Stunden Sport. Tabletten gebe ich am Anfang nur, wenn die Schmerzen sehr stark sind. " +
            "Moderator: Viele Patienten wünschen sich aber schnell ein Medikament. " +
            "Ärztin: Ja, und das verstehe ich auch. Aber ein Schmerzmittel nimmt nur das Gefühl weg, es ändert nichts an der Ursache. Wenn jemand vier Wochen später wiederkommt, ist nichts gewonnen. " +
            "Moderator: Sie bieten in Ihrer Praxis auch einen Rückenkurs an, habe ich gehört. " +
            "Ärztin: Nicht in der Praxis selbst, dafür haben wir keinen Platz. Aber wir arbeiten mit dem Sportzentrum zusammen. Die Krankenkasse zahlt den Kurs, wenn man mindestens acht von zehn Terminen besucht. Wer seltener kommt, zahlt selbst. " +
            "Moderator: Und wie viele halten durch? " +
            "Ärztin: Ungefähr die Hälfte. Das klingt wenig, ist aber viel mehr als bei Empfehlungen, die man nur mündlich bekommt. " +
            "Moderator: Was sollten Patienten tun, bevor sie zu Ihnen kommen? " +
            "Ärztin: Sich überlegen, was sie wirklich wissen wollen. Ich habe im Schnitt acht Minuten pro Patient. Wer mit drei Anliegen kommt, sollte mir gleich sagen, welches das wichtigste ist. Sonst reden wir die ganze Zeit über etwas Nebensächliches. " +
            "Moderator: Gibt es etwas, das Sie sich von Ihren Patienten wünschen? " +
            "Ärztin: Dass sie ehrlich sind. Wenn jemand die Tabletten nicht genommen hat, soll er das sagen. Ich schimpfe nicht. Aber wenn ich es nicht weiß, verschreibe ich vielleicht etwas Stärkeres, und das ist dann wirklich gefährlich. " +
            "Moderator: Frau Doktor Falk, vielen Dank für das Gespräch.",
          items: [
            {
              nr: 6,
              statement: "Rückenschmerzen sind der häufigste Grund für einen Arztbesuch bei Frau Falk.",
              answer: true,
              why: {
                de: "»Rückenschmerzen. Mit Abstand.« — und gleich danach: »der Rücken steht seit Jahren auf Platz eins«. Zweimal gesagt, also sicher.",
                en: "'Back pain. By a long way.' — and right after: 'the back has been number one for years'. Said twice, so it is safe.",
                it: "»Mal di schiena. Di gran lunga.« — e poi: »la schiena è al primo posto da anni«.",
                bn: "»পিঠের ব্যথা। অনেক ব্যবধানে।« — আর পরেই: »পিঠ বছরের পর বছর এক নম্বরে«। দুবার বলা, তাই নিশ্চিত।",
              },
            },
            {
              nr: 7,
              statement: "Nach ihrer Erfahrung ist vor allem das Alter schuld.",
              answer: false,
              why: {
                de: "»Das Alter spielt dabei eine viel kleinere Rolle, als die meisten denken.« Schuld sind langes Sitzen und zu wenig Bewegung. Sie widerspricht der Erwartung ausdrücklich — solche Sätze sind fast immer ein Prüfungsitem.",
                en: "'Age plays a far smaller part than most people think.' The causes are sitting too long and moving too little. She explicitly contradicts the expectation — such sentences are almost always an exam item.",
                it: "»L'età conta molto meno di quanto si pensi.« Le cause sono la sedentarietà.",
                bn: "»বয়সের ভূমিকা বেশিরভাগ মানুষ যা ভাবেন তার চেয়ে অনেক কম।« কারণ দীর্ঘ সময় বসা ও কম নড়াচড়া।",
              },
            },
            {
              nr: 8,
              statement: "Sie empfiehlt jeden Tag etwas Bewegung statt einmal pro Woche viel.",
              answer: true,
              why: {
                de: "»Zwanzig Minuten zu Fuß sind besser als einmal in der Woche zwei Stunden Sport.« Genau dieser Vergleich steht in der Aussage.",
                en: "'Twenty minutes on foot is better than two hours of sport once a week.' Exactly that comparison is in the statement.",
                it: "»Venti minuti a piedi sono meglio di due ore di sport una volta a settimana.«",
                bn: "»বিশ মিনিট হাঁটা সপ্তাহে একবার দুই ঘণ্টা খেলার চেয়ে ভালো।« ঠিক এই তুলনাটাই বক্তব্যে।",
              },
            },
            {
              nr: 9,
              statement: "Sie verschreibt grundsätzlich keine Schmerzmittel.",
              answer: false,
              why: {
                de: "»Tabletten gebe ich am Anfang nur, wenn die Schmerzen sehr stark sind.« »nur, wenn« heißt: manchmal ja. Die Aussage behauptet dagegen: grundsätzlich keine, also nie. Achte auf solche Verabsolutierungen in der Aussage — sie sind oft der Fehler.",
                en: "'I only give tablets at the start if the pain is very severe.' 'nur, wenn' means sometimes yes. 'grundsätzlich keine' would mean never. Watch for such absolutes in the statement — they are often the error.",
                it: "»Do pastiglie all'inizio solo se il dolore è molto forte.« »Solo se« significa a volte sì.",
                bn: "»শুরুতে ওষুধ দিই কেবল যদি ব্যথা খুব তীব্র হয়।« »nur, wenn« মানে কখনো কখনো হ্যাঁ। বক্তব্যের এমন চূড়ান্ত কথাই প্রায়ই ভুল।",
              },
            },
            {
              nr: 10,
              statement: "Ein Schmerzmittel beseitigt nach ihrer Meinung die Ursache nicht.",
              answer: true,
              why: {
                de: "»es ändert nichts an der Ursache« — die Aussage sagt dasselbe mit anderen Wörtern (beseitigt nicht = ändert nichts an).",
                en: "'it changes nothing about the cause' — the statement says the same with different words.",
                it: "»non cambia nulla della causa« — l'affermazione dice lo stesso con altre parole.",
                bn: "»মূল কারণে কিছুই বদলায় না« — বক্তব্যটি একই কথা অন্য শব্দে বলছে।",
              },
            },
            {
              nr: 11,
              statement: "Der Rückenkurs findet in ihrer Praxis statt.",
              answer: false,
              why: {
                de: "»Nicht in der Praxis selbst, dafür haben wir keinen Platz.« Der Moderator sagt es falsch, und sie korrigiert ihn sofort. Wenn jemand im Gespräch korrigiert wird, ist das fast immer ein Item.",
                en: "'Not at the practice itself, we have no room for that.' The presenter says it wrongly and she corrects him at once. When someone is corrected in a conversation, that is almost always an item.",
                it: "»Non nello studio, non abbiamo spazio.« Il conduttore sbaglia e lei lo corregge subito.",
                bn: "»চেম্বারে নয়, সেখানে জায়গা নেই।« উপস্থাপক ভুল বলেন, তিনি সঙ্গে সঙ্গে শুধরে দেন। কথোপকথনে কাউকে শোধরানো হলে সেটা প্রায় সবসময়ই একটি প্রশ্ন।",
              },
            },
            {
              nr: 12,
              statement: "Die Krankenkasse zahlt den Kurs nur unter einer Bedingung.",
              answer: true,
              why: {
                de: "»wenn man mindestens acht von zehn Terminen besucht. Wer seltener kommt, zahlt selbst.« Die Bedingung wird sogar zweimal formuliert, einmal positiv und einmal negativ.",
                en: "'if you attend at least eight of the ten sessions. Anyone attending less often pays themselves.' The condition is stated twice, once positively and once negatively.",
                it: "»se si frequentano almeno otto incontri su dieci. Chi viene meno spesso paga da sé.«",
                bn: "»যদি দশটির অন্তত আটটিতে আসা হয়। যিনি কম আসেন, নিজে দেন।« শর্তটি দুবার বলা — একবার ইতিবাচক, একবার নেতিবাচকভাবে।",
              },
            },
            {
              nr: 13,
              statement: "Fast alle Teilnehmer machen den Kurs bis zum Ende mit.",
              answer: false,
              why: {
                de: "»Ungefähr die Hälfte.« Die Hälfte ist nicht fast alle. Sie nennt es dann zwar »viel mehr als bei Empfehlungen, die man nur mündlich bekommt« — aber das ist ein Vergleich, keine neue Zahl.",
                en: "'About half.' Half is not almost all. She then calls it 'far more than with spoken advice' — but that is a comparison, not a new figure.",
                it: "»Circa la metà.« La metà non è quasi tutti.",
                bn: "»প্রায় অর্ধেক।« অর্ধেক মানে প্রায় সবাই নয়।",
              },
            },
            {
              nr: 14,
              statement: "Patienten sollen zuerst sagen, welches Problem für sie am wichtigsten ist.",
              answer: true,
              why: {
                de: "»Wer mit drei Anliegen kommt, sollte mir gleich sagen, welches das wichtigste ist.« Der Grund steht direkt daneben: acht Minuten pro Patient.",
                en: "'Anyone coming with three concerns should tell me straight away which is the most important.' The reason is right next to it: eight minutes per patient.",
                it: "»Chi arriva con tre problemi dovrebbe dirmi subito qual è il più importante.«",
                bn: "»যিনি তিনটি সমস্যা নিয়ে আসেন, সঙ্গে সঙ্গেই বলুন কোনটা সবচেয়ে জরুরি।« কারণটা পাশেই: রোগীপ্রতি আট মিনিট।",
              },
            },
            {
              nr: 15,
              statement: "Sie möchte, dass Patienten es zugeben, wenn sie die Medikamente nicht genommen haben.",
              answer: true,
              why: {
                de: "»Wenn jemand die Tabletten nicht genommen hat, soll er das sagen. Ich schimpfe nicht.« Der Grund folgt sofort: sonst verschreibt sie etwas Stärkeres.",
                en: "'If someone hasn't taken the tablets, they should say so. I don't tell people off.' The reason follows at once: otherwise she prescribes something stronger.",
                it: "»Se qualcuno non ha preso le pastiglie, deve dirlo. Non sgrido nessuno.«",
                bn: "»কেউ ওষুধ না খেয়ে থাকলে সেটা বলুক। আমি বকি না।« কারণটা সঙ্গে সঙ্গেই: নইলে তিনি আরও কড়া ওষুধ লেখেন।",
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
          id: "h3-t3-1",
          label: {
            de: "Ansage im Krankenhaus",
            en: "Hospital announcement",
            it: "Annuncio in ospedale",
            bn: "হাসপাতালের ঘোষণা",
          },
          transcript:
            "Ein Hinweis für unsere Besucher: Die Besuchszeit auf allen Stationen ist täglich von vierzehn bis neunzehn Uhr. Auf der Kinderstation dürfen Eltern jederzeit bleiben, auch nachts. Bitte bringen Sie keine Blumen mit auf die Intensivstation.",
          items: [
            {
              nr: 16,
              statement: "Eltern von kranken Kindern dürfen auch nachts bleiben.",
              answer: true,
              why: {
                de: "»Auf der Kinderstation dürfen Eltern jederzeit bleiben, auch nachts.« Die allgemeine Besuchszeit gilt für alle anderen Stationen — eine Ausnahme aufzufassen ist genau die Aufgabe.",
                en: "'On the children's ward parents may stay at any time, including at night.' The general visiting hours apply to the other wards — catching the exception is the whole task.",
                it: "»Nel reparto pediatrico i genitori possono restare sempre, anche di notte.«",
                bn: "»শিশু ওয়ার্ডে বাবা-মা যেকোনো সময় থাকতে পারেন, রাতেও।« সাধারণ সময় বাকি ওয়ার্ডের জন্য — ব্যতিক্রম ধরাই এখানে কাজ।",
              },
            },
          ],
        },
        {
          id: "h3-t3-2",
          label: {
            de: "Ansage in der Apotheke",
            en: "Pharmacy announcement",
            it: "Annuncio in farmacia",
            bn: "ফার্মেসির ঘোষণা",
          },
          transcript:
            "Liebe Kundinnen und Kunden, ab dem ersten Oktober bieten wir hier wieder Grippeimpfungen an. Ein Termin ist nicht nötig, kommen Sie einfach vorbei. Bringen Sie bitte Ihre Versichertenkarte und, wenn Sie ihn haben, Ihren Impfpass mit.",
          items: [
            {
              nr: 17,
              statement: "Für die Impfung muss man vorher einen Termin machen.",
              answer: false,
              why: {
                de: "»Ein Termin ist nicht nötig, kommen Sie einfach vorbei.« Beide Hälften des Satzes sagen dasselbe — wenn du das »nicht« überhörst, rettet dich der zweite Teil.",
                en: "'No appointment is needed, just come in.' Both halves say the same thing — if you miss the 'nicht', the second half saves you.",
                it: "»Non serve un appuntamento, venite pure.« Entrambe le metà dicono la stessa cosa.",
                bn: "»অ্যাপয়েন্টমেন্ট দরকার নেই, চলে আসুন।« বাক্যের দুই অংশই একই কথা বলে।",
              },
            },
          ],
        },
        {
          id: "h3-t3-3",
          label: {
            de: "Ansage im Sportzentrum",
            en: "Sports centre announcement",
            it: "Annuncio al centro sportivo",
            bn: "স্পোর্টস সেন্টারের ঘোষণা",
          },
          transcript:
            "Eine Information zum Rückenkurs am Dienstag: Der Kurs fällt diese Woche nicht aus, er beginnt aber eine halbe Stunde später als sonst, weil die Halle noch gereinigt wird. Bitte kommen Sie nicht zu früh, der Umkleideraum ist bis dahin geschlossen.",
          items: [
            {
              nr: 18,
              statement: "Der Rückenkurs findet diese Woche nicht statt.",
              answer: false,
              why: {
                de: "»Der Kurs fällt diese Woche nicht aus«. »ausfallen« heißt: nicht stattfinden — mit »nicht« davor also: er findet statt. Zwei Verneinungen hintereinander sind die härteste Stelle im ganzen Teil 3; lies den Satz notfalls zweimal, du hörst ihn ja auch zweimal.",
                en: "'The course is not cancelled this week.' 'ausfallen' means not to take place — with 'nicht' in front, it does take place. Two negatives in a row are the hardest thing in Teil 3; you hear it twice, so use the second play for it.",
                it: "»Il corso questa settimana non salta.« »ausfallen« significa non aver luogo: con »nicht« davanti, ha luogo.",
                bn: "»কোর্সটি এ সপ্তাহে বাতিল হচ্ছে না।« »ausfallen« মানে না হওয়া — আগে »nicht« থাকায় মানে হচ্ছে। পরপর দুটি নেতিবাচক Teil 3-এর সবচেয়ে কঠিন জায়গা; দ্বিতীয়বার শোনাটা এখানেই কাজে লাগান।",
              },
            },
          ],
        },
        {
          id: "h3-t3-4",
          label: {
            de: "Ansage der Krankenkasse",
            en: "Health insurer announcement",
            it: "Annuncio della cassa malattia",
            bn: "স্বাস্থ্যবিমার ঘোষণা",
          },
          transcript:
            "Ein Hinweis an alle Versicherten: Rechnungen für Behandlungen im Ausland reichen Sie bitte innerhalb von drei Monaten bei uns ein. Schicken Sie uns immer das Original und behalten Sie selbst eine Kopie. Später eingereichte Rechnungen können wir leider nicht mehr erstatten.",
          items: [
            {
              nr: 19,
              statement: "Man soll die Rechnung im Original einreichen.",
              answer: true,
              why: {
                de: "»Schicken Sie uns immer das Original und behalten Sie selbst eine Kopie.« Beides wird genannt — entscheidend ist, wer was bekommt: Kasse das Original, man selbst die Kopie.",
                en: "'Always send us the original and keep a copy yourself.' Both are mentioned — what matters is who gets which: the insurer the original, you the copy.",
                it: "»Inviateci sempre l'originale e tenete voi una copia.«",
                bn: "»আমাদের সবসময় মূল কপি পাঠান, নিজে একটি ফটোকপি রাখুন।« দুটোই বলা — কে কোনটা পায়, সেটাই আসল।",
              },
            },
          ],
        },
        {
          id: "h3-t3-5",
          label: {
            de: "Ansage im Gesundheitszentrum",
            en: "Health centre announcement",
            it: "Annuncio al centro sanitario",
            bn: "স্বাস্থ্যকেন্দ্রের ঘোষণা",
          },
          transcript:
            "Liebe Besucherinnen und Besucher, die Ernährungsberatung im ersten Stock ist umgezogen. Sie finden uns jetzt im Erdgeschoss, Raum vier. Das erste Gespräch ist nach wie vor kostenlos. Anmeldungen für den Kochkurs im November nehmen wir noch nicht an, die Termine stehen erst Ende Oktober fest.",
          items: [
            {
              nr: 20,
              statement: "Für den Kochkurs kann man sich jetzt schon anmelden.",
              answer: false,
              why: {
                de: "»nehmen wir noch nicht an« — noch nicht heißt: später schon, jetzt nicht. Verwechsle es nicht mit »nicht mehr«, das genau das Gegenteil bedeutet (früher ja, jetzt nicht mehr). Beide Wendungen kommen in dieser Prüfung vor.",
                en: "'we are not accepting them yet' — noch nicht means later yes, not now. Do not confuse it with 'nicht mehr', which means the opposite (once yes, no longer). Both appear in this paper.",
                it: "»non le accettiamo ancora« — »noch nicht« significa più avanti sì, ora no. Da non confondere con »nicht mehr«, che è l'opposto.",
                bn: "»এখনো নিচ্ছি না« — noch nicht মানে পরে হ্যাঁ, এখন নয়। »nicht mehr«-এর সঙ্গে গুলিয়ে ফেলবেন না, যার মানে ঠিক উল্টো (আগে হ্যাঁ, এখন আর নয়)।",
              },
            },
          ],
        },
      ],
    },
  ],
};
