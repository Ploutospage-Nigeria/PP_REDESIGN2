import type { CSSProperties, ReactNode } from "react";

// Small feature panels are drawn at their 292×170 desktop size and scale with
// the card's width (the mobile cards are the same drawing, 1.2× larger).
const u = (n: number) => `calc(var(--u) * ${n})`;

const ink = "text-[#2b1544]";
const muted = "text-[#5a4c70]";

function Panel({ children }: { children: ReactNode }) {
  return (
    <div className="@container relative aspect-[292/170] bg-[#f6f0fb]">
      <div
        className="absolute inset-0"
        style={{ "--u": "calc(100cqw / 292)" } as CSSProperties}
      >
        {children}
      </div>
    </div>
  );
}

function Label({
  children,
  left,
  top,
  size = 13.5,
  className = `font-semibold ${ink}`,
}: {
  children: ReactNode;
  left: number;
  top: number;
  size?: number;
  className?: string;
}) {
  return (
    <span
      className={`absolute leading-none whitespace-nowrap ${className}`}
      style={{ left: u(left), top: u(top), fontSize: u(size) }}
    >
      {children}
    </span>
  );
}

function Box({
  left,
  top,
  width,
  height,
  radius = 4,
  className,
  children,
}: {
  left: number;
  top: number;
  width: number;
  height: number;
  radius?: number;
  className: string;
  children?: ReactNode;
}) {
  return (
    <span
      className={`absolute ${className}`}
      style={{
        left: u(left),
        top: u(top),
        width: u(width),
        height: u(height),
        borderRadius: u(radius),
      }}
    >
      {children}
    </span>
  );
}

export function ProfitVisual() {
  const bars = [
    { left: 45.3, top: 102.2, height: 30.2 },
    { left: 69.3, top: 89.8, height: 42.7 },
    { left: 93.3, top: 96, height: 36.4 },
  ];
  return (
    <Panel>
      <Box
        left={27.6}
        top={26.7}
        width={235.6}
        height={117.3}
        radius={12}
        className="bg-white"
      />
      <Label left={45.3} top={38.3}>
        Monthly profit
      </Label>
      {bars.map((bar) => (
        <Box
          key={bar.left}
          {...bar}
          width={17.8}
          radius={3}
          className="bg-[#d9c8e9]"
        />
      ))}
      <Box
        left={117.3}
        top={73.8}
        width={17.8}
        height={58.7}
        radius={3}
        className="bg-[#f5d90a]"
      />
      <Box
        left={152}
        top={60.4}
        width={89.8}
        height={26.2}
        radius={9}
        className="flex items-center justify-center bg-[#2b1544]"
      >
        <span
          className="leading-none font-semibold text-white"
          style={{ fontSize: u(12) }}
        >
          Here’s why
        </span>
      </Box>
      <svg
        viewBox="0 0 10 8"
        aria-hidden="true"
        className="absolute"
        style={{ left: u(222), top: u(86), width: u(10), height: u(8) }}
      >
        <path d="M0 0h10L5 8Z" fill="#2b1544" />
      </svg>
      <svg
        viewBox="0 0 30 30"
        aria-hidden="true"
        className="absolute"
        style={{ left: u(216), top: u(88.5), width: u(30.2), height: u(30.2) }}
      >
        <circle cx="15" cy="15" r="15" fill="#4c2072" />
        <circle cx="15" cy="11.6" r="4.4" fill="#f5d90a" />
        <path d="M7.4 22.6a7.6 6.4 0 0 1 15.2 0Z" fill="#f5d90a" />
      </svg>
    </Panel>
  );
}

