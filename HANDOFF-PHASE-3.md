# Phase 3 handoff — grammar system

**State: content and logic are complete. The UI pages and the translation
keys are not. `npm run build` FAILS right now** — every `t.gram.*` reference
below does not exist yet. Task 1 fixes that. Do Task 1 first.

---

## What already exists (do not rewrite these)

| File | What it is |
|---|---|
| `supabase/migrations/0004_grammatik.sql` | **Not yet run.** See Task 0. |
| `src/content/grammatik/types.ts` | Payload types + authoring helpers `mc() gap() article() truefalse() order()` |
| `src/content/grammatik/artikel.ts` | Full lesson: der/die/das system |
| `src/content/grammatik/kasus-akkusativ.ts` | Full lesson |
| `src/content/grammatik/kasus-dativ.ts` | Full lesson |
| `src/content/grammatik/wechselpraepositionen.ts` | Full lesson |
| `src/content/grammatik/artikel-nomen.ts` | 110 nouns + `ARTICLE_RULES` for the trainer |
| `src/content/grammatik/index.ts` | `LESSONS`, `getLesson()`, `lessonSummaries()`, `nextLesson()`, `practiceSet()`, `findExercise()`, `lessonOfExercise()` |
| `src/app/(b1)/grammatik/actions.ts` | `gradeExercise()`, `finishQuickTest()`, `markLessonRead()`, `answerArticle()`, `pickTrainerWords()` |
| `src/components/grammatik/exercise-runner.tsx` | Client. Runs any `Exercise[]`, grades server-side, writes to Mistake Bank |
| `src/components/grammatik/article-trainer.tsx` | Client. der/die/das drill with streak |
| `src/components/grammatik/lesson-view.tsx` | Server component. Renders a whole `GrammarLesson` from data |

Architecture rules this project follows — keep them:

- **Content is data, never JSX.** A new lesson is a new file in
  `src/content/grammatik/`, added to `LESSONS` in `index.ts`. Never hardcode
  German text inside a component.
- **Every explanation is a `Multi`** (`{de?, en, it, bn}`) and is read with
  `pick(value, explainLang)`. `bn` must be real Bengali script.
- **Answers are graded on the server.** The client sends an exercise id and
  what the user chose; `gradeExercise` looks the answer up again. Never send
  `exercise.answer` to the browser before it has been answered.
- **A `CheatCode` must always render its `counterExample`** and the
  `<ShortcutBadge />`. A memory trick may never look like a grammar rule.
- No dark mode. Light beige only. Colours come from the tokens in
  `globals.css` (`parchment, surface, surface-2, line, ink, ink-soft,
  ink-faint, iris, sage, clay, amber` + their `-soft` variants).
- Tailwind 4 with `@theme` tokens. UI primitives live in
  `src/components/ui/` (`Card, CardBody, CardTitle, Button, Badge,
  ShortcutBadge, SkillBar`). Use them, don't invent new ones.
- Next.js 16 App Router. `middleware.ts` is called `src/proxy.ts` here.

---

## Task 0 — run the migration (2 minutes, do it manually)

Open the Supabase dashboard → project **Telc-b1** → SQL Editor → New query.
Paste the whole of `supabase/migrations/0004_grammatik.sql` and press Run.
It is additive; the only structural change makes `attempts.exercise_id`
nullable. Nothing is deleted.

---

## Task 1 — translation keys (REQUIRED, unblocks the build)

### 1a. Add this to `Dict` in `src/lib/i18n/shape.ts`

Put it after the `schreiben` block:

