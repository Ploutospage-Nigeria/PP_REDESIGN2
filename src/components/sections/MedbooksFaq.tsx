import Link from "next/link";

import Reveal from "@/components/motion/Reveal";

export const faqs: { q: string; a: string; width?: string }[] = [
  {
    q: "Who is MedBooks for?",
    a: "Healthcare businesses such as pharmacies, hospitals, clinics and distributors that want clearer records of their finances, stock and obligations.",
    width: "xl:max-w-[560px]",
  },
  {
    q: "Can MedBooks help with inventory and expiry tracking?",
    a: "Yes. Drugs, consumables and supplies are tracked for movement, expiry and discrepancies, so issues surface before they affect margins.",
  },
  {
    q: "Does MedBooks handle tax filing?",
    a: "MedBooks helps prepare and organise the information needed for applicable obligations, including VAT, PAYE, withholding tax and company income tax. Whether filing is included depends on your service package.",
  },
  {
    q: "Can it help us monitor HMO claims?",
    a: "Yes. Relevant HMO claims and receivables are kept organised so you can see what is outstanding and follow up on payments. The exact scope depends on the service provided and the information available.",
    width: "xl:max-w-[590px]",
  },
  {
    q: "How much does MedBooks cost?",
    a: "Pricing depends on the size of your business, number of locations and the services you need. Talk to us and we will recommend a package.",
    width: "xl:max-w-[560px]",
  },
  {
    q: "Does MedBooks provide audited accounts?",
    a: "MedBooks keeps your records organised to support financial statement preparation and professional audits. Formal audit opinions are issued by appropriately qualified, independent auditors.",
  },
];

function AgentCard() {
  return (
    <div className="rounded-3xl bg-[#0f1e4a] px-5 pt-6 pb-6 xl:w-[378px] xl:px-8 xl:pt-8 xl:pb-6">
      <span className="flex size-12 items-center justify-center rounded-xl bg-[#22326b]">
        <svg
          viewBox="0 0 24 25"
          fill="none"
          aria-hidden="true"
          className="h-[25px] w-6"
        >
          <path
            d="M1 5C1 3.93913 1.42143 2.92172 2.17157 2.17157C2.92172 1.42143 3.93913 1 5 1H19C20.0609 1 21.0783 1.42143 21.8284 2.17157C22.5786 2.92172 23 3.93913 23 5V15C23 16.0609 22.5786 17.0783 21.8284 17.8284C21.0783 18.5786 20.0609 19 19 19H11L5 24V19C3.93913 19 2.92172 18.5786 2.17157 17.8284C1.42143 17.0783 1 16.0609 1 15V5Z"
            stroke="#5b8bff"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 10h.01M12 10h.01M16.5 10h.01"
            stroke="#5b8bff"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <p className="mt-5 text-[22px] leading-7 font-semibold text-white">
        Still have questions?
      </p>
      <p className="mt-1 text-[15px] leading-6 text-[#bac5ea] xl:text-base">
        Our team can talk you through MedBooks.
      </p>
      <Link
        href="/contact"
        className="mt-4 flex h-[46px] items-center justify-center rounded-full bg-[#2451d6] text-[15px] font-semibold text-white xl:mt-[18px] xl:h-[43px] xl:text-base"
      >
        Talk to our team
      </Link>
    </div>
  );
}

export default function MedbooksFaq() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col px-5 pt-14 pb-16 xl:flex-row xl:justify-between xl:px-[100px] xl:pt-[100px] xl:pb-[136px]">
        <div className="xl:w-[400px]">
          <Reveal stagger={0.12}>
            <p
              data-reveal-item
              className="text-sm font-semibold text-[#5b8bff] xl:text-lg"
            >
              Questions
            </p>
            <h2
              data-reveal-item
              className="mt-2 text-[29px] leading-[36px] font-bold tracking-[-0.02em] text-[#0f1e4a] xl:mt-3 xl:text-4xl xl:leading-[44.6px]"
            >
              Frequently asked <br className="max-xl:hidden" />
              questions
            </h2>
          </Reveal>
          <Reveal className="mt-[62px] hidden xl:block">
            <AgentCard />
          </Reveal>
        </div>

        <Reveal
          as="dl"
          stagger={0.08}
          className="mt-[31px] border-t border-[#0f1e4a] xl:mt-[1.7px] xl:w-[740px]"
        >
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              data-reveal-item
              className="flex gap-4 border-b border-[#e3e8f2] pt-5 pb-6 xl:gap-0 xl:pt-[34.6px] xl:pb-[19.8px] xl:first:pt-[18.2px]"
            >
              <span className="mt-[3px] w-6 shrink-0 text-xs font-semibold text-[#0f1e4a] xl:mt-1 xl:w-[73px] xl:text-[13px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <dt className="text-[17px] leading-6 font-semibold text-[#0f1e4a] xl:text-lg">
                  {faq.q}
                </dt>
                <dd
                  className={`mt-3 text-[15px] leading-[23.4px] text-[#4a5b80] xl:mt-[18.4px] xl:text-base xl:leading-6 ${faq.width ?? "xl:max-w-[600px]"}`}
                >
                  {faq.a}
                </dd>
              </div>
            </div>
          ))}
        </Reveal>

        <Reveal className="mt-6 xl:hidden">
          <AgentCard />
        </Reveal>
      </div>
    </section>
  );
}
