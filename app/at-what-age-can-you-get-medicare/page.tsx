import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../blog/BlogPostClient";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "At What Age Can You Get Medicare? Eligibility Rules Explained",
  "url": "https://medicareinfopro.com/at-what-age-can-you-get-medicare",
  "datePublished": "2026-07-05",
  "dateModified": "2026-07-05",
  "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80",
  "author": {
    "@type": "Person",
    "name": "Greg Wohl",
    "jobTitle": "Licensed Medicare Specialist",
    "url": "https://medicareinfopro.com/greg-wohl"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Project",
    "url": "https://medicareinfopro.com"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://medicareinfopro.com/at-what-age-can-you-get-medicare"
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "At what age can you get Medicare?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most Americans become eligible for Medicare at age 65. If you are already receiving Social Security or Railroad Retirement Board benefits, you are automatically enrolled in Medicare Parts A and B starting the month you turn 65. If you are not yet receiving those benefits, you must actively sign up during your Initial Enrollment Period."
      }
    },
    {
      "@type": "Question",
      "name": "Can you get Medicare before age 65?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. You can qualify for Medicare before 65 if you have received Social Security Disability Insurance (SSDI) for 24 months, have been diagnosed with ALS (Lou Gehrig's disease, which triggers immediate enrollment), or have End-Stage Renal Disease (ESRD) requiring dialysis or a kidney transplant."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if I miss my Medicare enrollment window at 65?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you will face a permanent Part B late enrollment penalty of 10% for each 12-month period you went without coverage. You will also have to wait for the General Enrollment Period (January 1 to March 31) to sign up, with coverage starting July 1."
      }
    },
    {
      "@type": "Question",
      "name": "Do I have to sign up for Medicare at 65 if I am still working?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. If you are covered by a group health plan through your employer (or your spouse's employer) and the employer has 20 or more employees, you can delay Medicare Part B without penalty. Once that employer coverage ends, you have an 8-month Special Enrollment Period to sign up."
      }
    },
    {
      "@type": "Question",
      "name": "Is Medicare free at age 65?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Medicare Part A is premium-free for most people who worked and paid Medicare taxes for at least 10 years (40 quarters). Medicare Part B has a standard monthly premium of $185.00 in 2026. Higher earners pay more through IRMAA surcharges. Medicare Advantage and Part D plans have their own premiums, which vary by plan."
      }
    }
  ]
};

