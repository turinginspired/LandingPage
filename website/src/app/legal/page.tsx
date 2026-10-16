import type { Metadata } from "next";
import Link from "next/link";

import { CurvedFooter } from "@/components/CurvedFooter";
import { Navbar } from "@/components/Navbar";
import { ArrowRight, Container } from "@/components/ui";
import { LEGAL_DATES, LEGAL_PAGES, LEGAL_STATUS, mailto, OPERATOR, telHref } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Legal Center · TinyTutor",
  description: "Every TinyTutor policy in one place: privacy, terms, child safety, responsible AI, cookies and data deletion.",
  alternates: { canonical: "/legal" },
};

/** The index of TinyTutor's legal and trust documents. */
export default function LegalCenter() {
  return (
    <>
      <Navbar />
      <main id="main" className="pt-28 pb-20 lg:pt-32">
        <Container>
          <div className="rounded-[2rem] border border-line bg-white px-5 py-10 shadow-soft sm:px-10 lg:px-14 lg:py-14">
            <header className="max-w-3xl">
              <h1 className="type-section text-navy">Legal Center</h1>
              <p className="type-lead mt-4 text-academic">
                How TinyTutor treats your information, the rules for using it, and how we look after young learners. Each document says plainly what is
                true today, and what will change before new features arrive.
              </p>
              <p className="mt-5 text-sm text-academic">
                TinyTutor is operated by {OPERATOR.name}. Last updated {LEGAL_DATES.updated}.
                {LEGAL_STATUS === "draft" && " These documents are drafts awaiting review by a qualified lawyer."}
              </p>
            </header>

            <ul className="mt-10 border-t border-line">
              {LEGAL_PAGES.map((page) => (
                <li key={page.href} className="border-b border-line">
                  <Link
                    href={page.href}
                    className="group grid gap-1 rounded-xl px-2 py-5 transition-colors hover:bg-ice sm:grid-cols-[minmax(0,16rem)_minmax(0,1fr)_auto] sm:items-center sm:gap-6 sm:px-4"
                  >
                    <span className="font-display text-[19px] font-bold text-navy group-hover:text-brand">{page.title}</span>
                    <span className="type-body text-academic">
                      {page.summary} <span className="whitespace-nowrap text-sm text-academic/70">For: {page.audience.toLowerCase()}.</span>
                    </span>
                    <ArrowRight className="hidden text-brand transition-transform group-hover:translate-x-1 sm:block" />
                  </Link>
                </li>
              ))}
              <li className="border-b border-line">
                <Link
                  href="/accessibility"
                  className="group grid gap-1 rounded-xl px-2 py-5 transition-colors hover:bg-ice sm:grid-cols-[minmax(0,16rem)_minmax(0,1fr)_auto] sm:items-center sm:gap-6 sm:px-4"
                >
                  <span className="font-display text-[19px] font-bold text-navy group-hover:text-brand">Accessibility Statement</span>
                  <span className="type-body text-academic">What TinyTutor supports for keyboard, screen reader and reduced-motion use, and where it falls short.</span>
                  <ArrowRight className="hidden text-brand transition-transform group-hover:translate-x-1 sm:block" />
                </Link>
              </li>
            </ul>

            <div className="mt-12 grid gap-10 md:grid-cols-2">
              <section aria-labelledby="contact-title">
                <h2 id="contact-title" className="type-card text-navy">
                  Contact and grievances
                </h2>
                <p className="type-body mt-3 text-academic">
                  For privacy requests, complaints or questions about any of these documents, write to{" "}
                  <a href={mailto("Legal question")} className="font-semibold text-brand hover:underline">
                    {OPERATOR.email}
                  </a>{" "}
                  or call{" "}
                  <a href={telHref} className="font-semibold whitespace-nowrap text-brand hover:underline">
                    {OPERATOR.phone}
                  </a>
                  . {OPERATOR.name} lists this address as its grievance contact.
                </p>
              </section>
              <section aria-labelledby="schools-title">
                <h2 id="schools-title" className="type-card text-navy">
                  For schools
                </h2>
                <p className="type-body mt-3 text-academic">
                  Schools can use TinyTutor in class under the <Link href="/legal/terms-of-service" className="font-semibold text-brand hover:underline">Terms of Service</Link>. School accounts, a school agreement and a data processing agreement will be published before
                  any feature handles pupils&rsquo; information.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </main>
      <CurvedFooter />
    </>
  );
}
