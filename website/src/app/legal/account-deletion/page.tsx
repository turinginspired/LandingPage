import type { Metadata } from "next";
import Link from "next/link";

import { LegalDocument, type LegalSection } from "@/components/LegalDocument";
import { mailto, OPERATOR, telHref } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Account and Data Deletion · TinyTutor",
  description: "The TinyTutor website has no accounts. How to make a privacy or deletion request about anything you have sent us.",
  alternates: { canonical: "/legal/account-deletion" },
};

// A prefilled email, so a request reaches the right place with the details needed to act on it.
// There is no form: nothing on this site can store a request or claim it has been completed.
const REQUEST_BODY = `Hello Turins,

I would like to make a privacy request about TinyTutor.

Type of request (access / correction / deletion / copy of my information / other):

The email address or phone number my request relates to:

Details:

`;

const sections: LegalSection[] = [
  {
    id: "no-accounts",
    title: "There are no accounts to delete",
    body: (
      <p>
        The TinyTutor website has no accounts, so there is no profile, password or learning history stored about you here. Accounts belong to the
        TinyTutor app, which is in development.
      </p>
    ),
  },
  {
    id: "browser-data",
    title: "Clearing data on your device",
    body: (
      <p>
        Your browser may keep ordinary cached copies of the website&rsquo;s files, which contain nothing about you. To remove them, clear this
        site&rsquo;s data in your browser settings, as described in our <Link href="/legal/cookies#your-controls">Cookie Policy</Link>.
      </p>
    ),
  },
  {
    id: "make-a-request",
    title: "Making a privacy or deletion request",
    body: (
      <>
        <p>
          The only personal information we can hold is correspondence you have sent us. To ask us to delete it, give you a copy, or correct it, send us
          a request:
        </p>
        <p className="!mt-5">
          <a
            href={mailto("Privacy request: TinyTutor", REQUEST_BODY)}
            className="btn-primary !inline-flex min-h-12 items-center rounded-full px-6 font-display text-[15px] font-semibold !text-white !no-underline"
          >
            Email a privacy request
          </a>
        </p>
        <p>
          This opens your email app with a short template addressed to <strong>{OPERATOR.email}</strong>. If it does not open, copy the address and
          write to us directly, or call <a href={telHref}>{OPERATOR.phone}</a>.
        </p>
      </>
    ),
  },
  {
    id: "what-happens-next",
    title: "What happens next",
    body: (
      <ol className="space-y-2">
        <li>We confirm we have received your request.</li>
        <li>We may ask you to confirm that the email address or phone number is yours, so we only act for the right person.</li>
        <li>We search our correspondence for that address or number and carry out your request.</li>
        <li>We tell you what we did. If something cannot be deleted, for example because the law requires us to keep it, we explain why.</li>
      </ol>
    ),
  },
  {
    id: "honest-limits",
    title: "What we can and cannot do",
    body: (
      <ul>
        <li>Requests are handled by a person, not automatically. Nothing is deleted until we have confirmed and done it.</li>
        <li>
          We cannot delete records kept by other services you used to contact us, such as your own email provider, or the technical logs kept by our
          hosting provider for their standard period.
        </li>
      </ul>
    ),
  },
  {
    id: "future-accounts",
    title: "When accounts arrive",
    body: (
      <p>
        When TinyTutor introduces accounts, this page will explain how to delete one, what happens to related records (such as a school&rsquo;s
        records about a learner), and how long removal takes. Account holders will be able to request deletion from within the product.
      </p>
    ),
  },
];

export default function AccountDeletion() {
  return (
    <LegalDocument
      current="/legal/account-deletion"
      title="Account and Data Deletion"
      intro="The TinyTutor website has no accounts, so there is nothing stored about you here to delete. If you have contacted us, here is how to ask for your information to be removed."
      sections={sections}
    />
  );
}
