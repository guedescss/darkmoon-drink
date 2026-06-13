"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Alexander Wright",
    role: "Whisky Enthusiast",
    rating: 5,
    text: "Dark Moon Reserve changed how I think about whisky. The depth, the finish, the sheer elegance—it's unlike anything I've ever tasted. A true masterpiece.",
  },
  {
    name: "Sophia Laurent",
    role: "Sommelier",
    rating: 5,
    text: "As a sommelier, I've tasted hundreds of spirits. Dark Moon stands in a class of its own. The 25-year Obsidian is poetry in a glass.",
  },
  {
    name: "James Harrington",
    role: "Bar Owner",
    rating: 5,
    text: "Our customers always ask for Dark Moon by name. It has become the centrepiece of our premium selection, and for good reason.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-4">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="w-4 h-4 star-gold"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative bg-[#1A1610] py-24 lg:py-32 overflow-hidden">
      {/* Subtle bg pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 30%, #C9A84C 0%, transparent 50%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-[#C9A84C] text-sm tracking-[0.3em] uppercase mb-4 font-medium">
            Testimonials
          </p>
          <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-5xl font-bold text-[#F5EDD6] mb-4">
            What They Say
          </h2>
          <div className="w-16 h-[2px] bg-[#C9A84C] mx-auto" />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#0D0B08] rounded-2xl border border-[#C9A84C]/10 p-8 card-hover"
            >
              {/* Quote icon */}
              <svg
                className="w-8 h-8 text-[#C9A84C]/20 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>

              <StarRating count={t.rating} />

              <p className="text-[#F5EDD6]/70 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.text}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                {/* Avatar circle */}
                <div className="w-10 h-10 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center">
                  <span className="text-[#C9A84C] text-sm font-semibold">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-[#F5EDD6] text-sm font-medium">
                    {t.name}
                  </p>
                  <p className="text-[#8A7A5A] text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
