import type { Metadata } from "next";
import AboutClient from "./AboutClient";

const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "About Medicare Information Project | Independent Medicare Agents in Brandon, FL",
  "url": "https://medicareinfopro.com/about-us",
  "isPartOf": {
    "@id": "https://medicareinfopro.com/#website"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Medicare Information Pro",
    "@id": "https://medicareinfopro.com/#organization"
  },
  "description": "Medicare Information Project is an independent Medicare insurance agency based in Brandon, FL. We represent 17 carriers and 149 Medicare products across 6 states. Free, unbiased guidance: no pressure."
} as const;

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "About Medicare Information Project | Independent Medicare Agents in Brandon, FL",
  description:
    "Medicare Information Project is an independent Medicare insurance agency based in Brandon, FL. We represent 17 carriers and 149 Medicare products across 6 states. Free, unbiased guidance: no pressure.",
  keywords: [
    "Medicare Information Project",
    "independent Medicare agency Brandon FL",
    "about Medicare Information Project",
    "Medicare agent Florida",
    "Greg Wohl Medicare",
    "Medicare broker Tampa Bay",
    "BBB A+ Medicare agency",
  ],
  openGraph: {
    title: "About Medicare Information Project",
    description:
      "Independent Medicare insurance agency in Brandon, FL. We represent 17 carriers and provide free, unbiased Medicare guidance across 6 states.",
    url: "https://medicare-info-pro.vercel.app/about-us",
    type: "website",
    images: [
      {
        url: "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png",
        width: 1200,
        height: 630,
        alt: "Greg Wohl and the Medicare Information Project team in Brandon, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Medicare Information Project",
    description:
      "Independent Medicare insurance agency in Brandon, FL. Free, unbiased guidance across 6 states.",
    images: [
      "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/greg-wohl_13284fbb.png",
    ],
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/about-us",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webpageSchema) }}
      />
      <AboutClient />
    </>
  );
}
