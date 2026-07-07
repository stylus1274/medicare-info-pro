import type { Metadata } from "next";
import DentalCoverageClient from "./DentalCoverageClient";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Medicare cover dentures?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Original Medicare does not cover dentures. Some Medicare Advantage plans include denture coverage, but limits and cost-sharing vary widely. Check your specific plan's benefits."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover emergency dental care?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Original Medicare may cover emergency dental care if it's medically necessary and related to a covered condition. For example, if you need a tooth extracted before a covered surgery. Routine emergency dental visits are not covered."
      }
    },
    {
      "@type": "Question",
      "name": "Can I add dental coverage to my existing Medicare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You cannot add dental coverage to Original Medicare. Your options are to switch to a Medicare Advantage plan with dental benefits (during an enrollment period) or purchase a standalone dental plan."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare cover dental implants?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Original Medicare does not cover dental implants. Some Medicare Advantage plans cover implants, but this is less common and often subject to annual limits. Check your plan's Evidence of Coverage document."
      }
    }
  ]
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover Dental Care? | Medicare Information Project",
  description:
    "Original Medicare covers almost no routine dental care. Learn what is and isn't covered, how Medicare Advantage dental benefits work, and your options for filling the gap.",
  keywords: [
    "does Medicare cover dental",
    "Medicare dental coverage",
    "Medicare Advantage dental benefits",
    "Medicare routine dental",
    "Medicare dentures coverage",
    "Medicare dental implants",
    "standalone dental plan Medicare",
    "Medicare dental 2025",
  ],
  openGraph: {
    title: "Does Medicare Cover Dental Care?",
    description:
      "Original Medicare covers almost no routine dental care. Learn what is and isn't covered and how to fill the gap with Medicare Advantage or a standalone dental plan.",
    url: "https://medicareinfopro.com/coverage/dental",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1588776814546-1ffbb172d936?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Dental care and Medicare coverage information",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Dental Care?",
    description:
      "Original Medicare covers almost no routine dental care. Learn what is and isn't covered and how to fill the gap.",
    images: [
      "https://images.unsplash.com/photo-1588776814546-1ffbb172d936?w=1200&q=80",
    ],
  },
  alternates: {
    canonical: "https://medicareinfopro.com/coverage/dental",
  },
};

export default function DentalCoveragePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DentalCoverageClient />
    </>
  );
}
