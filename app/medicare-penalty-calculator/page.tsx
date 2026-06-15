import type { Metadata } from "next";
import PenaltyCalculatorClient from "./PenaltyCalculatorClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Late Enrollment Penalty Calculator | Medicare Information Project",
  description:
    "Calculate your Medicare Part B and Part D late enrollment penalties instantly. See exactly how much you will pay and for how long if you miss your enrollment window.",
  keywords: [
    "Medicare penalty calculator",
    "Medicare late enrollment penalty",
    "Medicare Part B penalty calculator",
    "Medicare Part D penalty calculator",
    "Medicare enrollment penalty",
    "how much is Medicare late penalty",
    "Medicare Information Project",
  ],
  openGraph: {
    title: "Medicare Late Enrollment Penalty Calculator",
    description:
      "Calculate your Medicare Part B and Part D late enrollment penalties. Free tool — see exactly how much you owe and for how long.",
    url: "https://medicare-info-pro.vercel.app/medicare-penalty-calculator",
    type: "website",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/medicare-penalty-calculator",
  },
};

export default function PenaltyCalculatorPage() {
  return <PenaltyCalculatorClient />;
}
