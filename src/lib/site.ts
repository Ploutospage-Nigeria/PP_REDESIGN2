import type { Metadata } from "next";

// Business details, taken from the footer and contact page copy.
export const site = {
  name: "Ploutos Page",
  url: "https://ploutospage.com",
  tagline: "Financial management for small and growing businesses.",
  description:
    "We help businesses manage finances, track inventory, stay tax-ready and build reliable financial records without any complexity.",
  email: "support@ploutospage.ng",
  phone: "+2348163489375",
  whatsapp: "+2349087675645",
  address: {
    streetAddress: "Suite 5, Mojisola Mall, Owode Ibeshe",
    addressLocality: "Ikorodu",
    addressRegion: "Lagos",
    addressCountry: "NG",
  },
} as const;

/**
 * Per-page metadata with a canonical URL and matching social previews. The
 * preview image comes from the route's opengraph-image file.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.name,
      locale: "en_NG",
      type: "website",
    },
    twitter: { card: "summary_large_image", title, description },
  };
}

/** Serialises structured data for a `<script type="application/ld+json">`. */
export function jsonLd(data: object) {
  return { __html: JSON.stringify(data).replace(/</g, "\\u003c") };
}

export const organizationId = `${site.url}/#organization`;

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "/" }, ...items].map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path === "/" ? "" : item.path}`,
    })),
  };
}

export function faqPage(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}
