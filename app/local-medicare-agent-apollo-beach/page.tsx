import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Local Medicare Agent Apollo Beach FL | Medicare Information Project",
  description: "Find a local Medicare agent in Apollo Beach, FL. Independent agents compare 17+ carriers at no cost to help you find the right Medicare plan.",
};

export default function Page() {
  return (
    <LocalAgentPage
      config={{
        city: "Apollo Beach",
        cityFull: "Apollo Beach, FL",
        county: "Hillsborough County",
        slug: "apollo-beach",
        pageType: "local-agent",
        headline: "Local Medicare Agent in Apollo Beach, FL",
        subheadline: "A truly local Medicare agent knows your community, your hospitals, and your doctors. We serve Apollo Beach and South Hillsborough County with free, independent Medicare guidance from agents who live and work in this area.",
        metaTitle: "Local Medicare Agent Apollo Beach FL | Medicare Information Project",
        metaDescription: "Find a local Medicare agent in Apollo Beach, FL. Independent agents compare 17+ carriers at no cost to help you find the right Medicare plan.",
        nearbyLandmarks: [
          "HCA Florida South Tampa Hospital",
          "AdventHealth Riverview",
          "Bayfront Health Sun City Center",
          "BayCare Medical Group South County",
        ],
        neighborhoods: ["Apollo Beach 33572", "Ruskin 33570", "Sun City Center 33573", "Gibsonton 33534"],
        faqs: [
          { q: "Why choose a local Medicare agent in Apollo Beach?", a: "A local agent knows which Medicare Advantage plans have strong networks at nearby hospitals like AdventHealth Riverview and Bayfront Health Sun City Center. They understand the South Hillsborough County healthcare landscape and can verify your specific doctors are covered before you enroll." },
          { q: "Is your service free for Apollo Beach residents?", a: "Yes. Our Medicare guidance is completely free. We are compensated by insurance carriers, not by you. Your premium is identical whether you work with us or enroll directly." },
          { q: "What Medicare plans are available in Apollo Beach?", a: "Apollo Beach (ZIP 33572) has access to Medicare Advantage, Medigap, and Part D plans from multiple carriers. We compare all available options in your ZIP code." },
          { q: "Can I meet with a local agent in person near Apollo Beach?", a: "Our Brandon office is about 20 minutes from Apollo Beach. We also offer free phone and video consultations for your convenience." },
          { q: "When can I change my Medicare plan in Apollo Beach?", a: "The Annual Enrollment Period (October 15 to December 7) is the main window to switch plans. Special Enrollment Periods are available for qualifying life events such as moving or losing other coverage." },
        ],
        relatedLinks: [
          { label: "Medicare Agent Apollo Beach", href: "/medicare-agent-apollo-beach" },
          { label: "Local Medicare Agent Sun City", href: "/local-medicare-agent-sun-city" },
          { label: "Local Medicare Agent Riverview", href: "/local-medicare-agent-riverview" },
          { label: "Free Consultation", href: "/free-consultation" },
          { label: "Medicare 101 Overview", href: "/medicare-101" },
        ],
      }}
    />
  );
}
