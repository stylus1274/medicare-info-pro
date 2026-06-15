"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight, ChevronDown, Phone, CheckCircle, AlertCircle,
  ArrowRight, Info, Shield, MapPin, DollarSign, Calendar, Stethoscope
} from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";

const PART_B_COVERS = [
  { category: "Preventive Services", items: ["Annual Wellness Visit", "Flu, pneumonia, and COVID-19 vaccines", "Cancer screenings (mammograms, colonoscopies)", "Cardiovascular disease screenings", "Diabetes screenings and self-management training"] },
  { category: "Outpatient Medical Care", items: ["Doctor visits (primary care and specialists)", "Outpatient surgery", "Emergency room visits", "Urgent care visits", "Mental health services (outpatient)"] },
  { category: "Diagnostic Services", items: ["Lab tests and blood work", "X-rays, MRIs, CT scans", "Cardiac monitoring", "Pulmonary function tests", "Bone density scans"] },
  { category: "Durable Medical Equipment", items: ["Wheelchairs and walkers", "Hospital beds (for home use)", "Oxygen equipment", "Blood sugar monitors", "CPAP machines"] },
];

const COSTS_2025 = [
  { item: "Monthly Premium (standard)", amount: "$202.90", note: "Higher earners pay more via IRMAA" },
  { item: "Annual Deductible", amount: "$283", note: "You pay this before Part B coverage begins" },
  { item: "Coinsurance", amount: "20%", note: "You pay 20% of Medicare-approved amount after deductible" },
  { item: "IRMAA Surcharge (income > $109,000)", amount: "+$74.00 – +$443.90/mo", note: "Based on your income from 2 years prior" },
];

const ENROLLMENT_TIPS = [
  { tip: "Enroll during your 7-month Initial Enrollment Period", detail: "Begins 3 months before your 65th birthday. Enrolling in the first 3 months ensures coverage starts on your birthday month.", icon: <Calendar size={15} className="text-[#1a3fa8]" /> },
  { tip: "If you have employer coverage, you may be able to delay", detail: "If you or your spouse is actively working and covered by a qualifying employer group health plan, you can delay Part B without penalty. Retiring triggers a Special Enrollment Period.", icon: <Info size={15} className="text-[#0d6e4f]" /> },
  { tip: "Late enrollment means a permanent penalty", detail: "For every 12-month period you could have had Part B but didn't enroll, your premium increases by 10% — permanently. This penalty lasts for as long as you have Part B.", icon: <AlertCircle size={15} className="text-[#991b1b]" /> },
  { tip: "Medicare Savings Programs can help with costs", detail: "If your income is limited, you may qualify for a Medicare Savings Program that pays your Part B premium and reduces other costs. Our agents can check your eligibility.", icon: <DollarSign size={15} className="text-[#7c3aed]" /> },
];

