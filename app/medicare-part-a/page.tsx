import type { Metadata } from "next";
import MedicarePartAClient from "./MedicarePartAClient";

export const metadata: Metadata = {
  title: "Medicare Part A: Hospital Insurance Explained | Medicare Information Pro",
  description:
    "Medicare Part A covers inpatient hospital stays, skilled nursing facility care, hospice, and home health services. Most people pay no premium. Learn what is covered, 2025 costs, and how to enroll.",
  keywords: [
    "medicare part a",
    "medicare part a coverage",
    "medicare hospital insurance",
    "medicare part a costs 2025",
    "medicare part a deductible 2025",
    "medicare part a eligibility",
    "medicare part a enrollment",
    "what does medicare part a cover",
    "medicare inpatient coverage",
    "medicare skilled nursing coverage",
  ],
  openGraph: {
    title: "Medicare Part A: Hospital Insurance Explained",
    description:
      "Medicare Part A covers inpatient hospital stays, skilled nursing facility care, hospice, and home health services. Most people pay no premium. Learn what is covered and 2025 costs.",
    url: "https://medicare-info-pro.vercel.app/medicare-part-a",
    siteName: "Medicare Information Pro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Part A: Hospital Insurance Explained",
    description:
      "What does Medicare Part A cover? Hospital stays, skilled nursing, hospice, and home health. Most people pay $0 premium. See 2025 costs and enrollment details.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/medicare-part-a",
  },
};

export default function MedicarePartAPage() {
  return <MedicarePartAClient />;
}
