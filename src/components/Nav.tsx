"use client";

import { useEffect, useState } from "react";
import { navItems, profile } from "@/content/profile";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { withBasePath } from "@/lib/basePath";
import { Close, Download, Menu } from "./ui/Icons";

const sectionIds = navItems.map((item) => item.id);
const resumeUrl = withBasePath(profile.resumeHref);

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-hairline bg-ink/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12"
      >
        <a
          href="#home"
          className="group flex items-center gap-3"
          aria-label={`${profile.name}, back to top`}
        >
          <span className="relative grid h-10 w-10 place-items-center rounded-xl border border-hairline-strong bg-elevated font-display text-sm font-semibold tracking-tight text-text transition-colors duration-300 group-hover:border-accent/50">
            SD
            <span className="accent-bar absolute inset-x-2 -bottom-px h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-semibold text-text">
              {profile.name}
            </span>
            <span className="font-mono text-[0.65rem] tracking-[0.18em] text-subtle uppercase">
              {profile.title}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative block px-3.5 py-2 text-sm transition-colors duration-300 ${
                    isActive ? "text-text" : "text-subtle hover:text-text"
                  }`}
                >
                  {item.label}
                  <span
                    className={`accent-bar absolute inset-x-3.5 bottom-0.5 h-px transition-opacity duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={resumeUrl}
            download
            className="hidden items-center gap-2 rounded-full border border-hairline-strong px-4 py-2 text-sm text-muted transition-all duration-300 hover:border-accent/60 hover:text-text sm:inline-flex"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-xl border border-hairline-strong text-muted transition-colors duration-300 hover:text-text lg:hidden"
          >
            {open ? (
              <Close className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-hairline bg-ink/95 backdrop-blur-xl lg:hidden"
      >
        <ul className="mx-auto max-w-7xl px-6 py-4 sm:px-8">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between border-b border-hairline py-3.5 text-base transition-colors ${
                  active === item.id ? "text-accent" : "text-muted"
                }`}
              >
                {item.label}
                <span className="font-mono text-xs text-subtle">
                  {String(navItems.indexOf(item) + 1).padStart(2, "0")}
                </span>
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href={resumeUrl}
              download
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full border border-hairline-strong py-3 text-sm text-text"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
