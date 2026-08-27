import BlogPostClient, { GREG_WOHL } from "../blog/BlogPostClient";

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Medicare Prior Authorization and Appeals: What to Do When Care Is Delayed or Denied",
  url: "https://medicareinfopro.com/medicare-prior-authorization-appeals/",
  datePublished: "2026-08-27",
  dateModified: "2026-08-27",
  image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
  author: {
    "@type": "Person",
    name: "Greg Wohl",
    jobTitle: "Licensed Medicare Specialist",
    url: "https://medicareinfopro.com/greg-wohl/",
  },
  publisher: {
    "@type": "Organization",
    name: "Medicare Information Pro",
    url: "https://medicareinfopro.com/",
    "@id": "https://medicareinfopro.com/#organization",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://medicareinfopro.com/medicare-prior-authorization-appeals/",
  },
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Prior Authorization and Appeals: What to Do When Care Is Delayed or Denied | MedicareInfoPro",
  description:
    "Learn how Medicare prior authorization, coverage determinations, exceptions, grievances, and appeals work when a Medicare Advantage or Part D plan delays or denies care, supplies, or a prescription drug.",
  keywords: [
    "Medicare prior authorization appeal",
    "Medicare coverage determination",
    "Medicare Advantage appeal",
    "Part D formulary exception",
    "Medicare denied claim appeal",
    "Medicare expedited appeal",
  ],
  openGraph: {
    title: "Medicare Prior Authorization and Appeals: What to Do When Care Is Delayed or Denied",
    description:
      "A practical guide to prior authorization, coverage decisions, Part D exceptions, appeals, and the questions to ask before changing a Medicare plan.",
    url: "https://medicareinfopro.com/medicare-prior-authorization-appeals/",
    type: "article",
    images: [
      {
        url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Medicare coverage decision and appeal paperwork",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Prior Authorization and Appeals: What to Do When Care Is Delayed or Denied",
    description:
      "How to understand a Medicare coverage decision, request an exception, and use the appeal instructions in a written denial.",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-prior-authorization-appeals/",
  },
};

const POST = {
  slug: "medicare-prior-authorization-appeals",
  title: "Medicare Prior Authorization and Appeals: What to Do When Care Is Delayed or Denied",
  excerpt:
    "A delayed treatment, denied claim, or unexpected drug restriction can be unsettling. This guide explains how Medicare prior authorization, coverage determinations, exceptions, grievances, and appeals fit together, plus the practical steps to take before you change plans or pay a bill.",
  category: "Coverage" as const,
  author: GREG_WOHL,
  date: "August 2026",
  readTime: "12 min read",
  image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1200&q=80",
  imageAlt: "Medicare coverage decision and appeal paperwork",
  sections: [
    {
      type: "intro" as const,
      content:
        "When a Medicare plan says a service, supply, or prescription needs more review, the next step depends on the exact decision. A prior authorization request asks a plan to approve coverage before a service or drug is provided. A coverage determination is the plan's formal decision about coverage or payment. An appeal asks Medicare or the plan to reconsider an unfavorable decision. A grievance is a complaint about service quality or another issue that is not a coverage decision.\n\nThe terminology matters because each process has its own instructions and timing. Medicare.gov says you may appeal when Original Medicare, a Medicare health plan, or a Medicare drug plan refuses to cover, pay for, or continue a service, supply, item, or drug you believe should be covered. Start with the written notice and keep copies of every document you send or receive.",
    },
    {
      type: "keyTakeaways" as const,
      items: [
        {
          label: "Read the decision type first",
          text: "A prior authorization request, coverage determination, grievance, and appeal are different processes. The written notice tells you which process applies.",
        },
        {
          label: "Do not discard the written notice",
          text: "The notice explains the reason for the decision, the next step, and the plan's instructions for requesting a reconsideration or appeal.",
        },
        {
          label: "Ask your clinician or prescriber for support",
          text: "Medical records, an order, a treatment explanation, or a prescriber statement can be central to a coverage request or appeal.",
        },
        {
          label: "Part D exceptions are a specific type of request",
          text: "A formulary or tiering exception is a coverage determination and requires supporting information from the prescriber.",
        },
        {
          label: "A plan change is not always the first solution",
          text: "You may have a way to request coverage, appeal, or ask about continuity of care before deciding whether another plan is appropriate.",
        },
      ],
    },
    {
      type: "section" as const,
      heading: "Prior authorization, coverage determinations, grievances, and appeals",
      content:
        "These terms are often used together, but they do different jobs. A Medicare Advantage or Part D plan can require prior authorization for certain covered services or drugs. That is a request for the plan to approve coverage before you receive the item, service, or medication. Some plans also use other coverage rules, such as step therapy, quantity limits, referrals, or in-network requirements.\n\nA coverage determination is the plan's decision about whether it will provide or pay for the benefit. In Medicare Advantage, you may see the term organization determination. In Part D, a coverage determination can include a request for a drug the plan does not list, a lower cost-sharing tier, or a waiver of a utilization-management rule. A grievance is different. It is generally for dissatisfaction with a plan's service, communication, or quality of care rather than a request to reverse a coverage decision.\n\nIf the decision is unfavorable, an appeal asks Medicare or the plan to reconsider it. Medicare.gov explains that the appeal process varies by coverage type and generally has five levels. Use the instructions in the written decision for your specific coverage instead of relying on a general timeline.",
    },
    {
      type: "section" as const,
      heading: "What to do when care, equipment, or a drug is delayed or denied",
      content:
        "Start by asking the plan for the exact reason. Find out whether the issue is medical-necessity documentation, a prior authorization requirement, an out-of-network provider or supplier, a formulary rule, a missing referral, a coding issue, or a coverage exclusion. Ask for the decision in writing if you do not already have it.\n\nThen contact the clinician, prescriber, provider, or supplier involved. Ask what documentation was submitted and whether additional records, an order, a supporting statement, or a different covered option may be appropriate. Your clinician is the right person to advise you about treatment. A licensed Medicare specialist can help you understand plan choices and enrollment rules, but cannot replace a clinician's medical judgment.\n\nBefore paying a bill or changing coverage, gather your Medicare Summary Notice or plan Explanation of Benefits, the prior authorization or denial notice, the name of the plan representative, and the date of every call. If the issue involves durable medical equipment, review our <a href='/medicare-coverage-for-scooters' class='text-[#1a3fa8] underline underline-offset-2'>Medicare mobility-scooter coverage guide</a> for examples of why documentation and supplier rules matter. If it involves a plan changing a doctor or medication, use our <a href='/faqs/what-to-do-if-medicare-plan-drops-doctor-or-drug' class='text-[#1a3fa8] underline underline-offset-2'>dropped doctor or drug FAQ</a> and its printable action checklist.",
      subsections: [
        {
          heading: "Questions to ask the plan",
          content:
            "Ask what benefit rule applies, what information is missing, whether an expedited review is available, how to submit supporting records, and where to find the appeal instructions if the decision remains unfavorable. Ask the plan to identify the decision reference number and write it down. If you receive conflicting answers, ask to speak with a supervisor or request the information in writing.",
        },
        {
          heading: "When an expedited request may matter",
          content:
            "If waiting for a standard decision could seriously jeopardize your life, health, or ability to regain maximum function, ask the plan and your clinician whether an expedited request is appropriate. Do not assume that every request is expedited. The plan's notice and the applicable Medicare rules explain how the request is considered.",
        },
      ],
    },
    {
      type: "section" as const,
      heading: "Part D drug exceptions and appeals",
      content:
        "A Part D plan's drug list is called a formulary. When the issue involves a drug that is not on the formulary, a higher cost-sharing tier, step therapy, prior authorization, or a quantity limit, you may be able to request an exception. CMS states that a formulary exception or tiering exception is a type of coverage determination.\n\nFor a formulary exception, the prescriber must support why the requested drug is medically necessary because covered alternatives would not be as effective or would have adverse effects. For a tiering exception, the supporting statement addresses why lower-tier preferred drugs would not be as effective or would cause adverse effects. CMS says that after the plan has the supporting statement, it must give a written decision on a benefit request within 24 hours for an expedited request or 72 hours for a standard request.\n\nIf the plan denies the request, the decision includes information for requesting a redetermination. Review our <a href='/medicare-part-d' class='text-[#1a3fa8] underline underline-offset-2'>Medicare Part D guide</a> and <a href='/does-medicare-cover-zepbound' class='text-[#1a3fa8] underline underline-offset-2'>Zepbound coverage guide</a> for related drug-coverage questions, but use your own plan documents and prescriber's advice for the medication at issue. For official rules, see the <a href='https://www.cms.gov/medicare/appeals-grievances/prescription-drug/exceptions' class='text-[#1a3fa8] underline underline-offset-2' target='_blank' rel='noopener noreferrer'>CMS Part D exceptions guidance</a>.",
    },
    {
      type: "inlineCta" as const,
      heading: "Need help comparing Medicare plan options after a coverage problem?",
      body: "A licensed Medicare specialist can help you organize the plan questions, compare available plan features, and understand the enrollment windows that may apply. Your clinician remains the right source for treatment recommendations and medical documentation.",
    },
    {
      type: "section" as const,
      heading: "How Medicare appeals work",
      content:
        "The appeal route depends on whether you have Original Medicare, a Medicare Advantage plan, or a Medicare drug plan. Medicare.gov describes five general appeal levels, but the initial request, review organization, and timing differ by coverage type. That is why the written decision letter is the most important starting document.\n\nFor Medicare Advantage and Part D decisions, the plan must tell you in writing how to appeal. Read the notice carefully, including where to send the request, what documents to include, and whether a fast review can be requested. For Original Medicare, the Medicare Summary Notice explains how to begin. When you need help understanding an appeal, Medicare.gov also identifies the State Health Insurance Assistance Program, or SHIP, as a free source of personalized local counseling.\n\nA favorable appeal can change the coverage or payment decision. An appeal does not replace an enrollment decision, and it does not automatically mean that a person can change plans. If your coverage problem is tied to a move, plan termination, non-renewal, or another qualifying event, see our <a href='/what-is-the-special-enrollment-period' class='text-[#1a3fa8] underline underline-offset-2'>Special Enrollment Period guide</a> before making a change.",
    },
    {
      type: "section" as const,
      heading: "When to compare plans instead of only appealing",
      content:
        "An appeal can be the right step when you believe an existing plan should cover a particular service, supply, or drug. A plan comparison can be useful when the issue is a broader fit problem, such as repeated network concerns, a formulary that no longer works for your medication list, or a plan that is leaving Medicare. In either case, compare the plan details relevant to your situation rather than relying on a general benefit summary.\n\nCheck that each plan serves your address, includes your doctors and hospitals, covers your medications at the needed dosage, works with your preferred pharmacy, and has cost-sharing you understand. Medicare's <a href='https://www.medicare.gov/plan-compare/' class='text-[#1a3fa8] underline underline-offset-2' target='_blank' rel='noopener noreferrer'>Plan Compare tool</a> is a useful starting point. You can also use our <a href='/annual-enrollment-period-guide' class='text-[#1a3fa8] underline underline-offset-2'>Annual Enrollment Period guide</a> and <a href='/switch-medicare-advantage-florida' class='text-[#1a3fa8] underline underline-offset-2'>Florida Medicare Advantage switching guide</a> to understand the main change windows.\n\nBe especially careful if you are considering a return to Original Medicare and want a Medicare Supplement policy. A plan change does not automatically create a right to buy Medigap without underwriting. Our <a href='/faqs/medigap-guaranteed-issue-rights-florida' class='text-[#1a3fa8] underline underline-offset-2'>Florida Medigap guaranteed-issue-rights FAQ</a> explains when specific protections may apply.",
    },
    {
      type: "section" as const,
      heading: "A simple recordkeeping checklist",
      content:
        "Keep a folder, paper or digital, with the following items:\n\n<ul><li>Your plan notice, coverage determination, denial notice, Medicare Summary Notice, and Explanation of Benefits.</li><li>Your medication list, dosage, preferred pharmacy, treating clinicians, and upcoming appointments.</li><li>Orders, supporting statements, relevant medical records, and the names of people at your clinician's office who are helping.</li><li>The date, time, plan representative, and reference number for every call.</li><li>Copies of every appeal, exception request, or supporting document you submit.</li></ul>\n\nOur <a href='/faqs/what-to-do-if-medicare-plan-drops-doctor-or-drug' class='text-[#1a3fa8] underline underline-offset-2'>plan-change FAQ</a> includes a downloadable two-page checklist with a call log you can print and use during plan conversations.",
    },
    {
      type: "summary" as const,
      heading: "The practical next step",
      content:
        "Do not let a confusing plan message force a rushed choice. Identify the decision type, get the reason in writing, ask the clinician or prescriber for needed support, and use the appeal instructions that match your coverage. Compare new plans only after you understand whether an exception, appeal, continuity-of-care process, or enrollment opportunity may already be available.\n\nFor personal plan-comparison help, <a href='/free-consultation' class='text-[#1a3fa8] underline underline-offset-2'>schedule a free Medicare consultation</a>. For official appeal instructions, visit <a href='https://www.medicare.gov/providers-services/claims-appeals-complaints/appeals' class='text-[#1a3fa8] underline underline-offset-2' target='_blank' rel='noopener noreferrer'>Medicare.gov's filing-an-appeal guide</a> or call 1-800-MEDICARE.",
    },
    {
      type: "faq" as const,
      items: [
        {
          question: "Is prior authorization the same as an appeal?",
          answer:
            "No. Prior authorization is a request for plan approval before a service or drug is provided. An appeal asks Medicare or the plan to reconsider an unfavorable coverage or payment decision. A written decision notice should explain which process applies and what to do next.",
        },
        {
          question: "Can I appeal if my Medicare plan stops covering a drug?",
          answer:
            "You may be able to request a Part D formulary exception or appeal an unfavorable coverage determination. Ask your prescriber about supporting information and use the instructions in the plan's written decision. The available process depends on the reason for the plan's decision.",
        },
        {
          question: "How quickly must a Part D plan decide a formulary exception?",
          answer:
            "CMS states that after a plan has the prescriber's supporting statement, a benefit-request decision is due within 24 hours for an expedited request or 72 hours for a standard request. Ask the plan what information it still needs and whether an expedited request is appropriate.",
        },
        {
          question: "Can I switch Medicare plans because prior authorization was denied?",
          answer:
            "A coverage denial alone does not automatically create a Special Enrollment Period. First review the written decision and appeal process. A separate enrollment opportunity may exist if you have another qualifying event, such as a move or plan non-renewal. Confirm the rule that applies to your situation before enrolling.",
        },
        {
          question: "Who can help me understand an appeal?",
          answer:
            "Your plan must provide appeal instructions in writing. Your clinician or prescriber can explain medical documentation. Medicare.gov also identifies SHIP as a free source of individualized Medicare counseling, and a licensed Medicare specialist can help you compare available plan options.",
        },
      ],
    },
  ],
  relatedPosts: [
    {
      href: "/faqs/what-to-do-if-medicare-plan-drops-doctor-or-drug",
      title: "What Should I Do if My Medicare Plan Drops a Doctor or Drug?",
      category: "Coverage" as const,
    },
    {
      href: "/annual-enrollment-period-guide",
      title: "Medicare Annual Enrollment Period: 2026 Dates, Deadlines and Checklist",
      category: "Enrollment" as const,
    },
    {
      href: "/switch-medicare-advantage-florida",
      title: "How to Switch Medicare Advantage Plans in Florida",
      category: "Plans" as const,
    },
  ],
};

export default function MedicarePriorAuthorizationAppealsPage() {
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
