import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

export const metadata: Metadata = {
  title: "Medicare Consulting Services Ruskin FL | Medicare Information Project",
  description: "Expert Medicare consulting services in Ruskin, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost.",
};

export default function Page() {
  return (
    <LocalAgentPage
      config={{
        city: "Ruskin",
        cityFull: "Ruskin, FL",
        county: "Hillsborough County",
        slug: "ruskin",
        pageType: "consulting",
        headline: "Medicare Consulting Services in Ruskin, FL",
        subheadline: "Our independent Medicare consultants serve Ruskin and the surrounding South Shore communities. We compare every plan available in your ZIP code and help you make a confident, informed Medicare decision — at no cost.",
        metaTitle: "Medicare Consulting Services Ruskin FL | Medicare Information Project",
        metaDescription: "Expert Medicare consulting services in Ruskin, FL. We help you understand your options, avoid penalties, and choose the right plan at no cost.",
        nearbyLandmarks: [
          "HCA Florida South Shore Hospital",
          "AdventHealth Brandon",
          "BayCare Medical Group Ruskin",
          "St. Joseph's Hospital South",
        ],
        neighborhoods: ["Ruskin 33570", "Ruskin 33573", "Apollo Beach 33572", "Sun City Center 33573"],
        faqs: [
          {
            q: "What Medicare consulting services are available in Ruskin?",
            a: "Our Ruskin Medicare consulting service covers a full needs assessment, a side-by-side comparison of all Medicare Advantage, Medigap, and Part D plans available in your ZIP code, network and formulary verification, enrollment assistance, and ongoing support — all completely free.",
          },
          {
            q: "Is Medicare consulting free in Ruskin?",
            a: "Yes. Our services are free to all Ruskin residents. We are compensated by insurance carriers at enrollment, and that compensation is the same regardless of which plan you choose.",
          },
          {
            q: "What is the difference between Medicare Advantage and Original Medicare in Ruskin?",
            a: "Original Medicare (Parts A and B) is government-administered and covers hospital and medical services. Medicare Advantage (Part C) replaces Original Medicare with a private plan that often includes extra benefits like dental, vision, and hearing. Both options have tradeoffs, and the right choice depends on your doctors, medications, and how you use healthcare. We explain both in plain language.",
          },
          {
            q: "Can you help Ruskin residents who are turning 65?",
            a: "Yes. We specialize in helping new Medicare beneficiaries navigate their Initial Enrollment Period, understand their options, and avoid the permanent late enrollment penalties that many people accidentally trigger.",
          },
          {
            q: "Do you serve areas near Ruskin?",
            a: "Yes. We serve all of South Shore Hillsborough County including Apollo Beach, Sun City Center, Riverview, Brandon, and Gibsonton.",
          },
        ],
        nearbyPages: [
          { label: "Medicare Consulting — Apollo Beach", href: "/medicare-consulting-services-apollo-beach" },
          { label: "Medicare Consulting — Sun City Center", href: "/medicare-consulting-services-sun-city-center" },
          { label: "Medicare Agent — Ruskin", href: "/medicare-insurance-agent-ruskin-fl" },
          { label: "Turning 65 Guide", href: "/turning-65-and-becoming-eligible-for-medicare" },
        ],
      }}
    />
  );
}
