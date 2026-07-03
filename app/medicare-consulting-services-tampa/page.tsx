import type { Metadata } from "next";
import MedicareConsultingServicesTampaClient from "./MedicareConsultingServicesTampaClient";

export const metadata: Metadata = {
  title: "Medicare Consulting Services in Tampa, FL | Medicare Information Pro",
  description: "Licensed Medicare consultants in Tampa, FL helping seniors compare Medicare Advantage, Supplement, and Part D plans. Free Medicare consulting services available.",
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-consulting-services-tampa",
  },
  openGraph: {
    title: "Medicare Consulting Services in Tampa, FL | Medicare Information Pro",
    description: "Licensed Medicare consultants in Tampa, FL helping seniors compare Medicare Advantage, Supplement, and Part D plans. Free Medicare consulting services available.",
    url: "https://medicareinfopro.com/medicare-consulting-services-tampa",
    siteName: "Medicare Information Pro",
    type: "website",
  },
};

export default function Page() {
  return <MedicareConsultingServicesTampaClient />;
}
