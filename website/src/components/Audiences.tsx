import Link from "next/link";

import { ArrowRight, Container, SectionHeading } from "./ui";

// Blueprint §2 (stakeholder ecosystem and value) and §13 (headline per audience).
const audiences = [
  {
    who: "Students",
    href: "/for-students",
    headline: "Actually understand, and practise, even offline.",
    what: "Concepts connected to explanation, interaction and practice, with one learning history from home to school.",
  },
  {
    who: "Teachers",
    href: "/for-teachers",
    headline: "Give time back to teaching.",
    what: "Preparation, papers and resources made once and reused, and a clearer view of misconceptions.",
  },
  {
    who: "Parents",
    href: "/for-schools#parents",
    headline: "Understand progress without guessing.",
    what: "A weekly picture of learning and schoolwork, with one or two useful next steps.",
  },
  {
    who: "Schools",
    href: "/for-schools#school-leaders",
    headline: "Academically organised, without extra administration.",
    what: "An academic operating system: setup, classes, content, workflows and reporting in one place.",
  },
];

export function Audiences() {
  return (
    <section id="who-its-for" aria-labelledby="who-title" className="py-16 lg:py-24">
      <Container>
        <SectionHeading id="who-title" title="Built for everyone around a learner." description="Each role gets its own purposeful experience, built on the same learning record." />
        <ul className="mt-12 border-t border-line">
          {audiences.map((audience) => (
            <li key={audience.who} className="border-b border-line">
              <Link href={audience.href} className="group grid gap-2 py-7 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)_auto] sm:items-center sm:gap-10 lg:py-9">
                <h3 className="font-display text-[1.75rem] leading-tight font-bold tracking-[-0.02em] text-navy group-hover:text-brand lg:text-[2.25rem]">
                  {audience.who}
                </h3>
                <span>
                  <span className="type-card block text-navy">{audience.headline}</span>
                  <span className="type-body mt-1 block max-w-2xl text-academic">{audience.what}</span>
                </span>
                <ArrowRight className="hidden text-brand transition-transform group-hover:translate-x-1 sm:block" />
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
