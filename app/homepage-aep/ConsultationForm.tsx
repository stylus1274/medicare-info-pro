"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { CalendarDays, Phone, Check, ArrowRight } from "lucide-react";
import { CONTACT_CONSENT, CONSULTATION_REASONS, SERVICE_REASONS, MEETING_TYPES, TIME_PREFERENCES, easternDate, type RequestKind } from "@/lib/consultation";
import { captureLeadAttribution } from "@/lib/lead-attribution";
import styles from "./homepage-aep.module.css";

type Details = { name: string; phone: string; zip: string; email: string; reason: string; consent: boolean; website: string };
const EMPTY: Details = { name: "", phone: "", zip: "", email: "", reason: "", consent: false, website: "" };

export default function ConsultationForm({ service }: { service?: "enrollment" }) {
  const enrollment = service === "enrollment";
  const defaultReason = enrollment ? "Getting started with Medicare" : "";
  const [mode, setMode] = useState<RequestKind>("appointment");
  const [step, setStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [meeting, setMeeting] = useState("Phone");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("No preference");
  const [details, setDetails] = useState<Details>({ ...EMPTY, reason: defaultReason });
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const submitting = useRef(false);
  const feedback = useRef<HTMLDivElement>(null);
  const formHeading = useRef<HTMLHeadingElement>(null);
  const today = easternDate();
  const lastDate = easternDate(new Date(Date.now() + 90 * 86400000));

  useEffect(() => {
    function syncHash() {
      const hash = window.location.hash;
      const next = hash === "#callback" ? "callback" : hash === "#client-help" ? "service" : hash === "#consultation" ? "appointment" : null;
      if (next && !submitting.current) { setMode(next); setStep(1); setComplete(false); setError(""); setDetails(value => ({ ...value, reason: next === "service" ? "" : defaultReason, consent: false })); }
    }
    captureLeadAttribution();
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [defaultReason]);

  useEffect(() => {
    if (complete || error) feedback.current?.focus();
  }, [complete, error]);

  function choose(next: RequestKind) {
    if (submitting.current) return;
    setMode(next); setStep(1); setComplete(false); setError("");
    setDetails(value => ({ ...value, reason: next === "service" ? "" : defaultReason, consent: false }));
    window.history.replaceState(null, "", next === "callback" ? "#callback" : next === "service" ? "#client-help" : "#consultation");
  }

  function continueAppointment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsed = new Date(`${day}T12:00:00Z`);
    if (!day || day < today || day > lastDate || [0, 6].includes(parsed.getUTCDay())) {
      setError("Please choose a weekday within the next 90 days."); return;
    }
    setError(""); setStep(2);
    requestAnimationFrame(() => formHeading.current?.focus());
  }

  async function finish(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting.current) return;
    const digits = details.phone.replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
    if (!/^[2-9]\d{2}[2-9]\d{6}$/.test(digits)) { setError("Please enter a valid 10-digit US phone number."); return; }
    setError(""); setBusy(true); submitting.current = true;
    try {
      const response = await fetch("/api/consultation/", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...details, kind: mode, meeting, date: day, time, page: window.location.pathname, attribution: captureLeadAttribution() }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error(result.error || "Your request could not be sent. Please call 813-699-5559.");
      setComplete(true); setDetails(EMPTY);
      try {
        // Send no names, contact details, ZIPs, reasons, or appointment dates to GA4.
        const analytics = (window as Window & { gtag?: (...args: unknown[]) => void }).gtag;
        if (analytics) analytics("event", mode === "service" ? "client_service_request" : "generate_lead", {
          form_id: enrollment ? "brandon_enrollment_consultation" : "homepage_consultation", request_type: mode,
        });
      } catch { /* Analytics must never interrupt a delivered request. */ }
    } catch (failure) {
      setError(failure instanceof Error ? failure.message : "We could not confirm delivery. Please call 813-699-5559 before submitting again.");
    } finally { setBusy(false); submitting.current = false; }
  }

  function update<K extends keyof Details>(key: K, value: Details[K]) { setDetails(previous => ({ ...previous, [key]: value })); }

  return <section id="consultation" className="mip-review-consultation">
    <div className={styles.wrap}><div className="mip-review-grid">
      <div className="mip-review-copy">
        <p className={styles.eyebrow}>LET’S MAKE YOUR NEXT STEP SIMPLE</p>
        <h2>{enrollment ? "Request Medicare Enrollment Help." : "Request a Free Medicare Review."}</h2>
        <p>{enrollment ? "Tell us where you are in the enrollment process. Our Brandon team can help organize your questions, review your next steps, and compare the plans we represent." : "Tell us when you would like to talk. Review your current coverage, prepare for Medicare, or get help comparing the plans we represent."}</p>
        <ul className="mip-review-benefits">
          <li><Check size={21} aria-hidden="true" />Phone, video, or a visit to our Brandon office.</li>
          <li><Check size={21} aria-hidden="true" />Your doctors, prescriptions, pharmacies, and costs.</li>
          <li><Check size={21} aria-hidden="true" />A family member or caregiver is welcome to join.</li>
          <li><Check size={21} aria-hidden="true" />No cost for the consultation. No obligation to enroll.</li>
        </ul>
        <div className="mip-review-support"><h3>Already a client?</h3>
          <p>For billing, claims, or member-card questions, send a service request so our team knows what you need.</p>
          <a className={styles.textLink} href="#client-help" onClick={() => choose("service")}>Get Existing-Client Help <ArrowRight size={18} /></a>
        </div>
      </div>
      <div className="mip-review-form" aria-busy={busy}>
        <div className="mip-review-toggle" aria-label="Choose how to connect">
          <button type="button" disabled={busy} aria-pressed={mode === "appointment"} onClick={() => choose("appointment")}><CalendarDays size={18} aria-hidden="true" />Request a review</button>
          <button id="callback" type="button" disabled={busy} aria-pressed={mode === "callback"} onClick={() => choose("callback")}><Phone size={18} aria-hidden="true" />Request a callback</button>
        </div>
        {complete ? <div className="mip-review-success" ref={feedback} tabIndex={-1} role="status">
          <Check size={30} aria-hidden="true" /><h3>{mode === "appointment" ? "Appointment Request Received" : mode === "service" ? "Service Request Received" : "Callback Request Received"}</h3>
          {mode === "appointment" ? <><p>Your preference: <strong>{new Date(`${day}T12:00:00Z`).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric", timeZone: "America/New_York" })}</strong>, {time.toLowerCase()} Eastern, by {meeting.toLowerCase()}.</p><p><strong>Your appointment is pending confirmation.</strong> An agent will contact you within one business day to confirm availability and arrange any required appointment paperwork.</p></> : <p>Our team will contact you within one business day about your {mode === "service" ? "service" : "callback"} request.</p>}
          <p>Need help sooner? Call <a href="tel:+18136995559">813-699-5559</a>.</p>
        </div> : <>
          <p className="mip-review-step">{mode === "appointment" ? (step === 1 ? "STEP 1 OF 2 / YOUR PREFERRED APPOINTMENT" : "STEP 2 OF 2 / YOUR CONTACT DETAILS") : mode === "service" ? "EXISTING-CLIENT SUPPORT" : "A SIMPLE FIRST CONVERSATION"}</p>
          <h3 id="client-help" ref={formHeading} tabIndex={-1}>{mode === "callback" ? "Let’s start with a call." : mode === "service" ? "How can our team help?" : step === 1 ? "When would you like to talk?" : "How can we reach you?"}</h3>
          {mode === "appointment" && step === 1 ? <form onSubmit={continueAppointment}>
            <label htmlFor="review-meeting">How would you like to meet?</label>
            <select id="review-meeting" value={meeting} onChange={event => setMeeting(event.target.value)}>{MEETING_TYPES.map(value => <option key={value}>{value}</option>)}</select>
            <div className="mip-review-fields">
              <div><label htmlFor="review-day">Preferred weekday</label><input id="review-day" type="date" min={today} max={lastDate} required value={day} onChange={event => setDay(event.target.value)} /></div>
              <div><label htmlFor="review-time">Preferred time (Eastern)</label><select id="review-time" value={time} onChange={event => setTime(event.target.value)}>{TIME_PREFERENCES.map(value => <option key={value}>{value}</option>)}</select></div>
            </div>
            <p className="mip-review-help">Choose your preference. An agent will confirm availability before your appointment is scheduled.</p>
            <button className={styles.primary + " mip-review-submit"} type="submit">Continue to Your Details <ArrowRight size={18} /></button>
          </form> : <form onSubmit={finish}>
            <fieldset disabled={busy}>
              {mode === "appointment" && <p className="mip-review-summary">{day} · {time}, Eastern · {meeting} <button type="button" onClick={() => { setStep(1); setError(""); }}>Change</button></p>}
              <div className="mip-review-fields">
                <div><label htmlFor="review-name">Name</label><input id="review-name" name="name" autoComplete="name" required minLength={2} maxLength={100} value={details.name} onChange={event => update("name", event.target.value)} /></div>
                <div><label htmlFor="review-phone">Phone</label><input id="review-phone" name="phone" type="tel" autoComplete="tel" required maxLength={25} value={details.phone} onChange={event => update("phone", event.target.value)} /></div>
                <div><label htmlFor="review-zip">ZIP code</label><input id="review-zip" name="zip" inputMode="numeric" pattern="[0-9]{5}" autoComplete="postal-code" maxLength={5} required value={details.zip} onChange={event => update("zip", event.target.value.replace(/\D/g, "").slice(0, 5))} /></div>
                <div><label htmlFor="review-reason">What can we help with?</label><select id="review-reason" name="reason" required value={details.reason} onChange={event => update("reason", event.target.value)}><option value="" disabled>Choose one</option>{(mode === "service" ? SERVICE_REASONS : CONSULTATION_REASONS).map(value => <option key={value}>{value}</option>)}</select></div>
              </div>
              <div className="mip-review-optional"><label htmlFor="review-email">Email (optional)</label><input id="review-email" name="email" type="email" autoComplete="email" maxLength={254} value={details.email} onChange={event => update("email", event.target.value)} /></div>
              <div className="mip-review-honeypot" aria-hidden="true"><label htmlFor="review-website">Leave this field empty</label><input id="review-website" name="website" autoComplete="off" tabIndex={-1} value={details.website} onChange={event => update("website", event.target.value)} /></div>
              <label className="mip-review-consent"><input type="checkbox" required checked={details.consent} onChange={event => update("consent", event.target.checked)} /><span>{CONTACT_CONSENT}</span></label>
              {mode === "appointment" && <p className="mip-review-help">Our team will confirm your appointment and arrange any required Scope of Appointment before your consultation.</p>}
              <button className={styles.primary + " mip-review-submit"} type="submit" disabled={busy}>{busy ? "Sending Your Request..." : mode === "appointment" ? "Request This Appointment" : mode === "service" ? "Send My Service Request" : "Request My Callback"}<ArrowRight size={18} /></button>
              <p className="mip-review-help">Do not enter Medicare numbers, Social Security numbers, or medical details. <a href="/privacy-policy/">Read our Privacy Policy.</a></p>
            </fieldset>
          </form>}
          {error && <div className="mip-review-error" ref={feedback} tabIndex={-1} role="alert">{error}</div>}
        </>}
      </div>
    </div></div>
    <style>{`
      .mip-review-consultation{padding:66px 0;background:#f3f6fc}
      .mip-review-grid{display:grid;grid-template-columns:1fr 1.05fr;gap:54px;align-items:start}
      .mip-review-copy>p:not(:first-child){color:#52617a;font-size:18px;line-height:1.8}
      .mip-review-benefits{list-style:none;padding:0;margin:25px 0}
      .mip-review-benefits li{display:flex;gap:12px;padding:9px 0;color:#25334c;font-size:17px;line-height:1.65}
      .mip-review-benefits svg{flex-shrink:0;margin-top:4px;color:#1a3fa8}
      .mip-review-support{margin-top:28px;padding:24px;background:white;border-radius:12px;border-left:4px solid #f5a800}
      .mip-review-support p{font-size:16px;color:#52617a}.mip-review-support a{margin-top:14px}
      .mip-review-form{background:white;padding:30px;border:1px solid #d9e2ef;border-radius:16px;box-shadow:0 10px 30px #17356b0d;min-width:0}
      .mip-review-toggle{display:flex;gap:6px;padding:5px;background:#edf2fb;border-radius:9px;margin-bottom:24px}
      .mip-review-toggle button{display:flex;align-items:center;justify-content:center;gap:7px;flex:1;padding:12px 8px;border:0;background:transparent;color:#0d1f5c;border-radius:6px;font-size:15px;font-weight:700;cursor:pointer;min-height:48px}
      .mip-review-toggle button[aria-pressed=true]{background:#1a3fa8;color:white}
      .mip-review-form button:disabled{opacity:.6;cursor:wait}
      .mip-review-step{font-size:11px!important;font-weight:800;color:#52617a;letter-spacing:1px;margin-bottom:10px}
      .mip-review-form h3{font-size:26px;margin-bottom:20px}
      .mip-review-form label:not(.mip-review-consent){display:block;font-size:15px;font-weight:700;color:#25334c;margin:0 0 7px}
      .mip-review-form input:not([type=checkbox]),.mip-review-form select{width:100%;min-width:0;border:1px solid #a9b7d0;border-radius:7px;min-height:48px;padding:11px 12px;background:#fff;color:#25334c;font-size:16px;font-family:inherit}
      .mip-review-fields{display:grid;grid-template-columns:1fr 1fr;gap:19px 16px;margin-top:20px}
      .mip-review-optional{margin-top:20px}.mip-review-form fieldset{border:0;padding:0;margin:0;min-width:0}
      .mip-review-honeypot{position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden}
      .mip-review-submit{width:100%;margin-top:24px;border:0!important;background:#1a3fa8!important;color:#fff!important;cursor:pointer}
      .mip-review-submit:hover{background:#0d1f5c!important}
      .mip-review-help{font-size:13px!important;line-height:1.65;color:#52617a;margin-top:14px}
      .mip-review-help a,.mip-review-success a{color:#1a3fa8;text-decoration:underline!important}
      .mip-review-consent{display:flex;align-items:flex-start;gap:10px;margin-top:22px;font-size:13px;line-height:1.7;color:#52617a;cursor:pointer}
      .mip-review-consent input{width:19px;height:19px;flex-shrink:0;margin-top:4px;accent-color:#1a3fa8}
      .mip-review-summary{font-size:14px;padding:13px;background:#f3f6fc;border-radius:7px;color:#0d1f5c}
      .mip-review-summary button{font-size:14px;color:#1a3fa8;text-decoration:underline;border:0;background:transparent;padding:4px;cursor:pointer}
      .mip-review-success{background:#f0f7f3;border-radius:10px;padding:24px;color:#244b39}
      .mip-review-success p{font-size:16px;line-height:1.8;margin-bottom:17px}
      .mip-review-error{margin-top:18px;padding:15px;border-radius:7px;background:#fff1f0;color:#8b2323;font-size:16px}
      .mip-review-form :focus-visible{outline:3px solid #bd7900;outline-offset:4px}
      #callback,#client-help{scroll-margin-top:160px}
      @media(max-width:950px){.mip-review-grid{grid-template-columns:1fr;gap:30px}.mip-review-consultation{padding:45px 0}}
      @media(max-width:480px){.mip-review-form{padding:22px}.mip-review-fields{grid-template-columns:1fr}.mip-review-toggle button{font-size:13px;gap:5px}.mip-review-toggle svg{width:16px}.mip-review-form h3{font-size:24px}}
    `}</style>
  </section>;
}
