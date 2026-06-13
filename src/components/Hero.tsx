"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster=""
      >
        <source src="/video/bartender.mp4" type="video/mp4" />
      </video>

      {/* Dark Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0.2))",
        }}
      />

      {/* Extra bottom gradient for smooth transition */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{
          background:
            "linear-gradient(to top, #0D0B08, transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            {/* Since badge */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-6 font-medium"
            >
              ✦ Since 2026
            </motion.p>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="font-[family-name:var(--font-playfair)] text-5xl sm:text-6xl lg:text-7xl xl:text-[80px] font-bold text-white leading-[1.05] mb-6"
            >
              Smooth.
              <br />
              Bold.
              <br />
              <span className="text-[#C9A84C]">Unforgettable.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-[#F5EDD6]/70 text-base lg:text-lg leading-relaxed max-w-[420px] mb-10"
            >
              Dark Moon Whisky is crafted for bold spirits—those who appreciate
              deep flavor, smooth finishes, and unforgettable moments born from
              timeless tradition and masterful distillation.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <a
                href="#collection"
                id="hero-cta"
                className="inline-flex items-center gap-2 bg-[#C9A84C] text-[#0D0B08] font-semibold text-sm tracking-wider uppercase rounded-full px-8 py-4 gold-glow transition-all duration-300 hover:bg-[#d4b85d]"
              >
                Explore now
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[#8A7A5A] text-xs tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-[1px] h-8 bg-gradient-to-b from-[#C9A84C] to-transparent"
        />
      </motion.div>
    </section>
  );
}
