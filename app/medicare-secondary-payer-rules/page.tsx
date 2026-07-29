import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../blog/BlogPostClient";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Medicare Secondary Payer Rules: When Medicare Pays Second",
  "url": "https://medicareinfopro.com/medicare-secondary-payer-rules",
  "datePublished": "2026-07-01",
  "dateModified": "2026-07-01",
  "image": "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
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
    "@id": "https://medicareinfopro.com/medicare-secondary-payer-rules"
  }
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Secondary Payer Rules: When Medicare Pays Second | MedicareInfoPro",
  description:
    "Medicare Secondary Payer (MSP) rules determine when Medicare pays after another insurer. Learn how MSP applies to employer coverage, COBRA, workers comp, auto insurance, VA benefits, and more.",
  keywords: [
    "Medicare Secondary Payer rules",
    "Medicare Secondary Payer",
    "MSP rules Medicare",
    "when does Medicare pay second",
    "Medicare coordination of benefits",
    "Medicare employer coverage",
    "Medicare workers compensation",
    "Medicare COBRA coordination",
    "Medicare primary secondary payer",
  ],
  openGraph: {
    title: "Medicare Secondary Payer Rules: When Medicare Pays Second",
    description:
      "Medicare Secondary Payer rules determine when Medicare pays after another insurer. Covers employer plans, COBRA, workers comp, auto insurance, and VA benefits.",
    url: "https://medicareinfopro.com/medicare-secondary-payer-rules",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Medicare Secondary Payer coordination of benefits documents",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Secondary Payer Rules: When Medicare Pays Second",
    description:
      "When Medicare pays second and when it pays first. Covers employer plans, COBRA, workers comp, auto insurance, and VA benefits.",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-secondary-payer-rules",
  },
};

