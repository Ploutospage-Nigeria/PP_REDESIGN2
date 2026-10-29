import Image from "next/image";
import Link from "next/link";

import ArrowRight from "@/components/icons/ArrowRight";
import Reveal from "@/components/motion/Reveal";

const facilities: {
  title: string;
  body: string;
  icon: { src: string; width: number; height: number };
  bodyClass?: string;
}[] = [
  {
    title: "Pharmacies",
    body: "A clear view of daily sales, stock, expiry and margins.",
    icon: { src: "/icons/mb-pharmacy.svg", width: 24, height: 22 },
  },
  {
    title: "Hospitals and diagnostics",
    body: "Revenue, costs and HMO receivables organised across departments.",
    icon: { src: "/icons/mb-hospital.svg", width: 22, height: 24 },
  },
  {
    title: "Distributors",
    body: "Stock, credit sales and supplier costs tracked across your network.",
    // Figma wraps this description narrower on desktop.
    bodyClass: "xl:max-w-[235px]",
    icon: { src: "/icons/mb-truck.svg", width: 25, height: 19 },
  },
  {
    title: "Multi-location groups",
    body: "Financial information brought together across every location.",
    icon: { src: "/icons/mb-map.svg", width: 24, height: 22 },
  },
];

export default function MedbooksFacilities() {
  return (
    <section className="bg-[#eaf0fd]">
      <div className="mx-auto max-w-[1440px] px-5 pt-14 pb-[58px] xl:flex xl:justify-between xl:px-[100px] xl:pt-[101px] xl:pb-[102px]">
        <Reveal stagger={0.12} className="xl:w-[540px]">
          <p
            data-reveal-item
            className="text-sm leading-5 font-semibold text-[#5b8bff] xl:text-lg xl:leading-7"
          >
            Designed for healthcare operations
          </p>
          <h2
            data-reveal-item
            className="mt-[7.6px] max-w-[300px] text-[26px] leading-[34.3px] font-bold tracking-[-0.02em] text-[#0f1e4a] xl:mt-[12.4px] xl:max-w-none xl:text-4xl xl:leading-[43.7px]"
          >
            Financial support that reflects how your facility runs.
          </h2>
          <p
            data-reveal-item
            className="mt-[11.4px] text-[15px] leading-[24.2px] text-[#262e39] xl:mt-[11.9px] xl:text-base xl:leading-[24.7px]"
          >
            From a single pharmacy to hospitals and distributors, MedBooks makes
            your numbers easier to see, compare and act on.
          </p>
          <div data-reveal-item className="mt-[23.5px] xl:mt-[46.6px]">
            <Link
              href="/contact"
              className="flex h-[51.4px] items-center justify-center gap-[9px] rounded-full bg-[#2451d6] text-base font-bold text-white xl:inline-flex xl:h-14 xl:px-[29px]"
            >
              Get started with Medbooks
              <ArrowRight className="size-6" />
            </Link>
          </div>
        </Reveal>

        <Reveal
          as="ul"
          stagger={0.12}
          className="mt-[33.3px] grid gap-[12.3px] xl:mt-0 xl:w-[681px] xl:shrink-0 xl:grid-cols-2 xl:gap-x-[21px] xl:gap-y-5"
        >
          {facilities.map((facility) => (
            <li
              key={facility.title}
              data-reveal-item
              className="hover-lift h-[196px] rounded-3xl bg-white px-[20.9px] pt-[25px] xl:h-[279.6px] xl:rounded-[30px] xl:px-[28.5px] xl:pt-[28.6px]"
            >
              <span className="flex size-[51.4px] items-center justify-center rounded-xl bg-[#eef2fd]">
                <Image
                  src={facility.icon.src}
                  alt=""
                  width={facility.icon.width}
                  height={facility.icon.height}
                />
              </span>
              <h3 className="mt-[13.4px] text-[19px] leading-[26px] font-semibold text-[#0f1e4a] xl:mt-[19.9px] xl:text-[21px] xl:leading-7">
                {facility.title}
              </h3>
              <p
                className={`mt-[6px] text-[15px] leading-[24px] text-[#4a5b80] xl:mt-[11.5px] xl:text-base xl:leading-[23.8px] ${facility.bodyClass ?? ""}`}
              >
                {facility.body}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
