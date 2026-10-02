"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, CheckCircle2, ArrowRight, Sparkles, Bell } from "lucide-react";
import { submitFormToGoogleSheets } from "@/app/lib/submitForm";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!email && !phone) {
      setErrorMsg("Please enter your email or phone number.");
      return;
    }

    setIsSubmitting(true);

    try {
      await submitFormToGoogleSheets({
        type: "subscribe",
        email: email || undefined,
        phone: phone || undefined,
        topic: "VIP Plot Availability Alerts & Price Updates",
        source: "Homepage Subscribe Bar",
      });

      setSubmitted(true);
      setEmail("");
      setPhone("");
    } catch (err) {
      console.error(err);
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-[#FAF9F6] py-20 sm:py-28 text-[#0A0A0A] overflow-hidden border-t border-black/10">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[600px] rounded-full bg-[#B17A3A]/10 blur-[160px]" />

      <div className="relative z-10 mx-auto w-[calc(100%-32px)] max-w-[1200px] sm:w-[calc(100%-48px)]">
        <div className="relative rounded-3xl border border-black/10 bg-white p-8 sm:p-14 shadow-2xl overflow-hidden">
          
          {/* Top Gold Accent Line */}
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#B17A3A] via-[#E3B968] to-[#B17A3A]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B17A3A]/40 bg-[#B17A3A]/10 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-widest text-[#8F5D22] mb-4">
                <Bell size={13} />
                <span>Priority Access & Alerts</span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl font-medium text-[#0A0A0A] leading-tight">
                Subscribe for Pre-Launch Plot Releases
              </h2>

              <p className="mt-4 text-xs sm:text-sm text-black/60 font-light leading-relaxed">
                Be the first to receive notifications on newly listed plots in VAMI Enclave, infrastructure updates along the 130m Jewar Airport expressway, and exclusive investor pricing.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-6 text-xs font-medium text-black/70">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#8F5D22]" />
                  <span>No Spam, Only High-Value Land Deals</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-[#8F5D22]" />
                  <span>Instant WhatsApp / Email Alerts</span>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-6">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="rounded-2xl border border-[#B17A3A]/30 bg-[#B17A3A]/10 p-8 text-center"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#8F5D22] text-white mb-4">
                    <CheckCircle2 size={28} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#0A0A0A]">
                    Subscription Confirmed!
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-black/70 font-light">
                    Thank you for subscribing. You will now receive priority notifications for newly available plots and infrastructure news.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8F5D22] hover:underline"
                  >
                    Subscribe Another Contact
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-black/60 mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="yourname@domain.com"
                        className="w-full rounded-xl border border-black/15 bg-[#FAF9F6] py-3.5 pl-12 pr-4 text-xs sm:text-sm text-[#0A0A0A] placeholder-black/35 focus:border-[#8F5D22] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-black/60 mb-2">
                      Phone / WhatsApp Number (Optional)
                    </label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-black/40" />
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-xl border border-black/15 bg-[#FAF9F6] py-3.5 pl-12 pr-4 text-xs sm:text-sm text-[#0A0A0A] placeholder-black/35 focus:border-[#8F5D22] focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  {errorMsg && (
                    <p className="text-xs font-medium text-red-600">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2.5 rounded-xl border border-[#B17A3A] bg-[#9A6426] py-4 text-xs font-semibold uppercase tracking-[0.16em] text-white shadow-lg transition-all hover:bg-[#7F511D] disabled:opacity-50"
                  >
                    <span>{isSubmitting ? "Subscribing..." : "Get Priority VIP Alerts"}</span>
                    <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
