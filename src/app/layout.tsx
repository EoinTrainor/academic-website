import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Self-hosted so the site has no runtime dependency on Google Fonts.
// STIX Two Text: an academic-journal serif, used for display headings.
const stix = localFont({
  variable: "--font-stix",
  src: [
    { path: "../fonts/StixTwoText.ttf", weight: "400 700", style: "normal" },
    { path: "../fonts/StixTwoText-Italic.ttf", weight: "400 700", style: "italic" },
  ],
  display: "swap",
});

// IBM Plex Sans: body text.
const plexSans = localFont({
  variable: "--font-plex-sans",
  src: [
    { path: "../fonts/IBMPlexSans.ttf", weight: "100 700", style: "normal" },
    { path: "../fonts/IBMPlexSans-Italic.ttf", weight: "100 700", style: "italic" },
  ],
  display: "swap",
});

// IBM Plex Mono: used sparingly for instrument-style metadata labels.
const plexMono = localFont({
  variable: "--font-plex-mono",
  src: [
    { path: "../fonts/IBMPlexMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/IBMPlexMono-Medium.ttf", weight: "500", style: "normal" },
  ],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Astrophysics · Computational Physics`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: `${SITE.name} — Astrophysics · Computational Physics`,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Astrophysics · Computational Physics`,
    description: SITE.description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${stix.variable} ${plexSans.variable} ${plexMono.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
