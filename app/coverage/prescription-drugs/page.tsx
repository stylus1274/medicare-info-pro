import type { Metadata } from "next";
import PrescriptionDrugsClient from "./PrescriptionDrugsClient";

export const metadata: Metadata = {
  title: "Does Medicare Cover Prescription Drugs? | 2026 Guide | Medicare Information Pro",
  description:
    "Original Medicare does not cover most outpatient prescription drugs. Learn how Medicare Part D works, the 2026 out-of-pocket cap, drug tiers, and how to avoid the permanent late enrollment penalty.",
  keywords: [
    "does medicare cover prescription drugs",
    "medicare part d 2026",
    "medicare prescription drug coverage",
    "part d formulary",
    "medicare drug plan",
    "part d out of pocket cap 2026",
    "medicare part d deductible 2026",
    "medicare drug coverage brandon fl",
    "medicare prescription drugs hillsborough county",
    "part d late enrollment penalty",
    "medicare insulin coverage",
  ],
  openGraph: {
    title: "Does Medicare Cover Prescription Drugs? | 2026 Guide",
    description:
      "Original Medicare covers very few outpatient drugs. Part D fills the gap: but enrollment timing and plan selection matter. Learn how it works in 2026.",
    url: "https://medicare-info-pro.vercel.app/coverage/prescription-drugs",
    siteName: "Medicare Information Pro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Prescription Drugs? | 2026 Guide",
    description:
      "Original Medicare does not cover most outpatient drugs. Learn how Part D works, the $2,000 out-of-pocket cap, and how to avoid the permanent late enrollment penalty.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/coverage/prescription-drugs",
  },
};

export default function PrescriptionDrugsPage() {
  return <PrescriptionDrugsClient />;
}
