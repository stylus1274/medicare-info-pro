import type { Metadata } from "next";
import PhysicalTherapyClient from "./PhysicalTherapyClient";

export const metadata: Metadata = {
  title: "Does Medicare Cover Physical Therapy? | MedicareInfoPro",
  description:
    "Medicare covers medically necessary physical therapy with no annual visit cap. Learn what you pay in 2026, how skilled nursing facility PT works, and how Medigap reduces your costs.",
  keywords: [
    "does Medicare cover physical therapy",
    "Medicare physical therapy coverage",
    "Medicare PT visits 2026",
    "Medicare occupational therapy",
    "Medicare physical therapy Brandon FL",
    "Medicare physical therapy Tampa",
    "Medicare skilled nursing physical therapy",
  ],
  openGraph: {
    title: "Does Medicare Cover Physical Therapy? | MedicareInfoPro",
    description:
      "Medicare Part B covers outpatient physical therapy with no annual cap. Learn what you pay in 2026 and how a Medigap plan can eliminate the 20% coinsurance.",
    url: "https://medicare-info-pro.vercel.app/coverage/physical-therapy",
    siteName: "MedicareInfoPro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Physical Therapy?",
    description:
      "Medicare covers PT with no annual visit cap. See 2026 costs, SNF coverage rules, and how Medigap can save you thousands per year.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/coverage/physical-therapy",
  },
};

export default function PhysicalTherapyPage() {
  return <PhysicalTherapyClient />;
}
