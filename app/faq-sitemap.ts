import type { MetadataRoute } from "next";

const BASE_URL = "https://medicareinfopro.com";

const FAQ_SLUGS = [
  "/faqs/medicare-and-cobra",
  "/faqs/medigap-guaranteed-issue-rights-florida",
  "/faqs/medicare-part-d-late-enrollment-penalty",
  "/faqs/medicare-part-b-giveback",
  "/faqs/medicare-advantage-open-enrollment",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  return FAQ_SLUGS.map((path) => ({
    url: `${BASE_URL}${path}/`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
}
