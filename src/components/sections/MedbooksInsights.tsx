import type { CSSProperties, ReactNode } from "react";

import Reveal from "@/components/motion/Reveal";

// The dashboard is drawn at its 618×558 desktop size and scales with its
// width (the mobile dashboard is the same drawing, 0.557× smaller).
const u = (n: number) => `calc(var(--u) * ${n})`;

const questions = [
  "Which stock is tying up too much capital?",
  "Are expired items or stock gaps eating into margins?",
  "What is the business earning after operating costs?",
  "Are tax records organised and up to date?",
  "How is each branch or department performing?",
  "Can you show your financial position when lenders ask?",
];

function Badge({ n, x, y }: { n: number; x: number; y: number }) {
  return (
    <span
      className="absolute z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#2351d6] font-semibold text-white"
      style={{
        left: u(x),
        top: u(y),
        width: u(23),
        height: u(23),
        fontSize: u(12),
        boxShadow: `0 0 0 ${u(2.4)} white`,
      }}
    >
      {n}
    </span>
  );
}

function Box({
  x,
  y,
  w,
  h,
  r = 0,
  className = "",
  style,
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
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
        width: u(w),
        height: u(h),
        borderRadius: u(r),
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Text({
  children,
  x,
  y,
  size,
  className,
  right = false,
}: {
  children: ReactNode;
  x: number;
  /** Vertical centre of the line. */
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

const stats = [
  {
    label: "Slow-moving stock",
    value: "₦910,000",
    note: "No sales in 90 days",
    noteClass: "text-[#2351d6]",
  },
  {
    label: "Stock at expiry risk",
    value: "₦284,000",
    note: "14 items · 60 days",
    noteClass: "text-[#c2570c]",
  },
  {
    label: "Profit after expenses",
    value: "₦1.6M",
    note: "+8% vs Sept",
    noteClass: "text-[#1d8a43]",
  },
];

const taxRows = [
  { label: "VAT return", status: "Filed", statusClass: "text-[#1d8a43]" },
  { label: "PAYE", status: "Filed", statusClass: "text-[#1d8a43]" },
  {
    label: "Withholding tax",
    status: "Due 21 Nov",
    statusClass: "text-[#c2570c]",
  },
];

const departments = [
  { label: "Pharmacy", fill: 0.88 },
  { label: "Laboratory", fill: 0.64 },
  { label: "Outpatient", fill: 0.42 },
];

function Dashboard() {
  return (
    <div className="@container w-full">
      <div
        className="relative aspect-[618/558] rounded-[28px] bg-white"
        style={{ "--u": "calc(100cqw / 618)" } as CSSProperties}
      >
        {/* Header */}
        <Box
          x={31.9}
          y={31.9}
          w={35.8}
          h={35.8}
          r={8}
          className="flex items-center justify-center bg-[#2351d6]"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            style={{ width: u(21), height: u(21) }}
          >
            <rect
              x="2.6"
              y="8.2"
              width="18.8"
              height="7.6"
              rx="3.8"
              transform="rotate(-45 12 12)"
              stroke="white"
              strokeWidth="2"
            />
            <path d="m8.6 8.6 6.8 6.8" stroke="white" strokeWidth="2" />
          </svg>
        </Box>
        <Text
          x={81.6}
          y={49.8}
          size={19}
          className="font-semibold text-[#0f1e4a]"
        >
          Pharmacy overview
        </Text>
        <Box
          x={416.3}
          y={35.8}
          w={79.3}
          h={28}
          r={14}
          className="flex items-center justify-center bg-[#e3eafc] font-medium text-[#2351d6]"
          style={{ fontSize: u(15) }}
        >
          October
        </Box>
        <Box
          x={503.3}
          y={35.8}
          w={82.5}
          h={28}
          r={14}
          className="flex items-center justify-center bg-[#eef0f4] font-medium text-[#5b6584]"
          style={{ fontSize: u(15) }}
        >
          Example
        </Box>

        {/* Headline figures */}
        {stats.map((stat, i) => {
          const x = 31.9 + i * 189.8;
          return (
            <Box
              key={stat.label}
              x={x}
              y={91.8}
              w={175}
              h={130.6}
              r={16}
              className="bg-[#eef3fd]"
            >
              <Text x={17.9} y={25.7} size={14.5} className="text-[#5b6584]">
                {stat.label}
              </Text>
              <Text
                x={17.9}
                y={76.2}
                size={28}
                className="font-bold tracking-[-0.01em] text-[#0f1e4a]"
              >
                {stat.value}
              </Text>
              <Text
                x={17.9}
                y={109.6}
                size={13.6}
                className={`font-semibold ${stat.noteClass}`}
              >
                {stat.note}
              </Text>
            </Box>
          );
        })}

        {/* Tax and compliance */}
        <Box
          x={31.9}
          y={239.5}
          w={268.3}
          h={178.8}
          r={16}
          className="border border-[#dfe6f5] bg-white"
        >
          <Text
            x={19.4}
            y={28.8}
            size={16}
            className="font-semibold text-[#0f1e4a]"
          >
            Tax and compliance
          </Text>
          {taxRows.map((row, i) => {
            const y = 73.9 + i * 39.7;
            return (
              <span key={row.label}>
                <Box
                  x={19.4}
                  y={y - 21.8}
                  w={229.5}
                  h={1}
                  className="bg-[#e7ecf6]"
                />
                <Text x={19.4} y={y} size={15} className="text-[#0f1e4a]">
                  {row.label}
                </Text>
                <Text
                  right
                  x={19.4}
                  y={y}
                  size={15}
                  className={`font-semibold ${row.statusClass}`}
                >
                  {row.status}
                </Text>
              </span>
            );
          })}
        </Box>

        {/* Revenue by department */}
        <Box
          x={317.3}
          y={239.5}
          w={268.3}
          h={178.8}
          r={16}
          className="border border-[#dfe6f5] bg-white"
        >
          <Text
            x={20.2}
            y={28.8}
            size={16}
            className="font-semibold text-[#0f1e4a]"
          >
            Revenue by department
          </Text>
          {departments.map((dept, i) => {
            const y = 61.4 + i * 40;
            return (
              <span key={dept.label}>
                <Text x={20.2} y={y} size={13.5} className="text-[#5b6584]">
                  {dept.label}
                </Text>
                <Box
                  x={20.2}
                  y={y + 12.4}
                  w={228.6}
                  h={8}
                  r={4}
                  className="bg-[#e9eefb]"
                >
                  <span
                    className="absolute inset-y-0 left-0 rounded-[inherit] bg-[#2342d6]"
                    style={{ width: `${dept.fill * 100}%` }}
                  />
                </Box>
              </span>
            );
          })}
        </Box>

        {/* Monthly accounts */}
        <Box
          x={31.9}
          y={435.5}
          w={554.4}
          h={91}
          r={16}
          className="bg-[#111d4a]"
        >
          <Box
            x={20.2}
            y={28.4}
            w={35}
            h={35}
            r={8}
            className="flex items-center justify-center bg-[#243066]"
          >
            <svg
              viewBox="0 0 18 24"
              fill="none"
              aria-hidden="true"
              style={{ width: u(14), height: u(18.5) }}
            >
              <path
                d="M1 1H12L17 6V23H1V1Z M12 1V6H17M5 12H13M5 16H10"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Box>
          <Text
            x={69.2}
            y={37.3}
            size={16}
            className="font-semibold text-white"
          >
            Monthly accounts
          </Text>
          <Text x={69.2} y={58.3} size={13.6} className="text-[#c8cde4]">
            Organised and ready for your accountant
          </Text>
          <Box
            x={474.6}
            y={30.7}
            w={81}
            h={29.5}
            r={14.75}
            className="flex items-center justify-center bg-[#e3f7e7] font-semibold text-[#1d8a43]"
            style={{ gap: u(6), fontSize: u(14) }}
          >
            <svg
              viewBox="0 0 16 16"
              aria-hidden="true"
              style={{ width: u(14.5), height: u(14.5) }}
            >
              <circle cx="8" cy="8" r="8" fill="#1d8a43" />
              <path
                d="M4.6 8.2 7 10.5l4.4-4.6"
                fill="none"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Ready
          </Box>
        </Box>

        {[
          [200.6, 97.2],
          [390.4, 97.2],
          [580.1, 97.2],
          [294.7, 245],
          [580.1, 245],
          [580.1, 440.9],
        ].map(([x, y], i) => (
          <Badge key={i} n={i + 1} x={x} y={y} />
        ))}
      </div>
    </div>
  );
}

export default function MedbooksInsights() {
  return (
    <section className="bg-[#eaf0fd]">
      <div className="mx-auto max-w-[1440px] pt-[51px] pr-[20.7px] pb-[54.4px] pl-[25px] xl:px-[103px] xl:pt-[101px] xl:pb-[100px]">
        <div className="xl:flex xl:items-start xl:justify-between">
          <Reveal stagger={0.12}>
            <p
              data-reveal-item
              className="text-sm font-bold text-[#2351d6] xl:text-lg"
            >
              Beyond patient care
            </p>
            <h2
              data-reveal-item
              className="mt-[8.4px] text-[26px] leading-[34px] font-bold tracking-[-0.02em] text-[#0f1e4a] xl:mt-[12.7px] xl:max-w-[520px] xl:text-4xl xl:leading-[43.5px]"
            >
              A healthy business needs more than good care.
            </h2>
          </Reveal>
          <Reveal className="mt-[14px] xl:mt-[56px] xl:w-[412px]">
            <p className="text-[14.7px] leading-[23.7px] text-[#4a5468] xl:text-base xl:leading-6">
              Stock purchases, product expiry, operating expenses, tax
              obligations and cash flow all influence performance. MedBooks
              helps you answer the questions behind them.
            </p>
          </Reveal>
        </div>

        <div className="mt-[23px] xl:mt-[63.3px] xl:flex xl:items-start">
          <Reveal
            variant="scale"
            duration={0.9}
            className="xl:w-[618px] xl:shrink-0"
          >
            <Dashboard />
          </Reveal>

          <Reveal
            as="ol"
            stagger={0.1}
            className="mt-[25.4px] xl:-mt-[3.6px] xl:ml-[85px] xl:w-[560px]"
          >
            {questions.map((question, i) => (
              <li
                key={question}
                data-reveal-item
                className="flex items-start gap-[18px] border-b border-[#d7e0f5] pt-[16.7px] pb-[17.6px] first:pt-[4.6px] last:border-b-0 xl:items-center xl:gap-[19px] xl:pt-[23.9px] xl:pb-[23.9px] xl:first:pt-0"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full border-[1.5px] border-[#c9d6f5] bg-white text-sm font-semibold text-[#2351d6] xl:size-[37px] xl:text-[15px]">
                  {i + 1}
                </span>
                <span className="text-base leading-[23.7px] font-semibold text-[#0f1e4a] xl:text-xl xl:leading-7">
                  {question}
                </span>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
