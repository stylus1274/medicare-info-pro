"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight, ChevronDown, Phone, CheckCircle, AlertCircle,
  ArrowRight, Info, Shield, Star, XCircle
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

// Medigap plan comparison data
const PLANS = [
  {
    name: "Plan G",
    badge: "Most Popular",
    badgeColor: "#0d6e4f",
    color: "#0d6e4f",
    bg: "#e6f4ee",
    border: "#a8d8c2",
    covers: ["Part A coinsurance & hospital costs", "Part B coinsurance or copayment", "Blood (first 3 pints)", "Part A hospice coinsurance", "Skilled nursing facility coinsurance", "Part A deductible", "Foreign travel emergency (80%)"],
    doesNotCover: ["Part B deductible ($283 in 2026)"],
    bestFor: "People who want comprehensive coverage and predictable costs. The most popular plan for new Medicare enrollees.",
  },
  {
    name: "HDHP Plan G",
    badge: "Growing in Popularity",
    badgeColor: "#0e7490",
    color: "#0e7490",
    bg: "#e0f7fa",
    border: "#7dd3e0",
    covers: ["Part A coinsurance & hospital costs (after deductible)", "Part B coinsurance or copayment (after deductible)", "Blood (first 3 pints, after deductible)", "Part A hospice coinsurance (after deductible)", "Skilled nursing facility coinsurance (after deductible)", "Part A deductible (after deductible)", "Foreign travel emergency (80%, after deductible)"],
    doesNotCover: ["Part B deductible ($283 in 2026)", "Costs before the $2,870 annual deductible is met (2026)"],
    note: "Once the $2,870 annual deductible is met, HDHP Plan G covers everything standard Plan G covers. Significantly lower monthly premiums make this ideal for healthy beneficiaries.",
    bestFor: "Healthy beneficiaries who want catastrophic protection at a much lower monthly premium and are comfortable paying out-of-pocket for routine care.",
  },
  {
    name: "Plan N",
    badge: "Best Value",
    badgeColor: "#1a3fa8",
    color: "#1a3fa8",
    bg: "#e8edf8",
    border: "#b8c8f0",
    covers: ["Part A coinsurance & hospital costs", "Part B coinsurance (with copays)", "Blood (first 3 pints)", "Part A hospice coinsurance", "Skilled nursing facility coinsurance", "Part A deductible", "Foreign travel emergency (80%)"],
    doesNotCover: ["Part B deductible", "Part B excess charges"],
    note: "Up to $20 doctor copay and $50 ER copay (waived if admitted)",
    bestFor: "People who want lower premiums and are comfortable with small copays for office and ER visits.",
  },
  {
    name: "Plan F",
    badge: "Legacy Plan",
    badgeColor: "#7c3aed",
    color: "#7c3aed",
    bg: "#f3eeff",
    border: "#d4b8f8",
    covers: ["Part A coinsurance & hospital costs", "Part B coinsurance or copayment", "Blood (first 3 pints)", "Part A hospice coinsurance", "Skilled nursing facility coinsurance", "Part A deductible", "Part B deductible", "Part B excess charges", "Foreign travel emergency (80%)"],
    doesNotCover: [],
    bestFor: "Only available to those who became eligible for Medicare before January 1, 2020. Covers everything including the Part B deductible.",
  },
  {
    name: "Plan K",
    badge: "Lower Premium",
    badgeColor: "#b45309",
    color: "#b45309",
    bg: "#fef3e2",
    border: "#f8d49a",
    covers: ["50% of Part A coinsurance", "50% of Part B coinsurance", "50% of blood (first 3 pints)", "50% of Part A hospice coinsurance", "50% of skilled nursing facility coinsurance", "50% of Part A deductible"],
    doesNotCover: ["Part B deductible", "Part B excess charges", "Foreign travel emergency", "Full coinsurance (pays 50%)"],
    bestFor: "People who want lower premiums and have an out-of-pocket limit ($7,220 in 2026) as a safety net.",
  },
];

const GAPS_COVERED = [
  { gap: "Part A Deductible", amount: "$1,736 per benefit period (2026)", covered: true },
  { gap: "Part B Deductible", amount: "$283 per year (2026)", covered: false, note: "Not covered by Plan G or N (was covered by Plan F)" },
  { gap: "Part B Coinsurance (20%)", amount: "20% of all Part B services", covered: true },
  { gap: "Skilled Nursing Facility Coinsurance", amount: "$212/day (days 21–100, 2026)", covered: true },
  { gap: "Part A Hospital Coinsurance", amount: "$422/day (days 61–90, 2026)", covered: true },
  { gap: "Foreign Travel Emergency", amount: "80% after $250 deductible", covered: true, note: "Covered by most plans with a $50,000 lifetime limit" },
];

