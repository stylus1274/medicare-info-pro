import type { Metadata } from "next";
import LocalAgentPage from "../../components/LocalAgentPage";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Medicare Information Pro - Medicare Supplement Plans Leesburg FL",
  "description": "Licensed independent Medicare agents helping Leesburg and Lake County residents compare Medicare Supplement (Medigap) plans. Free consultations.",
  "url": "https://medicareinfopro.com/medicare-supplement-insurance-plans-leesburg/",
  "telephone": "813-699-5559",
  "areaServed": {
    "@type": "City",
    "name": "Leesburg",
    "containedInPlace": {
      "@type": "State",
      "name": "Florida"
    }
  },
  "serviceType": "Medicare Supplement Insurance",
  "priceRange": "Free Consultation"
};

export const metadata: Metadata = {
  title: "Medicare Supplement Insurance Plans in Leesburg FL | Medigap Help",
  description: "Compare Medicare Supplement (Medigap) plans in Leesburg, FL. Independent agents help Lake County residents find the best Plan G, Plan N, or Plan F coverage. Free consultations.",
  keywords: [
    "medicare supplement leesburg fl",
    "medigap leesburg florida",
    "medicare supplement insurance leesburg",
    "plan g leesburg fl",
    "medicare supplement plans lake county",
    "medigap plans leesburg florida",
    "best medigap plan leesburg",
    "medicare supplement agent leesburg",
  ],
  openGraph: {
    title: "Medicare Supplement Insurance Plans in Leesburg FL | Medigap Help",
    description: "Compare Medicare Supplement (Medigap) plans in Leesburg, FL. Independent agents help Lake County residents find the best Plan G, Plan N, or Plan F coverage. Free consultations.",
    url: "https://medicareinfopro.com/medicare-supplement-insurance-plans-leesburg/",
    type: "website",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-supplement-insurance-plans-leesburg/",
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
          city: "Leesburg",
          cityFull: "Leesburg, FL",
          county: "Lake County",
          slug: "leesburg",
          headline: "Medicare Supplement Plans in Leesburg, FL",
          subheadline: "Medigap plans fill the gaps Original Medicare leaves behind. We compare all available Medicare Supplement carriers in Leesburg so you can keep your Leesburg Regional and AdventHealth doctors and avoid unexpected out-of-pocket costs.",
          bodyText: "With Original Medicare, you are responsible for the Part A deductible, the 20% Part B coinsurance, and various copays with no annual cap on your out-of-pocket costs. A Medicare Supplement plan covers most or all of those costs, giving you predictable monthly expenses and the freedom to see any doctor in the country who accepts Medicare. Plan G is the most popular choice for new enrollees, covering everything except the Part B deductible. Plan N offers lower premiums with modest copays for office and emergency room visits. Because Medigap benefits are standardized by the federal government, the only difference between carriers is the premium. Our agents compare rates from every carrier available in your Leesburg ZIP code so you get the best value for identical coverage.",
          metaTitle: "Medicare Supplement Insurance Plans in Leesburg FL | Medigap Help",
          metaDescription: "Compare Medicare Supplement (Medigap) plans in Leesburg, FL. Independent agents help Lake County residents find the best Plan G, Plan N, or Plan F coverage. Free consultations.",
          agent: {
            name: "Jennifer C. Loader-Wohl",
            title: "Licensed Medicare Agent",
            location: "Brandon, FL",
            photoUrl: "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/TSQcrEEFLcDPIxvF.jpeg",
          },
          nearbyLandmarks: [
            "Leesburg Regional Medical Center",
            "AdventHealth Waterman",
            "UF Health The Villages Hospital",
            "Lake-Sumter State College",
            "Tavares Regional Hospital",
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
            "Howey-in-the-Hills",
          ],
          testimonials: [
            {
              name: "Carol B.",
              location: "Leesburg, FL",
              text: "Jennifer compared Medicare Supplement rates from five different carriers for me and found a Plan G that was $35 a month less than what I had been quoted. The coverage is exactly the same, so the only difference was the price. I would not have known to shop around.",
            },
            {
              name: "Thomas R.",
              location: "Tavares, FL",
              text: "After a hospital stay that left me with unexpected bills under my Medicare Advantage plan, I decided to switch to a Medigap Plan G. Jennifer walked me through the transition and made sure I had no coverage gaps. Now I know exactly what my costs will be every month.",
            },
          ],
          faqs: [
            {
              q: "What is the difference between Medicare Supplement and Medicare Advantage in Leesburg?",
              a: "Medicare Supplement (Medigap) plans work alongside Original Medicare to cover your out-of-pocket costs, such as deductibles and coinsurance. You can see any doctor or hospital in the country that accepts Medicare. Medicare Advantage (Part C) replaces Original Medicare with a private plan that typically has a network of providers. Advantage plans often have $0 premiums and extra benefits like dental and vision, but you are limited to in-network providers. The right choice depends on your health, your doctors, and how much you travel.",
            },
            {
              q: "What Medicare Supplement plans are available in Leesburg, FL?",
              a: "Leesburg and Lake County residents have access to all standardized Medigap plans including Plan G, Plan N, Plan F (for those eligible before January 1, 2020), and others. Plan G is the most comprehensive option for new enrollees and covers everything except the annual Part B deductible. Plan N offers lower premiums with small copays for office and emergency room visits. We compare rates from all carriers available in your ZIP code.",
            },
            {
              q: "Can I keep my doctors at Leesburg Regional Medical Center with a Medigap plan?",
              a: "Yes. Medicare Supplement plans have no provider networks. You can see any doctor or use any hospital in the United States that accepts Original Medicare, including Leesburg Regional Medical Center, AdventHealth Waterman, and UF Health The Villages Hospital. This is one of the biggest advantages of Medigap over Medicare Advantage for residents who want maximum flexibility.",
            },
            {
              q: "When is the best time to enroll in a Medicare Supplement plan in Leesburg?",
              a: "The best time is during your 6-month Medigap Open Enrollment Period, which begins the month you turn 65 and enroll in Medicare Part B. During this window, insurers cannot deny you coverage or charge higher premiums based on your health history. After this window closes, you may be subject to medical underwriting, which means you could be denied or charged more if you have pre-existing conditions.",
            },
            {
              q: "Do Medicare Supplement premiums increase over time in Florida?",
              a: "Yes. Medigap premiums typically increase annually as you age and as the carrier adjusts rates. The rate of increase varies by carrier and plan. Shopping and comparing carriers at enrollment, and periodically reviewing your rate against competitors, can help you manage costs over time. Our agents compare current rates across all available carriers to help you start with the best value.",
            },
          ],
          relatedLinks: [
            { label: "Medicare Agent Leesburg", href: "/medicare-agent-leesburg" },
            { label: "Compare Medicare Plans Leesburg", href: "/comparing-medicare-plans-leesburg" },
            { label: "Medicare Advantage Plans Leesburg", href: "/medicare-advantage-plans-leesburg-florida" },
            { label: "Medicare Enrollment Assistance Leesburg", href: "/medicare-enrollment-assistance-leesburg" },
            { label: "Medicare Supplement Plans The Villages", href: "/medicare-supplement-insurance-plans-the-villages" },
            { label: "Medicare Supplement Plans Ocala", href: "/medicare-supplement-insurance-plans-ocala" },
            { label: "Medicare Supplement Guide", href: "/medicare-supplement" },
            { label: "Free Consultation", href: "/free-consultation" },
          ],
        }}
      />
    </>
  );
}
