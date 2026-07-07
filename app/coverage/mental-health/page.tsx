import type { Metadata } from "next";
import MentalHealthClient from "./MentalHealthClient";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Medicare cover therapy with a psychologist?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Part B covers outpatient therapy with a licensed psychologist, clinical social worker, clinical professional counselor, or marriage and family therapist. You pay 20% coinsurance after the Part B deductible. If you have a Medigap plan, it typically covers that 20%."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover telehealth mental health visits?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Following changes made during and after the COVID-19 public health emergency, Medicare permanently expanded telehealth coverage for mental health services. You can receive therapy and psychiatric care via video visit from your home. Your provider must be enrolled in Medicare and use an approved telehealth platform."
      }
    },
    {
      "@type": "Question",
      "name": "How many therapy sessions does Medicare cover per year?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare does not impose a hard annual limit on outpatient mental health visits. You can receive as many medically necessary sessions as your provider documents. However, you pay 20% coinsurance for each visit (after the deductible), so costs can add up without a Medigap plan."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover inpatient psychiatric care?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, with an important limitation. Part A covers inpatient psychiatric care in a general hospital with no day limit. However, care in a freestanding psychiatric hospital is limited to 190 lifetime days. Once you exhaust those 190 days, Medicare will not cover additional inpatient psychiatric hospital stays: though general hospital stays remain covered."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover substance use disorder treatment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare covers opioid treatment programs (OTPs), substance use disorder counseling, and medication-assisted treatment (MAT) including methadone and buprenorphine. Coverage includes both inpatient and outpatient treatment settings."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Medicare mental health parity rule?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Mental Health Parity and Addiction Equity Act requires Medicare to cover mental health and substance use disorder services at the same level as medical and surgical services. This means your cost-sharing for mental health visits cannot be higher than for comparable medical visits. If you believe your plan is violating parity, you have the right to appeal."
      }
    }
  ]
} as const;

export const dynamic = "force-dynamic";

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
    url: "https://medicareinfopro.com/coverage/mental-health",
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
    canonical: "https://medicareinfopro.com/coverage/mental-health",
  },
};

export default function MentalHealthPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MentalHealthClient />
    </>
  );
}
