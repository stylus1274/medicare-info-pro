import type { Metadata } from "next";
import HMOPlansClient from "./HMOPlansClient";

export const metadata: Metadata = {
  title: "Medicare Advantage HMO Plans Explained | Medicare Information Pro",
  description:
    "Medicare Advantage HMO plans offer low or $0 premiums and extra benefits but require you to use a provider network and get referrals. Learn how HMO plans work, pros and cons, and whether one is right for you.",
  keywords: [
    "medicare HMO plan",
    "medicare advantage HMO",
    "HMO medicare plan explained",
    "medicare HMO vs PPO",
    "HMO medicare florida",
    "medicare HMO network",
    "medicare HMO referral",
    "best medicare HMO plans",
    "HMO medicare advantage 2025",
  ],
  openGraph: {
    title: "Medicare Advantage HMO Plans Explained",
    description:
      "HMO plans offer low premiums and extra benefits but require network-based care and referrals. Learn how they work, pros and cons, and whether one is right for you.",
    url: "https://medicare-info-pro.vercel.app/plan-types/hmo",
    siteName: "Medicare Information Pro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Advantage HMO Plans Explained",
    description:
      "Medicare HMO plans: low premiums, network-based care, referrals required. Learn how they work and whether one fits your situation.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/plan-types/hmo",
  },
};

export default function HMOPlansPage() {
  return <HMOPlansClient />;
}
