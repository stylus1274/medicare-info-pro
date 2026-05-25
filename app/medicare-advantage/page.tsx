import type { Metadata } from "next";
import MedicareAdvantagePillarClient from "./MedicareAdvantagePillarClient";

export const metadata: Metadata = {
  title: "Medicare Advantage (Part C): The Complete Guide | Medicare Information Project",
  description:
    "Everything you need to know about Medicare Advantage plans. Learn how they work, the four plan types (HMO, PPO, SNP, PFFS), costs, pros and cons, and how to enroll.",
  keywords: [
    "Medicare Advantage guide",
    "Medicare Part C",
    "Medicare Advantage plans",
    "HMO PPO Medicare",
    "Medicare Advantage vs Original Medicare",
    "Medicare Advantage enrollment",
    "Medicare Advantage costs 2025",
    "Medicare Advantage Florida",
  ],
  openGraph: {
    title: "Medicare Advantage (Part C): The Complete Guide",
    description:
      "Everything you need to know about Medicare Advantage plans, including how they work, plan types, costs, and enrollment periods.",
    url: "https://medicare-info-pro.vercel.app/medicare-advantage",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Medicare Advantage plan comparison and guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Advantage (Part C): The Complete Guide",
    description:
      "Everything you need to know about Medicare Advantage plans, including how they work, plan types, costs, and enrollment periods.",
    images: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/medicare-advantage",
  },
};

export default function MedicareAdvantagePage() {
  return <MedicareAdvantagePillarClient />;
}
