import Image from "next/image";
import type { CSSProperties } from "react";

import Reveal from "@/components/motion/Reveal";

// The diagram is drawn at its 560px desktop width and scales with its
// container (the mobile diagram is the same drawing at 350px).
const u = (n: number) => `calc(var(--u) * ${n})`;

const products = [
  {
    name: "OWA",
    tagline: "For market traders",
    left: 0,
    box: "bg-[#4c2072]",
    nameClass: "text-[#f5d90a]",
    taglineClass: "text-[#dcd2e3]",
  },
  {
    name: "MedBooks",
    tagline: "For healthcare businesses",
    left: 288.6,
    box: "bg-[#2451d6]",
    nameClass: "text-white",
    taglineClass: "text-[#d3dcf7]",
  },
];

const engines = [
  {
    name: "Pepcode",
    body: "The bookkeeping engine: records, reconciles and reports",
    icon: { src: "/icons/engine-pepcode.svg", width: 22, height: 26 },
    top: 199.6,
  },
  {
    name: "AuditMe",
    body: "The audit engine: certified, bank-ready accounts",
    icon: { src: "/icons/engine-auditme.svg", width: 22, height: 25 },
    top: 328.1,
  },
];

// Connector lines, with the delay each one draws in after the boxes appear.
const lines = [
  { left: 134.6, top: 103.4, width: 2, height: 29, delay: 0.45 },
  { left: 422.5, top: 103.4, width: 2, height: 29, delay: 0.45 },
  { left: 134.6, top: 130.4, width: 289.9, height: 2, delay: 0.65 },
  { left: 278.6, top: 130.4, width: 2, height: 23.3, delay: 0.85 },
  { left: 278.6, top: 179.5, width: 2, height: 20.1, delay: 1 },
];

export default function Technology() {
  return (
    <section className="bg-[#0f2540]">
      <div className="mx-auto flex max-w-[1440px] flex-col px-5 pt-[56px] pb-[57px] xl:flex-row xl:justify-between xl:px-[100px] xl:pt-[100px] xl:pb-[100px]">
        <Reveal stagger={0.12} className="xl:w-[540px]">
          <p
            data-reveal-item
            className="text-sm font-bold text-brand xl:text-lg"
          >
            Our technology
          </p>
          <h2
            data-reveal-item
            className="mt-[9px] text-[26px] leading-[33.8px] font-bold text-white xl:mt-[13px] xl:max-w-[440px] xl:text-4xl xl:leading-[44.5px] xl:tracking-[-0.02em]"
          >
            Powered by Pepcode and AuditMe
          </h2>
          <p
            data-reveal-item
            className="mt-[11.3px] text-[15px] leading-[24.2px] text-white xl:mt-[10.5px] xl:text-base xl:leading-6"
          >
            Behind every OWA and MedBooks customer are two software engines
            built by Ploutos Page. Our customers never need to learn them: our
            team uses them to do the work for them.
          </p>
        </Reveal>

        <div className="@container mt-[32.3px] w-full xl:mt-0 xl:w-[560px] xl:shrink-0">
          <div
            className="relative aspect-[560/439.7]"
            style={{ "--u": "calc(100cqw / 560)" } as CSSProperties}
          >
            <Reveal
              variant="scale"
              stagger={0.15}
              duration={0.6}
              className="absolute inset-0"
            >
              {products.map((product) => (
                <div
                  key={product.name}
                  data-reveal-item
                  className={`absolute top-0 text-center ${product.box}`}
                  style={{
                    left: u(product.left),
                    width: u(271.4),
                    height: u(103.4),
                    borderRadius: u(20),
                  }}
                >
                  <p
                    className={`absolute inset-x-0 leading-none font-bold ${product.nameClass}`}
                    style={{ top: u(30.7), fontSize: u(26) }}
                  >
                    {product.name}
                  </p>
                  <p
                    className={`absolute inset-x-0 leading-none font-medium ${product.taglineClass}`}
                    style={{ top: u(67.6), fontSize: u(13.5) }}
                  >
                    {product.tagline}
                  </p>
                </div>
              ))}
            </Reveal>

            {lines.map((line, i) => (
              <Reveal
                key={i}
                as="span"
                aria-hidden="true"
                variant={line.width > line.height ? "grow-x" : "grow-down"}
                delay={line.delay}
                duration={0.35}
                className="absolute bg-[#3e5f82]"
                style={{
                  left: u(line.left),
                  top: u(line.top),
                  width: u(line.width),
                  height: u(line.height),
                }}
              >
                {null}
              </Reveal>
            ))}
            <Reveal
              as="p"
              delay={0.9}
              duration={0.6}
              className="absolute inset-x-0 text-center leading-none font-semibold text-[#9fb5cc]"
              style={{ top: u(161.5), fontSize: u(12) }}
            >
              POWERED BY
            </Reveal>

            <Reveal stagger={0.15} delay={1.1} className="absolute inset-0">
              {engines.map((engine) => (
                <div
                  key={engine.name}
                  data-reveal-item
                  className="absolute left-0 w-full bg-[#1c3a5c]"
                  style={{
                    top: u(engine.top),
                    height: u(111.6),
                    borderRadius: u(20),
                  }}
                >
                  <span
                    className="absolute flex items-center justify-center bg-[#24496f]"
                    style={{
                      left: u(24),
                      top: u(28),
                      width: u(56),
                      height: u(56),
                      borderRadius: u(16),
                    }}
                  >
                    <Image
                      src={engine.icon.src}
                      alt=""
                      width={engine.icon.width}
                      height={engine.icon.height}
                      style={{
                        width: u(engine.icon.width),
                        height: u(engine.icon.height),
                      }}
                    />
                  </span>
                  <p
                    className="absolute leading-none font-bold text-white"
                    style={{ left: u(104), top: u(32), fontSize: u(22) }}
                  >
                    {engine.name}
                  </p>
                  <p
                    className="absolute leading-none whitespace-nowrap text-[#b8c9db]"
                    style={{ left: u(104), top: u(63.3), fontSize: u(15.5) }}
                  >
                    {engine.body}
                  </p>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
