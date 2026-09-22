import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getResearchBySlug } from "@/data/research";
import ScientificFigure from "@/components/ScientificFigure";
import MassFunctionEquation from "@/components/MassFunctionEquation";

const SLUG = "compact-binaries";

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
          GX 339−4 is one of the most extensively studied recurrent Galactic black-hole X-ray
          binaries, yet the mass of its black hole remains poorly constrained. Previous work has
          placed the mass over a broad range, approximately 2.3 to 9.5 solar masses. A tighter
          dynamical measurement would help place GX 339−4 more securely within the Galactic
          stellar-mass black-hole population, and test whether it may lie close to the proposed
          neutron star-black hole mass gap.
        </p>
        <p className="text-base leading-relaxed text-paper-dim">
          The aim of this project was to recover the orbital modulation of the donor star and use
          it to improve constraints on the system inclination and, ultimately, the black hole
          mass.
        </p>
        <div className="max-w-md">
          <ScientificFigure
            label="NS-BH mass gap"
            src="/figures/gx339-mass-gap.png"
            caption="The neutron star-black hole mass gap (roughly 2-5 M☉) overlaps the Heida et al. (2017) mass estimate for GX 339−4 (2.3-9.5 M☉), so the black hole's true mass could fall within this poorly constrained range."
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">The Physics</h2>

        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            GX 339−4 is a low-mass X-ray binary containing a black hole and a lower-mass donor
            star. The donor fills, or nearly fills, its Roche lobe, the region around it within
            which gas remains gravitationally bound to the star rather than pulled toward the
            black hole. Because a Roche-lobe-filling star cannot stay spherical, tidal forces
            stretch it into an elongated, teardrop-like shape along the line joining the two
            stars, and material near the inner Lagrange point, L1, can be transferred toward the
            black hole and its accretion disc.
          </p>

          <p className="text-base leading-relaxed text-paper-dim">
            The star itself does not need to vary intrinsically in brightness for this to produce
            a light curve. As the binary orbits, we see different projected areas of the distorted
            donor. When its elongated side is presented more side on to us, the projected area is
            larger and the observed flux rises. When we see more nearly along the elongated axis,
            the projected area is smaller and the flux falls. Because this geometry occurs twice
            during each full orbit, the resulting light curve shows two maxima and two minima per
            cycle, the characteristic double-humped shape of ellipsoidal modulation.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <ScientificFigure
              label="Binary geometry: Roche-lobe donor, black hole and centre of mass"
              src="/figures/gx339-binary-geometry.png"
              caption="System geometry adopted from Heida et al. (2017), a = 11.73 R☉. The donor's teardrop shape is set by its Roche lobe."
            />
            <ScientificFigure
              label="Theoretical ellipsoidal modulation curves"
              src="/figures/gx339-modulation-curves.png"
              caption="Predicted donor-star modulation for inclinations i = 30°, 50°, 70°. Higher inclination gives larger amplitude, but the double-peaked shape is set by the geometry alone."
            />
          </div>

          <p className="text-base leading-relaxed text-paper-dim">
            The amplitude of this modulation depends strongly on orbital inclination. A system
            viewed at high inclination shows a much larger change in projected area than the same
            system viewed closer to face on, so recovering and modelling the donor star light
            curve allows the inclination to be constrained directly. Inclination then enters the
            binary mass function below, and is the missing quantity needed to turn it into a
            dynamical estimate of the black hole mass.
          </p>

          <MassFunctionEquation description="f(M) is the spectroscopic mass function, in solar masses, and is measurable directly from the orbital light curve without prior knowledge of the system's inclination. M_BH is the mass of the black hole, M_2 is the mass of the donor star, and i is the orbital inclination angle. Since sin³i ≤ 1, f(M) alone sets a strict lower limit on M_BH; combining it with an independent constraint on i from the light-curve shape allows the black hole's mass to be solved for directly." />

          <p className="mt-8 text-center font-display text-xl text-paper">
            Observed flux ≈ donor star + accretion disc + jet
          </p>

          <p className="text-base leading-relaxed text-paper-dim">
            This is one of the central physical complications of GX 339−4. Even when the system
            appears quiescent, the accretion flow and jet can still contribute to the measured
            infrared flux. Heida et al. (2017) found that even in quiescence, the donor
            contributes only around 45 to 50 per cent of the J and H band light. Detecting
            variability at the position of GX 339−4 is therefore not automatically equivalent to
            detecting ellipsoidal modulation from the donor, and separating the two is the
            central challenge this project is built around.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Observations &amp; Data</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            GX 339−4 has an orbital period of approximately 1.76 days, too long to cover in a
            single ground-based observing block. The observing strategy, a distributed
            random-phase sampling approach proposed by Dr Mark Kennedy, requested around 20 hours
            of HAWK-I time spread across the 2025 spring/summer season, on the logic that
            observing blocks landing at different, effectively random orbital phases could be
            phase-folded into a single light curve without needing to cover an orbit continuously.
            Swift/BAT hard X-ray monitoring (15-50 keV) ran in parallel to flag windows of X-ray
            quiescence, when contamination from the accretion flow should be minimal. ESO
            ultimately delivered around 12 hours, realised as twelve observing blocks, in a
            near-infrared field roughly 3,400 sources deep, 4° below the Galactic plane.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            This observing strategy trades continuous coverage for repeated sampling at different
            orbital phases. Measurements obtained days or even months apart can be combined once
            they are phase-folded onto the 1.76 day orbital period. The reduction from 20 to 12
            hours mattered: it meant fewer usable phase bins than originally planned, and became
            one of the main limitations of the project.
          </p>
          <ScientificFigure
            label="Orbital phase coverage"
            src="/figures/gx339-phase-coverage.png"
            caption="Phase-bin coverage across the P = 1.7587 d orbit (Heida et al. 2017). Even with twelve observing blocks, large stretches of the orbit remain unsampled."
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">A Difficult Field</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            GX 339−4 also lies in an extremely crowded near-infrared field, close to the Galactic
            plane. The wings of neighbouring stellar point spread functions overlap the target
            position, so simple aperture photometry is not viable: the measured aperture would
            contain flux from several nearby sources as well as from GX 339−4 itself.
          </p>
          <ScientificFigure
            label="Reference, science and difference images around GX 339−4"
            src="/figures/gx339-diffimaging-panels.png"
            caption="Reference and science frames around GX 339−4, in a field roughly 3,400 sources deep, with the resulting difference image and the empirical PSFs used for each frame."
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Difference Imaging</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            The solution was to model the point spread function empirically and use difference
            imaging, following the method of Zackay, Ofek and Gal-Yam (2016). A reference image
            and a science image are compared after accounting for their different point spread
            functions. Constant sources are suppressed by the subtraction, while changes in flux
            remain in the difference image.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            This changes the photometric question from &ldquo;how much total light is inside this
            aperture?&rdquo; to &ldquo;how much has the flux at the position of GX 339−4 changed
            relative to the reference image?&rdquo; That reframing is particularly powerful in a
            crowded field, because the static contribution of neighbouring sources largely
            cancels in the subtraction.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            The pipeline itself, empirical PSF construction, PSF matching, image subtraction and
            extraction of differential flux, was developed specifically for this project and
            represents around six months of work.
          </p>
          <Highlight>
            The pipeline successfully recovered variable near-infrared flux from GX 339−4. That
            does not yet mean the donor star was isolated.
          </Highlight>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Was the System Really Quiescent?</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            Ellipsoidal modelling works best when GX 339−4 is genuinely quiescent, since we want
            the donor star to provide as large and stable a fraction of the near-infrared light
            as possible. Swift/BAT monitored the source in hard X-rays, between 15 and 50 keV,
            throughout the campaign.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            The later HAWK-I observations showed substantially elevated near-infrared flux,
            particularly in the final three observing blocks. This was not accompanied by an
            equally obvious rise in the Swift/BAT measurements, which created an important
            ambiguity: difference imaging showed that the source had changed, but it could not
            tell us why.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">The excess flux could arise from:</p>
          <ul className="space-y-2">
            {[
              "donor star orbital modulation",
              "changes in the accretion flow",
              "jet emission",
              "or a combination of these components",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-paper-dim">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-halpha" />
                {item}
              </li>
            ))}
          </ul>
          <ScientificFigure
            label="Swift/BAT observing campaign"
            src="/figures/gx339-swiftbat-campaign.png"
            caption="Hard X-ray (15-50 keV) monitoring used to schedule HAWK-I observing blocks around quiescent windows. The final three blocks (elevated NIR) show no correspondingly clear rise here."
          />
          <ScientificFigure
            label="Quiescent versus elevated epoch"
            src="/figures/gx339-quiescent-vs-elevated.png"
            caption="A quiescent-like observing block against one of the elevated near-infrared blocks, among the epochs excluded as possibly accretion-contaminated."
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">What Did We Recover?</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            Difference imaging successfully recovered variable near-infrared flux from GX 339−4
            in an extremely crowded field. However, the observations did not recover a
            convincing, repeatable double-humped ellipsoidal modulation that could safely be
            attributed to the donor star.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">The main reasons were:</p>
          <ul className="space-y-2">
            {[
              "incomplete usable orbital phase coverage",
              "uncertainty over whether every epoch represented the same quiescent physical state",
              "contamination from accretion-related and potentially jet-related variability",
              "the difficulty of constructing high-quality empirical PSFs in such a crowded field",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-paper-dim">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-halpha" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-base leading-relaxed text-paper-dim">
            Therefore it would not be physically justified to fit an ellipsoidal model and report
            a new inclination or black hole mass from this campaign.
          </p>
          <ScientificFigure
            label="Aperture flux difference vs. orbital phase"
            src="/figures/gx339-lightcurve-result.png"
            caption="Recovered flux differences across the nine retained observing blocks against the predicted ellipsoidal minima and maxima. No coherent modulation is recovered."
          />
          <Highlight>
            Variable flux was detected, but the donor star&rsquo;s ellipsoidal modulation was not
            isolated.
          </Highlight>
          <p className="text-base leading-relaxed text-paper-dim">
            As a result, this campaign does not provide a robust new constraint on the inclination
            or black hole mass of GX 339−4.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            This should not be read as a failed project. The methodological result is still
            important: the difference-imaging pipeline demonstrated that faint variability can be
            recovered at the target position despite the extreme crowding of the field.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">What Comes Next</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">Future observations would benefit from:</p>
          <ul className="space-y-2">
            {[
              "broader and more uniform orbital phase coverage",
              "stronger confirmation that the system remains in the same quiescent physical state throughout the campaign",
              "more sensitive, contemporaneous monitoring of accretion activity",
              "improved separation of donor, accretion-disc and jet contributions",
              "potentially additional wavelength coverage, to help distinguish these components",
            ].map((item) => (
              <li key={item} className="flex gap-3 text-base leading-relaxed text-paper-dim">
                <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-halpha" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-base leading-relaxed text-paper-dim">
            A clean recovery of the donor star&rsquo;s ellipsoidal modulation would allow the
            system inclination to be modelled, providing a route toward a tighter dynamical
            measurement of the black hole mass.
          </p>
        </div>
      </section>

      {!project.githubHref.startsWith("[") ? (
        <a
          href={project.githubHref}
          className="mt-16 inline-block text-sm text-halpha hover:text-paper transition-colors"
        >
          View code on GitHub
        </a>
      ) : null}
    </div>
  );
}
