import type { Metadata } from "next";
import FirstStepsChecklistClient from "./FirstStepsChecklistClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Medicare First Steps Checklist | New to Medicare Action Plan | Medicare Information Pro",
  "url": "https://medicareinfopro.com/first-steps-checklist",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "A step-by-step Medicare enrollment checklist for people turning 65. Check off each action - from understanding your options to enrolling and staying organized. Progress saves automatically.",
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
  title: "Medicare First Steps Checklist | New to Medicare Action Plan | Medicare Information Pro",
  description:
    "A step-by-step Medicare enrollment checklist for people turning 65. Check off each action - from understanding your options to enrolling and staying organized. Progress saves automatically.",
  keywords: [
    "Medicare first steps checklist",
    "Medicare enrollment checklist",
    "new to Medicare action plan",
    "Medicare turning 65 checklist",
    "Medicare enrollment steps",
    "how to enroll in Medicare",
    "Medicare 65 what to do",
    "Medicare getting started guide",
  ],
  openGraph: {
    title: "Medicare First Steps Checklist | Medicare Information Pro",
    description:
      "A 6-phase interactive checklist for new Medicare enrollees - from understanding your options to enrolling and staying organized.",
    url: "https://medicare-info-pro.vercel.app/first-steps-checklist",
    type: "article",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/first-steps-checklist-hero-PGVcHBnzYV2VUbed3eCtQz.webp",
        width: 1200,
        height: 630,
        alt: "Medicare First Steps Checklist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare First Steps Checklist | Medicare Information Pro",
    description:
      "A 6-phase interactive checklist for new Medicare enrollees. Check off each step as you go - progress saves automatically.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/first-steps-checklist-hero-PGVcHBnzYV2VUbed3eCtQz.webp",
    ],
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/first-steps-checklist",
  },
};

export default function FirstStepsChecklistPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <FirstStepsChecklistClient />
    </>
  );
}
