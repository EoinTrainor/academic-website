import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import GitHubProjectCard from "@/components/GitHubProjectCard";
import { REPOS } from "@/data/repos";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected code and computational work — pipelines, models and analysis tools.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-14 md:px-10">
      <SectionHeader
        heading="Projects"
        intro="Selected code and computational work, developed alongside my research."
      />
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {REPOS.map((repo) => (
          <GitHubProjectCard key={repo.name} repo={repo} />
        ))}
      </div>
      <a
        href={SITE.github}
        className="mt-14 inline-block text-sm text-halpha hover:text-paper transition-colors"
      >
        View all on GitHub
      </a>
    </div>
  );
}
