import EarnWithUs from "@/components/sections/EarnWithUs";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import Navbar from "@/components/sections/Navbar";
import Products from "@/components/sections/Products";
import Services from "@/components/sections/Services";
import Stats from "@/components/sections/Stats";
import Technology from "@/components/sections/Technology";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhyItMatters from "@/components/sections/WhyItMatters";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Products />
      <HowItWorks />
      <Services />
      <WhyItMatters />
      <Technology />
      <WhoWeAre />
      <EarnWithUs />
      <Footer />
    </>
  );
}
