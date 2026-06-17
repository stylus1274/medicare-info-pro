import type { Metadata } from "next";
import HearingAidsCoverageClient from "./HearingAidsCoverageClient";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does Medicare cover hearing tests?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Original Medicare Part B covers diagnostic hearing exams when a physician orders them to diagnose a medical condition. It does not cover hearing tests ordered specifically to fit a hearing aid. Many Medicare Advantage plans cover one routine hearing exam per year."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare Advantage cover hearing aids?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many Medicare Advantage plans include hearing aid benefits, but coverage varies by plan. Some plans offer a fixed dollar allowance per ear per year, while others provide discounts through hearing care networks. Always check your specific plan's Evidence of Coverage document for exact benefit details."
      }
    },
    {
      "@type": "Question",
      "name": "What are OTC hearing aids and does Medicare cover them?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Over-the-counter hearing aids became available in 2022 for adults with mild to moderate hearing loss. They do not require a prescription or audiologist fitting. Original Medicare does not cover OTC hearing aids. Some Medicare Advantage plans may include an OTC benefit allowance that can be applied toward them."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get hearing aids through the VA?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Department of Veterans Affairs covers hearing aids for eligible veterans at no cost. This benefit is available regardless of your Medicare plan. Contact your local VA medical center or call 1-800-827-1000 to determine eligibility."
      }
    },
    {
      "@type": "Question",
      "name": "When can I switch to a Medicare Advantage plan with hearing coverage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Annual Enrollment Period runs from October 15 through December 7 each year. Coverage begins January 1 of the following year. If you have a qualifying life event, you may also be eligible for a Special Enrollment Period outside of this window."
      }
    }
  ]
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover Hearing Aids? | Medicare Information Pro",
  description:
    "Original Medicare does not cover hearing aids or routine hearing exams. Learn which Medicare Advantage plans include hearing benefits, how much hearing aids cost, and your options for coverage in Florida.",
  keywords: [
    "does medicare cover hearing aids",
    "medicare hearing aid coverage",
    "medicare hearing benefits",
    "medicare advantage hearing aids",
    "hearing aids medicare 2025",
    "medicare hearing exam coverage",
    "OTC hearing aids medicare",
    "florida medicare hearing coverage",
  ],
  openGraph: {
    title: "Does Medicare Cover Hearing Aids?",
    description:
      "Original Medicare does not cover hearing aids. Many Medicare Advantage plans do. Here is what is covered, what is not, and how to find a plan with hearing benefits.",
    url: "https://medicare-info-pro.vercel.app/coverage/hearing-aids",
    siteName: "Medicare Information Pro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Hearing Aids?",
    description:
      "Original Medicare does not cover hearing aids or routine hearing exams. Medicare Advantage plans often include hearing benefits.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/coverage/hearing-aids",
  },
};

export default function HearingAidsCoveragePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HearingAidsCoverageClient />
    </>
  );
}
