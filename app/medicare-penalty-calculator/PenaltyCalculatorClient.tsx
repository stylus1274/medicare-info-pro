"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight, ChevronDown, Phone, AlertCircle, ArrowRight,
  Calculator, DollarSign, Info, CheckCircle, Shield
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

// 2025 standard premiums
const PART_B_PREMIUM_2025 = 185.00;
const PART_D_NATIONAL_BASE_2025 = 36.78;

function formatCurrency(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function PartBCalculator() {
  const [months, setMonths] = useState("");
  const result = (() => {
    const m = parseInt(months, 10);
    if (!m || m < 1) return null;
    const fullYears = Math.floor(m / 12);
    if (fullYears < 1) return null;
    const penaltyPct = fullYears * 0.10;
    const monthlyPenalty = PART_B_PREMIUM_2025 * penaltyPct;
    const totalMonthly = PART_B_PREMIUM_2025 + monthlyPenalty;
    return { fullYears, penaltyPct, monthlyPenalty, totalMonthly };
  })();

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
      <div className="bg-[#0d2260] px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center">
            <Calculator size={16} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-white">Part B Penalty Calculator</div>
            <div className="text-blue-300 text-xs">10% per year you were eligible but did not enroll</div>
          </div>
        </div>
      </div>
      <div className="px-6 py-5">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          How many months did you go without Part B after becoming eligible?
        </label>
        <div className="flex items-center gap-3 mb-4">
          <input
            type="number"
            min="0"
            max="240"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            placeholder="e.g. 24"
            className="w-32 border border-gray-300 rounded-xl px-4 py-2.5 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#1a3fa8] text-center"
          />
          <span className="text-gray-500 text-sm">months without Part B</span>
        </div>

        {result ? (
          <div className="space-y-3">
            <div className="bg-[#fef3e2] border border-[#f8d49a] rounded-xl p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#b45309] mb-2">Your Estimated Penalty</div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-xs text-gray-500">Penalty percentage</div>
                  <div className="font-black text-2xl text-[#b45309]">{(result.penaltyPct * 100).toFixed(0)}%</div>
                  <div className="text-xs text-gray-500">({result.fullYears} year{result.fullYears > 1 ? "s" : ""} × 10%)</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Monthly penalty added</div>
                  <div className="font-black text-2xl text-[#b45309]">{formatCurrency(result.monthlyPenalty)}</div>
                  <div className="text-xs text-gray-500">per month, permanently</div>
                </div>
              </div>
            </div>
            <div className="bg-[#e8edf8] border border-[#b8c8f0] rounded-xl p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#1a3fa8] mb-1">Your Total Part B Premium</div>
              <div className="flex items-baseline gap-2">
                <div className="font-black text-3xl text-[#1a3fa8]">{formatCurrency(result.totalMonthly)}</div>
                <div className="text-sm text-gray-500">per month</div>
              </div>
              <div className="text-xs text-gray-500 mt-1">vs. standard {formatCurrency(PART_B_PREMIUM_2025)}/mo for on-time enrollees</div>
            </div>
            <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl p-3 flex items-start gap-2">
              <AlertCircle size={14} className="text-red-500 shrink-0 mt-0.5" />
              <p className="text-xs text-red-700">This penalty is <strong>permanent</strong> and lasts for as long as you have Part B. Based on the 2025 standard premium of {formatCurrency(PART_B_PREMIUM_2025)}/mo.</p>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-500 text-center">
            {months && parseInt(months) > 0 && parseInt(months) < 12
              ? "The penalty only applies after 12 full months without coverage. Enter 12 or more months to see a penalty."
              : "Enter the number of months to calculate your penalty."}
          </div>
        )}
      </div>
    </div>
  );
}

