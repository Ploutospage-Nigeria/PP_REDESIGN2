import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

import Reveal from "@/components/motion/Reveal";

// Each panel is drawn at its 620×430 desktop size and scales with its width
// (the mobile panels are the same drawing, 0.56× smaller).
const u = (n: number) => `calc(var(--u) * ${n})`;

function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="@container w-full">
      <div
        className="relative aspect-[620/430] rounded-[28px] bg-[#eef2fd]"
        style={{ "--u": "calc(100cqw / 620)" } as CSSProperties}
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

/** A line of text, positioned by its vertical centre. */
function Line({
  children,
  x,
  y,
  size,
  className,
  right = false,
}: {
  children: ReactNode;
  x: number;
  y: number;
  size: number;
  className: string;
  right?: boolean;
}) {
  return (
    <span
      className={`absolute -translate-y-1/2 leading-none whitespace-nowrap ${className}`}
      style={{
        [right ? "right" : "left"]: u(x),
        top: u(y),
        fontSize: u(size),
      }}
    >
      {children}
    </span>
  );
}

const chipTones = {
  green: "bg-[#dff5e5] text-[#1d8a43]",
  amber: "bg-[#fff1d6] text-[#b45309]",
  blue: "bg-[#e3eafc] text-[#2451d6]",
} as const;

function Chip({
  children,
  tone,
  y,
  right = 25,
}: {
  children: ReactNode;
  tone: keyof typeof chipTones;
  y: number;
  right?: number;
}) {
  return (
    <span
      className={`absolute flex -translate-y-1/2 items-center font-semibold whitespace-nowrap ${chipTones[tone]}`}
      style={{
        right: u(right),
        top: u(y),
        height: u(20),
        paddingInline: u(9),
        borderRadius: u(10),
        fontSize: u(11.5),
      }}
    >
      {children}
    </span>
  );
}

function InnerCard({ children }: { children: ReactNode }) {
  return (
    <>
      <Abs x={37} y={35.5} w={545.5} h={332.6} r={18} className="bg-white">
        {children}
      </Abs>
      <Line x={35.5} y={400.6} size={11.5} className="text-[#8a93ad]">
        Example data
      </Line>
    </>
  );
}

const stockRows = [
  {
    name: "Amoxicillin 500mg",
    qty: "120 boxes",
    bars: [10, 14, 18, 21, 28],
    status: { label: "Moving well", tone: "green" as const },
  },
  {
    name: "Paracetamol syrup",
    qty: "48 bottles",
    bars: [16, 14, 12, 10, 7],
    status: { label: "Expires 03 Jan", tone: "amber" as const },
  },
  {
    name: "ORS sachets",
    qty: "200 sachets",
    bars: [18, 18, 18, 18, 26],
    status: { label: "6 short", tone: "amber" as const },
  },
  {
    name: "Vitamin C tablets",
    qty: "75 packs",
    bars: [3, 3, 3, 3, 3],
    status: { label: "Slow-moving", tone: "blue" as const },
  },
];

function StockPanel() {
  return (
    <Panel>
      <InnerCard>
        <Line x={22} y={31} size={15} className="font-semibold text-[#0f1e4a]">
          Stock this week
        </Line>
        <Chip tone="blue" y={31}>
          <span className="text-[#5b6584]">Example</span>
        </Chip>
        {[
          ["PRODUCT", 22, false],
          ["MOVEMENT", 298.6, false],
          ["STATUS", 25, true],
        ].map(([label, x, right]) => (
          <Line
            key={label as string}
            x={x as number}
            y={71}
            size={10.5}
            right={right as boolean}
            className="tracking-[0.02em] text-[#8a93ad]"
          >
            {label}
          </Line>
        ))}
        <Abs x={22} y={91.7} w={501.5} h={1} className="bg-[#e7ecf6]" />
        {stockRows.map((row, i) => {
          const y = 113.8 + i * 57.7;
          const muted = i === 3;
          return (
            <span key={row.name}>
              {i < 3 && (
                <Abs
                  x={22}
                  y={y + 35.5}
                  w={501.5}
                  h={1}
                  className="bg-[#eef1f7]"
                />
              )}
              <Line
                x={22}
                y={y}
                size={14}
                className="font-semibold text-[#0f1e4a]"
              >
                {row.name}
              </Line>
              <Line x={22} y={y + 19} size={11.5} className="text-[#7b84a0]">
                {row.qty}
              </Line>
              {row.bars.map((h, b) => {
                const last = b === row.bars.length - 1;
                return (
                  <Abs
                    key={b}
                    x={298.6 + b * 14}
                    y={y + 18 - (muted ? 1.5 : h)}
                    w={muted ? 7 : 7.5}
                    h={muted ? 3 : h}
                    r={1.5}
                    className={
                      last && !muted && i !== 1
                        ? "bg-[#2451d6]"
                        : "bg-[#c5d3f7]"
                    }
                    style={
                      i === 1 && last
                        ? {
                            backgroundColor: "#2451d6",
                            top: u(y + 11),
                            height: u(7),
                          }
                        : muted && last
                          ? { backgroundColor: "#2451d6" }
                          : undefined
                    }
                  />
                );
              })}
              <Chip tone={row.status.tone} y={y + 6}>
                {row.status.label}
              </Chip>
            </span>
          );
        })}
      </InnerCard>
    </Panel>
  );
}

