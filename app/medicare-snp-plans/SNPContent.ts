export const SNP_REVIEWED = "2026-11-25";
export const SNP_URL = "https://medicareinfopro.com/medicare-snp-plans/";
export const SNP_TITLE = "Medicare Special Needs Plans in Brandon, FL";
export const SNP_DESCRIPTION = "Compare 2027 Special Needs Plans in Brandon and Hillsborough County. Review D-SNP, C-SNP, and I-SNP eligibility, enrollment rules, and local help.";

// CMS CY2027 landscape, November 1, 2026: unique FL/Hillsborough contract-plan IDs.
export const SNP_COUNTS = [
  { type: "D-SNP", count: 35, label: "Dual Eligible", check: "Medicare and the Medicaid eligibility categories accepted by the plan" },
  { type: "C-SNP", count: 28, label: "Chronic Condition", check: "The specific condition or combination of conditions the plan serves" },
  { type: "I-SNP", count: 9, label: "Institutional", check: "Qualifying institutional or equivalent level-of-care requirements" },
];

export const SNP_FAQS = [
  { question: "Who qualifies for a Medicare Special Needs Plan in Brandon?", answer: "You need Medicare Parts A and B, an address in the plan's service area, and the specific Medicaid, chronic-condition, or institutional-care eligibility required by that plan. The insurer must verify eligibility before you can enroll." },
  { question: "Does Extra Help alone qualify me for a D-SNP?", answer: "No. Extra Help assists with Part D drug costs. A D-SNP requires Medicare and qualifying Medicaid status. Ask the plan which Medicaid categories it accepts; Extra Help and full Medicaid benefits are different." },
  { question: "Can someone with diabetes join a C-SNP in Hillsborough County?", answer: "Some C-SNPs serve people with diabetes. Confirm that the exact plan serves your diagnosis, is available at your address, and includes the providers and prescription coverage you need. A diagnosis does not establish eligibility for every C-SNP." },
  { question: "Can I consider an SNP if I have end-stage renal disease?", answer: "Yes. ESRD does not by itself prevent someone from joining Medicare Advantage. You must still meet the particular SNP's eligibility and enrollment requirements. Check your dialysis facility, kidney specialist, and any transplant providers with the plan." },
  { question: "Do all Special Needs Plans include prescription drug coverage?", answer: "Yes. All SNPs must include Medicare Part D prescription drug coverage. Check the exact medications, pharmacies, and coverage restrictions for the plan year you are considering." },
  { question: "Will I still have a Medicare Part B premium?", answer: "The Part B premium requirement continues when you join Medicare Advantage. Depending on your eligibility, Medicaid or a Medicare Savings Program may help pay it. A $0 SNP plan premium does not by itself mean you have no Part B premium or other costs." },
  { question: "Can I switch to any D-SNP every month?", answer: "No. Enrollment timing depends on a qualifying enrollment period and the particular plan. Ask the insurer which election period applies before submitting a change. Medicaid eligibility alone does not create unrestricted monthly switching between all D-SNPs." },
  { question: "Can I keep my Brandon doctor with an SNP?", answer: "Check the exact plan, coverage year, physician, and office location with both the insurer and the provider. Confirm hospitals and outpatient facilities separately. A provider accepting Medicare does not establish participation in every SNP network." },
];
