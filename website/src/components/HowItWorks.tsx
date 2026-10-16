import { Container, SectionHeading } from "./ui";

// Blueprint §1.2 (thesis), §2.1 (account, profile and membership are different), §4.1 (learning
// journey), §8.1 (device, profile, account), §9.1 (one event foundation) and §10 (offline-first
// client, sync-focused server). A static explanation of the model, not a product screen.
const steps = [
  {
    title: "One learner profile",
    text: "A person learns under one continuous profile. An account is only the sign-in and recovery boundary.",
  },
  {
    title: "Memberships add context",
    text: "Joining a school, a class or a guardian relationship links to the profile; it never creates a new learner.",
  },
  {
    title: "Content installed for learning",
    text: "Curriculum packs link each concept to explanation, interaction, practice and assessment, and live on the device.",
  },
  {
    title: "Evidence captured where learning happens",
    text: "Attempts, hints and completed concepts are recorded locally, at the moment of learning, even offline.",
  },
  {
    title: "Sync and insight for each role",
    text: "When a connection allows, evidence syncs, and each person sees what their role needs: learner, parent, teacher or leader.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" aria-labelledby="how-title" className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          id="how-title"
          title="How TinyTutor fits together."
          description="One learner, many relationships, one record of learning. This is the model the whole platform is designed around."
        />
        <figure className="mt-12">
          <ol className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((step, i) => (
              <li key={step.title} className="relative bg-white p-6 lg:p-7">
                <p className="font-display text-sm font-bold text-brand tabular-nums">0{i + 1}</p>
                <h3 className="mt-2 font-display text-lg leading-snug font-bold text-navy">{step.title}</h3>
                <p className="type-body mt-2 text-academic">{step.text}</p>
              </li>
            ))}
          </ol>
          <figcaption className="type-body mt-5 max-w-3xl text-academic">
            Because the record starts on the learner&rsquo;s device, learning that happened offline still counts: it appears in reports once it
            syncs, rather than disappearing because a server hasn&rsquo;t seen it yet.
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
