import { metrics } from "@/content/profile";
import { Counter } from "./ui/Counter";
import { GlassCard } from "./ui/GlassCard";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

export function Metrics() {
  return (
    <Section id="impact" className="pt-0 lg:pt-0">
      <SectionHeading
        index="02"
        eyebrow="Impact"
        title="The numbers behind the systems"
        lede="Scale, ownership, and team footprint from the platforms currently in production."
      />

      <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => {
          const wide = metric.id === "teams";

          return (
            <Reveal
              key={metric.id}
              delay={index * 70}
              className={wide ? "h-full sm:col-span-2" : "h-full"}
            >
              <GlassCard className="flex h-full flex-col justify-between p-6 sm:p-7" spotlight>
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[0.65rem] tracking-[0.18em] text-subtle uppercase">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="accent-bar h-px w-10 opacity-50"
                  />
                </div>

                <p className="mt-8 font-display text-4xl leading-none font-semibold lg:text-5xl">
                  <span className="gradient-text">
                    <Counter
                      value={metric.value}
                      prefix={metric.prefix}
                      suffix={metric.suffix}
                      grouped={metric.grouped}
                      duration={1500 + index * 120}
                    />
                  </span>
                </p>

                <p className="mt-4 text-sm font-medium text-text">
                  {metric.label}
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-subtle">
                  {metric.detail}
                </p>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
