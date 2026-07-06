"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight, ChevronDown, Phone, ArrowRight, CheckCircle,
  XCircle, Scale, MapPin, Shield, Star, Info
} from "lucide-react";

interface CityData {
  city: string;
  slug: string;
  county: string;
  zip: string;
  carriers: string[];
  neighboringCities: { name: string; slug: string }[];
  relatedCityLinks?: { label: string; href: string }[];
}

const PLAN_COMPARISON = [
  {
    feature: "Monthly Premium",
    advantage: "$0–$100+",
    medigap: "$80–$300+",
    partD: "$0–$60+",
    notes: "Advantage often has low/no premium; Medigap premiums vary by plan letter",
  },
  {
    feature: "Network Restrictions",
    advantage: "Usually required (HMO/PPO)",
    medigap: "Any Medicare provider nationwide",
    partD: "Pharmacy network applies",
    notes: "Medigap offers the most flexibility for choosing doctors",
  },
  {
    feature: "Prescription Drug Coverage",
    advantage: "Usually included",
    medigap: "Not included — need separate Part D",
    partD: "Standalone drug coverage",
    notes: "Medigap enrollees must add a separate Part D plan",
  },
  {
    feature: "Out-of-Pocket Maximum",
    advantage: "Yes (capped annually)",
    medigap: "Very low or $0 (Plan G/F)",
    partD: "Catastrophic cap applies",
    notes: "Medigap Plan G caps your exposure most effectively",
  },
  {
    feature: "Dental / Vision / Hearing",
    advantage: "Often included",
    medigap: "Not included",
    partD: "Not included",
    notes: "Advantage plans frequently bundle extra benefits",
  },
  {
    feature: "Referrals Required",
    advantage: "Often (HMO plans)",
    medigap: "No",
    partD: "No",
    notes: "PPO Advantage plans do not require referrals",
  },
  {
    feature: "Travel Coverage",
    advantage: "Limited (emergency only)",
    medigap: "Plan G includes foreign travel emergency",
    partD: "US pharmacies only",
    notes: "Medigap is better for frequent travelers",
  },
];

const PLAN_TYPES = [
  {
    name: "Medicare Advantage (Part C)",
    color: "#1a3fa8",
    bg: "#e8edf8",
    border: "#b8c8f0",
    tagline: "All-in-one coverage",
    pros: [
      "Often $0 monthly premium",
      "Includes dental, vision, and hearing",
      "Built-in prescription drug coverage",
      "Annual out-of-pocket maximum",
      "Extra benefits like gym memberships",
    ],
    cons: [
      "Network restrictions (HMO/PPO)",
      "Prior authorization may be required",
      "Coverage varies by plan and county",
      "Must use in-network providers for full coverage",
    ],
    bestFor: "People who want low premiums and bundled benefits and are comfortable with a network",
  },
  {
    name: "Medicare Supplement (Medigap)",
    color: "#0d6e4f",
    bg: "#e6f4ee",
    border: "#a8d8c2",
    tagline: "Predictable costs, maximum freedom",
    pros: [
      "See any Medicare-accepting doctor nationwide",
      "Highly predictable out-of-pocket costs",
      "No referrals required",
      "Plan G covers nearly all gaps",
      "Ideal for frequent travelers",
    ],
    cons: [
      "Higher monthly premium",
      "Does not include drug coverage (need separate Part D)",
      "Does not include dental/vision/hearing",
      "Medical underwriting may apply after initial enrollment",
    ],
    bestFor: "People who want maximum flexibility, travel frequently, or have complex medical needs",
  },
  {
    name: "Medicare Part D",
    color: "#7c3aed",
    bg: "#f3eeff",
    border: "#d4b8f8",
    tagline: "Standalone prescription coverage",
    pros: [
      "Covers brand-name and generic drugs",
      "Catastrophic coverage cap (2025: $2,000 out-of-pocket)",
      "Extra Help available for low-income enrollees",
      "Wide variety of plans available",
    ],
    cons: [
      "Formularies vary — not all drugs covered by all plans",
      "Late enrollment penalty if you delay",
      "Coverage gap (donut hole) still applies for some",
      "Must review annually during Open Enrollment",
    ],
    bestFor: "Anyone on Original Medicare or Medigap who needs prescription drug coverage",
  },
];

