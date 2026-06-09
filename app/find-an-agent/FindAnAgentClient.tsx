"use client";

/* ==========================================================================
   FindAnAgentClient — Next.js App Router
   "Find a Licensed Medicare Agent Near You" — trust-building landing page
   Design: navy/gold MIP brand, agent profile card, trust signals, CTA
   ========================================================================== */

import Link from "next/link";
import {
  Phone,
  MapPin,
  Star,
  Shield,
  CheckCircle,
  Award,
  Users,
  Clock,
  ChevronRight,
  Mail,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Data ─────────────────────────────────────────────────────────────────────

const TRUST_STATS = [
  { value: "17+", label: "Insurance carriers represented", icon: Shield },
  { value: "149", label: "Medicare products available", icon: Award },
  { value: "6", label: "States served", icon: MapPin },
  { value: "A+", label: "BBB Rating", icon: Star },
];

const STATES_SERVED = [
  "Florida",
  "Georgia",
  "North Carolina",
  "Arkansas",
  "Kansas",
  "Texas",
];

const WHY_INDEPENDENT = [
  {
    title: "We Work for You, Not an Insurance Company",
    body: "As independent agents, we are not tied to any single carrier. We compare plans from all major insurers in your area and recommend the one that best fits your health needs and budget.",
    icon: Shield,
  },
  {
    title: "No Cost to You",
    body: "Our services are completely free to Medicare beneficiaries. We are compensated by insurance companies when you enroll, so you never pay a fee for our guidance.",
    icon: CheckCircle,
  },
  {
    title: "Local Knowledge, Nationwide Reach",
    body: "We specialize in Florida Medicare plans and have deep knowledge of local provider networks, plan availability, and regional pricing differences that can significantly affect your coverage.",
    icon: MapPin,
  },
  {
    title: "Licensed and Credentialed",
    body: "All of our agents are licensed in the states they serve and hold current certifications with every carrier we represent. We complete annual training to stay current on plan changes.",
    icon: Award,
  },
  {
    title: "No Pressure, Ever",
    body: "We believe in education first. We will walk you through your options, answer every question, and give you time to decide. You will never feel rushed or pressured to enroll.",
    icon: Users,
  },
  {
    title: "Year-Round Support",
    body: "Our relationship does not end when you enroll. We are available year-round to help with billing questions, coverage issues, and annual plan reviews during the enrollment period.",
    icon: Clock,
  },
];

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Call or Request a Consultation",
    body: "Reach out by phone or fill out our contact form. We will schedule a convenient time to talk: by phone, video call, or in person at our Brandon, FL office.",
  },
  {
    step: "2",
    title: "Tell Us About Your Situation",
    body: "We will ask about your doctors, medications, budget, and health needs. The more we know, the better we can match you to the right plan.",
  },
  {
    step: "3",
    title: "Review Your Options Together",
    body: "We will present the plans available in your area that best fit your needs, with a clear side-by-side comparison of costs, coverage, and networks.",
  },
  {
    step: "4",
    title: "Enroll with Confidence",
    body: "When you are ready, we handle the enrollment paperwork and confirm your coverage is active. We stay available for any follow-up questions.",
  },
];

