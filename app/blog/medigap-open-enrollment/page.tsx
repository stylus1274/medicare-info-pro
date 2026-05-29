import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../BlogPostClient";

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
    images: [{ url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80", width: 1200, height: 630, alt: "Senior couple reviewing Medicare Supplement insurance documents" }],
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
  image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1400&q=80",
  imageAlt: "Senior couple reviewing Medicare Supplement insurance documents at a table",
  sections: [
    {
      type: "intro" as const,
      content: `Medigap, also called Medicare Supplement insurance, is private insurance that fills the gaps in Original Medicare: the deductibles, coinsurance, and copays that Medicare leaves for you to pay. It is one of the most effective tools available for controlling Medicare costs, particularly for people who use healthcare frequently or want protection against catastrophic expenses.

But Medigap comes with a critical timing rule that many people do not learn until it is too late. You have one guaranteed window to buy a Medigap plan without medical underwriting. That window is called the Medigap Open Enrollment Period. It lasts six months and begins the month you turn 65 and are enrolled in Medicare Part B. After it closes, insurers in most states can use your health history to charge you more or deny you coverage entirely.`,
    },
    {
      type: "keyTakeaways" as const,
      items: [
        { label: "Six Months, Starting at 65 with Part B", text: "Your Medigap Open Enrollment Period begins the first month you are both 65 and enrolled in Medicare Part B. It lasts exactly six months. It does not restart if you delay enrollment." },
        { label: "Guaranteed Issue Rights During This Window", text: "During your Open Enrollment Period, any insurer selling Medigap plans in Florida must sell you any plan they offer at the standard rate, regardless of your health history. They cannot deny you or charge you more." },
        { label: "After the Window Closes, Underwriting Applies", text: "Outside of your Open Enrollment Period, insurers in Florida can ask health questions and can decline to sell you a plan or charge you a higher premium based on pre-existing conditions." },
        { label: "Delaying Part B Delays Your Window", text: "If you delay enrolling in Medicare Part B because you have employer coverage, your Medigap Open Enrollment Period does not start until you enroll in Part B. Plan accordingly." },
        { label: "Guaranteed Issue Rights Exist Outside the Window", text: "Certain life events, such as losing employer coverage or your Medicare Advantage plan leaving your area, trigger guaranteed issue rights that allow you to buy certain Medigap plans without underwriting even after your Open Enrollment Period." },
      ],
    },
    {
      type: "section" as const,
      heading: "When Your Open Enrollment Period Starts",
      content: `Your Medigap Open Enrollment Period begins on the first day of the month in which you are both age 65 and enrolled in Medicare Part B. The six-month window runs from that date.

For most people, this means the window opens at age 65 when they first enroll in Medicare. If you turn 65 in June and enroll in Part B effective June 1, your Open Enrollment Period runs from June 1 through November 30.

If you delay enrolling in Part B because you have qualifying employer coverage, your Open Enrollment Period does not start until you actually enroll in Part B. For example, if you retire at 68 and enroll in Part B effective September 1, your Medigap Open Enrollment Period begins September 1 and runs through February 28 of the following year.

This is an important distinction: the window is tied to your Part B enrollment date, not your 65th birthday. People who work past 65 and delay Part B still get their full six-month Medigap Open Enrollment Period when they eventually enroll.`,
    },
    {
      type: "section" as const,
      heading: "What Guaranteed Issue Means",
      content: `During your Medigap Open Enrollment Period, you have what is called guaranteed issue rights. This means that any insurance company selling Medigap plans in Florida must sell you any plan they offer, at the standard premium for your age, without asking about your health history.

In practical terms, this means that even if you have diabetes, heart disease, cancer, COPD, or any other pre-existing condition, an insurer cannot deny you a Medigap plan during your Open Enrollment Period. They also cannot charge you more than they charge a healthy person of the same age for the same plan.

This is significant because Medigap plans cover pre-existing conditions after a brief waiting period (up to six months) if you had prior creditable coverage. Once you are enrolled, the plan cannot cancel your coverage or raise your premium because you get sick.

Outside of your Open Enrollment Period, Florida allows insurers to use medical underwriting. They can ask detailed health questions and can decline to sell you a plan or charge you a higher premium based on your answers. Some conditions, such as end-stage renal disease, can result in an outright denial in most states.`,
    },
    {
      type: "section" as const,
      heading: "Which Plans to Consider During Your Window",
      content: `Florida offers standardized Medigap plans labeled A, B, C, D, F, G, H, K, L, M, and N. Each plan with the same letter offers identical benefits regardless of which insurer sells it. The differences between insurers are price, financial stability, and customer service.

Plan G is the most comprehensive plan available to new Medicare enrollees (Plan F is no longer available to people who became eligible for Medicare after January 1, 2020). Plan G covers the Part A deductible, Part A coinsurance, Part B coinsurance (20 percent), skilled nursing facility coinsurance, and foreign travel emergency care. The only cost it does not cover is the Part B deductible ($257 in 2026), which you pay once per year.

Plan N is a lower-premium alternative to Plan G. It covers most of the same costs but requires copays of up to $20 for office visits and up to $50 for emergency room visits that do not result in inpatient admission. Plan N also does not cover Part B excess charges, which are rare in Florida but possible.

High-deductible Plan G is available for people who want lower premiums and are willing to pay a higher deductible ($2,870 in 2026) before the plan begins paying. This can work well for people who are generally healthy and want catastrophic protection.`,
    },
    {
      type: "section" as const,
      heading: "Guaranteed Issue Rights Outside the Open Enrollment Period",
      content: `Even after your Medigap Open Enrollment Period closes, certain qualifying events give you guaranteed issue rights for specific Medigap plans. These are not as broad as the Open Enrollment Period rights, but they can provide a path to Medigap coverage if you missed your window.

Qualifying events that trigger guaranteed issue rights include: your Medicare Advantage plan leaves your service area or stops participating in Medicare, you move out of your Medicare Advantage plan's service area, you lose employer or union group health coverage, your Medigap insurer goes bankrupt or otherwise stops covering you, and you leave a Medicare Advantage plan within the first year of joining it (trial right).

In these situations, you have a guaranteed right to buy certain Medigap plans (typically Plans A, B, C, D, F, G, K, and L) from any insurer selling those plans in Florida, without underwriting. The window for these rights is generally 63 days from the triggering event.

Florida also has a "birthday rule" that allows Medigap policyholders to switch to a plan with equal or lesser benefits from any insurer during the 30 days following their birthday each year, without underwriting. This provides some flexibility to shop for lower premiums after your initial enrollment.`,
    },
    {
      type: "section" as const,
      heading: "What Happens If You Miss Your Window",
      content: `If you miss your Medigap Open Enrollment Period and do not have a qualifying event that triggers guaranteed issue rights, you can still apply for a Medigap plan in Florida, but the insurer can use medical underwriting. This means they will ask about your health history and can decline to sell you coverage or charge you a higher premium.

The practical impact depends on your health. People in good health may still be able to get Medigap coverage at standard rates. People with significant health conditions may be declined or quoted substantially higher premiums.

This is why timing matters so much. Enrolling in Medigap during your Open Enrollment Period, even if you are currently healthy, locks in your coverage at standard rates and protects you from future underwriting if your health changes.

If you are approaching 65 or recently enrolled in Medicare Part B and are unsure whether to choose Medigap or Medicare Advantage, speaking with a licensed Medicare advisor before your Open Enrollment Period closes is strongly recommended.`,
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
    { title: "Medigap Plan G: The Complete Guide", href: "/blog/plan-g-complete-guide", category: "Supplements" as const },
    { title: "Do I Need a Medicare Supplement?", href: "/do-i-need-a-supplement", category: "Supplements" as const },
    { title: "Original Medicare vs. Medicare Advantage: Which Is Right for You?", href: "/original-vs-advantage", category: "Plans" as const },
    { title: "Annual Enrollment Period: Your Complete Guide", href: "/blog/annual-enrollment-period-guide", category: "Enrollment" as const },
  ],
};

export default function Page() {
  return <BlogPostClient post={POST} />;
}
