import type { Repo } from "@/data/repos";
import ScientificFigure from "./ScientificFigure";

function Pipeline({ steps }: { steps: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-y-1.5">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center">
          <span className="font-mono-label text-[10px] text-paper-dim/80 border border-ink-line rounded-sm px-1.5 py-1">
            {step}
          </span>
          {i < steps.length - 1 ? <span className="mx-1 text-halpha text-xs">→</span> : null}
        </span>
      ))}
    </div>
  );
}

export default function GitHubProjectCard({ repo }: { repo: Repo }) {
  return (
    <article className="border-t border-ink-line pt-6">
      <ScientificFigure label={repo.figureLabel} meta={repo.status} aspect="square" />
      <p className="mt-4 font-mono-label text-[11px] text-halpha">{repo.status}</p>
      <h3 className="mt-1.5 font-display text-lg text-paper">{repo.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-paper-dim">{repo.description}</p>
      <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
        {repo.tags.map((tag) => (
          <li
            key={tag}
            className="font-mono-label text-[11px] text-paper-dim/80 border border-ink-line rounded-sm px-2 py-1"
          >
            {tag}
          </li>
        ))}
      </ul>
      <Pipeline steps={repo.pipeline} />
      {!repo.href.startsWith("[") ? (
        <a
          href={repo.href}
          className="mt-4 inline-block text-sm text-halpha hover:text-paper transition-colors"
        >
          View repository
        </a>
      ) : null}
    </article>
  );
}
