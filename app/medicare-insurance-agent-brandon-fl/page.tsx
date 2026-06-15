import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Insurance Agent Brandon FL | Medicare Information Project",
  description: "Licensed Medicare insurance agents in Brandon, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
};

export default function Page() {
  return (
    <LocalAgentPage
      config={{
        city: "Brandon",
        cityFull: "Brandon, FL",
        county: "Hillsborough County",
        slug: "brandon",
        pageType: "insurance-agent",
        headline: "Medicare Insurance Agent in Brandon, FL",
        subheadline: "Our licensed Medicare insurance agents in Brandon help you compare every available plan in your ZIP code. We represent 17+ carriers and our service is always free.",
        metaTitle: "Medicare Insurance Agent Brandon FL | Medicare Information Project",
        metaDescription: "Licensed Medicare insurance agents in Brandon, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
        nearbyLandmarks: [
          "HCA Florida Brandon Hospital",
          "AdventHealth Brandon",
          "BayCare Medical Group Brandon",
          "St. Joseph's Hospital",
        ],
        neighborhoods: ["Brandon 33510", "Brandon 33511", "Brandon 33527", "Valrico 33594"],
        faqs: [
          { q: "What does a Medicare insurance agent in Brandon do?", a: "A licensed Medicare insurance agent in Brandon helps you compare Medicare Advantage, Medigap, and Part D plans from multiple carriers. We verify your doctors are in-network, review drug formularies, and explain your options so you can make an informed decision." },
          { q: "Is working with a Medicare insurance agent free in Brandon?", a: "Yes. Our service is completely free. Insurance carriers pay us a commission, not you. Your premium is the same whether you work with us or enroll directly." },
          { q: "Which Medicare plans are available in Brandon, FL?", a: "Brandon residents across ZIP codes 33510, 33511, and 33527 have access to Medicare Advantage HMO and PPO plans, Medigap plans A through N, and Part D prescription drug plans from multiple carriers." },
          { q: "How do I find a Medicare insurance agent near Brandon?", a: "Our office is located in Brandon, FL. You can reach us at 813-699-5559 or schedule a free consultation online. We also offer phone and video appointments." },
          { q: "Can a Brandon Medicare agent help me during the Annual Enrollment Period?", a: "Yes. The Annual Enrollment Period (October 15 to December 7) is our busiest time of year. We help Brandon residents review their current plan, compare alternatives, and switch if a better option is available." },
        ],
        relatedLinks: [
          { label: "Medicare Agent Brandon", href: "/medicare-agent-brandon" },
          { label: "Medicare Consulting Brandon", href: "/medicare-consulting-services-brandon" },
          { label: "Medicare Enrollment Brandon", href: "/medicare-enrollment-assistance-in-brandon-fl" },
          { label: "Medicare Advantage", href: "/medicare-advantage" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
  );
}
