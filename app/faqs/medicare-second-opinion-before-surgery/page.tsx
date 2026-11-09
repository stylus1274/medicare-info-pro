import type { Metadata } from "next";
import FaqQuestionPage from "@/components/FaqQuestionPage";

export const metadata: Metadata = {
  "title": {
    "absolute": "Does Medicare Cover a Second Opinion Before Surgery? | MIP"
  },
  "description": "Learn when Medicare covers a second surgical opinion, what costs to check, and how to verify specialist access with Brandon coverage resources.",
  "alternates": {
    "canonical": "https://medicareinfopro.com/faqs/medicare-second-opinion-before-surgery/"
  },
  "robots": {
    "index": true,
    "follow": true
  },
  "openGraph": {
    "title": "Does Medicare Cover a Second Opinion Before Surgery?",
    "description": "Learn when Medicare covers a second surgical opinion, what costs to check, and how to verify specialist access with Brandon coverage resources.",
    "url": "https://medicareinfopro.com/faqs/medicare-second-opinion-before-surgery/",
    "type": "article",
    "publishedTime": "2026-11-09",
    "modifiedTime": "2026-11-09"
  }
};

const FAQ = {
  "question": "Does Medicare Cover a Second Opinion Before Surgery?",
  "shortAnswer": "In some cases, Medicare Part B covers a second opinion for medically necessary, non-emergency surgery. With Original Medicare, you generally pay 20% of the Medicare-approved amount after the Part B deductible. Medicare can also cover a third surgical opinion when the first two differ. If you have Medicare Advantage, confirm the plan’s provider, referral, authorization, and cost rules before scheduling.",
  "category": "Coverage Questions",
  "updated": "November 9, 2026",
  "sections": [
    {
      "heading": "When can Medicare cover a second surgical opinion?",
      "content": "<p>A second opinion lets another doctor review a proposed operation and discuss treatment choices. Medicare’s surgical-opinion benefit applies to medically necessary, non-emergency surgery; it is not blanket coverage for consultations about any procedure.</p><p>Ask the treating clinician whether waiting for another opinion is medically appropriate. Do not delay emergency care. Our <a href=\"/medicare-outpatient-surgery-coverage-brandon-fl/\">outpatient surgery coverage guide for Brandon</a> explains other questions to resolve before planned care.</p>"
    },
    {
      "heading": "What might I pay under Original Medicare?",
      "content": "<p>For a covered second surgical opinion, your usual Part B deductible and 20% coinsurance apply. The approved amount, additional testing, and any supplemental coverage affect what you ultimately owe.</p><p>Ask the second doctor whether the practice accepts Medicare assignment and request an estimate. A <a href=\"/medicare-supplement-insurance-plans-brandon/\">Medicare Supplement policy</a> may help with specified cost-sharing, depending on the policy you already have. Do not assume a new policy can be obtained or take effect before an upcoming appointment.</p>"
    },
    {
      "heading": "What if the two doctors disagree?",
      "content": "<p>Medicare also covers a third surgical opinion when the first and second opinions differ. Ask how the first two assessments and test results can be shared with the next doctor.</p><p>Getting another opinion does not require you to change doctors or commit to an operation. Discuss the proposed benefits, risks, alternatives, and timing with your clinicians. Coverage for the consultation does not establish that every later treatment will be covered.</p>"
    },
    {
      "heading": "What changes if I have Medicare Advantage?",
      "content": "<p>Contact the plan before booking. Confirm the second doctor’s exact office location, the visit’s coverage, any referral or prior approval, and your expected share of costs. A doctor accepting Medicare does not by itself confirm participation in your Advantage plan.</p><p>HMOs generally use network providers and often require specialist referrals. PPOs generally allow covered out-of-network care at a higher cost and do not require specialist referrals, but you should still verify coverage with the plan. Use our <a href=\"/check-medicare-doctor-hospital-networks-brandon-fl/\">Brandon provider-network checklist</a>.</p>"
    },
    {
      "heading": "What should I prepare for the appointment?",
      "content": "<p>Ask the first doctor to send relevant records, imaging, and test results, then confirm the second office received them. Write down the procedure being recommended and the questions you want answered.</p><p>Consider bringing a family member or friend. Ask about alternatives, the reason for surgery, and any further tests being proposed. Medicare evaluates additional testing under its usual medical-necessity and coverage rules; the second-opinion visit does not make every test automatically covered.</p>"
    },
    {
      "heading": "Where can I get coverage help in Brandon?",
      "content": "<p>MIP can help organize provider and plan questions about the coverage the agency represents. The treating clinicians advise on medical care, while Medicare or your insurer confirms benefits and claim decisions.</p><p>Start with our <a href=\"/medicare-brandon-fl/\">Brandon Medicare resource center</a> or <a href=\"/contact/\">request an appointment</a>. If a provider gives you an <a href=\"/faqs/advance-beneficiary-notice/\">Advance Beneficiary Notice</a>, ask what service may not be covered and what the listed payment choices mean.</p>"
    }
  ],
  "relatedFaqs": [
    {
      "question": "What is an Advance Beneficiary Notice?",
      "href": "/faqs/advance-beneficiary-notice/"
    },
    {
      "question": "How do I prepare for outpatient surgery costs?",
      "href": "/medicare-outpatient-surgery-coverage-brandon-fl/"
    },
    {
      "question": "What if my plan drops a doctor?",
      "href": "/faqs/what-to-do-if-medicare-plan-drops-doctor-or-drug/"
    }
  ],
  "officialSources": [
    {
      "label": "Medicare.gov: Second surgical opinions",
      "href": "https://www.medicare.gov/coverage/second-surgical-opinions"
    },
    {
      "label": "Medicare.gov: Preparing for a second opinion (PDF)",
      "href": "https://www.medicare.gov/publications/02173-getting-a-second-opinion-before-surgery.pdf"
    },
    {
      "label": "Medicare.gov: HMO provider and referral rules",
      "href": "https://www.medicare.gov/health-drug-plans/health-plans/your-health-plan-options/HMO"
    },
    {
      "label": "Medicare.gov: PPO provider and referral rules",
      "href": "https://www.medicare.gov/health-drug-plans/health-plans/your-health-plan-options/PPO"
    }
  ]
};

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://medicareinfopro.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Medicare FAQ",
      "item": "https://medicareinfopro.com/faq/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Does Medicare Cover a Second Opinion Before Surgery?",
      "item": "https://medicareinfopro.com/faqs/medicare-second-opinion-before-surgery/"
    }
  ]
};

export default function Page() {
 return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} /><FaqQuestionPage faq={FAQ} /></>;
}
