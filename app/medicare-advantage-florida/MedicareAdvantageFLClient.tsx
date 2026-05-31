"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight, ChevronDown, Phone, CheckCircle, AlertCircle,
  ArrowRight, Info, Shield, Star, XCircle, MapPin, Calendar
} from "lucide-react";

const PLAN_TYPES = [
  {
    type: "HMO",
    name: "Health Maintenance Organization",
    color: "#1a3fa8",
    bg: "#e8edf8",
    border: "#b8c8f0",
    pros: ["Lowest monthly premiums", "Often $0 premium available", "Coordinated care through primary doctor", "Lower out-of-pocket costs within network"],
    cons: ["Must use in-network providers", "Need referrals to see specialists", "No coverage outside network (except emergencies)", "Less flexibility if you travel frequently"],
    bestFor: "People who have established local doctors they trust and want the lowest possible premium.",
  },
  {
    type: "PPO",
    name: "Preferred Provider Organization",
    color: "#0d6e4f",
    bg: "#e6f4ee",
    border: "#a8d8c2",
    pros: ["See any Medicare-approved provider", "No referrals needed for specialists", "Out-of-network coverage available", "Good for frequent travelers"],
    cons: ["Higher premiums than HMO", "Higher out-of-pocket costs for out-of-network care", "More complex cost structure"],
    bestFor: "People who want flexibility to see specialists without referrals or who travel often.",
  },
  {
    type: "SNP",
    name: "Special Needs Plan",
    color: "#7c3aed",
    bg: "#f3eeff",
    border: "#d4b8f8",
    pros: ["Tailored for specific health conditions", "Coordinated care for complex needs", "Often includes extra benefits for condition management", "May include transportation and meal benefits"],
    cons: ["Must meet specific eligibility criteria", "Limited to people with qualifying conditions or circumstances", "Smaller network of specialized providers"],
    bestFor: "People with chronic conditions (diabetes, heart failure, COPD), dual Medicare/Medicaid eligibility, or institutional care needs.",
  },
  {
    type: "PFFS",
    name: "Private Fee-for-Service",
    color: "#b45309",
    bg: "#fef3e2",
    border: "#f8d49a",
    pros: ["See any Medicare-approved provider who accepts plan terms", "No network restrictions", "No referrals required"],
    cons: ["Providers must agree to plan payment terms", "Can be harder to find participating providers", "Less common in Florida than HMO/PPO"],
    bestFor: "People in rural areas or those who want broad provider access without a strict network.",
  },
];

const ENROLLMENT_PERIODS = [
  { name: "Initial Enrollment Period (IEP)", dates: "7-month window around your 65th birthday", desc: "Begins 3 months before your 65th birthday and ends 3 months after. This is your first opportunity to enroll in a Medicare Advantage plan.", color: "#1a3fa8", bg: "#e8edf8", border: "#b8c8f0" },
  { name: "Annual Election Period (AEP)", dates: "October 15 – December 7", desc: "Every year you can join, switch, or drop a Medicare Advantage plan. Coverage changes take effect January 1 of the following year.", color: "#0d6e4f", bg: "#e6f4ee", border: "#a8d8c2" },
  { name: "Medicare Advantage Open Enrollment (MA OEP)", dates: "January 1 – March 31", desc: "If you are already enrolled in a Medicare Advantage plan, you can switch to a different Advantage plan or return to Original Medicare during this period.", color: "#7c3aed", bg: "#f3eeff", border: "#d4b8f8" },
  { name: "Special Enrollment Period (SEP)", dates: "Varies by qualifying event", desc: "Qualifying events include moving to a new area, losing other coverage, qualifying for Extra Help, or entering/leaving a nursing facility.", color: "#b45309", bg: "#fef3e2", border: "#f8d49a" },
];

const EXTRA_BENEFITS = [
  "Dental coverage (cleanings, X-rays, sometimes major dental)",
  "Vision coverage (eye exams, glasses or contacts allowance)",
  "Hearing coverage (hearing exams, hearing aid allowance)",
  "Fitness memberships (SilverSneakers or similar programs)",
  "Transportation to medical appointments",
  "Over-the-counter (OTC) allowance for health products",
  "Meal delivery after hospital stays",
  "Telehealth services",
  "Worldwide emergency coverage",
];