export const metadata: Metadata = {
  title: "At What Age Can You Get Medicare? Eligibility Rules Explained | Medicare Information Pro",
  description: "Most people get Medicare at 65, but you can qualify earlier. Learn the exact age rules, disability exceptions, enrollment windows, and what happens if you delay.",
  keywords: [
    "at what age can you get medicare",
    "medicare age eligibility",
    "medicare age 65",
    "when can you get medicare",
    "medicare eligibility age",
    "medicare before 65",
    "medicare disability eligibility",
  ],
  openGraph: {
    title: "At What Age Can You Get Medicare? Eligibility Rules Explained",
    description: "Most people get Medicare at 65, but you can qualify earlier. Learn the exact age rules, disability exceptions, enrollment windows, and what happens if you delay.",
    url: "https://medicareinfopro.com/at-what-age-can-you-get-medicare",
    type: "article",
    siteName: "Medicare Information Pro",
    images: [{ url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80" }],
  },
  alternates: {
    canonical: "https://medicareinfopro.com/at-what-age-can-you-get-medicare",
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BlogPostClient
        post={{
          slug: "/at-what-age-can-you-get-medicare",
          title: "At What Age Can You Get Medicare? Eligibility Rules Explained",
          excerpt: "Most Americans become eligible for Medicare at 65, but the rules are more nuanced than a single number. Disability, kidney disease, and employer coverage all affect when and how you enroll. This guide covers every eligibility scenario so you know exactly where you stand.",
          category: "Enrollment",
          author: GREG_WOHL,
          date: "July 5, 2026",
          readTime: "11 min read",
          image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=80",
          imageAlt: "Senior couple reviewing Medicare eligibility documents at home",
          sections: [
            {
              type: "intro",
              content: "The most common answer to 'when can I get Medicare?' is age 65. But that answer leaves out a significant number of people who qualify earlier, and it glosses over the enrollment windows that determine whether you pay a penalty for the rest of your life.\n\nThis article explains every Medicare eligibility rule in plain language: the standard age-65 pathway, the three ways to qualify before 65, what happens when you are still working, and the enrollment deadlines you cannot afford to miss.",
            },
            {
              type: "keyTakeaways",
              items: [
                { label: "Standard eligibility age", text: "Most Americans become eligible for Medicare at age 65, regardless of whether they are retired." },
                { label: "Early eligibility exists", text: "You can qualify before 65 through Social Security Disability Insurance (after 24 months), ALS diagnosis, or End-Stage Renal Disease." },
                { label: "Enrollment is not automatic for everyone", text: "If you are not already receiving Social Security benefits, you must actively sign up during your Initial Enrollment Period." },
                { label: "Working at 65 may allow a delay", text: "If you have qualifying employer coverage, you can delay Part B without penalty and use a Special Enrollment Period later." },
                { label: "Late enrollment penalties are permanent", text: "Missing your enrollment window without a qualifying exception results in a lifelong premium surcharge on Part B and Part D." },
              ],
            },
            {
              type: "section",
              heading: "The Standard Medicare Age: 65",
              content: "Medicare eligibility begins on the first day of the month you turn 65. You do not need to be retired. You do not need to be receiving Social Security. You simply need to be a U.S. citizen or a permanent legal resident who has lived in the United States for at least five continuous years.\n\nTo qualify for premium-free Part A (hospital insurance), you or your spouse must have worked and paid Medicare taxes for at least 40 quarters (10 years). If you fall short of that threshold, you can still get Part A by paying a monthly premium, which is $278 or $505 per month in 2026 depending on how many quarters you have.\n\nPart B (medical insurance) is available to everyone who qualifies for Part A, but it always carries a monthly premium. The standard Part B premium in 2026 is $185.00 per month. Higher-income enrollees pay more through Income-Related Monthly Adjustment Amounts (IRMAA).\n\nIf you are already receiving Social Security retirement benefits or Railroad Retirement Board benefits when you turn 65, you are enrolled in Medicare Parts A and B automatically. Your Medicare card arrives in the mail about three months before your 65th birthday. If you are not yet receiving those benefits, you must sign up yourself.",
            },
            {
              type: "section",
              heading: "Can You Get Medicare Before Age 65?",
              content: "Yes. Three specific conditions allow Medicare enrollment before age 65.\n\n<strong>1. Social Security Disability Insurance (SSDI)</strong>\nIf you have been receiving SSDI benefits for 24 consecutive months, you become automatically eligible for Medicare. The 24-month waiting period begins the month your SSDI benefits start, not the month your disability began. This means most people with disabilities wait about two years before Medicare coverage kicks in.\n\n<strong>2. Amyotrophic Lateral Sclerosis (ALS)</strong>\nALS, also known as Lou Gehrig's disease, is the only condition that triggers immediate Medicare enrollment without a waiting period. The moment you are approved for SSDI due to ALS, your Medicare coverage begins. There is no 24-month delay.\n\n<strong>3. End-Stage Renal Disease (ESRD)</strong>\nIf you have permanent kidney failure requiring regular dialysis or a kidney transplant, you can qualify for Medicare at any age. Coverage typically begins the fourth month of dialysis treatment, though it can start earlier if you enroll in a home dialysis training program. After a successful kidney transplant, Medicare coverage continues for 36 months.",
            },
            {
              type: "proTip",
              content: "If you are approaching 65 and have a disability that has kept you out of the workforce, check whether you qualify for SSDI before your 65th birthday. If you have been receiving SSDI for 24 months or more, your Medicare enrollment may already be in progress or even active without you realizing it. Call the Social Security Administration at 1-800-772-1213 to confirm your enrollment status before your birthday month arrives.",
            },
            {
              type: "section",
              heading: "Your Medicare Enrollment Window at 65",
              content: "When you become eligible at 65, you have a seven-month window called the Initial Enrollment Period (IEP) to sign up. This window opens three months before the month you turn 65, includes your birthday month, and closes three months after.\n\nFor example, if your birthday is September 15, your IEP runs from June 1 through December 31.\n\nWhen you enroll within this window matters for when your coverage starts:\n\n<strong>Enroll in months 1-3 (before your birthday month):</strong> Coverage starts the first day of your birthday month.\n\n<strong>Enroll in month 4 (your birthday month):</strong> Coverage starts the first day of the following month.\n\n<strong>Enroll in months 5-7 (after your birthday month):</strong> Coverage is delayed by one to three months.\n\nFor most people, enrolling in the three months before their 65th birthday produces the cleanest outcome: coverage starts on time, there is no gap, and there is no penalty. Our <a href='/enrollment-timeline' class='text-[#1a3fa8] underline hover:text-[#0d2260]'>Medicare enrollment timeline</a> walks through every period in detail.",
            },
            {
              type: "section",
              heading: "What If You Are Still Working at 65?",
              content: "One of the most common Medicare questions from people approaching 65 is whether they have to enroll if they are still working and covered by an employer health plan. The answer depends on the size of your employer.\n\n<strong>Employer with 20 or more employees:</strong> Your employer's group health plan is the primary payer, and Medicare is secondary. You can delay enrolling in Part B without any penalty. Once your employment or employer coverage ends, you have an eight-month Special Enrollment Period to sign up for Part B without a late penalty.\n\n<strong>Employer with fewer than 20 employees:</strong> Medicare becomes the primary payer at 65, even if you are still working. In this case, you should enroll in Medicare on time to avoid coverage gaps and penalties. Your small employer plan may pay very little if Medicare is not in place.\n\nNote that the Special Enrollment Period for delayed Part B is eight months from the date your employer coverage ends, not eight months from when you retire. If you wait too long after coverage ends, you lose the SEP and face the General Enrollment Period plus a late penalty.\n\nFor a detailed breakdown of how Medicare interacts with employer coverage, read our guide on <a href='/still-working' class='text-[#1a3fa8] underline hover:text-[#0d2260]'>Medicare when you are still working at 65</a>.",
            },
            {
              type: "section",
              heading: "The Late Enrollment Penalty: What It Costs to Miss Your Window",
              content: "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, the financial consequences are permanent.\n\n<strong>Part B late enrollment penalty:</strong> 10% added to your monthly Part B premium for each full 12-month period you went without coverage. If you delayed two years, your premium increases by 20% for as long as you have Medicare. On a $185 base premium, that is an extra $37 per month, or $444 per year, forever.\n\n<strong>Part D late enrollment penalty:</strong> 1% of the national base beneficiary premium multiplied by the number of months you went without creditable drug coverage. In 2026, that base premium is $36.78. A 12-month gap adds roughly $4.41 per month to your Part D premium, permanently.\n\nThese penalties are not one-time fees. They compound over time and follow you from plan to plan. A two-year delay on Part B that starts at age 67 could cost you thousands of dollars over a 20-year retirement.\n\nUse our <a href='/medicare-penalty-calculator' class='text-[#1a3fa8] underline hover:text-[#0d2260]'>Medicare penalty calculator</a> to see exactly what a delay could cost you based on your specific situation.",
            },
            {
              type: "section",
              heading: "Special Enrollment Periods: When You Can Enroll Outside the Standard Window",
              content: "A Special Enrollment Period (SEP) allows you to sign up for Medicare outside your Initial Enrollment Period without a late penalty. The most common SEP is the one available to people who delayed Medicare because of qualifying employer coverage (described above).\n\nOther situations that may trigger a Special Enrollment Period include:\n\n<strong>Loss of Medicaid coverage:</strong> If you lose Medicaid eligibility, you may qualify for a SEP to enroll in Medicare or change your Medicare plan.\n\n<strong>Moving to a new service area:</strong> If you move out of your Medicare Advantage plan's service area, you have a SEP to switch plans.\n\n<strong>Plan contract changes:</strong> If your Medicare Advantage or Part D plan leaves Medicare or stops serving your area, you receive a SEP to choose a new plan.\n\n<strong>Qualifying life events:</strong> Certain changes in circumstances, such as gaining or losing other coverage, can trigger a SEP.\n\nFor a full explanation of every SEP and how to use one, see our article on <a href='/what-is-the-special-enrollment-period' class='text-[#1a3fa8] underline hover:text-[#0d2260]'>what is the Special Enrollment Period</a>.",
            },
            {
              type: "section",
              heading: "Choosing Your Coverage: What Happens After You Enroll",
              content: "Enrolling in Medicare Parts A and B is just the beginning. Original Medicare covers roughly 80% of approved medical costs, leaving you responsible for the remaining 20% with no annual out-of-pocket maximum. Most people add additional coverage to fill that gap.\n\nYou have two main paths:\n\n<strong>Medicare Advantage (Part C):</strong> A private plan that replaces Original Medicare and typically includes Part D drug coverage, plus extra benefits like dental, vision, and hearing. Plans have networks and prior authorization requirements but often have lower out-of-pocket maximums. Learn more in our guide to <a href='/medicare-advantage' class='text-[#1a3fa8] underline hover:text-[#0d2260]'>Medicare Advantage plans</a>.\n\n<strong>Medicare Supplement (Medigap):</strong> A policy that works alongside Original Medicare to cover the 20% cost-sharing gap. Medigap gives you the freedom to see any Medicare-accepting provider nationwide with no network restrictions. Read our overview of <a href='/medicare-supplement' class='text-[#1a3fa8] underline hover:text-[#0d2260]'>Medicare Supplement insurance plans</a> to understand your options.\n\nThe best time to enroll in a Medigap plan is during your six-month Medigap Open Enrollment Period, which begins the month you are both 65 and enrolled in Part B. During this window, insurers cannot deny you coverage or charge you more based on pre-existing conditions. After this window closes, medical underwriting applies in most states.",
            },
            {
              type: "section",
              heading: "Medicare Eligibility: A Quick Reference Summary",
              content: "<strong>Age 65, standard pathway:</strong> Eligible if you are a U.S. citizen or qualifying permanent resident with 40 quarters of Medicare-covered work (or willing to pay Part A premium).\n\n<strong>Under 65, SSDI pathway:</strong> Eligible after 24 consecutive months of receiving Social Security Disability Insurance benefits.\n\n<strong>Under 65, ALS pathway:</strong> Eligible immediately upon SSDI approval for ALS, with no waiting period.\n\n<strong>Under 65, ESRD pathway:</strong> Eligible at any age with End-Stage Renal Disease requiring dialysis or a kidney transplant.\n\n<strong>Still working at 65:</strong> May delay Part B without penalty if covered by qualifying employer group health plan from an employer with 20 or more employees.\n\n<strong>Missed enrollment window:</strong> Subject to permanent Part B and Part D late enrollment penalties unless a qualifying Special Enrollment Period applies.",
            },
            {
              type: "faq",
              items: [
                {
                  question: "At what age can you get Medicare?",
                  answer: "Most Americans become eligible for Medicare at age 65. If you are already receiving Social Security or Railroad Retirement Board benefits, you are automatically enrolled in Medicare Parts A and B starting the month you turn 65. If you are not yet receiving those benefits, you must actively sign up during your Initial Enrollment Period.",
                },
                {
                  question: "Can you get Medicare before age 65?",
                  answer: "Yes. You can qualify for Medicare before 65 if you have received Social Security Disability Insurance (SSDI) for 24 months, have been diagnosed with ALS (which triggers immediate enrollment), or have End-Stage Renal Disease (ESRD) requiring dialysis or a kidney transplant.",
                },
                {
                  question: "What happens if I miss my Medicare enrollment window at 65?",
                  answer: "If you miss your Initial Enrollment Period and do not qualify for a Special Enrollment Period, you will face a permanent Part B late enrollment penalty of 10% for each 12-month period you went without coverage. You will also have to wait for the General Enrollment Period (January 1 to March 31) to sign up, with coverage starting July 1.",
                },
                {
                  question: "Do I have to sign up for Medicare at 65 if I am still working?",
                  answer: "Not necessarily. If you are covered by a group health plan through your employer (or your spouse's employer) and the employer has 20 or more employees, you can delay Medicare Part B without penalty. Once that employer coverage ends, you have an 8-month Special Enrollment Period to sign up.",
                },
                {
                  question: "Is Medicare free at age 65?",
                  answer: "Medicare Part A is premium-free for most people who worked and paid Medicare taxes for at least 10 years (40 quarters). Medicare Part B has a standard monthly premium of $185.00 in 2026. Higher earners pay more through IRMAA surcharges. Medicare Advantage and Part D plans have their own premiums, which vary by plan.",
                },
              ],
            },
            {
              type: "summary",
              heading: "Bottom Line",
              content: "Medicare eligibility starts at 65 for most people, but the rules around when you must enroll, when you can delay, and when you qualify early are more detailed than that single number suggests. Enrolling at the right time protects you from permanent penalties and ensures your coverage starts without gaps.\n\nIf you are approaching 65 or already past it and unsure about your enrollment status, a licensed Medicare agent can review your situation at no cost. Our agents help Florida residents navigate every eligibility scenario, from first-time enrollment to late enrollment penalty reviews to plan selection after the initial sign-up window.",
            },
          ],
          relatedPosts: [
            {
              title: "How to Enroll in Medicare: A Complete Step-by-Step Guide for 2026",
              href: "/how-to-enroll-in-medicare",
              category: "Enrollment",
            },
            {
              title: "What Is the Special Enrollment Period?",
              href: "/what-is-the-special-enrollment-period",
              category: "Enrollment",
            },
            {
              title: "Medicare Advantage vs. Medigap: A Side-by-Side Comparison",
              href: "/medicare-advantage-vs-medigap",
              category: "Plans",
            },
            {
              title: "Medicare Out-of-Pocket Costs: Copays, Deductibles, and Savings",
              href: "/medicare-out-of-pocket-costs",
              category: "Costs",
            },
          ],
        }}
      />
    </>
  );
}
