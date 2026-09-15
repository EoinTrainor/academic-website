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
    venue: "Irish National Astronomy Meeting (INAM)",
    year: "2026",
    note: "Presented astrophysics research at INAM.",
  },
  {
    kind: "Award",
    title: "Data Intellect: Analytics Physics Prize",
    venue: "Machine Learning & ECG — undergraduate research project",
    year: "Queen's University Belfast",
    note: "Awarded for “ECG Classification Methods with Explorative Denoising Techniques and Feature Detection Strategies Enhanced by Machine Learning.”",
  },
];
