"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Phone, ChevronDown, ChevronUp, Star, MapPin } from "lucide-react";

const CARRIERS = [
  { name: "Humana", type: "HMO / PPO", highlight: "Strong UF Health network" },
  { name: "Aetna", type: "HMO / PPO", highlight: "Broad Alachua County network" },
  { name: "UnitedHealthcare", type: "HMO / PPO", highlight: "Large national network" },
  { name: "Florida Blue", type: "PPO", highlight: "Wide Florida provider access" },
  { name: "WellCare", type: "HMO", highlight: "Low-premium options" },
  { name: "Simply Healthcare", type: "HMO", highlight: "Florida-focused plans" },
  { name: "Molina Healthcare", type: "HMO", highlight: "Dual-eligible specialty plans" },
  { name: "Devoted Health", type: "HMO", highlight: "High member satisfaction" },
];

const BENEFITS = [
  "Prescription drug coverage (Part D) included",
  "Dental, vision, and hearing benefits",
  "Fitness membership (SilverSneakers or equivalent)",
  "Over-the-counter (OTC) allowance",
  "Transportation to medical appointments",
  "Telehealth and 24/7 nurse line",
  "Meal delivery after hospital stays",
  "Grocery/flex card benefit (select plans)",
];

const FAQS = [
  {
    q: "What Medicare Advantage plans are available in Gainesville, FL?",
    a: "Gainesville and Alachua County residents have access to Medicare Advantage plans from multiple carriers including Humana, Aetna, UnitedHealthcare, Florida Blue, WellCare, Simply Healthcare, Molina, and Devoted Health. Plan availability and benefits vary by ZIP code. We compare all plans available in your specific Gainesville ZIP code at no cost.",
  },
  {
    q: "Do Medicare Advantage plans cover UF Health Shands in Gainesville?",
    a: "Many Medicare Advantage plans in Gainesville include UF Health Shands and North Florida Regional Medical Center in their networks, but not all do. Network participation changes annually. Before enrolling, we verify that your specific doctors and facilities are in-network for the plan year you are enrolling in.",
  },
  {
    q: "How much do Medicare Advantage plans cost in Gainesville?",
    a: "Many Medicare Advantage plans in Gainesville are available with $0 monthly premiums. You still pay your Medicare Part B premium (currently $185/month in 2026). Costs vary by plan type, carrier, and the benefits included. Plans with richer benefits such as dental and vision typically have slightly higher premiums.",
  },
  {
    q: "What is the difference between an HMO and PPO Medicare Advantage plan in Gainesville?",
    a: "An HMO requires you to use in-network providers and typically requires referrals to see specialists. A PPO allows you to see out-of-network providers at a higher cost and does not require referrals. For Gainesville residents who want flexibility to see specialists at UF Health without referrals, a PPO may be a better fit.",
  },
  {
    q: "When can I enroll in a Medicare Advantage plan in Gainesville?",
    a: "The main enrollment windows are: Initial Enrollment Period (7 months around your 65th birthday), Annual Enrollment Period (October 15 to December 7 each year), and Medicare Advantage Open Enrollment Period (January 1 to March 31 for plan switches). Special Enrollment Periods are available for qualifying life events.",
  },
  {
    q: "Can I switch from Medicare Advantage back to Original Medicare in Gainesville?",
    a: "Yes. You can switch during the Annual Enrollment Period (Oct 15 to Dec 7) or the Medicare Advantage Open Enrollment Period (Jan 1 to Mar 31). If you want to add a Medigap plan after switching back, you may need to pass medical underwriting in Florida unless you qualify for a guaranteed issue right.",
  },
];

