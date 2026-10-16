import type { Metadata } from "next";
import Link from "next/link";

import { AudiencePageFrame, AudienceHero, CapabilityList, ClosingCta, IdeaPanel, StatusLegend } from "@/components/AudiencePage";
import { Container } from "@/components/ui";
import { TURINS } from "@/lib/links";

export const metadata: Metadata = {
  title: "For Students · TinyTutor",
  description:
    "TinyTutor is designed so learners can understand, not memorise: curriculum-linked concepts, interaction, practice and feedback, built to keep working offline.",
  alternates: { canonical: "/for-students" },
};

// Blueprint sources: §1.1–1.5 (problem, thesis, five messages), §2 (independent learner, school
// student), §4.1–4.6 (learner journey, content, practice, labs, enrichment tracks, AI assistant),
// §8.2 (joining a school without losing history), §13 (student narrative and objection).

const challenges = [
  {
    title: "Concepts that don’t click",
    text: "Rereading a page rarely fixes a misunderstanding. Memorising an answer works until the question changes.",
  },
  {
    title: "Learning that stops when the internet does",
    text: "Online-only study fails exactly when data, connectivity or a shared device becomes the limit.",
  },
  {
    title: "Progress scattered across apps",
    text: "Each app keeps its own record, so moving between home study and school means starting over.",
  },
];

const journey = [
  { title: "Understand the concept", text: "Short, precise explanations with worked examples, mapped to your syllabus." },
  { title: "Interact with it", text: "A simulation, diagram or experiment where it genuinely helps." },
  { title: "Practise with feedback", text: "Scaffolded questions with hints, explanations and corrections." },
  { title: "Check, then revise", text: "A short check updates what you have mastered and what to revisit." },
];

export default function ForStudents() {
  return (
    <AudiencePageFrame
      hero={
        <AudienceHero
          eyebrow="For independent learners and school students"
          title="Learn anywhere. Understand more."
          description="TinyTutor is being built so that you can understand a topic, not just memorise it: each concept connected to an explanation, something to explore, practice with feedback and a check, and designed to keep working when the internet doesn’t."
          primary={{ href: TURINS.product, label: "Explore TinyTutor" }}
          secondary={{ href: "/#how-it-works", label: "How TinyTutor works" }}
          note="Opens the TinyTutor page on turins.in."
          aside={<IdeaPanel label="How a concept is meant to be learned" items={journey} />}
        />
      }
    >
      <section aria-labelledby="challenge-title" className="pt-20 pb-16 lg:pt-28">
        <Container>
          <h2 id="challenge-title" className="type-section max-w-[22ch] text-navy">
            Studying is harder than it needs to be.
          </h2>
          <ul className="mt-12 grid gap-x-12 gap-y-8 md:grid-cols-3">
            {challenges.map((challenge) => (
              <li key={challenge.title} className="border-t-2 border-navy pt-5">
                <h3 className="type-card text-navy">{challenge.title}</h3>
                <p className="type-body mt-2 text-academic">{challenge.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="approach-title" className="py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 id="approach-title" className="type-section max-w-[16ch] text-navy">
              Content that connects, not a pile of PDFs.
            </h2>
            <p className="type-lead mt-6 max-w-md text-academic">
              In TinyTutor, a concept is meant to lead somewhere: from explanation to interaction, practice, mastery and assessment, and back
              through revision when you need it.
            </p>
          </div>
          <CapabilityList ids={["curriculum", "interactive", "progress", "ai"]} />
        </Container>
      </section>

      <section aria-labelledby="anywhere-title" className="py-16 lg:py-20">
        <Container className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="anywhere-title" className="type-section max-w-[16ch] text-navy">
              Keep learning, wherever you are.
            </h2>
            <p className="type-lead mt-6 max-w-xl text-academic">
              TinyTutor is designed offline-first: installed learning keeps working without a connection, and what you do is saved on your device
              first, then synced when you are online. Syncing adds to your learning; it should never be what unlocks it.
            </p>
          </div>
          <div>
            <h2 className="type-section max-w-[16ch] text-navy">Your learning stays yours.</h2>
            <p className="type-lead mt-6 max-w-xl text-academic">
              The same learner profile is meant to follow you from studying at home into a school or class, without a second account and without
              losing your history. School assignments, exam preparation and enrichment tracks such as Olympiad foundations are designed to sit side by
              side, each with its own progress.
            </p>
          </div>
          <CapabilityList ids={["offline", "continuity"]} className="lg:col-span-2" />
        </Container>
      </section>

      <section aria-labelledby="assistant-title" className="py-16 lg:py-20">
        <Container>
          <h2 id="assistant-title" className="type-section max-w-[24ch] text-navy">
            Help that makes you think, not a shortcut to answers.
          </h2>
          <p className="type-lead mt-6 max-w-3xl text-academic">
            TinyTutor&rsquo;s AI learning assistant is being designed as an explainer and a guide: it asks good questions, works from the concept or
            exercise you are on, says when it is unsure, and keeps explanations age-appropriate. How it handles your information is set out in our{" "}
            <Link href="/legal/responsible-ai" className="font-semibold text-brand hover:underline">
              Responsible AI Policy
            </Link>
            .
          </p>
          <StatusLegend className="mt-10" />
        </Container>
      </section>

      <ClosingCta title="Learn anywhere. Understand more." action={{ href: TURINS.product, label: "Explore TinyTutor" }} note="Opens the TinyTutor page on turins.in." />
    </AudiencePageFrame>
  );
}
