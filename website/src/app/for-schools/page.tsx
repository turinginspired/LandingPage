import type { Metadata } from "next";
import Link from "next/link";

import { AudiencePageFrame, AudienceHero, CapabilityList, ClosingCta, IdeaPanel, Status, StatusLegend } from "@/components/AudiencePage";
import { ButtonLink, Container } from "@/components/ui";
import type { CapabilityId } from "@/lib/capabilities";
import { TURINS } from "@/lib/links";

export const metadata: Metadata = {
  title: "For Schools · TinyTutor",
  description:
    "For school leaders, administrators, owners and the families they serve: how TinyTutor is designed as one connected platform for learning, teaching and school operations.",
  alternates: { canonical: "/for-schools" },
};

// Blueprint sources: §1 (problem, thesis, "schools pay for outcomes and operational simplicity"),
// §2 (stakeholder ecosystem), §2.1 (identity vs membership), §5 parents and guardians, §7 schools
// as an academic operating system (§7.1 lifecycle, §7.4 permissions), §8.5 school admin joining,
// §12.2 school commercial model, §13 school narrative and objections, §13.2 positioning exclusions.

const groups: { id: string; title: string; who: string; text: string; capabilities: CapabilityId[] }[] = [
  {
    id: "school-leaders",
    title: "School principals and administrators",
    who: "An academically organised school, without extra administration.",
    text: "TinyTutor is designed as an academic operating system: institution setup, academic years, grades and sections, rosters and class membership, content allocated to the right classes, academic workflows and concise reporting. Sensitive steps such as imports, promotions and result publication are meant to be previewable, reversible where appropriate and logged.",
    capabilities: ["school", "classes"],
  },
  {
    id: "owners",
    title: "School owners and finance teams",
    who: "Clarity about spending and value.",
    text: "Visibility of subscriptions, fees, dues, receipts and renewals is part of the long-term design. Payment functionality will only be offered once it is fully validated, so it is not part of TinyTutor today.",
    capabilities: ["finance"],
  },
  {
    id: "parents",
    title: "Parents and guardians",
    who: "Families in your community who understand progress without guessing.",
    text: "A parent rarely needs dozens of charts. TinyTutor is designed to show whether a child is learning, where support would help and whether schoolwork is getting done, with one or two practical next steps, within the communication rules your school sets. Access comes through a consent-based guardian link, and children keep age-appropriate autonomy rather than being watched.",
    capabilities: ["parents"],
  },
];

// The school lifecycle as designed (§7.1, §8.5): how a school is meant to come on board.
const onboarding = [
  { title: "Apply", text: "The school applies with its identity and location details; Turins reviews and approves it." },
  { title: "Try it in test mode", text: "A sandbox with limited staff, classes and content, clearly separated from real student data." },
  { title: "Set up the academic year", text: "Boards, grades, sections, terms and roles, guided by a setup wizard." },
  { title: "Bring in people", text: "Import students and teachers, link existing learner profiles through secure verification, assign classes." },
  { title: "Run the year", text: "Teaching, assignments, exams and reporting, then promotion and year close." },
];

const thesis = [
  { title: "One learner, one record", text: "A continuous profile from home study into school and class, never duplicated." },
  { title: "Memberships, not new accounts", text: "Schools, classes, guardians and teachers gain access through explicit, permissioned links." },
  { title: "Evidence captured locally", text: "Learning is recorded on the device first and synced when a connection allows." },
  { title: "Insight for each role", text: "Students, parents, teachers and leaders each see what they need, not one giant dashboard." },
];

