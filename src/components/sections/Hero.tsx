import Image from "next/image";
import Link from "next/link";

import ArrowRight from "@/components/icons/ArrowRight";
import Float from "@/components/motion/Float";
import Reveal from "@/components/motion/Reveal";

export default function Hero() {
  return (
    <section className="bg-navy">
      <div className="mx-auto flex max-w-[1440px] flex-col px-5 pt-[48.5px] pb-[65px] xl:flex-row xl:items-center xl:justify-between xl:pr-[101px] xl:pl-[100px] xl:py-[31px]">
        <Reveal immediate stagger={0.12} className="xl:max-w-[640px]">
          <h1
            data-reveal-item
            className="text-[34px] leading-[42.5px] font-semibold text-white xl:text-[60px] xl:leading-[72px] xl:tracking-[-0.018em]"
          >
            Your business deserves to be seen, understood and ready{" "}
            <span className="text-brand">to grow.</span>
          </h1>
          <p
            data-reveal-item
            className="mt-3.5 text-base leading-[26px] text-[#d5dee8] xl:mt-[11px] xl:max-w-[560px] xl:text-lg xl:leading-7 xl:text-white"
          >
            We help businesses manage finances, track inventory, stay tax-ready
            and build reliable financial records without any complexity.
          </p>
          <div
            data-reveal-item
            className="mt-[27.5px] flex flex-col gap-3 xl:mt-9 xl:flex-row xl:gap-6"
          >
            <Link
              href="/products"
              className="flex h-[52.5px] items-center justify-center gap-2 rounded-full bg-brand text-base font-bold text-white xl:h-16 xl:gap-[9px] xl:px-[21px]"
            >
              Explore our Solutions
              <ArrowRight className="size-5 xl:size-6" />
            </Link>
            <Link
              href="/contact"
              className="flex h-[52.5px] items-center justify-center rounded-full bg-white text-base font-bold text-navy xl:h-16 xl:px-[21px]"
            >
              Talk to our team
            </Link>
          </div>
        </Reveal>

        <Reveal
          immediate
          variant="right"
          delay={0.25}
          duration={1}
          className="relative mx-auto mt-[43px] w-[calc(100%-4px)] max-w-[520px] xl:mx-0 xl:mt-0 xl:w-[520px] xl:shrink-0 xl:pb-6"
        >
          <div className="absolute top-[14px] right-3.5 -bottom-[16.5px] -left-[18.5px] rounded-2xl bg-[#17385b] xl:top-6 xl:right-6 xl:bottom-0 xl:-left-6 xl:rounded-[20px] xl:bg-[#14304f]" />
          <Float className="relative">
            <Image
              src="/images/hero/hero.png"
              alt="Daily business activity — sales and expenses, voice-note records and stock counts — organised by Ploutos Page into a monthly business summary"
              width={1041}
              height={1145}
              sizes="(min-width: 1280px) 520px, calc(100vw - 44px)"
              preload
              className="h-auto w-full"
            />
          </Float>
        </Reveal>
      </div>
    </section>
  );
}
