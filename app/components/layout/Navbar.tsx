"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ArrowUpRight,
  Heart,
  PhoneCall,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWishlist } from "@/app/context/WishlistContext";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { wishlistCount, setIsWishlistOpen } = useWishlist();

  /* =========================================================
     SCROLL DETECTION
  ========================================================= */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================================================
     LOCK BODY WHEN MOBILE MENU OPEN
  ========================================================= */

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =========================================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ========================================================= */

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* =======================================================
          NAVBAR HEADER
      ======================================================= */}

      <header className="fixed left-0 top-0 z-50 w-full transition-all duration-500">
        {/* =====================================================
            NAVBAR BACKGROUND & GOLD BOTTOM BORDER LINE
        ===================================================== */}

        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            scrolled ? "bg-[#0A0A0A] shadow-2xl" : "bg-white shadow-sm"
          }`}
        />

        {/* METALLIC GOLD BOTTOM HORIZONTAL LINE */}
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C99545] to-transparent z-20 shadow-[0_1px_6px_rgba(201,149,69,0.5)]" />

        {/* =====================================================
            NAV CONTENT (110px Height)
        ===================================================== */}

        <div className="relative mx-auto flex h-[110px] w-[calc(100%-32px)] max-w-[1440px] items-center justify-between md:w-[calc(100%-64px)] z-10">
          
          {/* ===================================================
              LOGO (Prominent Medium-Large Size)
          =================================================== */}

          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="group relative z-[60] flex items-center"
            aria-label="Dynamic Homes"
          >
            <div className="relative h-[72px] w-[240px] md:h-[82px] md:w-[280px] origin-left">
              {/* -----------------------------------------------
                  DARK LOGO (Shown when on White Background)
              ------------------------------------------------ */}

              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
              >
                <Image
                  src="/brand/dynamic-homes-logo.png"
                  alt="Dynamic Homes Private Limited"
                  fill
                  priority
                  sizes="280px"
                  className="object-contain object-left"
                />
              </div>

              {/* -----------------------------------------------
                  WHITE LOGO (Shown when Scrolled on Black Background)
              ------------------------------------------------ */}

              <div
                className={`absolute inset-0 transition-opacity duration-500 ${
                  scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src="/brand/dynamic-homes-white-logo.png"
                  alt="Dynamic Homes Private Limited"
                  fill
                  priority
                  sizes="280px"
                  className="object-contain object-left"
                />
              </div>
            </div>
          </Link>

          {/* ===================================================
              DESKTOP NAVIGATION (100% Solid Visible Text)
          =================================================== */}

          <nav className="hidden items-center gap-8 lg:flex xl:gap-10">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" &&
                  pathname.startsWith(item.href));

              // Explicit colors for guaranteed 100% visibility in any browser:
              const textColor = scrolled
                ? isActive
                  ? "#E3B968"
                  : "#FFFFFF"
                : isActive
                  ? "#B17A3A"
                  : "#0A0A0A"; // SOLID DEEP BLACK ON WHITE BACKGROUND

              return (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    style={{ color: textColor }}
                    className="group relative block py-2 text-[13px] font-extrabold tracking-[0.16em] uppercase transition-colors duration-300 hover:opacity-80"
                  >
                    {item.label}

                    {/* Active / Hover Line */}

                    <span
                      className={`
                        absolute
                        -bottom-[2px]
                        left-0
                        h-[2px]
                        bg-gradient-to-r
                        from-[#8F5D22]
                        via-[#B17A3A]
                        to-[#F4D58A]
                        transition-all
                        duration-300
                        ease-out
                        ${
                          isActive
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                        }
                      `}
                    />
                  </Link>
                </div>
              );
            })}
          </nav>

          {/* ===================================================
              DESKTOP ACTIONS
          =================================================== */}

          <div className="hidden items-center gap-4 lg:flex">

            {/* Wishlist */}

            <button
              onClick={() => setIsWishlistOpen(true)}
              style={{
                color: scrolled ? "#FFFFFF" : "#0A0A0A",
                borderColor: scrolled ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)",
                backgroundColor: scrolled ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)"
              }}
              className="group relative flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300"
              aria-label="Wishlist"
            >
              <Heart
                size={18}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              {wishlistCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#B17A3A] px-1 text-[8.5px] font-bold text-white shadow-lg">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* =================================================
                ENQUIRE BUTTON
            ================================================= */}

            <Link
              href="/contact"
              className="
                group
                relative
                inline-flex
                h-[48px]
                min-w-[160px]
                items-center
                justify-center
                gap-3.5
                overflow-hidden
                border
                border-[#C99545]
                bg-[#8F5D22]
                px-6
                text-[11px]
                font-bold
                tracking-[0.18em]
                text-white
                uppercase
                shadow-lg
                transition-all
                duration-500
              "
            >
              {/* Gold hover fill */}

              <span
                className="
                  absolute
                  inset-0
                  -translate-x-full
                  bg-gradient-to-r
                  from-[#B17A3A]
                  via-[#E3B968]
                  to-[#C99545]
                  transition-transform
                  duration-500
                  ease-out
                  group-hover:translate-x-0
                "
              />

              <span className="relative z-10 flex items-center gap-2">
                <PhoneCall
                  size={14}
                  strokeWidth={2}
                />

                <span>Enquire Now</span>
              </span>

              <ArrowUpRight
                size={15}
                strokeWidth={2}
                className="
                  relative
                  z-10
                  transition-transform
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>

          {/* ===================================================
              MOBILE CONTROLS
          =================================================== */}

          <div className="relative z-[60] flex items-center gap-3 lg:hidden">

            {/* Wishlist */}

            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Wishlist"
              style={{
                color: scrolled ? "#FFFFFF" : "#0A0A0A",
                borderColor: scrolled ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.15)"
              }}
              className="relative flex h-10 w-10 items-center justify-center rounded-full border transition-all duration-300"
            >
              <Heart
                size={18}
                strokeWidth={2}
              />

              {wishlistCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#B17A3A] px-1 text-[8px] font-bold text-white">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Menu */}

            <button
              type="button"
              aria-label={
                mobileOpen
                  ? "Close menu"
                  : "Open menu"
              }
              onClick={() =>
                setMobileOpen((prev) => !prev)
              }
              style={{
                color: mobileOpen ? "#FFFFFF" : scrolled ? "#FFFFFF" : "#0A0A0A",
                backgroundColor: mobileOpen ? "#B17A3A" : scrolled ? "rgba(255,255,255,0.1)" : "#FFFFFF",
                borderColor: mobileOpen ? "#B17A3A" : scrolled ? "rgba(255,255,255,0.2)" : "rgba(0,0,0,0.2)"
              }}
              className="flex h-10 w-10 items-center justify-center rounded-sm border transition-all duration-300"
            >
              {mobileOpen ? <X size={19} strokeWidth={2} /> : <Menu size={19} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================
          MOBILE MENU OVERLAY
      ========================================================= */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-[#090909]/98 text-white backdrop-blur-2xl lg:hidden"
          >
            <div className="pointer-events-none absolute right-[-100px] top-[15%] h-[350px] w-[350px] rounded-full bg-[#B17A3A]/10 blur-[120px]" />

            <div className="relative flex h-full flex-col px-6 pb-7 pt-[145px]">

              <div>
                <div className="flex items-center gap-4">
                  <span className="h-[5px] w-[5px] rounded-full bg-[#C99545]" />
                  <span className="text-[9px] font-semibold tracking-[0.3em] text-[#E3B968] uppercase">
                    Navigation
                  </span>
                </div>
                <div className="mt-5 h-px w-full bg-white/10" />
              </div>

              <nav className="mt-3 flex flex-col">
                {navItems.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));

                  return (
                    <div key={item.label}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="group flex items-center justify-between border-b border-white/10 py-5"
                      >
                        <span
                          className={`font-[var(--font-bodoni)] text-[35px] leading-none transition-colors duration-300 ${
                            isActive
                              ? "text-[#E3B968]"
                              : "text-white/90 group-hover:text-[#E3B968]"
                          }`}
                        >
                          {item.label}
                        </span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#B17A3A] group-hover:bg-[#B17A3A]">
                          <ArrowUpRight size={15} strokeWidth={1.5} />
                        </span>
                      </Link>
                    </div>
                  );
                })}
              </nav>

              <div className="mt-auto">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="group relative flex h-[54px] w-full items-center justify-center gap-3 overflow-hidden border border-[#B17A3A] bg-[#B17A3A] text-[10px] font-semibold tracking-[0.2em] text-white uppercase"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    <PhoneCall size={14} strokeWidth={1.5} />
                    Enquire Now
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </span>
                </Link>

                <div className="mt-5 flex items-center justify-between text-[8px] tracking-[0.25em] text-white/35 uppercase">
                  <span>Dynamic Homes</span>
                  <span>NCR · India</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}