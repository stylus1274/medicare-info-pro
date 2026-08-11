"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, CheckCircle, ChevronDown, MapPin, Phone, Shield } from "lucide-react";

const BENEFITS = [
  "Prescription drug coverage included on many plans",
  "Dental, vision, and hearing benefits on select plans",
  "Fitness programs and wellness benefits",
  "Transportation benefits on select plans",
  "Over-the-counter allowances for eligible health items",
  "Telehealth and nurse support options",
  "Post-hospital meal benefits on select plans",
  "Plan-specific allowances that should be reviewed each year",
];

const CARRIERS = [
  { name: "Humana", types: "HMO, PPO" },
  { name: "UnitedHealthcare", types: "HMO, PPO" },
  { name: "Aetna", types: "HMO, PPO" },
  { name: "Florida Blue", types: "HMO, PPO" },
  { name: "Cigna", types: "HMO, PPO" },
  { name: "Wellcare", types: "HMO" },
  { name: "Devoted Health", types: "HMO" },
  { name: "Simply Healthcare", types: "HMO" },
  { name: "Molina Healthcare", types: "HMO" },
  { name: "Alignment Health", types: "HMO" },
];

const FAQS = [
  {
    q: "What Medicare Advantage plans are available in Kissimmee, FL?",
    a: "Kissimmee and Osceola County residents can compare Medicare Advantage plans offered by multiple carriers. Specific plan availability, benefits, provider networks, and premiums vary by ZIP code and plan year. We compare the plans available at your address rather than relying on a generic list.",
  },
  {
    q: "Will my doctors at HCA Florida Osceola Hospital or AdventHealth Kissimmee accept my Medicare Advantage plan?",
    a: "Network participation varies by carrier and plan. We verify your specific doctors, specialists, and facilities with the carrier before you enroll. Never assume a provider is in-network based on a prior year or another person's plan.",
  },
  {
    q: "Is a $0 premium Medicare Advantage plan really free?",
    a: "A $0 premium means you pay no additional monthly plan premium beyond your Medicare Part B premium. You may still have copays, coinsurance, deductibles, and an annual out-of-pocket maximum. Comparing likely medical and drug costs is more useful than comparing premiums alone.",
  },
  {
    q: "What is the difference between HMO and PPO Medicare Advantage plans in Kissimmee?",
    a: "HMO plans generally require you to use in-network providers for covered non-emergency care and may require referrals for specialists. PPO plans can offer more flexibility to use out-of-network providers at a higher cost share. Both options should be evaluated against your provider preferences and budget.",
  },
  {
    q: "When can I enroll in a Medicare Advantage plan in Kissimmee?",
    a: "The main enrollment opportunities are the Initial Enrollment Period around your 65th birthday, the Annual Enrollment Period from October 15 through December 7, and the Medicare Advantage Open Enrollment Period from January 1 through March 31. A qualifying move or other life event can create a Special Enrollment Period.",
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
        <div className="px-6 pb-5 pt-3 bg-white border-t border-gray-100">
          <p className="text-gray-700 leading-relaxed text-[0.95rem]">{a}</p>
        </div>
      )}
    </div>
  );
}

