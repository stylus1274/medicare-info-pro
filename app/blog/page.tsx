import type { Metadata } from "next";
import BlogClient from "./BlogClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Blog & Guides | Medicare Information Pro",
  description:
    "Expert Medicare guides, explainers, and tools written by licensed Medicare specialists. Covering enrollment, plan comparisons, costs, supplements, and Part D , updated for 2026.",
  keywords: [
    "Medicare blog",
    "Medicare guides 2026",
    "Medicare enrollment tips",
    "Medicare Advantage vs Original Medicare",
    "Medigap supplement guide",
    "Medicare Part D 2026",
    "Medicare costs explained",
    "Medicare insurance articles",
  ],
  openGraph: {
    title: "Medicare Blog & Guides | Medicare Information Pro",
    description:
      "Expert Medicare guides written by licensed specialists. Enrollment, plan comparisons, costs, supplements, and Part D , updated for 2026.",
    url: "https://medicareinfopro.com/blog",
    type: "website",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/working-past-65-hero-KNQjDiJCrME7N7PvAtH8Bp.webp",
        width: 1200,
        height: 630,
        alt: "Medicare Insights Blog  | Medicare Information Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Blog & Guides | Medicare Information Pro",
    description:
      "Expert Medicare guides written by licensed specialists. Enrollment, plan comparisons, costs, supplements, and Part D , updated for 2026.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/working-past-65-hero-KNQjDiJCrME7N7PvAtH8Bp.webp",
    ],
  },
  alternates: {
    canonical: "https://medicareinfopro.com/blog",
  },
};

export default function BlogPage() {
  return <BlogClient />;
}
