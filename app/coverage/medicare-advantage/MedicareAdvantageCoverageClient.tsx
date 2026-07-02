"use client";
/* ==========================================================================
   MedicareAdvantageCoverageClient: /coverage/medicare-advantage
   Medicare Advantage Extra Benefits: OTC, Transportation, Fitness & More
   Design: MIP brand: navy/gold, editorial two-column layout
   ========================================================================== */
import { useState } from "react";
import Link from "next/link";
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  ChevronRight,
  Phone,
  ArrowRight,
  Gift,
  Car,
  Dumbbell,
  Eye,
  Ear,
  Smile,
  Pill,
  Utensils,
  Wifi,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Types ────────────────────────────────────────────────────────────────────
type CoverageStatus = "covered" | "partial" | "not";

const STATUS_CONFIG: Record<
  CoverageStatus,
  { label: string; color: string; bg: string; border: string; Icon: React.FC<{ className?: string }> }
> = {
  covered: {
    label: "Included by Most Plans",
    color: "#166534",
    bg: "#dcfce7",
    border: "#86efac",
    Icon: ({ className }) => <CheckCircle size={16} className={className ?? "text-green-600"} />,
  },
  partial: {
    label: "Offered by Some Plans",
    color: "#92400e",
    bg: "#fef3c7",
    border: "#fcd34d",
    Icon: ({ className }) => <AlertCircle size={16} className={className ?? "text-amber-600"} />,
  },
  not: {
    label: "Not Typically Included",
    color: "#991b1b",
    bg: "#fee2e2",
    border: "#fca5a5",
    Icon: ({ className }) => <XCircle size={16} className={className ?? "text-red-600"} />,
  },
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const BENEFIT_ROWS: { benefit: string; status: CoverageStatus; detail: string }[] = [
  {
    benefit: "Dental (Preventive)",
    status: "covered",
    detail:
      "Most Medicare Advantage plans include preventive dental benefits: routine exams, cleanings, and X-rays. Coverage for more extensive care (fillings, extractions, root canals, dentures) varies widely by plan.",
  },
  {
    benefit: "Vision",
    status: "covered",
    detail:
      "Most plans cover routine eye exams and provide an annual allowance toward eyeglasses or contact lenses. Allowances typically range from $100 to $300 per year.",
  },
  {
    benefit: "Hearing",
    status: "covered",
    detail:
      "Many plans include routine hearing exams and a benefit toward hearing aids. Hearing aid allowances vary significantly — from a few hundred dollars to over $2,000 per ear.",
  },
  {
    benefit: "Over-the-Counter (OTC) Allowance",
    status: "covered",
    detail:
      "A quarterly or monthly credit (typically $25–$150+) to purchase approved health-related items: vitamins, pain relievers, bandages, cold/flu remedies, and personal care products at participating retailers or by mail.",
  },
  {
    benefit: "Fitness Membership (SilverSneakers)",
    status: "covered",
    detail:
      "Many plans include SilverSneakers or a similar fitness benefit, providing access to participating gyms, fitness classes, and online workout resources at no additional cost.",
  },
  {
    benefit: "Transportation to Medical Appointments",
    status: "covered",
    detail:
      "Non-emergency medical transportation (NEMT) to covered appointments such as doctor visits, dialysis, and chemotherapy. The number of covered one-way trips per year varies by plan.",
  },
  {
    benefit: "Telehealth / Virtual Visits",
    status: "covered",
    detail:
      "Most Medicare Advantage plans include telehealth benefits for primary care, mental health, and specialist visits via phone or video. Many plans offer $0 copays for telehealth visits.",
  },
  {
    benefit: "Meal Delivery After Hospital Stay",
    status: "partial",
    detail:
      "Some plans provide a short-term meal delivery benefit after a qualifying hospital or skilled nursing facility stay to support recovery at home. Typically limited to 14–28 meals.",
  },
  {
    benefit: "Home Safety Modifications",
    status: "partial",
    detail:
      "A small number of plans offer allowances for home safety modifications such as grab bars, non-slip mats, and ramps for members with qualifying conditions.",
  },
  {
    benefit: "Caregiver Support",
    status: "partial",
    detail:
      "Some plans offer caregiver support services including respite care, training, and counseling for family caregivers of plan members with chronic conditions.",
  },
  {
    benefit: "Worldwide Emergency Coverage",
    status: "partial",
    detail:
      "Some Medicare Advantage plans cover emergency and urgent care when traveling outside the U.S. Original Medicare generally does not cover care outside the country.",
  },
  {
    benefit: "Acupuncture / Chiropractic",
    status: "partial",
    detail:
      "Some plans cover acupuncture and chiropractic care beyond what Original Medicare covers. Coverage limits and cost-sharing vary significantly by plan.",
  },
];

const EXTRA_BENEFITS = [
  {
    Icon: Gift,
    title: "OTC Allowance",
    desc: "Quarterly credit for vitamins, pain relievers, bandages, and more at participating retailers.",
    color: "#1a3fa8",
  },
  {
    Icon: Car,
    title: "Transportation",
    desc: "Rides to and from covered medical appointments — no out-of-pocket cost.",
    color: "#0d7c3e",
  },
  {
    Icon: Dumbbell,
    title: "Fitness Benefits",
    desc: "SilverSneakers or similar program: gym access, classes, and online workouts.",
    color: "#b45309",
  },
  {
    Icon: Eye,
    title: "Vision",
    desc: "Annual eye exam plus allowance for glasses or contact lenses.",
    color: "#7c3aed",
  },
  {
    Icon: Ear,
    title: "Hearing",
    desc: "Hearing exams and allowance toward hearing aids.",
    color: "#0891b2",
  },
  {
    Icon: Smile,
    title: "Dental",
    desc: "Preventive care and often comprehensive dental benefits.",
    color: "#dc2626",
  },
  {
    Icon: Pill,
    title: "Prescription Drugs",
    desc: "Most plans include Part D drug coverage (MAPD plans).",
    color: "#059669",
  },
  {
    Icon: Utensils,
    title: "Meal Delivery",
    desc: "Short-term meal delivery after a qualifying hospital stay.",
    color: "#d97706",
  },
  {
    Icon: Wifi,
    title: "Telehealth",
    desc: "Virtual visits with primary care and specialists, often at $0 copay.",
    color: "#2563eb",
  },
];

const FAQ_ITEMS = [
  {
    q: "What extra benefits do Medicare Advantage plans offer?",
    a: "Medicare Advantage plans often include extra benefits not covered by Original Medicare, such as dental, vision, hearing, over-the-counter (OTC) allowances, transportation to medical appointments, fitness memberships (SilverSneakers), meal delivery after a hospital stay, and telehealth services. Benefits vary by plan and county.",
  },
  {
    q: "Do all Medicare Advantage plans include OTC allowances?",
    a: "No. OTC allowances are an optional extra benefit that some Medicare Advantage plans offer. When available, they typically provide a quarterly or monthly credit (ranging from $25 to $150+) that can be used to purchase approved health-related items such as vitamins, pain relievers, bandages, and personal care products.",
  },
  {
    q: "Does Medicare Advantage cover transportation to doctor appointments?",
    a: "Many Medicare Advantage plans include non-emergency medical transportation (NEMT) as an extra benefit. This typically covers rides to and from covered medical appointments such as doctor visits, dialysis, and chemotherapy. The number of covered rides per year varies by plan.",
  },
  {
    q: "What is SilverSneakers and does Medicare Advantage cover it?",
    a: "SilverSneakers is a fitness program designed for adults 65 and older that provides access to participating gyms, fitness classes, and online workout resources. Many Medicare Advantage plans include SilverSneakers or a similar fitness benefit at no additional cost. Check your specific plan's benefits to confirm eligibility.",
  },
  {
    q: "Can I keep my doctor if I switch to Medicare Advantage?",
    a: "It depends on the plan. HMO plans require you to use a network of doctors and typically require referrals to see specialists. PPO plans offer more flexibility and allow you to see out-of-network providers at a higher cost. Before enrolling, always verify that your current doctors and preferred hospitals are in the plan's network.",
  },
  {
    q: "How do I compare Medicare Advantage extra benefits in my area?",
    a: "Extra benefits vary significantly by plan and county. The best way to compare is to use Medicare's Plan Finder at medicare.gov or work with a licensed Medicare insurance agent who can review all plans available in your ZIP code and explain the differences in benefits, networks, and costs.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function MedicareAdvantageCoverageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section
        className="relative py-16 md:py-24"
        style={{
          background:
            "linear-gradient(135deg, #0d2260 0%, #1a3fa8 60%, #1e50c8 100%)",
        }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-blue-300 text-sm mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link href="/coverage" className="hover:text-white transition-colors">Coverage</Link>
            <ChevronRight size={14} />
            <span className="text-white">Medicare Advantage Extra Benefits</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-blue-200 text-xs font-semibold uppercase tracking-widest mb-5">
            Medicare Advantage (Part C)
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight mb-5">
            Medicare Advantage Extra Benefits
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl leading-relaxed mb-8">
            Beyond hospital and medical coverage, Medicare Advantage plans can include OTC allowances, transportation, fitness memberships, dental, vision, hearing, and more. Here is what to look for and how benefits compare.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:8136995559"
              className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8973e] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              <Phone size={16} />
              Compare Plans: (813) 699-5559
            </a>
            <Link
              href="/medicare-advantage"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              Medicare Advantage Overview
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Left column */}
          <div className="lg:col-span-2 space-y-12">

            {/* Extra benefits grid */}
            <section>
              <h2 className="text-2xl font-bold text-[#0d2260] mb-2">What Extra Benefits Can Medicare Advantage Include?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Original Medicare (Parts A and B) covers hospital and medical services but excludes most dental, vision, hearing, and wellness benefits. Medicare Advantage plans — offered by private insurers approved by Medicare — are required to cover everything Original Medicare covers, and many go further by adding extra benefits at no additional premium or a low additional cost.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {EXTRA_BENEFITS.map(({ Icon, title, desc, color }) => (
                  <div
                    key={title}
                    className="rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition-shadow"
                    style={{ borderTop: `3px solid ${color}` }}
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                      style={{ background: `${color}18` }}
                    >
                      <Icon size={18} style={{ color }} />
                    </div>
                    <h3 className="font-bold text-[#0d2260] text-sm mb-1">{title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Coverage comparison table */}
            <section>
              <h2 className="text-2xl font-bold text-[#0d2260] mb-2">Extra Benefit Availability by Plan</h2>
              <p className="text-gray-600 mb-5 leading-relaxed">
                Not every Medicare Advantage plan offers every extra benefit. Availability depends on the plan type, the insurer, and the county where you live. The table below shows how commonly each benefit appears across Medicare Advantage plans.
              </p>
              <div className="rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#0d2260] text-white">
                      <th className="text-left px-5 py-3 font-semibold">Benefit</th>
                      <th className="text-left px-5 py-3 font-semibold">Availability</th>
                      <th className="text-left px-5 py-3 font-semibold hidden md:table-cell">Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {BENEFIT_ROWS.map((row, i) => {
                      const cfg = STATUS_CONFIG[row.status];
                      const { Icon } = cfg;
                      return (
                        <tr key={row.benefit} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-5 py-4 font-medium text-[#0d2260]">{row.benefit}</td>
                          <td className="px-5 py-4">
                            <span
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold"
                              style={{
                                color: cfg.color,
                                background: cfg.bg,
                                border: `1px solid ${cfg.border}`,
                              }}
                            >
                              <Icon />
                              {cfg.label}
                            </span>
                          </td>
                          <td className="px-5 py-4 text-gray-600 text-xs leading-relaxed hidden md:table-cell">
                            {row.detail}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>

            {/* OTC deep dive */}
            <section>
              <h2 className="text-2xl font-bold text-[#0d2260] mb-2">Understanding the OTC Allowance</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                The over-the-counter (OTC) allowance is one of the most popular extra benefits in Medicare Advantage. It works like a prepaid debit card or catalog credit that you can use to purchase approved health-related items. Here is how it typically works:
              </p>
              <div className="space-y-3">
                {[
                  { label: "Frequency", val: "Quarterly or monthly credit loaded to a benefit card" },
                  { label: "Typical Amount", val: "$25 to $150+ per quarter depending on the plan" },
                  { label: "Where to Use It", val: "Participating retailers (CVS, Walgreens, Walmart) or by mail order" },
                  { label: "What You Can Buy", val: "Vitamins, pain relievers, cold/flu medicine, bandages, first aid supplies, personal care products, and more" },
                  { label: "Does It Roll Over?", val: "Usually no — unused credits expire at the end of the quarter or benefit period" },
                  { label: "Is It Taxable?", val: "No — OTC allowances are a plan benefit, not taxable income" },
                ].map(({ label, val }) => (
                  <div key={label} className="flex gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
                    <span className="font-bold text-[#1a3fa8] text-sm min-w-[120px]">{label}</span>
                    <span className="text-gray-700 text-sm">{val}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Transportation deep dive */}
            <section>
              <h2 className="text-2xl font-bold text-[#0d2260] mb-2">Non-Emergency Medical Transportation (NEMT)</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Many Medicare Advantage plans include rides to and from covered medical appointments as an extra benefit. This is especially valuable for members who do not drive or have difficulty accessing transportation. Key points:
              </p>
              <ul className="space-y-2 text-gray-700 text-sm">
                {[
                  "Covers rides to doctor visits, dialysis, chemotherapy, lab tests, and other covered medical appointments",
                  "Typically provided through a third-party transportation vendor (Lyft, Uber Health, or dedicated medical transport)",
                  "The number of covered one-way trips per year varies — commonly 24 to 48 trips annually",
                  "Must be scheduled in advance (usually 24-48 hours) through the plan's transportation line",
                  "Does not cover emergency ambulance transport (that is covered separately under Part A/B)",
                  "Some plans extend coverage to non-medical trips such as pharmacy pickups or grocery runs for qualifying members",
                ].map((item) => (
                  <li key={item} className="flex gap-3 items-start">
                    <CheckCircle size={16} className="text-green-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* CTA */}
            <section className="rounded-2xl bg-gradient-to-br from-[#0d2260] to-[#1a3fa8] p-8 text-white">
              <h2 className="text-xl font-bold mb-2">Find Plans With the Best Extra Benefits in Your Area</h2>
              <p className="text-blue-200 text-sm mb-5 leading-relaxed">
                Extra benefits vary significantly by plan and ZIP code. A licensed Medicare specialist can compare every plan available in your area and help you find the one with the benefits that matter most to you — at no cost to you.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="tel:8136995559"
                  className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8973e] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
                >
                  <Phone size={16} />
                  (813) 699-5559
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-5 py-3 rounded-xl transition-colors text-sm"
                >
                  Request a Free Comparison
                  <ArrowRight size={16} />
                </Link>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-[#0d2260] mb-6">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {FAQ_ITEMS.map((item, i) => (
                  <div key={i} className="rounded-2xl border border-gray-200 overflow-hidden">
                    <button
                      className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-[#0d2260] text-sm hover:bg-gray-50 transition-colors"
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      aria-expanded={openFaq === i}
                    >
                      <span>{item.q}</span>
                      <ChevronRight
                        size={18}
                        className={`shrink-0 ml-3 transition-transform ${openFaq === i ? "rotate-90" : ""}`}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right sidebar */}
          <aside className="space-y-6">

            {/* Quick summary */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <h3 className="font-bold text-[#0d2260] text-sm mb-4 uppercase tracking-wider">Quick Summary</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                {[
                  "Original Medicare does not cover dental, vision, or hearing",
                  "Medicare Advantage can add all three plus OTC, transportation, and fitness",
                  "Benefits vary by plan and county",
                  "Most extra benefits cost $0 beyond your plan premium",
                  "Compare plans annually — benefits change each year",
                ].map((item) => (
                  <li key={item} className="flex gap-2 items-start">
                    <CheckCircle size={14} className="text-blue-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Medicare Plan Types */}
            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="font-bold text-[#0d2260] text-sm mb-4 uppercase tracking-wider">Medicare Plan Types</h3>
              <ul className="space-y-2">
                {[
                  { label: "Medicare Advantage (Part C)", href: "/medicare-advantage" },
                  { label: "Medicare Supplement (Medigap)", href: "/medicare-supplement" },
                  { label: "Medicare Part D (Drug Coverage)", href: "/medicare-part-d" },
                  { label: "Original vs. Advantage", href: "/original-vs-advantage" },
                  { label: "Medicare Part A", href: "/medicare-part-a" },
                  { label: "Medicare Part B", href: "/medicare-part-b" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex items-center gap-2 text-sm text-[#1a3fa8] hover:text-[#0d2260] transition-colors py-1"
                    >
                      <ChevronRight size={14} className="shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Other coverage pages */}
            <div className="rounded-2xl border border-gray-200 p-5">
              <h3 className="font-bold text-[#0d2260] text-sm mb-4 uppercase tracking-wider">Coverage Topics</h3>
              <ul className="space-y-2">
                {[
                  { label: "Dental Coverage", href: "/coverage/dental" },
                  { label: "Vision Coverage", href: "/coverage/vision" },
                  { label: "Hearing Aid Coverage", href: "/coverage/hearing-aids" },
                  { label: "Mental Health Coverage", href: "/coverage/mental-health" },
                  { label: "Prescription Drugs", href: "/coverage/prescription-drugs" },
                  { label: "Skilled Nursing", href: "/coverage/skilled-nursing" },
                  { label: "Physical Therapy", href: "/coverage/physical-therapy" },
                  { label: "Cancer Treatment", href: "/coverage/cancer-treatment" },
                  { label: "Medical Equipment", href: "/coverage/medical-equipment" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex items-center gap-2 text-sm text-[#1a3fa8] hover:text-[#0d2260] transition-colors py-1"
                    >
                      <ChevronRight size={14} className="shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact card */}
            <div className="rounded-2xl bg-[#0d2260] p-5 text-white">
              <h3 className="font-bold text-sm mb-2">Free Plan Comparison</h3>
              <p className="text-blue-200 text-xs mb-4 leading-relaxed">
                Talk to a licensed Medicare specialist about plans with the best extra benefits in your ZIP code.
              </p>
              <a
                href="tel:8136995559"
                className="flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8973e] text-white font-bold px-4 py-2.5 rounded-xl transition-colors text-sm w-full justify-center"
              >
                <Phone size={15} />
                (813) 699-5559
              </a>
            </div>
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  );
}
