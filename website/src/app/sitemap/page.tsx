import type { Metadata } from "next";
import Link from "next/link";

import { InfoPage, InfoSection } from "@/components/InfoPage";
import { NAV_LINKS, PAGES } from "@/lib/links";

export const metadata: Metadata = {
  title: "Sitemap · TinyTutor",
  description: "Every page and section of the TinyTutor website in one place.",
  alternates: { canonical: "/sitemap" },
};

/** A human-readable map of the site. The machine-readable one is /sitemap.xml. */
export default function Sitemap() {
  return (
    <InfoPage eyebrow="Sitemap" title="Everything, in one place." intro="Every page and section of TinyTutor, so you can jump straight to what you need.">
      <InfoSection title="Home page">
        <ul>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
          <li>
            <Link href="/#about">Why TinyTutor</Link>
          </li>
          <li>
            <Link href="/#principles">Principles</Link>
          </li>
          <li>
            <Link href="/#who-its-for">Who It&rsquo;s For</Link>
          </li>
        </ul>
      </InfoSection>

      <InfoSection title="Pages">
        <ul>
          {PAGES.map((page) => (
            <li key={page.href}>
              <a href={page.href}>{page.label}</a>
            </li>
          ))}
        </ul>
      </InfoSection>
    </InfoPage>
  );
}
