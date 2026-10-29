import Reveal from "@/components/motion/Reveal";

export default function MissionVision() {
  return (
    <section className="bg-white">
      <Reveal
        stagger={0.15}
        className="mx-auto grid max-w-[1440px] gap-[16.5px] px-5 pt-12 pb-12 xl:grid-cols-[704px_1fr] xl:gap-6 xl:px-[100px] xl:pt-[99.5px] xl:pb-[100px]"
      >
        <article
          data-reveal-item
          className="relative overflow-hidden rounded-[20px] bg-[#17385a] px-6 pt-[30.4px] pb-[31.7px] xl:h-[420px] xl:rounded-[32px] xl:px-14 xl:pt-[61px]"
        >
          <span
            aria-hidden="true"
            className="absolute -top-[63.8px] -right-[83.5px] size-[186.5px] rounded-full border-[31px] border-[#244464] xl:-top-[115.7px] xl:-right-[117px] xl:size-[315.4px] xl:border-[39.5px]"
          />
          <p className="absolute top-[25.5px] right-6 text-[30px] leading-none font-bold text-[#2b6c93] xl:top-[47px] xl:text-[#0d6386] xl:right-14 xl:text-[40px]">
            01
          </p>
          <h2 className="relative text-[13px] font-semibold text-brand xl:text-sm">
            OUR MISSION
          </h2>
          <p className="relative mt-[36.5px] text-lg leading-7 font-bold text-white xl:mt-[140px] xl:text-2xl xl:leading-[31.8px]">
            To give every small business owner we serve the same financial
            clarity, discipline and confidence that a large corporation has,
            without the cost or complexity of building an{" "}
            <span className="whitespace-nowrap">in-house</span> finance team.
          </p>
        </article>

        <article
          data-reveal-item
          className="relative rounded-[20px] bg-[#e6f8fb] px-6 pt-[30.4px] pb-[31.7px] xl:h-[420px] xl:rounded-[32px] xl:pt-[61px] xl:pr-10 xl:pl-14"
        >
          <p className="absolute top-[25.5px] right-6 text-[30px] leading-none font-bold text-[#8ccfe0] xl:top-[47px] xl:right-14 xl:text-[40px] xl:text-[#99ccd7]">
            02
          </p>
          <h2 className="text-[13px] font-semibold text-brand xl:text-sm">
            OUR VISION
          </h2>
          <p className="mt-[36.5px] text-[17px] leading-[26px] font-bold text-[#14385a] xl:mt-[140px] xl:text-xl xl:leading-[30.2px]">
            To become the most trusted name in financial management for Africa’s
            small and growing businesses.
          </p>
        </article>
      </Reveal>
    </section>
  );
}
