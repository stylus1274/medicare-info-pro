import type { Metadata } from "next";
import GuidesClient from "./GuidesClient";

export const metadata: Metadata = {
  title: "In-Depth Medicare Guides | MedicareInfoPro",
  description:
    "Comprehensive Medicare guides covering enrollment, plan comparison, costs, coverage, and more. Expert-written resources for Medicare beneficiaries in Brandon, FL and the Hillsborough County area.",
  keywords: [
    "Medicare guides",
    "Medicare in-depth guides",
    "Medicare resource library",
    "Medicare Part A guide",
    "Medicare Part B guide",
    "Medicare Advantage guide",
    "Medigap guide",
    "Medicare enrollment guide",
    "Medicare Brandon FL",
  ],
  openGraph: {
    title: "In-Depth Medicare Guides | MedicareInfoPro",
    description:
      "Comprehensive Medicare guides organized by topic: getting started, choosing a plan, understanding costs, enrollment timing, and more.",
    url: "https://medicare-info-pro.vercel.app/guides",
    siteName: "MedicareInfoPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "In-Depth Medicare Guides",
    description:
      "Expert-written Medicare guides covering every topic, from enrollment basics to plan comparison and cost strategies.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/guides",
  },
};

export default function GuidesPage() {
  return <GuidesClient />;
}
