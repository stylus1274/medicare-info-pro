import type { Metadata } from "next";
import LocalAgentPage from "../../components/LocalAgentPage";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Medicare Information Pro - Compare Medicare Plans Gainesville FL",
  "description": "Independent Medicare agents helping Gainesville and Alachua County residents compare Medicare Advantage vs. Medicare Supplement plans. Free, unbiased guidance.",
  "url": "https://medicareinfopro.com/comparing-medicare-plans-gainesville/",
  "telephone": "813-699-5559",
  "areaServed": {
    "@type": "City",
    "name": "Gainesville",
    "containedInPlace": {
      "@type": "State",
      "name": "Florida"
    }
  },
  "serviceType": "Medicare Plan Comparison",
  "priceRange": "Free Consultation"
};

export const metadata: Metadata = {
  title: "Comparing Medicare Plans in Gainesville FL | Medicare Advantage vs Supplement",
  description: "Not sure which Medicare plan is right for you in Gainesville, FL? We compare Medicare Advantage vs. Medigap for Alachua County residents. Free, unbiased help from licensed agents.",
  keywords: [
    "comparing medicare plans gainesville fl",
    "medicare advantage vs supplement gainesville",
    "medicare plan comparison gainesville florida",
    "best medicare plan gainesville fl",
    "medicare options gainesville florida",
    "medicare advantage gainesville fl",
    "compare medicare gainesville",
  ],
  openGraph: {
    title: "Comparing Medicare Plans in Gainesville FL | Medicare Advantage vs Supplement",
    description: "Not sure which Medicare plan is right for you in Gainesville, FL? We compare Medicare Advantage vs. Medigap for Alachua County residents. Free, unbiased help from licensed agents.",
    url: "https://medicareinfopro.com/comparing-medicare-plans-gainesville/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/comparing-medicare-plans-gainesville/",
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
          city: "Gainesville",
          cityFull: "Gainesville, FL",
          county: "Alachua County",
          slug: "gainesville",
          headline: "Comparing Medicare Plans in Gainesville, FL",
          subheadline: "Medicare Advantage or Medicare Supplement? The right answer depends on your doctors, your medications, and how often you use healthcare. We help Gainesville residents make an informed, side-by-side comparison at no cost.",
          metaTitle: "Comparing Medicare Plans in Gainesville FL | Medicare Advantage vs Supplement",
          metaDescription: "Not sure which Medicare plan is right for you in Gainesville, FL? We compare Medicare Advantage vs. Medigap for Alachua County residents. Free, unbiased help from licensed agents.",
          agent: {
            name: "Paul Eckstein",
            title: "Licensed Medicare Agent",
            location: "Brandon FL",
            photoUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/LCWjVjohdZHMUbko.jpeg",
          },
          nearbyLandmarks: [
            "UF Health Shands Hospital",
            "North Florida Regional Medical Center",
            "Malcom Randall VA Medical Center",
            "UF Health Family Medicine",
            "Gainesville VA Outpatient Clinic",
          ],
          neighborhoods: [
            "Gainesville 32601",
            "Gainesville 32603",
            "Gainesville 32605",
            "Gainesville 32608",
            "Haile Plantation",
            "Tioga",
            "Newberry",
            "High Springs",
            "Alachua",
            "Waldo",
          ],
          testimonials: [
            {
              name: "Dorothy W.",
              location: "Gainesville, FL",
              text: "Paul walked me through a detailed comparison of every plan available in my ZIP code. I had no idea there were so many options. He helped me pick a Medicare Advantage plan that covers my cardiologist at UF Health and my prescriptions for under $30 a month.",
            },
            {
              name: "James F.",
              location: "Gainesville, FL",
              text: "I was confused about whether to go with Medicare Advantage or a Medigap plan. Paul explained the real differences clearly and without any pressure. I ended up with a Plan G that gives me complete freedom to see any doctor in Gainesville.",
            },
          ],
          faqs: [
            {
              q: "What is the difference between Medicare Advantage and Medicare Supplement in Gainesville?",
              a: "Medicare Advantage (Part C) replaces Original Medicare with a private plan that often includes dental, vision, and drug coverage, but uses provider networks. Medicare Supplement (Medigap) works alongside Original Medicare to cover out-of-pocket costs and has no networks, meaning you can see any doctor in Gainesville that accepts Medicare, including all UF Health and North Florida Regional providers.",
            },
            {
              q: "Which Medicare plan is better for Gainesville residents who use UF Health?",
              a: "Both plan types can work with UF Health, but the experience differs. With a Medigap plan, you can see any UF Health provider that accepts Medicare without referrals or network restrictions. With Medicare Advantage, you need to verify that your specific UF Health doctors are in the plan's network each year, as networks can change annually.",
            },
            {
              q: "Are there good Medicare Advantage plans available in Gainesville, FL?",
              a: "Yes. Gainesville and Alachua County have multiple Medicare Advantage carriers offering plans with $0 premiums, dental, vision, hearing, and prescription drug coverage. Plan quality and network breadth vary significantly by carrier. We compare all available plans in your specific ZIP code to identify which ones include your doctors and cover your medications.",
            },
            {
              q: "How do I compare Medicare Part D drug plans in Gainesville?",
              a: "Part D plan comparison depends on your specific medications. The same drug can cost dramatically different amounts across plans depending on formulary tier placement and pharmacy network. We run a formulary check against your current medication list to identify the Part D plan with the lowest total annual cost for your prescriptions in Gainesville.",
            },
            {
              q: "Can I switch from Medicare Advantage back to Original Medicare in Gainesville?",
              a: "Yes, but the timing matters. You can switch during the Annual Enrollment Period (October 15 to December 7) or the Medicare Advantage Open Enrollment Period (January 1 to March 31). If you want to add a Medigap plan after switching back, you may need to pass medical underwriting in Florida unless you qualify for a guaranteed issue right.",
            },
            {
              q: "How much does it cost to compare Medicare plans in Gainesville with your help?",
              a: "Nothing. Our plan comparison service is completely free. We are licensed independent agents compensated by the insurance carriers, not by you. Your monthly premium is the same whether you enroll through us or directly with the carrier. There is no obligation to enroll after a comparison.",
            },
          ],
          relatedLinks: [
            { label: "Medicare Agent Gainesville", href: "/medicare-agent-gainesville" },
            { label: "Medicare Supplement Plans Gainesville", href: "/medicare-supplement-insurance-plans-gainesville" },
            { label: "Medicare Advantage Plans Gainesville", href: "/medicare-advantage-plans-gainesville-florida" },
            { label: "Medicare Enrollment Assistance Gainesville", href: "/medicare-enrollment-assistance-gainesville" },
            { label: "Compare Medicare Plans Tallahassee", href: "/comparing-medicare-plans-tallahassee" },
            { label: "Medicare Advantage vs. Medigap Guide", href: "/original-vs-advantage" },
            { label: "Medicare Plan Comparison Tool", href: "/get-started" },
            { label: "Free Consultation", href: "/free-consultation" },
          ],
        }}
      />
    </>
  );
}
