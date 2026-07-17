import type { Metadata } from "next";
import BlogPostClient, { JENNIFER_LOADER_WOHL } from "../blog/BlogPostClient";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Does Medicare Cover Zepbound? Coverage Rules, Costs, and the GLP-1 Bridge",
  "url": "https://medicareinfopro.com/does-medicare-cover-zepbound/",
  "datePublished": "2026-07-17",
  "dateModified": "2026-07-17",
  "image": "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&q=80",
  "author": {
    "@type": "Person",
    "name": "Jennifer C. Loader-Wohl",
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
    "@id": "https://medicareinfopro.com/does-medicare-cover-zepbound/"
  },
  "description": "Medicare coverage for Zepbound depends on your diagnosis and which coverage pathway applies. Learn when Medicare Part D covers Zepbound, how it differs from Mounjaro, what the GLP-1 Bridge provides, and what Zepbound costs under Medicare in 2026."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Does Medicare Cover Zepbound? Coverage Rules, Costs, and the GLP-1 Bridge | MedicareInfoPro",
  description:
    "Medicare coverage for Zepbound depends on your diagnosis and which pathway applies. Learn when Part D covers Zepbound, how it differs from Mounjaro, what the $50 GLP-1 Bridge provides, and what Zepbound costs under Medicare in 2026.",
  keywords: [
    "does Medicare cover Zepbound",
    "Medicare Zepbound coverage",
    "Medicare Zepbound 2026",
    "Medicare Part D Zepbound",
    "Zepbound Medicare cost",
    "Medicare tirzepatide coverage",
    "Medicare GLP-1 weight loss coverage",
    "Zepbound vs Mounjaro Medicare",
    "Medicare obesity drug coverage",
    "Medicare Zepbound $50",
  ],
  openGraph: {
    title: "Does Medicare Cover Zepbound? Coverage Rules, Costs, and the GLP-1 Bridge",
    description:
      "Medicare coverage for Zepbound depends on your diagnosis. Learn when Part D covers it, how it differs from Mounjaro, and how the new $50 GLP-1 Bridge changes access in 2026.",
    url: "https://medicareinfopro.com/does-medicare-cover-zepbound/",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Prescription medication representing Medicare coverage for Zepbound tirzepatide weight loss drug",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Does Medicare Cover Zepbound? Coverage Rules, Costs, and the GLP-1 Bridge",
    description:
      "Medicare coverage for Zepbound, what it costs under Part D, and how the new $50 GLP-1 Bridge changes access in 2026.",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/does-medicare-cover-zepbound/",
  },
};

