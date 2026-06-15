import type { Metadata } from "next";
import MedicalEquipmentClient from "./MedicalEquipmentClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover Medical Equipment? | MedicareInfoPro",
  description:
    "Medicare Part B covers durable medical equipment including wheelchairs, walkers, CPAP machines, home oxygen, and hospital beds. Learn the requirements and your 2026 costs.",
  keywords: [
    "does Medicare cover medical equipment",
    "Medicare DME coverage",
    "Medicare wheelchair coverage",
    "Medicare CPAP coverage",
    "Medicare home oxygen",
    "Medicare durable medical equipment 2026",
    "Medicare DME Brandon FL",
    "Medicare medical equipment Tampa",
  ],
  openGraph: {
    title: "Does Medicare Cover Medical Equipment? | MedicareInfoPro",
    description:
      "Medicare covers wheelchairs, CPAP machines, home oxygen, hospital beds, and other DME when medically necessary. Learn what you pay in 2026 and how Medigap reduces your costs.",
    url: "https://medicare-info-pro.vercel.app/coverage/medical-equipment",
    siteName: "MedicareInfoPro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Medical Equipment?",
    description:
      "Medicare covers DME including wheelchairs, CPAP, home oxygen, and prosthetics. See 2026 costs and how to avoid paying more than you should.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/coverage/medical-equipment",
  },
};

export default function MedicalEquipmentPage() {
  return <MedicalEquipmentClient />;
}
