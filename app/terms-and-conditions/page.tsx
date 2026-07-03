import type { Metadata } from "next";
import TermsAndConditionsClient from "./TermsAndConditionsClient";

export const metadata: Metadata = {
  title: "Terms and Conditions | Medicare Information Pro",
  description: "Read the Medicare Information Pro terms and conditions governing use of our website and services.",
  alternates: {
    canonical: "https://medicareinfopro.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms and Conditions | Medicare Information Pro",
    description: "Read the Medicare Information Pro terms and conditions governing use of our website and services.",
    url: "https://medicareinfopro.com/terms-and-conditions",
    siteName: "Medicare Information Pro",
    type: "website",
  },
};

export default function Page() {
  return <TermsAndConditionsClient />;
}
