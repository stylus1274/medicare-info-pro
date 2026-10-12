import type { Metadata } from "next";
import HomepageAep from "./HomepageAep";

const title = "AEP Homepage Preview | Medicare Information Project";
const description = "An unpublished homepage preview for Medicare Information Project's Annual Enrollment Period campaign.";
const socialImage = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/mip-hero-couple_181d53a9.jpg";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "https://medicareinfopro.com/homepage-aep/" },
  robots: {
    index: false,
    follow: true,
    googleBot: { index: false, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title,
    description,
    url: "https://medicareinfopro.com/homepage-aep/",
    siteName: "Medicare Information Project",
    type: "website",
    locale: "en_US",
    images: [{ url: socialImage, alt: "A couple discussing their Medicare options" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [socialImage] },
};

export default function HomepageAepPage() {
  return <HomepageAep />;
}
