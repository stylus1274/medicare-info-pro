import type { Metadata } from "next";
import MentalHealthClient from "./MentalHealthClient";

export const metadata: Metadata = {
  title: "Does Medicare Cover Mental Health? | MedicareInfoPro",
  description:
    "Medicare covers most outpatient and inpatient mental health services including therapy, psychiatric care, and substance use treatment. Learn what you pay in 2026 and how to reduce costs.",
  keywords: [
    "does Medicare cover mental health",
    "Medicare therapy coverage",
    "Medicare psychiatrist coverage",
    "Medicare mental health 2026",
    "Medicare counseling coverage",
    "Medicare mental health Brandon FL",
    "Medicare mental health Tampa",
  ],
  openGraph: {
    title: "Does Medicare Cover Mental Health? | MedicareInfoPro",
    description:
      "Medicare covers most outpatient and inpatient mental health services. Learn what is covered, what you pay in 2026, and how Medigap can eliminate the 20% coinsurance.",
    url: "https://medicare-info-pro.vercel.app/coverage/mental-health",
    siteName: "MedicareInfoPro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Mental Health?",
    description:
      "Medicare covers therapy, psychiatric care, and substance use treatment. See 2026 costs and your options for reducing out-of-pocket expenses.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/coverage/mental-health",
  },
};

export default function MentalHealthPage() {
  return <MentalHealthClient />;
}
