import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum vitae — education, research and presentations.",
};

const SECTIONS = [
  {
    title: "Education",
    items: [
      "St Mary's Christian Brothers Grammar School, Glen Road, West Belfast, [2014 – 2021]",
      "BPhys, Physics — Queen's University Belfast, [2021 – 2025]",
      "MSc, Astrophysics — University College Cork, [2026 – 2027]",
    ],
  },
  {
    title: "Research",
    items: [
      "GX 339−4: dynamical black hole mass measurement via near-infrared difference imaging and light-curve modelling",
      "PSR B1957+20: pipeline for crowded-field photometry and light-curve modelling to constrain the mass of a neutron star",
      "Solar chromosphere: narrow-band H-alpha observations (undergraduate)",
      "Machine learning for ECG diagnostics using medical data: award-winning undergraduate project",
    ],
  },
  {
    title: "Presentations",
    items: [
      'Irish National Astronomy Meeting (INAM), 2026 — Talk on "Difference Imaging and Multi-Band Light Curve Analysis of High Energy Binary Systems"',
    ],
  },
];

export default function CVPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-14 md:px-10">
      <SectionHeader
        heading="Curriculum Vitae"
        intro="A summary of education, research and presentations."
      />
      <a
        href="#"
        className="mt-6 inline-flex items-center gap-2 rounded-sm bg-halpha px-6 py-3 text-base font-medium text-ink hover:bg-halpha-dim transition-colors"
      >
        [Download CV (PDF)] ↓
      </a>

      <div className="mt-16 space-y-14">
        {SECTIONS.map((section) => (
          <div key={section.title}>
            <h2 className="font-display text-2xl text-paper">{section.title}</h2>
            <ul className="mt-4 space-y-2.5">
              {section.items.map((item) => (
                <li key={item} className="flex gap-3 text-base leading-relaxed text-paper-dim">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-halpha" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
