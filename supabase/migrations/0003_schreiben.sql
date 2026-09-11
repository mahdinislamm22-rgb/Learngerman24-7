-- ============================================================================
-- 0003 — Schreiben trainer
--
-- Paste into the Supabase SQL Editor and Run, same as the earlier ones.
--
-- Why this changes writing_submissions: migration 0001 pointed task_id at a
-- writing_tasks TABLE. The tasks ended up living in the codebase instead
-- (src/content/schreiben), because they change with the code and are the
-- same for everyone — so a foreign key to an empty table would only ever
-- block inserts. This swaps it for the task's code, e.g. 'SCH-03'.
-- ============================================================================

-- Drop the foreign key and the old column. There are no submissions yet,
-- so nothing is lost; if you somehow have some, they would be unreadable
-- anyway because writing_tasks was never seeded.
alter table writing_submissions
  drop column if exists task_id;

alter table writing_submissions
  add column if not exists task_code text not null default '';

-- The model that produced the feedback, so you can tell later whether a
-- harsh score came from a model you have since changed.
alter table writing_submissions
  add column if not exists model text;

create index if not exists writing_submissions_task_idx
  on writing_submissions (user_id, task_code, created_at desc);

-- Drafts: the editor autosaves while you write, so a closed tab or a
-- crashed browser does not cost you 25 minutes of work.
create table if not exists writing_drafts (
  user_id    uuid not null references auth.users on delete cascade,
  task_code  text not null,
  text       text not null default '',
  updated_at timestamptz not null default now(),
  primary key (user_id, task_code)
);

alter table writing_drafts enable row level security;
drop policy if exists "own rows" on writing_drafts;
create policy "own rows" on writing_drafts for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

-- The Mistake Bank groups by tag, so index the way it reads.
create index if not exists mistakes_user_tag_idx
  on mistakes (user_id, category, times_wrong desc);
