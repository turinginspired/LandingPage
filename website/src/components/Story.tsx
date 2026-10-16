import { OPERATOR } from "@/lib/legal";

import { Container } from "./ui";

// Blueprint §1.1 (the problem), §1.2 (the TinyTutor thesis), §1.3 (mission), executive proposition.
const fragments = [
  { who: "Learners", text: "use disconnected study apps, each with its own record of progress." },
  { who: "Teachers", text: "create materials and assessments again and again." },
  { who: "Parents", text: "see marks, but not what causes progress or difficulty." },
  { who: "Schools", text: "run academic operations in separate systems." },
];

/** The first thing the white panel reveals: the problem TinyTutor addresses, and its answer. */
export function Story() {
  return (
    <section id="about" aria-labelledby="about-title" className="pt-24 pb-16 lg:pt-32 lg:pb-20">
      <Container>
        <h2 id="about-title" className="type-section max-w-[18ch] text-navy lg:text-[3.25rem] lg:leading-[1.08]">
          Learning is fragmented.
        </h2>
        <ul className="mt-10 grid gap-x-12 sm:grid-cols-2">
          {fragments.map((fragment) => (
            <li key={fragment.who} className="type-lead border-t border-line py-5 text-academic">
              <strong className="font-display font-bold text-navy">{fragment.who}</strong> {fragment.text}
            </li>
          ))}
        </ul>
        <p className="type-lead mt-6 max-w-3xl text-academic">
          And online-only tools fail exactly when connectivity, devices or cost become the limit.
        </p>

        <div className="mt-16 grid gap-10 border-t-2 border-navy pt-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
          <p className="font-display text-[1.75rem] leading-snug font-bold tracking-[-0.02em] text-navy lg:text-[2.25rem]">
            TinyTutor is one learning layer: it works for a learner at home, carries into the classroom and school, and gives each person the view
            their role needs, from the same record of learning.
          </p>
          <div>
            <p className="type-lead text-academic">
              It is an offline-first learning and education platform, built by {OPERATOR.name}, connecting independent learners, parents, teachers
              and schools around one persistent learner identity, one curriculum and content graph, and one coherent record of learning.
            </p>
            <p className="type-body mt-4 text-academic">
              Its mission: make rigorous, personalised learning useful every day, even offline, while reducing educational administration. It
              launches with curriculum-linked Mathematics and Science.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
