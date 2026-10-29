import type { Metadata } from "next";

import MedbooksAudience from "@/components/sections/MedbooksAudience";
import MedbooksFacilities from "@/components/sections/MedbooksFacilities";
import MedbooksFaq from "@/components/sections/MedbooksFaq";
import MedbooksHero from "@/components/sections/MedbooksHero";
import MedbooksInsights from "@/components/sections/MedbooksInsights";
import MedbooksProcess from "@/components/sections/MedbooksProcess";
import MedbooksServices from "@/components/sections/MedbooksServices";
import { faqs } from "@/components/sections/MedbooksFaq";
import {
  breadcrumbs,
  faqPage,
  jsonLd,
  organizationId,
  pageMetadata,
  site,
} from "@/lib/site";

const description =
  "MedBooks helps pharmacies, hospitals, diagnostics and distributors organise financial records, track stock and expiry, manage tax and follow up HMO claims.";

export const metadata: Metadata = pageMetadata({
  title: "MedBooks for healthcare businesses",
  description,
  path: "/medbooks",
});

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "MedBooks",
  serviceType: "Financial management for healthcare businesses",
  description,
  url: `${site.url}/medbooks`,
  provider: { "@id": organizationId },
  areaServed: { "@type": "Country", name: "Nigeria" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Pharmacies, hospitals, diagnostics and distributors",
  },
};

export default function MedbooksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          service,
          faqPage(faqs),
          breadcrumbs([{ name: "MedBooks", path: "/medbooks" }]),
        ])}
      />
      <MedbooksHero />
      <MedbooksAudience />
      <MedbooksInsights />
      <MedbooksServices />
      <MedbooksProcess />
      <MedbooksFacilities />
      <MedbooksFaq />
    </>
  );
}
