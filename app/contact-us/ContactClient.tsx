"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, CheckCircle, MessageSquare, Calendar, ChevronRight } from "lucide-react";

const CONTACT_METHODS = [
  {
    icon: Phone,
    title: "Call or Text",
    primary: "813-699-5559",
    secondary: "Toll-free: 888-886-5840",
    tertiary: "TTY: 800-955-8770",
    href: "tel:8136995559",
    color: "#1a2e5a",
  },
  {
    icon: Mail,
    title: "Email Us",
    primary: "info@medicareinfopro.com",
    secondary: "We respond within one business day",
    tertiary: null,
    href: "mailto:info@medicareinfopro.com",
    color: "#1a2e5a",
  },
  {
    icon: MapPin,
    title: "Visit Our Office",
    primary: "915 Oakfield Dr Suite A",
    secondary: "Brandon, FL 33511",
    tertiary: "Free parking available",
    href: "https://maps.google.com/?q=915+Oakfield+Dr+Suite+A+Brandon+FL+33511",
    color: "#1a2e5a",
  },
  {
    icon: Clock,
    title: "Office Hours",
    primary: "Mon-Fri: 9:00am - 6:00pm",
    secondary: "Saturday: 10:00am - 2:00pm",
    tertiary: "Sunday: Closed",
    href: null,
    color: "#1a2e5a",
  },
];

