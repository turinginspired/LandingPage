"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";

import { NAV_LINKS, TURINS } from "@/lib/links";

import { SolutionsMenu, SolutionsMobile } from "./SolutionsMenu";
import { ArrowRight, ButtonLink } from "./ui";

// At the top of the page the bar is full width; past FLOAT_AFTER it contracts into a floating
// glass capsule (see .nav-bar). It only expands again below EXPAND_BELOW, so hovering around
// a single threshold never makes it flicker.
const FLOAT_AFTER = 64;
const EXPAND_BELOW = 24;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [floating, setFloating] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      setFloating((was) => (was ? y > EXPAND_BELOW : y > FLOAT_AFTER));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  // Escape closes the mobile menu and hands focus back to its button.
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="nav-bar flex items-center justify-between gap-3" data-floating={floating || undefined}>
        {/* The logo tile stays; the wordmark beside it folds away as the bar becomes a capsule. */}
        <Link href="/#home" aria-label="TinyTutor home" className="nav-logo flex shrink-0 items-center rounded-full" onClick={close}>
          <Image src="/tinytutor.jpeg" alt="" width={40} height={40} priority className="nav-icon rounded-[28%]" />
          <span aria-hidden className="nav-wordmark font-display text-[1.4rem] font-extrabold tracking-[-0.04em] text-navy lowercase">
            tiny tutor
          </span>
        </Link>

        <nav aria-label="Main" className="hidden lg:block">
          <ul className="flex items-center">
            {NAV_LINKS.map((link) => (
              <Fragment key={link.href}>
                <li>
                  <a href={link.href} className="nav-link block rounded-full py-2 text-[15px] font-medium text-navy/80 hover:bg-brand/[0.07] hover:text-brand">
                    {link.label}
                  </a>
                </li>
                {/* The audience pages sit where "For Teachers" used to, after How It Works. */}
                {link.href === "/#how-it-works" && (
                  <li>
                    <SolutionsMenu floating={floating} />
                  </li>
                )}
              </Fragment>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          <Link
            href="/sign-in"
            className="nav-link hidden rounded-full py-2 font-display text-[15px] font-semibold text-navy hover:bg-brand/[0.07] hover:text-brand lg:block"
          >
            Sign In
          </Link>
          <ButtonLink href={TURINS.product} className="nav-cta h-11 px-5 text-[14px] sm:text-[15px]">
            Get Started <ArrowRight className="hidden sm:block" />
          </ButtonLink>
          <button
            ref={toggle}
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full text-navy transition-colors hover:bg-brand/[0.07] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      <div id="mobile-menu" hidden={!open} className="glass-card mx-3 rounded-3xl p-3 sm:mx-auto sm:max-w-md lg:hidden" style={{ marginTop: floating ? 24 : 8 }}>
        <nav aria-label="Mobile">
          <ul>
            {NAV_LINKS.map((link) => (
              <Fragment key={link.href}>
                <li>
                  <a href={link.href} onClick={close} className="flex min-h-12 items-center rounded-2xl px-4 text-base font-medium text-navy hover:bg-white/70">
                    {link.label}
                  </a>
                </li>
                {link.href === "/#how-it-works" && <SolutionsMobile onNavigate={close} />}
              </Fragment>
            ))}
          </ul>
        </nav>
        <div className="mt-2 border-t border-line pt-3">
          <ButtonLink href="/sign-in" variant="secondary" onClick={close} className="w-full">
            Sign In
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
