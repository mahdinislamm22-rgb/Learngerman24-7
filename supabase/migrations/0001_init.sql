-- ============================================================================
-- Deutsch B1 — initial schema
--
-- Paste this whole file into the Supabase SQL Editor and press Run.
-- It is safe to run once. Running it twice will error on "already exists",
-- which is harmless — it means it already worked.
--
-- Design rules:
--   * Content tables are readable by any signed-in user, writable only by
--     the service role (i.e. by me, seeding content — never by the browser).
--   * Every user table is locked to its owner by Row Level Security, so
--     privacy is a database rule, not something app code has to remember.
-- ============================================================================

-- ============================ IDENTITY ======================================

create table if not exists profiles (
  id            uuid primary key references auth.users on delete cascade,
  display_name  text,
  explanation_lang text not null default 'en'
                 check (explanation_lang in ('de','en','it','bn')),
  track         text not null default 'b1' check (track in ('b1','a0')),
  exam_date     date,
  daily_minutes int  not null default 60,
  created_at    timestamptz not null default now()
);

-- Create the profile row automatically the moment someone registers,
-- so no page ever has to handle "user exists but profile doesn't".
create or replace function handle_new_user()
returns trigger
language plpgsql
security definer set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (new.id, coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1)))
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();

-- ============================ CONTENT =======================================

create table if not exists grammar_topics (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  category    text not null,                    -- kasus | verben | satzbau | wortarten
  level       text not null default 'b1',       -- a0 | b1
  telc_weight int  not null default 1 check (telc_weight between 1 and 3),
  order_index int  not null default 0,
  body        jsonb not null                    -- the GrammarLesson object
);

create table if not exists vocab_items (
  id             uuid primary key default gen_random_uuid(),
  lemma          text not null,
  article        text check (article in ('der','die','das')),
  plural         text,
  word_type      text not null,                 -- nomen | verb | adjektiv | adverb | praeposition
  cefr           text not null default 'b1',
  topics         text[] not null default '{}',  -- Familie, Arbeit, Gesundheit …
  meanings       jsonb not null,                -- { en, it, bn }
  example_de     text,
  example_trans  jsonb,
  collocations   text[],
  synonyms       text[],
  antonyms       text[],
  preposition    text,                          -- "sich interessieren für"
  governed_case  text,                          -- akkusativ | dativ | genitiv
  verb_forms     jsonb,                         -- praesens / praeteritum / perfekt
  ipa            text,
  memory_trick   jsonb,
  frequency_rank int
);
create index if not exists vocab_items_topics_idx on vocab_items using gin (topics);
create index if not exists vocab_items_lemma_idx  on vocab_items (lower(lemma));

create table if not exists reading_texts (
  id         uuid primary key default gen_random_uuid(),
  title      text,
  body_de    text not null,
  word_count int,
  text_type  text,                              -- artikel | anzeige | brief
  cefr       text not null default 'b1',
  topics     text[] default '{}',
  glossary   jsonb                              -- pre-computed word popups
);

create table if not exists exercises (
  id              uuid primary key default gen_random_uuid(),
  kind            text not null,                -- mc | gap | wordbank | match | truefalse | order | article
  skill           text not null,                -- grammatik | wortschatz | lesen | sprachbausteine | hoeren
  topic_id        uuid references grammar_topics on delete set null,
  reading_text_id uuid references reading_texts  on delete cascade,
  difficulty      int not null default 2 check (difficulty between 1 and 3),
  tags            text[] not null default '{}', -- dativ, wechselpraeposition, konnektor …
  prompt          jsonb not null,
  payload         jsonb not null,               -- options, word bank, blanks
  answer          jsonb not null,               -- NEVER selected in a client component
  explanation     jsonb not null                -- why right AND why each distractor is wrong
);
create index if not exists exercises_tags_idx  on exercises using gin (tags);
create index if not exists exercises_skill_idx on exercises (skill, difficulty);

create table if not exists writing_tasks (
  id                 uuid primary key default gen_random_uuid(),
  code               text unique,               -- SCH-01 …
  category           text not null,             -- einladung | beschwerde | absage | bitte …
  register           text not null check (register in ('formell','halbformell','informell')),
  situation          jsonb not null,            -- the scenario, in 4 languages
  task_de            text not null,
  leitpunkte         jsonb not null,            -- exactly 4
  useful_phrases     jsonb,
  target_words       int not null default 150,
  model_answer_de    text not null,
  model_answer_notes jsonb
);

create table if not exists mock_exams (
  id          uuid primary key default gen_random_uuid(),
  code        text unique,
  title       text,
  -- Always false. This app contains original practice material only.
  is_official boolean not null default false check (is_official = false)
);

create table if not exists mock_exam_items (
  mock_exam_id    uuid references mock_exams on delete cascade,
  section         text not null,
  part            int  not null,
  position        int  not null,
  exercise_id     uuid references exercises     on delete cascade,
  writing_task_id uuid references writing_tasks on delete cascade,
  primary key (mock_exam_id, section, part, position)
);

-- ============================ USER DATA =====================================

create table if not exists attempts (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid not null references auth.users on delete cascade,
  exercise_id     uuid not null references exercises on delete cascade,
  given           jsonb,
  is_correct      boolean not null,
  mode            text not null default 'practice'
                   check (mode in ('learn','practice','exam')),
  ms_spent        int,
  mock_attempt_id uuid,
  created_at      timestamptz not null default now()
);
create index if not exists attempts_user_idx on attempts (user_id, created_at desc);

