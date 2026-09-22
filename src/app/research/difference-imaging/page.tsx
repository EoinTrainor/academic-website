import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getResearchBySlug } from "@/data/research";
import ScientificFigure from "@/components/ScientificFigure";

const SLUG = "difference-imaging";

export function generateMetadata(): Metadata {
  const project = getResearchBySlug(SLUG);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-5 max-w-2xl border-l-2 border-halpha pl-4 text-base leading-relaxed text-paper italic">
      {children}
    </p>
  );
}

function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-y-3">
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

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-base leading-relaxed text-paper-dim">
          <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-halpha" />
          {item}
        </li>
      ))}
    </ul>
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
      </header>

      <section className="mt-10 space-y-5">
        <p className="text-base leading-relaxed text-paper-dim">
          PSR B1957+20 is the original black-widow pulsar, a rapidly rotating neutron star in a
          close orbit with an extremely low-mass companion. The pulsar rotates every 1.61
          milliseconds, and the binary completes an orbit every 9.17 hours.
        </p>
        <p className="text-base leading-relaxed text-paper-dim">
          The pulsar strongly irradiates and ablates its companion, creating a large temperature
          difference between the side facing the pulsar and the cooler side facing away from it.
          This makes the companion&rsquo;s orbital light curve a powerful probe of the binary
          geometry and the physical conditions within the system.
        </p>
        <p className="text-base leading-relaxed text-paper-dim">
          The broader aim of the project is to recover and model this orbital light curve across
          multiple wavelength bands, allowing the system&rsquo;s heating, geometry, inclination
          and, ultimately, the neutron star mass to be better constrained.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Why PSR B1957+20 Matters</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            PSR B1957+20 was the original system from which the term black-widow pulsar emerged,
            discovered by Fruchter et al. (1988). It remains an important benchmark for
            understanding the interaction between energetic millisecond pulsars and their
            low-mass companions.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            The pulsar&rsquo;s inferred parameters have shifted with methodology. Earlier optical
            modelling of the companion, by van Kerkwijk et al. (2011), suggested an inclination of
            i = 65° ± 2° and a pulsar mass of M<sub>PSR</sub> = 2.40 ± 0.12 M☉, among the most
            massive neutron stars known. More recent work, including constraints from the
            gamma-ray eclipse (Clark et al. 2023), favours a substantially higher inclination,
            i &gt; 84.1°, and a correspondingly lower mass, M<sub>PSR</sub> = 1.81 ± 0.07 M☉.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            That sensitivity is the point. A change in assumed geometry, not in any new physics,
            moves the inferred neutron star mass by more than half a solar mass. PSR B1957+20 is a
            system where improving our understanding of the companion can directly improve our
            understanding of the neutron star.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">The Physics</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            PSR B1957+20 contains a millisecond pulsar and an extremely low-mass stellar companion
            in a very close binary orbit. The neutron star emits an intense pulsar wind and
            high-energy radiation. The hemisphere of the companion facing the pulsar is strongly
            irradiated and heated, while the opposite hemisphere remains considerably cooler.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            The same interaction is also responsible for the gradual ablation of material from the
            companion, which gives this class of binaries the name black-widow systems.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            As the companion travels around the neutron star, our viewing angle onto its heated
            and cooler hemispheres changes. At orbital phases where the heated face is presented
            toward the observer, the companion appears brighter. At phases where more of the
            cooler side is visible, the system appears fainter. This produces a strong,
            once-per-orbit heating-driven modulation in the optical light curve, a different
            signature from the twice-per-orbit ellipsoidal modulation that shapes the GX 339−4
            light curve.
          </p>
          <ScientificFigure
            label="Reference, science and difference images around PSR B1957+20"
            src="/figures/psrb1957-diffimaging-panels.png"
            caption="Reference and science frames around the companion, with the resulting difference image and the empirical PSFs used for each frame."
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Temperature Written into the Spectrum</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            The heating signal is wavelength dependent. The companion is intrinsically cool, so
            its shorter-wavelength emission is faint. However, those shorter wavelengths are also
            particularly sensitive to changes in temperature, so as the heated face rotates into
            view, the relative increase in flux can differ from one filter to another.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            Observing the same orbital modulation simultaneously across several wavelength bands
            therefore gives information that a single band cannot provide. In principle, the
            amplitude and shape of the multi-band light curves can constrain:
          </p>
          <Bullets
            items={[
              "the day-side temperature",
              "the night-side temperature",
              "the distribution of heating across the companion",
              "the geometry of the companion",
              "the orbital inclination",
              "and, ultimately, the neutron star mass",
            ]}
          />
          <p className="text-base leading-relaxed text-paper-dim">
            This is the key physical reason for using HiPERCAM.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Observations &amp; Data</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            The observations were obtained using HiPERCAM on the Gran Telescopio Canarias. Its key
            advantage is simultaneous imaging in five optical wavelength bands (u_s, g_s, r_s, i_s
            and z_s).
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            At any given orbital phase, all five filters observe the system at the same time. This
            means differences between the bands can be interpreted as wavelength-dependent
            behaviour, rather than changes in the system that occurred between separate
            observations.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            Measurements from multiple nights are then combined and phase-folded over the known
            9.17-hour orbital period, with the aim of recovering the same physical orbital
            modulation across wavelength.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Recovering a Faint Companion</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            The optical companion is faint and lies in a field containing neighbouring stellar
            sources. The aim is not simply to measure all of the light inside an aperture. The aim
            is to isolate the small amount of flux that changes with orbital phase.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            Conventional aperture photometry becomes difficult once the target is faint,
            neighbouring point spread functions overlap, and the seeing changes between
            observations. This motivates the same empirical PSF modelling and difference imaging
            approach used for GX 339−4.
          </p>
          <ScientificFigure
            label="Wavelength-dependent orbital modulation model"
            video="/media/psrb1957-model.mp4"
            caption="Model animation: the companion's irradiated day side rotating into view across orbital phase, and the resulting flux traced in three simulated bands."
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Isolating the Variable Flux</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            The PSR B1957+20 reduction uses the same broad difference-imaging philosophy developed
            for the{" "}
            <Link href="/research/compact-binaries" className="text-halpha hover:text-paper transition-colors">
              GX 339−4 analysis
            </Link>
            . For each wavelength band, a reference image is compared with each individual
            observation after accounting for their differing point spread functions. Constant flux
            is largely removed by the subtraction, leaving changes in brightness at the position of
            the companion.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            Rather than measuring the total light from every object blended around the target, the
            analysis asks how much the flux at the companion&rsquo;s position changed relative to
            the reference image.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            The pipeline includes empirical PSF modelling, image subtraction and differential
            photometry, applied independently in each of the five HiPERCAM bands. See{" "}
            <Link href="/research/compact-binaries" className="text-halpha hover:text-paper transition-colors">
              Difference Imaging on the GX 339−4 page
            </Link>{" "}
            for the underlying ZOGY methodology.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">From Individual Images to Orbital Phase</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            The measurements are obtained over several nights rather than one continuous orbit.
            Each observation is assigned an orbital phase using the known orbital period, so
            measurements taken on different nights but at similar orbital phases can be compared
            once the data are phase-folded.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            Because HiPERCAM records the bands simultaneously, the same orbital phase is sampled
            at the same time in each wavelength band, which allows the morphology of the orbital
            modulation to be compared directly across wavelength.
          </p>
          <Flow
            steps={[
              "Individual observations",
              "Difference flux",
              "Orbital phase",
              "Phase-folded light curve",
              "Multi-band physical modelling",
            ]}
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Orbital Variability Recovered</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            Across the available observations, the companion shows a strong, phase-dependent
            change in brightness. The data broadly trace the expected heating-driven morphology:
            the companion brightens as more of the irradiated hemisphere rotates into view,
            reaches a maximum, and then becomes fainter as the cooler hemisphere becomes more
            visible.
          </p>
          <Highlight>The pipeline has recovered orbital structure at the position of the companion.</Highlight>
          <ScientificFigure
            label="r_s-band phase-folded light curve"
            src="/figures/psrb1957-rsband-lightcurve.png"
            caption="Four nights (2018-05-20, 2018-05-21, 2018-06-08, 2018-06-09), reference-anchored flux in the r_s band."
          />
          <ScientificFigure
            label="z_s-band phase-folded light curve"
            src="/figures/psrb1957-zsband-lightcurve.png"
            caption="The same four nights in z_s, showing a consistent rise-and-fall morphology to r_s."
          />
          <p className="text-base leading-relaxed text-paper-dim">
            These are not yet final physical light curves. The current measurements are
            reference-anchored differential flux in ADU, not calibrated total flux. Each night was
            differenced against its own reference image, so different nights can have different
            effective zero points.
          </p>
          <Highlight>
            Apparent offsets between nights are expected at this stage and should not be
            interpreted as physical differences in brightness.
          </Highlight>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Current Constraints</h2>
        <div className="mt-4 space-y-6">
          <div>
            <h3 className="font-display text-lg text-paper">Currently supported</h3>
            <div className="mt-3">
              <Bullets
                items={[
                  "Coherent orbital variability has been recovered in the u_s and r_s bands.",
                  "The modulation is broadly consistent with the expected irradiation-driven behaviour of the companion.",
                  "There is encouraging consistency between observations obtained on different nights.",
                  "Statistical testing has been used to assess whether the variability is genuinely associated with orbital phase.",
                ]}
              />
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg text-paper">Still in progress</h3>
            <div className="mt-3">
              <Bullets
                items={[
                  "Recovering the contribution from the reference images.",
                  "Converting differential flux into a total flux light curve.",
                  "Photometric calibration.",
                  "Establishing the wavelength dependence consistently across all five bands.",
                  "Final consistency and validation checks.",
                ]}
              />
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg text-paper">Physical parameters to be constrained</h3>
            <div className="mt-3">
              <Bullets
                items={[
                  "Day-side temperature.",
                  "Night-side temperature.",
                  "Heating distribution.",
                  "Companion geometry.",
                  "Orbital inclination.",
                  "Neutron star mass.",
                ]}
              />
            </div>
          </div>
          <Highlight>
            The variable orbital light curve has been recovered, but the reduction required for
            physical modelling is still ongoing.
          </Highlight>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Is the Orbital Signal Real?</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            Recovering a visually plausible light curve is not enough on its own. The analysis
            also tests whether the apparent orbital structure is stronger than would be expected
            from random or systematic variability, using:
          </p>
          <Bullets
            items={[
              "permutation-based tests",
              "night-to-night consistency checks",
              "injection and recovery experiments",
              "negative controls",
              "tests for instrumental or PSF-related systematics",
            ]}
          />
          <p className="text-base leading-relaxed text-paper-dim">
            The current permutation test, run against the null hypothesis of no orbital
            variability, gives p ≈ 0.007 in the r_s band, with consistent behaviour from night to
            night. The aim of this validation is to separate genuine orbital variability from
            patterns that could arise from the reduction process or from individual observing
            nights.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Recovering the Physical Light Curve</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            Difference imaging measures the change in flux relative to a reference image. To
            obtain the full physical light curve, the reference contribution has to be added back
            to the differential measurements.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            The resulting total flux then needs to be photometrically calibrated, so that the
            observations are expressed in physical or standard photometric units rather than raw
            detector counts. This step is required before the multi-band curves can be
            meaningfully compared with physical binary models.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">From Light Curve to Neutron Star</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            Once calibrated multi-band light curves have been recovered, computational binary
            models can be compared with the observations. The light curve morphology and its
            dependence on wavelength contain information about how hot the irradiated hemisphere
            becomes, how cool the opposite side remains, how heating is distributed across the
            surface, the shape and geometry of the companion, and the inclination of the binary.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            Inclination is particularly important, because it directly affects the dynamical mass
            inferred for the neutron star.
          </p>
          <Flow
            steps={[
              "Pulsar irradiation",
              "Temperature pattern",
              "Orbital light curve",
              "Multi-band modelling",
              "Binary geometry",
              "Inclination",
              "Neutron star mass",
            ]}
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">What Comes Next</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">Future work on this pipeline includes:</p>
          <Bullets
            items={[
              "total flux recovery",
              "photometric calibration",
              "completion of the remaining wavelength bands",
              "continued investigation of night-specific and PSF-related systematics",
              "final multi-band consistency checks",
              "physical light curve modelling, once the reduction is sufficiently robust",
            ]}
          />
          <p className="text-base leading-relaxed text-paper-dim">
            A reliable, calibrated multi-band orbital light curve would allow the temperature
            structure and geometry of the companion to be modelled, providing an improved route
            toward constraining the inclination and neutron star mass of PSR B1957+20.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Tools &amp; technologies</h2>
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
        {!project.githubHref.startsWith("[") ? (
          <a
            href={project.githubHref}
            className="mt-5 inline-block text-sm text-halpha hover:text-paper transition-colors"
          >
            View code on GitHub
          </a>
        ) : null}
      </section>
    </div>
  );
}
