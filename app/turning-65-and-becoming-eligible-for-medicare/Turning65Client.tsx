"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight, ChevronDown, Phone, CheckCircle, AlertCircle,
  ArrowRight, Info, Calendar, Briefcase, Pill
} from "lucide-react";

const TIMELINE_MONTHS = [
  { label: "3 Months Before", desc: "Your Initial Enrollment Period opens. Enroll now for coverage to start on your 65th birthday.", highlight: true },
  { label: "Your Birthday Month", desc: "Still within your IEP. If you enroll this month, coverage starts the first of the following month." },
  { label: "1 Month After", desc: "Coverage starts 2 months after enrollment." },
  { label: "2 Months After", desc: "Coverage starts 3 months after enrollment." },
  { label: "3 Months After", desc: "Last month of your IEP. Coverage starts 3 months after enrollment. Do not miss this window." },
];

const OPTIONS = [
  {
    title: "Original Medicare + Medigap + Part D",
    icon: <CheckCircle size={20} className="text-[#1a3fa8]" />,
    color: "#1a3fa8",
    bg: "#e8edf8",
    border: "#b8c8f0",
    pros: [
      "See any doctor or hospital that accepts Medicare nationwide",
      "No referrals needed for specialists",
      "Medigap covers most or all out-of-pocket costs",
      "Predictable, stable costs each month",
    ],
    cons: [
      "Higher combined monthly premiums",
      "Separate Part D plan required for drug coverage",
      "Medigap premiums increase with age",
    ],
    bestFor: "People who travel frequently, see many specialists, or want maximum flexibility and predictable costs.",
  },
  {
    title: "Medicare Advantage (Part C)",
    icon: <CheckCircle size={20} className="text-[#0d6e4f]" />,
    color: "#0d6e4f",
    bg: "#e6f4ee",
    border: "#a8d8c2",
    pros: [
      "Often includes dental, vision, and hearing coverage",
      "Drug coverage usually bundled in",
      "Many plans have $0 monthly premium",
      "Annual out-of-pocket maximum protects against catastrophic costs",
    ],
    cons: [
      "Network restrictions (must use in-network providers for HMO plans)",
      "Prior authorization required for some services",
      "Plans can change benefits annually",
      "May not be ideal for frequent travelers",
    ],
    bestFor: "People who prefer lower premiums, want extra benefits like dental and vision, and are comfortable using a network of providers.",
  },
];