const REASONS = [
  { icon: MessageSquare, label: "General Question", value: "general" },
  { icon: Calendar, label: "Schedule a Consultation", value: "consultation" },
  { icon: Phone, label: "Request a Callback", value: "callback" },
  { icon: ChevronRight, label: "Plan Enrollment Help", value: "enrollment" },
];

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", zip: "", reason: "general", message: "", bestTime: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const HS_PORTAL_ID = "246426534";
  const HS_FORM_ID = "1afd1c7a-145b-426b-a40d-f2df27790c75";

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email is required";
    if (!form.phone.trim()) e.phone = "Phone number is required";
    return e;
  }

  async function handleSubmit(ev: React.FormEvent) {
    ev.preventDefault();
    const e = validate();
    if (Object.keys(e).length > 0) { setErrors(e); return; }
    setSubmitting(true);

    const nameParts = form.name.trim().split(" ");
    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    const reasonLabel = REASONS.find(r => r.value === form.reason)?.label || form.reason;
    const noteLines = [
      `Inquiry Type: ${reasonLabel}`,
      form.bestTime ? `Best Time to Reach: ${form.bestTime}` : "",
      form.message ? `Message: ${form.message}` : "",
    ].filter(Boolean).join("\n");

    const fields = [
      { name: "firstname", value: firstName },
      { name: "lastname", value: lastName },
      { name: "email", value: form.email },
      { name: "phone", value: form.phone },
      { name: "zip", value: form.zip },
      { name: "message", value: noteLines },
    ];

    try {
      await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HS_PORTAL_ID}/${HS_FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ fields, context: { pageUri: window.location.href, pageName: "Contact Us" } }),
        }
      );
    } catch (_) {
      // silently continue — show thank-you regardless
    }

    setSubmitting(false);
    setSubmitted(true);
  }

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#1a2e5a] text-white py-14 md:py-18">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-[#f5a623]/20 text-[#f5a623] text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-5">
              <Phone className="w-3.5 h-3.5" /> Licensed Medicare Advisors in Brandon, FL
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Get Expert Medicare Advice
            </h1>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              Connect with a licensed Medicare advisor at the Medicare Information Project. We serve Brandon, Riverview, Valrico, and all of Hillsborough County.
            </p>
          </div>
        </section>

        {/* Contact methods */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
            {CONTACT_METHODS.map(({ icon: Icon, title, primary, secondary, tertiary, href }) => (
              <div key={title} className="bg-gray-50 rounded-xl p-5 border border-gray-100 hover:border-[#1a2e5a]/30 transition-colors">
                <div className="w-10 h-10 bg-[#1a2e5a]/10 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-[#1a2e5a]" />
                </div>
                <div className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">{title}</div>
                {href ? (
                  <a href={href} className="font-bold text-[#1a2e5a] text-sm hover:text-[#f5a623] transition-colors block leading-snug mb-0.5">
                    {primary}
                  </a>
                ) : (
                  <div className="font-bold text-[#1a2e5a] text-sm leading-snug mb-0.5">{primary}</div>
                )}
                <div className="text-gray-500 text-xs leading-snug">{secondary}</div>
                {tertiary && <div className="text-gray-400 text-xs mt-0.5">{tertiary}</div>}
              </div>
            ))}
          </div>
        </section>

        {/* Form + Map */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-10">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">
              {submitted ? (
                <div className="text-center py-10">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-extrabold text-[#1a2e5a] mb-2">Message Received!</h3>
                  <p className="text-gray-600 mb-4">
                    Thank you, {form.name.split(" ")[0]}. A member of our team will be in touch within one business day.
                  </p>
                  <p className="text-sm text-gray-500">
                    Need to speak with someone right away? Call{" "}
                    <a href="tel:8136995559" className="text-[#1a2e5a] font-bold">813-699-5559</a>.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-extrabold text-[#1a2e5a] mb-1">Send Us a Message</h2>
                  <p className="text-gray-500 text-sm mb-5">Fields marked * are required.</p>

                  {/* Reason selector */}
                  <div className="grid grid-cols-2 gap-2 mb-5">
                    {REASONS.map(({ icon: Icon, label, value }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setForm(f => ({ ...f, reason: value }))}
                        className={`flex items-center gap-2 px-3 py-2.5 rounded-lg border text-sm font-semibold transition-colors ${
                          form.reason === value
                            ? "bg-[#1a2e5a] text-white border-[#1a2e5a]"
                            : "bg-white text-gray-600 border-gray-200 hover:border-[#1a2e5a]/40"
                        }`}
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        <span className="text-xs leading-tight">{label}</span>
                      </button>
                    ))}
                  </div>

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
                        <label className="block text-sm font-semibold text-gray-700 mb-1">Best Time to Reach You</label>
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
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Message (optional)</label>
                      <textarea
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        rows={4}
                        placeholder="Tell us a little about your situation or question..."
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#1a2e5a] resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-[#f5a623] hover:bg-[#e09510] text-white font-bold py-3.5 rounded-lg transition-colors text-base disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? "Sending..." : "Send Message"}
                    </button>
                    <p className="text-xs text-gray-400 text-center leading-relaxed">
                      By submitting this form you consent to be contacted by a licensed insurance agent at Medicare Information Project about Medicare plans and related services. Consent is not a condition of purchase. You may also reach us by phone at 813-699-5559. View our{" "}
                      <a href="/privacy-policy" className="underline">Privacy Policy</a> and{" "}
                      <a href="/terms-and-conditions" className="underline">Terms and Conditions</a>.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Right: map + extra info */}
            <div className="flex flex-col gap-6">
              {/* Embedded map */}
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm" style={{ height: 280 }}>
                <iframe
                  title="Medicare Information Project Brandon Office"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524.0!2d-82.2859!3d27.9389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c6b0b0b0b0b0%3A0x0!2s915+Oakfield+Dr+Suite+A%2C+Brandon%2C+FL+33511!5e0!3m2!1sen!2sus!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Service area */}
              <div className="bg-white rounded-xl border border-gray-100 p-5 shadow-sm">
                <h3 className="font-extrabold text-[#1a2e5a] text-sm mb-3">Areas We Serve</h3>
                <div className="grid grid-cols-3 gap-2">
                  {["Brandon", "Riverview", "Valrico", "Sun City Center", "Wimauma", "Apollo Beach", "Plant City", "Temple Terrace", "Tampa"].map(city => (
                    <div key={city} className="text-xs text-gray-600 bg-gray-50 rounded px-2 py-1.5 text-center font-medium">
                      {city}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick CTA */}
              <div className="bg-[#1a2e5a] text-white rounded-xl p-5">
                <h3 className="font-extrabold text-base mb-1">Prefer to Talk Now?</h3>
                <p className="text-blue-200 text-sm mb-4">
                  Skip the form. Call our Brandon office and speak with a licensed advisor today.
                </p>
                <a
                  href="tel:8136995559"
                  className="inline-flex items-center gap-2 bg-[#f5a623] hover:bg-[#e09510] text-white font-bold px-5 py-2.5 rounded-lg transition-colors text-sm w-full justify-center"
                >
                  <Phone className="w-4 h-4" /> Call 813-699-5559
                </a>
                <p className="text-blue-300 text-xs text-center mt-2">Mon-Fri 9am-6pm, Sat 10am-2pm</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
