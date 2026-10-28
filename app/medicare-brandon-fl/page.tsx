import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Header from "@/components/Header";
import Footer from "../homepage-aep/AepFooter";
import styles from "../homepage-aep/homepage-aep.module.css";
import hub from "./resource-center.module.css";
import { ArrowRight, Phone, MapPin, ShieldCheck, Check } from "lucide-react";

const url = "https://medicareinfopro.com/medicare-brandon-fl/";
const title = "Medicare Help in Brandon, FL | Local Resource Center | MIP";
const description = "Find Medicare help in Brandon, FL. Start enrollment, compare coverage, or review your current plan with local guides and licensed agents.";
export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: url }, robots: { index: true, follow: true },
  openGraph: { title, description, url, type: "website" },
  twitter: { card: "summary", title, description },
};
const journeys = [
  {
    id: "starting-medicare", number: "01", label: "Starting Medicare", prompt: "Turning 65, retiring, or sorting out your first enrollment?", title: "Start With Your Enrollment Questions",
    intro: "Use the guide that matches your situation. Then organize the dates, current coverage, and questions you want to discuss with an agent.",
    action: "Get Medicare enrollment help", href: "/medicare-enrollment-assistance-in-brandon-fl/",
    links: [
      { title: "Turning 65 in Brandon", text: "Prepare for your first Medicare decisions and the steps to discuss.", href: "/turning-65-brandon-fl/" },
      { title: "Working Past 65 or Retiring", text: "Organize employer coverage questions before your benefits change.", href: "/medicare-and-employer-insurance-after-65-brandon-fl/" },
      { title: "Plan Your Enrollment Timeline", text: "Use the enrollment calculator as a planning starting point. Confirm the dates that apply to you.", href: "/enrollment-calculator/" },
    ],
  },
  {
    id: "comparing-coverage", number: "02", label: "Comparing Coverage", prompt: "Want help understanding the coverage options in front of you?", title: "Compare the Coverage You May Need",
    intro: "Explore each coverage path before requesting a comparison. Our service pages explain what to check and how to prepare for a consultation about the plans we represent.",
    action: "Compare Medicare coverage paths", href: "/comparing-medicare-plans-brandon/",
    links: [
      { title: "Medicare Advantage Plans", text: "Review doctor networks, prescriptions, plan rules, and total costs.", href: "/medicare-advantage-plans-brandon-florida/" },
      { title: "Medicare Supplement Plans", text: "Explore Medigap benefits, premiums, and enrollment considerations alongside Original Medicare.", href: "/medicare-supplement-insurance-plans-brandon/" },
      { title: "Part D Prescription Coverage", text: "Learn what to check when reviewing drug coverage and pharmacy costs.", href: "/medicare-part-d/" },
    ],
  },
  {
    id: "reviewing-a-plan", number: "03", label: "Reviewing an Existing Plan", prompt: "Already covered and checking changes, costs, or next steps?", title: "Review the Coverage You Already Have",
    intro: "Start with your current plan information and any change notices. Use these focused guides to prepare the questions that matter to your next review. A review does not require switching plans.",
    action: "Request an annual plan review", href: "/medicare-consulting-services-brandon/",
    links: [
      { title: "Check Doctors and Hospitals", text: "Prepare to confirm the exact plan, coverage year, providers, and office locations.", href: "/check-medicare-doctor-hospital-networks-brandon-fl/" },
      { title: "Compare Prescription Costs", text: "Organize medications and preferred pharmacies for a useful cost comparison.", href: "/compare-medicare-prescription-costs-brandon/" },
      { title: "Understand Annual Enrollment", text: "Review the fall enrollment process and the questions to resolve before a change.", href: "/annual-enrollment-period-guide/" },
    ],
  },
];
const supporting = [
  { title: "After You Enroll", text: "Check confirmations, cards, providers, prescriptions, and payments.", href: "/after-enrolling-medicare-plan-brandon/" },
  { title: "Changing an AEP Choice", text: "Read about another eligible change before December 7.", href: "/faqs/change-medicare-plan-again-before-december-7/" },
  { title: "Helping a Parent", text: "Prepare questions and documents for a family consultation.", href: "/helping-parent-choose-medicare-brandon-fl/" },
  { title: "SHINE Counseling", text: "Explore public Medicare counseling resources in Hillsborough County.", href: "/how-to-get-shine-medicare-counseling-hillsborough-county/" },
];
const faqs = [
  { q: "Where Should I Start if I Am New to Medicare?", a: "Start with the Starting Medicare section. Choose the turning-65 guide, employer-coverage guide, or enrollment calculator based on your situation. The enrollment-help page explains how to request a consultation and prepare your questions." },
  { q: "Which Page Helps Me Compare Medicare Coverage?", a: "The Comparing Coverage section links to Medicare Advantage, Medicare Supplement, and Part D resources. The coverage-path comparison page is a starting point if you are still deciding which type of coverage to discuss." },
  { q: "Can You Help Me Review a Plan I Already Have?", a: "Yes. Use Reviewing an Existing Plan to find the annual plan review service, provider-network checklist, prescription-cost guide, and Annual Enrollment guide. Bring your current plan details and notices. A review does not require you to change coverage." },
  { q: "Where Is Your Brandon Office?", a: "Medicare Information Project is at 915 Oakfield Dr, Suite A, Brandon, FL 33511. Office visits are by appointment. Call 813-699-5559 or use the contact page to request an office, phone, or video consultation." },
  { q: "Does a Consultation Cost Anything?", a: "There is no agency consultation fee. Agents may receive compensation from insurance carriers when an enrollment is completed. Insurance premiums and other coverage costs still apply. We compare the plans we represent and do not offer every plan available in the area." },
];
const schema = { "@context": "https://schema.org", "@graph": [
  { "@type": "CollectionPage", "@id": `${url}#webpage`, url, name: title, description, dateModified: "2026-10-28", isPartOf: { "@id": "https://medicareinfopro.com/#website" }, about: { "@id": "https://medicareinfopro.com/#organization" }, mainEntity: journeys.map(journey => ({ "@id": `${url}#${journey.id}-resources` })) },
  ...journeys.map(journey => ({ "@type": "ItemList", "@id": `${url}#${journey.id}-resources`, name: journey.label, itemListElement: [{ title: journey.action, href: journey.href }, ...journey.links].map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.title, url: `https://medicareinfopro.com${item.href}` })) })),
  { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://medicareinfopro.com/" }, { "@type": "ListItem", position: 2, name: "Brandon Medicare Resource Center", item: url }] },
  { "@type": "FAQPage", mainEntity: faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) },
] };

