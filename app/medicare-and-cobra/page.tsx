import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../blog/BlogPostClient";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Medicare and COBRA: When to Enroll and How Coverage Works",
  "description": "Learn how Medicare and COBRA work together, when to enroll in Part B, how the 8-month Special Enrollment Period works, and how to avoid coverage gaps and late penalties.",
  "url": "https://medicareinfopro.com/medicare-and-cobra",
  "datePublished": "2026-08-12",
  "dateModified": "2026-08-12",
  "image": "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
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
    "@id": "https://medicareinfopro.com/medicare-and-cobra"
  }
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare and COBRA: When to Enroll and Avoid Late Penalties | MedicareInfoPro",
  description: "Understand Medicare and COBRA coverage. Learn why COBRA does not extend your Part B enrollment window, how the 8-month SEP works, and what to do before COBRA ends.",
  keywords: [
    "medicare and cobra",
    "cobra and medicare part b",
    "does cobra count as creditable coverage medicare",
    "medicare cobra special enrollment period",
    "medicare part b after cobra",
    "cobra medicare late enrollment penalty",
    "when to enroll in medicare after cobra",
  ],
  openGraph: {
    title: "Medicare and COBRA: When to Enroll and Avoid Late Penalties",
    description: "COBRA can be useful, but it does not extend the deadline to enroll in Medicare Part B. Learn the timing rules before you make a costly choice.",
    url: "https://medicareinfopro.com/medicare-and-cobra",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Health coverage and retirement enrollment paperwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare and COBRA: When to Enroll and Avoid Late Penalties",
    description: "Learn when COBRA works with Medicare, why the Part B clock does not pause, and how to avoid a coverage gap.",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-and-cobra",
  },
};

