"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Force scroll to top behind loader curtain on page load/refresh
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }

    // Unblock page cleanly once DOM is ready & hydrated
    const timer = setTimeout(() => {
      setLoading(false);
    }, 350);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="page-loader-curtain"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#0A0A0A] text-white pointer-events-none select-none"
        >
          {/* Top Gold Loader Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-r from-[#8F5D22] via-[#E3B968] to-[#F4D58A] shadow-[0_0_12px_#E3B968] animate-pulse" />
          </div>

          {/* Luxury Brand Mark */}
          <div className="flex flex-col items-center gap-4">
            <Image
              src="/brand/dynamic-homes-logo.png"
              alt="Dynamic Homes"
              width={160}
              height={70}
              priority
              className="h-auto w-[140px] object-contain brightness-0 invert opacity-95"
            />
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#E3B968] animate-ping" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-[#E3B968] font-mono">
                DYNAMIC HOMES
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
