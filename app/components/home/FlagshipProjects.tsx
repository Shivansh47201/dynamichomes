"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  MapPin,
  ShieldCheck,
  X,
  Navigation,
  Building2,
  Ruler,
  Route,
  Home,
  Trees,
  Zap,
  Landmark,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import { FEATURED_PROJECT, Project } from "@/app/data/projects";

export default function FlagshipProjects() {
  const [selectedFloorPlan, setSelectedFloorPlan] = useState<{
    project: Project;
    plan: Project["floorPlans"][0];
  } | null>(null);

  const project = FEATURED_PROJECT;

  return (
    <section
      id={`${project.id}-overview`}
      className="relative overflow-hidden bg-[#080808] text-white"
    >
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Architectural grid */}
        <div className="absolute inset-0 opacity-[0.018]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        {/* Vertical architectural lines */}
        <div className="absolute left-[6%] top-0 h-full w-px bg-white/2.5" />
        <div className="absolute right-[6%] top-0 h-full w-px bg-white/2.5" />

        {/* Ambient gold light */}
        <div className="absolute -left-62.5 top-125 h-162.5 w-162.5 rounded-full bg-[#B17A3A]/[0.035] blur-[180px]" />

        <div className="absolute -right-62.5 top-325 h-150 w-150 rounded-full bg-[#C99545]/2.5 blur-[180px]" />
      </div>

      {/* Top accent */}

      <div className="absolute left-0 right-0 top-0 h-px bg-linear-to-r from-transparent via-[#C99545]/80 to-transparent" />

      {/* =========================================================
          MAIN CONTAINER
      ========================================================= */}

      <div className="relative z-10 mx-auto max-w-370 px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28 xl:px-16">
        {/* =======================================================
            INTRO
        ======================================================= */}

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_430px] lg:items-end lg:gap-20">
          {/* LEFT INTRO */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C99545]" />

              <span className="text-xs font-medium uppercase tracking-[0.16em] text-[#D5A65B]">
                Featured Development
              </span>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="font-(--font-bodoni) text-5xl leading-none text-white/8 sm:text-6xl">
                01
              </span>

              <span className="h-8 w-px bg-white/10" />

              <span className="text-sm text-white/40">
                Dynamic Homes
              </span>
            </div>

            <h2
              style={{ fontFamily: "var(--font-bodoni)" }}
              className="
                mt-7
                max-w-225
                text-[clamp(3.8rem,8vw,8rem)]
                font-medium
                leading-[0.82]
                tracking-[-0.045em]
                text-white
              "
            >
              {project.name}
            </h2>

            <div className="mt-8 flex items-center gap-3">
              <span className="h-0.5 w-16 bg-[#C99545]" />
              <span className="h-px w-8 bg-[#C99545]/40" />
              <span className="h-px w-3 bg-[#C99545]/20" />
            </div>

            <p className="mt-7 max-w-162.5 text-base leading-7 text-white/55 sm:text-lg sm:leading-8">
              {project.tagline}
            </p>
          </motion.div>

          {/* RIGHT INTRO */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.035]
              p-6
              backdrop-blur-sm
              sm:p-7
            "
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C99545]/30 bg-[#C99545]/10">
                <Building2
                  size={18}
                  strokeWidth={1.5}
                  className="text-[#D5A65B]"
                />
              </div>

              <div>
                <span className="block text-sm font-semibold text-white">
                  About {project.name}
                </span>

                <span className="mt-1 block text-xs text-white/35">
                  {project.status}
                </span>
              </div>
            </div>

            <p className="mt-6 text-[14px] leading-7 text-white/60 sm:text-[15px]">
              {project.overview}
            </p>

            <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-black/20 p-4">
              <MapPin
                size={18}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-[#D5A65B]"
              />

              <div>
                <span className="block text-xs text-white/35">
                  Project location
                </span>

                <span className="mt-1 block text-sm font-medium leading-6 text-white/80">
                  {project.location}
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* =======================================================
            QUICK HIGHLIGHTS
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            mt-14
            grid
            grid-cols-2
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/2.5
            sm:grid-cols-4
          "
        >
          <HighlightCard
            icon={<MapPin size={18} strokeWidth={1.5} />}
            label="Location"
            value={project.location}
          />

          <HighlightCard
            icon={<Route size={18} strokeWidth={1.5} />}
            label="Land Area"
            value={project.totalLandArea ?? "Not provided"}
          />

          <HighlightCard
            icon={<Ruler size={18} strokeWidth={1.5} />}
            label="Plot Sizes Listed"
            value={String(project.floorPlans.length)}
          />

          <HighlightCard
            icon={<Navigation size={18} strokeWidth={1.5} />}
            label="Starting Price"
            value={project.startingPrice}
            last
          />
        </motion.div>

        {/* =======================================================
            SECTION DIVIDER
        ======================================================= */}

        <div className="mt-16 h-px bg-linear-to-r from-white/10 via-white/10 to-transparent" />

        {/* =======================================================
            MAIN SHOWCASE
        ======================================================= */}

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(360px,0.65fr)] lg:items-start lg:gap-14 xl:gap-16">
          {/* =====================================================
              LEFT — VISUAL STORY
          ===================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-5"
          >
            {/* MAIN IMAGE */}

            <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#111]">
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="
                    object-cover
                    transition-transform
                    duration-1800
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    group-hover:scale-[1.035]
                  "
                />

                {/* Image overlays */}

                <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/15 to-black/10" />

                <div className="absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-black/35 to-transparent" />

                {/* STATUS */}

                <div className="absolute left-5 top-5 sm:left-7 sm:top-7">
                  <div className="flex items-center gap-2 rounded-full border border-white/20 bg-black/55 px-4 py-2.5 backdrop-blur-md">
                    <span className="h-2 w-2 rounded-full bg-[#D5A65B] shadow-[0_0_10px_rgba(213,166,91,0.7)]" />

                    <span className="text-xs font-medium text-white">
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* PROJECT NUMBER */}

                <div className="absolute right-5 top-5 sm:right-7 sm:top-7">
                  <span className="rounded-full border border-white/15 bg-black/30 px-3 py-1.5 text-xs text-white/70 backdrop-blur-md">
                    Project 01
                  </span>
                </div>

                {/* IMAGE CONTENT */}

                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 lg:p-10">
                  <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <span className="block text-xs text-white/50">
                        Starting from
                      </span>

                      <span className="mt-1 block font-(--font-bodoni) text-3xl leading-none text-white sm:text-4xl">
                        {project.startingPrice}
                      </span>
                      {project.priceNote && (
                        <span className="mt-2 block max-w-sm text-xs leading-5 text-white/45">
                          {project.priceNote}
                        </span>
                      )}
                    </div>

                    <Link
                      href="/contact"
                      className="
                        group/cta
                        inline-flex
                        min-h-12
                        items-center
                        justify-center
                        gap-3
                        rounded-full
                        border
                        border-[#D5A65B]
                        bg-[#C99545]
                        px-6
                        text-xs
                        font-semibold
                        text-white
                        shadow-lg
                        shadow-black/20
                        transition-all
                        duration-300
                        hover:bg-[#D5A65B]
                        hover:shadow-[0_10px_35px_rgba(201,149,69,0.2)]
                      "
                    >
                      Enquire about project

                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        className="
                          transition-transform
                          duration-300
                          group-hover/cta:-translate-y-0.5
                          group-hover/cta:translate-x-0.5
                        "
                      />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="h-0.75 bg-linear-to-r from-[#8F5D22] via-[#D5A65B] to-[#F0CB88]" />
            </div>

            {/* =================================================
                NEW — PROJECT SNAPSHOT
            ================================================= */}

            <div className="grid gap-5 sm:grid-cols-[1.15fr_0.85fr]">
              {/* LEFT STORY CARD */}

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-linear-to-br
                  from-white/4.5
                  to-white/1.5
                  p-6
                  sm:p-7
                "
              >
                {/* Decorative glow */}

                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-[#C99545]/6 blur-3xl" />

                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C99545]/25 bg-[#C99545]/10">
                      <Home
                        size={18}
                        strokeWidth={1.5}
                        className="text-[#D5A65B]"
                      />
                    </div>

                    <div>
                      <span className="block text-sm font-semibold text-white">
                        A place made for living
                      </span>

                      <span className="block text-xs text-white/30">
                        Everyday comfort, thoughtfully planned
                      </span>
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-white/50">
                    {project.overview}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <MiniFeature
                      icon={<Trees size={15} strokeWidth={1.5} />}
                      title="Green Spaces"
                    />

                    <MiniFeature
                      icon={<Zap size={15} strokeWidth={1.5} />}
                      title="Utilities"
                    />
                  </div>
                </div>
              </div>

              {/* RIGHT STATS */}

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-1">
                <SnapshotStat number={project.totalLandArea ?? "Not provided"} label="Total land area" />
                <SnapshotStat number={String(project.totalUnits ?? "Not provided")} label="Total units" />
                <SnapshotStat number={project.startingPrice} label="Starting price" />
                <SnapshotStat number={project.status} label="Project status" />
              </div>
            </div>

            {/* =================================================
                NEW — LOCATION STRIP
            ================================================= */}

            <div
              className="
                flex
                flex-col
                gap-5
                rounded-2xl
                border
                border-[#C99545]/15
                bg-[#C99545]/[0.035]
                p-5
                sm:flex-row
                sm:items-center
                sm:justify-between
                sm:p-6
              "
            >
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C99545]/25 bg-[#C99545]/10">
                  <Landmark
                    size={18}
                    strokeWidth={1.5}
                    className="text-[#D5A65B]"
                  />
                </div>

                <div>
                  <span className="block text-xs text-white/35">
                    Connected location
                  </span>

                  <span className="mt-1 block text-sm font-semibold text-white/85">
                    {project.location}
                  </span>
                </div>
              </div>

              <Link
                href="/contact"
                className="
                  group/location
                  inline-flex
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-[#D5A65B]
                  transition-colors
                  hover:text-[#F0CB88]
                "
              >
                Get project details

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  className="
                    transition-transform
                    duration-300
                    group-hover/location:-translate-y-0.5
                    group-hover/location:translate-x-0.5
                  "
                />
              </Link>
            </div>
          </motion.div>

          {/* =====================================================
              RIGHT — INFORMATION
          ===================================================== */}

          <motion.aside
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="space-y-8"
          >
            {/* PROJECT HEADER */}

            <div className="rounded-2xl border border-white/10 bg-white/2.5 p-6 sm:p-7">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#D5A65B]">
                  Project Overview
                </span>

                <span className="font-(--font-bodoni) text-2xl text-white/20">
                  01
                </span>
              </div>

              <h3 style={{ fontFamily: "var(--font-bodoni)" }} className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.035em] text-white sm:text-5xl">
                {project.name}
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/45">
                {project.tagline}
              </p>
            </div>

            {/* CONNECTIVITY */}

            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C99545]/25 bg-[#C99545]/10">
                  <Navigation
                    size={17}
                    strokeWidth={1.4}
                    className="text-[#D5A65B]"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Connectivity
                  </h4>

                  <p className="text-xs text-white/30">
                    Important nearby locations
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/1.5">
                {project.connectivity?.slice(0, 5).map((item, index) => (
                  <div
                    key={index}
                    className="
                      group/row
                      grid
                      grid-cols-[34px_1fr_auto]
                      items-center
                      gap-3
                      border-b
                      border-white/10
                      px-4
                      py-4
                      last:border-b-0
                      transition-all
                      duration-300
                      hover:bg-[#C99545]/4.5
                    "
                  >
                    <span className="font-(--font-bodoni) text-base text-[#C99545]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm leading-5 text-white/55 transition-colors group-hover/row:text-white/85">
                      {item.landmark}
                    </span>

                    <span className="text-sm font-semibold text-white/80">
                      {item.distance}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* DEVELOPMENT FEATURES */}

            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C99545]/25 bg-[#C99545]/10">
                  <Check
                    size={17}
                    strokeWidth={1.6}
                    className="text-[#D5A65B]"
                  />
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white">
                    Development Features
                  </h4>

                  <p className="text-xs text-white/30">
                    Designed for everyday comfort
                  </p>
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/1.5">
                {project.amenities?.slice(0, 4).map((amenity, index) => (
                  <div
                    key={index}
                    className="
                      group/amenity
                      flex
                      items-start
                      gap-4
                      border-b
                      border-white/10
                      px-4
                      py-5
                      last:border-b-0
                      transition-colors
                      duration-300
                      hover:bg-white/2.5
                    "
                  >
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#C99545]/25 bg-[#C99545]/10">
                      <Check
                        size={13}
                        strokeWidth={1.8}
                        className="text-[#D5A65B]"
                      />
                    </span>

                    <div>
                      <p className="text-sm font-medium text-white/85">
                        {amenity.title}
                      </p>

                      <p className="mt-1.5 text-xs leading-5 text-white/40">
                        {amenity.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SMALL TRUST CARD */}

            <div className="rounded-2xl border border-white/10 bg-linear-to-br from-white/3.5 to-transparent p-5">
              <div className="flex items-start gap-3">
                <ShieldCheck
                  size={18}
                  strokeWidth={1.4}
                  className="mt-0.5 shrink-0 text-[#D5A65B]"
                />

                <div>
                  <p className="text-sm font-medium text-white/80">
                    Make an informed decision
                  </p>

                  <p className="mt-2 text-xs leading-5 text-white/35">
                    Verify project documents, approvals, registry terms and
                    other applicable details with the relevant authorities
                    before purchase.
                  </p>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* =======================================================
            PLOT COLLECTION
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#C99545]" />

                <span className="text-xs font-semibold text-[#D5A65B]">
                  Plot Collection
                </span>
              </div>

              <h4 className="mt-4 font-(--font-bodoni) text-4xl leading-none tracking-[-0.03em] text-white sm:text-5xl">
                Choose your space.
              </h4>
            </div>

            <p className="max-w-110 text-sm leading-6 text-white/40">
              Explore available plot configurations and select the option
              that fits your requirements.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {project.floorPlans.map((plan, index) => (
              <button
                key={index}
                type="button"
                onClick={() =>
                  setSelectedFloorPlan({
                    project,
                    plan,
                  })
                }
                className="
                  group/plot
                  relative
                  min-h-62.5
                  border-b
                  border-white/10
                  bg-[#0D0D0D]
                  p-6
                  text-left
                  transition-all
                  duration-500
                  hover:bg-[#15130F]
                  sm:border-r
                  lg:border-b-0
                  lg:last:border-r-0
                "
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C99545]/25 bg-[#C99545]/10">
                    <span className="font-(--font-bodoni) text-sm text-[#D5A65B]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-colors duration-300 group-hover/plot:border-[#C99545]/50">
                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.4}
                      className="
                        text-white/35
                        transition-all
                        duration-300
                        group-hover/plot:-translate-y-0.5
                        group-hover/plot:translate-x-0.5
                        group-hover/plot:text-[#D5A65B]
                      "
                    />
                  </div>
                </div>

                <div className="mt-10">
                  <p className="text-base font-semibold text-white/90">
                    {plan.title}
                  </p>

                  <p className="mt-2 text-sm text-white/35">
                    {plan.size}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-4">
                  <span className="text-xs text-white/30">
                    Starting from
                  </span>

                  <p className="mt-1 font-(--font-bodoni) text-2xl text-[#D5A65B]">
                    {plan.price}
                  </p>
                </div>

                <span
                  className="
                    absolute
                    bottom-0
                    left-0
                    h-0.75
                    w-0
                    bg-linear-to-r
                    from-[#8F5D22]
                    to-[#E3B968]
                    transition-all
                    duration-500
                    group-hover/plot:w-full
                  "
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* =======================================================
            PAYMENT STRUCTURE
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8 }}
          className="mt-24"
        >
          <div className="mb-10 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-9 bg-[#C99545]" />

                <span className="text-xs font-semibold text-[#D5A65B]">
                  Payment Structure
                </span>
              </div>

              <h4 className="mt-4 font-(--font-bodoni) text-4xl leading-none tracking-[-0.03em] text-white sm:text-5xl">
                Simple & clear.
              </h4>
            </div>

            <p className="max-w-100 text-sm leading-6 text-white/40">
              A straightforward payment structure designed to keep the
              process easy to understand.
            </p>
          </div>

          <div className="grid overflow-hidden rounded-2xl border border-white/10 sm:grid-cols-3">
            {project.paymentPlan?.map((step, index) => (
              <PaymentStepDark
                key={step.stage}
                number={String(index + 1).padStart(2, "0")}
                amount={step.percentage}
                title={step.stage}
                description={step.detail}
                last={index === (project.paymentPlan?.length ?? 0) - 1}
              />
            ))}
          </div>
        </motion.div>

        {/* =======================================================
            FINAL CTA
        ======================================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-20
            flex
            flex-col
            gap-7
            rounded-2xl
            border
            border-white/10
            bg-white/2.5
            p-6
            sm:p-7
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div className="flex max-w-190 items-start gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C99545]/25 bg-[#C99545]/10">
              <ShieldCheck
                size={17}
                strokeWidth={1.4}
                className="text-[#D5A65B]"
              />
            </div>

            <p className="text-xs leading-6 text-white/40 sm:text-sm">
              Buyers should independently verify title documents,
              approvals, registry terms, development permissions and road
              access with the relevant authorities before making a purchase
              decision.
            </p>
          </div>

          <Link
            href="/projects/vami"
            className="
              group/final
              inline-flex
              min-h-12
              shrink-0
              items-center
              justify-center
              gap-3
              rounded-full
              bg-[#C99545]
              px-7
              text-sm
              font-semibold
              text-white
              shadow-lg
              shadow-black/20
              transition-all
              duration-300
              hover:bg-[#D5A65B]
              hover:shadow-[0_10px_35px_rgba(201,149,69,0.2)]
            "
          >
            Explore Project

            <ArrowUpRight
              size={17}
              strokeWidth={1.5}
              className="
                transition-transform
                duration-300
                group-hover/final:-translate-y-0.5
                group-hover/final:translate-x-0.5
              "
            />
          </Link>
        </motion.div>
      </div>

      {/* =========================================================
          FLOOR PLAN MODAL
      ========================================================= */}

      <AnimatePresence>
        {selectedFloorPlan && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
            {/* BACKDROP */}

            <motion.button
              type="button"
              aria-label="Close floor plan"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFloorPlan(null)}
              className="absolute inset-0 cursor-default bg-black/90 backdrop-blur-md"
            />

            {/* MODAL */}

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.98,
              }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                z-10
                max-h-[92vh]
                w-full
                max-w-262.5
                overflow-y-auto
                rounded-2xl
                border
                border-white/10
                bg-[#11110F]
                text-white
                shadow-[0_30px_100px_rgba(0,0,0,0.75)]
              "
            >
              {/* HEADER */}

              <div className="sticky top-0 z-10 flex items-start justify-between border-b border-white/10 bg-[#11110F]/95 px-5 py-5 backdrop-blur-md sm:px-8">
                <div>
                  <span className="text-xs font-semibold text-[#D5A65B]">
                    {project.name} · {selectedFloorPlan.plan.title}
                  </span>

                  <h3 className="mt-2 font-(--font-bodoni) text-3xl leading-none sm:text-4xl">
                    {selectedFloorPlan.plan.title}
                  </h3>

                  <p className="mt-2 text-sm text-white/40">
                    {selectedFloorPlan.plan.size} ·{" "}
                    {selectedFloorPlan.plan.price}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedFloorPlan(null)}
                  className="
                    flex
                    h-11
                    w-11
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/3
                    text-white/60
                    transition-all
                    duration-300
                    hover:border-[#C99545]
                    hover:bg-[#C99545]
                    hover:text-white
                  "
                  aria-label="Close"
                >
                  <X size={18} strokeWidth={1.5} />
                </button>
              </div>

              {/* PLAN */}

              <div className="p-4 sm:p-8">
                <div className="relative aspect-16/10 w-full overflow-hidden rounded-xl border border-white/10 bg-[#080808]">
                  <Image
                    src={selectedFloorPlan.plan.image}
                    alt={selectedFloorPlan.plan.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 950px"
                  />
                </div>
                <p className="mt-2 text-[10px] leading-4 text-white/40">
                  Preview image only; this is not the official plot layout. Request the current layout from Dynamic Homes.
                </p>

                {/* FOOTER */}

                <div className="mt-6 flex flex-col gap-6 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="text-xs text-white/30">
                      Payment structure
                    </span>

                    <p className="mt-1 text-sm leading-6 text-white/50">
                      {project.paymentPlan?.map((step) => `${step.percentage} ${step.stage}`).join(" · ")}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    onClick={() => setSelectedFloorPlan(null)}
                    className="
                      group/modalcta
                      inline-flex
                      min-h-12
                      items-center
                      justify-center
                      gap-3
                      rounded-full
                      bg-[#C99545]
                      px-6
                      text-sm
                      font-semibold
                      text-white
                      transition-all
                      duration-300
                      hover:bg-[#D5A65B]
                    "
                  >
                    Enquire about this plot

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="
                        transition-transform
                        duration-300
                        group-hover/modalcta:-translate-y-0.5
                        group-hover/modalcta:translate-x-0.5
                      "
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* =============================================================
   HIGHLIGHT CARD
============================================================= */

function HighlightCard({
  icon,
  label,
  value,
  last = false,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  last?: boolean;
}) {
  return (
    <div
      className={`
        flex
        items-center
        gap-4
        p-5
        transition-colors
        duration-300
        hover:bg-white/2.5
        sm:p-6
        ${!last ? "border-b border-white/10 sm:border-b-0 sm:border-r" : ""}
      `}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C99545]/25 bg-[#C99545]/10">
        <span className="text-[#D5A65B]">{icon}</span>
      </div>

      <div>
        <span className="block text-xs text-white/30">
          {label}
        </span>

        <span className="mt-1 block text-sm font-semibold text-white/80">
          {value}
        </span>
      </div>
    </div>
  );
}

/* =============================================================
   MINI FEATURE
============================================================= */

function MiniFeature({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-black/20 px-3 py-3">
      <span className="text-[#D5A65B]">{icon}</span>

      <span className="text-xs font-medium text-white/65">
        {title}
      </span>
    </div>
  );
}

/* =============================================================
   SNAPSHOT STAT
============================================================= */

function SnapshotStat({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div
      className="
        group
        flex
        min-h-26.25
        flex-col
        justify-center
        rounded-2xl
        border
        border-white/10
        bg-[#0D0D0D]
        px-5
        py-5
        transition-all
        duration-300
        hover:border-[#C99545]/30
        hover:bg-[#12110F]
      "
    >
      <span className="font-(--font-bodoni) text-xl leading-tight text-[#D5A65B] sm:text-2xl">
        {number}
      </span>

      <span className="mt-2 text-xs leading-5 text-white/35">
        {label}
      </span>
    </div>
  );
}

/* =============================================================
   PAYMENT STEP
============================================================= */

function PaymentStepDark({
  number,
  amount,
  title,
  description,
  last = false,
}: {
  number: string;
  amount: string;
  title: string;
  description: string;
  last?: boolean;
}) {
  return (
    <div
      className={`
        group/payment
        relative
        min-h-52.5
        bg-[#0D0D0D]
        p-6
        transition-colors
        duration-300
        hover:bg-[#15130F]
        sm:p-8
        ${!last ? "border-b border-white/10 sm:border-b-0 sm:border-r" : ""}
      `}
    >
      <div className="flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C99545]/25 bg-[#C99545]/10">
          <span className="font-(--font-bodoni) text-sm text-[#D5A65B]">
            {number}
          </span>
        </div>

        <ChevronRight
          size={17}
          strokeWidth={1.2}
          className="
            text-white/20
            transition-all
            duration-300
            group-hover/payment:translate-x-1
            group-hover/payment:text-[#D5A65B]
          "
        />
      </div>

      <p className="mt-9 font-(--font-bodoni) text-3xl leading-none text-white sm:text-4xl">
        {amount}
      </p>

      <p className="mt-3 text-sm font-semibold text-white/85">
        {title}
      </p>

      <p className="mt-1.5 text-xs leading-5 text-white/35">
        {description}
      </p>

      <span
        className="
          absolute
          bottom-0
          left-0
          h-0.75
          w-0
          bg-[#C99545]
          transition-all
          duration-500
          group-hover/payment:w-full
        "
      />
    </div>
  );
}