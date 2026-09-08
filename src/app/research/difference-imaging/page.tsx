import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectLayout from "@/components/ProjectLayout";
import { getResearchBySlug } from "@/data/research";

const SLUG = "difference-imaging";

export function generateMetadata(): Metadata {
  const project = getResearchBySlug(SLUG);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default function Page() {
  const project = getResearchBySlug(SLUG);
  if (!project) notFound();
  return <ProjectLayout project={project} />;
}
