import Image from "next/image";
import type { CSSProperties } from "react";

import { objectBox, STATIONERY, type Scene, type SceneObject } from "@/lib/footerScene";

const pct = (value: number, of: number) => `${(value / of) * 100}%`;

/** One supplied illustration, placed on the scene's curve. Three nested layers so the
 *  entrance, pointer parallax and idle float animate independently with CSS transforms. */
export function FloatingStationery({ scene, object, mobile }: { scene: Scene; object: SceneObject; mobile: boolean }) {
  const box = objectBox(scene, object);
  const art = STATIONERY[object.kind];
  // Rendered width as a share of the viewport, so the browser fetches a fitting size.
  const share = Math.ceil((object.width / scene.width) * 100);
  // Its own shadow: a tight contact edge, then a cast shadow falling right and down from a
  // top-left light. The higher the object floats, the further, softer and fainter the cast.
  const h = Math.min(1, Math.max(object.lift, 0) / 200);
  const shadow =
    `drop-shadow(1px 2px 1.5px color-mix(in srgb, var(--color-shadow) 35%, transparent)) ` +
    `drop-shadow(${(5 + 9 * h).toFixed(1)}px ${(9 + 15 * h).toFixed(1)}px ${(7 + 11 * h).toFixed(1)}px color-mix(in srgb, var(--color-shadow) ${Math.round(34 - 10 * h)}%, transparent))`;

  return (
    <div
      className={`fl-object ${object.largeOnly ? "hidden lg:block" : ""}`}
      style={
        {
          left: pct(box.left, scene.width),
          top: pct(box.top, scene.height),
          width: pct(box.width, scene.width),
          "--enter": `${object.enter}s`,
          "--depth": object.depth,
        } as CSSProperties
      }
    >
      <div className="fl-parallax">
        <div
          className="fl-float"
          data-drift={object.drift || undefined}
          style={
            {
              "--rot": `${object.rotate}deg`,
              "--wob": `${object.wobble}deg`,
              "--amp": `${object.amp}px`,
              "--dur": `${object.duration}s`,
              "--delay": `${object.delay}s`,
            } as CSSProperties
          }
        >
          <Image
            src={art.src}
            alt=""
            width={art.width}
            height={art.height}
            sizes={mobile ? `${share}vw` : `(min-width: 1440px) ${Math.round((object.width * 1440) / scene.width)}px, ${share}vw`}
            draggable={false}
            className="block h-auto w-full select-none"
            style={{ filter: shadow }}
          />
        </div>
      </div>
    </div>
  );
}
