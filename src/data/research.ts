export type ResearchProject = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  figureLabel: string;
  githubHref: string;
  status: "Active" | "Ongoing" | "Completed";
  sections: {
    motivation: string;
    question: string;
    data: string;
    methods: string[];
    contribution: string;
    status: string;
    figures: string[];
    tools: string[];
  };
};

export const CURRENT_RESEARCH: ResearchProject[] = [
  {
    slug: "difference-imaging",
    title: "PSR B1957+20",
    subtitle: "Extracting faint orbital variability with difference imaging",
    summary:
      "Developing a photometric pipeline for the black-widow pulsar PSR B1957+20, including empirical PSF construction, optimal image subtraction, differential photometry and orbital light-curve analysis.",
    tags: [
      "Time-domain astronomy",
      "Difference imaging",
      "Empirical PSF modelling",
      "Photometry",
      "Python",
      "Statistical analysis",
    ],
    figureLabel: "[Research figure — six-panel difference-imaging sequence]",
    githubHref: "[Project repository]",
    status: "Active",
    sections: {
      motivation:
        "Black-widow pulsars like PSR B1957+20 are compact binaries in which an energetic pulsar ablates material from a low-mass companion. The faint orbital signal is easily lost in crowded, variable-seeing ground-based imaging, so recovering it requires photometry built specifically for difference imaging rather than standard aperture methods.",
      question:
        "Can an empirical-PSF difference-imaging pipeline recover the orbital light curve of PSR B1957+20 at the precision needed to constrain the companion's irradiation and the system geometry?",
      data: "[Observation log and instrument details to be added]",
      methods: [
        "Empirical point-spread-function (PSF) construction from field stars",
        "Reference-frame construction and image alignment",
        "Optimal image subtraction (difference imaging)",
        "Differential photometry on the subtracted frames",
        "Orbital light-curve folding and analysis",
      ],
      contribution:
        "I am building the full pipeline — from raw frames through PSF modelling, image subtraction and photometric extraction, to the orbital light curve itself — and validating each stage against known sources in the field.",
      status:
        "Pipeline development is ongoing. Photometric validation and orbital light-curve analysis are in progress.",
      figures: [
        "[Six-panel difference-imaging figure]",
        "[Orbital light curve, folded on ephemeris]",
      ],
      tools: ["Python", "Astropy", "Photutils", "NumPy", "SciPy", "Matplotlib"],
    },
  },
  {
    slug: "compact-binaries",
    title: "GX 339−4",
    subtitle: "Constraining compact binary systems through infrared variability",
    summary:
      "Analysing multi-epoch VLT/HAWK-I observations of the black-hole X-ray binary GX 339−4 to investigate orbital variability and the contribution of its companion star, accretion flow and jet.",
    tags: [
      "VLT / HAWK-I",
      "Infrared astronomy",
      "Time-domain analysis",
      "Compact binaries",
      "Image processing",
      "Physical interpretation",
    ],
    figureLabel: "[HAWK-I image / light curve / compact-binary visualisation]",
    githubHref: "[Project repository]",
    status: "Active",
    sections: {
      motivation:
        "GX 339−4 is a black-hole X-ray binary whose infrared light is shaped by its donor star, accretion flow and compact jet. Separating these contributions in quiescence is a route to a dynamical mass measurement for the black hole — one of relatively few such systems where this is possible.",
      question:
        "What do multi-epoch infrared observations of GX 339−4 imply for the system's orbital variability, and how much of the infrared light comes from the donor star versus the accretion flow and jet?",
      data: "Quiescent-epoch VLT/HAWK-I Ks-band imaging, with outburst epochs excluded using Swift/BAT classification.",
      methods: [
        "ZOGY-style difference imaging",
        "ICARUS binary light-curve modelling",
        "Literature-constrained parameter priors",
        "MCMC / Bayesian parameter inference",
        "Corner-plot diagnostics for parameter degeneracies (e.g. inclination–mass-ratio)",
      ],
      contribution:
        "I built the data-reduction pipeline end-to-end — diagnostics, difference imaging and photometric extraction — and assembled a literature-sourced parameter set for the ICARUS light-curve model, each value attributed to its source paper. I am now running the MCMC inference toward a dynamical mass estimate.",
      status:
        "Ten quiescent epochs (of thirteen total) have been retained after excluding outburst epochs. Pipeline and modelling work toward a dynamical black hole mass measurement is ongoing.",
      figures: [
        "[HAWK-I Ks-band difference image]",
        "[Infrared light curve with ICARUS model fit]",
        "[Corner plot — inclination / mass-ratio posterior]",
      ],
      tools: [
        "Python",
        "Astropy",
        "Photutils",
        "Astroalign",
        "SEP",
        "ZOGY",
        "ICARUS",
        "NumPy",
        "SciPy",
        "Matplotlib",
      ],
    },
  },
];

