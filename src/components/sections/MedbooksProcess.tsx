import type { CSSProperties, ReactNode } from "react";

import Reveal from "@/components/motion/Reveal";

// Step cards are drawn at their 231.4×175.5 desktop size and scale with their
// width (the mobile cards are the same drawing, 1.29× larger).
const u = (n: number) => `calc(var(--u) * ${n})`;

const accent = "#5b8cff";

function Card({
  children,
  blue = false,
}: {
  children: ReactNode;
  blue?: boolean;
}) {
  return (
    <div className="@container w-full">
      <div
        className={`relative aspect-[231.4/175.5] rounded-2xl ${blue ? "bg-[#2451d6]" : "bg-[#182a5e]"}`}
        style={{ "--u": "calc(100cqw / 231.4)" } as CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}

function Abs({
  x,
  y,
  w,
  h,
  r,
  className = "",
  style,
  children,
}: {
  x: number;
  y: number;
  w?: number;
  h?: number;
  r?: number;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
}) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        left: u(x),
        top: u(y),
        width: w === undefined ? undefined : u(w),
        height: h === undefined ? undefined : u(h),
        borderRadius: r === undefined ? undefined : u(r),
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** A line of text positioned by its vertical centre. */
function Line({
  children,
  x,
  y,
  size,
  className,
}: {
  children: ReactNode;
  x: number;
  y: number;
  size: number;
  className: string;
}) {
  return (
    <span
      className={`absolute -translate-y-1/2 leading-none whitespace-nowrap ${className}`}
      style={{ left: u(x), top: u(y), fontSize: u(size) }}
    >
      {children}
    </span>
  );
}

function Icon({
  size,
  children,
  stroke = accent,
  viewBox = "0 0 24 24",
}: {
  size: number;
  children: ReactNode;
  stroke?: string;
  viewBox?: string;
}) {
  return (
    <svg
      viewBox={viewBox}
      fill="none"
      stroke={stroke}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      style={{ width: u(size), height: u(size) }}
    >
      {children}
    </svg>
  );
}

const icons = {
  cross: <path d="M9 3h6v6h6v6h-6v6H9v-6H3V9h6z" />,
  lines: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="2.5" />
      <path d="M8 9h8M8 13h8" />
    </>
  ),
  box: <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5zM3 7.5l9 4.5 9-4.5M12 12v9" />,
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
    </>
  ),
  doc: <path d="M5 2.5h9l5 5V21.5H5zM14 2.5v5h5M8.5 13h7M8.5 17h5" />,
  shield: (
    <path d="M12 2.8 20 6v6c0 4.6-3.4 8-8 9.2C7.4 20 4 16.6 4 12V6zM12 8.5v7M8.5 12h7" />
  ),
};

function UnderstandCard() {
  const chips = [
    { label: "Branches", w: 93.7 },
    { label: "Reporting needs", w: 132.3 },
    { label: "Challenges", w: 104 },
  ];
  return (
    <Card>
      <Abs
        x={19.7}
        y={19.7}
        w={39.3}
        h={39.3}
        r={8}
        className="flex items-center justify-center bg-[#21377a]"
      >
        <Icon size={24}>{icons.cross}</Icon>
      </Abs>
      <Line x={71.1} y={40.1} size={14} className="font-semibold text-white">
        Your pharmacy
      </Line>
      {chips.map((chip, i) => (
        <Abs
          key={chip.label}
          x={19.7}
          y={75.6 + i * 34}
          w={chip.w}
          h={29.5}
          r={14.75}
          className="flex items-center bg-[#21377a] font-semibold text-[#c7d3f5]"
          style={{ paddingLeft: u(12.6), gap: u(8), fontSize: u(13) }}
        >
          <span
            className="shrink-0 rounded-full bg-[#5b8cff]"
            style={{ width: u(8), height: u(8) }}
          />
          {chip.label}
        </Abs>
      ))}
    </Card>
  );
}

