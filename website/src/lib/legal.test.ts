import assert from "node:assert/strict";
import { test } from "node:test";

import { LEGAL_DATES, LEGAL_PAGES, LEGAL_STATUS, mailto, OPERATOR, telHref } from "./legal.ts";

test("every legal page has a unique route under /legal/", () => {
  const hrefs = LEGAL_PAGES.map((page) => page.href);
  assert.equal(new Set(hrefs).size, hrefs.length);
  for (const href of hrefs) assert.match(href, /^\/legal\/[a-z-]+$/);
});

test("contact details are well formed", () => {
  assert.match(OPERATOR.email, /^[^\s@]+@[^\s@]+\.[a-z]+$/);
  assert.equal(telHref, "tel:+919390144374");
  assert.equal(mailto("Privacy request: access"), `mailto:${OPERATOR.email}?subject=Privacy%20request%3A%20access`);
});

test("a published policy must carry an effective date", () => {
  if (LEGAL_STATUS === "published") assert.ok(LEGAL_DATES.effective, "set LEGAL_DATES.effective when publishing");
});
