import type { Metadata } from "next";
import TampaMedicareSpecialistClient from "./TampaMedicareSpecialistClient";

export const metadata: Metadata = {
  title: "Tampa Medicare Specialist | Licensed Medicare Insurance Agent Tampa, FL",
  description: "Work with a licensed Tampa Medicare specialist who can compare all available Medicare plans in your area. Free consultations with no pressure and no obligation.",
  alternates: {
    canonical: "https://medicareinfopro.com/tampa-medicare-specialist",
  },
  openGraph: {
    title: "Tampa Medicare Specialist | Licensed Medicare Insurance Agent Tampa, FL",
    description: "Work with a licensed Tampa Medicare specialist who can compare all available Medicare plans in your area. Free consultations with no pressure and no obligation.",
    url: "https://medicareinfopro.com/tampa-medicare-specialist",
    siteName: "Medicare Information Pro",
    type: "website",
  },
};

export default function Page() {
  return <TampaMedicareSpecialistClient />;
}
