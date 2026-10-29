import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";

import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import { jsonLd, organizationId, site } from "@/lib/site";

import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ${site.tagline.replace(/\.$/, "")}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    siteName: site.name,
    locale: "en_NG",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  formatDetection: { telephone: false, email: false, address: false },
  // Facebook domain verification — do not remove. Also served as
  // /hlpgh5gts6x5t08pt6igi8ikw6jpdq.html from public/.
  other: {
    "facebook-domain-verification": "hlpgh5gts6x5t08pt6igi8ikw6jpdq",
  },
};

const organization = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  "@id": organizationId,
  name: site.name,
  url: site.url,
  logo: `${site.url}/images/navbar/logo.png`,
  image: `${site.url}/images/navbar/logo.png`,
  description: site.tagline,
  email: site.email,
  telephone: site.phone,
  address: { "@type": "PostalAddress", ...site.address },
  areaServed: { "@type": "Country", name: "Nigeria" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: site.email,
      telephone: site.phone,
      areaServed: "NG",
    },
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  publisher: { "@id": organizationId },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${hankenGrotesk.variable} h-full font-sans antialiased motion-safe:scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        {/* Without JavaScript, show scroll-reveal content straight away. */}
        <noscript>
          <style>{`[data-reveal] , [data-reveal] [data-reveal-item] { opacity: 1 !important; }`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLd([organization, website])}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
