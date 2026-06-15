"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight, ChevronDown, Phone, CheckCircle, AlertCircle,
  ArrowRight, Info, Pill, DollarSign, Calendar, Shield
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const TIERS = [
  { tier: "Tier 1", label: "Preferred Generics", cost: "Lowest copay (~$0–$5)", color: "#0d6e4f", bg: "#e6f4ee", border: "#a8d8c2", desc: "Generic drugs preferred by your plan. These are the most affordable option." },
  { tier: "Tier 2", label: "Non-Preferred Generics", cost: "Low copay (~$5–$15)", color: "#1a3fa8", bg: "#e8edf8", border: "#b8c8f0", desc: "Generic drugs not on the preferred list. Still affordable but slightly more than Tier 1." },
  { tier: "Tier 3", label: "Preferred Brand-Name", cost: "Moderate copay (~$30–$50)", color: "#b45309", bg: "#fef3e2", border: "#f8d49a", desc: "Brand-name drugs preferred by your plan. Costs are higher than generics." },
  { tier: "Tier 4", label: "Non-Preferred Brand-Name", cost: "Higher copay (~$80–$100)", color: "#7c3aed", bg: "#f3eeff", border: "#d4b8f8", desc: "Brand-name drugs not preferred by your plan. Ask your doctor about alternatives." },
  { tier: "Tier 5", label: "Specialty Drugs", cost: "25–33% coinsurance", color: "#991b1b", bg: "#fee2e2", border: "#fca5a5", desc: "High-cost specialty medications. These can be very expensive without proper coverage." },
];

const PHASES = [
  {
    phase: "Phase 1",
    label: "Deductible Phase",
    color: "#1a3fa8",
    bg: "#e8edf8",
    border: "#b8c8f0",
    desc: "You pay 100% of drug costs until you meet your deductible. In 2025, the maximum deductible is $590. Many plans offer a $0 deductible for Tier 1 and 2 drugs.",
    tip: "Look for plans with a $0 deductible for your specific medications.",
  },
  {
    phase: "Phase 2",
    label: "Initial Coverage Phase",
    color: "#0d6e4f",
    bg: "#e6f4ee",
    border: "#a8d8c2",
    desc: "Your plan shares costs with you. You pay copayments or coinsurance based on your drug's tier. This continues until your total drug costs reach $2,100 in 2025.",
    tip: "This is the phase where your plan provides the most value for everyday medications.",
  },
  {
    phase: "Phase 3",
    label: "Catastrophic Coverage",
    color: "#0d6e4f",
    bg: "#e6f4ee",
    border: "#a8d8c2",
    desc: "Starting in 2025, once your out-of-pocket costs reach $2,000, you pay $0 for covered drugs for the rest of the year. The coverage gap (donut hole) was eliminated in 2025.",
    tip: "The Inflation Reduction Act eliminated the donut hole in 2025. Your costs are now capped at $2,100 per year.",
    highlight: true,
  },
];

const ENROLLMENT_PERIODS = [
  { name: "Initial Enrollment Period (IEP)", dates: "7-month window around your 65th birthday", icon: <Calendar size={16} className="text-[#1a3fa8]" />, desc: "Begins 3 months before your 65th birthday and ends 3 months after. Enrolling during the first 3 months ensures coverage starts on your birthday." },
  { name: "Annual Enrollment Period (AEP)", dates: "October 15 – December 7", icon: <Calendar size={16} className="text-[#0d6e4f]" />, desc: "Every year you can join, switch, or drop a Part D plan. Coverage for any changes starts January 1 of the following year." },
  { name: "Special Enrollment Period (SEP)", dates: "Varies by qualifying event", icon: <Calendar size={16} className="text-[#7c3aed]" />, desc: "If you lose creditable drug coverage, move to a new area, or qualify for Extra Help, you may be eligible for a Special Enrollment Period." },
  { name: "Medicare Advantage Open Enrollment", dates: "January 1 – March 31", icon: <Calendar size={16} className="text-[#b45309]" />, desc: "If you are enrolled in a Medicare Advantage plan with drug coverage, you can switch plans or return to Original Medicare during this period." },
];

