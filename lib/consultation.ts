export const CONTACT_CONSENT = "I request a phone call from Medicare Information Project about this request. I understand there is no obligation to purchase or enroll.";

export const CONSULTATION_REASONS = [
  "Getting started with Medicare", "Annual plan review", "Prescription coverage",
  "Medicare Supplement options", "Helping a family member", "Something else",
] as const;
export const SERVICE_REASONS = ["Billing question", "Claims question", "Member card", "Other existing-client help"] as const;
export const MEETING_TYPES = ["Phone", "Video", "Office appointment"] as const;
export const TIME_PREFERENCES = ["Morning (9 AM to noon)", "Afternoon (noon to 5 PM)", "No preference"] as const;
export type RequestKind = "appointment" | "callback" | "service";
export type Attribution = { landingPage: string; referrer: string; utm_source: string; utm_medium: string; utm_campaign: string };

export function easternDate(value = new Date()): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York", year: "numeric", month: "2-digit", day: "2-digit" }).format(value);
}

function text(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().replace(/[\r\n\u0000-\u001f]/g, " ").slice(0, max) : "";
}

export function safePage(value: unknown): string {
  try {
    const url = new URL(typeof value === "string" ? value : "", "https://medicareinfopro.com");
    if (url.origin !== "https://medicareinfopro.com" || url.pathname.length > 250) return "/";
    return url.pathname;
  } catch { return "/"; }
}

export function validateConsultation(raw: Record<string, unknown>, now = new Date()) {
  const kind = raw.kind as RequestKind;
  if (!["appointment", "callback", "service"].includes(kind)) return { error: "Please choose how you would like us to help." };
  const name = text(raw.name, 100);
  const phone = text(raw.phone, 30).replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "");
  const zip = text(raw.zip, 5);
  const email = text(raw.email, 254);
  const reason = text(raw.reason, 100);
  if (name.length < 2) return { error: "Please enter your name." };
  if (!/^[2-9]\d{2}[2-9]\d{6}$/.test(phone)) return { error: "Please enter a valid 10-digit US phone number." };
  if (!/^\d{5}$/.test(zip) || typeof raw.zip !== "string" || raw.zip.trim().length !== 5) return { error: "Please enter a five-digit ZIP code." };
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return { error: "Please check your email address." };
  const reasons: readonly string[] = kind === "service" ? SERVICE_REASONS : CONSULTATION_REASONS;
  if (!reasons.includes(reason)) return { error: "Please select what you need help with." };
  if (raw.consent !== true) return { error: "Please confirm that we may call you about your request." };
  let date = "", time = "", meeting = "";
  if (kind === "appointment") {
    date = text(raw.date, 10); time = text(raw.time, 60); meeting = text(raw.meeting, 30);
    const parsed = new Date(`${date}T12:00:00Z`);
    const lastDate = easternDate(new Date(now.getTime() + 90 * 86400000));
    if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !Number.isFinite(parsed.getTime()) || parsed.toISOString().slice(0, 10) !== date || date < easternDate(now) || date > lastDate || [0, 6].includes(parsed.getUTCDay())) return { error: "Please choose a weekday within the next 90 days." };
    if (!(TIME_PREFERENCES as readonly string[]).includes(time) || !(MEETING_TYPES as readonly string[]).includes(meeting)) return { error: "Please choose a meeting type and preferred time." };
  }
  const attribution = raw.attribution && typeof raw.attribution === "object" ? raw.attribution as Record<string, unknown> : {};
  let referrer = "Direct / unknown";
  try { referrer = new URL(text(attribution.referrer, 500)).hostname; } catch { /* Direct visit. */ }
  return { data: { kind, name, phone, zip, email, reason, date, time, meeting,
    page: safePage(raw.page),
    landingPage: safePage(attribution.landingPage), referrer,
    utm_source: text(attribution.utm_source, 100), utm_medium: text(attribution.utm_medium, 100), utm_campaign: text(attribution.utm_campaign, 150),
  } };
}

export function hubspotSubmission(data: NonNullable<ReturnType<typeof validateConsultation>["data"]>, receivedAt: string) {
  const heading = data.kind === "appointment" ? "Appointment request (pending agent confirmation)" : data.kind === "service" ? "Existing-client service request (not a new sales lead)" : "Callback request";
  const message = [heading, `Help requested: ${data.reason}`,
    ...(data.kind === "appointment" ? [`Meeting: ${data.meeting}`, `Preferred date: ${data.date}`, `Preferred time: ${data.time}, Eastern`, "Appointment is not confirmed. Please contact the visitor to confirm availability and arrange required appointment paperwork."] : []),
    `Source page: https://medicareinfopro.com${data.page}`, `Landing page: ${data.landingPage}`,
    `Referrer: ${data.referrer}`, `UTM source: ${data.utm_source || "Not set"}`, `UTM medium: ${data.utm_medium || "Not set"}`, `UTM campaign: ${data.utm_campaign || "Not set"}`,
    `Contact permission: ${CONTACT_CONSENT}`, `Consent recorded at: ${receivedAt}`,
  ].join("\n");
  const [first, ...rest] = data.name.split(/\s+/);
  return { fields: [
    { name: "firstname", value: first }, { name: "lastname", value: rest.join(" ") },
    { name: "phone", value: data.phone }, { name: "zip", value: data.zip },
    { name: "email", value: data.email }, { name: "message", value: message },
  ].filter(field => field.value !== ""), context: { pageUri: `https://medicareinfopro.com${data.page}`, pageName: heading } };
}
