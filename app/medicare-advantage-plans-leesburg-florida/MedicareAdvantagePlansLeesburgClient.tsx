"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, ArrowRight, CheckCircle, ChevronDown, MapPin, Shield, Star } from "lucide-react";

const BENEFITS = [
  "Prescription drug coverage (Part D) built in",
  "Dental, vision, and hearing benefits",
  "Fitness memberships (SilverSneakers or equivalent)",
  "Transportation to medical appointments",
  "Over-the-counter allowance for health items",
  "Telehealth and 24/7 nurse hotline access",
  "Meal delivery after hospital stays",
  "Grocery and utility allowances on select plans",
];

const CARRIERS = [
  { name: "Humana", types: "HMO, PPO" },
  { name: "UnitedHealthcare", types: "HMO, PPO" },
  { name: "Aetna", types: "HMO, PPO" },
  { name: "Cigna", types: "HMO, PPO" },
  { name: "Florida Blue", types: "HMO, PPO" },
  { name: "WellCare", types: "HMO" },
  { name: "Devoted Health", types: "HMO" },
  { name: "Simply Healthcare", types: "HMO" },
  { name: "Molina Healthcare", types: "HMO" },
  { name: "Alignment Health", types: "HMO" },
];

const FAQS = [
  {
    q: "What Medicare Advantage plans are available in Leesburg, FL?",
    a: "Leesburg and Lake County residents have access to plans from 10+ carriers including Humana, UnitedHealthcare, Aetna, Florida Blue, Cigna, WellCare, and Devoted Health. Many plans offer $0 premiums with dental, vision, hearing, and prescription drug coverage included. Plan availability and benefits vary by ZIP code.",
  },
  {
    q: "Will my doctors at Leesburg Regional Medical Center accept my Medicare Advantage plan?",
    a: "Network coverage varies by carrier and plan. Our agents verify your specific doctors at Leesburg Regional Medical Center, AdventHealth Waterman, and UF Health The Villages Hospital against each plan's provider directory before you enroll. Never assume your doctor is in-network without checking, as networks change annually.",
  },
  {
    q: "Is Leesburg a good area for Medicare Advantage plans?",
    a: "Yes. Lake County has a large and growing Medicare-eligible population, and its proximity to The Villages corridor means carriers compete actively for members. Many $0-premium plans with dental, vision, fitness memberships, and drug coverage are available. Leesburg residents often have access to the same competitive plan options as The Villages and Sumter County.",
  },
  {
    q: "Is a $0 premium Medicare Advantage plan really free?",
    a: "A $0 premium means you pay no monthly plan premium beyond your standard Medicare Part B premium. However, you may still have copays, coinsurance, and deductibles when you use services. The plan's annual out-of-pocket maximum caps your total exposure. We help you calculate your likely total cost, not just the premium.",
  },
  {
    q: "What is the difference between HMO and PPO Medicare Advantage plans in Leesburg?",
    a: "HMO plans require you to use in-network providers and typically need referrals for specialists. They often have lower premiums. PPO plans give you more flexibility to see out-of-network providers at a higher cost share and do not require referrals. Both HMO and PPO options are available in Lake County.",
  },
  {
    q: "When can I enroll in a Medicare Advantage plan in Leesburg?",
    a: "The main enrollment windows are your Initial Enrollment Period (7 months around your 65th birthday), the Annual Enrollment Period (October 15 through December 7), and the Medicare Advantage Open Enrollment Period (January 1 through March 31). Special Enrollment Periods apply for qualifying life events such as moving to Leesburg from another county or state.",
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

export default function MedicareAdvantagePlansLeesburgClient() {
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
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
              <MapPin size={12} /> Leesburg, FL | Lake County
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 leading-tight max-w-3xl">
              Medicare Advantage Plans in Leesburg, Florida
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-4">
              Compare every Medicare Advantage plan available in Lake County. Independent agents serving Leesburg, Fruitland Park, Lady Lake, Tavares, Mount Dora, and surrounding communities.
            </p>
            <p className="text-blue-200 text-base leading-relaxed max-w-2xl mb-8">
              Leesburg sits in one of the most competitive Medicare markets in Central Florida, benefiting from its proximity to The Villages corridor. With 10+ carriers offering plans in Lake County, the right Medicare Advantage plan depends on your doctors, your prescriptions, and how you use healthcare. Our independent agents are not tied to any single carrier, so we compare every available option and recommend the one that genuinely fits your situation. There is no cost to you and no obligation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:8136995559"
                className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09600] transition-colors"
              >
                <Phone size={16} /> Call 813-699-5559
              </a>
              <Link
                href="/get-started/"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20"
              >
                Compare Plans Free <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* Main content + sidebar */}
        <section className="py-14 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-10">

              {/* Main content */}
              <div className="lg:col-span-2 space-y-10">

                {/* What is MA */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                    What Is Medicare Advantage?
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Medicare Advantage (Part C) is an alternative to Original Medicare offered by private insurance companies approved by Medicare. Instead of receiving your Part A (hospital) and Part B (medical) benefits directly from the federal government, you receive them through a private plan that often bundles additional benefits not covered by Original Medicare.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Most Medicare Advantage plans in Leesburg include prescription drug coverage (Part D), dental, vision, and hearing benefits at no additional premium. Many also include fitness memberships, transportation to appointments, and over-the-counter allowances. The trade-off is that you typically must use the plan's network of providers and may need referrals for specialist visits.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Not sure whether Medicare Advantage is the right fit? Our{" "}
                    <Link href="/comparing-medicare-plans-leesburg/" className="text-[#1a3fa8] underline hover:text-[#0d2260]">
                      local Medicare plan comparison guide for Leesburg
                    </Link>{" "}
                    walks through the key differences between Medicare Advantage and{" "}
                    <Link href="/medicare-supplement-insurance-plans-leesburg/" className="text-[#1a3fa8] underline hover:text-[#0d2260]">
                      Medicare Supplement (Medigap) plans
                    </Link>{" "}
                    available in Lake County. If you are moving to Leesburg from another county or state, our{" "}
                    <Link href="/what-is-the-special-enrollment-period/" className="text-[#1a3fa8] underline hover:text-[#0d2260]">
                      Special Enrollment Period guide
                    </Link>{" "}
                    explains how to transfer your coverage without gaps. You can also use our{" "}
                    <Link href="/get-started/" className="text-[#1a3fa8] underline hover:text-[#0d2260]">
                      free plan comparison tool
                    </Link>{" "}
                    to see every plan available in your ZIP code in minutes.
                  </p>
                </div>

                {/* Benefits */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                    Common Benefits Available in Leesburg Medicare Advantage Plans
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-5">
                    Benefit availability varies by plan and carrier. The following benefits are commonly available on Medicare Advantage plans in Lake County, though not every plan includes all of them.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {BENEFITS.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-3 bg-[#e8edf8] rounded-xl p-4 border border-[#b8c8f0]">
                        <CheckCircle size={16} className="text-[#1a3fa8] shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-800 leading-snug">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carriers */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                    Medicare Advantage Carriers in Lake County
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-5">
                    Leesburg and Lake County benefit from the same competitive Medicare Advantage market that serves The Villages corridor. As independent agents, we are appointed with all major carriers and can compare every plan side by side.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {CARRIERS.map((carrier) => (
                      <div key={carrier.name} className="flex items-center justify-between bg-gray-50 rounded-xl px-4 py-3 border border-gray-200">
                        <span className="font-semibold text-gray-900 text-sm">{carrier.name}</span>
                        <span className="text-xs text-gray-500 bg-white border border-gray-200 rounded-full px-2 py-0.5">{carrier.types}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Local coverage */}
                <div className="bg-[#f8f9ff] rounded-2xl p-7 border border-[#dde3f5]">
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                    Local Coverage in Leesburg and Lake County
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    When comparing Medicare Advantage plans in Leesburg, network coverage at local hospitals and specialist offices is the most important factor. We verify your specific providers before you enroll.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <div className="font-semibold text-gray-900 text-sm mb-2">Major Hospitals</div>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-center gap-2"><Shield size={12} className="text-[#1a3fa8]" /> Leesburg Regional Medical Center</li>
                        <li className="flex items-center gap-2"><Shield size={12} className="text-[#1a3fa8]" /> AdventHealth Waterman</li>
                        <li className="flex items-center gap-2"><Shield size={12} className="text-[#1a3fa8]" /> UF Health The Villages Hospital</li>
                        <li className="flex items-center gap-2"><Shield size={12} className="text-[#1a3fa8]" /> Tavares Regional Hospital</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm mb-2">Communities Served</div>
                      <ul className="space-y-1 text-sm text-gray-700">
                        <li className="flex items-center gap-2"><MapPin size={12} className="text-[#1a3fa8]" /> Leesburg (34748, 34788)</li>
                        <li className="flex items-center gap-2"><MapPin size={12} className="text-[#1a3fa8]" /> Fruitland Park, Lady Lake</li>
                        <li className="flex items-center gap-2"><MapPin size={12} className="text-[#1a3fa8]" /> Tavares, Mount Dora</li>
                        <li className="flex items-center gap-2"><MapPin size={12} className="text-[#1a3fa8]" /> Eustis, Umatilla</li>
                        <li className="flex items-center gap-2"><MapPin size={12} className="text-[#1a3fa8]" /> Howey-in-the-Hills</li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["34748", "34788", "34731", "34736", "34737", "32159"].map((zip) => (
                      <span key={zip} className="text-xs font-mono bg-white border border-[#b8c8f0] text-[#1a3fa8] rounded-full px-3 py-1">{zip}</span>
                    ))}
                  </div>
                </div>

                {/* Testimonials */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">What Leesburg Residents Say</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {[
                      { text: "I live in Fruitland Park and was worried about keeping my doctor at Leesburg Regional. The agent confirmed my doctor was in-network before I enrolled. Saved me from a costly mistake.", name: "Dorothy K.", location: "Fruitland Park, FL" },
                      { text: "I had no idea there were so many carriers in Lake County. The agent compared every plan against my medications and found one that cut my drug costs by $55 a month. All at no charge to me.", name: "James W.", location: "Leesburg, FL" },
                    ].map((t) => (
                      <div key={t.name} className="bg-gray-50 rounded-2xl p-5 border border-gray-200">
                        <div className="flex gap-0.5 mb-3">
                          {[...Array(5)].map((_, i) => <Star key={i} size={14} className="text-[#f5a800] fill-[#f5a800]" />)}
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">"{t.text}"</p>
                        <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                        <div className="text-gray-500 text-xs">{t.location}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* FAQ */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {FAQS.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
                  </div>
                </div>

              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="bg-[#1a3fa8] rounded-2xl p-6 text-white sticky top-6">
                  <div className="flex justify-center mb-4">
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/jUJZJkjvpOtQygpw.jpg"
                      alt="JD Diaz, Licensed Medicare Agent"
                      className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0"
                      style={{ border: "3px solid #f5a800" }}
                    />
                  </div>
                  <div className="font-bold text-lg mb-0.5 text-center">JD Diaz</div>
                  <div className="text-blue-300 text-sm mb-4 text-center">Licensed Medicare Agent, Brandon FL</div>
                  <p className="text-blue-100 text-sm leading-relaxed mb-5">
                    Serving Leesburg and Lake County. Free plan comparisons, no pressure.
                  </p>
                  <Link
                    href="/free-consultation/"
                    className="block w-full text-center bg-[#f5a800] text-white font-bold py-3 rounded-xl hover:bg-[#e09600] transition-colors mb-3"
                  >
                    Compare Plans Free
                  </Link>
                  <a
                    href="tel:8136995559"
                    className="block w-full text-center bg-white/10 text-white font-semibold py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-sm"
                  >
                    <Phone size={13} className="inline mr-1.5" />813-699-5559
                  </a>
                  <div className="mt-6 pt-5 border-t border-white/20 space-y-2">
                    <div className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">More Leesburg Pages</div>
                    <Link href="/medicare-agent-leesburg/" className="block text-sm text-blue-200 hover:text-white transition-colors">Medicare Agent in Leesburg</Link>
                    <Link href="/medicare-supplement-insurance-plans-leesburg/" className="block text-sm text-blue-200 hover:text-white transition-colors">Medicare Supplement Plans Leesburg</Link>
                    <Link href="/comparing-medicare-plans-leesburg/" className="block text-sm text-blue-200 hover:text-white transition-colors">Comparing Medicare Plans Leesburg</Link>
                    <Link href="/medicare-enrollment-assistance-leesburg/" className="block text-sm text-blue-200 hover:text-white transition-colors">Medicare Enrollment Assistance Leesburg</Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-14 bg-[#0d2260]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl font-bold text-white mb-4">
              Ready to Compare Medicare Advantage Plans in Leesburg?
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              Our independent agents compare every plan available in Lake County against your doctors, prescriptions, and budget. Free, no obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/get-started/"
                className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#e09600] transition-colors text-lg"
              >
                Compare Plans Free <ArrowRight size={18} />
              </Link>
              <a
                href="tel:8136995559"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-lg"
              >
                <Phone size={18} /> 813-699-5559
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