const FAQS = [
  { q: "What does Medicare Part B cost in 2026?", a: "The standard Part B premium in 2026 is $202.90 per month. The annual deductible is $283. After the deductible, you pay 20% of the Medicare-approved amount for most services. Higher-income beneficiaries pay more through Income-Related Monthly Adjustment Amounts (IRMAA)." },
  { q: "Is Medicare Part B automatic when I turn 65?", a: "It depends. If you are already receiving Social Security benefits, you will be automatically enrolled in Parts A and B when you turn 65. If you are not yet receiving Social Security, you must actively enroll. Our team can help you determine your enrollment status and walk you through the process." },
  { q: "Can I decline Part B if I have other insurance?", a: "Yes, but only if you have creditable coverage from an active employer (yours or your spouse's). Retiree coverage, COBRA, and most other insurance do not count as creditable coverage for delaying Part B. If you decline Part B without creditable coverage, you will face a permanent late enrollment penalty." },
  { q: "What is the Part B late enrollment penalty?", a: "The penalty is 10% of the standard Part B premium for every 12-month period you were eligible but did not enroll. This penalty is permanent and added to your monthly premium for as long as you have Part B." },
  { q: "How can I reduce my Part B costs?", a: "There are several ways: (1) Medicare Savings Programs can pay your Part B premium if you qualify based on income. (2) A Medicare Supplement (Medigap) plan covers the 20% coinsurance. (3) Some Medicare Advantage plans include Part B premium reduction benefits. Our agents can review all options for your situation." },
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

export default function PartBBrandonClient() {
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
              <span className="text-blue-200 text-sm">Medicare Part B Assistance — Brandon</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
              <MapPin size={12} /> Brandon, FL
            </div>
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Medicare Part B", href: "/medicare-part-b" }, { label: "Part B Assistance Brandon" }]} className="mb-4" />
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl">
              Medicare Part B Assistance in Brandon
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Expert guidance for enrolling, understanding costs, and maximizing your Medicare Part B benefits. Our licensed agents serve Brandon and all of Hillsborough County.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:8136995559" className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09600] transition-colors">
                <Phone size={16} /> Call 813-699-5559
              </a>
              <Link href="/free-consultation" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                Schedule a Consultation <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* What is Part B */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">What Is Medicare Part B?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Medicare Part B is the medical insurance component of Original Medicare. It covers outpatient care, preventive services, and medically necessary services that Part A (hospital insurance) does not cover.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Part B covers 80% of Medicare-approved costs after you meet your annual deductible. You are responsible for the remaining 20% — which is why many Brandon residents pair Part B with a Medicare Supplement (Medigap) plan or Medicare Advantage plan to limit their out-of-pocket exposure.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Unlike Part A, Part B always has a monthly premium. In 2026, the standard premium is $202.90 per month, though higher-income beneficiaries pay more.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {PART_B_COVERS.map((cat) => (
                  <div key={cat.category} className="bg-white border border-gray-200 rounded-2xl p-4">
                    <div className="font-bold text-gray-900 text-sm mb-2">{cat.category}</div>
                    <ul className="space-y-1">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-start gap-1.5 text-xs text-gray-600">
                          <CheckCircle size={10} className="text-[#0d6e4f] shrink-0 mt-0.5" />{item}
                        </li>
                      ))}
                    </ul>
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
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">2025 Medicare Part B Costs</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Understanding your Part B costs helps you plan and identify opportunities to reduce your expenses.</p>
            </div>
            <div className="overflow-x-auto mb-6">
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
            <div className="bg-[#e6f4ee] border border-[#a8d8c2] rounded-2xl p-5 flex items-start gap-4">
              <DollarSign size={18} className="text-[#0d6e4f] shrink-0 mt-0.5" />
              <div>
                <div className="font-bold text-[#0d6e4f] mb-1">Medicare Savings Programs Can Pay Your Part B Premium</div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  If your income is limited, you may qualify for a Medicare Savings Program (MSP) that pays your Part B premium and reduces other costs. Many eligible people in Brandon do not know they qualify. <Link href="/free-consultation" className="text-[#0d6e4f] font-semibold hover:underline">Contact us for a free eligibility check.</Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Tips */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Enrollment Guidance for Brandon Residents</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Enrolling at the right time is critical. Here is what every Brandon resident approaching Medicare needs to know.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {ENROLLMENT_TIPS.map((tip) => (
                <div key={tip.tip} className="bg-white border border-gray-200 rounded-2xl p-5">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 mt-0.5">{tip.icon}</div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">{tip.tip}</div>
                      <p className="text-sm text-gray-600 leading-relaxed">{tip.detail}</p>
                    </div>
                  </div>
                </div>
              ))}
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
                { href: "/medicare-supplement", label: "Medicare Supplement (Medigap)", desc: "Cover the 20% Part B coinsurance with a Medigap plan.", color: "#1a3fa8", bg: "#e8edf8", border: "#b8c8f0" },
                { href: "/medicare-advantage-florida", label: "Medicare Advantage Florida", desc: "An alternative to Original Medicare that may reduce your Part B out-of-pocket costs.", color: "#0d6e4f", bg: "#e6f4ee", border: "#a8d8c2" },
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
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Part B Questions from Brandon Residents</h2>
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
              Get Medicare Part B Help in Brandon Today
            </h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Our licensed agents are based in Brandon and Hillsborough County. We help you enroll correctly, avoid penalties, and find the right supplemental coverage to limit your out-of-pocket costs. The consultation is completely free.
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
              We do not offer every plan available in your area. Currently we represent 17 organizations which offer 149 products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local SHIP for information on all options.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
