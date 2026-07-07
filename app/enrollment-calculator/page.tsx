import type { Metadata } from "next";
import EnrollmentCalculatorClient from "./EnrollmentCalculatorClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Medicare Enrollment Date Calculator: Find Your Exact Deadlines | Medicare Information Pro",
  "url": "https://medicareinfopro.com/enrollment-calculator",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Enter your birthday and employment status to instantly calculate your Medicare Initial Enrollment Period, coverage start date, Medigap window, and late-penalty deadlines - free tool."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Medicare Enrollment Date Calculator: Find Your Exact Deadlines | Medicare Information Pro",
  description:
    "Enter your birthday and employment status to instantly calculate your Medicare Initial Enrollment Period, coverage start date, Medigap window, and late-penalty deadlines - free tool.",
  keywords: [
    "Medicare enrollment calculator",
    "Medicare enrollment date calculator",
    "when to enroll in Medicare",
    "Medicare IEP calculator",
    "Medicare coverage start date",
    "Medicare late enrollment penalty calculator",
    "Medicare birthday calculator",
    "Medicare enrollment deadline tool",
  ],
  openGraph: {
    title: "Medicare Enrollment Date Calculator: Find Your Exact Deadlines | Medicare Information Pro",
    description:
      "Enter your birthday and employment status to instantly calculate your Medicare enrollment window, coverage start date, Medigap open enrollment period, and late-penalty deadlines.",
    url: "https://medicareinfopro.com/enrollment-calculator",
    siteName: "Medicare Information Pro",
    images: [
      {
        url: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Calendar and clock representing Medicare enrollment deadline calculator",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Enrollment Date Calculator | Medicare Information Pro",
    description:
      "Free tool: enter your birthday to calculate your exact Medicare enrollment window, coverage start date, and penalty deadlines.",
    images: [
      "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=1200&h=630&fit=crop",
    ],
  },
  alternates: {
    canonical: "https://medicareinfopro.com/enrollment-calculator",
  },
};

export default function EnrollmentCalculatorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <EnrollmentCalculatorClient />
    </>
  );
}
