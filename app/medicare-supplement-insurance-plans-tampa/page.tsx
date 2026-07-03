import type { Metadata } from "next";
import MedicareSupplementInsurancePlansTampaClient from "./MedicareSupplementInsurancePlansTampaClient";

export const metadata: Metadata = {
  title: "Medicare Supplement Insurance Plans in Tampa, FL | Medicare Information Pro",
  description: "Compare Medicare Supplement (Medigap) insurance plans in Tampa, FL. Licensed specialists help you find the best Plan G, Plan N, or other Medigap plan for your needs.",
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-supplement-insurance-plans-tampa",
  },
  openGraph: {
    title: "Medicare Supplement Insurance Plans in Tampa, FL | Medicare Information Pro",
    description: "Compare Medicare Supplement (Medigap) insurance plans in Tampa, FL. Licensed specialists help you find the best Plan G, Plan N, or other Medigap plan for your needs.",
    url: "https://medicareinfopro.com/medicare-supplement-insurance-plans-tampa",
    siteName: "Medicare Information Pro",
    type: "website",
  },
};

export default function Page() {
  return <MedicareSupplementInsurancePlansTampaClient />;
}
