import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../BlogPostClient";

export const metadata: Metadata = {
  title: "Florida Medicare If Still Working at 65: What You Need to Know | MedicareInfoPro",
  description:
    "Still working at 65 in Florida? Learn whether you must enroll in Medicare, how employer coverage interacts with Medicare, when you can delay without penalty, and what happens when you eventually retire.",
  keywords: [
    "Medicare still working at 65 Florida",
    "Medicare and employer insurance after 65",
    "delay Medicare enrollment working",
    "Medicare Part B delay employer coverage",
    "Medicare enrollment working past 65",
    "Medicare employer coverage Florida",
    "when to enroll in Medicare if still working",
  ],
  openGraph: {
    title: "Florida Medicare If Still Working at 65: What You Need to Know",
    description:
      "Working at 65 in Florida? Learn how employer coverage interacts with Medicare, when you can delay without penalty, and what to do when you retire.",
    url: "https://medicare-info-pro.vercel.app/blog/florida-medicare-if-still-working-at-65",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Senior professional still working at 65 reviewing Medicare enrollment options",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Medicare If Still Working at 65: What You Need to Know",
    description:
      "How employer coverage interacts with Medicare at 65, when you can delay without penalty, and what to do when you eventually retire.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/blog/florida-medicare-if-still-working-at-65",
  },
};

