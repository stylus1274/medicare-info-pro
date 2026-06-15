import type { Metadata } from "next";
import PlanComparisonClient from "./PlanComparisonClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Plan Comparison Tool | MedicareInfoPro",
  description:
    "Compare Original Medicare, Medicare Advantage HMO, Medicare Advantage PPO, and Medigap Plan G side by side. Interactive 2026 plan comparison tool for Medicare beneficiaries.",
  keywords: [
    "Medicare plan comparison",
    "compare Medicare plans",
    "Original Medicare vs Medicare Advantage",
    "Medicare Advantage vs Medigap",
    "Medicare plan comparison tool",
    "Medicare HMO vs PPO",
    "Medicare 2026 comparison",
  ],
  openGraph: {
    title: "Medicare Plan Comparison Tool | MedicareInfoPro",
    description:
      "Compare Original Medicare, Medicare Advantage, and Medigap plans side by side with our interactive 2026 comparison tool.",
    url: "https://medicare-info-pro.vercel.app/plan-comparison",
    siteName: "MedicareInfoPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Plan Comparison Tool",
    description:
      "Interactive side-by-side comparison of Original Medicare, Medicare Advantage HMO, PPO, and Medigap Plan G for 2026.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/plan-comparison",
  },
};

export default function PlanComparisonPage() {
  return <PlanComparisonClient />;
}
