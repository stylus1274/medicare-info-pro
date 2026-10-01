import type { Metadata } from "next";
import { ArrowRight, Phone, MapPin, ShieldCheck, BookOpen, BriefcaseBusiness, RefreshCw, Check, Users, CalendarDays, HeartHandshake, Star } from "lucide-react";
import Header from "@/components/Header";
import Footer from "./PreviewFooter";
import styles from "./preview.module.css";

export const metadata: Metadata = {
  title: { absolute: "Medicare Insurance Agents in Brandon, FL | MIP" },
  description: "Compare Medicare Advantage, Medigap and Part D with independent agents in Brandon, FL. No-cost consultations by appointment, phone or video.",
  robots: { index: false, follow: true, googleBot: { index: false, follow: true } },
  alternates: { canonical: "/homepage-preview-v3/" },
  openGraph: { title: "Medicare Insurance Agents in Brandon, FL | MIP", description: "Independent Medicare guidance from our Brandon office.", url: "/homepage-preview-v3/" },
  twitter: { card: "summary", title: "Medicare Insurance Agents in Brandon, FL | MIP", description: "Independent Medicare guidance from our Brandon office." },
};

const cdn = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/";
const journeys = [
  { Icon: BookOpen, title: "I'm new to Medicare", image: "journey-new-medicare-v2-j3d35iiZZX3bqSXQUaRxTp.webp", text: "Turning 65? Start with the basics, understand your choices, and get ready for your enrollment window.", link: "/turning-65-brandon-fl/", cta: "See your first steps" },
  { Icon: BriefcaseBusiness, title: "I'm working past 65", image: "journey-working-65_04a993cd.jpg", text: "Still on an employer plan? Learn how your coverage and Medicare fit together before making a change.", link: "/medicare-and-employer-insurance-after-65-brandon-fl/", cta: "Explore employer coverage" },
  { Icon: RefreshCw, title: "I already have Medicare", image: "journey-already-enrolled_8b3cb1ab.jpg", text: "Life changes. Your coverage deserves another look when your doctors, prescriptions, or needs change.", link: "/annual-enrollment-period-guide/", cta: "Prepare for a plan review" },
];
// Existing agency portraits and profile links, with equal prominence for every agent.
const upload = "https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/";
const agents = [
  { name: "Gregory Wohl", license: "D009743", slug: "greg-wohl", photo: `${cdn}greg-wohl_13284fbb.png` },
  { name: "Jennifer C. Loader-Wohl", license: "W013380", slug: "jennifer-loader-wohl", photo: `${upload}TSQcrEEFLcDPIxvF.jpeg` },
  { name: "Jose F. Diaz (JD)", license: "W613730", slug: "jd-diaz", photo: `${upload}umTZhAAQfOQACkLq.jpg` },
  { name: "Chris Gallimore", license: "P117166", slug: "chris-gallimore", photo: `${upload}BWlfPJNxFqQKGDUL.jpeg` },
  { name: "Paul Eckstein", license: "A075214", slug: "paul-eckstein", photo: `${upload}LCWjVjohdZHMUbko.jpeg` },
  { name: "Kelly Webb", license: "W127785", slug: "kelly-webb", photo: `${upload}vHaBgismTMBqborq.jpg` },
  { name: "Valerie Hall", license: "W336278", slug: "valerie-justin-hall", photo: `${upload}jbHdOJHhDBcDkoQp.png` },
  { name: "Mark VanHoesen", license: "W16104983", slug: "mark-vanhoesen", photo: `${upload}gISbkFqSnQEUvXao.jpg` },
];
const faqs = [
  ["Where is your Brandon Medicare office?", "Our office is at 915 Oakfield Dr, Suite A, Brandon, FL 33511. Office visits are by appointment. Call 813-699-5559 to arrange a visit, or request a phone or video consultation."],
  ["Is there a fee to work with your Medicare agents?", "Our Medicare consultations and enrollment assistance are available at no cost. Ask our team how the agency works and which insurance plans we represent before deciding on your next steps."],
  ["Can you help compare coverage for my doctors and prescriptions?", "Yes. Bring your doctor and specialist names, preferred hospitals and pharmacies, and a current prescription list. Our agents help review provider networks, drug coverage, and costs for the plans we represent. Coverage and participation can change, so details need to be checked for the specific plan and year."],
  ["Can you review my current Medicare plan?", "Yes. Our team helps people who already have Medicare review their coverage and compare the options we represent. Bring your current plan information and any notices about changes to doctors, prescriptions, benefits, or costs. Your ability to make a change depends on your enrollment period and circumstances."],
  ["What should I bring to my appointment?", "Bring your Medicare card if you have one, current insurance or plan materials, a prescription list with dosages, and the names of the doctors and pharmacies you want to use. If you are still working, include information about your employer coverage."],
  ["Do you offer every Medicare plan available in Brandon?", "We do not offer every plan available in your area. We help you compare the plans we represent. Medicare.gov, 1-800-MEDICARE and your State Health Insurance Assistance Program (SHIP) can provide information on all of your options."],
];

