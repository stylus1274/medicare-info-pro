import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Insurance Agent Brandon FL | Medicare Information Project",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-brandon-fl/",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Licensed Medicare insurance agents in Brandon, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost."
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": "https://medicareinfopro.com/medicare-insurance-agent-brandon-fl/#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed independent Medicare insurance agents in Brandon, FL serving Brandon, Valrico, Riverview, and Seffner. Free plan comparison across 17+ carriers.",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-brandon-fl/",
  "telephone": "+1-813-699-5559",
  "priceRange": "Free consultation",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "915 Oakfield Dr Ste A",
    "addressLocality": "Brandon",
    "addressRegion": "FL",
    "postalCode": "33511",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 27.9378,
    "longitude": -82.2859
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "areaServed": [
    {"@type": "City", "name": "Brandon"},
    {"@type": "City", "name": "Valrico"},
    {"@type": "City", "name": "Riverview"},
    {"@type": "City", "name": "Seffner"}
  ],
  "sameAs": [
    "https://www.facebook.com/medicareinfopro",
    "https://medicareinfopro.com"
  ],
  "parentOrganization": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;

const faqs = [
  {
    q: "What does a Medicare insurance agent in Brandon do?",
    a: "A licensed Medicare insurance agent helps you understand coverage choices, compare plans the agency represents, review doctors and prescriptions, and complete an enrollment application when you are eligible. At Medicare Information Project, you can meet with an agent in Brandon or arrange a phone or video consultation.",
  },
  {
    q: "Is working with a Medicare insurance agent free in Brandon?",
    a: "Medicare Information Project does not charge you a consultation or enrollment fee. Insurance carriers compensate us when you enroll in a plan we represent. Your plan premium is the same whether you enroll through us or directly with that carrier. We can explain which carriers and plans we represent before you compare options.",
  },
  {
    q: "What should I bring to a Medicare consultation?",
    a: "Have your current coverage information, Medicare card if you have one, a list of doctors and hospitals, and your prescriptions with dosages ready. Include your preferred pharmacy and any questions about retirement, employer insurance, or an upcoming coverage change. Bring these materials to your appointment rather than submitting Medicare numbers through a general contact form.",
  },
  {
    q: "Can you help check my Brandon doctors and prescriptions?",
    a: "Yes. We help review provider networks, prescription drug formularies, and pharmacy options for the plans we represent. Have the exact plan name, your doctors' names and locations, and medication details available. Provider participation and drug coverage can change, so confirm details for the plan and coverage year you are considering.",
  },
  {
    q: "Where is your Brandon office, and can I meet remotely?",
    a: "Our office is at 915 Oakfield Dr, Suite A, Brandon, FL 33511. Call 813-699-5559 to arrange a consultation. Phone and video appointments are also available for residents of Brandon and surrounding Hillsborough County communities.",
  },
  {
    q: "Can you help if I am turning 65 or leaving employer coverage?",
    a: "Yes. We can discuss your current coverage, expected coverage end date, and Medicare enrollment questions. Your next steps depend on your circumstances. Bring employer coverage details and important dates so an agent can help you understand what to check before making a change.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: 'Medicare Insurance Agent in Brandon, FL | Free Consultation | Medicare Information Project',
  description: 'Meet a licensed Medicare insurance agent in Brandon, FL. Get help comparing plans, doctors, prescriptions, and enrollment at no cost to you.',

  alternates: { canonical: "https://medicareinfopro.com/medicare-insurance-agent-brandon-fl/" },};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
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
        city: "Brandon",
        cityFull: "Brandon, FL",
        county: "Hillsborough County",
        slug: "brandon",
        pageType: "insurance-agent",
        headline: "Medicare Insurance Agent in Brandon, FL",
        subheadline: "Meet with a licensed Medicare insurance agent at our Brandon office or by phone or video. Get help comparing the plans we represent, checking your doctors and prescriptions, and understanding your enrollment options at no cost to you.",
        ctaLabel: "Request a Free Consultation",
        benefits: [
          "A Brandon office at 915 Oakfield Dr, Suite A",
          "Licensed, independent agents who explain the plans we represent",
          "Help reviewing your doctors, prescriptions, and preferred pharmacy",
          "Clear comparisons of premiums and other plan costs",
          "No consultation or enrollment fee charged by our agency",
          "Phone, video, and in-person appointments",
        ],
        servicesIntro: "Medicare Information Project helps Brandon residents compare Medicare options based on their coverage needs. Start with your doctors, medications, budget, and current insurance. We explain the plans we represent and help you understand the differences before you decide.",
        bodyText: 'Preparing for a conversation? Use our <a href="/check-medicare-doctor-hospital-networks-brandon-fl/" class="text-[#1a3fa8] underline underline-offset-2">Brandon doctor and hospital network checklist</a> and <a href="/compare-medicare-prescription-costs-brandon/" class="text-[#1a3fa8] underline underline-offset-2">guide to comparing Medicare prescription costs in Brandon</a>. If you are retiring, review our <a href="/medicare-and-employer-insurance-after-65-brandon-fl/" class="text-[#1a3fa8] underline underline-offset-2">Brandon Medicare and employer insurance guide</a> before changing your coverage.',
        consultationSection: {
          title: "What Happens During Your Free Medicare Consultation",
          intro: "You do not need to choose a plan before contacting us. The conversation starts with your situation and the questions you want answered.",
          steps: [
            {
              title: "Tell us what you need help with",
              description: "Let us know if you are new to Medicare, leaving employer insurance, moving to Brandon, or reviewing your current plan. We discuss your current coverage and any dates that may affect your next steps.",
            },
            {
              title: "Review plans around your care and budget",
              description: "We help compare the plans we represent using your doctors, prescriptions, preferred pharmacy, and expected costs. Ask about premiums, out-of-pocket expenses, and provider networks rather than choosing on the premium alone.",
            },
            {
              title: "Understand your options and next steps",
              description: "An agent explains the comparison and answers your questions. If you choose a plan we represent and are eligible to enroll, we can help with the application. You can also take time to consider your options without an obligation to enroll.",
            },
          ],
        },
        guidanceSection: {
          title: "What to Have Ready for Your Appointment",
          intro: "Bring these details to your in-person appointment or have them available for a phone or video call. Do not enter Medicare numbers or medical details into a general callback form.",
          items: [
            "Your Medicare card, if you have one, and information about your current insurance",
            "Your doctors' names, office locations, and hospitals you want to check",
            "Prescription names, dosages, refill frequency, and preferred pharmacy",
            "Questions about plan costs, travel, or a change in your coverage",
            "Any employer coverage end date or other enrollment dates you need to discuss",
          ],
        },
        agent: {
          name: "Greg Wohl",
          title: "Licensed Medicare Agent",
          location: "Brandon, FL",
          photoUrl: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png",
          description: "Talk with Greg Wohl about your Medicare questions, the plans the agency represents, and what to review before enrolling. Consultations are available in Brandon, by phone, or by video.",
        },
        metaTitle: "Medicare Insurance Agent Brandon FL | Medicare Information Project",
        metaDescription: "Licensed Medicare insurance agents in Brandon, FL. Compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers at no cost.",
        nearbyLandmarks: [
          "HCA Florida Brandon Hospital",
          "AdventHealth Brandon",
          "BayCare Medical Group Brandon",
          "St. Joseph's Hospital",
        ],
        neighborhoods: ["Brandon 33510", "Brandon 33511", "Dover 33527", "Valrico 33594"],
        faqs,
        relatedLinks: [
          { label: "Check Brandon Doctors and Hospital Networks", href: "/check-medicare-doctor-hospital-networks-brandon-fl/" },
          { label: "Compare Prescription Costs in Brandon", href: "/compare-medicare-prescription-costs-brandon/" },
          { label: "Medicare Advantage Plans in Brandon", href: "/medicare-advantage-plans-brandon-florida/" },
          { label: "Turning 65 in Brandon", href: "/turning-65-brandon-fl/" },
          { label: "Medicare and Employer Insurance After 65", href: "/medicare-and-employer-insurance-after-65-brandon-fl/" },
        ],
      }}
    />
    </>
  );
}