function PartDCalculator() {
  const [months, setMonths] = useState("");
  const result = (() => {
    const m = parseInt(months, 10);
    if (!m || m < 1) return null;
    const penaltyPct = m * 0.01;
    const monthlyPenalty = Math.round(PART_D_NATIONAL_BASE_2025 * penaltyPct * 100) / 100;
    return { months: m, penaltyPct, monthlyPenalty };
  })();

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
      <div className="bg-[#0d6e4f] px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center">
            <Calculator size={16} className="text-white" />
          </div>
          <div>
            <div className="font-bold text-white">Part D Penalty Calculator</div>
            <div className="text-green-200 text-xs">1% of national base premium per month without coverage</div>
          </div>
        </div>
      </div>
      <div className="px-6 py-5">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          How many months did you go without creditable drug coverage?
        </label>
        <div className="flex items-center gap-3 mb-4">
          <input
            type="number"
            min="0"
            max="240"
            value={months}
            onChange={(e) => setMonths(e.target.value)}
            placeholder="e.g. 18"
            className="w-32 border border-gray-300 rounded-xl px-4 py-2.5 text-gray-900 font-semibold focus:outline-none focus:ring-2 focus:ring-[#0d6e4f] text-center"
          />
          <span className="text-gray-500 text-sm">months without drug coverage</span>
        </div>

        {result ? (
          <div className="space-y-3">
            <div className="bg-[#fef3e2] border border-[#f8d49a] rounded-xl p-4">
              <div className="text-xs font-bold uppercase tracking-wider text-[#b45309] mb-2">Your Estimated Part D Penalty</div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-xs text-gray-500">Penalty percentage</div>
                  <div className="font-black text-2xl text-[#b45309]">{(result.penaltyPct * 100).toFixed(0)}%</div>
                  <div className="text-xs text-gray-500">({result.months} months × 1%)</div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">Monthly penalty added</div>
                  <div className="font-black text-2xl text-[#b45309]">{formatCurrency(result.monthlyPenalty)}</div>
                  <div className="text-xs text-gray-500">per month, permanently</div>
                </div>
              </div>
            </div>
            <div className="bg-[#e6f4ee] border border-[#a8d8c2] rounded-xl p-3 flex items-start gap-2">
              <Info size={14} className="text-[#0d6e4f] shrink-0 mt-0.5" />
              <p className="text-xs text-[#0d5a3e]">Based on the 2025 national base beneficiary premium of {formatCurrency(PART_D_NATIONAL_BASE_2025)}/mo. The base premium changes annually, so your actual penalty amount may change each year — but the percentage stays the same.</p>
            </div>
            <div className="bg-[#fef2f2] border border-[#fecaca] rounded-xl p-3 flex items-start gap-2">
              <AlertCircle size={14} className="text-red-500 shrink-0 mt-0.5" />
              <p className="text-xs text-red-700">This penalty is <strong>permanent</strong> and is added to your Part D premium for as long as you have Medicare drug coverage.</p>
            </div>
          </div>
        ) : (
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm text-gray-500 text-center">
            Enter the number of months to calculate your Part D penalty.
          </div>
        )}
      </div>
    </div>
  );
}

