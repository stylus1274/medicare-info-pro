"use client";

/* ==========================================================================
   AboutClient — Next.js App Router
   About Medicare Information Project — mission, team, values, compliance
   Design: navy/gold MIP brand, editorial layout with trust signals
   ========================================================================== */

import Link from "next/link";
import {
  Phone,
  MapPin,
  Shield,
  Award,
  Heart,
  Users,
  CheckCircle,
  ChevronRight,
  Star,
  BookOpen,
  User,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// ─── Data ─────────────────────────────────────────────────────────────────────

const VALUES = [
  {
    icon: Shield,
    title: "Independence",
    body: "We are not captive agents. We represent 17 insurance organizations and recommend the plan that is right for you: not the one that pays the highest commission.",
  },
  {
    icon: BookOpen,
    title: "Education First",
    body: "We believe informed beneficiaries make better decisions. Every conversation starts with education, not a sales pitch. We want you to understand your options before you choose.",
  },
  {
    icon: Heart,
    title: "No-Pressure Guidance",
    body: "Medicare is a big decision. We give you time to think, ask questions, and compare. You will never feel rushed or pressured when working with us.",
  },
  {
    icon: Users,
    title: "Long-Term Relationships",
    body: "Our job does not end when you enroll. We are your Medicare resource year-round: for billing questions, coverage issues, and annual plan reviews.",
  },
  {
    icon: Award,
    title: "Transparency",
    body: "We are upfront about how we are compensated, what plans we represent, and what we cannot help with. You deserve honest answers, not marketing spin.",
  },
  {
    icon: Star,
    title: "Community",
    body: "We are a local Florida business serving our neighbors. We take pride in our BBB A+ rating and the trust our clients place in us year after year.",
  },
];

const STATS = [
  { value: "17+", label: "Insurance carriers represented" },
  { value: "149", label: "Medicare products available" },
  { value: "6", label: "States served" },
  { value: "A+", label: "BBB Rating" },
];

const TEAM_MEMBERS = [
  {
    name: "Greg Wohl",
    slug: "greg-wohl",
    title: "Founder & Licensed Agent",
    license: "FL License # D009743",
    phone: "813-699-5559",
    photo: "https://medicareinfopro.com/wp-content/uploads/2024/06/Our-Team-Gregory-Wohl-.jpeg",
  },
  {
    name: "Jennifer C. Loader-Wohl",
    slug: "jennifer-loader-wohl",
    title: "Licensed Independent Agent",
    license: "FL License # W013380",
    phone: "813-756-1100 x102",
    photo: "https://medicareinfopro.com/wp-content/uploads/2024/06/Our-Team-Jennifer-C.-Loader-Wohl.jpeg",
  },
  {
    name: 'Jose F. Diaz "JD"',
    slug: "jd-diaz",
    title: "Licensed Independent Agent",
    license: "FL License # W613730",
    phone: "813-699-5559",
    photo: "https://medicareinfopro.com/wp-content/uploads/2021/02/jd-photo-225x300-1.jpg",
  },
  {
    name: "Chris Gallimore",
    slug: "chris-gallimore",
    title: "Licensed Independent Agent",
    license: "FL License # P117166",
    phone: "727-504-0554",
    photo: "https://medicareinfopro.com/wp-content/uploads/2024/06/Our-Team-Chris-Gallimore.jpeg",
  },
  {
    name: "Paul Eckstein",
    slug: "paul-eckstein",
    title: "Licensed Independent Agent",
    license: "FL License # A075214",
    phone: "813-756-1100 x106",
    photo: "https://medicareinfopro.com/wp-content/uploads/2024/06/Our-Team-Paul-Eckstein.jpeg",
  },
  {
    name: "Kelly Webb",
    slug: "kelly-webb",
    title: "Licensed Independent Agent",
    license: "FL License # W127785",
    phone: "727-560-8850",
    photo: "https://medicareinfopro.com/wp-content/uploads/2024/06/Our-Team-Kelly-Webb.jpeg",
  },
  {
    name: "Paxton Dement, CFP",
    slug: "paxton-dement",
    title: "Licensed Independent Agent",
    license: "GA License # 564308",
    phone: "678-557-7756",
    photo: "https://medicareinfopro.com/wp-content/uploads/2021/02/paxton-photo-1.jpg",
  },
  {
    name: "Valerie Hall",
    slug: "valerie-justin-hall",
    title: "Licensed Independent Agent",
    license: "FL License # W336278",
    phone: "941-870-3820",
    photo: "https://medicareinfopro.com/wp-content/uploads/2022/05/valerie-headshot-214x300.jpg",
  },
  {
    name: "Mark VanHoesen",
    slug: "mark-vanhoesen",
    title: "Licensed Independent Agent",
    license: "FL License # W16104983",
    phone: "727-272-0943",
    photo: "https://medicareinfopro.com/wp-content/uploads/2024/06/Our-Team-Mark-VanHoesen-2.jpg",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutClient() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-[#0d2260] py-16" aria-label="About page header">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-[#f5a800] text-[#1a3fa8] text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            About Us
          </div>
          <h1 className="font-serif text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Medicare Guidance You Can Trust
          </h1>
          <p className="text-blue-200 text-lg leading-relaxed max-w-2xl mx-auto">
            Medicare Information Project is an independent Medicare insurance agency based in Brandon, Florida. We help seniors across six states navigate Medicare with clarity, confidence, and no pressure.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white" aria-label="Our mission">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[3fr_2fr] gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Medicare is one of the most important financial and healthcare decisions a person will make. Yet most beneficiaries navigate it alone, relying on confusing government websites, misleading TV commercials, or high-pressure sales calls.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We started Medicare Information Project to change that. Our mission is to provide every Medicare beneficiary with the same quality of guidance that was once available only to people with connections in the insurance industry: clear, honest, and completely free.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We are independent agents, which means we represent all major carriers and recommend the plan that is genuinely right for you. We are compensated by insurance companies when you enroll, so our services cost you nothing.
              </p>
            </div>
            <div className="bg-[#1a3fa8] rounded-2xl p-8 text-white">
              <h3 className="font-serif text-xl font-bold mb-4">What We Believe</h3>
              <ul className="space-y-3">
                {[
                  "Every beneficiary deserves unbiased guidance",
                  "Education should come before enrollment",
                  "Transparency builds lasting trust",
                  "Local knowledge matters for local decisions",
                  "Our job does not end when you enroll",
                ].map((belief) => (
                  <li key={belief} className="flex items-start gap-3 text-sm text-blue-100">
                    <CheckCircle className="w-4 h-4 text-[#f5a800] shrink-0 mt-0.5" />
                    {belief}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50" aria-label="Our team">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
              Meet the Team
            </h2>
            <p className="text-gray-600">
              Licensed, independent Medicare specialists who put your needs first.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
            {TEAM_MEMBERS.map((member) => (
              <Link
                key={member.slug}
                href={`/${member.slug}`}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg hover:border-[#1a3fa8] transition-all group"
              >
                {/* Photo */}
                <div className="relative w-full aspect-[4/3] bg-[#e8edf8] overflow-hidden">
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <User className="w-16 h-16 text-[#1a3fa8] opacity-40" />
                    </div>
                  )}
                </div>
                {/* Info */}
                <div className="p-4 flex flex-col flex-1">
                  <h3 className="font-bold text-[#0d1f5c] text-sm leading-tight mb-0.5">{member.name}</h3>
                  <p className="text-xs text-[#1a3fa8] font-medium mb-1">{member.title}</p>
                  <p className="text-xs text-gray-400 mb-3">{member.license}</p>
                  <span className="mt-auto text-xs font-semibold text-[#1a3fa8] group-hover:underline">View Profile →</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="tel:8136995559"
              className="inline-flex items-center gap-2 bg-[#1a3fa8] text-white font-bold px-6 py-3 rounded-xl hover:bg-[#0d2870] transition-colors text-sm"
            >
              <Phone className="w-4 h-4" /> Call Any Agent: 813-699-5559
            </a>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white" aria-label="Our values">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-3">
              Our Values
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto">
              These principles guide every conversation, every recommendation, and every enrollment.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6"
              >
                <div className="w-10 h-10 bg-[#1a3fa8] rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-serif font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="py-12 bg-gray-50 border-t border-gray-100" aria-label="Office information">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">
            Our Office
          </h2>
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white border border-gray-200 rounded-2xl px-8 py-6">
            <div className="flex items-start gap-3 text-left">
              <MapPin className="w-5 h-5 text-[#1a3fa8] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-gray-900">Medicare Information Project</p>
                <p className="text-gray-600 text-sm">915 Oakfield Dr, Suite A</p>
                <p className="text-gray-600 text-sm">Brandon, FL 33511</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-gray-200" />
            <div className="flex flex-col gap-2">
              <a
                href="tel:8136995559"
                className="flex items-center gap-2 text-[#1a3fa8] font-semibold hover:text-blue-800 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" /> 813-699-5559 (local)
              </a>
              <a
                href="tel:8888865840"
                className="flex items-center gap-2 text-[#1a3fa8] font-semibold hover:text-blue-800 transition-colors text-sm"
              >
                <Phone className="w-4 h-4" /> 888-886-5840 (toll-free)
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d2260] py-14" aria-label="Call to action">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-3">
            Ready to Work with Us?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Call us or request a free consultation online. No obligation, no pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8136995559"
              className="flex items-center justify-center gap-2 bg-[#f5a800] text-[#1a3fa8] font-bold text-lg px-8 py-4 rounded-xl hover:bg-amber-400 transition-colors"
            >
              <Phone className="w-5 h-5" /> Call 813-699-5559
            </a>
            <Link
              href="/find-an-agent"
              className="flex items-center justify-center gap-2 bg-white/10 text-white font-semibold text-lg px-8 py-4 rounded-xl hover:bg-white/20 transition-colors border border-white/30"
            >
              Find an Agent <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="p-5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-500 leading-relaxed">
          <p className="font-semibold text-gray-700 mb-1">Compliance Disclosure</p>
          We do not offer every plan available in your area. Currently we represent 17 organizations which offer 149 products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program (SHIP) to get information on all of your options. We are not part of, affiliated with, reviewed, or endorsed by CMS. A non-government entity. Medicare Information Project | 915 Oakfield Dr, Suite A, Brandon, FL 33511 | 813-699-5559.
        </div>
      </div>

      <Footer />
    </div>
  );
}