const FAQS = [
  { q: "What is the difference between Medigap and Medicare Advantage?", a: "Medigap (Medicare Supplement) works alongside Original Medicare (Parts A and B) to cover your out-of-pocket costs. Medicare Advantage (Part C) replaces Original Medicare entirely with a private plan. With Medigap, you can see any doctor or hospital that accepts Medicare nationwide. With Medicare Advantage, you are typically restricted to a network. Medigap has higher premiums but more predictable costs; Medicare Advantage often has lower premiums but more out-of-pocket exposure." },
  { q: "When is the best time to enroll in a Medigap plan?", a: "The best time is during your Medigap Open Enrollment Period, which starts the month you turn 65 and are enrolled in Part B. During this 6-month window, insurers cannot deny you coverage or charge you more based on your health. After this window, you may be subject to medical underwriting, which can result in higher premiums or denial of coverage." },
  { q: "Does Medigap cover prescription drugs?", a: "No. Medigap plans do not include prescription drug coverage. You will need to enroll in a separate Medicare Part D plan for drug coverage. This is one of the key differences between Medigap and Medicare Advantage, which often bundles drug coverage." },
  { q: "Can I switch Medigap plans?", a: "Yes, but outside of your Open Enrollment Period, you may be subject to medical underwriting. Some states have additional protections that allow you to switch plans more easily. We can review your state's rules and help you determine if switching makes sense for your situation." },
  { q: "Are Medigap premiums tax deductible?", a: "Medicare Supplement premiums may be deductible as a medical expense if your total medical expenses exceed 7.5% of your adjusted gross income. Consult a tax professional for guidance specific to your situation." },
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

export default function MedicareSupplementClient() {
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
              <span className="text-blue-200 text-sm">Medicare Supplement</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
              <Shield size={12} /> Medigap Plans
            </div>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Plan Types", href: "/plan-comparison" }, { label: "Medicare Supplement" }]} className="mb-4" />
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl">
              Medicare Supplement (Medigap) Plans
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Original Medicare covers about 80% of your medical costs. A Medicare Supplement plan covers most or all of the remaining 20%, protecting you from unexpected out-of-pocket expenses.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:8136995559" className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09600] transition-colors">
                <Phone size={16} /> Call 813-699-5559
              </a>
              <Link href="/free-consultation" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                Compare Plans Free <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* What is Medigap */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">What Is a Medicare Supplement Plan?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A Medicare Supplement plan, also called Medigap, is private insurance that works alongside Original Medicare (Parts A and B) to cover costs that Medicare does not pay, such as deductibles, coinsurance, and copayments.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  With a Medigap plan, you can see any doctor or hospital in the country that accepts Medicare. There are no networks, no referrals, and no prior authorizations for most services. Your coverage travels with you.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Medigap plans are standardized by the federal government. A Plan G from one insurer covers the exact same benefits as a Plan G from another insurer. The only difference is the monthly premium, which is why comparing prices across carriers is so important.
                </p>
              </div>
              <div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <div className="font-bold text-gray-900 mb-4">The Gaps Medigap Covers</div>
                  <div className="space-y-2.5">
                    {GAPS_COVERED.map((gap) => (
                      <div key={gap.gap} className="flex items-start gap-3">
                        {gap.covered
                          ? <CheckCircle size={14} className="text-[#0d6e4f] shrink-0 mt-0.5" />
                          : <XCircle size={14} className="text-[#991b1b] shrink-0 mt-0.5" />
                        }
                        <div>
                          <div className="text-sm font-semibold text-gray-900">{gap.gap}</div>
                          <div className="text-xs text-gray-500">{gap.amount}{gap.note ? ` — ${gap.note}` : ""}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-4">Coverage varies by plan. Plan G covers all gaps except the Part B deductible.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Plan Comparison */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Most Common Medigap Plans</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                There are 10 standardized Medigap plans (A, B, C, D, F, G, K, L, M, N). Here are the four most commonly chosen plans and what they cover.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {PLANS.map((plan) => (
                <div key={plan.name} className="rounded-2xl border overflow-hidden" style={{ borderColor: plan.border }}>
                  <div className="px-6 py-4 flex items-center justify-between" style={{ background: plan.bg }}>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-white text-sm" style={{ background: plan.color }}>{plan.name.replace("Plan ", "")}</div>
                      <h3 className="font-bold text-gray-900">{plan.name}</h3>
                    </div>
                    <div className="text-xs font-bold px-3 py-1 rounded-full text-white" style={{ background: plan.badgeColor }}>{plan.badge}</div>
                  </div>
                  <div className="px-6 py-5 bg-white">
                    <div className="mb-4">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Covers</div>
                      <ul className="space-y-1.5">
                        {plan.covers.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                            <CheckCircle size={12} className="shrink-0 mt-0.5" style={{ color: plan.color }} />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {plan.doesNotCover.length > 0 && (
                      <div className="mb-4">
                        <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Does Not Cover</div>
                        <ul className="space-y-1.5">
                          {plan.doesNotCover.map((c) => (
                            <li key={c} className="flex items-start gap-2 text-sm text-gray-500">
                              <XCircle size={12} className="shrink-0 mt-0.5 text-gray-400" />
                              {c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {"note" in plan && plan.note && (
                      <div className="mb-4 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2.5">
                        <p className="text-xs text-amber-800 font-medium">{plan.note as string}</p>
                      </div>
                    )}
                    <div className="rounded-xl p-3 text-sm border" style={{ background: plan.bg, borderColor: plan.border }}>
                      <span className="font-semibold" style={{ color: plan.color }}>Best for: </span>
                      <span className="text-gray-700">{plan.bestFor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-4">
              <Info size={18} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-amber-900 mb-1">Plans Are Standardized — Prices Are Not</div>
                <p className="text-sm text-amber-800 leading-relaxed">
                  A Plan G from Carrier A covers the exact same benefits as a Plan G from Carrier B. But premiums can vary by hundreds of dollars per year for the same coverage. Our agents compare prices across all carriers available in your area to find you the best rate.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Medigap vs Medicare Advantage */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Medigap vs. Medicare Advantage</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">These are two very different approaches to Medicare coverage. Understanding the trade-offs is essential before you choose.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0d2260] text-white">
                    <th className="text-left px-5 py-3 font-semibold text-sm rounded-tl-xl">Feature</th>
                    <th className="text-left px-5 py-3 font-semibold text-sm">Medigap + Part D</th>
                    <th className="text-left px-5 py-3 font-semibold text-sm rounded-tr-xl">Medicare Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Monthly Premium", "Higher (plan + Part D)", "Often $0 or very low"],
                    ["Out-of-Pocket Costs", "Very predictable, often near $0", "Variable, up to annual max"],
                    ["Provider Network", "Any Medicare provider nationwide", "Usually restricted to network"],
                    ["Referrals Needed", "No", "Often yes (HMO plans)"],
                    ["Drug Coverage", "Separate Part D plan required", "Usually bundled in"],
                    ["Extra Benefits (dental, vision)", "Not included", "Often included"],
                    ["Best For", "Frequent travelers, complex health needs", "Lower premiums, local care"],
                  ].map(([feature, medigap, advantage], i) => (
                    <tr key={feature} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-5 py-3.5 font-semibold text-gray-900 text-sm">{feature}</td>
                      <td className="px-5 py-3.5 text-gray-700 text-sm">{medigap}</td>
                      <td className="px-5 py-3.5 text-gray-700 text-sm">{advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 text-center">
              <Link href="/free-consultation" className="inline-flex items-center gap-2 text-[#1a3fa8] font-semibold text-sm hover:underline">
                Talk to an agent to compare both options for your situation <ArrowRight size={13} />
              </Link>
            </div>
          </div>
        </section>

        {/* Internal links */}
        <section className="py-10 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900">Related Medicare Topics</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { href: "/medicare-part-d", label: "Medicare Part D", desc: "Add prescription drug coverage to your Medigap plan. Compare plans based on your medications.", color: "#1a3fa8", bg: "#e8edf8", border: "#b8c8f0" },
                { href: "/how-medicare-part-d-works", label: "How Part D Works", desc: "Drug tiers, the 2025 $2,000 out-of-pocket cap, and enrollment periods explained.", color: "#0d6e4f", bg: "#e6f4ee", border: "#a8d8c2" },
                { href: "/what-is-medicare", label: "What Is Medicare?", desc: "A full overview of Parts A, B, C, and D and how they work together.", color: "#7c3aed", bg: "#f3eeff", border: "#d4b8f8" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="rounded-2xl border p-5 hover:shadow-md transition-shadow block" style={{ background: link.bg, borderColor: link.border }}>
                  <div className="font-bold mb-1" style={{ color: link.color }}>{link.label}</div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{link.desc}</p>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold" style={{ color: link.color }}>
                    Learn More <ArrowRight size={12} />
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
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Medigap Questions</h2>
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
              Find the Right Medigap Plan at the Best Price
            </h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Our independent agents compare Medigap plans from all major carriers available in your area. Since the benefits are standardized, we focus on finding you the lowest premium for the plan that fits your needs. The consultation is free.
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
