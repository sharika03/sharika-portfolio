"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "@/lib/motion";

export function useCountUp(target: number, active: boolean, duration = 1700) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;

    if (prefersReducedMotion()) {
      setValue(target);
      return;
    }

    let begin = 0;
    let frame = requestAnimationFrame(function tick(now: number) {
      if (!begin) begin = now;
      const progress = Math.min((now - begin) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    });

    return () => cancelAnimationFrame(frame);
  }, [active, target, duration]);

  return value;
}
