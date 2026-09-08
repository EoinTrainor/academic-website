type ProjectCardProps = {
  title: string;
  description: string;
  tags?: string[];
  href?: string;
  ctaLabel?: string;
};

export default function ProjectCard({
  title,
  description,
  tags = [],
  href,
  ctaLabel = "View",
}: ProjectCardProps) {
  return (
    <div className="border border-ink-line rounded-sm p-5">
      <h4 className="font-display text-base text-paper">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-paper-dim">{description}</p>
      {tags.length ? (
        <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-1.5">
          {tags.map((tag) => (
            <li key={tag} className="font-mono-label text-[10px] text-paper-dim/70">
              {tag}
            </li>
          ))}
        </ul>
      ) : null}
      {href ? (
        <a href={href} className="mt-3 inline-block text-sm text-halpha hover:text-paper transition-colors">
          {ctaLabel}
        </a>
      ) : null}
    </div>
  );
}
