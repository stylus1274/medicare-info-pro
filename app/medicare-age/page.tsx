import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../blog/BlogPostClient";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "What Age Do You Get Medicare? Eligibility Ages Explained 2026",
  "url": "https://medicareinfopro.com/blog/medicare-age",
  "datePublished": "2026-06-01",
  "dateModified": "2026-06-01",
  "image": "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=1200&q=80",
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
    "@id": "https://medicareinfopro.com/blog/medicare-age"
  }
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "What Age Do You Get Medicare? Eligibility Ages Explained 2026 | MedicareInfoPro",
  description:
    "Find out exactly what age you qualify for Medicare, including the standard age-65 rule, early eligibility for disability, ESRD, and ALS, and the enrollment windows you need to know.",
  keywords: [
    "what age do you get Medicare",
    "Medicare eligibility age",
    "when can you get Medicare",
    "Medicare age 65",
    "Medicare before 65",
    "Medicare eligibility requirements 2026",
  ],
  openGraph: {
    title: "What Age Do You Get Medicare? Eligibility Ages Explained 2026",
    description:
      "The standard Medicare age is 65, but there are several ways to qualify earlier. Learn all the eligibility rules and enrollment windows.",
    url: "https://medicareinfopro.com/blog/medicare-age",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Senior couple reviewing Medicare eligibility information",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Age Do You Get Medicare? Eligibility Ages Explained 2026",
    description:
      "The standard Medicare age is 65, but there are several ways to qualify earlier. Learn all the eligibility rules and enrollment windows.",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/blog/medicare-age",
  },
};