export default function ForSchools() {
  return (
    <AudiencePageFrame
      hero={
        <AudienceHero
          eyebrow="For school leaders, owners and their communities"
          title="One connected learning platform for your school."
          description="Schools run academics in one system, teachers rebuild materials in another, and parents see marks but not causes. TinyTutor is designed as one platform for your school: learning that continues offline, teaching that takes less effort, and a clear view of progress for leaders, teachers and families."
          primary={{ href: TURINS.schools, label: "Discuss TinyTutor" }}
          secondary={{ href: "/#how-it-works", label: "How TinyTutor works" }}
          note="Opens the Turins schools enquiry form on turins.in."
          aside={<IdeaPanel label="The idea behind the platform" items={thesis} />}
        />
      }
    >
      <section aria-labelledby="roles-title" className="pt-20 pb-16 lg:pt-28">
        <Container>
          <h2 id="roles-title" className="type-section max-w-[20ch] text-navy">
            Every role in your school, supported.
          </h2>
          <nav aria-label="On this page" className="mt-8 flex flex-wrap gap-2">
            {groups.map((group) => (
              <a key={group.id} href={`#${group.id}`} className="rounded-full border border-line px-4 py-2 text-sm font-semibold whitespace-nowrap text-navy hover:border-brand hover:text-brand">
                {group.title}
              </a>
            ))}
          </nav>
          <div className="mt-6">
            {groups.map((group) => (
              <section key={group.id} id={group.id} aria-labelledby={`${group.id}-title`} className="grid gap-6 border-t border-line py-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
                <div>
                  <h3 id={`${group.id}-title`} className="font-display text-[1.6rem] leading-tight font-bold tracking-[-0.02em] text-navy">
                    {group.title}
                  </h3>
                  <p className="type-lead mt-2 text-brand">{group.who}</p>
                </div>
                <div>
                  <p className="type-lead text-academic">{group.text}</p>
                  <CapabilityList ids={group.capabilities} className="mt-6" />
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>

      <section aria-labelledby="onboarding-title" className="py-16 lg:py-20">
        <Container>
          <h2 id="onboarding-title" className="type-section max-w-[20ch] text-navy">
            How a school comes on board.
          </h2>
          <p className="type-lead mt-6 max-w-3xl text-academic">
            The designed path from first conversation to a running academic year, with a test mode so your school can explore before any real student
            data is involved.
          </p>
          <figure className="mt-12">
            <ol className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
              {onboarding.map((step, i) => (
                <li key={step.title} className="bg-white p-6 lg:p-7">
                  <p className="font-display text-sm font-bold text-brand tabular-nums">0{i + 1}</p>
                  <h3 className="mt-2 font-display text-lg leading-snug font-bold text-navy">{step.title}</h3>
                  <p className="type-body mt-2 text-academic">{step.text}</p>
                </li>
              ))}
            </ol>
            <figcaption className="mt-4 flex flex-wrap items-center gap-2 text-sm text-academic">
              <Status kind="designed" /> The school onboarding workflow as designed in the TinyTutor blueprint.
            </figcaption>
          </figure>
        </Container>
      </section>

      <section aria-labelledby="trust-title" className="py-16 lg:py-20">
        <Container className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 id="trust-title" className="type-section max-w-[18ch] text-navy">
              Boundaries built in from the start.
            </h2>
            <p className="type-lead mt-6 text-academic">
              Teachers act only within their assigned groups. Parents see only their linked children. Published exams need authorised review, and
              financial records need separate permission. Children&rsquo;s data is subject to consent, retention and review rules.
            </p>
            <p className="type-body mt-4 text-academic">
              See the{" "}
              <Link href="/legal/child-safety" className="font-semibold text-brand hover:underline">
                Child Safety Policy
              </Link>{" "}
              and the{" "}
              <Link href="/legal" className="font-semibold text-brand hover:underline">
                Legal Center
              </Link>
              .
            </p>
          </div>
          <div>
            <h2 className="type-section max-w-[18ch] text-navy">Outcomes, not a feature count.</h2>
            <p className="type-lead mt-6 text-academic">
              Schools should pay for learning outcomes and operational simplicity, not for an overwhelming list of features. Turins works with schools
              through clearly bounded pilots, so a school can see what works in its own context before committing.
            </p>
            <div className="mt-8">
              <ButtonLink href={TURINS.schools} className="h-[52px] px-7 text-base whitespace-nowrap">
                Discuss TinyTutor
              </ButtonLink>
            </div>
          </div>
          <StatusLegend className="lg:col-span-2" />
        </Container>
      </section>

      <ClosingCta
        title="Start with the needs of your learning community."
        action={{ href: TURINS.schools, label: "Discuss TinyTutor" }}
        note="Opens the Turins schools enquiry form on turins.in."
      />
    </AudiencePageFrame>
  );
}
