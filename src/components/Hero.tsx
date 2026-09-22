import Link from "next/link";
import { SITE } from "@/data/site";
import ScientificFigure from "./ScientificFigure";

export default function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pt-16 pb-8 md:px-10 md:pt-24 md:pb-10">
      <div className="grid gap-12 md:grid-cols-[1.3fr_1fr] md:items-end">
        <div>
          <h1 className="font-display text-5xl md:text-7xl text-paper text-balance">
            {SITE.name}
          </h1>
          <p className="mt-4 font-mono-label text-xs text-halpha">ASTROPHYSICS</p>
          <p className="mt-2 text-lg text-steel">{SITE.role}</p>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper">
            Research Master&rsquo;s student in astrophysics at University College Cork, working on
            observational and computational approaches to compact stellar systems.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-paper-dim">
            I study black holes and neutron stars in low-mass X-ray binaries, using time-resolved
            photometry, astronomical image processing, and computational modelling to constrain
            their masses and physical properties.
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

        <div className="hidden border-l border-ink-line pl-8 md:block">
          <ScientificFigure
            label="Profile photograph"
            src="/figures/eoin-trainor-profile.png"
            aspect="square"
          />
        </div>
      </div>
    </section>
  );
}
