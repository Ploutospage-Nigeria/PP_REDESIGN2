import Image from "next/image";
import Link from "next/link";

import ArrowRight from "@/components/icons/ArrowRight";
import Reveal from "@/components/motion/Reveal";

export default function OwaHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#451c68]">
      <Image
        src="/images/owa/hero-market.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[#451c68]/90"
      />

      <Reveal
        immediate
        stagger={0.12}
        className="mx-auto flex max-w-[1440px] flex-col items-center px-5 pt-14 pb-16 text-center xl:px-[100px] xl:pt-[149.3px] xl:pb-[150px]"
      >
        <p
          data-reveal-item
          className="flex h-[35.5px] items-center rounded-full bg-[#704d8e] py-1 pr-[14px] pl-1 text-sm text-white xl:text-base"
        >
          <span className="flex h-full items-center rounded-full bg-[#f5d90a] px-[10.7px] text-[15.5px] font-semibold text-ink">
            OWA
          </span>
          <span className="ml-[15px]">For market traders and retailers</span>
        </p>
        <h1
          data-reveal-item
          className="mt-6 text-[34px] leading-[42px] font-bold text-white xl:mt-[10.6px] xl:text-[57.5px] xl:leading-[73px]"
        >
          Know your stock. Understand your profit.{" "}
          <br className="max-xl:hidden" />
          <span className="text-[#f5d90a]">Build towards</span> your next
          opportunity.
        </h1>
        <p
          data-reveal-item
          className="mt-5 max-w-[780px] text-base leading-[26px] text-white xl:mt-[12.7px] xl:text-lg xl:leading-[27.6px]"
        >
          OWA helps market traders keep track of stock, record business activity
          through WhatsApp and understand how their business is performing, with
          practical support from an OWA agent.
        </p>
        <div
          data-reveal-item
          className="mt-8 flex w-full flex-col gap-3 xl:mt-[36.7px] xl:w-auto xl:flex-row xl:gap-[25px]"
        >
          <Link
            href="/contact"
            className="flex h-[53px] items-center justify-center gap-[9px] rounded-full bg-[#f5d90a] px-[22px] text-base font-bold xl:px-5 text-ink xl:h-[63px]"
          >
            Get started with OWA
            <ArrowRight className="size-6" />
          </Link>
          <Link
            href="/contact"
            className="flex h-[53px] items-center justify-center rounded-full bg-white px-[22px] text-base font-semibold text-ink xl:h-[63px] xl:px-[21.5px]"
          >
            Talk to our team
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
