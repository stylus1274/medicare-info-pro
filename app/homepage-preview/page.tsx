import type { Metadata } from "next";
import { ArrowRight, Phone, MapPin, ShieldCheck, BookOpen, BriefcaseBusiness, RefreshCw, Check } from "lucide-react";
import styles from "./preview.module.css";

export const metadata: Metadata = {
  title: "Homepage Preview | Brandon & Tampa Medicare Guidance",
  description: "Design preview of a local-first Medicare Information Project homepage.",
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  alternates: { canonical: "/homepage-preview/" },
  openGraph: { title: "Homepage Design Preview", url: "/homepage-preview/" },
};

const cdn = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/";
const journeys = [
  { Icon: BookOpen, title: "I'm new to Medicare", text: "Start with the basics, understand your choices, and get ready for your enrollment window.", link: "/first-steps-checklist/", cta: "See your first steps" },
  { Icon: BriefcaseBusiness, title: "I'm working past 65", text: "Learn how Medicare and employer coverage fit together before deciding what to do next.", link: "/still-working/", cta: "Explore employer coverage" },
  { Icon: RefreshCw, title: "I already have Medicare", text: "Know what to review when your doctors, prescriptions, costs, or coverage needs change.", link: "/annual-enrollment-period-guide/", cta: "Prepare for a plan review" },
];
const faqs = [
  ["Can I meet with someone in Brandon?", "Yes. Call 813-699-5559 to arrange an appointment at our office at 915 Oakfield Dr, Suite A, Brandon, FL 33511. You can also ask about phone or video appointments."],
  ["Is there a charge for a consultation?", "Our Medicare consultations are available at no cost. We can explain how our agency works and answer your questions before you decide on next steps."],
  ["What should I have ready?", "Bring a list of your doctors, prescriptions and preferred pharmacies, along with details of your current insurance. Think about the costs and coverage questions that matter most to you."],
  ["Do you offer every Medicare plan?", "We do not offer every plan available in your area. We help you compare the plans we represent. Medicare.gov, 1-800-MEDICARE and your State Health Insurance Assistance Program (SHIP) can provide information on all of your options."],
];

