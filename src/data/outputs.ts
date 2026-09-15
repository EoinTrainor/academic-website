export type Output = {
  kind: "Presentation" | "Award";
  title: string;
  venue: string;
  year: string;
  note: string;
};

export const OUTPUTS: Output[] = [
  {
    kind: "Presentation",
    title: "Difference Imaging and Multi-Band Light Curve Analysis of High Energy Binary Systems",
    venue: "Irish National Astronomy Meeting (INAM), Maynooth University",
    year: "2026",
    note: "Presented work to date from my Research Master's, covering difference imaging and multi-band light-curve analysis of high-energy binary systems.",
  },
  {
    kind: "Award",
    title: "Data Intellect: Analytics Physics Prize",
    venue: "Undergraduate research project, Queen's University Belfast",
    year: "2025",
    note: "Awarded for “ECG Classification Methods with Explorative Denoising Techniques and Feature Detection Strategies Enhanced by Machine Learning.”",
  },
];
