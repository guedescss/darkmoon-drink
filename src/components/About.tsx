"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="relative bg-[#0D0B08] py-24 lg:py-32 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
              Our Story
            </p>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#F5EDD6] mb-2 leading-tight">
              Crafted Since 2026
            </h2>
            <div className="w-16 h-[2px] bg-[#C9A84C] mb-8" />

            <p className="text-[#F5EDD6]/70 text-base leading-relaxed mb-6">
              For over two decades, Dark Moon has been the whisky of choice for
              those who refuse to settle. Born in the quiet hills of Scotland,
              our master distillers have perfected the art of creating bold,
              complex flavors that linger on the palate and in the memory.
            </p>
            <p className="text-[#F5EDD6]/70 text-base leading-relaxed mb-8">
              Every bottle tells a story of patience, precision, and passion.
              From hand-selected barley to charred oak casks aged in our
              centuries-old cellars, Dark Moon is an experience crafted for
              those who appreciate the finer things in life.
            </p>

            <div className="flex items-center gap-8">
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C9A84C]">
                  100%
                </p>
                <p className="text-[#8A7A5A] text-xs tracking-wider uppercase mt-1">
                  Pure Malt
                </p>
              </div>
              <div className="w-[1px] h-12 bg-[#C9A84C]/20" />
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C9A84C]">
                  12 yrs
                </p>
                <p className="text-[#8A7A5A] text-xs tracking-wider uppercase mt-1">
                  Minimum Age
                </p>
              </div>
              <div className="w-[1px] h-12 bg-[#C9A84C]/20" />
              <div>
                <p className="font-[family-name:var(--font-playfair)] text-3xl font-bold text-[#C9A84C]">
                  40%
                </p>
                <p className="text-[#8A7A5A] text-xs tracking-wider uppercase mt-1">
                  ABV
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-[#C9A84C]/15">
              {/* Elegant whisky glass illustration using CSS gradients */}
              <div className="absolute inset-0 bg-[#1A1610] flex items-center justify-center">
                <div className="relative w-full h-full flex items-center justify-center">
                  {/* Ambient glow */}
                  <div
                    className="absolute w-72 h-72 rounded-full blur-[100px] opacity-30"
                    style={{
                      background:
                        "radial-gradient(circle, #C9A84C 0%, transparent 70%)",
                    }}
                  />
                  {/* Whisky glass SVG */}
                  <svg
                    viewBox="0 0 200 320"
                    className="w-48 lg:w-56 h-auto relative z-10"
                    fill="none"
                  >
                    {/* Glass body */}
                    <path
                      d="M40 80 L55 240 C55 260, 145 260, 145 240 L160 80 Z"
                      fill="none"
                      stroke="#C9A84C"
                      strokeWidth="1.5"
                      opacity="0.6"
                    />
                    {/* Whisky liquid */}
                    <path
                      d="M52 180 L55 240 C55 260, 145 260, 145 240 L148 180 Z"
                      fill="#C9A84C"
                      opacity="0.15"
                    />
                    <path
                      d="M52 180 C70 185, 130 175, 148 180"
                      fill="none"
                      stroke="#C9A84C"
                      strokeWidth="1"
                      opacity="0.4"
                    />
                    {/* Glass rim */}
                    <ellipse
                      cx="100"
                      cy="80"
                      rx="60"
                      ry="12"
                      fill="none"
                      stroke="#C9A84C"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    {/* Stem */}
                    <line
                      x1="100"
                      y1="258"
                      x2="100"
                      y2="290"
                      stroke="#C9A84C"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    {/* Base */}
                    <ellipse
                      cx="100"
                      cy="292"
                      rx="35"
                      ry="8"
                      fill="none"
                      stroke="#C9A84C"
                      strokeWidth="1.5"
                      opacity="0.5"
                    />
                    {/* Sparkle dots */}
                    <circle cx="70" cy="120" r="1.5" fill="#C9A84C" opacity="0.6" />
                    <circle cx="130" cy="140" r="1" fill="#C9A84C" opacity="0.4" />
                    <circle cx="90" cy="200" r="1.5" fill="#C9A84C" opacity="0.5" />
                  </svg>
                  {/* Brand text */}
                  <p className="absolute bottom-12 text-[#C9A84C]/30 font-[family-name:var(--font-playfair)] text-lg tracking-[0.4em] uppercase">
                    Dark Moon
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative corner accents */}
            <div className="absolute -top-3 -right-3 w-12 h-12 border-t-2 border-r-2 border-[#C9A84C]/30 rounded-tr-lg" />
            <div className="absolute -bottom-3 -left-3 w-12 h-12 border-b-2 border-l-2 border-[#C9A84C]/30 rounded-bl-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