export function HistoryVisual() {
  const shades = [
    "#cabdd9",
    "#c0adce",
    "#b5a1c7",
    "#a992bd",
    "#9f85b5",
    "#9679ae",
    "#896aa3",
    "#7d5c9a",
    "#744f92",
    "#6a4389",
    "#5d3480",
    "#512476",
  ];
  return (
    <Panel>
      <Label left={27.6} top={33.5}>
        12 months of records
      </Label>
      {shades.map((shade, i) => (
        <Box
          key={shade}
          left={27.6 + (i % 6) * 40.85}
          top={i < 6 ? 59.6 : 107.6}
          width={33.6}
          height={40.9}
          radius={6}
          className={i === 11 ? "flex items-center justify-center" : ""}
        >
          <span
            className="absolute inset-0"
            style={{ backgroundColor: shade, borderRadius: "inherit" }}
          />
          {i === 11 && (
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              className="relative"
              style={{ width: u(18), height: u(18) }}
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
        </Box>
      ))}
    </Panel>
  );
}

export function ProblemsVisual() {
  return (
    <Panel>
      <Label left={27.6} top={33.5}>
        Sugar stock
      </Label>
      <Label left={27.6} top={68.8} className={muted}>
        Recorded
      </Label>
      <Box
        left={91.6}
        top={66.7}
        width={142.2}
        height={16.9}
        radius={8.5}
        className="bg-[#d9c8e9]"
      />
      <Label left={27.6} top={107} className={muted}>
        Counted
      </Label>
      <Box
        left={91.6}
        top={104.9}
        width={105.8}
        height={16.9}
        radius={8.5}
        className="bg-[#4c2072]"
      />
      <Box
        left={161.8}
        top={128.9}
        width={101.3}
        height={24.9}
        radius={12.5}
        className="flex items-center justify-center bg-[#fff4e8]"
      >
        <span
          className="flex items-center font-semibold text-[#e8580c]"
          style={{ gap: u(5.5), fontSize: u(12) }}
        >
          <svg
            viewBox="0 0 16 16"
            aria-hidden="true"
            style={{ width: u(13.4), height: u(13.4) }}
          >
            <circle cx="8" cy="8" r="8" fill="#e8580c" />
            <path
              d="M8 4.2v4.6"
              stroke="white"
              strokeWidth="1.9"
              strokeLinecap="round"
            />
            <circle cx="8" cy="11.6" r="1.1" fill="white" />
          </svg>
          2 bags short
        </span>
      </Box>
    </Panel>
  );
}

export function FinancingVisual() {
  const months = [0, 1, 2, 3, 4, 5];
  const centerY = 87.6;
  return (
    <Panel>
      <Label left={27.6} top={33.5}>
        Savings and sales history
      </Label>
      <Box
        left={37.5}
        top={centerY - 1.8}
        width={120}
        height={3.6}
        radius={0}
        className="bg-[#4c2072]"
      />
      <Box
        left={157.5}
        top={centerY - 1.8}
        width={80}
        height={3.6}
        radius={0}
        className="bg-[#d9c8e9]"
      />
      {months.map((m) => {
        const cx = 37.5 + m * 40;
        const size = m === 5 ? 25.8 : 19.6;
        return (
          <Box
            key={m}
            left={cx - size / 2}
            top={centerY - size / 2}
            width={size}
            height={size}
            radius={size / 2}
            className={
              m < 4 ? "bg-[#4c2072]" : "border-2 border-[#d9c8e9] bg-white"
            }
          />
        );
      })}
      <svg
        viewBox="0 0 18 30"
        aria-hidden="true"
        className="absolute"
        style={{ left: u(235.6), top: u(46.7), width: u(18), height: u(28.6) }}
      >
        <path d="M1 30V1" stroke="#2b1544" strokeWidth="2" />
        <path
          d="M1 1.2h16.5l-4 5 4 5H1Z"
          fill="#f5d90a"
          stroke="#2b1544"
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
      </svg>
      {months.map((m) => (
        <Label
          key={m}
          left={30.2 + m * 40}
          top={107.2}
          size={12}
          className={`font-semibold ${muted}`}
        >
          M{m + 1}
        </Label>
      ))}
      <Label left={27.6} top={141.6} size={12} className="text-[#6e6181]">
        Eligibility assessment after month 6
      </Label>
    </Panel>
  );
}
