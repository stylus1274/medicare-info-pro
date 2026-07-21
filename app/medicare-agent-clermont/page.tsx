import type { Metadata } from "next";
import LocalAgentPage from "../../components/LocalAgentPage";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Medicare Information Pro - Medicare Agent Clermont FL",
  "description": "Licensed independent Medicare agents serving Clermont and Lake County, FL. Free consultations for Medicare Advantage, Medigap, and Part D plans.",
  "url": "https://medicareinfopro.com/medicare-agent-clermont/",
  "telephone": "727-560-8850",
  "areaServed": {
    "@type": "City",
    "name": "Clermont",
    "containedInPlace": {
      "@type": "State",
      "name": "Florida"
    }
  },
  "serviceType": "Medicare Insurance Agent",
  "priceRange": "Free Consultation"
};

export const metadata: Metadata = {
  title: "Medicare Agent in Clermont FL | Licensed Medicare Insurance Help",
  description: "Looking for a licensed Medicare agent in Clermont, FL? We serve Lake County residents with free, unbiased Medicare Advantage, Medigap, and Part D plan guidance. No pressure, no cost.",
  keywords: [
    "medicare agent clermont fl",
    "medicare agent clermont florida",
    "medicare insurance agent clermont",
    "medicare help clermont fl",
    "medicare advisor clermont florida",
    "medicare plans clermont fl",
    "local medicare agent clermont",
    "medicare broker clermont florida",
    "lake county medicare agent clermont",
    "south lake county medicare",
  ],
  openGraph: {
    title: "Medicare Agent in Clermont FL | Licensed Medicare Insurance Help",
    description: "Looking for a licensed Medicare agent in Clermont, FL? We serve Lake County residents with free, unbiased Medicare Advantage, Medigap, and Part D plan guidance. No pressure, no cost.",
    url: "https://medicareinfopro.com/medicare-agent-clermont/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-agent-clermont/",
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
          city: "Clermont",
          cityFull: "Clermont, FL",
          county: "Lake County",
          slug: "clermont",
          headline: "Medicare Agent in Clermont, FL",
          subheadline: "Clermont is one of the fastest-growing cities in Florida, drawing retirees and active adults from across the country to its rolling hills, lakefront communities, and proximity to Orlando. Our licensed independent agents help Clermont residents compare every Medicare plan available in their ZIP code, verify their doctors are in-network, and enroll with confidence. Free consultations, no pressure.",
          bodyText: "Whether you are turning 65, relocating from out of state to a South Lake County community, or reviewing your current plan during the Annual Enrollment Period, the Medicare landscape in Clermont can feel complex. The city sits at the crossroads of Lake and Orange counties, which means residents may have access to plans from both county markets. Our agents help you cut through the noise, confirm that your doctors at South Lake Hospital or AdventHealth Clermont are covered, review your drug formulary, and choose the plan that fits your budget and your health. There is no cost to you and no obligation.",
          metaTitle: "Medicare Agent in Clermont FL | Licensed Medicare Insurance Help",
          metaDescription: "Looking for a licensed Medicare agent in Clermont, FL? We serve Lake County residents with free, unbiased Medicare Advantage, Medigap, and Part D plan guidance. No pressure, no cost.",
          agent: {
            name: "Kelly Webb",
            title: "Licensed Medicare Agent",
            location: "St. Petersburg, FL",
            photoUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/kelly-webb_13284fbb.png",
          },
          nearbyLandmarks: [
            "South Lake Hospital (AdventHealth)",
            "AdventHealth Clermont",
            "Orlando Health South Lake Hospital",
            "Lake-Sumter State College South Lake Campus",
            "Clermont National Training Center",
          ],
          neighborhoods: [
            "Clermont 34711",
            "Clermont 34714",
            "Clermont 34715",
            "Minneola",
            "Groveland",
            "Mascotte",
            "Montverde",
            "Ferndale",
            "Howey-in-the-Hills",
            "Oakland",
          ],
          testimonials: [
            {
              name: "Patricia M.",
              location: "Clermont, FL",
              text: "Kelly helped me find a Medicare Advantage plan that covers my doctors at South Lake Hospital and my prescriptions. I moved here from Ohio and had no idea where to start. The whole process was free and completely pressure-free.",
            },
            {
              name: "Robert H.",
              location: "Minneola, FL",
              text: "I was overwhelmed by the number of Medicare plans available in South Lake County. Kelly walked me through every option, checked my doctor network, and helped me pick the plan that made the most financial sense for my situation. I saved over $80 a month.",
            },
          ],
          faqs: [
            {
              q: "What Medicare plans are available in Clermont, FL?",
              a: "Clermont and South Lake County residents have access to Medicare Advantage plans from multiple carriers including Humana, UnitedHealthcare, Aetna, Florida Blue, Cigna, WellCare, Devoted Health, and others. Medicare Supplement (Medigap) plans are also available from a wide range of carriers. Plan availability, benefits, and premiums vary by ZIP code. We compare all plans available in your specific Clermont ZIP code at no cost.",
            },
            {
              q: "Do Medicare Advantage plans cover doctors at South Lake Hospital?",
              a: "Many Medicare Advantage plans in Lake County include South Lake Hospital (AdventHealth Clermont) in their networks, but network participation varies by carrier and changes annually. Before you enroll, we verify that your specific doctors and facilities are in-network for the plan year. Never assume your doctor is in-network without checking first.",
            },
            {
              q: "I moved to Clermont from out of state. How do I get Medicare coverage here?",
              a: "Moving to Florida from another state triggers a Special Enrollment Period (SEP) that allows you to enroll in or change a Medicare Advantage or Part D plan outside of the standard enrollment windows. This SEP typically lasts 60 days from your move date. We help out-of-state movers navigate this process and find the best plan available in their new Clermont ZIP code.",
            },
            {
              q: "Is Clermont a good area for Medicare Advantage plans?",
              a: "Yes. South Lake County has a large and rapidly growing Medicare-eligible population, and carriers compete actively for members in this market. Many $0-premium plans with dental, vision, hearing, and drug coverage are available. Clermont's proximity to Orlando also means access to a wide range of specialist networks.",
            },
            {
              q: "Can a Medicare agent in Clermont help me switch plans during the Annual Enrollment Period?",
              a: "Yes. The Annual Enrollment Period (AEP) runs from October 15 to December 7 each year. During this window, you can switch Medicare Advantage plans, switch from Medicare Advantage to Original Medicare, or change your Part D drug plan. We review your current plan against all available options each year to make sure you are still in the best plan for your situation.",
            },
          ],
          relatedLinks: [
            { label: "Medicare Supplement Plans Clermont", href: "/medicare-supplement-insurance-plans-clermont" },
            { label: "Compare Medicare Plans Clermont", href: "/comparing-medicare-plans-clermont" },
            { label: "Medicare Advantage Plans Clermont", href: "/medicare-advantage-plans-clermont-florida" },
            { label: "Medicare Enrollment Assistance Clermont", href: "/medicare-enrollment-assistance-clermont" },
            { label: "Medicare Agent Leesburg", href: "/medicare-agent-leesburg" },
            { label: "Medicare Agent The Villages", href: "/medicare-agent-the-villages" },
            { label: "Medicare Advantage vs. Medigap Guide", href: "/original-vs-advantage" },
            { label: "Free Consultation", href: "/free-consultation" },
          ],
        }}
      />
    </>
  );
}
