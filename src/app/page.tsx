import Link from "next/link";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ResearchCard from "@/components/ResearchCard";
import MethodsGrid from "@/components/MethodsGrid";
import ResearchTimeline from "@/components/ResearchTimeline";
import ResearchOutputCard from "@/components/ResearchOutputCard";
import GitHubProjectCard from "@/components/GitHubProjectCard";
import ScientificFigure from "@/components/ScientificFigure";
import SpectralRule from "@/components/SpectralRule";
import { CURRENT_RESEARCH, getResearchBySlug } from "@/data/research";
import { RESEARCH_JOURNEY } from "@/data/timeline";
import { OUTPUTS } from "@/data/outputs";
import { REPOS } from "@/data/repos";
import { SITE } from "@/data/site";

export default function Home() {
  const featured = getResearchBySlug("difference-imaging")!;

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <SectionHeader
          heading="Current Research"
          intro="Understanding compact systems through observation, image analysis and physical modelling."
        />
        <div className="mt-10 space-y-14">
          {CURRENT_RESEARCH.map((project) => (
            <ResearchCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <SpectralRule label="Research across scales" className="mb-16" />
        <SectionHeader
          heading="Research Journey"
          intro="Different systems, same physicist&rsquo;s toolkit — isolate the signal, extract the features, test them statistically, and model the underlying physics."
        />
        <div className="mt-12 max-w-2xl">
          <ResearchTimeline entries={RESEARCH_JOURNEY} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <ScientificFigure
            label={featured.figureLabel}
            meta="Difference imaging"
            aspect="tall"
            accent
          />
          <div>
            <p className="font-mono-label text-xs text-halpha">Featured research</p>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-paper text-balance">
              Extracting variability from crowded astronomical fields
            </h2>
            <p className="mt-4 text-base leading-relaxed text-paper-dim">
              Ground-based images of crowded stellar fields change from night to night —
              atmospheric seeing, sky brightness and pointing all shift. Difference imaging
              subtracts a stable reference frame from each new observation, isolating genuine
              astrophysical variability from that noise. I am developing an empirical-PSF
              difference-imaging pipeline to recover faint orbital signals that direct photometry
              would otherwise miss.
            </p>
            <Link
              href={`/research/${featured.slug}`}
              className="mt-6 inline-block text-sm text-halpha hover:text-paper transition-colors"
            >
              Read the research →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <SectionHeader
          heading="Methods & Research Interests"
          intro="A quantitative toolkit built around observation, computation and inference — applied to astrophysics, and transferable beyond it."
        />
        <div className="mt-10">
          <MethodsGrid />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <SectionHeader heading="Research Outputs & Recognition" />
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          {OUTPUTS.map((output) => (
            <ResearchOutputCard key={output.title} output={output} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeader heading="Selected Code" intro="Pipelines and models, developed in the open." />
          <a href={SITE.github} className="text-sm text-halpha hover:text-paper transition-colors">
            View all on GitHub
          </a>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {REPOS.map((repo) => (
            <GitHubProjectCard key={repo.name} repo={repo} />
          ))}
        </div>
      </section>
    </>
  );
}
