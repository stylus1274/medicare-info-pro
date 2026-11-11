// Use documented editorial dates. Omit unknown dates and the shared legacy migration date.
const editorialDates: Readonly<Record<string, string>> = {
  "/2026-medicare-advantage-changes": "2026-06-05",
  "/after-enrolling-medicare-plan-brandon": "2026-10-19",
  "/annual-enrollment-period-guide": "2026-08-16",
  "/at-what-age-can-you-get-medicare": "2026-07-05",
  "/best-medicare-advantage-plans-hillsborough-county": "2026-06-24",
  "/check-medicare-doctor-hospital-networks-brandon-fl": "2026-10-05",
  "/compare-medicare-prescription-costs-brandon": "2026-10-16",
  "/does-medicare-cover-ambulance-rides": "2026-06-03",
  "/does-medicare-cover-cataract-surgery": "2026-06-17",
  "/does-medicare-cover-dental": "2026-06-26",
  "/does-medicare-cover-home-health-care": "2026-06-17",
  "/does-medicare-cover-life-alert": "2026-06-05",
  "/does-medicare-cover-ozempic-glp1-2026": "2026-08-01",
  "/does-medicare-cover-wegovy": "2026-07-17",
  "/does-medicare-cover-zepbound": "2026-07-17",
  "/faqs/advance-beneficiary-notice": "2026-11-09",
  "/faqs/change-medicare-plan-again-before-december-7": "2026-10-19",
  "/faqs/goodrx-and-medicare-part-d": "2026-11-09",
  "/faqs/medicare-plan-non-renewal-notice": "2026-10-19",
  "/faqs/medicare-second-opinion-before-surgery": "2026-11-09",
  "/faqs/pay-medicare-premiums-without-social-security": "2026-11-09",
  "/feeling-trapped-in-medicare-advantage-plans": "2026-06-19",
  "/helping-parent-choose-medicare-brandon-fl": "2026-10-06",
  "/how-to-enroll-in-medicare": "2026-07-01",
  "/how-to-get-help-paying-for-medicare": "2026-06-19",
  "/how-to-get-shine-medicare-counseling-hillsborough-county": "2026-09-15",
  "/how-to-read-medicare-annual-notice-of-change": "2026-09-12",
  "/irmaa-explained": "2026-06-05",
  "/medicare-8-minute-rule": "2026-07-06",
  "/medicare-advantage-vs-medigap": "2026-06-26",
  "/medicare-and-employer-insurance-after-65-brandon-fl": "2026-09-11",
  "/medicare-brandon-fl": "2026-11-02",
  "/medicare-consulting-services-brandon": "2026-10-19",
  "/medicare-glp1-bridge-program": "2026-07-17",
  "/medicare-grocery-card": "2026-07-08",
  "/medicare-out-of-pocket-costs": "2026-06-19",
  "/medicare-outpatient-surgery-coverage-brandon-fl": "2026-11-02",
  "/medicare-part-d": "2026-10-19",
  "/medicare-prior-authorization-appeals": "2026-08-27",
  "/medicare-secondary-payer-rules": "2026-11-11",
  "/medicare-supplement-plan-g-vs-plan-n": "2026-07-01",
  "/medicare-supplement-plans-florida-2026": "2026-08-01",
  "/medicare-vs-medicaid": "2026-08-16",
  "/medicare-without-social-security": "2026-05-01",
  "/medigap-open-enrollment": "2026-08-16",
  "/moving-to-brandon-fl-with-medicare": "2026-09-15",
  "/part-d-2000-cap": "2026-08-16",
  "/plan-g-complete-guide": "2026-03-01",
  "/turning-65-brandon-fl": "2026-11-02",
  "/what-is-the-special-enrollment-period": "2026-06-17",
  "/why-choose-medigap-plan-g": "2026-08-16",
  "/why-is-health-insurance-so-expensive-in-florida": "2026-06-03",
  "/working-past-65": "2026-04-01",
};

export function sitemapLastModified(path: string): string | undefined {
  return editorialDates[path];
}

export function sitemapLastmodXml(path: string): string {
  const date = sitemapLastModified(path);
  return date ? `
    <lastmod>${date}</lastmod>` : "";
}