const BBB_PROFILE = "https://www.bbb.org/us/fl/brandon/profile/health-insurance/medicare-information-project-0653-90450280";
const OFFICE_DIRECTIONS = "https://www.google.com/maps/dir/?api=1&destination=915+Oakfield+Dr+Suite+A+Brandon+FL+33511";

// Transcribed verbatim from the four Google review screenshots supplied by the user.
// Display each review's rating without dates or an aggregate rating claim.
const customerReviews = [
  { name: "gus sails", rating: 5, text: "Greg is a very knowledgeable, thorough, trustworthy and pleasant person in all aspects, specially regarding my Insurance needs.\nWe have become trusted friends.\nGus." },
  { name: "April Angel", rating: 5, text: "My rep, Mark looks out for my best interest year after year! So refreshing to find a trusted and honest person. Thank you Mark!!" },
  { name: "Juan Cueto", rating: 5, text: "Jennifer and her team are some of the nicest people I've ever met in the best in the business thank you so much Juan" },
  { name: "Dennis Bowlin", rating: 5, text: "Valerie is very knowledgeable about Medicare plans and to help you find the right one. Goes above and beyond to get the right one for you and your needs." },
];

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://medicareinfopro.com/homepage-preview-v3/#webpage",
  name: "Independent Medicare Insurance Agents in Brandon, FL",
  url: "https://medicareinfopro.com/homepage-preview-v3/",
  about: { "@id": "https://medicareinfopro.com/#organization" },
  publisher: { "@id": "https://medicareinfopro.com/#organization" },
};