const POST = {
  slug: "medicare-secondary-payer-rules",
  title: "Medicare Secondary Payer Rules: When Medicare Pays Second",
  excerpt:
    "Medicare does not always pay first. When you have other health coverage, federal Medicare Secondary Payer (MSP) rules determine which insurer pays first and which pays second. Getting this wrong can result in denied claims, unexpected bills, and even legal liability. This guide explains how MSP works across every major coverage scenario.",
  category: "Coverage" as const,
  author: GREG_WOHL,
  date: "July 2026",
  readTime: "12 min read",
  image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
  imageAlt: "Medicare Secondary Payer coordination of benefits documents",
  sections: [
    {
      type: "keyTakeaways" as const,
      items: [
        {
          label: "MSP rules are federal law, not optional",
          text: "Medicare Secondary Payer rules are established by federal statute (42 U.S.C. 1395y(b)). Violating them can result in claim denials, repayment demands, and civil penalties for providers and insurers.",
        },
        {
          label: "Employer size determines who pays first",
          text: "If you are actively working and covered by an employer group health plan, the employer plan pays first if the employer has 20 or more employees. Medicare pays first if the employer has fewer than 20 employees.",
        },
        {
          label: "COBRA is always secondary to Medicare",
          text: "If you have both Medicare and COBRA, Medicare always pays first and COBRA pays second. Enrolling in Medicare after COBRA begins may terminate your COBRA rights in some situations.",
        },
        {
          label: "Workers comp and liability insurance pay before Medicare",
          text: "Workers compensation, no-fault auto insurance, and liability insurance are always primary to Medicare. Medicare may make conditional payments but will seek reimbursement.",
        },
        {
          label: "VA benefits and Medicare operate independently",
          text: "VA benefits and Medicare do not coordinate with each other. You generally cannot use both for the same service. Each covers care provided at its own facilities.",
        },
        {
          label: "Delaying Medicare enrollment has consequences",
          text: "If you delay Medicare Part B enrollment because of employer coverage, you must enroll during your Special Enrollment Period when that coverage ends or face a permanent late enrollment penalty.",
        },
      ],
    },
    {
      type: "section" as const,
      heading: "What Are Medicare Secondary Payer Rules?",
      content:
        "Medicare Secondary Payer (MSP) is a set of federal laws that govern which payer is responsible for paying first when a Medicare beneficiary has more than one source of health coverage. The term \"primary payer\" refers to the insurer that pays first. The \"secondary payer\" pays after the primary payer has processed the claim, covering some or all of the remaining balance.\n\nCongress enacted the MSP statute in 1980 to reduce federal spending by ensuring that Medicare does not pay for services that another insurer is legally required to cover. Since then, the rules have expanded significantly and now cover a wide range of situations including employer group health plans, COBRA, workers compensation, no-fault auto insurance, liability insurance, and the Veterans Administration.\n\nFor Medicare beneficiaries, understanding MSP rules is essential for three reasons:\n\n<ul><li><strong>Claim denials:</strong> If you submit a claim to Medicare when another insurer is the primary payer, Medicare will deny the claim. You may then face unexpected bills if you do not know how to resubmit correctly.</li><li><strong>Repayment obligations:</strong> If Medicare makes a conditional payment (paying first when it should have paid second), Medicare has the right to recover that payment from you, your attorney, or any settlement proceeds.</li><li><strong>Enrollment decisions:</strong> MSP rules directly affect whether you should enroll in Medicare Part B when you turn 65, or whether you can safely delay enrollment without incurring a penalty.</li></ul>\n\nThe Centers for Medicare and Medicaid Services (CMS) maintains a <a href='https://www.cms.gov/medicare/coordination-of-benefits-and-recovery/coordination-of-benefits-and-recovery-overview/medicare-secondary-payer' class='text-[#1a3fa8] underline underline-offset-2' target='_blank' rel='noopener noreferrer'>Medicare Secondary Payer overview</a> with official guidance for providers, insurers, and beneficiaries.",
    },
    {
      type: "section" as const,
      heading: "MSP Rule 1: Active Employer Coverage (Working Aged)",
      content:
        "The most common MSP situation involves people who are 65 or older and still working, covered by an employer group health plan (GHP) through their own job or their spouse's job.\n\n<strong>The employer size rule:</strong>\n\n<table><thead><tr><th>Employer Size</th><th>Who Pays First</th><th>Who Pays Second</th></tr></thead><tbody><tr><td>20 or more employees</td><td>Employer group health plan</td><td>Medicare</td></tr><tr><td>Fewer than 20 employees</td><td>Medicare</td><td>Employer group health plan</td></tr></tbody></table>\n\nIf your employer has 20 or more employees, the employer plan is the primary payer and Medicare is secondary. This means you can safely delay enrolling in Medicare Part B without penalty, as long as you remain covered by the employer plan. When that employer coverage ends (because you retire, lose your job, or the employer drops coverage), you have a <a href='/what-is-the-special-enrollment-period' class='text-[#1a3fa8] underline underline-offset-2'>Special Enrollment Period</a> of up to eight months to enroll in Part B without a late enrollment penalty.\n\nIf your employer has fewer than 20 employees, Medicare is the primary payer. In this case, you should enroll in Medicare Part B at 65 even if you have employer coverage. The employer plan may refuse to pay for services that Medicare should have covered, leaving you with the full bill.\n\n<strong>Important nuances:</strong>\n\n<ul><li><strong>Spouse's employer:</strong> The same size rule applies if you are covered as a dependent on your spouse's employer plan. What matters is the size of your spouse's employer, not yours.</li><li><strong>Retiree coverage:</strong> Retiree health benefits from a former employer are NOT employer group health plans under MSP rules. Medicare is always primary when you have retiree coverage.</li><li><strong>SHOP plans and marketplace plans:</strong> Individual marketplace plans and SHOP plans for small businesses are not employer group health plans under MSP. Medicare is primary over these plans.</li></ul>",
    },
    {
      type: "section" as const,
      heading: "MSP Rule 2: COBRA Continuation Coverage",
      content:
        "COBRA allows you to continue employer group health plan coverage for up to 18 months after leaving a job (or up to 36 months in some circumstances). The MSP rules for COBRA are straightforward but frequently misunderstood.\n\n<strong>Medicare is always primary over COBRA.</strong> If you have both Medicare and COBRA, Medicare pays first and COBRA pays second, regardless of which one you enrolled in first.\n\nThis creates an important practical issue: if you are enrolled in COBRA and then become eligible for Medicare (for example, you turn 65 while on COBRA), you should enroll in Medicare Part B. If you do not enroll in Medicare and continue relying on COBRA as your primary coverage, COBRA may deny claims on the grounds that Medicare should have paid first. You could end up with large unpaid bills.\n\n<strong>COBRA and the Special Enrollment Period:</strong> Enrolling in Medicare Part B does not automatically terminate your COBRA coverage. However, if you delay enrolling in Medicare Part B because you have COBRA, you will NOT qualify for a Special Enrollment Period when COBRA ends. COBRA is not considered \"employer group health plan coverage based on current employment\" under MSP rules. If you miss your Initial Enrollment Period and rely on COBRA, you may face a permanent Part B late enrollment penalty.\n\nFor a detailed explanation of enrollment windows and how to avoid penalties, see our guide to <a href='/how-to-enroll-in-medicare' class='text-[#1a3fa8] underline underline-offset-2'>how to enroll in Medicare</a>.",
    },
    {
      type: "inlineCta" as const,
      heading: "Unsure How MSP Rules Apply to Your Situation?",
      body: "Our licensed Medicare specialists can review your current coverage and help you avoid costly enrollment mistakes and claim denials.",
    },
    {
      type: "section" as const,
      heading: "MSP Rule 3: Workers Compensation",
      content:
        "Workers compensation insurance covers medical expenses and lost wages for job-related injuries and illnesses. Under MSP rules, workers compensation is always the primary payer for work-related injuries. Medicare does not cover services that workers compensation is obligated to pay.\n\n<strong>Conditional payments:</strong> In some cases, Medicare will make a conditional payment while a workers compensation claim is being processed or disputed. This is not a gift. Medicare will seek full reimbursement from any workers compensation settlement or award. If you receive a workers compensation settlement, you are legally required to repay Medicare for any conditional payments it made related to the injury.\n\n<strong>Medicare Set-Asides (MSAs):</strong> When a workers compensation case settles and the injured worker is a Medicare beneficiary (or is expected to become one within 30 months), CMS may require a Workers Compensation Medicare Set-Aside Arrangement (WCMSA). This is a portion of the settlement set aside in a dedicated account to pay for future medical expenses related to the injury that Medicare would otherwise cover. The funds must be spent on injury-related care before Medicare will pay.\n\n<strong>Reporting requirements:</strong> Insurers and self-insured employers are required to report workers compensation settlements involving Medicare beneficiaries to CMS through the Section 111 mandatory reporting system.",
    },
    {
      type: "section" as const,
      heading: "MSP Rule 4: No-Fault Auto Insurance and Liability Insurance",
      content:
        "No-fault auto insurance (also called personal injury protection or PIP) and liability insurance are both primary to Medicare under MSP rules.\n\n<strong>No-fault auto insurance:</strong> If you are injured in an auto accident and your state requires no-fault insurance, that insurance pays first for your medical expenses up to the policy limit. Medicare pays second after the no-fault coverage is exhausted. If Medicare makes conditional payments while the no-fault claim is pending, it will seek reimbursement from any settlement.\n\n<strong>Liability insurance:</strong> If you are injured due to someone else's negligence (a slip and fall, a car accident where the other driver is at fault, a defective product), the at-fault party's liability insurance is primary to Medicare. This is true even if the liability insurer disputes the claim.\n\n<strong>Medicare liens on settlements:</strong> This is one of the most important MSP concepts for anyone involved in personal injury litigation. If Medicare paid for any medical treatment related to your injury, Medicare has a legal right to recover those payments from your settlement proceeds. This right is called a Medicare lien. Before you finalize any personal injury settlement, you must contact the Medicare Benefits Coordination and Recovery Center (BCRC) to determine whether Medicare has a lien and how much must be repaid.\n\nFailure to satisfy a Medicare lien can result in Medicare pursuing recovery directly from you, your attorney, or the liability insurer. Attorneys who handle personal injury cases involving Medicare beneficiaries have an obligation to protect and satisfy Medicare's interests as part of the settlement process.",
    },
    {
      type: "section" as const,
      heading: "MSP Rule 5: End-Stage Renal Disease (ESRD)",
      content:
        "Patients with End-Stage Renal Disease (ESRD) who are covered by an employer group health plan face a unique MSP coordination period.\n\nDuring the first 30 months after Medicare eligibility begins due to ESRD (called the coordination period), the employer group health plan is the primary payer and Medicare is secondary, regardless of employer size. After the 30-month coordination period ends, Medicare becomes the primary payer.\n\nThis rule applies even to large employers with 20 or more employees. The ESRD coordination period is a specific exception to the general employer size rule.\n\n<strong>Practical implications:</strong> If you have ESRD and employer coverage, your employer plan must continue to cover dialysis and related services as the primary payer during the 30-month coordination period. Some employer plans attempt to steer ESRD patients toward Medicare prematurely. This is prohibited under MSP rules, and CMS actively enforces against employers and insurers who violate this requirement.",
    },
    {
      type: "section" as const,
      heading: "MSP Rule 6: Disability and Employer Coverage",
      content:
        "People under 65 who qualify for Medicare due to disability (after 24 months of Social Security Disability Insurance) face MSP rules similar to the working aged rules, but with a different employer size threshold.\n\nFor disabled Medicare beneficiaries under 65, the employer group health plan is primary if the employer has 100 or more employees (or is part of a multi-employer plan with at least one employer with 100 or more employees). Medicare is primary if the employer has fewer than 100 employees.\n\n<table><thead><tr><th>Beneficiary Type</th><th>Employer Size Threshold for GHP Primary</th></tr></thead><tbody><tr><td>Age 65 or older (working aged)</td><td>20 or more employees</td></tr><tr><td>Under 65, disabled</td><td>100 or more employees</td></tr><tr><td>ESRD (any age)</td><td>Any size (30-month coordination period)</td></tr></tbody></table>\n\nIf you are under 65, on Medicare due to disability, and your employer has fewer than 100 employees, Medicare is your primary payer. You should not delay enrolling in Medicare Part B in this situation.",
    },
    {
      type: "section" as const,
      heading: "VA Benefits and Medicare: A Special Case",
      content:
        "Veterans Administration (VA) benefits and Medicare operate under a fundamentally different framework than the other MSP scenarios. VA benefits and Medicare do not coordinate with each other in the traditional primary/secondary sense.\n\n<strong>The basic rule:</strong> VA benefits cover care provided at VA facilities. Medicare covers care provided at non-VA facilities. Generally, you cannot use both for the same service at the same time.\n\n<ul><li>If you receive care at a VA facility, VA pays. Medicare does not cover VA-provided care.</li><li>If you receive care at a non-VA facility, Medicare pays (assuming the service is covered). VA does not pay for non-VA care except in specific emergency situations or through VA community care programs.</li></ul>\n\n<strong>Why enroll in Medicare if you have VA benefits?</strong> VA benefits do not protect you from Medicare late enrollment penalties. If you delay enrolling in Medicare Part B because you have VA benefits and later need non-VA care, you will face a permanent late enrollment penalty of 10% per year for every year you delayed. Additionally, VA benefits can change, and having Medicare as a backup ensures you have coverage at non-VA facilities without penalty.\n\nFor veterans approaching 65, the decision of whether to enroll in Medicare Part B alongside VA benefits is one of the most common questions our specialists address. <a href='/free-consultation' class='text-[#1a3fa8] underline underline-offset-2'>Schedule a free consultation</a> to review your specific situation.",
    },
    {
      type: "section" as const,
      heading: "Medicare Conditional Payments and the Right to Recover",
      content:
        "When another insurer is the primary payer but has not yet paid (for example, because a liability claim is in dispute), Medicare may make a conditional payment to ensure you receive timely care. A conditional payment is not a permanent payment. It is a loan that Medicare expects to be repaid once the primary payer settles.\n\n<strong>How the recovery process works:</strong>\n\n<ul><li><strong>Reporting:</strong> If you are involved in a workers compensation claim, liability lawsuit, or no-fault auto claim, you must report it to Medicare's Benefits Coordination and Recovery Center (BCRC) by calling 1-855-798-2627.</li><li><strong>Conditional payment letter:</strong> Once reported, CMS will send you a conditional payment letter listing all payments Medicare has made that may be related to your claim.</li><li><strong>Final demand:</strong> After your case settles, CMS sends a final demand letter specifying the exact amount Medicare expects to be repaid.</li><li><strong>Dispute process:</strong> You can dispute the amount if you believe some payments are unrelated to your claim or if you believe Medicare's recovery would cause financial hardship.</li></ul>\n\nThe Medicare Secondary Payer Recovery Portal (MSPRP) at <a href='https://www.cob.cms.hhs.gov/MSPRP/' class='text-[#1a3fa8] underline underline-offset-2' target='_blank' rel='noopener noreferrer'>cob.cms.hhs.gov/MSPRP</a> allows beneficiaries and their representatives to manage conditional payment cases online, view payment amounts, and submit disputes.",
    },
    {
      type: "section" as const,
      heading: "How MSP Rules Affect Your Medicare Enrollment Decision",
      content:
        "Understanding MSP rules is directly relevant to one of the most consequential decisions Medicare-eligible people face: when to enroll in Medicare Part B.\n\nThe general rule is that you can safely delay Part B enrollment without penalty only if you have employer group health plan coverage based on your own or your spouse's current active employment, and the employer has 20 or more employees (or 100 or more if you are under 65 and disabled).\n\n<strong>Coverage that does NOT protect you from late enrollment penalties:</strong>\n\n<ul><li>COBRA continuation coverage</li><li>Retiree health benefits</li><li>VA benefits</li><li>Individual marketplace (ACA) plans</li><li>Coverage through a spouse's retiree plan</li><li>TRICARE (for most situations)</li></ul>\n\nIf you are relying on any of the above as a reason to delay Part B enrollment, you may be making a costly mistake. The Part B late enrollment penalty is 10% of the standard premium for every 12-month period you were eligible but did not enroll, and it lasts for life.\n\nFor a full explanation of <a href='/original-vs-advantage' class='text-[#1a3fa8] underline underline-offset-2'>how Original Medicare and Medicare Advantage interact</a> with other coverage, and to understand your specific enrollment window, our specialists can walk you through every scenario at no cost.",
    },
    {
      type: "summary" as const,
      heading: "Medicare Secondary Payer Rules: Key Takeaways",
      content:
        "Here is a quick reference summary of when Medicare pays first versus second:\n\n<table><thead><tr><th>Coverage Situation</th><th>Primary Payer</th><th>Secondary Payer</th></tr></thead><tbody><tr><td>Active employer coverage, employer 20+ employees</td><td>Employer GHP</td><td>Medicare</td></tr><tr><td>Active employer coverage, employer under 20 employees</td><td>Medicare</td><td>Employer GHP</td></tr><tr><td>COBRA</td><td>Medicare</td><td>COBRA</td></tr><tr><td>Retiree coverage</td><td>Medicare</td><td>Retiree plan</td></tr><tr><td>Workers compensation (work injury)</td><td>Workers comp</td><td>Medicare</td></tr><tr><td>No-fault auto insurance</td><td>No-fault insurer</td><td>Medicare</td></tr><tr><td>Liability insurance</td><td>Liability insurer</td><td>Medicare</td></tr><tr><td>ESRD (first 30 months)</td><td>Employer GHP (any size)</td><td>Medicare</td></tr><tr><td>ESRD (after 30 months)</td><td>Medicare</td><td>Employer GHP</td></tr><tr><td>Disability, employer 100+ employees</td><td>Employer GHP</td><td>Medicare</td></tr><tr><td>VA benefits</td><td>VA (at VA facilities)</td><td>Medicare (at non-VA facilities)</td></tr></tbody></table>\n\nMSP rules are complex and the consequences of getting them wrong can be significant. If you have multiple sources of coverage and are unsure how they coordinate, <a href='/free-consultation' class='text-[#1a3fa8] underline underline-offset-2'>schedule a free consultation</a> with one of our licensed Medicare specialists.",
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "What does Medicare Secondary Payer mean?",
          answer:
            "Medicare Secondary Payer means that Medicare pays second, after another insurer has paid its share. Federal MSP rules determine when Medicare is secondary based on the type of other coverage you have, the size of your employer, and other factors. When Medicare is secondary, you must submit your claim to the primary insurer first, and then Medicare will pay some or all of the remaining balance.",
        },
        {
          question: "Can I have both employer insurance and Medicare at the same time?",
          answer:
            "Yes. Many people have both employer group health plan coverage and Medicare simultaneously. Which one pays first depends on your employer's size. If your employer has 20 or more employees, the employer plan pays first and Medicare pays second. If your employer has fewer than 20 employees, Medicare pays first. You are not required to drop one to keep the other.",
        },
        {
          question: "Does COBRA count as employer coverage for Medicare enrollment purposes?",
          answer:
            "No. COBRA is not considered employer group health plan coverage based on current employment under MSP rules. If you delay Medicare Part B enrollment because you have COBRA, you will not qualify for a Special Enrollment Period when COBRA ends. You may face a permanent late enrollment penalty. You should enroll in Medicare Part B during your Initial Enrollment Period even if you plan to take COBRA.",
        },
        {
          question: "What happens if I have a personal injury settlement and Medicare paid my medical bills?",
          answer:
            "Medicare has a legal right to recover any payments it made for injury-related treatment from your settlement proceeds. This is called a Medicare lien. Before finalizing any settlement, you must contact Medicare's Benefits Coordination and Recovery Center (BCRC) at 1-855-798-2627 to identify and satisfy any conditional payments. Failing to repay Medicare can result in collection actions against you or your attorney.",
        },
        {
          question: "Do VA benefits protect me from Medicare late enrollment penalties?",
          answer:
            "No. VA benefits do not count as employer group health plan coverage under MSP rules and do not protect you from Medicare Part B late enrollment penalties. If you delay enrolling in Part B because you have VA benefits and later need non-VA care, you will face a permanent penalty of 10% per year for every year you delayed enrollment.",
        },
        {
          question: "What is a Medicare Set-Aside in a workers compensation case?",
          answer:
            "A Medicare Set-Aside (MSA) is a portion of a workers compensation settlement that is set aside in a dedicated account to pay for future medical expenses related to the injury that Medicare would otherwise cover. CMS may require an MSA when the injured worker is a Medicare beneficiary or is expected to become one within 30 months. The funds must be spent on injury-related care before Medicare will pay for those services.",
        },
        {
          question: "How do I report a workers compensation or liability claim to Medicare?",
          answer:
            "You can report a workers compensation, no-fault auto, or liability claim to Medicare by contacting the Benefits Coordination and Recovery Center (BCRC) at 1-855-798-2627. You can also manage your case online through the Medicare Secondary Payer Recovery Portal (MSPRP) at cob.cms.hhs.gov/MSPRP. Reporting is required when Medicare is or may be a secondary payer for the claim.",
        },
        {
          question: "What is the difference between primary and secondary payer in Medicare?",
          answer:
            "The primary payer is the insurer that processes and pays a claim first. The secondary payer processes the claim after the primary payer and may cover some or all of the remaining balance. When Medicare is the secondary payer, you must submit your claim to the primary insurer first and then submit the primary payer's explanation of benefits (EOB) to Medicare for secondary payment consideration.",
        },
      ],
    },
  ],
  relatedPosts: [
    {
      href: "/how-to-enroll-in-medicare",
      title: "How to Enroll in Medicare: A Step-by-Step Guide",
      category: "Enrollment" as const,
    },
    {
      href: "/what-is-the-special-enrollment-period",
      title: "Medicare Special Enrollment Periods: When and How to Use Them",
      category: "Enrollment" as const,
    },
    {
      href: "/original-vs-advantage",
      title: "Original Medicare vs. Medicare Advantage: Which Is Right for You?",
      category: "Plans" as const,
    },
  ],
};

export default function MedicareSecondaryPayerRulesPage() {
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
