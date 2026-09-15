import Link from "next/link";
import type { Output } from "@/data/outputs";

export default function ResearchOutputCard({ output }: { output: Output }) {
  const content = (
    <>
      <p className="font-mono-label text-[11px] text-paper-dim/70">
        {output.kind} · {output.year}
      </p>
      <h3 className="mt-1.5 font-display text-lg text-paper group-hover:text-halpha transition-colors">
        {output.title}
      </h3>
      <p className="mt-1 text-sm text-steel">{output.venue}</p>
      <p className="mt-2 text-sm leading-relaxed text-paper-dim">{output.note}</p>
    </>
  );

  if (output.href) {
    return (
      <Link href={output.href} className="group block border-t border-ink-line pt-5">
        {content}
      </Link>
    );
  }

  return <article className="border-t border-ink-line pt-5">{content}</article>;
}