const POST = {
  slug: "medicare-and-cobra",
  title: "Medicare and COBRA: When to Enroll and How Coverage Works",
  excerpt:
    "COBRA can temporarily continue employer health coverage after a job ends, but it does not give you extra time to delay Medicare Part B. Learn the enrollment rules, timing traps, and practical steps to avoid late penalties and coverage gaps.",
  category: "Enrollment" as const,
  author: GREG_WOHL,
  date: "August 2026",
  readTime: "11 min read",
  image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
  imageAlt: "Health coverage and retirement enrollment paperwork",
  sections: [
    {
      type: "intro" as const,
      content:
        "If you are leaving a job near Medicare eligibility, COBRA can look like a simple way to keep the coverage you already know. The catch is timing. COBRA is continuation coverage, not active employer coverage. That distinction can affect when you must enroll in Medicare Part B, whether you can use a Special Enrollment Period, and whether you could face a lasting late-enrollment penalty. This guide explains the rules in plain language so you can ask the right questions before choosing COBRA, Medicare, or both.",
    },
    {
      type: "keyTakeaways" as const,
      items: [
        {
          label: "COBRA does not pause the Part B clock",
          text: "The 8-month Special Enrollment Period for Part B begins when active employment ends or job-based coverage ends, whichever comes first. Electing COBRA does not extend that period.",
        },
        {
          label: "Medicare eligibility can change what COBRA pays",
          text: "If you are eligible for Medicare but not enrolled, do not assume COBRA will cover expenses as though it were primary coverage. Ask the plan administrator how claims will be handled in your exact situation.",
        },
        {
          label: "Part D has a separate rule",
          text: "You may avoid a Part D late-enrollment penalty only while you have creditable drug coverage. Keep the written creditable-coverage notice from your plan.",
        },
        {
          label: "Retiree coverage is different from active job-based coverage",
          text: "Coverage after retirement, including COBRA, should not automatically be treated as a reason to delay Medicare Part B.",
        },
        {
          label: "Confirm before you elect or cancel anything",
          text: "Your employer benefits office, COBRA administrator, Social Security, Medicare, and a licensed Medicare agent each play a different role. Get plan-specific answers in writing when possible.",
        },
      ],
    },
    {
      type: "section" as const,
      heading: "What Is COBRA, and Why Does It Matter for Medicare?",
      content:
        `COBRA is a federal law that may allow employees and their families to continue employer group health coverage for a limited period after a qualifying event, such as job loss, reduced hours, divorce, or legal separation. In many cases, COBRA is offered for 18 months, although some situations can allow a longer period. The U.S. Department of Labor explains the qualifying-event and continuation-coverage rules in its <a href='https://www.dol.gov/agencies/ebsa/about-ebsa/our-activities/resource-center/faqs/cobra-continuation-health-coverage-workers' class='text-[#1a3fa8] underline underline-offset-2' target='_blank' rel='noopener noreferrer'>COBRA continuation coverage FAQ</a>.

The Medicare issue is not whether COBRA is real health insurance. It is. The issue is whether COBRA counts as coverage based on current active employment for Medicare enrollment purposes. It generally does not. If you delay Part B because you elected COBRA, you may lose the ability to enroll through the Part B Special Enrollment Period once the active job-based coverage has ended.

If you are still working at 65, start with our <a href='/working-past-65' class='text-[#1a3fa8] underline underline-offset-2'>working past 65 Medicare guide</a>. It explains the difference between active employer coverage, retiree coverage, marketplace coverage, and continuation coverage before you make a final choice.`,
    },
    {
      type: "section" as const,
      heading: "The Rule That Creates Most COBRA and Medicare Problems",
      content:
        `For most people, the key date is not the day COBRA ends. The key date is the earlier of these two events: the month active employment ends, or the month job-based group health coverage ends. From that point, you generally have up to eight months to enroll in Medicare Part B without a late-enrollment penalty. This is the Part B Special Enrollment Period.

Medicare.gov states clearly that the period begins when work or job-based coverage ends, even if you elect COBRA or another type of non-Medicare coverage. It also warns not to wait until COBRA ends to sign up for Part B. Read the official <a href='https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/working-past-65/cobra-coverage' class='text-[#1a3fa8] underline underline-offset-2' target='_blank' rel='noopener noreferrer'>Medicare and COBRA guidance</a> before relying on continuation coverage.

If you miss that period, you may have to wait for the General Enrollment Period, which runs from January 1 through March 31. Coverage generally starts the month after you enroll, and a Part B late-enrollment penalty may apply for as long as you have Part B. Use our <a href='/enrollment-timeline' class='text-[#1a3fa8] underline underline-offset-2'>Medicare enrollment timeline</a> to see the major enrollment windows in one place.`,
    },
    {
      type: "section" as const,
      heading: "How Medicare and COBRA Can Work in Common Situations",
      content:
        `The table below is a planning tool, not a substitute for your plan documents. Your employer size, the date your work ended, whether you already have Medicare, and the type of COBRA benefits you elect can all affect the answer.

<table><thead><tr><th>Situation</th><th>What to Know</th><th>Best Next Step</th></tr></thead><tbody><tr><td>You retire or lose active coverage before 65</td><td>COBRA may bridge coverage until Medicare eligibility begins.</td><td>Track your Medicare Initial Enrollment Period before you turn 65.</td></tr><tr><td>You turn 65 while already on COBRA</td><td>Do not assume COBRA lets you delay Part B without risk. COBRA may pay very little if you are Medicare-eligible but not enrolled.</td><td>Review Medicare Part A and Part B enrollment promptly with the COBRA administrator and Medicare.</td></tr><tr><td>You elect COBRA after active employment ends at or after 65</td><td>The Part B Special Enrollment Period usually starts when work or active coverage ends, not when COBRA ends.</td><td>Enroll in Part B during the 8-month period if it applies to you.</td></tr><tr><td>You already have Medicare when COBRA begins</td><td>COBRA may coordinate after Medicare, subject to the plan's rules.</td><td>Ask the plan administrator which services remain covered and what Medicare does not cover.</td></tr><tr><td>You have COBRA drug coverage</td><td>Part D penalty protection depends on whether the drug coverage is creditable.</td><td>Request and keep the written creditable-coverage notice.</td></tr></tbody></table>

You can read more about coordinating multiple types of insurance in our <a href='/medicare-secondary-payer-rules' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Secondary Payer rules guide</a>. It explains primary and secondary payer concepts for active employer plans, retiree coverage, workers compensation, and other common scenarios.`,
    },
    {
      type: "inlineCta" as const,
      heading: "Leaving Work or Considering COBRA Near Age 65?",
      body: "A quick coverage review can help you identify your Medicare enrollment deadline before COBRA becomes your only plan. Our licensed agents can explain your Medicare options at no cost.",
    },
    {
      type: "section" as const,
      heading: "COBRA, Part B, and the Late-Enrollment Penalty",
      content:
        `The Part B late-enrollment penalty is often the most expensive consequence of treating COBRA like active employer coverage. Medicare generally adds a penalty when someone could have enrolled in Part B but did not, unless the person had qualifying coverage based on current employment. The penalty is usually 10% of the standard Part B premium for every full 12-month period that a person could have had Part B but did not enroll. It can last for as long as the person has Part B.

The exact rule depends on your employment and coverage history. For example, job-based coverage from a current employer can create a Special Enrollment Period in many circumstances, while COBRA after that active coverage ends does not restart the clock. Medicare.gov's <a href='https://www.medicare.gov/basics/get-started-with-medicare/medicare-basics/working-past-65' class='text-[#1a3fa8] underline underline-offset-2' target='_blank' rel='noopener noreferrer'>working past 65 guidance</a> provides the official framework.

If you are unsure whether you qualify for a Special Enrollment Period, review our <a href='/what-is-the-special-enrollment-period' class='text-[#1a3fa8] underline underline-offset-2'>Special Enrollment Period guide</a>. It covers job-based coverage ending, moves, loss of other qualifying coverage, and other life events that may create a time-limited enrollment opportunity.`,
    },
    {
      type: "section" as const,
      heading: "Do Not Forget Part D Drug Coverage",
      content:
        `Part D follows a different penalty rule. You generally avoid the Part D late-enrollment penalty while you have creditable prescription drug coverage. Creditable means the coverage is expected to pay, on average, at least as much as standard Medicare drug coverage. Your group plan or COBRA administrator should tell you whether its drug coverage is creditable and provide a written notice.

Keep that notice. Medicare advises beneficiaries to retain their creditable-coverage records because they may be needed when joining a Part D plan later. If you go 63 continuous days or more without creditable drug coverage after becoming eligible, you may owe a Part D late-enrollment penalty. Our <a href='/how-medicare-part-d-works' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Part D guide</a> explains the role of formularies, plan reviews, and creditable coverage in more detail.`,
    },
    {
      type: "section" as const,
      heading: "A Practical Medicare and COBRA Checklist",
      content:
        `Before you elect COBRA or let job-based coverage end, work through these questions:

<ul><li><strong>What is my last day of active employment?</strong> Write down the date, because it may start your Part B Special Enrollment Period.</li><li><strong>What is the last day of active employer coverage?</strong> This may be different from your last day at work.</li><li><strong>Am I already eligible for Medicare?</strong> If so, do not assume COBRA is a safe reason to defer Part B.</li><li><strong>Will enrolling in Medicare affect my COBRA coverage?</strong> Ask the COBRA administrator for the plan-specific answer in writing.</li><li><strong>Is my COBRA drug coverage creditable?</strong> Request the creditable-coverage notice and keep a copy.</li><li><strong>What will I need to enroll in Part B?</strong> Social Security may require employer coverage forms when you use a Special Enrollment Period.</li><li><strong>What coverage do I want after Original Medicare begins?</strong> Compare a Medicare Supplement with Part D against Medicare Advantage before your enrollment window closes.</li></ul>

For a complete enrollment walkthrough, visit our <a href='/how-to-enroll-in-medicare' class='text-[#1a3fa8] underline underline-offset-2'>step-by-step Medicare enrollment guide</a>. If you need help paying premiums or prescription costs after a job transition, our <a href='/how-to-get-help-paying-for-medicare' class='text-[#1a3fa8] underline underline-offset-2'>Medicare cost-assistance guide</a> explains Extra Help and Medicare Savings Programs.`,
    },
    {
      type: "summary" as const,
      heading: "The Bottom Line on Medicare and COBRA",
      content:
        "COBRA can preserve health coverage after employment ends, but it should not be treated as a way to postpone Medicare Part B without consequences. The Part B enrollment clock is generally tied to the end of active employment or job-based coverage, even if you continue COBRA. Review the dates early, confirm your drug coverage status, and get plan-specific answers before you elect, cancel, or delay coverage.",
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "Does COBRA count as employer coverage for Medicare Part B?",
          answer: "COBRA is continuation coverage, not coverage based on current active employment. It generally does not extend the 8-month Part B Special Enrollment Period that begins when active employment or job-based coverage ends. Review your situation with Medicare, Social Security, and your plan administrator before delaying Part B.",
        },
        {
          question: "Can I keep COBRA after enrolling in Medicare?",
          answer: "It depends on the timing and the plan's rules. Medicare.gov notes that if you have COBRA before signing up for Medicare, your COBRA will probably end once you sign up. Ask the COBRA administrator for a plan-specific answer before you enroll or cancel coverage.",
        },
        {
          question: "When does the 8-month Medicare Part B Special Enrollment Period start?",
          answer: "It generally begins when your active employment ends or when your job-based health coverage ends, whichever happens first. Electing COBRA after that does not extend the period.",
        },
        {
          question: "Can COBRA protect me from the Part D late-enrollment penalty?",
          answer: "Only if the COBRA drug coverage is creditable. Ask the plan for its written creditable-coverage notice and keep it. A gap of 63 continuous days or more without creditable drug coverage after you are eligible for Part D can trigger a penalty.",
        },
        {
          question: "Should I choose COBRA or Medicare when I retire?",
          answer: "The answer depends on when you become Medicare-eligible, the cost and scope of your COBRA benefits, whether you need Part B, and whether the prescription coverage is creditable. Compare the options before your active employer coverage ends, not after COBRA is close to ending.",
        },
      ],
    },
  ],
  relatedPosts: [
    {
      href: "/working-past-65",
      title: "Working Past 65: When to Enroll in Medicare",
      category: "Enrollment" as const,
    },
    {
      href: "/what-is-the-special-enrollment-period",
      title: "What Is a Medicare Special Enrollment Period?",
      category: "Enrollment" as const,
    },
    {
      href: "/medicare-secondary-payer-rules",
      title: "Medicare Secondary Payer Rules: When Medicare Pays Second",
      category: "Coverage" as const,
    },
  ],
};

export default function MedicareAndCobraPage() {
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