create table if not exists writing_submissions (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users on delete cascade,
  task_id       uuid not null references writing_tasks on delete cascade,
  text          text not null,
  word_count    int,
  seconds_spent int,
  mode          text not null default 'practice',
  scores        jsonb,   -- { inhalt, kommunikation, grammatik, wortschatz, total }
  feedback      jsonb,   -- corrections[], leitpunkte[], betterB1Version …
  model         text,
  created_at    timestamptz not null default now()
);
create index if not exists writing_submissions_user_idx
  on writing_submissions (user_id, created_at desc);

create table if not exists mistakes (
  id                 uuid primary key default gen_random_uuid(),
  user_id            uuid not null references auth.users on delete cascade,
  category           text not null,   -- artikel | kasus | praeposition | wortstellung |
                                      -- verbform | wortschatz | rechtschreibung | konnektor | register
  tag                text not null default '',  -- the precise thing: "wechselpraeposition-akkusativ"
  source_kind        text,                      -- exercise | writing | tutor
  source_id          uuid,
  original           text not null default '',
  corrected          text,
  explanation        jsonb,
  times_wrong        int not null default 1,
  times_right_since  int not null default 0,
  status             text not null default 'open'
                      check (status in ('open','learning','learned')),
  note               text,
  last_seen_at       timestamptz not null default now(),
  created_at         timestamptz not null default now(),
  -- This is what turns a pile of wrong answers into
  -- "you get Wechselpräposition + Akkusativ wrong 11 times".
  unique (user_id, category, tag, original)
);
create index if not exists mistakes_user_idx on mistakes (user_id, status, times_wrong desc);

create table if not exists srs_cards (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users on delete cascade,
  item_type     text not null check (item_type in ('vocab','grammar','mistake')),
  item_id       uuid not null,
  interval_days int  not null default 0,
  ease          numeric not null default 2.5,
  reps          int  not null default 0,
  lapses        int  not null default 0,
  due_at        date not null default current_date,
  last_reviewed_at timestamptz,
  unique (user_id, item_type, item_id)
);
create index if not exists srs_due_idx on srs_cards (user_id, due_at);

create table if not exists skill_mastery (
  user_id    uuid not null references auth.users on delete cascade,
  dimension  text not null,                -- 'lesen' … or a grammar tag like 'dativ'
  score      numeric not null default 0,   -- 0..1, exponential moving average
  samples    int not null default 0,
  updated_at timestamptz not null default now(),
  primary key (user_id, dimension)
);

create table if not exists mock_attempts (
  id             uuid primary key default gen_random_uuid(),
  user_id        uuid not null references auth.users on delete cascade,
  mock_exam_id   uuid references mock_exams on delete set null,
  started_at     timestamptz not null default now(),
  finished_at    timestamptz,
  section_scores jsonb,   -- { lesen: 61, sprachbausteine: 24, hoeren: 55, schreiben: 30 }
  written_total  int,
  passed         boolean
);

create table if not exists study_sessions (
  id      uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users on delete cascade,
  skill   text,
  seconds int  not null default 0,
  day     date not null default current_date
);
create index if not exists study_sessions_user_day_idx on study_sessions (user_id, day desc);

create table if not exists tutor_threads (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null references auth.users on delete cascade,
  title       text,
  context_ref jsonb,   -- which lesson or mistake it started from
  created_at  timestamptz not null default now()
);

create table if not exists tutor_messages (
  id         bigserial primary key,
  thread_id  uuid not null references tutor_threads on delete cascade,
  role       text not null check (role in ('user','assistant','system')),
  content    text not null,
  created_at timestamptz not null default now()
);
create index if not exists tutor_messages_thread_idx on tutor_messages (thread_id, id);

-- Stops clickable-word lookups costing money twice. Shared across users:
-- the meaning of a German word in a sentence is not private data.
create table if not exists glossary_cache (
  lemma_key  text primary key,   -- lower(word) || ':' || md5(sentence)
  payload    jsonb not null,
  created_at timestamptz not null default now()
);

-- ============================ ROW LEVEL SECURITY ============================

-- Content: readable by any signed-in user; writes only via the service role
-- (which bypasses RLS), so no write policy is needed or wanted.
do $$
declare t text;
begin
  foreach t in array array[
    'grammar_topics','vocab_items','reading_texts','exercises',
    'writing_tasks','mock_exams','mock_exam_items','glossary_cache'
  ] loop
    execute format('alter table %I enable row level security', t);
    execute format('drop policy if exists "read content" on %I', t);
    execute format(
      'create policy "read content" on %I for select to authenticated using (true)', t);
  end loop;
end $$;

-- The glossary cache is also written by signed-in users (a word click).
drop policy if exists "write glossary" on glossary_cache;
create policy "write glossary" on glossary_cache
  for insert to authenticated with check (true);

-- User data: one policy shape, applied to every table that has a user_id.
do $$
declare t text;
begin
  foreach t in array array[
    'attempts','writing_submissions','mistakes','srs_cards','skill_mastery',
    'mock_attempts','study_sessions','tutor_threads'
  ] loop
    execute format('alter table %I enable row level security', t);
    execute format('drop policy if exists "own rows" on %I', t);
    execute format(
      'create policy "own rows" on %I for all to authenticated
         using (user_id = auth.uid()) with check (user_id = auth.uid())', t);
  end loop;
end $$;

alter table profiles enable row level security;
drop policy if exists "own profile" on profiles;
create policy "own profile" on profiles for all to authenticated
  using (id = auth.uid()) with check (id = auth.uid());

-- Tutor messages have no user_id of their own; they inherit their thread's.
alter table tutor_messages enable row level security;
drop policy if exists "own messages" on tutor_messages;
create policy "own messages" on tutor_messages for all to authenticated
  using (exists (
    select 1 from tutor_threads t
    where t.id = tutor_messages.thread_id and t.user_id = auth.uid()))
  with check (exists (
    select 1 from tutor_threads t
    where t.id = tutor_messages.thread_id and t.user_id = auth.uid()));
