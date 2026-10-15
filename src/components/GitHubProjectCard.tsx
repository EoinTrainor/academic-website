import type { Repo } from "@/data/repos";

function Pipeline({ steps }: { steps: string[] }) {
  return (
    <div className="flex aspect-square flex-col items-center justify-center gap-1 rounded-sm border border-ink-line bg-ink-raised p-4">
      {steps.map((step, i) => (
        <div key={step} className="flex flex-col items-center">
          <span className="font-mono-label text-[10px] text-paper-dim/80 border border-ink-line rounded-sm px-2 py-1 text-center">
            {step}
          </span>
          {i < steps.length - 1 ? (
            <span className="my-0.5 leading-none text-halpha text-xs">↓</span>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default function GitHubProjectCard({ repo }: { repo: Repo }) {
  return (
    <article className="border-t border-ink-line pt-6">
      <Pipeline steps={repo.pipeline} />
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
