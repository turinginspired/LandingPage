import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument, type LegalSection } from "@/components/LegalDocument";
import { mailto, OPERATOR, telHref } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy · TinyTutor",
  description: "How the TinyTutor website, operated by Turins, handles information: no accounts, forms, cookies or analytics, and your choices.",
  alternates: { canonical: "/legal/privacy-policy" },
};

// Every statement below describes how this website actually works (checked in the code, the
// production build and the server's responses: no cookies, no forms, no analytics, no
// third-party requests). It covers this website only; the TinyTutor app is in development and
// needs its own privacy information before release. Items "to be confirmed" are owner decisions.
const sections: LegalSection[] = [
  {
    id: "introduction",
    title: "Introduction and scope",
    body: (
      <>
        <p>
          This policy explains how {OPERATOR.name} handles information when you visit the TinyTutor website: the pages that describe TinyTutor,
          who it is for and its policies. It applies to every visitor, including students, parents, guardians, teachers and schools.
        </p>
        <p>
          It does not cover the TinyTutor app, which is in development. Before the app is released, its own privacy information will explain what it
          collects (see section <a href="#before-new-features">23</a>).
        </p>
        <p>
          The short version: <strong>this website does not ask for, store or track personal information.</strong> It has no accounts, sign-up or
          contact forms, cookies, analytics, advertising or AI features. The rest of this page explains the few places where information is still
          involved: the technical data every website receives, and the messages you choose to send us.
        </p>
      </>
    ),
  },
  {
    id: "who-we-are",
    title: "Who operates TinyTutor",
    body: (
      <>
        <p>
          TinyTutor is a learning product of <strong>{OPERATOR.name}</strong> (<a href={OPERATOR.site}>turins.in</a>). {OPERATOR.name} decides how and
          why information about TinyTutor users is handled.
        </p>
        <ul>
          <li>
            Email: <a href={mailto("Privacy question")}>{OPERATOR.email}</a>
          </li>
          <li>
            Phone: <a href={telHref}>{OPERATOR.phone}</a>
          </li>
          <li>Registered entity name and postal address: {OPERATOR.legalEntity ?? "to be confirmed and published before launch"}.</li>
        </ul>
      </>
    ),
  },
  {
    id: "definitions",
    title: "Definitions",
    body: (
      <ul>
        <li>
          <strong>Personal information</strong> (or personal data): any information about an identified or identifiable person.
        </li>
        <li>
          <strong>Student data</strong>: personal information about a learner, such as a name, class, answers or progress linked to that learner.
        </li>
        <li>
          <strong>Educational records</strong>: records about a learner kept by or for a school, such as assignments, marks and reports.
        </li>
        <li>
          <strong>Account information</strong>: details used to sign in or manage an account. This website has no accounts.
        </li>
        <li>
          <strong>Website</strong>: the pages at this address, and any messages you exchange with us about them.
        </li>
      </ul>
    ),
  },
  {
    id: "what-we-collect",
    title: "Information we handle today",
    body: (
      <>
        <h3>Technical information from your browser</h3>
        <p>
          Like every website, the server that delivers TinyTutor receives technical details with each request: your IP address, browser and device
          type, the page requested, the referring page and the time. TinyTutor does not yet have a production host. The hosting provider and how long
          its logs are kept will be named here before the site goes live.
        </p>
        <h3>Messages you send us</h3>
        <p>
          If you email or call us, we receive what you choose to share: usually your name, email address or phone number, and your message.
        </p>
      </>
    ),
  },
  {
    id: "not-collected",
    title: "Information we do not collect",
    body: (
      <>
        <p>This website has no features that would need it, so it collects none of the following:</p>
        <ul>
          <li>Student profiles, or parent, guardian, teacher, school administrator or staff accounts.</li>
          <li>Stored learning activity: attempts, mistakes, hints used, time spent, mastery or progress records.</li>
          <li>Homework, assignments, submissions, reports, challenges, rewards or achievements.</li>
          <li>School, classroom, enrolment or curriculum information.</li>
          <li>Contact-form or partnership-form submissions (there are no forms on the site).</li>
          <li>Analytics, advertising identifiers or tracking data.</li>
          <li>Anything processed by AI services or third-party learning integrations.</li>
        </ul>
        <p>
          Section <a href="#before-new-features">23</a> explains what will happen before any of this changes.
        </p>
      </>
    ),
  },
  {
    id: "how-collected",
    title: "How information reaches us",
    body: (
      <ul>
        <li>
          <strong>Automatically</strong>: technical request information, sent by your browser to the server that hosts the site. The pages load
          nothing from other companies&rsquo; servers: fonts, images and code all come from this website.
        </li>
        <li>
          <strong>Directly from you</strong>: when you email or call us.
        </li>
        <li>
          <strong>From parents, schools or integrations</strong>: never. This website receives no information from schools, parents on a
          child&rsquo;s behalf, or other systems.
        </li>
      </ul>
    ),
  },
  {
    id: "purposes",
    title: "Why we use it",
    body: (
      <ul>
        <li>To deliver the website to your device and keep it working.</li>
        <li>To protect the service against misuse and investigate technical problems.</li>
        <li>To reply to your messages and handle requests about your information.</li>
      </ul>
    ),
  },
  {
    id: "legal-basis",
    title: "Legal basis",
    body: (
      <>
        <p>
          Technical request information is processed because it is necessary to deliver and secure a website you have chosen to visit. Messages you
          send us are processed because you chose to contact us, and you can ask us to delete them at any time.
        </p>
        <p>
          Our primary framework is India&rsquo;s Digital Personal Data Protection Act, 2023 and its Rules, as they come into force. Where other laws
          apply to a visitor, such as the EU or UK GDPR, we will rely on the equivalent bases (legitimate interests for running the site securely,
          consent or your request for correspondence). The exact grounds will be confirmed by legal counsel before this policy is adopted.
        </p>
      </>
    ),
  },
  {
    id: "learning-analytics",
    title: "Learning analytics, personalisation and AI",
    body: (
      <>
        <p>
          This website has no learning features. It does not analyse anyone, personalise content or use artificial intelligence, and it sends
          nothing to AI providers.
        </p>
        <p>
          The TinyTutor app&rsquo;s AI learning assistant is in development. Before it is released, the app&rsquo;s privacy information will name the
          provider, what it receives, and its retention and training terms, following our{" "}
          <Link href="/legal/responsible-ai">Responsible AI Policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Who else receives information",
    body: (
      <>
        <p>We do not sell personal information, and we do not share it for advertising. Some information does reach other organisations:</p>
        <ul>
          <li>
            <strong>Google (Gmail)</strong>: our contact address is a Gmail account, so messages you send us are stored and processed by Google as our
            email provider. See <a href="https://policies.google.com/privacy">Google&rsquo;s privacy policy</a>.
          </li>
          <li>
            <strong>Hosting provider</strong>: the company that will host the site receives technical request information. It will be named here before
            launch.
          </li>
          <li>
            <strong>Authorities</strong>: only if the law requires us to share information, or to protect someone&rsquo;s safety.
          </li>
        </ul>
        <p>
          Links to turins.in, such as &ldquo;Explore TinyTutor&rdquo;, &ldquo;Talk to Turins&rdquo; and the schools enquiry form, take you to the
          Turins website. Anything you enter there is covered by its own privacy terms, not this page.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep it",
    body: (
      <ul>
        <li>Server logs: kept by the hosting provider for its standard period, which will be stated here once the provider is chosen.</li>
        <li>
          Your messages: kept only as long as needed to answer them and any follow-up. A fixed retention period has not been set yet; you can ask us to
          delete your messages at any time.
        </li>
      </ul>
    ),
  },
  {
    id: "your-choices",
    title: "Access, correction, deletion and export",
    body: (
      <>
        <p>
          You can ask us what information we hold about you, and ask us to correct, delete or give you a copy of it. In practice, the only personal
          information we can hold is correspondence you have sent us.
        </p>
        <p>
          Email <a href={mailto("Privacy request")}>{OPERATOR.email}</a> with the subject &ldquo;Privacy request&rdquo; and say what you would like us
          to do. We may ask you to confirm the email address the request relates to. Our{" "}
          <Link href="/legal/account-deletion">Account and Data Deletion</Link> page explains the process in more detail.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <>
        <p>The safest data is data we never collect, so this website is built not to store personal information. In addition:</p>
        <ul>
          <li>The site sends browser security headers that block framing by other sites, stop content-type guessing and limit referrer details.</li>
          <li>It instructs browsers to use HTTPS only, which takes effect once it is hosted on a secure domain.</li>
          <li>The website has no database of users and no sign-in system that could be attacked.</li>
        </ul>
        <p>
          No system is completely secure. We do not claim certifications or independent security audits; none have been carried out yet.
        </p>
      </>
    ),
  },
  {
    id: "international-transfers",
    title: "International transfers",
    body: (
      <p>
        Google&rsquo;s servers, which handle our email, may be located outside India. The hosting provider&rsquo;s
        location will be stated once it is chosen. Where the law restricts transfers to particular countries, we will follow those restrictions.
      </p>
    ),
  },
  {
    id: "children",
    title: "Children's privacy",
    body: (
      <>
        <p>
          TinyTutor is being built for learners of all ages, including children. A child can read this website without giving any personal
          information; it has no accounts, chat, ads or tracking.
        </p>
        <p>
          India&rsquo;s Digital Personal Data Protection Act, 2023 treats anyone under 18 as a child and requires verifiable consent from a parent or
          lawful guardian before a child&rsquo;s personal data is processed. Before the TinyTutor app, or any feature, collects a child&rsquo;s
          information, we will put that consent in place, or work through schools under appropriate agreements, as the law requires. See our{" "}
          <Link href="/legal/child-safety">Child Safety Policy</Link>.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies and similar technologies",
    body: (
      <p>
        The site sets no cookies and uses no analytics, advertising or tracking tools, so there is nothing to consent to. As with any website, your browser may
        keep copies of the site&rsquo;s files in its ordinary cache so pages load faster; this holds no information about you. Our{" "}
        <Link href="/legal/cookies">Cookie Policy</Link> explains how to clear it.
      </p>
    ),
  },
  {
    id: "marketing",
    title: "Marketing",
    body: <p>We do not send marketing messages, newsletters or promotional texts, and the site has no sign-up for them.</p>,
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>Depending on where you live, the law may give you the right to:</p>
        <ul>
          <li>know what personal information is processed about you and how;</li>
          <li>have it corrected, completed, updated or erased;</li>
          <li>withdraw consent you have given;</li>
          <li>have your grievance addressed, and complain to a regulator (in India, the Data Protection Board of India) if it is not resolved;</li>
          <li>nominate someone to exercise your rights if you die or become unable to do so (under India&rsquo;s DPDP Act).</li>
        </ul>
        <p>These rights apply as the relevant laws come into force. To use any of them, contact us as described in section 22.</p>
      </>
    ),
  },
  {
    id: "incidents",
    title: "Data breaches",
    body: (
      <p>
        Because this website stores no personal information, a breach of it is unlikely to expose any. If an incident ever affects personal
        information we hold, such as correspondence, we will inform the people affected and the authorities as the law requires. A formal incident
        response procedure has not been written yet; it will be in place before any feature that stores personal information launches.
      </p>
    ),
  },
  {
    id: "third-party-sites",
    title: "Third-party websites",
    body: (
      <p>
        This website links to a few other websites, such as turins.in and Google&rsquo;s privacy policy. Their own privacy policies apply when you visit
        them, and we are not responsible for how they handle information.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We will update this page whenever the way this website handles information changes, and change the &ldquo;Last updated&rdquo; date at the top.
        Significant changes, especially any that start collecting information, will be made here before they take effect.
      </p>
    ),
  },
  {
    id: "contact",
    title: "Contact and grievances",
    body: (
      <>
        <p>
          For questions, requests or complaints about privacy, email <a href={mailto("Privacy question")}>{OPERATOR.email}</a> or call{" "}
          <a href={telHref}>{OPERATOR.phone}</a>. {OPERATOR.name} lists this address as its grievance contact.
        </p>
        <p>
          We aim to acknowledge messages promptly and to resolve requests within the time the law allows. If you are not satisfied with our response,
          you may be able to complain to the data protection authority where you live.
        </p>
      </>
    ),
  },
  {
    id: "before-new-features",
    title: "Before new features launch",
    body: (
      <>
        <p>
          The TinyTutor app, with student, parent, teacher and school accounts, learning records, reports and an AI learning assistant, is in
          development. None of it is part of this website.
        </p>
        <p>Before any of them launches, we will:</p>
        <ul>
          <li>publish privacy information for the app that describes exactly what is collected, why, who receives it and for how long;</li>
          <li>put verifiable parental consent, or school authorisation, in place for children&rsquo;s data;</li>
          <li>publish the agreements schools need, such as a data processing agreement;</li>
          <li>set retention periods, deletion and export processes, and an incident response procedure.</li>
        </ul>
      </>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <LegalDocument
      current="/legal/privacy-policy"
      title="Privacy Policy"
      intro={<>How the TinyTutor website handles information, written to be read, not skimmed past. The answer is: almost none, and nothing that identifies you.</>}
      sections={sections}
    />
  );
}
