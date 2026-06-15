import type { Metadata } from "next";
import MedicareAdvantageFLClient from "./MedicareAdvantageFLClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Advantage Plans in Florida | Medicare Information Project",
  description:
    "Compare Medicare Advantage plans in Florida: HMO, PPO, PFFS, and Special Needs Plans. Understand eligibility, enrollment periods, and how to choose the right plan. Free guidance from licensed agents.",
  keywords: [
    "Medicare Advantage Florida",
    "Medicare Advantage plans Florida",
    "Medicare Part C Florida",
    "HMO Medicare Florida",
    "PPO Medicare Florida",
    "Special Needs Plans Florida",
    "Medicare Advantage enrollment Florida",
    "Medicare Information Project",
  ],
  openGraph: {
    title: "Medicare Advantage Plans in Florida",
    description:
      "Compare HMO, PPO, PFFS, and Special Needs Plans available in Florida. Free guidance from licensed Medicare agents.",
    url: "https://medicare-info-pro.vercel.app/medicare-advantage-florida",
    type: "website",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/medicare-advantage-florida",
  },
};

export default function MedicareAdvantageFLPage() {
  return <MedicareAdvantageFLClient />;
}
