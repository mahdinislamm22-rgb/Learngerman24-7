"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n/provider";

type Section = "vocab" | "reading" | "langElements" | "listening" | "exams" | "review" | "progress" | "plan";
type VocabItem = { word: string; article: string; meaning: string; example: string };
type PracticeItem = { prompt: string; options: string[]; answer: string; explanation: string };

const VOCAB: VocabItem[] = [
  { word: "die Voraussetzung", article: "die", meaning: "requirement", example: "Gute Deutschkenntnisse sind eine wichtige Voraussetzung für die Prüfung." },
  { word: "sich entscheiden für", article: "", meaning: "to decide in favour of", example: "Ich habe mich für einen Intensivkurs entschieden." },
  { word: "zuverlässig", article: "", meaning: "reliable", example: "Meine Lernpartnerin ist sehr zuverlässig." },
  { word: "die Rücksicht", article: "die", meaning: "consideration", example: "Bitte nehmen Sie Rücksicht auf die anderen Kursteilnehmer." },
  { word: "bewältigen", article: "", meaning: "to manage / cope with", example: "Mit einem Lernplan kann ich die Prüfung bewältigen." },
  { word: "der Fortschritt", article: "der", meaning: "progress", example: "Ich sehe jede Woche kleine Fortschritte." },
];

const READING = {
  title: "Mehr Fahrräder für die Stadt",
  body: "Viele Menschen fahren in der Stadt mit dem Fahrrad zur Arbeit. Trotzdem fühlen sich manche Radfahrer im Verkehr unsicher. Die Stadt plant deshalb neue Fahrradwege und sichere Abstellplätze. Die Bauarbeiten sollen im Herbst beginnen. Einige Geschäftsleute befürchten allerdings, dass während der Bauzeit weniger Kunden kommen.",
  questions: [
    { prompt: "Warum plant die Stadt neue Fahrradwege?", options: ["Weil viele Radfahrer sich unsicher fühlen.", "Weil die Geschäfte schließen.", "Weil die Bauarbeiten schon fertig sind."], answer: "Weil viele Radfahrer sich unsicher fühlen.", explanation: "Im Text steht, dass sich manche Radfahrer im Verkehr unsicher fühlen." },
    { prompt: "Wann sollen die Bauarbeiten beginnen?", options: ["Im Sommer", "Im Herbst", "Im Winter"], answer: "Im Herbst", explanation: "Der Text sagt: Die Bauarbeiten sollen im Herbst beginnen." },
  ],
};

const LANG_ITEMS: PracticeItem[] = [
  { prompt: "Ich bleibe zu Hause, ___ ich krank bin.", options: ["weil", "obwohl", "deshalb"], answer: "weil", explanation: "Nach weil steht das konjugierte Verb am Ende: weil ich krank bin." },
  { prompt: "Könnten Sie mir bitte ___ Termin bestätigen?", options: ["den", "dem", "der"], answer: "den", explanation: "Bestätigen nimmt hier ein Akkusativobjekt: den Termin." },
  { prompt: "Wir warten ___ den Bus.", options: ["auf", "mit", "bei"], answer: "auf", explanation: "Die feste Verbindung lautet auf jemanden oder etwas warten." },
  { prompt: "Obwohl es regnet, ___ wir spazieren.", options: ["gehen", "geht", "ging"], answer: "gehen", explanation: "Das Subjekt wir braucht die Verbform gehen." },
];

const LISTENING_TEXT = "Guten Morgen. Der Zug nach Berlin fährt heute nicht von Gleis vier, sondern von Gleis sieben ab. Bitte beachten Sie, dass sich die Abfahrt um zehn Minuten verspätet.";
const PLAN = [
  ["10 min", "Wiederhole 6 neue Wörter", "/vokabeln"],
  ["15 min", "Lies einen kurzen Text und beantworte die Fragen", "/lesen"],
  ["10 min", "Übe Sprachbausteine", "/sprachbausteine"],
  ["15 min", "Bearbeite eine Aufgabe im Mock-Exam", "/pruefungen"],
] as const;

function useStoredNumber(key: string) {
  const [value, setValue] = useState(() =>
    typeof window === "undefined" ? 0 : Number(window.localStorage.getItem(key) ?? 0),
  );
  function increment() {
    setValue((current) => {
      const next = current + 1;
      window.localStorage.setItem(key, String(next));
      return next;
    });
  }
  return [value, increment] as const;
}

