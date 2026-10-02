"use client";

import { useState, useMemo } from "react";
import { FEATURED_PROJECT, PROJECTS, Project, vamiEnclave } from "@/app/data/projects";
import {
  Building2,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  MapPin,
  Search,
  X,
  FileText,
  Phone,
  Calendar,
  Layers,
  ArrowRight,
  Download,
  Share2,
  Check,
  Plus,
  Scale,
  ShieldCheck,
  Compass,
  ChevronRight,
  SlidersHorizontal,
  Info
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import BookTourModal from "@/app/components/ui/BookTourModal";
import { submitFormToGoogleSheets } from "@/app/lib/submitForm";

export default function ProjectsPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"featured" | "price-asc" | "price-desc">("featured");

  // Selected floor plan for Blueprint Modal
  const [selectedFloorPlan, setSelectedFloorPlan] = useState<{
    project: Project;
    plan: Project["floorPlans"][0];
  } | null>(null);

  // Selected project for Dossier / Inquiry Modal
  const [dossierProject, setDossierProject] = useState<Project | null>(null);
  const [dossierSubmitted, setDossierSubmitted] = useState<boolean>(false);
  const [dossierForm, setDossierForm] = useState({ name: "", phone: "", email: "", type: "brochure" });

  // Tour modal state
  const [isTourModalOpen, setIsTourModalOpen] = useState(false);
  const [selectedTourProject, setSelectedTourProject] = useState<Project | null>(null);

  // Compare projects state
  const [compareIds, setCompareIds] = useState<string[]>([]);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState<boolean>(false);

  // Filter & Search Logic
  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Status filter
      if (selectedStatus !== "All" && project.status !== selectedStatus) {
        return false;
      }
      // Category filter heuristic
      if (selectedCategory !== "All") {
        const projectText = `${project.name} ${project.tagline} ${project.overview}`.toLowerCase();
        if (selectedCategory === "Plotted" && !projectText.includes("plotted")) return false;
      }
      // Search query
      if (searchQuery.trim() !== "") {
        const q = searchQuery.toLowerCase();
        const matchesName = project.name.toLowerCase().includes(q);
        const matchesLoc = project.location.toLowerCase().includes(q);
        const matchesTag = project.tagline.toLowerCase().includes(q);
        const matchesOverview = project.overview.toLowerCase().includes(q);
        if (!matchesName && !matchesLoc && !matchesTag && !matchesOverview) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.numericPrice - b.numericPrice;
      if (sortBy === "price-desc") return b.numericPrice - a.numericPrice;
      return 0; // featured order in data
    });
  }, [selectedStatus, selectedCategory, searchQuery, sortBy]);

  // Toggle compare selection
  const toggleCompare = (id: string) => {
    setCompareIds((prev) => {
      if (prev.includes(id)) return prev.filter((item) => item !== id);
      if (prev.length >= 3) {
        alert("You can compare up to 3 projects side-by-side.");
        return prev;
      }
      return [...prev, id];
    });
  };

  const comparedProjects = PROJECTS.filter((p) => compareIds.includes(p.id));

  // Handle Dossier Request
  const handleDossierSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitFormToGoogleSheets({
      type: "enquiry",
      name: dossierForm.name,
      phone: dossierForm.phone,
      email: dossierForm.email,
      topic: `Project Dossier Request - ${dossierProject?.name || "VAMI Enclave"}`,
      message: `Requested official dossier, floor plans, and pricing sheet for ${dossierProject?.name || "VAMI Enclave"}.`,
      source: "Projects Page Dossier Modal",
    });
    setDossierSubmitted(true);
  };

  return (
    <div className="pt-24 pb-28 min-h-screen bg-[#0A0A0A] text-[#E5E5E5] selection:bg-[#B17A3A] selection:text-white">
      
      {/* Background Decorative Mesh Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-200 h-125 bg-linear-to-b from-amber-500/10 via-amber-600/5 to-transparent blur-[120px] rounded-full opacity-60" />
        <div className="absolute top-[40%] -right-40 w-150 h-150 bg-amber-500/5 blur-[140px] rounded-full" />
      </div>

      <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-350 md:w-[calc(100%-64px)]">

        {/* ========================================================================= */}
        {/* HERO SECTION */}
        {/* ========================================================================= */}
        <section className="relative isolate overflow-hidden border-b border-white/10 py-10 sm:py-14 lg:py-16">
          <div className="pointer-events-none absolute -left-24 top-0 -z-10 h-80 w-80 rounded-full bg-[#B17A3A]/10 blur-[120px]" />
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.8fr)] lg:gap-14">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B17A3A]/40 bg-[#B17A3A]/10 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#E3B968] sm:text-xs">
                <Sparkles size={14} />
                <span>Dynamic Homes <span className="mx-1 text-white/30">/</span> Greater Noida</span>
              </div>

              <h1 style={{ fontFamily: "var(--font-bodoni)" }} className="mt-7 text-[clamp(3.5rem,8vw,7.25rem)] font-normal leading-[0.86] tracking-[-0.045em] text-white">
                VAMI Enclave
                <span className="mt-2 block bg-linear-to-r from-amber-200 via-[#E3B968] to-amber-500 bg-clip-text pb-2 text-[0.72em] italic text-transparent">
                  Residential Plots
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-7 text-white/65 sm:text-lg sm:leading-8">
                {vamiEnclave.overview.short}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/projects/vami" className="inline-flex min-h-12 items-center gap-3 rounded-full bg-[#B17A3A] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#C99545]">
                  Full VAMI project information <ArrowRight size={16} />
                </Link>
                <Link href="/contact" className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/20 bg-white/4 px-6 text-sm font-semibold text-white/85 transition-colors hover:border-[#C99545]/70 hover:bg-white/8">
                  Enquire now <ArrowUpRight size={16} className="text-[#E3B968]" />
                </Link>
              </div>
            </div>

            <div className="group relative mx-auto w-full max-w-155">
              <div className="absolute -inset-3 rounded-4xl border border-[#C99545]/15 transition-transform duration-700 group-hover:rotate-1" />
              <div className="relative aspect-5/4 overflow-hidden rounded-3xl border border-white/15 bg-[#15120E] shadow-2xl">
                <Image
                  src={FEATURED_PROJECT.image}
                  alt={`${FEATURED_PROJECT.name} project visual`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/10 to-transparent" />
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/55 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/85 backdrop-blur-md sm:left-7 sm:top-7 sm:text-xs">
                  {FEATURED_PROJECT.location}
                </div>
                <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/15 bg-black/65 p-4 backdrop-blur-md sm:inset-x-7 sm:bottom-7 sm:p-5">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#E3B968] sm:text-xs">Plot sizes listed</p>
                      <p className="mt-2 text-sm font-medium text-white sm:text-base">
                        {vamiEnclave.plotOptions.map((option) => option.sizeSqYd).join(" · ")} sq. yd.
                      </p>
                    </div>
                    <span className="shrink-0 rounded-full border border-[#E3B968]/30 bg-[#E3B968]/10 px-3 py-1.5 text-[10px] font-medium text-[#F4D58A] sm:text-xs">
                      {vamiEnclave.layout.mainRoads.join(" · ")}
                    </span>
                  </div>
                  <p className="mt-3 text-[10px] leading-4 text-white/45">Illustrative image; request the official project layout.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
            <div className="bg-[#111] px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40 sm:text-xs">Project location</p>
              <p className="mt-2 text-sm font-medium text-white sm:text-base">{vamiEnclave.location.locality}, {vamiEnclave.location.city}</p>
            </div>
            <div className="bg-[#111] px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40 sm:text-xs">Plot configurations</p>
              <p className="mt-2 text-sm font-medium text-white sm:text-base">50 · 100 · 200 · 300 sq. yd.</p>
            </div>
            <div className="bg-[#111] px-5 py-4 sm:px-6 sm:py-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40 sm:text-xs">Payment terms listed</p>
              <p className="mt-2 text-sm font-medium text-white sm:text-base">10% booking · 50% registry</p>
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* SPOTLIGHT FEATURE: VAMI ENCLAVE (Newly Launched Flagship Township) */}
        {/* ========================================================================= */}
        <section id="vami-spotlight" className="my-10 scroll-mt-32">
          <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-linear-to-br from-[#1A1612] via-[#121212] to-[#0E0E0E] p-6 sm:p-10 shadow-2xl">
            <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Details */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/40 bg-amber-500/20 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-[#F4D58A]">
                    <Sparkles size={12} />
                    {FEATURED_PROJECT.tagline}
                  </span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-medium text-white/80">
                    {FEATURED_PROJECT.location}
                  </span>
                  <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-[10px] font-medium text-emerald-300">
                    {FEATURED_PROJECT.status}
                  </span>
                </div>

                <div>
                  <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">
                    {FEATURED_PROJECT.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-white/70 mt-2 font-light leading-relaxed">
                    {FEATURED_PROJECT.overview}
                  </p>
                </div>

                {/* Quick Key Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {FEATURED_PROJECT.highlights.slice(0, 4).map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-xs text-white/90">
                      <CheckCircle2 size={15} className="text-[#E3B968] shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-white/50 block">Brochure-listed price</span>
                    <span className="font-display text-2xl font-bold text-[#E3B968]">{FEATURED_PROJECT.startingPrice}</span>
                    {FEATURED_PROJECT.priceNote && (
                      <span className="mt-1 block max-w-sm text-[10px] leading-4 text-white/45">
                        {FEATURED_PROJECT.priceNote}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-3 ml-auto">
                    <Link
                      href="/projects/vami"
                      className="rounded-xl border border-[#E3B968]/40 bg-[#E3B968]/10 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#F4D58A] transition-colors hover:bg-[#E3B968]/20"
                    >
                      Full project details
                    </Link>
                    <button
                      onClick={() => {
                        setSelectedFloorPlan({ project: FEATURED_PROJECT, plan: FEATURED_PROJECT.floorPlans[0] });
                      }}
                      className="rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/15 transition-all flex items-center gap-2"
                    >
                      <Layers size={14} />
                      <span>View Plot Options</span>
                    </button>

                    <button
                      onClick={() => {
                        setDossierProject(FEATURED_PROJECT);
                      }}
                      className="rounded-xl border border-[#B17A3A] bg-linear-to-r from-[#8F5D22] via-[#B17A3A] to-[#8F5D22] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg hover:shadow-amber-500/20 transition-all flex items-center gap-2"
                    >
                      <FileText size={14} />
                      <span>Get Brochure & Price List</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Image Feature */}
              <div className="lg:col-span-5 relative h-72 sm:h-96 rounded-2xl overflow-hidden border border-white/15 shadow-2xl group">
                <Image
                  src={FEATURED_PROJECT.image}
                  alt={FEATURED_PROJECT.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/15 flex justify-between items-center">
                  <div>
                    <div className="text-xs font-semibold text-white">{FEATURED_PROJECT.floorPlans.length} plot sizes shown</div>
                    <div className="text-[10px] text-amber-300">Availability to be confirmed</div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedTourProject(FEATURED_PROJECT);
                      setIsTourModalOpen(true);
                    }}
                    className="text-[11px] font-semibold text-white bg-[#B17A3A] hover:bg-[#8F5D22] px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1"
                  >
                    <Calendar size={12} />
                    <span>Book Site Visit</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* INTERACTIVE CONTROLS: SEARCH, STATUS & CATEGORY FILTERS */}
        {/* ========================================================================= */}
        <section className="my-8 space-y-5">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#141414] border border-white/10 rounded-2xl p-4 sm:p-5 shadow-xl">
            
            {/* Search Input Box */}
            <div className="relative flex-1 min-w-65">
              <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search VAMI Enclave by plot size, location or brochure detail..."
                className="w-full rounded-xl border border-white/10 bg-black/60 pl-10 pr-10 py-3 text-xs sm:text-sm text-white placeholder:text-white/40 focus:border-[#E3B968] focus:outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Sort Dropdown & Quick View Toggle */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 border border-white/10 bg-black/60 rounded-xl px-3 py-2 text-xs">
                <SlidersHorizontal size={14} className="text-[#E3B968]" />
                <span className="text-white/60">Sort:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-transparent text-white focus:outline-none cursor-pointer"
                >
                  <option value="featured" className="bg-[#141414] text-white">Featured Priority</option>
                  <option value="price-asc" className="bg-[#141414] text-white">Price: Low to High</option>
                  <option value="price-desc" className="bg-[#141414] text-white">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Filter Pills Tabs */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Status Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              <span className="text-xs font-medium text-white/50 flex items-center pr-2 shrink-0">Status:</span>
              {["All", "Status to be confirmed"].map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wider transition-all whitespace-nowrap ${
                    selectedStatus === status
                      ? "border border-[#E3B968] bg-linear-to-r from-[#8F5D22] via-[#B17A3A] to-[#8F5D22] text-white shadow-lg"
                      : "border border-white/10 bg-white/5 text-white/70 hover:border-white/30 hover:text-white"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>

            {/* Category Pills */}
            <div className="flex gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
              <span className="text-xs font-medium text-white/50 flex items-center pr-2 shrink-0">Type:</span>
              {[
                { label: "All Types", key: "All" },
                { label: "Plotted Township", key: "Plotted" }
              ].map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all whitespace-nowrap ${
                    selectedCategory === cat.key
                      ? "border border-[#E3B968]/50 bg-[#E3B968]/15 text-[#F4D58A]"
                      : "border border-white/10 bg-white/5 text-white/60 hover:text-white"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count Banner */}
          <div className="flex items-center justify-between text-xs text-white/50 px-1">
            <div>
              Showing <strong className="text-white">{filteredProjects.length}</strong> landmark project{filteredProjects.length === 1 ? "" : "s"}
            </div>
            {(selectedStatus !== "All" || selectedCategory !== "All" || searchQuery !== "") && (
              <button
                onClick={() => {
                  setSelectedStatus("All");
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="text-[#E3B968] hover:underline flex items-center gap-1"
              >
                <X size={12} />
                <span>Reset Filters</span>
              </button>
            )}
          </div>
        </section>


        {/* ========================================================================= */}
        {/* MAIN PROJECTS LISTING */}
        {/* ========================================================================= */}
        <section className="space-y-12 my-8">
          {filteredProjects.length === 0 ? (
            <div className="rounded-3xl border border-white/10 bg-[#121212] p-12 text-center my-12">
              <Building2 size={48} className="mx-auto text-white/30 mb-4" />
              <h3 className="font-display text-xl font-semibold text-white">No Projects Match Your Search</h3>
              <p className="text-xs text-white/60 mt-2 max-w-md mx-auto">
                Try adjusting your search keywords, status filters, or property category to discover matching developments.
              </p>
              <button
                onClick={() => {
                  setSelectedStatus("All");
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="mt-6 rounded-xl border border-[#B17A3A] bg-[#B17A3A]/20 px-6 py-2.5 text-xs font-semibold text-[#E3B968] hover:bg-[#B17A3A] hover:text-white transition-all"
              >
                Clear All Search Filters
              </button>
            </div>
          ) : (
            filteredProjects.map((project, idx) => {
              const isCompared = compareIds.includes(project.id);
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="group rounded-3xl border border-white/15 bg-[#121212] overflow-hidden shadow-2xl hover:border-amber-500/40 transition-all duration-500 grid grid-cols-1 lg:grid-cols-12"
                >
                  {/* Left Column: Image & Feature Badges */}
                  <div className="lg:col-span-5 relative min-h-90 lg:min-h-130 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />
                    
                    {/* Top Status & Area Badges */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-2 z-10">
                      <span className="rounded-full border border-amber-500/40 bg-black/80 px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-[#F4D58A] backdrop-blur-md shadow-lg">
                        {project.status}
                      </span>

                      {PROJECTS.length > 1 && (
                        <button
                          onClick={() => toggleCompare(project.id)}
                          className={`rounded-full border px-3 py-1 text-[10px] font-semibold tracking-wide backdrop-blur-md transition-all flex items-center gap-1.5 ${
                            isCompared
                              ? "border-amber-400 bg-amber-500/30 text-amber-200"
                              : "border-white/20 bg-black/70 text-white/80 hover:bg-black/90"
                          }`}
                        >
                          <Scale size={12} />
                          <span>{isCompared ? "Added to Compare" : "+ Compare"}</span>
                        </button>
                      )}
                    </div>

                    {/* Bottom Image Overlay Specs */}
                    <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/80 border border-white/15 backdrop-blur-md space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/60">Land Area:</span>
                        <span className="font-semibold text-white">{project.totalLandArea ?? "Not specified"}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/60">Development status:</span>
                        <span className="font-semibold text-[#E3B968]">{project.status}</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/60">Developer:</span>
                        <span className="font-medium text-white/90">{project.developer}</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Information, Blueprints & Actions */}
                  <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Location Badge */}
                      <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#E3B968]">
                        <MapPin size={13} className="shrink-0 text-[#E3B968]" />
                        <span>{project.location}</span>
                      </div>

                      {/* Title & Tagline */}
                      <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white mt-1 group-hover:text-amber-200 transition-colors">
                        {project.name}
                      </h2>
                      <p className="text-xs sm:text-sm font-light text-amber-200/80 mt-1 italic">
                        "{project.tagline}"
                      </p>

                      {/* Overview Narrative */}
                      <p className="mt-4 text-xs sm:text-sm leading-relaxed text-white/70 font-light">
                        {project.overview}
                      </p>

                      {/* Key Highlights Checklist */}
                      <div className="mt-6 pt-4 border-t border-white/10">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-white/50 block mb-3">
                          Project Architecture & Infrastructure Highlights
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {project.highlights.map((highlight, i) => (
                            <div key={i} className="flex items-start gap-2.5 text-xs text-white/85">
                              <CheckCircle2 size={15} className="text-[#B17A3A] shrink-0 mt-0.5" />
                              <span className="leading-snug">{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Blueprint Floor Plans Selector */}
                      <div className="mt-6 pt-5 border-t border-white/10">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#E3B968]">
                            Plot Sizes & Price References
                          </span>
                          <span className="text-[10px] text-white/40">Select an option to view its details</span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {project.floorPlans.map((fp, i) => (
                            <button
                              key={i}
                              onClick={() => setSelectedFloorPlan({ project, plan: fp })}
                              className="group/btn flex items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3 text-left hover:border-[#B17A3A] hover:bg-[#B17A3A]/10 transition-all"
                            >
                              <div>
                                <span className="text-xs font-semibold text-white block group-hover/btn:text-[#E3B968] transition-colors">
                                  {fp.title}
                                </span>
                                <span className="text-[10px] text-white/50">{fp.size}</span>
                              </div>
                              <div className="text-right">
                                <span className="text-xs font-bold text-[#E3B968] block">{fp.price}</span>
                                <span className="text-[9px] uppercase tracking-wider text-white/40 flex items-center gap-0.5 justify-end">
                                  <span>View</span>
                                  <ArrowUpRight size={10} />
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Bottom Pricing & Call-to-Actions */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-white/50 block">Investment Entry Point</span>
                        <div className="flex items-baseline gap-2">
                          <span className="font-display text-2xl font-bold text-[#E3B968]">{project.startingPrice}</span>
                          {project.priceNote && (
                            <span className="mt-1 block max-w-xs text-[10px] leading-4 text-white/45">
                              {project.priceNote}
                            </span>
                          )}
                          <span className="text-[10px] text-white/40">onwards*</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-3">
                        <button
                          onClick={() => {
                            setSelectedTourProject(project);
                            setIsTourModalOpen(true);
                          }}
                          className="flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white/15 transition-all"
                        >
                          <Calendar size={14} className="text-[#E3B968]" />
                          <span>Schedule Site Visit</span>
                        </button>

                        <button
                          onClick={() => setDossierProject(project)}
                          className="flex items-center gap-2 rounded-xl border border-[#B17A3A] bg-linear-to-r from-[#8F5D22] via-[#B17A3A] to-[#8F5D22] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-lg hover:shadow-amber-500/20 hover:scale-[1.02] transition-all"
                        >
                          <span>Request Dossier</span>
                          <ArrowUpRight size={14} />
                        </button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })
          )}
        </section>
        {/* ========================================================================= */}
        {/* BOTTOM DIRECT CONSULTATION CTA */}
        {/* ========================================================================= */}
        <section className="my-16 rounded-3xl border border-[#B17A3A]/40 bg-linear-to-r from-[#1A140E] via-[#241A10] to-[#1A140E] p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden text-center sm:text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8 relative z-10">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#E3B968]">
                VAMI Enclave Enquiries
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-white">
                Need Current Prices or Site Visit Details?
              </h2>
              <p className="text-xs sm:text-sm text-white/70 font-light">
                Contact Dynamic Homes to confirm plot pricing, availability, project documents and site-visit arrangements.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="w-full sm:w-auto rounded-xl border border-white/20 bg-black/60 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
              >
                <Phone size={14} />
                <span>Contact HQ Desk</span>
              </Link>

              <button
                onClick={() => {
                  setSelectedTourProject(PROJECTS[0]);
                  setIsTourModalOpen(true);
                }}
                className="w-full sm:w-auto rounded-xl border border-[#B17A3A] bg-linear-to-r from-[#8F5D22] via-[#B17A3A] to-[#8F5D22] px-7 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-xl hover:shadow-amber-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <Calendar size={14} />
                <span>Book VIP Site Tour</span>
              </button>
            </div>
          </div>
        </section>

      </div>


      {/* ========================================================================= */}
      {/* FLOATING SIDE-BY-SIDE COMPARE BAR */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {PROJECTS.length > 1 && compareIds.length > 0 && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[calc(100%-32px)] max-w-2xl rounded-2xl border border-amber-500/50 bg-[#161616]/95 p-4 shadow-2xl backdrop-blur-xl flex items-center justify-between gap-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/20 text-[#E3B968] font-bold text-xs">
                {compareIds.length}
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Projects Selected for Comparison</div>
                <div className="text-[10px] text-white/60">
                  {comparedProjects.map((p) => p.name).join(", ")}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setCompareIds([])}
                className="text-xs text-white/50 hover:text-white"
              >
                Clear
              </button>
              <button
                onClick={() => setIsCompareModalOpen(true)}
                className="rounded-xl border border-[#B17A3A] bg-linear-to-r from-[#8F5D22] to-[#B17A3A] px-4 py-2 text-xs font-semibold text-white shadow-lg flex items-center gap-1.5"
              >
                <Scale size={14} />
                <span>Compare Specs Now</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


      {/* ========================================================================= */}
      {/* MODAL 1: PROJECT OPTION DETAILS */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {selectedFloorPlan && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedFloorPlan(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative z-10 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/15 bg-[#141414] p-6 sm:p-8 text-white shadow-2xl my-auto"
            >
              <button
                onClick={() => setSelectedFloorPlan(null)}
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white hover:bg-white hover:text-black transition-all"
              >
                <X size={16} />
              </button>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#B17A3A]/40 bg-[#B17A3A]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#E3B968]">
                <Layers size={12} />
                <span>{selectedFloorPlan.project.name} · Option Details</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-medium text-white mt-2">
                {selectedFloorPlan.plan.title}
              </h3>
              <p className="text-xs text-white/60">
                <strong className="text-white">{selectedFloorPlan.plan.size}</strong> · Listed price: <strong className="text-[#E3B968]">{selectedFloorPlan.plan.price}</strong>
              </p>

              {/* Project preview image */}
              <div className="relative mt-6 aspect-16/10 w-full overflow-hidden rounded-2xl border border-white/10 bg-black/80">
                <Image
                  src={selectedFloorPlan.plan.image}
                  alt={selectedFloorPlan.plan.title}
                  fill
                  className="object-cover"
                />
              </div>
              <p className="mt-2 text-[10px] leading-4 text-white/40">
                Preview image only; it is not the official plot layout. Request the current approved layout from Dynamic Homes.
              </p>

              {/* Project option details */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-black/40 border border-white/10 text-xs">
                <div>
                  <span className="text-white/40 block text-[10px] uppercase">Plot / Unit Size</span>
                  <span className="font-semibold text-white">{selectedFloorPlan.plan.size}</span>
                </div>
                <div>
                  <span className="text-white/40 block text-[10px] uppercase">Listed Price</span>
                  <span className="font-semibold text-[#E3B968]">{selectedFloorPlan.plan.price}</span>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <span className="text-white/40 block text-[10px] uppercase">Payment terms</span>
                  <span className="font-semibold text-emerald-400">
                    {selectedFloorPlan.project.paymentPlan?.map((step) => `${step.percentage} ${step.stage}`).join(" / ") ?? "Confirm with the project team"}
                  </span>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-white/10">
                <div className="text-xs text-white/60">
                  {selectedFloorPlan.project.priceNote ?? "Confirm current availability, approvals and site details with the project team."}
                </div>
                <button
                  onClick={() => {
                    const project = selectedFloorPlan.project;
                    setSelectedFloorPlan(null);
                    setDossierProject(project);
                  }}
                  className="w-full sm:w-auto rounded-xl border border-[#B17A3A] bg-linear-to-r from-[#8F5D22] to-[#B17A3A] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-lg hover:opacity-95 transition-all text-center"
                >
                  Book Priority Allocation Now
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ========================================================================= */}
      {/* MODAL 2: DOSSIER & PRICE LIST REQUEST MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {dossierProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setDossierProject(null);
                setDossierSubmitted(false);
              }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border border-white/15 bg-[#121212] p-6 sm:p-8 text-white shadow-2xl my-auto"
            >
              <button
                onClick={() => {
                  setDossierProject(null);
                  setDossierSubmitted(false);
                }}
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white hover:bg-white hover:text-black transition-all"
              >
                <X size={16} />
              </button>

              {dossierSubmitted ? (
                <div className="text-center py-6 space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 mx-auto">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white">Dossier Request Received</h3>
                  <p className="text-xs text-white/70 leading-relaxed font-light">
                    Thank you <strong className="text-white">{dossierForm.name}</strong>. The official masterplan dossier, floor plans, and pricing sheet for <strong className="text-[#E3B968]">{dossierProject.name}</strong> have been sent to your phone/email. Our project director will reach out shortly.
                  </p>
                  <button
                    onClick={() => {
                      setDossierProject(null);
                      setDossierSubmitted(false);
                    }}
                    className="rounded-xl border border-[#B17A3A] bg-linear-to-r from-[#8F5D22] to-[#B17A3A] px-8 py-3 text-xs font-semibold text-white"
                  >
                    Done & Return
                  </button>
                </div>
              ) : (
                <form onSubmit={handleDossierSubmit} className="space-y-4">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#B17A3A]/40 bg-[#B17A3A]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#E3B968]">
                    <FileText size={12} />
                    <span>Official Project Dossier</span>
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-white">
                    Request {dossierProject.name} Portfolio
                  </h3>
                  <p className="text-xs text-white/60 font-light">
                    Get instant access to masterplan blueprints, land registry documents, and payment schedules.
                  </p>

                  <div className="space-y-3 pt-2">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-white/60 block mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={dossierForm.name}
                        onChange={(e) => setDossierForm({ ...dossierForm, name: e.target.value })}
                        placeholder="Enter your full name"
                        className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-[#E3B968] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-white/60 block mb-1">Phone Number (WhatsApp) *</label>
                      <input
                        type="tel"
                        required
                        value={dossierForm.phone}
                        onChange={(e) => setDossierForm({ ...dossierForm, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-[#E3B968] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-white/60 block mb-1">Email Address</label>
                      <input
                        type="email"
                        value={dossierForm.email}
                        onChange={(e) => setDossierForm({ ...dossierForm, email: e.target.value })}
                        placeholder="yourname@example.com"
                        className="w-full rounded-xl border border-white/15 bg-black/60 px-4 py-2.5 text-xs text-white placeholder:text-white/30 focus:border-[#E3B968] focus:outline-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-4 rounded-xl border border-[#B17A3A] bg-linear-to-r from-[#8F5D22] via-[#B17A3A] to-[#8F5D22] py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-xl hover:opacity-95 transition-all"
                  >
                    Send Dossier & Price Breakdown
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ========================================================================= */}
      {/* MODAL 3: SIDE-BY-SIDE PROJECT COMPARISON MODAL */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {isCompareModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCompareModalOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-[#141414] p-6 sm:p-8 text-white shadow-2xl my-auto"
            >
              <button
                onClick={() => setIsCompareModalOpen(false)}
                className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white hover:bg-white hover:text-black transition-all"
              >
                <X size={16} />
              </button>

              <div className="inline-flex items-center gap-2 rounded-full border border-[#B17A3A]/40 bg-[#B17A3A]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#E3B968]">
                <Scale size={12} />
                <span>Side-by-Side Comparison</span>
              </div>

              <h3 className="font-display text-2xl font-semibold text-white mt-1">
                Landmark Specifications Audit
              </h3>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-white/15">
                      <th className="p-3 font-semibold text-white/50 min-w-35">Feature</th>
                      {comparedProjects.map((p) => (
                        <th key={p.id} className="p-3 font-display font-semibold text-white text-base min-w-50">
                          {p.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-white/80">
                    <tr>
                      <td className="p-3 text-white/50">Location</td>
                      {comparedProjects.map((p) => (
                        <td key={p.id} className="p-3 font-medium text-amber-200">{p.location}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 text-white/50">Starting Price</td>
                      {comparedProjects.map((p) => (
                        <td key={p.id} className="p-3 font-bold text-[#E3B968]">{p.startingPrice}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 text-white/50">Land Area</td>
                      {comparedProjects.map((p) => (
                        <td key={p.id} className="p-3">{p.totalLandArea ?? "Not specified"}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 text-white/50">Status & Timeline</td>
                      {comparedProjects.map((p) => (
                        <td key={p.id} className="p-3">{p.status} ({p.completionDate})</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 text-white/50">Developer</td>
                      {comparedProjects.map((p) => (
                        <td key={p.id} className="p-3">{p.developer}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 text-white/50">Top Spec</td>
                      {comparedProjects.map((p) => (
                        <td key={p.id} className="p-3 text-[11px] leading-snug">{p.highlights[0]}</td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsCompareModalOpen(false)}
                  className="rounded-xl border border-white/20 bg-white/10 px-6 py-2.5 text-xs font-semibold text-white"
                >
                  Close Comparison
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>


      {/* ========================================================================= */}
      {/* SITE VISIT BOOKING MODAL */}
      {/* ========================================================================= */}
      <BookTourModal
        isOpen={isTourModalOpen}
        onClose={() => setIsTourModalOpen(false)}
        selectedProperty={
          selectedTourProject
            ? {
                id: selectedTourProject.id,
                title: selectedTourProject.name,
                location: selectedTourProject.location,
                agent: { name: "Dynamic Homes Director", phone: "+91 98765 43210" }
              } as any
            : undefined
        }
      />

    </div>
  );
}