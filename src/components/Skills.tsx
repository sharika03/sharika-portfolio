import type { ComponentType, SVGProps } from "react";
import { skillGroups } from "@/content/profile";
import { GlassCard } from "./ui/GlassCard";
import { Cloud, Code, Compass, Link, Nodes, Users } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

const groupIcons: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  leadership: Users,
  architecture: Nodes,
  languages: Code,
  cloud: Cloud,
  integrations: Link,
  methodology: Compass,
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        index="05"
        eyebrow="Skills & Technologies"
        title="Where the depth sits"
        lede="Grouped by how the work actually divides: the people and architecture decisions first, the implementation surface beneath it."
      />

      <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => {
          const Icon = groupIcons[group.id];

          return (
            <Reveal key={group.id} delay={index * 80} className="h-full">
              <GlassCard className="flex h-full flex-col p-6 sm:p-7" spotlight>
                <div className="flex items-center gap-3.5">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-hairline-strong bg-elevated text-accent">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold">{group.name}</h3>
                </div>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-hairline bg-elevated/70 px-3 py-1.5 text-[0.8rem] leading-none text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </GlassCard>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
