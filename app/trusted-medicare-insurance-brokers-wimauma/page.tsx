import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Trusted Medicare Insurance Brokers Wimauma FL | Medicare Information Project",
  description: "Find trusted Medicare insurance brokers in Wimauma, FL. Independent brokers compare 17+ carriers at no cost to find the right plan for you.",
};

export default function Page() {
  return (
    <LocalAgentPage
      config={{
        city: "Wimauma",
        cityFull: "Wimauma, FL",
        county: "Hillsborough County",
        slug: "wimauma",
        pageType: "broker",
        headline: "Trusted Medicare Insurance Brokers in Wimauma, FL",
        subheadline: "Wimauma is a rural community in South Hillsborough County where access to trusted Medicare guidance can make a real difference. Our independent brokers compare plans from 17+ carriers at no cost.",
        metaTitle: "Trusted Medicare Insurance Brokers Wimauma FL | Medicare Information Project",
        metaDescription: "Find trusted Medicare insurance brokers in Wimauma, FL. Independent brokers compare 17+ carriers at no cost to find the right plan for you.",
        nearbyLandmarks: [
          "Bayfront Health Sun City Center",
          "AdventHealth Riverview",
          "South Bay Hospital",
          "HCA Florida South Tampa Hospital",
        ],
        neighborhoods: ["Wimauma 33598", "Sun City Center 33573", "Ruskin 33570", "Apollo Beach 33572"],
        faqs: [
          { q: "What does an independent Medicare broker do in Wimauma?", a: "An independent Medicare broker in Wimauma compares plans from multiple carriers rather than promoting a single company. We compare Medicare Advantage, Medigap, and Part D plans available in ZIP 33598 and verify your specific doctors are covered." },
          { q: "Is working with a Medicare broker free in Wimauma?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "How do I find a trusted Medicare broker near Wimauma?", a: "Our Brandon office serves all of South Hillsborough County including Wimauma. You can reach us at 813-699-5559 or schedule a free phone or video consultation." },
          { q: "What plans can a Wimauma Medicare broker compare?", a: "Our Wimauma brokers compare Medicare Advantage HMO and PPO plans, Medigap plans A through N, and Part D prescription drug plans from 17+ carriers. We verify your doctors at Bayfront Health Sun City Center and AdventHealth Riverview are covered." },
          { q: "Can a Medicare broker in Wimauma help me compare dental and vision benefits?", a: "Yes. Many Medicare Advantage plans available in ZIP 33598 include dental, vision, and hearing benefits. We compare these extras alongside medical coverage to find the best overall value for you." },
        ],
        relatedLinks: [
          { label: "Medicare Insurance Agent Wimauma", href: "/medicare-insurance-agent-wimauma-fl" },
          { label: "Trusted Brokers Ruskin", href: "/trusted-medicare-insurance-brokers-ruskin" },
          { label: "Trusted Brokers Apollo Beach", href: "/trusted-medicare-insurance-brokers-apollo-beach" },
          { label: "Our Team", href: "/our-team" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
  );
}
