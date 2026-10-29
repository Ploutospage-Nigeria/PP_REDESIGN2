import type { Metadata } from "next";

import OwaBenefits from "@/components/sections/OwaBenefits";
import OwaChallenge from "@/components/sections/OwaChallenge";
import OwaFaq from "@/components/sections/OwaFaq";
import OwaCooperative from "@/components/sections/OwaCooperative";
import OwaFeatures from "@/components/sections/OwaFeatures";
import OwaHero from "@/components/sections/OwaHero";
import OwaPlans from "@/components/sections/OwaPlans";
import { faqs } from "@/components/sections/OwaFaq";
import { plans } from "@/components/sections/OwaPlans";
import {
  breadcrumbs,
  faqPage,
  jsonLd,
  organizationId,
  pageMetadata,
  site,
} from "@/lib/site";

const description =
  "OWA helps market traders keep track of stock, record business activity through WhatsApp and understand how their business is performing, with practical support from an OWA agent.";

export const metadata: Metadata = pageMetadata({
  title: "OWA for market traders and retailers",
  description,
  path: "/owa",
});

const service = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "OWA",
  serviceType: "Bookkeeping and stock tracking for market traders",
  description,
  url: `${site.url}/owa`,
  provider: { "@id": organizationId },
  areaServed: { "@type": "Country", name: "Nigeria" },
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Market traders and retailers",
  },
  offers: plans.map((plan) => {
    const price = plan.price.replace(/[^\d]/g, "");
    return {
      "@type": "Offer",
      name: plan.name,
      description: plan.audience,
      price,
      priceCurrency: "NGN",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price,
        priceCurrency: "NGN",
        unitCode: "MON",
      },
    };
  }),
};

export default function OwaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          service,
          faqPage(faqs),
          breadcrumbs([{ name: "OWA", path: "/owa" }]),
        ])}
      />
      <OwaHero />
      <OwaChallenge />
      <OwaFeatures />
      <OwaBenefits />
      <OwaCooperative />
      <OwaPlans />
      <OwaFaq />
    </>
  );
}
