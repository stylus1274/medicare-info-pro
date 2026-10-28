import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Header from "@/components/Header";
import Footer from "../homepage-aep/AepFooter";
import ConsultationForm from "../homepage-aep/ConsultationForm";
import styles from "../homepage-aep/homepage-aep.module.css";
import { ArrowRight, Phone, MapPin, Check, ShieldCheck } from "lucide-react";

const url = "https://medicareinfopro.com/medicare-advantage-plans-brandon-florida/";
const title = "Medicare Advantage Plans in Brandon, FL | MIP";
const description = "Compare Medicare Advantage plans in Brandon, FL. Review doctor networks, prescriptions, and costs with a local agent. Request a free consultation.";
export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: url }, robots: { index: true, follow: true },
  openGraph: { title, description, url, type: "website", images: [{ url: "/images/aep-plan-review-hero.webp", alt: "A couple reviewing coverage choices with an advisor" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/aep-plan-review-hero.webp"] },
};
const faqs = [
  { q: "Where Can I Compare Medicare Advantage Plans in Brandon?", a: "Medicare Information Project offers no-cost consultations by phone, video, or appointment at 915 Oakfield Dr, Suite A, Brandon, FL 33511. We compare the plans we represent for your service area and coverage year. Call 813-699-5559 or request a consultation on this page." },
  { q: "Will My Brandon Doctors and Hospital Be In Network?", a: "It depends on the exact plan, provider, location, and coverage year. Check the plan directory and confirm participation with both the plan and provider’s office. A hospital’s participation does not confirm every clinician there. Accepting Medicare alone does not confirm Medicare Advantage network participation." },
  { q: "Does a $0 Plan Premium Mean My Care Is Free?", a: "No. You generally still pay your Part B premium, and deductibles, copayments, or coinsurance may apply. Review expected medical and prescription spending, plus the plan’s medical out-of-pocket limit. Extra benefits can have separate limits and conditions." },
  { q: "How Do You Check My Prescription Costs?", a: "Use each medication’s name, dosage, quantity, and refill frequency, plus your preferred pharmacy. Check the exact plan’s drug list, tiers, deductible, and coverage rules. An estimate can change if your prescriptions, pharmacy, or coverage change." },
  { q: "Can I Join a Medicare Advantage Plan From January Through March?", a: "The January 1 through March 31 Medicare Advantage Open Enrollment Period is for people already enrolled in Medicare Advantage. It generally allows one change to another Advantage plan or a return to Original Medicare with an opportunity to join Part D. Other enrollment periods depend on your circumstances." },
  { q: "Can I Add Medigap to a Medicare Advantage Plan?", a: "No. Medigap supplements Original Medicare and does not pay Medicare Advantage cost sharing. If you are considering returning to Original Medicare, check your opportunity to leave the Advantage plan, Medigap acceptance, drug coverage, and effective dates before changing coverage." },
  { q: "Is There a Charge for Your Plan Comparison?", a: "There is no consultation fee. Agents may receive compensation from insurance carriers when an enrollment is completed. Insurance premiums and other coverage costs still apply. Ask which plans the agency represents before making a decision." },
];
const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "WebPage", "@id": `${url}#webpage`, url, name: title, description, isPartOf: { "@id": "https://medicareinfopro.com/#website" }, about: { "@id": `${url}#service` } },
  { "@type": "Service", "@id": `${url}#service`, name: "Medicare Advantage Plan Comparison in Brandon", serviceType: "Medicare Advantage insurance consultation", url, provider: { "@id": "https://medicareinfopro.com/#organization" }, areaServed: { "@type": "City", name: "Brandon" } },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://medicareinfopro.com/" }, { "@type": "ListItem", position: 2, name: "Medicare Advantage Plans in Brandon", item: url }] },
  { "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
] };

