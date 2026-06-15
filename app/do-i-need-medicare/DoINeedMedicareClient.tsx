"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight, ChevronDown, Phone, CheckCircle, AlertCircle,
  ArrowRight, Info, XCircle, HelpCircle
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const SCENARIOS = [
  {
    title: "You Are Turning 65 and Have No Employer Coverage",
    verdict: "Enroll Now",
    color: "#0d6e4f",
    bg: "#e6f4ee",
    border: "#a8d8c2",
    icon: <CheckCircle size={18} />,
    detail: "You should enroll in Parts A and B during your Initial Enrollment Period (the 7-month window around your 65th birthday). Missing this window without a qualifying reason will result in permanent late penalties.",
  },
  {
    title: "You Are Still Working at 65 with Employer Coverage",
    verdict: "You May Delay",
    color: "#b45309",
    bg: "#fef3e2",
    border: "#f8d49a",
    icon: <Info size={18} />,
    detail: "If your employer has 20 or more employees, your group plan is primary and you can delay Medicare without penalty. Once you retire or lose that coverage, you have an 8-month Special Enrollment Period to sign up.",
  },
  {
    title: "You Are 65 with COBRA or Retiree Coverage",
    verdict: "Enroll Now",
    color: "#991b1b",
    bg: "#fee2e2",
    border: "#fca5a5",
    icon: <AlertCircle size={18} />,
    detail: "COBRA and retiree coverage do NOT count as active employer coverage for Medicare purposes. You must enroll in Medicare when you become eligible or face permanent penalties. Do not delay based on COBRA.",
  },
  {
    title: "You Are Under 65 with a Disability",
    verdict: "Automatic Enrollment",
    color: "#1a3fa8",
    bg: "#e8edf8",
    border: "#b8c8f0",
    icon: <CheckCircle size={18} />,
    detail: "If you have received Social Security Disability Insurance (SSDI) for 24 months, you are automatically enrolled in Medicare Parts A and B. You will receive your Medicare card in the mail before your coverage begins.",
  },
  {
    title: "You Are Self-Employed or Have Marketplace Coverage",
    verdict: "Enroll at 65",
    color: "#0d6e4f",
    bg: "#e6f4ee",
    border: "#a8d8c2",
    icon: <CheckCircle size={18} />,
    detail: "Marketplace (ACA) plans are not considered qualifying employer coverage. You must enroll in Medicare at 65 or face penalties. Once you have Medicare, you are no longer eligible for premium tax credits on a Marketplace plan.",
  },
  {
    title: "You Are 65 with a Small Employer (Under 20 Employees)",
    verdict: "Enroll Now",
    color: "#991b1b",
    bg: "#fee2e2",
    border: "#fca5a5",
    icon: <AlertCircle size={18} />,
    detail: "For employers with fewer than 20 employees, Medicare becomes your primary insurance at 65, even if you are still working. Your employer plan pays secondary. Failing to enroll in Medicare can leave significant gaps in your coverage.",
  },
];

