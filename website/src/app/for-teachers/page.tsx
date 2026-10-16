import type { Metadata } from "next";
import Link from "next/link";

import { AudiencePageFrame, AudienceHero, CapabilityList, ClosingCta, IdeaPanel, StatusLegend } from "@/components/AudiencePage";
import { Container, Icon } from "@/components/ui";
import { mailto, OPERATOR } from "@/lib/legal";

export const metadata: Metadata = {
  title: "For Teachers · TinyTutor",
  description:
    "TinyTutor is designed to give teachers time back: lesson preparation, reusable worksheets, papers and resources, and a clearer view of misconceptions. Teacher tools are in design.",
  alternates: { canonical: "/for-teachers" },
};

// Blueprint sources: §2 (independent and school teacher), §6.1 personal teacher workspace, §6.2
// school teacher workspace, §6.3 teacher benefit hierarchy, §8.3 teacher joining, §13 teacher
// narrative ("Will I need to enter everything twice?"), §15 Wave 2 teacher productivity.

// Teacher tools are not available yet, so the call to action is a real request to Turins.
const EARLY_ACCESS = mailto(
  "TinyTutor for teachers: early access",
  `Hello ${OPERATOR.name},

I'm a teacher and I'd like to hear when TinyTutor's teaching tools are available.

What I teach (subject and grades):

Independent or at a school:

What takes most of my preparation time:

`,
);

const workflow = [
  { title: "Prepare", text: "Lesson outlines and explanations tied to a concept and grade." },
  { title: "Create and reuse", text: "Worksheets, homework, test papers, solutions and rubrics, kept in your own library." },
  { title: "Teach", text: "Concept illustrations and interactive demonstrations for the lesson." },
  { title: "Follow up", text: "Assignments, marking and where a class is struggling, where your school enables it." },
];

const personal = [
  "Lesson outline and explanation preparation tied to concept and grade.",
  "Generate and edit worksheets, homework, test papers, solutions and rubrics.",
  "A private resource library, reusable question collections and templates.",
  "Plan weekly teaching and reuse materials across cohorts.",
  "Export and share printable or digital teaching assets.",
];

const school = [
  "Your assigned classes, subjects and timetable.",
  "Class lesson plans mapped to your school's content.",
  "Homework, diary, attendance and syllabus coverage, where the school turns them on.",
  "Class tests and exams: marking, moderation and controlled publication of results.",
  "Class-level mastery and misconceptions, within your permissions.",
];

export default function ForTeachers() {
  return (
    <AudiencePageFrame
      hero={
        <AudienceHero
          eyebrow="For independent and school teachers"
          title="Teach with less effort. Spend more time on learning."
          description="Teachers prepare the same materials and assessments again and again. TinyTutor’s teaching tools are being designed to give that time back: preparation, papers and resources you make once and reuse, connected to the concepts your students learn."
          primary={{ href: EARLY_ACCESS, label: "Request early access" }}
          secondary={{ href: "#workflow", label: "See the teacher workflow" }}
          note="Teacher tools are in design, not yet available. This opens an email to Turins."
          aside={<IdeaPanel label="The teacher workflow, as designed" items={workflow} />}
        />
      }
    >
      <section aria-labelledby="priorities-title" className="pt-20 pb-16 lg:pt-28">
        <Container>
          <h2 id="priorities-title" className="type-section max-w-[22ch] text-navy">
            Built around what costs teachers time.
          </h2>
          <p className="type-lead mt-6 max-w-3xl text-academic">
            The design starts from a simple order of priorities: time back each week, fewer repeated paper-creation tasks, easier lesson delivery,
            and a clearer view of misconceptions. Administration comes second. And a tool that makes you enter the same information twice has
            failed, however good its screens look.
          </p>
        </Container>
      </section>

      <section id="workflow" aria-labelledby="workspaces-title" className="py-16 lg:py-20">
        <Container>
          <h2 id="workspaces-title" className="type-section max-w-[20ch] text-navy">
            Your own workspace. Your school&rsquo;s workflows.
          </h2>
          <p className="type-lead mt-6 max-w-3xl text-academic">
            TinyTutor keeps two kinds of teaching apart. Your personal tools are meant to work on their own, with no school subscription or class
            list. School duties appear only when your school invites you and assigns your classes.
          </p>
          <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
            {[
              { title: "Personal teacher workspace", items: personal },
              { title: "School teacher workspace", items: school },
            ].map((space) => (
              <div key={space.title} className="border-t-2 border-navy pt-6">
                <h3 className="type-card text-navy">{space.title}</h3>
                <ul className="mt-4 space-y-3">
                  {space.items.map((item) => (
                    <li key={item} className="type-body flex gap-3 text-academic">
                      <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <CapabilityList ids={["teaching", "classes"]} className="mt-12" />
        </Container>
      </section>

      <section aria-labelledby="judgement-title" className="py-16 lg:py-24">
        <Container className="grid gap-8 lg:grid-cols-[auto_minmax(0,1fr)] lg:gap-14">
          <span aria-hidden className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
            <Icon name="teacher" className="h-7 w-7" />
          </span>
          <div>
            <h2 id="judgement-title" className="type-section max-w-[22ch] text-navy">
              Support for teachers, never a replacement.
            </h2>
            <p className="type-lead mt-6 max-w-2xl text-academic">
              TinyTutor is meant to take on the repetitive parts of preparation and follow-up. Knowing what a class needs, and how to help a particular
              student, stays with you. Read how AI will be used in our{" "}
              <Link href="/legal/responsible-ai" className="font-semibold text-brand hover:underline">
                Responsible AI Policy
              </Link>
              .
            </p>
            <StatusLegend className="mt-10" />
          </div>
        </Container>
      </section>

      <ClosingCta
        title="Help shape TinyTutor for teachers."
        action={{ href: EARLY_ACCESS, label: "Request early access" }}
        note="Teacher tools are in design. This opens an email to Turins."
      />
    </AudiencePageFrame>
  );
}
