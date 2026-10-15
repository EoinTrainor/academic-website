export type Repo = {
  name: string;
  description: string;
  tags: string[];
  href: string;
  status: "Active" | "Completed";
  pipeline: string[];
};

export const REPOS: Repo[] = [
  {
    name: "Astronomical Difference-Imaging Pipeline",
    description:
      "Code for astronomical PSF construction, image subtraction, photometric extraction, diagnostics and light-curve analysis.",
    tags: ["Python", "Astropy", "Photometry", "Image processing"],
    href: "[Project repository]",
    status: "Active",
    pipeline: ["Raw frames", "Empirical PSF", "PSF matching", "Subtraction", "Light curve"],
  },
  {
    name: "Compact Binary Modelling",
    description:
      "Literature-constrained ICARUS light-curve modelling and MCMC inference for compact binary systems.",
    tags: ["Python", "Numerical modelling", "Astrophysics", "Matplotlib"],
    href: "[Project repository]",
    status: "Active",
    pipeline: ["Binary parameters", "ICARUS model", "Likelihood", "MCMC", "Posterior"],
  },
  {
    name: "ECG Machine Learning",
    description:
      "Python analysis of ECG signals: denoising, PQRST feature detection and Random Forest classification of normal and abnormal recordings.",
    tags: ["Python", "Machine learning", "Signal processing", "Statistical analysis"],
    href: "[Project repository]",
    status: "Completed",
    pipeline: ["Raw ECG", "Denoising", "PQRST detection", "Features", "Classification"],
  },
  {
    name: "Solar H-alpha Analysis",
    description: "Image analysis of narrow-band H-alpha observations of the solar chromosphere.",
    tags: ["Python", "Solar physics", "Image analysis", "Observational astronomy"],
    href: "[Project repository]",
    status: "Completed",
    pipeline: ["Raw frames", "CCD calibration", "Physical flux", "Motion tracking", "Field estimate"],
  },
];
