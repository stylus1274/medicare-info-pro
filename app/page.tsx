import type { Metadata } from "next";
import HomepageV3 from "./homepage-preview-v3/HomepageV3";

const title = "Medicare Agents in Brandon, FL | Medicare Information Project";
const description = "Compare Medicare Advantage, Medigap and Part D with independent agents in Brandon, FL. No-cost consultations by appointment, phone or video.";
const socialImage = "https://d2xsxph8kpxj0f.cloudfront.net/310419663028505829/WdenMMm9jE8SydxXzr6dkt/mip-hero-couple_181d53a9.jpg";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "https://medicareinfopro.com/" },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title, description, url: "https://medicareinfopro.com/",
    siteName: "Medicare Information Project", type: "website", locale: "en_US",
    images: [{ url: socialImage, alt: "A couple discussing their Medicare options" }],
  },
  twitter: { card: "summary_large_image", title, description, images: [socialImage] },
};

export default function Page() {
  return <HomepageV3 />;
}
