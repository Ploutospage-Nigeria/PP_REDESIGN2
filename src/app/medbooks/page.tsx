import type { Metadata } from "next";

import MedbooksAudience from "@/components/sections/MedbooksAudience";
import MedbooksFacilities from "@/components/sections/MedbooksFacilities";
import MedbooksFaq from "@/components/sections/MedbooksFaq";
import MedbooksHero from "@/components/sections/MedbooksHero";
import MedbooksInsights from "@/components/sections/MedbooksInsights";
import MedbooksProcess from "@/components/sections/MedbooksProcess";
import MedbooksServices from "@/components/sections/MedbooksServices";

export const metadata: Metadata = {
  title: "MedBooks",
};

export default function MedbooksPage() {
  return (
    <>
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
