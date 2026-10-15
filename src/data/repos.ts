export type PipelinePalette = {
  /** Step-box background for non-final steps */
  light: string;
  /** Border for non-final steps, and background for the final step */
  primary: string;
  /** Border for the final step, and arrow colour */
  dark: string;
  /** Text colour on the final (primary-background) step */
  onPrimary: string;
};

export type Repo = {
  name: string;
  description: string;
  tags: string[];
  href: string;
  status: "Active" | "Completed";
  pipeline: string[];
  palette: PipelinePalette;
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
    palette: { light: "#DCE8EB", primary: "#4E7184", dark: "#3A5765", onPrimary: "#FFFFFF" },
  },
  {
    name: "Compact Binary Modelling",
    description:
      "Literature-constrained ICARUS light-curve modelling and MCMC inference for compact binary systems.",
    tags: ["Python", "Numerical modelling", "Astrophysics", "Matplotlib"],
    href: "[Project repository]",
    status: "Active",
    pipeline: ["Binary parameters", "ICARUS model", "Likelihood", "MCMC", "Posterior"],
    palette: { light: "#EEDDD6", primary: "#9A665B", dark: "#7A4F46", onPrimary: "#FFFFFF" },
  },
  {
    name: "ECG Machine Learning",
    description:
      "Python analysis of ECG signals: denoising, PQRST feature detection and Random Forest classification of normal and abnormal recordings.",
    tags: ["Python", "Machine learning", "Signal processing", "Statistical analysis"],
    href: "[Project repository]",
    status: "Completed",
    pipeline: ["Raw ECG", "Denoising", "PQRST detection", "Features", "Classification"],
    palette: { light: "#E1E9DC", primary: "#67816B", dark: "#4F6554", onPrimary: "#FFFFFF" },
  },
  {
    name: "Solar H-alpha Analysis",
    description: "Image analysis of narrow-band H-alpha observations of the solar chromosphere.",
    tags: ["Python", "Solar physics", "Image analysis", "Observational astronomy"],
    href: "[Project repository]",
    status: "Completed",
    pipeline: ["Raw frames", "CCD calibration", "Physical flux", "Motion tracking", "Field estimate"],
    palette: { light: "#F1E4CD", primary: "#BE8746", dark: "#9C6D37", onPrimary: "#201C16" },
  },
];
