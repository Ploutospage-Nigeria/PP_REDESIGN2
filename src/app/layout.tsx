import type { Metadata } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ploutospage.com"),
  title: "Ploutos Page",
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
      className={`${hankenGrotesk.variable} h-full font-sans antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Without JavaScript, show scroll-reveal content straight away. */}
        <noscript>
          <style>{`[data-reveal] , [data-reveal] [data-reveal-item] { opacity: 1 !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
