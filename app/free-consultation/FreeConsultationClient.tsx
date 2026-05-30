"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle, Phone, Clock, Shield, Star, Users, Award, MapPin, ChevronRight } from "lucide-react";

const TRUST_ITEMS = [
  { icon: Shield, text: "Licensed & Independent", sub: "We work for you, not the insurance companies" },
  { icon: Award, text: "No Cost, No Obligation", sub: "Our advice is 100% free. You never pay us directly." },
  { icon: Users, text: "Local Brandon Advisors", sub: "We live and work in Hillsborough County" },
  { icon: Clock, text: "Same-Day Appointments", sub: "Phone, Zoom, or in-person at our Brandon office" },
];

const WHAT_WE_COVER = [
  "Which Medicare plan type is right for your health needs",
  "How to avoid costly late enrollment penalties",
  "Original Medicare vs. Medicare Advantage: the real tradeoffs",
  "Whether a Medigap supplement makes sense for your situation",
  "How to get prescription drug coverage that fits your medications",
  "What changes in 2026 affect your current or future coverage",
  "How your income affects your Part B and Part D premiums (IRMAA)",
  "Coordination with employer coverage if you are still working",
];

const TESTIMONIALS = [
  {
    name: "Sandra M.",
    location: "Brandon, FL",
    stars: 5,
    text: "Greg walked me through everything in plain English. I had no idea how many options I had. He saved me over $200 a month compared to what I almost signed up for on my own.",
  },
  {
    name: "Robert & Carol T.",
    location: "Riverview, FL",
    stars: 5,
    text: "We were completely overwhelmed turning 65. One call with the team and everything clicked. They compared plans side by side and never pressured us. Highly recommend.",
  },
  {
    name: "Patricia H.",
    location: "Valrico, FL",
    stars: 5,
    text: "I switched from a plan I had for years and saved $1,400 annually. I wish I had called sooner. The consultation took less than 30 minutes.",
  },
];

