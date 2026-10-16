import type { Metadata } from "next";

import { InfoPage, InfoSection } from "@/components/InfoPage";
import { mailto, OPERATOR, telHref } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Accessibility · TinyTutor",
  description: "How the TinyTutor website supports keyboard, screen reader and reduced-motion use, and where it still falls short.",
  alternates: { canonical: "/accessibility" },
};

export default function Accessibility() {
  return (
    <InfoPage
      eyebrow="Accessibility"
      title="Learning should work for everyone."
      intro="We want every learner to be able to use TinyTutor. This page explains what the site supports today and where it still falls short."
      updated="15 October 2026"
    >
      <InfoSection title="What this website supports">
        <ul>
          <li>Full keyboard navigation, with a visible focus outline and a “Skip to content” link.</li>
          <li>Semantic headings, landmarks and labelled controls for screen readers.</li>
          <li>Decorative images are hidden from screen readers; meaningful ones are described.</li>
          <li>Animations and smooth scrolling switch off when your device asks for reduced motion.</li>
          <li>Text and controls are designed for strong contrast against their backgrounds.</li>
          <li>Layouts adapt from phones to large screens without sideways scrolling, and tap targets are generously sized.</li>
        </ul>
      </InfoSection>

      <InfoSection title="Known limitations">
        <p>
          This statement covers the website only. Accessibility of the TinyTutor app, which is in development, will be described before it is
          released. If you find a barrier on the website, please tell us.
        </p>
      </InfoSection>

      <InfoSection title="Tell us about a problem">
        <p>
          If anything on TinyTutor gets in your way, email <a href={mailto("Accessibility problem")}>{OPERATOR.email}</a> or call{" "}
          <a href={telHref}>{OPERATOR.phone}</a>. Tell us the page, what you were trying to do, and the device or assistive technology you use.
        </p>
      </InfoSection>
    </InfoPage>
  );
}