```ts
  gram: {
    title: string;
    sub: string;
    weight: string;
    lessonTab: string;
    practiceTab: string;
    testTab: string;
    startLesson: string;
    continueLesson: string;
    mastered: string;
    notStarted: string;
    exercises: string;
    // lesson-view.tsx
    telcRelevance: string;
    whatIsIt: string;
    whyNeeded: string;
    inShort: string;
    pattern: string;
    compareTitle: string;
    compareSub: string;
    tablesTitle: string;
    tablesSub: string;
    tricksTitle: string;
    tricksSub: string;
    mistakesTitle: string;
    mistakesSub: string;
    butNot: string;
    examTip: string;
    // exercise-runner.tsx
    finished: string;
    again: string;
    seeResult: string;
    tapWords: string;
    reset: string;
    // article-trainer.tsx
    trainerTitle: string;
    trainerSub: string;
    trainerCta: string;
    trainerDone: string;
    trainerDoneNote: string;
    bestStreak: string;
    level: string;
  };
```

### 1b. Implement it in all four of `en.ts`, `de.ts`, `it.ts`, `bn.ts`

TypeScript will list every missing key, so work through the errors. The
files are `src/lib/i18n/{en,de,it,bn}.ts`. **`bn.ts` must be real Bengali
script**, matching the tone of what is already in that file — plain,
warm, no jargon. Reference meanings:

- `title` "Grammar" · `sub` "The rules that actually cost points in the exam."
- `weight` "telc weight" · `lessonTab` "Lesson" · `practiceTab` "Practice" · `testTab` "Quick test"
- `startLesson` "Start" · `continueLesson` "Continue" · `mastered` "Mastered" · `notStarted` "Not started" · `exercises` "exercises"
- `telcRelevance` "Why this matters for telc" · `whatIsIt` "What it is" · `whyNeeded` "Why you need it"
- `inShort` "In short" · `pattern` "The pattern"
- `compareTitle` "Compare & remember" · `compareSub` "The same idea in German, English, Italian and Bengali — and why they differ."
- `tablesTitle` "Tables" · `tablesSub` "Read them down the columns, not across."
- `tricksTitle` "Memory tricks & cheat codes" · `tricksSub` "Shortcuts that make this faster. Each one also shows where it breaks."
- `mistakesTitle` "Common mistakes" · `mistakesSub` "The errors that cost the most points in the writing task."
- `butNot` "But not here" · `examTip` "In the exam"
- `finished` "Done" · `again` "Again" · `seeResult` "See result" · `tapWords` "Tap the words in the right order" · `reset` "Clear"
- `trainerTitle` "Article trainer" · `trainerSub` "der, die, das — one word at a time. Weakest words come back first."
- `trainerCta` "Start the trainer" · `trainerDone` "Round finished"
- `trainerDoneNote` "Words you got wrong will come back sooner next time."
- `bestStreak` "Best streak" · `level` "Level"

---

## Task 2 — three pages

### 2a. `src/app/(b1)/grammatik/page.tsx` — replace the `ComingSoon` stub

Server component. Copy the structural style of
`src/app/(b1)/schreiben/page.tsx` (read it first).

- `const { lang, t } = await getI18n();` then `const explainLang = lang as Lang;`
- `lessonSummaries()` for the list.
- Load progress: `supabase.from("grammar_progress").select("topic_slug, lesson_read, best_test, mastered").eq("user_id", user.id)` — build a `Map`.
- One `<Card>` per lesson linking to `/grammatik/${slug}`. Show
  `pick(title, explainLang)`, `pick(telcRelevance, explainLang)`,
  `exerciseCount`, a `telcWeight` badge (3 = `tone="clay"`, 2 = `"iris"`,
  1 = `"neutral"`), and a state badge (`mastered` → sage, `lesson_read` →
  iris, else `notStarted`).
- Above the list, one highlighted card linking to
  `/grammatik/artikel-trainer` using `trainerTitle` / `trainerSub` /
  `trainerCta`.
- Apply `className={cn(..., lang === "bn" && "bn")}` to any element showing
  translated (non-German) text. The `bn` class loads the Bengali font.

### 2b. `src/app/(b1)/grammatik/[slug]/page.tsx`

```ts
export async function generateStaticParams() {
  return LESSONS.map((l) => ({ slug: l.slug }));
}
```

`const lesson = getLesson(slug); if (!lesson) notFound();`

Three views selected by a `?tab=` search param (`params` and `searchParams`
are Promises in Next 16 — `await` them):

