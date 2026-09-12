import { profile } from "@/content/profile";
import { GlassCard } from "./ui/GlassCard";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

const pipeline = [
  {
    stage: "Trigger Events",
    detail: "Resident and property lifecycle events enter the platform",
  },
  {
    stage: "Playbook Automation Engine",
    detail: "Enrollment-gated membership, stage-based journeys, per-property overrides",
    emphasis: true,
  },
  {
    stage: "Kafka Dispatch",
    detail: "Event-driven fan-out to per-channel workers",
  },
  {
    stage: "Twilio + Mailgun",
    detail: "SMS, voice, and email delivery at production volume",
  },
  {
    stage: "Delivery Reconciliation",
    detail: "Bounce handling, opt-in/opt-out compliance, status sync",
  },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        index="01"
        eyebrow="About"
        title={
          <>
            A decade in commerce architecture,
            <br className="hidden sm:block" />{" "}
            <span className="gradient-text">now leading distributed systems.</span>
          </>
        }
      />

      <div className="mt-16 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          {profile.about.map((paragraph, index) => (
            <Reveal key={index} delay={index * 90}>
              <p className="mb-6 text-base leading-[1.75] text-muted sm:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}

          <Reveal delay={360}>
            <div className="mt-4 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-hairline pt-8 sm:grid-cols-3">
              {[
                { label: "Current Role", value: "Associate Project Lead" },
                { label: "Company", value: "ThinkSys Software" },
                { label: "Based In", value: profile.location },
                { label: "Team Size", value: "10+ engineers" },
                { label: "Focus", value: "Microservices & platform" },
                { label: "Availability", value: profile.availability },
              ].map((fact) => (
                <div key={fact.label}>
                  <dt className="font-mono text-[0.65rem] tracking-[0.16em] text-subtle uppercase">
                    {fact.label}
                  </dt>
                  <dd className="mt-1.5 text-sm text-text">{fact.value}</dd>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={180}>
          <GlassCard className="h-full p-7 sm:p-8">
            <p className="font-mono text-[0.65rem] tracking-[0.18em] text-accent uppercase">
              Production system under my ownership
            </p>
            <h3 className="mt-3 text-xl font-semibold">
              Communications platform, end to end
            </h3>

            <ol className="mt-8 space-y-0">
              {pipeline.map((step, index) => (
                <li key={step.stage} className="relative flex gap-4 pb-7 last:pb-0">
                  {index < pipeline.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute top-4 left-[0.4375rem] h-full w-px bg-gradient-to-b from-hairline-strong to-hairline"
                    />
                  ) : null}
                  <span
                    aria-hidden="true"
                    className={`relative mt-1 h-3.5 w-3.5 shrink-0 rounded-full border ${
                      step.emphasis
                        ? "border-accent bg-accent/25 shadow-[0_0_14px_-2px_rgba(45,212,191,0.9)]"
                        : "border-hairline-strong bg-elevated"
                    }`}
                  />
                  <div className="-mt-0.5">
                    <p
                      className={`text-sm font-medium ${
                        step.emphasis ? "text-accent" : "text-text"
                      }`}
                    >
                      {step.stage}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-subtle">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>

            <p className="mt-2 border-t border-hairline pt-5 font-mono text-[0.7rem] tracking-[0.1em] text-subtle uppercase">
              ~400,000 messages / 7 days
              <span className="mx-2 text-hairline-strong">|</span>
              200+ accounts
            </p>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
