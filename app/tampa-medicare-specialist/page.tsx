"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Phone, MapPin, CheckCircle, Star, Clock, Award } from "lucide-react";

const FAQS = [
  {
    q: "What makes a Medicare specialist different from a general insurance agent?",
    a: "A Medicare specialist focuses exclusively on Medicare. They know the rules, the plans, the enrollment windows, and the common pitfalls in depth. A general insurance agent may sell many types of insurance and may not have the same depth of knowledge about Medicare-specific issues like observation status, IRMAA surcharges, or the Medigap open enrollment window.",
  },
  {
    q: "How do I know if a Medicare specialist is truly independent?",
    a: "Ask them how many carriers they represent. An independent specialist typically works with 10 or more carriers. If they only represent one or two companies, they are likely a captive agent and can only show you plans from those carriers. We represent 17+ carriers and are not employed by any of them.",
  },
  {
    q: "Do I need a Medicare specialist or can I just call Medicare directly?",
    a: "Calling 1-800-MEDICARE will give you general information about Medicare, but the representatives there cannot recommend a specific plan, compare options for your situation, or help you enroll in a Medigap or Part D plan. A Medicare specialist provides personalized guidance that goes well beyond what the government helpline can offer.",
  },
  {
    q: "Is there a cost to work with a Medicare specialist?",
    a: "No. Our services are completely free to you. We are compensated by insurance carriers when you enroll in a plan, but that does not affect our advice or increase your premium.",
  },
  {
    q: "Can a Medicare specialist help me if I already have Medicare and want to make changes?",
    a: "Absolutely. Annual plan reviews are one of the most valuable services we provide. Medicare plans change every year, and we proactively reach out to our clients before each Annual Enrollment Period to review their current coverage and compare it to new options.",
  },
];

