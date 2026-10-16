import { Container, SectionHeading } from "./ui";

// The blueprint's five messages to repeat consistently (§1.5): what makes TinyTutor's approach distinct.
const principles = [
  {
    title: "Learning continues offline.",
    text: "Installed learning is designed to work without a connection. Syncing enhances it; it should never be what unlocks it.",
  },
  {
    title: "A learner owns one continuous profile.",
    text: "Memberships grant access to schools, classes, guardians and teachers, so joining a school never means starting again.",
  },
  {
    title: "Content is not a PDF dump.",
    text: "Each concept connects explanation, interaction, practice, mastery and assessment.",
  },
  {
    title: "Each role gets a purposeful workflow.",
    text: "Students, parents, teachers and leaders see what they need, not one giant common dashboard.",
  },
  {
    title: "Schools pay for outcomes and simplicity.",
    text: "Not for an overwhelming list of features.",
  },
];

export function Principles() {
  return (
    <section id="principles" aria-labelledby="principles-title" className="py-16 lg:py-24">
      <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <SectionHeading
          id="principles-title"
          title="Five principles behind TinyTutor."
          description="The commitments that shape every part of the platform."
          className="lg:sticky lg:top-28 lg:self-start"
        />
        <ol className="border-t border-line">
          {principles.map((principle, i) => (
            <li key={principle.title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-x-5 border-b border-line py-7 sm:gap-x-7">
              <span aria-hidden className="font-display text-[2rem] leading-none font-extrabold text-brand tabular-nums">
                0{i + 1}
              </span>
              <div>
                <h3 className="type-card text-navy">{principle.title}</h3>
                <p className="type-body mt-2 max-w-lg text-academic">{principle.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
