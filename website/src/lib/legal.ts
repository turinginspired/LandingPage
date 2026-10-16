/** Who runs TinyTutor and where people can reach them, for every legal page.
 *  Contact details are the ones Turins publishes on https://www.turins.in/ (checked 15 October 2026).
 *  Fields left null are not public yet: they must be confirmed by the owner, never guessed. */
export const OPERATOR = {
  name: "Turins",
  product: "TinyTutor",
  site: "https://www.turins.in",
  email: "turinginspired@gmail.com",
  phone: "+91 9390 144 374",
  /** Registered legal entity name, e.g. a private limited company. */
  legalEntity: null as string | null,
  /** Registered postal address. */
  address: null as string | null,
} as const;

/** "draft" until a qualified lawyer has reviewed the policies. Switch to "published" and set
 *  `effective` on the day they are adopted; every legal page reads these two values. */
export const LEGAL_STATUS: "draft" | "published" = "draft";

export const LEGAL_DATES = {
  updated: "15 October 2026",
  effective: null as string | null,
} as const;

/** Every legal and trust document, in the order the Legal Center lists them. */
export const LEGAL_PAGES = [
  {
    href: "/legal/privacy-policy",
    title: "Privacy Policy",
    short: "Privacy",
    summary: "What information the TinyTutor website handles (very little), who else is involved, and your choices.",
    audience: "Everyone",
  },
  {
    href: "/legal/terms-of-service",
    title: "Terms of Service",
    short: "Terms",
    summary: "The rules for using the TinyTutor website, for visitors, families and schools.",
    audience: "Everyone",
  },
  {
    href: "/legal/child-safety",
    title: "Child Safety Policy",
    short: "Child Safety",
    summary: "How TinyTutor is designed for young learners, and how to report a concern.",
    audience: "Families and schools",
  },
  {
    href: "/legal/responsible-ai",
    title: "Responsible AI Policy",
    short: "Responsible AI",
    summary: "How AI in TinyTutor is meant to help learners, and the rules it must follow before it is released.",
    audience: "Families and schools",
  },
  {
    href: "/legal/cookies",
    title: "Cookie Policy",
    short: "Cookies",
    summary: "No cookies, analytics or trackers, and what your browser may cache.",
    audience: "Everyone",
  },
  {
    href: "/legal/account-deletion",
    title: "Account and Data Deletion",
    short: "Account Deletion",
    summary: "This website has no accounts. How to make any privacy or data request.",
    audience: "Everyone",
  },
] as const;

export type LegalPage = (typeof LEGAL_PAGES)[number];

export const legalPage = (href: LegalPage["href"]) => LEGAL_PAGES.find((page) => page.href === href)!;

export const mailto = (subject: string, body = "") =>
  `mailto:${OPERATOR.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ""}`;

export const telHref = `tel:${OPERATOR.phone.replace(/\s/g, "")}`;
