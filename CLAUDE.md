@AGENTS.md

# Ploutos Page — redesign build rules

We are rebuilding the site from a Figma file, one section at a time. **The top priority is a 1:1 match with the design.** Read these rules before working on any section.

## How we work

1. The user sends one section at a time, with a **desktop and a mobile screenshot together**.
2. The user also supplies any **images** and **icons** in that section, as files.
3. Build that section to match both screenshots exactly, check it, then wait for the next section. Don't build ahead or invent sections that haven't been sent.

## 1:1 fidelity

- Match everything: layout, spacing, sizes, font size and weight, line height, letter spacing, colours, border radius, borders, shadows, alignment and the order of content.
- Desktop and mobile must each match their own screenshot. Between the two widths, scale sensibly (fluid widths, wrapping) without breaking either design.
- Copy text exactly as it appears in the design. Don't rewrite, shorten or "fix" it.
- If a value can't be read reliably from a screenshot (an exact hex, px value or gap), make the closest estimate, then **list every estimated value** in the reply so the user can confirm it from Figma.
- Never add things that aren't in the design: no extra animations, hover effects, sections, copy or decoration. Ask first.

## Images and icons

- **Use the supplied files. Never recreate them** with CSS, hand-drawn SVG, emoji or an icon library such as lucide, and never use placeholders.
- If a section needs an asset that wasn't supplied, ask for it instead of approximating it.
- Images that are only pasted into the chat can't be saved into the repo. Ask for real files: dropped into the folders below, or given as a path.
- Where assets go:
  - Images: `public/images/<section>/`
  - Icons: `public/icons/` (SVG preferred)
- Use `next/image` for raster images, with correct `width` and `height` or `fill` plus `sizes`.

## Project conventions

- Next.js 16 (App Router, `src/` folder), React 19, Tailwind CSS 4. Before writing Next.js code, read the relevant guide in `node_modules/next/dist/docs/` (see AGENTS.md).
- **Font: Hanken Grotesk everywhere.** It is loaded in `src/app/layout.tsx` and set as Tailwind's `font-sans`. Don't add other font families.
- The Figma frames are **1440px (desktop) and 390px (mobile)**. Each section's content sits in a `mx-auto max-w-[1440px]` wrapper so the layout doesn't spread out on wider screens; only the background goes full width.
- Each section is its own component in `src/components/sections/<SectionName>.tsx`. Pages put sections together in design order.
- When a colour or size repeats across sections, promote it to a token in the `@theme` block of `src/app/globals.css` rather than repeating raw values.
- **Keep the Facebook domain verification:** the `facebook-domain-verification` meta tag in `src/app/layout.tsx` and the `public/hlpgh5gts6x5t08pt6igi8ikw6jpdq.html` file. Never remove either one.

## Before calling a section done

- `npm run build` and `npm run lint` pass.
- The section has been compared against both screenshots, at the Figma frame widths where possible.
- The reply lists any estimated values and any assets that are still missing.