const AGENT = {
  name: "Greg Wohl",
  title: "Licensed Medicare Specialist",
  credentials: "Licensed in FL, GA, NC, SC, VA, OH, MI, AL, AR, KS, MD, TN, TX",
  phone: "813-699-5559",
  email: "greg@medicareinfopro.com",
  photo:
    "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png",
  bio: "Greg Wohl has been helping Florida seniors navigate Medicare for over a decade. As an independent agent, he represents 17 insurance organizations and is committed to finding the right fit for each client: not the highest commission. Greg is based in Brandon, FL and serves clients throughout Florida and five additional states.",
  highlights: [
    "BBB A+ Rated business",
    "17 carriers represented",
    "149 Medicare products available",
    "No-pressure, education-first approach",
  ],
};

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function FindAnAgentClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#0d2260] py-16" aria-label="Page header">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-[#f5a800] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            Free Consultation
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Find a Licensed Medicare Agent Near You
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Get personalized, unbiased Medicare guidance from an independent agent who represents all major carriers: at no cost to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8136995559"
              className="flex items-center justify-center gap-2 bg-[#f5a800] text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-amber-400 transition-colors"
            >
              <Phone className="w-5 h-5" /> Call 813-699-5559
            </a>
            <a
              href="https://medicareinfopro.com/contact/"
              className="flex items-center justify-center gap-2 bg-white/10 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-white/20 transition-colors border border-white/30"
            >
              Request a Consultation <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TRUST_STATS.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-6 h-6 text-[#1a3fa8] mx-auto mb-2" />
                <div className="text-3xl font-bold text-[#1a3fa8] font-serif">{stat.value}</div>
                <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Agent Profile */}
      <section className="py-16 bg-gray-50" aria-label="Meet your agent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
              Meet Your Medicare Specialist
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Work directly with a licensed, independent agent who puts your needs first.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
            <div className="md:flex">
              {/* Photo column */}
              <div className="md:w-64 shrink-0 bg-[#1a3fa8] flex items-center justify-center p-8">
                <div className="text-center">
                  <img
                    src={AGENT.photo}
                    alt={`${AGENT.name}, ${AGENT.title}`}
                    className="w-32 h-32 rounded-full object-cover border-4 border-white/30 mx-auto mb-4"
                  />
                  <h3 className="font-serif font-bold text-white text-lg">{AGENT.name}</h3>
                  <p className="text-blue-200 text-sm mt-1">{AGENT.title}</p>
                  <p className="text-blue-300 text-xs mt-1">{AGENT.credentials}</p>
                </div>
              </div>

              {/* Info column */}
              <div className="flex-1 p-8">
                <p className="text-gray-700 leading-relaxed mb-6">{AGENT.bio}</p>
                <ul className="grid sm:grid-cols-2 gap-2 mb-6">
                  {AGENT.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${AGENT.phone.replace(/-/g, "")}`}
                    className="flex items-center justify-center gap-2 bg-[#1a3fa8] text-white font-bold px-5 py-3 rounded-xl hover:bg-[#0d2870] transition-colors"
                  >
                    <Phone className="w-4 h-4" /> {AGENT.phone}
                  </a>
                  <a
                    href={`mailto:${AGENT.email}`}
                    className="flex items-center justify-center gap-2 bg-gray-100 text-gray-700 font-semibold px-5 py-3 rounded-xl hover:bg-gray-200 transition-colors"
                  >
                    <Mail className="w-4 h-4" /> {AGENT.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Independent */}
      <section className="py-16 bg-white" aria-label="Why choose an independent agent">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
              Why Work with an Independent Medicare Agent?
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              Not all Medicare agents are the same. Here is what sets independent agents apart.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_INDEPENDENT.map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6"
              >
                <div className="w-10 h-10 bg-[#1a3fa8] rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-serif font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50" aria-label="How the consultation process works">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
              How It Works
            </h2>
            <p className="text-gray-600">
              Getting personalized Medicare guidance is simple and free.
            </p>
          </div>
          <div className="space-y-6">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.step} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 bg-[#1a3fa8] rounded-full flex items-center justify-center text-white font-bold shrink-0">
                    {step.step}
                  </div>
                  {i < PROCESS_STEPS.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gray-200 mt-2" />
                  )}
                </div>
                <div className="pb-6">
                  <h3 className="font-serif font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* States Served */}
      <section className="py-12 bg-white border-t border-gray-100" aria-label="States served">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
            States We Serve
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {STATES_SERVED.map((state) => (
              <span
                key={state}
                className="flex items-center gap-1.5 bg-blue-50 border border-blue-200 text-[#1a3fa8] text-sm font-semibold px-4 py-2 rounded-full"
              >
                <MapPin className="w-3.5 h-3.5" /> {state}
              </span>
            ))}
          </div>
          <p className="text-gray-500 text-sm">
            Not in one of these states?{" "}
            <a
              href="https://medicareinfopro.com/contact/"
              className="text-[#1a3fa8] underline hover:text-blue-800"
            >
              Contact us
            </a>{" "}
            and we will do our best to connect you with a trusted agent in your area.
          </p>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-12 bg-gray-50 border-t border-gray-100" aria-label="Office location">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Visit Our Brandon, FL Office
              </h2>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#1a3fa8] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900">Medicare Information Project</p>
                    <p className="text-gray-600 text-sm">915 Oakfield Dr, Suite A</p>
                    <p className="text-gray-600 text-sm">Brandon, FL 33511</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#1a3fa8] shrink-0" />
                  <div>
                    <a href="tel:8136995559" className="font-semibold text-gray-900 hover:text-[#1a3fa8] transition-colors">
                      813-699-5559
                    </a>
                    <span className="text-gray-500 text-sm ml-2">(local)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#1a3fa8] shrink-0" />
                  <div>
                    <a href="tel:8888865840" className="font-semibold text-gray-900 hover:text-[#1a3fa8] transition-colors">
                      888-886-5840
                    </a>
                    <span className="text-gray-500 text-sm ml-2">(toll-free)</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-[#1a3fa8] shrink-0" />
                  <a
                    href="mailto:greg@medicareinfopro.com"
                    className="text-gray-700 hover:text-[#1a3fa8] transition-colors text-sm"
                  >
                    greg@medicareinfopro.com
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-[#1a3fa8] rounded-2xl p-8 text-center">
              <h3 className="font-serif text-xl font-bold text-white mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-blue-200 text-sm mb-5 leading-relaxed">
                Call us today or request a free consultation online. We are available Monday through Friday, 9 AM to 5 PM ET.
              </p>
              <div className="space-y-3">
                <a
                  href="tel:8136995559"
                  className="flex items-center justify-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-xl hover:bg-amber-400 transition-colors w-full"
                >
                  <Phone className="w-4 h-4" /> Call Now: 813-699-5559
                </a>
                <a
                  href="https://medicareinfopro.com/contact/"
                  className="flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20 w-full"
                >
                  Request Online Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-white border-t border-gray-100" aria-label="Related resources">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 text-center">
            Helpful Resources Before Your Consultation
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Am I Eligible for Medicare?", href: "/am-i-eligible" },
              { label: "Original Medicare vs. Advantage", href: "/original-vs-advantage" },
              { label: "Do I Need a Supplement?", href: "/do-i-need-a-supplement" },
              { label: "Enrollment Timeline", href: "/enrollment-timeline" },
              { label: "Understanding Part D", href: "/understanding-part-d" },
              { label: "Medicare Costs at a Glance", href: "/costs-at-a-glance" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center justify-between px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 hover:bg-blue-50 hover:border-blue-200 transition-all group"
              >
                <span className="text-sm font-semibold text-gray-800 group-hover:text-[#1a3fa8] transition-colors">
                  {link.label}
                </span>
                <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-[#1a3fa8] transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-500 leading-relaxed">
          <p className="font-semibold text-gray-700 mb-1">Compliance Disclosure</p>
          We do not offer every plan available in your area. Currently we represent 17 organizations which offer 149 products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options. We are not part of, affiliated with, reviewed, or endorsed by CMS. A non-government entity. Medicare Information Project | 915 Oakfield Dr, Suite A, Brandon, FL 33511 | 813-699-5559.
        </div>
      </div>

      <Footer />
    </div>
  );
}
