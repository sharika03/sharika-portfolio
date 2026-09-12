"use client";

import type { MouseEvent, ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  /** Adds a cursor-tracked highlight on pointer devices. */
  spotlight?: boolean;
};

export function GlassCard({
  children,
  className,
  spotlight = false,
}: GlassCardProps) {
  const trackPointer = (event: MouseEvent<HTMLDivElement>) => {
    if (!spotlight) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty(
      "--mx",
      `${event.clientX - bounds.left}px`,
    );
    event.currentTarget.style.setProperty(
      "--my",
      `${event.clientY - bounds.top}px`,
    );
  };

  return (
    <div
      onMouseMove={trackPointer}
      className={`glass lift relative overflow-hidden rounded-2xl${
        spotlight ? " spotlight" : ""
      }${className ? ` ${className}` : ""}`}
    >
      {children}
    </div>
  );
}
