"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  ChevronRight, ChevronDown, Phone, ArrowRight, CheckCircle,
  Shield, Heart, Users, Star, MapPin, Info, FileText, Clock
} from "lucide-react";

interface CityData {
  city: string;
  slug: string;
  county: string;
  zip: string;
  neighboringCities: { name: string; slug: string }[];
}

const SERVICES = [
  {
    icon: Heart,
    title: "Medicare Plans",
    desc: "Medicare Advantage, Medicare Supplement (Medigap), and Part D prescription drug plans — compared side-by-side so you get the right fit.",
    color: "#1a3fa8",
    bg: "#e8edf8",
    border: "#b8c8f0",
    link: "/what-is-medicare",
  },
  {
    icon: Users,
    title: "Individual & Family Health Insurance",
    desc: "ACA Marketplace plans, off-exchange private plans, and short-term coverage for individuals and families under 65.",
    color: "#0d6e4f",
    bg: "#e6f4ee",
    border: "#a8d8c2",
    link: "/free-consultation",
  },
  {
    icon: Shield,
    title: "Supplemental Insurance",
    desc: "Hospital indemnity, dental, vision, hearing, and critical illness plans that fill the gaps in your primary coverage.",
    color: "#7c3aed",
    bg: "#f3eeff",
    border: "#d4b8f8",
    link: "/medicare-supplement",
  },
  {
    icon: FileText,
    title: "Prescription Drug Plans",
    desc: "Standalone Part D plans for Original Medicare enrollees — we compare formularies against your specific medications.",
    color: "#b45309",
    bg: "#fef3e2",
    border: "#f8d49a",
    link: "/medicare-part-d",
  },
];

const KEY_TERMS = [
  { term: "Premium", def: "The monthly amount you pay to maintain your health insurance coverage, regardless of whether you use medical services." },
  { term: "Deductible", def: "The amount you pay out-of-pocket each year before your insurance begins covering most costs." },
  { term: "Copayment", def: "A fixed dollar amount you pay for a covered service (e.g., $30 for a primary care visit) after meeting your deductible." },
  { term: "Coinsurance", def: "Your share of costs after meeting your deductible, expressed as a percentage (e.g., you pay 20%, insurance pays 80%)." },
  { term: "Out-of-Pocket Maximum", def: "The most you will pay in a year for covered services. After reaching this limit, insurance covers 100% of covered costs." },
  { term: "Network", def: "The group of doctors, hospitals, and other providers that have agreed to provide services at negotiated rates for your plan." },
  { term: "HMO vs. PPO", def: "HMO plans require you to use in-network providers and get referrals. PPO plans offer more flexibility to see out-of-network providers without referrals." },
];

