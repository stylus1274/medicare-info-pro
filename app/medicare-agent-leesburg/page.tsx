import type { Metadata } from "next";
import LocalAgentPage from "../../components/LocalAgentPage";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Medicare Information Pro - Medicare Agent Leesburg FL",
  "description": "Licensed independent Medicare agents serving Leesburg and Lake County, FL. Free consultations for Medicare Advantage, Medigap, and Part D plans.",
  "url": "https://medicareinfopro.com/medicare-agent-leesburg/",
  "telephone": "813-699-5559",
  "areaServed": {
    "@type": "City",
    "name": "Leesburg",
    "containedInPlace": {
      "@type": "State",
      "name": "Florida"
    }
  },
  "serviceType": "Medicare Insurance Agent",
  "priceRange": "Free Consultation"
};

export const metadata: Metadata = {
  title: "Medicare Agent in Leesburg FL | Licensed Medicare Insurance Help",
  description: "Looking for a licensed Medicare agent in Leesburg, FL? We serve Lake County residents with free, unbiased Medicare Advantage, Medigap, and Part D plan guidance. No pressure, no cost.",
  keywords: [
    "medicare agent leesburg fl",
    "medicare agent leesburg florida",
    "medicare insurance agent leesburg",
    "medicare help leesburg fl",
    "medicare advisor leesburg florida",
    "medicare plans leesburg fl",
    "local medicare agent leesburg",
    "medicare broker leesburg florida",
    "lake county medicare agent",
  ],
  openGraph: {
    title: "Medicare Agent in Leesburg FL | Licensed Medicare Insurance Help",
    description: "Looking for a licensed Medicare agent in Leesburg, FL? We serve Lake County residents with free, unbiased Medicare Advantage, Medigap, and Part D plan guidance. No pressure, no cost.",
    url: "https://medicareinfopro.com/medicare-agent-leesburg/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-agent-leesburg/",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <LocalAgentPage
        config={{
          pageType: "agent",
          city: "Leesburg",
          cityFull: "Leesburg, FL",
          county: "Lake County",
          slug: "leesburg",
          headline: "Medicare Agent in Leesburg, FL",
          subheadline: "Leesburg sits at the heart of Lake County, one of Florida's fastest-growing retirement destinations. Our licensed independent agents help Leesburg residents compare every Medicare plan available in their ZIP code, verify their doctors are in-network, and enroll with confidence. Free consultations, no pressure.",
          bodyText: "Whether you are turning 65, retiring from a Lake County employer, or reviewing your current plan during the Annual Enrollment Period, the choices can feel overwhelming. Leesburg is close to The Villages and Ocala, which means many residents have access to the same competitive Medicare Advantage and Medigap markets that serve those communities. Our agents help you cut through the noise, check that your doctors at Leesburg Regional Medical Center or AdventHealth Waterman are covered, review your drug formulary, and choose the plan that fits your budget and your health. There is no cost to you and no obligation.",
          metaTitle: "Medicare Agent in Leesburg FL | Licensed Medicare Insurance Help",
          metaDescription: "Looking for a licensed Medicare agent in Leesburg, FL? We serve Lake County residents with free, unbiased Medicare Advantage, Medigap, and Part D plan guidance. No pressure, no cost.",
          agent: {
            name: "Greg Wohl",
            title: "Licensed Medicare Agent",
            location: "Brandon, FL",
            photoUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png",
          },
          nearbyLandmarks: [
            "Leesburg Regional Medical Center",
            "AdventHealth Waterman",
            "UF Health The Villages Hospital",
            "Lake-Sumter State College",
            "The Villages Health System",
          ],
          neighborhoods: [
            "Leesburg 34748",
            "Leesburg 34788",
            "Fruitland Park",
            "Lady Lake",
            "Tavares",
            "Mount Dora",
            "Eustis",
            "Umatilla",
            "Altoona",
            "Howey-in-the-Hills",
          ],
          testimonials: [
            {
              name: "Dorothy K.",
              location: "Leesburg, FL",
              text: "Greg helped me find a Medicare Advantage plan that covers my doctors at Leesburg Regional and my prescriptions. I had been paying too much with my old plan and had no idea better options were available. The whole process was free and completely pressure-free.",
            },
            {
              name: "James W.",
              location: "Fruitland Park, FL",
              text: "I was overwhelmed by the number of Medicare plans available in Lake County. Greg walked me through every option, checked my doctor network, and helped me pick the plan that made the most financial sense for my situation. I saved over $90 a month.",
            },
          ],
          faqs: [
            {
              q: "What Medicare plans are available in Leesburg, FL?",
              a: "Leesburg and Lake County residents have access to Medicare Advantage plans from multiple carriers including Humana, UnitedHealthcare, Aetna, Florida Blue, Cigna, WellCare, Devoted Health, and others. Medicare Supplement (Medigap) plans are also available from a wide range of carriers. Plan availability, benefits, and premiums vary by ZIP code. We compare all plans available in your specific Leesburg ZIP code at no cost.",
            },
            {
              q: "Do Medicare Advantage plans cover doctors at Leesburg Regional Medical Center?",
              a: "Many Medicare Advantage plans in Lake County include Leesburg Regional Medical Center and AdventHealth Waterman in their networks, but network participation varies by carrier and changes annually. Before you enroll, we verify that your specific doctors and facilities are in-network for the plan year. Never assume your doctor is in-network without checking.",
            },
            {
              q: "How does living near The Villages affect my Medicare options in Leesburg?",
              a: "Leesburg sits in the same competitive Medicare market as The Villages and Sumter County. Lake County residents often have access to many of the same carriers and plan types, and the proximity to one of the largest retirement communities in the country means strong carrier competition and generous plan benefits. We run a ZIP-code-specific comparison to identify every plan available at your address.",
            },
            {
              q: "Is Leesburg a good area for Medicare Advantage plans?",
              a: "Yes. Lake County has a large and growing Medicare-eligible population, and carriers compete actively for members in this market. Many $0-premium plans with dental, vision, hearing, and drug coverage are available. The proximity to The Villages corridor makes Leesburg one of the better markets in Central Florida for Medicare Advantage benefits.",
            },
            {
              q: "Can a Medicare agent in Leesburg help me switch plans during the Annual Enrollment Period?",
              a: "Yes. The Annual Enrollment Period (AEP) runs from October 15 to December 7 each year. During this window, you can switch Medicare Advantage plans, switch from Medicare Advantage to Original Medicare, or change your Part D drug plan. We review your current plan against all available options each year to make sure you are still in the best plan for your situation.",
            },
          ],
          relatedLinks: [
            { label: "Medicare Supplement Plans Leesburg", href: "/medicare-supplement-insurance-plans-leesburg" },
            { label: "Compare Medicare Plans Leesburg", href: "/comparing-medicare-plans-leesburg" },
            { label: "Medicare Advantage Plans Leesburg", href: "/medicare-advantage-plans-leesburg-florida" },
            { label: "Medicare Enrollment Assistance Leesburg", href: "/medicare-enrollment-assistance-leesburg" },
            { label: "Medicare Agent The Villages", href: "/medicare-agent-the-villages" },
            { label: "Medicare Agent Ocala", href: "/medicare-agent-ocala" },
            { label: "Medicare Advantage vs. Medigap Guide", href: "/original-vs-advantage" },
            { label: "Free Consultation", href: "/free-consultation" },
          ],
        }}
      />
    </>
  );
}
