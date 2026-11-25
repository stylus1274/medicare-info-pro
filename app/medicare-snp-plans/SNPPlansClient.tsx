import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin, Phone, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import MedicareCoverageCta from "@/components/MedicareCoverageCta";
import { SNP_COUNTS, SNP_FAQS, SNP_TITLE } from "./SNPContent";

const TOC = [
  { id: "what-is", label: "What Is an SNP?" },
  { id: "local", label: "2027 Hillsborough County Plans" },
  { id: "snp-types", label: "D-SNP, C-SNP, and I-SNP Eligibility" },
  { id: "enrollment", label: "Enrollment Periods" },
  { id: "compare", label: "Your Local Comparison Checklist" },
  { id: "costs", label: "Costs and Benefits" },
  { id: "prepare", label: "Prepare for a Consultation" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "sources", label: "Official Sources" },
];

const TYPES = [
  { type: "D-SNP", title: "Dual Eligible Special Needs Plans", color: "border-purple-100 bg-purple-50", text: "D-SNPs serve people with Medicare and qualifying Medicaid status. Plans accept specific Medicaid eligibility categories, so ask the insurer to verify yours. Extra Help alone does not establish D-SNP eligibility. For an integrated D-SNP, also check whether your Medicaid managed care coverage must align with the plan." },
  { type: "C-SNP", title: "Chronic Condition Special Needs Plans", color: "border-blue-100 bg-blue-50", text: "C-SNPs serve people with specified severe or disabling chronic conditions. Examples include diabetes, chronic heart failure, chronic lung disorders, or ESRD. Each plan sets the conditions it serves within Medicare's rules. Your prescriber or other provider may need to confirm your diagnosis." },
  { type: "I-SNP", title: "Institutional Special Needs Plans", color: "border-green-100 bg-green-50", text: "I-SNPs serve people who have needed, or are expected to need, a qualifying institutional level of care for at least 90 days. Some institutional-equivalent plans serve eligible people living in the community after a level-of-care assessment. Check the particular plan's care setting and facility requirements." },
];

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-28 space-y-4">
    <h2 id={`${id}-heading`} className="text-xl sm:text-2xl font-bold text-gray-900" style={{ fontFamily: "'Merriweather', serif" }}>{title}</h2>
    {children}
  </section>;
}

const paragraph = "text-base text-gray-700 leading-relaxed";
const link = "font-semibold text-[#1a3fa8] underline underline-offset-2";