const claims = [
  {
    id: "Claim #1042",
    amount: "₦184,500",
    status: "Paid",
    tone: "green" as const,
  },
  {
    id: "Claim #1057",
    amount: "₦96,200",
    status: "Outstanding",
    tone: "amber" as const,
  },
  {
    id: "Claim #1063",
    amount: "₦212,000",
    status: "Submitted",
    tone: "blue" as const,
  },
  {
    id: "Claim #1071",
    amount: "₦58,750",
    status: "Outstanding",
    tone: "amber" as const,
  },
];

function ClaimsPanel() {
  return (
    <Panel>
      <InnerCard>
        <Line x={22} y={31} size={15} className="font-semibold text-[#0f1e4a]">
          HMO claims
        </Line>
        <Line right x={25} y={22} size={10.5} className="text-[#7b84a0]">
          Outstanding
        </Line>
        <Line
          right
          x={25}
          y={44}
          size={18}
          className="font-bold text-[#c2570c]"
        >
          ₦154,950
        </Line>
        <Abs x={22} y={71} w={501.5} h={1} className="bg-[#e7ecf6]" />
        {claims.map((claim, i) => {
          const y = 100.5 + i * 60.4;
          // Amounts end a fixed gap before each status chip.
          const chipWidth = { Paid: 39, Outstanding: 79, Submitted: 70 }[
            claim.status
          ];
          return (
            <span key={claim.id}>
              {i < 3 && (
                <Abs
                  x={22}
                  y={y + 31}
                  w={501.5}
                  h={1}
                  className="bg-[#eef1f7]"
                />
              )}
              <Line
                x={22}
                y={y}
                size={14}
                className="font-semibold text-[#0f1e4a]"
              >
                {claim.id}
              </Line>
              <Line
                right
                x={25 + (chipWidth ?? 0) + 14}
                y={y}
                size={13.5}
                className="text-[#3f4866]"
              >
                {claim.amount}
              </Line>
              <Chip tone={claim.tone} y={y}>
                {claim.status}
              </Chip>
            </span>
          );
        })}
      </InnerCard>
    </Panel>
  );
}

const taxes = [
  { code: "VAT", name: "Value added tax" },
  { code: "PAYE", name: "Pay as you earn" },
  { code: "WHT", name: "Withholding tax" },
  { code: "CIT", name: "Company income tax" },
];

function TaxPanel() {
  return (
    <Panel>
      {taxes.map((tax, i) => (
        <Abs
          key={tax.code}
          x={37 + (i % 2) * 282.3}
          y={35.5 + Math.floor(i / 2) * 187.5}
          w={263.2}
          h={168.5}
          r={18}
          className="bg-white"
        >
          <Abs
            x={22}
            y={22}
            w={43}
            h={43}
            r={10}
            className="flex items-center justify-center bg-[#e9effc]"
          >
            <Image
              src="/icons/mb-lines.svg"
              alt=""
              width={26}
              height={18}
              style={{ width: u(20), height: u(14) }}
            />
          </Abs>
          <svg
            viewBox="0 0 26 26"
            aria-hidden="true"
            className="absolute"
            style={{ right: u(22), top: u(31), width: u(26), height: u(26) }}
          >
            <path
              d="M13 26C20.1797 26 26 20.1797 26 13C26 5.8203 20.1797 0 13 0C5.8203 0 0 5.8203 0 13C0 20.1797 5.8203 26 13 26Z"
              fill="#2451D6"
            />
            <path
              d="m7.6 13.3 3.6 3.6 7.2-7.4"
              fill="none"
              stroke="white"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <Line x={22} y={109} size={28} className="font-bold text-[#0f1e4a]">
            {tax.code}
          </Line>
          <Line x={22} y={140} size={13.5} className="text-[#5b6584]">
            {tax.name}
          </Line>
        </Abs>
      ))}
    </Panel>
  );
}

const features = [
  {
    label: "01 · Inventory oversight",
    title:
      "See stock movement, expiry and discrepancies before they hit your margins.",
    body: "Improve visibility into the issues that could affect margins and working capital.",
    tags: ["Stock movement", "Product expiry", "Inventory discrepancies"],
    panel: <StockPanel />,
  },
  {
    label: "02 · HMO claims tracking",
    title: "Know what is outstanding and follow up on payments.",
    body: "Keep relevant HMO claims and receivables organised. The exact scope depends on the service provided and information available.",
    panel: <ClaimsPanel />,
  },
  {
    label: "03 · Tax and compliance support",
    title: "Information organised for the follow up on payments.",
    body: "Support preparing and organising what is required for applicable obligations, including VAT, PAYE, withholding tax and company income tax where relevant.",
    panel: <TaxPanel />,
  },
];

