"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Phone, MapPin, CheckCircle, Star, Clock, AlertTriangle } from "lucide-react";

const ENROLLMENT_WINDOWS = [
  {
    name: "Initial Enrollment Period (IEP)",
    timing: "7-month window around your 65th birthday",
    color: "border-l-[#1a3fa8]",
    details: "Starts 3 months before the month you turn 65, includes your birthday month, and ends 3 months after. This is your primary window to enroll in Medicare without penalty. Enrolling in the first 3 months ensures coverage starts on time.",
    penalty: "Enrolling late can result in a permanent Part B premium penalty of 10% for each 12-month period you were eligible but did not enroll.",
  },
  {
    name: "Annual Enrollment Period (AEP)",
    timing: "October 15 through December 7 each year",
    color: "border-l-[#f5a800]",
    details: "The main window to switch Medicare Advantage plans, switch from Medicare Advantage back to Original Medicare, join or change a Part D drug plan, or switch from Original Medicare to Medicare Advantage.",
    penalty: "No penalty for changes made during AEP. Coverage changes take effect January 1 of the following year.",
  },
  {
    name: "Special Enrollment Period (SEP)",
    timing: "Triggered by qualifying life events",
    color: "border-l-green-600",
    details: "You may qualify for a Special Enrollment Period if you lose employer coverage, move to a new area, gain or lose Medicaid eligibility, or experience other qualifying life events. SEP windows vary by event type.",
    penalty: "Missing your SEP window may result in having to wait until the next AEP or IEP, potentially leaving you without coverage.",
  },
  {
    name: "Medicare Advantage Open Enrollment (OEP)",
    timing: "January 1 through March 31 each year",
    color: "border-l-purple-600",
    details: "If you are already enrolled in a Medicare Advantage plan, you can switch to a different Medicare Advantage plan or return to Original Medicare during this period. You cannot use OEP to switch from Original Medicare to Medicare Advantage.",
    penalty: "No penalty. Coverage changes take effect the first day of the month after your request is processed.",
  },
];

const FAQS = [
  {
    q: "What happens if I miss my Initial Enrollment Period?",
    a: "If you miss your IEP without a qualifying reason, you may face a permanent Part B premium penalty of 10% for each 12-month period you were eligible but did not enroll. You will also have to wait until the next General Enrollment Period (January 1 through March 31) to enroll, with coverage starting July 1. Contacting us before your IEP window closes is the best way to avoid this.",
  },
  {
    q: "I am still working and have employer coverage. Do I need to enroll in Medicare at 65?",
    a: "It depends on the size of your employer. If your employer has 20 or more employees, your group plan is primary and you can delay Medicare Part B without penalty. If your employer has fewer than 20 employees, Medicare becomes primary at 65 and you should enroll to avoid gaps in coverage. We help you navigate this situation in detail during a free consultation.",
  },
  {
    q: "Can you help me enroll in Medicare online?",
    a: "Yes. Most Medicare enrollments can be completed online through Medicare.gov or SSA.gov. We walk you through the process step by step and can assist with the application during your consultation. For Medicare Advantage and Part D plans, we handle the carrier application directly.",
  },
  {
    q: "How long does Medicare enrollment take?",
    a: "Original Medicare enrollment through Social Security typically takes 2 to 4 weeks to process. Medicare Advantage and Part D plan enrollments are usually processed within a few days to a week. We always recommend enrolling well before your desired coverage start date.",
  },
  {
    q: "Can you help me switch plans during the Annual Enrollment Period?",
    a: "Absolutely. The Annual Enrollment Period (October 15 through December 7) is the primary window to review and change your Medicare coverage. We proactively reach out to our clients before AEP every year to review their current plan and compare it to new options.",
  },
];


const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Original Medicare (Parts A and B)",
  "url": "https://medicareinfopro.com/medicare-enrollment-assistance-in-tampa-fl",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;