export default function SNPPlansClient() {
  return <div className="min-h-screen flex flex-col bg-white">
    <Header />
    <section className="bg-[#0d1f5c] text-white pt-12 pb-14 px-4">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Medicare Advantage", href: "/medicare-advantage/" }, { label: "Special Needs Plans" }]} className="mb-5" />
        <span className="inline-flex items-center gap-2 text-sm text-[#f5a800] font-bold mb-4"><Shield size={16} aria-hidden="true" /> BRANDON AND HILLSBOROUGH COUNTY</span>
        <h1 className="text-3xl sm:text-4xl font-black mb-4 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>{SNP_TITLE}</h1>
        <p className="text-white/85 text-base leading-relaxed max-w-2xl">Compare 2027 D-SNP, C-SNP, and I-SNP options around your Medicaid status, qualifying health needs, doctors, and prescriptions. Start with the eligibility rules for the exact plan.</p>
        <p className="mt-5 text-sm text-white/70">Updated November 25, 2026 · Coverage year 2027</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7">
          {[{ count: 72, label: "County SNP plan IDs" }, ...SNP_COUNTS.map(x => ({ count: x.count, label: x.label + " plans" }))].map(x => <div key={x.label} className="bg-white/10 rounded-xl p-4 text-center"><p className="text-2xl font-black">{x.count}</p><p className="text-xs sm:text-sm mt-1 text-white/75">{x.label}</p></div>)}
        </div>
        <p className="mt-3 text-xs text-white/65">CMS November 2026 landscape file. Counts are not the number of plans every person can join.</p>
      </div>
    </section>

    <div className="max-w-5xl mx-auto px-4 py-12 w-full flex flex-col lg:flex-row gap-10">
      <article className="flex-1 min-w-0 space-y-10">
        <Section id="what-is" title="What Is a Medicare Special Needs Plan?">
          <p className={paragraph}>An SNP is a Medicare Advantage plan with eligibility tied to Medicaid status, a specified chronic condition, or institutional care needs. SNPs include Parts A and B benefits, Part D drug coverage, and care coordination. They operate as HMO or PPO plans with their own provider and coverage rules.</p>
          <p className={paragraph}>You need Parts A and B, an address in the service area, the plan's qualifying status, and an available enrollment period. <a className={link} href="https://www.medicare.gov/health-drug-plans/health-plans/your-health-plan-options/SNP">Medicare explains SNP coverage and eligibility</a>.</p>
        </Section>

        <Section id="local" title="2027 SNP Options in Hillsborough County">
          <p className={paragraph}>The CMS landscape file lists 72 unique SNP contract-plan IDs for Hillsborough County. Brandon, Riverview, Valrico, Seffner, and Tampa residents should confirm options using their home address and individual eligibility.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1a3fa8]" tabIndex={0} role="region" aria-label="Hillsborough County 2027 Special Needs Plan counts">
            <table className="w-full text-sm text-left min-w-[440px]">
              <caption className="text-left p-4 text-gray-700 font-semibold">Hillsborough County 2027 SNP inventory</caption>
              <thead className="bg-[#0d1f5c] text-white"><tr><th scope="col" className="p-3">Type</th><th scope="col" className="p-3">Plan IDs</th><th scope="col" className="p-3">Eligibility to verify</th></tr></thead>
              <tbody>{SNP_COUNTS.map(x => <tr key={x.type} className="border-t border-gray-100"><th scope="row" className="p-3 text-gray-900">{x.type}</th><td className="p-3">{x.count}</td><td className="p-3 text-gray-700">{x.check}</td></tr>)}</tbody>
            </table>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">Method: unique contract-plan IDs categorized as SNP, filtered to Florida and Hillsborough County in the <a className={link} href="https://www.cms.gov/files/zip/cy2027-landscape-202611.zip">CMS CY 2027 landscape download (ZIP)</a>, updated November 1, 2026. Employer-sponsored, Part B-only, and national PACE plans are excluded from the file. Availability can change.</p>
          <p className={paragraph}>Use <a className={link} href="https://www.medicare.gov/plan-compare/">Medicare Plan Finder</a> and the insurer's 2027 documents to review your options. The <Link className={link} href="/best-medicare-advantage-plans-hillsborough-county/">Hillsborough County Medicare Advantage comparison</Link> explains the broader county inventory.</p>
        </Section>

        <Section id="snp-types" title="D-SNP, C-SNP, and I-SNP Eligibility">
          <div className="space-y-4">{TYPES.map(x => <div key={x.type} className={`rounded-xl border p-5 ${x.color}`}><p className="text-xs font-bold text-gray-500 mb-2">{x.type}</p><h3 className="font-bold text-gray-900 mb-2">{x.title}</h3><p className={paragraph}>{x.text}</p></div>)}</div>
          <p className="text-sm text-gray-600 leading-relaxed">See <a className={link} href="https://www.cms.gov/medicare/medicaid-coordination/about/dsnps">CMS D-SNP guidance</a> and the <a className={link} href="https://www.cms.gov/medicare/enrollment-renewal/special-needs-plans/institutional">institutional SNP requirements</a>. The insurer verifies plan eligibility; a consultation cannot guarantee acceptance.</p>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
            <h3 className="font-bold text-gray-900 mb-2">ESRD is not a blanket exclusion</h3>
            <p className={paragraph}>People with end-stage renal disease can consider Medicare Advantage. Confirm the particular SNP's requirements and check your dialysis facility, kidney specialist, and transplant care team. <a className={link} href="https://www.medicare.gov/basics/end-stage-renal-disease">Medicare's ESRD coverage information</a> explains the available coverage paths.</p>
          </div>
        </Section>

        <Section id="enrollment" title="When Can You Enroll or Change Plans?">
          <p className={paragraph}>The enrollment period depends on your situation and the action you want to take. Having a qualifying condition does not mean every plan change is available year-round.</p>
          <ul className="list-disc pl-6 space-y-3 text-base text-gray-700 leading-relaxed">
            <li><strong>Fall Annual Enrollment:</strong> October 15 through December 7, 2026, for eligible changes starting January 1, 2027.</li>
            <li><strong>Initial enrollment:</strong> Your Medicare start dates and SNP eligibility determine when you can first join.</li>
            <li><strong>Chronic-condition enrollment:</strong> An available C-SNP serving your qualifying condition may have a Special Enrollment Period. Ask when it applies and when that opportunity ends.</li>
            <li><strong>Medicaid or Extra Help:</strong> Eligible people can make certain drug-plan changes once per calendar month, including joining a standalone drug plan and returning from Medicare Advantage with drug coverage to Original Medicare. This does not allow unrestricted monthly switching between all D-SNPs.</li>
            <li><strong>Integrated D-SNP enrollment:</strong> Some people with full Medicaid benefits can join or switch to an integrated D-SNP monthly to align Medicare and Medicaid managed care coverage. Confirm the plan and Medicaid requirements first.</li>
          </ul>
          <p className="text-sm text-gray-600 leading-relaxed">CMS replaced the former quarterly Dual/LIS enrollment framework starting in 2025. Exceptions and restrictions apply. Review the <a className={link} href="https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/joining-a-plan/special-enrollment-periods">official Special Enrollment Period rules</a> and <a className={link} href="https://www.cms.gov/medicare/medicaid-coordination/about/dsnps">CMS monthly enrollment guidance</a> before requesting a change.</p>
          <p className={paragraph}>Our <Link className={link} href="/annual-enrollment-period-guide/">Annual Enrollment resource</Link> and <Link className={link} href="/medicare-advantage-open-enrollment/">Medicare Advantage OEP center</Link> explain the other common review windows. If you lose qualifying status, ask the plan about notices, continued eligibility, and any Special Enrollment Period.</p>
        </Section>

        <Section id="compare" title="Compare the Providers and Prescriptions You Use Locally">
          <p className={paragraph}>A county listing is the starting point. Build your short list around the care you actually use:</p>
          <ol className="list-decimal pl-6 space-y-3 text-base text-gray-700 leading-relaxed">
            <li><strong>Confirm eligibility.</strong> Record the exact plan name and ID, 2027 coverage year, and the Medicaid category, diagnosis, or care-setting requirement to verify.</li>
            <li><strong>Check each provider and office.</strong> List your primary care doctor, specialists, preferred hospital, therapy providers, and any dialysis or other regular treatment facility. Ask both the insurer and the provider to confirm participation in the exact plan.</li>
            <li><strong>Check your prescriptions.</strong> Include names, strengths, quantities, refill frequency, and the exact pharmacy addresses you would use. Ask about prior authorization, step therapy, and quantity limits.</li>
            <li><strong>Read the care rules.</strong> Ask about referrals, prior authorization, out-of-network care, and how to reach care coordination. Confirm what happens when your health or Medicaid status changes.</li>
            <li><strong>Save the documents.</strong> Keep the Summary of Benefits, Evidence of Coverage, formulary, provider confirmations, and the date you reviewed them.</li>
          </ol>
          <p className={paragraph}>Use the <Link className={link} href="/check-medicare-doctor-hospital-networks-brandon-fl/">Brandon doctor and hospital network checklist</Link> and <Link className={link} href="/compare-medicare-prescription-costs-brandon/">prescription cost comparison steps</Link> to organize your questions. Mentioning a local hospital does not confirm it participates in a particular SNP.</p>
        </Section>

        <MedicareCoverageCta description="Explore coverage options in your area. Have your current coverage, providers, prescriptions, and eligibility questions ready." />

        <Section id="costs" title="Check Costs, Care Coordination, and Extra Benefits">
          <p className={paragraph}>Compare the plan premium, medical cost-sharing, drug costs, and applicable out-of-pocket limits. Medicaid or a Medicare Savings Program may help with the Part B premium and other costs. A $0 plan premium alone does not establish that all your care is free.</p>
          <p className={paragraph}>Ask how the care team helps with specialist appointments, medications, or transitions from hospital to home. For advertised dental, transportation, meals, or other extras, check the eligibility conditions, participating providers, allowances, and limits in writing.</p>
          <p className={paragraph}>Extra Help assists with Part D drug costs. Confirm assistance eligibility through the relevant government program, then check how the plan reflects your status. Medicare explains <a className={link} href="https://www.medicare.gov/basics/costs/help/drug-costs">help with drug costs</a> and <a className={link} href="https://www.medicare.gov/basics/costs/help/medicare-savings-programs">Medicare Savings Programs</a>.</p>
        </Section>

        <Section id="prepare" title="Prepare for a Brandon SNP Consultation">
          <p className={paragraph}>Bring your current plan information, Medicare effective dates, Medicaid eligibility notices if applicable, provider list, medication list, and questions about expected care. For a C-SNP, ask what diagnosis confirmation the plan needs. For an I-SNP, ask which facility or assessment information is required.</p>
          <p className={paragraph}>Our team can help compare the plans we represent and identify questions for the insurer, provider, or Medicaid program. Medicare.gov offers information about the full set of available options.</p>
          <div className="rounded-xl border border-[#c9a84c]/30 bg-[#fdf8ee] p-5">
            <h3 className="font-bold text-gray-900 flex items-center gap-2 mb-2"><MapPin size={17} aria-hidden="true" /> Meet locally or talk from home</h3>
            <p className={paragraph}>Medicare Information Project, 915 Oakfield Dr, Suite A, Brandon, FL 33511. Office visits are by appointment. Phone and video conversations are also available for nearby Hillsborough County communities.</p>
            <a href="tel:+18136995559" className="mt-4 inline-flex min-h-11 items-center gap-2 font-bold text-[#0d1f5c]"><Phone size={16} aria-hidden="true" /> 813-699-5559</a>
          </div>
        </Section>

        <Section id="faq" title="Brandon Special Needs Plan FAQs">
          <div className="space-y-3">{SNP_FAQS.map(x => <details key={x.question} className="group rounded-xl border border-gray-200 shadow-sm"><summary className="cursor-pointer p-5 font-bold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1a3fa8]">{x.question}</summary><p className="px-5 pb-5 text-base text-gray-700 leading-relaxed">{x.answer}</p></details>)}</div>
        </Section>

        <Section id="sources" title="Official Sources and Review Date">
          <p className="text-sm text-gray-600 leading-relaxed">Reviewed November 25, 2026. Plan counts use the CMS November 1, 2026 landscape file for coverage year 2027. Rules and plan availability can change. Confirm your eligibility, providers, prescriptions, election period, and effective date before enrolling.</p>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li><a className={link} href="https://www.medicare.gov/health-drug-plans/health-plans/your-health-plan-options/SNP">Medicare: Special Needs Plans</a></li>
            <li><a className={link} href="https://www.cms.gov/medicare/medicaid-coordination/about/dsnps">CMS: D-SNPs and enrollment updates</a></li>
            <li><a className={link} href="https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/joining-a-plan/special-enrollment-periods">Medicare: Special Enrollment Periods</a></li>
            <li><a className={link} href="https://www.cms.gov/files/zip/cy2027-landscape-202611.zip">CMS: CY 2027 landscape data (ZIP)</a></li>
          </ul>
        </Section>
      </article>

      <aside className="w-full lg:w-64 shrink-0 space-y-6 lg:sticky lg:top-28 lg:self-start" aria-label="SNP resources">
        <div className="rounded-xl border border-gray-200 p-5 shadow-sm"><h2 className="text-sm font-bold uppercase text-gray-500 mb-3">On This Page</h2><nav aria-label="Article sections" className="space-y-1">{TOC.map(x => <a key={x.id} href={`#${x.id}`} className="block py-2 text-sm text-gray-700 hover:text-[#1a3fa8] hover:underline">{x.label}</a>)}</nav></div>
        <div className="rounded-xl bg-[#0d1f5c] text-white p-5"><p className="font-bold text-lg">Get Help Comparing SNP Options</p><p className="text-sm text-white/80 mt-3 leading-relaxed">Talk through the plans we represent for your eligibility, providers, and prescriptions.</p><Link href="/get-started/" className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 w-full rounded-lg bg-[#f5a800] px-4 py-3 font-bold text-[#0d1f5c]">Explore Medicare Options <ArrowRight size={16} aria-hidden="true" /></Link></div>
        <div className="rounded-xl border border-gray-200 p-5"><h2 className="font-bold text-gray-900 mb-3 flex gap-2 items-center"><CheckCircle size={17} aria-hidden="true" /> Before You Choose</h2><ul className="list-disc pl-4 space-y-2 text-sm text-gray-700"><li>Plan-specific eligibility</li><li>Doctor and facility network</li><li>Prescription and pharmacy costs</li><li>Medicaid coverage alignment</li><li>Enrollment and start dates</li></ul></div>
      </aside>
    </div>
    <Footer />
  </div>;
}
