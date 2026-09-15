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
    note: "Presented work from my Research Master’s on isolating the variable flux associated with the donor stars in low-mass X-ray binaries, with the aim of recovering and modelling their orbital light curves to constrain the physical parameters of the systems. The work focused on the black-widow millisecond pulsar PSR B1957+20 and the black-hole X-ray binary GX 339−4.",
  },
  {
    kind: "Award",
    title: "Data Intellect: Analytics Physics Prize",
    venue: "Undergraduate research project, Queen's University Belfast",
    year: "2025",
    note: "Awarded for “ECG Classification Methods with Explorative Denoising Techniques and Feature Detection Strategies Enhanced by Machine Learning.”",
  },
];
