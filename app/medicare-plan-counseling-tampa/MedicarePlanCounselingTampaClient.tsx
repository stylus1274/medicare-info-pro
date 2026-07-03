"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Phone, MapPin, CheckCircle, Star, Clock, MessageSquare } from "lucide-react";

const FAQS = [
  {
    q: "What is Medicare plan counseling?",
    a: "Medicare plan counseling is a personalized, one-on-one session with a licensed Medicare specialist who helps you understand your options, compare plans, and make an informed enrollment decision. Unlike a sales call, counseling is education-focused. We explain how each plan type works, what it costs, and how it fits your specific situation before any enrollment decision is made.",
  },
  {
    q: "How is plan counseling different from just picking a plan online?",
    a: "Online plan finders show you premiums and star ratings, but they cannot tell you whether your specific doctors are in-network, whether your prescriptions are on the formulary, or how a plan's cost structure will affect you given your health history. A counseling session fills those gaps with personalized guidance.",
  },
  {
    q: "Do I need to bring anything to a counseling session?",
    a: "It helps to have a list of your current medications (name, dosage, frequency), your preferred pharmacy, and the names of your primary care doctor and any specialists you see regularly. We use that information to compare plans accurately. If you do not have everything ready, we can still have a productive session.",
  },
  {
    q: "Is Medicare plan counseling available by phone or video?",
    a: "Yes. Most of our counseling sessions are conducted by phone or video call. We also offer in-person sessions at our Brandon office for those who prefer to meet face to face.",
  },
  {
    q: "How long does a plan counseling session take?",
    a: "An initial counseling session typically takes 30 to 45 minutes. If you want to do a full plan comparison at the same time, plan for about an hour. We work at your pace.",
  },
];


const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Schedule a Free Session",
  "url": "https://medicareinfopro.com/medicare-plan-counseling-tampa",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "about": {
    "@type": "MedicalCondition",
    "name": "Medicare"
  },
  "audience": {
    "@type": "Patient"
  }
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-plan-counseling-tampa#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Tampa, FL.",
  "url": "https://medicareinfopro.com/medicare-plan-counseling-tampa",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tampa",
    "addressRegion": "FL",
    "postalCode": "33602",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tampa"
  },
  "serviceType": "Medicare Insurance Consulting",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;

export default function MedicarePlanCounselingTampaClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#0d2260] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <nav className="flex items-center gap-2 text-blue-300 text-sm mb-4" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <span className="text-white">Medicare Plan Counseling Tampa</span>
              </nav>
              <div className="inline-block bg-[#f5a800] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Tampa, FL
              </div>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Medicare Plan Counseling in Tampa, FL
              </h1>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                Personalized, one-on-one Medicare plan counseling for Tampa residents. We help you understand your options, compare plans side by side, and choose the coverage that fits your doctors, prescriptions, and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/free-consultation"
                  className="inline-flex items-center justify-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors"
                >
                  Schedule Free Counseling Session
                </Link>
                <a
                  href="tel:8136995559"
                  className="inline-flex items-center justify-center gap-2 border border-blue-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  813-699-5559
                </a>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="font-bold text-white mb-4">What We Cover in a Session</div>
              <ul className="space-y-3">
                {[
                  "How Parts A, B, C, and D work together",
                  "Original Medicare vs. Medicare Advantage trade-offs",
                  "Medigap plan options and open enrollment timing",
                  "Part D drug plan comparison for your specific medications",
                  "Doctor and hospital network verification",
                  "Cost projections based on your health usage",
                  "Enrollment timing and penalty avoidance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-blue-100 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#f5a800] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <div className="bg-amber-50 border-b border-amber-200 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-800 text-xs text-center">
            Medicare Information Project is not affiliated with or endorsed by the U.S. government or the federal Medicare program. Plan availability, benefits, and provider networks vary by carrier, location, and year.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* How It Works */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                How Our Plan Counseling Works
              </h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Schedule a Free Session", desc: "Call us or submit the form on our Free Consultation page. We schedule a 30 to 60 minute session by phone, video, or in person at our Brandon office." },
                  { step: "2", title: "We Learn About Your Situation", desc: "We ask about your doctors, prescriptions, preferred pharmacy, budget, and health priorities. The more we know, the more accurate our comparison will be." },
                  { step: "3", title: "We Compare Your Options", desc: "We pull every plan available in your ZIP code and compare them based on your specific situation. We explain the trade-offs of each option clearly and honestly." },
                  { step: "4", title: "You Decide, We Help Enroll", desc: "There is no pressure to enroll during the session. When you are ready, we handle the paperwork and confirm your coverage is in place." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-[#1a3fa8] flex items-center justify-center text-white font-bold flex-shrink-0">
                      {step}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">{title}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Who Benefits */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Who Benefits from Plan Counseling
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: "First-Time Medicare Enrollees", desc: "Understanding the system before making your first enrollment decision" },
                  { title: "Annual Plan Reviewers", desc: "Making sure your current plan is still the best option for this year" },
                  { title: "Employer Coverage Transitions", desc: "Navigating the move from group health insurance to Medicare" },
                  { title: "Plan Switchers", desc: "Evaluating whether switching plans during AEP makes financial sense" },
                  { title: "Caregivers", desc: "Helping adult children understand Medicare on behalf of a parent" },
                  { title: "Recent Movers", desc: "Reviewing plan options after relocating to the Tampa area" },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <MessageSquare className="w-5 h-5 text-[#1a3fa8] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{title}</div>
                      <div className="text-gray-600 text-xs mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                What Tampa Clients Say
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "Patricia M.", location: "Palma Ceia, Tampa", text: "I had been putting off dealing with Medicare for months because it seemed so complicated. One session and everything clicked. They are patient, thorough, and genuinely helpful." },
                  { name: "Robert D.", location: "Citrus Park", text: "I came in thinking I wanted Medicare Advantage. After the counseling session, I realized Medigap was a much better fit for my situation. I am glad I took the time to understand the difference." },
                ].map(({ name, location, text }) => (
                  <div key={name} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#f5a800] text-[#f5a800]" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">"{text}"</p>
                    <div className="font-semibold text-gray-900 text-sm">{name}</div>
                    <div className="text-gray-500 text-xs">{location}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-2">
                {FAQS.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                      {openFaq === i ? (
                        <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 bg-white border-t border-gray-100">
                        <p className="text-gray-600 text-sm leading-relaxed pt-3">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-[#1a3fa8] rounded-2xl p-6 text-white sticky top-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-[#f5a800]">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png"
                  alt="Greg Wohl, Licensed Medicare Agent"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-bold text-lg mb-0.5">Greg Wohl</div>
              <div className="text-blue-300 text-sm mb-4">Licensed Medicare Counselor, Brandon FL</div>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">
                I offer free, no-pressure Medicare plan counseling sessions by phone, video, or in person. Let me help you make sense of your options.
              </p>
              <Link
                href="/free-consultation"
                className="block text-center bg-[#f5a800] text-white font-bold px-4 py-3 rounded-lg hover:bg-amber-400 transition-colors mb-3"
              >
                Schedule Free Session
              </Link>
              <a
                href="tel:8136995559"
                className="flex items-center justify-center gap-2 border border-blue-400 text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-blue-800 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                813-699-5559
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Related Pages</div>
              <ul className="space-y-2">
                {[
                  { label: "Medicare Insurance Agent Tampa FL", href: "/medicare-insurance-agent-tampa-fl" },
                  { label: "Medicare Consulting Services Tampa", href: "/medicare-consulting-services-tampa" },
                  { label: "Plan Comparison Tool", href: "/plan-comparison" },
                  { label: "Cost Estimator", href: "/cost-estimator" },
                  { label: "Tampa Medicare Specialist", href: "/tampa-medicare-specialist" },
                  { label: "Free Consultation", href: "/free-consultation" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-[#1a3fa8] hover:underline text-sm">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Our Office</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#1a3fa8] mt-0.5 flex-shrink-0" />
                  <span>Brandon, FL 33511<br />(Short drive from Tampa)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#1a3fa8] flex-shrink-0" />
                  <a href="tel:8136995559" className="hover:text-[#1a3fa8]">813-699-5559</a>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#1a3fa8] mt-0.5 flex-shrink-0" />
                  <span>By appointment only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#0d2260] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
            Ready for a Free Plan Counseling Session?
          </h2>
          <p className="text-blue-200 mb-6">
            Serving Tampa and the entire Tampa Bay area. No pressure, no cost, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/free-consultation"
              className="inline-flex items-center justify-center bg-[#f5a800] text-white font-bold px-8 py-3 rounded-lg hover:bg-amber-400 transition-colors"
            >
              Schedule Free Session
            </Link>
            <a
              href="tel:8136995559"
              className="inline-flex items-center justify-center gap-2 border border-blue-400 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              813-699-5559
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
  );
}
