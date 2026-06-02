import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

export const metadata: Metadata = {
  title: "Trusted Medicare Insurance Agent Health Insurance Services Sun City FL | Medicare Information Project",
  description: "Trusted Medicare insurance agent and health insurance services in Sun City, FL. Independent, unbiased guidance from local experts at no cost.",
};

export default function Page() {
  return (
    <LocalAgentPage
      config={{
        city: "Sun City",
        cityFull: "Sun City, FL",
        county: "Hillsborough County",
        slug: "sun-city",
        pageType: "agent",
        headline: "Trusted Medicare Insurance Agent and Health Insurance Services in Sun City, FL",
        subheadline: "Sun City and Sun City Center are home to one of the largest concentrations of Medicare beneficiaries in Florida. Our independent agents live and work in this community and understand the local healthcare landscape. We compare every available plan from 17+ carriers and give you a recommendation based solely on your needs.",
        metaTitle: "Trusted Medicare Insurance Agent Health Insurance Services Sun City FL | Medicare Information Project",
        metaDescription: "Trusted Medicare insurance agent and health insurance services in Sun City, FL. Independent, unbiased guidance from local experts at no cost.",
        nearbyLandmarks: [
          "HCA Florida South Shore Hospital",
          "AdventHealth Sun City Center",
          "Sun City Center Medical Associates",
          "St. Joseph's Hospital South",
        ],
        neighborhoods: ["Sun City 33586", "Sun City Center 33573", "Ruskin 33570", "Apollo Beach 33572"],
        faqs: [
          {
            q: "Why should I use a trusted Medicare insurance agent in Sun City?",
            a: "An independent Medicare agent in Sun City works for you, not for any single insurance company. We compare plans from 17+ carriers and recommend the one that best fits your doctors, medications, and retirement lifestyle. There is no pressure and no cost to you. Visit our advisors page to meet our team.",
          },
          {
            q: "What health insurance services do you offer in Sun City?",
            a: "We offer Medicare Advantage plan comparisons, Medigap plan comparisons, Part D drug plan reviews, enrollment assistance, annual plan reviews, and year-round support. We also assist with individual and family health insurance for those not yet Medicare-eligible.",
          },
          {
            q: "Is your Medicare agent service free in Sun City?",
            a: "Yes, completely free. Insurance carriers compensate us when you enroll, and your premium is the same whether you work with us or enroll directly.",
          },
          {
            q: "Can you help me compare Medicare Advantage and Medigap in Sun City?",
            a: "Yes. We walk every Sun City client through a side-by-side comparison of Medicare Advantage and Medigap options. Our medicare supplement page explains Medigap plan letters in detail.",
          },
          {
            q: "Do you serve areas near Sun City?",
            a: "Yes. We serve all of South Shore Hillsborough County including Sun City Center, Ruskin, Apollo Beach, Wimauma, and Riverview.",
          },
        ],
        nearbyPages: [
          { label: "Medicare Agent Sun City", href: "/medicare-agent-sun-city" },
          { label: "Medicare Consulting Sun City", href: "/medicare-consulting-services-sun-city" },
          { label: "Medicare Supplement Plans", href: "/medicare-supplement" },
          { label: "Our Advisors", href: "/advisors" },
        ],
      }}
    />
  );
}
