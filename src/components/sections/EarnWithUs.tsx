import Image from "next/image";
import Link from "next/link";

const offers = [
  {
    name: "MedBooks",
    amount: "₦18,000",
    body: "per client, plus up to 20% monthly on renewals",
    icon: { src: "/icons/partner-medbooks.svg", width: 22, height: 22 },
    card: "border-[#2451d6] xl:border-x-slate-200 xl:border-b-slate-200",
    tile: "bg-[#eaf0fd]",
    nameClass: "text-[#2451d6]",
    bar: "bg-[#2451d6]",
  },
  {
    name: "OWA",
    amount: "₦10,000",
    body: "per trader, plus up to 20% monthly on renewals",
    icon: { src: "/icons/partner-owa.svg", width: 24, height: 22 },
    card: "border-[#4c2072] xl:border-x-slate-200 xl:border-b-slate-200",
    tile: "bg-[#f3ecf9]",
    nameClass: "text-[#4c2072]",
    bar: "bg-[#4c2072]",
  },
];

const bars = [
  { height: 8, opacity: 0.25 },
  { height: 12, opacity: 0.37 },
  { height: 16, opacity: 0.49 },
  { height: 20, opacity: 0.61 },
  { height: 24, opacity: 0.73 },
  { height: 28, opacity: 0.86 },
];

export default function EarnWithUs() {
  return (
    <section className="bg-white">
      <div className="mx-auto flex max-w-[1440px] flex-col px-5 pt-[52px] pb-[55px] xl:flex-row xl:justify-between xl:px-[100px] xl:pt-[96.4px] xl:pb-[98.5px]">
        <div>
          <p className="text-sm font-bold text-brand xl:text-lg">
            Earn with us
          </p>
          <h2 className="mt-[9px] text-[26px] leading-[33.8px] font-bold text-heading-mobile xl:mt-[13px] xl:text-4xl xl:leading-[43.2px] xl:tracking-[-0.02em] xl:text-heading">
            Become a sales partner
          </h2>
          <p className="mt-[12px] text-[15px] leading-6 text-body-mobile xl:mt-[13px] xl:max-w-[500px] xl:text-base xl:leading-[24.4px] xl:text-body">
            Earn commission for every OWA trader or MedBooks client you sign,
            plus a share of every renewal. Students, graduates, NYSC corps
            members and freelancers welcome.
          </p>
          <Link
            href="https://wa.me/"
            className="mt-[22.6px] flex h-[53px] items-center justify-center gap-[10px] rounded-full bg-[#17385a] text-base font-bold text-white xl:mt-[92.6px] xl:inline-flex xl:h-[57px] xl:gap-[9px] xl:px-[31px] xl:text-[17px]"
          >
            <Image
              src="/icons/chat.svg"
              alt=""
              width={18}
              height={17}
              className="h-[14px] w-[15px] xl:h-[17px] xl:w-[18px]"
            />
            Apply on WhatsApp
          </Link>
        </div>

        <ul className="mt-[31px] grid gap-5 xl:mt-0 xl:w-[562px] xl:shrink-0 xl:grid-cols-2">
          {offers.map((offer) => (
            <li
              key={offer.name}
              className={`rounded-3xl border border-t-[6px] bg-white px-[19px] pt-[20px] pb-[30px] xl:h-[332.5px] xl:border-t-[9px] xl:px-[31px] xl:pt-[32px] ${offer.card}`}
            >
              <span
                className={`flex size-[52px] items-center justify-center rounded-[14px] ${offer.tile}`}
              >
                <Image
                  src={offer.icon.src}
                  alt=""
                  width={offer.icon.width}
                  height={offer.icon.height}
                />
              </span>
              <p
                className={`mt-[19px] text-[17px] leading-6 font-bold ${offer.nameClass}`}
              >
                {offer.name}
              </p>
              <p className="mt-[6px] text-[44px] leading-[52px] xl:mt-[8px] font-bold text-[#0e1b2a]">
                {offer.amount}
              </p>
              <p className="mt-[7px] text-base leading-[26.5px] text-[#4a5462] xl:mt-[11px]">
                {offer.body}
              </p>
              <div className="mt-[13px] flex items-end xl:mt-[7px]">
                <span className="flex items-end gap-1.5">
                  {bars.map((bar) => (
                    <span
                      key={bar.height}
                      className={`w-2.5 rounded-sm ${offer.bar}`}
                      style={{ height: bar.height, opacity: bar.opacity }}
                    />
                  ))}
                </span>
                <span className="ml-5 text-[13px] font-semibold text-[#4b5563]">
                  Renewals
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
