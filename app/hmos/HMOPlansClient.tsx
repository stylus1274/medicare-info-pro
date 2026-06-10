"use client";

/* ==========================================================================
   HMOPlansClient: /plan-types/hmo
   Medicare Advantage HMO Plans: Complete Guide
   Design: MIP brand: navy/gold, pillar-style two-column editorial layout
   No em dashes anywhere in this file.
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
  Users,
  MapPin,
  DollarSign,
  Shield,
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
        <ChevronRight className={`w-4 h-4 text-gray-400 flex-shrink-0 transition-transform duration-200 ${open ? "rotate-90" : ""}`} />
      </button>
      {open && (
        <div className="px-5 pb-5">
          <p className="text-sm text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: a }} />
        </div>
      )}
    </div>
  );
}

const PROS = [
  { title: "Lower monthly premiums", detail: "HMO plans typically have the lowest premiums of any Medicare Advantage plan type. Many HMO plans in Florida have $0 monthly premiums." },
  { title: "Lower copays for in-network care", detail: "Because the plan contracts directly with a network of providers, it can negotiate lower rates and pass those savings on as lower copays." },
  { title: "Built-in care coordination", detail: "Your primary care physician coordinates all your care, which can reduce duplicate tests, catch drug interactions, and keep your care organized." },
  { title: "Annual out-of-pocket maximum", detail: "Like all Medicare Advantage plans, HMOs cap your annual out-of-pocket costs. Original Medicare has no such cap." },
  { title: "Extra benefits", detail: "Most HMO plans include dental, vision, hearing, and fitness benefits not available with Original Medicare." },
];

const CONS = [
  { title: "Network restrictions", detail: "You must use doctors and hospitals in the plan's network for non-emergency care. Seeing an out-of-network provider typically means paying the full cost yourself." },
  { title: "Referrals required", detail: "Most HMO plans require a referral from your primary care physician before you can see a specialist. This adds a step to getting care." },
  { title: "Limited geographic coverage", detail: "HMO networks are local. If you travel frequently or split time between states, you may have limited coverage outside your plan's service area." },
  { title: "Less provider choice", detail: "Not all doctors accept every HMO plan. If your current doctor is not in the network, you may need to switch providers." },
  { title: "Prior authorization requirements", detail: "Certain procedures, tests, and medications may require prior approval from the plan before they are covered." },
];

const HMO_TYPES = [
  {
    name: "Standard HMO",
    badge: "Most Common",
    badgeColor: "bg-blue-100 text-blue-800",
    desc: "Requires you to choose a primary care physician and get referrals for specialist visits. All care must be within the plan's network except in emergencies.",
  },
  {
    name: "HMO-POS (Point of Service)",
    badge: "More Flexibility",
    badgeColor: "bg-green-100 text-green-800",
    desc: "A hybrid that allows some out-of-network care at a higher cost-sharing level. You still have a primary care physician and network, but you have an escape valve for out-of-network situations.",
  },
  {
    name: "HMO SNP",
    badge: "Special Needs",
    badgeColor: "bg-purple-100 text-purple-800",
    desc: "A Special Needs Plan structured as an HMO, designed for people with specific chronic conditions, dual Medicare-Medicaid eligibility, or institutional care needs. Highly tailored benefits.",
  },
];

const WHO_IS_RIGHT = [
  { icon: <CheckCircle size={16} className="text-green-600" />, text: "You have a primary care doctor already in the plan's network" },
  { icon: <CheckCircle size={16} className="text-green-600" />, text: "You want the lowest possible monthly premium" },
  { icon: <CheckCircle size={16} className="text-green-600" />, text: "You live in one area year-round and do not travel extensively" },
  { icon: <CheckCircle size={16} className="text-green-600" />, text: "You are comfortable with care coordination through a primary care physician" },
  { icon: <CheckCircle size={16} className="text-green-600" />, text: "You want extra benefits like dental, vision, and gym membership" },
  { icon: <XCircle size={16} className="text-red-400" />, text: "You travel frequently or spend significant time in multiple states" },
  { icon: <XCircle size={16} className="text-red-400" />, text: "You have specialists you see regularly who are not in the network" },
  { icon: <XCircle size={16} className="text-red-400" />, text: "You prefer to see any doctor without a referral" },
  { icon: <XCircle size={16} className="text-red-400" />, text: "You have complex medical needs that require frequent specialist access" },
];

const FAQ_ITEMS = [
  {
    q: "Can I see any doctor with an HMO plan?",
    a: "No. With a standard HMO, you must use doctors and hospitals in the plan's network for non-emergency care. Going out of network typically means you pay the full cost. An HMO-POS plan offers some out-of-network coverage at higher cost-sharing.",
  },
  {
    q: "Do I need a referral to see a specialist?",
    a: "Most HMO plans require a referral from your primary care physician before you can see a specialist. This is one of the key differences between HMO and PPO plans. Some HMO-POS plans waive the referral requirement for certain specialists.",
  },
  {
    q: "What happens if I need care while traveling?",
    a: "HMO plans cover emergency and urgent care anywhere in the United States. However, routine and non-urgent care outside your plan's service area is generally not covered. If you travel frequently or split time between states, a <a href='/plan-types/ppo' class='text-blue-700 underline'>PPO plan</a> may be a better fit.",
  },
  {
    q: "Can I switch from an HMO to a PPO?",
    a: "Yes. You can switch Medicare Advantage plan types during the Annual Enrollment Period (October 15 through December 7) or the Medicare Advantage Open Enrollment Period (January 1 through March 31). Changes take effect on January 1 of the following year.",
  },
  {
    q: "Are HMO plans available in my area?",
    a: "HMO plan availability varies by county. Florida generally has strong HMO plan availability, especially in the Tampa Bay area. A licensed Medicare advisor can show you all available plans in your zip code and help you compare networks, premiums, and benefits.",
  },
  {
    q: "What is the difference between an HMO and a Medigap plan?",
    a: "A Medicare Advantage HMO replaces Original Medicare and manages your care through a network. A Medigap plan works alongside Original Medicare to cover cost-sharing gaps like the 20% Part B coinsurance. They are fundamentally different approaches. See our <a href='/do-i-need-a-supplement' class='text-blue-700 underline'>Do I Need a Supplement?</a> guide for a full comparison.",
  },
];

const RELATED_LINKS = [
  { label: "PPO Plans", href: "/plan-types/ppo", desc: "More provider flexibility, higher premiums" },
  { label: "SNP Plans", href: "/plan-types/snp", desc: "Tailored plans for special needs populations" },
  { label: "Medicare Advantage Overview", href: "/medicare-advantage", desc: "The complete guide to all Advantage plan types" },
  { label: "Original vs. Advantage", href: "/original-vs-advantage", desc: "Side-by-side comparison of both approaches" },
  { label: "Do I Need a Supplement?", href: "/do-i-need-a-supplement", desc: "Medigap vs. Medicare Advantage explained" },
];

const TOC = [
  { id: "what-is", label: "What Is a Medicare HMO?" },
  { id: "how-it-works", label: "How HMO Plans Work" },
  { id: "types", label: "Types of HMO Plans" },
  { id: "pros-cons", label: "Pros and Cons" },
  { id: "who-is-right", label: "Is an HMO Right for You?" },
  { id: "florida", label: "HMO Plans in Florida" },
  { id: "faq", label: "Frequently Asked Questions" },
];

export default function HMOPlansClient() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      {/* Hero */}
      <div className="bg-[#0d1f5c] text-white">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12">
          <nav className="flex items-center gap-1.5 text-xs text-white/50 mb-6" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/medicare-advantage" className="hover:text-white/80 transition-colors">Medicare Advantage</Link>
            <ChevronRight size={12} />
            <span className="text-white/70">HMO Plans</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full text-[0.72rem] font-bold uppercase tracking-widest bg-white/10 text-white/70 mb-4">
              Medicare Advantage
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
              Medicare Advantage HMO Plans
            </h1>
            <p className="text-base text-white/75 leading-relaxed mb-6">
              HMO (Health Maintenance Organization) plans are the most common type of Medicare Advantage plan. They offer low or $0 premiums and extra benefits, but require you to use a network of providers and get referrals to see specialists.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-8">
              {[
                { icon: <DollarSign size={16} />, stat: "$0", label: "Typical monthly premium" },
                { icon: <Shield size={16} />, stat: "MOOP", label: "Annual out-of-pocket cap" },
                { icon: <Users size={16} />, stat: "Network", label: "Required for non-emergency care" },
                { icon: <MapPin size={16} />, stat: "Local", label: "Service area based coverage" },
              ].map((item) => (
                <div key={item.label} className="bg-white/10 rounded-xl px-4 py-3 text-center">
                  <div className="flex justify-center mb-1 text-[#c9a84c]">{item.icon}</div>
                  <p className="text-lg font-bold text-white">{item.stat}</p>
                  <p className="text-[0.7rem] text-white/60 leading-tight">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-12 w-full flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">

          <article className="space-y-12 min-w-0">

            {/* What Is */}
            <section id="what-is">
              <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                What Is a Medicare Advantage HMO Plan?
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                A Medicare Advantage HMO plan is a type of <Link href="/medicare-advantage" className="text-blue-700 underline hover:text-blue-900">Medicare Advantage</Link> (Part C) plan that delivers your Medicare benefits through a managed care network. When you enroll in an HMO, you choose a primary care physician (PCP) who becomes the central coordinator of your healthcare. Most specialist visits require a referral from your PCP, and all non-emergency care must be received from providers within the plan's network.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                HMO plans are offered by private insurance companies approved by Medicare. They must cover everything <Link href="/medicare-part-a" className="text-blue-700 underline hover:text-blue-900">Part A</Link> and <Link href="/medicare-part-b" className="text-blue-700 underline hover:text-blue-900">Part B</Link> cover, and most include additional benefits such as dental, vision, hearing, and fitness programs that Original Medicare does not provide.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                HMO plans are the most widely available Medicare Advantage plan type and account for the majority of Medicare Advantage enrollments nationwide. Their combination of low premiums and comprehensive benefits makes them the default choice for many Medicare beneficiaries, particularly in markets like Florida where competition among plans is strong.
              </p>
            </section>

            {/* How It Works */}
            <section id="how-it-works">
              <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                How HMO Plans Work
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { step: "1", title: "Choose a Primary Care Physician", desc: "When you enroll, you select a PCP from the plan's network. This doctor manages your overall care, orders tests, and provides referrals to specialists." },
                  { step: "2", title: "Get Referrals for Specialists", desc: "To see a cardiologist, orthopedist, or other specialist, your PCP writes a referral. This keeps your care coordinated and ensures the specialist is in-network." },
                  { step: "3", title: "Stay In-Network", desc: "All non-emergency care must be from providers in the plan's network. Emergency care is covered anywhere in the US. Out-of-network non-emergency care is generally not covered." },
                ].map((item) => (
                  <div key={item.step} className="rounded-xl border border-gray-100 shadow-sm px-5 py-5">
                    <div className="w-8 h-8 rounded-full bg-[#0d1f5c] text-white flex items-center justify-center text-sm font-bold mb-3">{item.step}</div>
                    <p className="text-sm font-bold text-gray-900 mb-2">{item.title}</p>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 px-5 py-4">
                <Info size={16} className="text-blue-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-blue-900 leading-relaxed">
                  Emergency care is always covered regardless of network. If you have a medical emergency while traveling, go to the nearest emergency room. Your HMO plan is required to cover emergency services anywhere in the United States.
                </p>
              </div>
            </section>

            {/* Types */}
            <section id="types">
              <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                Types of Medicare HMO Plans
              </h2>
              <div className="space-y-4">
                {HMO_TYPES.map((type) => (
                  <div key={type.name} className="rounded-xl border border-gray-100 shadow-sm px-5 py-5">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="text-sm font-bold text-gray-900">{type.name}</p>
                      <span className={`text-[0.65rem] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${type.badgeColor}`}>{type.badge}</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{type.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pros and Cons */}
            <section id="pros-cons">
              <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                HMO Plan Pros and Cons
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm font-bold text-green-700 uppercase tracking-wider mb-3">Advantages</p>
                  <div className="space-y-3">
                    {PROS.map((item) => (
                      <div key={item.title} className="flex items-start gap-3 rounded-xl bg-green-50 border border-green-100 px-4 py-3">
                        <CheckCircle size={15} className="text-green-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-gray-800 mb-0.5">{item.title}</p>
                          <p className="text-xs text-gray-500 leading-relaxed">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-bold text-red-600 uppercase tracking-wider mb-3">Disadvantages</p>
                  <div className="space-y-3">
                    {CONS.map((item) => (
                      <div key={item.title} className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-100 px-4 py-3">
                        <XCircle size={15} className="text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="text-sm font-semibold text-gray-800 mb-0.5">{item.title}</p>
                          <p className="text-xs text-gray-500 leading-relaxed">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Who Is Right */}
            <section id="who-is-right">
              <h2 className="text-xl font-bold text-gray-900 mb-5" style={{ fontFamily: "'Merriweather', serif" }}>
                Is an HMO Plan Right for You?
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                An HMO plan tends to be a strong fit for people who want to minimize monthly costs and are comfortable working within a network. It is less suitable for people who travel frequently or need regular access to out-of-network specialists.
              </p>
              <div className="rounded-xl border border-gray-100 shadow-sm px-5 py-5 space-y-2">
                {WHO_IS_RIGHT.map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-0.5">{item.icon}</span>
                    <p className="text-sm text-gray-700 leading-snug">{item.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4">
                <Info size={16} className="text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-amber-900 leading-relaxed">
                  If you want more provider flexibility, a <Link href="/plan-types/ppo" className="underline font-semibold">Medicare Advantage PPO plan</Link> allows you to see out-of-network providers at a higher cost-sharing level and typically does not require referrals.
                </p>
              </div>
            </section>

            {/* Florida Section */}
            <section id="florida">
              <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                HMO Plans in Florida
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Florida is one of the most competitive Medicare Advantage markets in the country. The Tampa Bay area, including Hillsborough, Pinellas, and Pasco counties, typically has dozens of HMO plan options available each year from carriers including Humana, UnitedHealthcare, Aetna, Cigna, Florida Blue, and others.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed mb-4">
                Many Florida HMO plans offer $0 monthly premiums, $0 copays for primary care visits, and robust extra benefits including dental allowances, over-the-counter product credits, transportation benefits, and SilverSneakers or similar fitness programs.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Network quality varies significantly by plan and county. Before enrolling, it is important to verify that your current doctors, specialists, and preferred hospitals are in the plan's network. An independent Medicare advisor can pull the current plan options in your zip code and check provider networks on your behalf at no cost to you.
              </p>
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

            {/* Inline CTA */}
            <div className="rounded-2xl bg-[#0d1f5c] text-white px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex-1">
                <p className="text-lg font-bold mb-1">Want to Compare HMO Plans in Your Area?</p>
                <p className="text-sm text-white/70">A licensed Medicare specialist can show you every plan available in your zip code and verify your doctors are in-network: at no cost to you.</p>
              </div>
              <div className="flex flex-col gap-2 flex-shrink-0">
                <a href="tel:+18136995559" className="flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b8973d] text-white font-bold text-sm px-5 py-3 rounded-xl transition-colors">
                  <Phone size={15} />
                  813-699-5559
                </a>
                <Link href="/medicare-quiz" className="flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white text-sm px-5 py-3 rounded-xl transition-colors">
                  Take the Medicare Quiz
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-6 self-start">

            <div className="rounded-2xl border border-gray-100 shadow-sm px-5 py-5">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">On This Page</p>
              <nav className="space-y-2">
                {TOC.map((item) => (
                  <a key={item.id} href={`#${item.id}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-[#0d1f5c] transition-colors group">
                    <ChevronRight size={12} className="text-[#c9a84c] group-hover:translate-x-0.5 transition-transform" />
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

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
                <a href="tel:+18136995559" className="flex items-center justify-center gap-2 w-full bg-[#0d1f5c] hover:bg-[#162a7a] text-white font-bold text-sm py-3 rounded-xl transition-colors">
                  <Phone size={14} />
                  813-699-5559
                </a>
                <Link href="/medicare-quiz" className="flex items-center justify-center gap-2 w-full border border-[#0d1f5c]/20 hover:bg-[#0d1f5c]/5 text-[#0d1f5c] font-semibold text-sm py-3 rounded-xl transition-colors">
                  Take the Medicare Quiz
                  <ArrowRight size={13} />
                </Link>
              </div>
            </div>

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

      {/* Bottom CTA */}
      <div className="bg-[#0d1f5c] text-white py-14">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
            Ready to Find the Right HMO Plan?
          </h2>
          <p className="text-white/70 text-sm max-w-xl mx-auto mb-8">
            An independent Medicare advisor can compare every HMO plan available in your zip code and verify your doctors are in-network before you enroll.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="tel:+18136995559" className="inline-flex items-center justify-center gap-2 bg-[#c9a84c] hover:bg-[#b8973d] text-white font-bold px-7 py-3.5 rounded-xl transition-colors">
              <Phone size={16} />
              Call 813-699-5559
            </a>
            <Link href="/medicare-quiz" className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl transition-colors">
              Take the Medicare Quiz
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
