import { TURINS } from "@/lib/links";

import { ArrowRight, ButtonLink, Container } from "./ui";

/** The closing call to action, just above the curved footer: the blueprint promise and a real next step. */
export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="pt-20 pb-6 lg:pt-28 lg:pb-8">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 id="cta-title" className="type-section mx-auto max-w-[22ch] text-navy">
            Run education from one connected platform.
          </h2>
          <p className="type-lead mx-auto mt-5 max-w-xl text-academic">
            See where TinyTutor is going, or talk to Turins about what it could mean for your learners, your teaching or your school.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={TURINS.product} className="h-[52px] px-7 text-base whitespace-nowrap">
              Explore TinyTutor <ArrowRight />
            </ButtonLink>
            <ButtonLink href={TURINS.contact} variant="secondary" className="h-[52px] px-7 text-base whitespace-nowrap">
              Talk to Turins
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-academic">Both open turins.in, the Turins company site.</p>
        </div>
      </Container>
    </section>
  );
}
