import Image from "next/image";

import Reveal from "@/components/motion/Reveal";

import ContactForm from "./ContactForm";

const channels = [
  {
    label: "Whatsapp",
    value: "09087675645",
    href: "https://wa.me/2349087675645",
    icon: "/icons/contact-whatsapp.svg",
  },
  {
    label: "General enquiries",
    value: "support@ploutospage.ng",
    href: "mailto:support@ploutospage.ng",
    icon: "/icons/contact-email.svg",
  },
  {
    label: "Office",
    value: "Suite 5, Mojisola Mall, Owode Ibeshe, Ikorodu, Lagos, Nigeria",
    icon: "/icons/contact-office.svg",
  },
];

export default function Contact() {
  return (
    <section className="flex-1 bg-[#f8f8f8]">
      <div className="mx-auto max-w-[1440px] px-5 pt-8 pb-[121.9px] xl:pt-16 xl:pb-[156px]">
        <Reveal className="mx-auto overflow-hidden rounded-3xl bg-white xl:grid xl:w-[954px] xl:grid-cols-2 xl:rounded-[32px]">
          <div className="bg-[#102640] px-5 pt-[31px] pb-[52px] xl:px-6 xl:pt-[62px] xl:pb-0">
            <p className="text-base leading-6 text-brand">Contact</p>
            <h1 className="mt-[13px] text-[30px] leading-[38.2px] font-bold text-white xl:mt-[12.5px] xl:text-4xl xl:leading-[43.5px] xl:tracking-[-0.02em]">
              Let’s find the right support for{" "}
              <span className="text-brand">your business.</span>
            </h1>
            <p className="mt-[16px] max-w-[290px] text-base leading-[24.9px] text-white xl:mt-[12.1px] xl:max-w-[400px] xl:leading-6">
              Tell us about your business and the Ploutos Page team will help
              you choose between OWA for market traders and MedBooks for
              pharmacies.
            </p>

            <ul className="mt-[14.8px] xl:mt-[83.2px]">
              {channels.map((channel) => (
                <li
                  key={channel.label}
                  className="flex items-start gap-[13px] border-b border-[#3a4e63] pt-[15.1px] pb-[17.3px] xl:pt-5 xl:pb-[8.5px]"
                >
                  <span className="flex size-[42px] shrink-0 items-center justify-center rounded-[10px] bg-[#17385a]">
                    <Image src={channel.icon} alt="" width={24} height={24} />
                  </span>
                  <span className="text-sm leading-5">
                    <span className="block text-[#cfd4da]">
                      {channel.label}
                    </span>
                    {channel.href ? (
                      <a
                        href={channel.href}
                        className="mt-[3px] block text-[15px] font-medium text-white xl:text-sm"
                      >
                        {channel.value}
                      </a>
                    ) : (
                      <span className="mt-[3px] block text-[15px] font-medium text-white xl:text-sm xl:whitespace-nowrap">
                        {channel.value}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="px-5 pt-[29.7px] pb-[32.5px] xl:pt-[28.8px] xl:pb-[32.4px]">
            <h2 className="mb-[18px] text-2xl leading-8 text-ink xl:mb-[18px]">
              Send an enquiry
            </h2>
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
