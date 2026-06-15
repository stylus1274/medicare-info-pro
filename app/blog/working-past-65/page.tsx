import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../BlogPostClient";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Working Past 65: When to Enroll in Medicare | Medicare Information Pro",
  description:
    "Still working at 65? Learn whether you can delay Medicare, how employer size affects your decision, the COBRA trap to avoid, and how to use your Special Enrollment Period correctly.",
  keywords: [
    "working past 65 Medicare",
    "delay Medicare enrollment",
    "Medicare Special Enrollment Period",
    "Medicare employer coverage",
    "COBRA and Medicare",
    "Medicare Part B penalty working",
    "HSA and Medicare Part A",
    "Medicare enrollment Florida",
  ],
  openGraph: {
    title: "Working Past 65: When to Enroll in Medicare",
    description:
      "If your employer has 20 or more employees, you can delay Medicare Part B without penalty. But the rules are nuanced and the COBRA trap is real. Here is what you need to know.",
    url: "https://medicare-info-pro.vercel.app/blog/working-past-65",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Senior professional working at a desk past age 65",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Working Past 65: When to Enroll in Medicare",
    description:
      "If your employer has 20 or more employees, you can delay Medicare Part B without penalty. But the rules are nuanced and the COBRA trap is real.",
    images: ["https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&q=80"],
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/blog/working-past-65",
  },
};

