"use client";

import { Compass, ArrowUpRight, Plane, Trees, Building2, MapPin } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { vamiEnclave } from "@/app/data/projects";

const CORRIDOR_REFERENCES = [
  {
    id: "130m-road",
    landmark: "130 m Road: Noida Extension to Jewar Airport",
    icon: Trees,
    image: "/properties/road-130m-noida.png",
  },
  {
    id: "eastern-peripheral-expressway",
    landmark: "Eastern Peripheral Expressway",
    icon: Building2,
    image: "/properties/eastern-peripheral-expressway.png",
  },
  {
    id: "noida-international-airport",
    landmark: "Noida International Airport / Jewar Airport",
    icon: Plane,
    image: "/properties/jewar-international-airport.png",
  },
].flatMap((reference) => {
  const connectivity = vamiEnclave.connectivity.find((item) => item.name === reference.landmark);
  return connectivity
    ? [{
        ...reference,
        name: connectivity.name,
        distance: connectivity.distance,
        source: connectivity.source,
      }]
    : [];
});

export default function TerritoriesSection() {
  return (
    <section className="relative bg-[#FAF9F6] py-28 text-[#0A0A0A] overflow-hidden border-t border-black/10">
      <div className="mx-auto w-[calc(100%-40px)] max-w-345 md:w-[calc(100%-64px)] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 border-b border-black/10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B17A3A]/40 bg-[#B17A3A]/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#8F5D22] mb-4">
              <Compass size={13} />
              <span>Location & Infrastructure Corridors</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] leading-tight">
              Strategic Regional Corridors
            </h2>
          </div>

        </div>

        {/* Territory Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {CORRIDOR_REFERENCES.map((t, i) => {
            const IconComp = t.icon;
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group relative rounded-2xl border border-black/10 bg-white overflow-hidden flex flex-col justify-between shadow-xl transition-all duration-500 hover:border-[#B17A3A] hover:shadow-[0_20px_40px_rgba(177,122,58,0.18)]"
              >
                {/* Top Image Banner */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/30" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#B17A3A]/50 bg-black/70 text-[#E3B968] backdrop-blur-md">
                      <IconComp size={20} />
                    </div>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/70 px-3 py-1 text-[10px] font-bold text-white/75 backdrop-blur-md">
                      <MapPin size={12} />
                      Brochure reference
                    </span>
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-8 flex-1 flex flex-col justify-between bg-white text-[#0A0A0A]">
                  <div>
                    <h3 className="font-display text-2xl font-medium text-[#0A0A0A] group-hover:text-[#8F5D22] transition-colors leading-snug">
                      {t.name}
                    </h3>
                    <p className="text-xs text-black/50 mt-1.5 font-light leading-relaxed">
                      Approximate distance from the supplied brochure: {t.distance}.
                    </p>

                    <div className="mt-6 space-y-2 border-t border-black/10 pt-4 text-xs text-black/70 font-light">
                      <div className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8F5D22]" />
                        <span>Distance: {t.distance}</span>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#8F5D22]" />
                        <span>Approximate reference; confirm route and travel time.</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 border-t border-black/10 pt-4 flex items-center justify-between">
                    <div>
                      <span className="text-[9px] uppercase tracking-wider text-black/40 block">Data source</span>
                      <span className="text-xs font-bold text-[#0A0A0A]">{t.source}</span>
                    </div>

                    <Link
                      href="/projects/vami"
                      className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#8F5D22] hover:text-[#0A0A0A] transition-colors"
                    >
                      <span>View Project</span>
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