const STILL_WORKING = [
  { q: "Can I delay Medicare if I am still working?", a: "Yes, if your employer has 20 or more employees and you are covered by their active group health plan, you can delay Parts A and B without penalty. Once you retire or lose that coverage, you have an 8-month Special Enrollment Period to sign up." },
  { q: "What if my employer has fewer than 20 employees?", a: "Medicare becomes your primary insurance at 65 even if you are still working. Your employer plan pays secondary. You should enroll in Medicare on time to avoid gaps in coverage and penalties." },
  { q: "Should I enroll in Part A even if I delay Part B?", a: "Part A is usually free (if you worked 10+ years), so most people enroll in Part A at 65 even if they delay Part B. However, if you contribute to an HSA, enrolling in Part A makes you ineligible for further HSA contributions." },
  { q: "What about my HSA?", a: "Once you enroll in any part of Medicare, you can no longer contribute to a Health Savings Account (HSA). If you want to keep contributing to your HSA, you must delay all parts of Medicare. Plan accordingly before your 65th birthday." },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors" aria-expanded={open}>
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

export default function Turning65Client() {
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
              <span className="text-blue-200 text-sm">Turning 65 and Medicare Eligibility</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
              <Calendar size={12} /> Medicare at 65
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl">
              Turning 65 and Becoming Eligible for Medicare
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Your 65th birthday is one of the most important healthcare milestones of your life. Here is exactly what happens, what decisions you need to make, and how to avoid the costly mistakes most people do not know about until it is too late.
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

        {/* What happens at 65 */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">What Happens When You Turn 65?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The moment you turn 65, you become eligible for Medicare. You do not have to be retired. You do not have to be collecting Social Security. Eligibility is based on age alone (plus the requirement of 10 years of Medicare-taxed work history for premium-free Part A).
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you are already collecting Social Security benefits when you turn 65, you will be automatically enrolled in Parts A and B. Your Medicare card will arrive in the mail about 3 months before your birthday.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  If you are not yet collecting Social Security, you will need to actively enroll. This is where many people miss their window and face permanent penalties.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { icon: <CheckCircle size={16} className="text-[#0d6e4f]" />, title: "Automatic Enrollment", desc: "If you receive Social Security or Railroad Retirement Board benefits, you are automatically enrolled in Parts A and B at 65.", bg: "#e6f4ee", border: "#a8d8c2" },
                  { icon: <Info size={16} className="text-[#1a3fa8]" />, title: "Active Enrollment Required", desc: "If you are not receiving Social Security benefits yet, you must actively sign up for Medicare during your Initial Enrollment Period.", bg: "#e8edf8", border: "#b8c8f0" },
                  { icon: <AlertCircle size={16} className="text-[#b45309]" />, title: "Decisions to Make", desc: "Even with automatic enrollment, you still need to decide whether to keep Original Medicare or switch to Medicare Advantage, and whether to add Part D and/or Medigap.", bg: "#fef3e2", border: "#f8d49a" },
                ].map(({ icon, title, desc, bg, border }) => (
                  <div key={title} className="rounded-xl p-4 border flex items-start gap-3" style={{ background: bg, borderColor: border }}>
                    <div className="shrink-0 mt-0.5">{icon}</div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm mb-0.5">{title}</div>
                      <div className="text-sm text-gray-600 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Timeline */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Your 7-Month Enrollment Window</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                The Initial Enrollment Period spans 7 months. When you enroll within that window determines when your coverage starts.
              </p>
            </div>
            <div className="flex flex-col md:flex-row gap-0 relative">
              {TIMELINE_MONTHS.map((m, i) => (
                <div
                  key={m.label}
                  className={`flex-1 rounded-2xl p-5 border ${m.highlight ? "bg-[#0d2260] border-[#1a3fa8]" : "bg-gray-50 border-gray-200"} ${i > 0 ? "md:-ml-2" : ""}`}
                  style={{ zIndex: TIMELINE_MONTHS.length - i }}
                >
                  <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${m.highlight ? "text-[#f5a800]" : "text-gray-400"}`}>{m.label}</div>
                  <p className={`text-sm leading-relaxed ${m.highlight ? "text-white" : "text-gray-600"}`}>{m.desc}</p>
                  {m.highlight && (
                    <div className="mt-3 inline-flex items-center gap-1.5 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold px-2.5 py-1 rounded-full border border-[#f5a800]/30">
                      Best Time to Enroll
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-4">
              <AlertCircle size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-amber-900 mb-1">Miss This Window and Pay Permanently</div>
                <p className="text-sm text-amber-800 leading-relaxed">
                  If you miss your IEP without a qualifying Special Enrollment Period, you can only sign up during the General Enrollment Period (January 1 to March 31), with coverage starting July 1. You will also face permanent late enrollment penalties on your Part B and Part D premiums.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Options */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Your Two Main Coverage Paths</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Once you are enrolled in Medicare, you choose how to receive your benefits. There is no single right answer. The best choice depends on your health, budget, and lifestyle.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {OPTIONS.map((opt) => (
                <div key={opt.title} className="rounded-2xl border overflow-hidden" style={{ borderColor: opt.border }}>
                  <div className="px-6 py-5 flex items-center gap-3" style={{ background: opt.bg }}>
                    {opt.icon}
                    <h3 className="font-bold text-gray-900 text-lg">{opt.title}</h3>
                  </div>
                  <div className="px-6 py-5 bg-white">
                    <div className="mb-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Advantages</div>
                      <ul className="space-y-1.5">
                        {opt.pros.map((p) => (
                          <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle size={13} className="shrink-0 mt-0.5" style={{ color: opt.color }} />
                            {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Considerations</div>
                      <ul className="space-y-1.5">
                        {opt.cons.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-gray-500">
                            <Info size={13} className="shrink-0 mt-0.5 text-gray-400" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl p-3 text-sm border" style={{ background: opt.bg, borderColor: opt.border }}>
                      <span className="font-semibold" style={{ color: opt.color }}>Best for: </span>
                      <span className="text-gray-700">{opt.bestFor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-white border border-gray-200 rounded-2xl p-5 flex items-start gap-4">
              <Info size={18} className="text-[#1a3fa8] shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-gray-900 mb-1">Not Sure Which Path Is Right for You?</div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Our licensed agents compare both options side by side based on your specific doctors, medications, and budget. The consultation is free and there is no obligation to enroll in anything. <Link href="/free-consultation" className="text-[#1a3fa8] font-semibold hover:underline">Schedule a call today.</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Still Working */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-[#e8edf8] rounded-xl flex items-center justify-center">
                <Briefcase size={18} className="text-[#1a3fa8]" />
              </div>
              <h2 className="font-serif text-3xl font-bold text-gray-900">Still Working at 65?</h2>
            </div>
            <div className="space-y-3">
              {STILL_WORKING.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>

        {/* Part D reminder */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 flex items-start gap-5">
              <div className="w-10 h-10 bg-[#fef3e2] rounded-xl flex items-center justify-center shrink-0">
                <Pill size={18} className="text-[#b45309]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Do Not Forget Part D, Even If You Do Not Take Medications</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Many people skip Part D because they do not currently take prescription drugs. This is a mistake. If you go without creditable drug coverage and later need medications, you will face a permanent late enrollment penalty of 1% per month for every month you went without coverage. Enrolling in a low-cost Part D plan now protects you from this penalty.
                </p>
                <Link href="/medicare-part-d" className="inline-flex items-center gap-2 text-[#b45309] font-semibold text-sm mt-3 hover:underline">
                  Learn About Part D <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0d2260] py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Turning 65 Soon? Let Us Walk You Through It.
            </h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Medicare Information Project specializes in helping people navigate the transition to Medicare. Our independent agents review your situation, explain your options, and help you enroll in the plan that is right for you, at no cost.
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
