/** Geometry of the curved footer landscape. The wave is drawn from these segments and every
 *  stationery image is placed with `curveY`, so objects rest on (or hover above) the real curve
 *  at every screen width. Coordinates are in the scene's viewBox units. */

/** The supplied illustrations, trimmed to their visible pixels (see public/images/tinytutor). */
export const STATIONERY = {
  openBook: { src: "/images/tinytutor/open-book.png", width: 900, height: 526 },
  stackedBooks: { src: "/images/tinytutor/stacked-books.png", width: 484, height: 414 },
  pen: { src: "/images/tinytutor/pen.png", width: 726, height: 178 },
  graduationCap: { src: "/images/tinytutor/graduation-cap.png", width: 514, height: 340 },
  paperPlane: { src: "/images/tinytutor/paper-plane.png", width: 842, height: 518 },
  mathsNotebook: { src: "/images/tinytutor/maths-notebook.png", width: 808, height: 739 },
} as const;

export type StationeryKind = keyof typeof STATIONERY;

/** One cubic Bézier segment: control 1, control 2, end point. */
export type Segment = readonly [number, number, number, number, number, number];

export type SceneObject = {
  kind: StationeryKind;
  /** Horizontal centre of the object. */
  x: number;
  /** Gap between the object's bottom edge and the curve; negative values rest on (sink into) it. */
  lift: number;
  width: number;
  /** Resting rotation, and how far it sways around it, in degrees. */
  rotate: number;
  wobble: number;
  /** Float height in px, cycle length in s, and phase offset in s. */
  amp: number;
  duration: number;
  delay: number;
  /** 0 (far) … 1 (near): scales pointer parallax and the strength of its shadows. */
  depth: number;
  /** Seconds after the footer appears before this object settles into place. */
  enter: number;
  drift?: boolean;
  /** Only shown on large screens, to keep the tablet composition uncluttered. */
  largeOnly?: boolean;
};

export type Scene = {
  width: number;
  height: number;
  start: readonly [number, number];
  segments: readonly Segment[];
  objects: readonly SceneObject[];
};

/** Where an object's box sits in the scene, in scene units. */
export function objectBox(scene: Scene, object: SceneObject) {
  const art = STATIONERY[object.kind];
  const height = (object.width * art.height) / art.width;
  const bottom = curveY(scene, object.x) - object.lift;
  return { left: object.x - object.width / 2, top: bottom - height, width: object.width, height, bottom };
}

export const edgePath = (scene: Scene) => `M${scene.start.join(" ")} ${scene.segments.map((s) => `C${s.join(" ")}`).join(" ")}`;

export const wavePath = (scene: Scene) => `${edgePath(scene)} L${scene.width} ${scene.height} L0 ${scene.height} Z`;

const bezier = (a: number, b: number, c: number, d: number, t: number) =>
  (1 - t) ** 3 * a + 3 * (1 - t) ** 2 * t * b + 3 * (1 - t) * t ** 2 * c + t ** 3 * d;

/** Height of the curve's top edge at `x`. */
export function curveY(scene: Scene, x: number): number {
  let [x0, y0] = scene.start;
  for (const [c1x, c1y, c2x, c2y, x3, y3] of scene.segments) {
    if (x <= x3) {
      // x(t) rises monotonically within a segment, so bisect for t.
      let low = 0;
      let high = 1;
      for (let i = 0; i < 40; i++) {
        const mid = (low + high) / 2;
        if (bezier(x0, c1x, c2x, x3, mid) < x) low = mid;
        else high = mid;
      }
      return bezier(y0, c1y, c2y, y3, (low + high) / 2);
    }
    [x0, y0] = [x3, y3];
  }
  return y0;
}

/** Angle of the surface at `x`, in degrees, for laying shadows along the slope. */
export const slopeAngle = (scene: Scene, x: number) =>
  (Math.atan2(curveY(scene, x + 2) - curveY(scene, x - 2), 4) * 180) / Math.PI;

// --- Compositions ---------------------------------------------------------------------------

/** Desktop and tablet: a low left shoulder, a deep off-centre bowl, a higher right shoulder. */
export const desktopScene: Scene = {
  width: 1440,
  height: 420,
  start: [0, 150],
  segments: [
    [110, 140, 200, 150, 300, 215],
    [400, 280, 520, 380, 720, 384],
    [900, 388, 980, 300, 1080, 262],
    [1180, 226, 1230, 140, 1330, 124],
    [1380, 116, 1420, 118, 1440, 120],
  ],
  objects: [
    { kind: "mathsNotebook", x: 150, lift: -16, width: 132, rotate: -9, wobble: 0.8, amp: 3, duration: 9, delay: -3, depth: 0.7, enter: 0.2, largeOnly: true },
    { kind: "paperPlane", x: 296, lift: 124, width: 138, rotate: -6, wobble: 3, amp: 9, duration: 11, delay: -6, depth: 0.45, enter: 0.35, drift: true, largeOnly: true },
    { kind: "openBook", x: 520, lift: 58, width: 330, rotate: -3, wobble: 1.2, amp: 10, duration: 9.5, delay: -2, depth: 1, enter: 0.05 },
    { kind: "pen", x: 806, lift: 205, width: 196, rotate: -22, wobble: 3, amp: 8, duration: 7.5, delay: -4, depth: 0.55, enter: 0.25 },
    { kind: "stackedBooks", x: 1000, lift: -12, width: 168, rotate: 4, wobble: 0.6, amp: 3, duration: 10, delay: -7, depth: 0.85, enter: 0.15 },
    { kind: "graduationCap", x: 1262, lift: 34, width: 168, rotate: 8, wobble: 3, amp: 9, duration: 8.5, delay: -1, depth: 0.7, enter: 0.3 },
  ],
};

/** Phones: a single bowl and the three most recognisable objects, not a shrunken desktop scene. */
export const mobileScene: Scene = {
  width: 400,
  height: 240,
  start: [0, 100],
  segments: [
    [80, 96, 120, 200, 220, 206],
    [300, 212, 340, 120, 400, 96],
  ],
  objects: [
    { kind: "pen", x: 54, lift: 56, width: 96, rotate: -22, wobble: 3, amp: 5, duration: 7.5, delay: -4, depth: 0.5, enter: 0.2 },
    { kind: "openBook", x: 196, lift: 40, width: 176, rotate: -3, wobble: 1.2, amp: 7, duration: 9.5, delay: -2, depth: 1, enter: 0.05 },
    { kind: "graduationCap", x: 348, lift: 22, width: 90, rotate: 8, wobble: 3, amp: 6, duration: 8.5, delay: -1, depth: 0.7, enter: 0.3 },
  ],
};
