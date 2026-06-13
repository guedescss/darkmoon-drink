"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    time: "",
    guests: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Frontend only — no backend
    alert("Booking request submitted! We'll contact you shortly.");
  };

  return (
    <section id="booking" className="relative bg-[#0D0B08] py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Reserve
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#F5EDD6] mb-2 leading-tight">
              Book Your Experience
            </h2>
            <div className="w-16 h-[2px] bg-[#C9A84C] mb-8" />
            <p className="text-[#F5EDD6]/60 text-base leading-relaxed mb-10">
              Step into the world of Dark Moon. Reserve your table at our
              exclusive bar and immerse yourself in an evening of premium
              whisky, ambient atmosphere, and unforgettable moments.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="booking-name"
                  className="text-[#8A7A5A] text-xs tracking-[0.15em] uppercase mb-2 block"
                >
                  Full Name
                </label>
                <input
                  id="booking-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-[#1A1610] border border-[#C9A84C]/20 rounded-lg px-4 py-3.5 text-[#F5EDD6] text-sm placeholder:text-[#8A7A5A]/40 focus:outline-none focus:border-[#C9A84C]/60 transition-colors duration-300"
                  required
                />
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="booking-date"
                    className="text-[#8A7A5A] text-xs tracking-[0.15em] uppercase mb-2 block"
                  >
                    Date
                  </label>
                  <input
                    id="booking-date"
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full bg-[#1A1610] border border-[#C9A84C]/20 rounded-lg px-4 py-3.5 text-[#F5EDD6] text-sm focus:outline-none focus:border-[#C9A84C]/60 transition-colors duration-300 [color-scheme:dark]"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="booking-time"
                    className="text-[#8A7A5A] text-xs tracking-[0.15em] uppercase mb-2 block"
                  >
                    Time
                  </label>
                  <input
                    id="booking-time"
                    type="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full bg-[#1A1610] border border-[#C9A84C]/20 rounded-lg px-4 py-3.5 text-[#F5EDD6] text-sm focus:outline-none focus:border-[#C9A84C]/60 transition-colors duration-300 [color-scheme:dark]"
                    required
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label
                  htmlFor="booking-guests"
                  className="text-[#8A7A5A] text-xs tracking-[0.15em] uppercase mb-2 block"
                >
                  Number of Guests
                </label>
                <select
                  id="booking-guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-[#1A1610] border border-[#C9A84C]/20 rounded-lg px-4 py-3.5 text-[#F5EDD6] text-sm focus:outline-none focus:border-[#C9A84C]/60 transition-colors duration-300 [color-scheme:dark]"
                  required
                >
                  <option value="" disabled>
                    Select guests
                  </option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5 Guests</option>
                  <option value="6">6+ Guests</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                id="booking-submit"
                className="w-full bg-[#C9A84C] text-[#0D0B08] font-semibold text-sm tracking-wider uppercase rounded-lg py-4 gold-glow hover:bg-[#d4b85d] transition-all duration-300"
              >
                Reserve Now
              </button>
            </form>
          </motion.div>

          {/* Right: Ambient bar illustration */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#C9A84C]/15">
              <div className="absolute inset-0 bg-[#1A1610] flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Ambient light effects */}
                  <div
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-[80px] opacity-15"
                    style={{
                      background: "radial-gradient(circle, #C9A84C, transparent)",
                    }}
                  />
                  <div
                    className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full blur-[60px] opacity-10"
                    style={{
                      background: "radial-gradient(circle, #C9A84C, transparent)",
                    }}
                  />

                  {/* Bar scene SVG */}
                  <svg
                    viewBox="0 0 400 500"
                    className="w-full h-full p-12"
                    fill="none"
                  >
                    {/* Bar counter */}
                    <rect
                      x="30"
                      y="300"
                      width="340"
                      height="8"
                      rx="4"
                      fill="#C9A84C"
                      opacity="0.2"
                    />
                    <rect
                      x="30"
                      y="308"
                      width="340"
                      height="120"
                      rx="4"
                      fill="#C9A84C"
                      opacity="0.05"
                      stroke="#C9A84C"
                      strokeWidth="0.5"
                      strokeOpacity="0.15"
                    />

                    {/* Bottles on shelf */}
                    {[80, 140, 200, 260, 320].map((x, i) => (
                      <g key={i}>
                        <rect
                          x={x - 10}
                          y={180 - i * 8}
                          width="20"
                          height={120 + i * 8}
                          rx="4"
                          fill="#C9A84C"
                          opacity={0.05 + i * 0.02}
                          stroke="#C9A84C"
                          strokeWidth="0.5"
                          strokeOpacity="0.2"
                        />
                        <rect
                          x={x - 6}
                          y={175 - i * 8}
                          width="12"
                          height="10"
                          rx="2"
                          fill="#C9A84C"
                          opacity="0.1"
                        />
                      </g>
                    ))}

                    {/* Shelf line */}
                    <line
                      x1="50"
                      y1="300"
                      x2="350"
                      y2="300"
                      stroke="#C9A84C"
                      strokeWidth="0.5"
                      strokeOpacity="0.2"
                    />

                    {/* Glasses on counter */}
                    <g>
                      <path
                        d="M100 285 L105 298 L95 298 Z"
                        fill="none"
                        stroke="#C9A84C"
                        strokeWidth="0.75"
                        strokeOpacity="0.3"
                      />
                      <line
                        x1="100"
                        y1="298"
                        x2="100"
                        y2="300"
                        stroke="#C9A84C"
                        strokeWidth="0.5"
                        strokeOpacity="0.3"
                      />
                    </g>
                    <g>
                      <path
                        d="M300 280 L308 298 L292 298 Z"
                        fill="#C9A84C"
                        opacity="0.06"
                        stroke="#C9A84C"
                        strokeWidth="0.75"
                        strokeOpacity="0.3"
                      />
                      <line
                        x1="300"
                        y1="298"
                        x2="300"
                        y2="300"
                        stroke="#C9A84C"
                        strokeWidth="0.5"
                        strokeOpacity="0.3"
                      />
                    </g>

                    {/* Hanging lights */}
                    {[120, 200, 280].map((x, i) => (
                      <g key={`light-${i}`}>
                        <line
                          x1={x}
                          y1="0"
                          x2={x}
                          y2="80"
                          stroke="#C9A84C"
                          strokeWidth="0.5"
                          strokeOpacity="0.2"
                        />
                        <circle
                          cx={x}
                          cy="85"
                          r="8"
                          fill="#C9A84C"
                          opacity="0.08"
                          stroke="#C9A84C"
                          strokeWidth="0.5"
                          strokeOpacity="0.3"
                        />
                        <circle
                          cx={x}
                          cy="85"
                          r="20"
                          fill="#C9A84C"
                          opacity="0.03"
                        />
                      </g>
                    ))}

                    {/* Ambient text */}
                    <text
                      x="200"
                      y="460"
                      textAnchor="middle"
                      fill="#C9A84C"
                      opacity="0.15"
                      fontSize="14"
                      fontFamily="serif"
                      letterSpacing="8"
                    >
                      DARK MOON BAR
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            {/* Decorative accents */}
            <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#C9A84C]/30 rounded-tl-lg" />
            <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#C9A84C]/30 rounded-br-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
