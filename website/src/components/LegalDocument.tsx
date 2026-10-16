import Link from "next/link";
import type { ReactNode } from "react";

import { LEGAL_DATES, LEGAL_PAGES, LEGAL_STATUS, mailto, OPERATOR, telHref } from "@/lib/legal";

import { CurvedFooter } from "./CurvedFooter";
import { Navbar } from "./Navbar";
import { Container } from "./ui";

export type LegalSection = { id: string; title: string; body: ReactNode };

/** Body text styling for legal prose, applied once on the article rather than per element. */
const prose =
  "type-body text-academic [&_a]:font-semibold [&_a]:text-brand [&_a]:underline-offset-2 [&_a:hover]:underline " +
  "[&_h3]:mt-6 [&_h3]:font-display [&_h3]:text-[17px] [&_h3]:font-bold [&_h3]:text-navy " +
  "[&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1 [&_ol>li]:list-decimal [&_p+p]:mt-3 [&_p+ul]:mt-3 [&_ul+p]:mt-3 " +
  "[&_strong]:font-semibold [&_strong]:text-navy [&_ul]:space-y-2";

function Contents({ sections }: { sections: LegalSection[] }) {
  return (
    <ol className="space-y-0.5 text-[15px]">
      {sections.map((section, i) => (
        <li key={section.id}>
          <a
            href={`#${section.id}`}
            className="flex gap-2 rounded-lg px-2 py-1.5 leading-snug text-academic transition-colors hover:bg-ice hover:text-brand"
          >
            <span className="w-5 shrink-0 text-right tabular-nums text-academic/60">{i + 1}.</span>
            <span>{section.title}</span>
          </a>
        </li>
      ))}
    </ol>
  );
}

/** A legal or trust document: one calm, solid reading sheet with a table of contents
 *  (sticky beside the text on desktop, collapsible above it on phones), the document's
 *  status and dates, numbered sections, and a way to contact Turins. Prints cleanly. */
export function LegalDocument({ title, intro, sections, current }: { title: string; intro: ReactNode; sections: LegalSection[]; current?: string }) {
  const others = LEGAL_PAGES.filter((page) => page.href !== current);

  return (
    <>
      <div className="print:hidden">
        <Navbar />
      </div>
      <main id="main" className="legal-doc pt-28 pb-20 lg:pt-32 print:p-0">
        <Container className="print:max-w-none print:px-0">
          <div className="rounded-[2rem] border border-line bg-white px-5 py-10 shadow-soft sm:px-10 lg:px-14 lg:py-14 print:border-0 print:p-0 print:shadow-none">
            <header className="max-w-3xl">
              <nav aria-label="Breadcrumb" className="text-sm print:hidden">
                <Link href="/legal" className="font-semibold text-brand hover:underline">
                  Legal Center
                </Link>
                {current && <span className="text-academic/70"> / {title}</span>}
              </nav>
              <h1 className="type-section mt-4 text-navy">{title}</h1>
              <div className="type-lead mt-4 text-academic">{intro}</div>
              <p className="mt-5 text-sm text-academic">
                Last updated <strong className="font-semibold text-navy">{LEGAL_DATES.updated}</strong>
                <span aria-hidden> · </span>
                Effective {LEGAL_DATES.effective ? <strong className="font-semibold text-navy">{LEGAL_DATES.effective}</strong> : "on publication"}
              </p>
              {LEGAL_STATUS === "draft" && (
                <p role="note" className="mt-4 rounded-xl border border-line bg-ice px-4 py-3 text-sm text-academic">
                  <strong className="font-semibold text-navy">Draft for legal review.</strong> This document describes how TinyTutor works today. It will
                  be reviewed by a qualified lawyer before it is formally adopted, and the effective date will be set then.
                </p>
              )}
            </header>

            <div className="mt-10 grid gap-10 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-14">
              <aside className="print:hidden">
                {/* Phones and tablets: a compact navigator above the text. */}
                <details className="group rounded-2xl border border-line lg:hidden">
                  <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between px-4 font-display text-[15px] font-semibold text-navy">
                    On this page
                    <svg aria-hidden viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="m5 8 5 5 5-5" />
                    </svg>
                  </summary>
                  <nav aria-label="On this page" className="border-t border-line px-2 py-2">
                    <Contents sections={sections} />
                  </nav>
                </details>
                {/* Desktop: contents stay beside the text while reading. */}
                <nav aria-label="On this page" className="sticky top-28 hidden max-h-[calc(100vh-8rem)] overflow-y-auto [scrollbar-width:thin] lg:block">
                  <p className="type-label px-2 text-academic">On this page</p>
                  <div className="mt-3">
                    <Contents sections={sections} />
                  </div>
                </nav>
              </aside>

              <article className={`min-w-0 max-w-[68ch] ${prose}`}>
                {sections.map((section, i) => (
                  <section key={section.id} id={section.id} aria-labelledby={`${section.id}-title`} className="border-t border-line py-8 first:border-t-0 first:pt-0">
                    <h2 id={`${section.id}-title`} className="type-card text-navy">
                      <span className="mr-2 tabular-nums text-academic/60">{i + 1}.</span>
                      {section.title}
                    </h2>
                    <div className="mt-3">{section.body}</div>
                  </section>
                ))}

                <section aria-labelledby="questions-title" className="mt-4 rounded-2xl border border-line bg-ice p-6">
                  <h2 id="questions-title" className="type-card text-navy">
                    Questions or requests
                  </h2>
                  <p className="mt-2">
                    Write to <a href={mailto(`${title}: question`)}>{OPERATOR.email}</a> or call <a href={telHref}>{OPERATOR.phone}</a>. This address is
                    also the contact {OPERATOR.name} lists for grievances.
                  </p>
                </section>
              </article>
            </div>
          </div>

          <nav aria-label="Other legal documents" className="mt-10 print:hidden">
            <h2 className="type-label text-navy">More from the Legal Center</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {others.map((page) => (
                <li key={page.href}>
                  <Link href={page.href} className="glass-pill inline-flex min-h-11 items-center rounded-full px-4 font-display text-[15px] font-semibold whitespace-nowrap text-navy hover:text-brand">
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </main>
      <div className="print:hidden">
        <CurvedFooter />
      </div>
    </>
  );
}
