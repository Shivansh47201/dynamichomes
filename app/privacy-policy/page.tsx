"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Eye,
  UserCheck,
  FileCheck,
  Database,
  Mail,
  Phone,
  MapPin,
  Clock,
  Printer,
  Copy,
  Check,
  Search,
  BookOpen,
  ChevronRight,
  ArrowUpRight,
  HelpCircle,
  Building2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

/* =========================================================
   COMPANY CONSTANTS
========================================================= */
const COMPANY = {
  name: "Dynamic Homes Private Limited",
  cin: "U68100UW2026PTC258674",
  roc: "RoC-Uttar Pradesh II",
  officeAddress:
    "Office No. 604/6F, Tradex Tower-1, Alpha 1, Alpha Greater Noida, Noida, Gautam Buddha Nagar, Uttar Pradesh, India, 201310",
  email: "contact@dynamichomes.in",
  privacyEmail: "privacy@dynamichomes.in",
  supportEmail: "dynamichomesit@gmail.com",
  phones: ["+91 98710 44920", "+91 98100 88231", "+91 78277 11724"],
  lastUpdated: "October 2, 2026",
  grievanceOfficer: "Grievance Officer - Legal & Data Protection Desk",
};

/* =========================================================
   PRIVACY SECTIONS DATA
========================================================= */
const PRIVACY_SECTIONS = [
  {
    id: "privacy-overview",
    title: "1. Overview & Privacy Commitment",
    icon: ShieldCheck,
    summary:
      "Our pledge to protect your personal data and respect your confidentiality.",
    content: (
      <div className="space-y-4 text-black/75 leading-7 text-sm sm:text-base">
        <p>
          At <strong>{COMPANY.name}</strong> (&quot;Dynamic Homes&quot;, &quot;Company&quot;, &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), we place paramount value on your privacy and data security. This Privacy Policy details how we collect, handle, process, store, and safeguard your personal information when you visit our website, submit property inquiries (e.g., for VAMI Enclave plots), subscribe to newsletter updates, or engage with our real estate advisory services.
        </p>
        <p>
          We are committed to processing your data in compliance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> of India, the Information Technology Act, 2000, and applicable data protection regulations.
        </p>
        <div className="my-6 rounded-lg border border-[#B17A3A]/30 bg-[#FBF9F4] p-5">
          <div className="flex items-start gap-3">
            <Lock className="mt-1 shrink-0 text-[#B17A3A]" size={20} />
            <div className="text-xs sm:text-sm text-[#333]">
              <strong className="block font-semibold text-[#111] mb-1">Strict Non-Spam & Zero Data Sale Guarantee</strong>
              We do not sell, rent, trade, or monetize your personal details to third-party telemarketers. Information submitted to Dynamic Homes is used exclusively to facilitate your property inquiries and advisory updates.
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "information-collected",
    title: "2. Information We Collect",
    icon: Database,
    summary:
      "Types of personal details, contact data, and technical telemetry collected.",
    content: (
      <div className="space-y-4 text-black/75 leading-7 text-sm sm:text-base">
        <p>We collect information through direct interactions and automated digital telemetry:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="rounded-lg border border-black/10 bg-[#F9F8F6] p-4">
            <h4 className="font-semibold text-[#111] text-sm mb-2 flex items-center gap-2">
              <UserCheck size={16} className="text-[#B17A3A]" /> Direct Personal Data
            </h4>
            <ul className="text-xs sm:text-sm text-black/70 space-y-1.5 list-disc pl-4">
              <li>Full Name and Contact Title</li>
              <li>Email Address</li>
              <li>Phone / WhatsApp Mobile Number</li>
              <li>Preferred Plot Size or Location Preferences</li>
              <li>Inquiry Message details &amp; Site Visit Schedule Requests</li>
            </ul>
          </div>

          <div className="rounded-lg border border-black/10 bg-[#F9F8F6] p-4">
            <h4 className="font-semibold text-[#111] text-sm mb-2 flex items-center gap-2">
              <Eye size={16} className="text-[#B17A3A]" /> Automated Technical Data
            </h4>
            <ul className="text-xs sm:text-sm text-black/70 space-y-1.5 list-disc pl-4">
              <li>IP Address and General Geolocation</li>
              <li>Browser Type, Version, and Operating System</li>
              <li>Referring Web Address and Page Navigation Duration</li>
              <li>Wishlist Saved Plots and Interactive Calculator Settings</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "how-we-use-data",
    title: "3. How We Use Your Information",
    icon: FileCheck,
    summary:
      "Purposes for data processing, site visit arrangements, and advisory communications.",
    content: (
      <div className="space-y-4 text-black/75 leading-7 text-sm sm:text-base">
        <p>Your information is processed strictly for legitimate operational and customer service objectives:</p>
        <ul className="list-disc pl-5 space-y-2 text-black/70">
          <li>
            <strong>Property Consultation:</strong> Responding to plot availability inquiries, sending VAMI Enclave brochures, floor plans, and pricing matrices.
          </li>
          <li>
            <strong>Site Visit Facilitation:</strong> Coordinating physical or virtual site inspections with our field advisory team in Greater Noida.
          </li>
          <li>
            <strong>Updates & Newsletters:</strong> Providing periodic notifications regarding new plot phases, road infrastructure updates (130m Road / Jewar Airport connectivity), or regulatory notices.
          </li>
          <li>
            <strong>Service Personalization:</strong> Remembering your saved wishlist items, plot search filters, or calculator choices.
          </li>
          <li>
            <strong>Legal Compliance:</strong> Fulfilling statutory record-keeping obligations under RERA or Companies Act regulations.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "data-sharing",
    title: "4. Information Sharing & Third Parties",
    icon: UserCheck,
    summary:
      "Conditions under which data may be shared with verified service partners or authorities.",
    content: (
      <div className="space-y-4 text-black/75 leading-7 text-sm sm:text-base">
        <p>
          Dynamic Homes strictly restricts data sharing. We only disclose your information under the following limited conditions:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-black/70">
          <li>
            <strong>Authorized Service Providers:</strong> Trusted cloud hosting providers, transactional SMS/email gateway services, and IT infrastructure vendors who operate under non-disclosure and data privacy agreements.
          </li>
          <li>
            <strong>Financial & Legal Partners:</strong> With your explicit consent, sharing details with bank home-loan executives or legal title advocates to assist with plot financing or registry verification.
          </li>
          <li>
            <strong>Statutory Compliance:</strong> When required by court orders, law enforcement requests, or regulatory bodies under applicable Indian laws.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "data-security",
    title: "5. Data Security & Storage Standards",
    icon: Lock,
    summary:
      "SSL encryption, access control protocols, and infrastructure safeguards.",
    content: (
      <div className="space-y-4 text-black/75 leading-7 text-sm sm:text-base">
        <p>
          We employ industry-standard technical and organizational security measures to protect your personal data from unauthorized access, loss, misuse, disclosure, or alteration:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-4">
          <div className="rounded-lg bg-[#F8F7F4] border border-black/10 p-4 text-center">
            <Lock className="mx-auto text-[#B17A3A] mb-2" size={20} />
            <h5 className="font-semibold text-[#111] text-xs">256-Bit SSL Encryption</h5>
            <p className="text-[11px] text-black/60 mt-1">Encrypted web transmission protocols across all forms</p>
          </div>
          <div className="rounded-lg bg-[#F8F7F4] border border-black/10 p-4 text-center">
            <ShieldCheck className="mx-auto text-[#B17A3A] mb-2" size={20} />
            <h5 className="font-semibold text-[#111] text-xs">Access Control</h5>
            <p className="text-[11px] text-black/60 mt-1">Strict role-based access limited to verified representatives</p>
          </div>
          <div className="rounded-lg bg-[#F8F7F4] border border-black/10 p-4 text-center">
            <Database className="mx-auto text-[#B17A3A] mb-2" size={20} />
            <h5 className="font-semibold text-[#111] text-xs">Secure Servers</h5>
            <p className="text-[11px] text-black/60 mt-1">Monitored data hosting environments with regular backups</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "cookie-policy",
    title: "6. Cookies & Web Analytics Policy",
    icon: Eye,
    summary:
      "How session cookies, preference storage, and analytics tools operate.",
    content: (
      <div className="space-y-4 text-black/75 leading-7 text-sm sm:text-base">
        <p>
          Our website uses essential and performance cookies to optimize your browsing experience. Cookies are small text files stored on your browser:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-black/70">
          <li><strong>Essential Cookies:</strong> Required for site navigation, wishlist functionality, and security validation.</li>
          <li><strong>Preference Cookies:</strong> Store choices such as UI theme, calculator parameters, or property filters.</li>
          <li><strong>Analytics Cookies:</strong> Help us aggregate anonymous visitor numbers and traffic sources to improve website responsiveness.</li>
        </ul>
        <p className="text-xs text-black/60">
          You can modify your browser settings to decline non-essential cookies. However, disabling essential cookies may impact certain interactive features of our website.
        </p>
      </div>
    ),
  },
  {
    id: "user-rights",
    title: "7. Your Data Rights & Choices (DPDP Act)",
    icon: UserCheck,
    summary:
      "Right to access, correct, delete, or withdraw consent under Indian data regulations.",
    content: (
      <div className="space-y-4 text-black/75 leading-7 text-sm sm:text-base">
        <p>Under the Digital Personal Data Protection Act, 2023, you retain the following rights regarding your personal information:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-4">
          <div className="flex items-start gap-3 p-3 rounded-lg border border-black/10 bg-[#F9F8F6]">
            <Check className="mt-0.5 shrink-0 text-[#B17A3A]" size={16} />
            <div>
              <strong className="block text-xs text-[#111]">Right to Access</strong>
              <span className="text-[11px] text-black/60">Request a summary of personal data held about you.</span>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg border border-black/10 bg-[#F9F8F6]">
            <Check className="mt-0.5 shrink-0 text-[#B17A3A]" size={16} />
            <div>
              <strong className="block text-xs text-[#111]">Right to Correction</strong>
              <span className="text-[11px] text-black/60">Update inaccurate or incomplete contact records.</span>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg border border-black/10 bg-[#F9F8F6]">
            <Check className="mt-0.5 shrink-0 text-[#B17A3A]" size={16} />
            <div>
              <strong className="block text-xs text-[#111]">Right to Erasure</strong>
              <span className="text-[11px] text-black/60">Request deletion of your data when no longer required.</span>
            </div>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg border border-black/10 bg-[#F9F8F6]">
            <Check className="mt-0.5 shrink-0 text-[#B17A3A]" size={16} />
            <div>
              <strong className="block text-xs text-[#111]">Consent Withdrawal / Opt-Out</strong>
              <span className="text-[11px] text-black/60">Unsubscribe from plot update notifications anytime.</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "grievance-contact",
    title: "8. Grievance Redressal & Contact Officer",
    icon: Mail,
    summary:
      "Dedicated contact details for privacy concerns, data inquiries, and grievance redressal.",
    content: (
      <div className="space-y-4 text-black/75 leading-7 text-sm sm:text-base">
        <p>
          In accordance with the Information Technology Act and DPDP guidelines, Dynamic Homes has appointed a designated Grievance Officer to handle privacy questions, data updates, or formal complaints:
        </p>
        
        <div className="mt-6 rounded-xl bg-[#F8F7F4] border border-black/10 p-6">
          <h4 className="font-semibold text-[#111] mb-3 text-base flex items-center gap-2">
            <Mail size={18} className="text-[#B17A3A]" /> Data Privacy &amp; Grievance Redressal Officer
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="space-y-1">
              <span className="text-black/40 uppercase tracking-wider font-mono text-[10px] block">Corporate Entity</span>
              <span className="font-semibold text-[#111] block">{COMPANY.name}</span>
              <span className="text-black/60 block">CIN: {COMPANY.cin}</span>
            </div>
            <div className="space-y-1">
              <span className="text-black/40 uppercase tracking-wider font-mono text-[10px] block">Privacy Email Desk</span>
              <a href={`mailto:${COMPANY.privacyEmail}`} className="font-medium text-[#8F5D22] hover:text-[#B17A3A] block">
                {COMPANY.privacyEmail}
              </a>
              <a href={`mailto:${COMPANY.email}`} className="text-black/60 hover:text-[#B17A3A] block">
                {COMPANY.email}
              </a>
            </div>
            <div className="sm:col-span-2 space-y-1 pt-2 border-t border-black/10">
              <span className="text-black/40 uppercase tracking-wider font-mono text-[10px] block">Office Address</span>
              <span className="text-black/75 leading-5 block">{COMPANY.officeAddress}</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function PrivacyPolicyPage() {
  const [activeId, setActiveId] = useState<string>(PRIVACY_SECTIONS[0].id);
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Filter sections by search query
  const filteredSections = PRIVACY_SECTIONS.filter((sec) => {
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
      for (let i = PRIVACY_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(PRIVACY_SECTIONS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveId(PRIVACY_SECTIONS[i].id);
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
        {/* Background Grid Pattern */}
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
        <div className="pointer-events-none absolute -left-20 top-1/3 h-96 w-96 rounded-full bg-[#C99545]/10 blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C99545]/30 bg-[#C99545]/10 px-3.5 py-1 text-xs font-medium text-[#E3B968]">
              <ShieldCheck size={14} className="text-[#C99545]" />
              <span>Data Protection &amp; Confidentiality</span>
            </div>

            <h1
              style={{ fontFamily: "var(--font-bodoni)" }}
              className="mt-6 text-4xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Privacy Policy
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
              Detailed policy explaining how <strong className="text-white">{COMPANY.name}</strong> collects, protects, processes, and respects your personal data under the DPDP Act 2023.
            </p>

            {/* Quick Meta Stats */}
            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-xs text-white/60 sm:text-sm">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#C99545]" />
                <span>Last Updated: <strong className="text-white">{COMPANY.lastUpdated}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Building2 size={16} className="text-[#C99545]" />
                <span>Entity: <strong className="text-white font-mono">{COMPANY.name}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Lock size={16} className="text-[#C99545]" />
                <span>Compliance: <strong className="text-white">DPDP Act 2023 / IT Act</strong></span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MAIN CONTENT SECTION
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
                placeholder="Search privacy topics..."
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
                <span>Print Policy</span>
              </button>

              <Link
                href="/terms-and-conditions"
                className="inline-flex items-center gap-2 rounded-md border border-[#B17A3A]/40 bg-[#B17A3A]/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#8F5D22] transition-colors hover:bg-[#B17A3A] hover:text-white"
              >
                <BookOpen size={15} />
                <span>View Terms &amp; Conditions</span>
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
                  <span>Privacy Topics</span>
                </div>

                <nav className="space-y-1">
                  {PRIVACY_SECTIONS.map((section) => {
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

                {/* Quick Officer Help Card */}
                <div className="mt-8 rounded-lg border border-[#B17A3A]/30 bg-white p-4">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#111]">
                    <ShieldCheck size={16} className="text-[#B17A3A]" />
                    <span>Data Privacy Officer</span>
                  </div>
                  <p className="mt-1.5 text-[11px] text-black/60 leading-5">
                    Exercise your data rights or request data erasure with our officer.
                  </p>
                  <a
                    href={`mailto:${COMPANY.privacyEmail}`}
                    className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-[#8F5D22] hover:text-[#B17A3A]"
                  >
                    Email Privacy Officer <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </aside>

            {/* ===================================================
                MAIN PRIVACY CONTENT
            =================================================== */}
            <div className="space-y-12">
              {filteredSections.length === 0 ? (
                <div className="rounded-xl border border-dashed border-black/20 p-12 text-center">
                  <Search size={32} className="mx-auto text-black/30 mb-3" />
                  <p className="font-semibold text-lg text-[#111]">No privacy topics found</p>
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
                <div className="pointer-events-none absolute -left-16 -bottom-16 h-64 w-64 rounded-full bg-[#C99545]/15 blur-[90px]" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C99545]">
                      Data Privacy Concerns?
                    </span>
                    <h3 style={{ fontFamily: "var(--font-bodoni)" }} className="mt-2 text-2xl sm:text-3xl font-medium">
                      Contact Data Grievance Desk
                    </h3>
                    <p className="mt-2 text-sm text-white/65 max-w-xl">
                      If you wish to request data correction, inspect registered details, or opt-out of plot notifications, contact our privacy officer directly.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 shrink-0">
                    <a
                      href={`mailto:${COMPANY.privacyEmail}`}
                      className="inline-flex items-center justify-center gap-2 rounded-md bg-[#B17A3A] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white hover:bg-[#8F5D22] transition-colors"
                    >
                      Email Privacy Officer <ArrowUpRight size={15} />
                    </a>
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
