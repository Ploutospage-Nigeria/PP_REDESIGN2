import Link from "next/link";

import ArrowRight from "@/components/icons/ArrowRight";

export default function WhoWeAre() {
  return (
    <section className="bg-[#fafeff]">
      <div className="mx-auto flex max-w-[1440px] flex-col px-5 pt-[56px] pb-[56px] xl:flex-row xl:justify-between xl:px-[100px] xl:pt-[100px] xl:pb-[100px]">
        <div>
          <p className="text-sm font-bold text-brand xl:text-lg">Who we are</p>
          <h2 className="mt-[9px] text-[26px] leading-[33.8px] font-bold text-heading-mobile xl:mt-[13px] xl:max-w-[520px] xl:text-4xl xl:leading-[43.8px] xl:tracking-[-0.02em] xl:text-heading">
            Every business deserves the financial clarity to grow.
          </h2>
        </div>

        <div className="mt-[20.7px] xl:mt-0 xl:w-[539px] xl:shrink-0">
          <p className="text-[17px] leading-[26px] font-bold text-heading-mobile xl:text-lg xl:leading-7 xl:text-heading">
            We believe small businesses should not have to choose between
            running their operations and keeping their finances in order.
          </p>
          <p className="mt-[9.8px] text-[15px] leading-[23.8px] text-body-mobile xl:mt-[8.2px] xl:text-base xl:leading-6 xl:text-body">
            Ploutos Page provides practical financial management services that
            help business owners understand their performance, organise their
            records and build stronger foundations for growth.
          </p>
          <p className="mt-[14.6px] text-[15px] leading-[23.8px] text-body-mobile xl:text-base xl:leading-6 xl:text-body">
            Our work combines people, processes and technology to make financial
            management more accessible to the businesses that need it.
          </p>
          <Link
            href="/contact"
            className="mt-[24px] inline-flex items-center gap-[9px] border-b-[1.5px] border-brand pb-[5px] text-base font-bold text-[#004c5b] xl:mt-[22.4px] xl:border-b xl:pb-[6.2px]"
          >
            Talk to the ploutos team
            <ArrowRight className="size-6" />
          </Link>
        </div>
      </div>
    </section>
  );
}
