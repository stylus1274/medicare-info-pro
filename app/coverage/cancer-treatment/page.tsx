import type { Metadata } from "next";
import CancerTreatmentClient from "./CancerTreatmentClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover Cancer Treatment? | MedicareInfoPro",
  description:
    "Medicare covers chemotherapy, radiation, immunotherapy, surgery, and most cancer treatments. Learn what you pay in 2026 and how a Medigap plan can protect you from high out-of-pocket costs.",
  keywords: [
    "does Medicare cover cancer treatment",
    "Medicare chemotherapy coverage",
    "Medicare radiation therapy coverage",
    "Medicare immunotherapy coverage",
    "Medicare cancer 2026",
    "Medicare cancer treatment Brandon FL",
    "Medicare Moffitt Cancer Center",
    "Medicare cancer Tampa",
  ],
  openGraph: {
    title: "Does Medicare Cover Cancer Treatment? | MedicareInfoPro",
    description:
      "Medicare covers chemotherapy, radiation, immunotherapy, and surgery. Learn what you pay in 2026 and how Medigap can eliminate the 20% coinsurance on cancer treatment.",
    url: "https://medicare-info-pro.vercel.app/coverage/cancer-treatment",
    siteName: "MedicareInfoPro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Cancer Treatment?",
    description:
      "Medicare covers most cancer treatments. See 2026 costs, what Medigap covers, and how to access Moffitt Cancer Center with Original Medicare.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/coverage/cancer-treatment",
  },
};

export default function CancerTreatmentPage() {
  return <CancerTreatmentClient />;
}
