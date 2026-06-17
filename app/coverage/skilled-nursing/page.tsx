import type { Metadata } from "next";
import SkilledNursingClient from "./SkilledNursingClient";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the 3-day hospital stay rule for skilled nursing?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To qualify for Medicare SNF coverage, you must have been admitted as an inpatient to a hospital for at least 3 consecutive days, not counting the day of discharge. Observation status does not count. This is a critical distinction: if your hospital stay is classified as observation rather than inpatient admission, even if you stayed overnight for several days, you will not qualify for Medicare SNF coverage. Always ask your hospital whether you are admitted as an inpatient."
      }
    },
    {
      "@type": "Question",
      "name": "What counts as skilled care in a nursing facility?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Skilled care means services that can only be safely and effectively performed by or under the supervision of licensed professionals. Examples include physical therapy after a hip replacement, skilled nursing for wound care or IV antibiotics, occupational therapy to regain daily living skills after a stroke, and speech therapy after a neurological event. Custodial care, such as help with bathing, dressing, and eating, does not qualify as skilled care under Medicare."
      }
    },
    {
      "@type": "Question",
      "name": "How long does Medicare cover skilled nursing facility care?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare covers up to 100 days of SNF care per benefit period. Days 1 through 20 are covered at 100% with no coinsurance. Days 21 through 100 require a daily coinsurance of $212 in 2026. After day 100, Medicare pays nothing. A new benefit period begins after you have been out of a hospital or SNF for 60 consecutive days."
      }
    },
    {
      "@type": "Question",
      "name": "What is the difference between a skilled nursing facility and a nursing home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A skilled nursing facility provides short-term, medically necessary skilled care, typically for rehabilitation after a hospital stay. A nursing home, or long-term care facility, provides ongoing custodial care for people who can no longer live independently. Medicare covers SNF care but does not cover long-term nursing home custodial care. Long-term care insurance or Medicaid may cover nursing home costs."
      }
    },
    {
      "@type": "Question",
      "name": "Can Medicare stop covering my SNF stay early?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare can stop covering your SNF stay if your condition no longer requires skilled care, even if you have not reached day 100. The SNF must give you a written notice before stopping Medicare coverage. You have the right to appeal this decision. If you request an appeal before coverage ends, Medicare must continue paying while the appeal is reviewed."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover SNF care for someone with Alzheimer's or dementia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare may cover a SNF stay for a person with Alzheimer's or dementia if they have a qualifying hospital stay and need skilled care. However, Medicare does not cover long-term memory care or custodial care in a memory care unit. Long-term care insurance or Medicaid is typically needed for ongoing memory care facility costs."
      }
    },
    {
      "@type": "Question",
      "name": "What happens after Medicare stops covering my SNF stay?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "After day 100, or when Medicare determines skilled care is no longer needed, you are responsible for all SNF costs. If you cannot return home and need continued care, you may need to pay privately, use long-term care insurance, or apply for Medicaid if you meet income and asset requirements. A licensed Medicare advisor can help you understand your options before a SNF stay occurs."
      }
    }
  ]
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover Skilled Nursing Facility Care? | MedicareInfoPro",
  description:
    "Medicare covers up to 100 days of skilled nursing facility care per benefit period. Learn the 3-day hospital stay rule, 2026 daily costs, and how Medigap can eliminate the $212/day coinsurance.",
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
      "Medicare covers up to 100 days of SNF care. Days 1-20 are free. Days 21-100 cost $212/day in 2026. Learn the qualifying conditions and how Medigap covers the daily coinsurance.",
    url: "https://medicare-info-pro.vercel.app/coverage/skilled-nursing",
    siteName: "MedicareInfoPro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Skilled Nursing Facility Care?",
    description:
      "Medicare covers SNF care for up to 100 days. See the 3-day hospital rule, 2026 costs, and how Medigap can save you up to $16,960 per benefit period.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/coverage/skilled-nursing",
  },
};

export default function SkilledNursingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SkilledNursingClient />
    </>
  );
}
