import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../blog/BlogPostClient";

const canonicalUrl = "https://medicareinfopro.com/medigap-open-enrollment";
const publishedDate = "2026-02-01";
const modifiedDate = "2026-08-16";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Medigap Open Enrollment: 2026 Timing, Rights and Florida Rules",
  description:
    "Learn when the six-month Medigap Open Enrollment Period starts, what guaranteed issue means, how Florida Medigap policies work, and what options may exist after the window closes.",
  url: canonicalUrl,
  datePublished: publishedDate,
  dateModified: modifiedDate,
  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
  author: {
    "@type": "Person",
    name: "Greg Wohl",
    jobTitle: "Licensed Medicare Specialist",
    url: "https://medicareinfopro.com/greg-wohl",
  },
  publisher: {
    "@type": "Organization",
    name: "Medicare Information Project",
    url: "https://medicareinfopro.com",
    "@id": "https://medicareinfopro.com/#organization",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": canonicalUrl,
  },
} as const;

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When does Medigap Open Enrollment start?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The federal Medigap Open Enrollment Period begins the first day of the month you are both 65 or older and enrolled in Medicare Part B. It lasts for six months.",
      },
    },
    {
      "@type": "Question",
      name: "Can I be denied a Medigap policy during Open Enrollment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "During the federal six-month Medigap Open Enrollment Period, an insurer generally must sell you any Medigap policy it offers in your state regardless of health problems. It cannot use your health history to deny coverage or charge more because of your health.",
      },
    },
    {
      "@type": "Question",
      name: "Can I buy Medigap after Open Enrollment ends?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You may be able to buy Medigap after the window closes, but insurers are generally not required under federal law to sell you a policy unless you have a guaranteed-issue right. Medical underwriting and different pricing may apply.",
      },
    },
    {
      "@type": "Question",
      name: "Can I have Medigap and Medicare Advantage at the same time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Medigap supplements Original Medicare. You cannot use a Medigap policy while enrolled in a Medicare Advantage plan.",
      },
    },
  ],
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medigap Open Enrollment: 2026 Timing, Rights and Florida Rules",
  description:
    "Understand the six-month Medigap Open Enrollment Period, guaranteed issue rights, Florida Medicare Supplement rules, and options after the window closes.",
  keywords: [
    "Medigap open enrollment period",
    "Medicare Supplement open enrollment",
    "Medigap guaranteed issue rights",
    "Florida Medigap enrollment",
    "when to buy Medigap",
    "Medigap underwriting",
  ],
  openGraph: {
    title: "Medigap Open Enrollment: 2026 Timing, Rights and Florida Rules",
    description:
      "A current guide to the six-month Medigap enrollment window, guaranteed issue protections, Florida policy options, and enrollment after the window closes.",
    url: canonicalUrl,
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Senior couple reviewing Medicare Supplement insurance documents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medigap Open Enrollment: 2026 Timing, Rights and Florida Rules",
    description: "Understand your six-month Medigap enrollment window, guaranteed issue protections, and Florida policy choices.",
  },
  alternates: { canonical: canonicalUrl },
};

