import type { Metadata } from "next";
import PhysicalTherapyClient from "./PhysicalTherapyClient";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is there a limit on how many physical therapy visits Medicare covers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The hard annual dollar cap on outpatient therapy was permanently eliminated by the Bipartisan Budget Act of 2018. Medicare now covers as many medically necessary physical therapy visits as your physician documents. However, if your total therapy charges exceed a threshold amount (known as the KX modifier threshold), your therapist must add a KX modifier to claims certifying that continued therapy is medically necessary."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover physical therapy at home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, if you qualify as homebound. Medicare Part A covers home health physical therapy for beneficiaries who are confined to their home due to illness or injury and who have a physician's order for skilled care. Home health PT is covered with no coinsurance under Part A. If you are not homebound, outpatient PT is covered under Part B with 20% coinsurance."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover physical therapy after a hip or knee replacement?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Physical therapy following joint replacement surgery is one of the most common uses of Medicare PT benefits. If you have an inpatient hospital stay of at least 3 days before your surgery, you may also qualify for a skilled nursing facility stay with Part A coverage for therapy during your recovery. Outpatient PT after discharge is covered under Part B."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover occupational therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Occupational therapy is covered under the same rules as physical therapy. Part B covers outpatient OT when it is medically necessary and ordered by a physician. Part A covers OT provided during a qualifying inpatient or skilled nursing facility stay."
      }
    },
    {
      "@type": "Question",
      "name": "What is the KX modifier and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The KX modifier is a billing code your therapist adds to claims when your total therapy charges for the year exceed the threshold amount (approximately $2,330 in 2026 for PT and SLP combined, and separately for OT). Adding the KX modifier certifies that continued therapy is medically necessary. Without it, Medicare may deny claims above the threshold. Your therapist handles this automatically, but it is good to be aware of it."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover maintenance physical therapy?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Following the Jimmo v. Sebelius settlement, Medicare must cover maintenance therapy when a skilled therapist is needed to maintain your condition or prevent decline, even if you are not expected to improve. This is particularly important for beneficiaries with chronic conditions such as Parkinson's disease, multiple sclerosis, or severe arthritis."
      }
    }
  ]
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover Physical Therapy? | MedicareInfoPro",
  description:
    "Medicare covers medically necessary physical therapy with no annual visit cap. Learn what you pay in 2026, how skilled nursing facility PT works, and how Medigap reduces your costs.",
  keywords: [
    "does Medicare cover physical therapy",
    "Medicare physical therapy coverage",
    "Medicare PT visits 2026",
    "Medicare occupational therapy",
    "Medicare physical therapy Brandon FL",
    "Medicare physical therapy Tampa",
    "Medicare skilled nursing physical therapy",
  ],
  openGraph: {
    title: "Does Medicare Cover Physical Therapy? | MedicareInfoPro",
    description:
      "Medicare Part B covers outpatient physical therapy with no annual cap. Learn what you pay in 2026 and how a Medigap plan can eliminate the 20% coinsurance.",
    url: "https://medicare-info-pro.vercel.app/coverage/physical-therapy",
    siteName: "MedicareInfoPro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Physical Therapy?",
    description:
      "Medicare covers PT with no annual visit cap. See 2026 costs, SNF coverage rules, and how Medigap can save you thousands per year.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/coverage/physical-therapy",
  },
};

export default function PhysicalTherapyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PhysicalTherapyClient />
    </>
  );
}
