import { Suspense } from "react";
import LocalConsultationClient from "./LocalConsultationClient";

export const metadata: Metadata = {
  title: "Request a Local Medicare Callback | Medicare Information Project",
  description:
    "Request a callback from a licensed Medicare agent serving your area. Choose a convenient time, or call us directly for immediate help.",
  robots: { index: false, follow: false },
};

export default function LocalConsultationPage() {
  return (
    <Suspense fallback={null}>
      <LocalConsultationClient />
    </Suspense>
  );
}
