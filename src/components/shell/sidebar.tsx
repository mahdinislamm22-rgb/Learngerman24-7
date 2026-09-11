"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, NAV_GROUPS, navLabel, type NavItem } from "./nav-items";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";

function Row({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const { t } = useI18n();
  const active = pathname === item.href || pathname.startsWith(item.href + "/");
  const Icon = item.icon;

  return (
    <Link
      href={item.href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "flex items-center gap-2.5 rounded-[var(--radius-control)] px-2.5 py-2 transition-colors",
        active
          ? "bg-iris-soft text-iris"
          : "text-ink-soft hover:bg-surface-2 hover:text-ink",
      )}
    >
      <Icon size={17} strokeWidth={2} className="shrink-0" aria-hidden />
      <span className="min-w-0 flex-1 truncate text-[14px] font-semibold">
        {navLabel(t, item.key)}
      </span>
      {!item.ready ? (
        <span className="shrink-0 font-[family-name:var(--font-mono)] text-[9px] uppercase tracking-wider text-ink-faint">
          {t.common.soon}
        </span>
      ) : null}
    </Link>
  );
}

export function Sidebar() {
  const { t } = useI18n();
  const meta = NAV.filter((n) => n.mode === "meta" && n.key !== "dashboard");

  return (
    <nav
      aria-label="Navigation"
      className="hidden w-[236px] shrink-0 flex-col gap-5 border-r border-line px-3 py-5 lg:flex"
    >
      <Link
        href="/dashboard"
        className="px-2.5 font-[family-name:var(--font-display)] text-[18px] font-extrabold tracking-tight"
      >
        Deutsch<span className="text-iris">B1</span>
      </Link>

      <div className="flex flex-col gap-0.5">
        <Row item={NAV[0]} />
      </div>

      {NAV_GROUPS.map((group) => {
        const items = NAV.filter((n) => n.mode === group.mode);
        if (items.length === 0) return null;
        return (
          <div key={group.mode} className="flex flex-col gap-0.5">
            <span className="label px-2.5 pb-1">{t.nav[group.titleKey]}</span>
            {items.map((item) => (
              <Row key={item.href} item={item} />
            ))}
          </div>
        );
      })}

      <div className="flex flex-col gap-0.5">
        <span className="label px-2.5 pb-1">{t.nav.groupPersonal}</span>
        {meta.map((item) => (
          <Row key={item.href} item={item} />
        ))}
      </div>

      <Link
        href="/anfaenger"
        className="mt-auto rounded-[var(--radius-control)] border border-line px-2.5 py-2 text-[12.5px] font-semibold text-ink-soft transition-colors hover:border-iris-line hover:text-iris"
      >
        🇩🇪 {t.nav.switchToA0}
      </Link>
    </nav>
  );
}
