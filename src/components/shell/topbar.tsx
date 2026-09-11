"use client";

import Link from "next/link";
import { logout } from "@/app/(auth)/actions";
import { Badge } from "@/components/ui/badge";
import { LanguageSwitcher } from "@/components/i18n/language-switcher";
import { useI18n } from "@/components/i18n/provider";

export function Topbar({
  name,
  daysLeft,
}: {
  name: string;
  daysLeft: number | null;
}) {
  const { t } = useI18n();

  return (
    <header className="flex flex-wrap items-center gap-3 border-b border-line px-5 py-3 sm:px-7">
      <Link
        href="/dashboard"
        className="font-[family-name:var(--font-display)] text-[16px] font-extrabold tracking-tight lg:hidden"
      >
        Deutsch<span className="text-iris">B1</span>
      </Link>

      <div className="ml-auto flex items-center gap-2.5">
        {daysLeft !== null && daysLeft >= 0 ? (
          <Badge tone={daysLeft <= 30 ? "clay" : "iris"}>
            {daysLeft === 0
              ? t.dash.examToday
              : `${t.dash.daysLeft} ${daysLeft} ${daysLeft === 1 ? t.dash.day : t.dash.days}`}
          </Badge>
        ) : null}

        <LanguageSwitcher compact />

        <span className="hidden text-[13.5px] text-ink-soft sm:inline">
          {name}
        </span>

        <form action={logout}>
          <button
            type="submit"
            className="text-[13px] font-semibold text-ink-faint transition-colors hover:text-clay"
          >
            {t.common.signOut}
          </button>
        </form>
      </div>
    </header>
  );
}
