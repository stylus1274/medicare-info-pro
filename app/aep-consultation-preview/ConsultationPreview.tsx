"use client";

import { useEffect, useState, type FormEvent } from "react";
import { CalendarDays, Phone, Check, ArrowRight } from "lucide-react";
import styles from "../homepage-aep/homepage-aep.module.css";

export default function ConsultationPreview() {
  const [mode, setMode] = useState<"book" | "callback">("book");
  const [step, setStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [meeting, setMeeting] = useState("Phone");
  const [day, setDay] = useState("Tuesday, October 27");
  const [time, setTime] = useState("10:00 AM");
  useEffect(() => {
    function syncHash() {
      if (window.location.hash === "#callback") { setMode("callback"); setComplete(false); }
      if (window.location.hash === "#consultation") { setMode("book"); setComplete(false); }
    }
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, []);
  function choose(next: "book" | "callback") {
    setMode(next); setStep(1); setComplete(false);
    window.history.replaceState(null, "", next === "callback" ? "#callback" : "#consultation");
  }
  function finish(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setComplete(true);
  }
  return <section id="consultation" className="mip-review-consultation">
    <div className={styles.wrap}>
      <div className="mip-review-grid">
        <div className="mip-review-copy">
          <p className={styles.eyebrow}>LET’S MAKE YOUR NEXT STEP SIMPLE</p>
          <h2>Book a Free Medicare Review.</h2>
          <p>Choose a conversation that fits your schedule. Review your current coverage, prepare for Medicare, or get help comparing the plans we represent.</p>
          <ul className="mip-review-benefits">
            <li><Check size={21} aria-hidden="true" />Phone, video, or a visit to our Brandon office.</li>
            <li><Check size={21} aria-hidden="true" />Your doctors, prescriptions, pharmacies, and costs.</li>
            <li><Check size={21} aria-hidden="true" />A family member or caregiver is welcome to join.</li>
            <li><Check size={21} aria-hidden="true" />No cost for the consultation. No obligation to enroll.</li>
          </ul>
          <div className="mip-review-support">
            <h3>Already a client?</h3>
            <p>For billing, claims, or member-card questions, contact our service team separately.</p>
            <a className={styles.textLink} href="/contact/?service=existing-client">Get Existing-Client Help <ArrowRight size={18} /></a>
          </div>
        </div>
        <div className="mip-review-form">
          <p className="mip-review-demo">REVIEW VERSION: example availability. Forms do not send or save your details.</p>
          <div className="mip-review-toggle" aria-label="Choose how to connect">
            <button type="button" aria-pressed={mode === "book"} onClick={() => choose("book")}><CalendarDays size={18} aria-hidden="true" />Book a review</button>
            <button id="callback" type="button" aria-pressed={mode === "callback"} onClick={() => choose("callback")}><Phone size={18} aria-hidden="true" />Request a callback</button>
          </div>
          <div aria-live="polite">
          {complete ? <div className="mip-review-success" role="status">
            <Check size={30} aria-hidden="true" />
            <h3>{mode === "book" ? "Appointment confirmation preview" : "Callback confirmation preview"}</h3>
            {mode === "book" ? <p>Your selected example: <strong>{day}, {time} Eastern</strong>, by {meeting.toLowerCase()}.</p> : <p>The live confirmation will explain when an MIP team member will call and what happens next.</p>}
            <p><strong>No appointment was booked and no request was sent.</strong> The live flow will use MIP’s approved scheduling, contact, and appointment-paperwork process.</p>
            <button className={styles.secondary} type="button" onClick={() => { setComplete(false); setStep(1); }}>Review the Form Again</button>
          </div> : <>
            <p className="mip-review-step">{mode === "book" ? (step === 1 ? "STEP 1 OF 2 / CHOOSE YOUR APPOINTMENT" : "STEP 2 OF 2 / YOUR CONTACT DETAILS") : "A SIMPLE FIRST CONVERSATION"}</p>
            <h3>{mode === "callback" ? "Let’s start with a call." : step === 1 ? "Choose a time to talk." : "How can we reach you?"}</h3>
            {mode === "book" && step === 1 ? <form onSubmit={event => { event.preventDefault(); setStep(2); }}>
              <label htmlFor="review-meeting">How would you like to meet?</label>
              <select id="review-meeting" value={meeting} onChange={e => setMeeting(e.target.value)}><option>Phone</option><option>Video</option><option>Office appointment</option></select>
              <div className="mip-review-fields">
                <div><label htmlFor="review-day">Example day</label><select id="review-day" value={day} onChange={e => setDay(e.target.value)}><option>Tuesday, October 27</option><option>Wednesday, October 28</option><option>Thursday, October 29</option></select></div>
                <div><label htmlFor="review-time">Example time (Eastern)</label><select id="review-time" value={time} onChange={e => setTime(e.target.value)}><option>10:00 AM</option><option>11:30 AM</option><option>2:00 PM</option></select></div>
              </div>
              <button className={styles.primary + " mip-review-submit"} type="submit">Continue to Your Details <ArrowRight size={18} /></button>
              <p className="mip-review-help">These are sample times, not agent availability. No appointment is reserved.</p>
            </form> : <form onSubmit={finish}>
              {mode === "book" && <p className="mip-review-summary">{day} at {time} Eastern · {meeting} <button type="button" onClick={() => setStep(1)}>Change</button></p>}
              <div className="mip-review-fields">
                <div><label htmlFor="review-name">Name</label><input id="review-name" autoComplete="off" required maxLength={100} /></div>
                <div><label htmlFor="review-phone">Phone</label><input id="review-phone" type="tel" autoComplete="off" required maxLength={25} /></div>
                <div><label htmlFor="review-zip">ZIP code</label><input id="review-zip" inputMode="numeric" pattern="[0-9]{5}" maxLength={5} autoComplete="off" required /></div>
                <div><label htmlFor="review-reason">What can we help with?</label><select id="review-reason" required defaultValue=""><option value="" disabled>Choose one</option><option>Getting started with Medicare</option><option>Annual plan review</option><option>Prescription coverage</option><option>Medicare Supplement options</option><option>Helping a family member</option><option>Something else</option></select></div>
              </div>
              <label className="mip-review-consent"><input type="checkbox" required /><span>I request a call from Medicare Information Project about my Medicare questions. I understand there is no obligation to enroll.</span></label>
              {mode === "book" && <p className="mip-review-help">In the live flow, you will complete any required Scope of Appointment through MIP’s approved process before your consultation.</p>}
              <button className={styles.primary + " mip-review-submit"} type="submit">{mode === "book" ? "Preview Appointment Confirmation" : "Preview Callback Confirmation"} <ArrowRight size={18} /></button>
              <p className="mip-review-help">Use sample details for this review. Do not enter Medicare numbers, Social Security numbers, or medical information. Nothing is submitted.</p>
            </form>}
          </>}
          </div>
        </div>
      </div>
    </div>
    <style>{`
      .mip-review-consultation{padding:66px 0;background:#f3f6fc}
      .mip-review-grid{display:grid;grid-template-columns:1fr 1.05fr;gap:54px;align-items:start}
      .mip-review-copy>p:not(:first-child){color:#52617a;font-size:18px;line-height:1.8}
      .mip-review-benefits{list-style:none;padding:0;margin:25px 0}
      .mip-review-benefits li{display:flex;gap:12px;padding:9px 0;color:#25334c;font-size:17px;line-height:1.65}
      .mip-review-benefits svg{flex-shrink:0;margin-top:4px;color:#1a3fa8}
      .mip-review-support{margin-top:28px;padding:24px;background:white;border-radius:12px;border-left:4px solid #f5a800}
      .mip-review-support p{font-size:16px;color:#52617a}
      .mip-review-support a{margin-top:14px}
      .mip-review-form{background:white;padding:30px;border:1px solid #d9e2ef;border-radius:16px;box-shadow:0 10px 30px #17356b0d;min-width:0}
      .mip-review-demo{background:#fff5d9;color:#604613;font-size:13px;line-height:1.6;padding:11px 14px;border-radius:7px;margin:0 0 20px}
      .mip-review-toggle{display:flex;gap:6px;padding:5px;background:#edf2fb;border-radius:9px;margin-bottom:24px}
      .mip-review-toggle button{display:flex;align-items:center;justify-content:center;gap:7px;flex:1;padding:12px 8px;border:0;background:transparent;color:#0d1f5c;border-radius:6px;font-size:15px;font-weight:700;cursor:pointer;min-height:48px}
      .mip-review-toggle button[aria-pressed=true]{background:#1a3fa8;color:white}
      .mip-review-step{font-size:11px!important;font-weight:800;color:#52617a;letter-spacing:1px;margin-bottom:10px}
      .mip-review-form h3{font-size:26px;margin-bottom:20px}
      .mip-review-form label:not(.mip-review-consent){display:block;font-size:15px;font-weight:700;color:#25334c;margin:0 0 7px}
      .mip-review-form input:not([type=checkbox]),.mip-review-form select{width:100%;min-width:0;border:1px solid #a9b7d0;border-radius:7px;min-height:48px;padding:11px 12px;background:#fff;color:#25334c;font-size:16px;font-family:inherit}
      .mip-review-fields{display:grid;grid-template-columns:1fr 1fr;gap:19px 16px;margin-top:20px}
      .mip-review-submit{width:100%;margin-top:24px;border:0!important;background:#1a3fa8!important;color:#fff!important;cursor:pointer}
      .mip-review-submit:hover{background:#0d1f5c!important}
      .mip-review-help{font-size:13px!important;line-height:1.65;color:#52617a;margin-top:14px}
      .mip-review-consent{display:flex;align-items:flex-start;gap:10px;margin-top:22px;font-size:13px;line-height:1.7;color:#52617a;cursor:pointer}
      .mip-review-consent input{width:19px;height:19px;flex-shrink:0;margin-top:4px;accent-color:#1a3fa8}
      .mip-review-summary{font-size:14px;padding:13px;background:#f3f6fc;border-radius:7px;color:#0d1f5c}
      .mip-review-summary button{font-size:14px;color:#1a3fa8;text-decoration:underline;border:0;background:transparent;padding:4px;cursor:pointer}
      .mip-review-success{background:#f0f7f3;border-radius:10px;padding:24px;color:#244b39}
      .mip-review-success p{font-size:16px;line-height:1.8;margin-bottom:17px}
      .mip-review-form :focus-visible{outline:3px solid #bd7900;outline-offset:4px}
      #callback{scroll-margin-top:160px}
      @media(max-width:950px){.mip-review-grid{grid-template-columns:1fr;gap:30px}.mip-review-consultation{padding:45px 0}}
      @media(max-width:480px){.mip-review-form{padding:22px}.mip-review-fields{grid-template-columns:1fr}.mip-review-toggle button{font-size:13px;gap:5px}.mip-review-toggle svg{width:16px}.mip-review-form h3{font-size:24px}}
    `}</style>
  </section>;
}
