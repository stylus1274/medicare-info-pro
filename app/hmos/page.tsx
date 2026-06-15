import type { Metadata } from "next";
import HMOPlansClient from "./HMOPlansClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Advantage HMO Plans Explained | 2026 | Medicare Information Pro",
  description:
    "Medicare Advantage HMO plans offer low or $0 premiums and extra benefits but require you to use a provider network and get referrals. Learn how HMO plans work, pros and cons, and whether one is right for you in 2026.",
  keywords: [
    "medicare HMO plan",
    "medicare advantage HMO",
    "HMO medicare plan explained",
    "medicare HMO vs PPO",
    "HMO medicare florida",
    "medicare HMO network",
    "medicare HMO referral",
    "best medicare HMO plans",
    "HMO medicare advantage 2026",
    "medicare HMO Brandon FL",
    "medicare HMO Hillsborough County",
  ],
  openGraph: {
    title: "Medicare Advantage HMO Plans Explained | 2026",
    description:
      "HMO plans offer low premiums and extra benefits but require network-based care and referrals. Learn how they work, pros and cons, and whether one is right for you in 2026.",
    url: "https://medicare-info-pro.vercel.app/hmos",
    siteName: "Medicare Information Pro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Advantage HMO Plans Explained | 2026",
    description:
      "Medicare HMO plans: low premiums, network-based care, referrals required. Learn how they work and whether one fits your situation in 2026.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/hmos",
  },
};

export default function HMOPlansPage() {
  return <HMOPlansClient />;
}
