import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function Section({ id, children, className }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative mx-auto w-full max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </section>
  );
}

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: ReactNode;
  lede?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  lede,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <Reveal
      className={`max-w-3xl${centered ? " mx-auto text-center" : ""}`}
    >
      <div
        className={`flex items-center gap-3 font-mono text-xs tracking-[0.24em] text-accent uppercase${
          centered ? " justify-center" : ""
        }`}
      >
        <span className="text-subtle">{index}</span>
        <span className="accent-bar h-px w-8 opacity-70" />
        {eyebrow}
      </div>
      <h2 className="mt-5 text-3xl leading-[1.1] font-semibold sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {lede ? (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
          {lede}
        </p>
      ) : null}
    </Reveal>
  );
}
