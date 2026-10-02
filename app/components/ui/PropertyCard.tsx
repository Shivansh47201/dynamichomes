"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Heart,
  MapPin,
} from "lucide-react";

import { Property } from "@/app/data/properties";
import { useWishlist } from "@/app/context/WishlistContext";

interface PropertyCardProps {
  property: Property;
  onQuickView?: (property: Property) => void;
}

export default function PropertyCard({
  property,
}: PropertyCardProps) {
  const { isInWishlist, toggleWishlist } = useWishlist();

  const isWishlisted = isInWishlist(property.id);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[3px]
        border
        border-[#D8D0C4]
        bg-[#F8F5EF]
        shadow-[0_8px_30px_rgba(25,20,15,0.06)]
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-[#B17A3A]/60
        hover:shadow-[0_20px_50px_rgba(25,20,15,0.13)]
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="relative aspect-16/10 overflow-hidden bg-[#DDD6CA]">
        <Image
          src={property.image}
          alt={property.title}
          fill
          sizes="
            (max-width: 640px) 100vw,
            (max-width: 1024px) 50vw,
            33vw
          "
          className="
            object-cover
            transition-transform
            duration-900
            ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:scale-[1.045]
          "
        />

        {/* Image depth */}
        <div
          className="
            pointer-events-none
            absolute
            inset-0
            bg-linear-to-t
            from-black/55
            via-black/5
            to-black/10
          "
        />

        {/* =================================================
            PROPERTY TYPE
        ================================================= */}

        <div className="absolute left-5 top-5">
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/25
              bg-[#11100E]/55
              px-3.5
              py-1.5
              text-[9px]
              font-medium
              tracking-[0.16em]
              text-white
              uppercase
              backdrop-blur-md
            "
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#E3B968]" />

            {property.type}
          </span>
        </div>

        {/* =================================================
            WISHLIST
        ================================================= */}

        <button
          type="button"
          aria-label={
            isWishlisted
              ? "Remove property from wishlist"
              : "Add property to wishlist"
          }
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();

            toggleWishlist(property.id);
          }}
          className={`
            absolute
            right-5
            top-5
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            border
            backdrop-blur-md
            transition-all
            duration-300

            ${
              isWishlisted
                ? `
                  border-[#B17A3A]
                  bg-[#B17A3A]
                  text-white
                `
                : `
                  border-white/30
                  bg-[#11100E]/45
                  text-white
                  hover:border-[#E3B968]
                  hover:bg-[#11100E]/70
                `
            }
          `}
        >
          <Heart
            size={17}
            strokeWidth={1.7}
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>

        {/* =================================================
            IMAGE BOTTOM INFO
        ================================================= */}

        <div className="absolute bottom-5 left-5">
          <span className="text-[9px] font-medium tracking-[0.16em] text-white/80 uppercase">
            {property.sector}
          </span>
        </div>

        {(property.plotSizeSqYd || property.areaSqFt !== null) && (
          <div className="absolute bottom-5 right-5 text-right">
            <p className="text-[13px] font-medium text-white">
              {property.plotSizeSqYd ?? property.areaSqFt}
            </p>

            <p className="mt-0.5 text-[8px] tracking-[0.14em] text-white/65 uppercase">
              {property.plotSizeSqYd ? "sq. yd." : "sq.ft"}
            </p>
          </div>
        )}
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="flex flex-1 flex-col px-6 pb-6 pt-6 sm:px-7 sm:pb-7">
        {/* Category */}
        <div className="mb-3 flex items-center gap-2.5">
          <span className="h-px w-7 bg-[#B17A3A]" />

          <span className="text-[9px] font-semibold tracking-[0.18em] text-[#8F5D22] uppercase">
            {property.type}
          </span>
        </div>

        {/* =================================================
            TITLE
        ================================================= */}

        <Link
          href={`/properties/${property.id}`}
          className="block"
        >
          <h3
            style={{ fontFamily: "var(--font-bodoni)" }}
            className="
              text-[23px]
              font-medium
              leading-[1.08]
              tracking-[-0.018em]
              text-[#151515]
              transition-colors
              duration-300
              group-hover:text-[#8F5D22]
              sm:text-[25px]
            "
          >
            {property.title}
          </h3>
        </Link>

        {/* =================================================
            LOCATION
        ================================================= */}

        <div className="mt-3 flex items-start gap-2">
          <MapPin
            size={14}
            strokeWidth={1.7}
            className="mt-0.5 shrink-0 text-[#B17A3A]"
          />

          <span className="text-[12px] leading-5 text-[#686159]">
            {property.location}
          </span>
        </div>

        {/* =================================================
            DESCRIPTION
        ================================================= */}

        <p
          className="
            mt-3
            line-clamp-2
            text-[12px]
            leading-[1.7]
            text-[#777067]
          "
        >
          {property.subtitle}
        </p>

        {/* =================================================
            PROPERTY DETAILS
        ================================================= */}

        <div
          className="
            mt-5
            grid
            grid-cols-2
            border-y
            border-[#DDD5C9]
          "
        >
          {/* Area */}

          <div className="py-3.5 pr-4">
            <p
              style={{ fontFamily: "var(--font-manrope)" }}
              className="
                text-[8px]
                font-medium
                tracking-[0.16em]
                text-[#91887D]
                uppercase
              "
            >
              Area
            </p>

            <p className="mt-1 text-[12px] font-medium text-[#24211E]">
              {property.plotSizeSqYd
                ? `${property.plotSizeSqYd} sq. yd.`
                : property.areaSqFt !== null
                  ? `${property.areaSqFt} sq.ft`
                  : "Not specified"}
            </p>
          </div>

          {/* Location */}

          <div
            className="
              border-l
              border-[#DDD5C9]
              py-3.5
              pl-4
            "
          >
            <p
              className="
                text-[8px]
                font-medium
                tracking-[0.16em]
                text-[#91887D]
                uppercase
              "
            >
              Location
            </p>

            <p className="mt-1 truncate text-[12px] font-medium text-[#24211E]">
              {property.sector}
            </p>
          </div>
        </div>

        {/* =================================================
            PRICE + SINGLE CTA
        ================================================= */}

        <div className="mt-5 flex items-end justify-between gap-4">
          {/* Price */}

          <div>
            <p
              className="
                text-[8px]
                font-medium
                tracking-[0.16em]
                text-[#91887D]
                uppercase
              "
            >
              {property.priceNote ? "Price reference" : "Starting from"}
            </p>

            <p
              className="
                mt-1
                whitespace-nowrap
                text-[23px]
                font-semibold
                leading-none
                tracking-[-0.02em]
                text-[#151515]
                sm:text-[25px]
              "
            >
              {property.price}
            </p>
            {property.priceNote && (
              <p className="mt-1 max-w-47.5 text-[9px] leading-4 text-black/45">
                {property.priceNote}
              </p>
            )}
          </div>

          {/* =================================================
              ONLY ONE BUTTON
          ================================================= */}

          <Link
            href={`/properties/${property.id}`}
            className="
              group/button
              inline-flex
              h-10
              shrink-0
              items-center
              justify-center
              gap-2
              border
              border-[#B17A3A]
              bg-[#11100E]
              px-4
              text-[9px]
              font-semibold
              tracking-[0.13em]
              text-[#F4D58A]!
              uppercase
              transition-all
              duration-300
              hover:bg-[#B17A3A]
              hover:text-white!
              sm:h-11
              sm:px-5
            "
          >
            <span className="text-[#F4D58A]! group-hover/button:text-white!">
              View Property
            </span>

            <ArrowUpRight
              size={14}
              strokeWidth={1.7}
              className="
                text-[#F4D58A]
                transition-transform
                duration-300
                group-hover/button:-translate-y-0.5
                group-hover/button:translate-x-0.5
                group-hover/button:text-white
              "
            />
          </Link>
        </div>
      </div>

      {/* =====================================================
          GOLD HOVER LINE
      ===================================================== */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-0.5
          w-0
          bg-linear-to-r
          from-[#8F5D22]
          via-[#E3B968]
          to-[#F4D58A]
          transition-all
          duration-700
          group-hover:w-full
        "
      />
    </motion.article>
  );
}