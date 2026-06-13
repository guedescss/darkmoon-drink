"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CountUpProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function CountUp({ end, suffix = "", duration = 2 }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const increment = end / (duration * 60);
    let frame: number;

    const animate = () => {
      start += increment;
      if (start >= end) {
        setCount(end);
        return;
      }
      setCount(Math.floor(start));
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [inView, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 27,
    suffix: "+",
    label: "Years of Experience in whisky world",
  },
  {
    value: 25,
    suffix: "+",
    label: "Worldwide famous brand collections",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Home delivery & open bar facilities",
  },
];

export default function Stats() {
  return (
    <section className="relative bg-[#1A1610] border-y border-[#C9A84C]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`text-center px-6 ${
                index !== stats.length - 1
                  ? "md:border-r md:border-[#C9A84C]/20"
                  : ""
              }`}
            >
              <p className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl font-bold text-[#C9A84C] mb-3">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-[#F5EDD6]/60 text-sm tracking-wide leading-relaxed">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
