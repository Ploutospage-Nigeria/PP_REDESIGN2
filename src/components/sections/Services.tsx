import Image from "next/image";

const services = [
  {
    title: "Business recordkeeping",
    body: "We help organise sales, purchases, expenses and other business transactions into useful, consistent records.",
    icon: "/icons/service-recordkeeping.svg",
  },
  {
    title: "Financial visibility",
    body: "Understand how your business is performing with clearer reports on income, expenses, stock and profitability.",
    icon: "/icons/service-visibility.svg",
  },
  {
    title: "Inventory oversight",
    body: "Improve visibility into stock movement, discrepancies and product expiry where relevant to your business.",
    icon: "/icons/service-inventory.svg",
  },
  {
    title: "Tax and compliance support",
    body: "Get support organising the information and records needed for applicable tax filings and compliance obligations.",
    icon: "/icons/service-tax.svg",
  },
  {
    title: "Accounting and audit support",
    body: "Build organised financial records that support financial statement preparation and professional audit processes.",
    icon: "/icons/service-audit.svg",
  },
  {
    title: "Financing readiness",
    body: "Consistent, verifiable records can help demonstrate business performance when engaging with potential financing partners.",
    icon: "/icons/service-financing.svg",
  },
];

export default function Services() {
  return (
    <section className="bg-[#091826]">
      <div className="mx-auto max-w-[1440px] px-5 pt-[56px] pb-[56px] lg:px-0 lg:pt-[101px] lg:pb-[100px]">
        <div className="text-center text-white">
          <p className="text-sm font-bold lg:text-lg">More than bookkeeping</p>
          <h2 className="mx-auto mt-[9px] text-[26px] leading-[33.3px] font-bold lg:mt-[12.5px] lg:max-w-[620px] lg:text-4xl lg:leading-[43px] lg:tracking-[-0.02em]">
            Turn day-to-day business activity into useful financial information.
          </h2>
          <p className="mx-auto mt-3 text-[15px] leading-[24.6px] text-[#ced7e2] lg:mt-[12.5px] lg:max-w-[500px] lg:text-base lg:leading-6 lg:text-white">
            Practical financial management services that move businesses from
            fragmented records to a clear understanding of their operations.
          </p>
        </div>

        <ul className="mt-[29.5px] grid gap-[17px] lg:mx-auto lg:mt-[57px] lg:max-w-[912px] lg:grid-cols-3 lg:gap-x-8 lg:gap-y-[33px]">
          {services.map((service) => (
            <li
              key={service.title}
              className="rounded-[18px] bg-white px-5 pt-[18px] pb-6 lg:px-4 lg:pt-[29.5px] lg:pb-[26px]"
            >
              <span className="flex h-[46px] w-[49px] items-center justify-center rounded-2xl bg-[#e6f8fc]">
                <Image src={service.icon} alt="" width={28} height={28} />
              </span>
              <h3 className="mt-[15px] text-[17px] leading-6 font-bold text-heading-mobile lg:mt-[18.5px] lg:text-base lg:text-heading">
                {service.title}
              </h3>
              <p className="mt-[5px] text-sm leading-[22px] text-body-mobile lg:mt-1.5 lg:max-w-[225px] lg:leading-5 lg:text-[#303c4f]">
                {service.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
