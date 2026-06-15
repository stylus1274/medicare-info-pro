import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Trusted Medicare Insurance Brokers Riverview FL | Medicare Information Project",
  description: "Find trusted Medicare insurance brokers in Riverview, FL. Independent brokers compare 17+ carriers at no cost to find the right plan for you.",
};

export default function Page() {
  return (
    <LocalAgentPage
      config={{
        city: "Riverview",
        cityFull: "Riverview, FL",
        county: "Hillsborough County",
        slug: "riverview",
        pageType: "broker",
        headline: "Trusted Medicare Insurance Brokers in Riverview, FL",
        subheadline: "Riverview is one of the fastest-growing communities in Florida, and the Medicare market here is expanding rapidly. Our independent brokers compare plans from 17+ carriers and help you find the right coverage at no cost.",
        metaTitle: "Trusted Medicare Insurance Brokers Riverview FL | Medicare Information Project",
        metaDescription: "Find trusted Medicare insurance brokers in Riverview, FL. Independent brokers compare 17+ carriers at no cost to find the right plan for you.",
        nearbyLandmarks: [
          "AdventHealth Riverview",
          "HCA Florida Brandon Hospital",
          "St. Joseph's Hospital South",
          "BayCare Medical Group Riverview",
        ],
        neighborhoods: ["Riverview 33569", "Riverview 33578", "Riverview 33579", "Gibsonton 33534"],
        faqs: [
          { q: "What does an independent Medicare broker do in Riverview?", a: "An independent Medicare broker in Riverview compares plans from multiple carriers rather than promoting a single company. We compare Medicare Advantage, Medigap, and Part D plans available in your ZIP code and verify your specific doctors are covered." },
          { q: "Is working with a Medicare broker free in Riverview?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "How do I know a Medicare broker in Riverview is trustworthy?", a: "Look for brokers who are licensed in Florida, represent multiple carriers, and have no incentive to steer you toward any particular plan. Our Riverview brokers are licensed, independent, and have served the local community for years." },
          { q: "What plans can a Riverview Medicare broker compare?", a: "Our Riverview brokers compare Medicare Advantage HMO and PPO plans, Medigap plans A through N, and Part D prescription drug plans from 17+ carriers. We verify your doctors at AdventHealth Riverview and HCA Florida Brandon Hospital are in-network." },
          { q: "Can a Medicare broker in Riverview help me every year?", a: "Yes. We provide ongoing support to our clients. Each year during the Annual Enrollment Period, we review your current plan and compare alternatives to ensure you still have the best coverage for your needs." },
        ],
        relatedLinks: [
          { label: "Medicare Insurance Agent Riverview", href: "/medicare-insurance-agent-riverview-fl" },
          { label: "Trusted Brokers Brandon", href: "/trusted-medicare-insurance-brokers-brandon" },
          { label: "Trusted Brokers Valrico", href: "/trusted-medicare-insurance-brokers-valrico" },
          { label: "Our Team", href: "/our-team" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
  );
}
