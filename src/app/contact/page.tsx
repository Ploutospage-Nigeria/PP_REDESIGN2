import type { Metadata } from "next";

import Contact from "@/components/sections/Contact";
import { breadcrumbs, jsonLd, organizationId, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Tell us about your business and the Ploutos Page team will help you choose between OWA for market traders and MedBooks for pharmacies.",
  path: "/contact",
});

const contactPage = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Ploutos Page",
  about: { "@id": organizationId },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          contactPage,
          breadcrumbs([{ name: "Contact", path: "/contact" }]),
        ])}
      />
      <Contact />
    </>
  );
}
