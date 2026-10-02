"use client";

import { useRef, useState } from "react";
import { useScroll, useTransform, motion, useSpring } from "framer-motion";
import { Sparkles, ArrowUpRight, Compass, Layers, ShieldCheck, Eye, Cpu, Building2, CheckCircle2, ChevronDown } from "lucide-react";
import Image from "next/image";
import BookTourModal from "@/app/components/ui/BookTourModal";
import { vamiEnclave } from "@/app/data/projects";

const roadReference = vamiEnclave.connectivity.find((item) => item.name.includes("130 m Road"));

const VAMI_SPATIAL_STAGES = [
  {
    step: "01",
    badge: "Location & Connectivity",
    title: "Brochure-listed Connectivity",
    subtitle: `${roadReference?.name} · ${roadReference?.distance}.`,
    desc: vamiEnclave.overview.short,
    image: "/properties/indian-villa-exterior.png",
    specs: vamiEnclave.connectivity.slice(0, 3).map((item) => ({ label: item.name, value: item.distance })),
    layerDepth: { roof: -60, main: 0, base: 60 }
  },
  {
    step: "02",
    badge: "Plot Options",
    title: "Plot Sizes Shown in Brochure",
    subtitle: vamiEnclave.plotOptions.map((option) => option.label).join(" · "),
    desc: vamiEnclave.layout.note,
    image: "/properties/indian-villa-courtyard.png",
    specs: vamiEnclave.plotOptions.slice(0, 3).map((option) => ({ label: option.label, value: option.priceDisplay })),
    layerDepth: { roof: -100, main: 0, base: 100 }
  },
  {
    step: "03",
    badge: "Layout References",
    title: "Roads & Future Expansion",
    subtitle: vamiEnclave.layout.mainRoads.join(" · "),
    desc: `${vamiEnclave.layout.internalRoadReference} ${vamiEnclave.layout.futureExpansion} ${vamiEnclave.layout.note}`,
    image: "/properties/indian-villa-living.png",
    specs: [
      ...vamiEnclave.layout.mainRoads.map((road) => ({ label: "Main road", value: road })),
      { label: "Future expansion", value: "Shown in layout" },
    ],
    layerDepth: { roof: -140, main: 0, base: 140 }
  },
  {
    step: "04",
    badge: "Brochure Amenities",
    title: "Services Described in Brochure",
    subtitle: "Confirm what is delivered or committed before booking.",
    desc: vamiEnclave.amenities.map((amenity) => `${amenity.name}: ${amenity.description}`).join(" "),
    image: "/properties/indian-villa-exterior.png",
    specs: vamiEnclave.amenities.slice(0, 3).map((amenity) => ({ label: amenity.name, value: "Brochure reference" })),
    layerDepth: { roof: 0, main: 0, base: 0 }
  }
];

