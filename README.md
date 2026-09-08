# Eoin Trainor — Academic Website

A personal academic website built with Next.js (App Router), TypeScript and Tailwind CSS v4.
Statically exported and pre-configured to deploy to GitHub Pages via GitHub Actions.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build the static export locally:

```bash
npm run build
npx serve out
```

(Opening `out/index.html` directly via `file://` won't work — the browser needs a real
server for the root-relative asset paths. `npx serve out` or `python3 -m http.server`
from inside `out/` both work fine.)

## Deployment (GitHub Pages)

This repo is pre-configured for GitHub Pages via GitHub Actions
(`.github/workflows/deploy.yml`). It builds the site as a static export
(`next.config.ts` sets `output: "export"`) and deploys automatically on every
push to `main`.

To go live:

1. Create a new (empty) repository on GitHub.
2. From this project folder:
   ```bash
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git branch -M main
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
4. Push (or re-run the workflow from the Actions tab) — the site builds and deploys
   automatically. The URL appears in the workflow run summary and under
   Settings → Pages, typically `https://<your-username>.github.io/<repo-name>/`.

The workflow auto-detects the right base path: if your repo is named
`<your-username>.github.io` (a user/organization site) it deploys at the root; for any
other repo name it sets `NEXT_PUBLIC_BASE_PATH=/<repo-name>` so all internal links and
assets resolve correctly under the project subpath. Nothing to configure by hand.

To deploy elsewhere instead (Vercel, Netlify, any Node host), this is also a completely
standard Next.js app — remove `output: "export"` from `next.config.ts` if you want full
server-side rendering rather than a static export.

## Content

All editable content lives in `src/data/`:

- `site.ts` — name, tagline, contact links (email, GitHub, LinkedIn, ORCID), CV link
- `research.ts` — the four research projects (PSR B1957+20 / difference imaging, GX 339−4 /
  compact binaries, solar H-alpha, ECG machine learning) and their full project-page content
- `timeline.ts` — the homepage "Research Journey" timeline and the About page academic timeline
- `repos.ts` — the GitHub repository cards on the homepage and Projects page
- `outputs.ts` — the Research Outputs & Recognition section (conference talks, awards)

Anything wrapped in `[Square Brackets]` is a placeholder for information that wasn't supplied —
search the `src/data/` files for `[` to find every one. Replace these with real details
(GitHub URL, email, CV PDF, award titles, exact dates, real figures) before publishing.

## Design system

Defined in `src/app/globals.css` (`@theme` block):

- Background: `--color-ink` (soft cream, #f6f1e6), raised panels `--color-ink-raised`
- Text: `--color-paper` (dark academic ink), secondary `--color-paper-dim`
- Accent: `--color-halpha` (H-alpha red, tuned for AA contrast on the cream background),
  `--color-halpha-dim` (deeper red, decorative use only)
- Secondary accent: `--color-steel` (deep slate blue, used for subtitles)
- Typography: STIX Two Text (serif, headings) / IBM Plex Sans (body) / IBM Plex Mono
  (metadata labels only — tags, wavelengths, status). All three are self-hosted as local
  font files in `src/fonts/` (OFL-licensed, see the accompanying `OFL-*.txt` files) so the
  site has no runtime dependency on Google Fonts.

The recurring H-alpha spectral-line motif (656.28 nm) appears as a thin red tick in the
`SpectralRule` component, used sparingly between sections.

## Adding a figure or image

Replace the placeholder panels rendered by `ScientificFigure` with real images once you
have final figures — the component currently takes a `label`/`caption`/`meta` as a
stand-in.

## Adding a fifth research project

Add an entry to `CURRENT_RESEARCH` or `OTHER_RESEARCH` in `src/data/research.ts`, then add
a matching folder under `src/app/research/<slug>/page.tsx` (copy an existing one — each is
a five-line wrapper around `ProjectLayout`).