const FAQS = [
  {
    q: "What is the difference between Medicare Advantage and Medigap?",
    a: "Medicare Advantage (Part C) replaces Original Medicare with an all-in-one plan from a private insurer, often including drug coverage and extra benefits like dental and vision. Medigap (Medicare Supplement) works alongside Original Medicare to fill in the cost gaps — like deductibles and coinsurance — but does not include drug coverage. The right choice depends on your health needs, budget, and how important provider flexibility is to you.",
  },
  {
    q: "Can I have both Medicare Advantage and Medigap?",
    a: "No. You cannot use a Medigap policy to pay costs in a Medicare Advantage plan. Medigap is designed to supplement Original Medicare (Parts A and B) only. If you are enrolled in Medicare Advantage, you do not need — and generally cannot use — a Medigap policy.",
  },
  {
    q: "When is the best time to compare Medicare plans?",
    a: "The best time is during your Initial Enrollment Period (the 7-month window around your 65th birthday) when you have guaranteed issue rights for Medigap. After that, the Annual Enrollment Period (October 15 – December 7) allows you to switch Medicare Advantage or Part D plans. Our agents can review your options at any time of year.",
  },
  {
    q: "How do I know which plan covers my doctors and prescriptions?",
    a: "Each Medicare Advantage plan has a provider directory and formulary (drug list). Our agents compare plans side-by-side using your specific doctors and medications to find the plan that covers what you need at the lowest cost. This is one of the most valuable services we provide — and it is completely free.",
  },
  {
    q: "Is there a cost to work with Medicare Information Project?",
    a: "No. Our services are completely free to you. We are licensed independent agents compensated by insurance companies when you enroll. This compensation is the same regardless of which plan you choose, so our only goal is to find the right fit for you.",
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
        <ChevronDown
          size={18}
          className="text-[#1a3fa8] shrink-0 transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        />
      </button>
      {open && (
        <div className="px-6 pb-5 pt-1 bg-white border-t border-gray-100">
          <p className="text-gray-700 leading-relaxed text-[0.95rem]">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function CompareMedicarePlansTemplate({ data }: { data: CityData }) {
  const { city, county, zip, carriers, neighboringCities, relatedCityLinks } = data;

  return (
    <>
      <Header />
      <main className="bg-white">

        {/* Hero */}
        <section className="bg-[#0d2260] pt-16 pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
          />
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex items-center gap-2 mb-5">
              <Link href="/" className="text-blue-300 hover:text-white text-sm transition-colors">Home</Link>
              <ChevronRight size={13} className="text-blue-500" />
              <span className="text-blue-200 text-sm">Comparing Medicare Plans in {city}</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
              <MapPin size={12} /> {city}, FL — {county} County
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl">
              Comparing Medicare Plans in {city}
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Medicare is not one-size-fits-all. {city} residents have access to Medicare Advantage, Medigap, and Part D plans from {carriers.length}+ carriers. We help you compare them side-by-side — at no cost to you.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:8136995559"
                className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09600] transition-colors"
              >
                <Phone size={16} /> Call 813-699-5559
              </a>
              <Link
                href="/free-consultation"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20"
              >
                Free Plan Comparison <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Compare */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                  Why Comparing Medicare Plans in {city} Matters
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Medicare beneficiaries in {city} ({zip}) have access to dozens of plans across multiple carriers. The plan that was right for your neighbor may not be right for you — because plan value depends entirely on your doctors, your prescriptions, and how you use healthcare.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A plan with a $0 premium is not always the best deal. If it does not cover your medications or requires you to switch doctors, the out-of-pocket costs can far exceed what you would have paid with a higher-premium plan.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our independent agents in {county} County compare every available plan against your specific situation — completely free of charge.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { stat: `${carriers.length}+`, label: "Carriers Available in Your Area", color: "#1a3fa8", bg: "#e8edf8", border: "#b8c8f0" },
                  { stat: "149", label: "Medicare Products We Compare", color: "#0d6e4f", bg: "#e6f4ee", border: "#a8d8c2" },
                  { stat: "$0", label: "Cost to Work With Our Agents", color: "#7c3aed", bg: "#f3eeff", border: "#d4b8f8" },
                  { stat: "22+", label: "Years of Local Medicare Experience", color: "#b45309", bg: "#fef3e2", border: "#f8d49a" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border p-5 text-center" style={{ background: item.bg, borderColor: item.border }}>
                    <div className="font-black text-3xl mb-1" style={{ color: item.color }}>{item.stat}</div>
                    <div className="text-xs text-gray-600 leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Plan Type Cards */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
                Your Medicare Plan Options in {city}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                There are three main types of Medicare coverage available to {city} residents. Here is what each one offers.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {PLAN_TYPES.map((plan) => (
                <div key={plan.name} className="rounded-2xl border overflow-hidden" style={{ borderColor: plan.border }}>
                  <div className="px-5 py-4" style={{ background: plan.color }}>
                    <div className="font-bold text-white text-sm mb-0.5">{plan.name}</div>
                    <div className="text-xs font-medium" style={{ color: "rgba(255,255,255,0.7)" }}>{plan.tagline}</div>
                  </div>
                  <div className="px-5 py-4" style={{ background: plan.bg }}>
                    <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: plan.color }}>Advantages</div>
                    <ul className="space-y-1.5 mb-4">
                      {plan.pros.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-xs text-gray-700">
                          <CheckCircle size={12} className="shrink-0 mt-0.5" style={{ color: plan.color }} />{p}
                        </li>
                      ))}
                    </ul>
                    <div className="text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Limitations</div>
                    <ul className="space-y-1.5 mb-4">
                      {plan.cons.map((c) => (
                        <li key={c} className="flex items-start gap-2 text-xs text-gray-500">
                          <XCircle size={12} className="shrink-0 mt-0.5 text-gray-400" />{c}
                        </li>
                      ))}
                    </ul>
                    <div className="rounded-xl p-3 bg-white/60 border border-white">
                      <div className="text-xs font-bold text-gray-700 mb-1">Best For</div>
                      <p className="text-xs text-gray-600 leading-relaxed">{plan.bestFor}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-[#e8edf8] text-[#1a3fa8] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4 border border-[#b8c8f0]">
                <Scale size={12} /> Side-by-Side Comparison
              </div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
                Medicare Advantage vs. Medigap vs. Part D
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Use this table to compare the key features of each plan type available to {city} residents.
              </p>
            </div>
            <div className="overflow-x-auto rounded-2xl border border-gray-200">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0d2260]">
                    <th className="text-left px-5 py-3.5 text-white font-semibold">Feature</th>
                    <th className="text-center px-4 py-3.5 text-white font-semibold">Medicare Advantage</th>
                    <th className="text-center px-4 py-3.5 text-white font-semibold">Medigap</th>
                    <th className="text-center px-4 py-3.5 text-white font-semibold">Part D</th>
                  </tr>
                </thead>
                <tbody>
                  {PLAN_COMPARISON.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-3.5 font-semibold text-gray-900">{row.feature}</td>
                      <td className="px-4 py-3.5 text-center text-gray-700">{row.advantage}</td>
                      <td className="px-4 py-3.5 text-center text-gray-700">{row.medigap}</td>
                      <td className="px-4 py-3.5 text-center text-gray-700">{row.partD}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex items-start gap-2 bg-[#e8edf8] border border-[#b8c8f0] rounded-xl p-4">
              <Info size={14} className="text-[#1a3fa8] shrink-0 mt-0.5" />
              <p className="text-xs text-[#1a3fa8]">
                Plan availability and costs vary by zip code. The carriers and plans available in {city} ({zip}) may differ from other areas. Our agents compare every plan available in your specific zip code.
              </p>
            </div>
          </div>
        </section>

        {/* Local Carriers */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                  Medicare Carriers Available in {city}
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {city} residents in {county} County have access to plans from multiple major insurance carriers. As independent agents, we are appointed with all of them — which means we can compare every available option and recommend the one that is genuinely best for you.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Unlike captive agents who only represent one company, our advisors are free to recommend any plan from any carrier. Our compensation is the same regardless of which plan you choose.
                </p>
                <Link
                  href="/free-consultation"
                  className="inline-flex items-center gap-2 bg-[#1a3fa8] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#152f82] transition-colors text-sm"
                >
                  Compare Plans With an Agent <ArrowRight size={14} />
                </Link>
              </div>
              <div>
                <div className="bg-white border border-gray-200 rounded-2xl p-6">
                  <div className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Shield size={15} className="text-[#1a3fa8]" /> Carriers We Represent in {county} County
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {carriers.map((c) => (
                      <div key={c} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle size={13} className="text-[#0d6e4f] shrink-0" />{c}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-gray-500 flex items-start gap-2">
                    <Info size={12} className="shrink-0 mt-0.5" />
                    We do not offer every plan available in your area. We currently represent 17 organizations offering 149 products. Contact Medicare.gov or 1-800-MEDICARE for a complete list of options.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How We Help */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
                How We Help {city} Residents Compare Plans
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our comparison process is thorough, personalized, and completely free.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { step: "1", title: "Review Your Situation", desc: "We start by understanding your doctors, prescriptions, budget, and health priorities.", color: "#1a3fa8", bg: "#e8edf8", border: "#b8c8f0" },
                { step: "2", title: "Compare Every Plan", desc: "We run a side-by-side comparison of every plan available in your zip code.", color: "#0d6e4f", bg: "#e6f4ee", border: "#a8d8c2" },
                { step: "3", title: "Explain Your Options", desc: "We walk you through the top options in plain language — no jargon, no pressure.", color: "#7c3aed", bg: "#f3eeff", border: "#d4b8f8" },
                { step: "4", title: "Enroll & Support You", desc: "We handle enrollment and stay available year-round for questions and plan reviews.", color: "#b45309", bg: "#fef3e2", border: "#f8d49a" },
              ].map((item) => (
                <div key={item.step} className="rounded-2xl border p-5" style={{ background: item.bg, borderColor: item.border }}>
                  <div className="w-8 h-8 rounded-full flex items-center justify-center font-black text-white text-sm mb-3" style={{ background: item.color }}>{item.step}</div>
                  <div className="font-bold text-gray-900 mb-1.5">{item.title}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#f5a800] fill-[#f5a800]" />
                ))}
              </div>
              <blockquote className="font-serif text-xl text-gray-800 italic leading-relaxed mb-4">
                "I had no idea how many options I had until I spoke with Greg. He compared every plan available in my area and found one that covered all my doctors and saved me over $80 a month."
              </blockquote>
              <div className="text-sm font-semibold text-gray-700">— Medicare Information Project Client, {county} County</div>
            </div>
          </div>
        </section>

        {/* Related City Pages */}
        {relatedCityLinks && relatedCityLinks.length > 0 && (
          <section className="py-10 bg-blue-50 border-t border-blue-100">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-6">
                <h2 className="font-serif text-2xl font-bold text-gray-900">More Medicare Resources in {city}</h2>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {relatedCityLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center gap-2 bg-white text-[#1a3fa8] font-semibold px-4 py-2 rounded-xl hover:bg-[#e8edf8] transition-colors text-sm border border-[#b8c8f0]"
                  >
                    <ChevronRight size={13} /> {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
        {/* Neighboring Cities */}
        {neighboringCities.length > 0 && (
          <section className="py-10 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-6">
                <h2 className="font-serif text-2xl font-bold text-gray-900">We Also Serve Nearby Communities</h2>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {neighboringCities.map((nc) => (
                  <Link
                    key={nc.slug}
                    href={`/comparing-medicare-plans-${nc.slug}`}
                    className="inline-flex items-center gap-2 bg-[#e8edf8] text-[#1a3fa8] font-semibold px-4 py-2 rounded-xl hover:bg-[#d0daf5] transition-colors text-sm border border-[#b8c8f0]"
                  >
                    <MapPin size={13} /> {nc.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Medicare Plan Types Internal Links */}
        <section className="py-10 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="font-serif text-xl font-bold text-gray-900">Learn More About Your Medicare Options</h2>
              <p className="text-gray-500 text-sm mt-1">Explore our in-depth guides to every part of Medicare.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/medicare-advantage" className="inline-flex items-center gap-2 bg-[#e8edf8] text-[#1a3fa8] font-semibold px-4 py-2 rounded-xl hover:bg-[#d0daf5] transition-colors text-sm border border-[#b8c8f0]">Medicare Advantage Plans</Link>
              <Link href="/medicare-supplement" className="inline-flex items-center gap-2 bg-[#e8edf8] text-[#1a3fa8] font-semibold px-4 py-2 rounded-xl hover:bg-[#d0daf5] transition-colors text-sm border border-[#b8c8f0]">Medicare Supplement (Medigap)</Link>
              <Link href="/medicare-part-d" className="inline-flex items-center gap-2 bg-[#e8edf8] text-[#1a3fa8] font-semibold px-4 py-2 rounded-xl hover:bg-[#d0daf5] transition-colors text-sm border border-[#b8c8f0]">Part D Drug Coverage</Link>
              <Link href="/original-vs-advantage" className="inline-flex items-center gap-2 bg-[#e8edf8] text-[#1a3fa8] font-semibold px-4 py-2 rounded-xl hover:bg-[#d0daf5] transition-colors text-sm border border-[#b8c8f0]">Original Medicare vs. Advantage</Link>
              <Link href="/medicare-part-a" className="inline-flex items-center gap-2 bg-[#e8edf8] text-[#1a3fa8] font-semibold px-4 py-2 rounded-xl hover:bg-[#d0daf5] transition-colors text-sm border border-[#b8c8f0]">Medicare Part A</Link>
              <Link href="/medicare-part-b" className="inline-flex items-center gap-2 bg-[#e8edf8] text-[#1a3fa8] font-semibold px-4 py-2 rounded-xl hover:bg-[#d0daf5] transition-colors text-sm border border-[#b8c8f0]">Medicare Part B</Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
                Frequently Asked Questions
              </h2>
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
              Ready to Compare Medicare Plans in {city}?
            </h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Our local agents know the plans available in {county} County inside and out. Get a free, no-pressure comparison today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:8136995559"
                className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#e09600] transition-colors text-base"
              >
                <Phone size={17} /> Call 813-699-5559
              </a>
              <Link
                href="/free-consultation"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-base"
              >
                Schedule a Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
            <p className="text-blue-300/60 text-xs mt-6">
              We do not offer every plan available in your area. We currently represent 17 organizations which offer 149 products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local SHIP for information on all options.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
