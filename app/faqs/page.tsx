import { redirect } from "next/navigation";

// The canonical FAQ page lives at /faq — redirect /faqs to it
export default function FAQsRedirectPage() {
  redirect("/faq");
}
