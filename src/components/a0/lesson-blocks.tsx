import { pick, type Lang, type Multi } from "@/lib/types";
import type { A0Block } from "@/content/a0";
import { Card, CardBody } from "@/components/ui/card";
import type { Dict } from "@/lib/i18n/shape";
import { cn } from "@/lib/cn";

/**
 * Renders one lesson block. The lesson itself is data; this file is the
 * only place that knows what a block looks like on screen.
 *
 * `lang` here is the learner's explanation language — the German stays
 * German, everything around it is translated.
 */
export function LessonBlock({
  block,
  lang,
  t,
}: {
  block: A0Block;
  lang: Lang;
  t: Dict;
}) {
  switch (block.kind) {
    case "text":
      return (
        <p className={cn("text-[16px] leading-relaxed", lang === "bn" && "bn")}>
          {pick(block.body, lang)}
        </p>
      );

    case "tip":
      return (
        <Callout tone="iris" label={t.a0.tip} body={block.body} lang={lang} />
      );

    case "warn":
      return (
        <Callout tone="clay" label={t.a0.watchOut} body={block.body} lang={lang} />
      );

    case "words":
      return (
        <section className="flex flex-col gap-2">
          {block.title ? (
            <h3 className="text-[17px] font-bold">{pick(block.title, lang)}</h3>
          ) : null}
          <ul className="flex flex-col gap-2">
            {block.words.map((w) => (
              <li key={w.de}>
                <Card>
                  <CardBody className="flex flex-col gap-1 p-4">
                    <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-1">
                      <span className="prose-de text-[19px] font-semibold text-ink">
                        {w.article ? (
                          <span className="text-iris">{w.article} </span>
                        ) : null}
                        {w.de}
                      </span>
                      {w.sayIt ? (
                        <span className="font-[family-name:var(--font-mono)] text-[12px] text-ink-faint">
                          [{w.sayIt}]
                        </span>
                      ) : null}
                    </div>
                    <p
                      className={cn(
                        "text-[15px] text-ink-soft",
                        lang === "bn" && "bn",
                      )}
                    >
                      {pick(w.meaning, lang)}
                    </p>
                    {w.example ? (
                      <p className="prose-de mt-1 text-[15px] text-ink">
                        {w.example}
                      </p>
                    ) : null}
                  </CardBody>
                </Card>
              </li>
            ))}
          </ul>
        </section>
      );

    case "table":
      return (
        <section className="flex flex-col gap-2">
          {block.title ? (
            <h3 className="text-[17px] font-bold">{pick(block.title, lang)}</h3>
          ) : null}
          <Card>
            <div className="scroll-x">
              <table className="w-full min-w-[440px] text-[14.5px]">
                <thead>
                  <tr className="border-b border-line bg-surface-2">
                    {block.headers.map((h) => (
                      <th key={h} className="label px-3.5 py-2.5 text-left">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row, i) => (
                    <tr key={i} className="border-b border-line last:border-0">
                      {row.map((cell, j) => (
                        <td
                          key={j}
                          className={cn(
                            "px-3.5 py-2.5 align-top",
                            j === 0 && "prose-de font-semibold text-ink",
                            j > 0 && "text-ink-soft",
                            /[ঀ-৿]/.test(cell) && "bn",
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
          </Card>
          {block.note ? (
            <p
              className={cn(
                "text-[14px] text-ink-soft",
                lang === "bn" && "bn",
              )}
            >
              {pick(block.note, lang)}
            </p>
          ) : null}
        </section>
      );

    case "compare":
      return (
        <Card className="border-iris-line bg-iris-soft">
          <CardBody className="flex flex-col gap-3">
            <span className="label text-iris">Compare &amp; Remember</span>

            <p className="prose-de text-[18px] font-semibold leading-snug text-ink">
              {block.german}
            </p>

            <ul className="flex flex-col gap-1 border-l-2 border-iris-line pl-3">
              {block.english ? (
                <Line flag="🇬🇧" text={block.english} />
              ) : null}
              {block.italian ? <Line flag="🇮🇹" text={block.italian} /> : null}
              {block.bengali ? (
                <Line flag="🇧🇩" text={block.bengali} bn />
              ) : null}
            </ul>

            <p
              className={cn(
                "text-[15px] leading-relaxed text-ink",
                lang === "bn" && "bn",
              )}
            >
              {pick(block.why, lang)}
            </p>
          </CardBody>
        </Card>
      );
  }
}

function Line({
  flag,
  text,
  bn,
}: {
  flag: string;
  text: string;
  bn?: boolean;
}) {
  return (
    <li className="flex gap-2 text-[15px] text-ink-soft">
      <span aria-hidden className="shrink-0">
        {flag}
      </span>
      <span className={bn ? "bn" : undefined}>{text}</span>
    </li>
  );
}

function Callout({
  tone,
  label,
  body,
  lang,
}: {
  tone: "iris" | "clay";
  label: string;
  body: Multi;
  lang: Lang;
}) {
  const styles =
    tone === "clay"
      ? "border-l-clay bg-clay-soft"
      : "border-l-iris bg-iris-soft";
  const labelColor = tone === "clay" ? "text-clay" : "text-iris";

  return (
    <div
      className={cn(
        "rounded-r-[var(--radius-card)] border-l-[3px] px-4 py-3.5",
        styles,
      )}
    >
      <span className={cn("label", labelColor)}>{label}</span>
      <p
        className={cn(
          "mt-1 text-[15px] leading-relaxed text-ink",
          lang === "bn" && "bn",
        )}
      >
        {pick(body, lang)}
      </p>
    </div>
  );
}
