import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

export const metadata: Metadata = {
  title: "Medicare Insurance Agent Bartow FL | Medicare Information Project",
  description: "Licensed Medicare insurance agents in Bartow, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
};

export default function Page() {
  return (
    <LocalAgentPage
      config={{
        city: "Bartow",
        cityFull: "Bartow, FL",
        county: "Polk County",
        slug: "bartow",
        pageType: "insurance-agent",
        headline: "Medicare Insurance Agent in Bartow, FL",
        subheadline: "Serving Bartow and Polk County with independent Medicare insurance guidance. We compare plans from 17+ carriers and help you find coverage that works with your local doctors and hospitals.",
        metaTitle: "Medicare Insurance Agent Bartow FL | Medicare Information Project",
        metaDescription: "Licensed Medicare insurance agents in Bartow, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
        nearbyLandmarks: [
          "AdventHealth Heart of Florida",
          "Bartow Regional Medical Center",
          "Lakeland Regional Health",
          "BayCare Medical Group Polk County",
        ],
        neighborhoods: ["Bartow 33830", "Bartow 33831", "Auburndale 33823", "Mulberry 33860"],
        faqs: [
          { q: "What does a Medicare insurance agent do in Bartow?", a: "A licensed Medicare insurance agent in Bartow compares Medicare Advantage, Medigap, and Part D plans from multiple carriers. We verify your doctors at Bartow Regional Medical Center and AdventHealth Heart of Florida are covered." },
          { q: "Is Medicare guidance free in Bartow, FL?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "What Medicare plans are available in Bartow?", a: "Bartow (ZIP 33830) has access to Medicare Advantage, Medigap, and Part D plans. Polk County has several carriers competing for your business, which gives you more options to compare." },
          { q: "Can I get help with Medicare if I live in Bartow but see doctors in Brandon?", a: "Yes. We help Bartow residents who use healthcare facilities in neighboring counties. We verify your specific doctors are in-network regardless of which county they practice in." },
          { q: "How do I switch Medicare plans in Bartow?", a: "The Annual Enrollment Period (October 15 to December 7) is the main window to switch plans. We review your current coverage and compare all available alternatives in Bartow each year." },
        ],
        relatedLinks: [
          { label: "Medicare Insurance Agent Brandon", href: "/medicare-insurance-agent-brandon-fl" },
          { label: "Medicare Insurance Agent Plant City", href: "/medicare-insurance-agent-plant-city-fl" },
          { label: "Medicare Advantage Plans", href: "/medicare-advantage" },
          { label: "Free Consultation", href: "/free-consultation" },
          { label: "Plan Comparison Tool", href: "/plan-comparison-tool" },
        ],
      }}
    />
  );
}