const POST = {
  slug: "does-medicare-cover-zepbound",
  title: "Does Medicare Cover Zepbound? Coverage Rules, Costs, and the New GLP-1 Bridge",
  excerpt:
    "Zepbound (tirzepatide) is one of the most effective weight loss medications available, but Medicare coverage has been limited by a longstanding prohibition on weight loss drugs. The Medicare GLP-1 Bridge, launched July 1, 2026, changes that for many beneficiaries. This guide explains every coverage pathway, what Zepbound costs under Medicare, and how it differs from Mounjaro.",
  category: "Coverage" as const,
  author: JENNIFER_LOADER_WOHL,
  date: "July 2026",
  readTime: "11 min read",
  image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=1200&q=80",
  imageAlt: "Prescription medication representing Medicare coverage for Zepbound tirzepatide weight loss drug",
  relatedPosts: [
    {
      title: "Does Medicare Cover Wegovy? Coverage Rules, Costs, and the New GLP-1 Bridge",
      href: "/does-medicare-cover-wegovy",
      category: "Coverage" as const,
    },
    {
      title: "Medicare GLP-1 Bridge Program: $50 Wegovy and Zepbound Starting July 2026",
      href: "/medicare-glp1-bridge-program",
      category: "Coverage" as const,
    },
    {
      title: "Does Medicare Cover Ozempic? Coverage, Costs, and Alternatives",
      href: "/does-medicare-cover-ozempic",
      category: "Coverage" as const,
    },
  ],
  sections: [
    {
      type: "intro" as const,
      content:
        "Zepbound (tirzepatide) is manufactured by Eli Lilly and shares its active ingredient with Mounjaro, a drug widely covered by Medicare Part D for type 2 diabetes. Despite containing the same molecule, Zepbound and Mounjaro have different FDA-approved indications, different brand names, and very different Medicare coverage histories.\n\nFor most of its existence, Zepbound sat outside of Medicare coverage because it is approved for weight management, and Medicare was legally prohibited from covering drugs used solely for weight loss. The Medicare GLP-1 Bridge, which launched July 1, 2026, changed that for a large portion of eligible beneficiaries by providing Zepbound at a flat $50 monthly copay.\n\nThis guide explains who can access Zepbound through Medicare, what it costs under each pathway, how Zepbound and Mounjaro differ for coverage purposes, and what to do if you do not qualify for either pathway.",
    },
    {
      type: "keyTakeaways" as const,
      items: [
        {
          label: "Standard Medicare Part D does not cover Zepbound for weight loss alone",
          text: "Unlike Mounjaro, which is covered by Part D for type 2 diabetes, Zepbound is approved for weight management and obstructive sleep apnea. Part D covers Zepbound only for the sleep apnea indication. For weight management, the GLP-1 Bridge is the primary Medicare access pathway.",
        },
        {
          label: "The Medicare GLP-1 Bridge provides Zepbound at $50 per month starting July 2026",
          text: "Eligible Medicare Part D beneficiaries who meet the BMI and clinical criteria and do not have type 2 diabetes, sleep apnea, or MASH can access Zepbound through the Bridge for a flat $50 monthly copay. The program runs through December 31, 2027.",
        },
        {
          label: "Zepbound and Mounjaro contain the same active ingredient but have different coverage rules",
          text: "Both drugs contain tirzepatide, but Mounjaro is approved for type 2 diabetes and Zepbound is approved for weight management and sleep apnea. Medicare Part D covers Mounjaro for diabetes. Coverage for Zepbound depends on your indication and which pathway applies.",
        },
        {
          label: "Medicare Part D covers Zepbound for obstructive sleep apnea",
          text: "CMS has approved Part D coverage for Zepbound (tirzepatide) for the treatment of moderate to severe obstructive sleep apnea in adults with obesity. If you have a documented sleep apnea diagnosis, you are not eligible for the GLP-1 Bridge but may access Zepbound through your Part D plan.",
        },
        {
          label: "Without coverage, Zepbound costs approximately $1,060 per month",
          text: "The list price for Zepbound is lower than Wegovy but still well above what most Medicare beneficiaries can afford out of pocket. Under the GLP-1 Bridge, eligible beneficiaries pay $50 per month. Under Part D for sleep apnea, costs depend on your plan tier.",
        },
        {
          label: "Prior authorization is required under both coverage pathways",
          text: "Whether you access Zepbound through the GLP-1 Bridge or through Part D for sleep apnea, your doctor must submit a prior authorization documenting your diagnosis, BMI, and clinical criteria. Bridge prior authorizations go to a CMS central processor, not your Part D plan.",
        },
      ],
    },
    {
      type: "section" as const,
      heading: "What Is Zepbound and How Does It Differ from Mounjaro?",
      content:
        "Zepbound and Mounjaro are both brand-name medications manufactured by Eli Lilly. Both contain tirzepatide, a dual GIP and GLP-1 receptor agonist that works on two hormonal pathways simultaneously. This dual mechanism is what makes tirzepatide particularly effective for both blood sugar control and weight reduction.\n\nDespite sharing an active ingredient, they are distinct FDA-approved products with different indications and very different Medicare coverage histories.\n\n<table class='w-full text-sm border-collapse my-4'><thead><tr class='bg-[#0d2260] text-white'><th class='p-3 text-left'>Feature</th><th class='p-3 text-left'>Zepbound</th><th class='p-3 text-left'>Mounjaro</th></tr></thead><tbody><tr class='bg-white border-b'><td class='p-3'>Active ingredient</td><td class='p-3'>Tirzepatide</td><td class='p-3'>Tirzepatide</td></tr><tr class='bg-gray-50 border-b'><td class='p-3'>FDA-approved indication</td><td class='p-3'>Chronic weight management; moderate to severe obstructive sleep apnea in adults with obesity</td><td class='p-3'>Type 2 diabetes management</td></tr><tr class='bg-white border-b'><td class='p-3'>Maximum approved dose</td><td class='p-3'>15 mg weekly</td><td class='p-3'>15 mg weekly</td></tr><tr class='bg-gray-50 border-b'><td class='p-3'>Formulation</td><td class='p-3'>Injection pen; single-dose vials</td><td class='p-3'>Injection pen</td></tr><tr class='bg-white border-b'><td class='p-3'>Approximate list price (monthly)</td><td class='p-3'>~$1,060</td><td class='p-3'>~$1,030</td></tr><tr class='bg-gray-50'><td class='p-3'>Standard Part D coverage</td><td class='p-3'>Sleep apnea indication only (not weight loss)</td><td class='p-3'>Generally covered for type 2 diabetes</td></tr></tbody></table>\n\nThe <a href='https://www.nejm.org/doi/full/10.1056/NEJMoa2206038' target='_blank' rel='noopener noreferrer' class='text-[#1a3fa8] underline underline-offset-2'>SURMOUNT-1 trial, published in the New England Journal of Medicine</a>, found that tirzepatide produced average weight loss of up to 22.5 percent of body weight in adults with obesity, making it one of the most effective weight loss medications ever studied. This clinical evidence underpins both the FDA approval of Zepbound and its inclusion in the Medicare GLP-1 Bridge.",
    },
    {
      type: "section" as const,
      heading: "Medicare Part D Coverage for Zepbound: The Sleep Apnea Pathway",
      content:
        "CMS has approved Medicare Part D coverage for Zepbound (tirzepatide) for the treatment of moderate to severe obstructive sleep apnea in adults with obesity. This is a distinct coverage pathway from the GLP-1 Bridge and applies to beneficiaries with a documented sleep apnea diagnosis.\n\n<strong>Who qualifies for Part D coverage of Zepbound for sleep apnea:</strong>\n\n<ul><li>You must have a documented diagnosis of moderate to severe obstructive sleep apnea</li><li>You must have obesity (BMI of 30 or higher)</li><li>Your Part D plan must include Zepbound on its formulary for this indication</li><li>Prior authorization is required in most cases</li></ul>\n\n<strong>Important note on Bridge exclusion:</strong> If you have a diagnosis of obstructive sleep apnea, you are not eligible for the Medicare GLP-1 Bridge. CMS designed the Bridge specifically for beneficiaries who do not have an existing Part D coverage pathway for GLP-1 medications. Because sleep apnea provides a Part D pathway for Zepbound, those beneficiaries are directed to their Part D plan instead.\n\n<strong>Tier placement and cost:</strong> When Part D plans cover Zepbound for sleep apnea, it is typically placed on a specialty tier (Tier 4 or Tier 5). With a list price of approximately $1,060 per month, you could reach the $2,100 Part D out-of-pocket cap within the first two to three months of the year. After that, Zepbound costs $0 for the rest of the year.\n\nFor a detailed explanation of how the Part D benefit phases and the $2,100 cap affect your drug costs, see our guide to <a href='/understanding-part-d/' class='text-[#1a3fa8] underline underline-offset-2'>understanding Medicare Part D coverage and costs</a>.",
    },
    {
      type: "section" as const,
      heading: "The Medicare GLP-1 Bridge: $50 Monthly Zepbound Starting July 2026",
      content:
        "The Medicare GLP-1 Bridge, which launched July 1, 2026, is the primary access pathway for Zepbound for beneficiaries who need it for weight management and do not have sleep apnea, type 2 diabetes, or MASH. The program covers Zepbound at a flat $50 monthly copay and runs through December 31, 2027.\n\n<strong>Who qualifies for Zepbound through the Bridge:</strong>\n\n<table class='w-full text-sm border-collapse my-4'><thead><tr class='bg-[#0d2260] text-white'><th class='p-3 text-left'>Eligibility Tier</th><th class='p-3 text-left'>BMI Requirement</th><th class='p-3 text-left'>Additional Conditions Required</th></tr></thead><tbody><tr class='bg-white border-b'><td class='p-3 font-semibold'>Tier 1</td><td class='p-3'>35 or higher</td><td class='p-3'>None</td></tr><tr class='bg-gray-50 border-b'><td class='p-3 font-semibold'>Tier 2</td><td class='p-3'>30 or higher</td><td class='p-3'>Heart failure with preserved ejection fraction, uncontrolled hypertension, or chronic kidney disease stage 3a or above</td></tr><tr class='bg-white'><td class='p-3 font-semibold'>Tier 3</td><td class='p-3'>27 or higher</td><td class='p-3'>Pre-diabetes, previous myocardial infarction, previous stroke, or symptomatic peripheral artery disease</td></tr></tbody></table>\n\n<strong>Who is excluded from the Bridge:</strong> Beneficiaries with a diagnosis of type 2 diabetes, obstructive sleep apnea, or noncirrhotic MASH are not eligible. Additionally, if you have already filled a GLP-1 prescription through your Part D plan in 2026, you are not eligible for the Bridge in 2026.\n\n<strong>How the $50 copay works:</strong> The Bridge operates entirely outside of the Part D benefit. The $50 monthly copay does not count toward your Part D deductible or the $2,100 annual out-of-pocket cap. Low-Income Subsidy (Extra Help) protections do not apply to Bridge copays.\n\nFor a complete breakdown of the Bridge program, all three eligibility tiers, and the prior authorization process, see our dedicated guide to the <a href='/medicare-glp1-bridge-program/' class='text-[#1a3fa8] underline underline-offset-2'>Medicare GLP-1 Bridge Program</a>.",
    },
    {
      type: "inlineCta" as const,
      heading: "Not Sure Whether Zepbound Is Covered Under Your Medicare Plan?",
      body: "Our licensed Medicare specialists can review your diagnosis, BMI, and current plan to determine whether the Part D sleep apnea pathway or the GLP-1 Bridge is the right fit for you. No cost, no obligation.",
    },
    {
      type: "section" as const,
      heading: "What Zepbound Costs Under Medicare: A Full Breakdown",
      content:
        "Zepbound has a list price of approximately $1,060 per month without insurance. Under Medicare, your actual cost depends on which coverage pathway applies.\n\n<table class='w-full text-sm border-collapse my-4'><thead><tr class='bg-[#0d2260] text-white'><th class='p-3 text-left'>Coverage Pathway</th><th class='p-3 text-left'>Monthly Cost</th><th class='p-3 text-left'>Annual Maximum</th><th class='p-3 text-left'>Counts Toward OOP Cap?</th></tr></thead><tbody><tr class='bg-white border-b'><td class='p-3'>Medicare GLP-1 Bridge</td><td class='p-3 font-semibold'>$50 flat</td><td class='p-3'>$600 per year ($900 over 18 months)</td><td class='p-3 text-red-600'>No</td></tr><tr class='bg-gray-50 border-b'><td class='p-3'>Part D (sleep apnea, Tier 4 or 5)</td><td class='p-3 font-semibold'>Varies; typically $100 to $300+</td><td class='p-3'>$2,100 cap (then $0)</td><td class='p-3 text-green-700'>Yes</td></tr><tr class='bg-white'><td class='p-3'>No coverage (out of pocket)</td><td class='p-3 font-semibold'>~$1,060</td><td class='p-3'>~$12,720</td><td class='p-3 text-red-600'>No</td></tr></tbody></table>\n\n<strong>The $2,100 Part D out-of-pocket cap in 2026:</strong> For beneficiaries accessing Zepbound through Part D for sleep apnea, the Inflation Reduction Act cap of $2,100 provides meaningful protection. With a list price of $1,060 per month, you could reach the cap within two to three months, after which Zepbound costs $0 for the rest of the year. This makes the Part D pathway potentially more cost-effective over a full year than the Bridge for beneficiaries who take other expensive medications.\n\n<strong>The Medicare Prescription Payment Plan (M3P):</strong> If you access Zepbound through Part D, the M3P program allows you to spread your annual drug costs across monthly installments. This does not reduce your total cost but helps with cash flow in the early months of the year when costs are highest.\n\nFor a broader look at how Medicare drug costs work and how to manage them, see our overview of <a href='/medicare-out-of-pocket-costs/' class='text-[#1a3fa8] underline underline-offset-2'>Medicare out-of-pocket costs</a>.",
    },
    {
      type: "section" as const,
      heading: "Zepbound vs. Mounjaro: Which One Does Medicare Cover and When?",
      content:
        "Because Zepbound and Mounjaro contain the same active ingredient, beneficiaries sometimes wonder whether they can substitute one for the other to access better coverage. The answer is no. Medicare coverage is tied to the FDA-approved indication on the prescription, not the active ingredient.\n\n<table class='w-full text-sm border-collapse my-4'><thead><tr class='bg-[#0d2260] text-white'><th class='p-3 text-left'>Coverage Scenario</th><th class='p-3 text-left'>Zepbound</th><th class='p-3 text-left'>Mounjaro</th></tr></thead><tbody><tr class='bg-white border-b'><td class='p-3'>Type 2 diabetes</td><td class='p-3 text-red-600'>Not covered (wrong indication)</td><td class='p-3 text-green-700'>Generally covered by Part D</td></tr><tr class='bg-gray-50 border-b'><td class='p-3'>Obstructive sleep apnea with obesity</td><td class='p-3 text-green-700'>Covered by Part D (plan-dependent)</td><td class='p-3 text-red-600'>Not approved for this indication</td></tr><tr class='bg-white border-b'><td class='p-3'>Weight management, BMI 35+ (no other conditions)</td><td class='p-3 text-green-700'>GLP-1 Bridge ($50/month)</td><td class='p-3 text-red-600'>Not covered under Bridge</td></tr><tr class='bg-gray-50 border-b'><td class='p-3'>Weight management, BMI 27 to 34.9 with qualifying conditions</td><td class='p-3 text-green-700'>GLP-1 Bridge ($50/month)</td><td class='p-3 text-red-600'>Not covered under Bridge</td></tr><tr class='bg-white'><td class='p-3'>Type 2 diabetes and obesity</td><td class='p-3 text-red-600'>Not eligible for Bridge</td><td class='p-3 text-green-700'>Covered by Part D for diabetes</td></tr></tbody></table>\n\n<strong>A practical note:</strong> If you have both type 2 diabetes and obesity, your doctor may prescribe Mounjaro through your Part D plan for the diabetes indication. If you later develop sleep apnea and your doctor switches you to Zepbound, your coverage pathway changes from the diabetes Part D route to the sleep apnea Part D route. The drug is the same molecule, but the coverage documentation must reflect the correct indication.\n\nFor a full comparison of Medicare coverage across all GLP-1 medications, see our guides to <a href='/does-medicare-cover-ozempic/' class='text-[#1a3fa8] underline underline-offset-2'>Medicare coverage for Ozempic</a> and <a href='/does-medicare-cover-wegovy/' class='text-[#1a3fa8] underline underline-offset-2'>Medicare coverage for Wegovy</a>.",
    },
    {
      type: "section" as const,
      heading: "How to Get Zepbound Covered Under Medicare: Step by Step",
      content:
        "The process for getting Zepbound covered differs depending on which pathway applies to you.\n\n<strong>If you are pursuing the GLP-1 Bridge pathway (weight management):</strong>\n\n<ul><li>Confirm with your doctor that you meet the BMI criteria for one of the three eligibility tiers and that you do not have type 2 diabetes, sleep apnea, or MASH</li><li>Your doctor submits a prior authorization to the CMS central processor, attesting that the prescription is for weight management and that you meet the clinical criteria</li><li>Once approved, fill your prescription at any participating pharmacy and pay $50 at the counter</li><li>Continue filling monthly through December 31, 2027</li></ul>\n\n<strong>If you are pursuing the Part D sleep apnea pathway:</strong>\n\n<ul><li>Confirm with your doctor that you have a documented diagnosis of moderate to severe obstructive sleep apnea and a BMI of 30 or higher</li><li>Check whether your current Part D plan includes Zepbound on its formulary using Medicare Plan Finder or by calling your plan directly</li><li>If your plan covers it, your doctor submits a prior authorization to your Part D plan</li><li>If your plan does not cover it, request a formulary exception with documented medical necessity, or compare plans during the Annual Enrollment Period (October 15 to December 7)</li></ul>\n\n<strong>If neither pathway applies:</strong> If you do not qualify for the Bridge and do not have a sleep apnea or diabetes diagnosis that creates a Part D pathway, standard Medicare does not cover Zepbound for weight loss alone. In that case, discuss covered alternatives with your doctor or revisit your options at the next Annual Enrollment Period.\n\nFor personalized help comparing plans that cover your medications, <a href='/free-consultation/' class='text-[#1a3fa8] underline underline-offset-2'>schedule a free consultation</a> with our licensed specialists.",
    },
    {
      type: "section" as const,
      heading: "What Happens After the GLP-1 Bridge Ends in December 2027?",
      content:
        "The Medicare GLP-1 Bridge is a temporary demonstration scheduled to end December 31, 2027. CMS has not announced a permanent replacement as of mid-2026. For beneficiaries who begin Zepbound through the Bridge, this raises an important planning question.\n\nCMS is collecting utilization and outcomes data during the Bridge period to inform a potential longer-term coverage expansion. Congressional legislation to permanently expand Medicare obesity drug coverage has been introduced but has not been enacted. The BALANCE Model, originally designed as a successor program, was delayed and has not been rescheduled.\n\nIf you begin Zepbound through the Bridge, consider discussing a transition plan with your doctor before the program ends. Options may include transitioning to a Part D-covered indication if your health status changes (for example, if you develop sleep apnea or cardiovascular disease that qualifies you for a Part D pathway), or reviewing Medicare Advantage plan options that may offer supplemental obesity drug coverage.\n\nOur guide to <a href='/original-vs-advantage/' class='text-[#1a3fa8] underline underline-offset-2'>Original Medicare vs. Medicare Advantage</a> explains how the two coverage types differ and how supplemental benefits work, which is relevant if you are evaluating a plan switch to improve your drug coverage options.\n\nFor the most current information on the Bridge program and any extensions, visit the official <a href='https://www.cms.gov/medicare/coverage/prescription-drug-coverage/medicare-glp-1-bridge' target='_blank' rel='noopener noreferrer' class='text-[#1a3fa8] underline underline-offset-2'>CMS Medicare GLP-1 Bridge page</a>.",
    },
    {
      type: "summary" as const,
      heading: "Does Medicare Cover Zepbound? What You Need to Know",
      content:
        "Here is a concise summary of the key points covered in this guide:\n\n<ul><li><strong>Standard Medicare Part D does not cover Zepbound for weight loss alone.</strong> The longstanding prohibition on Medicare coverage of weight loss drugs still applies to weight management as a standalone indication.</li><li><strong>Medicare Part D covers Zepbound for obstructive sleep apnea</strong> in adults with obesity. If you have a documented sleep apnea diagnosis, you may access Zepbound through your Part D plan, but you are not eligible for the GLP-1 Bridge.</li><li><strong>The Medicare GLP-1 Bridge</strong> provides Zepbound at a flat $50 monthly copay for eligible Part D enrollees from July 1, 2026 through December 31, 2027. Eligibility is based on three BMI tiers with different clinical requirements.</li><li><strong>Zepbound and Mounjaro contain the same active ingredient</strong> (tirzepatide) but have different FDA-approved indications and different coverage rules. You cannot use Mounjaro's diabetes coverage to access Zepbound.</li><li><strong>The $50 Bridge copay does not count toward your Part D out-of-pocket cap</strong> and Extra Help does not reduce it, because the Bridge operates outside of Part D.</li><li><strong>The Bridge ends December 31, 2027.</strong> No permanent replacement has been enacted as of mid-2026. Discuss a transition plan with your doctor if you begin Zepbound through the Bridge.</li></ul>\n\nOur licensed specialists can review your specific situation, compare your plan options, and help you determine the right pathway at no cost to you. <a href='/free-consultation/' class='text-[#1a3fa8] underline underline-offset-2'>Schedule a free consultation</a> to get started.",
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "Does Medicare cover Zepbound for weight loss?",
          answer:
            "Not through standard Part D for weight loss alone. However, the Medicare GLP-1 Bridge (July 2026 through December 2027) covers Zepbound at $50 per month for eligible beneficiaries based on BMI and clinical criteria. Additionally, Medicare Part D covers Zepbound for the treatment of moderate to severe obstructive sleep apnea in adults with obesity, which is a separate indication from weight management.",
        },
        {
          question: "What is the difference between Zepbound and Mounjaro for Medicare coverage?",
          answer:
            "Both contain tirzepatide, but Mounjaro is approved for type 2 diabetes and is generally covered by Part D for that indication. Zepbound is approved for weight management and obstructive sleep apnea. Part D covers Zepbound only for the sleep apnea indication. For weight management, the GLP-1 Bridge is the primary Medicare access pathway for Zepbound.",
        },
        {
          question: "How much does Zepbound cost under Medicare?",
          answer:
            "Under the Medicare GLP-1 Bridge, eligible beneficiaries pay a flat $50 monthly copay. Under Medicare Part D through the sleep apnea pathway, costs depend on your plan's tier placement and benefit phase. With a list price of approximately $1,060 per month, many beneficiaries reach the $2,100 annual Part D out-of-pocket cap within two to three months, after which Zepbound costs $0 for the rest of the year.",
        },
        {
          question: "Can I get Zepbound through Medicare if I have sleep apnea?",
          answer:
            "Yes, through your Medicare Part D plan. CMS has approved Part D coverage for Zepbound for the treatment of moderate to severe obstructive sleep apnea in adults with obesity. However, if you have sleep apnea, you are not eligible for the Medicare GLP-1 Bridge. You must access Zepbound through your Part D plan using the sleep apnea indication.",
        },
        {
          question: "Can I get Zepbound through Medicare if I have a BMI over 35 but no other conditions?",
          answer:
            "Yes, through the Medicare GLP-1 Bridge. A BMI of 35 or higher is the Tier 1 eligibility criterion for the Bridge, with no additional conditions required. You must be enrolled in Medicare Part D and not have a diagnosis of type 2 diabetes, obstructive sleep apnea, or MASH. The program runs through December 31, 2027.",
        },
        {
          question: "Does Medicare Advantage cover Zepbound?",
          answer:
            "Medicare Advantage plans that include Part D drug coverage (MA-PD plans) follow the same rules as stand-alone Part D plans. The GLP-1 Bridge is available to all eligible Part D enrollees, including those in MA-PD plans. For Zepbound coverage through the sleep apnea pathway, your MA-PD plan must include it on its formulary. Some Medicare Advantage plans also offer supplemental benefits that may include additional drug coverage; check your plan's Evidence of Coverage for details.",
        },
        {
          question: "Does Extra Help (Low-Income Subsidy) reduce my Zepbound copay under the GLP-1 Bridge?",
          answer:
            "No. Extra Help reduces copays for Part D medications, but the GLP-1 Bridge operates outside of Part D. LIS protections do not extend to Bridge copays. LIS beneficiaries still pay the full $50 monthly copay under the Bridge. If you have sleep apnea and access Zepbound through Part D, your LIS benefits would apply to reduce your cost-sharing.",
        },
        {
          question: "What happens to my Zepbound access when the GLP-1 Bridge ends in December 2027?",
          answer:
            "The Bridge is a temporary demonstration scheduled to end December 31, 2027. CMS has not announced a permanent replacement as of mid-2026. If you begin Zepbound through the Bridge, discuss a transition plan with your doctor. Options may include the Part D sleep apnea pathway if you develop a qualifying diagnosis, or reviewing Medicare Advantage plans that may offer supplemental obesity drug coverage.",
        },
      ],
    },
  ],
};

export default function DoesMedicareCoverZepboundPage() {
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
