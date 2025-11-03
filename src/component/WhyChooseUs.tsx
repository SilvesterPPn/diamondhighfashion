import React from "react";
import { motion } from "framer-motion";

export default function WhyChooseUs(): React.ReactElement {
  const points = [
    {
      number: "01",
      title: "Exquisite Craftsmanship",
      description:
        "Each piece is tailored by skilled artisans who merge modern minimalism with timeless couture precision.",
    },
    {
      number: "02",
      title: "Distinctive Aesthetic",
      description:
        "Our designs celebrate individuality — merging cultural influence with contemporary luxury.",
    },
    {
      number: "03",
      title: "Sustainable Vision",
      description:
        "We believe in responsible fashion. Every design is made with care for both people and the planet.",
    },
  ];

  return (
    <section className="relative w-full bg-black text-white py-28 px-6 sm:px-12 md:px-20 lg:px-28 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0d0d] via-black to-[#0d0d0d] opacity-95"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
            Why <span className="font-semibold text-[#C8A45D]">Choose Us</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            We go beyond design — we craft experiences, confidence, and timeless
            statements in every thread.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-20">
          {/* Left Text Section */}
          <div className="md:w-1/2 space-y-12">
            {points.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col"
              >
                <h3 className="text-2xl font-semibold mb-3 text-[#C8A45D]">
                  {item.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-base sm:text-lg max-w-md">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right Decorative / Number Column */}
          <div className="md:w-1/2 flex flex-col items-end justify-center space-y-10">
            {points.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center gap-4"
              >
                <span className="text-6xl sm:text-7xl font-extrabold text-[#C8A45D]/30 leading-none">
                  {item.number}
                </span>
                <div className="h-[1px] w-20 bg-[#C8A45D]/40"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="mt-24 border-t border-[#C8A45D]/20 pt-8 text-center text-sm text-gray-500 tracking-widest uppercase">
          <p>Elegance • Innovation • Authenticity • Confidence</p>
        </div>
      </div>
    </section>
  );
}
