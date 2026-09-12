"use client";

import { useEffect, useState } from "react";

export function useScrollSpy(ids: readonly string[], offset = 120) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      let current = ids[0];

      for (const id of ids) {
        const element = document.getElementById(id);
        if (!element) continue;
        if (element.getBoundingClientRect().top - offset <= 0) current = id;
      }

      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) current = ids[ids.length - 1];

      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [ids, offset]);

  return active;
}