export default function HomepagePreviewV3() {
  return <div className={styles.page}>
    <a className={styles.skip} href="#preview-main">Skip to content</a>
    <div className={styles.previewBar}><strong>Homepage version 3</strong><span>For comparison</span><a href="/homepage-preview/">View version 2</a><a href="/">View live homepage</a></div>
    <Header />
    <main id="preview-main">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }} />
      <section className={styles.hero}>
        <div className={styles.wrap + " " + styles.heroGrid}>
          <div className={styles.heroCopy}><p className={styles.eyebrow}><MapPin size={16} /> BRANDON ROOTS. TAMPA BAY REACH.</p>
            <h1>Independent Medicare<br />Insurance Agents<br /><span>in Brandon, FL</span></h1>
            <p className={styles.heroTagline}>Medicare questions? Let’s make sense of them. Together.</p><p className={styles.intro}>Compare Medicare Advantage, Medicare Supplement (Medigap), and Part D plans we represent with a licensed local agent. Start with your doctors, prescriptions, current coverage, and budget.</p>
            <div className={styles.actions}><a className={styles.primary} href="/contact/">Request a free consultation <ArrowRight size={18} /></a><a className={styles.secondary} href="tel:+18136995559"><Phone size={17} /> Call a local agent</a></div>
            <p className={styles.small}>Phone, video, or an appointment at our Brandon office.</p>
          </div>
          <div className={styles.heroPhoto}><img src={`${cdn}mip-hero-couple_181d53a9.jpg`} alt="A couple discussing their Medicare options" width="900" height="800" fetchPriority="high" /><div className={styles.photoNote}><HeartHandshake size={30} /><div><strong>A little clarity goes a long way.</strong><span>Real conversations. A team in your corner.</span></div></div></div>
        </div>
      </section>
      <div className={styles.trust}><span><ShieldCheck /> Licensed independent agents</span><span><MapPin /> A local office in Brandon</span><span><Check /> No-cost consultations</span></div>
      <section id="start" className={styles.section}><div className={styles.wrap}>
        <div className={styles.centerHeading}><p className={styles.eyebrow}>YOUR NEXT CHAPTER STARTS HERE</p><h2>Medicare Looks Different for Everyone.</h2><p className={styles.lead}>Start with what’s happening in your life. We’ll help you find your way from there.</p></div>
        <div className={styles.three}>{journeys.map(({ Icon, title, image, text, link, cta }) => <a className={styles.journeyCard} href={link} key={title}><div className={styles.journeyPhoto}><img src={`${cdn}${image}`} alt="" width="600" height="380" loading="lazy" /><span><Icon size={17} />{title}</span></div><div className={styles.journeyBody}><h3>{title}</h3><p>{text}</p><span className={styles.textLink}>{cta}<ArrowRight size={18} /></span></div></a>)}</div>
        <div style={{ paddingTop: 44, maxWidth: 1060, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ maxWidth: "none", textWrap: "balance" }}>Medicare Plan Comparison and Enrollment Help in&nbsp;Brandon</h2>
          <p style={{ color: "#52617a", fontSize: 18, lineHeight: 1.85 }}>Medicare Information Project is an independent Medicare insurance agency based in <a href="/medicare-insurance-agent-brandon-fl/" style={{ color: "#1a3fa8", textDecoration: "underline" }}>Brandon, FL</a>, serving <a href="/medicare-insurance-agent-tampa-fl/" style={{ color: "#1a3fa8", textDecoration: "underline" }}>Tampa</a> and surrounding Tampa Bay communities. Our licensed agents help you <a href="/comparing-medicare-plans-brandon/" style={{ color: "#1a3fa8", textDecoration: "underline" }}>compare Medicare plans</a> we represent, understand enrollment deadlines, and review how coverage fits your doctors, prescriptions, and budget. From preparing for Medicare at 65 to reviewing an existing plan, we provide personal guidance and enrollment assistance at no cost. Meet with our team by appointment at our Brandon office, or connect by phone or video for help with your next Medicare decision.</p>
        </div>
      </div></section>
      <section className={styles.processSection}><div className={styles.wrap}><p className={styles.eyebrow}>LESS SECOND-GUESSING. MORE UNDERSTANDING.</p><h2>You Don’t Have to Figure It Out Alone.</h2><div className={styles.three}>
        {[["01", "Tell us what matters", "We start with your doctors, prescriptions, budget, and the questions on your mind."], ["02", "Compare your options", "We explain the plans we represent, including costs, provider networks, and tradeoffs."], ["03", "Get help moving forward", "When you're ready, we help with enrollment and stay available for questions along the way."]].map(([num, title, text]) => <div className={styles.step} key={num}><span>{num}</span><h3>{title}</h3><p>{text}</p></div>)}
      </div></div></section>
      <section className={styles.proofSection} aria-labelledby="why-local">
        <div className={styles.wrap}>
          <div className={styles.centerHeading}><p className={styles.eyebrow}>A LOCAL AGENCY YOU CAN GET TO KNOW</p><h2 id="why-local">Real People. A Local Office. Clear Credentials.</h2><p className={styles.lead}>Know who you are speaking with and where to turn when you need help.</p></div>
          <div className={styles.three}>
            <a className={styles.proofCard} href={BBB_PROFILE} target="_blank" rel="noopener noreferrer"><ShieldCheck size={28} /><h3>BBB Accredited, A+ Rated</h3><p>See our accreditation, business details, and customer feedback on the Better Business Bureau website.</p><span className={styles.textLink}>View our BBB profile</span></a>
            <a className={styles.proofCard} href={BBB_PROFILE} target="_blank" rel="noopener noreferrer"><CalendarDays size={28} /><h3>Established in 2010</h3><p>Our BBB profile lists the agency’s business start date as January 1, 2010, with an office here in Brandon.</p><span className={styles.textLink}>See our business history</span></a>
            <a className={styles.proofCard} href="/our-team/"><Users size={28} /><h3>Licensed, Independent Agents</h3><p>Meet the people behind MIP. Review agent profiles, Florida license details, and areas of experience.</p><span className={styles.textLink}>Meet our licensed team</span></a>
          </div>
          <div className={styles.reviewHeading}><h3>What Customers Have Shared on Google</h3></div>
          <div className={styles.reviewGrid}>{customerReviews.map(review => <figure className={styles.reviewCard} key={review.name}>
            <div className={styles.reviewMeta}>
              <span className={styles.reviewStars} role="img" aria-label={`${review.rating} out of 5 stars`}>{Array.from({ length: review.rating }, (_, i) => <Star key={i} size={20} fill="currentColor" strokeWidth={0} aria-hidden="true" />)}</span>
              <span className={styles.googleBrand} role="img" aria-label="Google">
                <svg width="24" height="24" viewBox="0 0 48 48" aria-hidden="true" focusable="false">
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z" />
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6C44.4 38.02 46.98 31.86 46.98 24.55Z" />
                  <path fill="#FBBC05" d="M10.53 28.59A14.41 14.41 0 0 1 9.75 24c0-1.59.27-3.13.76-4.59l-7.98-6.19A23.87 23.87 0 0 0 0 24c0 3.87.93 7.53 2.56 10.78l7.97-6.19Z" />
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z" />
                </svg><span aria-hidden="true">Google</span>
              </span>
            </div>
            <blockquote><p>“{review.text}”</p></blockquote><figcaption><strong>{review.name}</strong><span>Google review</span></figcaption>
          </figure>)}</div>
        </div>
      </section>
      <section id="team" className={styles.teamSection}><div className={styles.wrap}>
        <div className={styles.sectionHeading}><div><p className={styles.eyebrow}><Users size={18} /> PEOPLE FIRST. MEDICARE SECOND.</p><h2>Meet the People in Your Corner.</h2><p className={styles.lead}>A whole team of licensed agents. One shared goal: helping you feel more confident about your Medicare decisions. Get to know the people behind Medicare Information Project.</p></div><a className={styles.secondary} href="/our-team/">Get to know our team <ArrowRight size={18} /></a></div>
        <div className={styles.agentGrid}>{agents.map(agent => <a href={`/${agent.slug}/`} className={styles.agentCard} key={agent.slug}><div className={styles.agentPhoto}><img src={agent.photo} alt={agent.name} width="280" height="280" loading="lazy" /></div><div><h3>{agent.name}</h3><p>Licensed Medicare Agent</p><p className={styles.agentLicense}>FL License #{agent.license}</p><span>Meet {agent.name.split(" ")[0]} <ArrowRight size={14} /></span></div></a>)}</div>
      </div></section>
      <section id="local" className={styles.localSection}>
        <div className={styles.wrap}>
          <p className={styles.eyebrow}>915 OAKFIELD DR · BRANDON, FL 33511</p>
          <h2>Visit Our Brandon Medicare Office</h2>
          <p className={styles.lead}>Meet with our team by appointment, or get personal help by phone or video. Our Brandon office also serves people across Tampa Bay.</p>
          <div className={styles.officeGrid}>
            <div className={styles.officeCard}>
              <MapPin size={30} /><h3>Your Local Point of Contact</h3>
              <address><strong>Medicare Information Project</strong><br />915 Oakfield Dr, Suite A<br />Brandon, FL 33511</address>
              <p className={styles.appointmentNote}><CalendarDays size={19} />Office visits by appointment. Call before visiting.</p>
              <div className={styles.actions}><a className={styles.primary} href={OFFICE_DIRECTIONS} target="_blank" rel="noopener noreferrer">Get Directions</a><a className={styles.secondary} href="tel:+18136995559"><Phone size={17} />813-699-5559</a></div>
              <a className={styles.textLink} href="/medicare-insurance-agent-brandon-fl/">Learn about our Brandon Medicare agents</a>
            </div>
            <div className={styles.officePrep}>
              <h3>Make Your Appointment More Useful</h3>
              <p>Bring the details that help us understand your everyday care and coverage needs.</p>
              <ul><li><Check size={19} />Your doctors, specialists, and preferred hospitals</li><li><Check size={19} />Prescriptions, dosages, and preferred pharmacies</li><li><Check size={19} />Your Medicare card and current insurance information</li><li><Check size={19} />Questions about costs, coverage, or enrollment</li></ul>
              <a className={styles.secondary} href="/contact/">Request Your Free Consultation</a>
              <p className={styles.tampaNote}>Looking for guidance in Tampa? <a href="/medicare-insurance-agent-tampa-fl/">Explore our Tampa Medicare services.</a></p>
            </div>
          </div>
        </div>
      </section>
      <section id="plans" className={styles.section}><div className={styles.wrap}><p className={styles.eyebrow}>LET’S UNTANGLE THE OPTIONS</p><h2>Compare Medicare Coverage With a Brandon Agent</h2><p className={styles.lead}>Understand the differences, then review the plans we represent for your location and needs.</p><div className={styles.three + " " + styles.planCards}>
        {[["Medicare Advantage", "Review provider networks, hospital participation, prescription coverage, and out-of-pocket costs. We help compare the plans we represent for your Brandon ZIP code.", "/medicare-advantage-plans-brandon-florida/"], ["Medicare Supplement (Medigap)", "Understand coverage alongside Original Medicare, compare policy benefits and premiums, and discuss enrollment and underwriting considerations.", "/medicare-supplement-insurance-plans-brandon/"], ["Part D Prescription Drug Plans", "Review your medications, dosages, preferred pharmacies, and expected drug costs. Compare the prescription drug plans we represent.", "/medicare-part-d/"]].map(([title, text, href]) => <a href={href} className={styles.card} key={title}><h3>{title}</h3><p>{text}</p><span className={styles.textLink}>Learn more <ArrowRight size={18} /></span></a>)}
      </div><div className={styles.serviceLinks}><a href="/comparing-medicare-plans-brandon/">Compare Medicare Plans in Brandon</a><a href="/medicare-enrollment-assistance-in-brandon-fl/">Medicare Enrollment Help in Brandon</a></div></div></section>
      <section id="resources" className={styles.resourceSection}><div className={styles.wrap}><div className={styles.sectionHeading}><div><p className={styles.eyebrow}>A LITTLE KNOWLEDGE. A LOT MORE CONFIDENCE.</p><h2>Good Questions Deserve Clear Answers.</h2></div><a className={styles.textLink} href="/resources/">Explore our resources <ArrowRight size={18} /></a></div><div className={styles.three}>
        {[
          { Icon: BookOpen, label: "THE BASICS", title: "New to the Medicare Alphabet?", text: "Start with a plain-language introduction to the parts of Medicare.", href: "/medicare-101/" },
          { Icon: CalendarDays, label: "YOUR TIMELINE", title: "When Should You Get Started?", text: "Use the enrollment calculator to explore your Medicare timing.", href: "/enrollment-calculator/" },
          { Icon: RefreshCw, label: "THE BIG DECISION", title: "Original Medicare or Advantage?", text: "Understand the differences and the questions worth asking.", href: "/original-vs-advantage/" },
        ].map(({ Icon, label, title, text, href }) => <a href={href} className={styles.resourceCard} key={href}><div className={styles.resourceArt}><Icon size={52} strokeWidth={1.5} /><span>{label}</span></div><div><h3>{title}</h3><p>{text}</p><span className={styles.textLink}>Take a look <ArrowRight size={18} /></span></div></a>)}
      </div></div></section>
      <section className={styles.faq}><div className={styles.wrap + " " + styles.two}><div><p className={styles.eyebrow}>BEFORE WE TALK</p><h2>Questions About Medicare Help in Brandon</h2><p>Have something else on your mind?<br /><a href="tel:+18136995559">Call us at 813-699-5559.</a></p></div><div>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
      <section id="consultation" className={styles.consultation}><div className={styles.wrap + " " + styles.two}><div><p className={styles.eyebrow}>LET’S FIND YOUR NEXT STEP</p><h2>Ready to Talk With<br />a Brandon Medicare Agent?</h2><p>Request a no-cost consultation. We’ll help you understand your options and the next steps for your situation.</p></div><div className={styles.contactCard}><h3>Talk with a local agent.</h3><a className={styles.primary} href="tel:+18136995559"><Phone size={18} />Call 813-699-5559</a><a className={styles.contactLink} href="/contact/">Prefer to write? Contact our team <ArrowRight size={18} /></a><p>915 Oakfield Dr, Suite A<br />Brandon, FL 33511<br /><small>Office visits by appointment.</small></p></div></div></section>
    </main>
    <Footer />
  </div>;
}
