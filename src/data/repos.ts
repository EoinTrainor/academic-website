export type Repo = {
  name: string;
  description: string;
  tags: string[];
  href: string;
  status: "Active" | "Completed";
  figureLabel: string;
};

export const REPOS: Repo[] = [
  {
    name: "Astronomical Difference-Imaging Pipeline",
    description:
      "Code for astronomical PSF construction, image subtraction, photometric extraction, diagnostics and light-curve analysis.",
    tags: ["Python", "Astropy", "Photometry", "Image processing"],
    href: "[Project repository]",
    status: "Active",
    figureLabel: "[Repository figure]",
  },
  {
    name: "Compact Binary Modelling",
    description:
      "Literature-constrained ICARUS light-curve modelling and MCMC inference for compact binary systems.",
    tags: ["Python", "Numerical modelling", "Astrophysics", "Matplotlib"],
    href: "[Project repository]",
    status: "Active",
    figureLabel: "[Repository figure]",
  },
  {
    name: "ECG Machine Learning",
    description:
      "Custom dual-wall neural architecture for multi-class cardiac condition classification from ECG signal data.",
    tags: ["Python", "Machine learning", "Signal processing", "Statistical analysis"],
    href: "[Project repository]",
    status: "Completed",
    figureLabel: "[Repository figure]",
  },
  {
    name: "Solar H-alpha Analysis",
    description: "Image analysis of narrow-band H-alpha observations of the solar chromosphere.",
    tags: ["Python", "Solar physics", "Image analysis", "Observational astronomy"],
    href: "[Project repository]",
    status: "Completed",
    figureLabel: "[Repository figure]",
  },
];