function OrganiseCard() {
  return (
    <Card>
      {["Sales", "Purchases", "Expenses"].map((label, i) => (
        <Abs
          key={label}
          x={19.7}
          y={21.9 + i * 45.8}
          w={191.3}
          h={37.8}
          r={8}
          className="flex items-center bg-[#21377a] font-semibold text-white"
          style={{ paddingLeft: u(11.4), gap: u(9), fontSize: u(14) }}
        >
          <Icon size={18}>{icons.lines}</Icon>
          {label}
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            className="absolute"
            style={{ right: u(9), width: u(16.6), height: u(16.6) }}
          >
            <circle cx="8" cy="8" r="8" fill="#5b8cff" />
            <path
              d="M4.6 8.2 7 10.5l4.4-4.6"
              fill="none"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Abs>
      ))}
    </Card>
  );
}

function MonitorCard() {
  const tiles = [
    { label: "Inventory", icon: icons.box },
    { label: "Expiry", icon: icons.calendar },
    { label: "Tax", icon: icons.doc },
    { label: "HMO claims", icon: icons.shield },
  ];
  return (
    <Card>
      {tiles.map((tile, i) => (
        <Abs
          key={tile.label}
          x={19.7 + (i % 2) * 101.4}
          y={19.7 + Math.floor(i / 2) * 73.3}
          w={91}
          h={62}
          r={10}
          className="bg-[#21377a]"
        >
          <Abs x={12.7} y={12} w={19} h={19}>
            <Icon size={19}>{tile.icon}</Icon>
          </Abs>
          <Line
            x={12.7}
            y={46.9}
            size={12.5}
            className="font-semibold text-white"
          >
            {tile.label}
          </Line>
        </Abs>
      ))}
    </Card>
  );
}

function ReviewCard() {
  const bars = [
    [38.6, 9.1],
    [46.9, 14.4],
    [43.1, 12.1],
    [55.2, 18.9],
    [61.3, 23.4],
    [68.8, 28.7],
  ];
  return (
    <Card>
      <Line x={19.7} y={34.9} size={14} className="font-semibold text-white">
        Monthly report
      </Line>
      {[
        { label: "Revenue", x: 19.7, dot: "bg-[#3b5098]" },
        { label: "Profit", x: 99.3, dot: "bg-[#5b8cff]" },
      ].map((item) => (
        <span key={item.label}>
          <Abs x={item.x} y={58.1} w={8} h={8} r={4} className={item.dot} />
          <Line x={item.x + 10.6} y={62.1} size={12} className="text-[#b8c6ea]">
            {item.label}
          </Line>
        </span>
      ))}
      {bars.map(([total, fill], i) => (
        <span key={i}>
          <Abs
            x={19.7 + i * 33.3}
            y={152.9 - total}
            w={25.7}
            h={total}
            r={4}
            className="bg-[#3b5098]"
          />
          <Abs
            x={19.7 + i * 33.3}
            y={152.9 - fill}
            w={25.7}
            h={fill}
            className="rounded-b-[inherit] bg-[#5b8cff]"
            style={{ borderRadius: u(4) }}
          />
        </span>
      ))}
    </Card>
  );
}

function DecideCard() {
  return (
    <Card blue>
      <Line x={19.7} y={34.9} size={14} className="font-semibold text-white">
        Your next decision
      </Line>
      {["Operations", "Compliance", "Growth"].map((label, i) => {
        const last = i === 2;
        return (
          <Abs
            key={label}
            x={19.7}
            y={57.5 + i * 35.9}
            w={191.4}
            h={29.5}
            r={14.75}
            className={`flex items-center font-semibold ${last ? "bg-white text-[#2451d6]" : "bg-[#466de1] text-white"}`}
            style={{ paddingLeft: u(16), fontSize: u(13) }}
          >
            {label}
            <span className="absolute" style={{ right: u(15.6) }}>
              <Icon
                size={11.5}
                stroke={last ? "#2451d6" : "white"}
                viewBox="0 0 12 12"
              >
                <path d="M6 10.5v-9M2 5.5l4-4 4 4" strokeWidth="1.6" />
              </Icon>
            </span>
          </Abs>
        );
      })}
    </Card>
  );
}

