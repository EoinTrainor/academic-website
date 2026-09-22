export type ResearchFigure = {
  label: string;
  src?: string;
  video?: string;
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
  figureSrc?: string;
  figureVideo?: string;
  githubHref: string;
  posterHref?: string;
  status: "Active" | "Ongoing" | "Completed";
  sections: {
    motivation: string;
    motivationFigure?: ResearchFigure;
    question: string;
    massFunctionNote?: string;
    physics?: string;
    physicsFigures?: ResearchFigure[];
    data: string;
    methods: string[];
    methodsFigure?: ResearchFigure;
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
    subtitle: "Multi-band photometry and difference imaging of the original black-widow pulsar",
    summary:
      "Applying a PSF-matched difference-imaging pipeline to the black-widow pulsar PSR B1957+20, using simultaneous five-band HiPERCAM photometry to trace the irradiated companion's temperature and orbital modulation.",
    tags: [],
    figureLabel: "HiPERCAM multi-band difference-imaging sequence",
    figureSrc: "/figures/psrb1957-diffimaging-panels.png",
    figureVideo: "/media/psrb1957-model.mp4",
    githubHref: "[Project repository]",
    status: "Active",
    sections: {
      motivation:
        "PSR B1957+20 is a 1.61 ms pulsar in a 9.17-hour orbit with an extremely low-mass companion — the original \"black widow\" system, discovered by Fruchter et al. (1988). The pulsar irradiates and ablates its companion, driving a strong day-night temperature contrast that makes the system a benchmark for pulsar-companion heating. Its parameters have shifted with methodology: van Kerkwijk et al. (2011) derived an inclination of i = 65° ± 2° and a pulsar mass of M_PSR = 2.40 ± 0.12 M☉, while more recent gamma-ray eclipse modelling (Clark et al. 2023) favours a higher inclination, i > 84.1°, and a correspondingly lower mass, M_PSR = 1.81 ± 0.07 M☉. That sensitivity to assumed geometry is exactly what multi-band photometry of the irradiated companion can help resolve.",
      question:
        "Can wavelength-dependent photometry of the irradiated companion recover its orbital modulation precisely enough to constrain the heating geometry and orbital inclination — and, with it, help resolve the tension between existing mass estimates for the pulsar?",
      data: "Photometry was obtained with HiPERCAM on the Gran Telescopio Canarias, which images five optical bands (u_s, g_s, r_s, i_s, z_s) simultaneously. [Observation dates and epoch count to be added.] Differential measurements are phase-folded across multiple nights onto the 9.17-hour orbital ephemeris, so the same orbital modulation is measured at five wavelengths at once.",
      methods: [
        "PSF-matched difference imaging (ZOGY; Zackay, Ofek & Gal-Yam 2016), applied independently per band",
        "Simultaneous five-band (u_s g_s r_s i_s z_s) differential photometry",
        "Per-night reference-frame anchoring and phase folding on the orbital ephemeris",
        "Permutation testing for variability significance",
        "Orbital light-curve and heating-geometry analysis (in progress)",
      ],
      methodsFigure: {
        label: "ZOGY proper difference image",
        src: "/figures/diffimg-equation.png",
        caption: "Zackay, Ofek & Gal-Yam (2016): the noise-normalised difference image D̂, applied independently in each HiPERCAM band.",
      },
      contribution:
        "I am building the full multi-band pipeline, from raw HiPERCAM frames through PSF modelling, per-band difference imaging and photometric extraction, to the phase-folded orbital light curves, and validating the recovered variability against a permutation-test null.",
      status:
        "Coherent orbital variability has been recovered in the u_s and r_s bands, with a permutation test against the null of no variability giving p ≈ 0.007 and consistent night-to-night behaviour. Photometric calibration and a total-flux (rather than reference-anchored differential) light curve are still in progress, as is characterising the wavelength dependence across all five bands. Day/night temperature contrast, the heating-distribution model, orbital inclination and companion mass have not yet been constrained.",
      figures: [
        {
          label: "Wavelength-dependent orbital modulation model",
          video: "/media/psrb1957-model.mp4",
          caption: "Model animation: multi-band flux tracing the companion's irradiated day side across orbital phase.",
        },
        {
          label: "r_s-band phase-folded light curve",
          src: "/figures/psrb1957-rsband-lightcurve.png",
          caption: "Four nights (2018-05-20, 2018-05-21, 2018-06-09), reference-anchored flux; eclipse window shown provisionally.",
        },
        {
          label: "z_s-band phase-folded light curve",
          src: "/figures/psrb1957-zsband-lightcurve.png",
          caption: "Same four nights in z_s; full-band calibration methodology not yet applied.",
        },
      ],
      tools: ["Python", "Astropy", "Photutils", "HiPERCAM pipeline", "NumPy", "SciPy", "Matplotlib"],
    },
  },
  {
    slug: "compact-binaries",
    title: "GX 339−4",
    subtitle: "Near-infrared photometry and difference imaging of a black-hole X-ray binary",
    summary:
      "Analysing multi-epoch VLT/HAWK-I observations of the black-hole X-ray binary GX 339−4 to investigate orbital variability and the contribution of its companion star, accretion flow and jet.",
    tags: [],
    abstract:
      "We observed GX 339−4 using near-infrared (NIR) Ks-band photometry over the 2025 Spring/Summer observing campaign, taken with the HAWK-I instrument on the European Southern Observatory (ESO)'s Very Large Telescope (VLT).",
    figureLabel: "Quiescent versus elevated near-infrared epoch — GX 339−4",
    figureSrc: "/figures/gx339-quiescent-vs-elevated.png",
    githubHref: "https://github.com/EoinTrainor/gx339-4-lightcurve",
    status: "Active",
    sections: {
      motivation:
        "GX 339−4 is a black-hole X-ray binary whose infrared light is shaped by its donor star, accretion flow and compact jet. Separating these contributions in quiescence is a route to a dynamical mass measurement for the black hole, one of relatively few such systems where this is possible. Its mass has never been properly constrained: the most recent literature estimate (Heida et al. 2017) places it at 2.3-9.5 M☉, a range wide enough that GX 339−4's black hole could sit within the neutron star-black hole mass gap, the range of masses in which neither type of compact object has yet been directly observed. Even a conventional mass measurement, without resolving the gap question outright, would place GX 339−4 properly within the Galactic stellar-mass black-hole population for the first time.",
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
      physics:
        "GX 339−4's donor star fills its Roche lobe: the region around it within which gas is gravitationally bound to the star rather than pulled toward the black hole. A Roche-lobe-filling star cannot stay spherical — tidal forces stretch it into an elongated, teardrop-like shape along the line joining the two stars. That distortion is the whole basis of the technique. As the binary orbits, we see this elongated donor from a constantly changing angle. At conjunction (orbital phase 0 and 0.5) we view it end-on, along its shortest axis, so its projected area, and its brightness, are at a minimum. At quadrature (phase 0.25 and 0.75) we view it side-on, along its longest axis, so projected area and brightness peak. The result is a light curve with two maxima and two minima per orbit — ellipsoidal modulation — distinct in shape from a single-humped signal such as an eclipse or a reflection effect. Crucially, the amplitude of that double-humped signal depends strongly on inclination: a system seen close to edge-on shows large swings in projected area, while one seen closer to face-on has its elongation foreshortened almost away, flattening the modulation out. That sensitivity is the whole point — recovering the amplitude and shape of the modulation lets us solve for inclination, the missing ingredient in the mass function above. The complication is that the donor is not the only source of near-infrared light at GX 339−4's position. What HAWK-I actually measures is a blend of the donor, the accretion disc, and potentially the jet — and Heida et al. (2017) found that even in quiescence, the donor contributes only around 45-50% of the J- and H-band light. So detecting variability at the target's position is not, by itself, evidence of ellipsoidal modulation: the harder problem, and the one this project is built around, is working out how much of any measured variability genuinely belongs to the donor rather than to a flickering accretion flow.",
      physicsFigures: [
        {
          label: "Binary geometry: Roche-lobe donor, black hole and centre of mass",
          src: "/figures/gx339-binary-geometry.png",
          caption: "System geometry adopted from Heida et al. (2017), a = 11.73 R☉. The donor's teardrop shape is set by its Roche lobe.",
        },
        {
          label: "Theoretical ellipsoidal modulation curves",
          src: "/figures/gx339-modulation-curves.png",
          caption: "Predicted donor-star modulation for inclinations i = 30°, 50°, 70°: higher inclination gives larger amplitude, but the double-peaked shape is set by the geometry above.",
        },
      ],
      data: "GX 339−4 has an orbital period of approximately 1.76 days (~42 hours), too long to cover in a single ground-based night. The observing strategy — a distributed random-phase sampling approach proposed by Dr Mark Kennedy — requested around 20 hours of HAWK-I time spread across the 2025 spring/summer season, on the logic that observing blocks landing at different, effectively random orbital phases could be phase-folded into a single light curve without needing to cover an orbit continuously. Swift/BAT hard-X-ray monitoring (15-50 keV) ran in parallel to flag windows of X-ray quiescence, when contamination from the accretion flow should be minimal. ESO ultimately delivered around 12 hours, realised as twelve observing blocks (OBs), in a near-infrared field roughly 3,400 sources deep, 4° below the Galactic plane.",
      methods: [
        "PSF-matched difference imaging (ZOGY; Zackay, Ofek & Gal-Yam 2016)",
        "Swift/BAT-guided quiescent-epoch scheduling",
        "ICARUS binary light-curve modelling, once a modulation signal is recovered",
        "Literature-constrained parameter priors (Heida et al. 2017)",
        "MCMC / Bayesian parameter inference",
        "Corner-plot diagnostics for parameter degeneracies (e.g. inclination–mass-ratio)",
      ],
      methodsFigure: {
        label: "ZOGY proper difference image",
        src: "/figures/diffimg-equation.png",
        caption: "Zackay, Ofek & Gal-Yam (2016): the noise-normalised difference image D̂ underlying every subtraction in this pipeline.",
      },
      contribution:
        "I built the data-reduction pipeline end-to-end myself — PSF modelling, difference imaging and photometric extraction, based on Zackay, Ofek & Gal-Yam (2016) — and assembled a literature-sourced parameter set for the ICARUS light-curve model, each value attributed to its source paper. The difference-imaging code alone represents around six months of development.",
      status:
        "Twelve observing blocks were obtained. The final three showed elevated near-infrared flux with no corresponding rise in Swift/BAT, so hard-X-ray monitoring alone did not reliably flag the change in near-infrared state; those three were excluded as likely accretion-contaminated. Of the nine retained blocks, most sit close to the OB3 reference frame as expected for quiescence, but OB7-9 still show a residual excursion under the same method. No convincing, repeatable double-peaked modulation emerged that could safely be attributed to the donor, so fitting an ellipsoidal model and reporting an inclination from this data would not be physically justified. In short: variable Ks-band flux was recovered from an extremely crowded field, but the donor-star ellipsoidal modulation was not isolated, so no robust inclination or black-hole mass constraint has yet been produced. A future campaign would need more robust, more sensitive confirmation of quiescence throughout — not just hard-X-ray monitoring.",
      figures: [
        {
          label: "Orbital phase coverage",
          src: "/figures/gx339-phase-coverage.png",
          caption: "Phase-bin coverage: 65% observed, 45% quiescent, across the P = 1.7587 d orbit (Heida et al. 2017).",
        },
        {
          label: "Swift/BAT observing campaign",
          src: "/figures/gx339-swiftbat-campaign.png",
          caption: "Hard X-ray (15-50 keV) monitoring used to schedule HAWK-I observing blocks around quiescent windows.",
        },
        {
          label: "Quiescent vs. elevated epoch",
          src: "/figures/gx339-quiescent-vs-elevated.png",
          caption: "OB3 (quiescent-like) against OB10 (elevated NIR), among the epochs excluded as accretion-contaminated.",
        },
        {
          label: "Aperture flux difference vs. orbital phase",
          src: "/figures/gx339-lightcurve-result.png",
          caption: "Nine retained OBs against the predicted ellipsoidal minima/maxima; no coherent modulation is recovered.",
        },
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
    title: "Observing the Solar Chromosphere",
    subtitle: "Hα imaging, CCD characterisation and plasma dynamics in the solar atmosphere",
    summary:
      "Used narrow-band Hα observations to investigate the structure and dynamics of the solar chromosphere, combining hands-on observing with quantitative CCD characterisation and photometric calibration. I measured detector gain, readout noise and dark current, constructed bias, dark and flat-field calibrations, and converted the CCD's recorded ADU counts into physical Hα flux measurements. The observations captured an eruptive solar prominence, whose motion was tracked across successive frames to derive its plasma velocity and acceleration; under a magnetic-tension model, these measurements were then used to place a constraint on the prominence's magnetic field strength.",
    tags: ["Solar physics", "CCD photometry", "Hα imaging", "Observational astronomy"],
    figureLabel: "[Full-disc Hα image of the solar chromosphere]",
    githubHref: "[Project repository]",
    posterHref: "[Poster PDF]",
    status: "Completed",
    sections: {
      motivation:
        "The solar chromosphere is a thin and highly dynamic region of the Sun's atmosphere, shaped strongly by magnetic fields and containing structures such as sunspots, filaments and prominences. Hα, produced by transitions in neutral hydrogen, is one of the most useful wavelengths for isolating this structure against the underlying photosphere.",
      question:
        "Can narrow-band Hα imaging, combined with detector characterisation and photometric calibration, be used to measure the physical motion of an eruptive solar prominence and place a constraint on the magnetic field driving it?",
      data: "Observations were made using dedicated 60 mm Hα solar telescopes coupled to an ATIK 314L+ CCD camera, with Fabry-Perot etalons and blocking filters isolating a narrow band around 656.3 nm.",
      methods: [
        "CCD gain, readout noise and dark current characterisation",
        "Bias, dark and flat-field calibration",
        "Conversion of calibrated ADU counts to physical Hα flux",
        "Prominence displacement tracking across successive frames",
        "Velocity and acceleration estimation from image-scale-calibrated motion",
        "Magnetic-tension modelling of the eruption",
      ],
      contribution:
        "An individual undergraduate research project at Queen's University Belfast, covering telescope operation, CCD characterisation, calibration-frame construction, image processing, photometry and time-series analysis, written up as a full project report and presented as a poster.",
      status: "Completed as an undergraduate research project at Queen's University Belfast.",
      figures: [],
      tools: [
        "Python",
        "NumPy",
        "Matplotlib",
        "FITS image processing",
        "CCD photometry",
        "Hα imaging",
        "Time-series analysis",
        "Plasma modelling",
      ],
    },
  },
  {
    slug: "ecg-machine-learning",
    title: "Improving Cardiac Diagnostics Through Machine Learning",
    subtitle: "Award-winning undergraduate research in signal processing, feature detection and machine learning",
    summary:
      "An undergraduate team project at Queen's University Belfast on ECG classification, combining Fourier and wavelet denoising, explicit PQRST feature detection and Random Forest machine learning.",
    tags: [
      "Python",
      "Machine learning",
      "Signal processing",
      "Denoising",
      "Feature detection",
      "Statistical analysis",
      "Medical physics",
    ],
    figureLabel: "ECG signal-processing and classification pipeline",
    figureSrc: "/assets/images/research/ecg/ecg-card-figure.png",
    githubHref: "[Project repository]",
    status: "Completed",
    sections: {
      motivation:
        "An electrocardiogram records the electrical activity of the heart as a noisy time-dependent signal. The project treated it as a physical time series: what could be isolated in frequency space, which structures had to stay localised in time, and how measurements could become features for machine learning.",
      question:
        "Can signal-processing techniques be used to suppress noise while preserving diagnostically relevant ECG structure, and can those extracted features improve machine-learning classification of normal and abnormal cardiac activity?",
      data: "ECG recordings from publicly available PhysioNet databases, processed in Python.",
      methods: [
        "Denoising: frequency-domain cut-offs, median filtering and Db4 discrete wavelet transforms",
        "Fast Fourier Transform and power spectral density analysis",
        "PQRST feature detection, intervals, heart rate and heart-rate variability",
        "Statistical analysis of feature distributions",
        "Random Forest classification combined with engineered ECG features",
      ],
      contribution:
        "A collaborative undergraduate project. My work contributed to the computational development of the ECG analysis pipeline, applying Python, signal-processing methods, feature extraction and machine-learning techniques.",
      status:
        "Completed undergraduate research project, awarded the Data Intellect: Analytics Physics Prize (2025).",
      figures: [],
      tools: [
        "Python",
        "NumPy",
        "SciPy",
        "scikit-learn",
        "Signal processing",
        "Fast Fourier Transform",
        "Discrete Wavelet Transform",
        "Random Forest classification",
        "Statistical feature analysis",
      ],
    },
  },
];

export const ALL_RESEARCH = [...CURRENT_RESEARCH, ...OTHER_RESEARCH];

export function getResearchBySlug(slug: string) {
  return ALL_RESEARCH.find((p) => p.slug === slug);
}
