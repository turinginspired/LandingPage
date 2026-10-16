import type { Metadata } from "next";
import Link from "next/link";

import { Logo } from "@/components/Logo";
import { ArrowRight, ButtonLink } from "@/components/ui";
import { TURINS } from "@/lib/links";

export const metadata: Metadata = {
  title: "Sign in · TinyTutor",
  description: "This website has no accounts. TinyTutor accounts belong to the TinyTutor app, which is in development.",
  alternates: { canonical: "/sign-in" },
  robots: { index: false, follow: true },
};

/** An honest placeholder: this marketing website has no accounts; TinyTutor accounts belong to the app. */
export default function SignIn() {
  return (
    <main className="flex min-h-screen items-center justify-center px-5 py-16">
      <div className="glass-card w-full max-w-md rounded-[2rem] p-8 text-center sm:p-10">
        <Link href="/" aria-label="TinyTutor home" className="inline-block rounded-lg">
          <Logo size={40} />
        </Link>
        <h1 className="type-section mt-8 text-navy">Sign in</h1>
        <p className="type-lead mt-3 text-academic">
          There is nothing to sign in to on this website. TinyTutor accounts belong to the TinyTutor app, which is in development.
        </p>
        <div className="mt-8 grid gap-3">
          <ButtonLink href={TURINS.product}>
            Explore TinyTutor <ArrowRight />
          </ButtonLink>
          <ButtonLink href="/" variant="secondary">
            Back to home
          </ButtonLink>
        </div>
      </div>
    </main>
  );
}