const POST = {
  slug: "medigap-open-enrollment",
  title: "Medigap Open Enrollment: 2026 Timing, Rights and Florida Rules",
  excerpt:
    "Your federal Medigap Open Enrollment Period is a one-time six-month window that begins when you are 65 or older and enrolled in Medicare Part B. Learn what it protects, how Florida Medigap policies work, and what to do if the window has already closed.",
  category: "Supplements" as const,
  author: GREG_WOHL,
  date: "August 16, 2026",
  readTime: "11 min read",
  featuredImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
  image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1200&q=80",
  imageAlt: "Senior couple reviewing Medicare Supplement insurance documents during open enrollment",
  keyTakeaways: [
    {
      label: "The window lasts six months",
      text: "It begins the first day of the month you are both 65 or older and enrolled in Medicare Part B.",
    },
    {
      label: "Health cannot be used against you during the window",
      text: "During the federal Medigap Open Enrollment Period, insurers generally must sell you any policy they offer in your state, regardless of health problems.",
    },
    {
      label: "It is not the same as fall Medicare Open Enrollment",
      text: "The October 15 through December 7 Annual Enrollment Period is primarily for Medicare Advantage and Part D changes. It does not create a broad annual Medigap open-enrollment right.",
    },
    {
      label: "You may have rights later in specific situations",
      text: "Certain coverage losses and Medicare Advantage changes can trigger time-limited guaranteed issue rights. Keep your notices and verify the applicable deadline.",
    },
  ],
  quickFacts: [
    { label: "Federal window", value: "6 months" },
    { label: "Start date", value: "When you are 65+ and enrolled in Part B" },
    { label: "During the window", value: "No health underwriting" },
    { label: "After the window", value: "Underwriting may apply without a protected right" },
  ],
  sections: [
    {
      type: "intro" as const,
      content: `Medigap, also called Medicare Supplement insurance, works with Original Medicare to help pay certain deductibles, coinsurance, and copayments. The federal Medigap Open Enrollment Period is the most reliable time to buy a policy because insurers generally must offer you the Medigap plans they sell in your state regardless of health conditions.<br /><br />This window is important, but it is not your only possible path to Medigap. It is also not the same as the fall <a href='/annual-enrollment-period-guide' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Annual Enrollment Period</a>. Understanding the difference helps you avoid assuming you can switch to Medigap every fall without underwriting.`,
    },
    {
      type: "section" as const,
      heading: "When the Federal Medigap Open Enrollment Period Starts",
      content: `Your one-time federal Medigap Open Enrollment Period starts the first day of the month you are both <strong>65 or older</strong> and enrolled in <strong>Medicare Part B</strong>. It lasts six months. For example, if your Part B begins June 1 when you are 65 or older, the window runs through November 30.<br /><br />The timing is tied to Part B, not simply to your 65th birthday. If you delay Part B because you or your spouse has qualifying employer coverage, your Medigap Open Enrollment Period generally begins when you later enroll in Part B. The <a href='https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/buying-a-medigap-policy' target='_blank' rel='noopener noreferrer' class='text-[#1a3fa8] underline underline-offset-2'>Medicare.gov buying guide</a> explains the federal timing and policy rules.<br /><br />You need Original Medicare Part A and Part B to buy a Medigap policy. You cannot use Medigap while you are enrolled in Medicare Advantage. If you are choosing between paths, compare <a href='/original-vs-advantage' class='text-[#1a3fa8] underline underline-offset-2'>Original Medicare and Medicare Advantage</a> before selecting a plan.`,
    },
    {
      type: "section" as const,
      heading: "What Guaranteed Issue Means During This Window",
      content: `During your six-month Medigap Open Enrollment Period, an insurance company that sells a Medigap policy in your state generally must sell it to you regardless of pre-existing health conditions. It cannot deny you coverage or use your health history to charge you more for the same policy.<br /><br />This protection does not mean every carrier has the same premium. Medigap policies with the same plan letter have standardized core benefits in most states, but premiums, rating methods, discounts, and customer service can vary. Comparing more than one insurer can therefore still matter. Our <a href='/why-choose-medigap-plan-g' class='text-[#1a3fa8] underline underline-offset-2'>2026 Plan G guide</a> explains how standardized benefits and carrier pricing differ.<br /><br />The period gives you the strongest broad federal buying protection. It does not promise that any future policy change will be available on the same terms.`,
    },
    {
      type: "section" as const,
      heading: "Florida Medigap Policies and Medicare Select",
      content: `Florida Medigap policies are standardized lettered plans, subject to federal and state consumer protections. The Florida Department of Financial Services notes that policies with the same letter provide the same basic benefits, while price and service can differ by insurer. Florida consumers can use the state’s <a href='https://www.myfloridacfo.com/division/consumers/understanding-insurance/medicare-supplement-insurance-overview' target='_blank' rel='noopener noreferrer' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Supplement Insurance overview</a> for consumer guidance.<br /><br />One important variation is Medicare Select. A Medicare Select policy can have the same basic benefits as the related standardized plan, but it may require you to use certain providers or facilities for full supplementary benefits, except in emergencies. Its premium can be lower, but network requirements should be reviewed carefully before you apply.<br /><br />For a Florida-specific explanation of protected events after the initial window, see our <a href='/faqs/medigap-guaranteed-issue-rights-florida' class='text-[#1a3fa8] underline underline-offset-2'>Florida Medigap guaranteed-issue rights FAQ</a>.`,
    },
    {
      type: "inlineCta" as const,
      heading: "Approaching Part B or Comparing Medigap Policies?",
      body: "A licensed independent Medicare specialist can help you compare standardized policy letters, carrier premiums, Medicare Select network terms, and Medigap versus Medicare Advantage before your enrollment window closes. Call 813-699-5559 or request a free consultation.",
    },
    {
      type: "section" as const,
      heading: "What Happens After the Six-Month Window Closes?",
      content: `After your federal Medigap Open Enrollment Period closes, an insurer generally does not have to sell you a policy under federal law unless you qualify for a guaranteed-issue right. You can still apply, but the insurer may use medical underwriting and may set eligibility or pricing based on its underwriting rules.<br /><br />There are exceptions. Certain events, such as losing qualifying coverage, moving out of a Medicare Advantage plan’s service area, a plan leaving Medicare, or some trial-right situations can create a limited guaranteed-issue opportunity. The policy letters available and the deadline can vary with the event. Federal rules often include a deadline before a loss of coverage and no more than 63 days after coverage ends, so do not wait to verify your situation.<br /><br />Keep letters, notices, emails, and claim denials that document a qualifying event. Medicare’s <a href='https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy/when' target='_blank' rel='noopener noreferrer' class='text-[#1a3fa8] underline underline-offset-2'>Medigap timing tool</a> and your State Health Insurance Assistance Program can help you confirm your rights.`,
    },
    {
      type: "section" as const,
      heading: "Can You Change a Medigap Policy Later?",
      content: `You can ask to change Medigap policies later, but federal law usually does not guarantee you can do so without underwriting unless you remain in the original six-month period or have a specific protected right. If you buy a new Medigap policy while still in your initial window, Medicare explains that you can have a 30-day free-look period to decide whether to keep it. You should not cancel the first policy until you decide to keep the new one, and you may have to pay both premiums for one month.<br /><br />After the initial window, carefully compare the new policy’s benefits, premium structure, and underwriting terms before canceling existing coverage. The official <a href='https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy/change-policies' target='_blank' rel='noopener noreferrer' class='text-[#1a3fa8] underline underline-offset-2'>Medicare.gov policy-change guidance</a> covers the federal rules and reminders.`,
    },
    {
      type: "section" as const,
      heading: "How to Use Your Window Wisely",
      content: `Start by deciding whether Original Medicare plus a supplement or Medicare Advantage better fits your doctors, travel patterns, prescriptions, budget, and comfort with cost sharing. If you choose Medigap, compare plan letters first, then compare carriers offering the same letter. A Plan G and Plan N comparison can help clarify the tradeoff between more complete cost sharing and a potentially lower premium.<br /><br />Verify whether a policy is Medicare Select, ask how the premium is rated, ask about available discounts and how they can change, and confirm when the policy can take effect. If you need drug coverage with Original Medicare and Medigap, you may also need a separate Part D plan. Review our <a href='/medicare-supplement-plan-g-vs-plan-n' class='text-[#1a3fa8] underline underline-offset-2'>Plan G vs. Plan N guide</a> and <a href='/coverage/prescription-drugs' class='text-[#1a3fa8] underline underline-offset-2'>Medicare prescription-drug coverage overview</a> before finalizing your choices.`,
    },
    {
      type: "summary" as const,
      heading: "Bottom Line",
      content: "The federal Medigap Open Enrollment Period is a valuable six-month window that begins when you are 65 or older and enrolled in Part B. It gives you broad protection against health-based denial or higher pricing for the Medigap policies an insurer offers in your state. After it ends, you may still have options, especially after certain coverage changes, but underwriting and timing rules can matter. Compare your Medicare path and Medigap choices while the broadest protections are available.",
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "When does my Medigap Open Enrollment Period start?",
          answer: "It starts the first day of the month you are both 65 or older and enrolled in Medicare Part B. It lasts for six months.",
        },
        {
          question: "Can I be denied a Medigap policy during Open Enrollment?",
          answer: "During the federal six-month period, insurers generally must sell you any Medigap policy they offer in your state regardless of health problems. They cannot use your health history to deny coverage or charge more because of your health.",
        },
        {
          question: "Is Medigap Open Enrollment the same as fall Medicare Open Enrollment?",
          answer: "No. The Medigap window is a one-time six-month period tied to age and Part B enrollment. The fall Annual Enrollment Period is primarily for Medicare Advantage and Part D plan changes.",
        },
        {
          question: "Can I buy Medigap after my Open Enrollment Period ends?",
          answer: "You may be able to apply, but insurers generally do not have to sell you a policy under federal law unless you qualify for a guaranteed-issue right. Underwriting may apply after the initial window.",
        },
        {
          question: "Can I have Medigap and Medicare Advantage together?",
          answer: "No. Medigap supplements Original Medicare, and you cannot use it while you are enrolled in a Medicare Advantage plan.",
        },
        {
          question: "Does Medigap include prescription drug coverage?",
          answer: "No. Current Medigap policies do not include Part D prescription drug coverage. With Original Medicare and Medigap, you may need a separate Part D plan for outpatient prescriptions.",
        },
      ],
    },
  ],
  relatedPosts: [
    { title: "Florida Medigap Guaranteed Issue Rights", href: "/faqs/medigap-guaranteed-issue-rights-florida", category: "Supplements" as const },
    { title: "Is Medigap Plan G Right for You?", href: "/why-choose-medigap-plan-g", category: "Supplements" as const },
    { title: "Medicare Supplement Plan G vs. Plan N", href: "/medicare-supplement-plan-g-vs-plan-n", category: "Supplements" as const },
    { title: "Original Medicare vs. Medicare Advantage", href: "/original-vs-advantage", category: "Plans" as const },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BlogPostClient post={POST} />
    </>
  );
}
