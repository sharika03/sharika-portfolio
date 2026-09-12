import { navItems, profile } from "@/content/profile";
import { ArrowUpRight } from "./ui/Icons";

export function Footer() {
  return (
    <footer className="relative border-t border-hairline">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-14 sm:px-8 lg:flex-row lg:items-start lg:justify-between lg:px-12">
        <div>
          <p className="font-display text-lg font-semibold text-text">
            {profile.name}
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-subtle">
            {profile.title} — {profile.tagline}
          </p>
          <p className="mt-4 font-mono text-[0.7rem] tracking-[0.14em] text-subtle uppercase">
            {profile.location}
            <span className="mx-2 text-hairline-strong">|</span>
            {profile.availability}
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:gap-16">
          <nav aria-label="Footer">
            <p className="font-mono text-[0.65rem] tracking-[0.18em] text-subtle uppercase">
              Sections
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2.5 sm:grid-cols-1">
              {navItems.slice(1).map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="text-sm text-muted transition-colors duration-300 hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-mono text-[0.65rem] tracking-[0.18em] text-subtle uppercase">
              Direct
            </p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm text-muted transition-colors duration-300 hover:text-accent"
                >
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profile.phoneHref}`}
                  className="text-sm text-muted transition-colors duration-300 hover:text-accent"
                >
                  {profile.phone}
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 text-sm text-muted transition-colors duration-300 hover:text-accent"
                >
                  LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-hairline">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 font-mono text-[0.7rem] tracking-[0.1em] text-subtle uppercase sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>
            &copy; {new Date().getFullYear()} {profile.name}
          </p>
          <a
            href="#home"
            className="transition-colors duration-300 hover:text-accent"
          >
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
