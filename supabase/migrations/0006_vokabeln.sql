-- ============================================================================
-- 0006 — Vocabulary
--
-- Paste into the Supabase SQL Editor and Run, same as the earlier ones.
-- Additive only; nothing is deleted.
-- ============================================================================

-- One row per word per learner. Same shape as article_progress, and for the
-- same reason: vocabulary is memory, so it needs a per-word record rather
-- than a per-topic score.
create table if not exists vocab_progress (
  user_id      uuid not null references auth.users on delete cascade,
  word         text not null,
  -- Correct answers in a row. Reset to 0 on a wrong answer, which is what
  -- makes a streak mean "I actually know this".
  streak       int  not null default 0,
  times_seen   int  not null default 0,
  times_wrong  int  not null default 0,
  -- Set by hand when the learner marks a word as known, independently of
  -- the quiz — some words you simply know already.
  known        boolean not null default false,
  last_seen_at timestamptz not null default now(),
  primary key (user_id, word)
);

alter table vocab_progress enable row level security;
drop policy if exists "own rows" on vocab_progress;
create policy "own rows" on vocab_progress for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- The trainer asks for the weakest words first.
create index if not exists vocab_progress_weak_idx
  on vocab_progress (user_id, streak asc, times_wrong desc);
