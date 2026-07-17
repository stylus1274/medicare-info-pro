"use client";

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const GREG_WOHL_PHOTO = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png";

const planTypes = [
  {
    name: "HMO (Health Maintenance Organization)",
    color: "#1a3fa8",
    bg: "#e8edf8",
    border: "#b8c8f0",
    pros: ["Often $0 monthly premium", "Includes dental, vision, and hearing", "Built-in Part D drug coverage", "Annual out-of-pocket maximum"],
    cons: ["Must use in-network providers", "Requires referrals for specialists", "Limited coverage outside service area"],
    bestFor: "People who have local doctors in-network and want low premiums",
  },
  {
    name: "PPO (Preferred Provider Organization)",
    color: "#0d6e4f",
    bg: "#e6f4ee",
    border: "#a8d8c2",
    pros: ["See any Medicare provider nationwide", "No referrals required", "Out-of-network coverage available", "More flexibility than HMO"],
    cons: ["Higher premiums than HMO", "Higher cost-sharing for out-of-network", "Still has network for lowest costs"],
    bestFor: "People who want flexibility to see specialists without referrals",
  },
  {
    name: "PFFS (Private Fee-for-Service)",
    color: "#7c3aed",
    bg: "#f3eeff",
    border: "#d4b8f8",
    pros: ["See any provider who accepts plan terms", "No network restrictions", "Flexible provider choice"],
    cons: ["Provider must agree to plan terms", "Less common in Tallahassee area", "May have higher cost-sharing"],
    bestFor: "People who want maximum provider flexibility",
  },
  {
    name: "SNP (Special Needs Plan)",
    color: "#b45309",
    bg: "#fef3e2",
    border: "#f8d49a",
    pros: ["Tailored for specific conditions", "Coordinated care for complex needs", "Often includes extra benefits", "Lower costs for qualifying conditions"],
    cons: ["Must meet eligibility requirements", "Limited to specific populations", "Fewer plan options available"],
    bestFor: "People with chronic conditions, dual Medicare/Medicaid eligibility, or institutional care needs",
  },
];

const faqs = [
  {
    q: "What Medicare Advantage plans are available in Tallahassee, FL?",
    a: "Tallahassee residents in Leon County have access to Medicare Advantage plans from carriers including Humana, Aetna, UnitedHealthcare, Florida Blue, WellCare, Simply Healthcare, Molina Healthcare, and Cigna. Plan availability varies by ZIP code. Our agents compare every available plan in your area at no cost.",
  },
  {
    q: "Is Medicare Advantage better than Original Medicare in Tallahassee?",
    a: "It depends on your situation. Medicare Advantage often offers lower out-of-pocket costs and extra benefits like dental, vision, and hearing. However, it requires using a network of providers. Original Medicare with a Medigap supplement gives you more flexibility to see any Medicare-accepting doctor nationwide. Our agents help you compare both options based on your doctors and prescriptions.",
  },
  {
    q: "Can I keep my Tallahassee Memorial or Capital Regional doctors with Medicare Advantage?",
    a: "Most Medicare Advantage plans in Leon County include major Tallahassee providers like Tallahassee Memorial HealthCare, Capital Regional Medical Center, and HCA Florida Capital Hospital. However, network participation varies by plan and can change annually. We verify your specific doctors are in-network before recommending any plan.",
  },
  {
    q: "When can I enroll in Medicare Advantage in Tallahassee?",
    a: "You can enroll during your Initial Enrollment Period (7 months around your 65th birthday), the Annual Enrollment Period (October 15 - December 7), or a Special Enrollment Period if you qualify. First-time Medicare enrollees also have a Medicare Advantage Open Enrollment Period from January 1 to March 31.",
  },
  {
    q: "Do Medicare Advantage plans in Tallahassee cover prescriptions?",
    a: "Most Medicare Advantage plans (MAPD plans) include Part D prescription drug coverage. However, formularies vary by plan. Our agents check your specific medications against each plan's formulary to find the plan that covers your drugs at the lowest cost.",
  },
  {
    q: "Is there a cost to get help comparing Medicare Advantage plans in Tallahassee?",
    a: "No. Our services are completely free. We are licensed independent agents compensated by insurance carriers when you enroll. Your premium is identical whether you work with us or enroll directly. We are never paid more to recommend one plan over another.",
  },
];

