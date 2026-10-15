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
          <p className="text-xs text-paper-dim/80 leading-relaxed">
            Visual modelled by{" "}
            <a
              href="https://www.ucc.ie/en/astro/compactbinariesandtheneutronstarblackholemassgap/"
              className="text-halpha hover:text-paper transition-colors"
            >
              Dr Mark Kennedy, UCC Astrophysics
            </a>{" "}
            using ICARUS software.
          </p>
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
                  "Coherent orbital variability has been recovered in the g_s, r_s and i_s bands.",
                  "The reference contribution has been added back and the light curves photometrically calibrated to physical flux units (μJy).",
                  "The modulation is consistent with the expected irradiation-driven behaviour of the companion.",
                  "There is encouraging consistency between observations obtained on different nights.",
                  "Statistical testing has been used to assess whether the variability is genuinely associated with orbital phase.",
                  "A fiducial ICARUS Roche-lobe model already reproduces the calibrated light-curve shape reasonably well.",
                ]}
              />
            </div>
          </div>
          <div>
            <h3 className="font-display text-lg text-paper">Still in progress</h3>
            <div className="mt-3">
              <Bullets
                items={[
                  "Extending calibration and modelling to the u_s and z_s bands.",
                  "Joint MCMC sampling over inclination, fillout factor and the day/night temperatures, rather than one-parameter-at-a-time sensitivity checks.",
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
                  "Orbital inclination, with a formal posterior uncertainty.",
                  "Neutron star mass.",
                ]}
              />
            </div>
          </div>
          <Highlight>
            A calibrated, physical light curve has been recovered and a fiducial ICARUS model
            already matches it well. The joint MCMC fit needed to turn that into a formal
            inclination and mass constraint is still running.
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
            obtain the full physical light curve, the reference contribution was added back to
            the differential measurements and the result photometrically calibrated, so the
            observations are expressed in physical flux units (μJy) rather than raw detector
            counts.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            This is the result for the g_s, r_s and i_s bands: a clear, repeatable once-per-orbit
            modulation, consistent night to night, now on a physical flux scale that can be
            compared directly with a binary model.
          </p>
          <ScientificFigure
            label="Phase-folded, flux-calibrated PSR B1957+20 light curves in g_s, r_s and i_s"
            src="/figures/psrb1957-icarus-lightcurves.png"
            caption="Top: calibrated light curves (points, coloured by night) with a fiducial ICARUS model overlaid (black). Bottom: zoomed on the faint minimum, with the previous 95% upper limit shown for comparison — the new pipeline resolves structure well below that limit."
          />
          <Highlight>
            The companion is now detected and resolved in physical flux units well below the
            previous upper limit, across three simultaneous bands.
          </Highlight>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">The ICARUS Binary Model</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            The calibrated light curve is compared against ICARUS, a Roche-lobe binary
            light-curve code that computes the observed flux from a companion star distorted and
            irradiated within its host&rsquo;s gravitational field. The companion is treated as
            filling a fraction f of its Roche lobe, with the pulsar&rsquo;s intense irradiation
            imposing a strong day-night temperature contrast across its surface.
          </p>
          <ScientificFigure
            label="PSR B1957+20 binary geometry: orbital plane, companion cross-section and day/night temperature"
            src="/figures/psrb1957-roche-lobe-geometry.png"
            caption="Left: the orbital plane (mass ratio q = 69.3), showing the companion sitting just inside its Roche lobe (red) relative to the inner Lagrange point L1. Centre: the companion's equatorial cross-section for different fillout factors f. Right: the resulting day-side (irradiated) to night-side temperature contrast across the surface."
          />
          <p className="text-base leading-relaxed text-paper-dim">
            The fiducial model below adopts a fillout factor f = 0.85, a base (night-side)
            temperature of roughly 2,900 K, and an irradiation (day-side) temperature of roughly
            8,000 K, with a mass ratio q = 69.3 and orbital separation a ≈ 2.98 R☉. The ICARUS
            surface already traces the Roche-lobe shape closely at this fillout factor.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <ScientificFigure
              label="ICARUS companion surface fitted to the Roche lobe"
              src="/figures/psrb1957-icarus-roche-fit.png"
              caption="The ICARUS surface (black points) against the Roche lobe (red) at f = 0.85."
              aspect="square"
            />
            <ScientificFigure
              label="Companion surface gravity across the fitted shape"
              src="/figures/psrb1957-companion-surface.png"
              caption="Surface gravity (log g) across the tidally distorted companion, f = 0.85."
              aspect="square"
            />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Exploring the Parameter Space</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            Four parameters shape the predicted light curve: inclination i, fillout factor f, and
            the base and irradiation temperatures. Varying each individually around the fiducial
            model, with the others held fixed, shows how distinct their effects are: inclination
            and irradiation temperature mainly set the amplitude of the modulation, while fillout
            factor and base temperature have a more subtle effect on its shape.
          </p>
          <ScientificFigure
            label="Sensitivity of the predicted light curve to inclination, fillout factor and temperature"
            src="/figures/psrb1957-mcmc-sensitivity.png"
            caption="One parameter varied at a time around the fiducial model (i = 65°, f = 0.85, T_base = 2,900 K, T_irr = 8,000 K), against the calibrated data (grey)."
          />
          <p className="text-base leading-relaxed text-paper-dim">
            Because several parameters affect the light curve simultaneously, constraining them
            individually is not enough — a joint Markov Chain Monte Carlo (MCMC) fit is needed to
            explore how they trade off against one another and to obtain a proper posterior
            uncertainty on the inclination, rather than a single best-guess value. That joint fit
            is currently running.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">From Light Curve to Neutron Star</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            The geometry and temperatures above are fiducial values, fixed to get a reasonable
            match to the data. The step that actually matters for the neutron star is the
            inclination, because it directly sets the dynamical mass inferred from the system
            once the MCMC fit has converged.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            That is the same sensitivity discussed earlier: moving between the van Kerkwijk et
            al. (2011) and Clark et al. (2023) inclinations shifts the inferred pulsar mass by
            more than half a solar mass. A joint, well-constrained inclination from this
            multi-band light curve is a direct route to resolving that tension.
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
          <p className="text-base leading-relaxed text-paper-dim">Future work on this project includes:</p>
          <Bullets
            items={[
              "running the joint MCMC fit over inclination, fillout factor and the day/night temperatures to convergence",
              "extending calibration and modelling to the u_s and z_s bands",
              "deriving a formal posterior uncertainty on the inclination",
              "continued investigation of night-specific and PSF-related systematics",
              "translating the resulting inclination and mass ratio into a dynamical neutron star mass",
            ]}
          />
          <p className="text-base leading-relaxed text-paper-dim">
            A well-constrained inclination from the joint fit would provide an improved dynamical
            mass for PSR B1957+20, and a direct way to test whether it sits closer to the van
            Kerkwijk et al. (2011) or Clark et al. (2023) value.
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
