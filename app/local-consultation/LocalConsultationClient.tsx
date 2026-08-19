"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CalendarClock, CheckCircle2, MapPin, Phone, ShieldCheck } from "lucide-react";

const HS_PORTAL_ID = "246426534";
const HS_FORM_ID = "1afd1c7a-145b-426b-a40d-f2df27790c75";
const PHONE_DISPLAY = "813-699-5559";
const PHONE_HREF = "tel:8136995559";

type CallbackForm = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  zip: string;
  bestTime: string;
};

function cleanParam(value: string | null, fallback: string, maxLength = 90) {
  const cleaned = (value || "").replace(/[<>]/g, "").trim().slice(0, maxLength);
  return cleaned || fallback;
}

function formatPhone(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function LocalConsultationClient() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<CallbackForm>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    zip: "",
    bestTime: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const context = useMemo(() => ({
    city: cleanParam(searchParams.get("city"), "your area"),
    service: cleanParam(searchParams.get("service"), "Medicare guidance"),
    source: cleanParam(searchParams.get("source"), "direct local callback request", 180),
  }), [searchParams]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!form.firstName.trim() || !form.lastName.trim() || !form.phone.trim() || !form.zip.trim()) {
      setError("Please provide your name, phone number, and ZIP code so we can prepare for your callback.");
      return;
    }

    setSubmitting(true);
    try {
      const fields = [
        { name: "firstname", value: form.firstName.trim() },
        { name: "lastname", value: form.lastName.trim() },
        { name: "phone", value: form.phone.trim() },
        { name: "email", value: form.email.trim() },
        { name: "zip", value: form.zip.trim() },
        { name: "hs_lead_status", value: "NEW" },
        {
          name: "message",
          value: [
            "Local callback request",
            `Service area: ${context.city}`,
            `Requested service: ${context.service}`,
            `Preferred contact time: ${form.bestTime || "No preference"}`,
            `Source page: ${context.source}`,
          ].join("\n"),
        },
      ].filter((field) => field.value !== "");

      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HS_PORTAL_ID}/${HS_FORM_ID}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            fields,
            context: {
              pageUri: window.location.href,
              pageName: `Local callback request: ${context.city}`,
            },
          }),
        },
      );

      if (!response.ok) throw new Error("HubSpot submission failed");
      setSubmitted(true);
    } catch (submissionError) {
      console.error("Local callback submission error:", submissionError);
      setError(`We could not submit your request right now. Please call ${PHONE_DISPLAY} for immediate help.`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main>
        <section className="bg-[#0d2260] py-14 md:py-20">
          <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f5a800]/35 bg-[#f5a800]/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#f5c841]">
                <MapPin className="h-3.5 w-3.5" /> Serving {context.city}
              </div>
              <h1 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
                Request a Local Medicare Callback
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-blue-100">
                Tell us the best time to reach you. A licensed agent will prepare for your {context.service.toLowerCase()} request and contact you directly.
              </p>
              <div className="mt-7 rounded-2xl border border-white/15 bg-white/10 p-5 text-blue-100">
                <div className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 flex-none text-[#f5c841]" />
                  <p className="text-sm leading-relaxed">
                    Independent guidance, no cost to you, and no obligation to enroll. Prefer to speak now? Call us directly.
                  </p>
                </div>
                <a
                  href={PHONE_HREF}
                  className="mt-4 inline-flex items-center gap-2 rounded-lg border border-blue-300 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-blue-900"
                >
                  <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            <section className="rounded-2xl bg-white p-6 shadow-xl md:p-8" aria-labelledby="callback-form-heading">
              {submitted ? (
                <div className="py-8 text-center">
                  <CheckCircle2 className="mx-auto h-14 w-14 text-green-600" />
                  <h2 id="callback-form-heading" className="mt-4 text-2xl font-bold text-[#0d2260]">
                    Your callback request is received.
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    A licensed Medicare agent will contact you at the number you provided. If you need immediate help, call {PHONE_DISPLAY}.
                  </p>
                  <a href={PHONE_HREF} className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#f5a800] px-5 py-3 font-bold text-white transition-colors hover:bg-amber-500">
                    <Phone className="h-4 w-4" /> Call {PHONE_DISPLAY}
                  </a>
                </div>
              ) : (
                <>
                  <div className="flex items-start gap-3">
                    <div className="rounded-full bg-amber-50 p-2 text-[#c77800]"><CalendarClock className="h-5 w-5" /></div>
                    <div>
                      <h2 id="callback-form-heading" className="text-2xl font-bold text-[#0d2260]">Choose your callback time</h2>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">Most requests are answered within one business day.</p>
                    </div>
                  </div>
                  <form className="mt-6 space-y-4" onSubmit={handleSubmit} noValidate>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block text-sm font-semibold text-slate-700">
                        First name *
                        <input
                          value={form.firstName}
                          onChange={(event) => setForm((current) => ({ ...current, firstName: event.target.value }))}
                          autoComplete="given-name"
                          className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-[#1a3fa8] focus:ring-2 focus:ring-[#1a3fa8]/20"
                        />
                      </label>
                      <label className="block text-sm font-semibold text-slate-700">
                        Last name *
                        <input
                          value={form.lastName}
                          onChange={(event) => setForm((current) => ({ ...current, lastName: event.target.value }))}
                          autoComplete="family-name"
                          className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-[#1a3fa8] focus:ring-2 focus:ring-[#1a3fa8]/20"
                        />
                      </label>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="block text-sm font-semibold text-slate-700">
                        Phone number *
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={(event) => setForm((current) => ({ ...current, phone: formatPhone(event.target.value) }))}
                          autoComplete="tel"
                          placeholder="813-555-0100"
                          className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-[#1a3fa8] focus:ring-2 focus:ring-[#1a3fa8]/20"
                        />
                      </label>
                      <label className="block text-sm font-semibold text-slate-700">
                        ZIP code *
                        <input
                          inputMode="numeric"
                          value={form.zip}
                          onChange={(event) => setForm((current) => ({ ...current, zip: event.target.value.replace(/\D/g, "").slice(0, 5) }))}
                          autoComplete="postal-code"
                          placeholder="33511"
                          className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-[#1a3fa8] focus:ring-2 focus:ring-[#1a3fa8]/20"
                        />
                      </label>
                    </div>
                    <label className="block text-sm font-semibold text-slate-700">
                      Email address <span className="font-normal text-slate-500">(optional)</span>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
                        autoComplete="email"
                        className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-[#1a3fa8] focus:ring-2 focus:ring-[#1a3fa8]/20"
                      />
                    </label>
                    <label className="block text-sm font-semibold text-slate-700">
                      Best time to call
                      <select
                        value={form.bestTime}
                        onChange={(event) => setForm((current) => ({ ...current, bestTime: event.target.value }))}
                        className="mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-900 outline-none transition focus:border-[#1a3fa8] focus:ring-2 focus:ring-[#1a3fa8]/20"
                      >
                        <option value="">No preference</option>
                        <option value="Morning, 9 AM to noon">Morning, 9 AM to noon</option>
                        <option value="Afternoon, noon to 4 PM">Afternoon, noon to 4 PM</option>
                        <option value="Late afternoon, 4 PM to 6 PM">Late afternoon, 4 PM to 6 PM</option>
                        <option value="Saturday">Saturday</option>
                      </select>
                    </label>
                    {error && <p className="rounded-lg bg-red-50 p-3 text-sm font-medium text-red-700" role="alert">{error}</p>}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-lg bg-[#f5a800] px-5 py-3.5 font-bold text-white transition-colors hover:bg-amber-500 disabled:cursor-not-allowed disabled:bg-amber-200"
                    >
                      {submitting ? "Sending your callback request..." : "Request My Callback"}
                    </button>
                    <p className="text-center text-xs leading-relaxed text-slate-500">
                      By submitting, you agree to be contacted by a licensed Medicare agent about your request. No obligation to enroll.
                    </p>
                  </form>
                </>
              )}
            </section>
          </div>
        </section>
        <section className="bg-white py-8">
          <div className="mx-auto max-w-4xl px-4 text-center text-sm leading-relaxed text-slate-600 sm:px-6">
            <p>Request from: {context.source}</p>
            <Link href="/" className="mt-3 inline-block font-semibold text-[#1a3fa8] hover:underline">Return to Medicare Information Project</Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
