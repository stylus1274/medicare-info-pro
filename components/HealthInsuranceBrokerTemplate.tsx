"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight, ChevronDown, Phone, ArrowRight, CheckCircle,
  Shield, Heart, Users, Star, MapPin, Info, Scale, Award, Clock
} from "lucide-react";

interface CityData {
  city: string;
  slug: string;
  county: string;
  zip: string;
  neighboringCities: { name: string; slug: string }[];
}

const BROKER_ADVANTAGES = [
  {
    icon: Scale,
    title: "Truly Independent",
    desc: "We are not captive agents tied to one company. We represent you and compare plans from every major carrier available in your area.",
    color: "#1a3fa8",
    bg: "#e8edf8",
    border: "#b8c8f0",
  },
  {
    icon: Shield,
    title: "No Cost to You",
    desc: "Our services are completely free. Insurance companies compensate us when you enroll — and that compensation is identical regardless of which plan you choose.",
    color: "#0d6e4f",
    bg: "#e6f4ee",
    border: "#a8d8c2",
  },
  {
    icon: Award,
    title: "Licensed & Local",
    desc: "Our agents are Florida-licensed, locally based, and deeply familiar with the plans available in your zip code and the providers in your area.",
    color: "#7c3aed",
    bg: "#f3eeff",
    border: "#d4b8f8",
  },
  {
    icon: Clock,
    title: "Year-Round Support",
    desc: "We do not disappear after enrollment. We are available year-round for plan questions, claims issues, and annual reviews at no charge.",
    color: "#b45309",
    bg: "#fef3e2",
    border: "#f8d49a",
  },
];

const SERVICES = [
  {
    icon: Heart,
    title: "Medicare Advantage Plans",
    desc: "We compare every Medicare Advantage plan available in your zip code — HMO, PPO, SNP — against your doctors and prescriptions.",
    link: "/medicare-advantage-florida",
    color: "#1a3fa8",
  },
  {
    icon: Shield,
    title: "Medicare Supplement (Medigap)",
    desc: "We explain every Medigap plan letter and identify which plan gives you the best coverage for the lowest long-term cost.",
    link: "/medicare-supplement",
    color: "#0d6e4f",
  },
  {
    icon: Users,
    title: "Part D Prescription Drug Plans",
    desc: "We run your specific medications through every available formulary to find the plan with the lowest total drug cost.",
    link: "/medicare-part-d",
    color: "#7c3aed",
  },
  {
    icon: CheckCircle,
    title: "Individual & Family Health Insurance",
    desc: "For those under 65, we compare ACA Marketplace plans and private options to find the right fit for your family and budget.",
    link: "/free-consultation",
    color: "#b45309",
  },
];

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Free Consultation",
    desc: "We start with a no-obligation conversation to understand your health needs, preferred doctors, medications, and budget.",
    color: "#1a3fa8",
    bg: "#e8edf8",
    border: "#b8c8f0",
  },
  {
    step: "2",
    title: "Side-by-Side Comparison",
    desc: "We pull every plan available in your zip code and compare them against your specific situation — not a generic recommendation.",
    color: "#0d6e4f",
    bg: "#e6f4ee",
    border: "#a8d8c2",
  },
  {
    step: "3",
    title: "Clear Recommendation",
    desc: "We present our recommendation in plain language, explain the tradeoffs, and answer every question before you decide.",
    color: "#7c3aed",
    bg: "#f3eeff",
    border: "#d4b8f8",
  },
  {
    step: "4",
    title: "Enrollment & Ongoing Support",
    desc: "We handle the enrollment paperwork and remain your point of contact for claims, coverage questions, and annual plan reviews.",
    color: "#b45309",
    bg: "#fef3e2",
    border: "#f8d49a",
  },
];

