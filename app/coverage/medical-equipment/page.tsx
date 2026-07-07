import type { Metadata } from "next";
import MedicalEquipmentClient from "./MedicalEquipmentClient";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What qualifies as durable medical equipment under Medicare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "To qualify as DME, an item must: (1) withstand repeated use, (2) be primarily and customarily used for a medical purpose, (3) not be useful to a person who is not sick or injured, and (4) be appropriate for use in the home. Common examples include wheelchairs, walkers, hospital beds, CPAP machines, and home oxygen equipment. Items that are primarily for comfort or convenience do not qualify."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover power wheelchairs and scooters?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but with strict documentation requirements. Your physician must conduct a face-to-face examination, document that you have a mobility limitation that significantly impairs your ability to perform activities of daily living, and certify that a power wheelchair or scooter is medically necessary. You must also obtain the equipment from a Medicare-enrolled supplier. Medicare covers 80% of the approved amount after the Part B deductible."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover CPAP machines for sleep apnea?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Part B covers CPAP machines and supplies when you have a diagnosis of obstructive sleep apnea confirmed by a sleep study. Medicare typically rents the CPAP machine for 13 months, after which ownership transfers to you. You pay 20% coinsurance during the rental period. Replacement supplies such as masks, tubing, and filters are also covered."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover home oxygen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Part B covers home oxygen equipment, including concentrators, portable units, and liquid oxygen systems, when your physician documents that your blood oxygen level is below a certain threshold. Medicare rents the equipment for 36 months, after which the supplier must continue providing equipment and supplies for an additional 24 months at no charge to you."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover prosthetics and orthotics?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Part B covers prosthetic limbs and orthotic braces when they are prescribed by a physician and obtained from a Medicare-enrolled supplier. Coverage includes the initial device and replacement when medically necessary due to wear, loss, or a change in your condition. You pay 20% coinsurance after the Part B deductible."
      }
    },
    {
      "@type": "Question",
      "name": "What is a Medicare-enrolled DME supplier and why does it matter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Medicare-enrolled DME supplier is a company that has been approved by Medicare to bill for covered equipment. If you obtain equipment from a supplier that is not enrolled in Medicare, Medicare will not pay for it regardless of whether the item itself is covered. Always confirm that your DME supplier is Medicare-enrolled before ordering equipment."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover blood glucose monitors and test strips?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Medicare Part B covers blood glucose monitors, lancets, and test strips for beneficiaries with diabetes. The number of test strips covered depends on whether you use insulin. Insulin-dependent beneficiaries receive more generous coverage. Continuous glucose monitors (CGMs) are also covered for beneficiaries who meet certain criteria."
      }
    }
  ]
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover Medical Equipment? | MedicareInfoPro",
  description:
    "Medicare Part B covers durable medical equipment including wheelchairs, walkers, CPAP machines, home oxygen, and hospital beds. Learn the requirements and your 2026 costs.",
  keywords: [
    "does Medicare cover medical equipment",
    "Medicare DME coverage",
    "Medicare wheelchair coverage",
    "Medicare CPAP coverage",
    "Medicare home oxygen",
    "Medicare durable medical equipment 2026",
    "Medicare DME Brandon FL",
    "Medicare medical equipment Tampa",
  ],
  openGraph: {
    title: "Does Medicare Cover Medical Equipment? | MedicareInfoPro",
    description:
      "Medicare covers wheelchairs, CPAP machines, home oxygen, hospital beds, and other DME when medically necessary. Learn what you pay in 2026 and how Medigap reduces your costs.",
    url: "https://medicareinfopro.com/coverage/medical-equipment",
    siteName: "MedicareInfoPro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Medical Equipment?",
    description:
      "Medicare covers DME including wheelchairs, CPAP, home oxygen, and prosthetics. See 2026 costs and how to avoid paying more than you should.",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/coverage/medical-equipment",
  },
};

export default function MedicalEquipmentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MedicalEquipmentClient />
    </>
  );
}
