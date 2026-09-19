# Deutsch B1

A German learning platform built around the telc Deutsch B1 exam: a beginner (A0)
course, a timed Schreiben trainer with graded feedback, a Mistake Bank that tracks
what you get wrong *repeatedly*, and a dashboard that counts down to your exam date.

The interface runs in German, English, Italian and Bengali. The German being taught
always stays German — only the words around it change.

**Stack:** Next.js · TypeScript · Supabase (Postgres + Auth + RLS) · Tailwind

---

## Requirements

- Node.js LTS
- A Supabase project (free tier is enough)
- Optionally, an AI provider key — needed only for the writing feedback and tutor

---

## Setup

### 1. Install

```bash
npm install
```

### 2. Create the database

In the Supabase dashboard → **SQL Editor** → **New query**, run the migrations in
`supabase/migrations/` in number order, one at a time. `Success. No rows returned.`
is what success looks like — they create tables, they don't select anything.

Each migration is idempotent enough to fail loudly rather than corrupt anything, but
run each one once.

### 3. Auth settings

**Authentication → Sign In / Providers → Email.** Turn **Confirm email** off for
local development so registration lands straight in the app. The code path is the
same either way, so it can be turned back on for production without a code change.

### 4. Environment

Create `.env.local` in the project root:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
OPENAI_API_KEY=your-ai-key        # optional, see "AI provider" below
```

Both Supabase values come from **Project Settings → API**.

The `anon` key is designed to be public — Row Level Security is what protects the
data, not key secrecy. The `service_role` key bypasses RLS entirely and must never
appear in this file, in a `NEXT_PUBLIC_` variable, or in the client bundle.

`.env.local` is gitignored. Env files are read at startup only, so restart the dev
server after changing one.

### 5. Run

```bash
npm run dev
```

http://localhost:3000

---

## AI provider

The Schreiben feedback and the tutor need a language model. Four services are
supported and the right one is selected automatically from the key prefix — paste a
key, configure nothing else.

| Prefix | Service | Free tier | Keys |
|---|---|---|---|
| `AIza` | Google Gemini | Yes — recommended | https://aistudio.google.com/apikey |
| `gsk_` | Groq | Yes | https://console.groq.com/keys |
| `sk-or-` | OpenRouter | Mostly paid | https://openrouter.ai/keys |
| `sk-` / `sk-proj-` | OpenAI | No | https://platform.openai.com/api-keys |

`OPENAI_API_KEY` is the variable name whichever service is used;
`GEMINI_API_KEY`, `GROQ_API_KEY` and `OPENROUTER_API_KEY` are also accepted.

### Verifying a key

```bash
npm run check-ai
```

Prints which provider the key belongs to, whether it authenticates, whether the
configured model exists, and which models are actually available. It never prints
the key itself.

### Choosing a model

Model names change often and each provider names them differently, so the built-in
defaults are a starting guess. If a model is reported as not found, run
`npm run check-ai`, pick one from the list, and set it:

```
OPENAI_MODEL=gemini-3.8-flash
```

### On model quality

Smaller and cheaper models get German grammar wrong more often, and state the wrong
thing as confidently as the right one. The system prompt forbids inventing rules and
forbids "correcting" correct German, which helps but does not make it certain.

Treat a surprising correction as a question, not a verdict. OpenRouter's `:free`
models in particular are not suitable here — they are small or tuned for other
domains and will produce wrong German corrections.

Free tiers run to roughly a few requests per minute and several hundred per day,
which is ample for exam practice. Paid usage costs roughly 2–5 cents per correction.

---

## Deploying

Set these in the hosting provider before the first deploy:

```
NEXT_PUBLIC_SUPABASE_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY
OPENAI_API_KEY          # server-only
```

Changing environment variables in a hosting dashboard does not rebuild an existing
deployment — redeploy after any change.

---

## Project structure

```
src/app/(auth)/       login, register, password reset
src/app/(b1)/         the B1 app — dashboard and sections
src/app/(a0)/         the beginner course — its own layout and navigation
src/components/       ui/ · shell/ (nav) · a0/ · i18n/ · dashboard/
src/lib/i18n/         one file per interface language + the shared shape
src/lib/              supabase/ · types.ts · exam.ts (telc scoring)
src/content/a0/       beginner lessons, as data
supabase/migrations/  database schema, in number order
```

### Architecture rules

**No German lesson is ever written inside a React component.** Lessons, words,
exercises and writing tasks are data objects; the UI renders them. This is what lets
content be added without touching the app.

**Adding a beginner lesson:** one file in `src/content/a0/`, added to the array in
`src/content/a0/index.ts`. It then appears in the lesson list, the dashboard, the
progress count, the word list and the practice deck with no other change.

**Adding an interface language:** copy `src/lib/i18n/en.ts`, translate the values,
add it to `DICTS`. TypeScript refuses to build until every key is translated, so a
half-finished language cannot ship by accident.

**Answers are graded on the server.** The client sends an exercise id and the chosen
answer; the server looks the answer up again. The correct answer is never sent to
the browser before the question has been answered.

---

## What's built

**Foundation** — auth (register, login, logout, password reset), the full schema
with Row Level Security, app shell (desktop sidebar / mobile tab bar), dashboard with
exam countdown, skill bars and the telc exam structure reference.

**Four interface languages** — switchable from the top bar, stored in a cookie
(so it works before sign-in) and on the profile (so it follows to another device).
Bengali ships with Noto Sans Bengali because system fallbacks render conjuncts badly.

**A0 beginner course** (`/anfaenger`) — four written lessons with their own simplified
navigation: Begrüßung (incl. du vs. Sie next to তুমি/আপনি and tu/Lei), Alphabet und
Aussprache, Zahlen, Sich vorstellen. Each ends with a check that explains every
answer and feeds the mixed practice page.

**Schreiben trainer** (`/schreiben`) — eight original tasks in telc B1 format. Timed
editor, the four Leitpunkte pinned beside the text box, live word count, autosaving
draft. On submit: a score out of 45 across the four telc criteria, each Leitpunkt
checked individually, every mistake as *original → corrected → why* in your chosen
language, your letter rewritten at solid B1, and the model answer with notes.

**Mistake Bank** (`/fehler`) — every correction files itself here, grouped by type.
Repeats land on the same row, so the page shows what you get wrong repeatedly rather
than just what you got wrong once.

**Grammar system** — lessons, exercise runner, and a der/die/das article trainer with
streak tracking. Content lives in `src/content/grammatik/`; every explanation is a
`{de?, en, it, bn}` object.

Sections not yet built show a placeholder naming what arrives there — an empty page
that explains itself beats a broken link.

---

## On the practice material

Everything here is **original material written in the telc B1 format**. It is not
licensed telc content and is never presented as an official telc exam question.

Exam figures (225 written points, 135 to pass, section timings) were checked against
published format descriptions in September 2026. Confirm the current format and your
exam date with your test centre.

---

## Licence

Code and content © Mahdin Islam Mohammed.