export default function TampaMedicareSpecialist() {
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
                <span className="text-white">Tampa Medicare Specialist</span>
              </nav>
              <div className="inline-block bg-[#f5a800] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Tampa, FL
              </div>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Tampa Medicare Specialist
              </h1>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                Independent Medicare specialists serving Tampa and the surrounding communities. We focus exclusively on Medicare so you get expert guidance, not a generalist's overview.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/free-consultation"
                  className="inline-flex items-center justify-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors"
                >
                  Speak with a Specialist
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
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "22+", label: "Years of Experience" },
                { value: "17+", label: "Carriers Represented" },
                { value: "100%", label: "Medicare Focused" },
                { value: "Free", label: "Always, No Exceptions" },
              ].map(({ value, label }) => (
                <div key={label} className="bg-white/10 rounded-xl p-4 border border-white/20 text-center">
                  <div className="font-bold text-3xl text-[#f5a800] mb-1">{value}</div>
                  <div className="text-blue-200 text-sm">{label}</div>
                </div>
              ))}
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

            {/* What a Specialist Does */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                What a Medicare Specialist Does
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                A Medicare specialist is a licensed insurance professional who works exclusively with Medicare beneficiaries. Unlike a general health insurance agent, a Medicare specialist has deep expertise in the rules, plan types, enrollment windows, and cost structures that are unique to Medicare.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Medicare Information Project, our specialists help Tampa residents navigate every aspect of Medicare: from understanding the basics for the first time to conducting annual plan reviews for long-time beneficiaries. We compare plans from 17+ carriers, verify doctor and hospital networks, review drug formularies, and help you enroll on time and in the right plan.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our service is always free. We are compensated by insurance carriers when you enroll, but that compensation does not influence our recommendations and does not increase your premium.
              </p>
            </section>

            {/* Specialist Credentials */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Our Specialist Credentials
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { icon: Award, title: "Licensed in Florida", desc: "All agents are licensed Florida insurance professionals in good standing with the Florida Department of Financial Services." },
                  { icon: CheckCircle, title: "Medicare Certified", desc: "Annual AHIP Medicare certification required for all agents who sell Medicare Advantage and Part D plans." },
                  { icon: Award, title: "CMIP Designation", desc: "Greg Wohl holds the Certified Medicare Insurance Planner (CMIP) designation, one of the highest credentials in Medicare planning." },
                  { icon: CheckCircle, title: "Independent", desc: "Not employed by any insurance company. We represent 17+ carriers and recommend based on your needs, not carrier incentives." },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <div className="w-10 h-10 rounded-lg bg-[#1a3fa8] flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="font-bold text-gray-900 mb-2">{title}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Service Area */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Serving Tampa and Surrounding Communities
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our office is located in Brandon, just east of Tampa. We serve clients throughout Hillsborough County and the greater Tampa Bay area, including by phone and video for clients who prefer remote consultations.
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                {["Brandon", "Riverview", "Valrico", "Sun City Center", "Apollo Beach", "Plant City", "Ruskin", "Wimauma", "Seffner", "Lithia", "Fish Hawk", "Gibsonton"].map((city) => (
                  <div key={city} className="bg-blue-50 rounded-lg px-3 py-2 text-center text-sm text-[#1a3fa8] font-medium border border-blue-100">
                    {city}
                  </div>
                ))}
              </div>
            </section>

            {/* Testimonials */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                What Tampa Clients Say
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "Helen W.", location: "South Tampa", text: "I called three different agents before calling Greg. He was the only one who actually explained things rather than just trying to sign me up for something. That made all the difference." },
                  { name: "Charles B.", location: "New Tampa", text: "I have been working with Medicare Information Project for four years now. They call me every year before open enrollment, review my plan, and let me know if I should make any changes. That kind of ongoing service is rare." },
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
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-[#f5a800]">
                <img
                  src="https://medicareinfopro.com/wp-content/uploads/2022/12/Greg-web-02.jpg"
                  alt="Greg Wohl, Licensed Medicare Specialist"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-bold text-lg mb-0.5">Greg Wohl, CMIP</div>
              <div className="text-blue-300 text-sm mb-4">Licensed Medicare Specialist, Brandon FL</div>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">
                22+ years of Medicare experience. Free consultations by phone, video, or in person. No pressure, ever.
              </p>
              <Link
                href="/free-consultation"
                className="block text-center bg-[#f5a800] text-white font-bold px-4 py-3 rounded-lg hover:bg-amber-400 transition-colors mb-3"
              >
                Speak with a Specialist
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
              <div className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Related Pages</div>
              <ul className="space-y-2">
                {[
                  { label: "Medicare Insurance Agent Tampa FL", href: "/medicare-insurance-agent-tampa-fl" },
                  { label: "Medicare Plan Counseling Tampa", href: "/medicare-plan-counseling-tampa" },
                  { label: "Medicare Consulting Services Tampa", href: "/medicare-consulting-services-tampa" },
                  { label: "Meet Greg Wohl", href: "/greg-wohl" },
                  { label: "Our Team", href: "/our-team" },
                  { label: "Free Consultation", href: "/free-consultation" },
                ].map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-[#1a3fa8] hover:underline text-sm">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Our Office</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#1a3fa8] mt-0.5 flex-shrink-0" />
                  <span>Brandon, FL 33511<br />(Short drive from Tampa)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#1a3fa8] flex-shrink-0" />
                  <a href="tel:8136995559" className="hover:text-[#1a3fa8]">813-699-5559</a>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#1a3fa8] mt-0.5 flex-shrink-0" />
                  <span>By appointment only</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#0d2260] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
            Speak with a Tampa Medicare Specialist Today
          </h2>
          <p className="text-blue-200 mb-6">
            Free consultations by phone, video, or in person. No pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/free-consultation"
              className="inline-flex items-center justify-center bg-[#f5a800] text-white font-bold px-8 py-3 rounded-lg hover:bg-amber-400 transition-colors"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:8136995559"
              className="inline-flex items-center justify-center gap-2 border border-blue-400 text-white font-semibold px-8 py-3 rounded-lg hover:bg-blue-800 transition-colors"
            >
              <Phone className="w-4 h-4" />
              813-699-5559
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