const FAQS = [
  {
    q: "Is Medicare mandatory at age 65?",
    a: "Medicare is not legally mandatory, but failing to enroll when you are first eligible can result in permanent premium penalties for Part B (10% per year missed) and Part D (1% per month missed). These penalties last for life. For most people without qualifying employer coverage, enrolling at 65 is strongly advisable.",
  },
  {
    q: "What is the penalty for not signing up for Medicare on time?",
    a: "The Part B late enrollment penalty is 10% added to your monthly premium for every 12-month period you were eligible but did not enroll. This penalty is permanent. The Part D penalty is 1% of the national base premium for every month you went without creditable drug coverage.",
  },
  {
    q: "Can I drop Medicare if I go back to work?",
    a: "Yes. If you return to work for an employer with 20 or more employees and gain active employer coverage, you can drop Part B without penalty. You will have a Special Enrollment Period to re-enroll when that coverage ends. However, dropping Part A is rarely advisable since it is usually free.",
  },
  {
    q: "Does Medicare work with my VA benefits?",
    a: "VA benefits and Medicare are separate programs. VA benefits only cover care at VA facilities, while Medicare covers care at any Medicare-accepting provider. Many veterans choose to keep both so they have more flexibility in where they receive care.",
  },
  {
    q: "What if I am still on my spouse's employer plan?",
    a: "If your spouse is actively working and their employer has 20 or more employees, you can delay Medicare without penalty while covered under their plan. Once your spouse retires or loses that coverage, you have an 8-month Special Enrollment Period to sign up.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-semibold text-gray-900 text-[0.97rem] pr-4">{q}</span>
        <ChevronDown size={18} className="text-[#1a3fa8] shrink-0 transition-transform duration-200" style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1 bg-white border-t border-gray-100">
          <p className="text-gray-700 leading-relaxed text-[0.95rem]">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function DoINeedMedicareClient() {
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
              <span className="text-blue-200 text-sm">Do I Need Medicare</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
              <HelpCircle size={12} /> Enrollment Decision Guide
            </div>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Medicare 101", href: "/medicare-101" }, { label: "Do I Need Medicare" }]} className="mb-4" />
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl">
              Do I Need Medicare?
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Whether Medicare is right for you depends on your age, your current coverage, and your situation. This guide walks through the most common scenarios so you can make a confident, informed decision.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:8136995559" className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09600] transition-colors">
                <Phone size={16} /> Call 813-699-5559
              </a>
              <Link href="/free-consultation" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                Get a Free Consultation <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* The short answer */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">The Short Answer</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Medicare is not legally required, but for most people turning 65, enrolling on time is the financially smart choice. The consequences of missing your enrollment window, including permanent premium penalties and gaps in coverage, can be costly and irreversible.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  That said, there are legitimate reasons to delay Medicare. If you are actively working and covered by an employer plan through a company with 20 or more employees, you can typically delay without penalty.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The key is knowing which category you fall into before your 65th birthday, not after. The scenarios below cover the most common situations.
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-[#e6f4ee] border border-[#a8d8c2] rounded-xl p-4 flex items-start gap-3">
                  <CheckCircle size={16} className="text-[#0d6e4f] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-0.5">You should enroll if...</div>
                    <div className="text-sm text-gray-600">You are turning 65 with no active employer coverage, or you have COBRA, retiree coverage, or a Marketplace plan.</div>
                  </div>
                </div>
                <div className="bg-[#fef3e2] border border-[#f8d49a] rounded-xl p-4 flex items-start gap-3">
                  <Info size={16} className="text-[#b45309] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-0.5">You may delay if...</div>
                    <div className="text-sm text-gray-600">You are actively working at 65 and covered by an employer plan through a company with 20 or more employees (or your spouse's qualifying employer plan).</div>
                  </div>
                </div>
                <div className="bg-[#fee2e2] border border-[#fca5a5] rounded-xl p-4 flex items-start gap-3">
                  <XCircle size={16} className="text-[#991b1b] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-0.5">Do not assume you can delay if...</div>
                    <div className="text-sm text-gray-600">You are on COBRA, retiree coverage, a Marketplace plan, or an employer plan at a company with fewer than 20 employees. These do not qualify for penalty-free delay.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scenario cards */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-3">Your Situation, Your Answer</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Find the scenario that best matches your situation to understand what you should do.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {SCENARIOS.map((s) => (
                <div key={s.title} className="rounded-2xl border overflow-hidden" style={{ borderColor: s.border }}>
                  <div className="px-5 py-4 flex items-center justify-between" style={{ background: s.bg }}>
                    <div className="font-bold text-gray-900 text-sm leading-snug pr-4">{s.title}</div>
                    <div className="shrink-0 flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full whitespace-nowrap" style={{ background: s.color, color: "#fff" }}>
                      <span style={{ color: "#fff" }}>{s.icon}</span>
                      {s.verdict}
                    </div>
                  </div>
                  <div className="px-5 py-4 bg-white">
                    <p className="text-sm text-gray-700 leading-relaxed">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What happens if you skip */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">What Happens If You Skip Medicare?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Choosing not to enroll in Medicare when you are first eligible, without a qualifying reason, has real financial consequences. These penalties are not temporary. They are added to your premium for as long as you have Medicare.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Beyond the financial penalties, going without Medicare means going without coverage for doctor visits, hospital stays, and prescription drugs, which can be catastrophic if an unexpected health event occurs.
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-2xl p-5">
                  <div className="font-bold text-[#991b1b] mb-2 flex items-center gap-2"><AlertCircle size={16} /> Part B Penalty</div>
                  <p className="text-sm text-gray-700 leading-relaxed">10% added to your monthly Part B premium for every 12-month period you were eligible but did not enroll. If you waited 2 years, your premium increases by 20% permanently.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-5">
                  <div className="font-bold text-[#991b1b] mb-2 flex items-center gap-2"><AlertCircle size={16} /> Part D Penalty</div>
                  <p className="text-sm text-gray-700 leading-relaxed">1% of the national base beneficiary premium for every month you went without creditable drug coverage. This penalty is also permanent and added to your Part D premium for life.</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-2xl p-5">
                  <div className="font-bold text-[#b45309] mb-2 flex items-center gap-2"><Info size={16} /> Limited Enrollment Windows</div>
                  <p className="text-sm text-gray-700 leading-relaxed">If you miss your Initial Enrollment Period without an SEP, you can only enroll during the General Enrollment Period (January 1 to March 31), with coverage starting July 1, leaving you without coverage for months.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Common Questions</h2>
              <p className="text-gray-600">Answers to the enrollment questions we hear most often.</p>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0d2260] py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Still Not Sure? Let Us Help.</h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Our licensed agents review your specific situation, including your current coverage, employer size, and retirement plans, and tell you exactly what you should do and when. The consultation is completely free.
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
