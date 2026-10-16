import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";


export function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

/** The small spaced capitals above a heading. */
export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <p
      className={`type-label flex items-center gap-2 ${
        tone === "dark" ? "text-sky" : "text-academic"
      }`}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-sky" />
      {children}
    </p>
  );
}

export function SectionHeading({ title, description, id, className = "" }: { title: ReactNode; description?: ReactNode; id?: string; className?: string }) {
  return (
    <div className={`max-w-2xl ${className}`}>
      <h2 id={id} className="type-section text-navy">
        {title}
      </h2>
      {description && <p className="type-lead mt-4 text-academic">{description}</p>}
    </div>
  );
}

type Variant = "primary" | "secondary";

// Buttons sit on plates and cards, so they are solid, not glass: Bright Learning Blue for the
// main action, white with a hairline for the secondary one.
const variants: Record<Variant, string> = {
  primary: "btn-primary",
  secondary: "border border-line bg-white text-navy transition-colors hover:border-brand hover:text-brand",
};

/** A link styled as a button. Every one of these goes somewhere real. */
export function ButtonLink({ variant = "primary", className = "", children, href = "#", ...props }: ComponentProps<"a"> & { variant?: Variant }) {
  const classes = `group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 font-display text-[15px] font-semibold ${variants[variant]} ${className}`;
  // Pages of this site navigate client-side; anchors, email and external sites are plain links.
  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props} className={classes}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} {...props} className={classes}>
      {children}
    </a>
  );
}

export function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 20" className={`h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 ${className}`}>
      <path d="M4 10h11M11 5l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Simple 24px line icons in the brand's blue. */
export function Icon({ name, className = "" }: { name: "eye" | "hand" | "sprout" | "check" | "teacher" | "student" | "school"; className?: string }) {
  const paths: Record<typeof name, ReactNode> = {
    eye: (
      <>
        <path d="M2.5 12s3.5-6.5 9.5-6.5S21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
    hand: (
      <>
        <path d="M8 13V5.5a1.5 1.5 0 0 1 3 0V11" />
        <path d="M11 10V4.5a1.5 1.5 0 0 1 3 0V11" />
        <path d="M14 10.5V6a1.5 1.5 0 0 1 3 0v7.5c0 4-2.5 6.5-6 6.5-2.6 0-4.2-1.3-5.4-3.4L4 13.6a1.5 1.5 0 0 1 2.6-1.5L8 14" />
      </>
    ),
    sprout: (
      <>
        <path d="M12 21v-8" />
        <path d="M12 13c0-4 3-6.5 7-6.5 0 4-3 6.5-7 6.5Z" />
        <path d="M12 15c0-3-2.4-5-5.5-5C6.5 13 9 15 12 15Z" />
      </>
    ),
    check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
    // A board with a pointer: teaching.
    teacher: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="1.5" />
        <path d="M8 20l2-4M16 20l-2-4M7 9h6M7 12h4" />
      </>
    ),
    // An open book: learning.
    student: (
      <>
        <path d="M12 6.5C10.3 5 7.8 4.5 4 4.8v13.4c3.8-.3 6.3.2 8 1.7 1.7-1.5 4.2-2 8-1.7V4.8c-3.8-.3-6.3.2-8 1.7Z" />
        <path d="M12 6.5v13.4" />
      </>
    ),
    // A school building: institutions and communities.
    school: (
      <>
        <path d="M3 10.5 12 5l9 5.5" />
        <path d="M5 10v9h14v-9M10 19v-4.5h4V19M9 12h.01M15 12h.01" />
      </>
    ),
  };
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={`h-6 w-6 ${className}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  );
}
