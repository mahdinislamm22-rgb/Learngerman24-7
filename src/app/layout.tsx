import type { Metadata, Viewport } from "next";
import {
  Bricolage_Grotesque,
  Source_Serif_4,
  JetBrains_Mono,
  Noto_Sans_Bengali,
} from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

// Bengali explanations are a core feature — without this face the
// browser falls back to a system font that renders conjuncts poorly.
const notoBengali = Noto_Sans_Bengali({
  subsets: ["bengali"],
  variable: "--font-noto-bengali",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Deutsch verstehen. B1 bestehen.",
    template: "%s · Deutsch B1",
  },
  description:
    "Deutsch lernen mit Erklärungen auf Bengalisch, Englisch und Italienisch — und gezielte Vorbereitung auf die telc-B1-Prüfung.",
};

export const viewport: Viewport = {
  themeColor: "#f4efe4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de">
      <body
        className={`${bricolage.variable} ${sourceSerif.variable} ${jetbrains.variable} ${notoBengali.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
