import type { Metadata } from "next";
import MedicareAdvantagePlansOcalaClient from "./MedicareAdvantagePlansOcalaClient";

export const metadata: Metadata = {
  title: "Medicare Advantage Plans Ocala Florida | Compare 2026 Plans",
  description: "Compare Medicare Advantage plans in Ocala, FL. Independent agents serving Marion County, On Top of the World, Stone Creek, and surrounding areas. Free plan comparison, no obligation.",
  keywords: [
    "Medicare Advantage plans Ocala Florida",
    "Medicare Advantage Ocala FL",
    "Medicare plans Marion County",
    "Medicare Advantage On Top of the World",
    "Medicare plans Ocala 2026",
    "Medicare agent Ocala Florida",
  ],
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-advantage-plans-ocala-florida/",
  },
  openGraph: {
    title: "Medicare Advantage Plans Ocala Florida | Compare 2026 Plans",
    description: "Compare Medicare Advantage plans in Ocala, FL. Independent agents serving Marion County, On Top of the World, Stone Creek, and surrounding areas.",
    url: "https://medicareinfopro.com/medicare-advantage-plans-ocala-florida/",
    type: "website",
  },
};

export default function MedicareAdvantagePlansOcalaPage() {
  return <MedicareAdvantagePlansOcalaClient />;
}
