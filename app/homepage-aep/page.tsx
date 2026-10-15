import type { Metadata } from "next";
import HomepageAep from "./HomepageAep";

const title = "AEP Homepage Preview | Medicare Information Project";
const description = "An unpublished homepage preview for Medicare Information Project's Annual Enrollment Period campaign.";
const socialImage = "https://medicareinfopro.com/images/aep-plan-review-hero.webp";

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
    images: [{ url: socialImage, alt: "An older couple reviewing insurance plan information with an advisor" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [socialImage] },
};

export default function HomepageAepPage() {
  return <HomepageAep preview />;
}
