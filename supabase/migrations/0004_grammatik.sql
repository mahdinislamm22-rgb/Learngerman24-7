-- ============================================================================
-- 0004 — Grammar lessons, exercises and the article trainer
--
-- Paste into the Supabase SQL Editor and Run, same as the earlier ones.
--
-- Nothing here deletes data. The one structural change makes an existing
-- column optional rather than dropping it.
-- ============================================================================

-- ---------------------------------------------------------------------------
-- attempts: exercises live in the codebase, not in the database
--
-- Migration 0001 pointed attempts.exercise_id at an `exercises` TABLE. The
-- exercises ended up in src/content/grammatik instead — they change with the
-- code and are identical for every learner, so a foreign key to an empty
-- table would only block inserts.
--
-- The column is kept (nothing is lost, and a future admin-authored exercise
-- could still use it) but is no longer required. The string code is what the
-- app actually writes.
-- ---------------------------------------------------------------------------
alter table attempts alter column exercise_id drop not null;

alter table attempts add column if not exists exercise_code text not null default '';
alter table attempts add column if not exists topic_slug    text;
alter table attempts add column if not exists skill         text not null default 'grammatik';
alter table attempts add column if not exists tags          text[] not null default '{}';

create index if not exists attempts_user_topic_idx
  on attempts (user_id, topic_slug, created_at desc);
create index if not exists attempts_tags_idx
  on attempts using gin (tags);

-- ---------------------------------------------------------------------------
-- mistakes.source_id: uuid -> text
--
-- A writing submission has a uuid id; an exercise has a code like
-- "akk-m-03". One column has to hold both, so it becomes text. Existing
-- uuid values cast cleanly and keep working.
-- ---------------------------------------------------------------------------
alter table mistakes
  alter column source_id type text using source_id::text;

-- ---------------------------------------------------------------------------
-- Where the learner is in each grammar topic
--
-- Deliberately one row per topic rather than a log: the study plan needs
-- "how well do you know Dativ right now", and that is a single number.
-- ---------------------------------------------------------------------------
create table if not exists grammar_progress (
  user_id      uuid    not null references auth.users on delete cascade,
  topic_slug   text    not null,
  lesson_read  boolean not null default false,
  -- Correct answers / total answers, all time, on this topic.
  answered     int     not null default 0,
  correct      int     not null default 0,
  -- Best quick-test result as a percentage, 0-100.
  best_test    int     not null default 0,
  -- Set once the quick test is passed at 80% or better.
  mastered     boolean not null default false,
  last_seen_at timestamptz not null default now(),
  primary key (user_id, topic_slug)
);

alter table grammar_progress enable row level security;
drop policy if exists "own rows" on grammar_progress;
create policy "own rows" on grammar_progress for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- ---------------------------------------------------------------------------
-- The article trainer keeps its own score per noun
--
-- der/die/das is not really grammar, it is memory — so it needs a per-word
-- record, the same way vocabulary does, not a per-topic one.
-- ---------------------------------------------------------------------------
create table if not exists article_progress (
  user_id      uuid not null references auth.users on delete cascade,
  noun         text not null,
  -- How many times in a row it has been answered correctly. Reset to 0 on
  -- a wrong answer — that is what makes a streak mean something.
  streak       int  not null default 0,
  times_seen   int  not null default 0,
  times_wrong  int  not null default 0,
  last_seen_at timestamptz not null default now(),
  primary key (user_id, noun)
);

alter table article_progress enable row level security;
drop policy if exists "own rows" on article_progress;
create policy "own rows" on article_progress for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- The trainer asks for the weakest words first, so index that order.
create index if not exists article_progress_weak_idx
  on article_progress (user_id, streak asc, times_wrong desc);
