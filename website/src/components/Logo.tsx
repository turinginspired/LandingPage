import Image from "next/image";

/** The supplied knot logo (used as-is) followed by the "tiny tutor" wordmark. */
export function Logo({ tone = "dark", size = 36 }: { tone?: "dark" | "light"; size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <Image
        src="/tinytutor.jpeg"
        alt=""
        width={size}
        height={size}
        priority
        className={`rounded-[28%] ${tone === "light" ? "ring-1 ring-white/20" : ""}`}
      />
      <span
        className={`font-display text-[1.4rem] font-extrabold lowercase leading-none tracking-[-0.04em] ${tone === "light" ? "text-white" : "text-navy"}`}
      >
        tiny tutor
      </span>
    </span>
  );
}