const FAQS = [
  { q: "How is the Part B late enrollment penalty calculated?", a: "The Part B penalty is 10% of the standard Part B premium for each full 12-month period you were eligible but did not enroll. For example, if you went 24 months without enrolling, your penalty is 20% of the standard premium — permanently added to your monthly bill." },
  { q: "How is the Part D late enrollment penalty calculated?", a: "The Part D penalty is 1% of the national base beneficiary premium for each month you went without creditable drug coverage. The penalty is rounded to the nearest $0.10 and added to your monthly Part D premium. Because the national base premium changes annually, the dollar amount of your penalty can change each year, but the percentage stays fixed." },
  { q: "Can the penalty ever be waived?", a: "In limited circumstances, yes. If you had creditable coverage from an employer, union, or other source during the period in question, you may be able to dispute the penalty. You can also apply for a Special Enrollment Period if you had a qualifying life event. Our agents can review your situation and help you appeal if appropriate." },
  { q: "What counts as creditable coverage for Part D?", a: "Creditable coverage means your drug coverage is at least as good as standard Medicare Part D. This includes most employer or union drug plans, TRICARE, VA coverage, and some other plans. Your plan must provide you with a notice each year stating whether your coverage is creditable." },
  { q: "Is there a penalty for Part A?", a: "Most people get Part A for free (if they or their spouse paid Medicare taxes for at least 10 years). If you have to buy Part A and you do not enroll when first eligible, your premium can increase by 10% for twice the number of years you delayed enrollment." },
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

export default function PenaltyCalculatorClient() {
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
              <span className="text-blue-200 text-sm">Medicare Penalty Calculator</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
              <Calculator size={12} /> Free Tool
            </div>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Resources", href: "/resources" }, { label: "Penalty Calculator" }]} className="mb-4" />
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl">
              Medicare Late Enrollment Penalty Calculator
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Missing your Medicare enrollment window results in permanent premium penalties. Use this free tool to calculate exactly how much you will pay for Part B and Part D if you enroll late.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:8136995559" className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09600] transition-colors">
                <Phone size={16} /> Call 813-699-5559
              </a>
              <Link href="/enrollment-calculator" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                Enrollment Date Calculator <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* Warning Banner */}
        <section className="bg-[#fef3e2] border-b border-[#f8d49a] py-5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start gap-3">
              <AlertCircle size={18} className="text-[#b45309] shrink-0 mt-0.5" />
              <p className="text-sm text-[#92400e] leading-relaxed">
                <strong>Medicare penalties are permanent.</strong> Unlike most financial penalties, Medicare late enrollment penalties are added to your premium for life — not just for a limited period. The best way to avoid them is to enroll on time. If you are unsure of your enrollment window, <Link href="/enrollment-calculator" className="font-bold underline">use our enrollment date calculator</Link> or <Link href="/free-consultation" className="font-bold underline">speak with one of our agents</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Calculators */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Calculate Your Penalty</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Enter the number of months you went without coverage to see your estimated penalty. Both calculators use 2025 premium rates.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <PartBCalculator />
              <PartDCalculator />
            </div>
          </div>
        </section>

        {/* How Penalties Work */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">How Medicare Penalties Work</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Part B Late Enrollment Penalty",
                  color: "#1a3fa8", bg: "#e8edf8", border: "#b8c8f0",
                  points: [
                    "10% added to your premium for every 12-month period you were eligible but did not enroll",
                    "Applies if you do not have creditable employer coverage during the delay",
                    "Penalty is permanent — it lasts for as long as you have Part B",
                    "Calculated based on the standard premium at the time you enroll, then adjusted annually",
                    "Example: 2 years late = 20% penalty = +$37/mo on top of standard premium (2025 rates)",
                  ],
                },
                {
                  title: "Part D Late Enrollment Penalty",
                  color: "#0d6e4f", bg: "#e6f4ee", border: "#a8d8c2",
                  points: [
                    "1% of the national base beneficiary premium for each month without creditable drug coverage",
                    "Applies if you go 63 or more consecutive days without creditable drug coverage",
                    "Penalty is permanent — added to your Part D premium for life",
                    "The dollar amount changes each year as the national base premium changes",
                    "Example: 18 months late = 18% penalty = ~$6.62/mo added to your Part D premium (2025 rates)",
                  ],
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl border p-6" style={{ background: item.bg, borderColor: item.border }}>
                  <div className="font-bold text-gray-900 mb-4" style={{ color: item.color }}>{item.title}</div>
                  <ul className="space-y-2.5">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle size={13} className="shrink-0 mt-0.5" style={{ color: item.color }} />{p}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Avoid the Penalty */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">How to Avoid Medicare Penalties</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The good news is that Medicare penalties are entirely avoidable with proper planning. The most important step is knowing your enrollment window and acting within it.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you are still working and covered by an employer group health plan, you may be able to delay Medicare enrollment without penalty. However, the rules are specific — retiree coverage, COBRA, and most marketplace plans do not count as creditable coverage for delaying Part B.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our agents help hundreds of people each year navigate these decisions. A 15-minute conversation can save you hundreds of dollars per year in permanent penalties.
                </p>
                <Link href="/enrollment-calculator" className="inline-flex items-center gap-2 bg-[#1a3fa8] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#152f82] transition-colors text-sm">
                  Calculate Your Enrollment Dates <ArrowRight size={14} />
                </Link>
              </div>
              <div className="space-y-3">
                {[
                  { icon: <CheckCircle size={14} className="text-[#0d6e4f]" />, text: "Enroll during your 7-month Initial Enrollment Period around your 65th birthday", bg: "#e6f4ee", border: "#a8d8c2" },
                  { icon: <CheckCircle size={14} className="text-[#0d6e4f]" />, text: "If delaying due to employer coverage, get written confirmation that your coverage is creditable", bg: "#e6f4ee", border: "#a8d8c2" },
                  { icon: <CheckCircle size={14} className="text-[#0d6e4f]" />, text: "Enroll in Part D (or a plan with drug coverage) within 63 days of losing creditable drug coverage", bg: "#e6f4ee", border: "#a8d8c2" },
                  { icon: <CheckCircle size={14} className="text-[#0d6e4f]" />, text: "When you retire, use your Special Enrollment Period — it lasts 8 months from when employer coverage ends", bg: "#e6f4ee", border: "#a8d8c2" },
                  { icon: <Info size={14} className="text-[#b45309]" />, text: "COBRA and retiree coverage do NOT count as creditable coverage for delaying Part B enrollment", bg: "#fef3e2", border: "#f8d49a" },
                  { icon: <Info size={14} className="text-[#b45309]" />, text: "Marketplace (ACA) plans do NOT count as creditable coverage for delaying Medicare enrollment", bg: "#fef3e2", border: "#f8d49a" },
                ].map(({ icon, text, bg, border }) => (
                  <div key={text} className="rounded-xl p-3.5 border flex items-start gap-2.5" style={{ background: bg, borderColor: border }}>
                    <div className="shrink-0 mt-0.5">{icon}</div>
                    <div className="text-sm text-gray-700">{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-10 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900">Related Medicare Tools & Resources</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { href: "/enrollment-calculator", label: "Enrollment Date Calculator", desc: "Enter your birthday to find your exact enrollment window and coverage start date.", color: "#1a3fa8", bg: "#e8edf8", border: "#b8c8f0" },
                { href: "/what-is-medicare", label: "What Is Medicare?", desc: "A full overview of Parts A, B, C, and D — eligibility, costs, and how they work together.", color: "#0d6e4f", bg: "#e6f4ee", border: "#a8d8c2" },
                { href: "/faq", label: "Medicare FAQ Center", desc: "Answers to the most common Medicare questions, organized by topic.", color: "#7c3aed", bg: "#f3eeff", border: "#d4b8f8" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="rounded-2xl border p-5 hover:shadow-md transition-shadow block" style={{ background: link.bg, borderColor: link.border }}>
                  <div className="font-bold mb-1" style={{ color: link.color }}>{link.label}</div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{link.desc}</p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold" style={{ color: link.color }}>
                    Open Tool <ArrowRight size={12} />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Penalty Questions Answered</h2>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0d2260] py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Not Sure If You Will Face a Penalty?
            </h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Our agents review your specific situation — your current coverage, your birthday, and your employment status — to tell you exactly when you need to enroll and how to avoid any penalties. The consultation is free.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:8136995559" className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#e09600] transition-colors text-base">
                <Phone size={17} /> Call 813-699-5559
              </a>
              <Link href="/free-consultation" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-base">
                Schedule a Consultation <ArrowRight size={16} />
              </Link>
            </div>
            <p className="text-blue-300/60 text-xs mt-6">
              Penalty estimates are based on 2025 standard premium rates. Actual amounts may vary. This tool is for informational purposes only and does not constitute legal or financial advice.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
