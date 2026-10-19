import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";
const CONFIG = {
  "city": "Brandon",
  "cityFull": "Brandon, FL",
  "county": "Hillsborough County",
  "slug": "brandon",
  "pageType": "local-agent" as const,
  "headline": "Medicare Help in Brandon, FL",
  "subheadline": "Get help comparing Medicare coverage with an independent team at 915 Oakfield Dr, Suite A, Brandon. Review your doctors, prescriptions, pharmacies, and costs for the plans we represent. Consultations are available by appointment.",
  "bodyText": "Your Medicare choices should reflect your everyday care. Bring the doctors and pharmacy locations you use in Brandon, Valrico, Riverview, or Seffner, along with your current medication list. We can explain Medicare Advantage, Medigap, and Part D options and help you prepare questions to confirm with the plan. For 2027 coverage, compare the actual plan details for your home address and eligibility.",
  "servicesIntro": "Medicare Information Project helps Brandon residents prepare for Medicare enrollment, compare coverage, and review an existing plan. We explain the plans we represent, identify details that need confirmation, and help with eligible enrollment changes. A review does not require you to switch plans.",
  "benefits": [
    "Independent, licensed insurance agents",
    "No agency consultation fee",
    "Provider and prescription review for the exact plan and year",
    "Support for annual reviews and enrollment questions",
    "Brandon office serving nearby Hillsborough County communities",
    "Compare the plans we represent"
  ],
  "metaTitle": "Medicare Help in Brandon, FL | Plans and Local Agents",
  "metaDescription": "Get Medicare help in Brandon, FL. Compare coverage, check prescriptions and doctors, and schedule a free plan review at our local office.",
  "nearbyLandmarks": [
    "HCA Florida Brandon Hospital",
    "BayCare Medical Group locations",
    "Nearby specialists and outpatient facilities"
  ],
  "neighborhoods": [
    "Brandon",
    "Valrico",
    "Riverview",
    "Seffner"
  ],
  "officeNotes": [
    "Office visits by appointment",
    "Call before visiting"
  ],
  "agent": {
    "name": "Greg Wohl",
    "title": "Licensed Medicare Insurance Agent",
    "location": "Brandon, FL",
    "photoUrl": "/images/greg-wohl.webp",
    "description": "Meet Greg Wohl and the independent Medicare Information Project team. Visit by appointment or request a phone or video consultation."
  },
  "guidanceSection": {
    "title": "Prepare for Your Brandon Medicare Appointment",
    "intro": "Bring the information that helps us understand your current coverage and the care you want to keep.",
    "items": [
      "Current Medicare and insurance plan information",
      "Annual Notice of Change or non-renewal notice",
      "Medication names, strengths, quantities, and refill schedules",
      "Your doctors, office addresses, preferred hospital, and pharmacies",
      "Questions about bills, ongoing treatment, or next year’s changes"
    ]
  },
  "localSupportSection": {
    "nextSteps": [
      {
        "title": "Annual Medicare plan reviews",
        "description": "Review next year’s changes, doctors, prescriptions, pharmacies, and expected costs with a Brandon agent.",
        "href": "/medicare-consulting-services-brandon/"
      },
      {
        "title": "Compare 2027 prescription costs",
        "description": "Use your exact medications and preferred pharmacies to compare annual estimates and coverage restrictions.",
        "href": "/compare-medicare-prescription-costs-brandon/"
      },
      {
        "title": "Check doctor and hospital networks",
        "description": "Verify the exact Medicare plan, coverage year, providers, and office locations.",
        "href": "/check-medicare-doctor-hospital-networks-brandon-fl/"
      },
      {
        "title": "Turning 65 in Brandon",
        "description": "Prepare for your first Medicare enrollment and the coverage decisions that follow.",
        "href": "/turning-65-brandon-fl/"
      },
      {
        "title": "Working past 65 or retiring",
        "description": "Review employer coverage and Medicare timing before your current benefits change.",
        "href": "/medicare-and-employer-insurance-after-65-brandon-fl/"
      },
      {
        "title": "Helping a parent choose Medicare",
        "description": "Organize questions, documents, providers, and medications for a family consultation.",
        "href": "/helping-parent-choose-medicare-brandon-fl/"
      }
    ],
    "resources": [
      {
  "title": "After your 2027 Medicare enrollment",
  "description": "Check confirmation, cards, providers, prescriptions, and payments.",
  "href": "/after-enrolling-medicare-plan-brandon/"
},
      {
  "title": "Changing your AEP choice",
  "description": "Understand another eligible change before December 7.",
  "href": "/faqs/change-medicare-plan-again-before-december-7/"
},
      {
        "title": "Meet our licensed agents",
        "description": "Read team profiles and choose who you would like to speak with.",
        "href": "/our-team/"
      },
      {
        "title": "Office appointments and directions",
        "description": "Confirm the office address and request an appointment before visiting.",
        "href": "/contact/"
      },
      {
        "title": "Free SHINE counseling in Hillsborough County",
        "description": "Explore independent public counseling resources and appointment preparation.",
        "href": "/how-to-get-shine-medicare-counseling-hillsborough-county/"
      },
      {
        "title": "Official Medicare plan comparison",
        "description": "Use Medicare.gov for information about the options available in your area.",
        "href": "https://www.medicare.gov/plan-compare/",
        "external": true
      }
    ]
  },
  "faqs": [
    {
      "q": "What Medicare plans can Brandon residents compare?",
      "a": "Depending on eligibility and your home address, you may compare Medicare Advantage plans, standalone Part D drug plans, or Original Medicare with a Medicare Supplement policy. Availability, premiums, providers, and enrollment rules vary by plan and year. Our team helps review the plans we represent."
    },
    {
      "q": "Where is your Brandon Medicare office?",
      "a": "Medicare Information Project is at 915 Oakfield Dr, Suite A, Brandon, FL 33511. Visits are by appointment. Call 813-699-5559 to arrange an office, phone, or video consultation."
    },
    {
      "q": "Can you help if I already have Medicare?",
      "a": "Yes. Bring your current plan information, annual notices, prescriptions, preferred pharmacies, and provider names. We can review your coverage and the alternatives we represent. Your ability to change plans depends on your enrollment period and circumstances."
    },
    {
      "q": "When is Annual Enrollment for 2027 Medicare coverage?",
      "a": "The fall Annual Enrollment Period runs October 15 through December 7, 2026, for eligible Medicare Advantage and Part D changes effective January 1, 2027. Medigap follows separate enrollment rules."
    },
    {
      "q": "How do I check whether my Brandon doctor is in network?",
      "a": "Use your exact Medicare Advantage plan name, plan ID, coverage year, doctor, and office address. Confirm with the plan and the practice. Check hospitals and separately billing clinicians too. A practice accepting Medicare does not establish participation in every Advantage plan."
    },
    {
      "q": "Does a consultation cost anything?",
      "a": "Our consultations and enrollment assistance have no agency consultation fee. Agents are compensated by insurance carriers. Plan premiums and other coverage costs still apply. We do not offer every plan available in the area."
    }
  ],
  "relatedLinks": [
    {
      "label": "Compare Medicare Plans in Brandon",
      "href": "/comparing-medicare-plans-brandon/"
    },
    {
      "label": "Medicare Enrollment Help in Brandon",
      "href": "/medicare-enrollment-assistance-brandon/"
    },
    {
      "label": "Medicare Supplement Plans in Brandon",
      "href": "/medicare-supplement-insurance-plans-brandon/"
    },
    {
      "label": "Annual Plan Reviews in Brandon",
      "href": "/medicare-consulting-services-brandon/"
    },
    {
      "label": "Medicare Part D Coverage",
      "href": "/medicare-part-d/"
    }
  ]
};
const URL = "https://medicareinfopro.com/medicare-brandon-fl/";
export const metadata: Metadata = {
  title: { absolute: CONFIG.metaTitle + " | MIP" }, description: CONFIG.metaDescription,
  alternates: { canonical: URL }, robots: { index: true, follow: true },
  openGraph: { title: CONFIG.metaTitle, description: CONFIG.metaDescription, url: URL, type: "website" },
};
export default function Page() {
  const schema = [
    { "@context": "https://schema.org", "@type": "WebPage", "@id": `${URL}#webpage`, name: CONFIG.metaTitle, description: CONFIG.metaDescription, url: URL, dateModified: "2026-10-19", about: { "@id": "https://medicareinfopro.com/#organization" } },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: CONFIG.faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://medicareinfopro.com/" }, { "@type": "ListItem", position: 2, name: "Medicare in Brandon", item: URL }] },
  ];
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><LocalAgentPage config={CONFIG} /></>;
}
