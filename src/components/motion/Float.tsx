"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type ReactNode } from "react";

import { MOTION_TIME_SCALE } from "./timing";

gsap.registerPlugin(useGSAP);

/** Gently drifts its content up and down forever. */
export default function Float({
  children,
  className,
  distance = 10,
  duration = 2.5,
}: {
  children: ReactNode;
  className?: string;
  distance?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(ref.current, {
          y: -distance,
          duration: duration * MOTION_TIME_SCALE,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
