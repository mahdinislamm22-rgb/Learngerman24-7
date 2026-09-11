import { Lightbulb, TriangleAlert, ArrowLeftRight, Target } from "lucide-react";
import { pick, type CheatCode, type GrammarLesson, type Lang } from "@/lib/types";
import type { Dict } from "@/lib/i18n/shape";
import { Card, CardBody } from "@/components/ui/card";
import { Badge, ShortcutBadge } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

/**
 * Renders a lesson from data.
 *
 * A Server Component with no state: everything here comes out of
 * src/content/grammatik, so a new lesson is a new data file and never a
 * new component.
 */
export function LessonView({
  lesson,
  explainLang,
  t,
}: {
  lesson: GrammarLesson;
  explainLang: Lang;
  t: Dict;
}) {
  const bn = explainLang === "bn";

  return (
    <div className="flex flex-col gap-8">
      {/* ---- what it is, why it matters -------------------------------- */}
      <section className="flex flex-col gap-3">
        <Card className="border-iris-line bg-iris-soft">
          <CardBody className="flex flex-col gap-2">
            <span className="label text-iris">{t.gram.telcRelevance}</span>
            <p className={cn("text-[14.5px] leading-relaxed", bn && "bn")}>
              {pick(lesson.telcRelevance, explainLang)}
            </p>
          </CardBody>
        </Card>

        <Prose title={t.gram.whatIsIt} body={pick(lesson.whatIsIt, explainLang)} bn={bn} />
        <Prose title={t.gram.whyNeeded} body={pick(lesson.whyNeeded, explainLang)} bn={bn} />

        <Card className="border-sage/30 bg-sage-soft">
          <CardBody className="flex flex-col gap-1.5">
            <span className="label text-sage">{t.gram.inShort}</span>
            <p className={cn("text-[15.5px] font-semibold leading-relaxed", bn && "bn")}>
              {pick(lesson.simple, explainLang)}
            </p>
          </CardBody>
        </Card>

        <Card>
          <CardBody className="flex flex-col gap-1.5">
            <span className="label">
              <Target size={12} className="mr-1 inline" aria-hidden />
              {t.gram.pattern}
            </span>
            <p className={cn("text-[15px] leading-relaxed", bn && "bn")}>
              {pick(lesson.pattern, explainLang)}
            </p>
          </CardBody>
        </Card>
      </section>

      {/* ---- compare & remember ---------------------------------------- */}
      <section className="flex flex-col gap-3">
        <SectionHead
          icon={<ArrowLeftRight size={16} aria-hidden />}
          title={t.gram.compareTitle}
          sub={t.gram.compareSub}
          bn={bn}
        />
        {lesson.compare.map((c, i) => (
          <Card key={i}>
            <CardBody className="flex flex-col gap-2.5">
              <p className="prose-de text-[16.5px] font-semibold leading-snug">
                {c.german}
              </p>
              <div className="flex flex-col gap-1 border-l-2 border-line pl-3">
                {c.english ? <Alt label="EN" text={c.english} /> : null}
                {c.italian ? <Alt label="IT" text={c.italian} /> : null}
                {c.bengali ? <Alt label="BN" text={c.bengali} bengali /> : null}
              </div>
              <p className={cn("text-[14px] leading-relaxed text-ink-soft", bn && "bn")}>
                {pick(c.why, explainLang)}
              </p>
            </CardBody>
          </Card>
        ))}
      </section>

      {/* ---- tables ----------------------------------------------------- */}
      <section className="flex flex-col gap-4">
        <SectionHead title={t.gram.tablesTitle} sub={t.gram.tablesSub} bn={bn} />
        {lesson.tables.map((table, i) => (
          <div key={i} className="flex flex-col gap-2">
            <h3 className={cn("text-[15px] font-bold", bn && "bn")}>
              {pick(table.caption, explainLang)}
            </h3>
            <div className="scroll-x overflow-x-auto rounded-[var(--radius-card)] border border-line">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-surface-2">
                    {table.headers.map((h) => (
                      <th
                        key={h}
                        className="px-3.5 py-2.5 text-[12px] font-semibold uppercase tracking-[0.05em] text-ink-soft"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, ri) => (
                    <tr key={ri} className="border-t border-line bg-surface">
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className={cn(
                            "prose-de px-3.5 py-2.5 text-[14.5px]",
                            ci === 0 && "font-semibold text-ink",
                          )}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {table.note ? (
              <p className={cn("text-[13.5px] leading-relaxed text-ink-soft", bn && "bn")}>
                {pick(table.note, explainLang)}
              </p>
            ) : null}
          </div>
        ))}
      </section>

      {/* ---- memory tricks and cheat codes ------------------------------ */}
      <section className="flex flex-col gap-3">
        <SectionHead
          icon={<Lightbulb size={16} aria-hidden />}
          title={t.gram.tricksTitle}
          sub={t.gram.tricksSub}
          bn={bn}
        />
        {[...lesson.memoryTricks, ...lesson.cheatCodes].map((c, i) => (
          <TrickCard key={i} code={c} explainLang={explainLang} t={t} bn={bn} />
        ))}
      </section>

      {/* ---- common mistakes -------------------------------------------- */}
      <section className="flex flex-col gap-3">
        <SectionHead
          icon={<TriangleAlert size={16} aria-hidden />}
          title={t.gram.mistakesTitle}
          sub={t.gram.mistakesSub}
          bn={bn}
        />
        {lesson.commonMistakes.map((m, i) => (
          <Card key={i}>
            <CardBody className="flex flex-col gap-2">
              <p className="prose-de text-[15.5px] text-clay line-through decoration-clay/40">
                {m.wrong}
              </p>
              <p className="prose-de text-[16px] font-semibold text-sage">{m.right}</p>
              <p className={cn("text-[14px] leading-relaxed text-ink-soft", bn && "bn")}>
                {pick(m.why, explainLang)}
              </p>
            </CardBody>
          </Card>
        ))}
      </section>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function TrickCard({
  code,
  explainLang,
  t,
  bn,
}: {
  code: CheatCode;
  explainLang: Lang;
  t: Dict;
  bn: boolean;
}) {
  return (
    <Card className="border-amber/30 bg-amber-soft">
      <CardBody className="flex flex-col gap-2.5">
        <div className="flex flex-wrap items-center gap-2">
          <ShortcutBadge />
        </div>

        <p className="prose-de text-[16.5px] font-bold leading-snug">{code.rule}</p>

        <p className={cn("text-[14.5px] leading-relaxed", bn && "bn")}>
          {pick(code.meaning, explainLang)}
        </p>

        <p className="prose-de rounded-[var(--radius-control)] bg-surface/70 px-3 py-2 text-[14.5px]">
          {code.example}
        </p>

        {/* Requirement #31: a shortcut may never be shown without the case
            where it breaks. The type makes it impossible to omit. */}
        <div className="rounded-[var(--radius-control)] border border-clay/25 bg-clay-soft px-3 py-2">
          <span className="label text-clay">{t.gram.butNot}</span>
          <p className="prose-de mt-0.5 text-[14px] leading-relaxed">
            {code.counterExample}
          </p>
        </div>

        <div className="flex flex-col gap-1.5 border-t border-amber/25 pt-2.5">
          <p className={cn("text-[13.5px] leading-relaxed", bn && "bn")}>
            <strong>{t.common.memoryTrick}: </strong>
            {pick(code.memoryTrick, explainLang)}
          </p>
          <p className={cn("text-[13.5px] leading-relaxed text-ink-soft", bn && "bn")}>
            <strong className="text-ink">{t.gram.examTip}: </strong>
            {pick(code.examTip, explainLang)}
          </p>
        </div>
      </CardBody>
    </Card>
  );
}

function Prose({ title, body, bn }: { title: string; body: string; bn: boolean }) {
  return (
    <Card>
      <CardBody className="flex flex-col gap-1.5">
        <span className="label">{title}</span>
        <p className={cn("text-[15px] leading-relaxed", bn && "bn")}>{body}</p>
      </CardBody>
    </Card>
  );
}

function SectionHead({
  icon,
  title,
  sub,
  bn,
}: {
  icon?: React.ReactNode;
  title: string;
  sub: string;
  bn: boolean;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <h2 className={cn("flex items-center gap-2 text-[19px] font-bold", bn && "bn")}>
        {icon}
        {title}
      </h2>
      <p className={cn("max-w-[62ch] text-[14px] text-ink-soft", bn && "bn")}>{sub}</p>
    </div>
  );
}

function Alt({
  label,
  text,
  bengali,
}: {
  label: string;
  text: string;
  bengali?: boolean;
}) {
  return (
    <p className="flex gap-2 text-[14.5px]">
      <Badge tone="neutral" className="mt-0.5 h-fit shrink-0">
        {label}
      </Badge>
      <span className={cn("text-ink-soft", bengali && "bn")}>{text}</span>
    </p>
  );
}
