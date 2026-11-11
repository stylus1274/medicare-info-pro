import type { Metadata } from "next";
import LocalAgentPage from "@/components/LocalAgentPage";

const url = "https://medicareinfopro.com/turning-65-brandon-fl/";
const title = "Turning 65 in Brandon, FL | Medicare Enrollment Help";
const description = "Turning 65 in Brandon, FL? Review Medicare enrollment timing, 2026 costs, employer coverage, and local help before choosing a plan.";
const faqs = [
  {
    q: "When should I start the Medicare process if I am turning 65 in Brandon?",
    a: "Start reviewing your situation 3 to 4 months before your 65th birthday month. For most people, the Initial Enrollment Period lasts seven months: the three months before the birthday month, that month, and the three months after it. A birthday on the first of the month can affect timing. Confirm your enrollment and coverage start dates with Medicare or Social Security.",
  },
  {
    q: "Do I automatically get Medicare when I turn 65 in Brandon?",
    a: "People receiving Social Security or Railroad Retirement Board benefits at least four months before turning 65 generally receive Parts A and B automatically. Others usually need to apply. Check your enrollment notice or Medicare card rather than assuming coverage has started. Most Part A and Part B applications go through Social Security; certain railroad beneficiaries use the Railroad Retirement Board.",
  },
  {
    q: "What Medicare plans are available to Brandon residents turning 65?",
    a: "Your choices may include Original Medicare with a separate Part D drug plan and, if eligible, a Medigap policy, or Medicare Advantage, which usually includes drug coverage. Availability and eligibility depend on your address, circumstances, and coverage year. Our agents compare the insurance plans the agency represents. There is no single plan count or premium that applies to everyone in Brandon.",
  },
  {
    q: "Will my Brandon doctors accept my new Medicare plan?",
    a: "Accepting Original Medicare is different from participating in a specific Medicare Advantage network. Check your exact plan name, plan identifier, coverage year, doctor, and office address with both the plan and the practice. Confirm hospitals and separately billing clinicians too. Do not assume a familiar insurer or hospital name guarantees coverage.",
  },
  {
    q: "What is the Medigap open enrollment window for Brandon residents?",
    a: "Your six-month federal Medigap Open Enrollment Period begins the first month you are at least 65 and enrolled in Part B. During this period, an insurer cannot deny a policy it sells or charge more because of health problems. Outside this window, underwriting may apply, but guaranteed issue rights or state protections may offer other opportunities. Confirm your rights before changing coverage.",
  },
  {
    q: "I am still working at 65 in Brandon. Do I need to enroll in Medicare?",
    a: "Review coverage through your or your spouse’s current employment before deciding. Employer size, how the group plan pays with Medicare, and any HSA contributions can affect timing. Ask the benefits administrator and Social Security to confirm your situation before delaying Part B. COBRA and retiree coverage do not generally extend the Part B Special Enrollment Period tied to current employment.",
  },
  {
    q: "How much does Medicare cost for someone turning 65 in Brandon?",
    a: "For 2026, the standard Part B premium is $202.90 per month and the annual Part B deductible is $283. Higher-income beneficiaries may pay more. Most people qualify for premium-free Part A based on Medicare-covered work. Medicare Advantage, Medigap, and Part D premiums and other costs vary. If your coverage starts in a different year, confirm that year’s amounts before budgeting.",
  },
  {
    q: "Where can I get free Medicare help in Brandon when I turn 65?",
    a: "Medicare Information Project offers consultations by appointment at 915 Oakfield Dr, Suite A, Brandon, FL 33511, and by phone or video. Call 813-699-5559 to request help. There is no agency consultation fee; agents may receive carrier compensation when an enrollment is completed. Premiums and other coverage costs still apply. We compare the plans we represent, not every plan available.",
  },
];
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "@id": `${url}#webpage`, name: title, url, description, dateModified: "2026-11-02", isPartOf: { "@id": "https://medicareinfopro.com/#website" }, publisher: { "@id": "https://medicareinfopro.com/#organization" }, breadcrumb: { "@id": `${url}#breadcrumb` } },
    { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://medicareinfopro.com/" },
      { "@type": "ListItem", position: 2, name: "Medicare in Brandon, FL", item: "https://medicareinfopro.com/medicare-brandon-fl/" },
      { "@type": "ListItem", position: 3, name: "Turning 65 in Brandon", item: url },
    ] },
    { "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
  ],
};

export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: url }, robots: { index: true, follow: true },
  openGraph: { title, description, url, type: "website" },
};

