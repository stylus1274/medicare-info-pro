"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Phone, MapPin, CheckCircle, Star, Shield, Clock, Users, Award } from "lucide-react";

const FAQS = [
  {
    q: "Is there a cost to work with a Medicare insurance agent in Tampa?",
    a: "No. Our services are completely free to you. Medicare Information Project is compensated directly by insurance carriers when you enroll in a plan. This compensation does not increase your premium in any way.",
  },
  {
    q: "Are you affiliated with Medicare or the U.S. government?",
    a: "No. Medicare Information Project is an independent insurance agency and is not affiliated with or endorsed by the U.S. government or the federal Medicare program. We represent multiple private insurance carriers and provide unbiased educational guidance.",
  },
  {
    q: "Can you help me compare Medicare Advantage, Medigap, and Part D plans?",
    a: "Yes. We help you compare all three: Medicare Advantage (Part C), Medicare Supplement (Medigap), and Part D prescription drug plans available in your ZIP code. We explain the differences in plain language so you can make a confident, informed decision.",
  },
  {
    q: "Do you work with doctors and hospitals in the Tampa area?",
    a: "We help you review plans that include your preferred doctors, specialists, and hospitals. Provider participation depends on the plan's network and carrier rules, which can change from year to year. We always verify your doctors are in-network before recommending a plan.",
  },
  {
    q: "When is the best time to contact a Medicare insurance agent?",
    a: "Ideally, 3 to 6 months before you turn 65. This gives you time to understand your options before your Initial Enrollment Period begins. We also help during the Annual Enrollment Period (October 15 through December 7) and after qualifying life events.",
  },
  {
    q: "Can you meet with me in person?",
    a: "Yes. We offer in-person consultations at our Brandon office, which is a short drive from most Tampa neighborhoods. We also offer phone and video consultations for your convenience.",
  },
];

const PLAN_TYPES = [
  {
    name: "Original Medicare",
    subtitle: "Parts A and B",
    color: "bg-blue-50 border-blue-200",
    headerColor: "bg-[#1a3fa8]",
    points: [
      "Government-run federal program",
      "Part A covers hospital stays",
      "Part B covers doctor visits and outpatient care",
      "No network restrictions: see any doctor nationwide",
      "No out-of-pocket maximum",
      "Best paired with a Medigap plan",
    ],
  },
  {
    name: "Medicare Advantage",
    subtitle: "Part C",
    color: "bg-amber-50 border-amber-200",
    headerColor: "bg-[#f5a800]",
    points: [
      "Private insurance alternative to Original Medicare",
      "Bundles Parts A, B, and usually Part D",
      "Often includes dental, vision, and hearing",
      "Network-based (HMO or PPO)",
      "Annual out-of-pocket maximum",
      "Plan options vary by ZIP code",
    ],
  },
  {
    name: "Medicare Supplement",
    subtitle: "Medigap",
    color: "bg-green-50 border-green-200",
    headerColor: "bg-green-700",
    points: [
      "Fills the gaps in Original Medicare",
      "Covers deductibles, copays, and coinsurance",
      "Plan G eliminates nearly all out-of-pocket costs",
      "Use any Medicare-accepting doctor nationwide",
      "Standardized benefits across all carriers",
      "Requires separate Part D drug plan",
    ],
  },
  {
    name: "Part D",
    subtitle: "Prescription Drugs",
    color: "bg-purple-50 border-purple-200",
    headerColor: "bg-purple-700",
    points: [
      "Standalone prescription drug coverage",
      "Pairs with Original Medicare or Medigap",
      "2026 out-of-pocket cap: $2,100",
      "Formularies vary by carrier",
      "Penalty for late enrollment",
      "Compare based on your specific medications",
    ],
  },
];

const NEIGHBORHOODS = [
  "Hyde Park", "Seminole Heights", "Davis Islands", "Ybor City",
  "Westchase", "Carrollwood", "New Tampa", "South Tampa",
  "Palma Ceia", "Channelside", "Harbour Island", "Temple Terrace",
];

const TAMPA_AGENT_CALLBACK_HREF = "/local-consultation?city=Tampa&service=Medicare%20insurance%20agent&source=%2Fmedicare-insurance-agent-tampa-fl%2F";

// Fix 2: Correct WebPage schema name
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Insurance Agent in Tampa, FL",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-tampa-fl",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Project",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;

