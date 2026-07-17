"use client";
import Link from "next/link";
import { ChevronRight, ArrowRight, Phone, CheckCircle, XCircle, ChevronDown } from "lucide-react";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const PLAN_TYPES = [
  {
    type: "HMO",
    fullName: "Health Maintenance Organization",
    network: "In-network only (except emergencies)",
    referrals: "Required for specialists",
    premium: "Usually $0 to low",
    bestFor: "People who want low costs and have local doctors in-network",
  },
  {
    type: "PPO",
    fullName: "Preferred Provider Organization",
    network: "In-network and out-of-network",
    referrals: "Not required",
    premium: "Moderate to higher",
    bestFor: "People who travel or want flexibility to see any doctor",
  },
  {
    type: "SNP",
    fullName: "Special Needs Plan",
    network: "Specialized network",
    referrals: "Usually required",
    premium: "Varies",
    bestFor: "People with chronic conditions, dual eligibility (Medicaid), or institutional care needs",
  },
  {
    type: "PFFS",
    fullName: "Private Fee-for-Service",
    network: "Any provider who accepts plan terms",
    referrals: "Not required",
    premium: "Varies",
    bestFor: "People in rural areas with limited HMO/PPO options",
  },
  {
    type: "MSA",
    fullName: "Medical Savings Account",
    network: "Any Medicare-approved provider",
    referrals: "Not required",
    premium: "$0 (high deductible)",
    bestFor: "Healthy people who want to save tax-free money for healthcare",
  },
];

const WHAT_COVERED = [
  { label: "All Original Medicare services (Parts A and B)", detail: "Hospital stays, doctor visits, outpatient care, preventive services, and more." },
  { label: "Prescription drug coverage (Part D)", detail: "Most Medicare Advantage plans include drug coverage. Standalone Part D plans are not needed if your MA plan includes drugs." },
  { label: "Dental care", detail: "Many plans include routine dental such as cleanings, X-rays, and fillings. Coverage varies by plan." },
  { label: "Vision care", detail: "Routine eye exams and an allowance toward eyeglasses or contact lenses are common extras." },
  { label: "Hearing aids", detail: "Many plans offer an annual allowance toward hearing aids, which Original Medicare does not cover." },
  { label: "Fitness benefits", detail: "Programs like SilverSneakers or gym memberships are included in many plans at no extra cost." },
  { label: "Transportation", detail: "Some plans cover rides to medical appointments." },
  { label: "Over-the-counter allowance", detail: "A quarterly or annual allowance for approved health items at participating stores." },
];

const WHAT_NOT_COVERED = [
  "Long-term custodial care (help with bathing, dressing, or daily activities)",
  "Care from out-of-network providers (for HMO plans, except emergencies)",
  "Services not deemed medically necessary by the plan",
  "Experimental treatments",
  "Most dental, vision, and hearing care under Original Medicare (covered only if the MA plan includes extras)",
];

const COSTS_2026 = [
  { item: "Monthly Premium", value: "$0 to $100+ per month", note: "Many plans have $0 premium; you still pay your Part B premium" },
  { item: "Part B Premium", value: "$185/month (standard)", note: "Required even with Medicare Advantage" },
  { item: "Annual Deductible", value: "$0 to $600+", note: "Varies by plan; many plans have $0 deductible" },
  { item: "Primary Care Copay", value: "$0 to $30", note: "Varies by plan" },
  { item: "Specialist Copay", value: "$20 to $60", note: "Varies by plan" },
  { item: "Out-of-Pocket Maximum", value: "Up to $9,350 (in-network)", note: "Once reached, plan pays 100% for covered services" },
];

