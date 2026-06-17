import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Trusted Medicare Insurance Agent Health Insurance Services Brandon FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/trusted-medicare-insurance-agent-health-insurance-services-brandon",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Trusted Medicare insurance agent and health insurance services in Brandon, FL. Independent, unbiased guidance from local experts at no cost."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Trusted Medicare Insurance Agent Health Insurance Services Brandon FL | Medicare Information Project",
  description: "Trusted Medicare insurance agent and health insurance services in Brandon, FL. Independent, unbiased guidance from local experts at no cost.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <LocalAgentPage
      config={{
        city: "Brandon",
        cityFull: "Brandon, FL",
        county: "Hillsborough County",
        slug: "brandon",
        pageType: "agent",
        headline: "Trusted Medicare Insurance Agent and Health Insurance Services in Brandon, FL",
        subheadline: "Brandon is one of the most competitive Medicare markets in Hillsborough County, with dozens of plans available from multiple carriers. Our independent agents cut through the noise, compare every option, and give you a clear recommendation based solely on your health needs and budget.",
        metaTitle: "Trusted Medicare Insurance Agent Health Insurance Services Brandon FL | Medicare Information Project",
        metaDescription: "Trusted Medicare insurance agent and health insurance services in Brandon, FL. Independent, unbiased guidance from local experts at no cost.",
        nearbyLandmarks: [
          "HCA Florida Brandon Hospital",
          "AdventHealth Brandon",
          "BayCare Medical Group Brandon",
          "St. Joseph's Hospital",
        ],
        neighborhoods: ["Brandon 33510", "Brandon 33511", "Brandon 33527", "Valrico 33594"],
        faqs: [
          {
            q: "Why should I use a trusted Medicare insurance agent in Brandon?",
            a: "An independent Medicare agent in Brandon works for you, not for any single insurance company. We compare plans from 17+ carriers side by side and recommend the one that best fits your doctors, medications, and budget. There is no pressure and no cost to you. Visit our advisors page to meet our team.",
          },
          {
            q: "What health insurance services do you offer in Brandon?",
            a: "We offer Medicare Advantage plan comparisons, Medigap plan comparisons, Part D drug plan reviews, enrollment assistance, annual plan reviews, and year-round support. We also assist with individual and family health insurance for those not yet Medicare-eligible.",
          },
          {
            q: "Is your Medicare agent service free in Brandon?",
            a: "Yes, completely free. Insurance carriers compensate us when you enroll, and your premium is the same whether you work with us or enroll directly.",
          },
          {
            q: "Can you help me compare Medicare Advantage and Medigap in Brandon?",
            a: "Yes. We walk every Brandon client through a side-by-side comparison of Medicare Advantage and Medigap options. Our comparing Medicare plans Brandon page is a good starting point, and our medicare supplement page explains Medigap plan letters in detail.",
          },
          {
            q: "Do you serve areas near Brandon?",
            a: "Yes. We serve all of Hillsborough County including Valrico, Riverview, Seffner, Plant City, and the greater Tampa Bay area.",
          },
        ],
        relatedLinks: [
          { label: "Medicare Agent Brandon", href: "/medicare-agent-brandon" },
          { label: "Health Insurance Broker Brandon", href: "/health-insurance-broker-brandon" },
          { label: "Comparing Medicare Plans Brandon", href: "/comparing-medicare-plans-brandon" },
          { label: "Medicare Supplement Plans Brandon", href: "/medicare-supplement-insurance-plans-brandon" },
        ],
      }}
    />
    </>
  );
}
