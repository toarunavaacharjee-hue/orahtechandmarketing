import type { MetadataRoute } from "next";

import { BRAND, INDUSTRIES } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = `https://${BRAND.domain}`;
  const now = new Date();

  const industryPages = Object.keys(INDUSTRIES).map((slug) => ({
    url: `${base}/industries/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/industries`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/work`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/free-audit`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/terms`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    ...industryPages,
  ];
}

