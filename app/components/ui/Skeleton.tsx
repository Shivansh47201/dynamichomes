"use client";

import React from "react";

interface SkeletonProps {
  className?: string;
  style?: React.CSSProperties;
}

export function Skeleton({ className = "", style }: SkeletonProps) {
  return (
    <div
      className={`skeleton-box rounded-sm ${className}`}
      style={style}
      aria-hidden="true"
    />
  );
}

/* =========================================================
   NAVBAR SKELETON
========================================================= */
export function NavbarSkeleton() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 border-b border-white/10 backdrop-blur-md">
      <div className="mx-auto flex h-[80px] w-[90%] max-w-[1380px] items-center justify-between">
        {/* Brand logo skeleton */}
        <div className="flex items-center gap-3">
          <Skeleton className="h-10 w-36 rounded-md" />
        </div>

        {/* Navigation links skeleton */}
        <div className="hidden md:flex items-center gap-8">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-20" />
        </div>

        {/* Action button skeleton */}
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-28 rounded-sm" />
          <Skeleton className="h-10 w-10 rounded-full md:hidden" />
        </div>
      </div>
    </header>
  );
}

/* =========================================================
   HERO SKELETON
========================================================= */
export function HeroSkeleton() {
  return (
    <section className="relative min-h-[100svh] w-full bg-[#0A0A0A] text-white pt-[100px] overflow-hidden">
      {/* Background shimmer */}
      <div className="absolute inset-0 z-0">
        <Skeleton className="h-full w-full rounded-none opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[calc(100svh-100px)] w-[90%] max-w-[1380px] flex-col justify-between py-12">
        <div className="grid w-full grid-cols-1 lg:grid-cols-12 gap-8 my-auto">
          {/* Left Hero Content Skeleton */}
          <div className="col-span-1 lg:col-span-7 space-y-6 max-w-[650px]">
            {/* Tag / Eyebrow */}
            <div className="flex items-center gap-3">
              <Skeleton className="h-px w-10" />
              <Skeleton className="h-4 w-44" />
            </div>

            {/* Main Headline skeleton lines */}
            <div className="space-y-3 pt-2">
              <Skeleton className="h-14 sm:h-20 w-[90%]" />
              <Skeleton className="h-14 sm:h-20 w-[75%]" />
            </div>

            {/* Gold Accent */}
            <Skeleton className="h-[2px] w-20 my-4" />

            {/* Paragraph skeleton */}
            <div className="space-y-2.5 max-w-[540px]">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-[92%]" />
              <Skeleton className="h-4 w-[80%]" />
            </div>

            {/* Action Buttons skeleton */}
            <div className="pt-6 flex flex-wrap gap-4">
              <Skeleton className="h-[50px] w-40" />
              <Skeleton className="h-[50px] w-44" />
            </div>
          </div>

          {/* Right Floating Property Card Skeleton */}
          <div className="col-span-1 hidden lg:flex items-end justify-end lg:col-span-5">
            <div className="w-[330px] border border-white/10 bg-black/40 p-5 backdrop-blur-md space-y-4">
              <div className="flex gap-3 items-center">
                <Skeleton className="h-5 w-5 rounded-full" />
                <div className="space-y-1 flex-1">
                  <Skeleton className="h-3 w-16" />
                  <Skeleton className="h-4 w-36" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 border-t border-b border-white/10 py-3">
                <div className="space-y-1">
                  <Skeleton className="h-3 w-14" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <div className="space-y-1">
                  <Skeleton className="h-3 w-14" />
                  <Skeleton className="h-5 w-20" />
                </div>
              </div>
              <Skeleton className="h-4 w-full" />
            </div>
          </div>
        </div>

        {/* Bottom Control Bar Skeleton */}
        <div className="flex items-center justify-between border-t border-white/10 pt-5">
          <div className="flex items-center gap-4">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-px w-24 hidden sm:block" />
            <div className="flex gap-2">
              <Skeleton className="h-9 w-9" />
              <Skeleton className="h-9 w-9" />
            </div>
          </div>
          <Skeleton className="h-4 w-40 hidden md:block" />
        </div>
      </div>
    </section>
  );
}

/* =========================================================
   PROPERTY CARD SKELETON
========================================================= */
export function PropertyCardSkeleton() {
  return (
    <div className="border border-white/10 bg-[#121212] overflow-hidden">
      {/* Image container */}
      <div className="relative aspect-[4/3] w-full">
        <Skeleton className="h-full w-full rounded-none" />
      </div>

      {/* Details */}
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center">
          <Skeleton className="h-3 w-28" />
          <Skeleton className="h-4 w-20" />
        </div>

        <Skeleton className="h-7 w-[85%]" />
        <Skeleton className="h-4 w-[60%]" />

        <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
        </div>

        <div className="flex justify-between items-center pt-2">
          <Skeleton className="h-6 w-28" />
          <Skeleton className="h-9 w-24" />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   FULL PAGE SKELETON SCREEN (Instantly shown on load)
========================================================= */
export function FullPageSkeleton() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#B17A3A] selection:text-white">
      <NavbarSkeleton />
      <HeroSkeleton />

      {/* Featured Properties Section Skeleton */}
      <section className="py-20 px-[5%] max-w-[1380px] mx-auto space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3">
            <Skeleton className="h-4 w-36" />
            <Skeleton className="h-10 w-72" />
          </div>
          <Skeleton className="h-10 w-36" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
          <PropertyCardSkeleton />
        </div>
      </section>
    </div>
  );
}
