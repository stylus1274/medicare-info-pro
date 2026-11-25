import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle, MapPin, Phone, Shield } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumb from "@/components/Breadcrumb";
import MedicareCoverageCta from "@/components/MedicareCoverageCta";
import { PPO_EXAMPLES, PPO_FAQS, PPO_TITLE } from "./PPOContent";

const TOC = [
  { id: "what-is", label: "How a Medicare PPO Works" },
  { id: "local", label: "2027 Hillsborough PPO Options" },
  { id: "examples", label: "Verified Plan Cost Examples" },
  { id: "providers", label: "Tampa Provider Checklist" },
  { id: "authorization", label: "Referrals and Prior Authorization" },
  { id: "ppo-vs-hmo", label: "PPO and HMO Comparison" },
  { id: "costs", label: "Costs and Prescriptions" },
  { id: "travel", label: "Travel and Out-of-State Care" },
  { id: "enrollment", label: "Enrollment and Local Help" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "sources", label: "Official Sources" },
];
const paragraph = "text-base text-gray-700 leading-relaxed";
const link = "font-semibold text-[#1a3fa8] underline underline-offset-2";
function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-28 space-y-4"><h2 id={`${id}-heading`} className="text-xl sm:text-2xl font-bold text-gray-900" style={{ fontFamily: "'Merriweather', serif" }}>{title}</h2>{children}</section>;
}
export default function PPOPlansClient() {
  return <div className="min-h-screen flex flex-col bg-white">
    <Header />
    <section className="bg-[#0d1f5c] text-white px-4 pt-12 pb-14">
      <div className="max-w-5xl mx-auto">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Medicare Advantage", href: "/medicare-advantage/" }, { label: "PPO Plans" }]} className="mb-5" />
        <span className="inline-flex items-center gap-2 text-sm text-[#f5a800] font-bold mb-4"><Shield size={16} aria-hidden="true" /> TAMPA, BRANDON, AND HILLSBOROUGH COUNTY</span>
        <h1 className="text-3xl sm:text-4xl font-black leading-tight mb-4" style={{ fontFamily: "'Merriweather', serif" }}>{PPO_TITLE}</h1>
        <p className="text-base leading-relaxed text-white/85 max-w-2xl">Compare 2027 Medicare Advantage PPO options using your doctors, prescriptions, expected care, and budget. Check the exact plan's network and coverage rules before choosing.</p>
        <p className="mt-5 text-sm text-white/70">Updated November 25, 2026 · Coverage year 2027</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7">{[{ value: "25", label: "County PPO plan IDs" }, { value: "19", label: "Non-SNP options" }, { value: "6", label: "SNP options" }, { value: "2027", label: "Coverage year" }].map(x => <div key={x.label} className="rounded-xl bg-white/10 p-4 text-center"><p className="text-2xl font-black">{x.value}</p><p className="text-xs sm:text-sm text-white/75 mt-1">{x.label}</p></div>)}</div>
        <p className="mt-3 text-xs text-white/65">Includes local and Regional PPOs in the CMS November 2026 landscape file. Eligibility and availability vary.</p>
      </div>
    </section>
    <div className="max-w-5xl mx-auto px-4 py-12 w-full flex flex-col lg:flex-row gap-10">
      <article className="flex-1 min-w-0 space-y-10">
        <Section id="what-is" title="How Does a Medicare Advantage PPO Work?">
          <p className={paragraph}>A Preferred Provider Organization (PPO) is a Medicare Advantage plan with a provider network. Covered care generally costs less in network. Out-of-network care is generally available at a higher cost, subject to the plan's coverage rules.</p>
          <p className={paragraph}>PPOs do not require specialist referrals. You may still need prior authorization for certain services. Before routine out-of-network care, confirm the service with the insurer and ask the provider whether it will treat you under your PPO. Medicare explains the <a className={link} href="https://www.medicare.gov/health-drug-plans/health-plans/your-health-plan-options/PPO">PPO coverage rules</a>.</p>
        </Section>
        <Section id="local" title="2027 PPO Options in Hillsborough County">
          <p className={paragraph}>CMS lists 25 unique PPO and Regional PPO contract-plan IDs for Hillsborough County in its November 2026 landscape file. Nineteen are non-SNP plans: 14 local PPOs and five Regional PPOs. Six additional options are Special Needs Plans with extra eligibility requirements.</p>
          <p className={paragraph}>Among the 19 non-SNP options, 11 include Part D and eight do not. If you want prescription coverage through a PPO, check that it includes Part D. Our <Link className={link} href="/medicare-snp-plans/">Brandon Special Needs Plan resource</Link> explains SNP eligibility.</p>
          <p className="text-sm text-gray-600 leading-relaxed">Method: unique contract-plan IDs with a PPO plan type, filtered to Florida and Hillsborough County in the <a className={link} href="https://www.cms.gov/files/zip/cy2027-landscape-202611.zip">CMS CY 2027 landscape file (ZIP)</a>, updated November 1, 2026. The file excludes employer-sponsored, Part B-only, and national PACE plans. Tampa Bay spans several counties; this inventory covers Hillsborough only. Confirm current options for your residential address.</p>
          <p className={paragraph}>The <Link className={link} href="/best-medicare-advantage-plans-hillsborough-county/">2027 Hillsborough County Medicare Advantage guide</Link> compares the broader set of plan types. You can review all available options through <a className={link} href="https://www.medicare.gov/plan-compare/">Medicare Plan Finder</a>.</p>
        </Section>
        <Section id="examples" title="Verified 2027 PPO Plan Cost Examples">
          <p className={paragraph}>These non-SNP county listings include Part D and illustrate differences in listed premiums and medical out-of-pocket limits. Use the exact name and plan ID when checking the 2027 documents.</p>
          <div className="overflow-x-auto rounded-xl border border-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1a3fa8]" tabIndex={0} role="region" aria-label="2027 Hillsborough County Medicare PPO plan examples">
            <table className="w-full min-w-[580px] text-sm text-left"><caption className="p-4 text-left font-semibold text-gray-700">Selected CMS county listings for coverage year 2027</caption><thead className="bg-[#0d1f5c] text-white"><tr><th scope="col" className="p-3">Plan and ID</th><th scope="col" className="p-3">Monthly plan premium, Parts C + D</th><th scope="col" className="p-3">Annual in-network medical limit</th></tr></thead><tbody>{PPO_EXAMPLES.map(x => <tr key={x.id} className="border-t border-gray-100"><th scope="row" className="p-3 font-semibold text-gray-900">{x.name}<span className="block mt-1 text-xs font-normal text-gray-600">{x.id}</span></th><td className="p-3 align-top">{x.premium}</td><td className="p-3 align-top">{x.moop}</td></tr>)}</tbody></table>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">Source: the November 1, 2026 CMS landscape file linked above. Examples were selected to show different premiums and local/Regional PPO structures. The premium shown excludes your Part B premium. Check the combined in-network/out-of-network medical limit separately. Drug spending and premiums are separate from the medical limit. Confirm current benefits, providers, and personal costs with the insurer before enrolling.</p>
          <p className={paragraph}>An agent can explain which plans they represent. A lower premium or lower medical limit does not establish which plan fits your providers and expected care.</p>
        </Section>
        <Section id="providers" title="A Tampa and Brandon Provider-Verification Checklist">
          <p className={paragraph}>If you use Tampa General, St. Joseph's, HCA Florida Brandon Hospital, or another local facility, verify the facility and your treating clinicians separately. A hospital name in a comparison does not confirm network participation.</p>
          <ol className="list-decimal pl-6 space-y-3 text-base text-gray-700 leading-relaxed">
            <li><strong>Record the exact plan.</strong> Save the full plan name, contract and plan ID, coverage year, and your home address.</li>
            <li><strong>List each physician and office.</strong> Include primary care, specialists, and regular therapies. Record the specific practice location.</li>
            <li><strong>Ask both parties.</strong> Contact the insurer and the provider's billing or insurance staff. Ask whether the physician at that location participates in the exact 2027 network.</li>
            <li><strong>Check facilities separately.</strong> Confirm the hospital, outpatient center, lab, imaging site, and other clinicians involved in expected procedures.</li>
            <li><strong>Resolve out-of-network questions.</strong> Ask the provider whether it will treat you and ask the insurer about coverage, authorization, cost-sharing, and any applicable medical limit.</li>
            <li><strong>Save the confirmation.</strong> Note the date, contact, and reference number. Keep the relevant directory and benefit documents with your comparison.</li>
          </ol>
          <p className={paragraph}>Use the <Link className={link} href="/check-medicare-doctor-hospital-networks-brandon-fl/">doctor and hospital network checklist</Link> to prepare your calls. Recheck participation each plan year and before scheduling significant care.</p>
        </Section>
        <MedicareCoverageCta description="Explore Medicare options for your Tampa or Brandon address. Have your provider list, prescriptions, and coverage questions ready." />
        <Section id="authorization" title="Referrals and Prior Authorization Are Different">
          <p className={paragraph}>A referral is a request from your doctor to see a specialist. Prior authorization is approval from the insurance plan for a service or item. A PPO's referral policy does not remove the insurer's authorization requirements.</p>
          <p className={paragraph}>For imaging, outpatient surgery, therapy, or ongoing treatment, ask: Is this covered? Is authorization required? Who submits it? Does the approval cover this provider and facility? What cost-sharing applies? Save the answer before scheduling when advance confirmation is possible.</p>
          <p className="text-sm text-gray-600 leading-relaxed">Medicare's <a className={link} href="https://www.medicare.gov/health-drug-plans/health-plans/your-coverage-options/compare">plan-type comparison</a> explains that Medicare Advantage plans typically require authorization for certain services or supplies. Our <Link className={link} href="/medicare-outpatient-surgery-coverage-brandon-fl/">Brandon outpatient surgery resource</Link> offers additional preparation questions.</p>
        </Section>
        <Section id="ppo-vs-hmo" title="Compare PPO and HMO Rules for Your Care">
          <div className="overflow-x-auto rounded-xl border border-gray-200" tabIndex={0} role="region" aria-label="PPO and HMO coverage rules"><table className="w-full min-w-[440px] text-sm text-left"><caption className="text-left p-4 font-semibold text-gray-700">Common network and access differences</caption><thead className="bg-[#0d1f5c] text-white"><tr><th scope="col" className="p-3">Question</th><th scope="col" className="p-3">PPO</th><th scope="col" className="p-3">HMO</th></tr></thead><tbody>{[
            ["Specialist referrals", "Not required", "Usually required"],
            ["Routine out-of-network care", "Generally covered at higher cost; confirm the service and provider", "Generally network-based; HMO-POS may allow certain out-of-network services"],
            ["Prior authorization", "May apply", "May apply"],
            ["Emergency and urgent care", "Covered; check plan terms", "Network exceptions apply, including out-of-area urgent care and dialysis"],
            ["Premiums and medical limits", "Compare the exact plan", "Compare the exact plan"],
          ].map(row => <tr key={row[0]} className="border-t border-gray-100"><th scope="row" className="p-3 font-semibold">{row[0]}</th><td className="p-3 align-top text-gray-700">{row[1]}</td><td className="p-3 align-top text-gray-700">{row[2]}</td></tr>)}</tbody></table></div>
          <p className={paragraph}>Compare the actual network and benefits for each candidate. The plan type alone does not determine the lowest total cost or the best access for your situation. Medicare provides the <a className={link} href="https://www.medicare.gov/health-drug-plans/health-plans/your-coverage-options/compare">official plan-type comparison</a>.</p>
        </Section>
        <Section id="costs" title="Compare Total Costs and Prescription Coverage">
          <p className={paragraph}>Record the premium, applicable deductibles, expected visit and procedure cost-sharing, and both medical out-of-pocket limits. Include a typical care year and a higher-use year in your comparison. Ask about coverage exclusions and extra-benefit limits.</p>
          <p className={paragraph}>The standard Part B premium is $209.40 per month in 2027, with higher amounts for some people. Assistance or a plan's premium-reduction benefit may affect what you pay. Medicare lists <a className={link} href="https://www.medicare.gov/basics/costs/medicare-costs">current Medicare costs</a> and <a className={link} href="https://www.medicare.gov/health-drug-plans/health-plans/costs">health plan cost factors</a>.</p>
          <p className={paragraph}>Enter your exact medications, strengths, quantities, and pharmacies in Plan Finder. Check the formulary and restrictions. You cannot add a separate Part D plan to a Medicare Advantage PPO without drug coverage. Joining standalone drug coverage can disenroll you from Medicare Advantage. Review <Link className={link} href="/compare-medicare-prescription-costs-brandon/">prescription cost comparison steps</Link> and Medicare's <a className={link} href="https://www.medicare.gov/health-drug-plans/health-plans/your-health-plan-options/PPO">PPO drug coverage rules</a> before changing coverage.</p>
        </Section>
        <Section id="travel" title="Check Care Outside Florida Before You Travel">
          <p className={paragraph}>If you spend part of the year in another state, list the doctors, facilities, and pharmacies you would use there. Ask about routine out-of-network care, network or visitor arrangements, authorization, costs, and how time away affects enrollment.</p>
          <p className={paragraph}>Emergency or urgent care coverage does not establish that a routine visit has the same terms. Keep a written record of plan and provider confirmations. The <Link className={link} href="/original-vs-advantage/">Original Medicare and Medicare Advantage comparison</Link> can help you consider another coverage path as well.</p>
        </Section>
        <Section id="enrollment" title="Enrollment Dates and Local PPO Comparison Help">
          <p className={paragraph}>You need Parts A and B, an address in the service area, and an available enrollment period. Fall Annual Enrollment runs October 15 through December 7, 2026, for eligible changes beginning January 1, 2027. People already in Medicare Advantage have a January 1 through March 31 Open Enrollment Period. Initial and Special Enrollment Periods depend on your situation.</p>
          <p className={paragraph}>Check Medicare's <a className={link} href="https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/joining-a-plan">enrollment rules</a> and our <Link className={link} href="/medicare-advantage-open-enrollment/">Medicare Advantage OEP center</Link> before submitting a change.</p>
          <div className="rounded-xl border border-[#c9a84c]/30 bg-[#fdf8ee] p-5"><h3 className="font-bold text-gray-900 flex gap-2 items-center mb-2"><MapPin size={17} aria-hidden="true" /> Talk with a local Medicare agent</h3><p className={paragraph}>Our team helps compare the plans we represent for Tampa, Brandon, and nearby Hillsborough communities. Office visits at 915 Oakfield Dr, Suite A, Brandon, FL 33511 are by appointment. Phone and video conversations are also available.</p><a className="mt-4 inline-flex items-center min-h-11 gap-2 font-bold text-[#0d1f5c]" href="tel:+18136995559"><Phone size={16} aria-hidden="true" /> 813-699-5559</a></div>
        </Section>
        <Section id="faq" title="Tampa Medicare PPO FAQs"><div className="space-y-3">{PPO_FAQS.map(x => <details key={x.question} className="rounded-xl border border-gray-200 shadow-sm"><summary className="cursor-pointer p-5 font-bold text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1a3fa8]">{x.question}</summary><p className="px-5 pb-5 text-base text-gray-700 leading-relaxed">{x.answer}</p></details>)}</div></Section>
        <Section id="sources" title="Official Sources and Review Date">
          <p className="text-sm text-gray-600 leading-relaxed">Reviewed November 25, 2026. Local counts and example plan figures use the CMS landscape updated November 1, 2026, for coverage year 2027. Confirm current plan availability and benefits before enrollment.</p>
          <ul className="list-disc pl-5 space-y-2 text-sm"><li><a className={link} href="https://www.cms.gov/files/zip/cy2027-landscape-202611.zip">CMS: CY 2027 landscape file (ZIP)</a></li><li><a className={link} href="https://www.medicare.gov/health-drug-plans/health-plans/your-health-plan-options/PPO">Medicare: PPO plans</a></li><li><a className={link} href="https://www.medicare.gov/health-drug-plans/health-plans/your-coverage-options/compare">Medicare: Compare plan types</a></li><li><a className={link} href="https://www.medicare.gov/basics/get-started-with-medicare/get-more-coverage/joining-a-plan">Medicare: Joining a plan</a></li></ul>
        </Section>
      </article>
      <aside className="w-full lg:w-64 shrink-0 space-y-6 lg:sticky lg:top-28 lg:self-start" aria-label="PPO resources">
        <div className="rounded-xl border border-gray-200 p-5 shadow-sm"><h2 className="text-sm font-bold uppercase text-gray-500 mb-3">On This Page</h2><nav aria-label="Article sections" className="space-y-1">{TOC.map(x => <a key={x.id} href={`#${x.id}`} className="block py-2 text-sm text-gray-700 hover:text-[#1a3fa8] hover:underline">{x.label}</a>)}</nav></div>
        <div className="rounded-xl bg-[#0d1f5c] text-white p-5"><p className="font-bold text-lg">Compare Your 2027 PPO Options</p><p className="text-sm text-white/80 mt-3 leading-relaxed">Bring your doctors, medications, current plan details, and questions about expected care.</p><Link href="/get-started/" className="mt-5 inline-flex min-h-11 items-center justify-center gap-2 w-full rounded-lg bg-[#f5a800] px-4 py-3 font-bold text-[#0d1f5c]">Explore Medicare Options <ArrowRight size={16} aria-hidden="true" /></Link></div>
        <div className="rounded-xl border border-gray-200 p-5"><h2 className="font-bold text-gray-900 flex items-center gap-2 mb-3"><CheckCircle size={17} aria-hidden="true" /> Before You Enroll</h2><ul className="list-disc pl-4 space-y-2 text-sm text-gray-700"><li>Exact plan name and ID</li><li>Provider and facility confirmation</li><li>Authorization requirements</li><li>Prescription and pharmacy costs</li><li>Medical limits and start date</li></ul></div>
      </aside>
    </div>
    <Footer />
  </div>;
}
