import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Trusted Medicare Insurance Agent Health Insurance Services Riverview FL | Medicare Information Project",
  description: "Trusted Medicare insurance agent and health insurance services in Riverview, FL. Independent, unbiased guidance from local experts at no cost.",
};

export default function Page() {
  return (
    <LocalAgentPage
      config={{
        city: "Riverview",
        cityFull: "Riverview, FL",
        county: "Hillsborough County",
        slug: "riverview",
        pageType: "agent",
        headline: "Trusted Medicare Insurance Agent and Health Insurance Services in Riverview, FL",
        subheadline: "Riverview is one of the fastest-growing communities in Florida, and thousands of residents are reaching Medicare eligibility every year. Our independent agents help Riverview residents compare every available plan, verify their doctors are in-network, and enroll with confidence at no cost.",
        metaTitle: "Trusted Medicare Insurance Agent Health Insurance Services Riverview FL | Medicare Information Project",
        metaDescription: "Trusted Medicare insurance agent and health insurance services in Riverview, FL. Independent, unbiased guidance from local experts at no cost.",
        nearbyLandmarks: [
          "HCA Florida South Tampa Hospital",
          "AdventHealth Brandon",
          "St. Joseph's Hospital South",
          "BayCare Medical Group Riverview",
        ],
        neighborhoods: ["Riverview 33569", "Riverview 33578", "Riverview 33579", "Gibsonton 33534"],
        faqs: [
          {
            q: "Why should I use a trusted Medicare insurance agent in Riverview?",
            a: "An independent Medicare agent in Riverview works for you, not for any single insurance company. We compare plans from 17+ carriers and recommend the one that best fits your doctors, medications, and budget. There is no pressure and no cost to you. Visit our advisors page to meet our team.",
          },
          {
            q: "What health insurance services do you offer in Riverview?",
            a: "We offer Medicare Advantage plan comparisons, Medigap plan comparisons, Part D drug plan reviews, enrollment assistance, annual plan reviews, and year-round support. We also assist with individual and family health insurance for those not yet Medicare-eligible.",
          },
          {
            q: "Is your Medicare agent service free in Riverview?",
            a: "Yes, completely free. Insurance carriers compensate us when you enroll, and your premium is the same whether you work with us or enroll directly.",
          },
          {
            q: "Can you help me compare Medicare Advantage and Medigap in Riverview?",
            a: "Yes. We walk every Riverview client through a side-by-side comparison of Medicare Advantage and Medigap options. Our comparing Medicare plans Riverview page is a good starting point.",
          },
          {
            q: "Do you serve areas near Riverview?",
            a: "Yes. We serve all of South Hillsborough County including Brandon, Gibsonton, Apollo Beach, Ruskin, and Sun City Center.",
          },
        ],
        relatedLinks: [
          { label: "Medicare Agent Riverview", href: "/medicare-agent-riverview" },
          { label: "Health Insurance Broker Riverview", href: "/health-insurance-broker-riverview" },
          { label: "Comparing Medicare Plans Riverview", href: "/comparing-medicare-plans-riverview" },
          { label: "Medicare Consulting Riverview", href: "/medicare-consulting-services-riverview" },
        ],
      }}
    />
  );
}
