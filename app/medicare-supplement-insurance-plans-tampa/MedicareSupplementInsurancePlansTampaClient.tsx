"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronDown, ChevronUp, Phone, MapPin, CheckCircle, Clock } from "lucide-react";

const PLANS = [
  {
    name: "Plan G",
    tag: "Most Popular",
    tagColor: "bg-[#f5a800] text-white",
    highlight: true,
    covers: [
      "Part A coinsurance and hospital costs",
      "Part B coinsurance (20% after deductible)",
      "Part A hospice care coinsurance",
      "Skilled nursing facility coinsurance",
      "Part A deductible ($1,736 in 2026)",
      "Foreign travel emergency (80%)",
    ],
    notCovered: ["Part B deductible ($283 in 2026)"],
    note: "Plan G covers everything Plan F covers except the Part B deductible. For most new enrollees, Plan G offers the best value.",
  },
  {
    name: "Plan N",
    tag: "Budget-Friendly",
    tagColor: "bg-blue-100 text-blue-800",
    highlight: false,
    covers: [
      "Part A coinsurance and hospital costs",
      "Part B coinsurance (with copays)",
      "Part A hospice care coinsurance",
      "Skilled nursing facility coinsurance",
      "Part A deductible",
      "Foreign travel emergency (80%)",
    ],
    notCovered: ["Part B deductible", "Part B excess charges", "Up to $20 office visit copay", "Up to $50 ER copay"],
    note: "Plan N has lower premiums than Plan G. Good for healthy enrollees who rarely see specialists.",
  },
  {
    name: "Plan A",
    tag: "Basic",
    tagColor: "bg-gray-100 text-gray-700",
    highlight: false,
    covers: [
      "Part A coinsurance and hospital costs",
      "Part B coinsurance (20%)",
      "Part A hospice care coinsurance",
    ],
    notCovered: ["Part A deductible", "Skilled nursing coinsurance", "Part B deductible", "Foreign travel"],
    note: "Covers only the core benefits. Most enrollees find Plan G or N to be better value.",
  },
  {
    name: "High-Deductible Plan G",
    tag: "Lowest Premium",
    tagColor: "bg-green-100 text-green-800",
    highlight: false,
    covers: [
      "Same benefits as Plan G after deductible",
      "2026 deductible: $2,870",
    ],
    notCovered: ["All costs until deductible is met"],
    note: "Lowest monthly premium of any Medigap plan. Best for very healthy enrollees who want catastrophic protection.",
  },
];

const FAQS = [
  {
    q: "What is the difference between Medicare Supplement and Medicare Advantage?",
    a: "Medicare Supplement (Medigap) works alongside Original Medicare to cover your out-of-pocket costs like deductibles and coinsurance. You keep Original Medicare and can see any doctor in the country who accepts Medicare. Medicare Advantage replaces Original Medicare with a private plan that typically uses networks. Medigap generally offers more flexibility; Advantage often includes extra benefits like dental and vision.",
  },
  {
    q: "When is the best time to enroll in a Medigap plan?",
    a: "The best time is during your Medigap Open Enrollment Period, which is the 6-month window that starts when you are both 65 and enrolled in Part B. During this window, insurers cannot deny you coverage or charge more based on your health history. After this window closes, you may be subject to medical underwriting.",
  },
  {
    q: "Can I be denied a Medigap plan in Florida?",
    a: "During your Medigap Open Enrollment Period, no. Insurers must accept you regardless of health conditions. Outside of that window, most insurers can use medical underwriting and may deny coverage or charge higher premiums based on your health history. Florida does have some additional protections, which we explain during consultations.",
  },
  {
    q: "Does Medigap cover prescription drugs?",
    a: "No. Medigap plans do not include prescription drug coverage. You need a separate Part D drug plan to cover prescriptions. We help you choose both a Medigap plan and a Part D plan that work together.",
  },
  {
    q: "How much does a Medigap Plan G cost in Tampa?",
    a: "Premiums vary by carrier, age, gender, and tobacco use. In the Tampa area, Plan G premiums for a 65-year-old non-smoker typically range from about $120 to $200 per month. We compare rates from all carriers available in your ZIP code to find the best price for the same coverage.",
  },
  {
    q: "Can I switch Medigap plans later?",
    a: "Yes, but outside of your Open Enrollment Period you will likely need to pass medical underwriting. If you are in good health, switching to save money on premiums is often possible. We review your current plan and compare it to alternatives every year during our annual review process.",
  },
];

const TAMPA_SUPPLEMENT_CALLBACK_HREF = "/local-consultation?city=Tampa&service=Medicare%20Supplement%20plan%20comparison&source=%2Fmedicare-supplement-insurance-plans-tampa%2F";


const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Supplement Insurance Plans in Tampa, FL",
  "url": "https://medicareinfopro.com/medicare-supplement-insurance-plans-tampa",
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
  "@type": "InsuranceAgency",
  "@id": "https://medicareinfopro.com/#insuranceagency",
  "name": "Medicare Information Pro",
  "description": "Licensed Medicare insurance specialists serving Tampa, FL.",
  "url": "https://medicareinfopro.com/medicare-supplement-insurance-plans-tampa",
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
    { "@type": "AdministrativeArea", "name": "Hillsborough County" }
  ],
  "geo": { "@type": "GeoCoordinates", "latitude": 27.9378, "longitude": -82.2859 },
  "openingHoursSpecification": [{ "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], "opens": "09:00", "closes": "17:00" }],
  "priceRange": "$0 consultation",
  "serviceType": "Medicare Insurance Consulting",
  "parentOrganization": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  }
} as const;

