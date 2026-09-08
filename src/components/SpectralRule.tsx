type SpectralRuleProps = {
  label?: string;
  className?: string;
};

/**
 * A thin horizontal rule with a single red tick and an optional wavelength
 * label, standing in for the H-alpha emission line (656.28 nm). Used as a
 * quiet recurring motif between sections rather than a literal illustration.
 */
export default function SpectralRule({ label, className = "" }: SpectralRuleProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-ink-line" />
      <span className="relative h-3 w-px bg-halpha" />
      <span className="h-px flex-1 bg-ink-line" />
      {label ? (
        <span className="font-mono-label text-[11px] text-paper-dim/70 whitespace-nowrap">
          {label}
        </span>
      ) : null}
    </div>
  );
}
