"use client";

import { Property } from "@/app/data/properties";
import { useWishlist } from "@/app/context/WishlistContext";
import { X, Bed, Bath, Maximize, MapPin, Heart, ArrowUpRight, ShieldCheck, Check, Calendar, PhoneCall } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface QuickViewModalProps {
  property: Property | null;
  onClose: () => void;
  onBookTour?: (property: Property) => void;
}

export default function QuickViewModal({ property, onClose, onBookTour }: QuickViewModalProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!property) return null;

  const isWishlisted = isInWishlist(property.id);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-[#121212] text-white shadow-2xl my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white hover:bg-white hover:text-black transition-all"
          >
            <X size={18} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[85vh] overflow-y-auto">
            {/* Left Column: Image Gallery */}
            <div className="lg:col-span-6 flex flex-col bg-black/80 p-6 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="relative aspect-16/11 w-full overflow-hidden rounded-xl border border-white/10">
                <Image
                  src={property.gallery[activeImageIndex] || property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-all duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="rounded-full border border-[#B17A3A]/60 bg-black/70 px-3 py-1 text-[9px] font-semibold uppercase tracking-widest text-[#E3B968] backdrop-blur-md">
                    {property.tag}
                  </span>
                </div>
              </div>

              {/* Thumbnail strip */}
              {property.gallery.length > 1 && (
                <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                  {property.gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative h-16 w-20 shrink-0 overflow-hidden rounded border transition-all ${
                        activeImageIndex === idx
                          ? "border-[#E3B968] ring-2 ring-[#B17A3A]"
                          : "border-white/10 opacity-60 hover:opacity-100"
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}

              {/* Agent Box */}
              <div className="mt-6 rounded-xl border border-white/10 bg-[#171717] p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={property.agent.avatar}
                    alt={property.agent.name}
                    className="h-10 w-10 rounded-full object-cover border border-[#B17A3A]"
                  />
                  <div>
                    <h5 className="text-xs font-semibold text-white">{property.agent.name}</h5>
                    <p className="text-[10px] text-white/50">{property.agent.title}</p>
                  </div>
                </div>
                <a
                  href={`tel:${property.agent.phone}`}
                  className="flex items-center gap-1.5 rounded-lg border border-[#B17A3A]/40 bg-[#B17A3A]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-[#E3B968] hover:bg-[#B17A3A] hover:text-white transition-all"
                >
                  <PhoneCall size={12} />
                  <span>Call Agent</span>
                </a>
              </div>
            </div>

            {/* Right Column: Details & CTA */}
            <div className="lg:col-span-6 p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-semibold tracking-widest uppercase text-[#E3B968]">
                    {property.type} · {property.sector}
                  </span>

                  <button
                    onClick={() => toggleWishlist(property.id)}
                    className={`flex items-center gap-1.5 text-xs transition-colors ${
                      isWishlisted ? "text-red-400" : "text-white/60 hover:text-white"
                    }`}
                  >
                    <Heart size={15} fill={isWishlisted ? "currentColor" : "none"} />
                    <span>{isWishlisted ? "Saved" : "Save"}</span>
                  </button>
                </div>

                <h2 className="font-display text-2xl font-medium text-white mt-1">
                  {property.title}
                </h2>

                <div className="mt-2 flex items-center gap-2 text-xs text-white/60">
                  <MapPin size={14} className="text-[#B17A3A]" />
                  <span>{property.location}</span>
                </div>

                <div className="mt-4">
                  <span className="text-[10px] uppercase tracking-wider text-white/40 block">Total Investment</span>
                  <span className="font-display text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#B17A3A] via-[#E3B968] to-[#F4D58A]">
                    {property.price}
                  </span>
                  <span className="text-xs text-white/50 ml-3">({property.pricePerSqFt})</span>
                </div>
                {property.priceNote && (
                  <p className="mt-2 text-xs leading-relaxed text-white/50">
                    {property.priceNote}
                  </p>
                )}

                <p className="mt-4 text-xs leading-relaxed text-white/70 font-light line-clamp-3">
                  {property.description}
                </p>

                {/* Key Specs */}
                <div className="mt-5 grid grid-cols-3 gap-3 border-y border-white/10 py-4 text-center">
                  {property.beds > 0 && (
                    <div>
                      <span className="text-sm font-semibold text-white block">{property.beds} BHK</span>
                      <span className="text-[10px] text-white/40 uppercase">Bedrooms</span>
                    </div>
                  )}
                  {property.baths > 0 && (
                    <div>
                      <span className="text-sm font-semibold text-white block">{property.baths} Bath</span>
                      <span className="text-[10px] text-white/40 uppercase">Bathrooms</span>
                    </div>
                  )}
                  {(property.plotSizeSqYd || property.areaSqFt !== null) && (
                    <div>
                      <span className="text-sm font-semibold text-white block">
                        {property.plotSizeSqYd ?? property.areaSqFt}
                      </span>
                      <span className="text-[10px] text-white/40 uppercase">
                        {property.plotSizeSqYd ? "Sq.Yd Plot" : "Sq.Ft Area"}
                      </span>
                    </div>
                  )}
                </div>

                {/* Highlights */}
                <div className="mt-5">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-[#E3B968] mb-2">
                    Key Highlights
                  </h4>
                  <ul className="space-y-1.5 text-xs text-white/70 font-light">
                    {property.highlights.slice(0, 3).map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check size={13} className="text-[#B17A3A] shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4 border-t border-white/10">
                <div className="grid grid-cols-2 gap-3">
                  {onBookTour && (
                    <button
                      onClick={() => {
                        onClose();
                        onBookTour(property);
                      }}
                      className="flex items-center justify-center gap-2 rounded-lg border border-[#B17A3A] bg-[#B17A3A]/20 py-3 text-xs font-semibold uppercase tracking-wider text-[#E3B968] hover:bg-[#B17A3A] hover:text-white transition-all"
                    >
                      <Calendar size={14} />
                      <span>Book Viewing</span>
                    </button>
                  )}

                  <Link
                    href={`/properties/${property.id}`}
                    onClick={onClose}
                    className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-linear-to-r from-[#8F5D22] via-[#B17A3A] to-[#8F5D22] py-3 text-xs font-semibold uppercase tracking-wider text-white hover:opacity-95 transition-all"
                  >
                    <span>Full Details</span>
                    <ArrowUpRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
