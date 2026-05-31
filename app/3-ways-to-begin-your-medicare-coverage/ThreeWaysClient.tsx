"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Phone, CheckCircle, ArrowRight, Info, Clock, Shield, BookOpen } from "lucide-react";

const STEPS = [
  {
    number: "01",
    icon: <Shield size={28} className="text-[#1a3fa8]" />,
    title: "Understand Your Eligibility",
    color: "#1a3fa8",
    bg: "#e8edf8",
    border: "#b8c8f0",
    summary: "Know when your enrollment window opens and whether you qualify now.",
    details: [
      { label: "Age 65 or older", desc: "U.S. citizens and permanent residents who have lived in the U.S. for at least 5 years become eligible at 65." },
      { label: "Under 65 with a disability", desc: "After 24 months of receiving SSDI, you are automatically enrolled in Medicare Parts A and B." },
      { label: "ESRD or ALS", desc: "End-Stage Renal Disease and ALS qualify you for Medicare at any age, often without a waiting period." },
    ],
    tip: "Your Initial Enrollment Period is a 7-month window: 3 months before your 65th birthday, your birthday month, and 3 months after. Enrolling in the first 3 months ensures your coverage starts on time.",
    cta: { label: "Check Your Eligibility", href: "/do-i-need-medicare" },
  },
  {
    number: "02",
    icon: <BookOpen size={28} className="text-[#0d6e4f]" />,
    title: "Learn the Parts of Medicare",
    color: "#0d6e4f",
    bg: "#e6f4ee",
    border: "#a8d8c2",
    summary: "Medicare has four parts. Understanding each one helps you build the right coverage plan.",
    details: [
      { label: "Part A: Hospital Insurance", desc: "Covers inpatient hospital stays, skilled nursing facility care, hospice, and some home health services. Usually free if you worked 10+ years." },
      { label: "Part B: Medical Insurance", desc: "Covers doctor visits, outpatient care, preventive screenings, and medical equipment. Standard premium is $185/month in 2025." },
      { label: "Part C: Medicare Advantage", desc: "An all-in-one alternative to Original Medicare offered by private insurers. Often includes dental, vision, hearing, and drug coverage." },
      { label: "Part D: Drug Coverage", desc: "Covers prescription drugs. Sold by private insurers. Each plan has its own formulary (list of covered drugs) and premium." },
    ],
    tip: "Most people choose either Original Medicare (Parts A + B) with a Medigap supplement and Part D, or Medicare Advantage (Part C) which bundles everything. Our agents can help you compare both paths.",
    cta: { label: "Explore the Parts", href: "/what-is-medicare" },
  },
  {
    number: "03",
    icon: <Clock size={28} className="text-[#7c3aed]" />,
    title: "Enroll in Medicare",
    color: "#7c3aed",
    bg: "#f3eeff",
    border: "#d4b8f8",
    summary: "There are three ways to enroll. Choose the one that works best for you.",
    details: [
      { label: "Online at SSA.gov", desc: "The fastest option. Visit ssa.gov/medicare and complete the application in about 10 minutes. Available 24/7." },
      { label: "By Phone", desc: "Call the Social Security Administration at 1-800-772-1213 (TTY: 1-800-325-0778). Representatives are available Monday through Friday, 8 AM to 7 PM." },
      { label: "In Person", desc: "Visit your local Social Security office. Bring your birth certificate, proof of U.S. citizenship or legal residency, and your Social Security card." },
    ],
    tip: "Before you enroll in a standalone Part D or Medicare Advantage plan, call us first. We can compare every plan available in your area and find the one that covers your specific medications at the lowest cost.",
    cta: { label: "Get Help Enrolling", href: "/free-consultation" },
  },
];

const WHAT_TO_HAVE = [
  "Social Security number",
  "Birth certificate or proof of age",
  "Proof of U.S. citizenship or legal residency",
  "W-2 forms or self-employment tax returns (if applicable)",
  "Military discharge papers (if applicable)",
  "Current insurance card (if you have employer coverage)",
  "List of current prescription medications",
];

