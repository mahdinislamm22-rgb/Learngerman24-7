"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BookOpen, Library, Dumbbell } from "lucide-react";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";

/**
 * Beginner navigation: four destinations, not thirteen.
 *
 * A complete beginner opening a wall of German section names would stop
 * before they started, so the A0 course gets its own much smaller shell
 * rather than reusing the B1 sidebar.
 */
export function A0Nav() {
  const pathname = usePathname();
  const { t } = useI18n();

  const items = [
    { href: "/anfaenger", label: t.nav.dashboard, icon: LayoutDashboard },
    { href: "/anfaenger/lektionen", label: t.nav.lessons, icon: BookOpen },
    { href: "/anfaenger/woerter", label: t.a0.vocabTitle, icon: Library },
    { href: "/anfaenger/ueben", label: t.nav.practice, icon: Dumbbell },
  ];

  return (
    <>
      {/* Desktop: a horizontal bar, because four items do not need a sidebar */}
      <nav
        aria-label={t.a0.title}
        className="hidden gap-1 border-b border-line px-5 sm:px-7 lg:flex"
      >
        {items.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/anfaenger"
              ? pathname === href
              : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "-mb-px flex items-center gap-2 border-b-2 px-3 py-3 text-[14px] font-semibold transition-colors",
                active
                  ? "border-iris text-iris"
                  : "border-transparent text-ink-soft hover:text-ink",
              )}
            >
              <Icon size={16} aria-hidden />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* Mobile: bottom tabs */}
      <nav
        aria-label={t.a0.title}
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 backdrop-blur lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ul className="mx-auto flex max-w-[560px]">
          {items.map(({ href, label, icon: Icon }) => {
            const active =
              href === "/anfaenger"
                ? pathname === href
                : pathname.startsWith(href);
            return (
              <li key={href} className="flex-1">
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "flex h-14 flex-col items-center justify-center gap-0.5",
                    active ? "text-iris" : "text-ink-faint",
                  )}
                >
                  <Icon size={19} aria-hidden />
                  <span className="text-[10.5px] font-semibold leading-none">
                    {label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
