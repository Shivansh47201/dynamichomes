"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Check,
  ChevronRight,
  Compass,
  Landmark,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";

/* =========================================================
   COMPANY INFORMATION
   Only information supplied for Dynamic Homes is used here.
========================================================= */

const COMPANY = {
  name: "DYNAMIC HOMES PRIVATE LIMITED",
  cin: "U68100UW2026PTC258674",
  incorporationDate: "16 September 2026",
  companyType: "Private Company",
  classification: "Non-Government Company",
  registeredWith: "RoC-Uttar Pradesh II",
  registrationNumber: "258674",
  authorizedCapital: "₹1,00,000",
  paidUpCapital: "₹80,000",
  directors: ["MITHUN KUMAR", "VAISHALI"],
  phone: "+91 78277 11724",
  email: "dynamichomesit@gmail.com",
};

/* =========================================================
   LOCAL LEADERSHIP / TEAM DATA
========================================================= */

const LEADERSHIP = [
  {
    name: "MITHUN KUMAR",
    title: "Director",
    bio: "Director and key management personnel of Dynamic Homes Private Limited.",
    image: "/about/leadership-01.jpg",
  },
  {
    name: "VAISHALI",
    title: "Director",
    bio: "Director and key management personnel of Dynamic Homes Private Limited.",
    image: "/about/leadership-02.jpg",
  },
];

/* =========================================================
   COMPANY FACTS
========================================================= */

const COMPANY_FACTS = [
  {
    number: "01",
    title: "Legally Registered",
    description:
      "Dynamic Homes Private Limited is a private company incorporated with the Ministry of Corporate Affairs.",
    icon: Landmark,
  },
  {
    number: "02",
    title: "Company Identity",
    description:
      "The company is identified by its Corporate Identification Number (CIN) U68100UW2026PTC258674.",
    icon: Building2,
  },
  {
    number: "03",
    title: "Management",
    description:
      "The company has two directors and key management personnel: Mithun Kumar and Vaishali.",
    icon: Compass,
  },
  {
    number: "04",
    title: "Registered Capital",
    description:
      "The company has an authorised share capital of ₹1,00,000 and paid-up capital of ₹80,000.",
    icon: ShieldCheck,
  },
];

/* =========================================================
   ANIMATION
========================================================= */

const fadeUp = {
  initial: {
    opacity: 0,
    y: 30,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.15,
  },
  transition: {
    duration: 0.65,
    ease: "easeOut",
  },
} as const;