export function PhaseHub({ section }: { section: Section }) {
  const { t } = useI18n();
  const router = useRouter();
  const [completed, addCompleted] = useStoredNumber("deutsch-b1-completed");
  const [vocabIndex, setVocabIndex] = useState(0);
  const [showMeaning, setShowMeaning] = useState(false);
  const [readingIndex, setReadingIndex] = useState(0);
  const [langIndex, setLangIndex] = useState(0);
  const [selected, setSelected] = useState("");
  const [mockIndex, setMockIndex] = useState(0);
  const [planDone, setPlanDone] = useState<boolean[]>([false, false, false, false]);
  const [speaking, setSpeaking] = useState(false);

  const title = t.nav[section];
  const progress = Math.min(100, completed * 8);
  const vocab = VOCAB[vocabIndex];
  const readingQuestion = READING.questions[readingIndex];
  const langItem = LANG_ITEMS[langIndex];
  const mockItems = [...READING.questions, ...LANG_ITEMS];
  const mockItem = mockItems[mockIndex];

  function answer(correct: boolean) {
    if (correct) addCompleted();
    setSelected("");
  }

  function speak() {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(LISTENING_TEXT);
    utterance.lang = "de-DE";
    utterance.onend = () => setSpeaking(false);
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }

  if (section === "vocab") return <PageShell title={title} intro="Lerne wichtige B1-Wörter mit Beispielen und wiederhole sie aktiv."><Card><CardBody className="flex min-h-[260px] flex-col justify-between gap-6"><div className="flex items-center justify-between"><Badge tone="neutral">Wort {vocabIndex + 1} / {VOCAB.length}</Badge><span className="label">B1</span></div><button className="min-h-[150px] text-left" onClick={() => setShowMeaning(!showMeaning)}><p className="text-[30px] font-extrabold">{vocab.article} {vocab.word}</p><p className="mt-3 text-[16px] text-ink-soft">{showMeaning ? vocab.meaning : "Klicke, um die Bedeutung zu sehen"}</p>{showMeaning ? <p className="mt-3 border-l-2 border-iris pl-3 text-[15px] italic">{vocab.example}</p> : null}</button><div className="flex gap-2"><Button onClick={() => { setVocabIndex((vocabIndex + 1) % VOCAB.length); setShowMeaning(false); addCompleted(); }}>Ich kenne es</Button><Button variant="secondary" onClick={() => { setVocabIndex((vocabIndex + 1) % VOCAB.length); setShowMeaning(false); }}>Nochmal</Button></div></CardBody></Card></PageShell>;

  if (section === "reading") return <PageShell title={title} intro="Lies einen realistischen B1-Text und finde die wichtigsten Informationen."><Card><CardBody><Badge tone="neutral">Artikel · B1</Badge><CardTitle className="mt-3 text-[22px]">{READING.title}</CardTitle><p className="mt-4 leading-8 text-ink">{READING.body}</p></CardBody></Card><QuestionCard question={readingQuestion} onAnswer={(value) => { setSelected(value); answer(value === readingQuestion.answer); }} selected={selected} counter={`${readingIndex + 1} / ${READING.questions.length}`} onNext={() => { setReadingIndex((readingIndex + 1) % READING.questions.length); setSelected(""); }} /></PageShell>;

  if (section === "langElements") return <PageShell title={title} intro="Übe Konnektoren, Artikel, Präpositionen und Wortstellung wie in der Prüfung."><QuestionCard question={langItem} onAnswer={(value) => { setSelected(value); answer(value === langItem.answer); }} selected={selected} counter={`${langIndex + 1} / ${LANG_ITEMS.length}`} onNext={() => { setLangIndex((langIndex + 1) % LANG_ITEMS.length); setSelected(""); }} /></PageShell>;

  if (section === "listening") return <PageShell title={title} intro="Höre die Ansage zweimal und beantworte danach die Frage."><Card><CardBody><Badge tone="neutral">Ansage · B1</Badge><p className="mt-4 text-[18px] leading-8">{speaking ? "Die Ansage läuft ..." : "Drücke Start und höre gut zu."}</p><Button className="mt-5" onClick={speak} disabled={speaking}>{speaking ? "Wird abgespielt" : "Ansage abspielen"}</Button><p className="mt-5 text-[14px] text-ink-soft">Frage: Von welchem Gleis fährt der Zug ab?</p><div className="mt-3 flex flex-wrap gap-2">{["Gleis vier", "Gleis sieben", "Gleis zehn"].map((option) => <Button key={option} size="sm" variant="secondary" onClick={() => answer(option === "Gleis sieben")}>{option}</Button>)}</div></CardBody></Card></PageShell>;

  if (section === "exams") return <PageShell title={title} intro="Trainiere unter Zeitdruck mit einem kurzen Original-Übungstest."><Card><CardBody><div className="flex items-center justify-between"><Badge tone="neutral">Mini-Test</Badge><span className="label">Aufgabe {mockIndex + 1} / {mockItems.length}</span></div><p className="mt-6 text-[20px] font-semibold">{"prompt" in mockItem ? mockItem.prompt : ""}</p><div className="mt-5 flex flex-col gap-2">{mockItem.options.map((option) => <Button key={option} variant={selected === option ? "primary" : "secondary"} className="justify-start whitespace-normal text-left" onClick={() => { setSelected(option); answer(option === mockItem.answer); }}>{option}</Button>)}</div><Button className="mt-5" onClick={() => { setMockIndex((mockIndex + 1) % mockItems.length); setSelected(""); }}>Nächste Aufgabe</Button></CardBody></Card></PageShell>;

  if (section === "review") return <PageShell title={title} intro="Wiederhole heute Wörter, Fehler und Regeln, die du noch nicht sicher beherrschst."><div className="grid gap-3 sm:grid-cols-3"><Stat label="Heute bearbeitet" value={completed} /><Stat label="Wiederholungsstufe" value={completed > 10 ? "B1+" : "B1"} /><Stat label="Nächste Aufgabe" value="10 min" /></div><Card className="mt-4"><CardBody><CardTitle>Deine heutige Wiederholung</CardTitle><p className="mt-2 text-ink-soft">Beginne mit den Sprachbausteinen und wiederhole danach die neuen Wörter.</p><div className="mt-5 flex flex-wrap gap-2"><Button onClick={() => addCompleted()}>Wiederholung starten</Button><Button variant="secondary" onClick={() => router.push("/fehler")}>Meine Fehler öffnen</Button></div></CardBody></Card></PageShell>;

  if (section === "progress") return <PageShell title={title} intro="Verfolge deine Lernzeit und erkenne, wo du stärker wirst."><Card><CardBody><div className="flex items-end justify-between"><div><span className="label">Gesamtfortschritt</span><p className="mt-1 text-[38px] font-extrabold">{progress}%</p></div><span className="text-[14px] text-ink-soft">{completed} Übungen abgeschlossen</span></div><div className="mt-5 h-3 overflow-hidden rounded-full bg-surface-2"><div className="h-full rounded-full bg-iris transition-all" style={{ width: `${progress}%` }} /></div></CardBody></Card><div className="mt-4 grid gap-3 sm:grid-cols-2"><Stat label="Wortschatz" value={`${Math.min(100, completed * 12)}%`} /><Stat label="Lesen & Hören" value={`${Math.min(100, completed * 9)}%`} /><Stat label="Sprachbausteine" value={`${Math.min(100, completed * 10)}%`} /><Stat label="Prüfungsroutine" value={`${Math.min(100, completed * 7)}%`} /></div></PageShell>;

  return <PageShell title={title} intro="Ein klarer Tagesplan, der dich Schritt für Schritt zur B1-Prüfung bringt."><Card><CardBody><div className="flex items-center justify-between"><div><span className="label">Heute</span><CardTitle className="mt-1">Dein Lernplan</CardTitle></div><Badge tone="neutral">50 Minuten</Badge></div><div className="mt-5 flex flex-col gap-2">{PLAN.map(([time, task, href], index) => <div key={task} className="flex items-center gap-3 border-b border-line py-3 last:border-0"><button aria-label={task} className={`h-5 w-5 shrink-0 rounded border ${planDone[index] ? "border-iris bg-iris" : "border-line-strong"}`} onClick={() => setPlanDone((items) => items.map((done, i) => i === index ? !done : done))} /> <span className="w-12 text-[12px] text-ink-faint">{time}</span><a className="flex-1 text-[14px] font-semibold hover:text-iris" href={href}>{task}</a></div>)}</div></CardBody></Card></PageShell>;
}

