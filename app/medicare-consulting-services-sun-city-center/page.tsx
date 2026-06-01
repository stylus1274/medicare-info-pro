import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

export const metadata: Metadata = {
  title: "Medicare Consulting Services Sun City Center FL | Medicare Information Project",
  description: "Expert Medicare consulting services in Sun City Center, FL. We help seniors understand their options, avoid penalties, and choose the right plan at no cost.",
};

export default function Page() {
  return (
    <LocalAgentPage
      config={{
        city: "Sun City Center",
        cityFull: "Sun City Center, FL",
        county: "Hillsborough County",
        slug: "sun-city-center",
        pageType: "consulting",
        headline: "Medicare Consulting Services in Sun City Center, FL",
        subheadline: "Sun City Center is one of Florida's premier 55+ retirement communities — and Medicare decisions here matter more than almost anywhere. Our independent consultants help Sun City Center residents compare every available plan and choose the coverage that fits their retirement lifestyle.",
        metaTitle: "Medicare Consulting Services Sun City Center FL | Medicare Information Project",
        metaDescription: "Expert Medicare consulting services in Sun City Center, FL. We help seniors understand their options, avoid penalties, and choose the right plan at no cost.",
        nearbyLandmarks: [
          "HCA Florida South Shore Hospital",
          "AdventHealth Sun City Center",
          "Sun City Center Medical Associates",
          "St. Joseph's Hospital South",
        ],
        neighborhoods: ["Sun City Center 33573", "Ruskin 33570", "Apollo Beach 33572", "Wimauma 33598"],
        faqs: [
          {
            q: "What Medicare consulting services are available in Sun City Center?",
            a: "Our Sun City Center Medicare consulting service includes a full review of your health needs and retirement budget, a comparison of all Medicare Advantage, Medigap, and Part D plans available in ZIP 33573, verification that your doctors and specialists are in-network, enrollment assistance, and year-round support — all at no cost.",
          },
          {
            q: "Is Medicare consulting free for Sun City Center residents?",
            a: "Yes. Our services are completely free. We are compensated by insurance carriers when you enroll, and that compensation is identical regardless of which plan you choose. Our only goal is to find the plan that genuinely fits your retirement lifestyle.",
          },
          {
            q: "What Medicare plans are popular in Sun City Center?",
            a: "Sun City Center residents have access to a wide range of Medicare Advantage plans (HMO and PPO) with extra benefits like dental, vision, hearing, and fitness memberships, as well as comprehensive Medigap plans for those who prefer Original Medicare with predictable costs. The right choice depends on your specific doctors, medications, and how often you travel.",
          },
          {
            q: "Can you help me review my current Medicare plan in Sun City Center?",
            a: "Absolutely. We recommend an annual plan review for every Sun City Center resident. Plans change their premiums, formularies, and networks every year, and the plan that was best last year may not be the best this year. We review your plan every Annual Enrollment Period at no charge.",
          },
          {
            q: "Do you serve areas near Sun City Center?",
            a: "Yes. We serve all of South Shore Hillsborough County including Ruskin, Apollo Beach, Wimauma, Riverview, and surrounding communities.",
          },
        ],
        nearbyPages: [
          { label: "Medicare Consulting — Ruskin", href: "/medicare-consulting-services-ruskin" },
          { label: "Medicare Consulting — Apollo Beach", href: "/medicare-consulting-services-apollo-beach" },
          { label: "Medicare Agent — Sun City Center", href: "/medicare-insurance-agent-sun-city-center-fl" },
          { label: "Medicare Advantage Florida", href: "/medicare-advantage-florida" },
        ],
      }}
    />
  );
}
