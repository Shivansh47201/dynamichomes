"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  ShieldCheck,
  Scale,
  Building2,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Search,
  Printer,
  Copy,
  Check,
  ChevronRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  Sparkles,
  ExternalLink,
  BookOpen,
} from "lucide-react";

/* =========================================================
   COMPANY CONSTANTS
========================================================= */
const COMPANY = {
  name: "Dynamic Homes Private Limited",
  cin: "U68100UW2026PTC258674",
  roc: "RoC-Uttar Pradesh II",
  regNo: "258674",
  officeAddress:
    "Office No. 604/6F, Tradex Tower-1, Alpha 1, Alpha Greater Noida, Noida, Gautam Buddha Nagar, Uttar Pradesh, India, 201310",
  email: "contact@dynamichomes.in",
  supportEmail: "dynamichomesit@gmail.com",
  phones: ["+91 98710 44920", "+91 98100 88231", "+91 78277 11724"],
  lastUpdated: "October 2, 2026",
};

/* =========================================================
   TERMS SECTIONS DATA
========================================================= */
const TERMS_SECTIONS = [
  {
    id: "acceptance-terms",
    title: "1. Acceptance of Terms & Overview",
    icon: CheckCircle2,
    summary:
      "Binding agreement between you and Dynamic Homes Private Limited upon accessing this platform.",
    content: (
      <div className="space-y-4 text-black/75 leading-7 text-sm sm:text-base">
        <p>
          Welcome to <strong className="text-[#111]">{COMPANY.name}</strong> (&quot;Dynamic Homes&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms and Conditions (&quot;Terms&quot;) govern your access to and use of our website, digital platforms, property consultation services, plot listings (including VAMI Enclave), payment guidelines, advisory brochures, and related features (collectively, the &quot;Services&quot;).
        </p>
        <p>
          By accessing, browsing, or utilizing any portion of our website or submitting inquiries, you acknowledge that you have read, understood, and agree to be bound by these Terms and our Privacy Policy. If you do not agree to these Terms, you must discontinue using our website and Services immediately.
        </p>
        <div className="my-6 rounded-lg border border-[#B17A3A]/30 bg-[#FBF9F4] p-5">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-1 shrink-0 text-[#B17A3A]" size={20} />
            <div className="text-xs sm:text-sm text-[#333]">
              <strong className="block font-semibold text-[#111] mb-1">Corporate Registration Identity</strong>
              Dynamic Homes Private Limited is incorporated under the Companies Act, 2013 with CIN <span className="font-mono font-semibold text-[#8F5D22]">{COMPANY.cin}</span> registered under {COMPANY.roc} (Registration No. {COMPANY.regNo}).
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "services-scope",
    title: "2. Scope of Advisory & Property Information",
    icon: Building2,
    summary:
      "Nature of property advisory, plot availability, architectural previews, and site visits.",
    content: (
      <div className="space-y-4 text-black/75 leading-7 text-sm sm:text-base">
        <p>
          Dynamic Homes provides real estate advisory, property consultation, land assembly guidance, and marketing information for residential and commercial real estate projects, with special focus on Noida, Greater Noida, and Jewar Airport connectivity corridors (e.g., Daudpur, 130m Road corridor).
        </p>
        <ul className="list-disc pl-5 space-y-2 text-black/70">
          <li>
            <strong>Information Purpose Only:</strong> All content, project renders, plot boundary maps, master plans, pricing matrices, and brochure details displayed on this website are for informational and conceptual guidance purposes only.
          </li>
          <li>
            <strong>Non-Binding Availability:</strong> Display of specific plot sizes (e.g., 60 sq. yd, 100 sq. yd, 200 sq. yd) or pricing options does not constitute a guaranteed offer to sell or reservation until formal documentation is executed.
          </li>
          <li>
            <strong>Site Visits & Consultations:</strong> Site visit scheduling via the website is subject to physical verification and confirmation by an authorized representative of Dynamic Homes.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "property-disclaimers",
    title: "3. Plot Pricing, Approvals & Financial Disclaimers",
    icon: AlertTriangle,
    summary:
      "Indicative nature of brochure prices, payment schedules, and mandatory document verification.",
    content: (
      <div className="space-y-4 text-black/75 leading-7 text-sm sm:text-base">
        <p>
          We strive for complete transparency across all project communications. However, property values, government surcharges, and land development policies in Greater Noida are dynamic:
        </p>
        <div className="rounded-lg border border-amber-200 bg-amber-50/60 p-5 text-amber-900 text-xs sm:text-sm leading-6">
          <strong className="block font-semibold text-amber-950 mb-1 flex items-center gap-2">
            <AlertTriangle size={16} className="text-amber-700" /> Statutory & Price Variance Disclaimer
          </strong>
          Brochure-listed prices, payment plan breakdowns, development charges, registration fee estimates, and road width disclosures are subject to revision based on actual survey measurements, authority approvals, and market adjustments. Buyers are advised to independently verify registry terms, title deeds, and development permissions prior to financial commitments.
        </div>
        <p>
          Calculations provided via our interactive Mortgage or EMI Calculator tool are purely illustrative and intended as approximate estimators. Actual loan eligibility, interest rates, and loan terms are determined solely by participating banking or non-banking financial institutions (NBFCs).
        </p>
      </div>
    ),
  },
  {
    id: "intellectual-property",
    title: "4. Intellectual Property Rights",
    icon: Scale,
    summary:
      "Ownership of brand assets, project photography, renders, layout designs, and web content.",
    content: (
      <div className="space-y-4 text-black/75 leading-7 text-sm sm:text-base">
        <p>
          All content on this website—including but not limited to logos, trademarks (&quot;Dynamic Homes&quot;, &quot;VAMI Enclave&quot;), architectural floor plans, high-resolution renders, copy, custom graphics, button icons, software, and audio/video materials—is the exclusive property of <strong>Dynamic Homes Private Limited</strong> or its content suppliers and is protected under Indian Copyright laws, Trademark Act 1999, and international intellectual property regulations.
        </p>
        <p>
          You are granted a limited, non-exclusive, non-transferable license to access and view the website for personal, non-commercial use. You may not modify, reproduce, distribute, create derivative works from, publicly display, or exploit any content without express prior written consent from Dynamic Homes.
        </p>
      </div>
    ),
  },
  {
    id: "user-conduct",
    title: "5. User Conduct & Acceptable Use",
    icon: BookOpen,
    summary:
      "Rules governing user behavior, inquiry form submissions, and prohibition of malicious acts.",
    content: (
      <div className="space-y-4 text-black/75 leading-7 text-sm sm:text-base">
        <p>When using our website and Services, you agree not to:</p>
        <ul className="list-disc pl-5 space-y-2 text-black/70">
          <li>Submit false, misleading, fraudulent, or inaccurate contact information or inquiry forms.</li>
          <li>Attempt to gain unauthorized access to our web servers, databases, inquiry management systems, or administrative backend.</li>
          <li>Use automated scripts, bots, web scrapers, or data mining tools to extract content or listings without authorization.</li>
          <li>Transmit any viruses, malware, trojan horses, or destructive code to or through our platform.</li>
          <li>Impersonate any officer, employee, agent, or representative of Dynamic Homes Private Limited.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "limitation-liability",
    title: "6. Limitation of Liability & Warranty Disclaimer",
    icon: ShieldCheck,
    summary:
      "Limits on corporate financial liability and provision of web content on an 'as-is' basis.",
    content: (
      <div className="space-y-4 text-black/75 leading-7 text-sm sm:text-base">
        <p>
          The Services and all information contained on the website are provided on an <strong>&quot;AS IS&quot;</strong> and <strong>&quot;AS AVAILABLE&quot;</strong> basis without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
        </p>
        <p>
          To the maximum extent permitted under applicable law, Dynamic Homes Private Limited, its directors, officers, employees, agents, and affiliates shall not be liable for any direct, indirect, incidental, consequential, special, or punitive damages arising out of or in connection with:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-black/70">
          <li>Your reliance on any information or price estimate published on the website.</li>
          <li>Interruption, delay, or unreachability of the website due to network or server downtime.</li>
          <li>Any unauthorized access to or alteration of your transmissions or inquiry data.</li>
          <li>Third-party conduct or content encountered on linked external websites.</li>
        </ul>
      </div>
    ),
  },
  {
    id: "external-links",
    title: "7. Third-Party Links & External Portals",
    icon: ExternalLink,
    summary:
      "Policy regarding external map links, banking portals, and partner website references.",
    content: (
      <div className="space-y-4 text-black/75 leading-7 text-sm sm:text-base">
        <p>
          Our website may contain links to third-party web pages, mapping services (such as Google Maps for project locations), financial calculators, or government portal references (such as YEIDA/UP RERA). These links are provided solely for convenience and contextual guidance.
        </p>
        <p>
          Dynamic Homes has no control over and assumes no responsibility for the privacy practices, content, terms of use, or security of third-party platforms. Accessing third-party links is done at your own risk.
        </p>
      </div>
    ),
  },
  {
    id: "governing-law",
    title: "8. Governing Law & Dispute Resolution",
    icon: Scale,
    summary:
      "Jurisdiction of courts in Gautam Buddha Nagar / Noida, Uttar Pradesh, India.",
    content: (
      <div className="space-y-4 text-black/75 leading-7 text-sm sm:text-base">
        <p>
          These Terms and Conditions shall be governed by, construed, and enforced in accordance with the laws of the <strong>Republic of India</strong>, without regard to its conflict of law principles.
        </p>
        <p>
          Any legal action, dispute, controversy, or claim arising out of or relating to these Terms, the website, or our property advisory services shall be subject to the exclusive jurisdiction of the competent courts located in <strong>Gautam Buddha Nagar / Noida, Uttar Pradesh, India</strong>.
        </p>
      </div>
    ),
  },
  {
    id: "contact-amendments",
    title: "9. Amendments & Legal Contact",
    icon: Mail,
    summary:
      "Reservation of rights to update terms and contact details for legal inquiries.",
    content: (
      <div className="space-y-4 text-black/75 leading-7 text-sm sm:text-base">
        <p>
          Dynamic Homes reserves the right to amend, modify, or update these Terms and Conditions at any time without prior individual notice. Any changes will become effective immediately upon posting to this page with an updated &quot;Last Updated&quot; date. Your continued use of the website following such changes constitutes your acceptance of the revised Terms.
        </p>
        <div className="mt-6 rounded-lg bg-[#F8F7F4] border border-black/10 p-6">
          <h4 className="font-semibold text-[#111] mb-3 text-base flex items-center gap-2">
            <Mail size={18} className="text-[#B17A3A]" /> Direct Legal & Compliance Inquiries
          </h4>
          <p className="text-xs sm:text-sm text-black/65 mb-4">
            For formal legal notices, terms inquiries, or corporate compliance matters, please contact our legal desk:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="space-y-1">
              <span className="text-black/40 uppercase tracking-wider font-mono text-[10px] block">Corporate Entity</span>
              <span className="font-semibold text-[#111] block">{COMPANY.name}</span>
              <span className="text-black/60 block">CIN: {COMPANY.cin}</span>
            </div>
            <div className="space-y-1">
              <span className="text-black/40 uppercase tracking-wider font-mono text-[10px] block">Official Email</span>
              <a href={`mailto:${COMPANY.email}`} className="font-medium text-[#8F5D22] hover:text-[#B17A3A] block">
                {COMPANY.email}
              </a>
              <a href={`mailto:${COMPANY.supportEmail}`} className="text-black/60 hover:text-[#B17A3A] block">
                {COMPANY.supportEmail}
              </a>
            </div>
            <div className="sm:col-span-2 space-y-1 pt-2 border-t border-black/10">
              <span className="text-black/40 uppercase tracking-wider font-mono text-[10px] block">Registered Corporate Address</span>
              <span className="text-black/75 leading-5 block">{COMPANY.officeAddress}</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function TermsAndConditionsPage() {
  const [activeId, setActiveId] = useState<string>(TERMS_SECTIONS[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filter sections by search query
  const filteredSections = TERMS_SECTIONS.filter((sec) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      sec.title.toLowerCase().includes(query) ||
      sec.summary.toLowerCase().includes(query) ||
      sec.id.toLowerCase().includes(query)
    );
  });

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = TERMS_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(TERMS_SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(TERMS_SECTIONS[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopyLink = (id: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="min-h-screen bg-white text-[#111111]">
      {/* =========================================================
          HERO SECTION
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#0A0A0A] px-5 pb-16 pt-32 text-white sm:px-8 lg:px-12 lg:pb-24 lg:pt-40">
        {/* Subtle background grid pattern */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div
            className="h-full w-full"
            style={{
              backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Ambient Gold Glow */}
        <div className="pointer-events-none absolute -right-20 top-1/4 h-96 w-96 rounded-full bg-[#C99545]/10 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C99545]/30 bg-[#C99545]/10 px-3.5 py-1 text-xs font-medium text-[#E3B968]">
              <Scale size={14} className="text-[#C99545]" />
              <span>Legal &amp; Advisory Compliance</span>
            </div>

            <h1
              style={{ fontFamily: "var(--font-bodoni)" }}
              className="mt-6 text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Terms &amp; Conditions
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Official terms governing website access, property inquiries, plot advisories, brochure pricing disclaimers, and corporate services for <strong className="text-white">{COMPANY.name}</strong>.
            </p>

            {/* Quick Meta Stats */}
            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-xs text-white/60 sm:text-sm">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#C99545]" />
                <span>Last Updated: <strong className="text-white">{COMPANY.lastUpdated}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 size={16} className="text-[#C99545]" />
                <span>CIN: <strong className="text-white font-mono">{COMPANY.cin}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-[#C99545]" />
                <span>Jurisdiction: <strong className="text-white">Uttar Pradesh, India</strong></span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT WITH SIDEBAR & SECTIONS
      ========================================================= */}
      <section className="px-5 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        <div className="mx-auto max-w-7xl">
          {/* Action & Filter Bar */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-black/10 pb-6">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search
                size={18}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black/40"
              />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search within terms..."
                className="w-full rounded-md border border-black/15 bg-[#F9F8F6] py-2.5 pl-10 pr-4 text-sm text-[#111] placeholder:text-black/40 focus:border-[#B17A3A] focus:bg-white focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-black/40 hover:text-black"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Quick Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-2 rounded-md border border-black/15 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-wider text-black/75 transition-colors hover:border-[#B17A3A] hover:bg-[#F8F7F4] hover:text-[#8F5D22]"
              >
                <Printer size={15} />
                <span>Print Terms</span>
              </button>

              <Link
                href="/privacy-policy"
                className="inline-flex items-center gap-2 rounded-md border border-[#B17A3A]/40 bg-[#B17A3A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#8F5D22] transition-colors hover:bg-[#B17A3A] hover:text-white"
              >
                <ShieldCheck size={15} />
                <span>View Privacy Policy</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.32fr_0.68fr] xl:grid-cols-[0.28fr_0.72fr]">
            {/* ===================================================
                STICKY SIDEBAR NAVIGATION
            =================================================== */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 rounded-xl border border-black/10 bg-[#F9F8F6] p-6 shadow-xs">
                <div className="mb-4 flex items-center gap-2 font-semibold text-[#111] text-sm uppercase tracking-wider">
                  <BookOpen size={16} className="text-[#B17A3A]" />
                  <span>Table of Contents</span>
                </div>

                <nav className="space-y-1">
                  {TERMS_SECTIONS.map((section) => {
                    const isActive = activeId === section.id;
                    const Icon = section.icon;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          const el = document.getElementById(section.id);
                          if (el) {
                            const y = el.getBoundingClientRect().top + window.pageYOffset - 120;
                            window.scrollTo({ top: y, behavior: "smooth" });
                            setActiveId(section.id);
                          }
                        }}
                        className={`group flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-medium transition-all duration-200 ${
                          isActive
                            ? "bg-[#111111] text-white shadow-xs"
                            : "text-black/65 hover:bg-black/5 hover:text-black"
                        }`}
                      >
                        <span className="flex items-center gap-2.5 truncate">
                          <Icon
                            size={15}
                            className={isActive ? "text-[#C99545]" : "text-black/40 group-hover:text-[#B17A3A]"}
                          />
                          <span className="truncate">{section.title}</span>
                        </span>
                        <ChevronRight
                          size={14}
                          className={`shrink-0 transition-transform ${
                            isActive ? "translate-x-0.5 text-[#C99545]" : "opacity-0 group-hover:opacity-100"
                          }`}
                        />
                      </a>
                    );
                  })}
                </nav>

                {/* Quick Help Card */}
                <div className="mt-8 rounded-lg border border-[#B17A3A]/30 bg-white p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#111]">
                    <HelpCircle size={16} className="text-[#B17A3A]" />
                    <span>Have Legal Questions?</span>
                  </div>
                  <p className="mt-1.5 text-[11px] text-black/60 leading-5">
                    Our compliance team is ready to clarify any plot terms or advisory agreements.
                  </p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#8F5D22] hover:text-[#B17A3A]"
                  >
                    Email Legal Team <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </aside>

            {/* ===================================================
                MAIN TERMS CONTENT
            =================================================== */}
            <div className="space-y-12">
              {filteredSections.length === 0 ? (
                <div className="rounded-xl border border-dashed border-black/20 p-12 text-center">
                  <Search size={32} className="mx-auto text-black/30 mb-3" />
                  <p className="font-semibold text-lg text-[#111]">No matching terms found</p>
                  <p className="text-sm text-black/60 mt-1">Try adjusting your search query &quot;{searchQuery}&quot;</p>
                  <button
                    onClick={() => setSearchQuery("")}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#8F5D22] hover:underline"
                  >
                    Reset search filter
                  </button>
                </div>
              ) : (
                filteredSections.map((section, idx) => {
                  const Icon = section.icon;
                  return (
                    <motion.article
                      key={section.id}
                      id={section.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: idx * 0.05 }}
                      className="scroll-mt-32 rounded-xl border border-black/10 bg-white p-6 sm:p-8 shadow-xs hover:border-black/20 transition-all"
                    >
                      {/* Section Header */}
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-black/10 pb-5">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#B17A3A]/30 bg-[#B17A3A]/10 text-[#B17A3A]">
                            <Icon size={20} />
                          </div>
                          <div>
                            <h2
                              style={{ fontFamily: "var(--font-bodoni)" }}
                              className="text-xl font-medium text-[#111111] sm:text-2xl"
                            >
                              {section.title}
                            </h2>
                            <p className="text-xs text-black/50 mt-0.5">{section.summary}</p>
                          </div>
                        </div>

                        {/* Copy Link Button */}
                        <button
                          onClick={() => handleCopyLink(section.id)}
                          className="self-start sm:self-auto inline-flex items-center gap-1.5 rounded-md border border-black/10 bg-[#F8F7F4] px-3 py-1.5 text-[11px] font-medium text-black/60 hover:border-[#B17A3A] hover:text-[#8F5D22] transition-colors"
                          title="Copy direct section link"
                        >
                          {copiedId === section.id ? (
                            <>
                              <Check size={13} className="text-emerald-600" />
                              <span className="text-emerald-700 font-semibold">Copied!</span>
                            </>
                          ) : (
                            <>
                              <Copy size={13} />
                              <span>Copy link</span>
                            </>
                          )}
                        </button>
                      </div>

                      {/* Section Body */}
                      <div className="pt-6">{section.content}</div>
                    </motion.article>
                  );
                })
              )}

              {/* Bottom Support Banner */}
              <div className="rounded-2xl bg-[#0A0A0A] p-8 text-white sm:p-10 relative overflow-hidden">
                <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-[#C99545]/15 blur-[90px]" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C99545]">
                      Need Further Clarification?
                    </span>
                    <h3 style={{ fontFamily: "var(--font-bodoni)" }} className="mt-2 text-2xl sm:text-3xl font-medium">
                      Speak with our Advisory Desk
                    </h3>
                    <p className="mt-2 text-sm text-white/65 max-w-xl">
                      If you have questions regarding VAMI Enclave plot terms, documentation procedures, or registry protocols, our advisory team is at your service.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-[#B17A3A] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#8F5D22] transition-colors"
                    >
                      Contact Us <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
