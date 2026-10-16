import type { ReactNode } from "react";

import { CurvedFooter } from "./CurvedFooter";
import { Navbar } from "./Navbar";
import { Container, Eyebrow } from "./ui";

/** Layout for the plain-text pages (privacy, accessibility, sitemap): the site's navigation and
 *  footer around a readable column. */
export function InfoPage({ eyebrow, title, intro, updated, children }: { eyebrow: string; title: string; intro: string; updated?: string; children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-32 pb-24 lg:pt-40">
        <Container>
          <article className="mx-auto max-w-3xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="type-section mt-4 text-navy">{title}</h1>
            <p className="type-lead mt-4 text-academic">{intro}</p>
            {updated && <p className="mt-3 text-sm text-academic/80">Last updated {updated}</p>}
            <div className="mt-12 space-y-10">{children}</div>
          </article>
        </Container>
      </main>
      <CurvedFooter />
    </>
  );
}

export function InfoSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="glass-card rounded-[1.5rem] p-6 sm:p-8">
      <h2 className="type-card text-navy">{title}</h2>
      <div className="type-body mt-3 space-y-3 text-academic [&_a]:font-semibold [&_a]:text-brand [&_a:hover]:underline [&_li]:ml-5 [&_li]:list-disc [&_ul]:space-y-2">
        {children}
      </div>
    </section>
  );
}
