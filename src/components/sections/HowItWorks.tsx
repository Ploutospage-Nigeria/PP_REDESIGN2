import type { CSSProperties, ReactNode } from "react";

// Step cards are drawn at their 228.4×180 desktop size and scale with the
// card's width (the mobile cards are the same drawing, 1.31× larger).
const u = (n: number) => `calc(var(--u) * ${n})`;

const steps = [
  {
    title: "Sign up",
    body: "Our agent visits the business and registers it",
    circle: "bg-[#17385a]",
    visual: <SignUpVisual />,
  },
  {
    title: "Stock counted",
    body: "Every item counted and valued",
    circle: "bg-[#1c5375]",
    visual: <StockVisual />,
  },
  {
    title: "Weekly books",
    body: "Sales, purchases and expenses recorded",
    circle: "bg-[#176e8f]",
    visual: <WeeklyBooksVisual />,
  },
  {
    title: "Audited & filed",
    body: "Taxes filed, accounts audited",
    circle: "bg-[#0f8dad]",
    visual: <AuditedVisual />,
  },
  {
    title: "Finance unlocked",
    body: "A bankable business, ready for credit",
    circle: "bg-brand",
    visual: <FinanceVisual />,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1440px] px-5 pt-[55px] pb-[54.5px] lg:px-[100px] lg:pt-[99px] lg:pb-[100px]">
        <div className="text-center">
          <p className="text-sm font-bold text-brand lg:text-lg">
            How it works
          </p>
          <h2 className="mt-[7.5px] text-[26px] leading-[34px] font-bold text-heading-mobile lg:mt-[13px] lg:text-4xl lg:leading-[43.2px] lg:tracking-[-0.02em] lg:text-heading">
            From invisible to bankable in few days
          </h2>
        </div>

        <ol className="mt-[31px] grid gap-[33px] pl-[50.7px] lg:mt-[77px] lg:grid-cols-5 lg:gap-6 lg:pl-0">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              {i < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute top-4 -bottom-[49px] -left-[34.7px] w-[1.5px] -translate-x-1/2 bg-[#d6e2ec] lg:hidden"
                />
              )}
              <div className="absolute top-0 -left-[50.7px] lg:static lg:flex lg:items-center">
                <span
                  className={`relative flex size-8 items-center justify-center rounded-full text-xs font-bold text-white lg:size-11 lg:text-[15px] ${step.circle}`}
                >
                  {i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden h-0.5 flex-1 bg-[#d6e2ec] lg:ml-1 lg:-mr-6 lg:block"
                  />
                )}
              </div>
              <div className="lg:mt-6">{step.visual}</div>
              <h3 className="mt-[17px] text-[19px] leading-6 font-bold text-heading-mobile lg:mt-[28px] lg:text-[21px] lg:leading-7 lg:text-[#0e1a29]">
                {step.title}
              </h3>
              <p className="mt-[6.5px] text-[15px] leading-6 text-[#4c5666] lg:mt-[6.5px] lg:text-base lg:leading-[26.5px] lg:text-[#4a5462]">
                {step.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Card({
  children,
  dark = false,
}: {
  children: ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="@container relative aspect-[228.4/180]">
      <div
        className={`absolute inset-0 ${dark ? "bg-[#17385a]" : "bg-[#f1f6fa]"}`}
        style={
          {
            "--u": "calc(100cqw / 228.4)",
            borderRadius: u(18),
          } as CSSProperties
        }
      >
        {children}
      </div>
    </div>
  );
}

function Pill({
  children,
  top,
  height,
  className,
}: {
  children: ReactNode;
  top: number;
  height: number;
  className: string;
}) {
  return (
    <span
      className={`absolute left-1/2 flex -translate-x-1/2 items-center rounded-full font-semibold whitespace-nowrap ${className}`}
      style={{
        top: u(top),
        height: u(height),
        paddingInline: u(16),
        fontSize: u(13),
      }}
    >
      {children}
    </span>
  );
}

function Check({ size, color }: { size: number; color: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      aria-hidden="true"
      style={{ width: u(size), height: u(size) }}
      className="shrink-0"
    >
      <circle cx="8" cy="8" r="8" fill={color} />
      <path
        d="M4.6 8.2 7 10.5l4.4-4.6"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SignUpVisual() {
  return (
    <Card>
      <svg
        viewBox="0 0 43 43"
        aria-hidden="true"
        className="absolute"
        style={{ left: u(37.5), top: u(41), width: u(43), height: u(43) }}
      >
        <circle cx="21.5" cy="21.5" r="21.5" fill="#17385a" />
        <circle cx="21.5" cy="13.6" r="7.5" fill="white" />
        <path d="M8 34.4a13.5 10.6 0 0 1 27 0Z" fill="white" />
      </svg>
      <svg
        viewBox="0 0 37.5 2"
        aria-hidden="true"
        className="absolute"
        style={{ left: u(86), top: u(60.3), width: u(37.5), height: u(2) }}
      >
        <line
          x1="0"
          y1="1"
          x2="37.5"
          y2="1"
          stroke="#00b4d8"
          strokeWidth="2"
          strokeDasharray="5.3 3.5"
          strokeDashoffset="1.8"
        />
      </svg>
      <div
        className="absolute border border-[#dbe5ee] bg-white"
        style={{
          left: u(125.7),
          top: u(35.7),
          width: u(66.1),
          height: u(57.3),
          borderRadius: u(12),
        }}
      >
        <svg
          viewBox="0 0 38 33"
          aria-hidden="true"
          className="absolute"
          style={{ left: u(13.1), top: u(13.1), width: u(38), height: u(33) }}
        >
          <path
            d="M5.5 1.1h27l4.4 7.4v23.4H1.1V8.5ZM1.1 8.5h35.8M15.5 31.9v-9.4h7v9.4"
            fill="none"
            stroke="#17385a"
            strokeWidth="2.2"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <Pill top={123.9} height={31} className="bg-[#dcfce7] text-[#15803d]">
        Registered
      </Pill>
    </Card>
  );
}

function StockVisual() {
  const rows = [
    { item: "Rice", qty: "10 bags" },
    { item: "Soap", qty: "24 cartons" },
    { item: "Oil", qty: "12 tins" },
  ];
  return (
    <Card>
      {rows.map((row, i) => (
        <div
          key={row.item}
          className="absolute flex items-center justify-between bg-white"
          style={{
            left: u(16.8),
            top: u(22.5 + i * 48),
            width: u(194.8),
            height: u(40),
            borderRadius: u(10),
            paddingLeft: u(13),
            paddingRight: u(10.6),
            fontSize: u(13),
          }}
        >
          <span className="font-semibold text-[#101b2a]">{row.item}</span>
          <span className="flex items-center" style={{ gap: u(9) }}>
            <span className="text-[#4b5563]">{row.qty}</span>
            <Check size={13.2} color="#17385a" />
          </span>
        </div>
      ))}
    </Card>
  );
}

function WeeklyBooksVisual() {
  const weeks = [70, 85, 60, 90];
  return (
    <Card>
      {weeks.map((fill, i) => (
        <div
          key={fill}
          className="absolute flex items-center"
          style={{ left: u(20.3), top: u(28.7 + i * 35.9), height: u(15) }}
        >
          <span
            className="font-bold text-[#15385a]"
            style={{ fontSize: u(13), width: u(31.7) }}
          >
            W{i + 1}
          </span>
          <span
            className="relative rounded-full bg-white"
            style={{ width: u(121.7), height: u(15) }}
          >
            <span
              className="absolute inset-y-0 left-0 rounded-full bg-[#9ec9da]"
              style={{ width: `${fill}%` }}
            />
          </span>
          <span style={{ marginLeft: u(14.7) }} className="flex">
            <Check size={15} color="#0f7c93" />
          </span>
        </div>
      ))}
    </Card>
  );
}

function AuditedVisual() {
  const docs = [
    { title: "Tax return", status: "Filed", left: 17.6, width: 91.7 },
    { title: "Accounts", status: "Audited", left: 118.2, width: 92.6 },
  ];
  const lines = [
    { top: 38.8, width: 46.7 },
    { top: 51.1, width: 33.5 },
    { top: 62.6, width: 41.4 },
    { top: 75, width: 30 },
  ];
  return (
    <Card>
      {docs.map((doc) => (
        <div
          key={doc.title}
          className="absolute border border-[#dbe5ee] bg-white"
          style={{
            left: u(doc.left),
            top: u(21.6),
            width: u(doc.width),
            height: u(137.6),
            borderRadius: u(12),
          }}
        >
          <span
            className="absolute leading-none font-semibold text-[#101b2a]"
            style={{ left: u(11.3), top: u(13.4), fontSize: u(12) }}
          >
            {doc.title}
          </span>
          {lines.map((line) => (
            <span
              key={line.top}
              className="absolute rounded-full bg-[#d6e2ec]"
              style={{
                left: u(11.3),
                top: u(line.top - 1),
                width: u(line.width),
                height: u(4.4),
              }}
            />
          ))}
          <span
            className="absolute left-1/2 flex -translate-x-1/2 items-center rounded-full bg-[#dcfce7] font-semibold whitespace-nowrap text-[#15803d]"
            style={{
              top: u(97.8),
              height: u(23.8),
              paddingInline: u(10.6),
              fontSize: u(12),
            }}
          >
            {doc.status}
          </span>
        </div>
      ))}
    </Card>
  );
}

function FinanceVisual() {
  return (
    <Card dark>
      <svg
        viewBox="0 0 65.3 57.3"
        aria-hidden="true"
        className="absolute left-1/2 -translate-x-1/2"
        style={{ top: u(31.3), width: u(65.3), height: u(57.3) }}
      >
        <g fill="none" stroke="#00b4d8" strokeWidth="2">
          <path d="M2.8 17.6 32.65 1.2 62.5 17.6Z" strokeLinejoin="round" />
          <path d="M8.6 22v30M22.6 22v30M42.7 22v30M56.7 22v30M0 56.3h65.3" />
        </g>
      </svg>
      <Pill top={124.8} height={29.1} className="bg-brand text-[#17385b]">
        Ready for credit
      </Pill>
    </Card>
  );
}