export default function Page() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <LocalAgentPage config={{
      city: "Brandon", cityFull: "Brandon, FL", county: "Hillsborough County", slug: "brandon", pageType: "enrollment",
      headline: "Turning 65 in Brandon, FL: Your Medicare Guide",
      subheadline: "Preparing for Medicare starts with your current coverage and the dates that apply to you. Our Brandon team helps organize your enrollment questions and compare the plans we represent. Missing an initial deadline does not automatically mean a penalty; an applicable Special Enrollment Period may change your options.",
      servicesIntro: "Medicare Information Project helps Brandon residents approaching 65 understand coverage choices and prepare for enrollment. We explain the plans we represent and help identify questions to confirm with Social Security, an employer benefits administrator, or an insurance plan.",
      bodyText: 'For <strong>2026</strong>, the standard Part B premium is <strong>$202.90 per month</strong> and the annual Part B deductible is <strong>$283</strong>. Higher-income beneficiaries may pay more. Most people qualify for premium-free Part A based on Medicare-covered work. <a href="https://www.cms.gov/newsroom/fact-sheets/2026-medicare-parts-b-premiums-deductibles" class="text-[#1a3fa8] underline">Check the official CMS 2026 figures</a>.<br /><br />Medicare Advantage, Medigap, and Part D costs vary by policy and personal circumstances. Request quotes for the year your coverage will start rather than relying on a broad local price range. These 2026 figures are not a quote for a later coverage year.<br /><br />Your Part A and Part B enrollment timing and your Medigap protections follow different rules. A Special Enrollment Period may apply to Part A or Part B, while guaranteed issue rights or state protections may provide Medigap opportunities outside the initial six-month window. Confirm what applies before delaying enrollment or ending existing coverage.',
      benefits: [
        "Independent, licensed insurance agents",
        "No agency consultation fee",
        "Compare the insurance plans we represent",
        "Help organizing enrollment and coverage questions",
        "Phone, video, and office appointments",
        "Brandon office serving nearby communities",
      ],
      metaTitle: title, metaDescription: description,
      nearbyLandmarks: ["HCA Florida Brandon Hospital", "BayCare Medical Group locations", "Nearby specialist and outpatient facilities"],
      neighborhoods: ["Brandon 33510", "Brandon 33511", "Dover 33527", "Valrico 33594", "Seffner 33584", "Riverview 33578"],
      officeNotes: ["Office visits by appointment", "Call before visiting"],
      guidanceSection: {
        title: "Prepare for Your Medicare Enrollment Conversation",
        intro: "Information checked November 2, 2026. Bring the details that help clarify your next steps; do not send Medicare numbers or medical details through a general website form.",
        items: [
          "Any Medicare card, enrollment notice, or confirmed Part A and Part B start dates",
          "Your current insurance and the dates any employer coverage will end",
          "Doctor names, office locations, prescriptions, and preferred pharmacies",
          "Questions about timing, HSA contributions, coverage costs, or eligibility",
        ],
      },
      localSupportSection: {
        nextSteps: [
          { title: "Get Medicare enrollment help", description: "Organize your situation and request a conversation with the Brandon team.", href: "/medicare-enrollment-assistance-in-brandon-fl/" },
          { title: "Get Medicare Part B help in Brandon", description: "Review Part B enrollment and coverage questions before you apply.", href: "/medicare-part-b-assistance-in-brandon/" },
          { title: "Working past 65 or retiring", description: "Prepare questions about employer coverage before deciding when to enroll.", href: "/medicare-and-employer-insurance-after-65-brandon-fl/" },
          { title: "Review Medigap enrollment timing", description: "Learn why the supplement enrollment window is separate from other Medicare periods.", href: "/medigap-open-enrollment/" },
        ],
        resources: [
          { title: "Official Medicare enrollment timing", description: "Check the enrollment periods and exceptions for your circumstances.", href: "https://www.medicare.gov/basics/get-started-with-medicare/sign-up/when-can-i-sign-up-for-medicare", external: true },
          { title: "Automatic enrollment or an application?", description: "Use Medicare’s guidance to check whether you need to sign up.", href: "https://www.medicare.gov/basics/get-started-with-medicare/sign-up/how-do-i-sign-up-for-medicare", external: true },
          { title: "Apply for Parts A and B through Social Security", description: "Review the official application steps and information to prepare.", href: "https://www.ssa.gov/medicare/sign-up", external: true },
          { title: "Official Medigap buying protections", description: "Check federal rights and ask about any additional state protections.", href: "https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy/when", external: true },
        ],
      },
      faqs,
      relatedLinks: [
        { label: "Medicare in Brandon, FL (Hub)", href: "/medicare-brandon-fl/" },
        { label: "Free Medicare Enrollment Help Brandon", href: "/free-medicare-enrollment-help-brandon-fl/" },
        { label: "Medicare Advantage Plans Brandon", href: "/medicare-advantage-plans-brandon-florida/" },
        { label: "Medicare Supplement Plans Brandon", href: "/medicare-supplement-insurance-plans-brandon/" },
        { label: "Medicare Agent in Brandon", href: "/medicare-agent-brandon/" },
        { label: "Turning 65 Guide (Full)", href: "/turning-65-and-becoming-eligible-for-medicare/" },
        { label: "Free Medicare Kit", href: "/free-medicare-kit/" },
        { label: "Free Consultation", href: "/get-started/" },
      ],
    }} />
  </>;
}
