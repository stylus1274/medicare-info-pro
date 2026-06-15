import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Local Medicare Agent Riverview FL | Medicare Information Project",
  description: "Find a local Medicare agent in Riverview, FL. Independent agents compare 17+ carriers at no cost to help you find the right Medicare plan.",
};

export default function Page() {
  return (
    <LocalAgentPage
      config={{
        city: "Riverview",
        cityFull: "Riverview, FL",
        county: "Hillsborough County",
        slug: "riverview",
        pageType: "local-agent",
        headline: "Local Medicare Agent in Riverview, FL",
        subheadline: "Riverview is one of the fastest-growing communities in Hillsborough County, and Medicare options here are expanding just as quickly. Our local agents help Riverview residents compare plans, verify doctor networks, and enroll with confidence.",
        metaTitle: "Local Medicare Agent Riverview FL | Medicare Information Project",
        metaDescription: "Find a local Medicare agent in Riverview, FL. Independent agents compare 17+ carriers at no cost to help you find the right Medicare plan.",
        nearbyLandmarks: [
          "AdventHealth Riverview",
          "HCA Florida Brandon Hospital",
          "St. Joseph's Hospital South",
          "BayCare Medical Group Riverview",
        ],
        neighborhoods: ["Riverview 33569", "Riverview 33578", "Riverview 33579", "Gibsonton 33534"],
        faqs: [
          { q: "Why use a local Medicare agent in Riverview?", a: "Riverview has multiple hospital systems nearby, including AdventHealth Riverview and HCA Florida Brandon Hospital. A local agent verifies which plans include your specific doctors and facilities before you enroll, saving you from unexpected out-of-network costs." },
          { q: "Is Medicare guidance free for Riverview residents?", a: "Yes. Our service is completely free. We are paid by insurance carriers, not by you, and your premium is identical whether you work with us or enroll directly." },
          { q: "What ZIP codes in Riverview do you serve?", a: "We serve all Riverview ZIP codes including 33569, 33578, and 33579. Plan availability can vary by ZIP code, so we always check your specific address." },
          { q: "How do I compare Medicare Advantage plans in Riverview?", a: "We pull all available Medicare Advantage plans for your ZIP code, compare premiums, copays, out-of-pocket maximums, and drug formularies, and help you identify the plan that best fits your health needs and budget." },
          { q: "When can Riverview residents change Medicare plans?", a: "The Annual Enrollment Period runs October 15 through December 7. New enrollees have a 7-month Initial Enrollment Period around their 65th birthday. Special Enrollment Periods apply for qualifying events." },
        ],
        relatedLinks: [
          { label: "Medicare Agent Riverview", href: "/medicare-agent-riverview" },
          { label: "Local Medicare Agent Apollo Beach", href: "/local-medicare-agent-apollo-beach" },
          { label: "Local Medicare Agent Valrico", href: "/local-medicare-agent-valrico" },
          { label: "Medicare Advantage Plans", href: "/medicare-advantage" },
          { label: "Free Consultation", href: "/free-consultation" },
        ],
      }}
    />
  );
}
