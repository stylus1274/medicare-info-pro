import type { Metadata } from "next";
import AdvisorsClient from "./AdvisorsClient";

export const metadata: Metadata = {
  title: "Our Medicare Advisors | Medicare Information Project",
  description:
    "Meet the licensed Medicare advisors at Medicare Information Project. Our agents are bound by a strict Code of Ethics and committed to finding the plan that is genuinely right for you.",
  keywords: [
    "Medicare advisors",
    "licensed Medicare agents Florida",
    "Medicare Information Project advisors",
    "Medicare agent code of ethics",
    "independent Medicare agents Tampa",
    "Medicare help Florida",
  ],
  openGraph: {
    title: "Our Medicare Advisors",
    description:
      "Meet our licensed Medicare advisors. Independent agents bound by a strict Code of Ethics, committed to your best interest.",
    url: "https://medicare-info-pro.vercel.app/advisors",
    type: "website",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/advisors",
  },
};

export default function AdvisorsPage() {
  return <AdvisorsClient />;
}
