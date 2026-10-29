import Image from "next/image";

import Reveal from "@/components/motion/Reveal";

const audiences = [
  {
    title: "Pharmacies",
    body: "Community and retail pharmacies, single or multi-branch.",
    image: "/images/medbooks/who-pharmacies.png",
  },
  {
    title: "Hospitals",
    body: "Private hospitals with multiple departments.",
    image: "/images/medbooks/who-hospitals.png",
  },
  {
    title: "Diagnostics",
    body: "Diagnostic centers and medical laboratories.",
    image: "/images/medbooks/who-diagnostics.png",
  },
  {
    title: "Distributors",
    body: "Pharmaceutical wholesalers and distributors",
    image: "/images/medbooks/who-distributors.png",
  },
];

export default function MedbooksAudience() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-[19px] pt-[56px] pb-[56px] xl:px-[99px] xl:pt-[100px] xl:pb-[103px]">
        <Reveal stagger={0.12} className="text-center">
          <p
            data-reveal-item
            className="text-sm font-semibold text-[#2351d6] xl:text-lg"
          >
            Who it’s for
          </p>
          <h2
            data-reveal-item
            className="mx-auto mt-[8.4px] max-w-[300px] text-[26px] leading-[33.5px] font-bold text-[#0f1e4a] xl:mt-[13.4px] xl:max-w-none xl:text-4xl xl:leading-[43.2px] xl:tracking-[-0.02em]"
          >
            Built for the healthcare supply chain
          </h2>
        </Reveal>

        <Reveal
          as="ul"
          stagger={0.12}
          className="mt-[27.4px] grid grid-cols-2 gap-x-[12.4px] gap-y-3 xl:mt-[75.2px] xl:grid-cols-4 xl:gap-[24.9px]"
        >
          {audiences.map((audience) => (
            <li
              key={audience.title}
              data-reveal-item
              className="hover-lift overflow-hidden rounded-[18px] border border-[#e3e8f5] bg-white text-center xl:h-[380px] xl:rounded-3xl"
            >
              <Image
                src={audience.image}
                alt=""
                width={584}
                height={392}
                sizes="(min-width: 1280px) 292px, calc(50vw - 25px)"
                className="h-auto w-full"
              />
              <h3 className="mt-4 text-[17px] leading-6 font-bold text-[#0f1e4a] xl:mt-[30px] xl:text-[23px] xl:leading-7">
                {audience.title}
              </h3>
              <p className="mx-auto mt-[7.4px] max-w-[148px] pb-[18px] text-[13px] leading-5 text-[#4a5980] xl:mt-[13.4px] xl:max-w-[250px] xl:pb-0 xl:text-base xl:leading-6">
                {audience.body}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
