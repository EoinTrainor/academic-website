import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum vitae — education, research and technical skills.",
};

const SECTIONS = [
  {
    title: "Education",
    items: [
      "Research Master's, Astrophysics — University College Cork, Jan 2026 – Jan 2027",
      "BPhys, Physics — Queen's University Belfast, 2021 – 2025",
    ],
  },
  {
    title: "Research",
    items: [
      "GX 339−4 — dynamical black hole mass measurement via infrared difference imaging and light-curve modelling",
      "PSR B1957+20 — difference-imaging photometric pipeline for orbital variability",
      "Solar chromosphere — narrow-band H-alpha observations (undergraduate)",
      "Machine learning for ECG classification — award-winning undergraduate project",
    ],
  },
  {
    title: "Technical skills",
    items: [
      "Python — Astropy, Photutils, NumPy, SciPy, Matplotlib, Astroalign, SEP",
      "Difference imaging — ZOGY-style pipelines, empirical PSF construction",
      "Statistical inference — MCMC / Bayesian parameter estimation",
      "Binary light-curve modelling — ICARUS",
      "Machine learning and signal processing",
    ],
  },
  {
    title: "Presentations",
    items: [
      'Irish National Astronomy Meeting (INAM), 2026 — "Difference Imaging and Multi-Band Light Curve Analysis of High Energy Binary Systems"',
    ],
  },
];

export default function CVPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-14 md:px-10">
      <SectionHeader heading="CV" intro="A summary of education, research and technical skills." />

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
