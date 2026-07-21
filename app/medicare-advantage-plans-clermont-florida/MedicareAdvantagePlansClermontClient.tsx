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
    q: "What Medicare Advantage plans are available in Clermont, FL?",
    a: "Clermont and South Lake County residents have access to plans from 10+ carriers including Humana, UnitedHealthcare, Aetna, Florida Blue, Cigna, WellCare, and Devoted Health. Many plans offer $0 premiums with dental, vision, hearing, and prescription drug coverage included. Plan availability and benefits vary by ZIP code.",
  },
  {
    q: "Will my doctors at South Lake Hospital accept my Medicare Advantage plan?",
    a: "Network coverage varies by carrier and plan. Our agents verify your specific doctors at South Lake Hospital (AdventHealth Clermont) and Orlando Health facilities against each plan's provider directory before you enroll. Never assume your doctor is in-network without checking, as networks change annually.",
  },
  {
    q: "Is Clermont a good area for Medicare Advantage plans?",
    a: "Yes. South Lake County has a large and rapidly growing Medicare-eligible population, and carriers compete actively for members in this market. Many $0-premium plans with dental, vision, fitness memberships, and drug coverage are available. Clermont's proximity to Orlando also means access to a wide range of specialist networks.",
  },
  {
    q: "Is a $0 premium Medicare Advantage plan really free?",
    a: "A $0 premium means you pay no monthly plan premium beyond your standard Medicare Part B premium. However, you may still have copays, coinsurance, and deductibles when you use services. The plan's annual out-of-pocket maximum caps your total exposure. We help you calculate your likely total cost, not just the premium.",
  },
  {
    q: "What is the difference between HMO and PPO Medicare Advantage plans in Clermont?",
    a: "HMO plans require you to use in-network providers and typically need referrals for specialists. They often have lower premiums. PPO plans give you more flexibility to see out-of-network providers at a higher cost share and do not require referrals. Both HMO and PPO options are available in South Lake County.",
  },
  {
    q: "When can I enroll in a Medicare Advantage plan in Clermont?",
    a: "The main enrollment windows are your Initial Enrollment Period (7 months around your 65th birthday), the Annual Enrollment Period (October 15 through December 7), and the Medicare Advantage Open Enrollment Period (January 1 through March 31). Special Enrollment Periods apply for qualifying life events such as moving to Clermont from another county or state.",
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

export default function MedicareAdvantagePlansClermont Client() {
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
              <MapPin size={12} /> Clermont, FL | Lake County
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 leading-tight max-w-3xl">
              Medicare Advantage Plans in Clermont, Florida
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-4">
              Compare every Medicare Advantage plan available in South Lake County. Independent agents serving Clermont, Minneola, Groveland, Mascotte, Montverde, and surrounding communities.
            </p>
            <p className="text-blue-200 text-base leading-relaxed max-w-2xl mb-8">
              Clermont is one of the fastest-growing cities in Florida, drawing retirees from across the country to its lakefront communities and active adult neighborhoods. With 10+ carriers offering plans in Lake County, the right Medicare Advantage plan depends on your doctors, your prescriptions, and how you use healthcare. Our independent agents are not tied to any single carrier, so we compare every available option and recommend the one that genuinely fits your situation. There is no cost to you and no obligation.
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
                Compare Plans Free <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Left Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Benefits */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">
                    What Medicare Advantage Plans Include in Clermont
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    Medicare Advantage plans in South Lake County go well beyond what Original Medicare covers. Most plans bundle Part A, Part B, and Part D drug coverage into a single plan, and many add extra benefits that Original Medicare does not provide.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {BENEFITS.map((b) => (
                      <div key={b} className="flex items-start gap-3 bg-blue-50 rounded-xl p-4">
                        <CheckCircle size={18} className="text-[#1a3fa8] shrink-0 mt-0.5" />
                        <span className="text-gray-800 text-sm font-medium">{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Carriers */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">
                    Medicare Advantage Carriers Available in Clermont
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    The following carriers offer Medicare Advantage plans in Lake County. Plan availability, benefits, and premiums vary by ZIP code and change annually. We run a ZIP-code-specific comparison to identify every plan available at your address.
                  </p>
                  <div className="overflow-x-auto rounded-xl border border-gray-200">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-[#0d2260] text-white">
                          <th className="px-5 py-3 text-left font-semibold">Carrier</th>
                          <th className="px-5 py-3 text-left font-semibold">Plan Types Available</th>
                        </tr>
                      </thead>
                      <tbody>
                        {CARRIERS.map((c, i) => (
                          <tr key={c.name} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="px-5 py-3 font-medium text-gray-900">{c.name}</td>
                            <td className="px-5 py-3 text-gray-600">{c.types}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Carrier participation varies by ZIP code and plan year. Contact us for a current comparison specific to your address.</p>
                </div>

                {/* Why Independent */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                  <div className="flex items-center gap-3 mb-4">
                    <Shield size={24} className="text-[#1a3fa8]" />
                    <h2 className="font-serif text-xl font-bold text-gray-900">Why Work With an Independent Agent in Clermont?</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Captive agents represent only one carrier. Our independent agents represent every major carrier in South Lake County, which means we have no financial incentive to steer you toward any particular plan. We compare all available options, verify your doctors are in-network at South Lake Hospital and other facilities you use, check your drug formulary, and recommend the plan that genuinely fits your situation.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Our service is completely free to you. We are compensated by the carrier when you enroll, at the same rate regardless of which plan you choose. That means our only incentive is to find you the right plan.
                  </p>
                </div>

                {/* Testimonials */}
                <div>
                  <h2 className="font-serif text-2xl font-bold text-gray-900 mb-5">
                    What Clermont Residents Say
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      {
                        name: "Barbara K.",
                        location: "Clermont, FL",
                        text: "JD helped me find a Medicare Advantage plan that covers my doctors at South Lake Hospital and my prescriptions. I had been paying too much and had no idea better options were available. The whole process was free.",
                      },
                      {
                        name: "Donald M.",
                        location: "Minneola, FL",
                        text: "I moved here from Michigan and had no idea how to find Medicare coverage in Florida. JD walked me through every option, checked my doctor network, and helped me pick the plan that made the most financial sense. I saved over $75 a month.",
                      },
                    ].map((t) => (
                      <div key={t.name} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
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
                    Serving Clermont and South Lake County. Free plan comparisons, no pressure.
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
                    <div className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">More Clermont Pages</div>
                    <Link href="/medicare-agent-clermont/" className="block text-sm text-blue-200 hover:text-white transition-colors">Medicare Agent in Clermont</Link>
                    <Link href="/medicare-supplement-insurance-plans-clermont/" className="block text-sm text-blue-200 hover:text-white transition-colors">Medicare Supplement Plans Clermont</Link>
                    <Link href="/comparing-medicare-plans-clermont/" className="block text-sm text-blue-200 hover:text-white transition-colors">Comparing Medicare Plans Clermont</Link>
                    <Link href="/medicare-enrollment-assistance-clermont/" className="block text-sm text-blue-200 hover:text-white transition-colors">Medicare Enrollment Assistance Clermont</Link>
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
              Ready to Compare Medicare Advantage Plans in Clermont?
            </h2>
            <p className="text-blue-200 text-lg mb-8">
              Our independent agents compare every plan available in South Lake County against your doctors, prescriptions, and budget. Free, no obligation.
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
