import { NextResponse } from "next/server";
import { hubspotSubmission, validateConsultation } from "@/lib/consultation";

export const runtime = "nodejs";
const HUBSPOT_FORM = "https://api.hsforms.com/submissions/v3/integration/submit/246426534/1afd1c7a-145b-426b-a40d-f2df27790c75";

function reply(body: object, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  // Use the actual request origin on production and preview deployments.
  if (!origin || origin !== new URL(request.url).origin) return reply({ error: "Please submit the form from our website." }, 403);
  if (!request.headers.get("content-type")?.includes("application/json")) return reply({ error: "Invalid request format." }, 415);
  const length = Number(request.headers.get("content-length") || 0);
  if (length > 12000) return reply({ error: "The request is too large." }, 413);
  let raw: Record<string, unknown>;
  try {
    const body = await request.text();
    if (body.length > 12000) return reply({ error: "The request is too large." }, 413);
    raw = JSON.parse(body);
    if (!raw || typeof raw !== "object" || Array.isArray(raw)) return reply({ error: "Invalid form details." }, 400);
  } catch { return reply({ error: "Invalid form details." }, 400); }
  if (raw.website) return reply({ error: "We could not submit this request. Please call 813-699-5559." }, 400);
  const checked = validateConsultation(raw);
  if (!checked.data) return reply({ error: checked.error }, 400);
  try {
    const response = await fetch(HUBSPOT_FORM, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(hubspotSubmission(checked.data, new Date().toISOString())),
      signal: AbortSignal.timeout(15000), cache: "no-store",
    });
    if (!response.ok) {
      // Do not log submitted personal information or echo upstream errors.
      console.error("Consultation delivery rejected", { status: response.status });
      return reply({ error: "Your request could not be sent. Please try again or call 813-699-5559." }, 502);
    }
    return reply({ success: true, kind: checked.data.kind });
  } catch {
    console.error("Consultation delivery unavailable");
    return reply({ error: "We could not confirm delivery. Please call 813-699-5559 before submitting again." }, 503);
  }
}
