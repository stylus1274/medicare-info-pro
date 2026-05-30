import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

export const metadata: Metadata = {
  title: "Medicare Consulting Services Sun City FL | Medicare Information Project",
  description: "Expert Medicare consulting services in Sun City Center, FL. We help retirees understand their options and choose the right plan at no cost.",
};

export default function Page() {
  return (
    <LocalAgentPage
      config={{
        city: "Sun City Center",
        cityFull: "Sun City Center, FL",
        county: "Hillsborough County",
        slug: "sun-city",
        pageType: "consulting",
        headline: "Medicare Consulting Services in Sun City Center, FL",
        subheadline: "Sun City Center is a retirement community where Medicare planning is a way of life. Our consultants specialize in Medicare for retirees and help you maximize your benefits, compare plans from 17+ carriers, and enroll with confidence.",
        metaTitle: "Medicare Consulting Services Sun City FL | Medicare Information Project",
        metaDescription: "Expert Medicare consulting services in Sun City Center, FL. We help retirees understand their options and choose the right plan at no cost.",
        nearbyLandmarks: [
          "Bayfront Health Sun City Center",
          "AdventHealth Riverview",
          "Sun City Center Medical Associates",
          "HCA Florida South Tampa Hospital",
        ],
        neighborhoods: ["Sun City Center 33573", "Ruskin 33570", "Apollo Beach 33572", "Wimauma 33598"],
        faqs: [
          { q: "What is included in Medicare consulting services in Sun City Center?", a: "Our Sun City Center Medicare consulting service includes a full review of your healthcare needs, a comparison of all available plans in ZIP 33573, verification that your doctors at Bayfront Health Sun City Center are in-network, and enrollment assistance." },
          { q: "How much does Medicare consulting cost in Sun City Center?", a: "Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "What is the difference between Medicare Advantage and Medigap for Sun City Center retirees?", a: "Medicare Advantage plans typically have lower premiums but require network restrictions and copays. Medigap plans have higher premiums but cover most out-of-pocket costs and allow you to see any Medicare-accepting doctor nationwide. Many Sun City Center retirees prefer Medigap for its flexibility." },
          { q: "Can a Medicare consultant help me review my current plan in Sun City Center?", a: "Yes. We help existing Medicare beneficiaries review their current coverage each year during the Annual Enrollment Period and compare alternatives if a better option is available." },
          { q: "Do you help with Medicare Part D drug plans in Sun City Center?", a: "Yes. We compare all Part D plans available in ZIP 33573 against your specific medications to find the plan with the lowest total drug cost for you." },
        ],
        relatedLinks: [
          { label: "Medicare Insurance Agent Sun City Center", href: "/medicare-insurance-agent-sun-city-center-fl" },
          { label: "Local Medicare Agent Sun City", href: "/local-medicare-agent-sun-city" },
          { label: "Medicare Consulting Apollo Beach", href: "/medicare-consulting-services-apollo-beach" },
          { label: "Part D Drug Plans", href: "/part-d" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
  );
}
