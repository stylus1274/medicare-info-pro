import type { Metadata } from "next";
import OriginalVsAdvantageClient from "./OriginalVsAdvantageClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Original Medicare vs. Medicare Advantage: Side-by-Side Comparison | Medicare Information Pro",
  description:
    "Compare Original Medicare and Medicare Advantage side by side - costs, doctor choice, drug coverage, extra benefits, and out-of-pocket caps. Take our 5-question quiz to find the right plan for you.",
  keywords: [
    "Original Medicare vs Medicare Advantage",
    "Medicare Advantage vs Original Medicare",
    "Medicare plan comparison",
    "should I choose Medicare Advantage",
    "Medicare Advantage pros and cons",
    "Original Medicare pros and cons",
    "Medicare plan differences",
    "Medicare Part C comparison",
  ],
  openGraph: {
    title: "Original Medicare vs. Medicare Advantage: Side-by-Side Comparison | Medicare Information Pro",
    description:
      "An honest, plain-English comparison of Original Medicare and Medicare Advantage - costs, doctor access, drug coverage, extra benefits, and a 5-question quiz to find your best fit.",
    url: "https://medicare-info-pro.vercel.app/original-vs-advantage",
    siteName: "Medicare Information Pro",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/original-vs-advantage-hero-F4ivFrcxPsEKvEjshicTLA.webp",
        width: 1200,
        height: 630,
        alt: "Older couple reviewing Medicare plan options together",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Original Medicare vs. Medicare Advantage | Medicare Information Pro",
    description:
      "Side-by-side comparison of Original Medicare and Medicare Advantage - costs, doctors, drug coverage, and a 5-question quiz to find your best fit.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/original-vs-advantage-hero-F4ivFrcxPsEKvEjshicTLA.webp",
    ],
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/original-vs-advantage",
  },
};

export default function OriginalVsAdvantagePage() {
  return <OriginalVsAdvantageClient />;
}
