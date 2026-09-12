"use client";

import { useState } from "react";
import { featuredWork, type CaseStudy } from "@/content/profile";
import { GlassCard } from "./ui/GlassCard";
import { ChevronDown } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

const narrative = [
  { key: "problem", label: "Problem" },
  { key: "approach", label: "Approach" },
  { key: "impact", label: "Impact" },
] as const;

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  const [open, setOpen] = useState(false);
  const panelId = `case-study-${study.id}`;

  return (
    <GlassCard className="p-7 sm:p-9" spotlight>
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <span className="font-mono text-[0.65rem] tracking-[0.2em] text-subtle uppercase">
            Case {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="mt-3 text-2xl font-semibold sm:text-[1.75rem]">
            {study.client}
          </h3>
          <p className="mt-2 text-sm text-accent sm:text-base">{study.scope}</p>
        </div>
        <span className="shrink-0 rounded-full border border-hairline bg-elevated/70 px-3.5 py-1.5 font-mono text-[0.7rem] tracking-[0.08em] text-muted">
          {study.period}
        </span>
      </div>

      <div className="mt-8 grid gap-6 border-t border-hairline pt-8 lg:grid-cols-3 lg:gap-8">
        {narrative.map(({ key, label }) => (
          <div key={key}>
            <p className="font-mono text-[0.65rem] tracking-[0.18em] text-accent uppercase">
              {label}
            </p>
            <p className="mt-3 text-sm leading-[1.7] text-muted">
              {study[key]}
            </p>
          </div>
        ))}
      </div>

      <ul className="mt-8 flex flex-wrap gap-2">
        {study.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-full border border-hairline bg-elevated/70 px-3 py-1.5 text-[0.8rem] leading-none text-subtle"
          >
            {tag}
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group mt-8 inline-flex items-center gap-2 rounded-full border border-hairline-strong px-5 py-2.5 text-sm font-medium text-text transition-all duration-300 hover:border-accent/60 hover:bg-elevated/70"
      >
        {open ? "Hide Case Study" : "Read Case Study"}
        <ChevronDown
          className={`h-4 w-4 text-accent transition-transform duration-400 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        id={panelId}
        aria-hidden={!open}
        className={`grid transition-all duration-500 ease-out ${
          open
            ? "mt-7 grid-rows-[1fr] opacity-100"
            : "mt-0 grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="space-y-4 border-t border-hairline pt-7">
            {study.details.map((detail, detailIndex) => (
              <li key={detailIndex} className="flex gap-3.5">
                <span
                  aria-hidden="true"
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                />
                <p className="text-sm leading-[1.75] text-muted">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </GlassCard>
  );
}

export function Work() {
  return (
    <Section id="work">
      <SectionHeading
        index="03"
        eyebrow="Featured Work"
        title="Platform ownership, not side projects"
        lede="Enterprise engagements led with a team. Each one framed as the problem it started from, the approach taken, and what it moved."
      />

      <div className="mt-16 space-y-5">
        {featuredWork.map((study, index) => (
          <Reveal key={study.id} delay={index * 90}>
            <CaseStudyCard study={study} index={index} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
