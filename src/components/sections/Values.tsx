import Image from "next/image";

import Reveal from "@/components/motion/Reveal";

const values = [
  {
    title: "Clarity over comfort",
    body: "We tell clients the truth about the numbers.",
    icon: { src: "/icons/value-clarity.svg", width: 23, height: 23 },
  },
  {
    title: "Ownership",
    body: "We treat every client’s business as our own.",
    icon: { src: "/icons/value-ownership.svg", width: 25, height: 13 },
  },
  {
    title: "Discipline",
    body: "Weekly books, monthly reports, filed deadlines.",
    icon: { src: "/icons/value-discipline.svg", width: 24, height: 25 },
  },
  {
    title: "Respect",
    body: "For clients, colleagues and our standards.",
    icon: { src: "/icons/value-respect.svg", width: 22, height: 21 },
  },
  {
    title: "Growth",
    body: "We invest in people who invest in us.",
    icon: { src: "/icons/value-growth.svg", width: 21, height: 23 },
  },
];

export default function Values() {
  return (
    <section className="bg-[#f5f7fa]">
      <div className="mx-auto max-w-[1440px] px-5 pt-[56px] pb-[56px] xl:px-[100px] xl:pt-[103.7px] xl:pb-[99px]">
        <Reveal stagger={0.12}>
          <p
            data-reveal-item
            className="text-[13px] font-bold text-brand xl:text-sm"
          >
            OUR VALUES
          </p>
          <h2
            data-reveal-item
            className="mt-2 text-[34px] leading-[42px] font-bold text-[#17385a] xl:mt-3 xl:text-[54px] xl:leading-[64px] xl:tracking-[-0.02em]"
          >
            What we stand for
          </h2>
        </Reveal>

        <Reveal
          as="ul"
          stagger={0.12}
          className="mt-[30px] grid grid-cols-2 gap-x-3 gap-y-3.5 xl:mt-[56.5px] xl:grid-cols-3 xl:gap-5"
        >
          {values.map((value, i) => {
            const featured = i === 0;
            return (
              <li
                key={value.title}
                data-reveal-item
                className={`hover-lift rounded-[20px] ${
                  featured
                    ? "col-span-2 bg-[#17385a] px-6 pt-6 pb-[34.5px] xl:h-[278px] xl:p-9"
                    : "bg-white p-[18px] xl:min-h-[238px] xl:px-9 xl:pt-9 xl:pb-5"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`flex size-11 items-center justify-center rounded-xl xl:size-14 ${
                      featured ? "bg-[#244464]" : "bg-[#e6f8fc]"
                    }`}
                  >
                    <Image
                      src={value.icon.src}
                      alt=""
                      width={value.icon.width}
                      height={value.icon.height}
                    />
                  </span>
                  <span className="text-[13px] font-semibold text-brand">
                    0{i + 1}
                  </span>
                </div>
                <h3
                  className={`font-bold ${
                    featured
                      ? "mt-[14.4px] text-[30px] leading-9 text-white xl:mt-[30px] xl:text-[44px] xl:leading-[52px]"
                      : "mt-[18px] text-[19px] leading-6 text-[#17385a] xl:mt-[30px] xl:text-2xl xl:leading-8"
                  }`}
                >
                  {value.title}
                </h3>
                <p
                  className={
                    featured
                      ? "mt-2 text-[17px] leading-[26px] text-[#d5dee8] xl:mt-3 xl:text-2xl xl:leading-8"
                      : "mt-2 text-[15px] leading-[22px] text-body-mobile xl:mt-3 xl:text-base xl:leading-[26px] xl:text-body"
                  }
                >
                  {value.body}
                </p>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
