"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight, ChevronDown, Phone, CheckCircle, AlertCircle,
  ArrowRight, Info, Pill, DollarSign, HelpCircle, Users
} from "lucide-react";

const COSTS_2025 = [
  { item: "Maximum Deductible", amount: "$590/year", note: "Many plans offer $0 deductible for Tier 1–2 drugs" },
  { item: "Out-of-Pocket Cap", amount: "$2,000/year", note: "New in 2025 — after this you pay $0 for the rest of the year" },
  { item: "Average Monthly Premium", amount: "~$46.50/month", note: "Varies widely by plan and location" },
  { item: "Late Enrollment Penalty", amount: "1% per month", note: "Permanent — added to your premium for life" },
];

const EXTRA_HELP_LEVELS = [
  { level: "Full Extra Help", income: "Up to ~$22,590 (individual)", benefit: "$0 premium, $0 deductible, $1–$10 copays", color: "#0d6e4f", bg: "#e6f4ee", border: "#a8d8c2" },
  { level: "Partial Extra Help", income: "Up to ~$33,885 (individual)", benefit: "Reduced premium and deductible, lower copays", color: "#1a3fa8", bg: "#e8edf8", border: "#b8c8f0" },
];

const FAQS = [
  { q: "Who is eligible for Medicare Part D?", a: "Anyone enrolled in Medicare Part A and/or Part B is eligible for Part D. You must live in the plan's service area. Eligibility is not based on income — anyone with Medicare can enroll in a Part D plan." },
  { q: "Can I have Part D with Medicare Advantage?", a: "Most Medicare Advantage plans include prescription drug coverage (called MAPD plans). If your Medicare Advantage plan includes drug coverage, you generally cannot also enroll in a standalone Part D plan. If your Advantage plan does not include drug coverage, you can add a standalone PDP." },
  { q: "What is a formulary and why does it matter?", a: "A formulary is your plan's list of covered drugs. Each plan has its own formulary, and the same drug can be on different tiers (with different costs) across different plans. Before enrolling, always check that your specific medications are on the plan's formulary and note which tier they fall on." },
  { q: "What happens if my drug is not on the formulary?", a: "You can request a formulary exception from your plan, asking them to cover the drug at a lower cost. Your doctor must provide documentation that the drug is medically necessary. You can also appeal if the exception is denied." },
  { q: "How do I apply for Extra Help?", a: "You can apply for Extra Help through the Social Security Administration online at ssa.gov, by calling 1-800-772-1213, or in person at your local Social Security office. You can also contact us and we will help you determine your eligibility and walk you through the application." },
  { q: "Can I switch Part D plans?", a: "Yes. During the Annual Enrollment Period (October 15 to December 7), you can switch to any Part D plan available in your area. Changes take effect January 1. We recommend reviewing your plan every year because formularies and premiums change annually." },
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

export default function MedicarePartDClient() {
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
              <span className="text-blue-200 text-sm">Medicare Part D</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
              <Pill size={12} /> Prescription Drug Coverage
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl">
              Medicare Part D
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Medicare Part D provides prescription drug coverage for Medicare beneficiaries. Understanding your options, costs, and the 2025 out-of-pocket cap can save you thousands of dollars a year.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:8136995559" className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09600] transition-colors">
                <Phone size={16} /> Call 813-699-5559
              </a>
              <Link href="/how-medicare-part-d-works" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                How Part D Works <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">What Does Part D Cover?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Medicare Part D covers a wide range of prescription medications, including generic and brand-name drugs. Each plan has its own formulary — a list of covered drugs organized into tiers — which determines how much you pay for each medication.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Part D is offered by private insurance companies approved by Medicare. Plans vary in their premiums, deductibles, formularies, and pharmacy networks. This is why comparing plans based on your specific medications is far more important than just comparing monthly premiums.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Starting in 2025, the Inflation Reduction Act caps your annual out-of-pocket drug costs at $2,000. Once you hit that limit, you pay $0 for covered drugs for the rest of the year.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { icon: <CheckCircle size={15} className="text-[#0d6e4f]" />, title: "Generic and brand-name drugs", bg: "#e6f4ee", border: "#a8d8c2" },
                  { icon: <CheckCircle size={15} className="text-[#0d6e4f]" />, title: "Specialty medications (with higher cost sharing)", bg: "#e6f4ee", border: "#a8d8c2" },
                  { icon: <CheckCircle size={15} className="text-[#0d6e4f]" />, title: "Vaccines not covered under Part B", bg: "#e6f4ee", border: "#a8d8c2" },
                  { icon: <Info size={15} className="text-[#b45309]" />, title: "Does NOT cover most over-the-counter drugs", bg: "#fef3e2", border: "#f8d49a" },
                  { icon: <Info size={15} className="text-[#b45309]" />, title: "Does NOT cover drugs used while hospitalized (Part A covers those)", bg: "#fef3e2", border: "#f8d49a" },
                  { icon: <Info size={15} className="text-[#b45309]" />, title: "Only covers drugs on your plan's formulary", bg: "#fef3e2", border: "#f8d49a" },
                ].map(({ icon, title, bg, border }) => (
                  <div key={title} className="rounded-xl p-3.5 border flex items-center gap-3" style={{ background: bg, borderColor: border }}>
                    <div className="shrink-0">{icon}</div>
                    <div className="text-sm font-medium text-gray-800">{title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 2025 Costs */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">2025 Part D Costs at a Glance</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Key numbers to know when comparing Part D plans this year.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0d2260] text-white">
                    <th className="text-left px-5 py-3 font-semibold text-sm rounded-tl-xl">Cost Component</th>
                    <th className="text-left px-5 py-3 font-semibold text-sm">2025 Amount</th>
                    <th className="text-left px-5 py-3 font-semibold text-sm rounded-tr-xl">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {COSTS_2025.map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-5 py-3.5 font-semibold text-gray-900 text-sm">{row.item}</td>
                      <td className="px-5 py-3.5 font-bold text-[#1a3fa8] text-sm">{row.amount}</td>
                      <td className="px-5 py-3.5 text-gray-600 text-sm">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 bg-[#e6f4ee] border border-[#a8d8c2] rounded-2xl p-5 flex items-start gap-4">
              <CheckCircle size={18} className="text-[#0d6e4f] shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-[#0d6e4f] mb-1">2025: The Donut Hole Is Gone</div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  The coverage gap (donut hole) that previously required beneficiaries to pay higher costs for drugs has been eliminated in 2025. Your out-of-pocket costs are now capped at $2,000 per year. After reaching that limit, you pay $0 for covered drugs for the rest of the year. <Link href="/how-medicare-part-d-works" className="text-[#0d6e4f] font-semibold hover:underline">Learn how the phases work.</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Extra Help */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#e8edf8] rounded-xl flex items-center justify-center">
                    <Users size={18} className="text-[#1a3fa8]" />
                  </div>
                  <h2 className="font-serif text-3xl font-bold text-gray-900">The Extra Help Program</h2>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Extra Help (also called the Low Income Subsidy or LIS) is a federal program that helps people with limited income and resources pay for Part D costs. If you qualify, you may pay little to nothing for your prescription medications.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Millions of people who qualify for Extra Help never apply because they do not know about it. Our agents can help you determine your eligibility and walk you through the application at no cost.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You can apply through the Social Security Administration online, by phone at 1-800-772-1213, or in person at your local SSA office.
                </p>
              </div>
              <div className="space-y-4">
                {EXTRA_HELP_LEVELS.map((level) => (
                  <div key={level.level} className="rounded-2xl border overflow-hidden" style={{ borderColor: level.border }}>
                    <div className="px-5 py-3 font-bold" style={{ background: level.bg, color: level.color }}>{level.level}</div>
                    <div className="px-5 py-4 bg-white space-y-2">
                      <div className="flex items-start gap-2 text-sm">
                        <DollarSign size={14} className="shrink-0 mt-0.5 text-gray-400" />
                        <div><span className="font-semibold text-gray-700">Income limit: </span><span className="text-gray-600">{level.income}</span></div>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CheckCircle size={14} className="shrink-0 mt-0.5" style={{ color: level.color }} />
                        <div><span className="font-semibold text-gray-700">Benefit: </span><span className="text-gray-600">{level.benefit}</span></div>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
                  <AlertCircle size={15} className="text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-amber-800 leading-relaxed">Income limits are approximate and adjusted annually. Asset limits also apply. Contact us for a free eligibility check.</p>
                </div>
              </div>
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
                { href: "/how-medicare-part-d-works", label: "How Part D Works", desc: "Drug tiers, the 3 coverage phases, and how to read your plan's formulary.", color: "#1a3fa8", bg: "#e8edf8", border: "#b8c8f0" },
                { href: "/medicare-supplement", label: "Medicare Supplement (Medigap)", desc: "How Medigap fills the gaps in Original Medicare and works alongside Part D.", color: "#0d6e4f", bg: "#e6f4ee", border: "#a8d8c2" },
                { href: "/what-is-medicare", label: "What Is Medicare?", desc: "A full overview of all four parts of Medicare and how they work together.", color: "#7c3aed", bg: "#f3eeff", border: "#d4b8f8" },
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
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Medicare Part D Questions</h2>
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
              Let Us Find the Right Part D Plan for You
            </h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              We compare every Part D plan available in your area based on your specific medications, preferred pharmacies, and budget. We also check your Extra Help eligibility. The consultation is completely free.
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