export default function MedicareSupplementInsurancePlansTampaClient() {
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
                <span className="text-white">Medicare Supplement Plans Tampa</span>
              </nav>
              <div className="inline-block bg-[#f5a800] text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                Tampa, FL
              </div>
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
                Medicare Supplement Insurance Plans in Tampa, FL
              </h1>
              <p className="text-blue-200 text-lg leading-relaxed mb-6">
                Original Medicare leaves gaps. A Medigap plan fills them. We help Tampa residents compare every supplement plan available in their ZIP code and enroll in the one that fits their budget and health needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href={TAMPA_SUPPLEMENT_CALLBACK_HREF}
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
              <div className="font-bold text-white mb-4">Why Medigap Matters</div>
              <div className="space-y-3">
                {[
                  { label: "Part A deductible (2026)", value: "$1,736 per benefit period" },
                  { label: "Part B coinsurance", value: "20% of all outpatient costs" },
                  { label: "Skilled nursing days 21-100", value: "$212/day in 2026" },
                  { label: "With Plan G", value: "All of the above: $0" },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between items-center py-2 border-b border-white/10 last:border-0">
                    <span className="text-blue-200 text-sm">{label}</span>
                    <span className="text-white font-semibold text-sm">{value}</span>
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
          <div className="lg:col-span-2 space-y-12">

            {/* Plan Comparison */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Medigap Plans Available in Tampa
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                All Medigap plans with the same letter offer identical benefits regardless of which insurance company sells them. The only difference between carriers is price and customer service. Here are the most commonly chosen plans in the Tampa area:
              </p>
              <div className="space-y-4">
                {PLANS.map((plan) => (
                  <div
                    key={plan.name}
                    className={`rounded-xl border p-5 ${plan.highlight ? "border-[#1a3fa8] bg-blue-50" : "border-gray-200 bg-gray-50"}`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`font-bold text-lg ${plan.highlight ? "text-[#1a3fa8]" : "text-gray-900"}`}>
                        Medigap {plan.name}
                      </div>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${plan.tagColor}`}>
                        {plan.tag}
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4 mb-3">
                      <div>
                        <div className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-2">Covers</div>
                        <ul className="space-y-1">
                          {plan.covers.map((item) => (
                            <li key={item} className="flex items-start gap-1.5 text-sm text-gray-700">
                              <CheckCircle className="w-3.5 h-3.5 text-green-600 mt-0.5 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-red-600 uppercase tracking-wide mb-2">Does Not Cover</div>
                        <ul className="space-y-1">
                          {plan.notCovered.map((item) => (
                            <li key={item} className="flex items-start gap-1.5 text-sm text-gray-600">
                              <span className="text-red-400 mt-0.5 flex-shrink-0 text-xs">x</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <p className="text-gray-600 text-xs italic">{plan.note}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Open Enrollment */}
            <section className="bg-amber-50 rounded-2xl p-6 border border-amber-200">
              <h2 className="font-serif text-2xl font-bold text-gray-900 mb-3">
                The Medigap Open Enrollment Window
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Your Medigap Open Enrollment Period is the 6-month window that begins the month you are both age 65 and enrolled in Medicare Part B. During this window, insurance companies must sell you any Medigap plan they offer at standard rates, regardless of your health history.
              </p>
              <p className="text-gray-700 leading-relaxed">
                After this window closes, most insurers can use medical underwriting. If you have pre-existing conditions, you may be denied coverage or charged significantly higher premiums. Enrolling during your Open Enrollment Period is almost always the best strategy.
              </p>
            </section>

            {/* Comparison expectations */}
            <section>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                How We Compare Tampa Medigap Options
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { title: "Standardized benefits", text: "In most states, the same Medigap letter offers the same core benefits across insurers. The comparison focuses on the plan letter and your coverage needs." },
                  { title: "Carrier pricing", text: "Premiums, household discounts, rating methods, and future rate history can differ by carrier, even when core plan benefits are standardized." },
                  { title: "Enrollment timing", text: "Your six-month Medigap Open Enrollment Period and any guaranteed issue rights can affect which policies are available without medical underwriting." },
                ].map(({ title, text }) => (
                  <div key={title} className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                    <CheckCircle className="w-5 h-5 text-green-600 mb-3" />
                    <div className="font-semibold text-gray-900 text-sm mb-2">{title}</div>
                    <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
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
              <div className="text-blue-300 text-sm mb-4">Licensed Medicare Agent, Brandon FL</div>
              <p className="text-blue-100 text-sm leading-relaxed mb-5">
                I compare Medigap rates from 17+ carriers to find the best price for the coverage you need. Free, no pressure.
              </p>
              <Link
                href={TAMPA_SUPPLEMENT_CALLBACK_HREF}
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
              <div className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">Related Pages</div>
              <ul className="space-y-2">
                {[
                  { label: "Do I Need a Supplement?", href: "/do-i-need-a-supplement" },
                  { label: "Medigap Open Enrollment", href: "/medigap-open-enrollment" },
                  { label: "Plan G Complete Guide", href: "/plan-g-complete-guide" },
                  { label: "Medicare Insurance Agent Tampa FL", href: "/medicare-insurance-agent-tampa-fl" },
                  { label: "Plan Comparison Tool", href: "/plan-comparison" },
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

      <section className="bg-[#0d2260] py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-3">
            Find the Best Medigap Rate in Tampa
          </h2>
          <p className="text-blue-200 mb-6">
            We compare rates from 17+ carriers. Same coverage, lowest price. Free, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href={TAMPA_SUPPLEMENT_CALLBACK_HREF}
              className="inline-flex items-center justify-center bg-[#f5a800] text-white font-bold px-8 py-3 rounded-lg hover:bg-amber-400 transition-colors"
            >
              Compare Plans Free
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
