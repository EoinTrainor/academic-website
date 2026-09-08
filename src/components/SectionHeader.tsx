type SectionHeaderProps = {
  heading: string;
  intro?: string;
  align?: "left" | "center";
};

export default function SectionHeader({ heading, intro, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      <h2 className="font-display text-3xl md:text-4xl text-paper text-balance">{heading}</h2>
      {intro ? <p className="mt-3 text-base text-paper-dim leading-relaxed">{intro}</p> : null}
    </div>
  );
}