function PageShell({ title, intro, children }: { title: string; intro: string; children: React.ReactNode }) {
  return <><h1 className="text-[28px] font-extrabold">{title}</h1><p className="mt-1 max-w-[62ch] text-[15px] text-ink-soft">{intro}</p><div className="mt-6">{children}</div></>;
}

function QuestionCard({ question, selected, onAnswer, counter, onNext }: { question: PracticeItem; selected: string; onAnswer: (value: string) => void; counter: string; onNext: () => void }) {
  const done = Boolean(selected);
  return <Card className="mt-4"><CardBody><div className="flex items-center justify-between"><Badge tone="neutral">{counter}</Badge><span className="label">Antwort wählen</span></div><p className="mt-5 text-[19px] font-semibold">{question.prompt}</p><div className="mt-5 flex flex-col gap-2">{question.options.map((option) => <Button key={option} variant={selected === option ? (option === question.answer ? "primary" : "danger") : "secondary"} className="justify-start whitespace-normal text-left" onClick={() => onAnswer(option)} disabled={done}>{option}</Button>)}</div>{done ? <div className="mt-5 border-l-2 border-iris pl-3 text-[14px] text-ink-soft"><strong>{selected === question.answer ? "Richtig. " : "Noch nicht. "}</strong>{question.explanation}<div><Button size="sm" className="mt-3" onClick={onNext}>Nächste Frage</Button></div></div> : null}</CardBody></Card>;
}

function Stat({ label, value }: { label: string; value: string | number }) { return <Card><CardBody><span className="label">{label}</span><p className="mt-1 text-[26px] font-extrabold">{value}</p></CardBody></Card>; }
