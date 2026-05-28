import type { Metadata } from "next";
import SNPPlansClient from "./SNPPlansClient";

export const metadata: Metadata = {
  title: "Medicare Special Needs Plans (SNP) | 2026 Guide | Medicare Information Pro",
  description:
    "Learn about Medicare Special Needs Plans (SNPs) -- C-SNP, D-SNP, and I-SNP. Find out who qualifies, what they cover, and which SNP plans are available in Brandon and Hillsborough County in 2026.",
  keywords: [
    "Medicare Special Needs Plans",
    "Medicare SNP plans 2026",
    "D-SNP dual eligible Medicare",
    "C-SNP chronic condition Medicare",
    "Medicare SNP Brandon FL",
    "Medicare SNP Hillsborough County",
    "dual eligible Medicare Medicaid Florida",
  ],
  openGraph: {
    title: "Medicare Special Needs Plans (SNP) | 2026 Guide",
    description:
      "C-SNP, D-SNP, and I-SNP explained. Find out who qualifies and which SNP plans are available in Brandon and Hillsborough County for 2026.",
    url: "https://medicare-info-pro.vercel.app/medicare-snp-plans",
    siteName: "Medicare Information Pro",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Special Needs Plans (SNP) | 2026 Guide",
    description:
      "C-SNP, D-SNP, and I-SNP explained. Find out who qualifies in Brandon and Hillsborough County for 2026.",
  },
  alternates: {
    canonical: "https://medicare-info-pro.vercel.app/medicare-snp-plans",
  },
};

export default function SNPPlansPage() {
  return <SNPPlansClient />;
}
