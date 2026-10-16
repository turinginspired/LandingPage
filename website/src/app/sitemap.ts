import type { MetadataRoute } from "next";

import { PAGES, SITE_URL } from "@/lib/links";

// Pages kept out of search: the sign-in placeholder (noindex) has nothing to rank for.
const NOT_INDEXED = new Set(["/sign-in"]);

/** /sitemap.xml for search engines: canonical, public, indexable pages only. */
export default function sitemap(): MetadataRoute.Sitemap {
  return ["", ...PAGES.map((page) => page.href).filter((href) => !NOT_INDEXED.has(href))].map((path) => ({ url: `${SITE_URL}${path}` }));
}
