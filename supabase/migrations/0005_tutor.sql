-- ============================================================================
-- 0005 — AI tutor chat history
--
-- Saves each learner's tutor conversation so the bot remembers the current
-- topic and recent answers instead of starting fresh every time.
-- ============================================================================

create table if not exists tutor_chats (
  user_id    uuid    not null references auth.users on delete cascade,
  topic      text    not null default 'grammar'
             check (topic in ('grammar', 'vocab', 'writing', 'exam')),
  messages   jsonb   not null default '[]'::jsonb,
  updated_at timestamptz not null default now(),
  primary key (user_id)
);

alter table tutor_chats enable row level security;
drop policy if exists "own rows" on tutor_chats;
create policy "own rows" on tutor_chats for all to authenticated
  using (user_id = auth.uid()) with check (user_id = auth.uid());

create index if not exists tutor_chats_updated_idx
  on tutor_chats (user_id, updated_at desc);
