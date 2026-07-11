import type { Metadata } from "next";
import LocalAgentPage from "../../components/LocalAgentPage";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Medicare Information Pro - Medicare Agent Ocala FL",
  "description": "Licensed independent Medicare agents serving Ocala and Marion County, FL. Free consultations for Medicare Advantage, Medigap, and Part D plans.",
  "url": "https://medicareinfopro.com/medicare-agent-ocala/",
  "telephone": "813-699-5559",
  "areaServed": {
    "@type": "City",
    "name": "Ocala",
    "containedInPlace": {
      "@type": "State",
      "name": "Florida"
    }
  },
  "serviceType": "Medicare Insurance Agent",
  "priceRange": "Free Consultation"
};

export const metadata: Metadata = {
  title: "Medicare Agent in Ocala FL | Licensed Medicare Insurance Help",
  description: "Looking for a licensed Medicare agent in Ocala, FL? We serve Marion County residents with free, unbiased Medicare Advantage, Medigap, and Part D plan guidance. No pressure, no cost.",
  keywords: [
    "medicare agent ocala fl",
    "medicare agent ocala florida",
    "medicare insurance agent ocala",
    "medicare help ocala fl",
    "medicare advisor ocala florida",
    "medicare plans ocala fl",
    "local medicare agent ocala",
    "medicare broker ocala florida",
  ],
  openGraph: {
    title: "Medicare Agent in Ocala FL | Licensed Medicare Insurance Help",
    description: "Looking for a licensed Medicare agent in Ocala, FL? We serve Marion County residents with free, unbiased Medicare Advantage, Medigap, and Part D plan guidance. No pressure, no cost.",
    url: "https://medicareinfopro.com/medicare-agent-ocala/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-agent-ocala/",
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
          city: "Ocala",
          cityFull: "Ocala, FL",
          county: "Marion County",
          slug: "ocala",
          headline: "Medicare Agent in Ocala, FL",
          subheadline: "Marion County has one of the highest concentrations of Medicare-eligible residents in Florida. Our licensed independent agents help Ocala residents compare every plan available in their ZIP code, verify their doctors are in-network, and enroll with confidence. Free consultations, no pressure.",
          metaTitle: "Medicare Agent in Ocala FL | Licensed Medicare Insurance Help",
          metaDescription: "Looking for a licensed Medicare agent in Ocala, FL? We serve Marion County residents with free, unbiased Medicare Advantage, Medigap, and Part D plan guidance. No pressure, no cost.",
          agent: {
            name: "Greg Wohl",
            title: "Licensed Medicare Agent",
            location: "Brandon FL",
            photoUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png",
          },
          nearbyLandmarks: [
            "Ocala Regional Medical Center",
            "AdventHealth Ocala",
            "HCA Florida Ocala Hospital",
            "UF Health Ocala",
            "Munroe Regional Medical Center",
          ],
          neighborhoods: [
            "Ocala 34470",
            "Ocala 34471",
            "Ocala 34472",
            "Ocala 34473",
            "Ocala 34474",
            "Ocala 34476",
            "Ocala 34480",
            "Ocala 34481",
            "On Top of the World",
            "Stone Creek",
            "Fore Ranch",
            "Silver Springs Shores",
            "Belleview",
            "Dunnellon",
          ],
          testimonials: [
            {
              name: "Patricia M.",
              location: "Ocala, FL",
              text: "Greg helped me find a Medicare Advantage plan that covers my doctors at AdventHealth Ocala and my prescriptions. I was paying too much with my old plan and had no idea better options existed. The whole process was free and there was no pressure at all.",
            },
            {
              name: "Harold S.",
              location: "On Top of the World, Ocala FL",
              text: "Living in On Top of the World, I have a lot of neighbors who talk about Medicare plans. Greg gave me a thorough comparison of every plan available in my ZIP code and helped me pick the one that made the most financial sense. I saved over $100 a month.",
            },
          ],
          faqs: [
            {
              q: "What Medicare plans are available in Ocala, FL?",
              a: "Ocala and Marion County residents have access to Medicare Advantage plans from multiple carriers including Humana, Aetna, UnitedHealthcare, Florida Blue, WellCare, Simply Healthcare, and others. Medicare Supplement (Medigap) plans are also available from a wide range of carriers. Plan availability, benefits, and premiums vary by ZIP code. We compare all plans available in your specific Ocala ZIP code at no cost.",
            },
            {
              q: "Do Medicare Advantage plans cover doctors at AdventHealth Ocala and Ocala Regional?",
              a: "Many Medicare Advantage plans in Marion County include AdventHealth Ocala, Ocala Regional Medical Center, and HCA Florida Ocala Hospital in their networks, but network participation varies by carrier and changes annually. Before you enroll, we verify that your specific doctors and facilities are in-network for the plan year.",
            },
            {
              q: "Is Ocala a good area for Medicare Advantage plans?",
              a: "Yes. Marion County consistently ranks among the top Florida counties for Medicare Advantage plan availability and enrollment. The high concentration of Medicare-eligible residents in Ocala means carriers compete aggressively for members, which often results in strong plan benefits and competitive premiums. Many $0-premium plans with dental, vision, and drug coverage are available.",
            },
            {
              q: "How do I find the best Medicare plan for On Top of the World or Stone Creek?",
              a: "Plan availability and benefits are determined by your ZIP code, not just your city. Residents of On Top of the World (34481), Stone Creek, and other Ocala communities may have access to different plans than those in other parts of Marion County. We run a ZIP-code-specific comparison to identify every plan available at your address.",
            },
            {
              q: "Can a Medicare agent in Ocala help me switch plans during the Annual Enrollment Period?",
              a: "Yes. The Annual Enrollment Period (AEP) runs from October 15 to December 7 each year. During this window, you can switch Medicare Advantage plans, switch from Medicare Advantage to Original Medicare, or change your Part D drug plan. We review your current plan against all available options each year to make sure you are still in the best plan for your situation.",
            },
          ],
          relatedLinks: [
            { label: "Medicare Supplement Plans Ocala", href: "/medicare-supplement-insurance-plans-ocala" },
            { label: "Compare Medicare Plans Ocala", href: "/comparing-medicare-plans-ocala" },
            { label: "Medicare Advantage Plans Ocala", href: "/medicare-advantage-plans-ocala-florida" },
            { label: "Medicare Enrollment Assistance Ocala", href: "/medicare-enrollment-assistance-ocala" },
            { label: "Medicare Agent Gainesville", href: "/medicare-agent-gainesville" },
            { label: "Medicare Advantage vs. Medigap Guide", href: "/original-vs-advantage" },
            { label: "Free Consultation", href: "/free-consultation" },
          ],
        }}
      />
    </>
  );
}
