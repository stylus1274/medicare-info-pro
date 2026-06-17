import type { Metadata } from "next";
import EnrollmentTimelineClient from "./EnrollmentTimelineClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Medicare Enrollment Timeline: When to Sign Up | Medicare Information Pro",
  "url": "https://medicareinfopro.com/enrollment-timeline",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Learn every Medicare enrollment deadline - Initial Enrollment Period, General Enrollment Period, Special Enrollment Period, and Annual Enrollment Period. Avoid permanent late penalties.",
  "about": {
    "@type": "MedicalCondition",
    "name": "Medicare"
  },
  "audience": {
    "@type": "Patient"
  }
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Enrollment Timeline: When to Sign Up | Medicare Information Pro",
  description:
    "Learn every Medicare enrollment deadline - Initial Enrollment Period, General Enrollment Period, Special Enrollment Period, and Annual Enrollment Period. Avoid permanent late penalties.",
  keywords: [
    "Medicare enrollment timeline",
    "when to sign up for Medicare",
    "Initial Enrollment Period",
    "Medicare IEP",
    "Medicare late enrollment penalty",
    "Special Enrollment Period",
    "Annual Enrollment Period",
    "Medicare enrollment deadlines",
  ],
  openGraph: {
    title: "Medicare Enrollment Timeline: When to Sign Up | Medicare Information Pro",
    description:
      "Every Medicare enrollment deadline explained - IEP, GEP, AEP, SEP, and OEP. Understand the 7-month window, late penalties, and key dates at a glance.",
    url: "https://medicare-info-pro.vercel.app/enrollment-timeline",
    siteName: "Medicare Information Pro",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/enrollment-timeline-hero-fUV4Z6QqzsEB6MK58CcaeN.webp",
        width: 1200,
        height: 630,
        alt: "Calendar and clock representing Medicare enrollment deadlines",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Enrollment Timeline: When to Sign Up | Medicare Information Pro",
    description:
      "Every Medicare enrollment deadline explained - IEP, GEP, AEP, SEP, and OEP. Avoid permanent late penalties.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/enrollment-timeline-hero-fUV4Z6QqzsEB6MK58CcaeN.webp",
    ],
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/enrollment-timeline",
  },
};

export default function EnrollmentTimelinePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <EnrollmentTimelineClient />
    </>
  );
}