export default function MedicareAdvantagePlansTallahasseeClient() {
  return (
    <main className="bg-white">

      {/* Hero */}
      <section className="bg-[#0d2260] pt-16 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-5 text-sm">
            <Link href="/" className="text-blue-300 hover:text-white transition-colors">Home</Link>
            <span className="text-blue-500">/</span>
            <span className="text-blue-200">Medicare Advantage Plans Tallahassee</span>
          </div>
          <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
            Tallahassee, FL - Leon County
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 leading-tight max-w-3xl">
            Medicare Advantage Plans in Tallahassee, FL
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mb-8">
            Tallahassee residents have access to Medicare Advantage plans from 10+ carriers. Our independent agents compare every plan against your doctors, prescriptions, and budget - completely free.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:8137897700" className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09600] transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" /></svg>
              Call 813-789-7700
            </a>
            <Link href="/free-consultation" className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20">
              Free Plan Comparison
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Plan Types */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">Medicare Advantage Plan Types in Tallahassee</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Leon County residents can choose from four types of Medicare Advantage plans. Here is what each one offers.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {planTypes.map((plan) => (
              <div key={plan.name} className="rounded-2xl border overflow-hidden" style={{ borderColor: plan.border }}>
                <div className="px-5 py-4" style={{ background: plan.color }}>
                  <div className="font-bold text-white">{plan.name}</div>
                </div>
                <div className="px-5 py-4" style={{ background: plan.bg }}>
                  <div className="text-xs font-bold uppercase tracking-wider mb-2" style={{ color: plan.color }}>Advantages</div>
                  <ul className="space-y-1.5 mb-4">
                    {plan.pros.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-xs text-gray-700">
                        <svg className="w-3 h-3 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: plan.color }}><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <div className="text-xs font-bold uppercase tracking-wider mb-2 text-gray-500">Limitations</div>
                  <ul className="space-y-1.5 mb-4">
                    {plan.cons.map((c) => (
                      <li key={c} className="flex items-start gap-2 text-xs text-gray-500">
                        <svg className="w-3 h-3 shrink-0 mt-0.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                        {c}
                      </li>
                    ))}
                  </ul>
                  <div className="rounded-xl p-3 bg-white/60 border border-white">
                    <div className="text-xs font-bold text-gray-700 mb-1">Best For</div>
                    <p className="text-xs text-gray-600 leading-relaxed">{plan.bestFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Use an Agent */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">Why Tallahassee Residents Use a Local Medicare Agent</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Tallahassee is home to a large population of state government employees, FSU and FAMU retirees, and long-term Florida residents - many of whom have specific healthcare relationships with providers at Tallahassee Memorial HealthCare, Capital Regional Medical Center, and HCA Florida Capital Hospital.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                A local independent agent knows which plans include these providers in-network, which carriers have strong formularies for common medications, and how to navigate the enrollment process without triggering penalties.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our agents compare every available Medicare Advantage plan in Leon County side-by-side - at no cost to you, ever.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { stat: "10+", label: "Carriers in Leon County", color: "#1a3fa8", bg: "#e8edf8", border: "#b8c8f0" },
                  { stat: "$0", label: "Cost to Work With Us", color: "#0d6e4f", bg: "#e6f4ee", border: "#a8d8c2" },
                  { stat: "22+", label: "Years of Experience", color: "#7c3aed", bg: "#f3eeff", border: "#d4b8f8" },
                  { stat: "Free", label: "Plan Comparison Service", color: "#b45309", bg: "#fef3e2", border: "#f8d49a" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border p-4 text-center" style={{ background: item.bg, borderColor: item.border }}>
                    <div className="font-black text-2xl mb-1" style={{ color: item.color }}>{item.stat}</div>
                    <div className="text-xs text-gray-600 leading-tight">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#0d2260] rounded-2xl p-8 text-white">
              <img src={GREG_WOHL_PHOTO} alt="Greg Wohl, Licensed Medicare Agent" className="w-20 h-20 rounded-full object-cover border-4 border-[#f5a800] mb-4 mx-auto" />
              <h3 className="font-bold text-xl text-center mb-2">Greg Wohl</h3>
              <p className="text-blue-200 text-sm text-center mb-4">Licensed Medicare Agent, Serving Tallahassee and Leon County</p>
              <p className="text-blue-100 text-sm leading-relaxed mb-6">
                "Tallahassee has a unique Medicare landscape - especially for state retirees and those with FRS pension coverage. I help residents understand exactly how Medicare works alongside their existing benefits and find the plan that fits their situation."
              </p>
              <a href="tel:8137897700" className="flex items-center justify-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09600] transition-colors w-full">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" /></svg>
                Speak with Greg: 813-789-7700
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0d1f5c] mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="bg-white rounded-2xl border border-gray-200 group">
                <summary className="flex items-center justify-between px-6 py-5 cursor-pointer list-none">
                  <span className="font-semibold text-[#0d1f5c] pr-4">{faq.q}</span>
                  <svg className="w-5 h-5 text-gray-400 shrink-0 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Tallahassee Links */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0d1f5c] mb-6">More Medicare Resources in Tallahassee</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Medicare Agent in Tallahassee", href: "/medicare-agent-tallahassee" },
              { label: "Medicare Supplement Plans Tallahassee", href: "/medicare-supplement-insurance-plans-tallahassee" },
              { label: "Compare Medicare Plans Tallahassee", href: "/comparing-medicare-plans-tallahassee" },
              { label: "Medicare Enrollment Assistance Tallahassee", href: "/medicare-enrollment-assistance-tallahassee" },
              { label: "Medicare Advantage Florida", href: "/medicare-advantage-florida" },
              { label: "Medicare Advantage Plans", href: "/medicare-advantage" },
            ].map((r) => (
              <Link key={r.label} href={r.href} className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 hover:border-[#0d1f5c] transition-colors group">
                <svg className="w-4 h-4 text-[#f5a800] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                <span className="text-[#0d1f5c] font-medium text-sm">{r.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d1f5c] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Find the Right Medicare Advantage Plan in Tallahassee?</h2>
          <p className="text-blue-100 mb-8 text-lg">Get clear answers, personalized guidance, and local support from a certified Medicare agent. No pressure, no cost, ever.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-consultation" className="inline-flex items-center justify-center gap-2 bg-[#f5a800] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#e09600] transition-colors text-lg">
              Schedule Free Consultation
            </Link>
            <a href="tel:8137897700" className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" /></svg>
              813-789-7700
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}
