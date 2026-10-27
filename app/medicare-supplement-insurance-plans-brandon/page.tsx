import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Header from "@/components/Header";
import Footer from "../homepage-aep/AepFooter";
import ConsultationForm from "../homepage-aep/ConsultationForm";
import styles from "../homepage-aep/homepage-aep.module.css";
import { ArrowRight, Phone, MapPin, Check, ShieldCheck } from "lucide-react";

const url = "https://medicareinfopro.com/medicare-supplement-insurance-plans-brandon/";
const title = "Medicare Supplement Plans in Brandon, FL | MIP";
const description = "Compare Medicare Supplement plans in Brandon, FL. Get local help with Medigap benefits, premiums, and enrollment. Request a free consultation.";
export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: url },
  robots: { index: true, follow: true },
  openGraph: { title, description, url, type: "website", images: [{ url: "/images/aep-plan-review-hero.webp", alt: "A couple reviewing insurance options with an advisor" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/aep-plan-review-hero.webp"] },
};
const faqs = [
  { q: "Where Can I Compare Medicare Supplement Plans in Brandon?", a: "Medicare Information Project offers no-cost consultations by phone, video, or appointment at 915 Oakfield Dr, Suite A, Brandon, FL 33511. We compare the Medigap policies we represent and explain the application process. Call 813-699-5559 or request a consultation on this page." },
  { q: "How Much Does Medigap Cost in Brandon?", a: "There is no single Brandon premium. Ask for a current quote for your ZIP code, plan letter, and eligibility details. Compare standard policies separately from high-deductible or Medicare SELECT policies. Your Medigap premium is separate from your Part B premium and any drug-plan premium." },
  { q: "What Is the Difference Between Plan G and Plan N?", a: "Neither pays the Part B deductible. Standard Plan G covers Part B excess charges. Plan N does not, and includes copayments of up to $20 for some office visits and up to $50 for emergency room visits without inpatient admission. Compare the premium difference against those possible costs." },
  { q: "Can I Keep My Doctors With a Medigap Policy?", a: "For a standard Medigap policy, you can generally use providers nationwide who accept Medicare. Verify that each provider accepts Medicare and is accepting patients. Medicare SELECT policies can have provider restrictions. Do not assume a named hospital or every clinician at that facility participates." },
  { q: "Does Fall Open Enrollment Guarantee I Can Buy Medigap?", a: "No. The October 15 through December 7 period for Medicare Advantage and Part D changes does not create a new Medigap Open Enrollment Period. Outside protected enrollment opportunities, medical underwriting may apply. Confirm your rights and acceptance before changing existing coverage." },
  { q: "Does a New Medigap Policy Include Prescription Coverage?", a: "No. New Medigap policies do not include Part D prescription coverage. A separate drug-plan review helps you check your medications and pharmacies. Medigap also does not pay the cost sharing of a Medicare Advantage plan." },
  { q: "Can You Help if My Supplement Premium Increased?", a: "Yes. Bring your renewal notice and current plan information. We can compare the policies we represent and discuss application requirements. A lower quote is not an approval or a promise of future savings. Keep existing coverage until acceptance and replacement effective dates are confirmed." },
];
const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "WebPage", "@id": `${url}#webpage`, url, name: title, description, isPartOf: { "@id": "https://medicareinfopro.com/#website" }, about: { "@id": `${url}#service` } },
  { "@type": "Service", "@id": `${url}#service`, name: "Medicare Supplement Plan Comparison in Brandon", serviceType: "Medicare Supplement insurance consultation", url, provider: { "@id": "https://medicareinfopro.com/#organization" }, areaServed: { "@type": "City", name: "Brandon" } },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://medicareinfopro.com/" }, { "@type": "ListItem", position: 2, name: "Medicare Supplement Plans in Brandon", item: url }] },
  { "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
] };

