import type { Metadata } from "next";
import SectionHeader from "@/components/SectionHeader";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Seeking PhD opportunities and open to research collaboration. Get in touch.",
};

const CHANNELS = [
  { label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { label: "GitHub", value: SITE.github, href: SITE.github },
  { label: "LinkedIn", value: SITE.linkedin, href: SITE.linkedin },
  { label: "ORCID", value: SITE.orcid, href: SITE.orcid },
].filter((channel) => !channel.value.startsWith("["));

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 pb-24 pt-14 md:px-10">
      <SectionHeader
        heading="Seeking PhD opportunities and open to research collaboration"
        intro="I'm happy to hear from prospective supervisors, collaborators or anyone interested in this work."
      />

      <dl className="mt-14 divide-y divide-ink-line border-t border-ink-line">
        {CHANNELS.map((channel) => (
          <div key={channel.label} className="flex items-center justify-between py-4">
            <dt className="font-mono-label text-xs text-paper-dim/70">{channel.label}</dt>
            <dd>
              <a href={channel.href} className="text-base text-paper hover:text-halpha transition-colors">
                {channel.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>

      <p className="mt-12 text-sm text-paper-dim">{SITE.affiliation}</p>
    </div>
  );
}
