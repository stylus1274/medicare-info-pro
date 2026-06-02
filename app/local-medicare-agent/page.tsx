import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Local Medicare Agent in Brandon, FL | Medicare Information Project",
  description: "Find a trusted local Medicare agent in Brandon and across Hillsborough County, FL. Independent, unbiased guidance from licensed agents who know your community.",
  alternates: { canonical: "https://medicareinfopro.com/local-medicare-agent/" },
};

const cities = [
  { name: "Brandon", href: "/local-medicare-agent-brandon" },
  { name: "Apollo Beach", href: "/local-medicare-agent-apollo-beach" },
  { name: "Riverview", href: "/local-medicare-agent-riverview" },
  { name: "Sun City", href: "/local-medicare-agent-sun-city" },
  { name: "Temple Terrace", href: "/local-medicare-agent-temple-terrace" },
  { name: "Valrico", href: "/local-medicare-agent-valrico" },
  { name: "Plant City", href: "/local-medicare-agent-plant-city" },
  { name: "Ruskin", href: "/medicare-agent-ruskin" },
  { name: "Wimauma", href: "/medicare-agent-wimauma" },
  { name: "Gibsonton", href: "/medicare-insurance-agent-gibsonton-fl" },
  { name: "Seffner", href: "/medicare-insurance-agent-seffner-fl" },
  { name: "Lithia", href: "/medicare-insurance-agent-lithia-fl" },
];

const benefits = [
  {
    icon: "🏠",
    title: "Truly Local",
    desc: "Our agents live and work in Hillsborough County. We know the local hospitals, provider networks, and plan availability in your ZIP code.",
  },
  {
    icon: "⚖️",
    title: "Completely Independent",
    desc: "We represent 17+ insurance carriers and have no financial incentive to steer you toward any particular plan. Our only goal is your best outcome.",
  },
  {
    icon: "💰",
    title: "Always Free",
    desc: "Our services cost you nothing. Insurance carriers compensate us when you enroll, and your premium is the same whether you work with us or apply directly.",
  },
  {
    icon: "📅",
    title: "Year-Round Support",
    desc: "Our relationship does not end when you enroll. We are available year-round for plan reviews, billing questions, and coverage changes.",
  },
];

const steps = [
  {
    num: "01",
    title: "Schedule a Consultation",
    desc: "Call us at 813-699-5559 or request a free consultation online. We offer in-person, phone, and video appointments.",
  },
  {
    num: "02",
    title: "Review Your Options",
    desc: "We compare every Medicare plan available in your area side by side, verify your doctors are in-network, and check your prescriptions.",
  },
  {
    num: "03",
    title: "Enroll with Confidence",
    desc: "We handle the paperwork and enrollment process for you, making sure everything is submitted correctly and on time.",
  },
  {
    num: "04",
    title: "Ongoing Support",
    desc: "We review your plan every year during Annual Enrollment and are available whenever questions or issues arise.",
  },
];

