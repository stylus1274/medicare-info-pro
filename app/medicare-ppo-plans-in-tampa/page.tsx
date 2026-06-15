import type { Metadata } from "next";
import PPOPlansClient from "./PPOPlansClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare PPO Plans in Tampa, FL | 2026 Guide | Medicare Information Pro",
  description:
    "Compare Medicare PPO plans available in Brandon, Tampa, and Hillsborough County for 2026. No referrals required. See any doctor, in or out of network. Free consultation with a licensed Medicare advisor.",
  keywords: [
    "Medicare PPO plans Tampa",
    "Medicare PPO plans Brandon FL",
    "Medicare Advantage PPO Tampa 2026",
    "PPO Medicare plans Hillsborough County",
    "Medicare PPO no referral Tampa",
    "best Medicare PPO plans Florida 2026",
  ],
  openGraph: {
    title: "Medicare PPO Plans in Tampa, FL | 2026 Guide",
    description:
      "Compare Medicare PPO plans in Brandon, Tampa, and Hillsborough County for 2026. No referrals required. Free consultation with a licensed Medicare advisor.",
    url: "https://medicare-info-pro.vercel.app/medicare-ppo-plans-in-tampa",
    siteName: "Medicare Information Pro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare PPO Plans in Tampa, FL | 2026 Guide",
    description:
      "Compare Medicare PPO plans in Brandon, Tampa, and Hillsborough County for 2026. No referrals required.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/medicare-ppo-plans-in-tampa",
  },
};

export default function PPOPlansPage() {
  return <PPOPlansClient />;
}
