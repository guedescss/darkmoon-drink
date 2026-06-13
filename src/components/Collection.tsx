"use client";

import { motion } from "framer-motion";

const whiskies = [
  {
    name: "Dark Moon Reserve",
    year: "18 Years",
    notes: "Rich oak, caramel, and a whisper of smoke. A full-bodied masterpiece aged to perfection in charred American oak barrels.",
    tag: "Best Seller",
  },
  {
    name: "Dark Moon Eclipse",
    year: "12 Years",
    notes: "Honeyed vanilla, dried fruit, and warm spice. Our signature blend that captures the essence of midnight elegance.",
    tag: "Signature",
  },
  {
    name: "Dark Moon Obsidian",
    year: "25 Years",
    notes: "Deep mahogany, leather, and dark chocolate. A rare, limited-edition single malt for the true connoisseur.",
    tag: "Limited Edition",
  },
];

function BottleIcon({ variant }: { variant: number }) {
  return (
    <svg viewBox="0 0 120 280" className="w-24 h-48 mx-auto" fill="none">
      {/* Bottle body */}
      <path
        d={
          variant === 0
            ? "M35 100 L35 230 C35 250, 85 250, 85 230 L85 100 L80 70 L40 70 Z"
            : variant === 1
            ? "M38 100 L32 230 C32 250, 88 250, 88 230 L82 100 L78 65 L42 65 Z"
            : "M40 90 L35 230 C35 250, 85 250, 85 230 L80 90 L75 65 L45 65 Z"
        }
        fill="#C9A84C"
        opacity="0.08"
        stroke="#C9A84C"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      {/* Bottle neck */}
      <rect
        x={variant === 2 ? "48" : "45"}
        y="30"
        width={variant === 2 ? "24" : "30"}
        height={variant === 0 ? "40" : "35"}
        rx="4"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="1"
        strokeOpacity="0.3"
      />
      {/* Cap */}
      <rect
        x={variant === 2 ? "46" : "43"}
        y="20"
        width={variant === 2 ? "28" : "34"}
        height="12"
        rx="3"
        fill="#C9A84C"
        opacity="0.15"
        stroke="#C9A84C"
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      {/* Label */}
      <rect
        x="42"
        y="140"
        width="36"
        height="50"
        rx="2"
        fill="none"
        stroke="#C9A84C"
        strokeWidth="0.75"
        strokeOpacity="0.25"
      />
      {/* Label line details */}
      <line x1="48" y1="152" x2="72" y2="152" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.2" />
      <line x1="50" y1="160" x2="70" y2="160" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.15" />
      <line x1="52" y1="168" x2="68" y2="168" stroke="#C9A84C" strokeWidth="0.5" strokeOpacity="0.1" />
      {/* Liquid level */}
      <path
        d={
          variant === 0
            ? "M37 130 L37 230 C37 248, 83 248, 83 230 L83 130 Z"
            : variant === 1
            ? "M34 140 L34 230 C34 248, 86 248, 86 230 L84 140 Z"
            : "M37 120 L37 230 C37 248, 83 248, 83 230 L82 120 Z"
        }
        fill="#C9A84C"
        opacity="0.05"
      />
    </svg>
  );
}

export default function Collection() {
  return (
    <section id="collection" className="relative bg-[#0D0B08] py-24 lg:py-32">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            The Collection
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#F5EDD6] mb-4">
            Our Collection
          </h2>
          <div className="w-16 h-[2px] bg-[#C9A84C] mx-auto" />
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {whiskies.map((whisky, index) => (
            <motion.div
              key={whisky.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative bg-[#1A1610] rounded-2xl border border-[#C9A84C]/10 overflow-hidden card-hover"
            >
              {/* Tag */}
              <div className="absolute top-4 right-4 z-10">
                <span className="bg-[#C9A84C]/10 text-[#C9A84C] text-xs tracking-wider uppercase px-3 py-1 rounded-full border border-[#C9A84C]/20">
                  {whisky.tag}
                </span>
              </div>

              {/* Bottle Illustration */}
              <div className="relative pt-8 pb-4 flex items-center justify-center">
                {/* Ambient glow behind bottle */}
                <div
                  className="absolute w-40 h-40 rounded-full blur-[60px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(circle, #C9A84C, transparent)",
                  }}
                />
                <BottleIcon variant={index} />
              </div>

              {/* Card Content */}
              <div className="p-6 pt-2">
                <p className="text-[#8A7A5A] text-xs tracking-[0.2em] uppercase mb-2">
                  {whisky.year}
                </p>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#F5EDD6] mb-3">
                  {whisky.name}
                </h3>
                <p className="text-[#F5EDD6]/50 text-sm leading-relaxed mb-6">
                  {whisky.notes}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#C9A84C] text-sm font-medium tracking-wider uppercase group/btn"
                >
                  Explore
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
