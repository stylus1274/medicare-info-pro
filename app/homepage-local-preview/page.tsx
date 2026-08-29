import type { Metadata } from "next";
import HomeLocalPreviewClient from "../HomeLocalPreviewClient";

export const metadata: Metadata = {
  title: "Preview: Medicare Help in Tampa Bay and Brandon, FL | Medicare Information Pro",
  description:
    "Preview of proposed local-conversion updates for Medicare Information Pro. This page is not indexed and does not replace the live homepage.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function HomepageLocalPreviewPage() {
  return <HomeLocalPreviewClient />;
}
