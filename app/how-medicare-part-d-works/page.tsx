import type { Metadata } from "next";
import HowPartDWorksClient from "./HowPartDWorksClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "How Medicare Part D Works | Medicare Information Project",
  description:
    "Learn how Medicare Part D prescription drug coverage works: premiums, deductibles, tiers, the coverage gap, and how to choose the right plan. Free guidance from licensed agents.",
  keywords: [
    "how Medicare Part D works",
    "Medicare Part D explained",
    "Medicare prescription drug coverage",
    "Medicare Part D donut hole",
    "Medicare Part D tiers",
    "Medicare Part D enrollment",
    "Medicare Information Project",
  ],
  openGraph: {
    title: "How Medicare Part D Works",
    description:
      "A complete guide to Medicare Part D: what it covers, how costs work, the coverage gap, drug tiers, and how to pick the right plan.",
    url: "https://medicare-info-pro.vercel.app/how-medicare-part-d-works",
    type: "website",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/how-medicare-part-d-works",
  },
};

export default function HowPartDWorksPage() {
  return <HowPartDWorksClient />;
}
