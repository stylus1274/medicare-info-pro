"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Phone, MapPin, CheckCircle, Star, Clock } from "lucide-react";

export interface LocalPageConfig {
  city: string;               // e.g. "Brandon"
  cityFull: string;           // e.g. "Brandon, FL"
  county: string;             // e.g. "Hillsborough County"
  slug: string;               // e.g. "brandon"
  headline: string;           // H1 text
  subheadline: string;        // Hero paragraph
  bodyText?: string;           // Optional second paragraph in Services section
  metaTitle: string;
  metaDescription: string;
  pageType: "agent" | "local-agent" | "insurance-agent" | "consulting" | "enrollment" | "supplement" | "brokers" | "broker";
  nearbyLandmarks?: string[]; // local hospitals/clinics
  neighborhoods?: string[];   // neighborhoods/zip codes served
  faqs: { q: string; a: string }[];
  testimonials?: { name: string; location: string; text: string }[];
  relatedLinks: { label: string; href: string }[];
  agent?: {
    name: string;
    title: string;
    location: string;
    photoUrl: string;
  };
}

const PAGE_TYPE_LABELS: Record<LocalPageConfig["pageType"], string> = {
  "agent": "Medicare Agent",
  "local-agent": "Local Medicare Agent",
  "insurance-agent": "Medicare Insurance Agent",
  "consulting": "Medicare Consulting Services",
  "enrollment": "Medicare Enrollment Assistance",
  "supplement": "Medicare Supplement Plans",
  "brokers": "Medicare Insurance Brokers",
  "broker": "Medicare Insurance Brokers",
};

const PAGE_TYPE_CTA: Record<LocalPageConfig["pageType"], string> = {
  "agent": "Speak with a Local Agent",
  "local-agent": "Speak with a Local Agent",
  "insurance-agent": "Get a Free Quote",
  "consulting": "Schedule Free Consulting Session",
  "enrollment": "Get Enrollment Assistance",
  "supplement": "Compare Supplement Plans Free",
  "brokers": "Speak with a Local Broker",
  "broker": "Speak with a Local Broker",
};

const DEFAULT_SERVICES = [
  "Medicare Advantage plan comparison",
  "Medigap / Medicare Supplement enrollment",
  "Part D prescription drug plan selection",
  "Original Medicare explanation and guidance",
  "Annual plan review and cost analysis",
  "Enrollment timing and penalty avoidance",
  "Doctor and hospital network verification",
  "Drug formulary review for your medications",
];

