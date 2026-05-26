import type { Metadata } from "next";
import MedicarePartBClient from "./MedicarePartBClient";

export const metadata: Metadata = {
  title: "Medicare Part B: Medical Insurance Explained | Medicare Information Pro",
  description:
    "Medicare Part B covers doctor visits, outpatient care, preventive services, and durable medical equipment. The 2025 standard premium is $185/month. Learn what is covered, costs, IRMAA, and enrollment rules.",
  keywords: [
    "medicare part b",
    "medicare part b coverage",
    "medicare medical insurance",
    "medicare part b premium 2025",
    "medicare part b deductible 2025",
    "medicare part b coinsurance",
    "medicare IRMAA",
    "what does medicare part b cover",
    "medicare outpatient coverage",
    "medicare preventive services",
    "medicare part b enrollment",
    "medicare part b late penalty",
  ],
  openGraph: {
    title: "Medicare Part B: Medical Insurance Explained",
    description:
      "Medicare Part B covers doctor visits, outpatient care, preventive services, and durable medical equipment. 2025 premium is $185/month. Learn costs, IRMAA, and enrollment rules.",
    url: "https://medicare-info-pro.vercel.app/medicare-part-b",
    siteName: "Medicare Information Pro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Part B: Medical Insurance Explained",
    description:
      "What does Medicare Part B cover? Doctor visits, outpatient care, preventive services, and DME. 2025 premium is $185/month with 20% coinsurance and no out-of-pocket cap.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/medicare-part-b",
  },
};

export default function MedicarePartBPage() {
  return <MedicarePartBClient />;
}
