import type { ReactNode } from "react";

import { CAPABILITIES, STATUS_LABEL, type CapabilityId, type Status as StatusKind } from "@/lib/capabilities";

import { CurvedFooter } from "./CurvedFooter";
import { Navbar } from "./Navbar";
import { ArrowRight, ButtonLink, Container, Eyebrow } from "./ui";

type Action = { href: string; label: string };

const STATUS_STYLE: Record<StatusKind, string> = {
  development: "bg-brand/10 text-brand",
  designed: "bg-ice text-academic",
  planned: "border border-line text-academic",
};

/** A capability's blueprint status. Shown beside every capability, so the site never presents a
 *  roadmap item as a working feature. */
export function Status({ kind }: { kind: StatusKind }) {
  return (
    <span className={`inline-flex shrink-0 items-center rounded-full px-2.5 py-1 text-xs font-semibold whitespace-nowrap ${STATUS_STYLE[kind]}`}>
      {STATUS_LABEL[kind]}
    </span>
  );
}

/** What the three labels mean, in the blueprint's own terms. */
export function StatusLegend({ className = "" }: { className?: string }) {
  return (
    <p className={`type-body max-w-3xl text-sm text-academic ${className}`}>
      <span className="font-semibold text-navy">About the labels.</span> <Status kind="development" /> is being built and still has to be verified
      for release. <Status kind="designed" /> is agreed product direction. <Status kind="planned" /> is a later step. They follow the TinyTutor
      platform blueprint; nothing here is presented as finished until it is.
    </p>
  );
}

/** Capabilities as an editorial list: title, what it means, and its status. */
export function CapabilityList({ ids, className = "" }: { ids: CapabilityId[]; className?: string }) {
  return (
    <ul className={`border-t border-line ${className}`}>
      {ids.map((id) => {
        const capability = CAPABILITIES[id];
        return (
          <li key={id} className="grid gap-2 border-b border-line py-6 sm:grid-cols-[minmax(0,1fr)_auto] sm:gap-8">
            <div>
              <h3 className="font-display text-lg leading-snug font-semibold text-navy">{capability.title}</h3>
              <p className="type-body mt-1 max-w-2xl text-academic">{capability.summary}</p>
            </div>
            <div className="sm:pt-1">
              <Status kind={capability.status} />
            </div>
          </li>
        );
      })}
    </ul>
  );
}

/** The opening of an audience page: one headline over the waves artwork, the two actions, and a
 *  diagram or editorial panel beside it. */
export function AudienceHero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  note,
  aside,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primary: Action;
  secondary: Action;
  note?: ReactNode;
  aside: ReactNode;
}) {
  return (
    <section aria-labelledby="page-title" className="waves-veil pt-32 pb-16 lg:pt-40 lg:pb-24">
      <Container className="grid items-end gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-14">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 id="page-title" className="mt-5 font-display text-[2.6rem] leading-[1.04] font-extrabold tracking-[-0.035em] text-navy [overflow-wrap:anywhere] sm:text-5xl lg:text-[4rem]">
            {title}
          </h1>
          <p className="type-lead mt-6 max-w-xl text-academic">{description}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={primary.href} className="h-[52px] px-7 text-base whitespace-nowrap">
              {primary.label} <ArrowRight />
            </ButtonLink>
            <ButtonLink href={secondary.href} variant="secondary" className="h-[52px] px-7 text-base whitespace-nowrap">
              {secondary.label}
            </ButtonLink>
          </div>
          {note && <div className="mt-5 text-sm text-academic">{note}</div>}
        </div>
        <div>{aside}</div>
      </Container>
    </section>
  );
}

/** A static explanatory panel for the hero: a short ordered idea, not a product screen. */
export function IdeaPanel({ label, items }: { label: string; items: { title: string; text: string }[] }) {
  return (
    <figure className="rounded-[1.75rem] border border-line bg-white p-6 shadow-lift sm:p-8">
      <figcaption className="type-label text-academic">{label}</figcaption>
      <ol className="mt-5 space-y-5">
        {items.map((item, i) => (
          <li key={item.title} className="grid grid-cols-[auto_minmax(0,1fr)] gap-4">
            <span aria-hidden className="flex h-8 w-8 items-center justify-center rounded-full bg-brand/10 font-display text-sm font-bold text-brand tabular-nums">
              {i + 1}
            </span>
            <div>
              <p className="font-display font-semibold text-navy">{item.title}</p>
              <p className="mt-0.5 text-[15px] leading-relaxed text-academic">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
    </figure>
  );
}

/** The closing conversion section: one headline, one action. */
export function ClosingCta({ title, action, note }: { title: string; action: Action; note?: ReactNode }) {
  return (
    <section aria-labelledby="closing-title" className="pt-10 pb-16 lg:pb-20">
      <Container>
        <div className="border-t border-line pt-14 lg:flex lg:items-end lg:justify-between lg:gap-16">
          <h2 id="closing-title" className="type-section max-w-[20ch] text-navy lg:text-[3rem] lg:leading-[1.08]">
            {title}
          </h2>
          <div className="mt-8 shrink-0 lg:mt-0 lg:text-right">
            <ButtonLink href={action.href} className="h-[52px] px-7 text-base whitespace-nowrap">
              {action.label} <ArrowRight />
            </ButtonLink>
            {note && <p className="mt-3 max-w-xs text-sm text-academic lg:ml-auto">{note}</p>}
          </div>
        </div>
      </Container>
    </section>
  );
}

/** The page frame shared by the audience pages: navigation, the hero over the artwork, then a
 *  white panel carrying the rest, closing into the footer (the same structure as the home page). */
export function AudiencePageFrame({ hero, children }: { hero: ReactNode; children: ReactNode }) {
  return (
    <>
      <a href="#main" className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-[60] focus-visible:rounded-lg focus-visible:bg-white focus-visible:px-4 focus-visible:py-2 focus-visible:font-semibold">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        {hero}
        <div className="takeover-panel">{children}</div>
      </main>
      {/* Stacked above the panel (z-index 1), so stationery floating above the footer's edge is never cut off by it. */}
      <div className="relative z-[2] -mt-1 bg-white">
        <CurvedFooter />
      </div>
    </>
  );
}
