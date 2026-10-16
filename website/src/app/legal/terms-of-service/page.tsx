import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument, type LegalSection } from "@/components/LegalDocument";
import { mailto, OPERATOR, telHref } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Service · TinyTutor",
  description: "The terms for using the TinyTutor website, for visitors, families, teachers and schools.",
  alternates: { canonical: "/legal/terms-of-service" },
};

const sections: LegalSection[] = [
  {
    id: "agreement",
    title: "About these terms",
    body: (
      <>
        <p>
          These terms apply when you use the TinyTutor website (&ldquo;the website&rdquo;), provided by {OPERATOR.name}. By using the website you
          agree to them. If you do not agree, please do not use it. The TinyTutor app is in development; it will come with its own terms before it is
          released.
        </p>
        <p>
          How we handle information is explained separately in our <Link href="/legal/privacy-policy">Privacy Policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: "who-these-apply-to",
    title: "Who these terms apply to",
    body: (
      <ul>
        <li>
          <strong>Visitors</strong>: anyone browsing the website. Today this is everyone, because the website has no accounts.
        </li>
        <li>
          <strong>Parents and guardians</strong>: you are responsible for deciding whether, and how, a child in your care uses the website.
        </li>
        <li>
          <strong>Teachers and schools</strong>: you may read and share the website under these terms. School accounts and institutional
          agreements are not part of the website; when TinyTutor offers them, a separate school agreement will govern them.
        </li>
      </ul>
    ),
  },
  {
    id: "eligibility",
    title: "Eligibility",
    body: (
      <p>
        The website is free to use and open to everyone. Children should use it with the knowledge of a parent, guardian or teacher. The
        TinyTutor app, when released, may have its own eligibility rules, including parental or school consent.
      </p>
    ),
  },
  {
    id: "permitted-use",
    title: "Permitted use",
    body: (
      <>
        <p>You may read the website, share links to it and show it to others, including in a classroom.</p>
        <p>You agree not to:</p>
        <ul>
          <li>disrupt, overload or attempt to break into the site or the systems behind it;</li>
          <li>copy, resell or republish the website or its content as your own;</li>
          <li>use automated tools to scrape the site in a way that harms its availability;</li>
          <li>use the website to break any law or to harm, harass or mislead anyone, especially children.</li>
        </ul>
      </>
    ),
  },
  {
    id: "accounts",
    title: "Accounts and responsibilities",
    body: (
      <p>
        The website has no accounts, so there are no passwords or profiles to look after. Accounts belong to the TinyTutor app, whose terms will
        set out each user&rsquo;s responsibilities before it is released.
      </p>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <p>
        The website&rsquo;s text, illustrations, design, logo and software belong to {OPERATOR.name} or are used with permission. Using the
        website does not transfer any of these rights to you. You may share links to it freely. The fonts used on the site are open-source
        and remain under their own licences.
      </p>
    ),
  },
  {
    id: "availability",
    title: "Availability and changes",
    body: (
      <p>
        We may change, pause or remove any part of the website at any time, and we do not promise that it will always be available, error-free or
        uninterrupted. Descriptions of TinyTutor on the website show each capability&rsquo;s status; a capability marked in development, designed
        or planned is not available yet and may change.
      </p>
    ),
  },
  {
    id: "third-party-services",
    title: "Third-party services",
    body: (
      <p>
        The website links to other websites, such as turins.in. Their own terms apply there. Links are provided for convenience, and we are not
        responsible for their content.
      </p>
    ),
  },
  {
    id: "learning-content",
    title: "Information on the website, and AI",
    body: (
      <p>
        We work to keep the website accurate, but it describes a product in development and may contain mistakes. The website itself uses no AI.
        TinyTutor&rsquo;s AI learning assistant, in development, is meant to support learners and teachers, never to make a definitive assessment of
        a learner; see our <Link href="/legal/responsible-ai">Responsible AI Policy</Link>.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers and limits of liability",
    body: (
      <>
        <p>
          To the extent the law allows, TinyTutor is provided &ldquo;as is&rdquo;, without promises about its fitness for a particular purpose. To
          the extent the law allows, {OPERATOR.name} is not liable for indirect or consequential loss arising from using TinyTutor.
        </p>
        <p>
          Nothing in these terms limits rights you have under consumer protection or other laws that cannot be limited by agreement. The wording of
          this section will be finalised by legal counsel.
        </p>
      </>
    ),
  },
  {
    id: "ending-use",
    title: "Suspension and ending use",
    body: (
      <p>
        You can stop using TinyTutor at any time. We may block access for anyone who breaks these terms or puts the service or its users at risk.
      </p>
    ),
  },
  {
    id: "disputes",
    title: "Disputes and governing law",
    body: (
      <p>
        If you have a problem with TinyTutor, please contact us first so we can try to resolve it. The governing law and the courts that will hear
        disputes are being confirmed by {OPERATOR.name} and will be stated here before these terms are adopted.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We will update these terms when TinyTutor changes and update the date at the top of this page. Continuing to use TinyTutor after a change
        means you accept the updated terms.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    body: (
      <p>
        Questions about these terms: email <a href={mailto("Terms of Service question")}>{OPERATOR.email}</a> or call{" "}
        <a href={telHref}>{OPERATOR.phone}</a>.
      </p>
    ),
  },
];

export default function TermsOfService() {
  return (
    <LegalDocument
      current="/legal/terms-of-service"
      title="Terms of Service"
      intro="The ground rules for using the TinyTutor website, kept short and plain. They apply to visitors, families and schools alike."
      sections={sections}
    />
  );
}
