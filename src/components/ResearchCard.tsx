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
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
          <Link
            href={`/research/${project.slug}`}
            className="text-sm text-halpha hover:text-paper transition-colors"
          >
            Read project
          </Link>
          <a
            href={project.githubHref}
            className="text-sm text-paper-dim hover:text-paper transition-colors"
          >
            View code on GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
