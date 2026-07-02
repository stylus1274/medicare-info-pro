import type { Metadata } from "next";
import MedicareAdvantageCoverageClient from "./MedicareAdvantageCoverageClient";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What extra benefits do Medicare Advantage plans offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare Advantage plans often include extra benefits not covered by Original Medicare, such as dental, vision, hearing, over-the-counter (OTC) allowances, transportation to medical appointments, fitness memberships (SilverSneakers), meal delivery after a hospital stay, and telehealth services. Benefits vary by plan and county."
      }
    },
    {
      "@type": "Question",
      "name": "Do all Medicare Advantage plans include OTC allowances?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. OTC allowances are an optional extra benefit that some Medicare Advantage plans offer. When available, they typically provide a quarterly or monthly credit (ranging from $25 to $150+) that can be used to purchase approved health-related items such as vitamins, pain relievers, bandages, and personal care products."
      }
    },
    {
      "@type": "Question",
      "name": "Does Medicare Advantage cover transportation to doctor appointments?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Many Medicare Advantage plans include non-emergency medical transportation (NEMT) as an extra benefit. This typically covers rides to and from covered medical appointments such as doctor visits, dialysis, and chemotherapy. The number of covered rides per year varies by plan."
      }
    },
    {
      "@type": "Question",
      "name": "What is SilverSneakers and does Medicare Advantage cover it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "SilverSneakers is a fitness program designed for adults 65 and older that provides access to participating gyms, fitness classes, and online workout resources. Many Medicare Advantage plans include SilverSneakers or a similar fitness benefit at no additional cost. Check your specific plan's benefits to confirm eligibility."
      }
    },
    {
      "@type": "Question",
      "name": "Can I keep my doctor if I switch to Medicare Advantage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on the plan. HMO plans require you to use a network of doctors and typically require referrals to see specialists. PPO plans offer more flexibility and allow you to see out-of-network providers at a higher cost. Before enrolling, always verify that your current doctors and preferred hospitals are in the plan's network."
      }
    },
    {
      "@type": "Question",
      "name": "How do I compare Medicare Advantage extra benefits in my area?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Extra benefits vary significantly by plan and county. The best way to compare is to use Medicare's Plan Finder at medicare.gov or work with a licensed Medicare insurance agent who can review all plans available in your ZIP code and explain the differences in benefits, networks, and costs."
      }
    }
  ]
};

export const metadata: Metadata = {
  title: "Medicare Advantage Extra Benefits: OTC, Transportation, Fitness & More | MedicareInfoPro",
  description:
    "Discover what extra benefits Medicare Advantage plans offer beyond Original Medicare — OTC allowances, dental, vision, hearing, transportation, fitness memberships, and more.",
  alternates: {
    canonical: "https://medicareinfopro.com/coverage/medicare-advantage",
  },
  openGraph: {
    title: "Medicare Advantage Extra Benefits: OTC, Transportation, Fitness & More",
    description:
      "Discover what extra benefits Medicare Advantage plans offer beyond Original Medicare — OTC allowances, dental, vision, hearing, transportation, fitness memberships, and more.",
    url: "https://medicareinfopro.com/coverage/medicare-advantage",
    type: "article",
  },
};

export default function MedicareAdvantageCoveragePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <MedicareAdvantageCoverageClient />
    </>
  );
}
