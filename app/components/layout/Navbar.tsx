"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  Heart,
  Menu,
  PhoneCall,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useWishlist } from "@/app/context/WishlistContext";

/* =========================================================
   NAVIGATION
========================================================= */

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

/* =========================================================
   NAVBAR
========================================================= */

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const pathname = usePathname();

  const { wishlistCount, setIsWishlistOpen } = useWishlist();

  /* =======================================================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ======================================================= */

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  /* =======================================================
     LOCK BODY SCROLL WHEN MOBILE MENU IS OPEN
  ======================================================= */

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  /* =======================================================
     TOGGLE MOBILE MENU
  ======================================================= */

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => !prev);
  };

  /* =======================================================
     CLOSE MOBILE MENU
  ======================================================= */

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  /* =======================================================
     ACTIVE ROUTE
  ======================================================= */

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      {/* =====================================================
          DESKTOP + MOBILE NAVBAR
          WHITE THEME ONLY
      ===================================================== */}

      <header className="fixed inset-x-0 top-0 z-50 w-full">
        {/* ===================================================
            WHITE NAVBAR
        =================================================== */}

        <div className="border-b border-black/[0.08] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
          {/* -------------------------------------------------
              GOLD TOP ACCENT
          ------------------------------------------------- */}

          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#C99545] to-transparent" />

          {/* =================================================
              NAV CONTENT
          ================================================= */}

          <div
            className="
              mx-auto
              flex
              h-[76px]
              w-[calc(100%-24px)]
              max-w-[1440px]
              items-center
              justify-between
              sm:w-[calc(100%-40px)]
              md:h-[82px]
              md:w-[calc(100%-64px)]
              lg:h-[88px]
              lg:w-[calc(100%-80px)]
            "
          >
            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              href="/"
              onClick={closeMobileMenu}
              aria-label="Dynamic Homes"
              className="
                relative
                z-[70]
                flex
                shrink-0
                items-center
              "
            >
              <div
                className="
                  relative
                  h-[53px]
                  w-[160px]
                  sm:h-[57px]
                  sm:w-[176px]
                  md:h-[64px]
                  md:w-[198px]
                  lg:h-[68px]
                  lg:w-[215px]
                "
              >
                <Image
                  src="/brand/dynamic-homes-logo.png"
                  alt="Dynamic Homes Private Limited"
                  fill
                  priority
                  sizes="
                    (max-width: 640px) 160px,
                    (max-width: 768px) 176px,
                    (max-width: 1024px) 198px,
                    215px
                  "
                  className="object-contain object-left"
                />
              </div>
            </Link>

            {/* =================================================
                DESKTOP NAVIGATION
            ================================================= */}

            <nav className="hidden items-center lg:flex">
              <div className="flex items-center gap-7 xl:gap-9">
                {navItems.map((item) => {
                  const active = isActiveRoute(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`
                        group
                        relative
                        flex
                        h-[42px]
                        items-center
                        text-[11px]
                        font-semibold
                        uppercase
                        tracking-[0.17em]
                        transition-colors
                        duration-300
                        ${active
                          ? "text-[#9A6426]"
                          : "text-[#161616] hover:text-[#9A6426]"
                        }
                      `}
                    >
                      {item.label}

                      {/* Active / Hover underline */}

                      <span
                        className={`
                          absolute
                          bottom-0
                          left-0
                          h-[2px]
                          bg-gradient-to-r
                          from-[#8F5D22]
                          via-[#C99545]
                          to-[#E3B968]
                          transition-all
                          duration-300
                          ${active
                            ? "w-full"
                            : "w-0 group-hover:w-full"
                          }
                        `}
                      />
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* =================================================
                DESKTOP ACTIONS
            ================================================= */}

            <div className="hidden items-center gap-3.5 lg:flex">
              {/* -------------------------------------------------
                  DESKTOP WISHLIST
              ------------------------------------------------- */}

              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                aria-label="Open wishlist"
                className="
                  relative
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/15
                  bg-white
                  text-[#171717]
                  transition-all
                  duration-300
                  hover:border-[#B17A3A]
                  hover:bg-[#B17A3A]/5
                  hover:text-[#9A6426]
                "
              >
                <Heart
                  size={18}
                  strokeWidth={1.8}
                />

                {wishlistCount > 0 && (
                  <span
                    className="
                      absolute
                      -right-1
                      -top-1
                      flex
                      h-[18px]
                      min-w-[18px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#B17A3A]
                      px-1
                      text-[8px]
                      font-bold
                      text-white
                    "
                  >
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* -------------------------------------------------
                  DESKTOP ENQUIRE NOW
              ------------------------------------------------- */}

              <Link
                href="/contact"
                className="
                  group
                  inline-flex
                  h-11
                  min-w-[176px]
                  items-center
                  justify-center
                  gap-2.5
                  border
                  border-[#B17A3A]
                  bg-[#9A6426]
                  px-6
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.16em]
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#7F511D]
                "
              >
                <PhoneCall
                  size={14}
                  strokeWidth={1.8}
                />

                <span>Enquire Now</span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.8}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            </div>

            {/* =================================================
                MOBILE CONTROLS
            ================================================= */}

            <div className="flex items-center gap-2.5 lg:hidden">
              {/* -------------------------------------------------
                  MOBILE WISHLIST
              ------------------------------------------------- */}

              <button
                type="button"
                onClick={() => setIsWishlistOpen(true)}
                aria-label="Open wishlist"
                className="
                  relative
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-black/15
                  bg-white
                  text-[#161616]
                  transition-all
                  duration-300
                  hover:border-[#B17A3A]
                  hover:text-[#9A6426]
                  sm:h-11
                  sm:w-11
                "
              >
                <Heart
                  size={17}
                  strokeWidth={1.8}
                  className="sm:h-[18px] sm:w-[18px]"
                />

                {wishlistCount > 0 && (
                  <span
                    className="
                      absolute
                      -right-1
                      -top-1
                      flex
                      h-[16px]
                      min-w-[16px]
                      items-center
                      justify-center
                      rounded-full
                      bg-[#B17A3A]
                      px-1
                      text-[7px]
                      font-bold
                      text-white
                    "
                  >
                    {wishlistCount}
                  </span>
                )}
              </button>

              {/* -------------------------------------------------
                  MOBILE MENU BUTTON
              ------------------------------------------------- */}

              <button
                type="button"
                onClick={toggleMobileMenu}
                aria-label={
                  mobileOpen
                    ? "Close navigation menu"
                    : "Open navigation menu"
                }
                aria-expanded={mobileOpen}
                className={`
                  flex
                  h-10
                  w-10
                  items-center
                  justify-center
                  rounded-sm
                  border
                  transition-all
                  duration-300
                  sm:h-11
                  sm:w-11
                  ${mobileOpen
                    ? "border-[#B17A3A] bg-[#B17A3A] text-white"
                    : "border-black/15 bg-white text-[#161616] hover:border-[#B17A3A] hover:text-[#9A6426]"
                  }
                `}
              >
                {mobileOpen ? (
                  <X
                    size={19}
                    strokeWidth={1.8}
                  />
                ) : (
                  <Menu
                    size={19}
                    strokeWidth={1.8}
                  />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* =======================================================
          MOBILE NAVIGATION
      ======================================================= */}

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            transition={{
              duration: 0.22,
              ease: "easeOut",
            }}
            className="
              fixed
              inset-x-0
              top-[78px]
              z-40
              max-h-[calc(100vh-78px)]
              overflow-y-auto
              border-b
              border-black/10
              bg-white
              shadow-[0_15px_40px_rgba(0,0,0,0.10)]
              lg:hidden
              sm:top-[84px]
            "
          >
            {/* =================================================
                MOBILE MENU CONTENT
            ================================================= */}

            <div
              className="
                mx-auto
                w-[calc(100%-32px)]
                max-w-[600px]
                py-4
                sm:w-[calc(100%-48px)]
                sm:py-5
              "
            >
              {/* -------------------------------------------------
                  MENU LABEL
              ------------------------------------------------- */}

              <div className="mb-2 flex items-center gap-2">
                <span className="h-[5px] w-[5px] rounded-full bg-[#B17A3A]" />

                <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-black/45">
                  Navigation
                </span>
              </div>

              {/* -------------------------------------------------
                  NAV LINKS
              ------------------------------------------------- */}

              <nav>
                {navItems.map((item, index) => {
                  const active = isActiveRoute(item.href);

                  return (
                    <motion.div
                      key={item.href}
                      initial={{
                        opacity: 0,
                        x: -8,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.035,
                        duration: 0.2,
                      }}
                    >
                      <Link
                        href={item.href}
                        onClick={closeMobileMenu}
                        className="
                          group
                          flex
                          min-h-[50px]
                          items-center
                          justify-between
                          border-b
                          border-black/[0.08]
                          py-3
                        "
                      >
                        <div className="flex items-center gap-3">
                          {/* Number */}

                          <span
                            className={`
                              w-5
                              text-[9px]
                              font-medium
                              tracking-[0.12em]
                              ${active
                                ? "text-[#B17A3A]"
                                : "text-black/25"
                              }
                            `}
                          >
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          {/* Label */}

                          <span
                            className={`
                              text-[16px]
                              font-medium
                              tracking-wide
                              transition-colors
                              duration-200
                              sm:text-[17px]
                              ${active
                                ? "text-[#9A6426]"
                                : "text-[#171717] group-hover:text-[#9A6426]"
                              }
                            `}
                          >
                            {item.label}
                          </span>
                        </div>

                        {/* Arrow */}

                        <span
                          className={`
                            flex
                            h-7
                            w-7
                            items-center
                            justify-center
                            rounded-full
                            border
                            transition-all
                            duration-200
                            ${active
                              ? "border-[#B17A3A] bg-[#B17A3A] text-white"
                              : "border-black/10 text-black/35 group-hover:border-[#B17A3A] group-hover:text-[#B17A3A]"
                            }
                          `}
                        >
                          <ArrowUpRight
                            size={13}
                            strokeWidth={1.6}
                          />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* =================================================
                  MOBILE ENQUIRE BUTTON
              ================================================= */}

              <div className="pt-4">
                <Link
                  href="/contact"
                  onClick={closeMobileMenu}
                  className="
                    flex
                    h-12
                    w-full
                    items-center
                    justify-center
                    gap-2.5
                    bg-[#9A6426]
                    px-4
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.16em]
                    text-white
                    transition-colors
                    duration-300
                    hover:bg-[#7F511D]
                  "
                >
                  <PhoneCall
                    size={14}
                    strokeWidth={1.7}
                  />

                  <span>Enquire Now</span>

                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.7}
                  />
                </Link>
              </div>

              {/* -------------------------------------------------
                  MOBILE FOOTER LABEL
              ------------------------------------------------- */}

              <div className="flex items-center justify-between pt-4">
                <span className="text-[8px] uppercase tracking-[0.16em] text-black/30">
                  Dynamic Homes
                </span>

                <span className="text-[8px] uppercase tracking-[0.16em] text-black/30">
                  Greater Noida
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}