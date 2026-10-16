import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument, type LegalSection } from "@/components/LegalDocument";
import { mailto, OPERATOR } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Cookie Policy · TinyTutor",
  description: "The TinyTutor website sets no cookies and uses no analytics or trackers. What your browser may cache, and how to clear it.",
  alternates: { canonical: "/legal/cookies" },
};

const sections: LegalSection[] = [
  {
    id: "summary",
    title: "Summary",
    body: (
      <p>
        <strong>TinyTutor sets no cookies</strong> and uses no analytics, advertising or tracking technologies. That is why you are not asked to
        accept or reject cookies.
      </p>
    ),
  },
  {
    id: "cookies",
    title: "Cookies",
    body: (
      <>
        <p>
          Cookies are small files a website asks your browser to store. TinyTutor&rsquo;s pages do not set any: no essential, preference, analytics or
          advertising cookies, and no third-party cookies.
        </p>
        <p>We checked this by inspecting every page&rsquo;s server responses and the site&rsquo;s code.</p>
      </>
    ),
  },
  {
    id: "browser-storage",
    title: "What your browser keeps",
    body: (
      <p>
        As with any website, your browser may keep copies of the website&rsquo;s files (code, fonts and images) in its ordinary cache so pages
        load faster next time. These are the same files for everyone and contain no information about you. The website writes nothing to your
        browser&rsquo;s storage.
      </p>
    ),
  },
  {
    id: "third-parties",
    title: "Third parties",
    body: (
      <p>
        The website loads nothing from other companies&rsquo; servers: its fonts, images and code are all served from the website itself, so no
        third party can set cookies through it. Links to other websites, such as turins.in, take you to sites with their own cookie practices.
      </p>
    ),
  },
  {
    id: "your-controls",
    title: "Your controls",
    body: (
      <>
        <p>To remove the cached files, clear the site data for this website in your browser:</p>
        <ul>
          <li>
            <strong>Chrome or Edge</strong>: Settings → Privacy → Site settings → View permissions and data stored across sites → find this site →
            Delete.
          </li>
          <li>
            <strong>Firefox</strong>: Settings → Privacy &amp; Security → Cookies and Site Data → Manage Data → find this site → Remove.
          </li>
          <li>
            <strong>Safari</strong>: Settings → Privacy → Manage Website Data → find this site → Remove.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "changes",
    title: "If this changes",
    body: (
      <p>
        If TinyTutor ever needs cookies for something other than delivering the service, such as analytics, we will ask for your consent first,
        before setting them, and update this page and our <Link href="/legal/privacy-policy">Privacy Policy</Link>.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about cookies or storage: <a href={mailto("Cookie question")}>{OPERATOR.email}</a>.
      </p>
    ),
  },
];

export default function Cookies() {
  return (
    <LegalDocument
      current="/legal/cookies"
      title="Cookie Policy"
      intro="A short one, because the TinyTutor website sets no cookies and uses no trackers. Here is what your browser may still keep."
      sections={sections}
    />
  );
}
