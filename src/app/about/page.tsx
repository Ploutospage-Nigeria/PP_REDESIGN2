import type { Metadata } from "next";

import About from "@/components/sections/About";
import MissionVision from "@/components/sections/MissionVision";
import Values from "@/components/sections/Values";

export const metadata: Metadata = {
  title: "About us",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <MissionVision />
      <Values />
    </>
  );
}
