import type { Metadata } from "next";
import HomepageAep from "./homepage-aep/HomepageAep";

const title = "Medicare Annual Enrollment Period Help in Brandon, FL | Medicare Information Project";
const description = "Annual Enrollment Period is here. Review Medicare Advantage, Medigap, and Part D plan options with independent licensed agents in Brandon, FL.";
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
  return <HomepageAep />;
}
