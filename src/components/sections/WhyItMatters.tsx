import Image from "next/image";

const benefits = [
  {
    title: "Know what your business earns.",
    body: "Go beyond daily sales to understand expenses, profitability and business performance.",
    // Mobile Figma breaks before "expenses,", which browsers fit by under a pixel.
    bodyClass: "max-w-[300px] xl:max-w-none",
  },
  {
    title: "Reduce financial blind spots.",
    body: "Organised records and better stock visibility help you identify issues that might otherwise go unnoticed.",
    // Figma breaks this line before "that"; browsers fit it by a fraction of a pixel.
    bodyClass: "xl:max-w-[515px]",
  },
  {
    title: "Make compliance more manageable.",
    body: "Keep business information organised to support relevant tax and accounting processes.",
  },
  {
    title: "Build credibility with evidence.",
    body: "Create a more reliable financial history that can support conversations with banks, lenders, suppliers and other business partners.",
  },
  {
    title: "Focus on running your business.",
    body: "Get practical financial management support without having to build a full internal finance function.",
  },
];

export default function WhyItMatters() {
  return (
    <section className="bg-[#e6f8fc]">
      <div className="mx-auto flex max-w-[1440px] flex-col px-5 pt-[56px] pb-[54.5px] xl:flex-row xl:justify-between xl:px-[100px] xl:pt-[100px] xl:pb-[100px]">
        <div className="xl:w-[520px] xl:shrink-0">
          <p className="text-sm font-bold text-brand xl:text-lg">
            Why it matters
          </p>
          <h2 className="mt-[9.5px] text-[26px] leading-[34px] font-bold text-heading-mobile xl:mt-[11.5px] xl:text-4xl xl:leading-[44.4px] xl:tracking-[-0.02em] xl:text-heading">
            Better records. Better decisions. A stronger business.
          </h2>
          <Image
            src="/images/why-it-matters/illustration.png"
            alt="Better records (sales, stock and expenses captured consistently) lead to better decisions and a stronger business with a 12-month financial history"
            width={862}
            height={766}
            sizes="(min-width: 1280px) 431px, calc(100vw - 40px)"
            className="mt-[19.5px] h-auto w-full xl:mt-[20.5px] xl:w-[431px]"
          />
        </div>

        <ul className="mt-[30px] xl:mt-0 xl:max-w-[568px] xl:flex-1">
          {benefits.map((benefit, i) => (
            <li
              key={benefit.title}
              className={`relative pl-[34px] xl:pl-[35.3px] ${i === 0 ? "" : i === 1 ? "mt-[23px] xl:mt-[26.5px]" : "mt-[23px] xl:mt-[31px]"}`}
            >
              <Image
                src="/icons/check-double.svg"
                alt=""
                width={24}
                height={24}
                className="absolute -top-px left-px size-[21px] xl:-left-[1.5px] xl:size-6"
              />
              <h3 className="text-[17px] leading-6 font-bold text-heading-mobile xl:text-lg xl:leading-[26px] xl:text-heading">
                {benefit.title}
              </h3>
              <p
                className={`mt-[7px] text-[15px] leading-6 text-body-mobile xl:mt-[8.5px] xl:text-base xl:text-body ${benefit.bodyClass ?? ""}`}
              >
                {benefit.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
