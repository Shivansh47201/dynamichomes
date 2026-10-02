"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function TopProgressBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Ensure viewport starts at top (Hero section) without scroll restoration jumps
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }

    // Instagram / YouTube style top progress bar animation
    setVisible(true);
    setProgress(30);

    const t1 = setTimeout(() => setProgress(75), 100);
    const t2 = setTimeout(() => setProgress(100), 250);
    const t3 = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 420);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [pathname]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="top-bar-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
          className="fixed top-0 left-0 right-0 z-[99999] h-[3px] pointer-events-none select-none"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-[#8F5D22] via-[#E3B968] to-[#F4D58A] shadow-[0_0_10px_#E3B968]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
