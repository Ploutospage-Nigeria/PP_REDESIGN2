import Image from "next/image";

import Reveal from "@/components/motion/Reveal";

const segments = [
  "Market traders",
  "Pharmacies",
  "Clinics and hospitals",
  "Distributors",
];

export default function About() {
  return (
    <section className="bg-[#0f2540]">
      <div className="mx-auto max-w-[1440px] px-5 pt-[49px] pb-[45.2px] xl:px-[100px] xl:pt-[64px] xl:pb-[63.2px]">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          <Reveal stagger={0.12}>
            <p
              data-reveal-item
              className="text-[13px] font-bold text-brand xl:text-sm"
            >
              About ploutos page
            </p>
            <h1
              data-reveal-item
              className="mt-[11.8px] text-[34px] leading-[41.6px] font-bold text-white xl:mt-[13.7px] xl:text-[60px] xl:leading-[72px] xl:tracking-[-0.02em]"
            >
              Built in the market,
              <br />
              <span className="text-brand">not in an office.</span>
            </h1>
          </Reveal>

          <Reveal
            stagger={0.12}
            className="mt-[23.9px] xl:mt-[34px] xl:w-[449px] xl:shrink-0"
          >
            <span
              data-reveal-item
              aria-hidden="true"
              className="block h-1 w-9 bg-brand xl:w-12"
            />
            <p
              data-reveal-item
              className="mt-[15px] text-base leading-[26px] text-white xl:mt-[12px] xl:text-lg xl:leading-[23px]"
            >
              Ploutos Page is a Lagos-based financial services company giving
              small businesses the financial clarity, discipline and confidence
              that large companies take for granted.
            </p>
          </Reveal>
        </div>

        <div className="mt-[31.3px] flex flex-col gap-4 xl:mt-[55.4px] xl:flex-row xl:gap-[22px]">
          <div className="flex flex-col justify-center rounded-[20px] bg-[#17385a] px-5 pt-[24px] pb-[23.4px] xl:w-[603px] xl:shrink-0 xl:rounded-[32px] xl:px-10 xl:py-0">
            <p className="text-[13px] font-semibold text-brand">
              Who we work with
            </p>
            <Reveal
              as="ul"
              stagger={0.1}
              className="mt-[15.1px] space-y-2 xl:mt-[19.5px] xl:space-y-3"
            >
              {segments.map((segment) => (
                <li
                  key={segment}
                  data-reveal-item
                  className="flex h-12 items-center gap-[11.5px] rounded-lg bg-[#204870] pl-[13px] text-base font-semibold text-white xl:h-[62px] xl:gap-[15px] xl:rounded-2xl xl:pl-[22px] xl:text-[19px]"
                >
                  <span
                    aria-hidden="true"
                    className="size-2.5 shrink-0 rounded-full bg-brand xl:size-3"
                  />
                  {segment}
                </li>
              ))}
            </Reveal>
          </div>

          <Reveal
            variant="right"
            duration={1}
            className="relative aspect-[1226/920] overflow-hidden rounded-[20px] xl:flex-1 xl:rounded-[32px]"
          >
            {/* Portrait photo cropped into the design's landscape frame. */}
            <Image
              src="/images/about/team.jpg"
              alt="A Ploutos Page team member in a branded hoodie at the company's exhibition stand"
              fill
              sizes="(min-width: 1280px) 615px, calc(100vw - 40px)"
              className="object-cover object-[50%_40%]"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
