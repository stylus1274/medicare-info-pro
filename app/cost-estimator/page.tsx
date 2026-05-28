import type { Metadata } from "next";
import CostEstimatorClient from "./CostEstimatorClient";

export const metadata: Metadata = {
  title: "Medicare Cost Estimator 2026 | MedicareInfoPro",
  description:
    "Estimate your annual Medicare costs for 2026. Compare Original Medicare, Medigap Plan G, and Medicare Advantage costs based on your income, plan type, and expected healthcare use.",
  keywords: [
    "Medicare cost estimator",
    "Medicare cost calculator 2026",
    "how much does Medicare cost",
    "Medicare annual cost estimate",
    "Medicare Advantage cost calculator",
    "Medigap cost calculator",
    "Medicare Part B premium 2026",
    "Medicare costs Brandon FL",
  ],
  openGraph: {
    title: "Medicare Cost Estimator 2026 | MedicareInfoPro",
    description:
      "Interactive tool to estimate your annual Medicare costs based on plan type, income, and healthcare use. Uses 2026 Medicare benchmarks.",
    url: "https://medicare-info-pro.vercel.app/cost-estimator",
    siteName: "MedicareInfoPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Cost Estimator 2026",
    description:
      "Estimate your annual Medicare costs for Original Medicare, Medigap, or Medicare Advantage using 2026 figures.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/cost-estimator",
  },
};

export default function CostEstimatorPage() {
  return <CostEstimatorClient />;
}
