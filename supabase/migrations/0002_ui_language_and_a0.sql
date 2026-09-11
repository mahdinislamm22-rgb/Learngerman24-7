-- ============================================================================
-- 0002 — interface language + A0 beginner progress
--
-- Run this in the Supabase SQL Editor the same way as 0001.
-- Safe to run once; a second run reports "already exists", which is harmless.
-- ============================================================================

-- Which language the INTERFACE is shown in. Separate from
-- explanation_lang, which is the language grammar is explained in — a
-- learner may well want the app in English but explanations in Bangla.
alter table profiles
  add column if not exists ui_lang text not null default 'en'
    check (ui_lang in ('de','en','it','bn'));

-- ---------------------------------------------------------------------------
-- A0 beginner course progress
--
-- The A0 lessons themselves live in the codebase as data (src/content/a0),
-- not in the database — they change with the code and are the same for
-- everyone. Only the learner's progress through them is per-user.
-- ---------------------------------------------------------------------------

create table if not exists a0_progress (
  user_id      uuid not null references auth.users on delete cascade,
  lesson_slug  text not null,
  status       text not null default 'in_progress'
                check (status in ('in_progress','done')),
  score        int,                    -- correct answers in the quick check
  total        int,                    -- questions in the quick check
  started_at   timestamptz not null default now(),
  completed_at timestamptz,
  primary key (user_id, lesson_slug)
);

alter table a0_progress enable row level security;
drop policy if exists "own rows" on a0_progress;
create policy "own rows" on a0_progress for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- Words the beginner has marked as known, so the word list can show
-- progress without needing the full B1 spaced-repetition machinery yet.
create table if not exists a0_known_words (
  user_id  uuid not null references auth.users on delete cascade,
  word     text not null,
  known_at timestamptz not null default now(),
  primary key (user_id, word)
);

alter table a0_known_words enable row level security;
drop policy if exists "own rows" on a0_known_words;
create policy "own rows" on a0_known_words for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());