// Desktop text widths that reproduce Figma's line breaks in each column.
const bodyWidths = [
  "xl:max-w-[200px]",
  "xl:max-w-[228px]",
  "xl:max-w-[223px]",
  "xl:max-w-[223px]",
  "xl:max-w-[228px]",
];

const steps = [
  {
    title: "Understand your operations",
    body: "We learn about your pharmacy, its structure, reporting needs and challenges.",
    card: <UnderstandCard />,
  },
  {
    title: "Organise your records",
    body: "Transactions, purchases and expenses are captured through the agreed process.",
    card: <OrganiseCard />,
  },
  {
    title: "Monitor stock and obligations",
    body: "Inventory, expiry, tax requirements and HMO claims are organised for visibility.",
    card: <MonitorCard />,
  },
  {
    title: "Review performance",
    body: "Reports show revenue, expenses, profitability and other indicators.",
    card: <ReviewCard />,
  },
  {
    title: "Prepare for the next decision",
    body: "Make better-informed decisions about operations, compliance and growth.",
    card: <DecideCard />,
  },
];

export default function MedbooksProcess() {
  return (
    <section className="bg-[#0f1e4a]">
      <div className="mx-auto max-w-[1440px] px-5 pt-[58.5px] pb-[61px] xl:px-[100.7px] xl:pt-[98px] xl:pb-[100px]">
        <Reveal stagger={0.12}>
          <p
            data-reveal-item
            className="text-sm leading-5 font-semibold text-[#5b8cff] xl:text-lg xl:leading-7"
          >
            A clearer view of your business
          </p>
          <h2
            data-reveal-item
            className="mt-[8.3px] text-[27px] leading-[34px] font-bold tracking-[-0.02em] text-white xl:mt-[14.8px] xl:text-4xl xl:leading-[43.2px]"
          >
            From everyday transactions <br />
            to useful financial insight.
          </h2>
        </Reveal>

        <Reveal
          as="ol"
          stagger={0.15}
          className="mt-[32.3px] grid gap-[32.2px] xl:mt-[76px] xl:grid-cols-5 xl:gap-[20.4px]"
        >
          {steps.map((step, i) => {
            const last = i === steps.length - 1;
            return (
              <li
                key={step.title}
                data-reveal-item
                className="relative pl-[52.6px] xl:pl-0"
              >
                {/* Mobile timeline segment down to the next step's circle. */}
                {!last && (
                  <span
                    aria-hidden="true"
                    className="absolute top-[18px] -bottom-[50.2px] left-[17.7px] w-0.5 bg-[#21377a] xl:hidden"
                  />
                )}
                <div className="absolute top-px left-[1.7px] xl:static xl:mb-[23.4px] xl:flex xl:items-center">
                  <span
                    className={`relative z-10 flex size-[34px] shrink-0 items-center justify-center rounded-full border-2 text-sm font-semibold text-white xl:size-[45.4px] xl:text-base ${
                      last
                        ? "border-[#2451d6] bg-[#2451d6]"
                        : "border-[#5b8cff] bg-[#0f1e4a]"
                    }`}
                  >
                    {i + 1}
                  </span>
                  {!last && (
                    <span
                      aria-hidden="true"
                      className="hidden h-0.5 flex-1 bg-[#21377a] xl:-mr-[20.4px] xl:block"
                    />
                  )}
                </div>
                {step.card}
                <h3 className="mt-4 text-[19px] leading-[26px] font-semibold text-white xl:mt-[23.8px] xl:text-xl xl:leading-[30.3px]">
                  {step.title}
                </h3>
                <p
                  className={`mt-[8.2px] text-[15px] leading-[23.8px] text-[#b8c6ea] xl:mt-[15.8px] xl:text-base xl:leading-[21.2px] ${bodyWidths[i]}`}
                >
                  {step.body}
                </p>
              </li>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
