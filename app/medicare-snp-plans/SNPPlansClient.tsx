"use client";

/* ==========================================================================
   SNPPlansClient -- /medicare-snp-plans
   Medicare Special Needs Plans (SNP) -- Comprehensive Guide
   Design: MIP brand -- navy/gold, pillar-style two-column editorial layout
   No em dashes anywhere in this file.
   All cost figures are 2026.
   Brandon listed first in local signals.
   ========================================================================== */

import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  XCircle,
  ChevronRight,
  Phone,
  ArrowRight,
  Info,
  AlertCircle,
  MapPin,
  Shield,
  Heart,
  Star,
  Users,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl border border-gray-100 shadow-sm overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
        aria-expanded={open}
      >
        <span className="text-sm font-bold text-gray-900 pr-4">{q}</span>
        <ChevronRight
          className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-90" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: a }} />
        </div>
      )}
    </div>
  );
}

const SNP_TYPES = [
  {
    type: "C-SNP",
    name: "Chronic Condition SNP",
    color: "blue",
    badge: "bg-blue-100 text-blue-800",
    border: "border-blue-100",
    bg: "bg-blue-50",
    desc: "Designed for people with specific severe or disabling chronic conditions such as diabetes, heart failure, COPD, end-stage renal disease, or HIV/AIDS.",
    examples: ["Diabetes", "Chronic heart failure", "COPD", "End-stage renal disease", "HIV/AIDS", "Dementia"],
  },
  {
    type: "D-SNP",
    name: "Dual Eligible SNP",
    color: "purple",
    badge: "bg-purple-100 text-purple-800",
    border: "border-purple-100",
    bg: "bg-purple-50",
    desc: "For people who qualify for both Medicare and Medicaid (dual eligible). D-SNPs coordinate benefits across both programs to reduce gaps and out-of-pocket costs.",
    examples: ["Full Medicaid", "Partial Medicaid (QMB, SLMB, QI)", "Medicaid for long-term care", "Extra Help for Part D"],
  },
  {
    type: "I-SNP",
    name: "Institutional SNP",
    color: "green",
    badge: "bg-green-100 text-green-800",
    border: "border-green-100",
    bg: "bg-green-50",
    desc: "For people who live in or are expected to live in an institution such as a nursing facility, long-term care facility, or inpatient psychiatric facility for 90 days or more.",
    examples: ["Nursing facility residents", "Long-term care facility residents", "Inpatient psychiatric facility", "ICF/IID residents"],
  },
];

const PROS = [
  { title: "Tailored benefits for your condition", desc: "SNPs are built around your specific health situation, so covered services, formularies, and care teams align with your needs." },
  { title: "Coordinated care model", desc: "SNPs assign care coordinators who help manage your medications, specialist visits, and transitions between care settings." },
  { title: "Lower out-of-pocket costs", desc: "Many SNPs, especially D-SNPs, have $0 premiums and significantly reduced cost sharing compared to standard Medicare Advantage plans." },
  { title: "Specialized provider networks", desc: "Networks are built around providers experienced with your condition or care setting." },
  { title: "Extra benefits", desc: "Many SNPs include transportation, meal delivery, over-the-counter allowances, and other supplemental benefits not available in standard plans." },
];

const CONS = [
  { title: "Enrollment eligibility required", desc: "You must meet the specific eligibility criteria for the SNP type. Not everyone qualifies." },
  { title: "Smaller provider networks", desc: "Specialized networks may be narrower than standard Medicare Advantage plans, limiting provider choice." },
  { title: "Limited plan availability", desc: "SNPs are not available in every county. Availability in Hillsborough County varies by plan type and year." },
  { title: "Annual eligibility verification", desc: "You must continue to meet eligibility requirements each year. A change in your health status or Medicaid status can affect enrollment." },
  { title: "Restricted enrollment periods", desc: "Unlike standard Medicare Advantage plans, SNP enrollment may be limited to specific qualifying events." },
];

