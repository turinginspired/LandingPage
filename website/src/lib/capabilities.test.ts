import assert from "node:assert/strict";
import { test } from "node:test";

import { CAPABILITIES, STATUS_LABEL } from "./capabilities.ts";

test("no capability is presented as available: the product code is not verified here", () => {
  for (const [id, capability] of Object.entries(CAPABILITIES)) {
    assert.ok(capability.status in STATUS_LABEL, `${id} has a blueprint status`);
    assert.doesNotMatch(capability.summary, /\b(available now|live|shipping)\b/i, `${id} summary makes no availability claim`);
    assert.match(capability.source, /§\d/, `${id} cites its blueprint section`);
  }
});