const FAQ_ITEMS = [
  {
    q: "Is Medicare Part C the same as Medicare Advantage?",
    a: "Yes. Medicare Part C and Medicare Advantage are the same thing. The official name in the Medicare statute is Part C, but the program is marketed and commonly known as Medicare Advantage. All Medicare Advantage plans are Part C plans.",
  },
  {
    q: "Do I still pay Part B premiums with Medicare Advantage?",
    a: "Yes. You must remain enrolled in Medicare Parts A and B and continue paying your Part B premium (standard $185/month in 2026) even when enrolled in a Medicare Advantage plan. Some plans offer a Part B premium reduction benefit that offsets part of this cost.",
  },
  {
    q: "Can I use any doctor with Medicare Advantage?",
    a: "It depends on the plan type. HMO plans require you to use in-network providers (except in emergencies). PPO plans allow you to see out-of-network providers at a higher cost. Always verify that your doctors are in-network before enrolling.",
  },
  {
    q: "Does Medicare Advantage cover prescriptions?",
    a: "Most Medicare Advantage plans include prescription drug coverage (called MA-PD plans). If your plan does not include drug coverage, you can enroll in a standalone Part D plan. You cannot have both an MA-PD plan and a standalone Part D plan at the same time.",
  },
  {
    q: "When can I enroll in Medicare Advantage?",
    a: "You can enroll during your Initial Enrollment Period (the 7-month window around your 65th birthday), the Annual Enrollment Period (October 15 to December 7 each year), or a Special Enrollment Period if you qualify. The Medicare Advantage Open Enrollment Period (January 1 to March 31) allows one plan switch if you are already enrolled in a Medicare Advantage plan.",
  },
  {
    q: "Can I switch back to Original Medicare from Medicare Advantage?",
    a: "Yes. During the Annual Enrollment Period (October 15 to December 7) or the Medicare Advantage Open Enrollment Period (January 1 to March 31), you can switch from a Medicare Advantage plan back to Original Medicare. Be aware that if you want to add a Medigap supplement after switching, you may face medical underwriting in most states.",
  },
  {
    q: "What is a Special Needs Plan (SNP)?",
    a: "A Special Needs Plan is a type of Medicare Advantage plan designed for people with specific health conditions, people who qualify for both Medicare and Medicaid (dual eligible), or people living in institutions. SNPs tailor their benefits, provider networks, and drug formularies to the needs of their target population.",
  },
];

const RELATED_LINKS = [
  { label: "Medicare Part A: Hospital Insurance", href: "/medicare-part-a", desc: "Inpatient hospital, skilled nursing, and hospice coverage" },
  { label: "Medicare Part B: Medical Insurance", href: "/medicare-part-b", desc: "Doctor visits, outpatient care, and preventive services" },
  { label: "Medicare Part D: Drug Coverage", href: "/medicare-part-d", desc: "Prescription drug plans and the $2,000 out-of-pocket cap" },
  { label: "Original Medicare vs. Medicare Advantage", href: "/original-vs-advantage", desc: "Side-by-side comparison to help you choose" },
  { label: "Medicare Advantage Plans in Florida", href: "/medicare-advantage-florida", desc: "Florida-specific plan options and guidance" },
];

const TOC = [
  { id: "what-is-part-c", label: "What Is Medicare Part C?" },
  { id: "plan-types", label: "Plan Types" },
  { id: "what-covered", label: "What Is Covered" },
  { id: "costs", label: "2026 Costs" },
  { id: "vs-original", label: "Part C vs. Original Medicare" },
  { id: "enrollment", label: "Enrollment" },
  { id: "faq", label: "Frequently Asked Questions" },
];

