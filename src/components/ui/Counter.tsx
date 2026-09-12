"use client";

import { useCountUp } from "@/hooks/useCountUp";
import { useInView } from "@/hooks/useInView";

type CounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  grouped?: boolean;
  className?: string;
  duration?: number;
};

export function Counter({
  value,
  prefix,
  suffix,
  grouped,
  className,
  duration,
}: CounterProps) {
  const { ref, inView } = useInView<HTMLSpanElement>();
  const current = useCountUp(value, inView, duration);
  const rounded = Math.round(current);

  return (
    <span ref={ref} className={`tabular-nums${className ? ` ${className}` : ""}`}>
      {prefix}
      {grouped ? rounded.toLocaleString("en-US") : rounded}
      {suffix}
    </span>
  );
}
