import { certifications, education } from "@/content/profile";
import { GlassCard } from "./ui/GlassCard";
import { GraduationCap, Seal } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

export function Certifications() {
  return (
    <Section id="certifications">
      <SectionHeading
        index="06"
        eyebrow="Credentials"
        title="Certifications & education"
        lede="Formal credentials behind the commerce architecture years, and the degrees underneath them."
      />

      <div className="mt-16 grid gap-4 sm:grid-cols-2">
        {certifications.map((certification, index) => (
          <Reveal key={certification.level} delay={index * 90} className="h-full">
            <GlassCard className="flex h-full items-start gap-5 p-7 sm:p-8" spotlight>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-accent/25 bg-accent/8 text-accent">
                <Seal className="h-7 w-7" />
              </span>
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.18em] text-accent uppercase">
                  {certification.level}
                </p>
                <h3 className="mt-2.5 text-lg font-semibold">
                  {certification.name}
                </h3>
                <p className="mt-2 text-sm text-subtle">
                  {certification.issuer}
                  <span className="mx-2 text-hairline-strong">|</span>
                  {certification.issued}
                </p>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {education.map((entry, index) => (
          <Reveal key={entry.abbreviation} delay={index * 90} className="h-full">
            <GlassCard className="flex h-full items-start gap-5 p-7 sm:p-8" spotlight>
              <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl border border-hairline-strong bg-elevated text-muted">
                <GraduationCap className="h-7 w-7" />
              </span>
              <div>
                <p className="font-mono text-[0.65rem] tracking-[0.18em] text-subtle uppercase">
                  {entry.abbreviation}
                  <span className="mx-2">|</span>
                  {entry.period}
                </p>
                <h3 className="mt-2.5 text-lg font-semibold">{entry.degree}</h3>
                <p className="mt-2 text-sm text-subtle">
                  {entry.field}
                  <span className="mx-2 text-hairline-strong">|</span>
                  {entry.institution}
                </p>
              </div>
            </GlassCard>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
