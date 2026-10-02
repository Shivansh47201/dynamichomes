"use client";

import { useState } from "react";
import { PROPERTIES, Property } from "@/app/data/properties";
import PropertyCard from "@/app/components/ui/PropertyCard";
import QuickViewModal from "@/app/components/ui/QuickViewModal";
import BookTourModal from "@/app/components/ui/BookTourModal";
import { Sparkles, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { vamiEnclave } from "@/app/data/projects";

export default function FeaturedProperties() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [tourProperty, setTourProperty] = useState<Property | null>(null);
  const [isBookTourOpen, setIsBookTourOpen] = useState<boolean>(false);

  const filterTabs = [{ label: "VAMI Enclave Plot Options", value: "All" }];

  const filteredProperties =
    activeTab === "All"
      ? PROPERTIES
      : PROPERTIES.filter((p) => p.type === activeTab);

  const handleBookTour = (property: Property) => {
    setTourProperty(property);
    setIsBookTourOpen(true);
  };

  return (
    <section id="featured-properties" className="relative bg-[#FAF9F6] py-24 text-[#0A0A0A] overflow-hidden border-t border-black/10">
      <div className="pointer-events-none absolute right-0 top-1/3 h-100 w-100 rounded-full bg-[#B17A3A]/10 blur-[160px]" />

      <div className="mx-auto w-[calc(100%-40px)] max-w-345 md:w-[calc(100%-64px)] relative z-10">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-black/10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B17A3A]/40 bg-[#B17A3A]/10 px-3.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#8F5D22] mb-3">
              <Sparkles size={12} />
              <span>{vamiEnclave.projectName}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium text-[#0A0A0A]">
              Residential Plot Options
            </h2>
            <p className="mt-2 text-xs md:text-sm text-black/60 font-light max-w-xl">
              {vamiEnclave.overview.short} Plot availability and current prices should be confirmed directly with Dynamic Homes.
            </p>
          </div>

          <Link
            href="/projects/vami"
            className="
    group
    inline-flex
    items-center
    gap-3
    border
    border-[#B17A3A]
    bg-[#0A0A0A]
    px-6
    py-3.5
    text-xs
    font-semibold
    uppercase
    tracking-widest
    text-[#E3B968]!
    shadow-xl
    transition-all
    duration-300
    hover:bg-[#B17A3A]
    hover:text-white!
  "
          >
            <span>Explore VAMI Project</span>

            <ArrowUpRight
              size={15}
              className="
      transition-transform
      duration-300
      group-hover:translate-x-0.5
      group-hover:-translate-y-0.5
    "
            />
          </Link>
        </div>

        {/* Filter Tabs & Controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-8">
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${activeTab === tab.value
                    ? "border border-[#E3B968] bg-linear-to-r from-[#8F5D22] via-[#B17A3A] to-[#8F5D22] text-white shadow-lg"
                    : "border border-black/15 bg-black/5 text-[#222222] hover:bg-black/10 hover:text-black"
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="text-xs text-black/50 font-light">
            Showing <strong className="text-[#8F5D22] font-semibold">{filteredProperties.length}</strong> plot sizes listed in the brochure
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onQuickView={(p) => setSelectedProperty(p)}
            />
          ))}
        </div>

      </div>

      <QuickViewModal
        property={selectedProperty}
        onClose={() => setSelectedProperty(null)}
        onBookTour={handleBookTour}
      />

      <BookTourModal
        isOpen={isBookTourOpen}
        onClose={() => setIsBookTourOpen(false)}
        selectedProperty={tourProperty}
      />
    </section>
  );
}
