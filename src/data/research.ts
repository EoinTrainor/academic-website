export type ResearchFigure = {
  label: string;
  src?: string;
  caption?: string;
};

export type ResearchProject = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  abstract?: string;
  figureLabel: string;
  githubHref: string;
  status: "Active" | "Ongoing" | "Completed";
  sections: {
    motivation: string;
    motivationFigure?: ResearchFigure;
    question: string;
    massFunctionNote?: string;
    data: string;
    methods: string[];
    contribution: string;
    status: string;
    figures: ResearchFigure[];
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
    figureLabel: "[Research figure: six-panel difference-imaging sequence]",
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
        "I am building the full pipeline, from raw frames through PSF modelling, image subtraction and photometric extraction, to the orbital light curve itself, and validating each stage against known sources in the field.",
      status:
        "Pipeline development is ongoing. Photometric validation and orbital light-curve analysis are in progress.",
      figures: [
        { label: "[Six-panel difference-imaging figure]" },
        { label: "[Orbital light curve, folded on ephemeris]" },
      ],
      tools: ["Python", "Astropy", "Photutils", "NumPy", "SciPy", "Matplotlib"],
    },
  },
  {
    slug: "compact-binaries",
    title: "GX 339−4",
    subtitle: "Constraining the Mass of the Black Hole in GX 339−4",
    summary:
      "Analysing multi-epoch VLT/HAWK-I observations of the black-hole X-ray binary GX 339−4 to investigate orbital variability and the contribution of its companion star, accretion flow and jet.",
    tags: [],
    abstract:
      "We observed GX 339−4 using near-infrared (NIR) Ks-band photometry over the 2025 Spring/Summer observing campaign, taken with the HAWK-I instrument on the European Southern Observatory (ESO)'s Very Large Telescope (VLT).",
    figureLabel: "[HAWK-I image / light curve / compact-binary visualisation]",
    githubHref: "https://github.com/EoinTrainor/gx339-4-lightcurve",
    status: "Active",
    sections: {
      motivation:
        "GX 339−4 is a black-hole X-ray binary whose infrared light is shaped by its donor star, accretion flow and compact jet. Separating these contributions in quiescence is a route to a dynamical mass measurement for the black hole, one of relatively few such systems where this is possible. Its mass has never been properly constrained: the most recent literature estimate (Heida et al. 2017) places it at 2.3-9.5 M☉, a range wide enough that GX 339−4's black hole could sit within the neutron star-black hole mass gap, the range of masses in which neither type of compact object has yet been directly observed.",
      motivationFigure: {
        label: "NS-BH mass gap",
        src: "/figures/gx339-mass-gap.png",
        caption:
          "The neutron star-black hole mass gap (roughly 2-5 M☉) overlaps the Heida et al. (2017) mass estimate for GX 339−4 (2.3-9.5 M☉), so the black hole's true mass could fall within this poorly constrained range.",
      },
      question:
        "Can we isolate variable flux from the data to construct a light curve that represents orbital variability of the system's donor star? And from that light curve, can we constrain the angle of inclination of the system, relate it to the mass function, and derive the mass of the black hole?",
      massFunctionNote:
        "f(M) is the spectroscopic mass function, in solar masses, and is measurable directly from the orbital light curve without prior knowledge of the system's inclination. M_BH is the mass of the black hole, M_2 is the mass of the donor star, and i is the orbital inclination angle. Since sin³i ≤ 1, f(M) alone sets a strict lower limit on M_BH; combining it with an independent constraint on i from the light-curve shape allows the black hole's mass to be solved for directly.",
      data: "GX 339−4 has an orbital period of just 1.76 days, too short to cover in a single ground-based observing block. To build a light curve regardless, we monitored the system with the Swift/BAT X-ray telescope to confirm its accretion disc remained in quiescence, and observed with HAWK-I whenever a free window opened up over the course of the season. Phase-folding these quiescent-epoch observations onto the orbital period required around 20 epochs, spread widely enough in time to give the random phase coverage needed to model the light curve.",
      methods: [
        "ZOGY-style difference imaging",
        "ICARUS binary light-curve modelling",
        "Literature-constrained parameter priors",
        "MCMC / Bayesian parameter inference",
        "Corner-plot diagnostics for parameter degeneracies (e.g. inclination–mass-ratio)",
      ],
      contribution:
        "I built the data-reduction pipeline end-to-end (diagnostics, difference imaging and photometric extraction) and assembled a literature-sourced parameter set for the ICARUS light-curve model, each value attributed to its source paper. I am now running the MCMC inference toward a dynamical mass estimate.",
      status:
        "Ten quiescent epochs (of thirteen total) have been retained after excluding outburst epochs. Pipeline and modelling work toward a dynamical black hole mass measurement is ongoing.",
      figures: [
        { label: "[HAWK-I Ks-band difference image]" },
        { label: "[Infrared light curve with ICARUS model fit]" },
        { label: "[Corner plot: inclination / mass-ratio posterior]" },
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
        "The H-alpha line, at 656.28 nm, is one of the most direct windows onto the solar chromosphere, the layer between the visible photosphere and the outer corona, where structures such as filaments and fibrils form and evolve on short timescales.",
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
      figures: [{ label: "[H-alpha chromosphere image]" }],
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
      status:
        "Completed undergraduate research project, awarded the Data Intellect: Analytics Physics Prize (2025).",
      figures: [
        { label: "[Model architecture diagram]" },
        { label: "[Confusion matrix / performance summary]" },
      ],
      tools: ["Python", "Machine learning framework", "Signal-processing libraries"],
    },
  },
];

export const ALL_RESEARCH = [...CURRENT_RESEARCH, ...OTHER_RESEARCH];

export function getResearchBySlug(slug: string) {
  return ALL_RESEARCH.find((p) => p.slug === slug);
}
