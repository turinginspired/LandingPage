import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument, type LegalSection } from "@/components/LegalDocument";
import { mailto, OPERATOR, telHref } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Child Safety Policy · TinyTutor",
  description: "How the TinyTutor website protects young visitors, what the TinyTutor app must have before student accounts, and how to report a concern.",
  alternates: { canonical: "/legal/child-safety" },
};

const sections: LegalSection[] = [
  {
    id: "commitment",
    title: "Our commitment",
    body: (
      <>
        <p>
          TinyTutor is built for young learners, so their safety shapes how it is designed. This policy explains how TinyTutor protects children today,
          what we will put in place before it changes, and how anyone can raise a concern.
        </p>
        <p>
          A written policy cannot guarantee a child&rsquo;s safety on its own. It sets out what we do, and it depends on parents, guardians, teachers
          and us working together.
        </p>
      </>
    ),
  },
  {
    id: "design-today",
    title: "How TinyTutor is designed today",
    body: (
      <ul>
        <li>
          <strong>No accounts and no personal information</strong>: children can read the website without giving a name, email or anything else.
        </li>
        <li>
          <strong>No contact with others</strong>: there is no chat, messaging, comments, forums or way for strangers to reach a child.
        </li>
        <li>
          <strong>No user-generated content</strong>: nothing a visitor does is published or shared.
        </li>
        <li>
          <strong>No advertising or tracking</strong>: no ads, analytics, cookies or profiling.
        </li>
        <li>
          <strong>Age-appropriate content</strong>: the website describes TinyTutor in plain language, and its only external links go to Turins
          and the policies of services we name.
        </li>
      </ul>
    ),
  },
  {
    id: "responsibilities",
    title: "Parents, guardians and schools",
    body: (
      <ul>
        <li>Parents and guardians decide whether and how a child in their care uses TinyTutor, and can supervise its use.</li>
        <li>Teachers and schools using TinyTutor in class remain responsible for supervision under their own safeguarding policies.</li>
        <li>If you see anything on TinyTutor that seems unsuitable for children, please tell us.</li>
      </ul>
    ),
  },
  {
    id: "before-accounts",
    title: "Before student accounts launch",
    body: (
      <>
        <p>Student, parent, teacher and school accounts are planned but do not exist yet. Before they launch, we will:</p>
        <ul>
          <li>obtain verifiable consent from a parent or lawful guardian, or school authorisation, before collecting any child&rsquo;s information;</li>
          <li>collect only the minimum information needed for learning, and nothing for advertising;</li>
          <li>limit who can see a learner&rsquo;s information to the people who need it, such as their own teacher and parent;</li>
          <li>keep any messaging between users off, or limited to supervised, school-controlled spaces;</li>
          <li>publish an updated version of this policy and our <Link href="/legal/privacy-policy">Privacy Policy</Link>.</li>
        </ul>
      </>
    ),
  },
  {
    id: "report-a-concern",
    title: "Reporting a concern",
    body: (
      <>
        <p>
          If you are worried about a child&rsquo;s safety in connection with TinyTutor, or find unsuitable content, contact us at{" "}
          <a href={mailto("Child safety concern")}>{OPERATOR.email}</a> or <a href={telHref}>{OPERATOR.phone}</a>. Helpful details include:
        </p>
        <ul>
          <li>what happened or what you saw, and where on TinyTutor;</li>
          <li>when it happened;</li>
          <li>how we can reach you (you do not need to share a child&rsquo;s personal details).</li>
        </ul>
        <p>
          <strong>If a child is in immediate danger, contact local emergency services first.</strong> In India, call 112 for emergencies or 1098 for
          Childline.
        </p>
      </>
    ),
  },
  {
    id: "handling",
    title: "How we handle concerns",
    body: (
      <ul>
        <li>We aim to acknowledge every safety concern promptly and treat it as a priority.</li>
        <li>We will remove or fix unsuitable content we are responsible for.</li>
        <li>Where a concern suggests a child may be at risk, we will involve the child&rsquo;s parent, guardian or school, or the authorities, as appropriate and as the law requires.</li>
        <li>We keep concerns confidential and share details only with those who need them to keep a child safe.</li>
      </ul>
    ),
  },
  {
    id: "no-certifications",
    title: "What this policy does not claim",
    body: (
      <p>
        {OPERATOR.name} does not currently hold any child-safety certification or accreditation, and this policy has not been independently audited.
        It will be reviewed by a qualified professional before formal adoption and whenever TinyTutor changes in a way that affects children.
      </p>
    ),
  },
];

export default function ChildSafety() {
  return (
    <LegalDocument
      current="/legal/child-safety"
      title="Child Safety Policy"
      intro="TinyTutor is being built for young learners. Here is how this website keeps them safe today, what the app must have before it is released, and how to tell us about a concern."
      sections={sections}
    />
  );
}
