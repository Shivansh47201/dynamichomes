"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import BookTourModal from "@/app/components/ui/BookTourModal";
import { vamiEnclave } from "@/app/data/projects";

const ease = [0.22, 1, 0.36, 1] as const;

const HERO_SLIDES = [
  {
    id: vamiEnclave.slug,
    image: "/properties/indian-villa-exterior.png",
    location: `${vamiEnclave.location.locality}, ${vamiEnclave.location.city}`,
    distance: `${vamiEnclave.connectivity.find((item) => item.name.includes("130 m Road"))?.distance} to the 130 m Road`,
    title: vamiEnclave.projectName,
    subtitle: vamiEnclave.overview.short,
    type: vamiEnclave.projectType,
    price: vamiEnclave.plotOptions.find((option) => option.price !== null)?.priceDisplay ?? "Price on request",
    priceNote: "Brochure price; confirm current rate.",
    size: vamiEnclave.plotOptions.map((option) => option.label).join(" · "),
    link: "/properties/vami-50",
  },
];

export default function PropertyDetailClient() {
  const { id } = useParams<{ id: string }>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBookTourOpen, setIsBookTourOpen] = useState(false);

  const selectedPlot = vamiEnclave.plotOptions.find(
    (option) => `vami-${option.sizeSqYd}` === id,
  ) ?? vamiEnclave.plotOptions[0];

  const plotImages: Record<number, string> = {
    50: "/properties/plot-50-sqyd.png",
    100: "/properties/plot-100-sqyd.png",
    200: "/properties/plot-200-sqyd.png",
    300: "/properties/plot-300-sqyd.png",
  };

  const baseSlide = HERO_SLIDES[currentSlide];
  const slide = {
    ...baseSlide,
    id: `${baseSlide.id}-${selectedPlot.sizeSqYd}`,
    image: plotImages[selectedPlot.sizeSqYd] || baseSlide.image,
    price: selectedPlot.priceDisplay,
    priceNote: selectedPlot.status === "user-provided-price"
      ? "User-provided price; confirm the current live rate with Dynamic Homes."
      : selectedPlot.sizeSqYd === 300
        ? "Indicative only; the supplied ₹1 Crore amount differs from the ₹90 Lakh indicative-rate calculation. Confirm the official price."
        : "Indicative price only, not confirmed in the brochure. Request the official current rate sheet.",
    size: selectedPlot.label,
    link: `/properties/vami-${selectedPlot.sizeSqYd}`,
  };

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
        {/* BACKGROUND IMAGE */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.025 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 1.1,
              ease,
            }}
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

        {/* IMAGE OVERLAY */}
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/45 to-black/10" />
        <div className="absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-t from-[#080808] via-[#080808]/70 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-black/65 to-transparent" />

        {/* SUBTLE GOLD LIGHT */}
        <div className="pointer-events-none absolute right-[12%] top-[28%] h-75 w-75 rounded-full bg-[#B17A3A]/10 blur-[130px]" />

        {/* CONTENT */}
        <div className="relative z-10 mx-auto flex min-h-svh w-[calc(100%-32px)] max-w-360 flex-col px-0 sm:w-[calc(100%-48px)] lg:w-[calc(100%-80px)]">
          {/* TOP BAR */}
          <header className="flex items-center justify-between border-b border-white/10 py-5">
            <Link
              href="/"
              className="flex items-center gap-3"
              aria-label="Dynamic Homes"
            >
              <div className="flex h-8 w-8 items-center justify-center border border-[#C99545]/50 bg-black/20">
                <span className="font-(--font-bodoni) text-lg text-[#E3B968]">
                  D
                </span>
              </div>

              <div className="leading-none">
                <span className="block text-[11px] font-semibold tracking-[0.18em] text-white">
                  DYNAMIC HOMES
                </span>

                <span className="mt-1 block text-[8px] tracking-[0.22em] text-white/45">
                  PRIVATE LIMITED
                </span>
              </div>
            </Link>

            <div className="hidden items-center gap-8 text-[10px] text-white/55 md:flex">
              <span>Greater Noida</span>
              <span className="h-4 w-px bg-white/15" />
              <span className="text-[#E3B968]">
                Premium Real Estate
              </span>
            </div>

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-2
                border
                border-white/20
                bg-black/25
                px-4
                py-2.5
                text-[10px]
                font-medium
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:border-[#C99545]
                hover:bg-[#C99545]
              "
            >
              Contact
              <ArrowUpRight size={13} strokeWidth={1.5} />
            </Link>
          </header>

          {/* MAIN CONTENT */}
          <div className="flex flex-1 items-center py-20 lg:py-24">
            <div className="w-full max-w-190">
              {/* Location */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`location-${slide.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease }}
                  className="mb-6 flex items-center gap-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[#C99545]/50 bg-black/25 backdrop-blur-md">
                    <MapPin
                      size={14}
                      strokeWidth={1.5}
                      className="text-[#E3B968]"
                    />
                  </div>

                  <div>
                    <p className="text-[11px] font-medium text-white">
                      {slide.location}
                    </p>

                    <p className="mt-0.5 text-[10px] text-white/45">
                      {slide.distance}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Small category */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`type-${slide.id}`}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.05,
                    ease,
                  }}
                  className="mb-4 text-[11px] font-medium uppercase tracking-[0.16em] text-[#E3B968]"
                >
                  {slide.type}
                </motion.p>
              </AnimatePresence>

              {/* TITLE */}
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`title-${slide.id}`}
                  style={{ fontFamily: "var(--font-bodoni)" }}
                  initial={{
                    opacity: 0,
                    y: 25,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -20,
                  }}
                  transition={{
                    duration: 0.75,
                    ease,
                  }}
                  className="
                    max-w-180
                    text-[clamp(3.3rem,7vw,6.8rem)]
                    font-medium
                    leading-[0.9]
                    tracking-[-0.045em]
                    text-white
                  "
                >
                  {slide.title}
                  <span className="text-[#D5A65B]">.</span>
                </motion.h1>
              </AnimatePresence>

              {/* DESCRIPTION */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={`subtitle-${slide.id}`}
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -15,
                  }}
                  transition={{
                    duration: 0.65,
                    delay: 0.1,
                    ease,
                  }}
                  className="
                    mt-6
                    max-w-150
                    text-sm
                    leading-6
                    text-white/70
                    sm:text-[15px]
                    sm:leading-7
                  "
                >
                  {slide.subtitle}
                </motion.p>
              </AnimatePresence>

              {/* PRICE + SIZE */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`details-${slide.id}`}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -12,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15,
                    ease,
                  }}
                  className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4"
                >
                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.12em] text-white/40">
                      Brochure-listed price
                    </span>

                    <span className="mt-1 block font-(--font-bodoni) text-2xl text-white sm:text-3xl">
                      {slide.price}
                    </span>
                    {slide.priceNote && (
                      <span className="mt-1 block max-w-xs text-[10px] leading-4 text-white/50">
                        {slide.priceNote}
                      </span>
                    )}
                  </div>

                  <span className="hidden h-9 w-px bg-white/15 sm:block" />

                  <div>
                    <span className="block text-[10px] uppercase tracking-[0.12em] text-white/40">
                      Configuration listed
                    </span>

                    <span className="mt-1 block text-sm font-medium text-white/80">
                      {slide.size}
                    </span>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* ACTIONS */}
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`action-${slide.id}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2,
                    }}
                  >
                    <Link
                      href={slide.link}
                      className="
                        group
                        inline-flex
                        h-12
                        items-center
                        gap-3
                        bg-[#C99545]
                        px-6
                        text-[11px]
                        font-semibold
                        text-white
                        shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                        transition-all
                        duration-300
                        hover:bg-[#D5A65B]
                      "
                    >
                      View Property

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.5}
                        className="
                          transition-transform
                          duration-300
                          group-hover:-translate-y-0.5
                          group-hover:translate-x-0.5
                        "
                      />
                    </Link>
                  </motion.div>
                </AnimatePresence>

                <button
                  type="button"
                  onClick={() => setIsBookTourOpen(true)}
                  className="
                    inline-flex
                    h-12
                    items-center
                    gap-2.5
                    border
                    border-white/20
                    bg-black/30
                    px-5
                    text-[11px]
                    font-medium
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:border-white/40
                    hover:bg-white/10
                  "
                >
                  <Calendar
                    size={15}
                    strokeWidth={1.5}
                    className="text-[#D5A65B]"
                  />
                  Schedule a Visit
                </button>
              </div>
            </div>
          </div>

          {/* BOTTOM NAVIGATION */}
          <div className="border-t border-white/10 py-5">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              {HERO_SLIDES.length > 1 && (
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={prevSlide}
                    aria-label="Previous property"
                    className="flex h-9 w-9 items-center justify-center border border-white/15 bg-black/20 text-white/65 transition-all hover:border-[#C99545] hover:text-[#E3B968]"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <div className="flex items-center gap-2">
                    {HERO_SLIDES.map((item, index) => (
                      <button
                        key={item.id}
                        type="button"
                        aria-label={`Go to property ${index + 1}`}
                        onClick={() => setCurrentSlide(index)}
                        className="group py-2"
                      >
                        <span
                          className={`block h-0.5 transition-all duration-500 ${
                            index === currentSlide
                              ? "w-10 bg-[#D5A65B]"
                              : "w-5 bg-white/25 group-hover:bg-white/50"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={nextSlide}
                    aria-label="Next property"
                    className="flex h-9 w-9 items-center justify-center border border-white/15 bg-black/20 text-white/65 transition-all hover:border-[#C99545] hover:text-[#E3B968]"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              )}

              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-3"
                >
                  <span className="text-[10px] text-white/35">
                    0{currentSlide + 1} / 0{HERO_SLIDES.length}
                  </span>
                  <span className="h-4 w-px bg-white/15" />
                  <span className="text-[10px] font-medium text-white/60">
                    {slide.title}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <BookTourModal
        isOpen={isBookTourOpen}
        onClose={() => setIsBookTourOpen(false)}
      />
    </>
  );
}
