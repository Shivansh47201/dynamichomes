"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  MoveUpRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import BookTourModal from "@/app/components/ui/BookTourModal";
import { PROJECTS } from "@/app/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

const HERO_SLIDES = PROJECTS.map((project, index) => ({
  id: project.id,
  image: project.image,
  location: project.location,
  distance: project.connectivity?.[0]?.distance ?? project.status,
  title: project.name,
  eyebrow: project.tagline,
  description: project.overview,
  plot: project.floorPlans.map((plan) => plan.size).join(" · "),
  price: project.startingPrice,
  priceNote: project.priceNote ? "Brochure price; confirm current rate." : undefined,
  tag: String(index + 1).padStart(2, "0"),
  link: "/projects/vami",
}));

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBookTourOpen, setIsBookTourOpen] = useState(false);

  const slide = HERO_SLIDES[currentSlide];

  useEffect(() => {
    if (HERO_SLIDES.length < 2) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length
    );
  };

  return (
    <>
      <section className="relative min-h-svh overflow-hidden bg-[#0A0A0A] text-white">
        {/* =========================================================
            BACKGROUND
        ========================================================= */}

        <div className="absolute inset-0">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.015 }}
              transition={{ duration: 1.2, ease }}
              className="absolute inset-0"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            </motion.div>
          </AnimatePresence>

          {/* Dark cinematic treatment */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Left reading gradient */}
          <div className="absolute inset-y-0 left-0 w-full bg-linear-to-r from-black/85 via-black/45 to-transparent" />

          {/* Bottom grounding */}
          <div className="absolute inset-x-0 bottom-0 h-52 bg-linear-to-t from-black/85 to-transparent" />

          {/* Very subtle warm atmosphere */}
          <div className="absolute -right-40 top-1/4 h-125 w-125 rounded-full bg-[#B17A3A]/[0.07] blur-[140px]" />
        </div>

        {/* =========================================================
            ARCHITECTURAL FRAME
        ========================================================= */}

        <div className="pointer-events-none absolute inset-0 z-2">
          <div className="absolute left-[5%] top-0 h-full w-px bg-white/8" />
          <div className="absolute right-[5%] top-0 h-full w-px bg-white/6" />

          <div className="absolute left-[5%] right-[5%] top-22 h-px bg-white/8" />
          <div className="absolute left-[5%] right-[5%] bottom-27 h-px bg-white/8" />
        </div>

        {/* =========================================================
            TOP NAV / BRAND STRIP
        ========================================================= */}

        <div className="absolute left-0 right-0 top-0 z-20">
          <div className="mx-auto flex h-22 w-[90%] max-w-345 items-center justify-between">
            <Link href="/" className="group">
              <Image
                src="/brand/dynamic-homes-logo.png"
                alt="Dynamic Homes"
                width={180}
                height={70}
                priority
                className="h-auto w-33.75 object-contain brightness-0 invert"
              />
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#C99545]" />

                <span className="text-[10px] uppercase tracking-[0.24em] text-white/60">
                  Greater Noida · NCR
                </span>
              </div>

              <div className="h-5 w-px bg-white/15" />

              <Link
                href="/contact"
                className="group flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white/70 transition-colors hover:text-[#E3B968]"
              >
                Contact
                <MoveUpRight
                  size={13}
                  strokeWidth={1.4}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* =========================================================
            MAIN CONTENT
        ========================================================= */}

        <div className="relative z-10 mx-auto flex min-h-svh w-[90%] max-w-345 items-center">
          <div className="grid w-full grid-cols-1 lg:grid-cols-12">
            {/* =====================================================
                LEFT EDITORIAL CONTENT
            ===================================================== */}

            <div className="col-span-1 flex max-w-170 flex-col justify-center pb-28 pt-32 lg:col-span-7 lg:pb-20 lg:pt-20">
              {/* Eyebrow */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={`${slide.id}-eyebrow`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.55, ease }}
                  className="mb-7 flex items-center gap-4"
                >
                  <span className="h-px w-10 bg-[#C99545]" />

                  <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#E3B968]">
                    {slide.eyebrow}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* Title */}
              <div className="overflow-hidden">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.h1
                    style={{ fontFamily: "var(--font-bodoni)" }}
                    key={`${slide.id}-title`}
                    initial={{ opacity: 0, y: 45 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -35 }}
                    transition={{
                      duration: 0.8,
                      ease,
                    }}
                    className="
                      text-[clamp(3.5rem,7vw,6.8rem)]
                      font-medium
                      leading-[0.9]
                      tracking-[-0.045em]
                      text-white
                    "
                  >
                    {slide.title}
                  </motion.h1>
                </AnimatePresence>
              </div>

              {/* Gold detail */}
              <motion.div
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: 80, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.25,
                  ease,
                }}
                className="mt-8 h-0.5 bg-[#C99545]"
              />

              {/* Description */}
              <AnimatePresence mode="wait" initial={false}>
                <motion.p
                  key={`${slide.id}-description`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.15,
                    ease,
                  }}
                  className="
                    mt-7
                    max-w-142.5
                    text-[15px]
                    font-light
                    leading-7
                    text-white/70
                    sm:text-base
                  "
                >
                  {slide.description}
                </motion.p>
              </AnimatePresence>

              {/* Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.3,
                  ease,
                }}
                className="mt-9 flex flex-wrap items-center gap-3"
              >
                <Link
                  href={slide.link}
                  className="
                    group
                    inline-flex
                    h-12.5
                    items-center
                    gap-4
                    bg-[#B17A3A]
                    px-6
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#C99545]
                  "
                >
                  View Property

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>

                <button
                  type="button"
                  onClick={() => setIsBookTourOpen(true)}
                  className="
                    group
                    inline-flex
                    h-12.5
                    items-center
                    gap-3
                    border
                    border-white/20
                    bg-black/20
                    px-6
                    text-[10px]
                    font-semibold
                    uppercase
                    tracking-[0.18em]
                    text-white/85
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-[#C99545]
                    hover:text-[#E3B968]
                  "
                >
                  <Calendar
                    size={14}
                    strokeWidth={1.4}
                    className="text-[#C99545]"
                  />

                  Private Visit
                </button>
              </motion.div>
            </div>

            {/* =====================================================
                RIGHT PROPERTY INFORMATION
            ===================================================== */}

            <div className="col-span-1 hidden items-end justify-end pb-28 lg:col-span-5 lg:flex">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 25 }}
                  transition={{ duration: 0.7, ease }}
                  className="w-82.5"
                >
                  {/* Property information */}
                  <div className="border border-white/15 bg-black/35 backdrop-blur-md">
                    {/* Location */}
                    <div className="border-b border-white/10 p-5">
                      <div className="flex items-start gap-3">
                        <MapPin
                          size={17}
                          strokeWidth={1.3}
                          className="mt-0.5 shrink-0 text-[#D5A65B]"
                        />

                        <div>
                          <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
                            Location
                          </p>

                          <p className="mt-1.5 text-sm leading-5 text-white/80">
                            {slide.location}
                          </p>

                          <p className="mt-1 text-xs text-[#D5A65B]">
                            {slide.distance}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="grid grid-cols-2">
                      <div className="border-r border-white/10 p-5">
                        <p className="text-[9px] uppercase tracking-[0.18em] text-white/35">
                          Configuration
                        </p>

                        <p className="mt-2 text-sm text-white/85">
                          {slide.plot}
                        </p>
                      </div>

                      <div className="p-5">
                        <p className="text-[9px] uppercase tracking-[0.18em] text-white/35">
                          Starting From
                        </p>

                        <p className="mt-2 font-(--font-bodoni) text-xl text-[#E3B968]">
                          {slide.price}
                        </p>
                        {slide.priceNote && (
                          <p className="mt-1 text-[9px] leading-4 text-white/45">
                            {slide.priceNote}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Explore */}
                    <Link
                      href={slide.link}
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        border-t
                        border-white/10
                        px-5
                        py-4
                        transition-colors
                        duration-300
                        hover:bg-white/4
                      "
                    >
                      <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-white/55 group-hover:text-white">
                        Explore details
                      </span>

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.4}
                        className="text-[#C99545] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* =========================================================
            BOTTOM CONTROL BAR
        ========================================================= */}

        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="mx-auto flex w-[90%] max-w-345 items-center justify-between border-t border-white/10 py-5">
            {/* Slide counter */}
            <div className="flex items-center gap-5">
              <div className="flex items-baseline gap-2">
                <span className="font-(--font-bodoni) text-lg text-[#E3B968]">
                  {slide.tag}
                </span>

                <span className="text-[10px] text-white/30">
                  / 0{HERO_SLIDES.length}
                </span>
              </div>

              {/* Progress */}
              {HERO_SLIDES.length > 1 && (
                <div className="hidden h-px w-24 overflow-hidden bg-white/15 sm:block">
                  <motion.div
                    key={currentSlide}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 8, ease: "linear" }}
                    className="h-full bg-[#C99545]"
                  />
                </div>
              )}

              {/* Navigation */}
              {HERO_SLIDES.length > 1 && <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous property"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    border
                    border-white/15
                    text-white/60
                    transition-all
                    duration-300
                    hover:border-[#C99545]
                    hover:bg-[#B17A3A]
                    hover:text-white
                  "
                >
                  <ChevronLeft size={15} strokeWidth={1.4} />
                </button>

                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next property"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    border
                    border-white/15
                    text-white/60
                    transition-all
                    duration-300
                    hover:border-[#C99545]
                    hover:bg-[#B17A3A]
                    hover:text-white
                  "
                >
                  <ChevronRight size={15} strokeWidth={1.4} />
                </button>
              </div>}
            </div>

            {/* Bottom descriptor */}
            <div className="hidden items-center gap-4 md:flex">
              <span className="text-[9px] uppercase tracking-[0.2em] text-white/30">
                Curated Real Estate
              </span>

              <span className="h-4 w-px bg-white/15" />

              <span className="text-[9px] uppercase tracking-[0.2em] text-[#D5A65B]">
                Dynamic Homes
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================
            MOBILE PROPERTY INFO
        ========================================================= */}

        <div className="absolute bottom-20.5 left-0 right-0 z-20 px-[5%] lg:hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease }}
              className="flex items-end justify-between gap-6"
            >
              <div>
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">
                  Starting from
                </p>

                <p className="mt-1 font-(--font-bodoni) text-xl text-[#E3B968]">
                  {slide.price}
                </p>
                {slide.priceNote && (
                  <p className="mt-1 text-[9px] leading-4 text-white/45">
                    {slide.priceNote}
                  </p>
                )}
              </div>

              <div className="text-right">
                <p className="text-[9px] uppercase tracking-[0.18em] text-white/40">
                  Location
                </p>

                <p className="mt-1 max-w-47.5 text-xs text-white/75">
                  {slide.location}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* =========================================================
            EDGE GOLD ACCENT
        ========================================================= */}

        <div className="absolute right-[5%] top-1/2 hidden h-28 w-px -translate-y-1/2 bg-linear-to-b from-transparent via-[#C99545] to-transparent lg:block" />

        <div className="absolute right-[calc(5%-2px)] top-1/2 hidden h-1 w-1 -translate-y-1/2 rounded-full bg-[#E3B968] shadow-[0_0_12px_#E3B968] lg:block" />
      </section>

      <BookTourModal
        isOpen={isBookTourOpen}
        onClose={() => setIsBookTourOpen(false)}
      />
    </>
  );
}