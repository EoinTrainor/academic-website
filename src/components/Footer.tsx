import Link from "next/link";
import { SITE } from "@/data/site";
import SpectralRule from "./SpectralRule";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 pb-16 pt-4 md:px-10">
      <SpectralRule label="656.28 nm" className="mb-12" />
      <div className="grid gap-10 md:grid-cols-2">
        <div>
          <h2 className="font-display text-2xl text-paper text-balance">
            Interested in research, collaboration or PhD opportunities?
          </h2>
          <Link
            href="/contact"
            className="mt-4 inline-block text-sm text-halpha hover:text-paper transition-colors"
          >
            Get in touch
          </Link>
        </div>
        <div className="flex flex-col gap-1.5 text-sm text-paper-dim md:items-end">
          <span>{SITE.affiliation}</span>
          <a href={`mailto:${SITE.email}`} className="hover:text-paper transition-colors">
            {SITE.email}
          </a>
          <a href={SITE.github} className="hover:text-paper transition-colors">
            GitHub — {SITE.github}
          </a>
          <a href={SITE.linkedin} className="hover:text-paper transition-colors">
            LinkedIn — {SITE.linkedin}
          </a>
          <a href={SITE.orcid} className="hover:text-paper transition-colors">
            ORCID — {SITE.orcid}
          </a>
        </div>
      </div>
      <p className="mt-12 text-xs text-paper-dim/60">
        © {new Date().getFullYear()} {SITE.name}
      </p>
    </footer>
  );
}