export default function LocalMedicareAgentPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#0d1f5c] relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 py-20">
          <nav className="text-sm text-blue-200 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Local Medicare Agent</span>
          </nav>
          <div className="inline-flex items-center gap-2 bg-[#f5a800]/20 border border-[#f5a800]/40 rounded-full px-4 py-1.5 mb-6">
            <span className="text-[#f5a800] text-sm font-semibold">Hillsborough County, FL</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Your Trusted Local Medicare Agent in Brandon, FL
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mb-8 leading-relaxed">
            Navigating Medicare is one of the most important financial decisions you will make in retirement. Our independent, local agents serve Brandon and all of Hillsborough County with unbiased guidance, no pressure, and no cost to you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/free-consultation"
              className="inline-flex items-center justify-center gap-2 bg-[#f5a800] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#e09600] transition-colors text-lg"
            >
              Get Free Consultation
            </Link>
            <a
              href="tel:8136995559"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              813-699-5559
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0d1f5c] mb-10 text-center">Why Choose a Local Medicare Agent?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <div className="text-3xl mb-3">{b.icon}</div>
                <h3 className="text-lg font-bold text-[#0d1f5c] mb-2">{b.title}</h3>
                <p className="text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-[#0d1f5c] mb-6">Personalized Service in Your Community</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                At Medicare Information Project, we offer personalized attention to each client in Brandon and across Hillsborough County. As your local Medicare agent, we understand the specific healthcare landscape of our community and tailor our recommendations to your individual circumstances.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Medicare plans vary by region, and being based in Brandon means we have in-depth knowledge of the plans, provider networks, and carrier availability in your ZIP code. You get accurate, relevant information rather than generic national comparisons.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We believe in building lasting relationships. Many of our clients have been with us for years, returning each Annual Enrollment Period for a plan review and calling us whenever questions arise. Learn more about our team on the <Link href="/advisors" className="text-[#0d1f5c] font-semibold underline hover:text-[#f5a800] transition-colors">advisors page</Link>.
              </p>
              <Link
                href="/about-us"
                className="inline-flex items-center gap-2 text-[#0d1f5c] font-semibold hover:text-[#f5a800] transition-colors"
              >
                About Medicare Information Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="bg-[#0d1f5c] rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-6">What We Believe</h3>
              <ul className="space-y-4">
                {[
                  "Every beneficiary deserves unbiased guidance",
                  "Education should come before enrollment",
                  "Transparency builds lasting trust",
                  "Local knowledge matters for local decisions",
                  "Our job does not end when you enroll",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#f5a800] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-blue-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0d1f5c] mb-10 text-center">How It Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.num} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center">
                <div className="text-4xl font-black text-[#f5a800] mb-3">{s.num}</div>
                <h3 className="text-base font-bold text-[#0d1f5c] mb-2">{s.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-[#0d1f5c] mb-4 text-center">We Serve All of Hillsborough County</h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto mb-10">
            Our local Medicare agents serve communities throughout Hillsborough County and the greater Tampa Bay area. Find your city below for local-specific information.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {cities.map((c) => (
              <Link
                key={c.name}
                href={c.href}
                className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 hover:border-[#0d1f5c] hover:bg-blue-50 transition-colors group"
              >
                <span className="text-[#0d1f5c] font-medium text-sm">{c.name}</span>
                <svg className="w-4 h-4 text-gray-400 group-hover:text-[#0d1f5c] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-[#0d1f5c] mb-6">Related Medicare Resources</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "What Is Medicare?", href: "/what-is-medicare" },
              { label: "Do I Need Medicare?", href: "/do-i-need-medicare" },
              { label: "Turning 65 Guide", href: "/turning-65-and-becoming-eligible-for-medicare" },
              { label: "Medicare Supplement Plans", href: "/medicare-supplement" },
              { label: "Medicare Advantage Florida", href: "/medicare-advantage-florida" },
              { label: "Medicare Penalty Calculator", href: "/medicare-penalty-calculator" },
            ].map((r) => (
              <Link
                key={r.label}
                href={r.href}
                className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3 hover:border-[#0d1f5c] transition-colors group"
              >
                <svg className="w-4 h-4 text-[#f5a800] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
                <span className="text-[#0d1f5c] font-medium text-sm">{r.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0d1f5c] py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Talk to a Local Medicare Agent?</h2>
          <p className="text-blue-100 mb-8 text-lg">
            Get clear, unbiased answers from a licensed agent who knows your community. No pressure, no cost, ever.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/free-consultation"
              className="inline-flex items-center justify-center gap-2 bg-[#f5a800] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#e09600] transition-colors text-lg"
            >
              Schedule Free Consultation
            </Link>
            <a
              href="tel:8136995559"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 7V5z" />
              </svg>
              813-699-5559
            </a>
          </div>
          <p className="text-blue-300 text-sm mt-6">
            We are licensed insurance agents, not employees of Medicare or any government agency. Our services are always free to you.
          </p>
        </div>
      </section>
    </main>
  );
}
