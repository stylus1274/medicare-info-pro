import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Insurance Agent Ruskin FL | Medicare Information Project",
  description: "Licensed Medicare insurance agents in Ruskin, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
};

export default function Page() {
  return (
    <LocalAgentPage
      config={{
        city: "Ruskin",
        cityFull: "Ruskin, FL",
        county: "Hillsborough County",
        slug: "ruskin",
        pageType: "insurance-agent",
        headline: "Medicare Insurance Agent in Ruskin, FL",
        subheadline: "Ruskin is a growing community along Tampa Bay in South Hillsborough County. Our licensed Medicare insurance agents compare plans from 17+ carriers and verify your local doctors are covered, at no cost.",
        metaTitle: "Medicare Insurance Agent Ruskin FL | Medicare Information Project",
        metaDescription: "Licensed Medicare insurance agents in Ruskin, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
        nearbyLandmarks: [
          "Bayfront Health Sun City Center",
          "AdventHealth Riverview",
          "HCA Florida South Tampa Hospital",
          "South Bay Hospital",
        ],
        neighborhoods: ["Ruskin 33570", "Sun City Center 33573", "Apollo Beach 33572", "Wimauma 33598"],
        faqs: [
          { q: "What does a Medicare insurance agent do in Ruskin?", a: "A licensed Medicare insurance agent in Ruskin compares Medicare Advantage, Medigap, and Part D plans from multiple carriers. We verify your doctors at Bayfront Health Sun City Center and AdventHealth Riverview are in-network." },
          { q: "Is Medicare guidance free in Ruskin, FL?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "What Medicare plans are available in Ruskin?", a: "Ruskin (ZIP 33570) has access to Medicare Advantage, Medigap, and Part D plans. We compare all available options for your specific ZIP code." },
          { q: "How do I find a Medicare agent near Ruskin?", a: "Our Brandon office serves the entire South Hillsborough County area including Ruskin. You can reach us at 813-699-5559 or schedule a free phone or video consultation." },
          { q: "Can a Ruskin Medicare agent help me compare Medigap plans?", a: "Yes. We compare Medigap plans alongside Medicare Advantage options so you can choose the coverage type that best fits your healthcare needs and budget." },
        ],
        relatedLinks: [
          { label: "Medicare Insurance Agent Apollo Beach", href: "/medicare-insurance-agent-apollo-beach-fl" },
          { label: "Medicare Insurance Agent Sun City Center", href: "/medicare-insurance-agent-sun-city-center-fl" },
          { label: "Medicare Insurance Agent Wimauma", href: "/medicare-insurance-agent-wimauma-fl" },
          { label: "Medigap Plans", href: "/medicare-supplement-insurance-plans-brandon" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
  );
}
