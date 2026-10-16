import assert from "node:assert/strict";
import { existsSync } from "node:fs";
import { test } from "node:test";

import { SOLUTIONS } from "./links.ts";

test("every Solutions menu entry is a unique route with its own page", () => {
  const hrefs = SOLUTIONS.map((page) => page.href);
  assert.equal(new Set(hrefs).size, hrefs.length);
  for (const href of hrefs) assert.ok(existsSync(new URL(`../app${href}/page.tsx`, import.meta.url)), `missing page for ${href}`);
});
