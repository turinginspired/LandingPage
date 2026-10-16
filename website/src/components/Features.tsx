import type { CapabilityId } from "@/lib/capabilities";

import { CapabilityList, StatusLegend } from "./AudiencePage";
import { Container, SectionHeading } from "./ui";

// The capability areas that carry the blueprint's differentiators, grouped by who they serve.
// Statuses come from src/lib/capabilities.ts (blueprint §16 and the capability's own section).
const groups: { title: string; ids: CapabilityId[] }[] = [
  { title: "For learning", ids: ["offline", "curriculum", "interactive", "ai", "continuity"] },
  { title: "For teaching and schools", ids: ["teaching", "parents", "school"] },
];

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="py-16 lg:py-24">
      <Container>
        <SectionHeading
          id="features-title"
          title="What TinyTutor is built to do."
          description="The capability areas at the heart of the platform, each with its current status from the TinyTutor blueprint."
        />
        <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {groups.map((group) => (
            <div key={group.title}>
              <p className="type-label text-academic">{group.title}</p>
              <CapabilityList ids={group.ids} className="mt-4" />
            </div>
          ))}
        </div>
        <StatusLegend className="mt-10" />
      </Container>
    </section>
  );
}