- `tab` unset or `lesson` → `<LessonView lesson={lesson} explainLang={explainLang} t={t} />`
- `tab=practice` → `<ExerciseRunner exercises={practiceSet(lesson)} explainLang={explainLang} mode="practice" />`
- `tab=test` → `<ExerciseRunner exercises={lesson.quickTest} explainLang={explainLang} mode="exam" onFinish={...} />`

`onFinish` is a function prop, so the `test` tab needs a small client
wrapper — `src/components/grammatik/quick-test.tsx`, `"use client"`, which
renders `ExerciseRunner` and calls
`finishQuickTest(lesson.slug, score, total)` in `onFinish`.

Render the three tabs as `<Link>`s styled like segmented buttons, plus a
back link to `/grammatik` (copy the back-link markup from
`src/app/(b1)/schreiben/[code]/page.tsx`). At the bottom of the lesson tab,
link to `nextLesson(slug)` if there is one.

Call `markLessonRead(slug)` when the lesson tab renders — do it from a tiny
client component with a `useEffect`, not during render (a Server Component
must not write during render).

### 2c. `src/app/(b1)/grammatik/artikel-trainer/page.tsx`

```ts
const picked = await pickTrainerWords(20);
const words = picked
  .map((w) => TRAINER_WORDS.find((x) => x.de === w))
  .filter((w): w is TrainerNoun => Boolean(w));
```

Then `<ArticleTrainer words={words} explainLang={explainLang} />`.
Add `export const dynamic = "force-dynamic";` — the word list is personal
and must not be cached.

### 2d. `src/components/shell/nav-items.ts`

Change the grammar row to `ready: true` and delete its `phase: 3`.

---

## Task 3 — verify

```bash
npm run lint
npm run build
```

Both must be clean. Known lint rule in this project:
`react-hooks/set-state-in-effect` — never call `setState` directly in an
effect body; put it inside a `setTimeout`/`setInterval`/event callback.

Then check by hand, signed in:

1. `/grammatik` lists four lessons.
2. Open **Artikel** → the memory-trick cards show the amber
   "Merkhilfe — nicht die ganze Regel" badge **and** a "But not here" box.
3. Practice tab: answer one wrong on purpose → the explanation appears in
   your chosen interface language → that mistake shows up in `/fehler`.
4. Quick test: finish it → reload `/grammatik` → the lesson shows a state badge.
5. `/grammatik/artikel-trainer`: answer a few, get one wrong, finish the
   round, start again → the word you got wrong should reappear.
6. Switch the interface language to **বাংলা** and reload a lesson — all
   explanations must be Bengali and render in the Noto Sans Bengali face
   (conjuncts joined, not boxes).

---

## Then: Phase 3b — Sprachbausteine (not started)

telc B1 Sprachbausteine facts, already verified — do not change these:
30 points, 20 items, 2 parts. **Teil 1** = 10 gaps, 3 options each,
grammar-focused. **Teil 2** = 10 gaps chosen from a bank of 15 words,
vocabulary and set phrases. Lesen + Sprachbausteine share one self-paced
90-minute block.

Build it as:
- `src/content/sprachbausteine/types.ts` + one file per test set
- Reuse `ExerciseRunner` for Teil 1; Teil 2 needs a new word-bank component
- New route `src/app/(b1)/sprachbausteine/`
- Same rules: content is data, four languages, mistakes go to the Mistake Bank

## Remaining phases

- **Phase 4** — vocabulary + spaced repetition + AI tutor
- **Phase 5** — Lesen with clickable word translation + 3 full mock exams
- **Phase 6** — study plan, adaptivity, progress dashboard, deploy to Vercel
- **Phase 7** — Hören, more A0 lessons, Sprechen, admin

**Exam date: November 2026. Schreiben is the priority section.**
telc B1: 225 written points, 135 to pass (60%), no compensation between the
written and oral parts. These numbers are in `src/lib/exam.ts` — they are
verified, don't change them.
