"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Phone, MapPin, CheckCircle, Star, Clock, Users, BookOpen, FileText } from "lucide-react";

const FAQS = [
  {
    q: "What is Medicare consulting and how is it different from selling insurance?",
    a: "Medicare consulting focuses on education first. We explain how Medicare works, walk you through all your options, and help you understand the trade-offs before any enrollment decision is made. We do not push products. If you decide to enroll in a plan, we assist with that too, but the consultation itself is purely educational and free.",
  },
  {
    q: "How much does Medicare consulting cost?",
    a: "Nothing. Our consulting services are completely free to you. We are compensated by insurance carriers when you enroll in a plan, but that compensation does not affect our advice or increase your premium.",
  },
  {
    q: "Can you help me if I already have Medicare and want to review my current plan?",
    a: "Absolutely. Annual plan reviews are one of the most valuable things we do. Medicare plans change every year, and the plan that was best for you last year may not be the best option today. We review your current coverage, compare it to available alternatives, and let you know if switching makes sense.",
  },
  {
    q: "Do you only help people turning 65?",
    a: "No. We help Medicare beneficiaries at every stage: people approaching 65, those already on Medicare who want to review their options, people with employer coverage who are considering switching, and anyone who has had a qualifying life event that affects their Medicare coverage.",
  },
  {
    q: "Can you explain the difference between Medicare Advantage and Medigap?",
    a: "Yes, and this is one of the most common questions we get. Medicare Advantage replaces Original Medicare with a private plan that often includes extra benefits but uses networks. Medigap supplements Original Medicare by covering your out-of-pocket costs, giving you more flexibility but usually at a higher premium. The right choice depends on your health, budget, and how often you travel. We walk through both options in detail during every consultation.",
  },
  {
    q: "How long does a Medicare consulting session take?",
    a: "An initial consultation typically takes 30 to 45 minutes. If you want to do a detailed plan comparison at the same time, plan for about an hour. We work at your pace and never rush.",
  },
];

const SERVICES = [
  {
    icon: BookOpen,
    title: "Medicare Education",
    desc: "We explain how Parts A, B, C, and D work, what is covered, what is not, and how the different plan types compare. No jargon, no assumptions about what you already know.",
  },
  {
    icon: FileText,
    title: "Plan Comparison",
    desc: "We pull every plan available in your ZIP code and compare them side by side: costs, networks, drug formularies, and extra benefits. You see the full picture before making any decision.",
  },
  {
    icon: Users,
    title: "Enrollment Assistance",
    desc: "When you are ready to enroll, we handle the paperwork and submit everything accurately and on time. We confirm your coverage and follow up to make sure there are no issues.",
  },
  {
    icon: Clock,
    title: "Annual Plan Reviews",
    desc: "Medicare plans change every year. We proactively reach out before each Annual Enrollment Period to review your current plan and compare it to new options. If switching saves you money, we will tell you.",
  },
];


const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Education",
  "url": "https://medicareinfopro.com/medicare-consulting-services-tampa",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;


const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://medicareinfopro.com/medicare-consulting-services-tampa#localbusiness",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Tampa, FL.",
  "url": "https://medicareinfopro.com/medicare-consulting-services-tampa",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Tampa",
    "addressRegion": "FL",
    "postalCode": "33602",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "City",
    "name": "Tampa"
  },
  "serviceType": "Medicare Insurance Consulting",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;

export default function MedicareConsultingServicesTampaClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
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
                <span className="text-white">Medicare Consulting Services Tampa</span>
              </nav>
              <div className="inline-block bg-[#f5a800] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Tampa, FL
              </div>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Medicare Consulting Services in Tampa, FL
              </h1>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                Independent Medicare consulting for Tampa residents. We educate first, then help you choose. No pressure, no cost, no affiliation with any insurance company.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/free-consultation"
                  className="inline-flex items-center justify-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors"
                >
                  Schedule Free Consultation
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
              <div className="font-bold text-white mb-4 text-lg">What Makes Us Different</div>
              <ul className="space-y-3">
                {[
                  "Independent: not employed by any insurance company",
                  "Licensed Florida insurance professionals",
                  "We represent 17+ carriers, not just one",
                  "Education-first approach, no sales pressure",
                  "Free service, always",
                  "Available year-round, not just at enrollment time",
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

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">

            {/* What Is Medicare Consulting */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                What Is Medicare Consulting?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Medicare consulting is a guided, educational process that helps you understand your Medicare options before making any enrollment decisions. Unlike a typical insurance sales call, a consulting session is designed to inform, not to sell.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Medicare Information Project, our consultants are licensed insurance professionals who specialize exclusively in Medicare. We take the time to learn about your specific situation: your doctors, your prescriptions, your budget, and your health priorities. Then we explain all your options clearly and honestly, including the trade-offs of each.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you decide to enroll in a plan, we assist with that too. But the consultation itself is purely educational, completely free, and available to anyone in the Tampa area regardless of whether you enroll.
              </p>
            </section>

            {/* Services */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Our Medicare Consulting Services
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {SERVICES.map(({ icon: Icon, title, desc }) => (
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

            {/* Who We Help */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Who We Help in Tampa
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                Our Medicare consulting services are available to anyone in the Tampa area who has questions about Medicare, regardless of where they are in the process.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  { title: "Turning 65 Soon", desc: "Understanding your options before your Initial Enrollment Period begins" },
                  { title: "Already on Medicare", desc: "Annual reviews to make sure your current plan is still the best fit" },
                  { title: "Leaving Employer Coverage", desc: "Navigating the transition from group health insurance to Medicare" },
                  { title: "Still Working Past 65", desc: "Coordinating Medicare with active employer coverage" },
                  { title: "Relocating to Tampa", desc: "Reviewing plan options after moving to a new ZIP code" },
                  { title: "Caring for a Parent", desc: "Helping adult children understand Medicare on behalf of a loved one" },
                ].map(({ title, desc }) => (
                  <div key={title} className="flex items-start gap-3 p-4 bg-blue-50 rounded-xl border border-blue-100">
                    <CheckCircle className="w-5 h-5 text-[#1a3fa8] mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{title}</div>
                      <div className="text-gray-600 text-xs mt-0.5">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Cost Section */}
            <section className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                Is There a Cost for Medicare Consulting?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                No. Our Medicare consulting services are completely free to you. This is not a promotional offer or a limited-time deal. It is simply how independent Medicare agents are compensated.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When you enroll in a Medicare plan through us, the insurance carrier pays us a commission. That commission is built into the plan's pricing structure and does not increase your premium. You pay exactly the same amount whether you enroll through us, through another agent, or directly through the carrier.
              </p>
            </section>

            {/* Testimonials */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                What Tampa Clients Say
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { name: "Carol B.", location: "Westchase, Tampa", text: "I had no idea what I was doing when I first started looking at Medicare. The consulting session was like a masterclass. By the end I felt completely confident in my decision." },
                  { name: "Michael R.", location: "South Tampa", text: "I appreciated that they never tried to push me toward any particular plan. They laid out all the options, explained the pros and cons of each, and let me decide. That is exactly what I needed." },
                  { name: "Dorothy H.", location: "New Tampa", text: "I have been on Medicare for three years and never had an annual review until I found these folks. Turns out I was overpaying by $140 a month. Wish I had called sooner." },
                  { name: "Frank M.", location: "Carrollwood", text: "My wife and I both needed help. They handled both of us in one session, made sure all our doctors were covered, and walked us through the enrollment process step by step." },
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
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png"
                  alt="Greg Wohl, Licensed Medicare Agent"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-bold text-lg mb-0.5">Greg Wohl</div>
              <div className="text-blue-300 text-sm mb-4">Licensed Medicare Consultant, Brandon FL</div>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">
                Questions about Medicare in Tampa? I offer free, no-pressure consulting sessions by phone, video, or in person.
              </p>
              <Link
                href="/free-consultation"
                className="block text-center bg-[#f5a800] text-white font-bold px-4 py-3 rounded-lg hover:bg-amber-400 transition-colors mb-3"
              >
                Schedule Free Consultation
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
                  { label: "Medicare Enrollment Assistance Tampa", href: "/medicare-enrollment-assistance-in-tampa-fl" },
                  { label: "Medicare Supplement Plans Tampa", href: "/medicare-supplement-insurance-plans-tampa" },
                  { label: "Tampa Medicare Specialist", href: "/tampa-medicare-specialist" },
                  { label: "Medicare Plan Counseling Tampa", href: "/medicare-plan-counseling-tampa" },
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

      {/* Bottom CTA */}
      <section className="bg-[#0d2260] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
            Ready for a Free Medicare Consultation?
          </h2>
          <p className="text-blue-200 mb-6">
            Serving Tampa and the entire Tampa Bay area. No pressure, no cost, no obligation.
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
    </>
  );
}
