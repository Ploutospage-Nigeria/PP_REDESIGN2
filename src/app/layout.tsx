import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";

import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ploutospage.com"),
  title: { default: "Ploutos Page", template: "%s | Ploutos Page" },
  description: "Ploutos Page",
  // Facebook domain verification — do not remove. Also served as
  // /hlpgh5gts6x5t08pt6igi8ikw6jpdq.html from public/.
  other: {
    "facebook-domain-verification": "hlpgh5gts6x5t08pt6igi8ikw6jpdq",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${hankenGrotesk.variable} h-full font-sans antialiased motion-safe:scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        {/* Without JavaScript, show scroll-reveal content straight away. */}
        <noscript>
          <style>{`[data-reveal] , [data-reveal] [data-reveal-item] { opacity: 1 !important; }`}</style>
        </noscript>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
