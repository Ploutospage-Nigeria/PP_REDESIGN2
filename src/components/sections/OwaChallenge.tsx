import Image from "next/image";

import Reveal from "@/components/motion/Reveal";

const questions = [
  "Do you know how much profit your business makes each month?",
  "Do you keep track of stock and identify discrepancies?",
  "Do you separate business expenses from money taken home?",
  "Do you show evidence of your performance when seeking financing?",
];

// White cards behind the questions in the desktop illustration, which is
// transparent around them (positions in px within its 680×460 box).
const cardFrames = [
  { left: 0, top: 60, width: 185, height: 126.2 },
  { left: 494.2, top: 21.8, width: 185.8, height: 126.2 },
  { left: 0, top: 261.8, width: 185, height: 126.2 },
  { left: 494.2, top: 213.8, width: 185.8, height: 145.8 },
];

export default function OwaChallenge() {
  return (
    <section className="bg-[#ede9f1]">
      <div className="mx-auto flex max-w-[1440px] flex-col px-5 pt-14 pb-14 xl:flex-row xl:justify-between xl:gap-10 xl:px-[100px] xl:py-[100px]">
        <Reveal stagger={0.12} className="xl:max-w-[560px] xl:min-w-0">
          <p
            data-reveal-item
            className="text-sm font-semibold text-[#4c1e72] xl:text-lg"
          >
            The everyday challenge
          </p>
          <h2
            data-reveal-item
            className="mt-3 text-[26px] leading-[33.8px] font-bold text-[#1e0f2c] xl:mt-[14.2px] xl:text-4xl xl:leading-[43.6px] xl:tracking-[-0.02em] xl:text-[#1f0d30]"
          >
            You know how hard you work. But do your records show what your
            business is worth?
          </h2>
          <p
            data-reveal-item
            className="mt-[11.5px] text-[15px] leading-6 text-[#5c5369] xl:mt-[12.4px] xl:text-base xl:text-[#262e39]"
          >
            You buy stock, make sales, pay expenses and restock to keep your
            business moving. When transactions are recorded inconsistently, it
            becomes harder to track activities.
          </p>
        </Reveal>

        {/* Desktop: the illustration carries the four questions. */}
        <Reveal
          variant="right"
          duration={1}
          className="relative hidden h-[460px] w-[680px] shrink-0 xl:block"
        >
          {cardFrames.map((frame, i) => (
            <span
              key={i}
              aria-hidden="true"
              className="absolute rounded-2xl bg-white"
              style={frame}
            />
          ))}
          <Image
            src="/images/owa/challenge.png"
            alt={`A trader's notebook with unclear records, surrounded by four questions: ${questions.join(" ")}`}
            width={1360}
            height={920}
            sizes="680px"
            className="relative h-full w-full"
          />
        </Reveal>

        {/* Mobile: notebook illustration, then the questions as cards. */}
        <div className="xl:hidden">
          <Reveal variant="scale" className="mx-auto mt-[24.5px] w-60">
            <Image
              src="/images/owa/challenge-mobile.png"
              alt="A trader's notebook with unclear records"
              width={480}
              height={695}
              sizes="240px"
              className="h-auto w-full"
            />
          </Reveal>
          <Reveal
            as="ol"
            stagger={0.1}
            className="mt-[24.5px] grid grid-cols-2 gap-x-[12.5px] gap-y-[13.4px]"
          >
            {questions.map((question, i) => (
              <li
                key={question}
                data-reveal-item
                className="h-[164px] rounded-2xl bg-white px-[17px] pt-[18px]"
              >
                <span className="flex size-8 items-center justify-center rounded-full bg-[#2c1243] text-sm font-semibold text-[#f5d90a]">
                  {i + 1}
                </span>
                <p className="mt-[17px] text-sm leading-[21px] font-semibold text-[#1e0f2c]">
                  {question}
                </p>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