const extras: {
  n: string;
  title: string;
  body: string;
  icon: string;
  bodyClass?: string;
}[] = [
  {
    n: "04",
    title: "Financial recordkeeping",
    body: "Income, purchases, expenses and transactions organised into consistent records.",
    icon: "/icons/mb-doc.svg",
  },
  {
    n: "05",
    title: "Branch and departmental reporting",
    body: "See differences in revenue, expenses and results across locations.",
    icon: "/icons/mb-branch.svg",
  },
  {
    n: "06",
    title: "Accounting and audit support",
    body: "Records that support financial statement preparation and professional audits.",
    bodyClass: "xl:max-w-[300px]",
    icon: "/icons/mb-doc-check.svg",
  },
];

export default function MedbooksServices() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-[22px] pt-[56px] pb-[64px] xl:px-[100px] xl:pt-[100px] xl:pb-[60px]">
        <Reveal stagger={0.12} className="text-center">
          <p
            data-reveal-item
            className="text-sm font-semibold text-[#2351d6] xl:text-base"
          >
            What MedBooks helps you manage
          </p>
          <h2
            data-reveal-item
            className="mx-auto mt-[9px] max-w-[330px] text-[26px] leading-[34.6px] font-bold tracking-[-0.02em] text-[#0f1e4a] xl:mt-[19px] xl:max-w-[700px] xl:text-4xl xl:leading-[44.4px]"
          >
            The financial operations behind a well-run healthcare business.
          </h2>
        </Reveal>

        <div className="mt-[34px] space-y-[50.6px] xl:mt-[80px] xl:space-y-[100px]">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex flex-col xl:flex-row xl:items-center xl:gap-[72px]"
            >
              <Reveal
                variant="left"
                duration={1}
                className="order-2 mt-[22px] xl:order-1 xl:mt-0 xl:w-[620px] xl:shrink-0"
              >
                {feature.panel}
              </Reveal>
              <Reveal stagger={0.1} className="order-1 xl:order-2 xl:flex-1">
                <p
                  data-reveal-item
                  className="text-sm font-semibold text-[#2351d6] xl:text-base"
                >
                  {feature.label}
                </p>
                <h3
                  data-reveal-item
                  className="mt-[7.4px] text-[23px] leading-[30.3px] font-semibold text-[#0f1e4a] xl:mt-[15px] xl:text-4xl xl:leading-[44.4px] xl:tracking-[-0.02em]"
                >
                  {feature.title}
                </h3>
                <p
                  data-reveal-item
                  className="mt-[10px] text-[15px] leading-[23.6px] text-[#5b6584] xl:mt-[14px] xl:text-lg xl:leading-[28px]"
                >
                  {feature.body}
                </p>
                {feature.tags && (
                  <ul
                    data-reveal-item
                    className="mt-[19px] flex flex-wrap gap-[10px] xl:mt-[26px]"
                  >
                    {feature.tags.map((tag) => (
                      <li
                        key={tag}
                        className="flex h-[30px] items-center rounded-full bg-[#eef2fd] px-[13px] text-[13px] font-semibold text-[#1f2f6e] xl:h-[31px] xl:px-4 xl:text-[14px]"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal
          as="ul"
          stagger={0.12}
          className="mt-[40px] grid gap-4 xl:mt-[100px] xl:grid-cols-3 xl:gap-[26.6px]"
        >
          {extras.map((extra) => (
            <li
              key={extra.n}
              data-reveal-item
              className="hover-lift rounded-[22px] border border-[#e3e8f5] bg-white px-[19px] pt-[26.6px] pb-[19px] xl:h-[266px] xl:px-[29.6px] xl:pt-[38px] xl:pb-0"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-[47px] items-center justify-center rounded-xl bg-[#eef2fd]">
                  <Image src={extra.icon} alt="" width={19} height={22} />
                </span>
                <span className="text-sm font-semibold text-[#2351d6]">
                  {extra.n}
                </span>
              </div>
              <h3 className="mt-[14px] text-[19px] leading-[28px] font-semibold text-[#0f1e4a] xl:mt-[33.4px] xl:text-[22px] xl:leading-[29.6px]">
                {extra.title}
              </h3>
              <p
                className={`mt-[6.7px] text-[15px] leading-[23.6px] text-[#5b6584] xl:mt-[10px] xl:max-w-[285px] xl:text-base xl:leading-[23.7px] ${extra.bodyClass ?? ""}`}
              >
                {extra.body}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
