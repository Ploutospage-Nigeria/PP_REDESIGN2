import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";

import Reveal from "@/components/motion/Reveal";

// Step panels are drawn at their 397×200 desktop size and scale with their
// width (the mobile panels are the same drawing at 350px).
const u = (n: number) => `calc(var(--u) * ${n})`;

/** The supplied note outline, with the coin (and side bars) from the design. */
function CashIcon({
  bars = false,
  color,
  className,
  style,
}: {
  bars?: boolean;
  color: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 26 17"
      fill="none"
      aria-hidden="true"
      className={className}
      style={style}
    >
      <path
        d="M4 1H22C23.6569 1 25 2.34315 25 4V13C25 14.6569 23.6569 16 22 16H4C2.34315 16 1 14.6569 1 13V4C1 2.34315 2.34315 1 4 1Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="13" cy="8.5" r="3" stroke={color} strokeWidth="2" />
      {bars && (
        <path
          d="M6.5 5v7M19.5 5v7"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
        />
      )}
    </svg>
  );
}

function BoxIcon({ color, style }: { color: string; style?: CSSProperties }) {
  return (
    <svg viewBox="0 0 24 26" fill="none" aria-hidden="true" style={style}>
      <path
        d="M1 7L12 1L23 7V19L12 25L1 19V7Z M1 7L12 13M12 13L23 7M12 13V25"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="@container relative aspect-[397/200] overflow-hidden rounded-[20px] bg-[#3a1b57]">
      <div
        className="absolute inset-0"
        style={{ "--u": "calc(100cqw / 397)" } as CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}

function Text({
  children,
  left,
  top,
  size,
  className,
  center = false,
}: {
  children: ReactNode;
  left: number;
  top: number;
  size: number;
  className: string;
  center?: boolean;
}) {
  return (
    <span
      className={`absolute leading-none whitespace-nowrap ${center ? "-translate-x-1/2" : ""} ${className}`}
      style={{ left: u(left), top: u(top), fontSize: u(size) }}
    >
      {children}
    </span>
  );
}

function SavingsPanel() {
  const stacks = [2, 3, 4, 6, 7, 9];
  return (
    <Panel>
      <Text left={28} top={28} size={15} className="text-[#d8cde6]">
        Your savings
      </Text>
      <span
        className="absolute flex items-center justify-center rounded-full bg-[#4b2a6b] font-semibold text-white"
        style={{
          left: u(302.7),
          top: u(22),
          width: u(66),
          height: u(27.3),
          fontSize: u(12.5),
        }}
      >
        + Save
      </span>
      {stacks.map((coins, i) => (
        <span key={i}>
          {Array.from({ length: coins }, (_, c) => (
            <span
              key={c}
              className="absolute rounded-[50%] border border-[#c9a908] bg-[#f5d90a]"
              style={{
                left: u(37.2 + i * 57.06),
                top: u(150 - c * 10.1),
                width: u(37.2),
                height: u(11.6),
              }}
            />
          ))}
          <Text
            left={55.8 + i * 57.06}
            top={169.6}
            size={12}
            center
            className="font-semibold text-[#9c88b5]"
          >
            M{i + 1}
          </Text>
        </span>
      ))}
    </Panel>
  );
}

function HistoryPanel() {
  return (
    <Panel>
      <Text left={28} top={28} size={15} className="text-[#d8cde6]">
        Savings and sales history
      </Text>
      {[0, 1, 2, 3, 4, 5].map((m) => {
        const done = m < 4;
        return (
          <span
            key={m}
            className={`absolute flex items-center ${
              done ? "bg-[#4b2a6b]" : "border border-dashed border-[#5a3b7a]"
            }`}
            style={{
              left: u(28.1 + (m % 3) * 117.9),
              top: u(m < 3 ? 59.2 : 121.4),
              width: u(107),
              height: u(53.1),
              borderRadius: u(12),
              paddingLeft: u(14.5),
            }}
          >
            <span
              className={`font-semibold ${done ? "text-white" : "text-[#9c88b5]"}`}
              style={{ fontSize: u(15) }}
            >
              M{m + 1}
            </span>
            {done && (
              <svg
                viewBox="0 0 16 16"
                aria-hidden="true"
                className="absolute"
                style={{
                  right: u(12),
                  width: u(17.5),
                  height: u(17.5),
                }}
              >
                <circle cx="8" cy="8" r="8" fill="#f5d90a" />
                <path
                  d="M4.6 8.2 7 10.5l4.4-4.6"
                  fill="none"
                  stroke="#2b1544"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </span>
        );
      })}
    </Panel>
  );
}

function UnlockPanel() {
  // Six yellow arcs around a faint track, with short gaps between them.
  const stroke = 9.5;
  const r = 57 - stroke / 2;
  const sixth = (2 * Math.PI * r) / 6;
  const gap = 7.6;
  return (
    <Panel>
      <svg
        viewBox="0 0 114 114"
        aria-hidden="true"
        className="absolute"
        style={{ left: u(34.9), top: u(43.2), width: u(114), height: u(114) }}
      >
        <circle
          cx="57"
          cy="57"
          r={r}
          fill="none"
          stroke="#45255f"
          strokeWidth={stroke}
        />
        <circle
          cx="57"
          cy="57"
          r={r}
          fill="none"
          stroke="#f5d90a"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${sixth - gap - stroke} ${gap + stroke}`}
          strokeDashoffset={-(gap + stroke) / 2}
          transform="rotate(-90 57 57)"
        />
      </svg>
      <Text
        left={91.9}
        top={81}
        size={30}
        center
        className="font-bold text-white"
      >
        6
      </Text>
      <Text
        left={91.9}
        top={113}
        size={12.5}
        center
        className="font-medium text-[#d8cde6]"
      >
        months
      </Text>
      <svg
        viewBox="0 0 30 64"
        aria-hidden="true"
        className="absolute"
        style={{ left: u(150), top: u(68), width: u(30), height: u(64) }}
      >
        <path
          d="M30 2C16 2 6 14 4 32C6 50 16 62 30 62"
          fill="none"
          stroke="#f5d90a"
          strokeOpacity="0.6"
          strokeWidth="1.6"
          strokeDasharray="4 4"
        />
      </svg>
      {[
        {
          label: "Cash loan",
          top: 44,
          icon: (
            <CashIcon
              color="#f5d90a"
              style={{ width: u(21.2), height: u(14.4) }}
            />
          ),
        },
        {
          label: "Goods on credit",
          top: 106.2,
          icon: (
            <BoxIcon
              color="#f5d90a"
              style={{ width: u(18.5), height: u(20) }}
            />
          ),
        },
      ].map((row) => (
        <span
          key={row.label}
          className="absolute flex items-center bg-[#4b2a6b] font-semibold text-white"
          style={{
            left: u(176),
            top: u(row.top),
            width: u(192.7),
            height: u(51.6),
            borderRadius: u(14),
            paddingLeft: u(16),
            gap: u(12),
            fontSize: u(15),
          }}
        >
          <span className="flex justify-center" style={{ width: u(21.2) }}>
            {row.icon}
          </span>
          {row.label}
        </span>
      ))}
    </Panel>
  );
}

const steps = [
  {
    when: "Every month",
    title: "Save monthly",
    body: "Save with your OWA subscription and build savings over time, according to the programme’s terms.",
    panel: <SavingsPanel />,
  },
  {
    when: "Months 1 to 6",
    title: "Build 6 months of history",
    body: "Keep consistent sales and inventory records through OWA alongside your savings.",
    panel: <HistoryPanel />,
  },
  {
    when: "After month 6",
    title: "Unlock credit",
    body: "Eligible members may qualify for a cash loan or goods on credit, subject to assessment and offer.",
    panel: <UnlockPanel />,
  },
];

export default function OwaCooperative() {
  return (
    <section className="bg-[#2b1243]">
      <div className="mx-auto max-w-[1440px] px-5 pt-[58px] pb-14 xl:px-[100px] xl:pt-[100px] xl:pb-[100px]">
        <div className="xl:flex xl:items-center xl:justify-between">
          <Reveal stagger={0.12} className="xl:max-w-[440px]">
            <Image
              data-reveal-item
              src="/images/owa/cooperative-logo.png"
              alt="The Ówà Co-operative"
              width={391}
              height={111}
              className="h-auto w-[175px] xl:w-[195px]"
            />
            <h2
              data-reveal-item
              className="mt-[22px] text-[34px] leading-[40.5px] font-bold tracking-[-0.02em] text-white xl:mt-[22.5px] xl:text-4xl xl:leading-[48px]"
            >
              Save together.
              <br />
              <span className="text-[#f5d90a]">Borrow fairly.</span>
            </h2>
            <p
              data-reveal-item
              className="mt-4 text-base leading-[26.2px] text-white xl:mt-[9.8px] xl:leading-[24.3px]"
            >
              Members save a small amount each month with their OWA
              subscription. After six months of savings and verified sales
              history, they unlock credit.
            </p>
          </Reveal>

          <Reveal
            stagger={0.15}
            className="mt-8 grid gap-[18px] xl:mt-0 xl:flex xl:items-center xl:gap-[21.4px]"
          >
            <div
              data-reveal-item
              className="rounded-3xl bg-white px-5 pt-6 pb-7 xl:h-[252px] xl:w-[269.3px] xl:px-7 xl:pt-[37px] xl:pb-0"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-[#f3ecf9] xl:size-[48.6px]">
                <CashIcon bars color="#4c1f72" className="h-[17px] w-[26px]" />
              </span>
              <p className="mt-[21px] text-[13px] font-semibold text-[#4c1e72] xl:mt-[30px]">
                CASH LOAN
              </p>
              <p className="mt-2 text-[32px] leading-10 font-bold text-[#4c1e72]">
                Low interest
              </p>
              <p className="mt-2 text-base leading-[24.3px] text-[#414c5d]">
                Based on your savings and verified sales history.
              </p>
            </div>
            <div
              data-reveal-item
              className="rounded-3xl bg-[#f5d90a] px-5 pt-6 pb-7 xl:h-[299.7px] xl:w-[269.3px] xl:px-7 xl:pt-[27.3px] xl:pb-0"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-white xl:size-[48.6px]">
                <Image
                  src="/icons/owa-box-dark.svg"
                  alt=""
                  width={24}
                  height={26}
                />
              </span>
              <p className="mt-[21px] text-[13px] font-semibold text-[#2b1544] xl:mt-[30px]">
                INVENTORY LOAN
              </p>
              <p className="mt-2 text-[64px] leading-[72px] font-bold text-[#4c1e72] xl:text-[70px] xl:leading-[76px]">
                0%
              </p>
              <p className="mt-2 text-base leading-[24.3px] text-[#4c2072]">
                Goods on credit, repaid over 3-6 months, below market price.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal
          as="ol"
          stagger={0.15}
          className="mt-9 grid gap-[45px] xl:mt-[57.7px] xl:grid-cols-3 xl:gap-6"
        >
          {steps.map((step) => (
            <li key={step.title} data-reveal-item>
              {step.panel}
              <p className="mt-[22px] text-[13px] font-semibold text-[#f5d90a] xl:mt-[27px] xl:text-[15px]">
                {step.when}
              </p>
              <h3 className="mt-2 text-[23px] leading-8 font-bold text-white xl:mt-[13px] xl:text-[25px]">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-[23.9px] text-[#d8cde6] xl:mt-[15px] xl:text-[17px] xl:leading-[22px]">
                {step.body}
              </p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
