import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../blog/BlogPostClient";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Medicare GLP-1 Bridge Program: $50 Wegovy and Zepbound Starting July 2026",
  "url": "https://medicareinfopro.com/medicare-glp1-bridge-program/",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "image": "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
  "author": {
    "@type": "Person",
    "name": "Greg Wohl",
    "jobTitle": "Licensed Medicare Specialist",
    "url": "https://medicareinfopro.com/about-us"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "url": "https://medicareinfopro.com",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://medicareinfopro.com/medicare-glp1-bridge-program/"
  },
  "description": "Starting July 1, 2026, eligible Medicare Part D beneficiaries can access Wegovy, Zepbound, and Foundayo for a flat $50 monthly copay through the Medicare GLP-1 Bridge. Learn who qualifies, how the three BMI tiers work, which drugs are covered, and how to get started."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare GLP-1 Bridge Program: $50 Wegovy and Zepbound Explained | MedicareInfoPro",
  description:
    "Starting July 1, 2026, eligible Medicare Part D beneficiaries can get Wegovy, Zepbound, or Foundayo for $50 a month through the Medicare GLP-1 Bridge. Learn who qualifies, how the three BMI tiers work, and how to enroll.",
  keywords: [
    "Medicare GLP-1 Bridge Program",
    "Medicare GLP-1 bridge",
    "Medicare Wegovy $50",
    "Medicare Zepbound coverage 2026",
    "Medicare weight loss drug coverage 2026",
    "GLP-1 Medicare eligibility",
    "Medicare obesity drug coverage",
    "Medicare Foundayo",
    "Medicare GLP-1 $50 copay",
    "CMS GLP-1 bridge program",
  ],
  openGraph: {
    title: "Medicare GLP-1 Bridge Program: $50 Wegovy and Zepbound Explained",
    description:
      "Starting July 1, 2026, eligible Medicare Part D beneficiaries can get Wegovy, Zepbound, or Foundayo for $50 a month through the Medicare GLP-1 Bridge.",
    url: "https://medicareinfopro.com/medicare-glp1-bridge-program/",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "GLP-1 medication injection pen representing Medicare coverage for Wegovy and Zepbound",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare GLP-1 Bridge Program: $50 Wegovy and Zepbound Explained",
    description:
      "Starting July 1, 2026, eligible Medicare Part D beneficiaries can get Wegovy, Zepbound, or Foundayo for $50 a month through the Medicare GLP-1 Bridge.",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-glp1-bridge-program/",
  },
};

