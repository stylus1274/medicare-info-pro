import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Header from "@/components/Header";
import Footer from "../homepage-aep/AepFooter";
import ConsultationForm from "../homepage-aep/ConsultationForm";
import styles from "../homepage-aep/homepage-aep.module.css";
import { ArrowRight, Phone, MapPin, Check, CalendarDays, ClipboardList, ShieldCheck } from "lucide-react";

const url = "https://medicareinfopro.com/medicare-enrollment-assistance-in-brandon-fl/";
const title = "Medicare Enrollment Help in Brandon, FL | MIP";
const description = "Get Medicare enrollment help in Brandon, FL. Review your timing, employer coverage, and plan choices with a licensed agent. Request a free consultation.";
export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: url },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: { title, description, url, type: "website", images: [{ url: "/images/aep-plan-review-hero.webp", alt: "A couple reviewing Medicare options with an advisor" }] },
  twitter: { card: "summary_large_image", title, description, images: ["/images/aep-plan-review-hero.webp"] },
};
const situations = [
  { title: "You Are Turning 65", text: "Start by checking whether you will be enrolled automatically or need to apply. Your Initial Enrollment Period generally spans seven months around your 65th birthday month. Timing can differ if your birthday is on the first of the month or you qualify before 65.", href: "/turning-65-brandon-fl/", label: "Prepare for Medicare at 65" },
  { title: "You Are Retiring or Leaving Employer Coverage", text: "Bring your planned retirement date and the date your active employer coverage ends. Employer size, current employment, and HSA contributions can affect the decisions you need to discuss. Do not assume COBRA gives you more time to enroll in Part B.", href: "/medicare-and-employer-insurance-after-65-brandon-fl/", label: "Review the employer-coverage checklist" },
  { title: "You Already Have Medicare", text: "You may be looking at a plan notice, a move, or a change in your care. We can help identify the questions to resolve before an eligible plan change. For a full review of existing coverage, use our dedicated annual plan review service.", href: "/medicare-consulting-services-brandon/", label: "Request an annual plan review" },
];
const help = [
  ["Organize Your Enrollment Timeline", "We start with your situation: when you become eligible, what coverage you have now, and any dates in your employer or plan notices. We help you identify which enrollment questions need an official answer before you act."],
  ["Explain Your Coverage Choices", "Understand Original Medicare, Medicare Advantage, Medicare Supplement insurance, and Part D prescription coverage. We explain how the choices fit together and compare relevant insurance plans the agency represents."],
  ["Prepare for a Plan Application", "If you choose a plan we represent and have an applicable enrollment opportunity, a licensed agent can assist with the plan application. We review the information needed and explain what confirmation to look for afterward."],
  ["Keep the Next Steps Clear", "Leave with a list of actions, documents, and questions to confirm. We explain whether the next step belongs with Social Security, an employer benefits administrator, an insurance company, or our team."],
];
const faqs = [
  { q: "Where Can I Get Medicare Enrollment Help in Brandon?", a: "Medicare Information Project offers consultations by appointment at 915 Oakfield Dr, Suite A, Brandon, FL 33511, and by phone or video. Call 813-699-5559 or use the request form on this page. An agent confirms appointment availability before a time is scheduled." },
  { q: "Can MIP Sign Me Up for Medicare Part A and Part B?", a: "Most people who need to apply for Part A and Part B do so through Social Security; the Railroad Retirement Board handles certain railroad beneficiaries. MIP can help organize questions and explain insurance options, but does not approve government Medicare eligibility or replace the official application process." },
  { q: "What if I Am Still Working When I Turn 65?", a: "Review the coverage you or your spouse have through current employment before deciding when to enroll. Employer size, how the plan pays with Medicare, and any HSA contributions matter. Ask the benefits administrator and Social Security to confirm what applies to you before delaying coverage." },
  { q: "Can I Get Help if I Missed an Enrollment Deadline?", a: "Yes. Bring your coverage history and any notices so we can help identify the next questions to ask. A Special Enrollment Period may apply to some circumstances. Otherwise, the General Enrollment Period may be relevant for Part A or Part B. Eligibility, penalties, and effective dates must be confirmed with the appropriate agency or plan." },
  { q: "Is Fall Open Enrollment the Same as Signing Up for Medicare for the First Time?", a: "No. Fall Open Enrollment, October 15 through December 7, is an opportunity for eligible Medicare Advantage and prescription drug plan changes. It does not replace your Part A and Part B enrollment period or automatically guarantee that you can buy a Medigap policy without underwriting." },
  { q: "Is There a Fee for Medicare Enrollment Assistance?", a: "MIP does not charge a consultation fee. Agents may receive compensation from insurance carriers when an eligible enrollment is completed. Insurance premiums and other coverage costs still apply. You can ask which plans the agency represents before making a decision." },
  { q: "What Should I Bring to My Enrollment Consultation?", a: "Have your current insurance information, any Medicare effective dates, employer coverage dates, plan notices, and a list of questions available. A list of doctors, prescriptions, and preferred pharmacies helps when discussing plan options. Do not send Medicare numbers, Social Security numbers, or medical details through the website request form." },
];
const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "WebPage", "@id": `${url}#webpage`, url, name: title, description, about: { "@id": "https://medicareinfopro.com/#organization" }, isPartOf: { "@id": "https://medicareinfopro.com/#website" } },
  { "@type": "Service", "@id": `${url}#service`, name: "Medicare Enrollment Assistance in Brandon", serviceType: "Medicare insurance enrollment assistance", url, provider: { "@id": "https://medicareinfopro.com/#organization" }, areaServed: { "@type": "City", name: "Brandon" } },
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://medicareinfopro.com/" }, { "@type": "ListItem", position: 2, name: "Medicare Enrollment Help in Brandon", item: url }] },
  { "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
] };
export default function Page() {
  return <div className={styles.page} style={{ "--aep-announcement-height": "0px" } as CSSProperties}>
    <a className={styles.skip} href="#main-content">Skip to content</a><Header />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className={styles.hero}><div className={styles.wrap + " " + styles.heroGrid}>
        <div className={styles.heroCopy}><p className={styles.eyebrow}><MapPin size={16} /> LOCAL GUIDANCE FOR YOUR NEXT STEP</p>
          <h1>Medicare Enrollment Help in Brandon, FL</h1>
          <p className={styles.intro}>Turning 65, retiring, or unsure what to do next? Our licensed agents help you understand your enrollment questions, organize your timeline, and compare the insurance plans we represent.</p>
          <div className={styles.actions}><a className={styles.primary} href="#consultation">Request Enrollment Help <ArrowRight size={18} /></a><a className={styles.secondary} href="#callback">Request a Callback <Phone size={18} /></a></div>
          <p className={styles.small}>No-cost consultations by phone, video, or appointment at our Brandon office.</p>
        </div><div className={styles.heroPhoto}><img src="/images/aep-plan-review-hero.webp" alt="A couple discussing Medicare enrollment questions with an advisor" width="1672" height="941" fetchPriority="high" /></div>
      </div></section>
      <div className={styles.trust}><span><ShieldCheck /> Licensed independent agents</span><span><MapPin /> 915 Oakfield Dr, Suite A</span><span><Check /> No obligation to enroll</span></div>
      <section className={styles.section}><div className={styles.wrap}>
        <p className={styles.eyebrow}>START WITH YOUR SITUATION</p><h2>What Kind of Enrollment Help Do You Need?</h2>
        <p className={styles.lead}>The right next step depends on the coverage you have and the decision in front of you. You do not need to know every Medicare term before contacting us.</p>
        <div className={styles.three}>{situations.map(item => <div className={styles.card} key={item.title}><h3>{item.title}</h3><p>{item.text}</p><a className={styles.textLink} href={item.href}>{item.label} <ArrowRight size={18} /></a></div>)}</div>
      </div></section>
      <section className={styles.resourceSection}><div className={styles.wrap}>
        <p className={styles.eyebrow}>PERSONAL HELP WITH A CLEAR PURPOSE</p><h2>How Our Brandon Team Helps You Move Forward</h2>
        <div className={styles.officeGrid}>{help.map(([heading, text]) => <div className={styles.card} key={heading}><h3>{heading}</h3><p>{text}</p></div>)}</div>
        <div className={styles.officeCard} style={{ marginTop: 30 }}><h3>Which Applications Go Through Social Security?</h3>
          <p>For most people, applications for Medicare Part A and Part B go through Social Security. If you already receive certain benefits, you may be enrolled automatically. Check your enrollment status and official effective dates before applying for additional coverage.</p>
          <p style={{ marginTop: 16 }}>MIP is an independent insurance agency. We do not issue Medicare cards, decide government eligibility, or guarantee a penalty waiver. We can explain plan choices and assist with eligible applications for the insurance plans we represent.</p>
          <a className={styles.textLink} href="https://www.ssa.gov/medicare/sign-up">Social Security’s Medicare sign-up information <ArrowRight size={18} /></a>
        </div>
      </div></section>
      <section className={styles.section}><div className={styles.wrap}>
        <p className={styles.eyebrow}><CalendarDays size={18} /> TIMING MATTERS</p><h2>Check the Enrollment Window for Your Decision</h2>
        <p className={styles.lead}>An initial Medicare application, an employer-coverage transition, and a fall plan change follow different rules. We help you organize the dates to check rather than assuming one deadline covers everything.</p>
        <div className={styles.three}>
          <div className={styles.card}><h3>First-Time Enrollment</h3><p>Check your Initial Enrollment Period and whether you need to apply. Use our <a href="/enrollment-calculator/" style={{ textDecoration: "underline", color: "#1a3fa8" }}>Medicare enrollment calculator</a> as a planning starting point, then confirm your dates with the appropriate agency.</p></div>
          <div className={styles.card}><h3>Work, Coverage Changes, or a Missed Deadline</h3><p>A Special Enrollment Period depends on the circumstances. If no exception applies, the January 1 through March 31 General Enrollment Period may be relevant for Part A or Part B. Bring coverage notices so we can discuss which questions to resolve.</p><a className={styles.textLink} href="/what-is-the-special-enrollment-period/">Understand Special Enrollment Periods <ArrowRight size={18} /></a></div>
          <div className={styles.card}><h3>Reviewing a Plan During Fall Enrollment</h3><p>Annual Enrollment runs October 15 through December 7. Eligible Medicare Advantage and Part D changes generally start January 1 of the next year. A plan review does not require switching, and Medigap has separate enrollment protections.</p><a className={styles.textLink} href="/annual-enrollment-period-guide/">Read the Annual Enrollment guide <ArrowRight size={18} /></a></div>
        </div>
        <p style={{ marginTop: 24, fontSize: 16 }}>If you are worried about a missed deadline, <a href="#callback" style={{ color: "#1a3fa8", textDecoration: "underline" }}>request a callback</a>. Do not cancel current coverage before confirming your next coverage and effective dates.</p>
      </div></section>
      <section className={styles.localSection}><div className={styles.wrap}>
        <p className={styles.eyebrow}><ClipboardList size={18} /> BEFORE YOUR CONSULTATION</p><h2>Bring the Details That Make the Conversation Useful</h2>
        <div className={styles.officeGrid}>
          <div className={styles.officePrep}><ul>{["Your current insurance and Medicare effective dates, if available", "Employer coverage end dates and retirement plans", "Plan letters, enrollment notices, or questions about deadlines", "Doctor names, prescriptions, and preferred pharmacies for plan comparisons", "A family member or caregiver, if you would like help organizing questions"].map(item => <li key={item}><Check size={19} />{item}</li>)}</ul><p>You can start with questions even if you do not have every document. Keep personal records for your consultation; the website form only asks for contact and request details.</p></div>
          <div className={styles.officeCard}><MapPin size={28} /><h3>Visit Our Brandon Office</h3><address>Medicare Information Project<br />915 Oakfield Dr, Suite A<br />Brandon, FL 33511</address><p className={styles.appointmentNote}>Office visits are by appointment. We also offer phone and video consultations for people in Brandon, Valrico, Riverview, Seffner, and nearby communities.</p><div className={styles.actions}><a className={styles.secondary} href="tel:+18136995559"><Phone size={18} />813-699-5559</a></div><a className={styles.textLink} href="/medicare-insurance-agent-brandon-fl/">Meet your local Medicare resource <ArrowRight size={18} /></a></div>
        </div>
      </div></section>
      <ConsultationForm service="enrollment" />
      <section className={styles.faq}><div className={styles.wrap + " " + styles.two}>
        <div><p className={styles.eyebrow}>QUESTIONS BEFORE YOU GET STARTED</p><h2>Medicare Enrollment Help: Common Questions</h2><p>Need a broader local overview? Visit our <a href="/medicare-brandon-fl/">Brandon Medicare resource center</a> or <a href="/our-team/">meet the licensed team</a>.</p></div>
        <div>{faqs.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div></section>
      <section className={styles.resourceSection}><div className={styles.wrap}><h2>Official Enrollment Resources</h2>
        <p className={styles.lead}>Information checked October 26, 2026. Confirm the rules and dates that apply to your situation using the official resources below.</p>
        <div className={styles.serviceLinks}><a href="https://www.medicare.gov/basics/get-started-with-medicare/sign-up/when-can-i-sign-up-for-medicare">Medicare enrollment timing</a><a href="https://www.medicare.gov/basics/get-started-with-medicare/sign-up/when-does-medicare-coverage-start">Coverage start dates</a><a href="https://www.ssa.gov/medicare/sign-up">Apply through Social Security</a><a href="https://www.medicare.gov/health-drug-plans/open-enrollment">Fall plan changes</a><a href="https://www.medicare.gov/health-drug-plans/medigap/ready-to-buy/when">Medigap enrollment protections</a></div>
        <p style={{ marginTop: 26, fontSize: 15 }}>We do not offer every plan available in your area. For information on all options, contact Medicare.gov, 1-800-MEDICARE, or your State Health Insurance Assistance Program. MIP is not affiliated with or endorsed by the U.S. government or the federal Medicare program.</p>
      </div></section>
    </main><Footer />
  </div>;
}
