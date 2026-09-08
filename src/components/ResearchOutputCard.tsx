import type { Output } from "@/data/outputs";

export default function ResearchOutputCard({ output }: { output: Output }) {
  return (
    <article className="border-t border-ink-line pt-5">
      <p className="font-mono-label text-[11px] text-paper-dim/70">
        {output.kind} · {output.year}
      </p>
      <h3 className="mt-1.5 font-display text-lg text-paper">{output.title}</h3>
      <p className="mt-1 text-sm text-steel">{output.venue}</p>
      <p className="mt-2 text-sm leading-relaxed text-paper-dim">{output.note}</p>
    </article>
  );
}
