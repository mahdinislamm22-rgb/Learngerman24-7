"use client";

import { useState, useTransition } from "react";
import { Check, Trash2, StickyNote, RotateCcw } from "lucide-react";
import { pick, type Lang, type Multi } from "@/lib/types";
import {
  setMistakeStatus,
  saveMistakeNote,
  deleteMistake,
} from "@/app/(b1)/fehler/actions";
import { Card, CardBody } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/i18n/provider";
import { cn } from "@/lib/cn";

export type MistakeRow = {
  id: string;
  category: string;
  tag: string;
  original: string;
  corrected: string | null;
  explanation: Multi | null;
  times_wrong: number;
  status: "open" | "learning" | "learned";
  note: string | null;
};

export function MistakeCard({
  mistake,
  explainLang,
}: {
  mistake: MistakeRow;
  explainLang: Lang;
}) {
  const { t } = useI18n();
  const [pending, start] = useTransition();
  const [noteOpen, setNoteOpen] = useState(false);
  const [note, setNote] = useState(mistake.note ?? "");
  const [confirmDelete, setConfirmDelete] = useState(false);
  const bn = explainLang === "bn";
  const learned = mistake.status === "learned";

  return (
    <Card
      className={cn(
        "transition-opacity",
        learned && "opacity-60",
        pending && "opacity-50",
      )}
    >
      <CardBody className="flex flex-col gap-2.5 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge tone={learned ? "sage" : "clay"}>
            {t.schreiben.mistakeCat[
              mistake.category as keyof typeof t.schreiben.mistakeCat
            ] ?? mistake.category}
          </Badge>
          <span className="font-[family-name:var(--font-mono)] text-[10.5px] text-ink-faint">
            {mistake.tag}
          </span>
          {mistake.times_wrong > 1 ? (
            <Badge tone="clay">
              {mistake.times_wrong}× {t.fehler.timesWrong}
            </Badge>
          ) : null}
        </div>

        <div>
          <p className="prose-de text-[15px] leading-relaxed text-clay line-through decoration-clay/40">
            {mistake.original}
          </p>
          {mistake.corrected ? (
            <p className="prose-de text-[15px] font-semibold leading-relaxed text-sage">
              {mistake.corrected}
            </p>
          ) : null}
        </div>

        {mistake.explanation ? (
          <p className={cn("text-[14px] leading-relaxed text-ink-soft", bn && "bn")}>
            {pick(mistake.explanation, explainLang)}
          </p>
        ) : null}

        {mistake.note && !noteOpen ? (
          <p className="rounded-[var(--radius-control)] bg-surface-2 px-3 py-2 text-[13.5px] italic text-ink-soft">
            {mistake.note}
          </p>
        ) : null}

        {noteOpen ? (
          <div className="flex flex-col gap-2">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={2}
              placeholder={t.fehler.notePlaceholder}
              className="w-full rounded-[var(--radius-control)] border border-line bg-surface p-2.5 text-[14px]"
            />
            <div className="flex gap-2">
              <Button
                size="sm"
                onClick={() =>
                  start(async () => {
                    await saveMistakeNote(mistake.id, note);
                    setNoteOpen(false);
                  })
                }
              >
                {t.common.save}
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setNoteOpen(false)}>
                {t.common.back}
              </Button>
            </div>
          </div>
        ) : null}

        <div className="flex flex-wrap items-center gap-2 border-t border-line pt-2.5">
          <Button
            size="sm"
            variant={learned ? "secondary" : "primary"}
            onClick={() =>
              start(() => {
                void setMistakeStatus(mistake.id, learned ? "open" : "learned");
              })
            }
          >
            {learned ? (
              <>
                <RotateCcw size={14} aria-hidden />
                {t.fehler.markOpen}
              </>
            ) : (
              <>
                <Check size={14} aria-hidden />
                {t.fehler.markLearned}
              </>
            )}
          </Button>

          <Button size="sm" variant="ghost" onClick={() => setNoteOpen((o) => !o)}>
            <StickyNote size={14} aria-hidden />
            {t.fehler.addNote}
          </Button>

          {confirmDelete ? (
            <span className="ml-auto flex items-center gap-2">
              <span className={cn("text-[12.5px] text-clay", bn && "bn")}>
                {t.fehler.confirmDelete}
              </span>
              <Button
                size="sm"
                variant="danger"
                onClick={() =>
                  start(() => {
                    void deleteMistake(mistake.id);
                  })
                }
              >
                {t.fehler.delete}
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setConfirmDelete(false)}
              >
                {t.common.back}
              </Button>
            </span>
          ) : (
            <button
              type="button"
              onClick={() => setConfirmDelete(true)}
              aria-label={t.fehler.delete}
              className="ml-auto p-2 text-ink-faint transition-colors hover:text-clay"
            >
              <Trash2 size={15} aria-hidden />
            </button>
          )}
        </div>
      </CardBody>
    </Card>
  );
}
