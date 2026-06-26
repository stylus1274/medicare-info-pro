import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../BlogPostClient";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Medigap Open Enrollment: Your One Guaranteed Chance",
  "url": "https://medicareinfopro.com/blog/medigap-open-enrollment",
  "datePublished": "2026-02-01",
  "dateModified": "2026-02-01",
  "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
  "author": {
    "@type": "Person",
    "name": "Greg Wohl",
    "jobTitle": "Licensed Medicare Specialist",
    "url": "https://medicareinfopro.com/greg-wohl"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "url": "https://medicareinfopro.com",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://medicareinfopro.com/blog/medigap-open-enrollment"
  }
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medigap Open Enrollment: Your One Guaranteed Chance | MedicareInfoPro",
  description:
    "Your Medigap Open Enrollment Period is a 6-month window when you can buy any Medigap plan without medical underwriting. Learn when it starts, what it covers, and what happens if you miss it.",
  keywords: [
    "Medigap open enrollment period",
    "Medicare Supplement open enrollment",
    "Medigap guaranteed issue",
    "when to buy Medigap",
    "Medigap underwriting",
    "Medicare Supplement Florida",
    "Medigap enrollment window",
  ],
  openGraph: {
    title: "Medigap Open Enrollment: Your One Guaranteed Chance",
    description: "You have a 6-month window to buy any Medigap plan without medical underwriting. Miss it and you may be denied or charged more based on your health history.",
    url: "https://medicare-info-pro.vercel.app/blog/medigap-open-enrollment",
    type: "article",
    images: [{ url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80", width: 1200, height: 630, alt: "Senior couple reviewing Medicare Supplement insurance documents" }],
  },
  twitter: { card: "summary_large_image", title: "Medigap Open Enrollment: Your One Guaranteed Chance", description: "You have a 6-month window to buy any Medigap plan without medical underwriting. Miss it and you may be denied." },
  alternates: { canonical: "https://medicare-info-pro.vercel.app/blog/medigap-open-enrollment" },
};

const POST = {
  slug: "medigap-open-enrollment",
  title: "Medigap Open Enrollment: Your One Guaranteed Chance",
  excerpt: "Your Medigap Open Enrollment Period is a 6-month window that begins the month you turn 65 and are enrolled in Medicare Part B. During this window, you can buy any Medigap plan sold in your state without answering health questions or being denied. Miss it, and insurers can charge you more or refuse to sell you coverage.",
  category: "Supplements" as const,
  author: GREG_WOHL,
  date: "February 2026",
  readTime: "10 min read",
  featuredImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
  imageAlt: "Senior couple reviewing Medicare Supplement insurance documents during open enrollment",
  keyTakeaways: [
    { label: "Six-Month Window", text: "Your Medigap Open Enrollment Period begins the first month you are both 65 and enrolled in Medicare Part B, and lasts exactly six months." },
    { label: "Guaranteed Issue", text: "During this window, any insurer selling Medigap plans in Florida must sell you any plan at the standard rate, regardless of your health history." },
    { label: "Underwriting After Window", text: "Outside of your Open Enrollment Period, Florida insurers can use medical underwriting and may decline your application or charge higher premiums." },
    { label: "Delayed Part B", text: "If you delay enrolling in Medicare Part B because you have employer coverage, your Medigap Open Enrollment Period does not start until you enroll in Part B." },
    { label: "Qualifying Events", text: "Certain life events trigger guaranteed issue rights that allow you to buy specific Medigap plans without underwriting even after your window closes." },
  ],
  quickFacts: [
    { label: "Window Length", value: "6 months" },
    { label: "Window Start", value: "Month you turn 65 + enroll in Part B" },
    { label: "Underwriting During Window", value: "None — guaranteed issue" },
    { label: "Florida Birthday Rule", value: "30-day annual switch window" },
    { label: "Most Popular Plan", value: "Plan G" },
  ],
  sections: [
    {
      type: "keyTakeaways" as const,
      items: [
        { label: "Six-Month Window", text: "Your Medigap Open Enrollment Period begins the first month you are both 65 and enrolled in Medicare Part B, and lasts exactly six months." },
        { label: "Guaranteed Issue", text: "During this window, any insurer selling Medigap plans in Florida must sell you any plan at the standard rate, regardless of your health history." },
        { label: "Underwriting After Window", text: "Outside of your Open Enrollment Period, Florida insurers can use medical underwriting and may decline your application or charge higher premiums." },
        { label: "Delayed Part B", text: "If you delay enrolling in Medicare Part B because you have employer coverage, your Medigap Open Enrollment Period does not start until you enroll in Part B." },
        { label: "Qualifying Events", text: "Certain life events trigger guaranteed issue rights that allow you to buy specific Medigap plans without underwriting even after your window closes." },
      ],
    },
    {
      type: "section" as const,
      heading: "When Your Open Enrollment Period Starts",
      content: `<a href='/medicare-supplement' class='text-[#1a3fa8] underline underline-offset-2'>Medigap, also called Medicare Supplement insurance</a>, is private insurance that fills the gaps in Original Medicare: the deductibles, coinsurance, and copays that Medicare leaves for you to pay. It is one of the most effective tools for controlling Medicare costs, particularly for people who use healthcare frequently or want protection against catastrophic expenses.

Your Medigap Open Enrollment Period begins on the first day of the month in which you are both age 65 and enrolled in Medicare Part B. The six-month window runs from that date.

For most people, this means the window opens at age 65 when they first enroll in Medicare. If you turn 65 in June and enroll in Part B effective June 1, your Open Enrollment Period runs from June 1 through November 30.

If you delay enrolling in Part B because you have qualifying employer coverage, your Open Enrollment Period does not start until you actually enroll in Part B. This is an important distinction: the window is tied to your Part B enrollment date, not your 65th birthday. People who work past 65 and delay Part B still get their full six-month Medigap Open Enrollment Period when they eventually enroll.`,
    },
    {
      type: "section" as const,
      heading: "What Guaranteed Issue Means",
      content: `During your Medigap Open Enrollment Period, you have what is called guaranteed issue rights. This means that any insurance company selling Medigap plans in Florida must sell you any plan they offer, at the standard premium for your age, without asking about your health history.

In practical terms, this means that even if you have diabetes, heart disease, cancer, COPD, or any other pre-existing condition, an insurer cannot deny you a Medigap plan during your Open Enrollment Period. They also cannot charge you more than they charge a healthy person of the same age for the same plan.

Outside of your Open Enrollment Period, Florida allows insurers to use medical underwriting. They can ask detailed health questions and can decline to sell you a plan or charge you a higher premium based on your answers. Some conditions, such as end-stage renal disease, can result in an outright denial in most states.`,
    },
    {
      type: "section" as const,
      heading: "Which Plans to Consider During Your Window",
      content: `Florida offers standardized Medigap plans labeled A, B, C, D, F, G, K, L, M, and N. Each plan with the same letter offers identical benefits regardless of which insurer sells it. The differences between insurers are price, financial stability, and customer service.

<a href='/blog/plan-g-complete-guide' class='text-[#1a3fa8] underline underline-offset-2'>Plan G is the most comprehensive plan available to new Medicare enrollees</a>. Plan G covers the Part A deductible, Part A coinsurance, Part B coinsurance (20 percent), skilled nursing facility coinsurance, and foreign travel emergency care. The only cost it does not cover is the Part B deductible ($257 in 2026), which you pay once per year.

Plan N is a lower-premium alternative to Plan G. It covers most of the same costs but requires copays of up to $20 for office visits and up to $50 for emergency room visits that do not result in inpatient admission. High-deductible Plan G is available for people who want lower premiums and are willing to pay a higher deductible ($2,870 in 2026) before the plan begins paying.

When comparing plans, also consider whether you want <a href='/original-vs-advantage' class='text-[#1a3fa8] underline underline-offset-2'>Original Medicare with a Medigap plan versus Medicare Advantage</a>. Both approaches have tradeoffs, and your Medigap Open Enrollment Period is the ideal time to make this decision with full access to all options.`,
    },
    {
      type: "section" as const,
      heading: "Guaranteed Issue Rights Outside the Open Enrollment Period",
      content: `Even after your Medigap Open Enrollment Period closes, certain qualifying events give you guaranteed issue rights for specific Medigap plans. These are not as broad as the Open Enrollment Period rights, but they can provide a path to Medigap coverage if you missed your window.

Qualifying events that trigger guaranteed issue rights include: your Medicare Advantage plan leaves your service area or stops participating in Medicare, you move out of your Medicare Advantage plan's service area, you lose employer or union group health coverage, your Medigap insurer goes bankrupt, and you leave a Medicare Advantage plan within the first year of joining it (trial right).

In these situations, you have a guaranteed right to buy certain Medigap plans from any insurer selling those plans in Florida, without underwriting. The window for these rights is generally 63 days from the triggering event.

Florida also has a birthday rule that allows Medigap policyholders to switch to a plan with equal or lesser benefits from any insurer during the 30 days following their birthday each year, without underwriting. This provides some flexibility to shop for lower premiums after your initial enrollment.`,
    },
    {
      type: "section" as const,
      heading: "What Happens If You Miss Your Window",
      content: `If you miss your Medigap Open Enrollment Period and do not have a qualifying event that triggers guaranteed issue rights, you can still apply for a Medigap plan in Florida, but the insurer can use medical underwriting. This means they will ask about your health history and can decline to sell you coverage or charge you a higher premium.

The practical impact depends on your health. People in good health may still be able to get Medigap coverage at standard rates. People with significant health conditions may be declined or quoted substantially higher premiums.

This is why timing matters so much. Enrolling in Medigap during your Open Enrollment Period, even if you are currently healthy, locks in your coverage at standard rates and protects you from future underwriting if your health changes. If you are approaching 65 and unsure whether to choose Medigap or Medicare Advantage, <a href='/get-help' class='text-[#1a3fa8] underline underline-offset-2'>speaking with a licensed Medicare advisor</a> before your Open Enrollment Period closes is strongly recommended.`,
    },
    {
      type: "summary" as const,
      heading: "Bottom Line",
      content: "Your Medigap Open Enrollment Period is the single most important enrollment window in Medicare. It gives you guaranteed access to any Medigap plan at standard rates, regardless of your health. Once it closes, that protection is gone and underwriting applies. If you are approaching 65 or recently enrolled in Part B, act during this window to lock in the coverage that best fits your healthcare needs and budget.",
    },
    {
      type: "faq" as const,
      items: [
        { question: "When does my Medigap Open Enrollment Period start?", answer: "It starts on the first day of the month in which you are both age 65 and enrolled in Medicare Part B. It lasts six months from that date." },
        { question: "Can I be denied a Medigap plan during my Open Enrollment Period?", answer: "No. During your Open Enrollment Period, any insurer selling Medigap plans in Florida must sell you any plan they offer at the standard rate, regardless of your health history." },
        { question: "What is the best Medigap plan for most people?", answer: "Plan G is the most comprehensive plan available to new Medicare enrollees. It covers virtually all Medicare cost-sharing except the Part B deductible ($257 in 2026). Plan N is a lower-premium alternative with modest copays for office and emergency room visits." },
        { question: "Can I switch Medigap plans after my Open Enrollment Period?", answer: "You can apply to switch, but outside of your Open Enrollment Period or a qualifying event, insurers can use medical underwriting and may decline your application or charge higher premiums. Florida's birthday rule allows you to switch to a plan with equal or lesser benefits from any insurer during the 30 days following your birthday each year, without underwriting." },
        { question: "Does Medigap cover prescription drugs?", answer: "No. Medigap plans do not include prescription drug coverage. If you have a Medigap plan, you need a separate Part D drug plan for prescription coverage." },
        { question: "Can I have both Medigap and Medicare Advantage?", answer: "No. Medigap plans are designed to work with Original Medicare (Parts A and B). If you are enrolled in a Medicare Advantage plan, you cannot use a Medigap plan to pay your Medicare Advantage cost-sharing." },
      ],
    },
  ],
  relatedPosts: [
    { title: "Medigap Plan G: The Complete Guide", href: "/plan-g-complete-guide", category: "Supplements" as const },
    { title: "Do I Need a Medicare Supplement?", href: "/do-i-need-a-supplement", category: "Supplements" as const },
    { title: "Original Medicare vs. Medicare Advantage: Which Is Right for You?", href: "/original-vs-advantage", category: "Plans" as const },
    { title: "Annual Enrollment Period: Your Complete Guide", href: "/annual-enrollment-period-guide", category: "Enrollment" as const },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <BlogPostClient post={POST} />
    </>
  );
}
