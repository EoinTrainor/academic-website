type Method = {
  title: string;
  description: string;
};

export const METHODS: Method[] = [
  {
    title: "Scientific Computing",
    description: "Python, numerical methods, reproducible analysis, scientific workflows.",
  },
  {
    title: "Astronomical Image Analysis",
    description:
      "PSF modelling, image subtraction, photometry, calibration and time-series extraction.",
  },
  {
    title: "Statistical Inference",
    description: "Model comparison, resampling, uncertainty analysis and validation.",
  },
  {
    title: "Machine Learning",
    description: "Classification, signal processing and data-driven analysis.",
  },
  {
    title: "Physical Modelling",
    description: "Orbital geometry, compact systems, radiative processes and parameter inference.",
  },
  {
    title: "Energy & Hydrogen Systems",
    description:
      "An emerging research interest in applying computational physics, modelling and quantitative analysis to hydrogen production, transport, infrastructure and wider energy systems.",
  },
];

export default function MethodsGrid() {
  return (
    <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      {METHODS.map((method) => (
        <div key={method.title} className="border-t border-ink-line pt-4">
          <h3 className="font-display text-lg text-paper">{method.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-paper-dim">{method.description}</p>
        </div>
      ))}
    </div>
  );
}
