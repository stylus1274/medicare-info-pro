import type { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Medicare Information Project",
  description: "Read the Medicare Information Project privacy policy to understand how we collect, use, and protect personal information.",
  alternates: {
    canonical: "https://medicareinfopro.com/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | Medicare Information Project",
    description: "Read the Medicare Information Project privacy policy to understand how we collect, use, and protect personal information.",
    url: "https://medicareinfopro.com/privacy-policy/",
    siteName: "Medicare Information Project",
    type: "website",
  },
};

export default function Page() {
  return <PrivacyPolicyClient />;
}
