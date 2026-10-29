import Image from "next/image";

import Reveal from "@/components/motion/Reveal";

const benefits = [
  {
    title: "WhatsApp voice notes",
    body: "Send your daily sales, purchases and expenses by voice. We record them for you.",
    icon: { src: "/icons/owa-voice.svg", width: 18, height: 24 },
  },
  {
    title: "Stock tracking",
    body: "Stock counted and valued, with fast- and slow-moving goods flagged.",
    icon: { src: "/icons/owa-stock.svg", width: 24, height: 26 },
  },
  {
    title: "Monthly profit report",
    body: "Explained to you face to face by your OWA agent.",
    icon: { src: "/icons/owa-report.svg", width: 22, height: 24 },
  },
  {
    title: "Tax-ready & audited",
    body: "Books that banks and tax offices accept.",
    icon: { src: "/icons/owa-tax.svg", width: 18, height: 24 },
  },
];

export default function OwaBenefits() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 pt-14 pb-14 xl:px-[100px] xl:py-[100px]">
        <Reveal stagger={0.12} className="text-center">
          <p
            data-reveal-item
            className="text-sm font-semibold text-[#4c1e72] xl:text-lg"
          >
            What you get
          </p>
          <h2
            data-reveal-item
            className="mx-auto mt-2 max-w-[330px] text-[26px] leading-[34.6px] font-bold text-[#1f0d30] xl:mt-4 xl:max-w-none xl:text-4xl xl:leading-[43.2px] xl:tracking-[-0.02em]"
          >
            Built for how traders really work
          </h2>
        </Reveal>

        <Reveal
          as="ul"
          stagger={0.12}
          className="mt-[25.6px] grid gap-3 xl:mt-[62.7px] xl:grid-cols-4 xl:gap-6"
        >
          {benefits.map((benefit, i) => (
            <li
              key={benefit.title}
              data-reveal-item
              className="hover-lift rounded-3xl border-[1.5px] border-[#ebe4f3] bg-white px-5 pt-6 pb-[26.6px] xl:h-[338.6px] xl:px-8 xl:pt-9 xl:pb-0"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-[52px] items-center justify-center rounded-[14px] bg-[#f3ecf9] xl:size-14">
                  <Image
                    src={benefit.icon.src}
                    alt=""
                    width={benefit.icon.width}
                    height={benefit.icon.height}
                  />
                </span>
                <span className="text-[15px] font-semibold text-[#a08bb8]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-[20.7px] text-[19px] leading-[26px] font-semibold text-[#2b1544] xl:mt-[51px] xl:text-xl xl:leading-7">
                {benefit.title}
              </h3>
              <p className="mt-[9.4px] text-[15px] leading-[24.4px] text-[#5a4c70] xl:mt-[17px] xl:text-base xl:leading-6">
                {benefit.body}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