export default function Page() {
  return <div className={styles.page} style={{ "--aep-announcement-height": "0px" } as CSSProperties}>
    <a className={styles.skip} href="#main-content">Skip to content</a><Header />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className={styles.hero}><div className={styles.wrap + " " + styles.heroGrid}>
        <div className={styles.heroCopy}><p className={styles.eyebrow}><MapPin size={16} /> LOCAL HELP WITH MEDIGAP</p>
          <h1>Medicare Supplement Plans in Brandon, FL</h1>
          <p className={styles.intro}>Compare coverage alongside Original Medicare with a licensed local agent. Medicare Information Project helps you understand plan benefits, request current premiums, and check enrollment requirements before you decide.</p>
          <div className={styles.actions}><a className={styles.primary} href="#consultation">Compare My Supplement Options <ArrowRight size={18} /></a><a className={styles.secondary} href="#callback">Request a Callback <Phone size={18} /></a></div>
          <p className={styles.small}>No-cost consultations. We compare the policies we represent. No obligation to enroll.</p>
        </div><div className={styles.heroPhoto}><img src="/images/aep-plan-review-hero.webp" alt="A couple discussing insurance choices with an advisor" width="1672" height="941" fetchPriority="high" /></div>
      </div></section>
      <div className={styles.trust}><span><ShieldCheck /> Licensed independent agents</span><span><MapPin /> Brandon office consultations</span><span><Check /> Phone and video appointments</span></div>
      <section className={styles.section}><div className={styles.wrap}>
        <p className={styles.eyebrow}>START WITH THE COVERAGE PATH</p><h2>What Does Medicare Supplement Insurance Do?</h2>
        <p className={styles.lead}>Medicare Supplement insurance, also called Medigap, helps pay certain deductibles, coinsurance, and copayments under Original Medicare. You generally need Parts A and B. It supplements Original Medicare and cannot be used to pay Medicare Advantage cost sharing.</p>
        <div className={styles.three}>
          <div className={styles.card}><h3>Understand the Plan Letter</h3><p>The same standardized plan letter provides the same basic benefits across insurers. Start with the coverage you want, then compare that policy type between companies.</p><a className={styles.textLink} href="/medicare-supplement/">Explore Medigap basics <ArrowRight size={18} /></a></div>
          <div className={styles.card}><h3>Check Provider Access</h3><p>Standard Medigap generally works with providers who accept Medicare nationwide. Medicare SELECT policies may have provider restrictions. Confirm participation directly with your doctors.</p><a className={styles.textLink} href="https://www.medicare.gov/health-drug-plans/medigap/basics/coverage">See Medicare’s coverage explanation <ArrowRight size={18} /></a></div>
          <div className={styles.card}><h3>Plan for Prescriptions</h3><p>New Medigap policies do not include prescription drug coverage. Discuss a separate Part D plan and check the medications and pharmacies you use.</p><a className={styles.textLink} href="/medicare-part-d/">Review prescription coverage <ArrowRight size={18} /></a></div>
        </div>
      </div></section>
      <section className={styles.resourceSection}><div className={styles.wrap}>
        <p className={styles.eyebrow}>COMPARE BENEFITS BEFORE PREMIUMS</p><h2>Plan G, Plan N, and High-Deductible Plan G</h2>
        <p className={styles.lead}>These options illustrate different ways to share costs. Availability and eligibility must be checked. Other standardized plans may also fit your situation.</p>
        <div className={styles.three}>
          <div className={styles.card}><h3>Standard Plan G</h3><p>Covers the Part A deductible and Part B coinsurance and excess charges. You pay the Part B deductible. Compare its premium against the other options you are eligible to buy.</p></div>
          <div className={styles.card}><h3>Plan N</h3><p>You pay the Part B deductible, possible excess charges, and certain office and emergency-room copayments. Ask whether the premium savings justify those possible costs for you.</p></div>
          <div className={styles.card}><h3>High-Deductible Plan G</h3><p>You pay Medicare-covered costs until the policy’s annual deductible is met before it pays benefits. Confirm the current deductible and compare your total exposure, not just the monthly premium.</p></div>
        </div>
        <a className={styles.textLink} href="https://www.medicare.gov/health-drug-plans/medigap/basics/compare-plan-benefits">Check Medicare’s full benefit comparison <ArrowRight size={18} /></a>
      </div></section>
      <section className={styles.section}><div className={styles.wrap}>
        <p className={styles.eyebrow}>REQUEST A CURRENT QUOTE</p><h2>How We Compare Medigap Costs for You</h2>
        <p className={styles.lead}>A broad online price range cannot tell you what you will pay. We request quotes using your circumstances and compare the policies the agency represents.</p>
        <div className={styles.officeGrid}>
          <div className={styles.card}><h3>Compare Like With Like</h3><p>Check the same plan letter and policy type using the same requested start date. Review available discounts, the quoted premium, and any application conditions. A standard Plan G quote is different from a high-deductible Plan G quote.</p></div>
          <div className={styles.card}><h3>Look Beyond Today’s Price</h3><p>Ask how the policy is priced and how premiums can change. Budget for your Part B premium, separate drug coverage, and costs the supplement does not cover. A current quote does not guarantee future rates.</p></div>
        </div>
        <p style={{ marginTop: 24 }}>Already received a rate notice? Bring it to your consultation so we can review your current policy before discussing alternatives.</p>
      </div></section>
      <section className={styles.localSection}><div className={styles.wrap}>
        <p className={styles.eyebrow}>CHECK TIMING BEFORE SWITCHING</p><h2>Medigap Enrollment Has Its Own Rules</h2>
        <div className={styles.officeGrid}>
          <div className={styles.card}><h3>Buying Your First Policy</h3><p>Your one-time, six-month federal Medigap Open Enrollment Period begins the first month you are at least 65 and enrolled in Part B. During this period, insurers cannot deny a policy they sell or charge more because of health problems.</p><a className={styles.textLink} href="/medicare-enrollment-assistance-in-brandon-fl/">Get help organizing enrollment dates <ArrowRight size={18} /></a></div>
          <div className={styles.card}><h3>Changing Existing Coverage</h3><p>Outside protected enrollment opportunities, insurers may use medical underwriting. Fall Medicare plan enrollment does not reset your Medigap window. Ask about any guaranteed issue or state protections that apply before ending coverage.</p><a className={styles.textLink} href="/medigap-open-enrollment/">Read more about Medigap timing <ArrowRight size={18} /></a></div>
        </div>
        <div className={styles.officeCard} style={{ marginTop: 30 }}><h3>Moving From Medicare Advantage?</h3><p>Coordinate your opportunity to leave that plan, Medigap acceptance, any Part D coverage, and effective dates. Do not cancel existing coverage based only on a quote. Ask our team to help organize the steps and questions to confirm.</p><a className={styles.textLink} href="#callback">Talk through your next step <ArrowRight size={18} /></a></div>
      </div></section>
      <section className={styles.section}><div className={styles.wrap}>
        <p className={styles.eyebrow}>A USEFUL FIRST CONVERSATION</p><h2>Prepare for Your Brandon Consultation</h2>
        <div className={styles.officeGrid}>
          <div className={styles.officePrep}><p>Have your current plan letter, renewal notice, Medicare effective dates, and questions available. We can discuss your budget and which policy details matter to your decision. Keep personal records for the consultation; the form only asks for contact and request details.</p><p style={{ marginTop: 18 }}>There is no consultation fee. Agents may receive compensation from insurance carriers when an enrollment is completed. Premiums and other coverage costs still apply.</p><a className={styles.textLink} href="/our-team/">Meet the licensed team <ArrowRight size={18} /></a></div>
          <div className={styles.officeCard}><MapPin size={28} /><h3>Meet Locally or Talk From Home</h3><address>Medicare Information Project<br />915 Oakfield Dr, Suite A<br />Brandon, FL 33511</address><p className={styles.appointmentNote}>Office visits are by appointment. Phone and video consultations are also available for Brandon and nearby communities.</p><div className={styles.actions}><a className={styles.secondary} href="tel:+18136995559"><Phone size={18} />813-699-5559</a></div></div>
        </div>
      </div></section>
      <ConsultationForm service="supplement" />
      <section className={styles.faq}><div className={styles.wrap + " " + styles.two}>
        <div><p className={styles.eyebrow}>QUESTIONS BEFORE YOU CHOOSE</p><h2>Brandon Medicare Supplement FAQs</h2><p>Still comparing your overall coverage path? Start with our <a href="/medicare-brandon-fl/">Brandon Medicare resource center</a>.</p></div>
        <div>{faqs.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div></section>
      <section className={styles.resourceSection}><div className={styles.wrap}><h2>Official Medigap Resources</h2>
        <p className={styles.lead}>Information checked October 27, 2026. Confirm policy terms, eligibility, and current premiums before applying.</p>
        <div className={styles.serviceLinks}><a href="https://www.medicare.gov/health-drug-plans/medigap/basics">Medigap basics</a><a href="https://www.medicare.gov/health-drug-plans/medigap/basics/costs">Medigap costs</a><a href="https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy/when">When you can buy a policy</a><a href="https://www.medicare.gov/health-drug-plans/medigap/basics/how-medigap-works">How Medigap works</a></div>
        <p style={{ marginTop: 26, fontSize: 15 }}>We do not offer every plan available in your area. For information on all options, contact Medicare.gov, 1-800-MEDICARE, or your State Health Insurance Assistance Program. MIP is not affiliated with or endorsed by the U.S. government or the federal Medicare program.</p>
      </div></section>
    </main><Footer />
  </div>;
}
