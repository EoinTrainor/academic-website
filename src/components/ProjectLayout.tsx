import Link from "next/link";
import type { ResearchProject } from "@/data/research";
import ScientificFigure from "./ScientificFigure";

export default function ProjectLayout({ project }: { project: ResearchProject }) {
  const s = project.sections;
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-14 md:px-10">
      <Link href="/research" className="text-sm text-paper-dim hover:text-paper transition-colors">
        ← Research
      </Link>

      <header className="mt-6">
        <p className="font-mono-label text-xs text-halpha">{project.status}</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl text-paper text-balance">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-steel">{project.subtitle}</p>
        <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="font-mono-label text-[11px] text-paper-dim/80 border border-ink-line rounded-sm px-2 py-1"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <div className="mt-10">
        <ScientificFigure label={project.figureLabel} aspect="wide" accent />
      </div>

      <section className="mt-14 space-y-14">
        <div>
          <h2 className="font-display text-2xl text-paper">Scientific motivation</h2>
          <p className="mt-3 text-base leading-relaxed text-paper-dim">{s.motivation}</p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-paper">Research question</h2>
          <p className="mt-3 text-base leading-relaxed text-paper-dim">{s.question}</p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-paper">Data &amp; observations</h2>
          <p className="mt-3 text-base leading-relaxed text-paper-dim">{s.data}</p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-paper">Methods</h2>
          <ul className="mt-3 space-y-2">
            {s.methods.map((m) => (
              <li key={m} className="flex gap-3 text-base leading-relaxed text-paper-dim">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-halpha" />
                {m}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-2xl text-paper">My contribution</h2>
          <p className="mt-3 text-base leading-relaxed text-paper-dim">{s.contribution}</p>
        </div>

        <div>
          <h2 className="font-display text-2xl text-paper">Current status</h2>
          <p className="mt-3 text-base leading-relaxed text-paper-dim">{s.status}</p>
        </div>

        {s.figures.length ? (
          <div>
            <h2 className="font-display text-2xl text-paper">Key figures</h2>
            <div className="mt-4 grid gap-6 sm:grid-cols-2">
              {s.figures.map((f) => (
                <ScientificFigure key={f} label={f} aspect="square" />
              ))}
            </div>
          </div>
        ) : null}

        <div>
          <h2 className="font-display text-2xl text-paper">Tools &amp; technologies</h2>
          <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
            {s.tools.map((tool) => (
              <li
                key={tool}
                className="font-mono-label text-[11px] text-paper-dim/80 border border-ink-line rounded-sm px-2 py-1"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>

        {!project.githubHref.startsWith("[") ? (
          <div>
            <h2 className="font-display text-2xl text-paper">Related code</h2>
            <a
              href={project.githubHref}
              className="mt-3 inline-block text-sm text-halpha hover:text-paper transition-colors"
            >
              View code on GitHub
            </a>
          </div>
        ) : null}
      </section>
    </div>
  );
}