export default function FreeConsultationClient() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", zip: "", message: "", bestTime: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    return e;
  }

  function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSubmitted(true);
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#1a2e5a] text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f5a623]/20 text-[#f5a623] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
                <Phone className="w-3.5 h-3.5" /> Free, No-Obligation Consultation
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5">
                Get Expert Medicare Guidance — At No Cost to You
              </h1>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">
                Choosing the wrong Medicare plan can cost thousands of dollars a year. Our licensed advisors in Brandon help you compare every option available in your zip code and find the plan that fits your health, budget, and doctors.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:8136995559"
                  className="inline-flex items-center justify-center gap-2 bg-[#f5a623] hover:bg-[#e09510] text-white font-bold px-6 py-3.5 rounded-lg transition-colors text-lg"
                >
                  <Phone className="w-5 h-5" /> Call 813-699-5559
                </a>
                <a
                  href="#consultation-form"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold px-6 py-3.5 rounded-lg transition-colors"
                >
                  Request a Callback <ChevronRight className="w-4 h-4" />
                </a>
              </div>
              <p className="mt-4 text-sm text-blue-200">
                Available Mon-Fri 9am-6pm and Sat 10am-2pm. Same-day appointments available.
              </p>
            </div>

            {/* Quick trust badges */}
            <div className="grid grid-cols-2 gap-4">
              {TRUST_ITEMS.map(({ icon: Icon, text, sub }) => (
                <div key={text} className="bg-white/10 backdrop-blur rounded-xl p-5 border border-white/20">
                  <Icon className="w-7 h-7 text-[#f5a623] mb-3" />
                  <div className="font-bold text-white text-sm mb-1">{text}</div>
                  <div className="text-blue-200 text-xs leading-snug">{sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What we cover + Form */}
        <section id="consultation-form" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12">
            {/* Left: what we cover */}
            <div>
              <h2 className="text-2xl font-extrabold text-[#1a2e5a] mb-2">What We Cover in Your Consultation</h2>
              <p className="text-gray-600 mb-6">
                A typical consultation takes 20 to 40 minutes. We review your situation, explain your options clearly, and give you a specific recommendation — with no pressure to enroll.
              </p>
              <ul className="space-y-3 mb-8">
                {WHAT_WE_COVER.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#f5a623] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-snug">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Office info */}
              <div className="bg-[#1a2e5a] text-white rounded-xl p-5">
                <div className="flex items-start gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-[#f5a623] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm">Brandon Office</div>
                    <div className="text-blue-200 text-sm">915 Oakfield Dr Suite A, Brandon, FL 33511</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#f5a623] flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm">Call or Text</div>
                    <div className="text-blue-200 text-sm">813-699-5559 | TTY 800-955-8770</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              {submitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-extrabold text-[#1a2e5a] mb-2">Request Received!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you, {form.name.split(" ")[0]}. One of our licensed advisors will reach out within one business day — usually much sooner.
                  </p>
                  <p className="text-sm text-gray-500">
                    Need to speak with someone right away? Call <a href="tel:8136995559" className="text-[#1a2e5a] font-bold">813-699-5559</a>.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-extrabold text-[#1a2e5a] mb-1">Request Your Free Consultation</h2>
                  <p className="text-gray-500 text-sm mb-6">We will reach out within one business day. Fields marked * are required.</p>
                  <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name *</label>
                      <input
                        type="text"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        placeholder="Jane Smith"
                        className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e5a] ${errors.name ? "border-red-400" : "border-gray-300"}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Email *</label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          placeholder="jane@example.com"
                          className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e5a] ${errors.email ? "border-red-400" : "border-gray-300"}`}
                        />
                        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Phone *</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                          placeholder="813-555-0100"
                          className={`w-full border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e5a] ${errors.phone ? "border-red-400" : "border-gray-300"}`}
                        />
                        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Zip Code</label>
                        <input
                          type="text"
                          value={form.zip}
                          onChange={e => setForm(f => ({ ...f, zip: e.target.value }))}
                          placeholder="33511"
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e5a]"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Best Time to Call</label>
                        <select
                          value={form.bestTime}
                          onChange={e => setForm(f => ({ ...f, bestTime: e.target.value }))}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e5a] bg-white"
                        >
                          <option value="">Any time</option>
                          <option value="morning">Morning (9am-12pm)</option>
                          <option value="afternoon">Afternoon (12pm-4pm)</option>
                          <option value="evening">Evening (4pm-6pm)</option>
                          <option value="saturday">Saturday</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Questions or Notes (optional)</label>
                      <textarea
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        rows={3}
                        placeholder="e.g. Turning 65 in August, currently on employer coverage, take 3 medications..."
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e5a] resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#f5a623] hover:bg-[#e09510] text-white font-bold py-3.5 rounded-lg transition-colors text-base"
                    >
                      Request My Free Consultation
                    </button>
                    <p className="text-xs text-gray-400 text-center">
                      By submitting this form you agree to be contacted by a licensed Medicare advisor. No obligation to enroll.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-extrabold text-[#1a2e5a] text-center mb-2">What Our Clients Say</h2>
            <p className="text-gray-500 text-center mb-10 text-sm">Real reviews from people in Brandon, Riverview, and Valrico</p>
            <div className="grid md:grid-cols-3 gap-6">
              {TESTIMONIALS.map((t) => (
                <div key={t.name} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <div className="flex gap-0.5 mb-3">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#f5a623] text-[#f5a623]" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">"{t.text}"</p>
                  <div className="font-bold text-[#1a2e5a] text-sm">{t.name}</div>
                  <div className="text-gray-400 text-xs">{t.location}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="bg-[#f5a623] py-12">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
              Prefer to Talk Right Now?
            </h2>
            <p className="text-white/90 mb-6">
              Call our Brandon office directly. A licensed advisor answers Mon-Fri 9am-6pm and Sat 10am-2pm.
            </p>
            <a
              href="tel:8136995559"
              className="inline-flex items-center gap-2 bg-white text-[#1a2e5a] font-extrabold px-8 py-4 rounded-xl text-xl hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-6 h-6" /> 813-699-5559
            </a>
            <p className="text-white/70 text-sm mt-4">TTY users: 800-955-8770</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
