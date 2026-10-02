"use client";

import { useState } from "react";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import BookTourModal from "@/app/components/ui/BookTourModal";
import { vamiEnclave } from "@/app/data/projects";

export default function MortgageCalculator() {
  const [plotSizeSqYd, setPlotSizeSqYd] = useState<number>(vamiEnclave.plotOptions[0].sizeSqYd);
  const [isBookTourOpen, setIsBookTourOpen] = useState(false);
  const selectedPlot = vamiEnclave.plotOptions.find((option) => option.sizeSqYd === plotSizeSqYd) ?? vamiEnclave.plotOptions[0];
  const paymentStages = [
    { title: "Booking", detail: vamiEnclave.paymentPlan.booking },
    { title: "Registry", detail: vamiEnclave.paymentPlan.registry },
    { title: "Full payment", detail: vamiEnclave.paymentPlan.fullPayment },
  ];
  const selectedPriceNote = selectedPlot.status === "user-provided-price"
    ? "User-provided price; confirm the current live rate with Dynamic Homes."
    : selectedPlot.sizeSqYd === 300
      ? "Indicative only and not confirmed in the brochure. The supplied ₹1 Crore figure differs from the ₹90 Lakh indicative-rate calculation; confirm the official price with Dynamic Homes."
      : "Indicative price only; not confirmed in the brochure. Request the official current rate sheet from Dynamic Homes.";

  return (
    <section className="relative bg-[#070707] py-28 text-white overflow-hidden border-t border-white/10">
      <div className="pointer-events-none absolute right-1/4 top-1/2 h-125 w-125 -translate-y-1/2 rounded-full bg-[#B17A3A]/10 blur-[180px]" />

      <div className="mx-auto w-[calc(100%-40px)] max-w-345 md:w-[calc(100%-64px)] relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-14 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#B17A3A]/40 bg-[#B17A3A]/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#E3B968] mb-4">
              <Sparkles size={12} />
              <span>{vamiEnclave.projectName} · Pricing & Payment</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-medium text-white leading-tight">
              Plot Pricing & Payment Plan
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-white/60 font-light max-w-lg leading-relaxed">
            Plot sizes and payment terms shown here follow the supplied brochure. Confirm current prices and plot availability with Dynamic Homes.
          </p>
        </div>

        {/* Main Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Plot Size Selector */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-[#111111]/90 p-8 sm:p-12 shadow-2xl backdrop-blur-xl space-y-9">
            
            {/* Plot Size Preset Buttons */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-widest text-white/70 block">
                Select VAMI ENCLAVE Plot Size
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {vamiEnclave.plotOptions.map((option) => (
                  <button
                    key={option.sizeSqYd}
                    onClick={() => setPlotSizeSqYd(option.sizeSqYd)}
                    className={`p-4 rounded-xl border text-center transition-all ${
                      plotSizeSqYd === option.sizeSqYd
                        ? "border-[#E3B968] bg-[#B17A3A]/20 text-white font-bold ring-1 ring-[#E3B968]"
                        : "border-white/10 bg-white/5 text-white/70 hover:border-white/20"
                    }`}
                  >
                    <span className="text-base font-display block">{option.label}</span>
                    <span className="text-[10px] text-white/50 block mt-0.5">{option.priceDisplay}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected plot size and source-listed price */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-widest text-white/70">
                  Selected Plot Size
                </label>
                <span className="font-display text-2xl font-bold text-[#E3B968]">
                  {selectedPlot.label}
                </span>
              </div>
              <p className="text-lg font-semibold text-white">{selectedPlot.priceDisplay}</p>
              <p className="text-xs leading-5 text-white/45">
                {selectedPriceNote}
              </p>
            </div>

            {/* 3-Step Payment Plan Breakdown */}
            <div className="space-y-4 border-t border-white/10 pt-6">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#E3B968] block">
                Payment Terms in Supplied Brochure
              </span>
              
              <div className="space-y-3 text-xs">
                {paymentStages.map((stage, index) => (
                <div key={stage.title} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#B17A3A] text-[10px] font-bold text-white">{index + 1}</span>
                    <div>
                      <span className="font-semibold text-white block">{stage.title}</span>
                      <span className="text-[10px] text-white/50">{stage.detail}</span>
                    </div>
                  </div>
                </div>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 border-t border-white/10 pt-5 text-xs text-white/50">
              <ShieldCheck size={16} className="text-[#E3B968] shrink-0" />
              <span>Developer: {vamiEnclave.developer}</span>
            </div>

          </div>

          {/* Right Column: Price Reference Card */}
          <div className="lg:col-span-5 rounded-2xl border border-[#C99545]/40 bg-linear-to-b from-[#161616] via-[#111111] to-[#0A0A0A] p-8 sm:p-12 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 h-40 w-40 bg-[#B17A3A]/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <span className="text-[9.5px] font-semibold tracking-[0.25em] uppercase text-[#E3B968] block mb-2">
                {vamiEnclave.projectName} · {selectedPlot.label}
              </span>
              <h3 className="text-xs text-white/60 font-light uppercase tracking-wider">
                Brochure-listed price
              </h3>
              
              <div className="font-display text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#B17A3A] via-[#E3B968] to-[#F4D58A] mt-2">
                {selectedPlot.priceDisplay}
              </div>
              <p className="mt-3 text-xs leading-5 text-white/50">
                {selectedPriceNote}
              </p>

              {/* Payment terms from the supplied brochure */}
              <div className="mt-8 space-y-4 border-t border-white/10 pt-6 text-xs">
                {paymentStages.map((stage) => (
                  <div key={stage.title} className="flex justify-between gap-4 py-1">
                    <span className="text-white/60 font-light">{stage.title}</span>
                    <span className="text-right font-semibold text-white">{stage.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setIsBookTourOpen(true)}
              className="mt-10 flex w-full items-center justify-center gap-3 border border-[#C99545] bg-linear-to-r from-[#8F5D22] via-[#B17A3A] to-[#8F5D22] py-4 text-xs font-semibold uppercase tracking-[0.18em] text-white shadow-xl hover:opacity-95 transition-all"
            >
              <span>Schedule a Site Visit</span>
              <ArrowUpRight size={15} />
            </button>
          </div>

        </div>

      </div>

      <BookTourModal
        isOpen={isBookTourOpen}
        onClose={() => setIsBookTourOpen(false)}
      />
    </section>
  );
}
