import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import ResearchTimeline from "@/components/ResearchTimeline";
import ScientificFigure from "@/components/ScientificFigure";
import { ACADEMIC_TIMELINE, UNDERGRADUATE_AREAS } from "@/data/timeline";

export const metadata: Metadata = {
  title: "About",
  description: "Background and research interests — Eoin Trainor, astrophysics and computational physics.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-14 md:px-10">
      <SectionHeader heading="About" />

      <div className="mt-10 grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-start">
        <ScientificFigure
          label="Profile photograph"
          src="/figures/eoin-trainor-profile.png"
          aspect="square"
        />
        <div className="space-y-4 text-base leading-relaxed text-paper-dim">
          <p>
            I&rsquo;m Eoin Trainor, a physics graduate from Queen&rsquo;s University Belfast and
            currently a Research Master&rsquo;s student in astrophysics at University College
            Cork.
          </p>
          <p>
            My research focuses on extracting physical information from challenging astronomical
            observations, particularly interacting compact stellar systems. I work across
            observational astronomy, scientific image processing and computational modelling,
            with an emphasis on turning complex or noisy datasets into physically interpretable
            results.
          </p>
          <p>
            My wider interests lie in computational physics and its application to complex
            physical systems, including future energy technologies and hydrogen infrastructure.
          </p>
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-display text-2xl text-paper">Physics background</h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-paper-dim">
          My undergraduate training covered core theoretical, computational and experimental
          physics, including classical mechanics, electromagnetism, quantum mechanics,
          thermodynamics, statistical physics, optics, computational physics and astrophysics.
        </p>
        <ul className="mt-6 flex flex-wrap gap-x-3 gap-y-2">
          {UNDERGRADUATE_AREAS.map((area) => (
            <li
              key={area}
              className="font-mono-label text-[11px] text-paper-dim/80 border border-ink-line rounded-sm px-2 py-1"
            >
              {area}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-20">
        <h2 className="font-display text-2xl text-paper">Timeline</h2>
        <div className="mt-8">
          <ResearchTimeline entries={ACADEMIC_TIMELINE} />
        </div>
      </div>

      <div className="mt-20">
        <h2 className="font-display text-2xl text-paper">Beyond Physics</h2>
        <div className="mt-4 max-w-2xl space-y-4 text-base leading-relaxed text-paper-dim">
          <p>
            Outside of academia, I am a passionate hurler, playing at senior club and county
            level, and have a keen interest in sport more broadly. I enjoy the outdoors, the odd
            ski trip, travelling, and experiencing new places and cultures.
          </p>
          <p>
            I&rsquo;ve always enjoyed hands-on work and learning practical skills, often pursuing
            interests well beyond my academic background. I&rsquo;ve worked as a studio labourer
            on film sets at Titanic Studios in Belfast, gaining experience with everything from
            leaf blowers to 17-metre telehandlers. I&rsquo;ve also trained as a lifeguard,
            obtained licences to operate powerboats, forklifts and telehandlers, and even had the
            opportunity to fly a plane.
          </p>
        </div>
      </div>
    </div>
  );
}
