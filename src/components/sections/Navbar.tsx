"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
        scrolled
          ? "bg-white/70 shadow-[0_1px_0_rgba(8,24,38,0.08),0_8px_24px_rgba(8,24,38,0.06)] backdrop-blur-xl backdrop-saturate-150"
          : "bg-white"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-[1440px] items-center justify-between pr-5 pl-[17px] lg:h-[84px] lg:pr-[79px] lg:pl-[100px]">
        <Link href="/" aria-label="Ploutos Page home" className="shrink-0">
          {/* logo-transparent.png is logo.png with its white background removed, so it sits on the glass. */}
          <Image
            src="/images/navbar/logo-transparent.png"
            alt="Ploutos Page"
            width={218}
            height={92}
            preload
            className="h-[39px] w-[93px] lg:h-[46px] lg:w-[109px]"
          />
        </Link>

        <ul className="hidden items-center gap-12 text-base text-ink lg:flex">
          <li>
            <Link href={links[0].href}>{links[0].label}</Link>
          </li>
          <li>
            <button type="button" className="flex items-center gap-2">
              Services
              <Image
                src="/icons/chevron-down.svg"
                alt=""
                width={14}
                height={8}
              />
            </button>
          </li>
          {links.slice(1).map((link) => (
            <li key={link.href}>
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            href="/products"
            className="flex h-9 items-center rounded-full bg-brand px-[17px] text-[12.5px] font-bold text-white lg:h-12 lg:px-[22.5px] lg:text-[15.5px]"
          >
            Explore our products
          </Link>
          <button type="button" aria-label="Open menu" className="lg:hidden">
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 1H17M1 6H17M1 11H17"
                stroke="#0B1B2E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
