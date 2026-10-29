import Image from "next/image";
import Link from "next/link";

import ArrowRight from "@/components/icons/ArrowRight";
import Reveal from "@/components/motion/Reveal";

const products = [
  {
    id: "owa",
    name: "OWA",
    image: "/images/products/owa.png",
    imageAlt:
      "OWA: a market stall, a WhatsApp voice note being recorded and a monthly profit chart",
    panel: "bg-[#4c1e72]",
    tag: "For market traders",
    tagClass: "bg-[#f3ecf9] text-[#4c1e72]",
    title: "Know your profit. Every month.",
    body: "Daily sales and stock by WhatsApp voice note, monthly profit reports, tax-ready and audited books, and the OWA Co-operative for savings and inventory loans.",
    link: "Discover OWA",
    href: "/products/owa",
    linkClass: "text-[#4c1e72]",
  },
  {
    id: "medbooks",
    name: "MedBooks",
    image: "/images/products/medbooks.png",
    imageAlt:
      "MedBooks for pharmacies, hospitals, diagnostics and distributors, showing this week's bookkeeping, PAYE and WHT filing done and HMO claims tracked",
    panel: "bg-[#1d3a8a]",
    tag: "For healthcare businesses",
    tagClass: "bg-[#eaf0fd] text-[#2351d6]",
    title: "Run a compliant, bankable healthcare business.",
    body: "Weekly bookkeeping, tax filing, inventory assurance, HMO claims tracking and audited accounts for pharmacies, hospitals, clinics and distributors.",
    link: "Discover MedBooks",
    href: "/products/medbooks",
    linkClass: "text-[#2351d6]",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="scroll-mt-16 bg-[#f5f7fa] lg:scroll-mt-[84px]"
    >
      <div className="mx-auto max-w-[1440px] px-5 pt-[57.5px] pb-[55px] lg:px-[100px] lg:pt-[100px] lg:pb-[100px]">
        <Reveal stagger={0.12} className="text-center">
          <p
            data-reveal-item
            className="text-sm font-bold text-brand lg:text-lg"
          >
            Our products
          </p>
          <h2
            data-reveal-item
            className="mt-[7px] text-[26px] leading-[34.4px] font-bold text-heading-mobile lg:mt-[13.5px] lg:text-4xl lg:leading-[43.2px] lg:tracking-[-0.02em] lg:text-heading"
          >
            One finance team. Two industries.
          </h2>
          <p
            data-reveal-item
            className="mx-auto mt-3 text-[15px] leading-6 text-body-mobile lg:mt-[11.5px] lg:max-w-[480px] lg:text-base lg:leading-[24.7px] lg:text-body"
          >
            Each product is built for the businesses it serves, and delivered by
            our team every week.
          </p>
        </Reveal>

        <Reveal
          stagger={0.15}
          className="mt-8 grid gap-5 lg:mt-[83px] lg:grid-cols-2 lg:gap-6"
        >
          {products.map((product) => (
            <article
              key={product.name}
              id={product.id}
              data-reveal-item
              className="hover-lift flex scroll-mt-[84px] flex-col overflow-hidden [--lift-scale:1.015] rounded-[21px] lg:scroll-mt-[108px] bg-white lg:min-h-[653.5px] lg:rounded-[29px]"
            >
              <div className={`relative aspect-[608/300] ${product.panel}`}>
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 608px, calc(100vw - 40px)"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col pt-[23px] pr-6 pb-[30px] pl-5 lg:pt-9 lg:pr-8 lg:pb-[31px] lg:pl-10">
                <p
                  className={`flex h-[29px] items-center self-start rounded-full px-3 text-[13px] font-semibold lg:h-[30.5px] lg:px-4 lg:text-sm lg:tracking-[-0.01em] ${product.tagClass}`}
                >
                  {product.tag}
                </p>
                <h3 className="mt-3.5 text-[22px] leading-[31px] font-bold text-heading-mobile lg:mt-5 lg:text-[30px] lg:leading-[38.3px] lg:text-[#0e1b2a]">
                  {product.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-6 text-body-mobile lg:mt-[17px] lg:text-base lg:text-body">
                  {product.body}
                </p>
                <Link
                  href={product.href}
                  className={`mt-[21.5px] flex items-center gap-2.5 self-start text-base font-bold lg:mt-auto lg:gap-2 ${product.linkClass}`}
                >
                  {product.link}
                  <ArrowRight className="size-5 lg:size-6" />
                </Link>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
