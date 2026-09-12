"use client";

import { useEffect, useRef } from "react";
import { heroMetricIds, metrics, profile } from "@/content/profile";
import { useTypewriter } from "@/hooks/useTypewriter";
import { prefersReducedMotion } from "@/lib/motion";
import { Counter } from "./ui/Counter";
import { CircuitLines, GradientMesh } from "./ui/GradientMesh";
import { ArrowDown, MapPin } from "./ui/Icons";

const heroMetrics = heroMetricIds.map(
  (id) => metrics.find((metric) => metric.id === id)!,
);

export function Hero() {
  const backdropRef = useRef<HTMLDivElement>(null);
  const { text, animated } = useTypewriter(profile.roles);

  useEffect(() => {
    const backdrop = backdropRef.current;
    if (!backdrop) return;
    if (prefersReducedMotion() || window.innerWidth < 768) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      backdrop.style.setProperty("--py", `${window.scrollY * 0.4}px`);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden pt-28 pb-20"
    >
      <div ref={backdropRef} className="absolute inset-0">
        <div className="hairline-grid absolute inset-0 opacity-70" />
        <CircuitLines className="opacity-60" />
        <GradientMesh />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <p
          className="rise inline-flex items-center gap-2.5 rounded-full border border-hairline-strong bg-surface/60 px-4 py-1.5 font-mono text-[0.7rem] tracking-[0.16em] text-muted uppercase backdrop-blur-sm"
          style={{ "--delay": "80ms" } as React.CSSProperties}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-glow-pulse absolute inset-0 rounded-full bg-accent" />
            <span className="absolute inset-0 rounded-full bg-accent opacity-60 blur-[3px]" />
          </span>
          13+ Years Engineering
          <span className="text-subtle">/</span>
          Team of 10+
        </p>

        <h1
          className="rise mt-8 font-display text-[2.75rem] leading-[1.05] font-semibold sm:text-6xl lg:text-[5.5rem]"
          style={{ "--delay": "160ms" } as React.CSSProperties}
        >
          <span className="block text-text">Sharika Dubey</span>
          <span className="gradient-text mt-1 block" aria-hidden="true">
            {text}
            {animated ? (
              <span className="animate-caret ml-1 inline-block h-[0.78em] w-[3px] translate-y-[0.06em] bg-accent align-baseline" />
            ) : null}
          </span>
          <span className="sr-only">
            {profile.roles.join(", ")}
          </span>
        </h1>

        <p
          className="rise mt-7 max-w-xl text-lg leading-relaxed text-muted sm:text-xl"
          style={{ "--delay": "260ms" } as React.CSSProperties}
        >
          {profile.heroSupport}
        </p>

        <div
          className="rise mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs tracking-[0.12em] text-subtle uppercase"
          style={{ "--delay": "320ms" } as React.CSSProperties}
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-accent" />
            {profile.location}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-accent" />
            {profile.availability}
          </span>
        </div>

        <div
          className="rise mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          style={{ "--delay": "400ms" } as React.CSSProperties}
        >
          <a
            href="#experience"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_0_0_0_rgba(45,212,191,0.5)] transition-all duration-300 hover:bg-accent-2 hover:shadow-[0_0_32px_-4px_rgba(45,212,191,0.6)]"
          >
            View Experience
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-hairline-strong px-7 py-3.5 text-sm font-semibold text-text transition-all duration-300 hover:border-accent/60 hover:bg-surface/60"
          >
            Get in Touch
          </a>
        </div>

        <dl
          className="rise glass mt-14 grid max-w-3xl grid-cols-1 divide-y divide-hairline rounded-2xl sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          style={{ "--delay": "500ms" } as React.CSSProperties}
        >
          {heroMetrics.map((metric) => (
            <div key={metric.id} className="px-6 py-5">
              <dt className="font-mono text-[0.65rem] tracking-[0.16em] text-subtle uppercase">
                {metric.label}
              </dt>
              <dd className="mt-2 font-display text-3xl font-semibold text-text">
                <Counter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  grouped={metric.grouped}
                />
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
