import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument, type LegalSection } from "@/components/LegalDocument";
import { mailto, OPERATOR } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Responsible AI Policy · TinyTutor",
  description: "How AI in TinyTutor is meant to work: the AI learning assistant is in development. Support, not judgement; human oversight; privacy.",
  alternates: { canonical: "/legal/responsible-ai" },
};

const sections: LegalSection[] = [
  {
    id: "today",
    title: "Where AI stands today",
    body: (
      <>
        <p>
          <strong>This website uses no artificial intelligence.</strong> Nothing you do here is sent to an AI service, and no automated system judges,
          ranks or profiles anyone.
        </p>
        <p>
          In the TinyTutor app, an AI learning assistant is in development: smaller tasks are meant to run on the device itself, with cloud AI for
          more demanding ones. It is not released, and this policy sets the rules it, and any future learning insights, must follow before they
          are switched on.
        </p>
      </>
    ),
  },
  {
    id: "safeguards-implemented",
    title: "Safeguards in place on this website",
    body: (
      <ul>
        <li>This website uses no AI models or AI providers, and makes no automated assessment of anyone.</li>
        <li>It collects no learner data, so none can be used to train or feed an AI system.</li>
      </ul>
    ),
  },
  {
    id: "role-of-ai",
    title: "The intended role of AI",
    body: (
      <>
        <p>When AI-supported features are introduced, their role will be to support learning, never to replace teachers or parents. For example:</p>
        <ul>
          <li>suggesting which topic a learner might practise next;</li>
          <li>helping a teacher notice where a class is struggling;</li>
          <li>explaining a mistake in a different way.</li>
        </ul>
      </>
    ),
  },
  {
    id: "not-a-verdict",
    title: "Insights are not verdicts",
    body: (
      <p>
        Any AI-generated insight will be a suggestion based on limited information. It will never be a definitive assessment of a child&rsquo;s
        abilities, character, potential or future, and must not be used as one. Learning is not fixed, and a pattern in practice data says nothing
        certain about who a child is or will become.
      </p>
    ),
  },
  {
    id: "limitations",
    title: "Limitations, errors and bias",
    body: (
      <p>
        AI systems make mistakes. They can be confidently wrong, reflect biases in the data they learned from, and work less well for some learners
        than others. Before launch, each feature will be tested for accuracy and for uneven results across different groups of learners, and the known
        limitations will be published.
      </p>
    ),
  },
  {
    id: "human-oversight",
    title: "Human oversight",
    body: (
      <ul>
        <li>Teachers will be able to see why a suggestion was made, and to disagree with or override it.</li>
        <li>Any decision that matters for a learner, such as grouping, support or reporting to parents, will be made by a person, not by AI alone.</li>
        <li>Learners and parents will be able to question an insight and have a person look at it.</li>
      </ul>
    ),
  },
  {
    id: "privacy-transparency",
    title: "Privacy and transparency",
    body: (
      <ul>
        <li>
          Before any AI feature launches, our <Link href="/legal/privacy-policy">Privacy Policy</Link> will name the provider, what information it
          receives, how long it keeps it, and whether it may use it for training.
        </li>
        <li>We will send AI providers the minimum information needed, without names where possible.</li>
        <li>We will clearly label anything that is generated or suggested by AI.</li>
      </ul>
    ),
  },
  {
    id: "prohibited-uses",
    title: "Uses we rule out",
    body: (
      <ul>
        <li>Making high-stakes decisions about a learner, such as admission, streaming or discipline, by AI alone.</li>
        <li>Profiling learners for advertising or selling insights about them.</li>
        <li>Inferring emotions, personality or sensitive characteristics from learning data.</li>
        <li>Open-ended AI chat with children without appropriate safeguards and supervision.</li>
      </ul>
    ),
  },
  {
    id: "feedback",
    title: "Questions and concerns",
    body: (
      <p>
        If you have questions about AI in TinyTutor, or concerns about a future feature, email{" "}
        <a href={mailto("Responsible AI question")}>{OPERATOR.email}</a>.
      </p>
    ),
  },
];

export default function ResponsibleAi() {
  return (
    <LegalDocument
      current="/legal/responsible-ai"
      title="Responsible AI Policy"
      intro="This website uses no AI, and TinyTutor's AI learning assistant is still in development. These are the rules it must follow, written down before it is released."
      sections={sections}
    />
  );
}
