"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Building2 } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  category: "plot" | "nri" | "investor" | "villa";
  rating: number;
  image?: string;
  title: string;
  quote: string;
  verifiedBadge: string;
  date: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Dr. Vikram & Sunita Malhotra",
    role: "200 Sq. Yd. Plot Owner",
    location: "VAMI Enclave, Greater Noida",
    category: "plot",
    rating: 5,
    title: "100% Transparent Documentation & Seamless Registry",
    quote:
      "Investing in VAMI Enclave near the 130m Jewar Airport expressway was the best financial decision for our family. The legal verification and registry guidance provided by Dynamic Homes gave us absolute peace of mind.",
    verifiedBadge: "Verified Plot Buyer",
    date: "August 2026",
  },
  {
    id: "t2",
    name: "Amitabh Sharma",
    role: "NRI Tech Director",
    location: "Dubai & Greater Noida",
    category: "nri",
    rating: 5,
    title: "Remote Buying Handled with White-Glove Excellence",
    quote:
      "Managing land investment from overseas can be nerve-wracking, but Dynamic Homes handled everything seamlessly—from live video walkthroughs to 30-year registry title verification. Truly professional advisory.",
    verifiedBadge: "Verified NRI Investor",
    date: "July 2026",
  },
  {
    id: "t3",
    name: "Rajesh Kumar Singhania",
    role: "Commercial Logistics Director",
    location: "Noida Sector 62",
    category: "investor",
    rating: 5,
    title: "Exceptional Appreciation Potential Near Eastern Peripheral",
    quote:
      "The connectivity to Jewar Airport and the Eastern Peripheral Expressway makes Dynamic Homes' properties a goldmine. Their team offered clear ROI projections and backed every detail with official master plans.",
    verifiedBadge: "Verified Portfolio Client",
    date: "September 2026",
  },
  {
    id: "t4",
    name: "Priya & Rohan Verma",
    role: "100 Sq. Yd. Villa Builders",
    location: "Daudpur, Greater Noida",
    category: "villa",
    rating: 5,
    title: "Found Our Dream Plot with Full Infrastructure Support",
    quote:
      "From selecting the plot orientation to architectural advice, Dynamic Homes guided us at every turn. Wide 30ft roads, electricity, and clean titles were delivered exactly as promised.",
    verifiedBadge: "Verified Homeowner",
    date: "June 2026",
  },
];

const CATEGORIES = [
  { label: "All Reviews", value: "all" },
  { label: "Plot Owners", value: "plot" },
  { label: "NRI Investors", value: "nri" },
  { label: "Institutional Investors", value: "investor" },
];

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const filteredTestimonials =
    activeCategory === "all"
      ? TESTIMONIALS
      : TESTIMONIALS.filter((t) => t.category === activeCategory);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  const currentItem = filteredTestimonials[currentIndex] || TESTIMONIALS[0];

  return (
    <section className="relative bg-[#0A0A0A] py-24 sm:py-32 text-white overflow-hidden border-t border-white/10">
      {/* Background Decor */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#B17A3A]/10 blur-[180px]" />
      
      {/* Fine Background Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-[1380px] sm:w-[calc(100%-48px)] lg:w-[calc(100%-80px)]">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B17A3A]/40 bg-[#B17A3A]/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#E3B968] mb-4">
              <ShieldCheck size={13} className="text-[#C99545]" />
              <span>Client Satisfaction & Trust</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight">
              Testimonials & Client Voices
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-white/60 font-light max-w-md leading-relaxed">
            Real stories from plot buyers, NRI investors, and families who built their assets with Dynamic Homes.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setActiveCategory(cat.value);
                setCurrentIndex(0);
              }}
              className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat.value
                  ? "bg-[#B17A3A] text-white shadow-[0_4px_20px_rgba(177,122,58,0.35)]"
                  : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white border border-white/10"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Main Testimonial Showcase */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Featured Card */}
          <div className="lg:col-span-8 relative rounded-3xl border border-[#B17A3A]/30 bg-gradient-to-b from-[#141414] to-[#0D0D0D] p-8 sm:p-12 shadow-2xl flex flex-col justify-between overflow-hidden">
            
            {/* Top Bar */}
            <div>
              <div className="flex items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-1.5 text-[#E3B968]">
                  {[...Array(currentItem.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#C99545" className="text-[#C99545]" />
                  ))}
                  <span className="ml-2 text-xs font-bold text-white/80">5.0 / 5.0 Rating</span>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#B17A3A]/30 bg-[#B17A3A]/10 px-3 py-1 text-[11px] font-medium text-[#E3B968]">
                  <CheckCircle2 size={13} className="text-[#C99545]" />
                  {currentItem.verifiedBadge}
                </span>
              </div>

              {/* Quote Body */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentItem.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.3 }}
                >
                  <Quote size={40} className="text-[#B17A3A]/30 mb-4" />
                  <h3 className="font-display text-xl sm:text-2xl lg:text-3xl font-medium text-white mb-4 leading-snug">
                    "{currentItem.title}"
                  </h3>
                  <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed mb-8">
                    {currentItem.quote}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Author Footer */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-display text-lg font-medium text-white">
                  {currentItem.name}
                </h4>
                <p className="text-xs text-[#E3B968] font-light">
                  {currentItem.role} · <span className="text-white/50">{currentItem.location}</span>
                </p>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-[#B17A3A] hover:bg-[#B17A3A] hover:text-white"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-xs font-mono text-white/50">
                  0{currentIndex + 1} / 0{filteredTestimonials.length}
                </span>
                <button
                  onClick={handleNext}
                  aria-label="Next testimonial"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-[#B17A3A] hover:bg-[#B17A3A] hover:text-white"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Quick Stats & Trust Badges Column */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-6">
            
            <div className="rounded-3xl border border-white/10 bg-[#121212] p-8">
              <div className="flex items-center gap-3 text-[#E3B968] mb-4">
                <Building2 size={24} />
                <h4 className="font-display text-lg font-semibold text-white">Why Buyers Choose Us</h4>
              </div>
              
              <ul className="space-y-3.5 text-xs text-white/70">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#C99545] shrink-0 mt-0.5" />
                  <span>30-Year verified registry & clear title chain</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#C99545] shrink-0 mt-0.5" />
                  <span>Direct developer price without middleman markup</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#C99545] shrink-0 mt-0.5" />
                  <span>On-site physical tour & virtual video walk-throughs</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 size={16} className="text-[#C99545] shrink-0 mt-0.5" />
                  <span>Dedicated NRI assistance & instant digital paperwork</span>
                </li>
              </ul>
            </div>

            <div className="rounded-3xl border border-[#B17A3A]/30 bg-gradient-to-br from-[#B17A3A]/15 to-[#121212] p-8 text-center">
              <p className="text-3xl sm:text-4xl font-display font-semibold text-white mb-1">
                500+
              </p>
              <p className="text-xs uppercase tracking-widest font-semibold text-[#E3B968]">
                Happy Families & Investors
              </p>
              <p className="mt-2 text-xs text-white/60 font-light">
                Across Greater Noida, Noida Expressway & Jewar Airport Corridor.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
