import type { Metadata } from "next";
import BlogPostClient, { GREG_WOHL } from "../blog/BlogPostClient";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Does Medicare Cover Wegovy? Coverage Rules, Costs, and the New GLP-1 Bridge",
  "url": "https://medicareinfopro.com/does-medicare-cover-wegovy/",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "image": "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
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
    "@id": "https://medicareinfopro.com/does-medicare-cover-wegovy/"
  },
  "description": "Medicare coverage for Wegovy depends on why it is prescribed and which coverage pathway applies to you. Learn when Medicare covers Wegovy, what it costs, how the GLP-1 Bridge changes access in 2026, and what to do if your plan does not cover it."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover Wegovy? Coverage Rules, Costs, and the GLP-1 Bridge | MedicareInfoPro",
  description:
    "Medicare coverage for Wegovy depends on your diagnosis and which coverage pathway applies. Learn when Medicare Part D covers Wegovy, what it costs, how the new GLP-1 Bridge provides $50 monthly access, and what to do if your plan does not cover it.",
  keywords: [
    "does Medicare cover Wegovy",
    "Medicare Wegovy coverage",
    "Medicare Wegovy 2026",
    "Medicare Part D Wegovy",
    "Wegovy Medicare cost",
    "Medicare GLP-1 weight loss coverage",
    "Medicare Wegovy $50",
    "Medicare semaglutide coverage",
    "Medicare obesity drug coverage",
    "Wegovy cardiovascular coverage Medicare",
  ],
  openGraph: {
    title: "Does Medicare Cover Wegovy? Coverage Rules, Costs, and the GLP-1 Bridge",
    description:
      "Medicare coverage for Wegovy depends on your diagnosis. Learn when Part D covers it, what it costs, and how the new $50 GLP-1 Bridge changes access in 2026.",
    url: "https://medicareinfopro.com/does-medicare-cover-wegovy/",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Prescription medication representing Medicare coverage for Wegovy weight loss drug",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Wegovy? Coverage Rules, Costs, and the GLP-1 Bridge",
    description:
      "Medicare coverage for Wegovy, what it costs under Part D, and how the new $50 GLP-1 Bridge changes access in 2026.",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/does-medicare-cover-wegovy/",
  },
};

