import { LEGAL_PAGES } from "./legal.ts";

/** The site's public address, for the XML sitemap and robots.txt. Set NEXT_PUBLIC_SITE_URL when deploying. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");

// Section links start with "/" so they also work from the other pages.
export const NAV_LINKS = [
  { href: "/#home", label: "Home" },
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#faq", label: "FAQ" },
] as const;

/** The audience pages behind the navbar's Solutions menu. */
export const SOLUTIONS = [
  { href: "/for-students", label: "For Students", text: "Learn anywhere. Understand more.", icon: "student" },
  { href: "/for-teachers", label: "For Teachers", text: "Teach with less effort. Spend more time on learning.", icon: "teacher" },
  { href: "/for-schools", label: "For Schools", text: "One connected platform for your whole school.", icon: "school" },
] as const;

/** Turins' own pages, the real next steps for visitors (each checked live on 15 October 2026). */
export const TURINS = {
  /** The TinyTutor product page on the company site. */
  product: "https://www.turins.in/products/tinytutor",
  /** General contact: walkthroughs, partnerships, support. */
  contact: "https://www.turins.in/contact",
  /** The schools enquiry form. */
  schools: "https://www.turins.in/contact/schools",
} as const;

/** Standalone pages, besides the home page: the Legal Center and its documents, then the rest. */
export const PAGES = [
  ...SOLUTIONS.map((page) => ({ href: page.href, label: page.label })),
  { href: "/legal", label: "Legal Center" },
  ...LEGAL_PAGES.map((page) => ({ href: page.href, label: page.title })),
  { href: "/accessibility", label: "Accessibility" },
  { href: "/sitemap", label: "Sitemap" },
  { href: "/sign-in", label: "Sign In" },
];
