import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Insurance Agent Plant City FL | Medicare Information Project",
  description: "Licensed Medicare insurance agents in Plant City, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
};

export default function Page() {
  return (
    <LocalAgentPage
      config={{
        city: "Plant City",
        cityFull: "Plant City, FL",
        county: "Hillsborough County",
        slug: "plant-city",
        pageType: "insurance-agent",
        headline: "Medicare Insurance Agent in Plant City, FL",
        subheadline: "Licensed Medicare insurance agents serving Plant City and eastern Hillsborough County. We compare plans from 17+ carriers and verify your local doctors are covered, at no cost to you.",
        metaTitle: "Medicare Insurance Agent Plant City FL | Medicare Information Project",
        metaDescription: "Licensed Medicare insurance agents in Plant City, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
        nearbyLandmarks: [
          "AdventHealth Plant City",
          "HCA Florida Brandon Hospital",
          "BayCare Medical Group Plant City",
          "St. Joseph's Hospital",
        ],
        neighborhoods: ["Plant City 33563", "Plant City 33565", "Plant City 33566", "Seffner 33584"],
        faqs: [
          { q: "What does a Medicare insurance agent do in Plant City?", a: "A licensed Medicare insurance agent in Plant City compares Medicare Advantage, Medigap, and Part D plans from multiple carriers. We verify your doctors at AdventHealth Plant City and HCA Florida Brandon Hospital are in-network." },
          { q: "Is Medicare guidance free in Plant City, FL?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "What Medicare plans are available in Plant City?", a: "Plant City residents across ZIP codes 33563, 33565, and 33566 have access to Medicare Advantage, Medigap, and Part D plans. We compare all available options for your specific ZIP code." },
          { q: "How do I avoid Medicare penalties in Plant City?", a: "Part B late enrollment penalties are permanent and add 10% to your premium for every 12-month period you delayed. We help Plant City residents identify their exact enrollment window and avoid costly mistakes." },
          { q: "Can a Plant City Medicare agent help with Part D drug plans?", a: "Yes. We compare all Part D plans available in your ZIP code against your specific medications to find the plan with the lowest total drug cost for you." },
        ],
        relatedLinks: [
          { label: "Local Medicare Agent Plant City", href: "/local-medicare-agent-plant-city" },
          { label: "Medicare Insurance Agent Brandon", href: "/medicare-insurance-agent-brandon-fl" },
          { label: "Medicare Insurance Agent Seffner", href: "/medicare-insurance-agent-seffner-fl" },
          { label: "Part D Drug Plans", href: "/part-d" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
  );
}