export default function HomepagePreview() {
  return <div className={styles.page}>
    <a className={styles.skip} href="#preview-main">Skip to content</a>
    <div className={styles.previewBar}>Homepage concept preview <span>For review</span><a href="https://medicareinfopro.com/">View current homepage ↗</a></div>
    <header className={styles.header}>
      <a className={styles.logo} href="https://medicareinfopro.com/" aria-label="Medicare Information Project current homepage"><img src={`${cdn}logo-white_bb567c3d.png`} alt="Medicare Information Project" width="210" height="58" /></a>
      <nav aria-label="Preview navigation"><a href="#start">Start here</a><a href="#plans">Medicare plans</a><a href="#local">Local help</a><a href="#team">Our team</a></nav>
      <a className={styles.headerPhone} href="tel:+18136995559"><Phone size={17} />813-699-5559</a>
    </header>
    <main id="preview-main">
      <section className={styles.hero}>
        <div className={styles.wrap + " " + styles.heroGrid}>
          <div><p className={styles.eyebrow}><MapPin size={16} /> ROOTED IN BRANDON, FLORIDA</p>
            <h1>Medicare guidance in Brandon.<br /><em>Here for you across Tampa Bay.</em></h1>
            <p className={styles.intro}>Make sense of your options with a licensed local agent. Let’s talk about your doctors, prescriptions, and budget, then find your next step together.</p>
            <div className={styles.actions}><a className={styles.primary} href="#consultation">Get a free consultation <ArrowRight size={18} /></a><a className={styles.secondary} href="tel:+18136995559"><Phone size={17} /> Call a local agent</a></div>
            <p className={styles.small}>Phone, video, or an appointment at our Brandon office.</p>
          </div>
          <div className={styles.portraitCard}><div className={styles.portraitBackdrop}><img src={`${cdn}greg-wohl_13284fbb.png`} alt="Gregory Wohl, founder and licensed Medicare agent" width="450" height="470" /></div><div className={styles.portraitCaption}><div><strong>Gregory Wohl</strong><p>Founder & Licensed Medicare Agent</p><small>FL License # D009743</small></div><span><MapPin size={16} />Brandon, FL</span></div></div>
        </div>
      </section>
      <div className={styles.trust}><span><ShieldCheck /> Licensed independent agents</span><span><MapPin /> A local office in Brandon</span><span><Check /> No-cost consultations</span></div>
      <section id="start" className={styles.section}><div className={styles.wrap}>
        <p className={styles.eyebrow}>START WITH YOUR SITUATION</p><h2>Where are you in your Medicare journey?</h2><p className={styles.lead}>You don’t have to know all the answers to take the next step.</p>
        <div className={styles.three}>{journeys.map(({ Icon, title, text, link, cta }) => <a className={styles.card} href={link} key={title}><Icon className={styles.cardIcon} size={28} /><h3>{title}</h3><p>{text}</p><span className={styles.textLink}>{cta}<ArrowRight size={18} /></span></a>)}</div>
      </div></section>
      <section className={styles.softSection}><div className={styles.wrap}><p className={styles.eyebrow}>A CONVERSATION, THEN A CLEAR NEXT STEP</p><h2>We make the choices easier to understand.</h2><div className={styles.three}>
        {[["01", "Tell us what matters", "We start with your doctors, prescriptions, budget, and the questions on your mind."], ["02", "Compare your options", "We explain the plans we represent, including costs, provider networks, and tradeoffs."], ["03", "Get help moving forward", "When you're ready, we help with enrollment and stay available for questions along the way."]].map(([num, title, text]) => <div className={styles.step} key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></div>)}
      </div></div></section>
      <section id="team" className={styles.section}><div className={styles.wrap + " " + styles.two}>
        <div><p className={styles.eyebrow}>REAL PEOPLE. LOCAL GUIDANCE.</p><h2>A team you can get to know.</h2><p className={styles.lead}>Medicare Information Project is an independent insurance agency based in Brandon. Our licensed agents help people throughout Tampa Bay understand their Medicare choices.</p><p>Start with a conversation, ask the questions that matter to you, and get help understanding what comes next.</p><a className={styles.textLink} href="/our-team/">Meet our licensed agents <ArrowRight size={18} /></a></div>
        <div className={styles.office}><MapPin size={32} /><p className={styles.eyebrow}>YOUR BRANDON OFFICE</p><h3>Local help starts here.</h3><address>915 Oakfield Dr, Suite A<br />Brandon, FL 33511</address><p>Call to arrange your appointment.</p><a href="tel:+18136995559">813-699-5559 <ArrowRight size={18} /></a></div>
      </div></section>
      <section id="local" className={styles.softSection}><div className={styles.wrap}><p className={styles.eyebrow}>SERVING OUR NEIGHBORS</p><h2>Based in Brandon. Connected to Tampa Bay.</h2><div className={styles.two}>
        <a href="/health-insurance-broker-brandon/" className={styles.localCard}><span>OUR HOME BASE</span><h3>Medicare help in Brandon</h3><p>Get guidance from a local agency, with appointments available at our Brandon office.</p><strong>Explore Brandon services <ArrowRight size={18} /></strong></a>
        <a href="/medicare-insurance-agent-tampa-fl/" className={styles.localCard}><span>ACROSS THE BAY AREA</span><h3>Medicare help in Tampa</h3><p>Talk with our team about your coverage needs and the Medicare options we represent in your area.</p><strong>Explore Tampa services <ArrowRight size={18} /></strong></a>
      </div></div></section>
      <section id="plans" className={styles.section}><div className={styles.wrap}><p className={styles.eyebrow}>UNDERSTAND YOUR OPTIONS</p><h2>Get familiar with the main coverage choices.</h2><div className={styles.three}>
        {[["Medicare Advantage", "Learn about private plans that provide your Part A and Part B benefits.", "/medicare-advantage-florida/"], ["Medicare Supplement", "Understand how Medigap works alongside Original Medicare.", "/medicare-supplement/"], ["Part D prescription coverage", "Learn what to consider when comparing prescription drug coverage.", "/medicare-part-d/"]].map(([title, text, href]) => <a href={href} className={styles.card} key={title}><h3>{title}</h3><p>{text}</p><span className={styles.textLink}>Learn more <ArrowRight size={18} /></span></a>)}
      </div></div></section>
      <section className={styles.faq}><div className={styles.wrap + " " + styles.two}><div><p className={styles.eyebrow}>BEFORE WE TALK</p><h2>A few questions you might have.</h2><p>Have something else on your mind?<br /><a href="tel:+18136995559">Call us at 813-699-5559.</a></p></div><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
      <section id="consultation" className={styles.consultation}><div className={styles.wrap + " " + styles.two}><div><p className={styles.eyebrow}>LET’S FIND YOUR NEXT STEP</p><h2>You bring the questions.<br />We’ll help you sort through them.</h2><p>No-cost Medicare guidance from our Brandon team.</p></div><div className={styles.contactCard}><h3>Talk with a local agent.</h3><a className={styles.primary} href="tel:+18136995559"><Phone size={18} />Call 813-699-5559</a><a className={styles.contactLink} href="/contact/">Prefer to write? Contact our team <ArrowRight size={18} /></a><p>915 Oakfield Dr, Suite A<br />Brandon, FL 33511<br /><small>Office visits by appointment.</small></p></div></div></section>
    </main>
    <footer className={styles.footer}><div className={styles.wrap}><div className={styles.footerTop}><div><strong>Medicare Information Project</strong><p>Local guidance. Informed choices.</p><a href="tel:+18136995559">813-699-5559</a></div><nav aria-label="Footer navigation"><a href="/our-team/">Our team</a><a href="/resources/">Resources</a><a href="/contact/">Contact</a><a href="/privacy-policy/">Privacy policy</a><a href="/terms-and-conditions/">Terms of use</a></nav></div><p className={styles.disclosure}>We do not offer every plan available in your area. Currently we represent 17 organizations which offer 149 products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options. We are not part of, affiliated with, reviewed, or endorsed by CMS. A non-government entity.</p><small>© {new Date().getFullYear()} Medicare Information Project. 915 Oakfield Dr, Suite A, Brandon, FL 33511.</small></div></footer>
  </div>;
}
