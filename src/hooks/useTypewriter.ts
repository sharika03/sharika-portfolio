"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

type Progress = {
  index: number;
  length: number;
  deleting: boolean;
};

const TYPE_MS = 62;
const DELETE_MS = 28;
const HOLD_MS = 1900;

export function useTypewriter(words: readonly string[]) {
  const [progress, setProgress] = useState<Progress>({
    index: 0,
    length: 0,
    deleting: false,
  });
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(!prefersReducedMotion());
  }, []);

  useEffect(() => {
    if (!animated) return;

    const word = words[progress.index];
    const atEnd = !progress.deleting && progress.length === word.length;
    const delay = atEnd ? HOLD_MS : progress.deleting ? DELETE_MS : TYPE_MS;

    const timer = setTimeout(() => {
      setProgress((current) => {
        const active = words[current.index];

        if (!current.deleting) {
          return current.length < active.length
            ? { ...current, length: current.length + 1 }
            : { ...current, deleting: true };
        }

        return current.length > 0
          ? { ...current, length: current.length - 1 }
          : {
              index: (current.index + 1) % words.length,
              length: 0,
              deleting: false,
            };
      });
    }, delay);

    return () => clearTimeout(timer);
  }, [animated, progress, words]);

  if (!animated) {
    return { text: words[0], animated };
  }

  return {
    text: words[progress.index].slice(0, progress.length),
    animated,
  };
}
