import type { Metadata } from "next";

import OwaBenefits from "@/components/sections/OwaBenefits";
import OwaChallenge from "@/components/sections/OwaChallenge";
import OwaFaq from "@/components/sections/OwaFaq";
import OwaCooperative from "@/components/sections/OwaCooperative";
import OwaFeatures from "@/components/sections/OwaFeatures";
import OwaHero from "@/components/sections/OwaHero";
import OwaPlans from "@/components/sections/OwaPlans";

export const metadata: Metadata = {
  title: "OWA",
};

export default function OwaPage() {
  return (
    <>
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
