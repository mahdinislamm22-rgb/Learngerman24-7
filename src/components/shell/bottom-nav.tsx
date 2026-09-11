"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV, navLabel } from "./nav-items";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";

/**
 * Mobile navigation. Five destinations, 44px+ tap targets — vocabulary
 * in a queue is a real use case, so the phone layout is not an afterthought.
 */
export function BottomNav() {
  const pathname = usePathname();
  const { t } = useI18n();
  const items = NAV.filter((n) => n.primary);

  return (
    <nav
      aria-label="Navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-surface/95 backdrop-blur lg:hidden"
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
      </ul>
    </nav>
  );
}