export default function MedicareEnrollmentAssistanceTampaFL() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
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
                <span className="text-white">Medicare Enrollment Assistance Tampa</span>
              </nav>
              <div className="inline-block bg-[#f5a800] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Tampa, FL
              </div>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Medicare Enrollment Assistance in Tampa, FL
              </h1>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                Missing an enrollment window can cost you permanently. Our licensed agents help Tampa residents enroll in Medicare on time, in the right plan, without costly mistakes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/free-consultation"
                  className="inline-flex items-center justify-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors"
                >
                  Get Enrollment Help Now
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
            <div className="bg-red-900/30 rounded-2xl p-6 border border-red-400/30">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-400" />
                <div className="font-bold text-white">Enrollment Mistakes Are Costly</div>
              </div>
              <ul className="space-y-3">
                {[
                  "Part B late penalty: 10% per year, permanent",
                  "Part D late penalty: 1% per month, permanent",
                  "Missing IEP means waiting until next GEP",
                  "Wrong plan can mean losing your doctors",
                  "Observation status can affect SNF coverage",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-red-200 text-sm">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">!</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-red-400/30 text-blue-200 text-sm">
                We help you avoid all of these. Free consultation, no pressure.
              </div>
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

            {/* Enrollment Windows */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Medicare Enrollment Windows Explained
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Medicare has strict enrollment windows. Enrolling outside these windows can result in permanent premium penalties or coverage gaps. Understanding which window applies to your situation is the first step.
              </p>
              <div className="space-y-4">
                {ENROLLMENT_WINDOWS.map((w) => (
                  <div key={w.name} className={`bg-gray-50 rounded-xl p-5 border-l-4 border border-gray-100 ${w.color}`}>
                    <div className="font-bold text-gray-900 mb-1">{w.name}</div>
                    <div className="text-[#1a3fa8] text-sm font-semibold mb-2">{w.timing}</div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-2">{w.details}</p>
                    <div className="bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 text-amber-800 text-xs">
                      <strong>Important:</strong> {w.penalty}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* What We Help With */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                What Our Enrollment Assistance Covers
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: "Original Medicare (Parts A and B)", desc: "Enrollment through Social Security, timing guidance, penalty avoidance" },
                  { title: "Medicare Advantage (Part C)", desc: "Plan selection, network verification, carrier application" },
                  { title: "Medicare Supplement (Medigap)", desc: "Plan comparison, open enrollment window guidance, carrier application" },
                  { title: "Part D Drug Plans", desc: "Formulary review, pharmacy matching, enrollment assistance" },
                  { title: "Employer Coverage Coordination", desc: "Navigating Medicare alongside active employer group coverage" },
                  { title: "Annual Plan Changes", desc: "AEP review, plan switching, confirmation of new coverage" },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <CheckCircle className="w-5 h-5 text-[#1a3fa8] mt-0.5 flex-shrink-0" />
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
                  { name: "Linda S.", location: "Seminole Heights", text: "I almost missed my enrollment window because I did not realize my employer coverage situation was different from what I assumed. They caught it in time and saved me from a permanent penalty." },
                  { name: "Tom W.", location: "Carrollwood", text: "The enrollment process seemed overwhelming until I called. They walked me through every step, handled the paperwork, and I had confirmation of my coverage within a week." },
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
                  src="https://medicareinfopro.com/wp-content/uploads/2022/12/Greg-web-02.jpg"
                  alt="Greg Wohl, Licensed Medicare Agent"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-bold text-lg mb-0.5">Greg Wohl</div>
              <div className="text-blue-300 text-sm mb-4">Licensed Medicare Agent, Brandon FL</div>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">
                Enrollment windows close fast. Call or schedule a free consultation today to make sure you enroll on time and in the right plan.
              </p>
              <Link
                href="/free-consultation"
                className="block text-center bg-[#f5a800] text-white font-bold px-4 py-3 rounded-lg hover:bg-amber-400 transition-colors mb-3"
              >
                Get Enrollment Help
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
                  { label: "Enrollment Timeline", href: "/enrollment-timeline" },
                  { label: "Enrollment Calculator", href: "/enrollment-calculator" },
                  { label: "Am I Eligible?", href: "/am-i-eligible" },
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
            Do Not Risk a Permanent Penalty
          </h2>
          <p className="text-blue-200 mb-6">
            Our licensed agents help Tampa residents enroll on time and in the right plan. Free, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/free-consultation"
              className="inline-flex items-center justify-center bg-[#f5a800] text-white font-bold px-8 py-3 rounded-lg hover:bg-amber-400 transition-colors"
            >
              Get Enrollment Help Now
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
