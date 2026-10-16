"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";

import { SOLUTIONS } from "@/lib/links";

import { Icon } from "./ui";

function Chevron({ open }: { open: boolean }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={`h-4 w-4 transition-transform duration-200 ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m5 8 5 5 5-5" />
    </svg>
  );
}

/** Desktop "Solutions" menu: opens on click; Escape, an outside click, choosing a page or the
 *  bar changing shape closes it. Arrow keys move between the three destinations. */
export function SolutionsMenu({ floating }: { floating: boolean }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  // The bar morphing between full width and capsule moves the anchor: close rather than float loose.
  useEffect(() => setOpen(false), [floating]);

  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", outside);
    return () => document.removeEventListener("pointerdown", outside);
  }, [open]);

  const items = () => [...(root.current?.querySelectorAll<HTMLAnchorElement>("[data-solution]") ?? [])];

  const onKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" && open) {
      setOpen(false);
      button.current?.focus();
      return;
    }
    if (event.key !== "ArrowDown" && event.key !== "ArrowUp") return;
    event.preventDefault();
    if (!open) setOpen(true);
    // Wait for the panel to render when opening from the button.
    requestAnimationFrame(() => {
      const links = items();
      const at = links.indexOf(document.activeElement as HTMLAnchorElement);
      const next = event.key === "ArrowDown" ? (at + 1) % links.length : (at <= 0 ? links.length : at) - 1;
      links[next]?.focus();
    });
  };

  return (
    <div ref={root} className="relative" onKeyDown={onKeyDown}>
      <button
        ref={button}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className="nav-link flex items-center gap-1 rounded-full py-2 text-[15px] font-medium text-navy/80 hover:bg-brand/[0.07] hover:text-brand aria-expanded:text-brand"
      >
        Solutions
        <Chevron open={open} />
      </button>
      <div
        id={panelId}
        hidden={!open}
        className="absolute top-full left-1/2 z-10 mt-3 w-[min(23rem,calc(100vw-2rem))] -translate-x-1/2 rounded-3xl border border-line bg-white p-2 shadow-lift"
      >
        <ul>
          {SOLUTIONS.map((page) => (
            <li key={page.href}>
              <Link
                href={page.href}
                data-solution
                onClick={() => setOpen(false)}
                className="flex min-h-16 items-start gap-3.5 rounded-2xl px-3.5 py-3 transition-colors hover:bg-ice focus-visible:bg-ice"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                  <Icon name={page.icon} className="h-5 w-5" />
                </span>
                <span>
                  <span className="block font-display text-[15px] font-semibold text-navy">{page.label}</span>
                  <span className="mt-0.5 block font-sans text-sm leading-snug text-academic">{page.text}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** The same destinations inside the mobile menu, as a tap-to-open group. */
export function SolutionsMobile({ onNavigate }: { onNavigate: () => void }) {
  const [open, setOpen] = useState(false);
  const listId = useId();
  return (
    <li>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={listId}
        onClick={() => setOpen((value) => !value)}
        className="flex min-h-12 w-full items-center justify-between rounded-2xl px-4 text-base font-medium text-navy hover:bg-white/70"
      >
        Solutions
        <Chevron open={open} />
      </button>
      <ul id={listId} hidden={!open} className="pb-1 pl-2">
        {SOLUTIONS.map((page) => (
          <li key={page.href}>
            <Link href={page.href} onClick={onNavigate} className="flex min-h-12 items-center gap-3 rounded-2xl px-4 py-2 hover:bg-white/70">
              <Icon name={page.icon} className="h-5 w-5 shrink-0 text-brand" />
              <span>
                <span className="block font-display text-[15px] font-semibold text-navy">{page.label}</span>
                <span className="block text-sm leading-snug text-academic">{page.text}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
}
