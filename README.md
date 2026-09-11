# Deutsch B1 — Setup

Your personal German learning platform. This file gets it running on your
laptop. Follow it top to bottom; it takes about 15 minutes.

You do **not** need to write any code. Everything below is copy, paste, click.

---

## Step 1 — Open a terminal in the project folder

1. Open **File Explorer** and go to `Desktop\Works\deutsch-b1`
2. Click once in the **address bar** at the top (where the folder path is)
3. Type `cmd` and press **Enter**

A black terminal window opens, already inside the project folder. Every
command in this file goes in that window.

> If you prefer VS Code: open the `deutsch-b1` folder, then
> **Terminal → New Terminal**. Same thing.

---

## Step 2 — Install the code libraries

```
npm install
```

This downloads everything the app needs into a `node_modules` folder.
It takes 1–3 minutes and prints a lot of text. Warnings are normal;
only stop if you see the word `ERR!`.

---

## Step 3 — Create the Supabase project

Supabase is the database **and** the login system.

1. Go to <https://supabase.com> and sign in
2. Click **New project**
3. Name: `deutsch-b1`
4. **Database Password** — invent a strong one and **save it somewhere**;
   you will not be shown it again (you won't need it day to day)
5. Region: **Frankfurt (eu-central-1)** — closest to you, so the app feels faster
6. Click **Create new project**, then wait ~2 minutes while it sets up

---

## Step 4 — Create the database tables

1. In your Supabase project, click **SQL Editor** in the left sidebar
2. Click **New query**
3. Open the file `supabase/migrations/0001_init.sql` from this project
   (in VS Code, or Notepad) and **copy the entire contents**
4. Paste it into the SQL Editor
5. Click **Run** (or press Ctrl+Enter)

You should see **Success. No rows returned.** That is what success looks like
here — it created tables, it didn't fetch any.

> Run it once. If you run it a second time you'll get "already exists" errors,
> which are harmless but mean nothing new happened.

---

## Step 5 — Turn off email confirmation

For your personal version, you want to register and be straight in.

1. Supabase sidebar → **Authentication** → **Sign In / Providers**
2. Find **Email**
3. Turn **Confirm email** **OFF**
4. Save

The app is built so you can turn this back on later without any code change.

---

## Step 6 — Copy your keys into the project

1. Supabase sidebar → **Project Settings** (the gear) → **API Keys**
2. You need two values from that page:
   - **Project URL** — looks like `https://abcdefgh.supabase.co`
   - **anon / public key** — a long string starting with `eyJ...`

Now create the file that holds them. **I could not create this file for you** —
files containing secrets are blocked from being written remotely, which is the
correct behaviour. It takes 30 seconds by hand.

In the terminal from Step 1, run this **one line** to create the file:

```
copy nul .env.local
```

Then open it in VS Code (or Notepad) and paste in these three lines, replacing
the placeholder values with yours:

```
NEXT_PUBLIC_SUPABASE_URL=https://abcdefgh.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOi...your-long-key...
OPENAI_API_KEY=sk-put-this-in-later
```

The filename must be exactly `.env.local` — starting with a dot, and with no
`.txt` on the end. (Windows Explorer hides extensions by default; if you made
the file by right-clicking, check **View → File name extensions** to be sure.)

**About the OpenAI key:** you don't need it yet — nothing in Phase 1 uses it.
Leave the line there with a placeholder. It becomes necessary in Phase 2, for
the writing feedback and the tutor.

**Two safety notes:**

- The `anon` key is *designed* to be public — it's safe in the browser, because
  the database's Row Level Security rules are what actually protect your data.
- Never put the **service_role** key in this file. That one bypasses all
  security. If Supabase shows it to you, ignore it.
- `.env.local` is already in `.gitignore`, so your keys will never be uploaded
  to GitHub.

---

## Step 7 — Start the app

```
npm run dev
```

Wait for `Ready in ...`, then open <http://localhost:3000> in your browser.

- The homepage should appear in warm beige.
- Click **Kostenlos starten** and register with any email and a password of at
  least 8 characters.
- You land on the dashboard. Enter your exam date and the countdown starts.

To stop the server, click in the terminal and press **Ctrl+C**.
To start it again another day: open the terminal in the folder and run
`npm run dev` again. That's the only command you need day to day.

---

## If something goes wrong

| What you see | What it means | Fix |
|---|---|---|
| `'npm' is not recognized` | Node.js isn't installed or the terminal was open before you installed it | Install Node LTS from nodejs.org, then close and reopen the terminal |
| `Invalid supabase URL` / `Failed to fetch` | `.env.local` is missing, misnamed, or has a typo | Check the filename is exactly `.env.local`; restart `npm run dev` after any change to it |
| Register works but nothing happens | Email confirmation is still on | Redo Step 5 |
| `relation "profiles" does not exist` | The SQL from Step 4 didn't run | Redo Step 4 |
| Fonts look wrong / plain | The build couldn't reach Google Fonts | Check your internet connection, then stop and restart `npm run dev` |
| Port 3000 already in use | The app is already running in another terminal | Close the other terminal, or run `npm run dev -- -p 3001` |

**Changes to `.env.local` only take effect after restarting `npm run dev`.**

---

## Updating an existing install

If you already have this running and are applying a newer version:

1. Copy the new files over the folder (keep your `.env.local` — it is not
   included in updates).
2. Run any migration in `supabase/migrations/` you have not run yet, in
   number order, the same way as Step 4. **Right now that means `0003`.**
3. Run `npm install` again (only needed if `package.json` changed).
4. Restart `npm run dev`.

---

## What exists right now

**Phase 1 — foundation**

- Homepage, register, login, logout, password reset
- The database: all content and progress tables, with Row Level Security
- App shell: sidebar on desktop, bottom tab bar on phone
- Dashboard: exam countdown, skill bars, counters, exam structure reference
- The design system: warm beige, iris accent, Bengali font support

**Interface languages — German, English, Italian, Bengali**

The whole interface switches language from the picker in the top bar. Your
choice is stored in a cookie (so it works before you sign in) and on your
profile (so it follows you to your phone).

One deliberate distinction: the **interface** language is separate from the
**explanation** language. The German being taught always stays German — only
the words around it change. Bengali gets its own font (Noto Sans Bengali),
because the system fallback renders conjuncts badly.

**A0 beginner course — `/anfaenger`**

A separate, much simpler course for a complete beginner, with its own
navigation (four items, not thirteen). Four full lessons are written:

1. **Begrüßung** — greetings, and du vs. Sie compared with তুমি/আপনি and tu/Lei
2. **Alphabet und Aussprache** — ä ö ü ß, the v/w trap, ei vs. ie
3. **Zahlen** — 0–100, and why German says "one-and-twenty" like Bengali does
4. **Sich vorstellen** — the verb *sein*, and why *Ich habe 20 Jahre* is wrong

Each lesson ends with a quick check that explains every answer, marks the
lesson done, and feeds the mixed practice page. The word list lets the learner
tick off words they know.

Every other B1 section shows a placeholder saying which phase it arrives in.
That's deliberate — an empty page that explains itself beats a broken link.

**Phase 2 — the Schreiben trainer and the Mistake Bank**

Eight original writing tasks in the telc B1 format at `/schreiben`. Each one
gives you a timed editor with the four Leitpunkte pinned beside the text box,
a live word count, and an autosaving draft. Submit, and about twenty seconds
later you get:

- a score out of 45 broken down by the four telc criteria
- each of the four Leitpunkte checked individually
- every mistake as *original → corrected → why*, explained in your language
- your own letter rewritten at solid B1
- the model answer, with notes on why it works

Every correction files itself into `/fehler`, the Mistake Bank, grouped by
type. Because a repeat of the same mistake lands on the same row, the page
can tell you what you get wrong **repeatedly** — not just that you got
something wrong once.

**This needs the OpenAI key.** See below.

**Next: Phase 3 — grammar lessons, the article trainer, and Sprachbausteine.**

---

## Deploying the app

The hosting provider must have these environment variables configured before
the first deploy. Copy the values from Supabase Project Settings → API:

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

For the tutor and writing feedback, also add one server-only AI key:

```
OPENAI_API_KEY=your-key
```

Gemini, Groq, OpenRouter and OpenAI keys are supported. After adding or
changing variables, redeploy; changing them in the hosting dashboard does not
update an already-built deployment automatically. Never add a `service_role`
key or an AI key to a `NEXT_PUBLIC_` variable.

## Setting up the AI key (needed from Phase 2 on)

The app works with **four** services and picks the right one automatically
from your key's prefix. You paste a key; you configure nothing else.

| Key starts with | Service | Free? | Get a key |
|---|---|---|---|
| `AIza` | **Google Gemini** | **Yes — recommended** | <https://aistudio.google.com/apikey> |
| `gsk_` | **Groq** | Yes | <https://console.groq.com/keys> |
| `sk-or-` | OpenRouter | Mostly paid | <https://openrouter.ai/keys> |
| `sk-` / `sk-proj-` | OpenAI | No | <https://platform.openai.com/api-keys> |

### If you want it free

**Use Google Gemini.** Its free tier runs a proper modern model, which
matters here — this app is correcting your German, and a weak model gets
grammar wrong confidently.

1. Go to <https://aistudio.google.com/apikey>, sign in with a Google
   account, click **Create API key**. No card required.
2. Put it in `.env.local` on one line — no quotes, no spaces round the `=`:
   ```
   OPENAI_API_KEY=AIza...your-key...
   ```
   (The variable stays `OPENAI_API_KEY` whichever service you use.
   `GEMINI_API_KEY`, `GROQ_API_KEY` and `OPENROUTER_API_KEY` also work.)
3. Restart `npm run dev`. Env files are only read at startup.

**Groq** is the other good free option — extremely fast, running open models
like Llama. Weaker than Gemini on the fine points of German, but free and
quick. Same steps, key starts with `gsk_`.

**OpenRouter's free models** (ids ending `:free`) are not worth it for this:
they are either very small or tuned for other domains, and they will produce
wrong German corrections.

### Free tiers have limits

Expect roughly a few requests per minute and a few hundred to a thousand per
day. That is plenty for exam practice — you are writing one letter at a time,
not a thousand. If you hit the limit the app says so plainly; wait a minute.

### Check your key without guessing

```
npm run check-ai
```

That prints which provider your key belongs to, whether it works, whether
your configured model exists, and the models you can actually use. It never
prints your key.

### Choosing a model

Model names change often and each service names them differently, so the
built-in defaults are only a starting guess. If the app says the model was
not found, run `npm run check-ai`, pick one from the list, and add it:

```
OPENAI_MODEL=gemini-3.8-flash
```

Then restart the dev server.

### One honest warning about free models

Smaller and cheaper models get German grammar wrong more often — and they
state the wrong thing with the same confidence as the right thing. The app
tells the model never to invent a rule and never to "correct" correct German,
which helps, but does not make it certain.

So: **treat a surprising correction as a question, not a verdict.** If the
app corrects something and the reason does not make sense to you, check it
against a lesson or ask your teacher before you learn it. That habit is worth
having whichever model you use.

If you later want to pay: about **2–5 cents** a correction on OpenAI or
OpenRouter, so a hundred corrected letters costs a few euros. Set a spending
limit first — OpenRouter is prepaid credit, OpenAI has limits under
Settings → Limits.

---

## Project structure

```
src/app/(auth)/       login, register, password reset
src/app/(b1)/         the B1 learning app — dashboard and sections
src/app/(a0)/         the beginner course — its own layout and navigation
src/components/       ui/ · shell/ (nav) · a0/ · i18n/ · dashboard/
src/lib/i18n/         one file per interface language + the shared shape
src/lib/              supabase/ · types.ts · exam.ts (telc scoring)
src/content/a0/       the beginner lessons, as data
supabase/migrations/  the database schema, in number order
```

**Adding a beginner lesson:** write one file in `src/content/a0/`, add it to
the array in `src/content/a0/index.ts`. It then appears in the lesson list,
the dashboard, the progress count, the word list and the practice deck — with
no other change anywhere.

**Adding an interface language:** copy `src/lib/i18n/en.ts`, translate the
values, and add it to `DICTS`. TypeScript will refuse to build until every
key is translated, so a half-finished language can't ship by accident.

The rule that keeps this maintainable: **no German lesson is ever written
inside a React component.** Lessons, words, exercises and writing tasks are
data objects; the UI just renders them. That's what lets content be added
later without touching the app.

---

## A note on the practice material

Everything in this app is **original material written in the telc B1 format**.
It is not licensed telc content and is never presented as an official telc
exam question. Exam figures (225 written points, 135 to pass, section
timings) were checked against published format descriptions in September 2026
— confirm the current format and your exam date with your test centre.
