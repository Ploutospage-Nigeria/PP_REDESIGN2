import Image from "next/image";
import Link from "next/link";

const columns = [
  {
    title: "Solutions",
    links: [
      { label: "OWA", href: "/#owa" },
      { label: "Medbooks", href: "/#medbooks" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About us", href: "/#about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#091826] text-white">
      <div className="mx-auto max-w-[1440px] px-5 pt-[47px] xl:px-[100px] xl:pt-[54px]">
        <div className="grid grid-cols-2 gap-x-[8px] xl:grid-cols-[400px_206px_206px_1fr] xl:gap-x-0">
          <div className="col-span-2 xl:col-span-1">
            <Link
              href="/"
              aria-label="Ploutos Page home"
              className="mt-[2.5px] inline-block xl:mt-[3.4px]"
            >
              <Image
                src="/images/footer/logo.png"
                alt="Ploutos Page"
                width={384}
                height={131}
                className="h-[51.5px] w-[151px] xl:h-[65.5px] xl:w-[192px]"
              />
            </Link>
            <p className="mt-[9.7px] max-w-[250px] text-sm leading-[22px] text-[#b7c0cc] xl:mt-[17.3px] xl:max-w-[210px] xl:leading-5 xl:text-[#b5babe]">
              Financial management for small and growing businesses.
            </p>
          </div>

          {columns.map((column) => (
            <div key={column.title} className="mt-[34.5px] xl:mt-[5.6px]">
              <h2 className="text-base leading-6 font-semibold">
                {column.title}
              </h2>
              <ul className="mt-[11.5px] space-y-[9px] text-[15px] leading-6 xl:mt-[19.7px] xl:space-y-[12.6px] xl:text-base">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 mt-[32px] xl:col-span-1 xl:mt-[5.6px]">
            <h2 className="text-base leading-6 font-semibold">Get in touch</h2>
            <ul className="mt-[11.5px] space-y-[9px] text-[15px] leading-6 xl:mt-[19.7px] xl:space-y-[12.6px] xl:text-base">
              <li>
                <a href="mailto:support@ploutospage.ng" className="underline">
                  support@ploutospage.ng
                </a>
              </li>
              <li>
                <a href="tel:+2348163489375" className="underline">
                  +234 816 348 9375
                </a>
              </li>
              <li className="max-w-[330px] text-[#04a3c5] xl:max-w-none xl:whitespace-nowrap">
                Suite 5, Mojisola Mall, Owode Ibeshe, Ikorodu, Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-[34.2px] border-t border-[#243549] pt-[22.6px] pb-[26px] text-center text-[13px] leading-5 text-[#9aa6b4] xl:mt-[77.4px] xl:border-[#424c56] xl:pt-[22px] xl:pb-[24px] xl:text-sm xl:text-[#9da3a9]">
          <span className="xl:text-lg xl:leading-none">©</span> 2026 Ploutos page
          limited. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
