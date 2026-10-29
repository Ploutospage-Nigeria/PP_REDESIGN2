"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  useRef,
  type ElementType,
  type HTMLAttributes,
  type ReactNode,
} from "react";

import { MOTION_TIME_SCALE } from "./timing";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export type RevealVariant =
  | "up"
  | "left"
  | "right"
  | "scale"
  | "grow-x"
  | "grow-y"
  | "grow-down";

// Starting state and easing per variant, matching the motion on meedl.africa.
const variants: Record<RevealVariant, { from: gsap.TweenVars; ease: string }> =
  {
    up: { from: { y: 32 }, ease: "power3.out" },
    left: { from: { x: -48 }, ease: "back.out(1.5)" },
    right: { from: { x: 48 }, ease: "back.out(1.5)" },
    scale: { from: { scale: 0.9 }, ease: "back.out(1.7)" },
    "grow-x": {
      from: { scaleX: 0, transformOrigin: "left center" },
      ease: "power2.out",
    },
    "grow-y": {
      from: { scaleY: 0, transformOrigin: "center bottom" },
      ease: "back.out(1.7)",
    },
    "grow-down": {
      from: { scaleY: 0, transformOrigin: "center top" },
      ease: "power2.out",
    },
  };

type RevealProps = Omit<HTMLAttributes<HTMLElement>, "children"> & {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  /** Animate the descendants marked `data-reveal-item` one after another. */
  stagger?: number;
  /** Play straight away instead of when scrolled into view (above the fold). */
  immediate?: boolean;
};

export default function Reveal({
  children,
  as: Tag = "div",
  className,
  variant = "up",
  delay = 0,
  duration = 0.8,
  stagger,
  immediate = false,
  ...rest
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const targets =
        stagger === undefined
          ? el
          : // Only this group's items, not those of a stagger group nested inside it.
            gsap.utils
              .toArray<HTMLElement>("[data-reveal-item]", el)
              .filter(
                (item) =>
                  item.parentElement?.closest("[data-reveal-stagger]") === el,
              );
      const { from, ease } = variants[variant];
      const grow = variant.startsWith("grow");
      // Grow variants don't fade, so leave any inline opacity alone.
      const fade = grow ? {} : { opacity: 0 };

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // CSS transitions (e.g. hover-lift) would fight the tween, so pause them.
        gsap.set(targets, { ...from, ...fade, transition: "none" });
        el.dataset.reveal = "ready";
        const to: gsap.TweenVars = {
          x: 0,
          y: 0,
          scale: 1,
          scaleX: 1,
          scaleY: 1,
          ...(grow ? {} : { opacity: 1 }),
          duration: duration * MOTION_TIME_SCALE,
          delay: delay * MOTION_TIME_SCALE,
          ease,
          stagger:
            stagger === undefined ? undefined : stagger * MOTION_TIME_SCALE,
          clearProps: grow
            ? "transform,transition"
            : "transform,opacity,transition",
        };

        if (immediate) {
          gsap.to(targets, to);
        } else if (stagger === undefined) {
          gsap.to(targets, {
            ...to,
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
          });
        } else {
          // Each item enters as it scrolls into view; items arriving together
          // still come in one after another.
          ScrollTrigger.batch(targets, {
            start: "top 88%",
            once: true,
            onEnter: (batch) => gsap.to(batch, to),
          });
        }
      });
      mm.add("(prefers-reduced-motion: reduce)", () => {
        el.dataset.reveal = "ready";
      });
    },
    { scope: ref },
  );

  return (
    <Tag
      {...rest}
      ref={ref}
      className={className}
      data-reveal={variant}
      data-reveal-stagger={stagger === undefined ? undefined : ""}
    >
      {children}
    </Tag>
  );
}