const POST = {
  slug: "medicare-glp1-bridge-program",
  title: "Medicare GLP-1 Bridge Program: $50 Wegovy and Zepbound Starting July 2026",
  excerpt:
    "Starting July 1, 2026, millions of Medicare beneficiaries can access GLP-1 weight loss medications for a flat $50 monthly copay through the new Medicare GLP-1 Bridge. This guide covers who qualifies, which drugs are covered, how the three BMI tiers work, and what the $50 copay does and does not include.",
  category: "Coverage" as const,
  author: GREG_WOHL,
  date: "July 2026",
  readTime: "12 min read",
  image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1200&q=80",
  imageAlt: "GLP-1 medication injection pen representing the new Medicare GLP-1 Bridge Program covering Wegovy and Zepbound",
  sections: [
    {
      type: "intro" as const,
      content:
        "For the first time in Medicare's history, the program is covering medications specifically for the treatment of obesity. Starting July 1, 2026, eligible Medicare Part D beneficiaries can access certain GLP-1 weight loss medications for a flat $50 monthly copay through a new federal demonstration called the Medicare GLP-1 Bridge.\n\nThe program covers three drugs: Wegovy (semaglutide), Zepbound (tirzepatide), and Foundayo (orforglipron). It runs through December 31, 2027, and operates entirely outside of the standard Part D benefit, meaning your Part D plan does not need to opt in and your plan's deductible and out-of-pocket maximum do not apply.\n\nThis guide explains everything you need to know: who qualifies, how the three BMI eligibility tiers work, what the $50 copay does and does not cover, who is excluded, and how to get started with your doctor.",
    },
    {
      type: "keyTakeaways" as const,
      items: [
        {
          label: "The program launched July 1, 2026 and runs through December 31, 2027",
          text: "The Medicare GLP-1 Bridge is a short-term demonstration established by CMS under Section 402 demonstration authority. It provides eligible Medicare Part D beneficiaries with access to covered GLP-1 drugs at a flat $50 monthly copay for the duration of the program.",
        },
        {
          label: "Three drugs are covered: Wegovy, Zepbound, and Foundayo",
          text: "All three are FDA-approved for chronic weight management. Ozempic and Mounjaro are not covered under the Bridge because they are approved for type 2 diabetes, not weight management, and are covered separately under standard Part D.",
        },
        {
          label: "Eligibility is based on three BMI tiers with different clinical requirements",
          text: "You may qualify with a BMI of 35 or higher (no additional conditions required), a BMI of 30 or higher with certain cardiovascular or kidney conditions, or a BMI of 27 or higher with pre-diabetes, a prior heart attack, prior stroke, or peripheral artery disease.",
        },
        {
          label: "The $50 copay does not count toward your Part D deductible or out-of-pocket maximum",
          text: "Because the Bridge operates outside of the Part D benefit, your monthly $50 copay is completely separate from your Part D spending. It does not help you reach the $2,100 annual Part D out-of-pocket cap in 2026.",
        },
        {
          label: "Low-Income Subsidy (Extra Help) does not apply to Bridge copays",
          text: "LIS beneficiaries who would normally pay reduced or zero copays for Part D drugs still pay the full $50 monthly copay under the Bridge, because the program operates outside of Part D.",
        },
        {
          label: "Beneficiaries with type 2 diabetes, sleep apnea, or MASH are not eligible",
          text: "If you have a diagnosis that already qualifies you for GLP-1 coverage under Part D, you are directed to continue accessing your medication through your Part D plan rather than through the Bridge.",
        },
      ],
    },
    {
      type: "section" as const,
      heading: "What Is the Medicare GLP-1 Bridge Program?",
      content:
        "The Medicare GLP-1 Bridge is a nationwide payment demonstration run by the Centers for Medicare and Medicaid Services (CMS). It was established under Section 402(a)(1)(A) of the Social Security Amendments of 1967, a legal authority that allows CMS to test changes in payment methods to improve the efficiency and economy of Medicare services.\n\nThe Bridge was created in response to a significant gap in Medicare coverage. Since Medicare's inception, the program has been legally prohibited from covering drugs used solely for weight loss. As GLP-1 medications became widely recognized as effective treatments for obesity, millions of Medicare beneficiaries were left paying out of pocket for medications that can cost $900 or more per month without insurance.\n\nThe Bridge is not a permanent fix. It is a short-term demonstration designed to provide access while CMS collects utilization data ahead of a potential longer-term coverage expansion. The program was originally planned to run through December 31, 2026, but CMS extended it through December 31, 2027, after the longer-term BALANCE Model was delayed. You can review the official program details on the <a href='https://www.cms.gov/medicare/coverage/prescription-drug-coverage/medicare-glp-1-bridge' target='_blank' rel='noopener noreferrer' class='text-[#1a3fa8] underline underline-offset-2'>CMS Medicare GLP-1 Bridge page</a>.\n\nThe program operates through a single central processor managed by CMS. Your Part D plan is not involved in the prior authorization, claims adjudication, or payment process. When you fill a covered prescription, you pay $50 at the pharmacy, and the pharmacy submits the claim directly to the CMS central processor for reimbursement.",
    },
    {
      type: "section" as const,
      heading: "Which Drugs Are Covered Under the Medicare GLP-1 Bridge?",
      content:
        "Three GLP-1 medications are included in the Bridge program. All three are FDA-approved specifically for chronic weight management in adults with obesity or overweight.\n\n<table class='w-full text-sm border-collapse my-4'><thead><tr class='bg-[#0d2260] text-white'><th class='p-3 text-left'>Medication</th><th class='p-3 text-left'>Manufacturer</th><th class='p-3 text-left'>Active Ingredient</th><th class='p-3 text-left'>Formulations Covered</th></tr></thead><tbody><tr class='bg-white border-b'><td class='p-3 font-semibold'>Wegovy</td><td class='p-3'>Novo Nordisk</td><td class='p-3'>Semaglutide</td><td class='p-3'>Injection and oral tablet</td></tr><tr class='bg-gray-50 border-b'><td class='p-3 font-semibold'>Zepbound</td><td class='p-3'>Eli Lilly</td><td class='p-3'>Tirzepatide</td><td class='p-3'>KwikPen injection</td></tr><tr class='bg-white'><td class='p-3 font-semibold'>Foundayo</td><td class='p-3'>Eli Lilly</td><td class='p-3'>Orforglipron</td><td class='p-3'>Oral tablet (all doses)</td></tr></tbody></table>\n\n<strong>Why Ozempic and Mounjaro are not covered:</strong> Ozempic (semaglutide) and Mounjaro (tirzepatide) use the same active ingredients as Wegovy and Zepbound, but they are FDA-approved for different indications, primarily type 2 diabetes. Because they have Part D-covered indications, they are excluded from the Bridge. If you take Ozempic or Mounjaro for diabetes, you continue to access those medications through your standard Part D plan.\n\n<strong>The prescription must be for weight management:</strong> Even if you are prescribed Wegovy or Zepbound, the Bridge only applies when the prescription is specifically for weight reduction and weight management in combination with lifestyle modifications. Your prescribing doctor must attest to this when submitting the prior authorization.\n\nIf you are currently taking a GLP-1 for a Part D-covered indication and are curious how your overall drug coverage works, our guide to <a href='/understanding-part-d/' class='text-[#1a3fa8] underline underline-offset-2'>understanding Medicare Part D</a> explains the benefit structure in detail.",
    },
    {
      type: "section" as const,
      heading: "Who Qualifies: The Three BMI Eligibility Tiers",
      content:
        "Eligibility for the Medicare GLP-1 Bridge is based on clinical criteria that your healthcare provider must attest to when submitting a prior authorization. The baseline requirements are that you must be at least 18 years old, enrolled in a Medicare Part D plan, and prescribed the medication specifically for weight reduction and weight management in combination with ongoing lifestyle modifications.\n\nBeyond those baseline requirements, you must fall into one of three BMI-based tiers.\n\n<table class='w-full text-sm border-collapse my-4'><thead><tr class='bg-[#0d2260] text-white'><th class='p-3 text-left'>Tier</th><th class='p-3 text-left'>BMI Requirement</th><th class='p-3 text-left'>Additional Conditions Required</th></tr></thead><tbody><tr class='bg-white border-b'><td class='p-3 font-semibold'>Tier 1</td><td class='p-3'>35 or higher</td><td class='p-3'>None</td></tr><tr class='bg-gray-50 border-b'><td class='p-3 font-semibold'>Tier 2</td><td class='p-3'>30 or higher</td><td class='p-3'>Heart failure with preserved ejection fraction, uncontrolled hypertension (systolic above 140 or diastolic above 90 despite two antihypertensive medications), or chronic kidney disease stage 3a or above</td></tr><tr class='bg-white'><td class='p-3 font-semibold'>Tier 3</td><td class='p-3'>27 or higher</td><td class='p-3'>Pre-diabetes (per ADA guidelines), previous myocardial infarction, previous stroke, or symptomatic peripheral artery disease</td></tr></tbody></table>\n\n<strong>Tier 1 (BMI 35 or higher):</strong> If your Body Mass Index is 35 or above at the time you begin GLP-1 therapy, you qualify with no additional diagnostic requirements. This is the most straightforward path into the program.\n\n<strong>Tier 2 (BMI 30 to 34.9 with qualifying conditions):</strong> If your BMI is at least 30 but below 35, you can still qualify if you have been diagnosed with heart failure with preserved ejection fraction, uncontrolled hypertension despite concurrent treatment with two antihypertensive medications, or chronic kidney disease at stage 3a or above.\n\n<strong>Tier 3 (BMI 27 to 29.9 with qualifying conditions):</strong> The lowest BMI threshold requires a diagnosis of at least one of the following: pre-diabetes as defined by American Diabetes Association guidelines, a previous myocardial infarction, a previous stroke, or symptomatic peripheral artery disease.\n\nAccording to research published by the <a href='https://www.kff.org/medicare/nearly-four-million-medicare-beneficiaries-met-the-eligibility-criteria-in-2023-for-the-medicare-glp-1-bridge/' target='_blank' rel='noopener noreferrer' class='text-[#1a3fa8] underline underline-offset-2'>Kaiser Family Foundation</a>, an estimated 3.8 million Medicare Part D enrollees met all of the Bridge eligibility criteria as of 2023, representing about 8 percent of all Part D enrollees. CMS has indicated it expects the program to start with single-digit millions of participants.",
    },
    {
      type: "section" as const,
      heading: "Who Is Not Eligible for the Bridge Program?",
      content:
        "The Bridge was designed specifically for beneficiaries who need GLP-1 medications for weight management and who do not have an existing pathway to coverage through standard Part D. If you have a diagnosis that already qualifies you for GLP-1 coverage under Part D, you are not eligible for the Bridge, even if you also meet the BMI criteria.\n\nThe key exclusions are beneficiaries who have been diagnosed with:\n\n<ul><li><strong>Type 2 diabetes:</strong> GLP-1 medications like Ozempic and Mounjaro are FDA-approved for type 2 diabetes and are covered under standard Part D for this indication. If you have type 2 diabetes, you access your GLP-1 through your Part D plan, not through the Bridge.</li><li><strong>Obstructive sleep apnea (OSA):</strong> CMS has approved GLP-1 coverage under Part D for obstructive sleep apnea. Beneficiaries with this diagnosis are directed to their Part D plan.</li><li><strong>Noncirrhotic metabolic dysfunction-associated steatohepatitis (MASH):</strong> Also known as NASH, this liver condition has an FDA-approved GLP-1 indication covered under Part D.</li></ul>\n\nAdditionally, if you have already filled a GLP-1 prescription through your Part D plan in 2026, you are not eligible for the Bridge in 2026. This rule is designed to prevent existing Part D GLP-1 use from shifting to the Bridge program.\n\nThe Bridge is not a way to get a cheaper copay on a GLP-1 you are already receiving through Part D. It is exclusively for beneficiaries whose primary reason for taking the medication is weight reduction, and who do not have a Part D-covered diagnosis that provides an alternative coverage pathway.",
    },
    {
      type: "section" as const,
      heading: "How the $50 Copay Works and What It Does Not Include",
      content:
        "The flat $50 monthly copay is one of the most appealing features of the Bridge program, but there are several important nuances to understand before you enroll.\n\n<strong>What the $50 copay covers:</strong> One monthly supply of a covered GLP-1 medication (Wegovy, Zepbound, or Foundayo) at any participating pharmacy. The copay is the same regardless of the drug's list price or which benefit phase your Part D plan is in.\n\n<strong>What the $50 copay does not include:</strong>\n\n<table class='w-full text-sm border-collapse my-4'><thead><tr class='bg-[#0d2260] text-white'><th class='p-3 text-left'>Item</th><th class='p-3 text-left'>Does It Apply?</th><th class='p-3 text-left'>Why</th></tr></thead><tbody><tr class='bg-white border-b'><td class='p-3'>Part D deductible</td><td class='p-3 text-red-600 font-semibold'>No</td><td class='p-3'>Bridge operates outside of Part D</td></tr><tr class='bg-gray-50 border-b'><td class='p-3'>Counts toward $2,100 Part D OOP cap</td><td class='p-3 text-red-600 font-semibold'>No</td><td class='p-3'>Bridge spending is separate from Part D TrOOP</td></tr><tr class='bg-white border-b'><td class='p-3'>Low-Income Subsidy (Extra Help) reduction</td><td class='p-3 text-red-600 font-semibold'>No</td><td class='p-3'>LIS protections do not extend to non-Part D programs</td></tr><tr class='bg-gray-50'><td class='p-3'>Changes based on benefit phase</td><td class='p-3 text-green-700 font-semibold'>No change</td><td class='p-3'>Copay stays at $50 regardless of where you are in Part D</td></tr></tbody></table>\n\n<strong>The LIS gap is important to understand:</strong> If you receive Extra Help (the Low-Income Subsidy program), your standard Part D drug copays are reduced to a few dollars or eliminated entirely. However, because the Bridge operates outside of Part D, those protections do not carry over. LIS beneficiaries still pay the full $50 monthly copay under the Bridge. The Kaiser Family Foundation has noted that the $50 copay may be unaffordable for some low- and modest-income beneficiaries who would otherwise qualify.\n\n<strong>The $50 copay is consistent throughout the year:</strong> Unlike Part D cost-sharing, which changes as you move through the deductible phase, initial coverage phase, and catastrophic phase, the Bridge copay stays at $50 every month for the duration of the program. This predictability is one of the program's practical advantages.\n\nFor context on how the standard Part D benefit phases work and how they affect your drug costs, see our guide to <a href='/understanding-part-d/' class='text-[#1a3fa8] underline underline-offset-2'>understanding Medicare Part D coverage and costs</a>.",
    },
    {
      type: "section" as const,
      heading: "How the Prior Authorization Process Works",
      content:
        "Enrolling in the Medicare GLP-1 Bridge is not something you do yourself. The process begins with your healthcare provider, and it runs through a CMS central processor rather than your Part D plan.\n\n<strong>Step 1: Talk to your doctor.</strong> Schedule an appointment to discuss whether GLP-1 therapy is appropriate for your situation. Your provider will evaluate your BMI, review your medical history for qualifying conditions, confirm you do not have a disqualifying diagnosis (type 2 diabetes, OSA, or MASH), and determine which of the three eligibility tiers applies to you.\n\n<strong>Step 2: Your doctor submits a prior authorization.</strong> If your doctor determines you are a good candidate, they submit a prior authorization request to the CMS central processor. The request includes an attestation that you meet the clinical criteria, that the medication is being prescribed for weight management in combination with lifestyle modifications, and that you do not have a diagnosis that would qualify you for GLP-1 coverage under Part D. The prior authorization form is available directly from CMS.\n\n<strong>Step 3: Fill your prescription at a participating pharmacy.</strong> Once the prior authorization is approved, you can fill your prescription at any participating pharmacy. You pay the $50 copay at the counter, and the pharmacy submits the claim directly to the CMS central processor. Your Part D plan is not involved in this transaction.\n\n<strong>Step 4: Continue your prescription monthly.</strong> The Bridge covers a monthly supply. You will continue to fill your prescription monthly and pay $50 each time for the duration of the program (through December 31, 2027).\n\nIf you have questions about whether you qualify or how the Bridge interacts with your current Medicare coverage, our licensed agents can review your situation at no cost. <a href='/free-consultation/' class='text-[#1a3fa8] underline underline-offset-2'>Schedule a free Medicare consultation</a> to get personalized guidance.",
    },
    {
      type: "section" as const,
      heading: "The Bridge vs. Standard Part D: Key Differences",
      content:
        "Understanding how the Bridge differs from your standard Part D drug benefit is essential for managing your overall Medicare costs.\n\n<table class='w-full text-sm border-collapse my-4'><thead><tr class='bg-[#0d2260] text-white'><th class='p-3 text-left'>Feature</th><th class='p-3 text-left'>Medicare GLP-1 Bridge</th><th class='p-3 text-left'>Standard Part D</th></tr></thead><tbody><tr class='bg-white border-b'><td class='p-3'>Monthly copay</td><td class='p-3'>Flat $50</td><td class='p-3'>Varies by tier and benefit phase</td></tr><tr class='bg-gray-50 border-b'><td class='p-3'>Deductible applies</td><td class='p-3'>No</td><td class='p-3'>Yes (up to $590 in 2026)</td></tr><tr class='bg-white border-b'><td class='p-3'>Counts toward OOP cap</td><td class='p-3'>No</td><td class='p-3'>Yes (cap is $2,100 in 2026)</td></tr><tr class='bg-gray-50 border-b'><td class='p-3'>LIS (Extra Help) applies</td><td class='p-3'>No</td><td class='p-3'>Yes</td></tr><tr class='bg-white border-b'><td class='p-3'>Plan opt-in required</td><td class='p-3'>No</td><td class='p-3'>N/A (plan manages formulary)</td></tr><tr class='bg-gray-50 border-b'><td class='p-3'>Prior authorization</td><td class='p-3'>Yes, through CMS central processor</td><td class='p-3'>Yes, through your Part D plan</td></tr><tr class='bg-white'><td class='p-3'>Program end date</td><td class='p-3'>December 31, 2027</td><td class='p-3'>Ongoing annual benefit</td></tr></tbody></table>\n\nOne practical implication: if you are also taking other expensive medications through your Part D plan, the $50 you spend on Bridge GLP-1s each month will not help you reach your Part D out-of-pocket cap any faster. Your Part D spending and your Bridge spending are tracked completely separately.",
    },
    {
      type: "section" as const,
      heading: "Why the Bridge Exists: The BALANCE Model and What Comes Next",
      content:
        "To understand why the Bridge was created as a temporary demonstration rather than a permanent benefit, it helps to know the broader legislative and regulatory context.\n\nMedicare has been legally prohibited from covering weight loss drugs since the program was established. The Balanced Budget Act of 1997 explicitly excluded drugs used for weight loss from Part D coverage. This prohibition remained in place even as GLP-1 medications transformed the treatment of obesity.\n\nCMS's original plan for a longer-term solution was the BALANCE Model (Better Approaches to Lifestyle and Nutrition for Comprehensive hEalth). BALANCE was designed as a multi-year model that would have provided GLP-1 coverage for obesity in both Medicare and Medicaid, with a planned launch in 2027. When BALANCE was delayed, CMS extended the Bridge through December 31, 2027, to maintain access for beneficiaries while the longer-term pathway is developed.\n\nCongress has also been working on legislation to permanently expand Medicare coverage for obesity drugs. The Treat and Reduce Obesity Act and similar proposals have been introduced in multiple sessions. As of mid-2026, no permanent legislative expansion has been enacted, but the Bridge represents the most significant step toward obesity drug coverage in Medicare's history.\n\nFor beneficiaries approaching Medicare eligibility, understanding how these coverage rules interact with your enrollment decisions is important. Our guide to <a href='/what-is-the-special-enrollment-period/' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Special Enrollment Periods</a> can help you understand how life changes affect your coverage options, and our overview of <a href='/original-vs-advantage/' class='text-[#1a3fa8] underline underline-offset-2'>Original Medicare vs. Medicare Advantage</a> explains how drug coverage fits into each approach.",
    },
    {
      type: "section" as const,
      heading: "How the Bridge Relates to Existing GLP-1 Coverage Under Medicare",
      content:
        "The Medicare GLP-1 Bridge does not replace or change existing Part D coverage for GLP-1 medications. It creates a new, parallel pathway specifically for weight management that operates outside of Part D.\n\nHere is how the different GLP-1 coverage pathways currently work under Medicare:\n\n<table class='w-full text-sm border-collapse my-4'><thead><tr class='bg-[#0d2260] text-white'><th class='p-3 text-left'>Drug</th><th class='p-3 text-left'>Indication</th><th class='p-3 text-left'>Coverage Pathway</th></tr></thead><tbody><tr class='bg-white border-b'><td class='p-3 font-semibold'>Ozempic (semaglutide)</td><td class='p-3'>Type 2 diabetes</td><td class='p-3'>Standard Part D (formulary-dependent)</td></tr><tr class='bg-gray-50 border-b'><td class='p-3 font-semibold'>Wegovy (semaglutide)</td><td class='p-3'>Cardiovascular risk reduction with obesity</td><td class='p-3'>Standard Part D (2024 CMS guidance)</td></tr><tr class='bg-white border-b'><td class='p-3 font-semibold'>Wegovy (semaglutide)</td><td class='p-3'>Weight management (no CV disease)</td><td class='p-3'>Medicare GLP-1 Bridge (if eligible)</td></tr><tr class='bg-gray-50 border-b'><td class='p-3 font-semibold'>Mounjaro (tirzepatide)</td><td class='p-3'>Type 2 diabetes</td><td class='p-3'>Standard Part D (formulary-dependent)</td></tr><tr class='bg-white border-b'><td class='p-3 font-semibold'>Zepbound (tirzepatide)</td><td class='p-3'>Weight management</td><td class='p-3'>Medicare GLP-1 Bridge (if eligible)</td></tr><tr class='bg-gray-50'><td class='p-3 font-semibold'>Foundayo (orforglipron)</td><td class='p-3'>Weight management</td><td class='p-3'>Medicare GLP-1 Bridge (if eligible)</td></tr></tbody></table>\n\nFor a deeper look at how Medicare covers Ozempic specifically, including what it costs under Part D and how to navigate prior authorization, see our dedicated guide on <a href='/does-medicare-cover-ozempic/' class='text-[#1a3fa8] underline underline-offset-2'>Medicare coverage for Ozempic</a>.",
    },
    {
      type: "summary" as const,
      heading: "Medicare GLP-1 Bridge Program: What You Need to Know",
      content:
        "Here is a concise summary of the key points covered in this guide:\n\n<ul><li><strong>The Medicare GLP-1 Bridge launched July 1, 2026</strong> and runs through December 31, 2027. It covers Wegovy, Zepbound, and Foundayo at a flat $50 monthly copay.</li><li><strong>Eligibility is based on three BMI tiers:</strong> BMI 35 or higher (no conditions required), BMI 30 or higher with qualifying cardiovascular or kidney conditions, or BMI 27 or higher with pre-diabetes, prior heart attack, prior stroke, or peripheral artery disease.</li><li><strong>The program operates outside of Part D.</strong> The $50 copay does not count toward your Part D deductible or the $2,100 annual out-of-pocket cap, and Extra Help (LIS) does not reduce the copay.</li><li><strong>Beneficiaries with type 2 diabetes, obstructive sleep apnea, or MASH are not eligible</strong> because they have existing Part D coverage pathways for GLP-1 medications.</li><li><strong>The prior authorization process is handled by your doctor</strong> and submitted to a CMS central processor, not your Part D plan. Your plan does not need to opt in.</li><li><strong>The Bridge is a temporary demonstration,</strong> not a permanent benefit. CMS is collecting utilization data ahead of a potential longer-term coverage expansion through the BALANCE Model or future legislation.</li></ul>\n\nIf you are not sure whether you qualify, or if you want to understand how the Bridge interacts with your current Medicare Advantage or Part D plan, our licensed agents can review your situation at no cost. <a href='/free-consultation/' class='text-[#1a3fa8] underline underline-offset-2'>Schedule a free consultation</a> to get personalized guidance from a licensed Medicare specialist.",
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "What is the Medicare GLP-1 Bridge Program?",
          answer:
            "The Medicare GLP-1 Bridge is a short-term demonstration run by CMS that provides eligible Medicare Part D beneficiaries with access to certain GLP-1 weight loss medications at a flat $50 monthly copay. The program runs from July 1, 2026 through December 31, 2027, and covers Wegovy (semaglutide), Zepbound (tirzepatide), and Foundayo (orforglipron). It operates outside of the standard Part D benefit.",
        },
        {
          question: "Who qualifies for the Medicare GLP-1 Bridge?",
          answer:
            "You must be enrolled in Medicare Part D and meet one of three BMI-based eligibility tiers: a BMI of 35 or higher (no additional conditions required), a BMI of 30 or higher with heart failure with preserved ejection fraction, uncontrolled hypertension, or chronic kidney disease stage 3a or above, or a BMI of 27 or higher with pre-diabetes, a prior heart attack, prior stroke, or symptomatic peripheral artery disease. You must not have a diagnosis of type 2 diabetes, obstructive sleep apnea, or MASH, and must not have filled a GLP-1 prescription through Part D in 2026.",
        },
        {
          question: "Does the $50 GLP-1 Bridge copay count toward my Part D out-of-pocket maximum?",
          answer:
            "No. Because the Bridge operates outside of the Part D benefit, the $50 monthly copay does not count toward your Part D deductible or the $2,100 annual out-of-pocket cap in 2026. Your Bridge spending and your Part D spending are tracked completely separately.",
        },
        {
          question: "Can I get the GLP-1 Bridge if I have Extra Help (Low-Income Subsidy)?",
          answer:
            "You can participate in the Bridge if you meet the eligibility criteria, but the Low-Income Subsidy (Extra Help) does not apply to Bridge copays. LIS typically reduces or eliminates copays for Part D medications, but because the Bridge operates outside of Part D, those protections do not carry over. You would still pay the full $50 monthly copay.",
        },
        {
          question: "Is Ozempic covered under the Medicare GLP-1 Bridge?",
          answer:
            "No. Ozempic (semaglutide) is not covered under the Bridge because it is FDA-approved for type 2 diabetes, not weight management, and is covered under standard Part D for that indication. The Bridge covers only weight-management formulations: Wegovy, Zepbound, and Foundayo. If you take Ozempic for diabetes, you continue to access it through your Part D plan.",
        },
        {
          question: "How do I enroll in the Medicare GLP-1 Bridge?",
          answer:
            "You do not enroll directly. The process starts with your doctor. Your provider evaluates your eligibility, determines which BMI tier applies, and submits a prior authorization to the CMS central processor. Once approved, you fill your prescription at a participating pharmacy and pay $50. Your Part D plan is not involved in the process.",
        },
        {
          question: "What happens to the Bridge after December 31, 2027?",
          answer:
            "The Bridge is a temporary demonstration scheduled to end December 31, 2027. CMS is collecting utilization data during the program to inform a potential longer-term coverage expansion through the BALANCE Model or future legislation. As of mid-2026, no permanent legislative expansion of Medicare obesity drug coverage has been enacted. Beneficiaries should monitor CMS announcements for updates on what comes next.",
        },
        {
          question: "Does Medicare Advantage cover GLP-1 weight loss drugs?",
          answer:
            "Medicare Advantage plans that include Part D drug coverage (MA-PD plans) are subject to the same rules as stand-alone Part D plans. The Bridge program is available to all eligible Part D enrollees, including those in Medicare Advantage plans with drug coverage. For weight management GLP-1s outside of the Bridge, coverage depends on whether your specific plan includes the drug on its formulary and whether you meet the clinical criteria.",
        },
      ],
    },
  ],
};

export default function MedicareGLP1BridgeProgramPage() {
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