export default function MedicarePartCClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Header />

      {/* Hero */}
      <div className="bg-[#0d1f5c] text-white pt-16 pb-14">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8">
          <div className="flex items-center gap-2 text-xs text-white/50 mb-4">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-white/80">Medicare Part C</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-[#c9a84c] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Part C</span>
            <span className="text-white/50 text-xs">Also known as Medicare Advantage</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
            Medicare Part C<br />
            <span className="text-[#c9a84c]">(Medicare Advantage)</span>
          </h1>
          <p className="text-white/70 text-base sm:text-lg max-w-2xl leading-relaxed">
            Medicare Part C is the official name for Medicare Advantage. It bundles your hospital, medical, and often drug coverage into a single private plan with an annual out-of-pocket maximum that Original Medicare does not provide.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="tel:+18137897700"
              className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8973d] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              <Phone size={15} />
              Call 813-789-7700
            </a>
            <Link
              href="/medicare-advantage"
              className="inline-flex items-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              View Medicare Advantage Plans
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

          {/* Article Body */}
          <article className="space-y-14">

            {/* What Is Part C */}
            <section id="what-is-part-c">
              <h2 className="text-2xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                What Is Medicare Part C?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Medicare Part C is the section of the Medicare program that allows private insurance companies, approved by the federal government, to deliver your Medicare benefits. When you enroll in a Part C plan, the private insurer takes over the coverage that would otherwise come directly from the federal government through Original Medicare (Parts A and B).
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The program is universally marketed as <Link href="/medicare-advantage" className="text-[#0d1f5c] font-semibold hover:underline">Medicare Advantage</Link>. The two terms are interchangeable. Every Medicare Advantage plan is a Part C plan, and every Part C plan is a Medicare Advantage plan.
              </p>
              <p className="text-gray-600 leading-relaxed">
                To enroll in Part C, you must already be enrolled in <Link href="/medicare-part-a" className="text-[#0d1f5c] font-semibold hover:underline">Medicare Part A</Link> and <Link href="/medicare-part-b" className="text-[#0d1f5c] font-semibold hover:underline">Medicare Part B</Link>. You continue paying your Part B premium, and the private plan may charge an additional monthly premium on top of that.
              </p>

              {/* Key Facts Box */}
              <div className="mt-6 bg-[#f0f4ff] border border-[#0d1f5c]/10 rounded-2xl p-6">
                <p className="text-xs font-bold uppercase tracking-wider text-[#0d1f5c]/50 mb-4">Key Facts About Part C</p>
                <ul className="space-y-3">
                  {[
                    "Part C is the official name; Medicare Advantage is the brand name",
                    "Offered by private insurers approved and regulated by CMS",
                    "Must include all Part A and Part B benefits",
                    "Most plans also include Part D prescription drug coverage",
                    "All plans have an annual out-of-pocket maximum (Original Medicare has none)",
                    "Over 33 million Americans are enrolled in Medicare Advantage as of 2026",
                  ].map((fact, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <CheckCircle size={16} className="text-[#c9a84c] flex-shrink-0 mt-0.5" />
                      {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Plan Types */}
            <section id="plan-types">
              <h2 className="text-2xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                Medicare Part C Plan Types
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Not all Part C plans work the same way. The five main plan types differ in how they structure provider networks, referral requirements, and cost-sharing. Understanding these differences is the most important step in choosing the right plan.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#0d1f5c] text-white">
                      <th className="text-left px-4 py-3 font-semibold">Plan Type</th>
                      <th className="text-left px-4 py-3 font-semibold">Network</th>
                      <th className="text-left px-4 py-3 font-semibold">Referrals</th>
                      <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Typical Premium</th>
                      <th className="text-left px-4 py-3 font-semibold hidden lg:table-cell">Best For</th>
                    </tr>
                  </thead>
                  <tbody>
                    {PLAN_TYPES.map((plan, i) => (
                      <tr key={plan.type} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-bold text-[#0d1f5c]">
                          {plan.type}
                          <span className="block text-xs font-normal text-gray-400">{plan.fullName}</span>
                        </td>
                        <td className="px-4 py-3 text-gray-600">{plan.network}</td>
                        <td className="px-4 py-3 text-gray-600">{plan.referrals}</td>
                        <td className="px-4 py-3 text-gray-600 hidden md:table-cell">{plan.premium}</td>
                        <td className="px-4 py-3 text-gray-600 hidden lg:table-cell">{plan.bestFor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-2 px-1">HMO and PPO plans are the most common types available in Hillsborough County and across Florida.</p>
            </section>

            {/* What Is Covered */}
            <section id="what-covered">
              <h2 className="text-2xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                What Does Medicare Part C Cover?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                By law, every Medicare Advantage plan must cover everything that Original Medicare covers. Most plans go further by bundling extra benefits that Original Medicare does not provide.
              </p>
              <div className="space-y-3 mb-8">
                {WHAT_COVERED.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 rounded-xl border border-gray-100 bg-white shadow-sm">
                    <CheckCircle size={17} className="text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{item.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-3">What Part C Does Not Cover</h3>
              <div className="space-y-2">
                {WHAT_NOT_COVERED.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <XCircle size={15} className="text-red-400 flex-shrink-0 mt-0.5" />
                    {item}
                  </div>
                ))}
              </div>
            </section>

            {/* Costs */}
            <section id="costs">
              <h2 className="text-2xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                Medicare Part C Costs in 2026
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Part C costs vary significantly by plan, carrier, and location. The table below shows typical ranges for Hillsborough County, Florida. Always compare specific plans using the Medicare Plan Finder at medicare.gov before enrolling.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm mb-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#0d1f5c] text-white">
                      <th className="text-left px-4 py-3 font-semibold">Cost Item</th>
                      <th className="text-left px-4 py-3 font-semibold">Typical Range</th>
                      <th className="text-left px-4 py-3 font-semibold hidden md:table-cell">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COSTS_2026.map((row, i) => (
                      <tr key={row.item} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-semibold text-gray-800">{row.item}</td>
                        <td className="px-4 py-3 text-[#0d1f5c] font-bold">{row.value}</td>
                        <td className="px-4 py-3 text-gray-500 hidden md:table-cell">{row.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pro Tip */}
              <div className="bg-[#c9a84c]/10 border-l-4 border-[#c9a84c] rounded-r-2xl p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-[#c9a84c] mb-2">Pro Tip</p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  A $0 premium plan is not always the best value. Compare the annual out-of-pocket maximum, drug formulary, and provider network carefully. A plan with a small monthly premium but a lower out-of-pocket maximum may cost you less overall if you use medical services regularly. A local independent agent can run a side-by-side cost comparison for your specific situation at no charge.
                </p>
              </div>
            </section>

            {/* Part C vs Original Medicare */}
            <section id="vs-original">
              <h2 className="text-2xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                Medicare Part C vs. Original Medicare
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                The most important decision for most new Medicare enrollees is whether to stay with <Link href="/original-vs-advantage" className="text-[#0d1f5c] font-semibold hover:underline">Original Medicare or switch to Medicare Advantage (Part C)</Link>. Here is a direct comparison of the key differences:
              </p>
              <div className="overflow-x-auto rounded-2xl border border-gray-100 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#0d1f5c] text-white">
                      <th className="text-left px-4 py-3 font-semibold">Feature</th>
                      <th className="text-left px-4 py-3 font-semibold">Original Medicare</th>
                      <th className="text-left px-4 py-3 font-semibold">Medicare Advantage (Part C)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Administered by", "Federal government (CMS)", "Private insurer approved by CMS"],
                      ["Out-of-pocket maximum", "None", "Yes (up to $9,350 in-network in 2026)"],
                      ["Drug coverage", "Separate Part D plan required", "Usually included in the plan"],
                      ["Dental, vision, hearing", "Not covered", "Often included as extras"],
                      ["Provider network", "Any Medicare-accepting provider", "Network restrictions (HMO/PPO)"],
                      ["Referrals", "Not required", "Required for HMO plans"],
                      ["Travel coverage", "Nationwide", "Usually limited to service area"],
                      ["Medigap supplement", "Can add Medigap to fill gaps", "Cannot use Medigap with MA plan"],
                    ].map(([feature, original, advantage], i) => (
                      <tr key={feature} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        <td className="px-4 py-3 font-semibold text-gray-800">{feature}</td>
                        <td className="px-4 py-3 text-gray-600">{original}</td>
                        <td className="px-4 py-3 text-gray-600">{advantage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* Enrollment */}
            <section id="enrollment">
              <h2 className="text-2xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                When Can You Enroll in Medicare Part C?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                You can enroll in a Medicare Advantage plan during specific enrollment windows. Missing these windows can mean waiting up to a year before you can make changes.
              </p>
              <div className="space-y-4">
                {[
                  {
                    period: "Initial Enrollment Period (IEP)",
                    dates: "7-month window around your 65th birthday",
                    desc: "The first opportunity to enroll in Medicare and choose a Part C plan. Starts 3 months before your birthday month and ends 3 months after.",
                  },
                  {
                    period: "Annual Enrollment Period (AEP)",
                    dates: "October 15 to December 7 each year",
                    desc: "The main window to switch between Medicare Advantage plans, switch from Original Medicare to Medicare Advantage, or return to Original Medicare. Changes take effect January 1.",
                  },
                  {
                    period: "Medicare Advantage Open Enrollment Period (OEP)",
                    dates: "January 1 to March 31 each year",
                    desc: "If you are already enrolled in a Medicare Advantage plan, you can make one switch to a different MA plan or return to Original Medicare. You cannot switch from Original Medicare to MA during OEP.",
                  },
                  {
                    period: "Special Enrollment Period (SEP)",
                    dates: "Varies by qualifying event",
                    desc: "Triggered by events such as losing employer coverage, moving out of your plan's service area, or qualifying for Extra Help. Learn more on our Special Enrollment Period guide.",
                  },
                ].map((item) => (
                  <div key={item.period} className="border border-gray-100 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <p className="font-bold text-gray-900 text-sm">{item.period}</p>
                      <span className="text-xs bg-[#0d1f5c]/10 text-[#0d1f5c] font-semibold px-2 py-0.5 rounded-full whitespace-nowrap">{item.dates}</span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 bg-[#0d1f5c] rounded-2xl p-6 text-white">
                <p className="font-bold text-lg mb-2" style={{ fontFamily: "'Merriweather', serif" }}>Not Sure Which Plan Is Right for You?</p>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">
                  A licensed Medicare specialist in Brandon and the Tampa Bay area can compare every Medicare Advantage plan available in your zip code at no cost to you. There is no obligation and no pressure.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+18137897700"
                    className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8973d] text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm"
                  >
                    <Phone size={15} />
                    Call 813-789-7700
                  </a>
                  <Link
                    href="/get-started"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
                  >
                    Get a Free Plan Comparison
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </section>

            {/* FAQ */}
            <section id="faq">
              <h2 className="text-2xl font-bold text-gray-900 mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
                Frequently Asked Questions
              </h2>
              <div className="space-y-3">
                {FAQ_ITEMS.map((item, i) => (
                  <div key={i} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 text-sm pr-4">{item.q}</span>
                      <ChevronDown
                        size={16}
                        className={`text-[#c9a84c] flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                      />
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-5">
                        <p className="text-sm text-gray-600 leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-6 self-start">
            {/* Table of Contents */}
            <div className="rounded-2xl border border-gray-100 shadow-sm px-5 py-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">On This Page</p>
              <nav className="space-y-2">
                {TOC.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0d1f5c] transition-colors group"
                  >
                    <ChevronRight size={12} className="text-[#c9a84c] group-hover:translate-x-0.5 transition-transform" />
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Medicare Parts Navigation */}
            <div className="rounded-2xl border border-gray-100 shadow-sm px-5 py-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Medicare Parts</p>
              <div className="space-y-2">
                {[
                  { label: "Part A", desc: "Hospital Insurance", href: "/medicare-part-a" },
                  { label: "Part B", desc: "Medical Insurance", href: "/medicare-part-b" },
                  { label: "Part C", desc: "Medicare Advantage", href: "/medicare-part-c", active: true },
                  { label: "Part D", desc: "Drug Coverage", href: "/medicare-part-d" },
                ].map((part) => (
                  <Link
                    key={part.label}
                    href={part.href}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${part.active ? "bg-[#0d1f5c] text-white" : "hover:bg-gray-50 text-gray-700"}`}
                  >
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${part.active ? "bg-white/20 text-white" : "bg-[#0d1f5c]/10 text-[#0d1f5c]"}`}>{part.label}</span>
                    <span className="text-sm">{part.desc}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Agent CTA */}
            <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-[#0d1f5c] px-5 py-4">
                <p className="text-white font-bold text-sm">Speak With a Medicare Specialist</p>
                <p className="text-white/60 text-xs mt-0.5">Free consultation, no obligation</p>
              </div>
              <div className="px-5 py-5 space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png"
                    alt="Greg Wohl, Licensed Medicare Advisor"
                    className="w-10 h-10 rounded-full object-cover object-top"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900">Greg Wohl</p>
                    <p className="text-xs text-gray-500">Licensed Medicare Advisor</p>
                  </div>
                </div>
                <a
                  href="tel:+18137897700"
                  className="flex items-center justify-center gap-2 w-full bg-[#0d1f5c] hover:bg-[#162a7a] text-white font-bold text-sm py-3 rounded-xl transition-colors"
                >
                  <Phone size={14} />
                  813-789-7700
                </a>
                <Link
                  href="/medicare-quiz"
                  className="flex items-center justify-center gap-2 w-full border border-[#0d1f5c]/20 hover:bg-[#0d1f5c]/5 text-[#0d1f5c] font-semibold text-sm py-3 rounded-xl transition-colors"
                >
                  Take the Medicare Quiz
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

            {/* Related Pages */}
            <div className="rounded-2xl border border-gray-100 shadow-sm px-5 py-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Related Pages</p>
              <div className="space-y-3">
                {RELATED_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} className="flex items-start gap-2 group">
                    <ArrowRight size={13} className="text-[#c9a84c] flex-shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                    <div>
                      <p className="text-sm font-semibold text-gray-800 group-hover:text-[#0d1f5c] transition-colors">{link.label}</p>
                      <p className="text-xs text-gray-400 leading-snug">{link.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Bottom CTA Band */}
      <div className="bg-[#0d1f5c] text-white py-14">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
            Ready to Compare Medicare Advantage Plans?
          </h2>
          <p className="text-white/70 text-sm max-w-xl mx-auto mb-8">
            A local Medicare specialist serving Brandon, Riverview, and the greater Tampa Bay area can compare every Part C plan available in your zip code. The consultation is free and there is no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+18137897700"
              className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8973d] text-white font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              <Phone size={16} />
              Call 813-789-7700
            </a>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors"
            >
              Get a Free Plan Comparison
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
