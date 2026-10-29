import Image from "next/image";

import CountUp from "@/components/motion/CountUp";
import Reveal from "@/components/motion/Reveal";

const stats = [
  {
    value: "2,800+",
    title: "Business served",
    body: "Demonstrates reach and customer adoption.",
    icon: "/icons/stat-businesses.svg",
  },
  {
    value: "6",
    title: "States reached",
    body: "Demonstrates geographic reach across Nigeria.",
    icon: "/icons/stat-states.svg",
  },
  {
    value: "2",
    title: "Business-focused solutions",
    body: "OWA for market traders and MedBooks for pharmacies.",
    icon: "/icons/stat-solutions.svg",
  },
];

export default function Stats() {
  return (
    <section className="bg-[#e8ebef]">
      <div className="mx-auto max-w-[1440px] px-5 pt-[47px] pb-[55px] lg:px-0 lg:pt-[51px] lg:pb-[89px]">
        <Reveal
          as="ul"
          stagger={0.15}
          className="grid gap-4 lg:mx-auto lg:max-w-[1008px] lg:grid-cols-3 lg:gap-[30px]"
        >
          {stats.map((stat) => (
            <li
              key={stat.title}
              data-reveal-item
              className="hover-lift rounded-[15px] bg-white px-5 pt-[22px] pb-6 lg:h-[202px] lg:rounded-[13px] lg:pt-5"
            >
              <div className="flex items-center justify-between lg:items-end">
                <p className="text-[32px] leading-[38px] font-bold text-brand lg:text-[30px] lg:leading-9">
                  <CountUp value={stat.value} />
                </p>
                <Image
                  src={stat.icon}
                  alt=""
                  width={62}
                  height={62}
                  className="size-12 lg:size-[62px]"
                />
              </div>
              <h3 className="mt-2.5 text-[17px] leading-6 font-bold text-heading-mobile lg:mt-[9px] lg:text-base lg:text-heading">
                {stat.title}
              </h3>
              <p className="mt-[5px] text-sm leading-[22px] text-body-mobile lg:mt-[3.5px] lg:max-w-[260px] lg:leading-5 lg:text-body">
                {stat.body}
              </p>
            </li>
          ))}
        </Reveal>

        <Reveal stagger={0.12} className="mt-[57px] text-center lg:mt-[60px]">
          <p
            data-reveal-item
            className="text-sm font-bold text-brand lg:text-lg"
          >
            The problem
          </p>
          <h2
            data-reveal-item
            className="mx-auto mt-[7px] max-w-[350px] text-[26px] leading-[34px] font-bold text-heading-mobile lg:max-w-[600px] lg:mt-[1.5px] lg:text-4xl lg:leading-[43.2px] lg:tracking-[-0.02em] lg:text-heading"
          >
            A busy business isn’t always a visible business.
          </h2>
          <p
            data-reveal-item
            className="mx-auto mt-[13px] max-w-[340px] text-[15px] leading-6 text-body-mobile lg:mt-[13.5px] lg:max-w-[620px] lg:text-base lg:text-body"
          >
            Millions of small businesses run on cash and memory with no records,
            tax compliance and audited accounts. Banks cannot see them and they
            cannot access the credit they need to grow.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