export default function ScrollSpatialExperience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isBookTourOpen, setIsBookTourOpen] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 24,
    restDelta: 0.001,
  });

  const rotateX = useTransform(smoothProgress, [0, 0.33, 0.66, 1], [18, -12, 12, 0]);
  const rotateY = useTransform(smoothProgress, [0, 0.33, 0.66, 1], [-15, 15, -10, 0]);
  const scale = useTransform(smoothProgress, [0, 0.2, 0.5, 0.8, 1], [0.92, 1.02, 0.96, 1.04, 1]);
  const opacity = useTransform(smoothProgress, [0, 0.05, 0.95, 1], [0.6, 1, 1, 0.9]);

  const activeStageIndex = useTransform(smoothProgress, [0, 0.28, 0.62, 0.95], [0, 1, 2, 3]);

  const roofLayerY = useTransform(smoothProgress, [0, 0.5, 1], [-80, -140, 0]);
  const baseLayerY = useTransform(smoothProgress, [0, 0.5, 1], [80, 140, 0]);
  const shadowBlur = useTransform(smoothProgress, [0, 0.5, 1], ["0px 20px 40px rgba(0,0,0,0.8)", "0px 40px 80px rgba(227,185,104,0.25)", "0px 20px 40px rgba(0,0,0,0.8)"]);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#050505] text-white border-t border-white/10 h-[380vh]"
    >
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden py-10">
        
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(177,122,58,0.12)_0%,transparent_70%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Top Header Bar */}
        <div className="mx-auto w-[calc(100%-40px)] max-w-345 md:w-[calc(100%-64px)] relative z-20 flex items-center justify-between border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B17A3A]/40 bg-[#B17A3A]/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#E3B968]">
              <Sparkles size={13} />
              <span>{vamiEnclave.projectName} Project Information</span>
            </div>
            <span className="hidden sm:inline text-xs text-white/50 font-light">
              Scroll to review details summarized from the supplied brochure
            </span>
          </div>

          <div className="flex items-center gap-2">
            {VAMI_SPATIAL_STAGES.map((s, idx) => (
              <div
                key={s.step}
                className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300"
              >
                <span className="text-[10px] text-[#E3B968] font-mono">{s.step}</span>
                <span className="hidden md:inline text-white/40 text-[10px]">{s.badge}</span>
                {idx < VAMI_SPATIAL_STAGES.length - 1 && <span className="text-white/20 mx-1">/</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Main 3D Spatial Viewport */}
        <div className="mx-auto w-[calc(100%-40px)] max-w-345 md:w-[calc(100%-64px)] relative z-10 flex-1 my-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 relative h-105 sm:h-120 w-full flex items-center justify-center perspective-distant">
            
            <motion.div
              style={{
                rotateX,
                rotateY,
                scale,
                opacity,
                boxShadow: shadowBlur,
              }}
              className="relative w-full h-full rounded-2xl border border-white/20 bg-linear-to-b from-[#161616] via-[#101010] to-[#080808] p-4 sm:p-6 overflow-hidden shadow-2xl transition-all duration-300"
            >
              <motion.div
                style={{ y: roofLayerY }}
                className="absolute top-4 left-6 right-6 z-20 pointer-events-none rounded-xl border border-[#E3B968]/40 bg-black/60 p-3 backdrop-blur-md flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#E3B968] animate-ping" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#E3B968]">
                    {roadReference?.name}
                  </span>
                </div>
                <span className="text-[9px] font-mono text-white/50">{roadReference?.distance}</span>
              </motion.div>

              <div className="relative h-full w-full overflow-hidden rounded-xl border border-white/10 bg-black">
                {VAMI_SPATIAL_STAGES.map((stage, idx) => (
                  <motion.div
                    key={stage.step}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: idx === Math.round(activeStageIndex.get() || 0) ? 1 : 0,
                      scale: idx === Math.round(activeStageIndex.get() || 0) ? 1 : 1.08,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="absolute inset-0 h-full w-full"
                  >
                    <Image
                      src={stage.image}
                      alt={stage.title}
                      fill
                      priority
                      className="object-cover brightness-90"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-transparent to-black/30" />
                  </motion.div>
                ))}

                <div className="absolute top-4 right-4 z-20 font-mono text-[9px] text-[#E3B968] bg-black/70 px-3 py-1 rounded-md border border-white/10 backdrop-blur-md">
                  {vamiEnclave.projectName} · {vamiEnclave.projectType}
                </div>
              </div>

              <motion.div
                style={{ y: baseLayerY }}
                className="absolute bottom-4 left-6 right-6 z-20 pointer-events-none rounded-xl border border-white/20 bg-black/70 p-3 backdrop-blur-md flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <Cpu size={14} className="text-[#E3B968]" />
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-white/80">
                    Payment Plan: {vamiEnclave.paymentPlan.booking} | {vamiEnclave.paymentPlan.registry}
                  </span>
                </div>
                <span className="text-[9px] font-mono text-[#E3B968]">{vamiEnclave.paymentPlan.fullPayment}</span>
              </motion.div>
            </motion.div>

          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl border border-white/15 bg-linear-to-b from-[#141414] via-[#0F0F0F] to-[#0A0A0A] p-8 shadow-2xl space-y-6">
              
              {VAMI_SPATIAL_STAGES.map((stage, idx) => {
                const isActive = idx === Math.round(activeStageIndex.get() || 0);
                if (!isActive) return null;

                return (
                  <motion.div
                    key={stage.step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-flex items-center gap-2 rounded-full border border-[#B17A3A]/40 bg-[#B17A3A]/10 px-3 py-1 text-[9.5px] font-semibold uppercase tracking-widest text-[#E3B968]">
                          <span className="font-mono">{stage.step}</span>
                          <span>{stage.badge}</span>
                        </span>
                        <span className="text-xs text-white/40 font-mono">Stage 0{idx + 1} / 04</span>
                      </div>

                      <h3 className="font-display text-3xl font-medium text-white leading-tight">
                        {stage.title}
                      </h3>
                      <p className="text-xs text-[#E3B968] font-medium mt-1">
                        {stage.subtitle}
                      </p>
                    </div>

                    <p className="text-xs leading-relaxed text-white/70 font-light border-t border-white/10 pt-4">
                      {stage.desc}
                    </p>

                    <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-4">
                      {stage.specs.map((sp, i) => (
                        <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-3 text-center">
                          <span className="text-[9px] uppercase tracking-wider text-white/40 block">
                            {sp.label}
                          </span>
                          <span className="text-xs font-semibold text-[#E3B968] block mt-1">
                            {sp.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => setIsBookTourOpen(true)}
                      className="flex w-full items-center justify-center gap-2.5 rounded-xl border border-[#B17A3A] bg-linear-to-r from-[#8F5D22] via-[#B17A3A] to-[#8F5D22] py-4 text-xs font-semibold uppercase tracking-widest text-white shadow-xl hover:opacity-95 transition-all mt-4"
                    >
                      <span>Ask About Project</span>
                      <ArrowUpRight size={15} />
                    </button>
                  </motion.div>
                );
              })}

            </div>
          </div>

        </div>

        <div className="mx-auto w-[calc(100%-40px)] max-w-345 md:w-[calc(100%-64px)] relative z-20 flex items-center justify-between border-t border-white/10 pt-4 text-xs text-white/50">
          <div className="flex items-center gap-2">
            <ChevronDown size={14} className="animate-bounce text-[#E3B968]" />
            <span>Scroll to review {vamiEnclave.projectName} details</span>
          </div>

          <span className="text-[10px] font-mono text-[#E3B968]">
            DYNAMIC HOMES PRIVATE LIMITED
          </span>
        </div>

      </div>

      <BookTourModal
        isOpen={isBookTourOpen}
        onClose={() => setIsBookTourOpen(false)}
      />
    </section>
  );
}
