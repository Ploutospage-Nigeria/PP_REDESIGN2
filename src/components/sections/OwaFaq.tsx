import Link from "next/link";

import Reveal from "@/components/motion/Reveal";

export const faqs: { q: string; a: string; width?: string }[] = [
  {
    q: "Who is OWA for?",
    a: "Market traders and informal retailers, from individual shop owners to wholesalers and traders running several shops, who want clearer records of their stock, sales and profit.",
    // Figma wraps this answer narrower than the others.
    width: "xl:max-w-[550px]",
  },
  {
    q: "Do I need accounting knowledge?",
    a: "No. You share business information through WhatsApp, an OWA agent helps count your stock, and your monthly profit report is explained to you.",
  },
  {
    q: "How does WhatsApp fit in?",
    a: "WhatsApp is how you share your business activity with OWA, using messages and, where supported, voice notes. That information is organised into your records.",
  },
  {
    q: "Will OWA automatically give me a loan after six months?",
    a: "No. Eligible Co-operative members may qualify for a financing assessment. Eligibility does not guarantee approval; the provider decides.",
  },
  {
    q: "Can I get goods on credit instead of cash?",
    a: "Depending on eligibility, assessment and the applicable offer, financing may be a cash loan or goods on credit. Terms are explained before you commit.",
  },
  {
    q: "How much does OWA cost?",
    a: "₦5,000/month for Retailers, ₦15,000/month for Wholesalers and ₦50,000/month for distributors. Co-operative savings are separate from your plan fee.",
  },
];

function AgentCard() {
  return (
    <div className="rounded-3xl bg-[#4c1e72] px-5 pt-6 pb-6 xl:w-[378px] xl:px-8 xl:pt-8 xl:pb-6">
      <span className="flex size-12 items-center justify-center rounded-xl bg-white/10">
        <svg
          viewBox="0 0 24 25"
          fill="none"
          aria-hidden="true"
          className="h-[25px] w-6"
        >
          <path
            d="M1 5C1 3.93913 1.42143 2.92172 2.17157 2.17157C2.92172 1.42143 3.93913 1 5 1H19C20.0609 1 21.0783 1.42143 21.8284 2.17157C22.5786 2.92172 23 3.93913 23 5V15C23 16.0609 22.5786 17.0783 21.8284 17.8284C21.0783 18.5786 20.0609 19 19 19H11L5 24V19C3.93913 19 2.92172 18.5786 2.17157 17.8284C1.42143 17.0783 1 16.0609 1 15V5Z"
            stroke="#f4d90b"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M7.5 10h.01M12 10h.01M16.5 10h.01"
            stroke="#f4d90b"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <p className="mt-5 text-[22px] leading-7 font-semibold text-white">
        Still have questions?
      </p>
      <p className="mt-1 text-[15px] leading-6 text-[#e4dbee] xl:text-base">
        An OWA agent can talk you through it.
      </p>
      <Link
        href="/contact"
        className="mt-4 flex h-[46px] items-center justify-center rounded-full bg-[#f5d90a] text-[15px] font-semibold text-[#1f0d30] xl:mt-[18px] xl:h-[43px] xl:text-base"
      >
        Speak to an OWA agent
      </Link>
    </div>
  );
}

export default function OwaFaq() {
  return (
    <section className="bg-[#f7f1fa]">
      <div className="mx-auto flex max-w-[1440px] flex-col px-5 pt-14 pb-14 xl:flex-row xl:justify-between xl:px-[100px] xl:pt-[100px] xl:pb-[117px]">
        <div className="xl:w-[400px]">
          <Reveal stagger={0.12}>
            <p
              data-reveal-item
              className="text-sm font-semibold text-[#4c1e72] xl:text-lg"
            >
              Questions traders ask us
            </p>
            <h2
              data-reveal-item
              className="mt-2 text-[26px] leading-[34px] font-bold tracking-[-0.02em] text-[#1f0d30] xl:mt-3 xl:text-4xl xl:leading-[44.6px]"
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
          className="mt-6 border-t border-[#63398a] xl:mt-0 xl:w-[740px]"
        >
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              data-reveal-item
              className="flex gap-4 border-b border-[#e5dcef] pt-5 pb-6 xl:gap-0 xl:pt-[34.6px] xl:pb-[22.4px] xl:first:pt-[21.6px]"
            >
              <span className="mt-[3px] w-6 shrink-0 text-xs font-semibold text-[#4c1e72] xl:mt-1 xl:w-[73px] xl:text-[13px]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <dt className="text-[17px] leading-6 font-semibold text-[#1f0d30] xl:text-lg">
                  {faq.q}
                </dt>
                <dd
                  className={`mt-3 text-[15px] leading-[23.4px] text-[#5a4c70] xl:mt-[15px] xl:max-w-[600px] xl:text-base xl:leading-6 ${faq.width ?? ""}`}
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
