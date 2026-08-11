import type { Metadata } from "next";
import LocalAgentPage from "../../components/LocalAgentPage";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "name": "Medicare Information Pro - Medicare Agent Kissimmee FL",
  "description": "Licensed independent Medicare agents serving Kissimmee and Osceola County, FL. Free consultations for Medicare Advantage, Medigap, and Part D plans.",
  "url": "https://medicareinfopro.com/medicare-agent-kissimmee/",
  "telephone": "813-699-5559",
  "areaServed": {
    "@type": "City",
    "name": "Kissimmee",
    "containedInPlace": {
      "@type": "State",
      "name": "Florida"
    }
  },
  "serviceType": "Medicare Insurance Agent",
  "priceRange": "Free Consultation"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What Medicare plans are available in Kissimmee, FL?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Kissimmee residents have access to Medicare Advantage plans, Medicare Supplement plans, and Part D prescription drug plans. Availability, provider networks, premiums, and benefits can vary by ZIP code and plan year. An independent agent can compare the options available at your address."
      }
    },
    {
      "@type": "Question",
      "name": "Can a Medicare agent in Kissimmee check whether my doctor is in a plan network?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Before making a recommendation, an independent Medicare agent can verify the current network status of your doctors, specialists, and preferred hospitals with the carrier. Network participation can change, so it should be checked for the specific plan year."
      }
    },
    {
      "@type": "Question",
      "name": "When can I change Medicare plans in Kissimmee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most people can change Medicare Advantage or Part D plans during the Annual Enrollment Period, October 15 through December 7. Certain life events, including moving to Kissimmee from another coverage area, can create a Special Enrollment Period outside that window."
      }
    },
    {
      "@type": "Question",
      "name": "Does it cost anything to work with a Medicare agent in Kissimmee?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Medicare Information Pro provides consultations and plan comparisons at no cost to the client. Licensed agents are compensated by the insurance companies if an enrollment is completed, while the plan premium is the same whether you enroll with an agent or directly with the carrier."
      }
    }
  ]
} as const;

export const metadata: Metadata = {
  title: "Medicare Agent in Kissimmee FL | Licensed Medicare Insurance Help",
  description: "Looking for a licensed Medicare agent in Kissimmee, FL? Get free, independent help comparing Medicare Advantage, Medigap, and Part D plans available in Osceola County.",
  keywords: [
    "medicare agent kissimmee fl",
    "medicare agent kissimmee florida",
    "medicare insurance agent kissimmee",
    "medicare help kissimmee fl",
    "medicare advisor kissimmee florida",
    "medicare plans kissimmee fl",
    "local medicare agent kissimmee",
    "medicare broker osceola county",
  ],
  openGraph: {
    title: "Medicare Agent in Kissimmee FL | Licensed Medicare Insurance Help",
    description: "Get free, independent Medicare Advantage, Medigap, and Part D plan guidance for Kissimmee and Osceola County residents.",
    url: "https://medicareinfopro.com/medicare-agent-kissimmee/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-agent-kissimmee/",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LocalAgentPage
        config={{
          pageType: "agent",
          city: "Kissimmee",
          cityFull: "Kissimmee, FL",
          county: "Osceola County",
          slug: "kissimmee",
          headline: "Medicare Agent in Kissimmee, FL",
          subheadline: "Kissimmee residents have many Medicare choices, but the right fit depends on your doctors, prescriptions, budget, and travel needs. Our licensed independent agents compare Medicare plans available in your ZIP code, help you understand the trade-offs, and guide you through enrollment with no cost and no pressure.",
          bodyText: "Whether you are turning 65, relocating to Central Florida, or reviewing coverage during the Annual Enrollment Period, our team can make the process clearer. We review your doctors and medications, confirm plan networks and formularies, and help you compare Original Medicare with a Medicare Supplement plan against Medicare Advantage options. Plan availability can differ across Kissimmee ZIP codes and change each year, so a personalized comparison matters.",
          metaTitle: "Medicare Agent in Kissimmee FL | Licensed Medicare Insurance Help",
          metaDescription: "Looking for a licensed Medicare agent in Kissimmee, FL? Get free, independent help comparing Medicare Advantage, Medigap, and Part D plans available in Osceola County.",
          agent: {
            name: "Greg Wohl",
            title: "Founder & Licensed Agent",
            location: "Brandon, FL",
            photoUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png",
          },
          nearbyLandmarks: [
            "HCA Florida Osceola Hospital",
            "AdventHealth Kissimmee",
            "Osceola Community Health Services",
            "Orlando Health St. Cloud Hospital",
          ],
          neighborhoods: [
            "Kissimmee 34741",
            "Kissimmee 34742",
            "Kissimmee 34743",
            "Kissimmee 34744",
            "Kissimmee 34746",
            "Kissimmee 34747",
            "Poinciana",
            "St. Cloud",
          ],
          testimonials: [],
          faqs: [
            {
              q: "What Medicare plans are available in Kissimmee, FL?",
              a: "Kissimmee residents have access to Medicare Advantage plans, Medicare Supplement plans, and Part D prescription drug plans. Availability, provider networks, premiums, and benefits can vary by ZIP code and plan year. We compare the options available at your address so you can make an informed choice.",
            },
            {
              q: "Can a Medicare agent in Kissimmee check whether my doctor is in a plan network?",
              a: "Yes. Before making a recommendation, we can verify the current network status of your doctors, specialists, and preferred hospitals with the carrier. Network participation can change, so it should be checked for the specific plan year rather than assumed.",
            },
            {
              q: "I am moving to Kissimmee from another state. Can I change my Medicare plan?",
              a: "A move that changes your coverage area can create a Special Enrollment Period. This may allow you to change a Medicare Advantage or Part D plan outside the usual enrollment windows. The exact timing depends on when your previous coverage ended and when you moved, so it is important to review your situation promptly.",
            },
            {
              q: "When can I change Medicare plans in Kissimmee?",
              a: "Most people can change Medicare Advantage or Part D plans during the Annual Enrollment Period, October 15 through December 7. Certain life events, including moving or losing other qualifying coverage, can create a Special Enrollment Period outside that window.",
            },
            {
              q: "Does it cost anything to work with a Medicare agent in Kissimmee?",
              a: "No. Our consultations and plan comparisons are free to you. Licensed agents are compensated by the insurance companies if an enrollment is completed, while your premium is the same whether you enroll with an agent or directly with the carrier.",
            },
          ],
          relatedLinks: [
            { label: "Medicare Supplement Plans Kissimmee", href: "/medicare-supplement-insurance-plans-kissimmee" },
            { label: "Compare Medicare Plans Kissimmee", href: "/comparing-medicare-plans-kissimmee" },
            { label: "Medicare Advantage Plans Kissimmee", href: "/medicare-advantage-plans-kissimmee-florida" },
            { label: "Medicare Enrollment Assistance Kissimmee", href: "/medicare-enrollment-assistance-kissimmee" },
            { label: "Compare Medicare Plans in Clermont", href: "/comparing-medicare-plans-clermont" },
            { label: "Medicare Supplement Guide", href: "/medicare-supplement" },
            { label: "Free Medicare Consultation", href: "/free-consultation" },
          ],
        }}
      />
    </>
  );
}
