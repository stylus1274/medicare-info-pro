import type { Metadata } from "next";
import VisionCoverageClient from "./VisionCoverageClient";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Medicare cover LASIK surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. LASIK and other refractive surgeries are considered elective and are not covered by Original Medicare or Medicare Advantage."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover cataract surgery?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Original Medicare Part B covers cataract surgery, including standard intraocular lens implants and one pair of corrective lenses (glasses or contacts) after each surgery. Premium lens upgrades such as multifocal lenses may have an additional out-of-pocket cost."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover contact lenses?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Only in one specific case: after cataract surgery, Medicare covers one pair of contact lenses as an alternative to eyeglasses. Routine contact lens prescriptions and supplies are not covered."
      }
    },
    {
      "@type": "Question",
      "name": "How do I get vision coverage with Original Medicare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your options are to switch to a Medicare Advantage plan with vision benefits during an enrollment period, or purchase a standalone vision insurance plan, which is available year-round and typically costs $10 to $25 per month."
      }
    }
  ]
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover Vision and Eye Exams? | Medicare Information Project",
  description:
    "Original Medicare covers very little routine vision care. Learn what is and is not covered, how Medicare Advantage vision benefits work, and your options for getting eye exam and glasses coverage.",
  keywords: [
    "does Medicare cover vision",
    "Medicare eye exam coverage",
    "Medicare glasses coverage",
    "Medicare Advantage vision benefits",
    "Medicare cataract surgery",
    "Medicare routine vision",
    "Medicare vision 2025",
    "Medicare eye care Florida",
  ],
  openGraph: {
    title: "Does Medicare Cover Vision and Eye Exams?",
    description:
      "Original Medicare covers very little routine vision care. Learn what is and is not covered and how to fill the gap with Medicare Advantage or a standalone vision plan.",
    url: "https://medicare-info-pro.vercel.app/coverage/vision",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Eye exam and vision coverage information for Medicare beneficiaries",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Vision and Eye Exams?",
    description:
      "Original Medicare covers very little routine vision care. Learn what is and is not covered and how to fill the gap.",
    images: [
      "https://images.unsplash.com/photo-1516714435131-44d6b64dc6a2?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/coverage/vision",
  },
};

export default function VisionCoveragePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <VisionCoverageClient />
    </>
  );
}
