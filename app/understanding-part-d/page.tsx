import type { Metadata } from "next";
import UnderstandingPartDClient from "./UnderstandingPartDClient";

export const metadata: Metadata = {
  title: "Understanding Medicare Part D: Prescription Drug Coverage | Medicare Information Pro",
  description:
    "Learn how Medicare Part D works in 2026: formulary tiers, the new $2,000 out-of-pocket cap, how to choose the right plan for your medications, Extra Help, and late enrollment penalties.",
  keywords: [
    "Medicare Part D",
    "prescription drug coverage",
    "Part D formulary tiers",
    "2026 Part D out-of-pocket cap",
    "Medicare drug plan",
    "Extra Help LIS",
    "Part D late enrollment penalty",
    "Medicare Prescription Payment Plan",
  ],
  openGraph: {
    title: "Understanding Medicare Part D: Prescription Drug Coverage",
    description:
      "How Part D works, formulary tiers, the $2,000 out-of-pocket cap, and how to choose the right drug plan for your medications in 2026.",
    url: "https://medicare-info-pro.vercel.app/understanding-part-d",
    type: "article",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/part-d-hero-JKNbAqW3EVLuYqrytoLudi.webp",
        width: 1200,
        height: 630,
        alt: "Understanding Medicare Part D prescription drug coverage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Understanding Medicare Part D: Prescription Drug Coverage",
    description:
      "How Part D works, formulary tiers, the $2,000 out-of-pocket cap, and how to choose the right drug plan for your medications in 2026.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/part-d-hero-JKNbAqW3EVLuYqrytoLudi.webp",
    ],
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/understanding-part-d",
  },
};

export default function UnderstandingPartDPage() {
  return <UnderstandingPartDClient />;
}
