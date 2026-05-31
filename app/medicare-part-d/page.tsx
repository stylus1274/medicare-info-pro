import type { Metadata } from "next";
import MedicarePartDClient from "./MedicarePartDClient";

export const metadata: Metadata = {
  title: "Medicare Part D — Prescription Drug Coverage | Medicare Information Project",
  description:
    "Everything you need to know about Medicare Part D in Florida: eligibility, costs, the Extra Help program, enrollment periods, and how to find the right plan for your medications.",
  keywords: [
    "Medicare Part D",
    "Medicare prescription drug coverage Florida",
    "Medicare Part D plans Hillsborough County",
    "Medicare Part D Extra Help",
    "Medicare Part D enrollment",
    "Medicare Part D costs 2025",
    "Medicare Information Project",
  ],
  openGraph: {
    title: "Medicare Part D — Prescription Drug Coverage",
    description:
      "Medicare Part D eligibility, costs, enrollment periods, the Extra Help program, and how to choose the right plan in Florida.",
    url: "https://medicare-info-pro.vercel.app/medicare-part-d",
    type: "website",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/medicare-part-d",
  },
};

export default function MedicarePartDPage() {
  return <MedicarePartDClient />;
}
