"use client";

import type { CSSProperties, ReactNode } from "react";
import { useInView } from "@/hooks/useInView";

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds, applied as a CSS transition delay. */
  delay?: number;
  className?: string;
  style?: CSSProperties;
};

export function Reveal({ children, delay = 0, className, style }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-revealed={inView}
      className={`reveal${className ? ` ${className}` : ""}`}
      style={{ ...style, "--delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
