"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight, ChevronDown, Phone, CheckCircle, AlertCircle,
  ArrowRight, Info, Pill, DollarSign, HelpCircle, Users
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import { PART_D_FAQS as FAQS } from "./content";

const PART_D_COSTS = [
  { item: "Maximum Annual Deductible", current: "$615", upcoming: "$700", note: "Some plans have a lower deductible or none. Check which drugs it applies to." },
  { item: "Covered Part D Out-of-Pocket Threshold", current: "$2,100", upcoming: "$2,400", note: "After the threshold, covered Part D drugs have no further cost sharing that calendar year. Premiums and noncovered drugs are excluded." },
  { item: "Monthly Plan Premium", current: "Varies by plan", upcoming: "Varies by plan", note: "Compare the actual plan premium and your medication estimates. Income-related charges or a late penalty may also apply." },
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
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Medicare 101", href: "/medicare-101/" }, { label: "Medicare Part D" }]} className="mb-4" />
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl">
              Medicare Part D
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Review Medicare prescription coverage, your medications, and pharmacy costs with our Brandon team. Compare 2026 coverage with the 2027 plan details before making an Annual Enrollment decision.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:8136995559" className="inline-flex items-center gap-2 bg-[#f5a800] text-[#0d2260] font-bold px-6 py-3 rounded-xl hover:bg-[#e09600] transition-colors">
                <Phone size={16} /> Call 813-699-5559
              </a>
              <Link href="/how-medicare-part-d-works/" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
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
                  Medicare Part D covers a wide range of prescription medications, including generic and brand-name drugs. Each plan has its own formulary, a list of covered drugs organized into tiers , which determines how much you pay for each medication.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Part D is offered by private insurance companies approved by Medicare. Plans vary in their premiums, deductibles, formularies, and pharmacy networks. This is why comparing plans based on your specific medications is far more important than just comparing monthly premiums.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For 2027, the covered Part D out-of-pocket threshold is $2,400; for 2026 it is $2,100. Premiums and noncovered medications are separate. Review your own drug list rather than assuming the threshold is your total yearly cost.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { icon: <CheckCircle size={15} className="text-[#0d6e4f]" />, title: "Generic and brand-name drugs", bg: "#e6f4ee", border: "#a8d8c2" },
                  { icon: <CheckCircle size={15} className="text-[#0d6e4f]" />, title: "Specialty medications (with higher cost sharing)", bg: "#e6f4ee", border: "#a8d8c2" },
                  { icon: <CheckCircle size={15} className="text-[#0d6e4f]" />, title: "Vaccines not covered under Part B", bg: "#e6f4ee", border: "#a8d8c2" },
                  { icon: <Info size={15} className="text-[#b45309]" />, title: "Does NOT cover most over-the-counter drugs", bg: "#fef3e2", border: "#f8d49a" },
                  { icon: <Info size={15} className="text-[#b45309]" />, title: "Some medications are covered under Part A or Part B rather than Part D", bg: "#fef3e2", border: "#f8d49a" },
                  { icon: <Info size={15} className="text-[#b45309]" />, title: "Check formulary coverage and the plan’s exception process", bg: "#fef3e2", border: "#f8d49a" },
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

        {/* 2026 Costs */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">2026 and 2027 Part D Costs at a Glance</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Use the correct coverage year. These are program limits, not a personalized plan quote.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-[#0d2260] text-white">
                    <th className="text-left px-5 py-3 font-semibold text-sm rounded-tl-xl">Cost Component</th>
                    <th className="text-left px-5 py-3 font-semibold text-sm">2026</th>
                    <th className="text-left px-5 py-3 font-semibold text-sm">2027</th>
                    <th className="text-left px-5 py-3 font-semibold text-sm rounded-tr-xl">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {PART_D_COSTS.map((row, i) => (
                    <tr key={row.item} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-5 py-3.5 font-semibold text-gray-900 text-sm">{row.item}</td>
                      <td className="px-5 py-3.5 font-bold text-[#1a3fa8] text-sm">{row.current}</td>
                      <td className="px-5 py-3.5 font-bold text-[#1a3fa8] text-sm">{row.upcoming}</td>
                      <td className="px-5 py-3.5 text-gray-600 text-sm">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5 bg-[#e6f4ee] border border-[#a8d8c2] rounded-2xl p-5 flex items-start gap-4">
              <CheckCircle size={18} className="text-[#0d6e4f] shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-[#0d6e4f] mb-1">Understand What the Estimate Includes</div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Check the plan’s deductible, drug costs, and premium together. If an annual estimate already includes a cost, avoid adding it again. The Medicare Prescription Payment Plan spreads eligible drug bills over the calendar year; it does not reduce your total drug costs. <Link href="/how-medicare-part-d-works/" className="text-[#0d6e4f] font-semibold hover:underline">Learn how the phases work.</Link>
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
                  Some people receive Extra Help automatically through Medicaid, a Medicare Savings Program, or SSI. Others can apply through Social Security. The agency can help you locate resources and prepare questions; Social Security and Medicare determine eligibility.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You can apply through the Social Security Administration online, by phone at 1-800-772-1213, or in person at your local SSA office.
                </p>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl bg-white border border-blue-200 p-6">
                  <h3 className="font-bold text-gray-900 text-lg mb-3">Check the Current Eligibility Rules</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">Income and resources are evaluated under current program rules. Do not rely on an old income chart or assume you cannot qualify without checking.</p>
                  <a href="https://www.medicare.gov/basics/costs/help/drug-costs" target="_blank" rel="noopener noreferrer" className="text-[#1a3fa8] underline font-semibold">Read Medicare’s Extra Help guidance</a>
                  <p className="mt-4"><a href="https://www.ssa.gov/medicare/part-d-extra-help" target="_blank" rel="noopener noreferrer" className="text-[#1a3fa8] underline font-semibold">Apply through Social Security</a></p>
                </div>
                <p className="text-sm text-gray-600">For local preparation and application resources, see our <Link href="/how-to-get-help-paying-for-medicare/" className="text-[#1a3fa8] underline">Medicare cost assistance information</Link>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-blue-50 border-y border-blue-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Compare Your 2027 Prescription Costs in Brandon</h2>
            <p className="text-gray-700 leading-relaxed mb-5">Enter your exact medications, doses, refill quantities, and pharmacy locations. Then review estimated annual costs and restrictions for the correct plan year.</p>
            <div className="flex flex-wrap gap-5 text-[#1a3fa8] font-semibold underline underline-offset-4">
              <Link href="/compare-medicare-prescription-costs-brandon/">Use the prescription cost comparison worksheet</Link>
              <Link href="/medicare-consulting-services-brandon/">Request an annual Medicare plan review in Brandon</Link>
              <Link href="/comparing-medicare-plans-brandon/">Compare Medicare coverage options</Link>
              <Link href="/medicare-brandon-fl/">Brandon Medicare resources</Link>
            </div>
            <p className="mt-6 text-sm text-gray-600">Reviewed October 19, 2026. <a className="text-[#1a3fa8] underline" href="https://www.medicare.gov/health-drug-plans/part-d/basics/costs" target="_blank" rel="noopener noreferrer">Official Medicare Part D cost information</a>.</p>
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
                { href: "/how-medicare-part-d-works/", label: "How Part D Works", desc: "Drug tiers, the 3 coverage phases, and how to read your plan's formulary.", color: "#1a3fa8", bg: "#e8edf8", border: "#b8c8f0" },
                { href: "/medicare-supplement/", label: "Medicare Supplement (Medigap)", desc: "How Medigap fills the gaps in Original Medicare and works alongside Part D.", color: "#0d6e4f", bg: "#e6f4ee", border: "#a8d8c2" },
                { href: "/what-is-medicare/", label: "What Is Medicare?", desc: "A full overview of all four parts of Medicare and how they work together.", color: "#7c3aed", bg: "#f3eeff", border: "#d4b8f8" },
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
              Our Brandon team compares the plans we represent using your medications, preferred pharmacies, and budget. Bring your plan notices and prescription list to a no-cost consultation. Plan premiums and other coverage costs still apply.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="tel:8136995559" className="inline-flex items-center gap-2 bg-[#f5a800] text-[#0d2260] font-bold px-7 py-3.5 rounded-xl hover:bg-[#e09600] transition-colors text-base">
                <Phone size={17} /> Call 813-699-5559
              </a>
              <Link href="/get-started/" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-base">
                Request a Consultation <ArrowRight size={16} />
              </Link>
            </div>
            <p className="text-blue-100 text-xs mt-6">
              We do not offer every plan available in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local SHIP for information on all options.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
