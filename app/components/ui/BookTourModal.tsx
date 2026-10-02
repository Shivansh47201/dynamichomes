"use client";

import { Property, PROPERTIES } from "@/app/data/properties";
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { submitFormToGoogleSheets } from "@/app/lib/submitForm";

interface BookTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedProperty?: Property | null;
}

export default function BookTourModal({ isOpen, onClose, selectedProperty }: BookTourModalProps) {
  const [propertyId, setPropertyId] = useState(selectedProperty?.id || PROPERTIES[0].id);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("11:00 AM - 1:00 PM");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const activeProp = PROPERTIES.find((p) => p.id === propertyId) || selectedProperty || PROPERTIES[0];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitFormToGoogleSheets({
      type: "schedule",
      name,
      phone,
      email,
      property: activeProp.title,
      date,
      timeSlot,
      source: "Schedule Private Viewing Modal",
    });
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-white/15 bg-[#121212] text-white shadow-2xl p-6 sm:p-8 my-auto"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white hover:bg-white hover:text-black transition-all"
          >
            <X size={16} />
          </button>

          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-8">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400 mb-6">
                <CheckCircle2 size={36} />
              </div>
              <span className="text-[10px] font-semibold tracking-widest uppercase text-[#E3B968]">
                Viewing Reserved
              </span>
              <h3 className="font-display text-2xl font-medium text-white mt-1">
                Private Tour Confirmed
              </h3>
              <p className="text-xs text-white/70 max-w-md mt-3 font-light leading-relaxed">
                Thank you <strong className="text-white">{name}</strong>. Our senior luxury advisor, <strong className="text-[#E3B968]">{activeProp.agent.name}</strong>, will contact you at <strong className="text-white">{phone}</strong> within 2 hours to confirm your private chauffeur arrangements for <strong className="text-[#E3B968]">{activeProp.title}</strong> on <strong className="text-white">{date || "your selected date"}</strong>.
              </p>

              <div className="mt-8 rounded-xl border border-white/10 bg-[#171717] p-4 w-full text-left">
                <div className="text-[10px] uppercase text-white/40 tracking-wider">Property Details</div>
                <div className="text-xs font-semibold text-white mt-1">{activeProp.title}</div>
                <div className="text-[11px] text-white/60">{activeProp.location}</div>
              </div>

              <button
                onClick={handleReset}
                className="mt-8 rounded-lg border border-[#B17A3A] bg-linear-to-r from-[#8F5D22] via-[#B17A3A] to-[#8F5D22] px-8 py-3 text-xs font-semibold uppercase tracking-wider text-white shadow-lg hover:opacity-95 transition-all"
              >
                Close & Return
              </button>
            </div>
          ) : (
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#B17A3A]/40 bg-[#B17A3A]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#E3B968]">
                <Sparkles size={12} />
                <span>White-Glove VIP Service</span>
              </div>
              <h3 className="font-display text-2xl font-medium text-white mt-2">
                Schedule Private Viewing
              </h3>
              <p className="text-xs text-white/60 font-light mt-1">
                Experience architectural craftsmanship in person. Includes private tour and executive consultation.
              </p>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                {/* Select Property */}
                <div>
                  <label className="text-[10px] font-semibold uppercase tracking-wider text-white/60 block mb-1.5">
                    Select Residence
                  </label>
                  <select
                    value={propertyId}
                    onChange={(e) => setPropertyId(e.target.value)}
                    className="w-full rounded-lg border border-white/15 bg-black/60 px-4 py-3 text-xs text-white focus:border-[#B17A3A] focus:outline-none"
                  >
                    {PROPERTIES.map((p) => (
                      <option key={p.id} value={p.id} className="bg-[#121212]">
                        {p.title} — {p.price} ({p.sector})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Time Slot Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-white/60 block mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      required
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded-lg border border-white/15 bg-black/60 px-4 py-3 text-xs text-white focus:border-[#B17A3A] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-white/60 block mb-1.5">
                      Time Window
                    </label>
                    <select
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                      className="w-full rounded-lg border border-white/15 bg-black/60 px-4 py-3 text-xs text-white focus:border-[#B17A3A] focus:outline-none"
                    >
                      <option value="10:00 AM - 12:00 PM">10:00 AM - 12:00 PM</option>
                      <option value="12:00 PM - 2:00 PM">12:00 PM - 2:00 PM</option>
                      <option value="2:00 PM - 4:00 PM">2:00 PM - 4:00 PM</option>
                      <option value="4:00 PM - 6:00 PM">4:00 PM - 6:00 PM (Sunset Viewing)</option>
                    </select>
                  </div>
                </div>

                {/* Personal Information */}
                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-[10px] font-semibold uppercase tracking-wider text-white/60 block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rajesh Singhania"
                      className="w-full rounded-lg border border-white/15 bg-black/60 px-4 py-3 text-xs text-white placeholder:text-white/30 focus:border-[#B17A3A] focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-semibold uppercase tracking-wider text-white/60 block mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full rounded-lg border border-white/15 bg-black/60 px-4 py-3 text-xs text-white placeholder:text-white/30 focus:border-[#B17A3A] focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold uppercase tracking-wider text-white/60 block mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full rounded-lg border border-white/15 bg-black/60 px-4 py-3 text-xs text-white placeholder:text-white/30 focus:border-[#B17A3A] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg border border-[#B17A3A] bg-linear-to-r from-[#8F5D22] via-[#B17A3A] to-[#8F5D22] py-4 text-xs font-semibold uppercase tracking-widest text-white shadow-xl hover:opacity-95 transition-all mt-4"
                >
                  Confirm Viewing Reservation
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
