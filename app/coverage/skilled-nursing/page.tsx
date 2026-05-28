import type { Metadata } from "next";
import SkilledNursingClient from "./SkilledNursingClient";

export const metadata: Metadata = {
  title: "Does Medicare Cover Skilled Nursing Facility Care? | MedicareInfoPro",
  description:
    "Medicare covers up to 100 days of skilled nursing facility care per benefit period. Learn the 3-day hospital stay rule, 2026 daily costs, and how Medigap can eliminate the $209.50/day coinsurance.",
  keywords: [
    "does Medicare cover skilled nursing",
    "Medicare skilled nursing facility coverage",
    "Medicare SNF 2026",
    "Medicare 3-day hospital rule",
    "Medicare skilled nursing Brandon FL",
    "Medicare skilled nursing Tampa",
    "Medicare SNF coinsurance 2026",
    "Medicare observation status",
  ],
  openGraph: {
    title: "Does Medicare Cover Skilled Nursing Facility Care? | MedicareInfoPro",
    description:
      "Medicare covers up to 100 days of SNF care. Days 1-20 are free. Days 21-100 cost $209.50/day in 2026. Learn the qualifying conditions and how Medigap covers the daily coinsurance.",
    url: "https://medicare-info-pro.vercel.app/coverage/skilled-nursing",
    siteName: "MedicareInfoPro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Skilled Nursing Facility Care?",
    description:
      "Medicare covers SNF care for up to 100 days. See the 3-day hospital rule, 2026 costs, and how Medigap can save you up to $16,760 per benefit period.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/coverage/skilled-nursing",
  },
};

export default function SkilledNursingPage() {
  return <SkilledNursingClient />;
}