export default function ThreeWaysClient() {
  return (
    <>
      <Header />
      <main className="bg-white">

        {/* Hero */}
        <section className="bg-[#0d2260] pt-16 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex items-center gap-2 mb-5">
              <Link href="/" className="text-blue-300 hover:text-white text-sm transition-colors">Home</Link>
              <ChevronRight size={13} className="text-blue-500" />
              <span className="text-blue-200 text-sm">3 Ways to Begin Your Medicare Coverage</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
              <CheckCircle size={12} /> Getting Started Guide
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl">
              3 Ways to Begin Your Medicare Coverage
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Starting Medicare does not have to be complicated. Whether you are approaching 65 or already eligible, these three steps will help you get the right coverage in place without stress or guesswork.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:8136995559" className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09600] transition-colors">
                <Phone size={16} /> Call 813-699-5559
              </a>
              <Link href="/free-consultation" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                Free Consultation <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {STEPS.map((step, i) => (
                <div key={step.number} className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                  {/* Step header */}
                  <div className="rounded-2xl p-6 border" style={{ background: step.bg, borderColor: step.border }}>
                    <div className="text-5xl font-black font-serif mb-3" style={{ color: step.color, opacity: 0.25 }}>{step.number}</div>
                    <div className="mb-3">{step.icon}</div>
                    <h2 className="font-serif text-xl font-bold text-gray-900 mb-2">{step.title}</h2>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{step.summary}</p>
                    <Link
                      href={step.cta.href}
                      className="inline-flex items-center gap-2 text-sm font-bold px-4 py-2 rounded-xl transition-colors"
                      style={{ background: step.color, color: "#fff" }}
                    >
                      {step.cta.label} <ArrowRight size={13} />
                    </Link>
                  </div>

                  {/* Step details */}
                  <div>
                    <div className="space-y-3 mb-5">
                      {step.details.map((d) => (
                        <div key={d.label} className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                          <div className="flex items-start gap-3">
                            <CheckCircle size={15} className="shrink-0 mt-0.5" style={{ color: step.color }} />
                            <div>
                              <div className="font-semibold text-gray-900 text-sm mb-0.5">{d.label}</div>
                              <div className="text-sm text-gray-600 leading-relaxed">{d.desc}</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="rounded-xl p-4 flex items-start gap-3 border" style={{ background: step.bg, borderColor: step.border }}>
                      <Info size={15} className="shrink-0 mt-0.5" style={{ color: step.color }} />
                      <p className="text-sm leading-relaxed" style={{ color: step.color }}>{step.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What to have ready */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">What to Have Ready Before You Enroll</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Having the right documents on hand makes the enrollment process faster and smoother. Whether you enroll online, by phone, or in person, gather these items in advance.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you are unsure about any of these documents or have questions about what applies to your situation, our agents can walk you through the process step by step.
                </p>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wider">Documents Checklist</div>
                <ul className="space-y-2.5">
                  {WHAT_TO_HAVE.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                      <CheckCircle size={14} className="text-[#1a3fa8] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0d2260] py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started? We Make It Simple.
            </h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Medicare Information Project serves beneficiaries across Florida, Georgia, North Carolina, Arkansas, Kansas, and Texas. Our independent agents compare every plan available in your area and guide you through enrollment at no cost to you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:8136995559" className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#e09600] transition-colors text-base">
                <Phone size={17} /> Call 813-699-5559
              </a>
              <Link href="/free-consultation" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-base">
                Request a Consultation <ArrowRight size={16} />
              </Link>
            </div>
            <p className="text-blue-300/60 text-xs mt-6">
              We do not offer every plan available in your area. Currently we represent 17 organizations which offer 149 products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local SHIP for information on all options.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
