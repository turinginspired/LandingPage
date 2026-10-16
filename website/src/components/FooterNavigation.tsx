import { LEGAL_PAGES } from "@/lib/legal";
import { SOLUTIONS, TURINS } from "@/lib/links";

// Only destinations that exist. The legal column is driven by the Legal Center's own list.
const columns = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/#home" },
      { label: "Why TinyTutor", href: "/#about" },
      { label: "Principles", href: "/#principles" },
      { label: "Features", href: "/#features" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Who It's For", href: "/#who-its-for" },
    ],
  },
  {
    title: "Solutions",
    links: [
      ...SOLUTIONS.map((page) => ({ label: page.label, href: page.href })),
      { label: "FAQ", href: "/#faq" },
      { label: "Talk to Turins", href: TURINS.contact },
      { label: "Sign In", href: "/sign-in" },
    ],
  },
  {
    title: "Legal",
    links: [{ label: "Legal Center", href: "/legal" }, ...LEGAL_PAGES.map((page) => ({ label: page.short, href: page.href }))],
  },
];

export function FooterNavigation() {
  return (
    <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3">
      {columns.map((column) => (
        <nav key={column.title} aria-label={column.title}>
          <h2 className="type-label text-sky">{column.title}</h2>
          <ul className="mt-3 space-y-1">
            {column.links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="type-body inline-block py-1.5 whitespace-nowrap text-white/80 transition-colors hover:text-white">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </div>
  );
}