/* =========================================================
   PAGE
========================================================= */

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#111111]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#080808] text-white">

        {/* Architectural grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.045]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: "110px 110px",
            }}
          />
        </div>

        {/* Gold ambient light */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[600px] w-[600px] rounded-full bg-[#B17A3A]/10 blur-[150px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-40">

          <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">

            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >

              {/* Brand line */}
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-[#C99545]" />

                <span className="text-xs font-medium tracking-[0.18em] text-[#D5A65B]">
                  ABOUT DYNAMIC HOMES
                </span>
              </div>

              <h1 className="max-w-5xl font-display text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.91] tracking-[-0.045em]">
                A company built
                <span className="block text-white/40">
                  around property.
                </span>
              </h1>

              <p className="mt-9 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                Dynamic Homes Private Limited is a privately incorporated
                company focused on building its presence in the real estate
                sector with a clear and professional approach.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">

                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-[#B17A3A] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C99545]"
                >
                  Talk to us

                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#company"
                  className="inline-flex items-center justify-center gap-3 border border-white/15 px-7 py-4 text-sm text-white/70 transition hover:border-white/35 hover:text-white"
                >
                  Company information

                  <ChevronRight size={16} />
                </a>

              </div>

            </motion.div>

            {/* RIGHT VISUAL */}
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              className="relative"
            >

              <div className="relative aspect-[4/5] overflow-hidden bg-[#151515]">

                <Image
                  src="/properties/villa.png"
                  alt="Dynamic Homes"
                  fill
                  priority
                  className="object-cover transition-transform duration-[1200ms] hover:scale-[1.03]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                {/* Image content */}
                <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">

                  <div className="flex items-center gap-2 text-[#E3B968]">
                    <MapPin size={14} />

                    <span className="text-xs">
                      Greater Noida · NCR
                    </span>
                  </div>

                  <p className="mt-3 max-w-sm font-display text-2xl leading-tight text-white sm:text-3xl">
                    Building a professional foundation for the future.
                  </p>

                </div>

              </div>

              {/* Floating company card */}
              <div className="absolute -bottom-6 -left-5 hidden w-52 bg-white p-5 text-black shadow-2xl sm:block lg:-left-8">

                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[#A66F31]">
                  Incorporated
                </span>

                <p className="mt-2 font-display text-xl">
                  16 September 2026
                </p>

                <p className="mt-1 text-xs text-black/40">
                  Private Limited Company
                </p>

              </div>

            </motion.div>

          </div>

        </div>
      </section>

      {/* =====================================================
          COMPANY INTRO
      ===================================================== */}

      <section
        id="company"
        className="scroll-mt-20 bg-white"
      >

        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <motion.div
            {...fadeUp}
            className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24"
          >

            {/* Heading */}
            <div>

              <p className="text-sm font-semibold text-[#B17A3A]">
                Who we are
              </p>

              <h2 className="mt-5 max-w-md font-display text-4xl leading-tight tracking-[-0.025em] sm:text-5xl">
                A new company with
                <span className="block text-black/30">
                  a clear identity.
                </span>
              </h2>

            </div>

            {/* Copy */}
            <div className="max-w-3xl">

              <p className="text-xl leading-9 text-black/70">
                Dynamic Homes Private Limited was incorporated on
                <strong className="font-semibold text-black">
                  {" "}16 September 2026
                </strong>
                {" "}and is registered as a private, non-government company.
              </p>

              <p className="mt-7 text-base leading-8 text-black/50">
                The company is registered with RoC-Uttar Pradesh II and has
                the Corporate Identification Number
                <strong className="font-medium text-black/70">
                  {" "}U68100UW2026PTC258674.
                </strong>
              </p>

              <p className="mt-5 text-base leading-8 text-black/50">
                Dynamic Homes has two directors and key management personnel,
                Mithun Kumar and Vaishali.
              </p>

            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          COMPANY SNAPSHOT
      ===================================================== */}

      <section className="bg-[#F7F5F0]">

        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

          <motion.div {...fadeUp}>

            <div className="mb-12 max-w-2xl">

              <p className="text-sm font-semibold text-[#B17A3A]">
                Company snapshot
              </p>

              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                The essential details,
                <span className="block text-black/30">
                  clearly presented.
                </span>
              </h2>

            </div>

            <div className="grid border-t border-black/10 sm:grid-cols-2 lg:grid-cols-4">

              <CompanyDetail
                label="Company Name"
                value={COMPANY.name}
              />

              <CompanyDetail
                label="CIN"
                value={COMPANY.cin}
              />

              <CompanyDetail
                label="Incorporated"
                value={COMPANY.incorporationDate}
              />

              <CompanyDetail
                label="Company Type"
                value={`${COMPANY.companyType} · ${COMPANY.classification}`}
              />

              <CompanyDetail
                label="Registration"
                value={`No. ${COMPANY.registrationNumber}`}
              />

              <CompanyDetail
                label="Registered With"
                value={COMPANY.registeredWith}
              />

              <CompanyDetail
                label="Authorised Capital"
                value={COMPANY.authorizedCapital}
              />

              <CompanyDetail
                label="Paid-up Capital"
                value={COMPANY.paidUpCapital}
              />

            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          FOUR PRINCIPLES
      ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <motion.div
            {...fadeUp}
            className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr]"
          >

            <div>

              <p className="text-sm font-semibold text-[#B17A3A]">
                Our approach
              </p>

              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                Professional by
                <span className="block text-black/30">
                  design.
                </span>
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-black/45">
                As a new company, our focus is on establishing a strong,
                transparent and professional foundation.
              </p>

            </div>

            <div className="grid border-t border-black/10 md:grid-cols-2">

              <Principle
                number="01"
                icon={ShieldCheck}
                title="Clarity"
                text="Present information clearly so that property-related conversations remain straightforward and understandable."
              />

              <Principle
                number="02"
                icon={Building2}
                title="Professionalism"
                text="Build every interaction around responsible communication, organised processes and attention to detail."
              />

              <Principle
                number="03"
                icon={Compass}
                title="Understanding"
                text="Take time to understand the property requirement and the person behind the requirement."
              />

              <Principle
                number="04"
                icon={Target}
                title="Long-term vision"
                text="Develop Dynamic Homes with a long-term perspective rather than focusing only on immediate outcomes."
              />

            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          DIRECTORS
      ===================================================== */}

      <section className="bg-[#080808] text-white">

        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <motion.div
            {...fadeUp}
            className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end"
          >

            <div>

              <p className="text-sm font-semibold text-[#D5A65B]">
                Key management
              </p>

              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                The people behind
                <span className="block text-white/30">
                  Dynamic Homes.
                </span>
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-white/40">
              Dynamic Homes Private Limited has two directors and key
              management personnel.
            </p>

          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            {LEADERSHIP.map((leader, index) => (
              <motion.article
                key={leader.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group grid overflow-hidden border border-white/10 bg-[#111111] sm:grid-cols-[0.7fr_1.3fr]"
              >

                {/* Portrait */}
                <div className="relative min-h-[320px] bg-[#171717]">

                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    onError={(event) => {
                      const target = event.currentTarget as HTMLImageElement;

                      if (!target.src.endsWith("/properties/villa.png")) {
                        target.src = "/properties/villa.png";
                      }
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  <span className="absolute bottom-5 left-5 font-display text-3xl text-white/50">
                    0{index + 1}
                  </span>

                </div>

                {/* Details */}
                <div className="flex flex-col justify-center p-7 sm:p-9">

                  <span className="text-xs font-medium text-[#D5A65B]">
                    DIRECTOR
                  </span>

                  <h3 className="mt-3 font-display text-3xl text-white">
                    {leader.name}
                  </h3>

                  <div className="my-6 h-px bg-white/10" />

                  <p className="text-sm leading-7 text-white/45">
                    {leader.bio}
                  </p>

                </div>

              </motion.article>
            ))}

          </div>

        </div>
      </section>

      {/* =====================================================
          COMPANY FACTS
      ===================================================== */}

      <section className="bg-[#F7F5F0]">

        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <motion.div {...fadeUp}>

            <div className="max-w-2xl">

              <p className="text-sm font-semibold text-[#B17A3A]">
                Our foundation
              </p>

              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                What defines the company
                <span className="block text-black/30">
                  today.
                </span>
              </h2>

            </div>

            <div className="mt-14 grid border-t border-black/10 md:grid-cols-2">

              {COMPANY_FACTS.map((fact, index) => {
                const Icon = fact.icon;

                return (
                  <motion.div
                    key={fact.number}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.06,
                    }}
                    className="group border-b border-black/10 p-7 transition-colors duration-300 hover:bg-white sm:p-9"
                  >

                    <div className="flex items-start justify-between">

                      <span className="font-display text-3xl text-[#B17A3A]/60">
                        {fact.number}
                      </span>

                      <div className="flex h-11 w-11 items-center justify-center border border-black/10 text-[#B17A3A]">
                        <Icon size={19} strokeWidth={1.5} />
                      </div>

                    </div>

                    <h3 className="mt-8 font-display text-2xl text-black">
                      {fact.title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm leading-7 text-black/45">
                      {fact.description}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          CONTACT / COMPANY DETAILS
      ===================================================== */}

      <section className="bg-white">

        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">

          <motion.div
            {...fadeUp}
            className="grid gap-12 lg:grid-cols-[1fr_0.8fr]"
          >

            <div>

              <div className="mb-7 flex items-center gap-3">
                <Sparkles
                  size={17}
                  className="text-[#B17A3A]"
                />

                <span className="text-sm font-semibold text-[#B17A3A]">
                  Dynamic Homes Private Limited
                </span>
              </div>

              <h2 className="max-w-3xl font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Building the company
                <span className="block text-black/30">
                  one step at a time.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-black/50">
                Dynamic Homes is at the beginning of its journey. Our focus is
                to establish a strong identity, maintain professional
                standards and build meaningful relationships in the real
                estate sector.
              </p>

              <Link
                href="/contact"
                className="group mt-9 inline-flex items-center gap-3 bg-[#111111] px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-[#B17A3A]"
              >
                Start a conversation

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

            </div>

            {/* Contact card */}
            <div className="border border-black/10 bg-[#F7F5F0] p-7 sm:p-9">

              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#B17A3A]">
                Contact
              </p>

              <div className="mt-8 space-y-7">

                <ContactItem
                  label="Phone"
                  value={COMPANY.phone}
                  href={`tel:${COMPANY.phone.replace(/\s/g, "")}`}
                  icon={Phone}
                />

                <ContactItem
                  label="Email"
                  value={COMPANY.email}
                  href={`mailto:${COMPANY.email}`}
                  icon={ArrowUpRight}
                />

              </div>

              <div className="mt-9 border-t border-black/10 pt-7">

                <p className="text-xs leading-6 text-black/40">
                  For enquiries, property discussions and general information,
                  contact the Dynamic Homes team directly.
                </p>

              </div>

            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="bg-[#080808] text-white">

        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <motion.div
            {...fadeUp}
            className="relative overflow-hidden border border-[#B17A3A]/30 bg-[#101010] px-7 py-12 sm:px-12 lg:px-16 lg:py-16"
          >

            {/* Architectural circle */}
            <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-[#B17A3A]/10" />

            <div className="relative flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">

              <div className="max-w-3xl">

                <p className="text-sm font-medium text-[#D5A65B]">
                  Let&apos;s connect
                </p>

                <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                  Have a property
                  <span className="block text-white/35">
                    conversation with us.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-base leading-7 text-white/40">
                  Whether you are exploring an opportunity or simply want to
                  know more about Dynamic Homes, our team is available to
                  speak with you.
                </p>

              </div>

              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 bg-[#B17A3A] px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-[#C99545]"
              >
                Contact Dynamic Homes

                <ArrowRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

            </div>

          </motion.div>

        </div>
      </section>

      {/* =====================================================
          FOOTER INFO
      ===================================================== */}

      <section className="bg-[#F7F5F0]">

        <div className="mx-auto max-w-[1440px] px-5 py-8 sm:px-8 lg:px-12">

          <div className="flex flex-col gap-4 border-t border-black/10 pt-6 text-xs text-black/40 sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} {COMPANY.name}
            </p>

            <p>
              CIN: {COMPANY.cin}
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}


/* =========================================================
   COMPONENTS
========================================================= */

function CompanyDetail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="border-b border-black/10 p-6 sm:p-7 lg:p-8">
      <p className="text-xs font-medium text-black/35">
        {label}
      </p>

      <p className="mt-3 break-words text-sm font-medium leading-6 text-black">
        {value}
      </p>
    </div>
  );
}


function Principle({
  number,
  icon: Icon,
  title,
  text,
}: {
  number: string;
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="border-b border-black/10 p-7 transition-colors hover:bg-[#F7F5F0] sm:p-9">

      <div className="flex items-start justify-between">

        <span className="font-display text-3xl text-[#B17A3A]/60">
          {number}
        </span>

        <div className="flex h-10 w-10 items-center justify-center border border-black/10 text-[#B17A3A]">
          <Icon size={18} strokeWidth={1.5} />
        </div>

      </div>

      <h3 className="mt-8 font-display text-2xl text-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-black/45">
        {text}
      </p>

    </div>
  );
}


function ContactItem({
  label,
  value,
  href,
  icon: Icon,
}: {
  label: string;
  value: string;
  href: string;
  icon: React.ElementType;
}) {
  return (
    <a
      href={href}
      className="group flex items-center justify-between border-b border-black/10 pb-6"
    >

      <div>

        <p className="text-xs text-black/35">
          {label}
        </p>

        <p className="mt-2 text-sm font-medium text-black transition-colors group-hover:text-[#A66F31]">
          {value}
        </p>

      </div>

      <Icon
        size={17}
        className="text-[#B17A3A] transition-transform group-hover:translate-x-1"
      />

    </a>
  );
}