const FAQS = [
  {
    q: "What is the difference between a health insurance broker and an agent?",
    a: "A captive agent represents one insurance company and can only sell that company's plans. An independent broker like Medicare Information Project represents multiple carriers and can compare plans across the entire market to find the best fit for you.",
  },
  {
    q: "Does using a broker cost more than going directly to an insurance company?",
    a: "No. The premium you pay is identical whether you enroll through a broker or directly with the insurance company. Brokers are compensated by the insurance company, not by you, and that compensation is the same regardless of which plan you choose.",
  },
  {
    q: "Can a broker help me if I already have coverage?",
    a: "Absolutely. We review your current plan every year during the Annual Enrollment Period to make sure it is still the best option. Plans change their premiums, formularies, and networks annually, and the best plan from last year may not be the best plan this year.",
  },
  {
    q: "What information do I need to bring to a consultation?",
    a: "Bring a list of your current medications (name, dosage, frequency), your current insurance card, a list of your preferred doctors and specialists, and any recent Explanation of Benefits statements. We can work with whatever you have.",
  },
  {
    q: "Do you only help with Medicare, or can you help with other health insurance?",
    a: "We help with both. While Medicare is our specialty, we also assist individuals and families under 65 with ACA Marketplace plans, private health insurance, and supplemental coverage such as dental, vision, and hospital indemnity.",
  },
  {
    q: "How do I get started?",
    a: "Call us at 813-699-5559 or click the Free Consultation button on this page. We will schedule a time that works for you — phone, video, or in person.",
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

export default function HealthInsuranceBrokerTemplate({ data }: { data: CityData }) {
  const { city, county, zip, neighboringCities } = data;

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
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex items-center gap-2 mb-5">
              <Link href="/" className="text-blue-300 hover:text-white text-sm transition-colors">Home</Link>
              <ChevronRight size={13} className="text-blue-500" />
              <span className="text-blue-200 text-sm">Health Insurance Broker in {city}</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
              <MapPin size={12} /> {city}, FL — {county} County
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl">
              Health Insurance Broker in {city}, FL
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Medicare Information Project is your trusted, independent health insurance broker in {city}. We compare every available plan — Medicare, ACA Marketplace, and private coverage — and guide you to the right choice at no cost.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="tel:8136995559"
                className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#e09600] transition-colors"
              >
                <Phone size={16} /> Call 813-699-5559
              </a>
              <Link
                href="/free-consultation"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/20 transition-colors border border-white/20"
              >
                Free Consultation <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* Why Use a Broker */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                  Why Work with an Independent Broker in {city}?
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Health insurance is not a one-size-fits-all product. The right plan depends on your specific doctors, medications, health conditions, and financial situation. A broker who represents only one company cannot give you an unbiased answer.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Medicare Information Project is independent. We are not employed by any insurance company and we do not have quotas to meet. Our only job is to find the plan that genuinely fits your life — and our services are completely free.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We are local to {county} County, which means we know the providers, the networks, and the nuances of plans available in {zip} in a way that a national call center simply cannot.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {BROKER_ADVANTAGES.map((item) => (
                  <div key={item.title} className="rounded-2xl border p-5 flex flex-col items-start gap-3" style={{ background: item.bg, borderColor: item.border }}>
                    <item.icon size={20} style={{ color: item.color }} />
                    <div>
                      <div className="font-bold text-gray-900 text-sm mb-1">{item.title}</div>
                      <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
                Health Insurance Services We Offer in {city}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From Medicare to individual and family plans, we cover every major category of health insurance available to {city} residents.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {SERVICES.map((svc) => (
                <div key={svc.title} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: svc.color }}>
                      <svc.icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1.5">{svc.title}</div>
                      <p className="text-sm text-gray-600 leading-relaxed mb-3">{svc.desc}</p>
                      <Link href={svc.link} className="text-xs font-semibold inline-flex items-center gap-1 hover:underline" style={{ color: svc.color }}>
                        Learn More <ArrowRight size={11} />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
                How Our Broker Process Works
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                From first call to enrollment and beyond — here is what working with us looks like.
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-5">
              {PROCESS_STEPS.map((item) => (
                <div key={item.step} className="rounded-2xl border p-6" style={{ background: item.bg, borderColor: item.border }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-white text-sm mb-4" style={{ background: item.color }}>{item.step}</div>
                  <div className="font-bold text-gray-900 mb-2 text-sm">{item.title}</div>
                  <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-10 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#e8edf8] border border-[#b8c8f0] rounded-2xl p-8 text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#f5a800] fill-[#f5a800]" />
                ))}
              </div>
              <blockquote className="font-serif text-xl text-gray-800 italic leading-relaxed mb-4">
                "I had no idea how many options I had. They compared everything and found me a plan that covered all my doctors and saved me over $80 a month."
              </blockquote>
              <div className="text-sm font-semibold text-gray-700">— Medicare Information Project Client, {county} County</div>
            </div>
          </div>
        </section>

        {/* Neighboring Cities */}
        {neighboringCities.length > 0 && (
          <section className="py-10 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-6">
                <h2 className="font-serif text-2xl font-bold text-gray-900">We Also Serve Nearby Communities</h2>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {neighboringCities.map((nc) => (
                  <Link
                    key={nc.slug}
                    href={`/health-insurance-broker-${nc.slug}`}
                    className="inline-flex items-center gap-2 bg-gray-50 text-[#1a3fa8] font-semibold px-4 py-2 rounded-xl hover:bg-[#e8edf8] transition-colors text-sm border border-[#b8c8f0]"
                  >
                    <MapPin size={13} /> {nc.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
                Frequently Asked Questions
              </h2>
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
              Talk to a Local Health Insurance Broker in {city}
            </h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Free consultation. No pressure. No cost. Just honest, independent guidance from a local agent who knows your market.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:8136995559"
                className="inline-flex items-center gap-2 bg-[#f5a800] text-white font-bold px-7 py-3.5 rounded-xl hover:bg-[#e09600] transition-colors text-base"
              >
                <Phone size={17} /> Call 813-699-5559
              </a>
              <Link
                href="/free-consultation"
                className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-7 py-3.5 rounded-xl hover:bg-white/20 transition-colors border border-white/20 text-base"
              >
                Schedule a Free Consultation <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-6 flex items-start justify-center gap-2 max-w-xl mx-auto">
              <Info size={13} className="text-blue-300/60 shrink-0 mt-0.5" />
              <p className="text-blue-300/60 text-xs text-left">
                We do not offer every plan available in your area. We currently represent 17 organizations which offer 149 products. Please contact Medicare.gov, 1-800-MEDICARE, or your local SHIP for information on all options.
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
