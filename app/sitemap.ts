import type { MetadataRoute } from "next";
import { site } from "./lib/site";
import { work } from "./lib/work";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/work", "/approach", "/writing", "/speaking", "/about", "/resume", "/research"].map(
    (path) => ({
      url: `${site.url}${path || "/"}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.7,
    })
  );
  const cases = work.map((w) => ({
    url: `${site.url}/work/${w.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [...pages, ...cases];
}