// Fix 3: Correct LocalBusiness address to actual Brandon office
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "InsuranceAgency",
  "@id": "https://medicareinfopro.com/#insuranceagency",
  "name": "Medicare Information Project",
  "description": "Independent, licensed Medicare insurance agents serving Tampa and the greater Tampa Bay area. We compare Medicare Advantage, Medigap, and Part D plans from 17+ carriers.",
  "url": "https://medicareinfopro.com/medicare-insurance-agent-tampa-fl",
  "telephone": "+1-813-699-5559",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "915 Oakfield Dr, Suite A",
    "addressLocality": "Brandon",
    "addressRegion": "FL",
    "postalCode": "33511",
    "addressCountry": "US"
  },
  "areaServed": [
    { "@type": "City", "name": "Tampa" },
    { "@type": "City", "name": "Brandon" },
    { "@type": "City", "name": "Riverview" },
    { "@type": "AdministrativeArea", "name": "Hillsborough County" }
  ],
  "geo": { "@type": "GeoCoordinates", "latitude": 27.9378, "longitude": -82.2859 },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "09:00", "closes": "17:00" }],
  "priceRange": "$0 consultation",
  "serviceType": "Medicare Insurance Consulting",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Medicare Information Project",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;

// Fix 4: FAQ schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": FAQS.map(({ q, a }) => ({
    "@type": "Question",
    "name": q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": a,
    },
  })),
};

