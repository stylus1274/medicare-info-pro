import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Trusted Medicare Insurance Agent Health Insurance Services Temple Terrace FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/trusted-medicare-insurance-agent-health-insurance-services-temple-terrace",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Trusted Medicare insurance agent and health insurance services in Temple Terrace, FL. Independent, unbiased guidance from local experts at no cost."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/trusted-medicare-insurance-agent-health-insurance-services-temple-terrace#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Temple Terrace, FL.",
  "url": "https://medicareinfopro.com/trusted-medicare-insurance-agent-health-insurance-services-temple-terrace",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Temple Terrace",
    "addressRegion": "FL",
    "postalCode": "33617",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Temple Terrace"
  },
  "serviceType": "Medicare Insurance Consulting",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Trusted Medicare Insurance Agent Health Insurance Services Temple Terrace FL | Medicare Information Project",
  description: "Trusted Medicare insurance agent and health insurance services in Temple Terrace, FL. Independent, unbiased guidance from local experts at no cost.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <LocalAgentPage
      config={{
        city: "Temple Terrace",
        cityFull: "Temple Terrace, FL",
        county: "Hillsborough County",
        slug: "temple-terrace",
        pageType: "agent",
        headline: "Trusted Medicare Insurance Agent and Health Insurance Services in Temple Terrace, FL",
        subheadline: "Temple Terrace residents approaching Medicare eligibility can count on our independent agents for clear, unbiased guidance. We represent 17+ carriers, compare every available plan, and give you a recommendation based solely on your health needs and budget at no cost.",
        metaTitle: "Trusted Medicare Insurance Agent Health Insurance Services Temple Terrace FL | Medicare Information Project",
        metaDescription: "Trusted Medicare insurance agent and health insurance services in Temple Terrace, FL. Independent, unbiased guidance from local experts at no cost.",
        nearbyLandmarks: [
          "AdventHealth Tampa",
          "Tampa General Hospital",
          "University of South Florida Health",
          "BayCare Medical Group Temple Terrace",
        ],
        neighborhoods: ["Temple Terrace 33617", "Temple Terrace 33637", "New Tampa 33647", "Brandon 33510"],
        faqs: [
          {
            q: "Why should I use a trusted Medicare insurance agent in Temple Terrace?",
            a: "An independent Medicare agent in Temple Terrace works for you, not for any single insurance company. We compare plans from 17+ carriers and recommend the one that best fits your doctors, medications, and budget. There is no pressure and no cost to you. Visit our advisors page to meet our team.",
          },
          {
            q: "What health insurance services do you offer in Temple Terrace?",
            a: "We offer Medicare Advantage plan comparisons, Medigap plan comparisons, Part D drug plan reviews, enrollment assistance, annual plan reviews, and year-round support. We also assist with individual and family health insurance for those not yet Medicare-eligible.",
          },
          {
            q: "Is your Medicare agent service free in Temple Terrace?",
            a: "Yes, completely free. Insurance carriers compensate us when you enroll, and your premium is the same whether you work with us or enroll directly.",
          },
          {
            q: "Can you help me compare Medicare Advantage and Medigap in Temple Terrace?",
            a: "Yes. We walk every Temple Terrace client through a side-by-side comparison of Medicare Advantage and Medigap options. Our medicare supplement page explains all Medigap plan letters in detail.",
          },
          {
            q: "Do you serve areas near Temple Terrace?",
            a: "Yes. We serve all of Hillsborough County including Brandon, Valrico, New Tampa, and the greater Tampa Bay area.",
          },
        ],
        relatedLinks: [
          { label: "Local Medicare Agent Temple Terrace", href: "/local-medicare-agent-temple-terrace" },
          { label: "Medicare Insurance Agent Temple Terrace FL", href: "/medicare-insurance-agent-temple-terrace-fl" },
          { label: "Health Insurance Broker Temple Terrace", href: "/health-insurance-broker-temple-terrace" },
          { label: "Medicare Supplement Plans", href: "/medicare-supplement" },
        ],
      }}
    />
    </>
  );
}
