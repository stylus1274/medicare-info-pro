import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

// The canonical FAQ page lives at /faq; redirect /faqs to it
export default function FAQsRedirectPage() {
  redirect("/faq");
}
