import type { Metadata } from "next";
import MedicareInsuranceAgentTampaClient from "./MedicareInsuranceAgentTampaClient";

export const metadata: Metadata = {
  title: "Medicare Insurance Agent in Tampa, FL | Medicare Information Project",
  description: "Independent, licensed Medicare insurance agents serving Tampa, FL. We compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers. Free consultations — no cost, no pressure.",
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-insurance-agent-tampa-fl",
  },
  openGraph: {
    title: "Medicare Insurance Agent in Tampa, FL | Medicare Information Project",
    description: "Independent, licensed Medicare insurance agents serving Tampa, FL. We compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers. Free consultations — no cost, no pressure.",
    url: "https://medicareinfopro.com/medicare-insurance-agent-tampa-fl",
    type: "website",
  },
};

export default function MedicareInsuranceAgentTampaFL() {
  return <MedicareInsuranceAgentTampaClient />;
}
