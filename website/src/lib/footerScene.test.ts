import assert from "node:assert/strict";
import { test } from "node:test";

import { curveY, desktopScene, mobileScene, objectBox, slopeAngle, wavePath, type Scene } from "./footerScene.ts";

for (const [name, scene] of [["desktop", desktopScene], ["mobile", mobileScene]] as [string, Scene][]) {
  test(`${name}: the curve meets its segment end points and spans the full width`, () => {
    assert.ok(Math.abs(curveY(scene, 0) - scene.start[1]) < 0.01);
    for (const segment of scene.segments) assert.ok(Math.abs(curveY(scene, segment[4]) - segment[5]) < 0.01);
    assert.equal(scene.segments.at(-1)![4], scene.width);
    assert.match(wavePath(scene), new RegExp(`L${scene.width} ${scene.height} L0 ${scene.height} Z$`));
  });

  test(`${name}: high at the edges, a broad valley in the middle`, () => {
    const edges = Math.max(curveY(scene, 0), curveY(scene, scene.width));
    const middle = curveY(scene, scene.width * 0.55);
    assert.ok(middle > edges + 60, `valley ${middle} should sit well below the edges ${edges}`);
  });

  test(`${name}: every object stays inside the scene and above the footer body`, () => {
    for (const object of scene.objects) {
      const box = objectBox(scene, object);
      assert.ok(box.top >= 0 && box.bottom < scene.height, `${object.kind} at x=${object.x} fits vertically`);
      assert.ok(box.left >= -8 && box.left + box.width <= scene.width + 8, `${object.kind} fits horizontally`);
    }
  });
}

test("slopes point the right way: down into the valley, up out of it", () => {
  assert.ok(slopeAngle(desktopScene, 400) > 0);
  assert.ok(slopeAngle(desktopScene, 1150) < 0);
});