const POST = {
  slug: "medicare-age",
  title: "What Age Do You Get Medicare? Eligibility Ages Explained for 2026",
  excerpt:
    "Most Americans become eligible for Medicare at age 65, but that is not the whole story. Disability, kidney failure, and ALS can all qualify you for Medicare before 65. This guide explains every eligibility path and the enrollment windows that apply to each.",
  category: "Enrollment" as const,
  author: GREG_WOHL,
  date: "June 2026",
  readTime: "9 min read",
  image: "https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=1200&q=80",
  imageAlt: "Senior person at age 65 milestone representing Medicare eligibility age",
  sections: [
    {
      type: "intro" as const,
      content:
        "The short answer: you become eligible for Medicare at age 65 if you or your spouse worked and paid Medicare taxes for at least 10 years (40 quarters). But Medicare eligibility is more nuanced than a single age cutoff.\n\nYou can qualify for Medicare before 65 if you have received Social Security Disability Insurance (SSDI) for 24 months, have End-Stage Renal Disease (ESRD), or have been diagnosed with ALS (Lou Gehrig's disease). Each path has different rules and enrollment windows.\n\nThis guide walks through every eligibility scenario so you know exactly when and how to enroll.",
    },
    {
      type: "keyTakeaways" as const,
      items: [
        {
          label: "The standard Medicare age is 65",
          text: "If you or your spouse worked and paid Medicare taxes for at least 10 years, you are eligible for Medicare Part A at no premium cost starting at age 65. Part B requires a monthly premium ($185 in 2026) regardless of your work history.",
        },
        {
          label: "Disability qualifies you before 65 after a 24-month wait",
          text: "If you have received SSDI benefits for 24 consecutive months, you automatically become eligible for Medicare regardless of your age. The 24-month clock starts from your first SSDI payment date, not your disability onset date.",
        },
        {
          label: "ESRD and ALS have no age requirement and no waiting period",
          text: "End-Stage Renal Disease (permanent kidney failure requiring dialysis or a transplant) qualifies you for Medicare at any age with a 3-month waiting period. ALS (Lou Gehrig's disease) qualifies you for Medicare immediately upon receiving SSDI, with no waiting period.",
        },
        {
          label: "Your Initial Enrollment Period is a 7-month window around your 65th birthday",
          text: "The IEP runs from 3 months before your 65th birthday month through 3 months after. Enrolling in the first 3 months ensures your coverage starts on time. Enrolling late can result in a gap in coverage and permanent late enrollment penalties.",
        },
        {
          label: "Working past 65 with employer coverage changes your enrollment rules",
          text: "If you or your spouse is actively working and covered by an employer group health plan, you may be able to delay Medicare enrollment without penalty. The rules depend on the size of your employer. Getting this wrong can result in a permanent Part B late enrollment penalty.",
        },
        {
          label: "You do not need to be receiving Social Security to enroll in Medicare at 65",
          text: "Medicare and Social Security are separate programs. You can enroll in Medicare at 65 even if you have not started collecting Social Security retirement benefits. If you are not yet receiving Social Security, you must actively sign up for Medicare during your enrollment window.",
        },
      ],
    },
    {
      type: "section" as const,
      heading: "The Standard Medicare Age: 65",
      content:
        "The standard Medicare eligibility age is 65. To qualify for premium-free Part A, you or your spouse must have worked and paid Medicare taxes for at least 40 quarters (10 years). If you do not meet the work requirement, you can still enroll in Part A by paying a premium (up to $518 per month in 2026).\n\nPart B is available to anyone who is eligible for Part A, regardless of work history. The standard Part B premium in 2026 is $185 per month, though higher-income beneficiaries pay more under the IRMAA surcharge.\n\n<strong>When does Medicare coverage start at 65?</strong> If you enroll during the first 3 months of your Initial Enrollment Period (the 3 months before your birthday month), your coverage starts on the first day of your birthday month. If you enroll in your birthday month or the 3 months after, your coverage start date is delayed by 1 to 3 months.",
    },
    {
      type: "section" as const,
      heading: "Medicare Before 65: Disability (SSDI)",
      content:
        "If you have a qualifying disability and have been receiving Social Security Disability Insurance (SSDI) benefits for 24 consecutive months, you automatically become eligible for Medicare regardless of your age.\n\n<strong>The 24-month waiting period</strong> starts from the date of your first SSDI payment, not from your disability onset date or application date. There is typically a 5-month waiting period before SSDI payments begin, so the total time from disability onset to Medicare eligibility is usually about 29 months.\n\n<strong>Enrollment is automatic.</strong> Once you have received SSDI for 24 months, Medicare will automatically enroll you in Parts A and B. You will receive your Medicare card in the mail approximately 3 months before your Medicare start date.\n\nFor a full breakdown of disability eligibility requirements, see our guide on <a href='/blog/medicare-disability-eligibility-requirements' class='text-[#1a3fa8] underline underline-offset-2'>Medicare disability eligibility requirements</a>.",
    },
    {
      type: "section" as const,
      heading: "Medicare Before 65: End-Stage Renal Disease (ESRD)",
      content:
        "End-Stage Renal Disease (ESRD) is permanent kidney failure that requires regular dialysis or a kidney transplant. ESRD qualifies you for Medicare at any age, but unlike the ALS pathway, there is a waiting period.\n\n<strong>The ESRD waiting period:</strong> Medicare coverage generally begins in the 4th month of dialysis treatment. If you are on a kidney transplant waiting list, coverage begins immediately. If you receive a kidney transplant, coverage begins the month of the transplant.\n\n<strong>How to enroll:</strong> ESRD enrollment is not automatic. You must apply through your local Social Security office. Your dialysis facility or transplant center can help you with the application process.\n\n<strong>Medicare Advantage and ESRD:</strong> Starting in 2021, people with ESRD can enroll in Medicare Advantage plans. Previously, ESRD patients were limited to Original Medicare.",
    },
    {
      type: "section" as const,
      heading: "Medicare Before 65: ALS (Lou Gehrig's Disease)",
      content:
        "Amyotrophic Lateral Sclerosis (ALS), also known as Lou Gehrig's disease, is the only condition that qualifies you for Medicare with no waiting period.\n\n<strong>Immediate eligibility:</strong> If you are diagnosed with ALS and approved for SSDI, your Medicare coverage begins the same month your SSDI benefits start. The standard 24-month SSDI waiting period does not apply to ALS.\n\n<strong>Enrollment is automatic.</strong> Once your SSDI is approved for ALS, you are automatically enrolled in Medicare Parts A and B. You do not need to take any additional steps to enroll.\n\nThis immediate coverage reflects the rapid progression of ALS and the significant medical needs that accompany the diagnosis.",
    },
    {
      type: "section" as const,
      heading: "Your Enrollment Windows: When to Sign Up",
      content:
        "Knowing your eligibility age is only half the picture. Enrolling at the right time is equally important.\n\n<table class='w-full text-sm border-collapse my-4'><thead><tr class='bg-[#0d2260] text-white'><th class='p-3 text-left'>Enrollment Period</th><th class='p-3 text-left'>When It Applies</th><th class='p-3 text-left'>Duration</th></tr></thead><tbody><tr class='bg-white border-b'><td class='p-3 font-medium'>Initial Enrollment Period (IEP)</td><td class='p-3'>Turning 65</td><td class='p-3'>7 months (3 before + birthday month + 3 after)</td></tr><tr class='bg-gray-50 border-b'><td class='p-3 font-medium'>Special Enrollment Period (SEP)</td><td class='p-3'>Leaving employer coverage after 65</td><td class='p-3'>8 months after coverage or employment ends</td></tr><tr class='bg-white border-b'><td class='p-3 font-medium'>General Enrollment Period (GEP)</td><td class='p-3'>Missed IEP and no SEP</td><td class='p-3'>January 1 to March 31 each year; coverage starts July 1</td></tr><tr class='bg-gray-50'><td class='p-3 font-medium'>Automatic enrollment (disability)</td><td class='p-3'>After 24 months of SSDI</td><td class='p-3'>Automatic; no action required</td></tr></tbody></table>\n\n<strong>Late enrollment penalties are permanent.</strong> If you miss your IEP and do not qualify for a SEP, you will pay a 10% Part B premium surcharge for every 12-month period you were eligible but not enrolled. This penalty lasts for as long as you have Part B.\n\nFor a complete guide to the enrollment process, see our step-by-step guide on <a href='/blog/how-to-sign-up-for-medicare-without-an-agent-step-by-step-guide' class='text-[#1a3fa8] underline underline-offset-2'>how to sign up for Medicare</a>.",
    },
    {
      type: "section" as const,
      heading: "Still Working at 65? What You Need to Know",
      content:
        "If you are still working at 65 and covered by an employer group health plan, you may be able to delay Medicare enrollment without penalty. The rules depend on the size of your employer.\n\n<strong>Employer with 20 or more employees:</strong> Your employer plan is the primary payer. You can delay Part B enrollment without penalty as long as you remain actively employed and covered. You have an 8-month Special Enrollment Period after your employment or coverage ends.\n\n<strong>Employer with fewer than 20 employees:</strong> Medicare is the primary payer even if you have employer coverage. You should enroll in Medicare at 65 to avoid coverage gaps and potential penalties.\n\n<strong>HSA contributions and Part A:</strong> If you are contributing to a Health Savings Account (HSA), enrolling in any part of Medicare (including Part A) makes you ineligible to contribute further. Plan your enrollment timing carefully if you want to maximize HSA contributions before transitioning to Medicare.\n\nFor a full guide to working past 65 and Medicare, see our article on <a href='/blog/florida-medicare-if-still-working-at-65' class='text-[#1a3fa8] underline underline-offset-2'>Florida Medicare if still working at 65</a>.",
    },
    {
      type: "summary" as const,
      heading: "The Bottom Line on Medicare Age and Eligibility",
      content:
        "Medicare eligibility is not one-size-fits-all. Here is the quick reference:\n\n<ul><li><strong>Age 65:</strong> Standard eligibility for anyone with 40 quarters of Medicare-covered work (or a qualifying spouse)</li><li><strong>Any age with SSDI:</strong> Eligible after 24 months of receiving Social Security Disability Insurance benefits</li><li><strong>Any age with ESRD:</strong> Eligible after 3 months of dialysis or immediately with a kidney transplant</li><li><strong>Any age with ALS:</strong> Eligible immediately upon SSDI approval, with no waiting period</li><li><strong>Enrollment timing matters:</strong> Missing your Initial Enrollment Period can result in permanent late enrollment penalties</li></ul>\n\nIf you are approaching 65 or have questions about your specific eligibility situation, our licensed specialists can walk you through your options. <a href='/free-consultation' class='text-[#1a3fa8] underline underline-offset-2'>Schedule a free consultation</a> to get started.",
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "Can you get Medicare at 62?",
          answer:
            "Not through the standard age pathway. However, if you have been receiving SSDI benefits for 24 months, you can qualify for Medicare at 62 or any other age. ESRD and ALS also qualify you for Medicare at any age regardless of your work history.",
        },
        {
          question: "Do you automatically get Medicare at 65?",
          answer:
            "If you are already receiving Social Security retirement benefits when you turn 65, you will be automatically enrolled in Medicare Parts A and B. If you are not yet receiving Social Security, you must actively enroll during your Initial Enrollment Period. You will not be automatically enrolled.",
        },
        {
          question: "Can you get Medicare before 65 without a disability?",
          answer:
            "The only pathways to Medicare before 65 without a disability are ESRD (permanent kidney failure requiring dialysis or a transplant) and ALS. There is no general early enrollment option for Medicare before 65.",
        },
        {
          question: "What happens if you miss the Medicare enrollment deadline?",
          answer:
            "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you must wait for the General Enrollment Period (January 1 to March 31). Coverage starts July 1. You will also pay a permanent 10% Part B premium surcharge for every 12-month period you were eligible but not enrolled.",
        },
        {
          question: "Is Medicare free at 65?",
          answer:
            "Part A is premium-free for most people who worked and paid Medicare taxes for at least 10 years. Part B requires a monthly premium ($185 in 2026). Medicare Advantage and Part D plans have their own premiums. Medigap supplement plans also have premiums if you choose to add them.",
        },
        {
          question: "Can a spouse qualify you for Medicare?",
          answer:
            "Yes. If your spouse worked and paid Medicare taxes for at least 40 quarters, you can qualify for premium-free Part A based on their work record, even if you did not work yourself. You must be at least 65 and either currently married (for at least 1 year) or divorced after at least 10 years of marriage.",
        },
      ],
    },
  ],
  relatedPosts: [
    {
      title: "Medicare Qualifications in Florida: Who Is Eligible?",
      href: "/medicare-qualifications-florida",
      category: "Enrollment" as const,
    },
    {
      title: "How to Sign Up for Medicare Without an Agent: Step-by-Step Guide",
      href: "/how-to-sign-up-for-medicare-without-an-agent-step-by-step-guide",
      category: "Enrollment" as const,
    },
    {
      title: "Florida Medicare If Still Working at 65",
      href: "/florida-medicare-if-still-working-at-65",
      category: "Enrollment" as const,
    },
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
