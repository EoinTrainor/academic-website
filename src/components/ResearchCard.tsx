import Link from "next/link";
import type { ResearchProject } from "@/data/research";
import ScientificFigure from "./ScientificFigure";

export default function ResearchCard({ project }: { project: ResearchProject }) {
  return (
    <article className="grid gap-6 border-t border-ink-line pt-8 md:grid-cols-2 md:gap-10">
      <ScientificFigure label={project.figureLabel} meta={project.status} />
      <div className="flex flex-col">
        <h3 className="font-display text-2xl text-paper">{project.title}</h3>
        <p className="mt-1 text-sm text-steel">{project.subtitle}</p>
        <p className="mt-4 text-sm leading-relaxed text-paper-dim">{project.summary}</p>
        {project.abstract ? (
          <p className="mt-5 text-sm leading-relaxed text-paper-dim/90 italic border-l border-ink-line pl-4">
            {project.abstract}
          </p>
        ) : (
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
        )}
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link
            href={`/research/${project.slug}`}
            className="inline-flex items-center gap-2 border border-ink-line rounded-sm px-4 py-2.5 text-sm text-paper hover:border-halpha hover:text-halpha transition-colors"
          >
            Read project →
          </Link>
          {!project.githubHref.startsWith("[") ? (
            <a
              href={project.githubHref}
              className="text-sm text-paper-dim hover:text-paper transition-colors"
            >
              View code on GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
