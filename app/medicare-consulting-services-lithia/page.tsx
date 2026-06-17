import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Consulting Services Lithia FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-consulting-services-lithia",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Expert Medicare consulting services in Lithia, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Consulting Services Lithia FL | Medicare Information Project",
  description: "Expert Medicare consulting services in Lithia, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost.",
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
        city: "Lithia",
        cityFull: "Lithia, FL",
        county: "Hillsborough County",
        slug: "lithia",
        pageType: "consulting",
        headline: "Medicare Consulting Services in Lithia, FL",
        subheadline: "Lithia residents can count on Medicare Information Project for independent, no-cost Medicare consulting. We compare every plan available in your area and guide you to the right coverage — without pressure or bias.",
        metaTitle: "Medicare Consulting Services Lithia FL | Medicare Information Project",
        metaDescription: "Expert Medicare consulting services in Lithia, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost.",
        nearbyLandmarks: [
          "AdventHealth Brandon",
          "HCA Florida Brandon Hospital",
          "BayCare Medical Group Fish Hawk",
          "St. Joseph's Hospital South",
        ],
        neighborhoods: ["Lithia 33547", "Fish Hawk 33547", "Riverview 33578", "Valrico 33594"],
        faqs: [
          {
            q: "What does Medicare consulting in Lithia include?",
            a: "Our Lithia Medicare consulting service includes a full needs assessment, a comparison of all Medicare Advantage, Medigap, and Part D plans available in ZIP 33547, doctor and pharmacy network verification, enrollment assistance, and ongoing support after enrollment — all at no cost.",
          },
          {
            q: "Is Medicare consulting free for Lithia residents?",
            a: "Yes, completely free. We are compensated by insurance carriers when you enroll, and that compensation is the same regardless of which plan you choose. There is no cost to you at any stage.",
          },
          {
            q: "What is the difference between Medicare Advantage and Medigap in Lithia?",
            a: "Medicare Advantage (Part C) replaces Original Medicare with a private plan that often includes extra benefits like dental, vision, and hearing. Medigap (Medicare Supplement) works alongside Original Medicare to cover the 20% cost-sharing gap. The right choice depends on your doctors, medications, and how often you use healthcare. We explain both options in detail during your consultation.",
          },
          {
            q: "Can you help me if I already have Medicare but want to switch plans?",
            a: "Yes. During the Annual Enrollment Period (October 15 – December 7) we review your current plan and compare it to all available options. Plans change their premiums, formularies, and networks each year, so an annual review is always worthwhile.",
          },
          {
            q: "Do you serve areas near Lithia?",
            a: "Yes. We serve all of Hillsborough County including Fish Hawk, Riverview, Brandon, Valrico, and surrounding communities.",
          },
        ],
        relatedLinks: [
          { label: "Medicare Consulting — Fish Hawk", href: "/medicare-consulting-services-fish-hawk" },
          { label: "Medicare Consulting — Valrico", href: "/medicare-consulting-services-valrico" },
          { label: "Medicare Agent — Lithia", href: "/medicare-insurance-agent-lithia-fl" },
          { label: "Medicare Advantage Florida", href: "/medicare-advantage-florida" },
        ],
      }}
    />
    </>
  );
}
