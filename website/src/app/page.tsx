import type { Metadata } from "next";

import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { CurvedFooter } from "@/components/CurvedFooter";
import { FinalCta } from "@/components/FinalCta";
import { Audiences } from "@/components/Audiences";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { Principles } from "@/components/Principles";
import { Story } from "@/components/Story";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    title: "TinyTutor · Learn anywhere. Teach with less effort.",
    description: "Learn anywhere. Teach with less effort. Understand progress. Run education from one connected platform.",
    url: "/",
  },
};

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:top-3 focus-visible:left-3 focus-visible:z-[60] focus-visible:rounded-lg focus-visible:bg-white focus-visible:px-4 focus-visible:py-2 focus-visible:font-semibold">
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        {/* The opening stays pinned; the white panel scrolls up over it and carries the story. */}
        <Hero />
        <div className="takeover-panel">
          <Story />
          <Principles />
          <Features />
          <HowItWorks />
          <Audiences />
          <Faq />
          <FinalCta />
        </div>
      </main>
      {/* Stacked above the panel (z-index 1), so stationery floating above the footer's edge is never cut off by it. */}
      <div className="relative z-[2] -mt-1 bg-white">
        <CurvedFooter />
      </div>
    </>
  );
}
