"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { MOTION_TIME_SCALE } from "./timing";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Counts up to a value like "2,800+" when scrolled into view. */
export default function CountUp({
  value,
  duration = 1.6,
}: {
  value: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
      if (!el || !match) return;
      const [, prefix, digits, suffix] = match;
      const target = Number(digits.replace(/,/g, ""));
      const counter = { n: 0 };
      const render = () => {
        el.textContent = `${prefix}${Math.round(counter.n).toLocaleString("en-US")}${suffix}`;
      };

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        render();
        gsap.to(counter, {
          n: target,
          duration: duration * MOTION_TIME_SCALE,
          ease: "power2.out",
          onUpdate: render,
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
        return () => {
          el.textContent = value;
        };
      });
    },
    { scope: ref },
  );

  return <span ref={ref}>{value}</span>;
}
