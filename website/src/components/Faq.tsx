import Link from "next/link";
import type { ReactNode } from "react";

import { TURINS } from "@/lib/links";

import { Container, SectionHeading } from "./ui";

const link = "font-semibold text-brand underline underline-offset-4";

// Every answer follows the TinyTutor blueprint: §1 (what it is, mission, launch subjects), §1.5
// (offline-first), §2 (who it serves), §4.6 (AI assistant), §13.2 (positioning exclusions), §16
// (implementation status).
const questions: { q: string; a: ReactNode }[] = [
  {
    q: "What is TinyTutor?",
    a: "An offline-first learning and education platform from Turins. It connects independent learners, parents, teachers and schools around one learner identity, one curriculum and content graph, and one record of learning, so learning at home and at school is part of the same story.",
  },
  {
    q: "Is TinyTutor available today?",
    a: (
      <>
        TinyTutor is being built. On this site, every capability carries its status from the TinyTutor blueprint: in development, designed or
        planned, so you can see what is in progress and what is direction. Schools can talk to Turins about pilots through the{" "}
        <a href={TURINS.schools} className={link}>
          schools enquiry form
        </a>
        .
      </>
    ),
  },
  {
    q: "Does it work without the internet?",
    a: "That is the core design principle. Installed learning is meant to keep working offline, with progress recorded on the device and synced when a connection is available. Offline operation is in development and is being tested for long offline periods, slow sync and reinstalls.",
  },
  {
    q: "Who is TinyTutor for?",
    a: "Independent learners and school students, parents and guardians, independent and school teachers, and school leaders, administrators and owners. Each role gets its own purposeful experience rather than one shared dashboard.",
  },
  {
    q: "Which subjects does it cover?",
    a: "TinyTutor starts with curriculum-linked Mathematics and Science, and is designed to expand to English, Computers, AI and reasoning.",
  },
  {
    q: "How does TinyTutor use AI?",
    a: (
      <>
        Its AI learning assistant, in development, is designed as an explainer and a guide rather than a shortcut to answers: it works from the
        concept or exercise in front of the learner, says when it is unsure and keeps explanations age-appropriate. Read the{" "}
        <Link href="/legal/responsible-ai" className={link}>
          Responsible AI Policy
        </Link>
        .
      </>
    ),
  },
  {
    q: "Will TinyTutor replace teachers?",
    a: "No. It is designed to take repetitive preparation and administration off teachers' plates, so more of their time goes to teaching. The judgement about what a class or a student needs stays with the teacher.",
  },
];

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="py-20 lg:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading id="faq-title" title="Questions, answered." description="The essentials about TinyTutor: what it is, who it serves and where it stands." className="self-start" />
        <div className="space-y-3">
          {questions.map(({ q, a }) => (
            <details key={q} className="glass-card group rounded-3xl px-6">
              <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-6 py-5 text-left text-[17px] font-semibold text-navy sm:text-lg transition-colors hover:text-brand">
                {q}
                <span aria-hidden className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <span className="absolute h-0.5 w-3.5 rounded-full bg-current" />
                  <span className="absolute h-3.5 w-0.5 rounded-full bg-current transition-transform duration-200 group-open:scale-y-0" />
                </span>
              </summary>
              <p className="type-body max-w-2xl pb-6 text-academic">{a}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