const POST = {
  slug: "florida-medicare-if-still-working-at-65",
  title: "Florida Medicare If Still Working at 65: What You Need to Know",
  excerpt:
    "Turning 65 while still employed is increasingly common in Florida. Whether you must enroll in Medicare, can delay it, or should coordinate it with your employer plan depends on the size of your employer and the type of coverage you have. Getting this wrong can result in permanent penalties or gaps in coverage.",
  category: "Enrollment" as const,
  author: GREG_WOHL,
  date: "June 2026",
  readTime: "10 min read",
  image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=1200&q=80",
  imageAlt: "Senior professional still working at 65 reviewing Medicare enrollment options",
  sections: [
    {
      type: "intro" as const,
      content:
        "More Florida workers are staying employed past 65 than ever before. Whether by choice or necessity, working past Medicare's standard eligibility age creates a set of decisions that many people are not prepared for.\n\nThe core question is: do you have to enroll in Medicare at 65 if you still have employer health coverage? The answer depends primarily on how many employees your employer has. Get it wrong and you could face permanent premium penalties, gaps in coverage, or unexpected medical bills.\n\nThis guide walks through every scenario so you can make the right decision for your situation.",
    },
    {
      type: "keyTakeaways" as const,
      items: [
        {
          label: "Employer size is the critical factor",
          text: "If your employer has 20 or more employees, your employer plan is primary and Medicare is secondary. You can delay Medicare Part B without penalty. If your employer has fewer than 20 employees, Medicare becomes primary at 65 and you should enroll.",
        },
        {
          label: "Part A is almost always worth enrolling in at 65",
          text: "Most people qualify for premium-free Part A. Enrolling at 65 costs nothing and provides hospital coverage as a secondary payer. The main exception is if you contribute to an HSA.",
        },
        {
          label: "HSA contributions must stop when you enroll in any part of Medicare",
          text: "Once you enroll in Medicare Part A or B, you can no longer contribute to a Health Savings Account (HSA). If you want to keep contributing, delay all Medicare enrollment.",
        },
        {
          label: "You have 8 months to enroll in Part B after losing employer coverage",
          text: "When you retire or lose qualifying employer coverage, you have a Special Enrollment Period of 8 months to enroll in Part B without penalty. Do not wait until COBRA or retiree coverage ends.",
        },
        {
          label: "COBRA does not count as qualifying coverage for delaying Medicare",
          text: "COBRA continuation coverage is not considered current employer coverage for Medicare purposes. If you retire and take COBRA, your Special Enrollment Period for Part B begins when your active employment ends, not when COBRA ends.",
        },
        {
          label: "Retiree coverage from a former employer is also not qualifying coverage",
          text: "Retiree health benefits do not allow you to delay Medicare without penalty. Only active employer coverage based on current employment qualifies.",
        },
      ],
    },
    {
      type: "section" as const,
      heading: "The Employer Size Rule: 20 or More vs. Fewer Than 20 Employees",
      content:
        "The most important factor in your Medicare decision at 65 is your employer's size. Federal law treats these two situations very differently.\n\n<strong>Employers with 20 or more employees:</strong> Your employer group health plan is the primary payer. Medicare is secondary. This means your employer plan pays first, and Medicare may pay some of what the employer plan does not cover. You can delay enrolling in Medicare Part B without incurring a late enrollment penalty, as long as you maintain this qualifying employer coverage.\n\n<strong>Employers with fewer than 20 employees:</strong> Medicare becomes the primary payer at age 65, even if you are still working. Your employer plan becomes secondary. If you do not enroll in Medicare Part B, your employer plan may refuse to pay claims that Medicare would have covered as primary, leaving you responsible for those costs. You should enroll in Medicare Part B during your Initial Enrollment Period.\n\n<strong>How to determine your employer's size:</strong> Count the total number of employees across all locations and subsidiaries of your employer, not just your office. If you are unsure, ask your HR department directly. The distinction between 19 and 20 employees can have significant financial consequences.\n\nFor a full overview of how Medicare enrollment works, see our <a href='/blog/how-to-sign-up-for-medicare-without-an-agent-step-by-step-guide' class='text-[#1a3fa8] underline underline-offset-2'>step-by-step Medicare enrollment guide</a>.",
    },
    {
      type: "section" as const,
      heading: "Should You Enroll in Part A at 65 Even If You Are Still Working?",
      content:
        "Medicare Part A (hospital insurance) is premium-free for most people who have worked and paid Medicare taxes for at least 40 quarters. Because it costs nothing, many financial advisors recommend enrolling in Part A at 65 regardless of your employment status.\n\nPart A provides secondary coverage for hospital stays, which can reduce your out-of-pocket costs even when your employer plan is primary.\n\n<strong>The HSA exception:</strong> There is one important reason to delay Part A: if you are enrolled in a High Deductible Health Plan (HDHP) and contributing to a Health Savings Account (HSA). Once you enroll in any part of Medicare (including Part A), you can no longer make contributions to your HSA. If you want to continue maximizing HSA contributions past 65, you must delay all Medicare enrollment.\n\n<strong>Important HSA timing note:</strong> Medicare Part A coverage can be backdated up to 6 months when you enroll after 65. If you enroll in Part A at 67, for example, your coverage may be backdated to age 66.5. Any HSA contributions made during that backdated period would be considered excess contributions and subject to a 6% excise tax. Plan your HSA contributions carefully in the months before you intend to enroll.",
    },
    {
      type: "section" as const,
      heading: "What Happens When You Retire: The Special Enrollment Period",
      content:
        "When you stop working or lose your qualifying employer coverage, you enter a Special Enrollment Period (SEP) for Medicare Part B. This is a critical window that many people misunderstand.\n\n<strong>The SEP is 8 months long</strong> and begins on the earlier of:\n\n<ul><li>The month your employment ends</li><li>The month your employer group health plan coverage ends</li></ul>\n\nYou do not need to wait for your last day of work to enroll. You can enroll in Part B up to 3 months before your coverage ends if you know your end date in advance.\n\n<strong>Common mistakes that cost people their SEP:</strong>\n\n<ul><li><strong>Waiting until COBRA ends:</strong> COBRA is not qualifying employer coverage for SEP purposes. Your 8-month SEP begins when your active employment ends, not when COBRA expires. If you take 18 months of COBRA and then try to enroll in Part B, you will be outside your SEP and face late enrollment penalties.</li><li><strong>Relying on retiree coverage:</strong> Retiree health benefits from a former employer are not qualifying coverage. If your employer offers retiree health coverage after you retire, your SEP still begins when your active employment ends.</li><li><strong>Missing the 8-month window:</strong> If you miss your SEP without a qualifying reason, you must wait for the General Enrollment Period (January 1 to March 31) and will owe a permanent Part B late enrollment penalty of 10% for each 12-month period you were eligible but not enrolled.</li></ul>",
    },
    {
      type: "section" as const,
      heading: "Coordinating Medicare with Your Employer Plan",
      content:
        "If you decide to enroll in both Medicare and keep your employer coverage (which is common for people at large employers), understanding how the two plans coordinate is important.\n\n<strong>When employer plan is primary (20+ employee companies):</strong> Your employer plan pays first. Medicare Part B pays second, covering some or all of the cost-sharing your employer plan leaves behind. In practice, having both coverages can significantly reduce your out-of-pocket costs for medical services.\n\n<strong>When Medicare is primary (fewer than 20 employee companies):</strong> Medicare pays first. Your employer plan pays second. If you are not enrolled in Medicare Part B, your employer plan may not pay for services that Medicare would have covered as primary.\n\n<strong>Network considerations:</strong> Medicare works with any provider that accepts Medicare. Your employer plan may have a narrower network. When Medicare is secondary, you generally need to use providers that accept both your employer plan and Medicare.\n\n<strong>Drug coverage:</strong> If you have employer drug coverage that is at least as good as Medicare Part D (creditable coverage), you can delay Part D enrollment without penalty. Your employer must provide you with a notice each year stating whether your drug coverage is creditable. Keep this notice, as you will need to document creditable coverage when you eventually enroll in Part D.",
    },
    {
      type: "section" as const,
      heading: "Medicare and Spouse Coverage",
      content:
        "Your Medicare decisions at 65 can also affect a spouse who is covered under your employer plan.\n\n<strong>If your spouse is under 65 and on your employer plan:</strong> If you retire and lose employer coverage, your spouse loses that coverage too. Your spouse will need to find alternative coverage, such as a marketplace plan, until they reach Medicare eligibility at 65. Plan for this transition well in advance.\n\n<strong>If your spouse is also 65 or older:</strong> Your spouse's Medicare enrollment decisions are independent of yours. Each person must enroll based on their own work history and employment status.\n\n<strong>If your spouse is the employee and you are the dependent:</strong> The same employer size rules apply. If your spouse works for an employer with 20 or more employees and you are covered as a dependent, you can delay your own Medicare Part B without penalty based on their active employment coverage.\n\nFor a full comparison of your coverage options at retirement, see our guide to <a href='/blog/what-are-the-best-medicare-plans-for-seniors' class='text-[#1a3fa8] underline underline-offset-2'>the best Medicare plans for seniors</a>.",
    },
    {
      type: "summary" as const,
      heading: "Working at 65: Your Medicare Decision Checklist",
      content:
        "Use this checklist to determine your best course of action:\n\n<ul><li><strong>Determine your employer's size:</strong> 20 or more employees means you can delay Part B without penalty; fewer than 20 means you should enroll at 65</li><li><strong>Decide on Part A:</strong> Enroll at 65 unless you are contributing to an HSA and want to continue doing so</li><li><strong>Check your drug coverage:</strong> Ask your employer if your drug coverage is creditable; if yes, you can delay Part D without penalty</li><li><strong>Plan your SEP:</strong> Know that your 8-month Special Enrollment Period starts when your employment ends, not when COBRA or retiree coverage ends</li><li><strong>Coordinate with your spouse:</strong> If your spouse is on your employer plan, plan for their coverage transition when you retire</li><li><strong>Avoid the HSA timing trap:</strong> Stop HSA contributions at least 6 months before you plan to enroll in Medicare to avoid excess contribution penalties</li></ul>\n\nOur licensed Medicare specialists can review your specific employer coverage and help you build a transition plan. <a href='/free-consultation' class='text-[#1a3fa8] underline underline-offset-2'>Schedule a free consultation</a> before you make any enrollment decisions.",
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "Do I have to sign up for Medicare at 65 if I am still working in Florida?",
          answer:
            "It depends on your employer's size. If your employer has 20 or more employees, you can delay Medicare Part B without penalty while you have qualifying employer coverage. If your employer has fewer than 20 employees, Medicare becomes primary at 65 and you should enroll in Part B during your Initial Enrollment Period to avoid coverage gaps.",
        },
        {
          question: "Can I delay Medicare Part B if I am still working?",
          answer:
            "Yes, if you have qualifying employer coverage through an employer with 20 or more employees. When you eventually retire or lose that coverage, you have an 8-month Special Enrollment Period to enroll in Part B without a late enrollment penalty.",
        },
        {
          question: "What happens to my HSA if I enroll in Medicare?",
          answer:
            "Once you enroll in any part of Medicare (Part A or Part B), you can no longer contribute to a Health Savings Account. If you want to continue making HSA contributions past 65, you must delay all Medicare enrollment. Be aware that Part A coverage can be backdated up to 6 months, so plan your last HSA contribution carefully.",
        },
        {
          question: "Does COBRA count as qualifying coverage for delaying Medicare?",
          answer:
            "No. COBRA continuation coverage is not considered current employer coverage for Medicare purposes. Your Special Enrollment Period for Part B begins when your active employment ends, not when COBRA ends. If you take COBRA after retiring and wait until it expires to enroll in Medicare, you will likely face late enrollment penalties.",
        },
        {
          question: "What is the penalty for late Medicare Part B enrollment?",
          answer:
            "The Part B late enrollment penalty is 10% of the standard Part B premium for each 12-month period you were eligible but did not enroll without a qualifying reason. This penalty is permanent and added to your monthly premium for as long as you have Part B.",
        },
        {
          question: "Can my employer require me to take Medicare at 65?",
          answer:
            "No. Employers with 20 or more employees cannot require employees to take Medicare or reduce their employer coverage because an employee turns 65. It is illegal for such employers to make Medicare the primary payer for active employees. If your employer pressures you to take Medicare, contact the Department of Labor or Medicare.",
        },
      ],
    },
  ],
  relatedPosts: [
    {
      title: "How to Sign Up for Medicare Without an Agent: Step-by-Step Guide",
      href: "/blog/how-to-sign-up-for-medicare-without-an-agent-step-by-step-guide",
      category: "Enrollment" as const,
    },
    {
      title: "Medicare Qualifications in Florida: Who Is Eligible?",
      href: "/blog/medicare-qualifications-florida",
      category: "Enrollment" as const,
    },
    {
      title: "What Are the Best Medicare Plans for Seniors?",
      href: "/blog/what-are-the-best-medicare-plans-for-seniors",
      category: "Plans" as const,
    },
  ],
};

export default function Page() {
  return <BlogPostClient post={POST} />;
}
