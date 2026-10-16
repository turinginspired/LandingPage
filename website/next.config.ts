import type { NextConfig } from "next";

// Browser security headers for every response. A Content-Security-Policy is deliberately not set
// yet: the inline script in app/layout.tsx and the Flutter lessons (inline bootstrap, WebAssembly,
// CanvasKit from gstatic.com) need a nonce-based policy that must be tested before it ships.
const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
  // Only honoured over HTTPS, so it is harmless on localhost and takes effect once deployed.
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
];

if (process.env.NODE_ENV === "production" && !process.env.NEXT_PUBLIC_SITE_URL) {
  console.warn(
    "\n  WARNING: NEXT_PUBLIC_SITE_URL is not set. Canonical URLs, sitemap.xml and robots.txt will point at http://localhost:3000.\n" +
      "  Set it to the public address (for example https://tinytutor.example) before building for production.\n",
  );
}

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/privacy", destination: "/legal/privacy-policy", permanent: true },
      { source: "/for-stakeholders", destination: "/for-schools", permanent: true },
    ];
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