const POST = {
  slug: "working-past-65",
  title: "Working Past 65: When to Enroll in Medicare",
  excerpt:
    "If you are still working at 65, you may be able to delay Medicare enrollment without penalty. But the rules depend on your employer's size, and one common mistake can cost you permanently.",
  category: "Enrollment" as const,
  author: GREG_WOHL,
  date: "April 2026",
  readTime: "12 min read",
  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200&q=80",
  imageAlt: "Senior professional working past age 65 considering Medicare enrollment timing",
  sections: [
    {
      type: "intro" as const,
      content: `Turning 65 is a significant milestone. For the growing number of Americans who continue working well into their mid-60s and beyond, it raises an immediate question: do you have to sign up for Medicare right now, or can you wait?

The good news is that if you have qualifying employer-sponsored health coverage, you generally do not have to enroll in Medicare at 65. The rules are nuanced, however, and making the wrong call can result in permanent financial penalties that follow you for the rest of your life. This guide walks through every scenario, from large-employer coverage to small businesses, self-employment, and spousal coverage, so you can make a confident, informed decision about your Medicare enrollment timing.`,
    },
    {
      type: "keyTakeaways" as const,
      items: [
        {
          label: "Employer Size Is Everything",
          text: "If your employer has 20 or more employees, you can delay Medicare Part B without penalty while covered by active employer insurance. If your employer has fewer than 20 employees, Medicare becomes the primary payer at 65 and you should enroll during your Initial Enrollment Period.",
        },
        {
          label: "Your SEP Is 8 Months",
          text: "When your employer coverage ends, you have an 8-month Special Enrollment Period to sign up for Medicare Part B without a penalty. The clock starts when your active employment coverage ends, not when COBRA ends.",
        },
        {
          label: "COBRA Does Not Extend Your SEP",
          text: "COBRA is not considered qualifying employer coverage for Medicare SEP purposes. If you rely on COBRA after leaving your employer, your 8-month SEP clock is already running. Missing it means a permanent penalty and a gap in coverage.",
        },
        {
          label: "HSA Contributions Stop When Part A Begins",
          text: "Enrolling in Medicare Part A makes you ineligible to contribute to a Health Savings Account. If you or your employer are contributing to an HSA, coordinate carefully before enrolling in any part of Medicare.",
        },
      ],
    },
    {
      type: "section" as const,
      heading: "Employer Size Is the Critical Factor",
      content: `The single most important variable in your Medicare decision is the size of your employer. Federal law treats Medicare differently depending on whether your employer has 20 or more employees, and the stakes are high.`,
      subsections: [
        {
          heading: "20 or More Employees: You Can Delay Part B",
          content: `If your employer has 20 or more employees and you are covered by their health plan, your employer plan is the primary payer. Medicare is secondary. You can delay Part B enrollment without penalty as long as you remain covered by active employer insurance. When that coverage ends, you have an 8-month Special Enrollment Period to enroll in Part B.

The 20-employee threshold is based on the total number of employees across your employer's entire organization, not just your location or department. If you are unsure, ask your HR department directly.`,
        },
        {
          heading: "Under 20 Employees: Enroll During Your IEP",
          content: `If your employer has fewer than 20 employees, Medicare becomes the primary payer for your healthcare costs at age 65, even if you have employer-sponsored insurance. Your employer plan is designed to pay after Medicare has paid its share. If you have not enrolled in Medicare, your employer plan may calculate its payment as if Medicare had already paid, leaving you responsible for the portion Medicare would have covered. For small-employer workers, the recommendation is clear: enroll in Medicare Part A and Part B during your Initial Enrollment Period at 65. Use our <a href="/am-i-eligible" class="text-blue-700 underline hover:text-blue-900">Medicare Eligibility Checker</a> to confirm your eligibility before your birthday month.`,
        },
      ],
    },
    {
      type: "section" as const,
      heading: "What to Do When You Turn 65 (Large Employer)",
      content: `If you work for a company with 20 or more employees and you are covered by their health plan, here is the recommended approach when you turn 65.`,
      subsections: [
        {
          heading: "Enroll in Medicare Part A",
          content: `Part A (hospital insurance) is premium-free for most people who have worked and paid Medicare taxes for at least 10 years (40 quarters). There is generally no reason to delay Part A enrollment. It costs nothing and provides a secondary layer of hospital coverage. The one exception: if you contribute to a Health Savings Account (HSA), see the section below before enrolling. For a full breakdown of what Part A and Part B cover, see our <a href="/medicare-101" class="text-blue-700 underline hover:text-blue-900">Medicare 101 overview</a>.`,
        },
        {
          heading: "Delay Medicare Part B",
          content: `Part B (medical insurance) costs $185.00 per month in 2025 for most people. As long as you remain covered by your employer's active group health plan, you can delay Part B enrollment without incurring a late enrollment penalty. You do not need to sign up during your Initial Enrollment Period.`,
        },
        {
          heading: "Keep Your Proof of Coverage",
          content: `When you eventually enroll in Part B via your Special Enrollment Period, you will need to prove you had qualifying employer coverage. Keep your insurance cards, employer benefits statements, and any letters confirming your coverage dates. Your HR department can provide a letter confirming your coverage period.`,
        },
        {
          heading: "Decline Part B If You Are Already on Social Security",
          content: `If you are already receiving Social Security benefits, you may be automatically enrolled in both Part A and Part B at 65. If you want to delay Part B, you must actively decline it. Contact Social Security at 1-800-772-1213 before your 65th birthday to decline Part B enrollment.`,
        },
      ],
    },
    {
      type: "section" as const,
      heading: "The HSA Exception: Think Before Enrolling in Part A",
      content: `If you are currently contributing to a Health Savings Account (HSA), or if your employer contributes to one on your behalf, enrolling in Medicare Part A has an important consequence: you can no longer make HSA contributions.

This is because Medicare is considered other health coverage that disqualifies you from contributing to an HSA. The moment Part A coverage begins, even retroactively, your HSA contribution eligibility ends.`,
      subsections: [
        {
          heading: "The Retroactive Enrollment Warning",
          content: `When you apply for Social Security benefits, Medicare Part A enrollment is retroactive by up to 6 months. If you have been contributing to an HSA during those 6 months, those contributions become excess contributions, subject to income tax and a 6% excise tax penalty. If you plan to delay Social Security past 65 to protect your HSA, do not apply for Social Security until you are ready to stop HSA contributions.`,
        },
        {
          heading: "HSA Decision Guide",
          content: `If you are not contributing to an HSA, enroll in Part A at 65. It is free and provides additional hospital coverage. If you are contributing to an HSA and want to continue, delay Part A enrollment and do not apply for Social Security. If you are ready to stop HSA contributions, enroll in Part A and coordinate the timing carefully with your employer's HR department to avoid excess contribution penalties.`,
        },
      ],
    },
    {
      type: "section" as const,
      heading: "Your Special Enrollment Period: The 8-Month Window",
      content: `When your employer coverage ends, whether because you retire, change jobs, or your employer stops offering coverage, your Special Enrollment Period (SEP) begins. You have 8 months to enroll in Medicare Part B without facing a late enrollment penalty.

The SEP clock starts on the first day of the month after your employer coverage ends, or after your employment ends, whichever comes first. For example, if you retire on July 1 and your coverage ends July 31, your 8-month SEP begins August 1 and runs through March 31 of the following year.`,
      subsections: [
        {
          heading: "Do Not Wait Until the Last Month",
          content: `Processing times can vary, and you want your Part B coverage to start as close to your employer coverage end date as possible to avoid a gap in coverage. Enrolling in the first month or two of your SEP gives you the most flexibility and the smoothest transition.`,
        },
        {
          heading: "Spousal Coverage Qualifies Too",
          content: `If your spouse's employer has 20 or more employees and you are covered as a dependent on their plan, you qualify for the same SEP protections. You can delay Medicare Part B without penalty as long as you remain covered under your spouse's active employer plan. When your spouse retires or loses coverage, your 8-month SEP begins. See our <a href="/enrollment-timeline" class="text-blue-700 underline hover:text-blue-900">Medicare Enrollment Timeline</a> for a full breakdown of all enrollment windows.`,
        },
      ],
    },
    {
      type: "section" as const,
      heading: "The COBRA Trap: A Costly Mistake",
      content: `One of the most common and costly Medicare mistakes is relying on COBRA continuation coverage after leaving an employer and assuming it extends your Medicare Special Enrollment Period. It does not.

COBRA is not considered active employer coverage for Medicare SEP purposes. Your 8-month SEP begins when your active employment coverage ends, not when your COBRA coverage ends. If you elect COBRA and delay Medicare enrollment, you may miss your SEP entirely.`,
      subsections: [
        {
          heading: "A Real-World Example",
          content: `John retires at 65 in January. His employer coverage ends January 31. He elects 18 months of COBRA. His 8-month SEP runs February through September. If John waits until his COBRA expires in July of the following year to enroll in Part B, he has missed his SEP by 10 months. He will face a permanent 10% Part B penalty and must wait for the General Enrollment Period (January 1 through March 31) with coverage starting July 1.`,
        },
        {
          heading: "The Right Way to Use COBRA",
          content: `If you are considering COBRA, enroll in Medicare Part B first, then use COBRA only to bridge any gap in coverage for services Medicare does not cover, such as dental or vision. Do not use COBRA as a substitute for Medicare enrollment.`,
        },
      ],
    },
    {
      type: "section" as const,
      heading: "Self-Employed at 65",
      content: `If you are self-employed and purchase your own health insurance through the marketplace or directly from an insurer, that coverage is not considered qualifying employer coverage for Medicare SEP purposes. You should enroll in Medicare during your Initial Enrollment Period at 65.

Delaying Medicare enrollment while relying on individual or marketplace coverage will result in a permanent Part B late enrollment penalty. The same applies to retiree health coverage: it is secondary to Medicare, not a qualifying basis for delaying enrollment.`,
      subsections: [
        {
          heading: "Coverage Types That Qualify for a SEP",
          content: `Active employer group plan coverage from an employer with 20 or more employees qualifies. Coverage as a dependent on a spouse's employer plan from an employer with 20 or more employees also qualifies. Individual marketplace plans, COBRA, retiree health coverage, and self-purchased insurance do not qualify. When in doubt, confirm with your HR department or a licensed Medicare specialist before making your enrollment decision. For a side-by-side look at how Original Medicare and Medicare Advantage handle cost-sharing differently, see our <a href="/costs-at-a-glance" class="text-blue-700 underline hover:text-blue-900">Medicare Costs at a Glance</a> guide.`,
        },
      ],
    },
    {
      type: "summary" as const,
      heading: "Action Checklist: Working Past 65",
      content: `Confirm your employer's total employee count (20 or more, or under 20). Determine whether you are contributing to an HSA. Decide whether to enroll in Part A at 65 (free for most; affects HSA eligibility). If large employer: delay Part B and keep proof of coverage. If small employer: enroll in Part A and Part B during your Initial Enrollment Period. If receiving Social Security: contact SSA to decline Part B if you are delaying. When you retire: enroll in Part B within 8 months of coverage ending. Do not rely on COBRA to extend your SEP window. Gather proof of creditable employer coverage for Part B enrollment. Consider a Medigap plan during your 63-day guaranteed-issue window after enrolling in Part B.`,
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "Can I stay on my employer's health plan after turning 65?",
          answer:
            "Yes. If your employer has 20 or more employees, your employer plan remains your primary coverage and you can delay Medicare Part B without penalty. Medicare becomes secondary if you also enroll. If your employer has fewer than 20 employees, Medicare becomes primary at 65 and you should enroll to avoid coverage gaps.",
        },
        {
          question: "What happens if I do not enroll in Part B at 65 and my employer has fewer than 20 employees?",
          answer:
            "If your employer has fewer than 20 employees, Medicare is the primary payer at age 65. If you do not enroll in Part B, your employer plan may pay as if Medicare had already paid its share, leaving you responsible for the difference. You could face significant out-of-pocket costs and a permanent Part B late enrollment penalty.",
        },
        {
          question: "Do I need to enroll in Part A if I have employer coverage?",
          answer:
            "Part A (hospital insurance) is usually premium-free if you have worked and paid Medicare taxes for at least 10 years, so most people enroll in Part A at 65 even if they keep employer coverage. However, if you contribute to an HSA, enrolling in Part A makes you ineligible to make further HSA contributions, even if your employer plan is a high-deductible health plan.",
        },
        {
          question: "How long is my Special Enrollment Period after I lose employer coverage?",
          answer:
            "Your SEP is 8 months long, starting the month after your employer coverage ends or the month after your employment ends, whichever comes first. COBRA and retiree health coverage do not trigger or extend the SEP. Your 8-month clock starts when your active employment coverage ends, regardless of whether you elect COBRA.",
        },
        {
          question: "Can I use COBRA to delay Medicare enrollment?",
          answer:
            "No. COBRA is not considered qualifying employer coverage for Medicare SEP purposes. If you rely on COBRA after your employment ends, your 8-month SEP clock is already running. If you miss the 8-month window, you will face a permanent Part B late enrollment penalty and will need to wait for the General Enrollment Period (January 1 through March 31) with coverage starting July 1.",
        },
        {
          question: "What if my spouse is still working and I am covered under their employer plan?",
          answer:
            "If your spouse's employer has 20 or more employees and you are covered as a dependent on their plan, you qualify for the same SEP protections. You can delay Medicare Part B without penalty as long as you remain covered under your spouse's active employer plan. When your spouse retires or loses coverage, your 8-month SEP begins.",
        },
      ],
    },
  ],
  relatedPosts: [
    { title: "How to Apply for Medicare Without Social Security", href: "/blog/medicare-without-social-security", category: "Enrollment" as const },
    { title: "Medicare Enrollment Timeline", href: "/enrollment-timeline", category: "Enrollment" as const },
    { title: "Do I Need a Supplement?", href: "/do-i-need-a-supplement", category: "Supplements" as const },
  ],
};

export default function WorkingPast65Page() {
  return <BlogPostClient post={POST} />;
}
