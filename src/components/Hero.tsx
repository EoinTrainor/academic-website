import Link from "next/link";
import { SITE } from "@/data/site";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28">
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-end">
        <div>
          <p className="font-mono-label text-xs text-halpha">Hα 656.28 nm</p>
          <h1 className="mt-4 font-display text-5xl md:text-7xl text-paper text-balance">
            {SITE.name}
          </h1>
          <p className="mt-4 text-lg text-steel">{SITE.role}</p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper">
            Research Master&rsquo;s student in astrophysics at University College Cork, working on
            observational and computational approaches to compact stellar systems.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-paper-dim">
            My work spans time-domain astronomy, astronomical image processing, compact-binary
            modelling and data-driven methods, with broader interests in computational physics
            and energy systems.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
            <Link
              href="/research"
              className="border-b border-halpha pb-0.5 text-sm text-paper hover:text-halpha transition-colors"
            >
              Explore my research
            </Link>
            <a
              href={SITE.github}
              className="text-sm text-paper-dim hover:text-paper transition-colors"
            >
              GitHub
            </a>
            <Link href="/cv" className="text-sm text-paper-dim hover:text-paper transition-colors">
              CV
            </Link>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="relative hidden h-56 w-full overflow-hidden border-l border-ink-line pl-8 md:block"
        >
          <svg viewBox="0 0 240 220" className="h-full w-full" preserveAspectRatio="none">
            <line x1="0" y1="200" x2="240" y2="200" stroke="#d8cdb4" strokeWidth="1" />
            {Array.from({ length: 13 }).map((_, i) => (
              <line
                key={i}
                x1={i * 20}
                y1={196}
                x2={i * 20}
                y2={204}
                stroke="#d8cdb4"
                strokeWidth="1"
              />
            ))}
            <path
              d="M0,190 C30,188 50,180 70,150 C90,110 100,40 118,20 C136,40 146,110 166,150 C186,180 206,188 240,190"
              fill="none"
              stroke="#3b5166"
              strokeWidth="1"
              opacity="0.6"
            />
            <line x1="118" y1="0" x2="118" y2="200" stroke="#a32b1e" strokeWidth="1.4" />
            <text x="122" y="14" fill="#a32b1e" fontSize="9" fontFamily="var(--font-mono)">
              656.28 nm
            </text>
          </svg>
        </div>
      </div>
    </section>
  );
}
