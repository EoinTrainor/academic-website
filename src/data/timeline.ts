export type TimelineEntry = {
  institution: string;
  title: string;
  period: string;
  description: string;
  status?: "Active" | "Completed";
  award?: string;
  href?: string;
};

export const RESEARCH_JOURNEY: TimelineEntry[] = [
  {
    institution: "Queen's University Belfast",
    title: "Solar Chromosphere — Hα Observations",
    period: "Undergraduate",
    description:
      "Used narrow-band Hα observations to study solar filaments and flare eruptions, measuring eruption velocities and using them to estimate the local magnetic field strength of the solar atmosphere.",
    status: "Completed",
    href: "/research/solar-ha",
  },
  {
    institution: "Queen's University Belfast",
    title: "Machine Learning for ECG Analysis",
    period: "Undergraduate",
    description:
      "Applied signal processing, feature detection and machine-learning techniques to noisy electrocardiogram data, using statistical analysis to evaluate classification performance and the reliability of extracted physiological features, to improve medical diagnostics.",
    status: "Completed",
    award: "Data Intellect: Analytics Physics Prize",
    href: "/research/ecg-machine-learning",
  },
  {
    institution: "University College Cork",
    title: "PSR B1957+20",
    period: "MSc",
    description:
      "Developing an empirical-PSF difference-imaging pipeline to recover the faint orbital light curve of the irradiated companion to the black-widow pulsar PSR B1957+20 from crowded, variable-seeing ground-based observations. The recovered modulation will be modelled to constrain the system geometry and companion heating, including the day–night temperature contrast, and contribute to dynamical constraints on the neutron-star mass.",
    status: "Active",
    href: "/research/difference-imaging",
  },
  {
    institution: "University College Cork",
    title: "GX 339−4",
    period: "MSc",
    description:
      "Combining difference imaging with ICARUS binary light-curve modelling to isolate the near-infrared orbital signature of the donor star in the black-hole X-ray binary GX 339−4 from variable accretion-flow and jet emission, with the aim of constraining the system geometry and improving the dynamical measurement of the black-hole mass.",
    status: "Active",
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
    description:
      "Presented “Difference Imaging and Multi-Band Light Curve Analysis of High Energy Binary Systems” at INAM.",
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