export default function MedicareAdvantagePlansGainesvilleClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#0d2260] py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <nav className="flex items-center gap-2 text-blue-300 text-sm mb-4" aria-label="Breadcrumb">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/medicare-agent-gainesville" className="hover:text-white transition-colors">Gainesville</Link>
                <span>/</span>
                <span className="text-white">Medicare Advantage Plans</span>
              </nav>
              <div className="inline-block bg-[#f5a800] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Gainesville, FL
              </div>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Medicare Advantage Plans in Gainesville, FL
              </h1>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                Gainesville and Alachua County residents have access to Medicare Advantage plans from 8+ carriers. We compare every plan available in your ZIP code so you get the right coverage for your doctors, your medications, and your budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/free-consultation"
                  className="inline-flex items-center justify-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors"
                >
                  Compare Plans Free
                </Link>
                <a
                  href="tel:8136995559"
                  className="inline-flex items-center justify-center gap-2 border border-blue-400 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  813-699-5559
                </a>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <div className="font-bold text-white mb-4">Why Use an Independent Agent?</div>
              <ul className="space-y-3">
                {[
                  "We represent 8+ carriers in Gainesville, not just one",
                  "Verify your UF Health doctors are in-network before you enroll",
                  "Compare drug formularies against your medication list",
                  "Our service is 100% free, your premium is unchanged",
                  "Annual reviews to keep your plan optimized",
                  "Licensed, independent, no-pressure guidance",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-blue-100 text-sm">
                    <CheckCircle className="w-4 h-4 text-[#f5a800] mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Disclosure */}
      <div className="bg-amber-50 border-b border-amber-200 py-3">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-amber-800 text-xs text-center">
            Medicare Information Project is not affiliated with or endorsed by the U.S. government or the federal Medicare program. Plan availability, benefits, and provider networks vary by carrier, location, and year.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-12">

            {/* What is Medicare Advantage */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                What Is Medicare Advantage?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Medicare Advantage (Part C) is an alternative to Original Medicare offered by private insurance carriers approved by Medicare. Instead of receiving your Part A and Part B benefits directly from the federal government, you receive them through a private plan that often bundles additional benefits not covered by Original Medicare.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                In Gainesville, Medicare Advantage plans typically include prescription drug coverage (Part D), dental, vision, hearing, fitness benefits, and more, often at a $0 monthly premium. You still pay your Medicare Part B premium.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The trade-off is that Medicare Advantage plans use provider networks. Before enrolling, it is critical to verify that your doctors at UF Health, North Florida Regional, or the Malcom Randall VA are in the plan's network for the coming year.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Not sure whether Medicare Advantage is right for you? Our{" "}
                <Link href="/comparing-medicare-plans-gainesville" className="text-[#1a3fa8] underline hover:text-blue-800">Medicare plan comparison guide for Gainesville</Link>{" "}
                walks through the key differences between Medicare Advantage and{" "}
                <Link href="/medicare-supplement-insurance-plans-gainesville" className="text-[#1a3fa8] underline hover:text-blue-800">Medicare Supplement (Medigap) plans in Gainesville</Link>.{" "}
                If you are still working past 65 and have employer coverage, our{" "}
                <Link href="/still-working" className="text-[#1a3fa8] underline hover:text-blue-800">guide to Medicare when you are still working</Link>{" "}
                explains how Medicare Advantage coordinates with group insurance. You can also use our{" "}
                <Link href="/get-started" className="text-[#1a3fa8] underline hover:text-blue-800">free plan comparison tool</Link>{" "}
                to see every plan available in your Gainesville ZIP code in minutes.
              </p>
            </section>

            {/* Benefits */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Common Benefits Available in Gainesville Plans
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Medicare Advantage plans in Alachua County often include benefits beyond what Original Medicare covers. Availability varies by carrier and plan.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {BENEFITS.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Carriers */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Medicare Advantage Carriers in Gainesville, FL
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                The following carriers offer Medicare Advantage plans in Alachua County. Plan availability, networks, and benefits vary by ZIP code and change annually.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {CARRIERS.map((carrier) => (
                  <div key={carrier.name} className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                    <div className="font-bold text-gray-900 mb-1">{carrier.name}</div>
                    <div className="text-[#1a3fa8] text-xs font-medium mb-1">{carrier.type}</div>
                    <div className="text-gray-600 text-sm">{carrier.highlight}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-4">
                Carrier participation and plan availability change annually. Contact us to verify current plans available in your specific Gainesville ZIP code.
              </p>
            </section>

            {/* Local coverage */}
            <section className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                Serving Gainesville and Alachua County
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We help Gainesville residents navigate Medicare Advantage coverage at local healthcare facilities including:
              </p>
              <ul className="space-y-1 mb-4">
                {[
                  "UF Health Shands Hospital",
                  "North Florida Regional Medical Center",
                  "Malcom Randall VA Medical Center",
                  "UF Health Family Medicine",
                  "UF Health Physicians Specialty Clinics",
                ].map((lm) => (
                  <li key={lm} className="flex items-center gap-2 text-gray-700 text-sm">
                    <MapPin className="w-3.5 h-3.5 text-[#1a3fa8] flex-shrink-0" />
                    {lm}
                  </li>
                ))}
              </ul>
              <p className="text-gray-700 text-sm mb-3">Areas and ZIP codes served:</p>
              <div className="flex flex-wrap gap-2">
                {["32601", "32603", "32605", "32608", "Haile Plantation", "Tioga", "Newberry", "High Springs", "Alachua", "Waldo"].map((n) => (
                  <span key={n} className="bg-white border border-blue-200 text-[#1a3fa8] text-xs font-medium px-3 py-1 rounded-full">
                    {n}
                  </span>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                What Gainesville Clients Say
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    name: "Carol M.",
                    location: "Gainesville, FL",
                    text: "Kelly helped me find a $0 premium Medicare Advantage plan that covers my cardiologist at UF Health and my prescriptions. I was paying $180 a month before. Could not be happier.",
                  },
                  {
                    name: "Frank T.",
                    location: "Gainesville, FL",
                    text: "I was nervous about switching plans but Kelly walked me through every detail. She verified all my doctors were in-network before I enrolled. The whole process was smooth and completely free.",
                  },
                ].map(({ name, location, text }) => (
                  <div key={name} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#f5a800] text-[#f5a800]" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">"{text}"</p>
                    <div className="font-semibold text-gray-900 text-sm">{name}</div>
                    <div className="text-gray-500 text-xs">{location}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <div className="space-y-2">
                {FAQS.map((faq, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-900 text-sm">{faq.q}</span>
                      {openFaq === i ? (
                        <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === i && (
                      <div className="px-5 pb-4 bg-white border-t border-gray-100">
                        <p className="text-gray-600 text-sm leading-relaxed pt-3">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-[#1a3fa8] rounded-2xl p-6 text-white sticky top-6">
              <div className="flex justify-center mb-4">
                <img
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663028505829/oJCXGjgdxUszeWbj.jpeg"
                  alt="Kelly Webb, Licensed Medicare Agent"
                  className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0"
                  style={{ border: "3px solid #f5a800" }}
                />
              </div>
              <div className="font-bold text-lg mb-0.5">Kelly Webb</div>
              <div className="text-blue-300 text-sm mb-4">Licensed Medicare Agent, Brandon FL</div>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">
                Serving Gainesville and Alachua County. Free plan comparisons, no pressure.
              </p>
              <Link
                href="/free-consultation"
                className="block text-center bg-[#f5a800] text-white font-bold px-4 py-3 rounded-lg hover:bg-amber-400 transition-colors mb-3"
              >
                Compare Plans Free
              </Link>
              <a
                href="tel:8136995559"
                className="flex items-center justify-center gap-2 border border-blue-400 text-white font-semibold px-4 py-2.5 rounded-lg hover:bg-blue-800 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                813-699-5559
              </a>
            </div>

            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Gainesville Medicare Pages</div>
              <ul className="space-y-2">
                {[
                  { label: "Medicare Agent Gainesville", href: "/medicare-agent-gainesville" },
                  { label: "Medicare Supplement Plans Gainesville", href: "/medicare-supplement-insurance-plans-gainesville" },
                  { label: "Compare Medicare Plans Gainesville", href: "/comparing-medicare-plans-gainesville" },
                  { label: "Medicare Enrollment Assistance Gainesville", href: "/medicare-enrollment-assistance-gainesville" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-[#1a3fa8] hover:underline text-sm">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <div className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Related Resources</div>
              <ul className="space-y-2">
                <li><Link href="/medicare-advantage" className="text-[#1a3fa8] hover:underline text-sm">Medicare Advantage Plans in Florida</Link></li>
                <li><Link href="/original-vs-advantage" className="text-[#1a3fa8] hover:underline text-sm">Medicare Advantage vs. Medigap</Link></li>
                <li><Link href="/medicare-part-d" className="text-[#1a3fa8] hover:underline text-sm">Medicare Part D Drug Coverage</Link></li>
                <li><Link href="/medicare-advantage-plans-tallahassee-florida" className="text-[#1a3fa8] hover:underline text-sm">Medicare Advantage Plans Tallahassee</Link></li>
                <li><Link href="/free-consultation" className="text-[#1a3fa8] hover:underline text-sm">Free Consultation</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="bg-[#0d2260] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Compare Medicare Advantage Plans in Gainesville?
          </h2>
          <p className="text-blue-200 leading-relaxed mb-8">
            Our licensed agents compare every plan available in your Gainesville ZIP code at no cost. We verify your doctors are in-network and your medications are covered before you enroll.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-consultation"
              className="inline-flex items-center justify-center gap-2 bg-[#f5a800] text-white font-bold px-8 py-4 rounded-lg hover:bg-amber-400 transition-colors text-lg"
            >
              Get a Free Plan Comparison
            </Link>
            <a
              href="tel:8136995559"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              <Phone className="w-5 h-5" />
              813-699-5559
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