const FAQ_ITEMS = [
  {
    q: "Who qualifies for a Medicare Special Needs Plan?",
    a: "Eligibility depends on the SNP type. C-SNPs require a diagnosis of a specific chronic condition such as diabetes, heart failure, or COPD. D-SNPs require dual eligibility for both Medicare and Medicaid. I-SNPs require residence in a qualifying institution for 90 or more days. A licensed Medicare advisor can confirm whether you qualify based on your specific situation.",
  },
  {
    q: "Are Medicare SNP plans available in Brandon and Hillsborough County?",
    a: "Yes. D-SNPs in particular are widely available in Hillsborough County for 2026. C-SNP and I-SNP availability varies by carrier and condition. Contact a local Medicare advisor to see which SNP plans are available at your specific address.",
  },
  {
    q: "Do I still pay Medicare Part B premium if I enroll in an SNP?",
    a: "Yes. You must continue paying your Medicare Part B premium ($185/month in 2026) even when enrolled in an SNP. However, many D-SNPs have $0 plan premiums, and some D-SNPs offer a Part B premium reduction benefit that offsets some or all of the Part B cost.",
  },
  {
    q: "Can I switch from a regular Medicare Advantage plan to an SNP?",
    a: "Yes, if you meet the eligibility requirements for the SNP. You can switch during the Annual Election Period (October 15 to December 7) or during a Special Enrollment Period if you experience a qualifying event such as gaining Medicaid eligibility or being diagnosed with a qualifying chronic condition.",
  },
  {
    q: "What is a D-SNP and how does it help dual eligible beneficiaries?",
    a: "A D-SNP (Dual Eligible Special Needs Plan) is designed for people who qualify for both Medicare and Medicaid. These plans coordinate benefits across both programs, often resulting in $0 premiums, $0 or very low copays, and extra benefits like transportation, dental, vision, and over-the-counter allowances. D-SNPs are one of the most comprehensive coverage options available for eligible beneficiaries.",
  },
  {
    q: "What is a care coordinator and do all SNPs include one?",
    a: "A care coordinator is a dedicated health professional assigned to help you manage your care. They help schedule appointments, coordinate between specialists, manage medication lists, and assist with transitions between care settings like hospital to home. Most SNPs include care coordination as a core feature, though the level of service varies by plan.",
  },
];

const RELATED_LINKS = [
  { label: "Medicare Advantage Overview", href: "/medicare-advantage", desc: "Complete guide to all Medicare Advantage plan types" },
  { label: "Medicare HMO Plans", href: "/plan-types/hmo", desc: "Network-based coverage with lower premiums" },
  { label: "Medicare PPO Plans", href: "/medicare-ppo-plans-in-tampa", desc: "Flexible coverage with no referral requirements" },
  { label: "Do I Need a Supplement?", href: "/do-i-need-a-supplement", desc: "Medigap vs. Medicare Advantage decision guide" },
  { label: "Take the Medicare Quiz", href: "/medicare-quiz", desc: "Find out which plan type fits your situation" },
];

const TOC = [
  { id: "what-is", label: "What Is a Medicare SNP?" },
  { id: "snp-types", label: "The Three Types of SNPs" },
  { id: "pros-cons", label: "Pros and Cons" },
  { id: "eligibility", label: "Eligibility Requirements" },
  { id: "enrollment", label: "How to Enroll" },
  { id: "faq", label: "Frequently Asked Questions" },
  { id: "local", label: "SNP Plans in Brandon and Hillsborough County" },
];

