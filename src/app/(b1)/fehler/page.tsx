import Link from "next/link";
import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import { getI18n } from "@/lib/i18n/server";
import type { Lang } from "@/lib/types";
import { Card, CardBody } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MistakeCard, type MistakeRow } from "@/components/mistakes/mistake-card";

export const metadata: Metadata = { title: "Meine Fehler" };

export default async function MistakesPage({
  searchParams,
}: {
  searchParams: Promise<{ show?: string }>;
}) {
  const { show } = await searchParams;
  const showLearned = show === "learned";

  const supabase = await createClient();
  const { lang, t } = await getI18n();
  const bn = lang === "bn" ? "bn" : "";

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data } = await supabase
    .from("mistakes")
    .select(
      "id, category, tag, original, corrected, explanation, times_wrong, status, note",
    )
    .eq("user_id", user!.id)
    .order("times_wrong", { ascending: false })
    .order("last_seen_at", { ascending: false });

  const all = (data ?? []) as MistakeRow[];
  const open = all.filter((m) => m.status !== "learned");
  const learned = all.filter((m) => m.status === "learned");
  const visible = showLearned ? learned : open;

  // Group by category so the page answers "what do I keep getting wrong?"
  // rather than just listing errors in time order.
  const byCategory = new Map<string, MistakeRow[]>();
  for (const m of visible) {
    const list = byCategory.get(m.category) ?? [];
    list.push(m);
    byCategory.set(m.category, list);
  }
  const groups = [...byCategory.entries()].sort(
    (a, b) =>
      b[1].reduce((s, m) => s + m.times_wrong, 0) -
      a[1].reduce((s, m) => s + m.times_wrong, 0),
  );

  const worst = groups[0];

  return (
    <>
      <h1 className={`text-[28px] font-extrabold ${bn}`}>{t.nav.mistakes}</h1>
      <p className={`mt-1 max-w-[60ch] text-[15px] text-ink-soft ${bn}`}>
        {t.fehler.intro}
      </p>

      {all.length === 0 ? (
        <Card className="mt-6">
          <CardBody className="flex flex-col items-start gap-3">
            <p className={`max-w-[54ch] text-[15px] text-ink-soft ${bn}`}>
              {t.fehler.empty}
            </p>
            <Link href="/schreiben">
              <Button>{t.fehler.emptyCta}</Button>
            </Link>
          </CardBody>
        </Card>
      ) : (
        <>
          {/* ---- the headline finding ---------------------------------- */}
          {worst && !showLearned ? (
            <Card className="mt-6 border-clay/30 bg-clay-soft">
              <CardBody>
                <span className="label text-clay">{t.fehler.mostCommon}</span>
                <p className={`mt-1.5 text-[17px] font-bold ${bn}`}>
                  {t.schreiben.mistakeCat[
                    worst[0] as keyof typeof t.schreiben.mistakeCat
                  ] ?? worst[0]}
                </p>
                <p className={`mt-1 text-[14px] text-ink-soft ${bn}`}>
                  {t.fehler.mostCommonNote.replace(
                    "{n}",
                    String(worst[1].reduce((s, m) => s + m.times_wrong, 0)),
                  )}
                </p>
              </CardBody>
            </Card>
          ) : null}

          {/* ---- filter ------------------------------------------------ */}
          <div className="mt-6 flex flex-wrap items-center gap-2">
            <Link href="/fehler">
              <Button size="sm" variant={showLearned ? "secondary" : "primary"}>
                {t.fehler.openTab} ({open.length})
              </Button>
            </Link>
            <Link href="/fehler?show=learned">
              <Button size="sm" variant={showLearned ? "primary" : "secondary"}>
                {t.fehler.learnedTab} ({learned.length})
              </Button>
            </Link>
          </div>

          {visible.length === 0 ? (
            <Card className="mt-4">
              <CardBody>
                <p className={`text-[15px] text-ink-soft ${bn}`}>
                  {showLearned ? t.fehler.noneLearned : t.fehler.allClear}
                </p>
              </CardBody>
            </Card>
          ) : (
            <div className="mt-6 flex flex-col gap-7">
              {groups.map(([category, items]) => (
                <section key={category}>
                  <div className="mb-3 flex items-center gap-2.5">
                    <h2 className={`text-[18px] font-bold ${bn}`}>
                      {t.schreiben.mistakeCat[
                        category as keyof typeof t.schreiben.mistakeCat
                      ] ?? category}
                    </h2>
                    <Badge tone="neutral">{items.length}</Badge>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {items.map((m) => (
                      <li key={m.id}>
                        <MistakeCard mistake={m} explainLang={lang as Lang} />
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </>
      )}
    </>
  );
}
