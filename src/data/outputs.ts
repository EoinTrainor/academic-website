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
    title: "[INAM presentation title]",
    venue: "Irish National Astronomy Meeting (INAM)",
    year: "2026",
    note: "Presented astrophysics research at INAM. [Presentation PDF / slides to be added]",
  },
  {
    kind: "Award",
    title: "[ECG award title]",
    venue: "Machine Learning & ECG — undergraduate research project",
    year: "Queen's University Belfast",
    note: "Award-winning undergraduate research project.",
  },
];