export default function SNPPlansClient() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#0d1f5c] text-white pt-12 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <nav className="flex items-center gap-2 text-xs text-white/50 mb-4">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/medicare-advantage" className="hover:text-white transition-colors">Medicare Advantage</Link>
            <ChevronRight size={12} />
            <span className="text-white/80">Special Needs Plans</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-[#c9a84c]/20 border border-[#c9a84c]/40 text-[#c9a84c] text-xs font-bold px-3 py-1.5 rounded-full mb-4">
            <Shield size={12} />
            Medicare Advantage Plan Type
          </div>
          <h1 className="text-3xl sm:text-4xl font-black mb-3 leading-tight" style={{ fontFamily: "'Merriweather', serif" }}>
            Medicare Special Needs Plans (SNP)
          </h1>
          <p className="text-white/80 text-base max-w-2xl mb-6">
            SNPs are a specialized type of Medicare Advantage plan built for people with specific chronic conditions, dual Medicare and Medicaid eligibility, or institutional care needs. Here is a complete guide to the three SNP types, who qualifies, and what to expect in 2026.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <span>Updated for 2026</span>
            <span>|</span>
            <span>Reviewed by Greg Wohl, Licensed Medicare Advisor</span>
            <span>|</span>
            <span>9 min read</span>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
            {[
              { icon: <Heart size={16} />, stat: "3 Types", label: "C-SNP, D-SNP, I-SNP" },
              { icon: <Shield size={16} />, stat: "$0", label: "Premium on many D-SNPs" },
              { icon: <Star size={16} />, stat: "Coordinated", label: "Dedicated care team" },
              { icon: <Users size={16} />, stat: "Dual eligible", label: "Medicare + Medicaid" },
            ].map((item) => (
              <div key={item.label} className="bg-white/10 rounded-xl px-4 py-3 text-center">
                <div className="flex justify-center mb-1 text-[#c9a84c]">{item.icon}</div>
                <p className="text-lg font-black text-white">{item.stat}</p>
                <p className="text-xs text-white/60 mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Body */}
      <div className="max-w-5xl mx-auto px-4 py-12 w-full flex flex-col lg:flex-row gap-10">

        <article className="flex-1 min-w-0 space-y-10">

          {/* What Is an SNP */}
          <section id="what-is">
            <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
              What Is a Medicare Special Needs Plan?
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              A Medicare Special Needs Plan (SNP) is a type of Medicare Advantage (Part C) plan that limits membership to people with specific diseases, conditions, or characteristics. SNPs tailor their benefits, provider networks, and drug formularies to best serve their target population.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Like all Medicare Advantage plans, SNPs cover everything Original Medicare covers (Parts A and B) and typically include prescription drug coverage (Part D). What makes them different is the level of specialization. An SNP for people with diabetes, for example, will have a formulary built around diabetes medications, a network of endocrinologists and diabetes educators, and care coordination focused on blood sugar management.
            </p>
            <div className="rounded-xl border border-blue-100 bg-blue-50 px-5 py-4 flex items-start gap-3">
              <Info size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800 leading-relaxed">
                SNPs are authorized by Congress and must be approved by CMS each year. They are required to have a Model of Care that addresses the specific needs of their target population, including individualized care planning and care coordination.
              </p>
            </div>
          </section>

          {/* Three Types */}
          <section id="snp-types">
            <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
              The Three Types of Medicare SNPs
            </h2>
            <div className="space-y-4">
              {SNP_TYPES.map((snp) => (
                <div key={snp.type} className={`rounded-xl border ${snp.border} ${snp.bg} p-5`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${snp.badge}`}>{snp.type}</span>
                    <p className="text-sm font-bold text-gray-900">{snp.name}</p>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">{snp.desc}</p>
                  <div>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-2">Qualifying conditions or situations:</p>
                    <div className="flex flex-wrap gap-2">
                      {snp.examples.map((ex) => (
                        <span key={ex} className="text-xs bg-white border border-gray-200 text-gray-700 px-2.5 py-1 rounded-full">{ex}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pros and Cons */}
          <section id="pros-cons">
            <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
              Pros and Cons of Medicare SNPs
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-green-100 bg-green-50 p-5">
                <p className="text-sm font-bold text-green-800 mb-3 flex items-center gap-2">
                  <CheckCircle size={15} /> Advantages
                </p>
                <ul className="space-y-3">
                  {PROS.map((p) => (
                    <li key={p.title}>
                      <p className="text-sm font-semibold text-gray-900">{p.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{p.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-red-100 bg-red-50 p-5">
                <p className="text-sm font-bold text-red-800 mb-3 flex items-center gap-2">
                  <XCircle size={15} /> Disadvantages
                </p>
                <ul className="space-y-3">
                  {CONS.map((c) => (
                    <li key={c.title}>
                      <p className="text-sm font-semibold text-gray-900">{c.title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Eligibility */}
          <section id="eligibility">
            <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
              SNP Eligibility Requirements
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              To enroll in an SNP, you must first meet the standard Medicare Advantage eligibility requirements: you must be enrolled in Medicare Parts A and B, live in the plan service area, and not have end-stage renal disease (with limited exceptions). Beyond that, each SNP type has its own eligibility criteria:
            </p>
            <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0d1f5c] text-white">
                    <th className="text-left px-5 py-3 font-bold">SNP Type</th>
                    <th className="text-left px-5 py-3 font-bold">Eligibility Requirement</th>
                    <th className="text-left px-5 py-3 font-bold hidden sm:table-cell">Verification</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "C-SNP", req: "Diagnosis of a qualifying chronic condition (e.g., diabetes, heart failure, COPD)", verify: "Medical records or physician attestation" },
                    { type: "D-SNP", req: "Dual eligibility for Medicare and full or partial Medicaid", verify: "Medicaid eligibility verified by the plan" },
                    { type: "I-SNP", req: "Residing in or expected to reside in a qualifying institution for 90+ days", verify: "Institutional status confirmed by facility" },
                  ].map((row, i) => (
                    <tr key={row.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="px-5 py-3 font-bold text-gray-800">{row.type}</td>
                      <td className="px-5 py-3 text-gray-700">{row.req}</td>
                      <td className="px-5 py-3 text-gray-500 hidden sm:table-cell">{row.verify}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 rounded-xl border border-amber-100 bg-amber-50 px-5 py-4 flex items-start gap-3">
              <AlertCircle size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-amber-800 leading-relaxed">
                If you lose eligibility during the year (for example, your Medicaid ends), you will receive a Special Enrollment Period to switch to a different Medicare Advantage plan or return to Original Medicare.
              </p>
            </div>
          </section>

          {/* Enrollment */}
          <section id="enrollment">
            <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
              How to Enroll in a Medicare SNP
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  period: "Initial Enrollment Period",
                  dates: "7-month window around your 65th birthday",
                  desc: "If you already meet SNP eligibility criteria at age 65, you can enroll in an SNP during your IEP.",
                  color: "border-blue-100 bg-blue-50",
                },
                {
                  period: "Annual Election Period",
                  dates: "October 15 to December 7 each year",
                  desc: "The main window to switch to, from, or between Medicare Advantage plans including SNPs. Coverage starts January 1.",
                  color: "border-green-100 bg-green-50",
                },
                {
                  period: "Special Enrollment Period",
                  dates: "Triggered by a qualifying event",
                  desc: "Gaining Medicaid eligibility, being diagnosed with a qualifying condition, or moving into a nursing facility all trigger an SEP for SNP enrollment.",
                  color: "border-purple-100 bg-purple-50",
                },
                {
                  period: "Continuous SNP Enrollment",
                  dates: "Year-round for D-SNPs",
                  desc: "People who are dual eligible (Medicare and Medicaid) can enroll in a D-SNP at any time during the year, not just during open enrollment.",
                  color: "border-amber-100 bg-amber-50",
                },
              ].map((item) => (
                <div key={item.period} className={`rounded-xl border p-5 ${item.color}`}>
                  <p className="text-sm font-bold text-gray-900 mb-1">{item.period}</p>
                  <p className="text-xs font-semibold text-gray-500 mb-2">{item.dates}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl border border-blue-100 bg-blue-50 px-5 py-4 flex items-start gap-3">
              <Info size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-blue-800 leading-relaxed">
                D-SNP enrollees who are fully dual eligible can switch plans once per quarter during the first three quarters of the year (January, April, and July), in addition to the Annual Election Period. This gives dual eligible beneficiaries more flexibility than standard Medicare Advantage enrollees.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq">
            <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
              Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {FAQ_ITEMS.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </section>

          {/* Local Section */}
          <section id="local">
            <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
              Medicare SNP Plans in Brandon and Hillsborough County
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Brandon and Hillsborough County residents have access to several SNP options in 2026, particularly D-SNPs for dual eligible beneficiaries. Hillsborough County has a significant population of Medicare and Medicaid dual eligible residents, and multiple carriers offer D-SNPs in the area with $0 premiums, $0 copays for most services, and extra benefits including transportation, dental, vision, and over-the-counter allowances.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              C-SNP availability in the Brandon and Riverview area varies by condition and carrier. Common C-SNP conditions covered in Hillsborough County include diabetes, chronic heart failure, and COPD. If you have been diagnosed with one of these conditions, a licensed advisor can check which C-SNPs are available at your specific address.
            </p>
            <div className="rounded-xl border border-[#c9a84c]/30 bg-[#fdf8ee] px-5 py-4 flex items-start gap-3">
              <MapPin size={16} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-gray-900 mb-1">Serving Brandon, Riverview, and Hillsborough County</p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Greg Wohl and the Medicare Information Pro team help Brandon, Riverview, Valrico, Apollo Beach, Sun City Center, and Tampa residents navigate SNP eligibility and enrollment. If you think you may qualify for a D-SNP or C-SNP, a free consultation can confirm your options.
                </p>
                <a href="tel:+18137428888" className="inline-flex items-center gap-1.5 mt-3 text-sm font-bold text-[#0d1f5c] hover:underline">
                  <Phone size={13} />
                  Call (813) 742-8888
                </a>
              </div>
            </div>
          </section>

          {/* Inline CTA */}
          <div className="rounded-2xl bg-[#0d1f5c] text-white px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-1">
              <p className="text-lg font-bold mb-1">Find Out If You Qualify for an SNP</p>
              <p className="text-sm text-white/70">A licensed Medicare specialist can check your eligibility and show you every SNP available in your area at no cost.</p>
            </div>
            <div className="flex flex-col gap-2 flex-shrink-0">
              <a
                href="tel:+18137428888"
                className="flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8973d] text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors"
              >
                <Phone size={15} />
                (813) 742-8888
              </a>
              <Link
                href="/medicare-quiz"
                className="flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white text-sm px-5 py-3 rounded-xl transition-colors"
              >
                Take the Medicare Quiz
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>

        </article>

        {/* Sidebar */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-6 lg:sticky lg:top-6 lg:self-start">

          <div className="rounded-xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">On This Page</p>
            <nav className="space-y-1">
              {TOC.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm text-gray-600 hover:text-[#0d1f5c] hover:font-semibold py-1 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="rounded-xl border border-gray-100 shadow-sm p-5">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#c9a84c]">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/31e0f2a3-1c0b-4e0f-b9e3-2a4c5d6e7f8a/greg-wohl-author_kbxfzwfm.png"
                  alt="Greg Wohl"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <p className="text-sm font-bold text-gray-900">Greg Wohl</p>
                <p className="text-xs text-gray-500">Licensed Medicare Advisor</p>
                <div className="flex items-center gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-[#c9a84c] fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <a
              href="tel:+18137428888"
              className="flex items-center justify-center gap-2 w-full bg-[#0d1f5c] hover:bg-[#162a7a] text-white font-bold text-sm px-4 py-3 rounded-xl transition-colors mb-2"
            >
              <Phone size={14} />
              (813) 742-8888
            </a>
            <Link
              href="/medicare-quiz"
              className="flex items-center justify-center gap-2 w-full border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm px-4 py-3 rounded-xl transition-colors"
            >
              Take the Medicare Quiz
              <ArrowRight size={13} />
            </Link>
          </div>

          <div className="rounded-xl border border-gray-100 shadow-sm p-5">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Related Pages</p>
            <div className="space-y-3">
              {RELATED_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="block group">
                  <p className="text-sm font-semibold text-[#0d1f5c] group-hover:underline">{link.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{link.desc}</p>
                </Link>
              ))}
            </div>
          </div>

        </aside>
      </div>

      {/* Bottom CTA Band */}
      <section className="bg-[#0d1f5c] text-white py-14 px-4 mt-auto">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl font-black mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
            Check Your SNP Eligibility for Free
          </p>
          <p className="text-white/70 text-sm mb-6 max-w-xl mx-auto">
            Find out if you qualify for a Special Needs Plan in Brandon, Riverview, or anywhere in Hillsborough County. No cost, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+18137428888"
              className="flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8973d] text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              <Phone size={16} />
              Call (813) 742-8888
            </a>
            <Link
              href="/medicare-quiz"
              className="flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white px-7 py-3.5 rounded-xl transition-colors"
            >
              Take the Medicare Quiz
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
