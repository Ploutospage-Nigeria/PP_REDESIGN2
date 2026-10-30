"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

type HashLinkProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
};

// Next's router only scrolls to a hash when the hash changes, so clicking
// "/#products" while already on "/#products" does nothing. In that case we
// scroll to the target ourselves; every other click is left to Next.
export default function HashLink({ href, onClick, ...props }: HashLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey
    ) {
      return;
    }

    const url = new URL(href, window.location.href);
    if (
      url.pathname !== window.location.pathname ||
      url.search !== window.location.search ||
      !url.hash ||
      url.hash !== window.location.hash
    ) {
      return;
    }

    const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView();
  };

  return <Link href={href} onClick={handleClick} {...props} />;
}
