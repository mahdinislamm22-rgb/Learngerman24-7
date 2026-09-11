"use client";

import { useEffect } from "react";
import { markLessonRead } from "@/app/(b1)/grammatik/actions";

export function MarkLessonRead({ slug }: { slug: string }) {
  useEffect(() => {
    void markLessonRead(slug);
  }, [slug]);

  return null;
}