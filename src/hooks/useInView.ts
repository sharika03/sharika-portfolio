"use client";

import { useEffect, useRef, useState } from "react";

type Handler = (isIntersecting: boolean) => void;

const handlers = new WeakMap<Element, Handler>();
let sharedObserver: IntersectionObserver | null = null;

/** One observer serves every revealed element on the page. */
function getObserver(): IntersectionObserver {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          handlers.get(entry.target)?.(entry.isIntersecting);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
  }
  return sharedObserver;
}

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = getObserver();
    handlers.set(element, (isIntersecting) => {
      if (!isIntersecting) return;
      setInView(true);
      observer.unobserve(element);
      handlers.delete(element);
    });
    observer.observe(element);

    return () => {
      observer.unobserve(element);
      handlers.delete(element);
    };
  }, []);

  return { ref, inView };
}
