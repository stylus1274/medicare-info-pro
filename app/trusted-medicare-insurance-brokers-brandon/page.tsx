import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Trusted Medicare Insurance Brokers Brandon FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/trusted-medicare-insurance-brokers-brandon",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Find trusted Medicare insurance brokers in Brandon, FL. Independent brokers compare 17+ carriers at no cost to find the right plan for you."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Trusted Medicare Insurance Brokers Brandon FL | Medicare Information Project",
  description: "Find trusted Medicare insurance brokers in Brandon, FL. Independent brokers compare 17+ carriers at no cost to find the right plan for you.",
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
        pageType: "broker",
        headline: "Trusted Medicare Insurance Brokers in Brandon, FL",
        subheadline: "An independent Medicare broker works for you, not for any single insurance company. Our Brandon brokers compare plans from 17+ carriers and help you find the right coverage at no cost.",
        metaTitle: "Trusted Medicare Insurance Brokers Brandon FL | Medicare Information Project",
        metaDescription: "Find trusted Medicare insurance brokers in Brandon, FL. Independent brokers compare 17+ carriers at no cost to find the right plan for you.",
        nearbyLandmarks: [
          "HCA Florida Brandon Hospital",
          "AdventHealth Brandon",
          "BayCare Medical Group Brandon",
          "St. Joseph's Hospital",
        ],
        neighborhoods: ["Brandon 33510", "Brandon 33511", "Brandon 33527", "Valrico 33594"],
        faqs: [
          { q: "What is the difference between a Medicare broker and a Medicare agent in Brandon?", a: "A Medicare broker represents multiple insurance carriers and can compare plans from many companies. A captive agent works for only one carrier. Our Brandon brokers are independent and represent 17+ carriers, so we can compare all available options in your ZIP code." },
          { q: "Is working with a Medicare broker free in Brandon?", a: "Yes. Our service is completely free. Insurance carriers compensate us, not you, and your premium is the same whether you work with us or enroll directly." },
          { q: "How do I know if a Medicare broker in Brandon is trustworthy?", a: "Look for brokers who are licensed in Florida, represent multiple carriers, and have no incentive to steer you toward any particular plan. Our Brandon brokers are licensed, independent, and have served the local community for years." },
          { q: "What plans can a Brandon Medicare broker compare?", a: "Our Brandon brokers compare Medicare Advantage HMO and PPO plans, Medigap plans A through N, and Part D prescription drug plans from 17+ carriers. We verify your doctors are in-network before recommending any plan." },
          { q: "Can a Brandon Medicare broker help me every year?", a: "Yes. We provide ongoing support to our clients. Each year during the Annual Enrollment Period, we review your current plan and compare alternatives to ensure you still have the best coverage for your needs." },
        ],
        relatedLinks: [
          { label: "Medicare Insurance Agent Brandon", href: "/medicare-insurance-agent-brandon-fl" },
          { label: "Medicare Consulting Brandon", href: "/medicare-consulting-services-brandon" },
          { label: "Trusted Brokers Riverview", href: "/trusted-medicare-insurance-brokers-riverview" },
          { label: "Our Team", href: "/our-team" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
    </>
  );
}
