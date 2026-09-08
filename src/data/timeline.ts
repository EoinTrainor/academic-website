export type TimelineEntry = {
  institution: string;
  title: string;
  period: string;
  description: string;
  award?: string;
  href?: string;
};

export const RESEARCH_JOURNEY: TimelineEntry[] = [
  {
    institution: "Queen's University Belfast",
    title: "Solar Chromosphere — H-alpha Observations",
    period: "Undergraduate",
    description:
      "Used narrow-band H-alpha observations to investigate structure and dynamics in the solar chromosphere, developing experience in observational astronomy, image analysis and interpretation of astrophysical data.",
    href: "/research/solar-ha",
  },
  {
    institution: "Queen's University Belfast",
    title: "Machine Learning for ECG Analysis",
    period: "Undergraduate",
    description:
      "Developed and evaluated machine-learning methods for extracting information from electrocardiogram data, combining signal processing, statistical analysis and scientific programming.",
    award: "Award-winning research project — [Exact award title to be added]",
    href: "/research/ecg-machine-learning",
  },
  {
    institution: "University College Cork",
    title: "Difference Imaging & Time-Domain Astronomy",
    period: "MSc",
    description:
      "Extended the earlier data-analysis and image-processing experience into a full difference-imaging pipeline for time-domain photometry of a compact binary.",
    href: "/research/difference-imaging",
  },
  {
    institution: "University College Cork",
    title: "Compact Binary Modelling",
    period: "MSc",
    description:
      "Moved from image analysis toward physical modelling and inference — using infrared light curves to constrain the properties of a black-hole binary system.",
    href: "/research/compact-binaries",
  },
];

export const ACADEMIC_TIMELINE: TimelineEntry[] = [
  {
    institution: "Queen's University Belfast",
    title: "BPhys Physics",
    period: "2021 – 2025",
    description:
      "Undergraduate training covered core theoretical, computational and experimental physics, including classical mechanics, electromagnetism, quantum mechanics, thermodynamics, statistical physics, optics, computational physics and astrophysics.",
  },
  {
    institution: "University College Cork",
    title: "Research Master's — Astrophysics",
    period: "January 2026 – January 2027",
    description:
      "Focus on compact objects, time-domain astronomy, difference imaging, photometry and computational modelling, supervised by Dr Mark Kennedy.",
  },
  {
    institution: "Irish National Astronomy Meeting",
    title: "INAM 2026",
    period: "2026",
    description: "Presented astrophysics research at INAM. [Exact presentation title to be added]",
  },
];

export const UNDERGRADUATE_AREAS = [
  "Astrophysics",
  "Quantum Mechanics",
  "Electromagnetism",
  "Statistical Physics",
  "Computational Physics",
  "Experimental Physics",
];