const FAQS = [
  { q: "Do I need Part D if I don't take any medications?", a: "Yes, enrolling in a low-cost Part D plan is strongly recommended even if you currently take no medications. If you go without creditable drug coverage and later need medications, you will face a permanent late enrollment penalty of 1% of the national base premium for every month you were without coverage. A basic plan can cost as little as $5–$15/month and protects you from this penalty." },
  { q: "What is the Part D late enrollment penalty?", a: "The penalty is 1% of the national base beneficiary premium multiplied by the number of full months you went without creditable drug coverage. This penalty is added to your monthly Part D premium for as long as you have Medicare. It is permanent." },
  { q: "Can I change my Part D plan every year?", a: "Yes. During the Annual Enrollment Period (October 15 to December 7), you can switch to any Part D plan available in your area. Changes take effect January 1. We strongly recommend reviewing your plan every year because formularies, premiums, and drug costs change annually." },
  { q: "What is a formulary?", a: "A formulary is your plan's list of covered drugs. Each Part D plan has its own formulary, organized into tiers. If your medication is not on your plan's formulary, you may pay full price or need to request an exception. This is why comparing plans based on your specific medications is critical." },
  { q: "What is Extra Help (Low Income Subsidy)?", a: "Extra Help is a federal program that helps people with limited income and resources pay for Part D costs including premiums, deductibles, and copays. If you qualify, you may pay little to nothing for your medications. Contact us to find out if you qualify." },
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

export default function HowPartDWorksClient() {
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
              <Link href="/medicare-part-d" className="text-blue-300 hover:text-white text-sm transition-colors">Medicare Part D</Link>
              <ChevronRight size={13} className="text-blue-500" />
              <span className="text-blue-200 text-sm">How Part D Works</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
              <Pill size={12} /> Part D Deep Dive
            </div>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Medicare 101", href: "/medicare-101" }, { label: "How Part D Works" }]} className="mb-4" />
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl">
              How Medicare Part D Works
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Medicare Part D is prescription drug coverage. Understanding how it works, including tiers, phases, and the 2025 out-of-pocket cap, helps you choose the right plan and avoid costly surprises.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:8136995559" className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09600] transition-colors">
                <Phone size={16} /> Call 813-699-5559
              </a>
              <Link href="/medicare-part-d" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                Medicare Part D Overview <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* What is Part D */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">What Is Medicare Part D?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Medicare Part D is the prescription drug benefit of Medicare. It is offered by private insurance companies approved by Medicare and helps cover the cost of both generic and brand-name medications.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Part D can be purchased as a standalone plan (PDP) to add drug coverage to Original Medicare, or it may be bundled into a Medicare Advantage plan (MAPD). Either way, the core structure of how the benefit works is the same.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Every Part D plan has its own formulary (list of covered drugs), premium, deductible, and cost-sharing structure. This is why comparing plans based on your specific medications is essential, not just the monthly premium.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { icon: <Pill size={15} className="text-[#1a3fa8]" />, title: "Covers Generic and Brand-Name Drugs", desc: "Part D covers a wide range of prescription medications, organized into tiers based on cost.", bg: "#e8edf8", border: "#b8c8f0" },
                  { icon: <DollarSign size={15} className="text-[#0d6e4f]" />, title: "$2,100 Out-of-Pocket Cap in 2025", desc: "Starting in 2025, your annual out-of-pocket drug costs are capped at $2,100. After that, you pay $0 for covered drugs for the rest of the year.", bg: "#e6f4ee", border: "#a8d8c2" },
                  { icon: <AlertCircle size={15} className="text-[#991b1b]" />, title: "Permanent Penalty for Late Enrollment", desc: "Skipping Part D when you are first eligible results in a permanent penalty added to your premium for life.", bg: "#fee2e2", border: "#fca5a5" },
                  { icon: <Shield size={15} className="text-[#7c3aed]" />, title: "Extra Help Available", desc: "People with limited income may qualify for Extra Help, which significantly reduces Part D costs.", bg: "#f3eeff", border: "#d4b8f8" },
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

        {/* Drug Tiers */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Drug Tiers: How Your Costs Are Determined</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Every Part D plan organizes its covered drugs into tiers. The tier your medication falls on determines how much you pay. Lower tiers cost less.
              </p>
            </div>
            <div className="space-y-3">
              {TIERS.map((t) => (
                <div key={t.tier} className="rounded-2xl border overflow-hidden flex items-stretch" style={{ borderColor: t.border }}>
                  <div className="w-28 shrink-0 flex flex-col items-center justify-center p-4 text-center" style={{ background: t.bg }}>
                    <div className="font-black text-xs uppercase tracking-wider mb-1" style={{ color: t.color }}>{t.tier}</div>
                    <div className="font-bold text-gray-900 text-xs leading-tight">{t.label}</div>
                  </div>
                  <div className="flex-1 px-5 py-4 bg-white flex items-center justify-between gap-4">
                    <p className="text-sm text-gray-700 leading-relaxed">{t.desc}</p>
                    <div className="shrink-0 text-right">
                      <div className="text-xs text-gray-400 uppercase tracking-wider mb-0.5">Typical Cost</div>
                      <div className="font-bold text-sm" style={{ color: t.color }}>{t.cost}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-400 mt-4 text-center">Copay amounts are approximate and vary by plan. Always check your specific plan's formulary.</p>
          </div>
        </section>

        {/* Coverage Phases */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">The 3 Phases of Part D Coverage (2025)</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Your Part D costs change as you move through the year. Understanding these phases helps you budget and plan for your medication expenses.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {PHASES.map((p) => (
                <div key={p.phase} className={`rounded-2xl border overflow-hidden ${p.highlight ? "ring-2 ring-[#0d6e4f]" : ""}`} style={{ borderColor: p.border }}>
                  <div className="px-5 py-4" style={{ background: p.bg }}>
                    <div className="text-xs font-bold uppercase tracking-wider mb-1" style={{ color: p.color }}>{p.phase}</div>
                    <div className="font-bold text-gray-900">{p.label}</div>
                    {p.highlight && (
                      <div className="mt-2 inline-flex items-center gap-1.5 bg-[#0d6e4f] text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        2025 Change
                      </div>
                    )}
                  </div>
                  <div className="px-5 py-4 bg-white">
                    <p className="text-sm text-gray-700 leading-relaxed mb-3">{p.desc}</p>
                    <div className="rounded-lg p-3 text-xs leading-relaxed border" style={{ background: p.bg, borderColor: p.border, color: p.color }}>
                      <span className="font-bold">Tip: </span>{p.tip}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enrollment Periods */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">When Can You Enroll?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Part D enrollment is limited to specific windows. Missing your window can result in permanent penalties.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {ENROLLMENT_PERIODS.map((ep) => (
                <div key={ep.name} className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5">{ep.icon}</div>
                    <div>
                      <div className="font-bold text-gray-900 mb-0.5">{ep.name}</div>
                      <div className="text-xs font-semibold text-[#f5a800] mb-2">{ep.dates}</div>
                      <p className="text-sm text-gray-600 leading-relaxed">{ep.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Internal links to related pages */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900">Related Medicare Topics</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { href: "/medicare-part-d", label: "Medicare Part D Overview", desc: "Eligibility, costs, the Extra Help program, and how to enroll in Florida.", color: "#1a3fa8", bg: "#e8edf8", border: "#b8c8f0" },
                { href: "/medicare-supplement", label: "Medicare Supplement (Medigap)", desc: "How Medigap plans fill the gaps in Original Medicare coverage.", color: "#0d6e4f", bg: "#e6f4ee", border: "#a8d8c2" },
                { href: "/what-is-medicare", label: "What Is Medicare?", desc: "A complete overview of all four parts of Medicare and how they work together.", color: "#7c3aed", bg: "#f3eeff", border: "#d4b8f8" },
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
        <section className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Common Part D Questions</h2>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#0d2260] py-16">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">Find the Right Part D Plan for Your Medications</h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Our licensed agents compare every Part D plan available in your area based on your specific medications, preferred pharmacies, and budget. The comparison is free and takes about 15 minutes.
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
