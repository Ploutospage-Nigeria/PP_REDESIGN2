import Image from "next/image";
import Link from "next/link";

import ArrowRight from "@/components/icons/ArrowRight";
import Reveal from "@/components/motion/Reveal";

export default function MedbooksHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#1c1e4b]">
      {/* The photo shows on desktop only; mobile is a solid navy, as in the design. */}
      <Image
        src="/images/medbooks/hero-pharmacy.jpg"
        alt=""
        fill
        preload
        sizes="100vw"
        className="-z-20 hidden object-cover xl:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 hidden bg-[#01032f]/80 xl:block"
      />

      <Reveal
        immediate
        stagger={0.12}
        className="mx-auto flex max-w-[1440px] flex-col items-center px-[19px] pt-[55px] pb-[58px] text-center xl:px-[100px] xl:pt-[148px] xl:pb-[148.4px]"
      >
        <p
          data-reveal-item
          className="flex h-[31.5px] items-center rounded-full bg-white p-[3.5px] pr-4 text-sm text-[#1f2340] xl:h-[36.6px] xl:pr-[25px] xl:text-base"
        >
          <span className="flex h-full items-center rounded-full bg-[#2031b7] px-3 text-sm font-semibold text-white xl:px-[10px] xl:text-base">
            Medbooks
          </span>
          <span className="ml-3 xl:ml-[15px]">For healthcare businesses</span>
        </p>
        <h1
          data-reveal-item
          className="mt-[22px] text-[32px] leading-[41px] font-bold text-white xl:mt-[11.5px] xl:text-6xl xl:leading-[73px] xl:tracking-[-0.02em]"
        >
          Clearer finances, stock and compliance for{" "}
          <br className="max-xl:hidden" />
          healthcare businesses
        </h1>
        <p
          data-reveal-item
          className="mt-[14px] max-w-[352px] text-base leading-[26px] text-[#e3e4f0] xl:mt-[12.1px] xl:max-w-[700px] xl:text-lg xl:leading-[28px] xl:text-white"
        >
          MedBooks helps pharmacies, hospitals, diagnostics and distributors
          organise financial records, track stock and expiry, manage tax and
          follow up HMO claims.
        </p>
        <div
          data-reveal-item
          className="mt-[28.3px] flex w-full flex-col gap-[11px] xl:mt-[35.5px] xl:w-auto xl:flex-row xl:gap-[25px]"
        >
          <Link
            href="/contact"
            className="flex h-[53.5px] items-center justify-center gap-[9px] rounded-full bg-[#2031b7] px-[21px] text-base font-bold text-white xl:h-16"
          >
            Get started with Medbooks
            <ArrowRight className="size-6" />
          </Link>
          <Link
            href="/contact"
            className="flex h-[51px] items-center justify-center rounded-full bg-white px-5 text-base font-semibold text-ink xl:h-[63px]"
          >
            Talk to our team
          </Link>
        </div>
      </Reveal>
    </section>
  );
}