const FAQS = [
  { q: "What is Medicare Advantage (Part C)?", a: "Medicare Advantage is an alternative way to receive your Medicare benefits. Instead of Original Medicare (Parts A and B) paying your medical bills directly, a private insurance company approved by Medicare provides your coverage. Most Medicare Advantage plans also include prescription drug coverage (Part D) and extra benefits like dental, vision, and hearing." },
  { q: "Can I keep my current doctors with Medicare Advantage?", a: "It depends on the plan type. HMO plans require you to use in-network providers. PPO plans allow you to see out-of-network providers at a higher cost. Before enrolling, always verify that your specific doctors and hospitals are in the plan's network. Our agents can check this for you before you commit to a plan." },
  { q: "How does Medicare Advantage compare to Medigap?", a: "Medicare Advantage replaces Original Medicare with a private plan that often has lower premiums but includes network restrictions and variable out-of-pocket costs. Medigap (Medicare Supplement) works alongside Original Medicare to cover your out-of-pocket costs, giving you access to any Medicare provider nationwide. Medigap typically has higher premiums but more predictable costs and more provider flexibility." },
  { q: "Do Medicare Advantage plans cover prescription drugs?", a: "Most Medicare Advantage plans include prescription drug coverage (called MAPD plans). If your plan includes drug coverage, you generally cannot also enroll in a standalone Part D plan. A small number of Advantage plans do not include drug coverage — in that case, you can add a standalone Part D plan." },
  { q: "Can I switch from Medicare Advantage back to Original Medicare?", a: "Yes. During the Annual Election Period (October 15 to December 7) or the Medicare Advantage Open Enrollment Period (January 1 to March 31), you can switch back to Original Medicare. However, if you want to add a Medigap plan after returning to Original Medicare, you may be subject to medical underwriting outside of your initial enrollment window." },
  { q: "Are there Medicare Advantage plans with $0 premiums in Florida?", a: "Yes, many areas of Florida have Medicare Advantage plans with $0 monthly premiums. However, $0 premium does not mean $0 cost — you still pay copays, coinsurance, and your Part B premium. The key is evaluating the total cost of the plan based on your expected healthcare usage, not just the monthly premium." },
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

export default function MedicareAdvantageFLClient() {
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
              <span className="text-blue-200 text-sm">Medicare Advantage Florida</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
              <MapPin size={12} /> Florida Coverage
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl">
              Medicare Advantage Plans in Florida
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Florida has some of the most competitive Medicare Advantage markets in the country. Compare HMO, PPO, Special Needs Plans, and more — with free guidance from licensed local agents.
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

        {/* What is Medicare Advantage */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">What Is Medicare Advantage?</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Medicare Advantage (Part C) is an alternative to Original Medicare offered by private insurance companies approved by Medicare. These plans must cover everything Original Medicare covers, but they often include additional benefits like dental, vision, hearing, and prescription drugs.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Florida is one of the most competitive Medicare Advantage markets in the country, with dozens of plans available in most counties. This competition often results in $0 premium plans with strong extra benefits — but it also means the choices can be overwhelming.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  The right plan depends on your doctors, your medications, your health needs, and how much you are willing to pay in premiums versus out-of-pocket costs. Our agents compare every plan available in your zip code at no cost to you.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  { icon: <CheckCircle size={15} className="text-[#0d6e4f]" />, title: "Often includes dental, vision, and hearing", bg: "#e6f4ee", border: "#a8d8c2" },
                  { icon: <CheckCircle size={15} className="text-[#0d6e4f]" />, title: "Most plans include prescription drug coverage", bg: "#e6f4ee", border: "#a8d8c2" },
                  { icon: <CheckCircle size={15} className="text-[#0d6e4f]" />, title: "Annual out-of-pocket maximum protects you from catastrophic costs", bg: "#e6f4ee", border: "#a8d8c2" },
                  { icon: <CheckCircle size={15} className="text-[#0d6e4f]" />, title: "Many plans available with $0 monthly premium in Florida", bg: "#e6f4ee", border: "#a8d8c2" },
                  { icon: <Info size={15} className="text-[#b45309]" />, title: "Most plans restrict you to a provider network", bg: "#fef3e2", border: "#f8d49a" },
                  { icon: <Info size={15} className="text-[#b45309]" />, title: "Out-of-pocket costs can be unpredictable with heavy usage", bg: "#fef3e2", border: "#f8d49a" },
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

        {/* Plan Types */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Types of Medicare Advantage Plans in Florida</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Florida offers all major Medicare Advantage plan types. Here is what each one means for your coverage and costs.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {PLAN_TYPES.map((plan) => (
                <div key={plan.type} className="rounded-2xl border overflow-hidden" style={{ borderColor: plan.border }}>
                  <div className="px-6 py-4 flex items-center gap-4" style={{ background: plan.bg }}>
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center font-black text-white text-sm shrink-0" style={{ background: plan.color }}>{plan.type}</div>
                    <div>
                      <div className="font-bold text-gray-900">{plan.type} Plan</div>
                      <div className="text-xs text-gray-500">{plan.name}</div>
                    </div>
                  </div>
                  <div className="px-6 py-5 bg-white">
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Advantages</div>
                        <ul className="space-y-1.5">
                          {plan.pros.map((p) => (
                            <li key={p} className="flex items-start gap-1.5 text-xs text-gray-700">
                              <CheckCircle size={11} className="shrink-0 mt-0.5" style={{ color: plan.color }} />{p}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Limitations</div>
                        <ul className="space-y-1.5">
                          {plan.cons.map((c) => (
                            <li key={c} className="flex items-start gap-1.5 text-xs text-gray-500">
                              <XCircle size={11} className="shrink-0 mt-0.5 text-gray-400" />{c}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="rounded-xl p-3 text-xs border" style={{ background: plan.bg, borderColor: plan.border }}>
                      <span className="font-bold" style={{ color: plan.color }}>Best for: </span>
                      <span className="text-gray-700">{plan.bestFor}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Extra Benefits */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Extra Benefits Beyond Original Medicare</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  One of the biggest advantages of Medicare Advantage in Florida is the extra benefits that Original Medicare does not cover. These vary by plan and carrier, but many plans in the Tampa Bay area offer a robust package of supplemental benefits.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  These extra benefits can be worth hundreds or even thousands of dollars per year. However, they should not be the primary reason you choose a plan — always make sure your doctors are in-network and your medications are covered first.
                </p>
                <Link href="/free-consultation" className="inline-flex items-center gap-2 bg-[#1a3fa8] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#152f82] transition-colors text-sm">
                  Check what extra benefits are available in your zip code <ArrowRight size={14} />
                </Link>
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl p-6">
                <div className="font-bold text-gray-900 mb-4">Common Extra Benefits in Florida Plans</div>
                <ul className="space-y-2.5">
                  {EXTRA_BENEFITS.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <Star size={13} className="text-[#f5a800] shrink-0 mt-0.5" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-gray-400 mt-4">Benefits vary by plan and county. Not all plans offer all benefits listed.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Enrollment Periods */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">When Can You Enroll?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Medicare Advantage enrollment is limited to specific windows. Missing your window can limit your options.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {ENROLLMENT_PERIODS.map((ep) => (
                <div key={ep.name} className="rounded-2xl border p-5" style={{ background: ep.bg, borderColor: ep.border }}>
                  <div className="flex items-start gap-3">
                    <Calendar size={16} className="shrink-0 mt-0.5" style={{ color: ep.color }} />
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

        {/* Internal links */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="font-serif text-2xl font-bold text-gray-900">Related Medicare Topics</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { href: "/medicare-supplement", label: "Medicare Supplement (Medigap)", desc: "Compare Medigap vs. Medicare Advantage and find out which is right for you.", color: "#1a3fa8", bg: "#e8edf8", border: "#b8c8f0" },
                { href: "/medicare-part-d", label: "Medicare Part D", desc: "Add prescription drug coverage if your Advantage plan doesn't include it.", color: "#0d6e4f", bg: "#e6f4ee", border: "#a8d8c2" },
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
        <section className="py-14 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Medicare Advantage Questions</h2>
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
              Find the Best Medicare Advantage Plan in Florida
            </h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Our independent agents compare every Medicare Advantage plan available in your zip code — checking your doctors, your medications, and your budget. The comparison is free and takes about 15 minutes.
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
