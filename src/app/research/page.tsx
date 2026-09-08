import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ResearchCard from "@/components/ResearchCard";
import { CURRENT_RESEARCH, OTHER_RESEARCH } from "@/data/research";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Observational and computational research into compact stellar systems, time-domain astronomy and difference imaging.",
};

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 pb-24 pt-14 md:px-10">
      <SectionHeader
        heading="Research"
        intro="I use observation, computation, modelling, signal and image processing, and statistics to extract physical information from complex systems."
      />

      <div className="mt-14">
        <h2 className="font-display text-xl text-steel">Current — University College Cork</h2>
        <div className="mt-8 space-y-14">
          {CURRENT_RESEARCH.map((project) => (
            <ResearchCard key={project.slug} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-display text-xl text-steel">Undergraduate — Queen&rsquo;s University Belfast</h2>
        <div className="mt-8 space-y-14">
          {OTHER_RESEARCH.map((project) => (
            <ResearchCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