export default function MedicareAdvantagePlansKissimmeeClient() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <section className="bg-[#0d2260] pt-16 pb-20 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-5"
            style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}
          />
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
              <MapPin size={12} /> Kissimmee, FL | Osceola County
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 leading-tight max-w-3xl">
              Medicare Advantage Plans in Kissimmee, Florida
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-4">
              Compare Medicare Advantage plans available in Kissimmee and throughout Osceola County. Independent agents help you check your doctors, prescriptions, benefits, and expected costs before you enroll.
            </p>
            <p className="text-blue-200 text-base leading-relaxed max-w-2xl mb-8">
              Medicare Advantage plan options can differ across Kissimmee ZIP codes, and benefits can change from one plan year to the next. Our independent agents are not tied to one carrier, so we can compare the options available for your situation and explain the practical trade-offs. There is no cost to you and no obligation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:8136995559" className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09600] transition-colors">
                <Phone size={16} /> Call 813-699-5559
              </a>
              <Link href="/get-started/" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
                Compare Plans Free <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">
              <div className="lg:col-span-2 space-y-10">
                <section>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">What Is Medicare Advantage?</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Medicare Advantage, also called Part C, is an alternative way to receive Medicare Parts A and B through a Medicare-approved private insurance plan. Many plans include Part D prescription coverage and may offer additional benefits that Original Medicare does not cover.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The trade-off is that most Medicare Advantage plans use an HMO or PPO provider network, with plan rules that can affect where you receive non-emergency care and what you pay. The right fit depends on your doctors, prescriptions, preferred hospitals, and comfort with plan rules.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Compare both coverage paths in our{" "}
                    <Link href="/comparing-medicare-plans-kissimmee/" className="text-[#1a3fa8] underline underline-offset-2 hover:text-[#0d2260]">
                      Kissimmee Medicare plan comparison guide
                    </Link>{" "}
                    and review the provider-flexibility trade-offs in our{" "}
                    <Link href="/medicare-supplement-insurance-plans-kissimmee/" className="text-[#1a3fa8] underline underline-offset-2 hover:text-[#0d2260]">
                      Medicare Supplement plans in Kissimmee guide
                    </Link>
                    . If you are moving to Kissimmee, our{" "}
                    <Link href="/what-is-the-special-enrollment-period/" className="text-[#1a3fa8] underline underline-offset-2 hover:text-[#0d2260]">
                      Special Enrollment Period guide
                    </Link>{" "}
                    explains when you may be able to change coverage outside the usual enrollment window.
                  </p>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Common Benefits Available in Kissimmee Medicare Advantage Plans</h2>
                  <p className="text-gray-700 leading-relaxed mb-5">
                    Benefit availability varies by carrier and plan. The following benefits are commonly offered on Medicare Advantage plans in Osceola County, although no single plan necessarily includes all of them.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {BENEFITS.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3 bg-[#e8edf8] rounded-xl p-4 border border-[#b8c8f0]">
                        <CheckCircle size={16} className="text-[#1a3fa8] shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-800 leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Medicare Advantage Carriers in Osceola County</h2>
                  <p className="text-gray-700 leading-relaxed mb-5">
                    Kissimmee residents can compare plans from multiple major carriers. Carrier availability, plan types, provider networks, and benefits should be confirmed for your ZIP code and the current plan year before making a decision.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {CARRIERS.map((carrier) => (
                      <div key={carrier.name} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                        <span className="font-semibold text-gray-900 text-sm">{carrier.name}</span>
                        <span className="text-xs text-gray-500 bg-white border border-gray-200 rounded-full px-2 py-0.5">{carrier.types}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-[#f8f9ff] rounded-2xl p-7 border border-[#dde3f5]">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Local Coverage in Kissimmee and Osceola County</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Provider-network verification is one of the most important steps when comparing Medicare Advantage plans in Kissimmee. Before enrollment, we check your specific doctors, specialists, facilities, and prescriptions against the plan information for the applicable year.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="font-semibold text-gray-900 text-sm mb-2">Major Healthcare Facilities</div>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-center gap-2"><Shield size={12} className="text-[#1a3fa8]" /> HCA Florida Osceola Hospital</li>
                        <li className="flex items-center gap-2"><Shield size={12} className="text-[#1a3fa8]" /> AdventHealth Kissimmee</li>
                        <li className="flex items-center gap-2"><Shield size={12} className="text-[#1a3fa8]" /> Osceola Community Health Services</li>
                        <li className="flex items-center gap-2"><Shield size={12} className="text-[#1a3fa8]" /> Orlando Health St. Cloud Hospital</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm mb-2">Communities Served</div>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-center gap-2"><MapPin size={12} className="text-[#1a3fa8]" /> Kissimmee</li>
                        <li className="flex items-center gap-2"><MapPin size={12} className="text-[#1a3fa8]" /> Poinciana</li>
                        <li className="flex items-center gap-2"><MapPin size={12} className="text-[#1a3fa8]" /> St. Cloud</li>
                        <li className="flex items-center gap-2"><MapPin size={12} className="text-[#1a3fa8]" /> Celebration</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["34741", "34742", "34743", "34744", "34746", "34747"].map((zip) => (
                      <span key={zip} className="text-xs font-mono bg-white border border-[#b8c8f0] text-[#1a3fa8] rounded-full px-3 py-1">{zip}</span>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
                  <div className="space-y-3">
                    {FAQS.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
                  </div>
                </section>
              </div>

              <aside className="lg:col-span-1">
                <div className="bg-[#1a3fa8] rounded-2xl p-6 text-white sticky top-6">
                  <div className="flex justify-center mb-4">
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/LCWjVjohdZHMUbko.jpeg"
                      alt="Paul Eckstein, Licensed Independent Agent"
                      className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0"
                      style={{ border: "3px solid #f5a800" }}
                    />
                  </div>
                  <div className="font-bold text-lg mb-0.5 text-center">Paul Eckstein</div>
                  <div className="text-blue-300 text-sm mb-4 text-center">Licensed Independent Agent, Brandon FL</div>
                  <p className="text-blue-100 text-sm leading-relaxed mb-5">Serving Kissimmee and Osceola County with free plan comparisons and no pressure.</p>
                  <Link href="/free-consultation/" className="block w-full text-center bg-[#f5a800] text-white font-bold py-3 rounded-xl hover:bg-[#e09600] transition-colors mb-3">
                    Compare Plans Free
                  </Link>
                  <a href="tel:8136995559" className="block w-full text-center bg-white/10 text-white font-semibold py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-sm">
                    <Phone size={13} className="inline mr-1.5" />813-699-5559
                  </a>
                  <div className="mt-6 pt-5 border-t border-white/20 space-y-2">
                    <div className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">More Kissimmee Pages</div>
                    <Link href="/medicare-agent-kissimmee/" className="block text-sm text-blue-200 hover:text-white transition-colors">Medicare Agent in Kissimmee</Link>
                    <Link href="/medicare-supplement-insurance-plans-kissimmee/" className="block text-sm text-blue-200 hover:text-white transition-colors">Medicare Supplement Plans Kissimmee</Link>
                    <Link href="/comparing-medicare-plans-kissimmee/" className="block text-sm text-blue-200 hover:text-white transition-colors">Comparing Medicare Plans Kissimmee</Link>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="py-14 bg-[#0d2260]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">Ready to Compare Medicare Advantage Plans in Kissimmee?</h2>
            <p className="text-blue-200 text-lg mb-8">Our independent agents compare your doctors, prescriptions, and budget against the plans available in Osceola County. Free, no obligation.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/get-started/" className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#e09600] transition-colors text-lg">
                Compare Plans Free <ArrowRight size={18} />
              </Link>
              <a href="tel:8136995559" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-lg">
                <Phone size={18} /> 813-699-5559
              </a>
            </div>
            <p className="text-blue-300/60 text-xs mt-6">We do not offer every plan available in your area. We currently represent 17 organizations that offer 149 products. Please contact Medicare.gov, 1-800-MEDICARE, or your local SHIP for information on all options.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

