import type { Metadata } from "next";
import FAQClient from "./FAQClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare FAQ Center | MedicareInfoPro",
  description:
    "Answers to the most common Medicare questions covering eligibility, enrollment, Parts A and B, Medicare Advantage, Medigap, Part D, costs, and coverage. Searchable FAQ for 2026.",
  keywords: [
    "Medicare FAQ",
    "Medicare frequently asked questions",
    "Medicare questions and answers",
    "Medicare eligibility FAQ",
    "Medicare enrollment FAQ",
    "Medicare costs 2026",
    "Medicare Brandon FL FAQ",
  ],
  openGraph: {
    title: "Medicare FAQ Center | MedicareInfoPro",
    description:
      "Searchable answers to the most common Medicare questions, organized by topic: eligibility, enrollment, plan types, costs, and coverage.",
    url: "https://medicare-info-pro.vercel.app/faq",
    siteName: "MedicareInfoPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare FAQ Center",
    description:
      "Quick answers to the most common Medicare questions, searchable and organized by topic.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/faq",
  },
};

export default function FAQPage() {
  return <FAQClient />;
}
