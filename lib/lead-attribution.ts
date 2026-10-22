import type { Attribution } from "./consultation";

const KEY = "mip-lead-attribution-v1";
export function captureLeadAttribution(): Attribution {
  const params = new URLSearchParams(window.location.search);
  const campaign = (key: string) => (params.get(key) || "").slice(0, 150);
  let referrer = "";
  try { referrer = new URL(document.referrer).origin; } catch { /* Direct visit. */ }
  const current: Attribution = { landingPage: window.location.pathname, referrer,
    utm_source: campaign("utm_source"), utm_medium: campaign("utm_medium"), utm_campaign: campaign("utm_campaign") };
  try {
    const saved = sessionStorage.getItem(KEY);
    if (saved) {
      const previous = JSON.parse(saved);
      if (previous && typeof previous.landingPage === "string") return previous;
    }
    sessionStorage.setItem(KEY, JSON.stringify(current));
  } catch { /* Forms also work when storage is disabled. */ }
  return current;
}