const POST = {
  slug: "does-medicare-cover-wegovy",
  title: "Does Medicare Cover Wegovy? Coverage Rules, Costs, and the New GLP-1 Bridge",
  excerpt:
    "Medicare coverage for Wegovy has historically been limited by a federal prohibition on weight loss drugs. That changed in 2024 for some beneficiaries and again in 2026 with the launch of the Medicare GLP-1 Bridge. This guide explains every coverage pathway available to Medicare beneficiaries who need Wegovy.",
  category: "Coverage" as const,
  author: GREG_WOHL,
  date: "July 2026",
  readTime: "11 min read",
  image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&q=80",
  imageAlt: "Prescription medication representing Medicare coverage for Wegovy semaglutide weight loss drug",
  relatedPosts: [
    {
      title: "Does Medicare Cover Ozempic? Coverage, Costs, and Alternatives",
      href: "/does-medicare-cover-ozempic",
      category: "Coverage" as const,
    },
    {
      title: "Medicare GLP-1 Bridge Program: $50 Wegovy and Zepbound Starting July 2026",
      href: "/medicare-glp1-bridge-program",
      category: "Coverage" as const,
    },
    {
      title: "Understanding Medicare Part D: Coverage, Costs, and How It Works",
      href: "/understanding-part-d",
      category: "Part D" as const,
    },
  ],
  sections: [
    {
      type: "intro" as const,
      content:
        "Wegovy (semaglutide) is the same active ingredient as Ozempic, but in a higher dose formulation approved specifically for chronic weight management. For Medicare beneficiaries, that distinction matters enormously. While Ozempic has long been covered by Part D for type 2 diabetes, Wegovy sat in a coverage gray zone for years because Medicare was legally prohibited from covering drugs used solely for weight loss.\n\nThat has changed. As of 2026, Medicare beneficiaries have two potential pathways to Wegovy coverage: a standard Part D pathway for those with established cardiovascular disease and obesity, and the new Medicare GLP-1 Bridge for those who qualify based on BMI and other clinical criteria.\n\nThis guide explains both pathways in detail, what Wegovy costs under each, who qualifies, and what to do if neither pathway applies to your situation.",
    },
    {
      type: "keyTakeaways" as const,
      items: [
        {
          label: "Medicare Part D can now cover Wegovy for cardiovascular risk reduction",
          text: "Following 2024 CMS guidance, Medicare Part D plans may cover Wegovy (semaglutide) for beneficiaries with established cardiovascular disease and a BMI of 27 or higher. This is a significant expansion, but coverage is plan-dependent and not guaranteed.",
        },
        {
          label: "The Medicare GLP-1 Bridge provides $50 monthly access starting July 1, 2026",
          text: "Eligible Medicare Part D beneficiaries who do not have type 2 diabetes, sleep apnea, or MASH can access Wegovy for a flat $50 monthly copay through the Bridge. The program runs through December 31, 2027.",
        },
        {
          label: "Wegovy and Ozempic contain the same active ingredient but have different coverage rules",
          text: "Both drugs contain semaglutide, but Ozempic is approved for type 2 diabetes and Wegovy is approved for weight management. Part D coverage rules treat them differently because they have different FDA-approved indications.",
        },
        {
          label: "Without coverage, Wegovy costs approximately $1,350 per month",
          text: "The list price for Wegovy is among the highest of any GLP-1 medication. Under the GLP-1 Bridge, eligible beneficiaries pay $50 per month. Under Part D with cardiovascular disease coverage, costs depend on your plan tier and benefit phase.",
        },
        {
          label: "Prior authorization is required under both coverage pathways",
          text: "Whether you access Wegovy through Part D or the GLP-1 Bridge, your doctor must submit a prior authorization documenting your diagnosis, BMI, and clinical criteria. The Bridge prior authorization goes to a CMS central processor, not your Part D plan.",
        },
        {
          label: "The $50 Bridge copay does not count toward your Part D out-of-pocket maximum",
          text: "Because the GLP-1 Bridge operates outside of Part D, the $50 monthly copay is completely separate from your Part D spending. It does not help you reach the $2,100 annual Part D out-of-pocket cap in 2026.",
        },
      ],
    },
    {
      type: "section" as const,
      heading: "What Is Wegovy and How Does It Differ from Ozempic?",
      content:
        "Wegovy and Ozempic are both brand-name medications manufactured by Novo Nordisk. Both contain semaglutide, a GLP-1 receptor agonist that works by mimicking a hormone that regulates appetite and blood sugar. Despite sharing an active ingredient, they are distinct FDA-approved products with different indications, dosing schedules, and coverage rules.\n\n<table class='w-full text-sm border-collapse my-4'><thead><tr class='bg-[#0d2260] text-white'><th class='p-3 text-left'>Feature</th><th class='p-3 text-left'>Wegovy</th><th class='p-3 text-left'>Ozempic</th></tr></thead><tbody><tr class='bg-white border-b'><td class='p-3'>Active ingredient</td><td class='p-3'>Semaglutide</td><td class='p-3'>Semaglutide</td></tr><tr class='bg-gray-50 border-b'><td class='p-3'>FDA-approved indication</td><td class='p-3'>Chronic weight management in adults with obesity or overweight plus a weight-related condition</td><td class='p-3'>Type 2 diabetes management; cardiovascular risk reduction in adults with type 2 diabetes and CV disease</td></tr><tr class='bg-white border-b'><td class='p-3'>Maximum approved dose</td><td class='p-3'>2.4 mg weekly</td><td class='p-3'>2.0 mg weekly</td></tr><tr class='bg-gray-50 border-b'><td class='p-3'>Formulation</td><td class='p-3'>Injection pen; oral tablet (Rybelsus is a separate oral form)</td><td class='p-3'>Injection pen</td></tr><tr class='bg-white border-b'><td class='p-3'>Approximate list price (monthly)</td><td class='p-3'>~$1,350</td><td class='p-3'>~$935</td></tr><tr class='bg-gray-50'><td class='p-3'>Standard Part D coverage</td><td class='p-3'>Limited (CV risk reduction pathway only)</td><td class='p-3'>Generally covered for type 2 diabetes</td></tr></tbody></table>\n\nThe higher dose in Wegovy is what makes it more effective for weight loss in clinical trials. The SELECT trial, published in the New England Journal of Medicine, found that Wegovy reduced the risk of major cardiovascular events by 20 percent in adults with obesity and established cardiovascular disease. That trial result is what opened the door to Part D coverage for cardiovascular risk reduction.",
    },
    {
      type: "section" as const,
      heading: "Medicare Part D Coverage for Wegovy: The Cardiovascular Risk Reduction Pathway",
      content:
        "In 2024, CMS issued guidance allowing Medicare Part D plans to cover semaglutide (Wegovy) for a specific indication: cardiovascular risk reduction in adults with established cardiovascular disease and a BMI of 27 or higher. This guidance was based on the SELECT trial results and the FDA approval of Wegovy for this indication.\n\n<strong>Who qualifies for Part D coverage of Wegovy:</strong>\n\n<ul><li>You must have established cardiovascular disease, meaning a prior heart attack, prior stroke, or symptomatic peripheral artery disease</li><li>Your BMI must be 27 or higher at the time of prescribing</li><li>Your Part D plan must include Wegovy on its formulary</li><li>Prior authorization is almost always required</li></ul>\n\n<strong>Important limitations:</strong> Not every Part D plan covers Wegovy even for this indication. Plans are not required to include it on their formulary. If your plan does not cover it, you can request a formulary exception, switch plans during the Annual Enrollment Period, or explore the GLP-1 Bridge pathway described below.\n\n<strong>Tier placement and cost:</strong> When Part D plans do cover Wegovy, it is typically placed on Tier 4 or Tier 5 (specialty tier), which means significant cost-sharing. With a list price of approximately $1,350 per month, you could reach the $2,100 Part D out-of-pocket cap within the first two months of the year. After that, Wegovy costs $0 for the rest of the year.\n\nFor a detailed explanation of how the Part D benefit phases affect your drug costs, see our guide to <a href='/understanding-part-d/' class='text-[#1a3fa8] underline underline-offset-2'>understanding Medicare Part D coverage and costs</a>.",
    },
    {
      type: "section" as const,
      heading: "The Medicare GLP-1 Bridge: $50 Monthly Wegovy Starting July 2026",
      content:
        "The Medicare GLP-1 Bridge, which launched July 1, 2026, is the most significant expansion of Medicare access to Wegovy for beneficiaries who do not have established cardiovascular disease. The program runs through December 31, 2027, and covers Wegovy at a flat $50 monthly copay.\n\n<strong>Who qualifies for Wegovy through the Bridge:</strong>\n\n<table class='w-full text-sm border-collapse my-4'><thead><tr class='bg-[#0d2260] text-white'><th class='p-3 text-left'>Eligibility Tier</th><th class='p-3 text-left'>BMI Requirement</th><th class='p-3 text-left'>Additional Conditions Required</th></tr></thead><tbody><tr class='bg-white border-b'><td class='p-3 font-semibold'>Tier 1</td><td class='p-3'>35 or higher</td><td class='p-3'>None</td></tr><tr class='bg-gray-50 border-b'><td class='p-3 font-semibold'>Tier 2</td><td class='p-3'>30 or higher</td><td class='p-3'>Heart failure with preserved ejection fraction, uncontrolled hypertension, or chronic kidney disease stage 3a or above</td></tr><tr class='bg-white'><td class='p-3 font-semibold'>Tier 3</td><td class='p-3'>27 or higher</td><td class='p-3'>Pre-diabetes, previous myocardial infarction, previous stroke, or symptomatic peripheral artery disease</td></tr></tbody></table>\n\n<strong>Who is excluded from the Bridge:</strong> Beneficiaries with a diagnosis of type 2 diabetes, obstructive sleep apnea, or noncirrhotic MASH are not eligible because they have existing Part D coverage pathways for GLP-1 medications. Additionally, if you have already filled a GLP-1 prescription through your Part D plan in 2026, you are not eligible for the Bridge in 2026.\n\n<strong>How the $50 copay works:</strong> The Bridge operates entirely outside of the Part D benefit. The $50 monthly copay does not count toward your Part D deductible or the $2,100 annual out-of-pocket cap. Low-Income Subsidy (Extra Help) protections also do not apply, meaning LIS beneficiaries still pay the full $50.\n\nFor a complete breakdown of the Bridge program, eligibility tiers, and the prior authorization process, see our dedicated guide to the <a href='/medicare-glp1-bridge-program/' class='text-[#1a3fa8] underline underline-offset-2'>Medicare GLP-1 Bridge Program</a>.",
    },
    {
      type: "inlineCta" as const,
      heading: "Not Sure Which Wegovy Coverage Pathway Applies to You?",
      body: "Our licensed Medicare specialists can review your diagnosis, BMI, and current plan to determine whether the Part D cardiovascular pathway or the GLP-1 Bridge is the right fit. No cost, no obligation.",
    },
    {
      type: "section" as const,
      heading: "Which Coverage Pathway Is Right for You?",
      content:
        "The two coverage pathways for Wegovy serve different patient populations and have meaningfully different cost structures. Understanding which one applies to you depends on your diagnosis and current Part D plan.\n\n<table class='w-full text-sm border-collapse my-4'><thead><tr class='bg-[#0d2260] text-white'><th class='p-3 text-left'>Scenario</th><th class='p-3 text-left'>Best Pathway</th><th class='p-3 text-left'>Key Consideration</th></tr></thead><tbody><tr class='bg-white border-b'><td class='p-3'>Prior heart attack or stroke, BMI 27+, no type 2 diabetes</td><td class='p-3 font-semibold'>Either (Bridge or Part D CV pathway)</td><td class='p-3'>Compare $50 Bridge copay vs. your Part D tier cost; Bridge copay does not count toward OOP cap</td></tr><tr class='bg-gray-50 border-b'><td class='p-3'>BMI 35+, no qualifying conditions, no type 2 diabetes</td><td class='p-3 font-semibold'>GLP-1 Bridge</td><td class='p-3'>Flat $50 monthly; Part D does not cover weight loss alone</td></tr><tr class='bg-white border-b'><td class='p-3'>BMI 30 to 34.9, heart failure or CKD stage 3a+, no type 2 diabetes</td><td class='p-3 font-semibold'>GLP-1 Bridge (Tier 2)</td><td class='p-3'>Qualifies via Bridge Tier 2; check if Part D CV pathway also applies</td></tr><tr class='bg-gray-50 border-b'><td class='p-3'>Type 2 diabetes and obesity</td><td class='p-3 font-semibold'>Standard Part D (Ozempic or Mounjaro)</td><td class='p-3'>Not eligible for Bridge; access GLP-1 through Part D for diabetes indication</td></tr><tr class='bg-white'><td class='p-3'>Established CV disease, BMI 27+, Part D plan covers Wegovy</td><td class='p-3 font-semibold'>Part D CV pathway</td><td class='p-3'>Wegovy copay counts toward $2,100 OOP cap; may reach cap in 2 to 3 months</td></tr></tbody></table>\n\n<strong>A note on the $50 Bridge copay vs. Part D cost-sharing:</strong> For beneficiaries who qualify for both pathways, the math is not always straightforward. If your Part D plan covers Wegovy on a high tier, you might spend $300 to $500 per month before reaching the out-of-pocket cap. The $50 Bridge copay is lower, but it does not count toward the cap, meaning you pay $50 every month for 18 months with no relief. If you reach the Part D cap quickly due to other expensive medications, the Part D pathway may actually be cheaper overall. A licensed Medicare specialist can run the numbers for your specific situation.",
    },
    {
      type: "section" as const,
      heading: "What Wegovy Costs Under Medicare: A Breakdown",
      content:
        "Wegovy has a list price of approximately $1,350 per month without insurance. Under Medicare, your actual cost depends on which coverage pathway applies.\n\n<table class='w-full text-sm border-collapse my-4'><thead><tr class='bg-[#0d2260] text-white'><th class='p-3 text-left'>Coverage Pathway</th><th class='p-3 text-left'>Monthly Cost</th><th class='p-3 text-left'>Annual Maximum</th><th class='p-3 text-left'>Counts Toward OOP Cap?</th></tr></thead><tbody><tr class='bg-white border-b'><td class='p-3'>Medicare GLP-1 Bridge</td><td class='p-3 font-semibold'>$50 flat</td><td class='p-3'>$600 (18 months = $900)</td><td class='p-3 text-red-600'>No</td></tr><tr class='bg-gray-50 border-b'><td class='p-3'>Part D (CV pathway, Tier 4)</td><td class='p-3 font-semibold'>Varies; typically $100 to $300+</td><td class='p-3'>$2,100 cap (then $0)</td><td class='p-3 text-green-700'>Yes</td></tr><tr class='bg-white'><td class='p-3'>No coverage (out of pocket)</td><td class='p-3 font-semibold'>~$1,350</td><td class='p-3'>~$16,200</td><td class='p-3 text-red-600'>No</td></tr></tbody></table>\n\n<strong>The Inflation Reduction Act and the $2,100 cap:</strong> Starting in 2026, the annual out-of-pocket cap for Medicare Part D is $2,100. For a drug as expensive as Wegovy, beneficiaries who access it through Part D and have other high-cost medications may reach this cap relatively quickly. Once you hit $2,100 in out-of-pocket drug costs for the year, all covered Part D drugs cost $0 for the remainder of the year.\n\n<strong>The Medicare Prescription Payment Plan (M3P):</strong> If you access Wegovy through Part D, the M3P program allows you to spread your drug costs across monthly installments throughout the year. This does not reduce your total annual cost but can help with cash flow in the early months when costs are highest.\n\nFor more detail on how the Part D benefit phases and the $2,100 cap affect your overall drug spending, see our guide to <a href='/medicare-out-of-pocket-costs/' class='text-[#1a3fa8] underline underline-offset-2'>Medicare out-of-pocket costs</a>.",
    },
    {
      type: "section" as const,
      heading: "How to Get Wegovy Covered Under Medicare: Step by Step",
      content:
        "The process for getting Wegovy covered differs depending on which pathway applies to you.\n\n<strong>If you are pursuing the GLP-1 Bridge pathway:</strong>\n\n<ul><li>Talk to your doctor about whether you meet the BMI and clinical criteria for one of the three eligibility tiers</li><li>Your doctor submits a prior authorization to the CMS central processor, attesting that the prescription is for weight management and that you meet the clinical criteria</li><li>Once approved, fill your prescription at any participating pharmacy and pay $50 at the counter</li><li>Continue filling monthly through December 31, 2027</li></ul>\n\n<strong>If you are pursuing the Part D cardiovascular risk reduction pathway:</strong>\n\n<ul><li>Confirm with your doctor that you have a documented diagnosis of established cardiovascular disease (prior heart attack, prior stroke, or symptomatic peripheral artery disease) and a BMI of 27 or higher</li><li>Check whether your current Part D plan includes Wegovy on its formulary using Medicare Plan Finder or by calling your plan</li><li>If your plan covers it, your doctor submits a prior authorization to your Part D plan</li><li>If your plan does not cover it, request a formulary exception with documented medical necessity, or compare plans during the Annual Enrollment Period (October 15 to December 7)</li></ul>\n\n<strong>If neither pathway applies:</strong> If you do not qualify for the Bridge and your diagnosis does not meet the cardiovascular risk reduction criteria, standard Part D does not cover Wegovy for weight loss alone. In that case, ask your doctor about covered alternatives, check whether manufacturer patient assistance programs apply (note: these typically exclude Medicare beneficiaries), or revisit your options during the next Annual Enrollment Period.\n\nFor help comparing Part D plans that cover your medications, <a href='/free-consultation/' class='text-[#1a3fa8] underline underline-offset-2'>schedule a free consultation</a> with our licensed specialists.",
    },
    {
      type: "section" as const,
      heading: "Wegovy vs. Ozempic Under Medicare: Key Differences",
      content:
        "Because Wegovy and Ozempic contain the same active ingredient, beneficiaries often wonder whether they can substitute one for the other to get better coverage. The answer is that coverage is tied to the FDA-approved indication, not the active ingredient. You cannot use Ozempic's diabetes coverage to get Wegovy, and you cannot use Wegovy's weight management coverage to avoid a diabetes prior authorization for Ozempic.\n\n<table class='w-full text-sm border-collapse my-4'><thead><tr class='bg-[#0d2260] text-white'><th class='p-3 text-left'>Coverage Scenario</th><th class='p-3 text-left'>Wegovy</th><th class='p-3 text-left'>Ozempic</th></tr></thead><tbody><tr class='bg-white border-b'><td class='p-3'>Type 2 diabetes</td><td class='p-3 text-red-600'>Not covered (wrong indication)</td><td class='p-3 text-green-700'>Generally covered by Part D</td></tr><tr class='bg-gray-50 border-b'><td class='p-3'>CV risk reduction with obesity (BMI 27+)</td><td class='p-3 text-green-700'>Covered by Part D (plan-dependent)</td><td class='p-3 text-red-600'>Not covered for this indication</td></tr><tr class='bg-white border-b'><td class='p-3'>Weight management, BMI 35+ (no other conditions)</td><td class='p-3 text-green-700'>GLP-1 Bridge ($50/month)</td><td class='p-3 text-red-600'>Not covered under Bridge</td></tr><tr class='bg-gray-50'><td class='p-3'>Weight management, BMI 27 to 34.9 with qualifying conditions</td><td class='p-3 text-green-700'>GLP-1 Bridge ($50/month)</td><td class='p-3 text-red-600'>Not covered under Bridge</td></tr></tbody></table>\n\nFor a full comparison of Medicare coverage across all GLP-1 medications, including Mounjaro, Zepbound, and Foundayo, see our guide to <a href='/does-medicare-cover-ozempic/' class='text-[#1a3fa8] underline underline-offset-2'>Medicare coverage for Ozempic and GLP-1 drugs</a>.",
    },
    {
      type: "section" as const,
      heading: "What Happens After the GLP-1 Bridge Ends in December 2027?",
      content:
        "The Medicare GLP-1 Bridge is explicitly a short-term demonstration. It is scheduled to end December 31, 2027, and CMS has not announced a permanent replacement. This raises an important question for beneficiaries who begin Wegovy through the Bridge: what happens to their access and their health progress when the program ends?\n\nCMS is collecting utilization and outcomes data during the Bridge period to inform a potential longer-term coverage expansion. The BALANCE Model, which was originally designed as the successor to the Bridge, was delayed and has not been rescheduled. Congressional legislation to permanently expand Medicare obesity drug coverage has been introduced in multiple sessions but has not been enacted as of mid-2026.\n\nFor beneficiaries starting Wegovy through the Bridge, it is worth discussing with your doctor what a transition plan might look like if the program ends without a permanent replacement. Options could include transitioning to a Part D-covered indication if your health status changes, exploring Medicare Advantage plans that may offer supplemental obesity drug coverage, or reviewing whether the cardiovascular risk reduction pathway becomes applicable as your treatment progresses.\n\nOur guide to <a href='/medicare-advantage-vs-medigap/' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Advantage vs. Medigap</a> explains how Medicare Advantage plans differ from Original Medicare and how supplemental benefits work, which is relevant if you are evaluating whether a plan switch might improve your drug coverage options.\n\nFor the most current information on the Bridge program and any extensions, visit the official <a href='https://www.cms.gov/medicare/coverage/prescription-drug-coverage/medicare-glp-1-bridge' target='_blank' rel='noopener noreferrer' class='text-[#1a3fa8] underline underline-offset-2'>CMS Medicare GLP-1 Bridge page</a>.",
    },
    {
      type: "summary" as const,
      heading: "Does Medicare Cover Wegovy? What You Need to Know",
      content:
        "Here is a concise summary of the key points covered in this guide:\n\n<ul><li><strong>Medicare Part D can cover Wegovy</strong> for beneficiaries with established cardiovascular disease (prior heart attack, prior stroke, or peripheral artery disease) and a BMI of 27 or higher, following 2024 CMS guidance. Coverage is plan-dependent and requires prior authorization.</li><li><strong>The Medicare GLP-1 Bridge</strong> provides Wegovy at a flat $50 monthly copay for eligible Part D enrollees from July 1, 2026 through December 31, 2027. Eligibility is based on three BMI tiers with different clinical requirements.</li><li><strong>The $50 Bridge copay does not count toward your Part D out-of-pocket cap</strong> and Extra Help (LIS) does not reduce it, because the Bridge operates outside of Part D.</li><li><strong>Beneficiaries with type 2 diabetes</strong> are not eligible for the Bridge and should access GLP-1 medications through their Part D plan using the diabetes indication.</li><li><strong>Prior authorization is required</strong> under both pathways. For the Bridge, your doctor submits to a CMS central processor. For Part D, your doctor submits to your plan.</li><li><strong>The Bridge ends December 31, 2027.</strong> No permanent replacement has been enacted as of mid-2026. Discuss a transition plan with your doctor if you begin Wegovy through the Bridge.</li></ul>\n\nOur licensed specialists can review your specific situation, compare your options across both pathways, and help you get started at no cost. <a href='/free-consultation/' class='text-[#1a3fa8] underline underline-offset-2'>Schedule a free consultation</a> to get personalized guidance.",
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "Does Medicare cover Wegovy for weight loss?",
          answer:
            "Not through standard Part D for weight loss alone. However, two pathways now exist. First, Medicare Part D plans may cover Wegovy for cardiovascular risk reduction in beneficiaries with established cardiovascular disease and a BMI of 27 or higher. Second, the Medicare GLP-1 Bridge (July 2026 through December 2027) covers Wegovy at $50 per month for eligible beneficiaries based on BMI and clinical criteria, regardless of cardiovascular disease status.",
        },
        {
          question: "What is the difference between Wegovy and Ozempic for Medicare coverage purposes?",
          answer:
            "Both contain semaglutide, but they have different FDA-approved indications. Ozempic is approved for type 2 diabetes and is generally covered by Part D for that indication. Wegovy is approved for chronic weight management and cardiovascular risk reduction. Medicare coverage for Wegovy is available through the cardiovascular risk reduction pathway (Part D) or the GLP-1 Bridge, but not for weight loss alone through standard Part D.",
        },
        {
          question: "How much does Wegovy cost under Medicare?",
          answer:
            "Under the Medicare GLP-1 Bridge, eligible beneficiaries pay a flat $50 monthly copay. Under Medicare Part D through the cardiovascular risk reduction pathway, costs depend on your plan's tier placement and benefit phase. With a list price of approximately $1,350 per month, many beneficiaries reach the $2,100 annual Part D out-of-pocket cap within the first two months of the year, after which Wegovy costs $0 for the rest of the year.",
        },
        {
          question: "Can I get Wegovy through Medicare if I have a BMI over 35 but no other conditions?",
          answer:
            "Yes, through the Medicare GLP-1 Bridge. A BMI of 35 or higher is the Tier 1 eligibility criterion for the Bridge, with no additional conditions required. You must be enrolled in Medicare Part D and not have a diagnosis of type 2 diabetes, obstructive sleep apnea, or MASH. The program runs through December 31, 2027.",
        },
        {
          question: "Does Medicare Advantage cover Wegovy?",
          answer:
            "Medicare Advantage plans that include Part D drug coverage (MA-PD plans) follow the same rules as stand-alone Part D plans. The GLP-1 Bridge is available to all eligible Part D enrollees, including those in MA-PD plans. For Wegovy coverage through the cardiovascular risk reduction pathway, your MA-PD plan must include it on its formulary. Some Medicare Advantage plans also offer supplemental benefits that may include additional drug coverage; check your plan's Evidence of Coverage for details.",
        },
        {
          question: "What happens to my Wegovy access when the GLP-1 Bridge ends in December 2027?",
          answer:
            "The Bridge is a temporary demonstration scheduled to end December 31, 2027. CMS has not announced a permanent replacement as of mid-2026. If you begin Wegovy through the Bridge, discuss a transition plan with your doctor. Options may include the Part D cardiovascular risk reduction pathway if your health status qualifies, or reviewing Medicare Advantage plan options that may offer supplemental obesity drug coverage.",
        },
        {
          question: "Does Extra Help (Low-Income Subsidy) reduce my Wegovy copay under the GLP-1 Bridge?",
          answer:
            "No. Extra Help (LIS) reduces copays for Part D medications, but the GLP-1 Bridge operates outside of Part D. LIS protections do not extend to Bridge copays. LIS beneficiaries still pay the full $50 monthly copay under the Bridge. If you receive Extra Help and are prescribed Wegovy for cardiovascular risk reduction, accessing it through your Part D plan (if covered) would allow your LIS benefits to apply.",
        },
        {
          question: "Can my doctor prescribe Wegovy off-label for a condition not listed in the Bridge criteria?",
          answer:
            "The Bridge prior authorization requires your doctor to attest that you meet the specific clinical criteria and that the prescription is for weight reduction and weight management. Off-label prescribing does not satisfy the Bridge eligibility requirements. If you do not meet the clinical criteria, the Bridge is not available regardless of your doctor's clinical judgment about the drug's appropriateness.",
        },
      ],
    },
  ],
};

export default function DoesMedicareCoverWegovyPage() {
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
