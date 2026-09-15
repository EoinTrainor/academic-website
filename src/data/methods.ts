export type Method = {
  title: string;
  description: string;
};

export const METHODS: Method[] = [
  {
    title: "Physics & First-Principles Reasoning",
    description:
      "Reduction of unfamiliar problems to the key physical quantities, relationships and assumptions that govern the system.",
  },
  {
    title: "Scientific Computing",
    description:
      "Python-based numerical analysis, simulation, data reduction and reproducible research workflows using tools including NumPy, SciPy, Astropy and pandas.",
  },
  {
    title: "Astronomical Image Processing",
    description:
      "Image registration, empirical PSF modelling, ZOGY-style difference imaging, crowded-field photometry, photometric calibration and extraction of faint variable signals.",
  },
  {
    title: "Signal Processing",
    description:
      "Denoising, filtering, time-series analysis, signal isolation and feature extraction from noisy observational data.",
  },
  {
    title: "Machine Learning",
    description:
      "Autoencoders for representation and denoising tasks, random-forest methods for feature-based classification, and machine-learning approaches for extracting meaningful structure from scientific data.",
  },
  {
    title: "Statistical Analysis & Inference",
    description:
      "Bayesian analysis, Markov Chain Monte Carlo (MCMC), resampling and permutation tests, injection-recovery experiments, uncertainty analysis, negative controls and model comparison.",
  },
  {
    title: "Physical & Computational Modelling",
    description:
      "Construction and comparison of physical models with observations, including binary light-curve modelling, orbital geometry, irradiation, heating and inference of compact-object system parameters.",
  },
];

export const RESEARCH_INTERESTS: Method[] = [
  {
    title: "Fundamental Physics & Mathematics",
    description:
      "Quantum mechanics, quantum electrodynamics, fields, symmetry and the mathematical structures underlying physical law. A particular fascination with the point where abstract mathematics becomes a description of physical reality, and what those structures might reveal about the deeper workings of the Universe.",
  },
  {
    title: "Astronomical Imaging",
    description:
      "The complete path from physical phenomenon to scientific measurement: photons from an astrophysical source, telescope optics, interaction with the solid-state physics of CCD and CMOS detectors, image formation and calibration, through to the final data used to infer the underlying physics.",
  },
  {
    title: "High-Energy Astrophysics",
    description:
      "Black holes, neutron stars and compact binary systems, particularly where variability can be used to constrain otherwise inaccessible physical properties. Photometry, orbital behaviour, irradiation and faint time-dependent signals as probes of extreme astrophysical environments.",
  },
  {
    title: "Solution & Process Design",
    description:
      "I enjoy taking open-ended problems and mapping out the route to a solution: finding the right data, deciding what needs to be measured or calculated, working out how each stage should connect, and building the process needed to reach a reliable answer.",
  },
  {
    title: "Hydrogen Energy & Infrastructure",
    description:
      "Climate change is a genuine passion of mine, and developing hydrogen infrastructure is where I'd like to direct it, from production and storage through transport, distribution and integration into wider energy systems. Particularly interested in where physics, computation and quantitative modelling can help solve the system-level problems involved.",
  },
  {
    title: "Physics Beyond a Single Discipline",
    description:
      "A broad interest in understanding how physical systems work, rather than remaining confined to one narrow subject area, spanning optics, electromagnetism, quantum mechanics and solid-state physics through to energy systems and astrophysics. The underlying appeal is the same: identify the governing principles, build the right model and understand what nature is doing.",
  },
];
