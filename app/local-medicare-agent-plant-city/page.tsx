import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

export const metadata: Metadata = {
  title: "Local Medicare Agent Plant City FL | Medicare Information Project",
  description: "Find a local Medicare agent in Plant City, FL. Independent agents compare 17+ carriers at no cost to help you find the right Medicare plan.",
};

export default function Page() {
  return (
    <LocalAgentPage
      config={{
        city: "Plant City",
        cityFull: "Plant City, FL",
        county: "Hillsborough County",
        slug: "plant-city",
        pageType: "local-agent",
        headline: "Local Medicare Agent in Plant City, FL",
        subheadline: "Independent Medicare guidance for Plant City and eastern Hillsborough County. We compare plans from 17+ carriers at no cost, with local knowledge of the doctors and hospitals you rely on.",
        metaTitle: "Local Medicare Agent Plant City FL | Medicare Information Project",
        metaDescription: "Find a local Medicare agent in Plant City, FL. Independent agents compare 17+ carriers at no cost to help you find the right Medicare plan.",
        nearbyLandmarks: [
          "HCA Florida Brandon Hospital",
          "AdventHealth Plant City",
          "BayCare Medical Group Plant City",
          "St. Joseph's Hospital",
        ],
        neighborhoods: ["Plant City 33563", "Plant City 33565", "Plant City 33566", "Seffner 33584", "Valrico 33594"],
        faqs: [
          { q: "Why use a local Medicare agent in Plant City?", a: "A local agent understands which Medicare Advantage plans have strong networks at AdventHealth Plant City and HCA Florida Brandon Hospital. We verify your specific doctors and specialists are covered before recommending any plan." },
          { q: "Is Medicare guidance free in Plant City?", a: "Yes. Our service is completely free to Plant City residents. Insurance carriers compensate us, not you. Your premium is the same whether you work with us or enroll on your own." },
          { q: "What Medicare plans are available in Plant City?", a: "Plant City residents across ZIP codes 33563, 33565, and 33566 have access to Medicare Advantage, Medigap, and Part D plans. We compare all available options in your specific ZIP code." },
          { q: "How do I avoid Medicare penalties in Plant City?", a: "Part B late enrollment penalties are permanent and add 10% to your premium for every 12-month period you delayed enrollment. We help Plant City residents identify their exact enrollment window and avoid costly mistakes." },
          { q: "Can I get help with Medicare if I am still working in Plant City?", a: "Yes. If you have employer coverage, your enrollment rules are different. We help Plant City residents who are still working understand how their employer plan coordinates with Medicare and when to enroll." },
        ],
        relatedLinks: [
          { label: "Local Medicare Agent Valrico", href: "/local-medicare-agent-valrico" },
          { label: "Local Medicare Agent Riverview", href: "/local-medicare-agent-riverview" },
          { label: "Still Working?", href: "/still-working" },
          { label: "Free Consultation", href: "/free-consultation" },
          { label: "Enrollment Timeline", href: "/enrollment-timeline" },
        ],
      }}
    />
  );
}
