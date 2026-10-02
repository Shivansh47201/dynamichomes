import type { Metadata } from "next";
import { Bodoni_Moda, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import { WishlistProvider } from "./context/WishlistContext";
import WishlistDrawer from "./components/ui/WishlistDrawer";
import ScrollToTop from "./components/ui/ScrollToTop";
import TopProgressBar from "./components/ui/TopProgressBar";

const bodoniModa = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VAMI Enclave | Dynamic Homes",
  description:
    "Explore VAMI Enclave residential plot options in Daudpur, Greater Noida. Review brochure-listed prices, payment terms and connectivity references from Dynamic Homes.",
  keywords: [
    "Dynamic Homes",
    "VAMI Enclave",
    "Residential plots Greater Noida",
    "Daudpur plots",
    "Greater Noida plot options",
    "Yamuna Expressway plots",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `if('scrollRestoration' in history){history.scrollRestoration='manual';}window.scrollTo(0,0);`,
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${bodoniModa.variable} ${manrope.variable} bg-[#0A0A0A] text-[#E5E5E5] antialiased`}
      >
        <WishlistProvider>
          <TopProgressBar />
          <ScrollToTop />
          <Navbar />
          <main className="min-h-screen bg-[#0A0A0A]">
            {children}
          </main>
          <WishlistDrawer />
          <Footer />
        </WishlistProvider>
      </body>
    </html>
  );
}