import type { Metadata } from "next";
import { ArrowRight, Phone, MapPin, ShieldCheck, BookOpen, BriefcaseBusiness, RefreshCw, Check, Users, CalendarDays, HeartHandshake } from "lucide-react";
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
  { Icon: BookOpen, title: "I'm new to Medicare", image: "journey-new-medicare-v2-j3d35iiZZX3bqSXQUaRxTp.webp", text: "Turning 65? Start with the basics, understand your choices, and get ready for your enrollment window.", link: "/first-steps-checklist/", cta: "See your first steps" },
  { Icon: BriefcaseBusiness, title: "I'm working past 65", image: "journey-working-65_04a993cd.jpg", text: "Still on an employer plan? Learn how your coverage and Medicare fit together before making a change.", link: "/still-working/", cta: "Explore employer coverage" },
  { Icon: RefreshCw, title: "I already have Medicare", image: "journey-already-enrolled_8b3cb1ab.jpg", text: "Life changes. Your coverage deserves another look when your doctors, prescriptions, or needs change.", link: "/annual-enrollment-period-guide/", cta: "Prepare for a plan review" },
];
// Existing agency portraits and profile links, with equal prominence for every agent.
const upload = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/";
const agents = [
  { name: "Gregory Wohl", slug: "greg-wohl", photo: `${cdn}greg-wohl_13284fbb.png` },
  { name: "Jennifer C. Loader-Wohl", slug: "jennifer-loader-wohl", photo: `${upload}TSQcrEEFLcDPIxvF.jpeg` },
  { name: "Jose F. Diaz (JD)", slug: "jd-diaz", photo: `${upload}umTZhAAQfOQACkLq.jpg` },
  { name: "Chris Gallimore", slug: "chris-gallimore", photo: `${upload}BWlfPJNxFqQKGDUL.jpeg` },
  { name: "Paul Eckstein", slug: "paul-eckstein", photo: `${upload}LCWjVjohdZHMUbko.jpeg` },
  { name: "Kelly Webb", slug: "kelly-webb", photo: `${upload}vHaBgismTMBqborq.jpg` },
  { name: "Valerie Hall", slug: "valerie-justin-hall", photo: `${upload}jbHdOJHhDBcDkoQp.png` },
  { name: "Mark VanHoesen", slug: "mark-vanhoesen", photo: `${upload}gISbkFqSnQEUvXao.jpg` },
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
      <nav aria-label="Preview navigation"><a href="#start">Start Here</a><a href="#plans">Medicare Plans</a><a href="#local">Local Help</a><a href="#team">Our Team</a><a href="#resources">Resources</a></nav>
      <a className={styles.headerPhone} href="tel:+18136995559"><Phone size={17} />813-699-5559</a>
    </header>
    <main id="preview-main">
      <section className={styles.hero}>
        <div className={styles.wrap + " " + styles.heroGrid}>
          <div className={styles.heroCopy}><p className={styles.eyebrow}><MapPin size={16} /> BRANDON ROOTS. TAMPA BAY REACH.</p>
            <h1>Medicare Questions?<br /><span>Let’s Make Sense<br />of Them. Together.</span></h1>
            <p className={styles.intro}>Your doctors. Your prescriptions. Your plans for what comes next. Our independent Medicare agents in Brandon help you understand your options, with personal guidance for people across Tampa Bay.</p>
            <div className={styles.actions}><a className={styles.primary} href="#consultation">Get a free consultation <ArrowRight size={18} /></a><a className={styles.secondary} href="tel:+18136995559"><Phone size={17} /> Call a local agent</a></div>
            <p className={styles.small}>Phone, video, or an appointment at our Brandon office.</p>
          </div>
          <div className={styles.heroPhoto}><img src={`${cdn}mip-hero-couple_181d53a9.jpg`} alt="A couple discussing their Medicare options" width="900" height="800" fetchPriority="high" /><div className={styles.photoNote}><HeartHandshake size={30} /><div><strong>A little clarity goes a long way.</strong><span>Real conversations. A team in your corner.</span></div></div></div>
        </div>
      </section>
      <div className={styles.trust}><span><ShieldCheck /> Licensed independent agents</span><span><MapPin /> A local office in Brandon</span><span><Check /> No-cost consultations</span></div>
      <section id="start" className={styles.section}><div className={styles.wrap}>
        <div className={styles.centerHeading}><p className={styles.eyebrow}>YOUR NEXT CHAPTER STARTS HERE</p><h2>Medicare Looks Different for Everyone.</h2><p className={styles.lead}>Start with what’s happening in your life. We’ll help you find your way from there.</p></div>
        <div className={styles.three}>{journeys.map(({ Icon, title, image, text, link, cta }) => <a className={styles.journeyCard} href={link} key={title}><div className={styles.journeyPhoto}><img src={`${cdn}${image}`} alt="" width="600" height="380" loading="lazy" /><span><Icon size={17} />{title}</span></div><div className={styles.journeyBody}><h3>{title}</h3><p>{text}</p><span className={styles.textLink}>{cta}<ArrowRight size={18} /></span></div></a>)}</div>
      </div></section>
      <section className={styles.processSection}><div className={styles.wrap}><p className={styles.eyebrow}>LESS SECOND-GUESSING. MORE UNDERSTANDING.</p><h2>You Don’t Have to Figure It Out Alone.</h2><div className={styles.three}>
        {[["01", "Tell us what matters", "We start with your doctors, prescriptions, budget, and the questions on your mind."], ["02", "Compare your options", "We explain the plans we represent, including costs, provider networks, and tradeoffs."], ["03", "Get help moving forward", "When you're ready, we help with enrollment and stay available for questions along the way."]].map(([num, title, text]) => <div className={styles.step} key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></div>)}
      </div></div></section>
      <section id="team" className={styles.teamSection}><div className={styles.wrap}>
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}><Users size={18} /> PEOPLE FIRST. MEDICARE SECOND.</p><h2>Meet the People in Your Corner.</h2><p className={styles.lead}>A whole team of licensed agents. One shared goal: helping you feel more confident about your Medicare decisions. Get to know the people behind Medicare Information Project.</p></div><a className={styles.secondary} href="/our-team/">Get to know our team <ArrowRight size={18} /></a></div>
        <div className={styles.agentGrid}>{agents.map(agent => <a href={`/${agent.slug}/`} className={styles.agentCard} key={agent.slug}><div className={styles.agentPhoto}><img src={agent.photo} alt={agent.name} width="280" height="280" loading="lazy" /></div><div><h3>{agent.name}</h3><p>Licensed Medicare Agent</p><span>Meet {agent.name.split(" ")[0]} <ArrowRight size={14} /></span></div></a>)}</div>
      </div></section>
      <section id="local" className={styles.localSection}><div className={styles.wrap}><p className={styles.eyebrow}>RIGHT HERE IN YOUR COMMUNITY</p><h2>Brandon Is Home.<br />Tampa Bay Is Our Neighborhood.</h2><p className={styles.lead}>Visit our Brandon office by appointment, or connect by phone or video. Personal help can start wherever you are.</p><div className={styles.two}>
        <a href="/health-insurance-broker-brandon/" className={styles.localCard}><span>OUR HOME BASE</span><h3>Medicare help in Brandon</h3><p>Get guidance from a local agency, with appointments available at our Brandon office.</p><strong>Explore Brandon services <ArrowRight size={18} /></strong></a>
        <a href="/medicare-insurance-agent-tampa-fl/" className={styles.localCard}><span>ACROSS THE BAY AREA</span><h3>Medicare help in Tampa</h3><p>Talk with our team about your coverage needs and the Medicare options we represent in your area.</p><strong>Explore Tampa services <ArrowRight size={18} /></strong></a>
      </div></div></section>
      <section id="plans" className={styles.section}><div className={styles.wrap}><p className={styles.eyebrow}>LET’S UNTANGLE THE OPTIONS</p><h2>Different Coverage. Different Tradeoffs.</h2><p className={styles.lead}>Get familiar with the choices before we talk about what matters to you.</p><div className={styles.three + " " + styles.planCards}>
        {[["Medicare Advantage", "Learn about private plans that provide your Part A and Part B benefits.", "/medicare-advantage-florida/"], ["Medicare Supplement", "Understand how Medigap works alongside Original Medicare.", "/medicare-supplement/"], ["Part D prescription coverage", "Learn what to consider when comparing prescription drug coverage.", "/medicare-part-d/"]].map(([title, text, href]) => <a href={href} className={styles.card} key={title}><h3>{title}</h3><p>{text}</p><span className={styles.textLink}>Learn more <ArrowRight size={18} /></span></a>)}
      </div></div></section>
      <section id="resources" className={styles.resourceSection}><div className={styles.wrap}><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>A LITTLE KNOWLEDGE. A LOT MORE CONFIDENCE.</p><h2>Good Questions Deserve Clear Answers.</h2></div><a className={styles.textLink} href="/resources/">Explore our resources <ArrowRight size={18} /></a></div><div className={styles.three}>
        {[
          { Icon: BookOpen, label: "THE BASICS", title: "New to the Medicare Alphabet?", text: "Start with a plain-language introduction to the parts of Medicare.", href: "/medicare-101/" },
          { Icon: CalendarDays, label: "YOUR TIMELINE", title: "When Should You Get Started?", text: "Use the enrollment calculator to explore your Medicare timing.", href: "/enrollment-calculator/" },
          { Icon: RefreshCw, label: "THE BIG DECISION", title: "Original Medicare or Advantage?", text: "Understand the differences and the questions worth asking.", href: "/original-vs-advantage/" },
        ].map(({ Icon, label, title, text, href }) => <a href={href} className={styles.resourceCard} key={href}><div className={styles.resourceArt}><Icon size={52} strokeWidth={1.5} /><span>{label}</span></div><div><h3>{title}</h3><p>{text}</p><span className={styles.textLink}>Take a look <ArrowRight size={18} /></span></div></a>)}
      </div></div></section>
      <section className={styles.faq}><div className={styles.wrap + " " + styles.two}><div><p className={styles.eyebrow}>BEFORE WE TALK</p><h2>A few questions you might have.</h2><p>Have something else on your mind?<br /><a href="tel:+18136995559">Call us at 813-699-5559.</a></p></div><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
      <section id="consultation" className={styles.consultation}><div className={styles.wrap + " " + styles.two}><div><p className={styles.eyebrow}>LET’S FIND YOUR NEXT STEP</p><h2>You bring the questions.<br />We’ll help you sort through them.</h2><p>No-cost Medicare guidance from our Brandon team.</p></div><div className={styles.contactCard}><h3>Talk with a local agent.</h3><a className={styles.primary} href="tel:+18136995559"><Phone size={18} />Call 813-699-5559</a><a className={styles.contactLink} href="/contact/">Prefer to write? Contact our team <ArrowRight size={18} /></a><p>915 Oakfield Dr, Suite A<br />Brandon, FL 33511<br /><small>Office visits by appointment.</small></p></div></div></section>
    </main>
    <footer className={styles.footer}><div className={styles.wrap}><div className={styles.footerTop}><div><strong>Medicare Information Project</strong><p>Local guidance. Informed choices.</p><a href="tel:+18136995559">813-699-5559</a></div><nav aria-label="Footer navigation"><a href="/our-team/">Our team</a><a href="/resources/">Resources</a><a href="/contact/">Contact</a><a href="/privacy-policy/">Privacy policy</a><a href="/terms-and-conditions/">Terms of use</a></nav></div><p className={styles.disclosure}>We do not offer every plan available in your area. Currently we represent 17 organizations which offer 149 products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options. We are not part of, affiliated with, reviewed, or endorsed by CMS. A non-government entity.</p><small>© {new Date().getFullYear()} Medicare Information Project. 915 Oakfield Dr, Suite A, Brandon, FL 33511.</small></div></footer>
  </div>;
}
