import type { CSSProperties } from "react";

import { Container } from "./ui";

// The platform promise from the TinyTutor blueprint (§1.4), revealed line by line.
const LINES = ["Learn anywhere.", "Teach with less effort.", "Understand progress."] as const;

/** The opening: the TinyTutor promise over the waves artwork. It stays pinned while the white
 *  panel that follows rises over it (see .takeover-hero). */
export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="takeover-hero waves-veil">
      <Container className="takeover-hero-content flex h-full flex-col justify-end pb-[max(3rem,8svh)]">
        <h1 id="hero-title" className="type-promise text-navy">
          {LINES.map((line, i) => (
            <span key={line} className="reveal-word">
              <span style={{ "--i": i } as CSSProperties} className={i === LINES.length - 1 ? "text-brand" : undefined}>
                {line}
              </span>
              {/* A real space, so the heading reads as one sentence to screen readers. */}
              {i < LINES.length - 1 && " "}
            </span>
          ))}
        </h1>
        <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
          <p className="type-lead hero-fade max-w-lg text-academic" style={{ "--d": "600ms" } as CSSProperties}>
            <strong className="font-semibold text-navy">Run education from one connected platform.</strong> TinyTutor connects learners,
            parents, teachers and schools around one learning record, and is designed to keep working offline.
          </p>
          <p aria-hidden className="hero-fade flex items-center gap-3 text-sm font-semibold text-academic" style={{ "--d": "900ms" } as CSSProperties}>
            Scroll
            <span className="scroll-cue" />
          </p>
        </div>
      </Container>
    </section>
  );
}
