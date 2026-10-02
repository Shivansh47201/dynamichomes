"use client";

import { SERVICES, Service } from "@/app/data/services";
import { Compass, KeyRound, ShieldCheck, TrendingUp, ArrowUpRight, Check, Sparkles } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const ICON_MAP: Record<string, any> = {
  Compass,
  KeyRound,
  ShieldCheck,
  TrendingUp,
};

export default function ServicesOverview() {
  return (
    <section className="relative bg-[#FAF9F6] py-28 text-[#0A0A0A] overflow-hidden border-t border-black/10">
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#B17A3A]/10 blur-[180px]" />

      <div className="mx-auto w-[calc(100%-40px)] max-w-[1380px] md:w-[calc(100%-64px)] relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-14 border-b border-black/10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B17A3A]/40 bg-[#B17A3A]/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#8F5D22] mb-4">
              <Compass size={13} />
              <span>Institutional Expertise</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-[#0A0A0A] leading-tight">
              Advisory Divisions
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-black/60 font-light max-w-lg leading-relaxed">
            Institutional real estate advisory across plot acquisition, architectural design, 30-year legal audits, and portfolio management.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv, idx) => {
            const IconComp = ICON_MAP[srv.icon] || Compass;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group relative rounded-2xl border border-black/10 bg-white p-8 sm:p-12 flex flex-col justify-between shadow-xl transition-all duration-500 hover:border-[#B17A3A] hover:shadow-[0_20px_40px_rgba(177,122,58,0.18)] text-[#0A0A0A]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#B17A3A]/40 bg-[#B17A3A]/10 text-[#8F5D22] transition-transform duration-500 group-hover:scale-110">
                      <IconComp size={26} />
                    </div>
                    <span className="font-display text-xl text-black/20">0{idx + 1}</span>
                  </div>

                  <h3 className="font-display text-2xl font-medium text-[#0A0A0A] mt-8 group-hover:text-[#8F5D22] transition-colors leading-snug">
                    {srv.title}
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm leading-relaxed text-black/60 font-light">
                    {srv.shortDesc}
                  </p>

                  <div className="mt-8 space-y-2.5 border-t border-black/10 pt-6">
                    {srv.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs text-black/80 font-light">
                        <Check size={14} className="text-[#8F5D22] shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-10 pt-6 border-t border-black/10">
                  <Link
                    href={`/services#${srv.slug}`}
                    className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#8F5D22] hover:text-[#0A0A0A] transition-colors"
                  >
                    <span>Read Advisory Protocol</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
