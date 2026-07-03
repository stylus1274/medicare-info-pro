import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Medicare Information Pro",
  description: "Read the Medicare Information Pro privacy policy to understand how we collect, use, and protect your personal information.",
  alternates: {
    canonical: "https://medicareinfopro.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Medicare Information Pro",
    description: "Read the Medicare Information Pro privacy policy to understand how we collect, use, and protect your personal information.",
    url: "https://medicareinfopro.com/privacy-policy",
    siteName: "Medicare Information Pro",
    type: "website",
  },
};

export default function Page() {
  return <PrivacyPolicyClient />;
}
