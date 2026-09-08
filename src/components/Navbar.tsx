import Link from "next/link";
import { NAV_LINKS, SITE } from "@/data/site";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-line/80 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-x-6 gap-y-3 px-6 py-4 md:flex-nowrap md:px-10">
        <Link
          href="/"
          className="shrink-0 font-display text-lg tracking-tight text-paper hover:text-halpha transition-colors"
        >
          {SITE.name}
        </Link>
        <nav
          aria-label="Primary"
          className="flex flex-wrap items-center gap-x-4 gap-y-2 sm:gap-x-5 md:gap-x-7"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-paper-dim hover:text-paper transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={SITE.github}
            className="text-sm text-paper-dim hover:text-paper transition-colors hidden sm:inline"
          >
            GitHub
          </a>
        </nav>
      </div>
    </header>
  );
}
