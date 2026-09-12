"use client";

import { useState } from "react";
import { profile } from "@/content/profile";
import { GlassCard } from "./ui/GlassCard";
import { ArrowUpRight, Check, LinkedIn, Mail, Phone, Send, Spinner } from "./ui/Icons";
import { Reveal } from "./ui/Reveal";
import { Section, SectionHeading } from "./ui/Section";

type Status = "idle" | "sending" | "sent";

const channels = [
  {
    id: "email",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    Icon: Mail,
  },
  {
    id: "phone",
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phoneHref}`,
    Icon: Phone,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "sharika-dubey",
    href: profile.linkedin.href,
    Icon: LinkedIn,
  },
];

const fields = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
] as const;

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  // No backend is wired yet, so the submit hands the composed note to the
  // visitor's mail client. Swap this for a real POST once an endpoint exists.
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (status !== "idle") return;

    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const from = String(data.get("email") ?? "");
    const message = String(data.get("message") ?? "");
    const draft = `mailto:${profile.email}?subject=${encodeURIComponent(
      `Portfolio enquiry from ${name}`,
    )}&body=${encodeURIComponent(`${message}\n\n--\n${name}\n${from}`)}`;

    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      window.location.href = draft;
    }, 900);
    setTimeout(() => setStatus("idle"), 5200);
  };

  return (
    <Section id="contact">
      <SectionHeading
        index="07"
        eyebrow="Contact"
        title={
          <>
            Let&apos;s talk about your engineering
            <br className="hidden sm:block" />{" "}
            <span className="gradient-text">team&apos;s next challenge.</span>
          </>
        }
        lede="Open to technical leadership conversations — platform architecture, team scaling, or untangling a legacy system that has outgrown its design."
      />

      <div className="mt-16 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {channels.map((channel, index) => (
            <Reveal key={channel.id} delay={index * 80} className="h-full">
              <a
                href={channel.href}
                target={channel.id === "linkedin" ? "_blank" : undefined}
                rel={channel.id === "linkedin" ? "noreferrer" : undefined}
                className="glass lift group flex h-full items-center gap-4 rounded-2xl p-5 sm:p-6"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-hairline-strong bg-elevated text-accent transition-colors duration-300 group-hover:border-accent/50">
                  <channel.Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[0.65rem] tracking-[0.18em] text-subtle uppercase">
                    {channel.label}
                  </span>
                  <span className="mt-1 block truncate text-sm text-text">
                    {channel.value}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-subtle transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <GlassCard className="p-7 sm:p-9">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-5 sm:grid-cols-2">
                {fields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block font-mono text-[0.65rem] tracking-[0.18em] text-subtle uppercase"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type={field.type}
                      autoComplete={field.autoComplete}
                      required
                      disabled={status !== "idle"}
                      className="mt-2.5 w-full rounded-xl border border-hairline bg-ink/60 px-4 py-3 text-sm text-text transition-colors duration-300 outline-none placeholder:text-subtle/60 focus:border-accent/60 disabled:opacity-60"
                      placeholder={
                        field.name === "name" ? "Your name" : "you@company.com"
                      }
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-mono text-[0.65rem] tracking-[0.18em] text-subtle uppercase"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  disabled={status !== "idle"}
                  className="mt-2.5 w-full resize-y rounded-xl border border-hairline bg-ink/60 px-4 py-3 text-sm leading-relaxed text-text transition-colors duration-300 outline-none placeholder:text-subtle/60 focus:border-accent/60 disabled:opacity-60"
                  placeholder="What are you building, and where is it hurting?"
                />
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-accent-2 hover:shadow-[0_0_32px_-4px_rgba(45,212,191,0.6)] disabled:cursor-default"
                >
                  {status === "idle" ? (
                    <>
                      Send Message
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </>
                  ) : null}
                  {status === "sending" ? (
                    <>
                      Preparing
                      <Spinner className="animate-spin-slow h-4 w-4" />
                    </>
                  ) : null}
                  {status === "sent" ? (
                    <>
                      Draft Opened
                      <Check className="h-4 w-4" />
                    </>
                  ) : null}
                </button>

                <p
                  aria-live="polite"
                  className={`text-sm transition-opacity duration-500 ${
                    status === "sent"
                      ? "text-muted opacity-100"
                      : "opacity-0"
                  }`}
                >
                  {status === "sent" ? (
                    <>
                      Your mail client should open with this drafted. If not,
                      write to{" "}
                      <a
                        href={`mailto:${profile.email}`}
                        className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                      >
                        {profile.email}
                      </a>
                    </>
                  ) : null}
                </p>
              </div>
            </form>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
