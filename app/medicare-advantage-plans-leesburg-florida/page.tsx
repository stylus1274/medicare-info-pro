import type { Metadata } from "next";
import MedicareAdvantagePlansLeesburgClient from "./MedicareAdvantagePlansLeesburgClient";

export const metadata: Metadata = {
  title: "Medicare Advantage Plans Leesburg Florida | Compare 2026 Plans",
  description: "Compare Medicare Advantage plans in Leesburg, FL. Independent agents serving Lake County, Fruitland Park, Lady Lake, Tavares, and surrounding areas. Free plan comparison, no obligation.",
  keywords: [
    "Medicare Advantage plans Leesburg Florida",
    "Medicare Advantage Leesburg FL",
    "Medicare plans Lake County",
    "Medicare Advantage Fruitland Park Florida",
    "Medicare plans Leesburg 2026",
    "Medicare agent Leesburg Florida",
    "Lake County Medicare Advantage",
  ],
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-advantage-plans-leesburg-florida/",
  },
  openGraph: {
    title: "Medicare Advantage Plans Leesburg Florida | Compare 2026 Plans",
    description: "Compare Medicare Advantage plans in Leesburg, FL. Independent agents serving Lake County, Fruitland Park, Lady Lake, Tavares, and surrounding areas.",
    url: "https://medicareinfopro.com/medicare-advantage-plans-leesburg-florida/",
    type: "website",
  },
};

export default function MedicareAdvantagePlansLeesburgPage() {
  return <MedicareAdvantagePlansLeesburgClient />;
}