const FAQS = [
  {
    q: "What types of health insurance plans are available?",
    a: "Residents can choose from Medicare plans (Advantage, Supplement, Part D), ACA Marketplace plans, private individual and family plans, employer-sponsored coverage, and supplemental plans. The right type depends on your age, income, employment status, and health needs.",
  },
  {
    q: "How do I know which health insurance plan is right for me?",
    a: "The right plan depends on your healthcare needs, budget, preferred doctors, and prescription medications. Our agents evaluate all of these factors and compare every available plan to find the best fit — at no cost to you.",
  },
  {
    q: "Can I get health insurance outside of open enrollment?",
    a: "Yes. If you experience a qualifying life event — such as losing employer coverage, getting married, having a baby, or turning 65 — you may qualify for a Special Enrollment Period. Medicare has its own enrollment windows. Contact us and we will determine your eligibility.",
  },
  {
    q: "What is the difference between Marketplace and private health insurance?",
    a: "ACA Marketplace plans are government-regulated and may qualify for income-based subsidies. Private plans offer more flexibility but may not qualify for subsidies. Our agents can compare both options and help you determine which is more cost-effective for your situation.",
  },
  {
    q: "Is there a cost to work with Medicare Information Project?",
    a: "No. Our services are completely free to you. We are licensed independent agents compensated by insurance companies when you enroll. This compensation is the same regardless of which plan you choose, so our only goal is to find the right fit for you.",
  },
  {
    q: "Can I keep my current doctor if I switch plans?",
    a: "It depends on the plan. We always verify that your current doctors are in-network before recommending any plan. This is one of the first things we check during our free consultation.",
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

export default function HealthInsuranceTemplate({ data }: { data: CityData }) {
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
              <span className="text-blue-200 text-sm">Health Insurance in {city}</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 text-[#f5a800] text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5 border border-[#f5a800]/30">
              <MapPin size={12} /> {city}, FL — {county} County
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-5 leading-tight max-w-3xl">
              Health Insurance in {city}, FL
            </h1>
            <p className="text-blue-200 text-lg md:text-xl leading-relaxed max-w-2xl mb-8">
              Finding the right health insurance in {city} does not have to be overwhelming. Our independent agents compare every available plan — Medicare, ACA Marketplace, and private coverage — completely free of charge.
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

        {/* Why Choose Us */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                  Why {city} Residents Choose Medicare Information Project
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Health insurance decisions are among the most important financial choices you will make. The wrong plan can cost thousands of dollars in unexpected out-of-pocket expenses, force you to switch doctors, or leave your prescriptions uncovered.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Our agents are licensed, independent, and local to {county} County. We do not represent a single insurance company — we represent you. That means we compare every plan available in {zip} and recommend the one that genuinely fits your needs and budget.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Our services are completely free. We are compensated by insurance companies when you enroll, and that compensation is the same regardless of which plan you choose.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { icon: Shield, label: "Independent — we represent you, not one company", color: "#1a3fa8", bg: "#e8edf8", border: "#b8c8f0" },
                  { icon: CheckCircle, label: "Free service — no cost to you, ever", color: "#0d6e4f", bg: "#e6f4ee", border: "#a8d8c2" },
                  { icon: MapPin, label: `Local agents who know ${county} County`, color: "#7c3aed", bg: "#f3eeff", border: "#d4b8f8" },
                  { icon: Clock, label: "Year-round support, not just at enrollment", color: "#b45309", bg: "#fef3e2", border: "#f8d49a" },
                ].map((item) => (
                  <div key={item.label} className="rounded-2xl border p-5 flex flex-col items-start gap-3" style={{ background: item.bg, borderColor: item.border }}>
                    <item.icon size={20} style={{ color: item.color }} />
                    <p className="text-sm text-gray-700 font-medium leading-snug">{item.label}</p>
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
                Our Health Insurance Services in {city}
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We help {city} residents find coverage across every major category of health insurance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {SERVICES.map((svc) => (
                <div key={svc.title} className="rounded-2xl border p-6" style={{ background: svc.bg, borderColor: svc.border }}>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: svc.color }}>
                      <svc.icon size={18} className="text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1.5">{svc.title}</div>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">{svc.desc}</p>
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

        {/* Key Terms */}
        <section className="py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                  Understanding Health Insurance Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Health insurance has its own vocabulary, and understanding these terms is the first step to making a confident decision. Our agents always explain your options in plain language — no jargon, no pressure.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Here are the key terms you will encounter when comparing health insurance plans in {city}:
                </p>
                <Link
                  href="/free-consultation"
                  className="inline-flex items-center gap-2 bg-[#1a3fa8] text-white font-semibold px-5 py-2.5 rounded-xl hover:bg-[#152f82] transition-colors text-sm"
                >
                  Talk to an Agent <ArrowRight size={14} />
                </Link>
              </div>
              <div className="space-y-3">
                {KEY_TERMS.map((item) => (
                  <div key={item.term} className="bg-gray-50 border border-gray-200 rounded-xl px-5 py-4">
                    <div className="font-bold text-[#1a3fa8] text-sm mb-1">{item.term}</div>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.def}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How to Get Started */}
        <section className="py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
                How to Get Started in {city}
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { step: "1", title: "Schedule a Free Consultation", desc: "Call us at 813-699-5559 or click below to book a free, no-obligation consultation with a local agent.", color: "#1a3fa8", bg: "#e8edf8", border: "#b8c8f0" },
                { step: "2", title: "We Compare Your Options", desc: "We review every plan available in your zip code against your doctors, prescriptions, and budget.", color: "#0d6e4f", bg: "#e6f4ee", border: "#a8d8c2" },
                { step: "3", title: "Enroll with Confidence", desc: "We handle the enrollment paperwork and stay available year-round for questions, claims help, and annual reviews.", color: "#7c3aed", bg: "#f3eeff", border: "#d4b8f8" },
              ].map((item) => (
                <div key={item.step} className="rounded-2xl border p-6" style={{ background: item.bg, borderColor: item.border }}>
                  <div className="w-9 h-9 rounded-full flex items-center justify-center font-black text-white text-sm mb-4" style={{ background: item.color }}>{item.step}</div>
                  <div className="font-bold text-gray-900 mb-2">{item.title}</div>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial */}
        <section className="py-10 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-[#e8edf8] border border-[#b8c8f0] rounded-2xl p-8 text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#f5a800] fill-[#f5a800]" />
                ))}
              </div>
              <blockquote className="font-serif text-xl text-gray-800 italic leading-relaxed mb-4">
                "They took the time to explain every option and never made me feel rushed. I ended up with better coverage at a lower cost than I had before."
              </blockquote>
              <div className="text-sm font-semibold text-gray-700">— Medicare Information Project Client, {county} County</div>
            </div>
          </div>
        </section>

        {/* Neighboring Cities */}
        {neighboringCities.length > 0 && (
          <section className="py-10 bg-gray-50">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-6">
                <h2 className="font-serif text-2xl font-bold text-gray-900">We Also Serve Nearby Communities</h2>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {neighboringCities.map((nc) => (
                  <Link
                    key={nc.slug}
                    href={`/health-insurance-${nc.slug}`}
                    className="inline-flex items-center gap-2 bg-white text-[#1a3fa8] font-semibold px-4 py-2 rounded-xl hover:bg-[#e8edf8] transition-colors text-sm border border-[#b8c8f0]"
                  >
                    <MapPin size={13} /> {nc.name}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="py-14 bg-white">
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
              Ready to Find the Right Health Insurance in {city}?
            </h2>
            <p className="text-blue-200 text-lg mb-8 leading-relaxed">
              Our local agents are ready to help. Free consultation, no pressure, no cost.
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
