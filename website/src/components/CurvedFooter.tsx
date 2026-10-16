"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { desktopScene, mobileScene, type Scene } from "@/lib/footerScene";
import { OPERATOR, mailto, telHref } from "@/lib/legal";
import { TURINS } from "@/lib/links";

import { FloatingStationery } from "./FloatingStationery";
import { FooterNavigation } from "./FooterNavigation";
import { FooterWave } from "./FooterWave";
import { Logo } from "./Logo";
import { Container } from "./ui";

// The small print row: the documents people look for most, then the rest of the site map.
const BOTTOM_LINKS = [
  { href: "/legal/privacy-policy", label: "Privacy" },
  { href: "/legal/terms-of-service", label: "Terms" },
  { href: "/legal/cookies", label: "Cookies" },
  { href: "/legal", label: "Legal Center" },
  { href: "/accessibility", label: "Accessibility" },
  { href: "/sitemap", label: "Sitemap" },
];

/** The decorative landscape: purely visual, hidden from screen readers and from the pointer,
 *  and stacked above nothing interactive (the footer links sit below it, not under it). It
 *  overlaps the navy body by 4px, so scaled displays never show a hairline of page between them. */
function Landscape({ scene, className }: { scene: Scene; className: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none relative -mb-1 w-full ${className}`}
      style={{ aspectRatio: `${scene.width} / ${scene.height}` }}
    >
      <FooterWave scene={scene} />
      {scene.objects.map((object) => (
        <FloatingStationery key={object.kind} scene={scene} object={object} mobile={scene === mobileScene} />
      ))}
    </div>
  );
}

/** The white page flows into a navy landscape, with the stationery floating along its curve. */
export function CurvedFooter() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const footer = ref.current;
    if (!footer) return;

    // Objects settle in the first time the footer appears, and only animate while it is on screen.
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) footer.dataset.shown = "";
      if (entry.isIntersecting) footer.dataset.active = "";
      else delete footer.dataset.active;
    });
    observer.observe(footer);

    // Gentle pointer parallax on desktop, at most once per frame.
    const fine = window.matchMedia("(pointer: fine) and (prefers-reduced-motion: no-preference)");
    let frame = 0;
    const move = (event: PointerEvent) => {
      if (!fine.matches || frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        footer.style.setProperty("--mx", ((event.clientX / window.innerWidth) * 2 - 1).toFixed(3));
        footer.style.setProperty("--my", ((event.clientY / window.innerHeight) * 2 - 1).toFixed(3));
      });
    };
    const leave = () => {
      footer.style.setProperty("--mx", "0");
      footer.style.setProperty("--my", "0");
    };
    footer.addEventListener("pointermove", move);
    footer.addEventListener("pointerleave", leave);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      footer.removeEventListener("pointermove", move);
      footer.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <footer ref={ref} className="curved-footer relative overflow-x-clip">
      <Landscape scene={desktopScene} className="hidden md:block" />
      <Landscape scene={mobileScene} className="md:hidden" />

      <div className="bg-navy text-white">
        <Container>
          <div className="grid gap-12 pt-4 pb-12 md:grid-cols-[1.2fr_2fr] lg:pb-16">
            <div>
              <Link href="/#home" aria-label="TinyTutor home" className="inline-block rounded-lg">
                <Logo tone="light" size={40} />
              </Link>
              <p className="type-body mt-4 max-w-xs text-white/75">Learn anywhere. Teach with less effort. Understand progress.</p>
              <p className="mt-6 text-sm text-white/60">
                <span className="type-label text-sky">Launch focus</span>
                <span className="mt-2 block text-white/80">Curriculum-linked Mathematics and Science</span>
              </p>
              <a href={TURINS.product} className="mt-3 inline-flex items-center gap-1.5 py-1.5 font-display text-[15px] font-semibold text-white hover:text-sky">
                TinyTutor on turins.in <span aria-hidden>↗</span>
              </a>
              <address className="mt-6 text-sm not-italic text-white/60">
                <span className="type-label text-sky">Contact</span>
                <a href={mailto("TinyTutor")} className="mt-2 block py-1 text-white/80 hover:text-white">
                  {OPERATOR.email}
                </a>
                <a href={telHref} className="block py-1 text-white/80 hover:text-white">
                  {OPERATOR.phone}
                </a>
              </address>
            </div>
            <FooterNavigation />
          </div>
          {/* Legal line: copyright, the small print pages, and a way back up. */}
          <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} {OPERATOR.name}. TinyTutor is a {OPERATOR.name} product.
            </p>
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-1">
              {BOTTOM_LINKS.map((page) => (
                <li key={page.href}>
                  <a href={page.href} className="inline-block py-2 whitespace-nowrap hover:text-white">
                    {page.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#" className="inline-flex items-center gap-1.5 py-2 hover:text-white">
                  Back to top <span aria-hidden>↑</span>
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  );
}
