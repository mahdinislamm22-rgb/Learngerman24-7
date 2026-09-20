"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MoreHorizontal, X } from "lucide-react";
import { NAV, NAV_GROUPS, navLabel } from "./nav-items";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";

/**
 * Mobile navigation. Five destinations, 44px+ tap targets — vocabulary
 * in a queue is a real use case, so the phone layout is not an afterthought.
 */
export function BottomNav() {
  const pathname = usePathname();
  const { t } = useI18n();
  const [moreOpen, setMoreOpen] = useState(false);
  const items = NAV.filter((n) => n.primary);
  const extraItems = NAV.filter((n) => !n.primary && n.key !== "dashboard");
  const extraGroups = [
    ...NAV_GROUPS,
    { mode: "meta" as const, titleKey: "groupPersonal" as const },
  ];
  const moreActive = extraItems.some(
    (item) => pathname === item.href || pathname.startsWith(item.href + "/"),
  );

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 lg:hidden">
      {moreOpen ? (
        <div className="border-t border-line bg-surface px-4 pb-3 pt-4 shadow-[0_-12px_30px_rgba(43,39,35,0.08)]">
          <div className="mx-auto flex max-w-[560px] items-center justify-between px-1 pb-3">
            <h2 className="font-[family-name:var(--font-display)] text-[15px] font-bold">
              {t.nav.allSections}
            </h2>
            <button
              type="button"
              onClick={() => setMoreOpen(false)}
              aria-label={t.common.back}
              className="rounded-full p-1.5 text-ink-faint transition-colors hover:bg-surface-2 hover:text-ink"
            >
              <X size={18} aria-hidden />
            </button>
          </div>
          <div className="mx-auto grid max-w-[560px] grid-cols-2 gap-x-3 gap-y-4 sm:grid-cols-4">
            {extraGroups.map((group) => {
              const groupItems = extraItems.filter((item) => item.mode === group.mode);
              if (groupItems.length === 0) return null;
              return (
                <div key={group.mode} className="min-w-0">
                  <span className="label px-2">{t.nav[group.titleKey]}</span>
                  <div className="mt-1 flex flex-col gap-0.5">
                    {groupItems.map((item) => {
                      const active =
                        pathname === item.href || pathname.startsWith(item.href + "/");
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMoreOpen(false)}
                          aria-current={active ? "page" : undefined}
                          className={cn(
                            "flex min-w-0 items-center gap-2 rounded-[var(--radius-control)] px-2 py-2 text-[12px] font-semibold",
                            active
                              ? "bg-iris-soft text-iris"
                              : "text-ink-soft hover:bg-surface-2 hover:text-ink",
                          )}
                        >
                          <Icon size={15} className="shrink-0" aria-hidden />
                          <span className="min-w-0 truncate">{navLabel(t, item.key)}</span>
                          {!item.ready ? (
                            <span className="ml-auto shrink-0 font-[family-name:var(--font-mono)] text-[8px] uppercase tracking-wider text-ink-faint">
                              {t.common.soon}
                            </span>
                          ) : null}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}
      <nav
        aria-label="Navigation"
        className="border-t border-line bg-surface/95 backdrop-blur"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
      <ul className="mx-auto flex max-w-[560px]">
        {items.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(item.href + "/");
          const Icon = item.icon;
          return (
            <li key={item.href} className="flex-1">
              <Link
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "flex h-14 flex-col items-center justify-center gap-0.5 px-1",
                  active ? "text-iris" : "text-ink-faint",
                )}
              >
                <Icon size={19} strokeWidth={2} aria-hidden />
                <span className="w-full truncate text-center text-[10px] font-semibold leading-none">
                  {navLabel(t, item.key)}
                </span>
              </Link>
            </li>
          );
        })}
        <li className="flex-1">
          <button
            type="button"
            onClick={() => setMoreOpen((open) => !open)}
            aria-expanded={moreOpen}
            className={cn(
              "flex h-14 w-full flex-col items-center justify-center gap-0.5 px-1",
              moreOpen || moreActive ? "text-iris" : "text-ink-faint",
            )}
          >
            {moreOpen ? <X size={19} strokeWidth={2} aria-hidden /> : <MoreHorizontal size={19} strokeWidth={2} aria-hidden />}
            <span className="w-full truncate text-center text-[10px] font-semibold leading-none">
              {t.nav.allSections}
            </span>
          </button>
        </li>
      </ul>
      </nav>
    </div>
  );
}
