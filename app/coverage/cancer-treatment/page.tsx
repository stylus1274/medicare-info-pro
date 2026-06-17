import type { Metadata } from "next";
import CancerTreatmentClient from "./CancerTreatmentClient";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Medicare cover chemotherapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Part B covers outpatient chemotherapy infusions administered in a doctor's office, outpatient hospital, or infusion center. You pay 20% coinsurance after the Part B deductible. Part A covers chemotherapy administered during an inpatient hospital stay. Oral chemotherapy drugs are covered under Part D."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover radiation therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Part B covers radiation therapy including external beam radiation and brachytherapy when administered on an outpatient basis. You pay 20% coinsurance after the Part B deductible. If radiation requires an inpatient hospital stay, Part A applies."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover immunotherapy and targeted therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Part B covers immunotherapy drugs (such as checkpoint inhibitors) and targeted therapy agents when administered by infusion in an outpatient setting. These are among the most expensive cancer treatments, so the 20% coinsurance can be substantial without a Medigap plan."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover cancer surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Cancer surgery is covered under Part A when performed during an inpatient hospital stay. You pay the Part A deductible ($1,736 per benefit period in 2026) and coinsurance for extended stays. Outpatient surgical procedures are covered under Part B with 20% coinsurance."
      }
    },
    {
      "@type": "Question",
      "name": "Can I go to any cancer center with Medicare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "With Original Medicare, you can see any oncologist or cancer center that accepts Medicare, including major cancer centers such as Moffitt Cancer Center in Tampa. With Medicare Advantage, you are generally limited to in-network providers. This is one of the most important reasons cancer patients often choose Original Medicare with a Medigap plan over Medicare Advantage."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover clinical trials for cancer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare covers the routine costs of care during a qualifying clinical trial, such as doctor visits, lab tests, and standard treatments. However, Medicare does not cover the investigational drug or device itself, or any services provided solely for the purpose of the trial. Coverage details vary by trial, so it is important to confirm with your oncologist and Medicare before enrolling."
      }
    },
    {
      "@type": "Question",
      "name": "How much will I pay out of pocket for cancer treatment with Medicare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Without supplemental coverage, your costs can be significant. The 20% Part B coinsurance on a $10,000 monthly chemotherapy regimen would be $2,000 per month. A Medigap Plan G covers that coinsurance entirely after the $283 annual Part B deductible, making it one of the most financially protective options for cancer patients."
      }
    }
  ]
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover Cancer Treatment? | MedicareInfoPro",
  description:
    "Medicare covers chemotherapy, radiation, immunotherapy, surgery, and most cancer treatments. Learn what you pay in 2026 and how a Medigap plan can protect you from high out-of-pocket costs.",
  keywords: [
    "does Medicare cover cancer treatment",
    "Medicare chemotherapy coverage",
    "Medicare radiation therapy coverage",
    "Medicare immunotherapy coverage",
    "Medicare cancer 2026",
    "Medicare cancer treatment Brandon FL",
    "Medicare Moffitt Cancer Center",
    "Medicare cancer Tampa",
  ],
  openGraph: {
    title: "Does Medicare Cover Cancer Treatment? | MedicareInfoPro",
    description:
      "Medicare covers chemotherapy, radiation, immunotherapy, and surgery. Learn what you pay in 2026 and how Medigap can eliminate the 20% coinsurance on cancer treatment.",
    url: "https://medicare-info-pro.vercel.app/coverage/cancer-treatment",
    siteName: "MedicareInfoPro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Cancer Treatment?",
    description:
      "Medicare covers most cancer treatments. See 2026 costs, what Medigap covers, and how to access Moffitt Cancer Center with Original Medicare.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/coverage/cancer-treatment",
  },
};

export default function CancerTreatmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <CancerTreatmentClient />
    </>
  );
}
