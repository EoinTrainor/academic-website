import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getResearchBySlug } from "@/data/research";
import FallbackFigure from "@/components/FallbackFigure";

const SLUG = "ecg-machine-learning";
const IMG = "/assets/images/research/ecg/";

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

function Numbered({ items }: { items: string[] }) {
  return (
    <ol className="space-y-3">
      {items.map((item, i) => (
        <li key={item} className="flex gap-4 text-base leading-relaxed text-paper-dim">
          <span className="mt-1 font-mono-label text-xs text-halpha">{i + 1}</span>
          {item}
        </li>
      ))}
    </ol>
  );
}

function EquationList({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="divide-y divide-ink-line border-y border-ink-line">
      {rows.map(([label, expression]) => (
        <div key={label} className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-3">
          <dt className="font-mono-label text-[11px] text-paper-dim/70">{label}</dt>
          <dd className="font-display text-xl italic text-paper">{expression}</dd>
        </div>
      ))}
    </dl>
  );
}

const PIPELINE: [string, string][] = [
  [
    "Data preparation",
    "PhysioNet ECG recordings were loaded, standardised and organised into classification groups.",
  ],
  [
    "Denoising",
    "Several approaches were investigated, including frequency-domain cut-offs (with high-pass Butterworth filtering for low-frequency baseline noise), median filtering for transient spikes, and Db4 discrete wavelet denoising.",
  ],
  [
    "Frequency analysis",
    "Fast Fourier Transforms and power spectral density measurements were used to identify dominant frequency components and investigate signal and noise separation. Peaks exceeding a two standard deviation threshold were treated as significant.",
  ],
  [
    "Feature detection",
    "A Python pipeline was developed to identify the P, Q, R, S and T components of each beat and derive quantities including R-R, P-R and Q-T intervals, heart rate and heart-rate variability.",
  ],
  [
    "Statistical feature analysis",
    "The distributions of extracted ECG properties were compared, including the use of Gaussian and Gaussian mixture descriptions to examine variation between recordings.",
  ],
  [
    "Machine learning",
    "A Random Forest classifier was initially trained on broad normal and abnormal categories, using a standard 80/20 training and test split.",
  ],
  [
    "Combined classification",
    "The machine-learning and explicit feature-analysis approaches were then brought together, so that classification could use more physically meaningful information extracted from the ECG.",
  ],
];

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
        <p className="mt-6 max-w-2xl border-l border-ink-line pl-4 text-base leading-relaxed text-paper-dim italic">
          An undergraduate physics research project at Queen&rsquo;s University Belfast, completed
          as part of a team and titled &ldquo;ECG Classification Methods: Explorative Denoising
          and Feature Detection Strategies Enhanced by Machine Learning&rdquo;. It treats the
          electrocardiogram as a noisy physical signal, and follows how better signal processing
          changed what a machine-learning classifier could achieve.
        </p>
      </header>

      <div className="mt-10">
        <FallbackFigure
          label="Overview of the ECG signal-processing and classification pipeline"
          src={`${IMG}ecg-project-overview.png`}
          aspect="wide"
        />
      </div>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Scientific motivation</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            An electrocardiogram records the electrical activity of the heart as a time-dependent
            signal. The characteristic P wave, QRS complex and T wave contain information about the
            electrical behaviour of different parts of the cardiac cycle, but real ECG data also
            contain baseline drift, high-frequency noise, power-line interference and
            patient-to-patient variation.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            This made the problem an interesting application of the quantitative methods I was
            learning in physics. Rather than treating the ECG simply as a medical trace, we
            approached it as a noisy time series: asking what information could be isolated in
            frequency space, which structures needed to remain localised in time, and how those
            measurements could be converted into useful features for machine learning.
          </p>
          <div className="max-w-lg">
            <FallbackFigure
              label="Annotated ECG waveform showing the P wave, QRS complex and T wave"
              src={`${IMG}ecg-pqrst-diagram.png`}
              caption="The morphology and timing of the PQRST complex provide measurable features of cardiac electrical activity."
            />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Research question</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper">
            Can signal-processing techniques be used to suppress noise while preserving
            diagnostically relevant ECG structure, and can those extracted features improve
            machine-learning classification of normal and abnormal cardiac activity?
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            The project began by testing how far frequency-domain information alone could separate
            normal from abnormal recordings. It evolved toward a combined approach, using both
            signal processing and explicit time-domain feature extraction.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Data &amp; observations</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            The ECG recordings were taken from publicly available PhysioNet datasets and processed
            using Python. As with an astronomical time series, they were treated as measurements
            with their own noise and systematics rather than as clean signals. The work progressed
            in three stages:
          </p>
          <Numbered
            items={[
              "ECGs were initially grouped into broad normal and abnormal superclasses for binary classification.",
              "Signals were standardised and processed so that frequency-domain and time-domain properties could be compared.",
              "A later extension investigated more specific diagnostic classes: normal sinus rhythm, myocardial infarction, bundle branch block and atrial fibrillation.",
            ]}
          />
          <dl className="grid gap-4 border-y border-ink-line py-4 sm:grid-cols-3">
            {[
              ["Data source", "PhysioNet ECG databases"],
              ["Analysis", "Python"],
              ["Primary data type", "Time-series electrical signals"],
            ].map(([label, value]) => (
              <div key={label}>
                <dt className="font-mono-label text-[11px] text-paper-dim/70">{label}</dt>
                <dd className="mt-1 text-sm text-paper">{value}</dd>
              </div>
            ))}
          </dl>
          <div className="max-w-lg">
            <FallbackFigure
              label="Example normal sinus rhythm ECG recording used in the binary classifier"
              src={`${IMG}ecg-nsr-raw-example.png`}
              caption="A normal sinus rhythm recording, resampled to a common 360 Hz sampling rate before processing."
            />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Signal processing</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            A time-domain ECG tells us when a feature occurs. A Fourier transform asks a different
            question: which frequencies are present in the signal?
          </p>
          <Flow steps={["x(t)", "FFT", "X(f)"]} />
          <p className="text-base leading-relaxed text-paper-dim">
            This makes periodic structure and some forms of noise easier to isolate. Low-frequency
            baseline variations and high-frequency contamination can occupy different regions of
            frequency space from much of the useful ECG signal.
          </p>
          <FallbackFigure
            label="FFT of the raw ECG compared with the FFT after applying frequency cutoffs"
            src={`${IMG}ecg-fft-cutoff-denoising.png`}
            caption="Frequency-domain denoising by cutoff filtering (0.5-25 Hz): the raw FFT (top) against the filtered result (bottom), suppressing content outside the band of interest."
          />
          <p className="text-base leading-relaxed text-paper-dim">
            However, the analysis ran into a central limitation.
          </p>
          <Highlight>
            A conventional Fourier transform describes which frequencies exist globally, but
            largely discards information about when short-lived structures occur.
          </Highlight>
          <p className="text-base leading-relaxed text-paper-dim">
            This matters for ECGs, because the P wave, QRS complex and T wave are transient
            structures whose relative timings and shapes contain important information. In
            practice, attempts to reconstruct the signal from only its most significant frequency
            peaks over-smoothed it and degraded the waveform (see the explorative PSD sigma-clipping
            technique under Methods below). That limitation motivated the use of wavelet methods and
            explicit time-domain feature detection.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            Wavelets retain both scale, which is related to frequency, and localisation in time.
            The Db4 (Daubechies 4) wavelet was especially useful because its compact, oscillatory
            form is well suited to representing sharp ECG structures such as the QRS complex.
          </p>
          <EquationList
            rows={[
              ["Time domain", "x(t)"],
              ["Fourier domain", "X(f) = FFT[x(t)]"],
              ["Wavelet representation", "W(a, b)"],
            ]}
          />
          <p className="text-base leading-relaxed text-paper-dim">
            Conceptually, W(a, b) measures how strongly the signal resembles a wavelet of scale a
            centred at time b, so it records both which scales are present and when they occur.
          </p>
          <div className="max-w-xs">
            <FallbackFigure
              label="Daubechies 4 wavelet used during ECG signal analysis"
              src={`${IMG}ecg-db4-wavelet.png`}
              caption="The Daubechies 4 (Db4) wavelet, whose compact oscillatory shape suits sharp ECG structures."
              aspect="square"
            />
          </div>
          <FallbackFigure
            label="Wavelet scalogram of the original ECG compared with the denoised ECG"
            src={`${IMG}ecg-wavelet-scalogram.png`}
            caption="Wavelet scalograms of the original (top) and denoised (bottom) ECG, showing how the signal's time-frequency structure changes after denoising."
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Methods</h2>
        <ol className="mt-4 divide-y divide-ink-line border-y border-ink-line">
          {PIPELINE.map(([title, text], i) => (
            <li key={title} className="grid gap-1 py-4 sm:grid-cols-[3rem_1fr] sm:gap-4">
              <span className="font-mono-label text-xs text-halpha sm:pt-1.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-display text-lg text-paper">{title}</h3>
                <p className="mt-1 text-base leading-relaxed text-paper-dim">{text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-8 space-y-6">
          <FallbackFigure
            label="Raw and denoised ECG signals showing preservation of the principal waveform"
            src={`${IMG}ecg-denoising-comparison.png`}
            caption="Raw and denoised ECG signals. Effective denoising suppresses noise while preserving the principal waveform."
          />
          <FallbackFigure
            label="ECG signal with automatically detected P, Q, R, S and T features"
            src={`${IMG}ecg-feature-detection.png`}
            caption="Automatically detected P, Q, R, S and T features, from which intervals and heart rate are derived."
          />
          <p className="text-base leading-relaxed text-paper-dim">
            One explorative technique identified power spectral density peaks exceeding a two
            standard deviation threshold and used only those peaks to reconstruct the signal. This
            sigma-clipping-in-PSD-space approach proved poorly suited to ECGs: it over-smoothed the
            signal and could not reconstruct finer features such as the QRS complex, which is why
            wavelet-based and standard Fourier-cutoff denoising were used instead.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <FallbackFigure
              label="Original ECG signal compared with a reconstruction from only its most significant PSD peaks"
              src={`${IMG}ecg-fft-oversmoothed-reconstruction.png`}
              caption="Reconstructing the signal from only its most significant PSD peaks over-smooths it, losing finer structure such as the QRS complex."
            />
            <FallbackFigure
              label="Power spectral density with peaks exceeding a two standard deviation threshold"
              src={`${IMG}ecg-power-spectral-density.png`}
              caption="The PSD peaks (greater than 2σ) used to drive that reconstruction."
            />
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <FallbackFigure
              label="Distribution of R-peak voltages across eight normal sinus rhythm recordings"
              src={`${IMG}ecg-rpeak-voltage-all.png`}
              caption="R-peak voltage distributions for individual NSR recordings, with Gaussian and Gaussian-mixture fits."
              aspect="square"
            />
            <FallbackFigure
              label="Distribution of R-peak voltages restricted to a male subcategory of recordings"
              src={`${IMG}ecg-rpeak-voltage-male.png`}
              caption="The same analysis restricted to a male subcategory of five recordings: subgroup structure narrows and shifts the pooled distribution."
              aspect="square"
            />
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Results</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            The first machine-learning implementation used a Random Forest classifier to
            distinguish broad normal and abnormal ECG classes. This produced an accuracy of
            approximately 72%.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            That result exposed an important limitation of relying too heavily on global frequency
            information. ECG classification depends not only on which frequencies are present, but
            on transient structures, their amplitudes and their timing relative to one another.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            The project therefore developed a more complete feature-detection pipeline, improved
            the data handling (including resampling and normalisation), and integrated the
            resulting measurements with the machine-learning analysis. The combined normal versus
            abnormal classification reached approximately 91.5% accuracy.
          </p>

          <div className="grid gap-4 border-y border-ink-line py-6 sm:grid-cols-[1fr_auto_1fr] sm:items-center sm:gap-6">
            <div>
              <p className="font-mono-label text-[11px] text-paper-dim/70">Initial classifier</p>
              <p className="mt-1 font-display text-4xl text-paper">72%</p>
              <p className="mt-1 text-xs text-paper-dim/80">Normal versus abnormal</p>
            </div>
            <div className="flex items-center gap-3 sm:max-w-[15rem] sm:flex-col sm:text-center">
              <span className="text-halpha rotate-90 sm:rotate-0">→</span>
              <p className="font-mono-label text-[11px] leading-relaxed text-paper-dim/80">
                Signal processing + feature engineering + machine learning
              </p>
            </div>
            <div className="sm:text-right">
              <p className="font-mono-label text-[11px] text-paper-dim/70">Combined classifier</p>
              <p className="mt-1 font-display text-4xl text-paper">91.5%</p>
              <p className="mt-1 text-xs text-paper-dim/80">Normal versus abnormal</p>
            </div>
          </div>

          <p className="text-base leading-relaxed text-paper-dim">
            This was not simply a matter of choosing a more complicated model. The improvement came
            from handling the data more carefully and from extracting more useful information from
            the physical structure of the ECG signal.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <FallbackFigure
              label="Confusion matrix for the initial 72 percent normal versus abnormal classifier"
              src={`${IMG}ecg-confusion-matrix-initial.png`}
              caption="Initial Random Forest classifier, normal versus abnormal: approximately 72% accuracy."
              aspect="square"
            />
            <FallbackFigure
              label="Confusion matrix for the final combined classifier with approximately 91.5 percent accuracy"
              src={`${IMG}ecg-confusion-matrix-final.png`}
              caption="Combined classifier using engineered ECG features alongside machine learning, normal versus abnormal: approximately 91.5% accuracy."
              aspect="square"
            />
          </div>

          <h3 className="pt-4 font-display text-xl text-paper">Beyond binary classification</h3>
          <p className="text-base leading-relaxed text-paper-dim">
            The later stages of the work also explored moving beyond a binary normal or abnormal
            decision. A multi-class approach used learned feature extraction, in the form of an
            autoencoder, together with a Random Forest classifier to distinguish between normal
            sinus rhythm, myocardial infarction, bundle branch block and atrial fibrillation.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            This remained an exploratory extension of the project, and finalising it was beyond
            the time constraints. It is separate from the normal versus abnormal result quoted
            above.
          </p>
          <FallbackFigure
            label="PQRST feature detection applied to an arrhythmic ECG recording"
            src={`${IMG}ecg-multiclass-classification.png`}
            caption="The same PQRST detection pipeline applied to an arrhythmic recording, the beat-level detail the multi-class extension builds on."
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">My contribution</h2>
        <div className="mt-4 space-y-5">
          <p className="text-base leading-relaxed text-paper-dim">
            This was a collaborative undergraduate research project completed at Queen&rsquo;s
            University Belfast. My work contributed to the computational development of the ECG
            analysis pipeline, applying Python and signal-processing and denoising methods in
            temporal, Fourier and wavelet space, and designing the feature extraction and
            machine-learning techniques used on a real biomedical time-series problem.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            The project was particularly valuable in developing the way I now approach
            quantitative research: understand the signal first, identify where information is
            being lost, and then build the analysis around the underlying structure of the data
            rather than treating the model as a black box.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-2xl text-paper">Current status</h2>
        <div className="mt-4 space-y-3">
          <p className="text-base leading-relaxed text-paper-dim">
            Completed undergraduate research project at Queen&rsquo;s University Belfast.
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            Awarded the Data Intellect: Analytics Physics Prize (2025).
          </p>
          <p className="text-base leading-relaxed text-paper-dim">
            The binary model reached approximately 91.5% accuracy in identifying general
            arrhythmias and normal sinus rhythm. Multi-class diagnostics of conditions such as
            myocardial infarction, bundle branch block and atrial fibrillation were being explored,
            but finalising them was beyond the time constraints of the project.
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
