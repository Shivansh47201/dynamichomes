"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollToTop() {
  const pathname = usePathname();

  // Reset scroll instantly on pathname change
  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }

      const root = document.documentElement;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, 0);

      const timer = setTimeout(() => {
        root.style.scrollBehavior = "smooth";
      }, 80);

      return () => clearTimeout(timer);
    }
  }, [pathname]);

  // Global capture click listener on all links to reset scroll to top BEFORE route transition
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (
        anchor &&
        anchor.href &&
        !anchor.href.startsWith("tel:") &&
        !anchor.href.startsWith("mailto:") &&
        !anchor.href.includes("#")
      ) {
        if ("scrollRestoration" in window.history) {
          window.history.scrollRestoration = "manual";
        }
        document.documentElement.style.scrollBehavior = "auto";
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      window.removeEventListener("click", handleLinkClick, { capture: true });
    };
  }, []);

  return null;
}
