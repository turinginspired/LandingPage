import { useId, type CSSProperties } from "react";

import { curveY, edgePath, slopeAngle, wavePath, type Scene, type SceneObject } from "@/lib/footerScene";

const pct = (value: number, of: number) => `${(value / of) * 100}%`;

/** A soft ellipse lying on the navy surface, along its slope. Light comes from the top left,
 *  so shadows fall to the right; the higher the object floats, the further, wider and fainter
 *  its shadow. It breathes with the object's bob: smaller and lighter as the object rises. */
function GroundShadow({ scene, object, x, y, rx, ry, opacity, bob }: { scene: Scene; object: SceneObject; x: number; y: number; rx: number; ry: number; opacity: number; bob: boolean }) {
  return (
    <div
      className={`fl-ground ${bob ? "fl-ground-bob" : ""} ${object.largeOnly ? "hidden lg:block" : ""}`}
      style={
        {
          left: pct(x - rx, scene.width),
          top: pct(y - ry, scene.height),
          width: pct(rx * 2, scene.width),
          height: pct(ry * 2, scene.height),
          "--slope": `${slopeAngle(scene, x)}deg`,
          "--o": opacity,
          "--dur": `${object.duration}s`,
          "--delay": `${object.delay}s`,
          "--enter": `${object.enter}s`,
        } as CSSProperties
      }
    />
  );
}

/** The footer's curved top edge, and the ground shadows of the floating stationery, masked to
 *  the navy surface so a shadow never spills onto the white page above the curve. */
export function FooterWave({ scene }: { scene: Scene }) {
  // Plain characters only, so the id is safe inside url(#…).
  const id = `wave${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  const path = wavePath(scene);
  const mask = `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${scene.width} ${scene.height}' preserveAspectRatio='none'><path d='${path}'/></svg>`,
  )}")`;

  return (
    <>
      <svg aria-hidden viewBox={`0 0 ${scene.width} ${scene.height}`} className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
        <defs>
          <clipPath id={`${id}clip`}>
            <path d={path} />
          </clipPath>
          <filter id={`${id}soft`} x="-5%" y="-50%" width="110%" height="200%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
          {/* The glow fades out before the bottom of the scene, so it melts into the footer body
              instead of ending in a straight line where the scene meets it. */}
          <linearGradient id={`${id}fade`} gradientUnits="userSpaceOnUse" x1="0" y1={scene.height - 110} x2="0" y2={scene.height - 6}>
            <stop offset="0" stopColor="var(--color-white)" />
            <stop offset="1" stopColor="var(--color-white)" stopOpacity="0" />
          </linearGradient>
          <mask id={`${id}fadeMask`} maskUnits="userSpaceOnUse" x="0" y="0" width={scene.width} height={scene.height}>
            <rect width={scene.width} height={scene.height} fill={`url(#${id}fade)`} />
          </mask>
        </defs>
        <path d={path} fill="var(--color-navy)" />
        {/* Light catching the top of the hill: a soft Academic Blue band inside the edge, so the
            dark ground shadows have a lit surface to fall on. */}
        <g clipPath={`url(#${id}clip)`} mask={`url(#${id}fadeMask)`}>
          <path d={edgePath(scene)} stroke="var(--color-academic)" strokeWidth="64" fill="none" filter={`url(#${id}soft)`} />
        </g>
        <path d={edgePath(scene)} stroke="var(--color-brand)" strokeOpacity="0.45" strokeWidth="1.5" vectorEffect="non-scaling-stroke" fill="none" />
      </svg>

      <div className="absolute inset-0" style={{ maskImage: mask, WebkitMaskImage: mask, maskSize: "100% 100%", WebkitMaskSize: "100% 100%" }}>
        {scene.objects.map((object) => {
          const lift = Math.max(object.lift, 0);
          const x = object.x + object.width * 0.06 + lift * 0.3;
          const rx = object.width * (0.4 + lift / 800);
          const ry = Math.max(8, rx * 0.15);
          const y = curveY(scene, x) + ry + 4;
          const opacity = Math.min(0.9, Math.max(0.4, 0.9 - lift / 450));
          return (
            <div key={object.kind}>
              <GroundShadow scene={scene} object={object} x={x} y={y} rx={rx} ry={ry} opacity={opacity} bob />
              {object.lift <= 0 && (
                // Resting objects also press a tight, dark contact shadow into the surface.
                <GroundShadow scene={scene} object={object} x={object.x + 4} y={curveY(scene, object.x) + 4} rx={object.width * 0.44} ry={7} opacity={0.95} bob={false} />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
