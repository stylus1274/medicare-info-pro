import type { Metadata } from "next";
import LocalAgentPage from "../../components/LocalAgentPage";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Medicare Information Pro - Medicare Supplement Plans Gainesville FL",
  "description": "Licensed Medicare agent helping Gainesville and Alachua County residents compare Medicare Supplement (Medigap) plans. Free, independent guidance with no pressure.",
  "url": "https://medicareinfopro.com/medicare-supplement-insurance-plans-gainesville/",
  "telephone": "813-699-5559",
  "areaServed": {
    "@type": "City",
    "name": "Gainesville",
    "containedInPlace": {
      "@type": "State",
      "name": "Florida"
    }
  },
  "serviceType": "Medicare Supplement Insurance",
  "priceRange": "Free Consultation"
};

export const metadata: Metadata = {
  title: "Medicare Supplement Insurance Plans in Gainesville FL | Medigap Help",
  description: "Compare Medicare Supplement (Medigap) plans in Gainesville, FL. Independent agents help Alachua County residents find the best Plan G, Plan N, or Plan F coverage. Free consultations.",
  keywords: [
    "medicare supplement insurance plans gainesville fl",
    "medigap plans gainesville florida",
    "medicare supplement gainesville fl",
    "plan g gainesville fl",
    "medigap gainesville florida",
    "medicare supplement insurance gainesville",
    "best medicare supplement plan gainesville",
  ],
  openGraph: {
    title: "Medicare Supplement Insurance Plans in Gainesville FL | Medigap Help",
    description: "Compare Medicare Supplement (Medigap) plans in Gainesville, FL. Independent agents help Alachua County residents find the best Plan G, Plan N, or Plan F coverage. Free consultations.",
    url: "https://medicareinfopro.com/medicare-supplement-insurance-plans-gainesville/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-supplement-insurance-plans-gainesville/",
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
          pageType: "supplement",
          city: "Gainesville",
          cityFull: "Gainesville, FL",
          county: "Alachua County",
          slug: "gainesville",
          headline: "Medicare Supplement Plans in Gainesville, FL",
          subheadline: "Medigap plans fill the gaps Original Medicare leaves behind. We compare all available Medicare Supplement carriers in Gainesville so you can keep your UF Health doctors and avoid unexpected out-of-pocket costs.",
          metaTitle: "Medicare Supplement Insurance Plans in Gainesville FL | Medigap Help",
          metaDescription: "Compare Medicare Supplement (Medigap) plans in Gainesville, FL. Independent agents help Alachua County residents find the best Plan G, Plan N, or Plan F coverage. Free consultations.",
          agent: {
            name: "Chris Gallimore",
            title: "Licensed Medicare Agent",
            location: "Brandon FL",
            photoUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/BWlfPJNxFqQKGDUL.jpeg",
          },
          nearbyLandmarks: [
            "UF Health Shands Hospital",
            "North Florida Regional Medical Center",
            "UF Health Family Medicine - Gainesville",
            "Malcom Randall VA Medical Center",
            "UF Health Physicians Specialty Clinics",
          ],
          neighborhoods: [
            "Gainesville 32601",
            "Gainesville 32603",
            "Gainesville 32605",
            "Gainesville 32608",
            "Haile Plantation",
            "Tioga",
            "Duck Pond",
            "Millhopper",
            "High Springs",
            "Newberry",
          ],
          testimonials: [
            {
              name: "Margaret S.",
              location: "Gainesville, FL",
              text: "I was paying too much for a Medicare Supplement plan I had for years. Chris compared all the carriers and found me the same Plan G coverage for $94 less per month. The switch took one phone call.",
            },
            {
              name: "Harold B.",
              location: "Gainesville, FL",
              text: "After my wife's hospital stay, we realized our Medicare Advantage plan had too many out-of-pocket costs. We switched to a Medigap Plan G and now we have predictable costs and can see any doctor at UF Health or North Florida Regional.",
            },
          ],
          faqs: [
            {
              q: "What is a Medicare Supplement plan and how does it work in Gainesville?",
              a: "A Medicare Supplement plan, also called Medigap, is private insurance that works alongside Original Medicare (Parts A and B) to cover costs Medicare does not pay, such as deductibles, copayments, and coinsurance. In Gainesville, Medigap plans are accepted at any provider that accepts Medicare, including UF Health Shands, North Florida Regional, and the Malcom Randall VA Medical Center.",
            },
            {
              q: "Which Medicare Supplement plan is best for Gainesville residents?",
              a: "Plan G is the most popular Medigap plan for new Medicare enrollees in Gainesville. It covers all Medicare-approved costs except the Part B deductible (currently $257 in 2026). Plan N is a lower-premium alternative with small copays for office visits. The best plan depends on your health, your doctors, and your budget. We compare all available plans in your ZIP code at no charge.",
            },
            {
              q: "Can I keep my UF Health doctors with a Medicare Supplement plan?",
              a: "Yes. Medicare Supplement plans do not have provider networks. As long as your doctor accepts Original Medicare, they accept your Medigap plan. UF Health Shands, North Florida Regional, and most Gainesville-area physicians accept Medicare, so you can see any of them with a Medigap plan without referrals or network restrictions.",
            },
            {
              q: "How much does a Medicare Supplement plan cost in Gainesville, FL?",
              a: "Medigap premiums in Gainesville vary by plan type, carrier, age, and gender. Plan G premiums for a 65-year-old in Alachua County typically range from $110 to $180 per month depending on the carrier. Because all carriers offer standardized benefits, the only difference is price and company reputation. We compare all carriers in your ZIP code to find the best rate.",
            },
            {
              q: "When is the best time to enroll in a Medicare Supplement plan in Gainesville?",
              a: "The best time is during your 6-month Medigap Open Enrollment Period, which begins the month you turn 65 and are enrolled in Medicare Part B. During this window, carriers cannot deny you coverage or charge more due to health conditions. After this window closes, you may be subject to medical underwriting, which can result in higher premiums or denial.",
            },
            {
              q: "Can I switch Medicare Supplement plans in Gainesville?",
              a: "Yes, but outside of your Open Enrollment Period you will generally need to pass medical underwriting to switch carriers. Florida does have a Birthday Rule that gives you a 30-day window each year around your birthday to switch to a plan with equal or lesser benefits without underwriting. We help Gainesville residents take advantage of this rule to lower their premiums.",
            },
          ],
          relatedLinks: [
            { label: "Medicare Agent Gainesville", href: "/medicare-agent-gainesville" },
            { label: "Compare Medicare Plans Gainesville", href: "/comparing-medicare-plans-gainesville" },
            { label: "Medicare Advantage Plans Gainesville", href: "/medicare-advantage-plans-gainesville-florida" },
            { label: "Medicare Enrollment Assistance Gainesville", href: "/medicare-enrollment-assistance-gainesville" },
            { label: "Medicare Supplement Plans Tallahassee", href: "/medicare-supplement-insurance-plans-tallahassee" },
            { label: "Medicare Supplement Plans Brandon", href: "/medicare-supplement-insurance-plans-brandon" },
            { label: "Medigap Plan Guide", href: "/medicare-supplement" },
            { label: "Free Consultation", href: "/free-consultation" },
          ],
        }}
      />
    </>
  );
}
