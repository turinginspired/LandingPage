import type { Metadata, Viewport } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { SITE_URL } from "@/lib/links";

import "./globals.css";

// Headings, navigation and buttons.
const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
});

// Body text, descriptions, forms and interface labels.
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "TinyTutor · Learn anywhere. Teach with less effort.",
  description:
    "TinyTutor is an offline-first learning and education platform from Turins, connecting learners, parents, teachers and schools around one learner identity, one curriculum and one record of learning.",
  applicationName: "TinyTutor",
  // Only what is true of every page; each page's own title and description are used for previews.
  openGraph: {
    siteName: "TinyTutor",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#111B34",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} ${dmSans.variable}`}>
      <head>
        {/* Lets the scroll-reveal styles hide content only when JavaScript can show it again. */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body className="font-sans text-navy antialiased">{children}</body>
    </html>
  );
}
