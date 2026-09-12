"use client";

import { useState } from "react";
import { earlyCareer, experience } from "@/content/profile";
import { GlassCard } from "./ui/GlassCard";
import { ChevronDown } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

/** Negative offsets pull the node back over the container padding so it
 *  centres on the timeline spine. */
function TimelineNode({ current = false }: { current?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="absolute top-8 -left-8 grid h-3.5 w-3.5 place-items-center sm:-left-12"
    >
      {current ? (
        <>
          <span className="animate-glow-pulse absolute inset-[-6px] rounded-full bg-accent/25 blur-[6px]" />
          <span className="relative h-3.5 w-3.5 rounded-full border-2 border-accent bg-ink" />
        </>
      ) : (
        <span className="h-3 w-3 rounded-full border border-hairline-strong bg-elevated" />
      )}
    </span>
  );
}

export function Experience() {
  const [showEarly, setShowEarly] = useState(false);

  return (
    <Section id="experience">
      <SectionHeading
        index="04"
        eyebrow="Experience"
        title="Thirteen years, one direction of travel"
        lede="From Magento theming to owning distributed platform architecture and the teams that build it."
      />

      <div className="relative mt-16 pl-8 sm:pl-12">
        <span
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-[0.4375rem] w-px bg-gradient-to-b from-accent/70 via-hairline-strong to-transparent"
        />

        {experience.map((role) => (
          <Reveal key={role.company}>
            <div className="relative pb-10">
              <TimelineNode current={role.current} />
              <GlassCard className="p-7 sm:p-8" spotlight>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-semibold sm:text-2xl">
                        {role.company}
                      </h3>
                      {role.current ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[0.6rem] tracking-[0.16em] text-accent uppercase">
                          <span className="h-1 w-1 rounded-full bg-accent" />
                          Current
                        </span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-base text-accent">{role.role}</p>
                  </div>
                  <div className="shrink-0 font-mono text-xs tracking-[0.08em] text-subtle sm:text-right">
                    <p>{role.period}</p>
                    {role.location ? (
                      <p className="mt-1.5">{role.location}</p>
                    ) : null}
                  </div>
                </div>

                {role.summary ? (
                  <p className="mt-5 text-sm leading-[1.75] text-muted">
                    {role.summary}
                  </p>
                ) : null}

                {role.engagements ? (
                  <div className="mt-8 space-y-6 border-t border-hairline pt-8">
                    <p className="font-mono text-[0.65rem] tracking-[0.18em] text-subtle uppercase">
                      Engagements
                    </p>
                    {role.engagements.map((engagement) => (
                      <div
                        key={engagement.name}
                        className="border-l border-hairline-strong pl-5"
                      >
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                          <h4 className="text-sm font-semibold text-text">
                            {engagement.name}
                          </h4>
                          <span className="shrink-0 font-mono text-[0.7rem] text-subtle">
                            {engagement.period}
                          </span>
                        </div>
                        <p className="mt-2 text-sm leading-[1.7] text-muted">
                          {engagement.summary}
                        </p>
                      </div>
                    ))}
                  </div>
                ) : null}
              </GlassCard>
            </div>
          </Reveal>
        ))}

        <Reveal>
          <div className="relative">
            <TimelineNode />
            <button
              type="button"
              onClick={() => setShowEarly((value) => !value)}
              aria-expanded={showEarly}
              aria-controls="early-career"
              className="glass lift group flex w-full items-center justify-between gap-4 rounded-2xl px-7 py-5 text-left sm:px-8"
            >
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.18em] text-subtle uppercase">
                  2013 – 2019
                </p>
                <h3 className="mt-2 text-base font-semibold sm:text-lg">
                  Early Career — Magento / E-Commerce Development
                </h3>
                <p className="mt-1.5 text-sm text-subtle">
                  {earlyCareer.length} roles across agency and product teams
                </p>
              </div>
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-hairline-strong text-accent transition-colors duration-300 group-hover:border-accent/60">
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-400 ${
                    showEarly ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>

            <div
              id="early-career"
              aria-hidden={!showEarly}
              className={`grid transition-all duration-500 ease-out ${
                showEarly
                  ? "mt-8 grid-rows-[1fr] opacity-100"
                  : "mt-0 grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-4">
                  {earlyCareer.map((role) => (
                    <div
                      key={role.company}
                      className="rounded-xl border border-hairline bg-surface/40 p-6"
                    >
                      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                        <h4 className="text-base font-semibold text-text">
                          {role.company}
                          <span className="ml-2 font-normal text-accent">
                            {role.role}
                          </span>
                        </h4>
                        <span className="shrink-0 font-mono text-[0.7rem] text-subtle">
                          {role.period}
                        </span>
                      </div>
                      <p className="mt-3 text-sm leading-[1.7] text-muted">
                        {role.summary}
                      </p>
                      {role.sites ? (
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {role.sites.map((site) => (
                            <li
                              key={site}
                              className="rounded-full border border-hairline px-2.5 py-1 font-mono text-[0.7rem] text-subtle"
                            >
                              {site}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
