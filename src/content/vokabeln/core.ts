import { w, type VocabWord } from "./types";

/**
 * The core telc B1 word list.
 *
 * Priority 1 means: if you learn nothing else, learn this. Those words are
 * the ones that turn up in the letter you have to write, the adverts you
 * have to match, and the announcements you have to follow — the places
 * where not knowing one word costs a whole item.
 */
export const CORE_WORDS: VocabWord[] = [
  // --- Arbeit und Beruf ------------------------------------------------
  w("Bewerbung", "die", "application (for a job)", "candidatura", "চাকরির আবেদন", "Ich habe meine Bewerbung gestern abgeschickt.", "arbeit", 1, "die Bewerbungen"),
  w("Lebenslauf", "der", "CV, résumé", "curriculum vitae", "জীবনবৃত্তান্ত", "Bitte schicken Sie uns Ihren Lebenslauf per E-Mail.", "arbeit", 1),
  w("Anschreiben", "das", "cover letter", "lettera di presentazione", "প্রেরণপত্র", "Das Anschreiben soll nicht länger als eine Seite sein.", "arbeit", 1),
  w("Vorstellungsgespräch", "das", "job interview", "colloquio di lavoro", "চাকরির সাক্ষাৎকার", "Ich habe nächste Woche ein Vorstellungsgespräch.", "arbeit", 1),
  w("Stelle", "die", "position, job", "posto di lavoro", "চাকরির পদ", "Die Stelle ist ab September frei.", "arbeit", 1, "die Stellen"),
  w("Arbeitgeber", "der", "employer", "datore di lavoro", "নিয়োগকর্তা", "Mein Arbeitgeber zahlt die Fahrkarte.", "arbeit", 2),
  w("Kollege", "der", "colleague", "collega", "সহকর্মী", "Meine Kollegen helfen mir oft.", "arbeit", 1, "die Kollegen"),
  w("Gehalt", "das", "salary", "stipendio", "বেতন", "Das Gehalt wird am Ende des Monats überwiesen.", "arbeit", 2),
  w("Schicht", "die", "shift", "turno", "শিফট", "Diese Woche arbeite ich in der Spätschicht.", "arbeit", 2),
  w("Überstunden", "die", "overtime", "straordinari", "অতিরিক্ত কাজের সময়", "Im Dezember machen wir viele Überstunden.", "arbeit", 2),
  w("Praktikum", "das", "internship", "tirocinio", "ইন্টার্নশিপ", "Ich suche ein Praktikum im Bereich Informatik.", "arbeit", 1),
  w("Vertrag", "der", "contract", "contratto", "চুক্তি", "Der Vertrag gilt für zwei Jahre.", "arbeit", 1, "die Verträge"),
  w("Kündigung", "die", "notice, termination", "licenziamento, disdetta", "চাকরি বা চুক্তি বাতিল", "Die Kündigung muss schriftlich erfolgen.", "arbeit", 2),
  w("Erfahrung", "die", "experience", "esperienza", "অভিজ্ঞতা", "Ich habe zwei Jahre Erfahrung als Kellner.", "arbeit", 1),
  w("Zeugnis", "das", "certificate, reference", "certificato, referenza", "সনদপত্র", "Legen Sie bitte Ihre Zeugnisse bei.", "arbeit", 1, "die Zeugnisse"),
  w("berufstätig", undefined, "in employment, working", "che lavora", "কর্মজীবী", "Beide Eltern sind berufstätig.", "arbeit", 2),
  w("sich bewerben", undefined, "to apply", "candidarsi", "আবেদন করা", "Ich möchte mich um diese Stelle bewerben.", "arbeit", 1),
  w("verdienen", undefined, "to earn", "guadagnare", "উপার্জন করা", "Er verdient genug, um die Miete zu zahlen.", "arbeit", 1),

  // --- Wohnen ----------------------------------------------------------
  w("Wohnung", "die", "flat, apartment", "appartamento", "ফ্ল্যাট", "Wir suchen eine Wohnung mit drei Zimmern.", "wohnen", 1, "die Wohnungen"),
  w("Miete", "die", "rent", "affitto", "ভাড়া", "Die Miete beträgt 650 Euro warm.", "wohnen", 1),
  w("Nebenkosten", "die", "service charges, bills", "spese accessorie", "অতিরিক্ত খরচ", "Die Nebenkosten sind in der Miete enthalten.", "wohnen", 2),
  w("Vermieter", "der", "landlord", "locatore", "বাড়িওয়ালা", "Ich habe dem Vermieter geschrieben.", "wohnen", 1),
  w("Nachbar", "der", "neighbour", "vicino", "প্রতিবেশী", "Mein Nachbar hilft mir beim Einkaufen.", "wohnen", 1, "die Nachbarn"),
  w("Heizung", "die", "heating", "riscaldamento", "হিটার", "Die Heizung funktioniert seit Montag nicht.", "wohnen", 1),
  w("Kaution", "die", "deposit", "cauzione", "জামানত", "Die Kaution beträgt zwei Monatsmieten.", "wohnen", 2),
  w("Stockwerk", "das", "floor, storey", "piano", "তলা", "Die Wohnung liegt im dritten Stockwerk.", "wohnen", 2),
  w("Lärm", "der", "noise", "rumore", "শব্দদূষণ", "Ich möchte mich über den Lärm beschweren.", "wohnen", 1),
  w("Umzug", "der", "house move", "trasloco", "বাসা বদল", "Der Umzug findet am Samstag statt.", "wohnen", 2),
  w("möbliert", undefined, "furnished", "ammobiliato", "আসবাবসহ", "Das Zimmer ist möbliert.", "wohnen", 3),
  w("kündigen", undefined, "to give notice, cancel", "disdire", "বাতিল করা", "Ich möchte den Vertrag zum 31. März kündigen.", "wohnen", 2),
  w("renovieren", undefined, "to renovate", "ristrutturare", "সংস্কার করা", "Die Küche wurde letztes Jahr renoviert.", "wohnen", 3),

  // --- Gesundheit ------------------------------------------------------
  w("Termin", "der", "appointment", "appuntamento", "নির্ধারিত সময়", "Ich hätte gern einen Termin bei Doktor Weber.", "gesundheit", 1, "die Termine"),
  w("Praxis", "die", "doctor's surgery", "ambulatorio", "ডাক্তারের চেম্বার", "Die Praxis ist heute geschlossen.", "gesundheit", 1),
  w("Krankenkasse", "die", "health insurance fund", "cassa malattia", "স্বাস্থ্যবিমা সংস্থা", "Meine Krankenkasse bezahlt die Behandlung.", "gesundheit", 1),
  w("Rezept", "das", "prescription; recipe", "ricetta", "প্রেসক্রিপশন; রেসিপি", "Der Arzt hat mir ein Rezept gegeben.", "gesundheit", 1),
  w("Beschwerden", "die", "symptoms, complaints", "disturbi", "শারীরিক সমস্যা", "Seit einer Woche habe ich Beschwerden im Rücken.", "gesundheit", 2),
  w("Krankschreibung", "die", "sick note", "certificato di malattia", "অসুস্থতার সনদ", "Ich brauche eine Krankschreibung für meinen Arbeitgeber.", "gesundheit", 2),
  w("Apotheke", "die", "pharmacy", "farmacia", "ফার্মেসি", "Die Apotheke gegenüber hat Notdienst.", "gesundheit", 1),
  w("Behandlung", "die", "treatment", "trattamento", "চিকিৎসা", "Die Behandlung dauert etwa zwei Wochen.", "gesundheit", 2),
  w("sich erholen", undefined, "to recover, to rest", "riprendersi", "সুস্থ হওয়া", "Nach der Grippe muss ich mich noch erholen.", "gesundheit", 2),
  w("weh tun", undefined, "to hurt", "far male", "ব্যথা করা", "Mein Hals tut seit gestern weh.", "gesundheit", 1),

  // --- Ämter und Formulare ---------------------------------------------
  w("Amt", "das", "public office", "ufficio pubblico", "সরকারি দপ্তর", "Das Amt hat nur vormittags geöffnet.", "behoerden", 1, "die Ämter"),
  w("Anmeldung", "die", "registration", "iscrizione, registrazione", "নিবন্ধন", "Die Anmeldung muss innerhalb von zwei Wochen erfolgen.", "behoerden", 1),
  w("Antrag", "der", "application (formal)", "domanda", "আবেদনপত্র", "Ich habe einen Antrag auf Kindergeld gestellt.", "behoerden", 1, "die Anträge"),
  w("Formular", "das", "form", "modulo", "ফর্ম", "Bitte füllen Sie das Formular vollständig aus.", "behoerden", 1),
  w("Bescheinigung", "die", "certificate, confirmation", "attestato", "প্রত্যয়নপত্র", "Ich brauche eine Bescheinigung von der Schule.", "behoerden", 1),
  w("Unterlagen", "die", "documents, paperwork", "documenti", "কাগজপত্র", "Schicken Sie uns bitte alle Unterlagen.", "behoerden", 1),
  w("Ausweis", "der", "ID card", "documento d'identità", "পরিচয়পত্র", "Ohne Ausweis kommen Sie nicht hinein.", "behoerden", 1),
  w("Aufenthalt", "der", "stay, residence", "soggiorno", "বসবাস", "Mein Aufenthalt ist bis 2028 genehmigt.", "behoerden", 2),
  w("Frist", "die", "deadline", "termine, scadenza", "সময়সীমা", "Die Frist läuft am 30. September ab.", "behoerden", 1),
  w("ausfüllen", undefined, "to fill in", "compilare", "পূরণ করা", "Füllen Sie bitte beide Seiten aus.", "behoerden", 1),
  w("beantragen", undefined, "to apply for (formally)", "richiedere", "আবেদন করা", "Man kann den Pass online beantragen.", "behoerden", 2),
  w("anerkennen", undefined, "to recognise (a qualification)", "riconoscere", "স্বীকৃতি দেওয়া", "Mein Abschluss wurde in Deutschland anerkannt.", "behoerden", 2),

  // --- Ausbildung und Schule -------------------------------------------
  w("Ausbildung", "die", "vocational training", "formazione professionale", "বৃত্তিমূলক প্রশিক্ষণ", "Meine Ausbildung dauert drei Jahre.", "ausbildung", 1),
  w("Betrieb", "der", "company, firm", "azienda", "প্রতিষ্ঠান", "Ich arbeite vier Tage im Betrieb.", "ausbildung", 1),
  w("Berufsschule", "die", "vocational school", "scuola professionale", "কারিগরি স্কুল", "Am Donnerstag gehe ich in die Berufsschule.", "ausbildung", 1),
  w("Abschluss", "der", "qualification, degree", "titolo di studio", "সনদ, ডিগ্রি", "Ohne Abschluss ist es schwierig.", "ausbildung", 1, "die Abschlüsse"),
  w("Prüfung", "die", "exam", "esame", "পরীক্ষা", "Die Prüfung findet im November statt.", "ausbildung", 1, "die Prüfungen"),
  w("Kenntnisse", "die", "knowledge, skills", "conoscenze", "জ্ঞান, দক্ষতা", "Gute Deutschkenntnisse sind wichtig.", "ausbildung", 1),
  w("Weiterbildung", "die", "further training", "formazione continua", "উচ্চতর প্রশিক্ষণ", "Nach der Ausbildung mache ich eine Weiterbildung.", "ausbildung", 2),
  w("Teilnehmer", "der", "participant", "partecipante", "অংশগ্রহণকারী", "Der Kurs hat zwölf Teilnehmer.", "ausbildung", 2),
  w("bestehen", undefined, "to pass (an exam)", "superare", "উত্তীর্ণ হওয়া", "Ich hoffe, dass ich die Prüfung bestehe.", "ausbildung", 1),
  w("teilnehmen", undefined, "to take part", "partecipare", "অংশ নেওয়া", "Ich möchte an dem Kurs teilnehmen.", "ausbildung", 1),
  w("wiederholen", undefined, "to repeat", "ripetere", "পুনরাবৃত্তি করা", "Können Sie das bitte wiederholen?", "ausbildung", 1),

  // --- Reisen und Verkehr ----------------------------------------------
  w("Verspätung", "die", "delay", "ritardo", "দেরি", "Der Zug hat zwanzig Minuten Verspätung.", "reisen", 1),
  w("Fahrkarte", "die", "ticket", "biglietto", "টিকিট", "Die Fahrkarte gilt für zwei Stunden.", "reisen", 1),
  w("Anschluss", "der", "connection (train)", "coincidenza", "সংযোগ ট্রেন", "Ich habe meinen Anschluss verpasst.", "reisen", 2),
  w("Durchsage", "die", "announcement", "annuncio", "ঘোষণা", "Haben Sie die Durchsage verstanden?", "reisen", 2),
  w("Gleis", "das", "platform", "binario", "প্ল্যাটফর্ম", "Der Zug fährt heute von Gleis sieben.", "reisen", 1),
  w("Unterkunft", "die", "accommodation", "alloggio", "থাকার জায়গা", "Die Unterkunft war sauber und günstig.", "reisen", 2),
  w("Ausflug", "der", "day trip", "gita", "একদিনের ভ্রমণ", "Am Sonntag machen wir einen Ausflug.", "reisen", 2),
  w("umsteigen", undefined, "to change (trains)", "cambiare", "গাড়ি বদলানো", "In Köln müssen Sie umsteigen.", "reisen", 1),
  w("buchen", undefined, "to book", "prenotare", "বুক করা", "Ich habe das Hotel online gebucht.", "reisen", 1),
  w("abholen", undefined, "to pick up, collect", "ritirare, andare a prendere", "নিতে যাওয়া", "Ich hole dich um acht am Bahnhof ab.", "reisen", 1),

  // --- Einkaufen und Geld ----------------------------------------------
  w("Rechnung", "die", "bill, invoice", "conto, fattura", "বিল", "Die Rechnung ist noch nicht bezahlt.", "einkaufen", 1),
  w("Quittung", "die", "receipt", "ricevuta", "রসিদ", "Kann ich bitte eine Quittung bekommen?", "einkaufen", 2),
  w("Angebot", "das", "offer, special offer", "offerta", "অফার", "Diese Woche gibt es ein gutes Angebot.", "einkaufen", 1),
  w("Preis", "der", "price", "prezzo", "দাম", "Der Preis ist mir zu hoch.", "einkaufen", 1, "die Preise"),
  w("Garantie", "die", "guarantee, warranty", "garanzia", "ওয়ারেন্টি", "Auf das Gerät gibt es zwei Jahre Garantie.", "einkaufen", 2),
  w("umtauschen", undefined, "to exchange (goods)", "cambiare (merce)", "বদলে নেওয়া", "Kann ich die Jacke umtauschen?", "einkaufen", 2),
  w("überweisen", undefined, "to transfer (money)", "bonificare", "টাকা পাঠানো", "Ich überweise Ihnen das Geld morgen.", "einkaufen", 2),
  w("sparen", undefined, "to save (money)", "risparmiare", "সঞ্চয় করা", "Wir sparen für ein Auto.", "einkaufen", 1),
  w("kostenlos", undefined, "free of charge", "gratuito", "বিনামূল্যে", "Der Eintritt ist für Kinder kostenlos.", "einkaufen", 1),
  w("günstig", undefined, "cheap, good value", "conveniente", "সাশ্রয়ী", "Das Fahrrad war sehr günstig.", "einkaufen", 1),

  // --- Freizeit und Kontakte -------------------------------------------
  w("Einladung", "die", "invitation", "invito", "নিমন্ত্রণ", "Vielen Dank für die Einladung!", "freizeit", 1),
  w("Veranstaltung", "die", "event", "evento", "অনুষ্ঠান", "Die Veranstaltung beginnt um neunzehn Uhr.", "freizeit", 2),
  w("Verein", "der", "club, association", "associazione", "সমিতি, ক্লাব", "Mein Sohn ist in einem Fußballverein.", "freizeit", 2),
  w("Bescheid sagen", undefined, "to let someone know", "far sapere", "জানিয়ে দেওয়া", "Sag mir bitte Bescheid, ob du kommst.", "freizeit", 1),
  w("absagen", undefined, "to cancel, to decline", "disdire, rifiutare", "বাতিল করা", "Ich muss den Termin leider absagen.", "freizeit", 1),
  w("verschieben", undefined, "to postpone", "rimandare", "পিছিয়ে দেওয়া", "Können wir das Treffen auf Freitag verschieben?", "freizeit", 1),
  w("sich treffen", undefined, "to meet", "incontrarsi", "দেখা করা", "Wir treffen uns um sieben vor dem Kino.", "freizeit", 1),
  w("mitbringen", undefined, "to bring along", "portare", "সাথে আনা", "Soll ich etwas zu essen mitbringen?", "freizeit", 1),

  // --- Umwelt und Wetter -----------------------------------------------
  w("Umwelt", "die", "environment", "ambiente", "পরিবেশ", "Radfahren ist gut für die Umwelt.", "umwelt", 2),
  w("Müll", "der", "rubbish, waste", "rifiuti", "আবর্জনা", "Der Müll wird dienstags abgeholt.", "umwelt", 2),
  w("Gewitter", "das", "thunderstorm", "temporale", "বজ্রঝড়", "Am Abend gibt es ein Gewitter.", "umwelt", 3),
  w("Temperatur", "die", "temperature", "temperatura", "তাপমাত্রা", "Die Temperaturen liegen bei fünfzehn Grad.", "umwelt", 2),
  w("trennen", undefined, "to separate (waste)", "separare", "আলাদা করা", "In Deutschland trennt man den Müll.", "umwelt", 2),
  w("sparen (Energie)", undefined, "to save (energy)", "risparmiare (energia)", "সাশ্রয় করা (শক্তি)", "Man kann viel Energie sparen.", "umwelt", 3),

  // --- Meinung und Gefühle ---------------------------------------------
  w("Meinung", "die", "opinion", "opinione", "মতামত", "Meiner Meinung nach ist das zu teuer.", "gefuehle", 1),
  w("Vorschlag", "der", "suggestion", "proposta", "প্রস্তাব", "Ich habe einen Vorschlag.", "gefuehle", 1, "die Vorschläge"),
  w("Grund", "der", "reason", "motivo", "কারণ", "Der Grund für die Verspätung war ein Unfall.", "gefuehle", 1, "die Gründe"),
  w("Sorge", "die", "worry", "preoccupazione", "দুশ্চিন্তা", "Machen Sie sich keine Sorgen.", "gefuehle", 2),
  w("enttäuscht", undefined, "disappointed", "deluso", "হতাশ", "Ich war ein bisschen enttäuscht.", "gefuehle", 2),
  w("zufrieden", undefined, "satisfied", "soddisfatto", "সন্তুষ্ট", "Mit dem Kurs bin ich sehr zufrieden.", "gefuehle", 1),
  w("aufgeregt", undefined, "excited, nervous", "emozionato, agitato", "উত্তেজিত", "Vor der Prüfung bin ich immer aufgeregt.", "gefuehle", 2),
  w("sich freuen auf", undefined, "to look forward to", "non vedere l'ora di", "অপেক্ষায় থাকা", "Ich freue mich auf das Wochenende.", "gefuehle", 1),
  w("sich ärgern über", undefined, "to be annoyed about", "arrabbiarsi per", "বিরক্ত হওয়া", "Ich ärgere mich über den Lärm.", "gefuehle", 2),
  w("sich beschweren", undefined, "to complain", "lamentarsi", "অভিযোগ করা", "Ich möchte mich über die Heizung beschweren.", "gefuehle", 1),

  // --- Wichtige Verben --------------------------------------------------
  w("erklären", undefined, "to explain", "spiegare", "ব্যাখ্যা করা", "Können Sie mir das bitte erklären?", "verben", 1),
  w("mitteilen", undefined, "to inform, to let know", "comunicare", "জানানো", "Bitte teilen Sie mir den Termin mit.", "verben", 1),
  w("bitten um", undefined, "to ask for", "chiedere", "অনুরোধ করা", "Ich bitte Sie um eine kurze Antwort.", "verben", 1),
  w("sorgen für", undefined, "to see to, ensure", "provvedere a", "নিশ্চিত করা", "Bitte sorgen Sie dafür, dass jemand da ist.", "verben", 2),
  w("stattfinden", undefined, "to take place", "aver luogo", "অনুষ্ঠিত হওয়া", "Der Kurs findet jeden Dienstag statt.", "verben", 1),
  w("ausfallen", undefined, "to be cancelled", "essere annullato", "বাতিল হওয়া", "Der Unterricht fällt heute aus.", "verben", 1),
  w("sich kümmern um", undefined, "to take care of", "occuparsi di", "দেখাশোনা করা", "Meine Schwester kümmert sich um die Kinder.", "verben", 1),
  w("achten auf", undefined, "to pay attention to", "fare attenzione a", "খেয়াল রাখা", "Achten Sie auf Ihr Gepäck.", "verben", 1),
  w("verzichten auf", undefined, "to do without", "rinunciare a", "ছাড়া চলা", "Ich verzichte auf das Auto.", "verben", 3),
  w("empfehlen", undefined, "to recommend", "consigliare", "সুপারিশ করা", "Ein Freund hat mir diesen Kurs empfohlen.", "verben", 1),
  w("erreichen", undefined, "to reach", "raggiungere", "পৌঁছানো", "Sie erreichen mich am besten abends.", "verben", 1),
  w("vermeiden", undefined, "to avoid", "evitare", "এড়িয়ে চলা", "So kann man Fehler vermeiden.", "verben", 2),
  w("entstehen", undefined, "to arise, to be incurred", "sorgere", "তৈরি হওয়া", "Falls Kosten entstehen, sagen Sie mir bitte Bescheid.", "verben", 2),
  w("berücksichtigen", undefined, "to take into account", "tenere conto di", "বিবেচনায় নেওয়া", "Wir berücksichtigen Ihren Wunsch.", "verben", 3),

  // --- Konnektoren und Wendungen ---------------------------------------
  w("deshalb", undefined, "therefore, that is why", "perciò", "সেজন্য", "Der Bus war weg, deshalb kam ich zu spät.", "konnektoren", 1),
  w("trotzdem", undefined, "nevertheless", "nonostante ciò", "তবুও", "Es hat geregnet, trotzdem sind wir gelaufen.", "konnektoren", 1),
  w("obwohl", undefined, "although", "benché", "যদিও", "Obwohl ich müde war, habe ich gelernt.", "konnektoren", 1),
  w("damit", undefined, "so that", "affinché", "যাতে", "Ich lerne viel, damit ich die Prüfung bestehe.", "konnektoren", 1),
  w("außerdem", undefined, "besides, in addition", "inoltre", "এছাড়াও", "Die Wohnung ist klein. Außerdem ist sie teuer.", "konnektoren", 1),
  w("allerdings", undefined, "however", "tuttavia", "তবে", "Das Angebot ist gut, allerdings nur bis Freitag.", "konnektoren", 2),
  w("falls", undefined, "in case, if", "nel caso in cui", "যদি", "Falls es regnet, bleiben wir zu Hause.", "konnektoren", 1),
  w("sobald", undefined, "as soon as", "non appena", "যেই মাত্র", "Ich rufe an, sobald ich zu Hause bin.", "konnektoren", 2),
  w("im Voraus", undefined, "in advance", "in anticipo", "আগে থেকেই", "Vielen Dank im Voraus.", "konnektoren", 1),
  w("in der Regel", undefined, "as a rule, normally", "di norma", "সাধারণত", "In der Regel dauert das drei Wochen.", "konnektoren", 2),
  w("zum Beispiel", undefined, "for example", "per esempio", "উদাহরণস্বরূপ", "Ich mache Sport, zum Beispiel schwimmen.", "konnektoren", 1),
  w("meiner Meinung nach", undefined, "in my opinion", "secondo me", "আমার মতে", "Meiner Meinung nach ist das keine gute Idee.", "konnektoren", 1),
  w("es geht um", undefined, "it is about", "si tratta di", "এটি সম্পর্কে", "In dem Text geht es um die Ausbildung.", "konnektoren", 1),
  w("Bescheid geben", undefined, "to let someone know", "far sapere", "জানিয়ে দেওয়া", "Geben Sie mir bitte bis Freitag Bescheid.", "konnektoren", 1),
];
