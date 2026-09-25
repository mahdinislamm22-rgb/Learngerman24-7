-- ============================================================================
-- 0007 — Modelltests (full mock exams)
--
-- Paste into the Supabase SQL Editor and Run, same as the earlier ones.
-- Additive only; nothing is deleted.
-- ============================================================================

create table if not exists modelltest_attempts (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users on delete cascade,
  code          text not null,                 -- MT-01 …

  -- Every answer, keyed by section and item number. Kept whole so a result
  -- page can be rebuilt months later without re-running the exam.
  answers       jsonb not null default '{}'::jsonb,

  -- Points per section, on the real scale.
  lesen_points           numeric(5,2) not null default 0,
  sprachbausteine_points numeric(5,2) not null default 0,
  hoeren_points          numeric(5,2) not null default 0,
  -- Null until the writing task has been marked by the AI corrector.
  schreiben_points       numeric(5,2),

  -- Correct-answer counts, so a percentage never has to be recomputed
  -- from the answer blob.
  lesen_correct           int not null default 0,
  sprachbausteine_correct int not null default 0,
  hoeren_correct          int not null default 0,

  -- The learner's own text, and the corrector's full feedback.
  schreiben_text     text,
  schreiben_feedback jsonb,

  -- Seconds actually spent, per stage. Time is what most candidates fail on.
  seconds_lesen_sb int,
  seconds_hoeren   int,
  seconds_schreiben int,

  finished_at   timestamptz,
  created_at    timestamptz not null default now()
);

alter table modelltest_attempts enable row level security;
drop policy if exists "own rows" on modelltest_attempts;
create policy "own rows" on modelltest_attempts for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

create index if not exists modelltest_attempts_user_idx
  on modelltest_attempts (user_id, created_at desc);
create index if not exists modelltest_attempts_code_idx
  on modelltest_attempts (user_id, code, created_at desc);
