import type { Metadata } from "next";
import Turning65Client from "./Turning65Client";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalWebPage",
  "name": "Turning 65 and Becoming Eligible for Medicare | Medicare Information Project",
  "url": "https://medicareinfopro.com/turning-65-and-becoming-eligible-for-medicare",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Turning 65 is a major Medicare milestone. Learn what happens, when to enroll, what your coverage options are, and what to do if you are still working. Free guidance from licensed agents.",
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
  title: "Turning 65 and Becoming Eligible for Medicare | Medicare Information Project",
  description:
    "Turning 65 is a major Medicare milestone. Learn what happens, when to enroll, what your coverage options are, and what to do if you are still working. Free guidance from licensed agents.",
  keywords: [
    "turning 65 Medicare",
    "Medicare at 65",
    "becoming eligible for Medicare",
    "Medicare enrollment at 65",
    "Medicare Initial Enrollment Period",
    "Medicare options at 65",
    "Medicare Information Project",
    "Medicare Brandon FL",
  ],
  openGraph: {
    title: "Turning 65 and Becoming Eligible for Medicare",
    description:
      "Everything you need to know when you turn 65: enrollment windows, coverage options, what to do if you are still working, and how to avoid costly mistakes.",
    url: "https://medicare-info-pro.vercel.app/turning-65-and-becoming-eligible-for-medicare",
    type: "website",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/turning-65-and-becoming-eligible-for-medicare",
  },
};

export default function Turning65Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <Turning65Client />
    </>
  );
}