export default function MedicareInsuranceAgentTampaClient() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                <span className="text-white">Medicare Agent Tampa FL</span>
              </nav>
              <div className="inline-block bg-[#f5a800] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Tampa, FL
              </div>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Medicare Insurance Agent in Tampa, FL
              </h1>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                Independent, licensed Medicare agents serving Tampa and the greater Tampa Bay area. We compare plans from every major carrier so you get the right coverage at the lowest cost.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={TAMPA_AGENT_CALLBACK_HREF}
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
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: "Independent Agents", sub: "Not tied to one carrier" },
                  { icon: Award, label: "Licensed in Florida", sub: "State-licensed professionals" },
                  { icon: Users, label: "17+ Carriers", sub: "All major plans compared" },
                  { icon: Clock, label: "Free Service", sub: "No cost to you, ever" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="flex flex-col items-center text-center p-3">
                    <Icon className="w-6 h-6 text-[#f5a800] mb-2" />
                    <div className="text-white font-semibold text-sm">{label}</div>
                    <div className="text-blue-300 text-xs mt-0.5">{sub}</div>
                  </div>
                ))}
              </div>
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

            {/* Why Local Matters */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Why Work with a Local Tampa Medicare Agent?
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Medicare is not one-size-fits-all. The plans available to you depend on your specific ZIP code, and the best plan for your neighbor may be completely wrong for you. A local agent who knows Tampa&apos;s healthcare landscape can make a real difference.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Medicare Information Project, our agents are familiar with the major hospital systems and medical groups in the Tampa area, including Tampa General Hospital, St. Joseph&apos;s Hospital, AdventHealth Tampa, and BayCare facilities. We verify that your preferred doctors and specialists are in-network before recommending any plan.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are independent, which means we are not employed by any insurance company. We represent more than 17 carriers and have one goal: finding the plan that is genuinely right for you.
              </p>
            </section>

            {/* Plan Types */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Medicare Plans We Help With in Tampa
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {PLAN_TYPES.map((plan) => (
                  <div key={plan.name} className={`rounded-xl border overflow-hidden ${plan.color}`}>
                    <div className={`${plan.headerColor} px-4 py-3`}>
                      <div className="text-white font-bold">{plan.name}</div>
                      <div className="text-white/80 text-sm">{plan.subtitle}</div>
                    </div>
                    <ul className="p-4 space-y-2">
                      {plan.points.map((pt) => (
                        <li key={pt} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* How It Works */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                How Our Consultation Process Works
              </h2>
              <div className="space-y-4">
                {[
                  { step: "1", title: "Initial Consultation", desc: "We start by learning about your health needs, current doctors, prescriptions, and budget. This takes about 30 minutes and can be done by phone, video, or in person at our Brandon office." },
                  { step: "2", title: "Plan Comparison", desc: "We pull every plan available in your Tampa ZIP code and walk you through the differences in plain language: costs, networks, drug coverage, and extra benefits. No jargon, no pressure." },
                  { step: "3", title: "Enrollment Assistance", desc: "When you are ready to enroll, we handle the paperwork and make sure everything is submitted accurately and on time. We confirm your coverage and send you a summary of your benefits." },
                  { step: "4", title: "Ongoing Support", desc: "We do not disappear after enrollment. We are available year-round for questions, and we proactively reach out before each Annual Enrollment Period to review your plan and make sure it is still the best fit." },
                ].map(({ step, title, desc }) => (
                  <div key={step} className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="w-10 h-10 rounded-full bg-[#1a3fa8] text-white font-bold flex items-center justify-center flex-shrink-0 font-serif text-lg">
                      {step}
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">{title}</div>
                      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Neighborhoods */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Tampa Neighborhoods We Serve
              </h2>
              <p className="text-gray-700 leading-relaxed mb-5">
                We serve Medicare beneficiaries throughout the city of Tampa and the greater Tampa Bay area. Whether you live in a historic neighborhood near downtown or a newer community in New Tampa or Westchase, we can help you find the right Medicare plan.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {NEIGHBORHOODS.map((n) => (
                  <div key={n} className="flex items-center gap-2 bg-blue-50 rounded-lg px-3 py-2 text-sm text-[#1a3fa8] font-medium">
                    <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                    {n}
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
                  { name: "Patricia M.", location: "South Tampa", text: "Greg took the time to explain every option clearly. I had been putting off dealing with Medicare for months because it seemed so complicated. He made it simple and I ended up saving over $200 a month." },
                  { name: "Robert K.", location: "Westchase", text: "I called three different agencies before finding Medicare Information Project. The difference was night and day. They actually listened to what I needed instead of just pushing the most expensive plan." },
                  { name: "Sandra L.", location: "New Tampa", text: "My husband and I both needed help switching plans during the Annual Enrollment Period. They handled everything for both of us and made sure all our doctors were covered. Highly recommend." },
                  { name: "James T.", location: "Hyde Park", text: "I was skeptical that a free service could be this good. They compared over a dozen plans for me, explained the pros and cons of each, and never once pressured me. Outstanding service." },
                ].map(({ name, location, text }) => (
                  <div key={name} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#f5a800] text-[#f5a800]" />
                      ))}
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed mb-3 italic">&ldquo;{text}&rdquo;</p>
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
            {/* CTA Card */}
            <div className="bg-[#1a3fa8] rounded-2xl p-6 text-white sticky top-6">
              <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-[#f5a800]">
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png"
                  alt="Greg Wohl, Licensed Medicare Agent"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-bold text-lg mb-0.5">Greg Wohl</div>
              <div className="text-blue-300 text-sm mb-4">Licensed Medicare Agent, Brandon FL</div>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">
                Have questions about Medicare in Tampa? I offer free, no-pressure consultations by phone, video, or in person.
              </p>
              <Link
                href={TAMPA_AGENT_CALLBACK_HREF}
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

            {/* Related Pages */}
            <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
              <div className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Related Pages</div>
              <ul className="space-y-2">
                {[
                  { label: "Medicare Consulting Services Tampa", href: "/medicare-consulting-services-tampa" },
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

            {/* Fix 5: Core Service Links */}
            <div className="bg-blue-50 rounded-xl p-5 border border-blue-100">
              <div className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Medicare Plan Types</div>
              <ul className="space-y-2">
                <li><Link href="/medicare-advantage" className="text-[#1a3fa8] hover:underline text-sm">Medicare Advantage Plans in Florida</Link></li>
                <li><Link href="/medicare-supplement" className="text-[#1a3fa8] hover:underline text-sm">Medicare Supplement (Medigap) Plans</Link></li>
                <li><Link href="/medicare-part-d" className="text-[#1a3fa8] hover:underline text-sm">Medicare Part D Drug Coverage</Link></li>
                <li><Link href="/original-vs-advantage" className="text-[#1a3fa8] hover:underline text-sm">Original Medicare vs. Medicare Advantage</Link></li>
                <li><Link href="/medicare-part-a" className="text-[#1a3fa8] hover:underline text-sm">What Does Medicare Part A Cover?</Link></li>
                <li><Link href="/medicare-part-b" className="text-[#1a3fa8] hover:underline text-sm">What Does Medicare Part B Cover?</Link></li>
              </ul>
            </div>

            {/* Office Info */}
            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Our Office</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#1a3fa8] mt-0.5 flex-shrink-0" />
                  <span>915 Oakfield Dr, Suite A<br />Brandon, FL 33511<br />(Serving Tampa and Hillsborough County)</span>
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
            Ready to Find the Right Medicare Plan?
          </h2>
          <p className="text-blue-200 mb-6">
            Our licensed agents serve Tampa and the entire Tampa Bay area. Free consultations, no pressure, no cost.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={TAMPA_AGENT_CALLBACK_HREF}
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
