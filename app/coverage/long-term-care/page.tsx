import type { Metadata } from "next";
import LongTermCareCoverageClient from "./LongTermCareCoverageClient";

export const metadata: Metadata = {
  title: "Does Medicare Cover Long-Term Care? Nursing Homes, Assisted Living & More | Medicare Information Project",
  description:
    "Medicare covers limited short-term skilled nursing care but does not cover custodial long-term care. Learn what Medicare pays for, what it does not, and how to plan for long-term care costs in 2026.",
  alternates: {
    canonical: "https://medicareinfopro.com/coverage/long-term-care",
  },
  openGraph: {
    title: "Does Medicare Cover Long-Term Care? | Medicare Information Project",
    description:
      "Medicare covers limited short-term skilled nursing care but does not cover custodial long-term care. Learn what Medicare pays for and how to plan for long-term care costs.",
    url: "https://medicareinfopro.com/coverage/long-term-care",
    siteName: "Medicare Information Project",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does Medicare cover nursing home care?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Medicare covers short-term skilled nursing facility (SNF) care only after a qualifying 3-day hospital stay. Medicare pays 100% for days 1-20, then you pay a daily coinsurance ($209.50/day in 2026) for days 21-100. After day 100, Medicare pays nothing. Medicare does not cover custodial nursing home care (help with daily activities like bathing and dressing).",
      },
    },
    {
      "@type": "Question",
      name: "Does Medicare cover assisted living?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Medicare does not cover assisted living facility costs. Assisted living is considered custodial care, which Medicare explicitly excludes. You would need to pay out of pocket, use long-term care insurance, or qualify for Medicaid to cover assisted living costs.",
      },
    },
    {
      "@type": "Question",
      name: "Does Medicare cover home health care?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Medicare covers medically necessary skilled home health care if you are homebound and your doctor certifies a need for skilled nursing or therapy services. Covered services include skilled nursing visits, physical therapy, occupational therapy, and speech therapy. Medicare does not cover 24-hour home care, meal delivery, or homemaker services.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between skilled care and custodial care?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Skilled care requires the services of a licensed professional such as a nurse, physical therapist, or occupational therapist and is medically necessary for treatment or recovery. Custodial care (also called personal care) involves assistance with daily activities such as bathing, dressing, eating, and using the bathroom. Medicare covers skilled care but not custodial care.",
      },
    },
    {
      "@type": "Question",
      name: "How do people pay for long-term care if Medicare does not cover it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The main options for paying for long-term care are: personal savings and assets, long-term care insurance, hybrid life insurance/annuity products with long-term care riders, Medicaid (for those who meet income and asset limits), and Veterans benefits (for eligible veterans). A financial planner or Medicare specialist can help you evaluate your options.",
      },
    },
    {
      "@type": "Question",
      name: "Does Medicare Advantage cover more long-term care than Original Medicare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Medicare Advantage plans must cover everything Original Medicare covers, including the same skilled nursing facility benefit. Some Medicare Advantage plans offer additional home health or personal care benefits beyond Original Medicare, but comprehensive custodial long-term care coverage is not a standard Medicare Advantage benefit.",
      },
    },
  ],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Does Medicare Cover Long-Term Care?",
  url: "https://medicareinfopro.com/coverage/long-term-care",
  description:
    "Medicare covers limited short-term skilled nursing care but does not cover custodial long-term care. Learn what Medicare pays for and how to plan for long-term care costs in 2026.",
  publisher: {
    "@type": "Organization",
    name: "Medicare Information Project",
    url: "https://medicareinfopro.com",
  },
};

export default function LongTermCareCoveragePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <LongTermCareCoverageClient />
    </>
  );
}
