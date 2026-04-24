import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/TopNav";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const syne = Syne({ subsets: ["latin"], variable: "--font-syne", weight: ["400", "500", "600", "700", "800"] });
const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans", weight: ["300", "400", "500"] });
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: "variable",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://veyago.app"),
  title: {
    default: "Veyago — Your next voyage starts with a swipe.",
    template: "%s · Veyago",
  },
  description:
    "Veyago is a swipe-and-bracket travel app that ends group-chat deadlock and picks a destination in under five minutes.",
  openGraph: {
    type: "website",
    siteName: "Veyago",
    title: "Veyago — Your next voyage starts with a swipe.",
    description:
      "Swipe-and-bracket travel app. Ends group-chat deadlock. Picks a destination in under five minutes.",
    url: "https://veyago.app",
  },
  twitter: { card: "summary_large_image", site: "@veyago" },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#09111F",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-ink-05 text-ink-100 antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:bg-ink-100 focus:text-ink-05 focus:px-4 focus:py-2 focus:rounded-btn focus:z-50"
        >
          Skip to content
        </a>
        <CustomCursor />
        <ScrollProgress />
        <TopNav />
        <main id="main">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