export default function Page() {
  return <div className={styles.page} style={{ "--aep-announcement-height": "0px" } as CSSProperties}>
    <a className={styles.skip} href="#main-content">Skip to content</a><Header />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className={styles.hero}><div className={styles.wrap + " " + styles.heroGrid}>
        <div className={styles.heroCopy}><p className={styles.eyebrow}><MapPin size={16} /> LOCAL HELP COMPARING COVERAGE</p>
          <h1>Medicare Advantage Plans in Brandon, FL</h1>
          <p className={styles.intro}>Your doctors, prescriptions, and budget should guide your comparison. Medicare Information Project helps you review the Medicare Advantage plans we represent and identify the details to confirm before enrolling.</p>
          <div className={styles.actions}><a className={styles.primary} href="#consultation">Compare My Advantage Options <ArrowRight size={18} /></a><a className={styles.secondary} href="#callback">Request a Callback <Phone size={18} /></a></div>
          <p className={styles.small}>No-cost consultations by phone, video, or appointment at our Brandon office.</p>
        </div><div className={styles.heroPhoto}><img src="/images/aep-plan-review-hero.webp" alt="A couple discussing coverage choices with an advisor" width="1672" height="941" fetchPriority="high" /></div>
      </div></section>
      <div className={styles.trust}><span><ShieldCheck /> Licensed independent agents</span><span><MapPin /> 915 Oakfield Dr, Suite A</span><span><Check /> No obligation to enroll</span></div>
      <section className={styles.section}><div className={styles.wrap}>
        <p className={styles.eyebrow}>START WITH WHAT YOU USE</p><h2>Three Checks Before Choosing a Plan</h2>
        <p className={styles.lead}>Medicare Advantage, also called Part C, is a private-plan way to receive your Part A and Part B benefits. Most plans include drug coverage. Benefits, networks, and costs depend on the exact plan and year.</p>
        <div className={styles.three}>
          <div className={styles.card}><h3>Doctors and Hospitals</h3><p>Check your primary doctor, specialists, preferred hospital, and care locations against the exact plan. Confirm with the plan and provider’s office. A familiar insurer name does not establish network access.</p><a className={styles.textLink} href="/check-medicare-doctor-hospital-networks-brandon-fl/">Use the provider-network checklist <ArrowRight size={18} /></a></div>
          <div className={styles.card}><h3>Prescriptions and Pharmacies</h3><p>Compare each medication’s dosage and refill quantity at your preferred pharmacies. Check drug tiers and rules such as prior authorization, step therapy, and quantity limits.</p><a className={styles.textLink} href="/compare-medicare-prescription-costs-brandon/">Prepare your prescription comparison <ArrowRight size={18} /></a></div>
          <div className={styles.card}><h3>Total Costs</h3><p>Review premiums, deductibles, medical copays, and prescription spending together. Compare a typical year with a year involving more care. The lowest premium does not necessarily mean the lowest total cost.</p><a className={styles.textLink} href="#costs">See what to include <ArrowRight size={18} /></a></div>
        </div>
      </div></section>
      <section className={styles.resourceSection}><div className={styles.wrap}>
        <p className={styles.eyebrow}>UNDERSTAND THE PLAN’S RULES</p><h2>HMO, PPO, and Special Needs Plans</h2>
        <div className={styles.three}>
          <div className={styles.card}><h3>HMO Plans</h3><p>You generally use network providers, with exceptions for emergency care, out-of-area urgent care, and temporary out-of-area dialysis. Specialist referrals are usually required. Some HMO Point-of-Service plans allow certain out-of-network services at higher costs.</p></div>
          <div className={styles.card}><h3>PPO Plans</h3><p>You generally pay less in network and can receive covered services out of network at higher costs. Specialist referrals are not required. Confirm coverage, provider willingness to treat you, and any prior authorization before arranging out-of-network care.</p></div>
          <div className={styles.card}><h3>Special Needs Plans</h3><p>Eligibility depends on the plan’s requirements. D-SNPs serve eligible people with Medicare and Medicaid; other SNPs serve certain chronic conditions or institutional care needs. Availability and eligibility must be confirmed. SNPs follow HMO or PPO network rules.</p></div>
        </div>
        <a className={styles.textLink} href="https://www.medicare.gov/health-drug-plans/health-plans/your-coverage-options/compare">Review Medicare’s plan-type comparison <ArrowRight size={18} /></a>
      </div></section>
      <section id="costs" className={styles.section}><div className={styles.wrap}>
        <p className={styles.eyebrow}>LOOK BEYOND THE MONTHLY PREMIUM</p><h2>Compare What You Could Pay Throughout the Year</h2>
        <div className={styles.officeGrid}>
          <div className={styles.card}><h3>Routine and Higher-Use Care</h3><p>Check primary and specialist visits, tests, outpatient procedures, hospital stays, therapy, and equipment. Ask how referrals and prior authorization affect access. You generally continue paying your Part B premium even with a $0 plan premium.</p></div>
          <div className={styles.card}><h3>Limits and Extra Benefits</h3><p>Review the medical out-of-pocket limit and any separate out-of-network limit. Drug costs follow separate Part D rules. Check dental allowances, benefit networks, exclusions, and frequency limits instead of assuming an advertised benefit covers every expense.</p></div>
        </div>
        <p style={{ marginTop: 24 }}>Use the plan’s Summary of Benefits for a starting comparison and its Evidence of Coverage for detailed rules. Confirm the plan name, identifier, service area, and coverage year. A directory or cost estimate is not a guarantee of future participation or payment.</p>
      </div></section>
      <section className={styles.localSection}><div className={styles.wrap}>
        <p className={styles.eyebrow}>CHECK THE YEAR AND ENROLLMENT WINDOW</p><h2>When Can You Join or Change Medicare Advantage?</h2>
        <div className={styles.three}>
          <div className={styles.card}><h3>Getting Started</h3><p>You need Parts A and B, must live in the plan’s service area, and need an applicable enrollment period. Your dates depend on when Medicare starts and your circumstances.</p><a className={styles.textLink} href="/medicare-enrollment-assistance-in-brandon-fl/">Get enrollment help <ArrowRight size={18} /></a></div>
          <div className={styles.card}><h3>Fall Open Enrollment</h3><p>October 15 through December 7 is the annual opportunity for eligible plan changes, generally effective January 1 of the next year. Compare the coming year’s benefits and networks, not just your current documents.</p><a className={styles.textLink} href="/annual-enrollment-period-guide/">Read the Annual Enrollment guide <ArrowRight size={18} /></a></div>
          <div className={styles.card}><h3>Other Opportunities</h3><p>January 1 through March 31 allows certain changes for people already in Medicare Advantage. Qualifying circumstances may create a Special Enrollment Period. Confirm eligibility and effective dates before applying.</p><a className={styles.textLink} href="https://www.medicare.gov/sign-up-change-plans/joining-a-health-or-drug-plan">Check official enrollment guidance <ArrowRight size={18} /></a></div>
        </div>
        <div className={styles.officeCard} style={{ marginTop: 30 }}><h3>Still Comparing Medicare Advantage and Medigap?</h3><p>Medigap works alongside Original Medicare, with different costs and enrollment protections. It cannot pay Medicare Advantage cost sharing. Before leaving existing coverage, confirm your next coverage and its effective dates.</p><a className={styles.textLink} href="/medicare-supplement-insurance-plans-brandon/">Explore Brandon Medicare Supplement options <ArrowRight size={18} /></a></div>
      </div></section>
      <section className={styles.section}><div className={styles.wrap}>
        <p className={styles.eyebrow}>MAKE YOUR CONSULTATION USEFUL</p><h2>Bring the Details That Shape Your Comparison</h2>
        <div className={styles.officeGrid}>
          <div className={styles.officePrep}><p>Have your provider names and office locations, medication list, pharmacies, current plan card, and any annual change notice available. Mention travel or time spent away from home so you can ask about non-emergency care outside the service area.</p><p style={{ marginTop: 18 }}>We help organize comparisons and applications for the plans we represent. The insurer determines coverage under the policy. Keep Medicare numbers and medical details for the appropriate secure process; do not enter them in the website form.</p><a className={styles.textLink} href="/our-team/">Meet the licensed team <ArrowRight size={18} /></a></div>
          <div className={styles.officeCard}><MapPin size={28} /><h3>Visit Our Brandon Office</h3><address>Medicare Information Project<br />915 Oakfield Dr, Suite A<br />Brandon, FL 33511</address><p className={styles.appointmentNote}>Office visits are by appointment. Phone and video consultations are also available for Brandon and nearby communities.</p><div className={styles.actions}><a className={styles.secondary} href="tel:+18136995559"><Phone size={18} />813-699-5559</a></div></div>
        </div>
      </div></section>
      <ConsultationForm service="advantage" />
      <section className={styles.faq}><div className={styles.wrap + " " + styles.two}>
        <div><p className={styles.eyebrow}>QUESTIONS BEFORE YOU CHOOSE</p><h2>Brandon Medicare Advantage FAQs</h2><p>Need an overview of your coverage paths? Visit our <a href="/medicare-brandon-fl/">Brandon Medicare resource center</a>.</p></div>
        <div>{faqs.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div></section>
      <section className={styles.resourceSection}><div className={styles.wrap}><h2>Official Medicare Resources</h2>
        <p className={styles.lead}>Information checked October 28, 2026. Confirm current plan details and enrollment eligibility before making a change.</p>
        <div className={styles.serviceLinks}><a href="https://www.medicare.gov/plan-compare/">Compare all available plans on Medicare.gov</a><a href="https://www.medicare.gov/health-drug-plans/health-plans/costs">Understand health plan costs</a><a href="https://www.medicare.gov/health-drug-plans/part-d/what-drug-plans-cover/plan-rules">Check drug coverage rules</a><a href="https://www.medicare.gov/health-drug-plans/open-enrollment">Review fall enrollment options</a></div>
        <p style={{ marginTop: 26, fontSize: 15 }}>We do not offer every plan available in your area. For information on all options, contact Medicare.gov, 1-800-MEDICARE, or your State Health Insurance Assistance Program. MIP is not affiliated with or endorsed by the U.S. government or the federal Medicare program.</p>
      </div></section>
    </main><Footer />
  </div>;
}