export default function LocalAgentPage({ config }: { config: LocalPageConfig }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const typeLabel = PAGE_TYPE_LABELS[config.pageType];
  const ctaLabel = PAGE_TYPE_CTA[config.pageType];

  const testimonials = config.testimonials ?? [
    {
      name: "Sandra M.",
      location: config.cityFull,
      text: `I had no idea where to start with Medicare. Greg walked me through everything step by step and found me a plan that covers my doctors and costs less than I expected. Highly recommend.`,
    },
    {
      name: "Thomas R.",
      location: config.cityFull,
      text: `They saved me over $1,200 a year by switching my Medigap plan to a different carrier with identical coverage. The whole process took about 20 minutes.`,
    },
  ];

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
                <span className="text-white">{typeLabel} {config.city}</span>
              </nav>
              <div className="inline-block bg-[#f5a800] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                {config.cityFull}
              </div>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                {config.headline}
              </h1>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                {config.subheadline}
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/free-consultation"
                  className="inline-flex items-center justify-center gap-2 bg-[#f5a800] text-white font-bold px-6 py-3 rounded-lg hover:bg-amber-400 transition-colors"
                >
                  {ctaLabel}
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
              <div className="font-bold text-white mb-4">Why Choose an Independent Agent?</div>
              <ul className="space-y-3">
                {[
                  `We represent 17+ carriers, not just one`,
                  `Our advice is free, your premium is unchanged`,
                  `We know ${config.city} doctors and hospital networks`,
                  `Annual reviews to keep your plan optimized`,
                  `Local office in Brandon, serving ${config.county}`,
                  `Licensed, independent, and no-pressure`,
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

            {/* Services */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Medicare Services in {config.city}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Medicare Information Project provides free, independent Medicare guidance to residents of {config.city} and the surrounding {config.county} communities. We are not employed by any insurance company, which means our recommendations are based entirely on what is best for you.
              </p>
              {config.bodyText && (
                <p className="text-gray-700 leading-relaxed mb-6">
                  {config.bodyText}
                </p>
              )}
              <div className="grid sm:grid-cols-2 gap-3">
                {DEFAULT_SERVICES.map((service) => (
                  <div key={service} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{service}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Local Section */}
            {(config.nearbyLandmarks || config.neighborhoods) && (
              <section className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">
                  Serving {config.city} and Surrounding Areas
                </h2>
                {config.nearbyLandmarks && config.nearbyLandmarks.length > 0 && (
                  <>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We help {config.city} residents navigate Medicare coverage at local healthcare facilities including:
                    </p>
                    <ul className="space-y-1 mb-4">
                      {config.nearbyLandmarks.map((lm) => (
                        <li key={lm} className="flex items-center gap-2 text-gray-700 text-sm">
                          <MapPin className="w-3.5 h-3.5 text-[#1a3fa8] flex-shrink-0" />
                          {lm}
                        </li>
                      ))}
                    </ul>
                  </>
                )}
                {config.neighborhoods && config.neighborhoods.length > 0 && (
                  <>
                    <p className="text-gray-700 text-sm mb-3">Areas and ZIP codes served:</p>
                    <div className="flex flex-wrap gap-2">
                      {config.neighborhoods.map((n) => (
                        <span key={n} className="bg-white border border-blue-200 text-[#1a3fa8] text-xs font-medium px-3 py-1 rounded-full">
                          {n}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </section>
            )}

            {/* Testimonials */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                What {config.city} Clients Say
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {testimonials.map(({ name, location, text }) => (
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
                {config.faqs.map((faq, i) => (
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
                  src={config.agent?.photoUrl ?? "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png"}
                  alt={`${config.agent?.name ?? "Greg Wohl"}, Licensed Medicare Agent`}
                  className="w-20 h-20 rounded-full object-cover object-top flex-shrink-0"
                  style={{ border: "3px solid #f5a800" }}
                />
              </div>
              <div className="font-bold text-lg mb-0.5">{config.agent?.name ?? "Greg Wohl"}</div>
              <div className="text-blue-300 text-sm mb-4">{config.agent?.title ?? "Licensed Medicare Agent"}, {config.agent?.location ?? "Brandon FL"}</div>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">
                Serving {config.city} and {config.county} for over 22 years. Free consultations, no pressure.
              </p>
              <Link
                href="/free-consultation"
                className="block text-center bg-[#f5a800] text-white font-bold px-4 py-3 rounded-lg hover:bg-amber-400 transition-colors mb-3"
              >
                {ctaLabel}
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
                {config.relatedLinks.map(({ label, href }) => (
                  <li key={href}>
                    <Link href={href} className="text-[#1a3fa8] hover:underline text-sm">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

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

            <div className="bg-white rounded-xl p-5 border border-gray-200">
              <div className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Our Office</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#1a3fa8] mt-0.5 flex-shrink-0" />
                  <span>Brandon, FL 33511<br />(Serving all of {config.county})</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#1a3fa8] flex-shrink-0" />
                  <a href="tel:8136995559" className="hover:text-[#1a3fa8]">813-699-5559</a>
                </div>
                <div className="flex items-start gap-2">
                  <Clock className="w-4 h-4 text-[#1a3fa8] mt-0.5 flex-shrink-0" />
                  <span>Mon-Fri: 9am to 5pm<br />Sat: By appointment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-[#0d2260] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
            Ready to Find the Right Medicare Plan in {config.city}?
          </h2>
          <p className="text-blue-200 mb-6">
            Free consultations by phone, video, or in person. No pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/free-consultation"
              className="inline-flex items-center justify-center bg-[#f5a800] text-white font-bold px-8 py-3 rounded-lg hover:bg-amber-400 transition-colors"
            >
              {ctaLabel}
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
