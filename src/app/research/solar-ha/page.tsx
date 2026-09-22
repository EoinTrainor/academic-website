import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getResearchBySlug } from "@/data/research";
import { SITE } from "@/data/site";
import FallbackFigure from "@/components/FallbackFigure";

const SLUG = "solar-ha";
const IMG = "/assets/images/research/solar-ha/";

export function generateMetadata(): Metadata {
  const project = getResearchBySlug(SLUG);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-y-3">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center">
          <span className="font-mono-label text-xs text-paper-dim/80 border border-ink-line rounded-sm px-2.5 py-1.5">
            {step}
          </span>
          {i < steps.length - 1 ? <span className="mx-2 text-halpha">→</span> : null}
        </span>
      ))}
    </div>
  );
}

export default function Page() {
  const project = getResearchBySlug(SLUG);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 pb-24 pt-14 md:px-10">
      <Link href="/research" className="text-sm text-paper-dim hover:text-paper transition-colors">
        ← Research
      </Link>

      <header className="mt-6">
        <p className="font-mono-label text-xs text-halpha">{project.status}</p>
        <h1 className="mt-3 font-display text-4xl md:text-5xl text-paper text-balance">
          {project.title}
        </h1>
        <p className="mt-3 text-lg text-steel">{project.subtitle}</p>
        <ul className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="font-mono-label text-[11px] text-paper-dim/80 border border-ink-line rounded-sm px-2 py-1"
            >
              {tag}
            </li>
          ))}
        </ul>
      </header>

      <section className="mt-10 space-y-5">
        <p className="text-base leading-relaxed text-paper-dim">
          The solar chromosphere is a thin and highly dynamic region of the Sun&rsquo;s atmosphere,
          shaped strongly by magnetic fields and containing structures such as sunspots, filaments
          and prominences.
        </p>
        <p className="text-base leading-relaxed text-paper-dim">
          This project used narrow-band Hα observations to study these structures while following
          the complete observational process from detector characterisation and image calibration
          through to physical flux measurements and the interpretation of solar plasma dynamics.
          During the observing programme, I captured an eruptive prominence and used its measured
          motion to place a simplified constraint on the magnetic field associated with the
          eruption.
        </p>
      </section>

      <div className="mt-10">
        <FallbackFigure
          label="Full-disc Hα image of the solar chromosphere"
          src={`${IMG}solar-ha-overview.png`}
          caption="The solar chromosphere observed in the Hα line at 656.3 nm, revealing structures including prominences, filaments and sunspots."
          aspect="wide"
        />
      </div>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">The Physics</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            Hα is one of the most useful wavelengths for observing the solar chromosphere. It is
            produced by transitions in neutral hydrogen and provides strong contrast for structures
            that are difficult to isolate in broadband observations of the Sun.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            Prominences are large structures of relatively cool, dense plasma suspended within the
            much hotter solar atmosphere by magnetic fields. When the magnetic configuration
            supporting this plasma becomes unstable, material can accelerate away from the solar
            surface in an eruptive prominence.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            That makes the motion of the plasma itself useful. By measuring how a prominence moves
            with time, its velocity and acceleration can be estimated and connected, through a
            physical model, to the magnetic forces acting on the plasma.
          </p>
          <FallbackFigure
            label="Annotated chromosphere image identifying a prominence, filament and sunspot"
            src={`${IMG}solar-ha-structures-annotated.png`}
            caption="Examples of chromospheric structures visible in narrow-band Hα observations."
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Observations &amp; Instrumentation</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            Observations were made using dedicated 60 mm Hα solar telescopes coupled to an ATIK
            314L+ CCD camera. Fabry-Perot etalons and blocking filters isolate a very narrow region
            around the Hα wavelength, greatly increasing the visibility of chromospheric structure
            relative to the underlying photosphere.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            An important part of the project was understanding what happened before an astronomical
            image became usable data.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            Incoming photons generate electrical charge inside the CCD. That charge is transferred,
            converted into a voltage and digitised into analogue-to-digital units, or ADU. I
            therefore characterised the detector itself, measuring quantities including its gain,
            readout noise and dark current before using it for quantitative solar observations.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <FallbackFigure
              label="Photograph of the Hα solar telescope setup"
              src={`${IMG}solar-ha-telescope.png`}
              aspect="square"
            />
            <FallbackFigure
              label="CCD and optical path schematic"
              src={`${IMG}solar-ha-ccd-schematic.png`}
              aspect="square"
            />
          </div>
          <p className="text-xs text-paper-dim/80 leading-relaxed">
            The Hα observing system used to isolate chromospheric emission and record it with a
            scientific CCD.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Calibrating the CCD</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            Raw CCD images contain more than astronomical signal. Electronic offsets, thermally
            generated charge and variations in the sensitivity of individual pixels all contribute
            to the recorded image.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            I produced bias, dark and flat-field calibration frames and used these to characterise
            and correct the detector. The calibration work included experimentally determining the
            CCD gain, readout noise and dark current and then applying the resulting corrections to
            the solar observations.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            This was an important part of the project because it connected the physical operation of
            the detector to the quantities eventually used for astrophysical analysis.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            The calibrated CCD counts could then be related to the known solar Hα irradiance,
            allowing instrumental measurements in ADU to be converted into physical flux units.
          </p>
          <FallbackFigure
            label="Raw CCD image compared with the calibrated image"
            src={`${IMG}solar-ha-calibration-comparison.png`}
            caption="Raw CCD observations were corrected for electronic, thermal and pixel-response effects before physical measurements were extracted."
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">An Eruptive Prominence</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            One of the most interesting observations obtained during the project was an eruptive
            prominence above the solar limb.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            Instead of treating it as a single image, I followed the prominence through successive
            exposures and measured how its position changed with time. The pixel displacement was
            converted into a physical distance using the measured image scale, allowing the bulk
            velocity and acceleration of the plasma to be estimated.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            This transformed a sequence of images into a time-resolved measurement of a real
            dynamical event occurring in the solar atmosphere.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <FallbackFigure
              label="Eruptive prominence at an early observation time"
              src={`${IMG}solar-ha-prominence-1.png`}
              aspect="square"
            />
            <FallbackFigure
              label="Eruptive prominence during the eruption"
              src={`${IMG}solar-ha-prominence-2.png`}
              aspect="square"
            />
            <FallbackFigure
              label="Eruptive prominence at a later observation time"
              src={`${IMG}solar-ha-prominence-3.png`}
              aspect="square"
            />
          </div>
          <p className="text-xs text-paper-dim/80 leading-relaxed">
            Evolution of the eruptive prominence in Hα. Its displacement between successive
            observations was used to measure the motion of the plasma.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">From Motion to Magnetic Field</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            The final step was to connect the observed motion to the underlying physics.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            Assuming that the upward acceleration of the prominence was driven primarily by
            magnetic tension, I used its measured acceleration, estimated physical scale and
            plausible plasma densities to place a simplified constraint on the magnetic field
            strength associated with the eruption.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            The project also explored the magnetic environment of more stable solar structures. Hα
            measurements and simplified plasma models were used to compare the eruptive prominence
            with a sunspot, where much stronger magnetic confinement is required to maintain the
            dense plasma structure close to the solar surface.
          </p>
          <FallbackFigure
            label="Velocity and acceleration measurements used to constrain the prominence magnetic field"
            src={`${IMG}solar-ha-velocity-field.png`}
            caption="Measurements of the prominence motion provided a route from observed image displacement to the physical conditions governing the eruption."
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">What the Project Established</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            The project demonstrated how relatively small-scale ground-based observations can be
            taken considerably further than producing images of the Sun.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">The full analysis followed the chain:</p>
          <Flow
            steps={[
              "Incoming light",
              "CCD charge",
              "ADU",
              "Calibrated image",
              "Physical flux",
              "Plasma motion",
              "Physical interpretation",
            ]}
          />
          <p className="text-base leading-relaxed text-paper-dim">
            It gave me practical experience in telescope operation, CCD characterisation,
            calibration-frame construction, astronomical image processing, photometry and
            time-series analysis, while also demonstrating how observations can be used to
            constrain physical quantities that cannot be measured directly.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            That experience became an important foundation for my later work in observational
            astrophysics and differential photometry.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Tools &amp; Technologies</h2>
        <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
          {project.sections.tools.map((tool) => (
            <li
              key={tool}
              className="font-mono-label text-[11px] text-paper-dim/80 border border-ink-line rounded-sm px-2 py-1"
            >
              {tool}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Project Report</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            A full technical treatment of the instrumentation, observations, calibration, analysis
            and modelling is available in the completed project report. The work was also presented
            as a research poster.
          </p>
        </div>
        <div className="mt-5 flex flex-wrap items-center gap-x-8 gap-y-3">
          {!SITE.orcid.startsWith("[") ? (
            <a
              href={SITE.orcid}
              className="text-sm text-halpha hover:text-paper transition-colors"
            >
              View project on ORCID →
            </a>
          ) : null}
          {project.posterHref && !project.posterHref.startsWith("[") ? (
            <a
              href={project.posterHref}
              className="text-sm text-halpha hover:text-paper transition-colors"
            >
              View poster →
            </a>
          ) : null}
          {!project.githubHref.startsWith("[") ? (
            <a
              href={project.githubHref}
              className="text-sm text-halpha hover:text-paper transition-colors"
            >
              View code on GitHub →
            </a>
          ) : null}
        </div>
      </section>
    </div>
  );
}