export default function Page() {
  return <div className={styles.page} style={{ "--aep-announcement-height": "0px" } as CSSProperties}>
    <a className={styles.skip} href="#main-content">Skip to content</a><Header />
    <main id="main-content">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className={hub.hero}><div className={styles.wrap}>
        <p className={styles.eyebrow + " " + hub.heroEyebrow}><MapPin size={16} aria-hidden="true" /> BRANDON MEDICARE RESOURCE CENTER</p>
        <h1>Medicare Help in Brandon, FL</h1>
        <p className={hub.intro}>Find the right next step for your situation. Start enrollment, compare coverage, or review an existing plan with local resources from Medicare Information Project.</p>
        <nav aria-label="Choose your Medicare situation" className={styles.three}>
          {journeys.map(journey => <a className={styles.card + " " + hub.path} key={journey.id} href={`#${journey.id}`}><span className={hub.number}>{journey.number}</span><span className={hub.pathTitle}>{journey.label}</span><p>{journey.prompt}</p><span className={styles.textLink}>Find your next step <ArrowRight size={18} aria-hidden="true" /></span></a>)}
        </nav>
        <p className={hub.notSure}>Not sure where to start? <a href="tel:+18136995559">Call 813-699-5559</a> or <a href="#local-help">meet your local team</a>.</p>
      </div></section>
      <div className={styles.trust}><span><ShieldCheck aria-hidden="true" /> Licensed independent agents</span><span><MapPin aria-hidden="true" /> Brandon office by appointment</span><span><Check aria-hidden="true" /> No agency consultation fee</span></div>
      {journeys.map((journey, index) => <section id={journey.id} className={(index === 1 ? styles.resourceSection : styles.section) + " " + hub.journey} key={journey.id}>
        <div className={styles.wrap}>
          <div className={hub.sectionHeading}><div><p className={styles.eyebrow}>{journey.number} / {journey.label.toUpperCase()}</p><h2>{journey.title}</h2><p className={styles.lead}>{journey.intro}</p></div><a className={hub.action} href={journey.href}>{journey.action} <ArrowRight size={18} aria-hidden="true" /></a></div>
          <div className={styles.three}>{journey.links.map(item => <a className={styles.card} key={item.href} href={item.href}><h3>{item.title}</h3><p>{item.text}</p><span className={styles.textLink}>Read the guide <ArrowRight size={18} aria-hidden="true" /></span></a>)}</div>
        </div>
      </section>)}
      <section className={styles.resourceSection}><div className={styles.wrap}>
        <p className={styles.eyebrow}>MORE HELP FOR YOUR NEXT STEP</p><h2>After Enrollment, Family Help, and Public Resources</h2>
        <div className={hub.supporting}>{supporting.map(item => <a className={styles.card} href={item.href} key={item.href}><h3>{item.title}</h3><p>{item.text}</p><span className={styles.textLink}>View resource <ArrowRight size={18} aria-hidden="true" /></span></a>)}</div>
        <p className={hub.official}>For information about all available plan options, use <a href="https://www.medicare.gov/plan-compare/">Medicare.gov’s official plan comparison</a>.</p>
      </div></section>
      <section id="local-help" className={styles.section + " " + hub.journey}><div className={styles.wrap + " " + styles.officeGrid}>
        <div><p className={styles.eyebrow}>PERSONAL HELP WHEN YOU NEED IT</p><h2>Talk With Our Brandon Team</h2><p className={styles.lead}>Use the guides to prepare, then bring your questions to a licensed agent. We explain the plans we represent and help organize the details to confirm before making a decision.</p><div className={styles.actions}><a className={hub.action} href="/our-team/">Meet the licensed agents <ArrowRight size={18} aria-hidden="true" /></a><a className={styles.secondary} href="/contact/">Appointments and directions</a></div></div>
        <div className={styles.officeCard}><MapPin size={28} aria-hidden="true" /><h3>Visit by Appointment</h3><address>Medicare Information Project<br />915 Oakfield Dr, Suite A<br />Brandon, FL 33511</address><p className={styles.appointmentNote}>Phone, video, and office consultations are available. We serve Brandon and nearby communities, including Valrico, Riverview, and Seffner.</p><a className={styles.textLink} href="tel:+18136995559"><Phone size={18} aria-hidden="true" />813-699-5559</a></div>
      </div></section>
      <section className={styles.faq}><div className={styles.wrap + " " + styles.two}><div><p className={styles.eyebrow}>FIND YOUR WAY</p><h2>Using the Brandon Medicare Resource Center</h2><p>Choose the section that matches your situation. You can return here whenever your questions change.</p></div><div>{faqs.map(({ q, a }) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
      <div className={styles.wrap + " " + hub.disclaimer}><p>We do not offer every plan available in your area. For information on all options, contact Medicare.gov, 1-800-MEDICARE, or your State Health Insurance Assistance Program. MIP is not affiliated with or endorsed by the U.S. government or the federal Medicare program. Plan availability, eligibility, and coverage details must be confirmed for your situation and coverage year.</p></div>
    </main><Footer />
  </div>;
}
