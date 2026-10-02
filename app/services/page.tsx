"use client";

import { SERVICES } from "@/app/data/services";

import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  Compass,
  KeyRound,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from "lucide-react";

import Link from "next/link";
import { motion } from "framer-motion";

const ICON_MAP: Record<string, any> = {
  Compass,
  KeyRound,
  ShieldCheck,
  TrendingUp,
};

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, ease: "easeOut" },
} as const;

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F7F5F0] text-[#111111]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#080808] text-white">

        {/* Architectural lines */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.055]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(to right, #ffffff 1px, transparent 1px),
                linear-gradient(to bottom, #ffffff 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
          />
        </div>

        {/* Gold architectural glow */}
        <div className="pointer-events-none absolute right-[-180px] top-[-180px] h-[500px] w-[500px] rounded-full bg-[#B17A3A]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-[1440px] px-5 pb-20 pt-32 sm:px-8 lg:px-12 lg:pb-28 lg:pt-44">

          <div className="grid items-end gap-14 lg:grid-cols-[1.25fr_0.75fr]">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-[#C99545]" />

                <span className="text-xs font-medium tracking-[0.18em] text-[#D5A65B]">
                  DYNAMIC HOMES
                </span>
              </div>

              <h1 className="max-w-5xl font-display text-[clamp(3rem,7vw,7rem)] font-medium leading-[0.92] tracking-[-0.045em]">
                Property decisions
                <span className="block text-white/45">
                  made with clarity.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-base leading-8 text-white/60 sm:text-lg">
                Buying, selling or investing in property should feel
                straightforward. We bring the right information, people and
                guidance together so you can move forward with confidence.
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 bg-[#B17A3A] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C99545]"
                >
                  Talk to our team
                  <ArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-3 border border-white/15 px-7 py-4 text-sm text-white/75 transition-all hover:border-white/35 hover:text-white"
                >
                  Explore our services
                  <ChevronRight size={16} />
                </a>
              </div>
            </motion.div>

            {/* Right information panel */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="lg:pb-2"
            >
              <div className="border-l border-[#B17A3A]/40 pl-7">

                <p className="text-sm leading-7 text-white/55">
                  Every property is different. Every buyer has different
                  priorities. Our role is to understand both before helping
                  you take the next step.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-7 border-t border-white/10 pt-7">
                  <HeroPoint
                    number="01"
                    title="Understand"
                    text="Your requirement"
                  />

                  <HeroPoint
                    number="02"
                    title="Evaluate"
                    text="The opportunity"
                  />

                  <HeroPoint
                    number="03"
                    title="Guide"
                    text="The next step"
                  />

                  <HeroPoint
                    number="04"
                    title="Support"
                    text="The journey"
                  />
                </div>
              </div>
            </motion.div>

          </div>

          {/* Bottom trust strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 grid border-y border-white/10 sm:grid-cols-3"
          >
            <TrustItem
              icon={<Compass size={19} />}
              title="Property Guidance"
              text="Practical advice"
            />

            <TrustItem
              icon={<ShieldCheck size={19} />}
              title="Careful Evaluation"
              text="Details that matter"
            />

            <TrustItem
              icon={<TrendingUp size={19} />}
              title="Long-Term Thinking"
              text="Decisions beyond today"
            />
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          INTRODUCTION
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <motion.div
            {...fadeUp}
            className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"
          >

            <div>
              <p className="text-sm font-semibold text-[#B17A3A]">
                Our approach
              </p>

              <h2 className="mt-4 max-w-md font-display text-4xl leading-tight tracking-[-0.025em] text-[#111111] sm:text-5xl">
                Less confusion.
                <span className="block text-black/35">
                  Better decisions.
                </span>
              </h2>
            </div>

            <div className="max-w-3xl lg:pt-3">
              <p className="text-lg leading-8 text-black/65">
                Real estate involves more than finding a property. There are
                locations to understand, documents to review, possibilities
                to consider and decisions that can affect you for years.
              </p>

              <p className="mt-6 text-base leading-8 text-black/50">
                Our services are designed around those moments. We keep the
                process understandable, practical and personal—whether you
                are buying your first property or making a larger investment.
              </p>
            </div>

          </motion.div>

        </div>
      </section>

      {/* =========================================================
          SERVICE NAVIGATION
      ========================================================= */}
      <section
        id="services"
        className="sticky top-0 z-30 border-y border-black/10 bg-[#F7F5F0]/95 backdrop-blur-xl"
      >
        <div className="mx-auto max-w-[1440px] overflow-x-auto px-5 sm:px-8 lg:px-12">
          <div className="flex min-w-max">

            {SERVICES.map((service, index) => (
              <a
                key={service.id}
                href={`#${service.slug}`}
                className="group flex items-center gap-3 border-r border-black/10 px-5 py-4 text-sm transition-colors first:border-l hover:bg-white sm:px-7"
              >
                <span className="font-display text-sm text-[#B17A3A]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="text-black/55 group-hover:text-black">
                  {service.title}
                </span>
              </a>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          SERVICES
      ========================================================= */}
      <section className="bg-[#F7F5F0]">

        {SERVICES.map((service, index) => {
          const IconComp = ICON_MAP[service.icon] || Compass;
          const reversed = index % 2 !== 0;

          return (
            <motion.article
              {...fadeUp}
              id={service.slug}
              key={service.id}
              className="scroll-mt-20 border-b border-black/10"
            >

              <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">

                <div
                  className={`grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 ${reversed ? "lg:grid-cols-[1.28fr_0.72fr]" : ""
                    }`}
                >

                  {/* =================================================
                      VISUAL / NUMBER PANEL
                  ================================================= */}
                  <div
                    className={`relative min-h-[390px] overflow-hidden bg-[#0A0A0A] p-7 text-white sm:min-h-[430px] lg:p-10 ${reversed ? "lg:order-2" : ""
                      }`}
                  >

                    {/* Architectural lines */}
                    <div className="pointer-events-none absolute inset-0 opacity-[0.06]">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `
                            linear-gradient(to right, white 1px, transparent 1px),
                            linear-gradient(to bottom, white 1px, transparent 1px)
                          `,
                          backgroundSize: "70px 70px",
                        }}
                      />
                    </div>

                    {/* Large number */}
                    <div className="absolute right-5 top-[-15px] font-display text-[170px] leading-none text-white/[0.045] sm:text-[210px]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="relative flex h-full flex-col justify-between">

                      <div>
                        <div className="flex h-14 w-14 items-center justify-center border border-[#C99545]/40 bg-[#B17A3A]/10 text-[#D5A65B]">
                          <IconComp size={25} strokeWidth={1.5} />
                        </div>

                        <p className="mt-8 text-xs font-medium uppercase tracking-[0.18em] text-[#D5A65B]">
                          Service {String(index + 1).padStart(2, "0")}
                        </p>

                        <h2 className="mt-3 max-w-sm font-display text-3xl leading-tight sm:text-4xl">
                          {service.title}
                        </h2>
                      </div>

                      <div className="mt-16 border-t border-white/10 pt-6">
                        <p className="text-sm leading-6 text-white/45">
                          A considered approach built around your property
                          requirement and your next decision.
                        </p>
                      </div>

                    </div>
                  </div>

                  {/* =================================================
                      CONTENT
                  ================================================= */}
                  <div
                    className={`flex flex-col justify-center ${reversed ? "lg:order-1" : ""
                      }`}
                  >

                    <p className="max-w-3xl text-lg leading-8 text-black/65 sm:text-xl">
                      {service.fullDesc}
                    </p>

                    {/* Benefits */}
                    <div className="mt-10">

                      <div className="mb-5 flex items-center justify-between border-b border-black/10 pb-4">
                        <h3 className="text-sm font-semibold text-black">
                          What you can expect
                        </h3>

                        <span className="text-xs text-black/35">
                          {service.benefits.length} key points
                        </span>
                      </div>

                      <div className="grid gap-x-8 sm:grid-cols-2">
                        {service.benefits.map((benefit, i) => (
                          <div
                            key={i}
                            className="flex gap-3 border-b border-black/[0.08] py-4"
                          >
                            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B17A3A] text-white">
                              <Check size={12} strokeWidth={2.5} />
                            </span>

                            <span className="text-sm leading-6 text-black/65">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>

                    {/* Process */}
                    <div className="mt-10">

                      <h3 className="mb-6 text-sm font-semibold text-black">
                        How we work
                      </h3>

                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {service.processSteps.map((step, i) => (
                          <div
                            key={i}
                            className="group relative border border-black/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#B17A3A]/40"
                          >

                            <div className="mb-6 flex items-center justify-between">
                              <span className="font-display text-2xl text-[#B17A3A]">
                                {String(i + 1).padStart(2, "0")}
                              </span>

                              {i !== service.processSteps.length - 1 && (
                                <ChevronRight
                                  size={15}
                                  className="text-black/15"
                                />
                              )}
                            </div>

                            <h4 className="text-sm font-semibold text-black">
                              {step.title}
                            </h4>

                            <p className="mt-2 text-xs leading-5 text-black/45">
                              {step.desc}
                            </p>

                          </div>
                        ))}
                      </div>

                    </div>

                    {/* CTA */}
                    <div className="mt-10 flex flex-col gap-5 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#111111] text-white">
                          <Phone size={14} />
                        </div>

                        <div>
                          <p className="text-xs font-semibold text-black">
                            Have a question?
                          </p>

                          <p className="text-xs text-black/40">
                            Our team is happy to help.
                          </p>
                        </div>
                      </div>

                      <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 text-sm font-semibold text-[#9A672F]"
                      >
                        Talk to our team
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </Link>

                    </div>

                  </div>

                </div>
              </div>

            </motion.article>
          );
        })}

      </section>

      {/* =========================================================
          WHY DYNAMIC HOMES
      ========================================================= */}
      <section className="bg-white">

        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <motion.div
            {...fadeUp}
            className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"
          >

            <div>
              <p className="text-sm font-semibold text-[#B17A3A]">
                Why work with us
              </p>

              <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
                A more personal
                <span className="block text-black/35">
                  way to approach property.
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2">

              <WhyItem
                number="01"
                title="Clear communication"
                text="We explain important information in a straightforward way, without unnecessary complexity."
              />

              <WhyItem
                number="02"
                title="Practical guidance"
                text="Our focus stays on what matters to your particular property requirement."
              />

              <WhyItem
                number="03"
                title="Attention to detail"
                text="Important details deserve time, attention and a careful approach."
              />

              <WhyItem
                number="04"
                title="Long-term perspective"
                text="We look beyond the immediate transaction and consider the bigger picture."
              />

            </div>

          </motion.div>

        </div>
      </section>

      {/* =========================================================
          DARK STATEMENT
      ========================================================= */}
      <section className="bg-[#080808] text-white">

        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">

          <motion.div
            {...fadeUp}
            className="grid gap-12 lg:grid-cols-[1fr_auto]"
          >

            <div className="max-w-4xl">

              <div className="mb-7 flex items-center gap-3">
                <Sparkles
                  size={17}
                  className="text-[#D5A65B]"
                />

                <span className="text-sm text-[#D5A65B]">
                  Our philosophy
                </span>
              </div>

              <h2 className="font-display text-4xl leading-tight tracking-[-0.025em] sm:text-5xl lg:text-6xl">
                Good property decisions begin with
                <span className="text-white/40">
                  {" "}good conversations.
                </span>
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-8 text-white/45">
                Before talking about numbers, locations or properties, we
                listen. Understanding what you actually need is the first
                step towards giving useful guidance.
              </p>

            </div>

            <div className="flex items-end">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 border border-[#B17A3A]/50 px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-[#B17A3A]"
              >
                Start a conversation
                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>

          </motion.div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#F7F5F0]">

        <div className="mx-auto max-w-[1440px] px-5 py-16 sm:px-8 lg:px-12 lg:py-24">

          <motion.div
            {...fadeUp}
            className="relative overflow-hidden bg-[#B17A3A] px-7 py-12 text-white sm:px-12 lg:px-16 lg:py-16"
          >

            {/* Decorative circle */}
            <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[350px] w-[350px] rounded-full border border-white/10" />

            <div className="relative flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">

              <div className="max-w-3xl">

                <p className="text-sm font-medium text-white/70">
                  Let's take the next step
                </p>

                <h2 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                  Tell us what you are looking for.
                </h2>

                <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
                  Whether you already have a property in mind or are just
                  beginning your search, our team can help you understand
                  what comes next.
                </p>

              </div>

              <Link
                href="/contact"
                className="group inline-flex shrink-0 items-center justify-center gap-3 bg-[#080808] px-7 py-4 text-sm font-semibold text-white transition-all hover:bg-[#151515]"
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

    </main>
  );
}


/* =============================================================
   SMALL COMPONENTS
============================================================= */

function HeroPoint({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <span className="font-display text-xs text-[#C99545]">
        {number}
      </span>

      <p className="mt-2 text-sm font-medium text-white/85">
        {title}
      </p>

      <p className="mt-1 text-xs text-white/35">
        {text}
      </p>
    </div>
  );
}


function TrustItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 border-b border-white/10 px-2 py-6 last:border-b-0 sm:border-b-0 sm:border-r sm:px-7 sm:py-7 sm:last:border-r-0">
      <div className="text-[#D5A65B]">
        {icon}
      </div>

      <div>
        <p className="text-sm font-medium text-white/85">
          {title}
        </p>

        <p className="mt-1 text-xs text-white/35">
          {text}
        </p>
      </div>
    </div>
  );
}


function WhyItem({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border-t border-black/10 p-6 first:border-t sm:nth-[n+3]:border-t">
      <span className="font-display text-sm text-[#B17A3A]">
        {number}
      </span>

      <h3 className="mt-5 text-lg font-semibold text-black">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-black/45">
        {text}
      </p>
    </div>
  );
}