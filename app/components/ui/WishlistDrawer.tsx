"use client";

import { useWishlist } from "@/app/context/WishlistContext";
import { X, Heart, Trash2, ArrowUpRight, Bed, Bath, Maximize } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function WishlistDrawer() {
  const { isWishlistOpen, setIsWishlistOpen, wishlistProperties, toggleWishlist, wishlistCount } = useWishlist();

  return (
    <AnimatePresence>
      {isWishlistOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsWishlistOpen(false)}
            className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 z-50 flex w-full max-w-md flex-col bg-[#121212] border-l border-white/10 text-white shadow-2xl"
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#B17A3A]/20 border border-[#B17A3A]/40 text-[#E3B968]">
                  <Heart size={18} fill="currentColor" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium text-white">Saved Properties</h3>
                  <p className="text-[11px] text-white/50">{wishlistCount} VAMI plot options saved</p>
                </div>
              </div>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Content List */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {wishlistProperties.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-white/50 py-12">
                  <Heart size={48} className="mb-4 text-white/20" strokeWidth={1} />
                  <p className="font-display text-lg text-white/80">Your Wishlist is Empty</p>
                  <p className="text-xs text-white/40 mt-1 max-w-xs">
                    Browse our luxury portfolio and click the heart icon to save your favorite residences.
                  </p>
                  <button
                    onClick={() => setIsWishlistOpen(false)}
                    className="mt-6 border border-[#B17A3A] bg-[#B17A3A]/10 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#E3B968] hover:bg-[#B17A3A] hover:text-white transition-all"
                  >
                    Explore Properties
                  </button>
                </div>
              ) : (
                wishlistProperties.map((prop) => (
                  <div
                    key={prop.id}
                    className="group relative flex items-start gap-4 rounded-lg border border-white/10 bg-[#171717] p-3.5 transition-all hover:border-[#B17A3A]/50"
                  >
                    <div className="relative h-20 w-24 shrink-0 overflow-hidden rounded border border-white/10">
                      <Image
                        src={prop.image}
                        alt={prop.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-semibold uppercase tracking-wider text-[#E3B968]">
                          {prop.type} · {prop.sector}
                        </span>
                        <button
                          onClick={() => toggleWishlist(prop.id)}
                          title="Remove from wishlist"
                          className="text-white/40 hover:text-red-400 transition-colors p-1"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <h4 className="font-display text-sm font-medium text-white truncate mt-0.5">
                        {prop.title}
                      </h4>
                      <p className="text-xs font-bold text-[#E3B968] mt-1">{prop.price}</p>
                      {prop.priceNote && (
                        <p className="mt-1 text-[9px] leading-4 text-white/40">
                          {prop.priceNote}
                        </p>
                      )}
                      <div className="flex items-center gap-3 text-[10px] text-white/50 mt-2">
                        {prop.beds > 0 && <span className="flex items-center gap-1"><Bed size={11} /> {prop.beds} BHK</span>}
                        {prop.baths > 0 && <span className="flex items-center gap-1"><Bath size={11} /> {prop.baths} Bath</span>}
                        {(prop.plotSizeSqYd || prop.areaSqFt !== null) && (
                          <span className="flex items-center gap-1">
                            <Maximize size={11} />
                            {prop.plotSizeSqYd
                              ? `${prop.plotSizeSqYd} sq. yd.`
                              : `${prop.areaSqFt} sq.ft`}
                          </span>
                        )}
                      </div>
                    </div>
                    <Link
                      href={`/properties/${prop.id}`}
                      onClick={() => setIsWishlistOpen(false)}
                      className="absolute bottom-3 right-3 text-white/60 hover:text-[#E3B968] transition-colors"
                    >
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                ))
              )}
            </div>

            {/* Drawer Footer */}
            {wishlistProperties.length > 0 && (
              <div className="border-t border-white/10 p-6 bg-[#0A0A0A]">
                <Link
                  href="/projects/vami"
                  onClick={() => setIsWishlistOpen(false)}
                  className="flex w-full items-center justify-center gap-2 border border-[#B17A3A] bg-linear-to-r from-[#8F5D22] via-[#B17A3A] to-[#8F5D22] py-3.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg transition-all hover:opacity-95"
                >
                  <span>Explore VAMI Project</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
