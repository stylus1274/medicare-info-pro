import type { Metadata } from "next";
import MedicareAdvantagePlansClermontClient from "./MedicareAdvantagePlansClermontClient";

export const metadata: Metadata = {
  title: "Medicare Advantage Plans in Clermont FL | Compare 2026 Plans",
  description: "Compare Medicare Advantage plans in Clermont, FL. Independent agents serving South Lake County help you find the best $0 premium plans with dental, vision, and drug coverage. Free, no-obligation consultation.",
  keywords: [
    "medicare advantage plans clermont fl",
    "medicare advantage clermont florida",
    "best medicare advantage plan clermont",
    "medicare advantage plans lake county",
    "medicare advantage clermont 2026",
    "compare medicare advantage clermont fl",
    "medicare advantage agent clermont",
    "south lake county medicare advantage",
  ],
  openGraph: {
    title: "Medicare Advantage Plans in Clermont FL | Compare 2026 Plans",
    description: "Compare Medicare Advantage plans in Clermont, FL. Independent agents serving South Lake County help you find the best $0 premium plans with dental, vision, and drug coverage. Free, no-obligation consultation.",
    url: "https://medicareinfopro.com/medicare-advantage-plans-clermont-florida/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-advantage-plans-clermont-florida/",
  },
};

export default function Page() {
  return <MedicareAdvantagePlansClermontClient />;
}
