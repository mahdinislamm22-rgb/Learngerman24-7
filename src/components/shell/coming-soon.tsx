"use client";

import Link from "next/link";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n/provider";
import { findNavItem, navLabel, type SectionKey } from "./nav-items";

/**
 * Placeholder for a section that arrives in a later phase.
 *
 * It says which phase and what will be here. An empty page that explains
 * itself beats a broken link — and it is honest about what is not built
 * rather than pretending the section is merely loading.
 */
export function ComingSoon({ section }: { section: SectionKey }) {
  const { t, lang } = useI18n();
  const item = findNavItem(section);

  return (
    <>
      <div className="mb-1 flex flex-wrap items-center gap-3">
        <h1 className="text-[28px] font-extrabold">{navLabel(t, section)}</h1>
        {item?.phase ? (
          <Badge tone="neutral">
            {t.soon.phase} {item.phase}
          </Badge>
        ) : null}
      </div>

      <Card className="mt-5">
        <CardBody className="flex flex-col gap-2">
          <span className="label">{t.soon.heading}</span>
          <p
            className={`max-w-[62ch] text-[15px] leading-relaxed text-ink ${
              lang === "bn" ? "bn" : ""
            }`}
          >
            {t.soon.s[section]}
          </p>
          <Link
            href="/dashboard"
            className="mt-2 text-[14px] font-semibold text-iris hover:underline"
          >
            {t.common.backToDashboard}
          </Link>
        </CardBody>
      </Card>
    </>
  );
}
