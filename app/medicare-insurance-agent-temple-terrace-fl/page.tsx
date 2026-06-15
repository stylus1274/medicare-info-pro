import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Insurance Agent Temple Terrace FL | Medicare Information Project",
  description: "Licensed Medicare insurance agents in Temple Terrace, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
};

export default function Page() {
  return (
    <LocalAgentPage
      config={{
        city: "Temple Terrace",
        cityFull: "Temple Terrace, FL",
        county: "Hillsborough County",
        slug: "temple-terrace",
        pageType: "insurance-agent",
        headline: "Medicare Insurance Agent in Temple Terrace, FL",
        subheadline: "Temple Terrace residents have access to excellent healthcare facilities including AdventHealth Tampa and HCA Florida University Hospital. Our licensed agents verify your doctors are covered and compare plans from 17+ carriers at no cost.",
        metaTitle: "Medicare Insurance Agent Temple Terrace FL | Medicare Information Project",
        metaDescription: "Licensed Medicare insurance agents in Temple Terrace, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
        nearbyLandmarks: [
          "AdventHealth Tampa",
          "HCA Florida University Hospital",
          "Tampa General Hospital",
          "USF Health Morsani College of Medicine",
        ],
        neighborhoods: ["Temple Terrace 33617", "Temple Terrace 33637", "Thonotosassa 33592"],
        faqs: [
          { q: "What does a Medicare insurance agent do in Temple Terrace?", a: "A licensed Medicare insurance agent in Temple Terrace compares Medicare Advantage, Medigap, and Part D plans from multiple carriers. We verify your doctors at AdventHealth Tampa and HCA Florida University Hospital are in-network." },
          { q: "Is Medicare guidance free in Temple Terrace, FL?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is identical whether you work with us or enroll directly." },
          { q: "What Medicare plans are available in Temple Terrace?", a: "Temple Terrace (ZIP codes 33617 and 33637) has access to Medicare Advantage, Medigap, and Part D plans from multiple carriers. We compare all available options for your specific ZIP code." },
          { q: "How do I verify my Temple Terrace doctors are in-network?", a: "We check provider directories for every plan we recommend. We confirm your primary care doctor and any specialists you see are in-network before suggesting a plan." },
          { q: "Can I get a Medigap plan in Temple Terrace?", a: "Yes. Medigap plans are available in Temple Terrace and allow you to see any Medicare-accepting doctor nationwide. We compare Medigap options alongside Medicare Advantage so you can choose the right fit." },
        ],
        relatedLinks: [
          { label: "Local Medicare Agent Temple Terrace", href: "/local-medicare-agent-temple-terrace" },
          { label: "Medicare Supplement Plans Temple Terrace", href: "/medicare-supplement-insurance-plans-temple-terrace" },
          { label: "Medicare Insurance Agent Brandon", href: "/medicare-insurance-agent-brandon-fl" },
          { label: "Medicare Advantage Plans", href: "/medicare-advantage" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
  );
}
