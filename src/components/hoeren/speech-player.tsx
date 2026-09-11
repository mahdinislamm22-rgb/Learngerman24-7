"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Square, Volume2, TriangleAlert, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";

/**
 * Plays a German transcript using the speech engine the browser already has.
 *
 * Three real problems this has to solve, none of them obvious:
 *
 * 1. VOICES LOAD LATE. Chrome returns an empty list from getVoices() on
 *    first call and fires `voiceschanged` a moment later. Reading the list
 *    once on mount gives you nothing.
 *
 * 2. CHROME STOPS LONG UTTERANCES. Speech silently cuts out after roughly
 *    fifteen seconds unless it is nudged. The Teil 2 interview runs well
 *    over a minute, so a pause/resume tick keeps it alive. The tick has to
 *    stop the moment speech ends or it keeps a dead timer running.
 *
 * 3. THE EXAM ONLY LETS YOU LISTEN ONCE. Enforcing that is the whole point
 *    — unlimited replay turns a listening test into a reading test with
 *    extra steps. Parts 1 and 2 play once, part 3 twice, and practice mode
 *    lifts the limit deliberately rather than by accident.
 */
export function SpeechPlayer({
  transcript,
  maxPlays,
  unlimited = false,
  label,
  onFirstPlay,
}: {
  transcript: string;
  maxPlays: number;
  /** Practice mode: replay as often as you like. */
  unlimited?: boolean;
  label?: string;
  onFirstPlay?: () => void;
}) {
  const { t } = useI18n();
  const [supported, setSupported] = useState<boolean | null>(null);
  const [germanVoice, setGermanVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [speaking, setSpeaking] = useState(false);
  const [plays, setPlays] = useState(0);
  const [rate, setRate] = useState(1);

  const keepAlive = useRef<ReturnType<typeof setInterval> | null>(null);

  // --- find a German voice -------------------------------------------
  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      const id = setTimeout(() => setSupported(false), 0);
      return () => clearTimeout(id);
    }

    const read = () => {
      const voices = window.speechSynthesis.getVoices();
      if (!voices.length) return;
      // Prefer a de-DE voice, then any German at all.
      const de =
        voices.find((v) => v.lang?.toLowerCase() === "de-de") ??
        voices.find((v) => v.lang?.toLowerCase().startsWith("de")) ??
        null;
      setGermanVoice(de);
      setSupported(true);
    };

    // getVoices() is usually empty on the first call; the event is what
    // actually delivers them.
    window.speechSynthesis.addEventListener("voiceschanged", read);
    const first = setTimeout(read, 0);
    // If the event never fires and the list stays empty, say so rather
    // than leaving a dead button on the page.
    const giveUp = setTimeout(() => setSupported((s) => (s === null ? false : s)), 2500);

    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", read);
      clearTimeout(first);
      clearTimeout(giveUp);
    };
  }, []);

  // --- always stop speaking when this player goes away ----------------
  useEffect(() => {
    return () => {
      if (keepAlive.current) clearInterval(keepAlive.current);
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const limitReached = !unlimited && plays >= maxPlays;

  function stop() {
    if (keepAlive.current) {
      clearInterval(keepAlive.current);
      keepAlive.current = null;
    }
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }

  function play() {
    if (limitReached || speaking) return;

    // Cancel anything another player left running, or the engine queues it.
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(transcript);
    utterance.lang = germanVoice?.lang ?? "de-DE";
    if (germanVoice) utterance.voice = germanVoice;
    utterance.rate = rate;
    utterance.pitch = 1;

    utterance.onend = () => {
      if (keepAlive.current) {
        clearInterval(keepAlive.current);
        keepAlive.current = null;
      }
      setSpeaking(false);
    };
    utterance.onerror = () => {
      if (keepAlive.current) {
        clearInterval(keepAlive.current);
        keepAlive.current = null;
      }
      setSpeaking(false);
    };

    setSpeaking(true);
    setPlays((n) => n + 1);
    if (plays === 0) onFirstPlay?.();

    window.speechSynthesis.speak(utterance);

    // Keep Chrome from cutting the audio off part-way through.
    keepAlive.current = setInterval(() => {
      if (!window.speechSynthesis.speaking) return;
      window.speechSynthesis.pause();
      window.speechSynthesis.resume();
    }, 10_000);
  }

  if (supported === false) {
    return (
      <div className="flex items-start gap-2.5 rounded-[var(--radius-control)] border border-amber/30 bg-amber-soft px-3.5 py-3">
        <TriangleAlert size={16} className="mt-0.5 shrink-0 text-amber" aria-hidden />
        <p className="text-[13.5px] leading-relaxed text-ink">{t.hoeren.noSpeech}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 rounded-[var(--radius-control)] border border-line bg-surface-2 px-3.5 py-3">
      <div className="flex flex-wrap items-center gap-2.5">
        <Volume2 size={16} className="shrink-0 text-iris" aria-hidden />
        {label ? <span className="text-[13.5px] font-semibold text-ink">{label}</span> : null}

        <span className="ml-auto flex items-center gap-2">
          {!unlimited ? (
            <Badge tone={limitReached ? "clay" : "neutral"}>
              {plays}/{maxPlays}
            </Badge>
          ) : null}
        </span>
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {speaking ? (
          <Button size="sm" variant="secondary" onClick={stop}>
            <Square size={14} aria-hidden />
            {t.hoeren.stop}
          </Button>
        ) : (
          <Button size="sm" onClick={play} disabled={limitReached || supported === null}>
            <Play size={14} aria-hidden />
            {plays === 0 ? t.hoeren.play : t.hoeren.playAgain}
          </Button>
        )}

        <label className="ml-1 flex items-center gap-1.5 text-[12.5px] text-ink-soft">
          <Gauge size={13} aria-hidden />
          <select
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            disabled={speaking}
            className="rounded border border-line bg-surface px-1.5 py-1 text-[12.5px]"
            aria-label={t.hoeren.speed}
          >
            <option value={0.8}>0,8×</option>
            <option value={0.9}>0,9×</option>
            <option value={1}>1×</option>
            <option value={1.1}>1,1×</option>
          </select>
        </label>
      </div>

      {limitReached ? (
        <p className="text-[12.5px] text-ink-faint">{t.hoeren.limitReached}</p>
      ) : null}

      {supported === true && !germanVoice ? (
        <p className={cn("text-[12.5px] text-amber")}>{t.hoeren.noGermanVoice}</p>
      ) : null}
    </div>
  );
}
