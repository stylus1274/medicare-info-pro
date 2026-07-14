import type { Metadata } from "next";
import ScopeOfAppointmentClient from "./ScopeOfAppointmentClient";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is a Medicare Scope of Appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A Scope of Appointment (SOA) is a federally required form that a Medicare insurance agent must obtain from you before meeting to discuss Medicare Advantage (Part C) or Medicare Part D prescription drug plans. The form documents which types of plans you agree to discuss during the appointment. It protects you from being pitched plan types you did not ask about.",
      },
    },
    {
      "@type": "Question",
      "name": "Is the Scope of Appointment required by law?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The Centers for Medicare and Medicaid Services (CMS) requires agents to obtain a signed Scope of Appointment before any sales appointment involving Medicare Advantage or Part D plans. This requirement applies to in-person meetings, phone calls, and virtual appointments.",
      },
    },
    {
      "@type": "Question",
      "name": "What does the 48-hour rule mean for the Scope of Appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "CMS requires that the Scope of Appointment be obtained at least 48 hours before a scheduled appointment. There are two exceptions: walk-in appointments that you initiate without scheduling in advance, and appointments you request with less than 48 hours notice.",
      },
    },
    {
      "@type": "Question",
      "name": "Can an agent discuss plans not listed on my Scope of Appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. An agent is strictly limited to discussing only the plan types you listed on the SOA. If you want to discuss additional plan types, a new or amended SOA must be completed first.",
      },
    },
    {
      "@type": "Question",
      "name": "Does the Scope of Appointment apply to Medicare Supplement (Medigap) plans?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. The SOA requirement applies only to Medicare Advantage (Part C) and Medicare Part D prescription drug plans. Agents discussing only Medicare Supplement (Medigap) plans are not required to obtain a Scope of Appointment.",
      },
    },
    {
      "@type": "Question",
      "name": "What should I do if an agent skips the Scope of Appointment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can report the violation to 1-800-MEDICARE (1-800-633-4227) or to your State Health Insurance Assistance Program. In Florida, this is SHINE (Serving Health Insurance Needs of Elders). You can also report violations directly to the insurance carrier the agent represents.",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "Medicare Scope of Appointment: What It Is and Why It Matters",
  description: "Learn what the Medicare Scope of Appointment form is, when it is required, the 48-hour rule, and what to do if an agent skips it. CMS consumer protection explained.",
  keywords: [
    "medicare scope of appointment",
    "scope of appointment medicare",
    "medicare SOA form",
    "medicare agent appointment rules",
    "CMS scope of appointment",
    "medicare 48 hour rule",
    "medicare consumer protection",
  ],
  openGraph: {
    title: "Medicare Scope of Appointment: What It Is and Why It Matters",
    description: "Learn what the Medicare Scope of Appointment form is, when it is required, the 48-hour rule, and what to do if an agent skips it.",
    url: "https://medicareinfopro.com/medicare-scope-of-appointment/",
    type: "article",
    siteName: "Medicare Information Pro",
  },
  alternates: {
    canonical: "https://medicareinfopro.com/medicare-scope-of-appointment/",
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ScopeOfAppointmentClient />
    </>
  );
}
