import type { Metadata } from "next";

import About from "@/components/sections/About";
import MissionVision from "@/components/sections/MissionVision";
import Values from "@/components/sections/Values";
import { breadcrumbs, jsonLd, organizationId, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About us",
  description:
    "Ploutos Page is a Lagos-based financial services company giving small businesses the financial clarity, discipline and confidence that large companies take for granted.",
  path: "/about",
});

const aboutPage = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Ploutos Page",
  about: { "@id": organizationId },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLd([
          aboutPage,
          breadcrumbs([{ name: "About us", path: "/about" }]),
        ])}
      />
      <About />
      <MissionVision />
      <Values />
    </>
  );
}