export const OTHER_RESEARCH: ResearchProject[] = [
  {
    slug: "solar-ha",
    title: "Solar H-alpha Observations",
    subtitle: "Structure and dynamics in the solar chromosphere",
    summary:
      "Used narrow-band H-alpha observations to investigate structure and dynamics in the solar chromosphere, developing experience in observational astronomy, image analysis and interpretation of astrophysical data.",
    tags: ["Python", "Solar physics", "Image analysis", "Observational astronomy"],
    figureLabel: "[Narrow-band H-alpha solar image]",
    githubHref: "[Project repository]",
    status: "Completed",
    sections: {
      motivation:
        "The H-alpha line, at 656.28 nm, is one of the most direct windows onto the solar chromosphere — the layer between the visible photosphere and the outer corona, where structures such as filaments and fibrils form and evolve on short timescales.",
      question:
        "What can narrow-band H-alpha imaging reveal about structure and dynamics in the solar chromosphere?",
      data: "Narrow-band H-alpha solar imaging, [observation dates and instrument to be added].",
      methods: [
        "Narrow-band H-alpha image acquisition",
        "Image calibration and processing",
        "Feature identification and interpretation",
      ],
      contribution:
        "This was an undergraduate research project under Dr Peter Keys at Queen's University Belfast, written up as a fifteen-page paper.",
      status: "Completed as an undergraduate research project at Queen's University Belfast.",
      figures: ["[H-alpha chromosphere image]"],
      tools: ["Python", "Image processing tools"],
    },
  },
  {
    slug: "ecg-machine-learning",
    title: "Machine Learning & ECG",
    subtitle: "Award-winning research in signal processing and classification",
    summary:
      "Developed and evaluated machine-learning methods for extracting information from electrocardiogram data, combining signal processing, statistical analysis and scientific programming.",
    tags: ["Python", "Machine learning", "Signal processing", "Statistical analysis"],
    figureLabel: "[ECG classification architecture diagram]",
    githubHref: "[Project repository]",
    status: "Completed",
    sections: {
      motivation:
        "Electrocardiogram (ECG) signals are a rich, noisy time-series domain that rewards the same quantitative toolkit used in physics: signal processing, statistical validation and careful model evaluation, applied here to a biomedical dataset rather than an astrophysical one.",
      question:
        "Can a custom neural architecture reliably classify cardiac conditions directly from ECG signal data?",
      data: "[Dataset details to be added]",
      methods: [
        "Signal pre-processing and feature extraction",
        "Custom dual-wall neural network architecture",
        "Multi-class classification across six cardiac conditions",
        "Statistical validation of model performance",
      ],
      contribution:
        "I designed and implemented a custom dual-wall ECG classification architecture, achieving 87% accuracy across six conditions, as an undergraduate research project at Queen's University Belfast.",
      status: "Completed — undergraduate award-winning research project. [Exact award title to be added]",
      figures: ["[Model architecture diagram]", "[Confusion matrix / performance summary]"],
      tools: ["Python", "Machine learning framework", "Signal-processing libraries"],
    },
  },
];

export const ALL_RESEARCH = [...CURRENT_RESEARCH, ...OTHER_RESEARCH];

export function getResearchBySlug(slug: string) {
  return ALL_RESEARCH.find((p) => p.slug === slug);
}
