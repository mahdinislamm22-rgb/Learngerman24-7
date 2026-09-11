import {
  LayoutDashboard,
  BookOpen,
  Library,
  FileText,
  Blocks,
  PenLine,
  Headphones,
  Target,
  CircleAlert,
  RotateCcw,
  Bot,
  TrendingUp,
  CalendarDays,
  type LucideIcon,
} from "lucide-react";
import type { Dict } from "@/lib/i18n/shape";

/** Key into both `Dict["nav"]` and `Dict["soon"]["s"]`, so a section's
 *  label and its "coming soon" text can never drift apart. */
export type SectionKey =
  | "grammar"
  | "vocab"
  | "reading"
  | "langElements"
  | "writing"
  | "listening"
  | "exams"
  | "mistakes"
  | "review"
  | "tutor"
  | "progress"
  | "plan";

export type NavItem = {
  href: string;
  /** Dashboard has no SectionKey — it is built, not "coming soon". */
  key: SectionKey | "dashboard";
  icon: LucideIcon;
  mode: "lernen" | "ueben" | "pruefung" | "meta";
  /** Shown in the mobile bottom bar. Keep to five. */
  primary?: boolean;
  ready: boolean;
  /** Which build phase this section arrives in. */
  phase?: number;
};

export const NAV: NavItem[] = [
  { href: "/dashboard", key: "dashboard", icon: LayoutDashboard, mode: "meta", primary: true, ready: true },

  { href: "/grammatik", key: "grammar", icon: BookOpen, mode: "lernen", primary: true, ready: true },
  { href: "/vokabeln", key: "vocab", icon: Library, mode: "lernen", ready: true },

  { href: "/lesen", key: "reading", icon: FileText, mode: "ueben", ready: true },
  { href: "/sprachbausteine", key: "langElements", icon: Blocks, mode: "ueben", ready: true },
  { href: "/schreiben", key: "writing", icon: PenLine, mode: "ueben", primary: true, ready: true },
  { href: "/hoeren", key: "listening", icon: Headphones, mode: "ueben", ready: true },

  { href: "/pruefungen", key: "exams", icon: Target, mode: "pruefung", ready: false, phase: 5 },

  { href: "/fehler", key: "mistakes", icon: CircleAlert, mode: "meta", primary: true, ready: true },
  { href: "/wiederholung", key: "review", icon: RotateCcw, mode: "meta", ready: false, phase: 4 },
  { href: "/tutor", key: "tutor", icon: Bot, mode: "meta", primary: true, ready: true },
  { href: "/fortschritt", key: "progress", icon: TrendingUp, mode: "meta", ready: false, phase: 6 },
  { href: "/plan", key: "plan", icon: CalendarDays, mode: "meta", ready: false, phase: 6 },
];

/** Look a nav item's label up in the active dictionary. */
export function navLabel(t: Dict, key: NavItem["key"]): string {
  return t.nav[key];
}

export const NAV_GROUPS: {
  mode: NavItem["mode"];
  titleKey: "groupLearn" | "groupPractice" | "groupExam";
}[] = [
  { mode: "lernen", titleKey: "groupLearn" },
  { mode: "ueben", titleKey: "groupPractice" },
  { mode: "pruefung", titleKey: "groupExam" },
];

export function findNavItem(key: SectionKey): NavItem | undefined {
  return NAV.find((n) => n.key === key);
}
