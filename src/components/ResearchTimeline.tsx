import Link from "next/link";
import type { TimelineEntry } from "@/data/timeline";

export default function ResearchTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="relative">
      <span className="absolute left-[3px] top-2 bottom-2 w-px bg-ink-line" aria-hidden="true" />
      {entries.map((entry, i) => {
        const content = (
          <>
            <p className="font-mono-label text-[11px] text-paper-dim/70">
              {entry.institution} · {entry.period}
            </p>
            <h3 className="mt-1.5 font-display text-xl text-paper">{entry.title}</h3>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-paper-dim">
              {entry.description}
            </p>
            {entry.award ? (
              <p className="mt-3 inline-flex items-center gap-2 text-xs text-halpha">
                <span className="h-1.5 w-1.5 rounded-full bg-halpha" />
                {entry.award}
              </p>
            ) : null}
          </>
        );
        return (
          <li key={entry.title} className={`relative pl-8 ${i === 0 ? "" : "mt-10"}`}>
            <span className="absolute left-0 top-1.5 h-[7px] w-[7px] rounded-full bg-halpha" />
            {entry.href ? (
              <Link href={entry.href} className="group block">
                {content}
              </Link>
            ) : (
              content
            )}
          </li>
        );
      })}
    </ol>
  );
}
