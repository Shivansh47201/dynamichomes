"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowUp,
  Compass,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { submitFormToGoogleSheets } from "@/app/lib/submitForm";

function Instagram({
  size = 24,
  strokeWidth = 2,
  className = "",
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function Linkedin({
  size = 24,
  strokeWidth = 2,
  className = "",
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function Facebook({
  size = 24,
  strokeWidth = 2,
  className = "",
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function Youtube({
  size = 24,
  strokeWidth = 2,
  className = "",
}: {
  size?: number;
  strokeWidth?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-white text-[#0A0A0A]">
      {/* =========================================================
          SUBTLE ARCHITECTURAL BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        {/* Fine grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #000 1px, transparent 1px),
              linear-gradient(to bottom, #000 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />

        {/* Vertical architectural lines */}
        <div className="absolute left-[6%] top-0 h-full w-px bg-black/[0.045]" />
        <div className="absolute right-[6%] top-0 h-full w-px bg-black/[0.045]" />

        {/* Gold ambient glow */}
        <div className="absolute -right-32 top-20 h-[350px] w-[350px] rounded-full bg-[#C99545]/[0.045] blur-[130px]" />

        <div className="absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#B17A3A]/[0.035] blur-[140px]" />
      </div>

      {/* =========================================================
          GOLD TOP BORDER
      ========================================================= */}

      <div className="relative h-0.5 w-full bg-gradient-to-r from-transparent via-[#B17A3A] to-transparent" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-[1440px] sm:w-[calc(100%-48px)] lg:w-[calc(100%-80px)]">
        {/* =======================================================
            MAIN FOOTER CONTENT
        ======================================================= */}

        <section className="border-b border-black/10 py-16 sm:py-20">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.7fr_0.8fr_0.9fr_1.1fr] lg:gap-8 xl:gap-12">
            {/* =================================================
                BRAND
            ================================================= */}

            <div>
              <Link
                href="/"
                className="group inline-flex items-center"
              >
                <Image
                  src="/brand/dynamic-homes-logo.png"
                  alt="Dynamic Homes"
                  width={240}
                  height={90}
                  className="h-auto w-[175px] object-contain transition-opacity duration-300 group-hover:opacity-75"
                />
              </Link>

              <div className="mt-7 max-w-[380px]">
                <p className="text-sm leading-7 text-black/55">
                  A real estate brand focused on thoughtfully selected
                  residential and commercial opportunities across Noida
                  and Greater Noida.
                </p>
              </div>

              {/* Gold divider */}
              <div className="mt-7 flex items-center gap-2">
                <span className="h-px w-10 bg-[#B17A3A]" />
                <span className="h-px w-4 bg-[#B17A3A]/40" />
                <span className="h-px w-2 bg-[#B17A3A]/20" />
              </div>

              {/* Social */}
              <div className="mt-7 flex items-center gap-2">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="
                    flex h-10 w-10 items-center justify-center
                    border border-black/10
                    text-black/50
                    transition-all duration-300
                    hover:border-[#B17A3A]
                    hover:bg-[#B17A3A]
                    hover:text-white
                  "
                >
                  <Instagram size={16} strokeWidth={1.5} />
                </a>

                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="
                    flex h-10 w-10 items-center justify-center
                    border border-black/10
                    text-black/50
                    transition-all duration-300
                    hover:border-[#B17A3A]
                    hover:bg-[#B17A3A]
                    hover:text-white
                  "
                >
                  <Linkedin size={16} strokeWidth={1.5} />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="
                    flex h-10 w-10 items-center justify-center
                    border border-black/10
                    text-black/50
                    transition-all duration-300
                    hover:border-[#B17A3A]
                    hover:bg-[#B17A3A]
                    hover:text-white
                  "
                >
                  <Facebook size={16} strokeWidth={1.5} />
                </a>

                <a
                  href="#"
                  aria-label="YouTube"
                  className="
                    flex h-10 w-10 items-center justify-center
                    border border-black/10
                    text-black/50
                    transition-all duration-300
                    hover:border-[#B17A3A]
                    hover:bg-[#B17A3A]
                    hover:text-white
                  "
                >
                  <Youtube size={16} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* =================================================
                EXPLORE
            ================================================= */}

            <FooterColumn title="Explore">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/contact">Contact Us</FooterLink>
              <FooterLink href="/terms-and-conditions">
                Terms & Conditions
              </FooterLink>
              <FooterLink href="/privacy-policy">
                Privacy Policy
              </FooterLink>
            </FooterColumn>

            {/* =================================================
                PORTFOLIO
            ================================================= */}

            <FooterColumn title="Portfolio">
              <FooterLink href="/projects/vami">
                VAMI Enclave
              </FooterLink>

              <FooterLink href="/projects/vami#plot-pricing">
                VAMI Plot Options
              </FooterLink>
            </FooterColumn>

            {/* =================================================
                KEY LOCATIONS
            ================================================= */}

            <FooterColumn title="Key Locations">
              <FooterLink href="/projects/vami#location">
                Daudpur, Greater Noida
              </FooterLink>

              <FooterLink href="/projects/vami#connectivity">
                130 m Road to Jewar
              </FooterLink>

              <FooterLink href="/projects/vami#connectivity">
                Eastern Peripheral Expressway
              </FooterLink>

              <FooterLink href="/projects/vami#connectivity">
                Yamuna Expressway
              </FooterLink>
            </FooterColumn>

            {/* =================================================
                CONTACT
            ================================================= */}

            <div>
              <FooterHeading>Contact</FooterHeading>

              <div className="mt-6 space-y-5">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    strokeWidth={1.4}
                    className="mt-0.5 shrink-0 text-[#B17A3A]"
                  />

                  <p className="text-sm leading-6 text-black/55">
                    Office No. 604/6F,
                    <br />
                    Tradex Tower-1,
                    <br />
                    Alpha 1, Alpha Greater Noida,
                    <br />
                    Gautam Buddha Nagar,
                    <br />
                    Uttar Pradesh, India, 201310
                  </p>
                </div>

                {/* Phone */}
                <a
                  href="tel:+917827711724"
                  className="group flex items-center gap-3"
                >
                  <Phone
                    size={16}
                    strokeWidth={1.4}
                    className="shrink-0 text-[#B17A3A]"
                  />

                  <span className="text-sm text-black/60 transition-colors group-hover:text-[#B17A3A]">
                    +91 78277 11724
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:dynamichomesit@gmail.com"
                  className="group flex items-center gap-3"
                >
                  <Mail
                    size={16}
                    strokeWidth={1.4}
                    className="shrink-0 text-[#B17A3A]"
                  />

                  <span className="break-all text-sm text-black/60 transition-colors group-hover:text-[#B17A3A]">
                    dynamichomesit@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* =======================================================
            NEWSLETTER SUBSCRIBE BAR
        ======================================================= */}
        <FooterSubscribeBar />

        {/* =======================================================
            LOWER TRUST STRIP
        ======================================================= */}

        <section className="border-b border-black/10 py-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#B17A3A]/25 bg-[#B17A3A]/5">
                <ShieldCheck
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#B17A3A]"
                />
              </div>

              <div>
                <p className="text-xs font-semibold text-black/75">
                  Dynamic Homes Private Limited
                </p>

                <p className="mt-0.5 text-[11px] text-black/40">
                  VAMI Enclave · Greater Noida
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="
                group inline-flex items-center gap-2
                text-xs font-semibold uppercase tracking-widest
                text-[#8F5D22]
              "
            >
              Talk to our team

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="
                  transition-transform duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </section>

        {/* =======================================================
            COPYRIGHT
        ======================================================= */}

        <section className="py-7">
          <div className="flex flex-col gap-5 text-[11px] text-black/40 sm:flex-row sm:items-center sm:justify-between">
            {/* Copyright */}
            <p>
              © {new Date().getFullYear()} Dynamic Homes Private Limited.
              All rights reserved.
            </p>

            {/* Links */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-[#B17A3A]"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms-and-conditions"
                className="transition-colors hover:text-[#B17A3A]"
              >
                Terms & Conditions
              </Link>

              <span className="hidden h-3 w-px bg-black/15 sm:block" />

              {/* Back to top */}
              <button
                type="button"
                onClick={scrollToTop}
                className="
                  group inline-flex items-center gap-2
                  font-medium text-black/60
                  transition-colors
                  hover:text-[#B17A3A]
                "
              >
                Back to top

                <span
                  className="
                    flex h-7 w-7 items-center justify-center
                    rounded-full border border-black/15
                    transition-all duration-300
                    group-hover:border-[#B17A3A]
                    group-hover:bg-[#B17A3A]
                    group-hover:text-white
                  "
                >
                  <ArrowUp size={12} strokeWidth={1.5} />
                </span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

/* =============================================================
   FOOTER HEADING
============================================================= */

function FooterHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-black/75">
        {children}
      </h3>

      <div className="mt-4 flex items-center gap-1.5">
        <span className="h-px w-6 bg-[#B17A3A]" />
        <span className="h-px w-2 bg-[#B17A3A]/40" />
      </div>
    </div>
  );
}

/* =============================================================
   FOOTER COLUMN
============================================================= */

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <FooterHeading>{title}</FooterHeading>

      <div className="mt-6 space-y-3.5">
        {children}
      </div>
    </div>
  );
}

/* =============================================================
   FOOTER LINK
============================================================= */

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      scroll={true}
      onClick={() => {
        if (typeof window !== "undefined") {
          document.documentElement.style.scrollBehavior = "auto";
          window.scrollTo(0, 0);
        }
      }}
      className="
        group flex items-center gap-1.5
        text-sm text-black/55
        transition-colors duration-300
        hover:text-[#B17A3A]
      "
    >
      <ChevronRight
        size={12}
        strokeWidth={1.5}
        className="
          -ml-4 opacity-0
          transition-all duration-300
          group-hover:ml-0
          group-hover:opacity-100
        "
      />

      <span>{children}</span>
    </Link>
  );
}

/* =============================================================
   FOOTER SUBSCRIBE BAR
============================================================= */

function FooterSubscribeBar() {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitting(true);
    await submitFormToGoogleSheets({
      type: "subscribe",
      email,
      topic: "Footer Newsletter Subscription",
      source: "Footer Subscribe Bar",
    });
    setSubmitting(false);
    setDone(true);
    setEmail("");
  };

  return (
    <div className="border-b border-black/10 py-8">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#FAF9F6] p-6 sm:p-8 rounded-2xl border border-black/5">
        <div>
          <h4 className="font-display text-lg sm:text-xl font-medium text-[#0A0A0A]">
            Stay Updated on Greater Noida & Jewar Expressway Real Estate
          </h4>
          <p className="text-xs text-black/60 font-light mt-1">
            Get instant notifications on upcoming residential plot launches, price trends & infrastructure updates.
          </p>
        </div>

        {done ? (
          <div className="flex items-center gap-2 text-xs font-semibold text-[#8F5D22] bg-[#B17A3A]/10 px-4 py-2.5 rounded-xl border border-[#B17A3A]/30">
            <CheckCircle2 size={16} />
            <span>Thank you for subscribing!</span>
          </div>
        ) : (
          <form onSubmit={handleSubscribe} className="flex w-full md:w-auto items-center gap-2.5">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full md:w-72 rounded-xl border border-black/15 bg-white px-4 py-2.5 text-xs text-[#0A0A0A] placeholder-black/40 focus:border-[#8F5D22] focus:outline-none"
            />
            <button
              type="submit"
              disabled={submitting}
              className="shrink-0 rounded-xl border border-[#B17A3A] bg-[#9A6426] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#7F511D] transition-colors disabled:opacity-50"
            >
              {submitting ? "..." : "Subscribe"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}