import Image from "next/image";

import type { ReactNode } from "react";

import Reveal from "@/components/motion/Reveal";

import {
  FinancingVisual,
  HistoryVisual,
  ProblemsVisual,
  ProfitVisual,
} from "./OwaFeatureVisuals";

const features: {
  title: string;
  body: ReactNode;
  /** Large cards use a supplied illustration; small ones are drawn in code. */
  image?: { src: string; alt: string };
  visual?: ReactNode;
  large?: boolean;
}[] = [
  {
    title: "Keep track of your stock",
    body: "OWA agents help count and reconcile inventory, giving you better visibility into the stock your business holds.",
    image: {
      src: "/images/owa/feature-stock.png",
      alt: "A shop shelf beside a stock count done with an agent: rice, garri and noodles reconciled, sugar 2 bags short",
    },
    large: true,
  },
  {
    title: "Record business activity through WhatsApp",
    body: "Use familiar WhatsApp interactions, including voice notes where supported, to capture business information.",
    image: {
      src: "/images/owa/feature-whatsapp.png",
      alt: "A WhatsApp voice note to OWA becoming today’s record: a rice sale and a transport expense",
    },
    large: true,
  },
  {
    title: "Understand your monthly profit",
    body: "Receive a monthly profit report, with an OWA agent available to walk you through what the numbers mean for your business.",
    visual: <ProfitVisual />,
  },
  {
    title: "Build a reliable business history",
    body: "Consistent records help create a clearer picture of your sales activity, stock and business performance over time.",
    visual: <HistoryVisual />,
  },
  {
    title: "Spot problems earlier",
    body: "Better inventory records can help you identify discrepancies and understand stock movement.",
    visual: <ProblemsVisual />,
  },
  {
    title: "Work towards financing",
    body: (
      <>
        Build savings and a verified sales history through the OWA{" "}
        <span className="whitespace-nowrap">Co-operative</span> as a pathway
        towards potential financing.
      </>
    ),
    visual: <FinancingVisual />,
  },
];

export default function OwaFeatures() {
  return (
    <section className="bg-[#f5d90a]">
      <div className="mx-auto max-w-[1440px] px-5 pt-[57px] pb-[49px] xl:px-[100px] xl:pt-[94px] xl:pb-[96px]">
        <div className="xl:flex xl:items-end xl:justify-between">
          <Reveal stagger={0.12}>
            <p
              data-reveal-item
              className="text-sm font-semibold text-[#4c1e72] xl:text-lg"
            >
              What OWA helps you do
            </p>
            <h2
              data-reveal-item
              className="mt-3 text-[26px] leading-[33.8px] font-bold text-[#1f0d30] xl:mt-[13.7px] xl:text-4xl xl:leading-[43.2px] xl:tracking-[-0.02em]"
            >
              Your business, better understood.
            </h2>
          </Reveal>
          <Reveal className="mt-3 xl:mt-0 xl:w-[413px] xl:shrink-0">
            <p className="text-[15px] leading-6 text-[#262e39] xl:text-base">
              No complicated accounting software. Just the tools you already use
              and an agent who knows your market.
            </p>
          </Reveal>
        </div>

        <Reveal
          as="ul"
          stagger={0.12}
          className="mt-[30px] grid gap-[16.5px] xl:mt-[58.7px] xl:grid-cols-4 xl:gap-6"
        >
          {features.map((feature) => (
            <li
              key={feature.title}
              data-reveal-item
              className={`hover-lift flex flex-col overflow-hidden rounded-3xl bg-white [--lift-scale:1.015] ${
                feature.large ? "xl:col-span-2" : ""
              }`}
            >
              {feature.image ? (
                <div className="bg-[#f6f0fb]">
                  <Image
                    src={feature.image.src}
                    alt={feature.image.alt}
                    width={1216}
                    height={660}
                    sizes="(min-width: 1280px) 608px, calc(100vw - 40px)"
                    className="h-auto w-full"
                  />
                </div>
              ) : (
                feature.visual
              )}
              <div
                className={
                  feature.large
                    ? "px-5 pt-6 pb-7 xl:h-[212px] xl:px-9 xl:pt-[35.8px] xl:pb-0"
                    : "px-5 pt-6 pb-7 xl:h-[248px] xl:px-7 xl:pt-[27.6px] xl:pb-0"
                }
              >
                <h3
                  className={`font-bold text-[#2b1544] ${
                    feature.large
                      ? "text-[21px] leading-7 xl:text-[28px] xl:leading-[33.8px]"
                      : "text-[21px] leading-7 xl:text-[21px] xl:leading-[26.7px]"
                  }`}
                >
                  {feature.title}
                </h3>
                <p
                  className={`text-[15px] leading-6 text-[#5a4c71] ${
                    feature.large
                      ? "mt-3 xl:mt-[10.8px] xl:text-[17px] xl:leading-[28.4px]"
                      : "mt-3 xl:mt-[10.3px] xl:max-w-[227px] xl:text-[15.5px] xl:leading-[24.9px]"
                  }`}
                >
                  {feature.body}
                </p>
              </div>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
