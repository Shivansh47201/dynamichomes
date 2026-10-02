"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";
import { vamiEnclave } from "@/app/data/projects";

import { submitFormToGoogleSheets } from "@/app/lib/submitForm";

const COMPANY = {
  name: vamiEnclave.contact.company,
  phone: vamiEnclave.contact.phone,
  email: vamiEnclave.contact.email,
  officeAddress:
    "Office No. 604/6F, Tradex Tower-1, Alpha 1, Alpha Greater Noida, Noida, Gautam Buddha Nagar, Uttar Pradesh, India, 201310",
  address: vamiEnclave.contact.address,
};

const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.address)}`;
const officeMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(COMPANY.officeAddress)}`;

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = (formData.get("name") as string) || "";
    const phone = (formData.get("phone") as string) || "";
    const email = (formData.get("email") as string) || "";
    const topic = (formData.get("interest") as string) || "General Enquiry";
    const message = (formData.get("message") as string) || "";

    submitFormToGoogleSheets({
      type: "enquiry",
      name,
      phone,
      email,
      topic,
      message,
      source: "Contact Page Enquiry Form",
    });

    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-white text-[#111111]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="bg-[#0A0A0A] px-5 pb-20 pt-32 text-white sm:px-8 lg:px-12 lg:pb-24 lg:pt-40">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#C99545]">
              Contact Us
            </p>

            <h1 style={{ fontFamily: "var(--font-bodoni)" }} className="mt-5 text-5xl font-medium leading-tight sm:text-6xl lg:text-7xl">
              Let&apos;s talk.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              Have a question about VAMI Enclave plot sizes, current pricing or a site visit? Send the project team an enquiry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CONTACT CONTENT
      ========================================================= */}
      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">

            {/* =====================================================
                CONTACT INFORMATION
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#B17A3A]">
                Get in touch
              </p>

              <h2 style={{ fontFamily: "var(--font-bodoni)" }} className="mt-4 text-4xl font-medium leading-tight sm:text-5xl">
                We&apos;re here to help.
              </h2>

              <p className="mt-5 max-w-md text-[15px] leading-7 text-black/55">
                Reach out to us directly using the details below. Our team
                will be happy to assist you with your enquiry.
              </p>

              <div className="mt-10 border-t border-black/10">

                {/* Email */}
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="group flex items-start gap-5 border-b border-black/10 py-6"
                >
                  <div className="mt-1 text-[#B17A3A]">
                    <Mail size={21} strokeWidth={1.6} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-black/40">
                      Email
                    </p>

                    <p className="mt-2 break-all text-lg font-medium group-hover:text-[#B17A3A]">
                      {COMPANY.email}
                    </p>
                  </div>
                </a>

                {/* Office Address */}
                <div className="flex items-start gap-5 border-b border-black/10 py-6">
                  <div className="mt-1 text-[#B17A3A]">
                    <MapPin size={21} strokeWidth={1.6} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-black/40">
                      Office Address
                    </p>

                    <p className="mt-2 max-w-md text-[15px] leading-7 text-black/65">
                      {COMPANY.officeAddress}
                    </p>
                    <a href={officeMapUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#8F5D22] hover:text-[#B17A3A]">
                      <MapPin size={15} /> Open office in Google Maps <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-5 border-b border-black/10 py-6">
                  <div className="mt-1 text-[#B17A3A]">
                    <MapPin size={21} strokeWidth={1.6} />
                  </div>

                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-black/40">
                      Project Location
                    </p>

                    <p className="mt-2 max-w-md text-[15px] leading-7 text-black/65">
                      {COMPANY.address}
                    </p>
                    <a href={mapUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#8F5D22] hover:text-[#B17A3A]">
                      <MapPin size={15} /> Open in Google Maps <ArrowRight size={14} />
                    </a>
                  </div>
                </div>

              </div>

              {/* Company name */}
              <div className="mt-8">
                <p className="text-xs uppercase tracking-[0.12em] text-black/35">
                  Company
                </p>

                <p className="mt-2 text-base font-medium">
                  {COMPANY.name}
                </p>
              </div>
            </motion.div>

            {/* =====================================================
                FORM
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="border border-black/10 bg-[#F8F7F4] p-6 sm:p-8 lg:p-10">

                {!submitted ? (
                  <form onSubmit={handleSubmit}>

                    <div className="mb-8">
                      <h2 style={{ fontFamily: "var(--font-bodoni)" }} className="text-3xl font-medium sm:text-4xl">
                        Send us an enquiry
                      </h2>

                      <p className="mt-3 text-sm leading-6 text-black/50">
                        Fill in your details and tell us how we can help.
                      </p>
                    </div>

                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium"
                      >
                        Full name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your name"
                        className="h-13 w-full border border-black/15 bg-white px-4 text-sm outline-none transition focus:border-[#B17A3A]"
                      />
                    </div>

                    {/* Phone / Email */}
                    <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">

                      <div>
                        <label
                          htmlFor="phone"
                          className="mb-2 block text-sm font-medium"
                        >
                          Phone number
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          placeholder="+91 XXXXX XXXXX"
                          className="h-13 w-full border border-black/15 bg-white px-4 text-sm outline-none transition focus:border-[#B17A3A]"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium"
                        >
                          Email
                        </label>

                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="h-13 w-full border border-black/15 bg-white px-4 text-sm outline-none transition focus:border-[#B17A3A]"
                        />
                      </div>

                    </div>

                    {/* Interest */}
                    <div className="mt-5">
                      <label
                        htmlFor="interest"
                        className="mb-2 block text-sm font-medium"
                      >
                        What can we help you with?
                      </label>

                      <select
                        id="interest"
                        name="interest"
                        className="h-13 w-full border border-black/15 bg-white px-4 text-sm outline-none transition focus:border-[#B17A3A]"
                      >
                        <option>VAMI Enclave — Project Information</option>
                        <option>50 Sq. Yd. Plot</option>
                        <option>100 Sq. Yd. Plot</option>
                        <option>200 Sq. Yd. Plot</option>
                        <option>300 Sq. Yd. Plot</option>
                        <option>Schedule a Site Visit</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div className="mt-5">
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        placeholder="Write your message..."
                        className="w-full resize-none border border-black/15 bg-white px-4 py-3 text-sm leading-6 outline-none transition focus:border-[#B17A3A]"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group mt-7 flex h-13 w-full items-center justify-center gap-2 bg-[#0A0A0A] px-6 text-sm font-medium text-white transition hover:bg-[#B17A3A]"
                    >
                      Send Enquiry

                      <ArrowRight
                        size={17}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>

                  </form>
                ) : (
                  <div className="flex min-h-125 flex-col items-center justify-center text-center">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#B17A3A]/30 bg-white text-[#B17A3A]">
                      <CheckCircle2 size={30} strokeWidth={1.5} />
                    </div>

                    <h2 style={{ fontFamily: "var(--font-bodoni)" }} className="mt-6 text-4xl font-medium">
                      Thank you.
                    </h2>

                    <p className="mt-4 max-w-md text-sm leading-7 text-black/55">
                      Your enquiry has been received. We appreciate you
                      reaching out to Dynamic Homes.
                    </p>

                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="mt-7 border border-black/15 bg-white px-6 py-3 text-sm font-medium transition hover:border-[#B17A3A] hover:text-[#B17A3A]"
                    >
                      Send another enquiry
                    </button>

                  </div>
                )}

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =========================================================
          SIMPLE CTA
      ========================================================= */}
      <section className="bg-[#0A0A0A] px-5 py-14 text-white sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm text-white/50">
              {COMPANY.name}
            </p>

            <p className="mt-1 text-lg">
              VAMI Enclave enquiries · {COMPANY.email}
            </p>
          </div>

          <a
            href={`mailto:${COMPANY.email}?subject=${encodeURIComponent("VAMI Enclave project enquiry")}`}
            className="inline-flex w-fit items-center gap-2 border border-white/20 px-6 py-3 text-sm font-medium transition hover:border-[#D5A65B] hover:text-[#D5A65B]"
          >
            <Mail size={16} />
            Email the project team
          </a>

        </div>
      </section>

    </main>
  );
}