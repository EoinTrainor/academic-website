import { withBasePath } from "@/lib/basePath";

type ScientificFigureProps = {
  label: string;
  caption?: string;
  meta?: string;
  aspect?: "wide" | "square" | "tall";
  accent?: boolean;
  src?: string;
  video?: string;
};

const ASPECT: Record<string, string> = {
  wide: "aspect-[16/9]",
  square: "aspect-square",
  tall: "aspect-[3/4]",
};

/**
 * Stand-in for a real figure (plot, image, diagram). Renders a restrained
 * dark panel with a faint grid and instrument-style metadata rather than a
 * generic "image coming soon" block, so the layout reads correctly even
 * before real figures are dropped in.
 */
export default function ScientificFigure({
  label,
  caption,
  meta,
  aspect = "wide",
  accent = false,
  src,
  video,
}: ScientificFigureProps) {
  if (video) {
    return (
      <figure>
        <video
          src={withBasePath(video)}
          className="w-full h-auto rounded-sm border border-ink-line"
          autoPlay
          loop
          muted
          playsInline
          controls
          aria-label={label}
        />
        {caption ? (
          <figcaption className="mt-1 text-xs text-paper-dim/80 leading-relaxed">{caption}</figcaption>
        ) : null}
      </figure>
    );
  }

  if (src) {
    return (
      <figure>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={withBasePath(src)} alt={label} className="w-full h-auto" />
        {caption ? (
          <figcaption className="mt-1 text-xs text-paper-dim/80 leading-relaxed">{caption}</figcaption>
        ) : null}
      </figure>
    );
  }

  return (
    <figure>
      <div
        className={`relative overflow-hidden rounded-sm border border-ink-line bg-ink-raised ${ASPECT[aspect]}`}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(32,28,22,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(32,28,22,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      >
        {accent ? (
          <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-halpha/40" />
        ) : null}
        <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
          <span className="font-mono-label text-xs text-paper-dim/70">{label}</span>
        </div>
        {meta ? (
          <span className="absolute bottom-2 right-3 font-mono-label text-[10px] text-paper-dim/50">
            {meta}
          </span>
        ) : null}
      </div>
      {caption ? (
        <figcaption className="mt-2 text-xs text-paper-dim/80 leading-relaxed">{caption}</figcaption>
      ) : null}
    </figure>
  );
}
