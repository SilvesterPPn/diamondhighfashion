import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Services(): React.ReactElement {
  const services = [
    {
      id: "01",
      title: "Bespoke Tailoring",
      desc: "Each garment begins with a story  your story. Hand-measured, pattern-drafted, and tailored to perfection, our bespoke process transforms fabric into identity.",
      img: "/assets/bespoke.jpg",
    },
    {
      id: "02",
      title: "Luxury Couture",
      desc: "An expression of precision and artistry. We merge traditional craftsmanship with contemporary refinement to create pieces that transcend trends.",
      img: "/assets/luxury.jpg",
    },
    {
      id: "03",
      title: "Creative Direction",
      desc: "We guide brands and individuals in shaping their visual narrative from concept to campaign — through refined aesthetics and emotional storytelling.",
      img: "/assets/creative.jpg",
    },
    {
      id: "04",
      title: "Fashion Consultancy",
      desc: "Through insight and collaboration, we help emerging designers, stylists, and brands align their identity with excellence and distinction.",
      img: "/assets/fashion.jpg",
    },
  ];

  return (
    <main className="bg-[#fdfbf9] text-gray-900 font-sans overflow-hidden">
      {/* --- HERO --- */}
      <section className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden">
        <motion.img
          src="/assets/services.jpg"
          alt="Tailoring workspace"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
      
        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-300 tracking-tight mb-6"
          >
            Crafted for <span className="text-[#C8A45D] font-medium">Excellence</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="text-gray-500 text-lg font-bold sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Where design meets intention, and every stitch tells a story.
          </motion.p>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section className="w-full py-16 space-y-40">
        {services.map((service, i) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`max-w-7xl mx-auto flex flex-col ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-16 px-6 sm:px-10 md:px-16`}
          >
            

            {/* Text Section */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl sm:text-4xl font-light mb-6">
                {service.title}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-md">
                {service.desc}
              </p>
              <Link
                to="/contact"
                className="inline-block border border-gray-900 text-gray-900 px-8 py-3 rounded-full text-sm tracking-wide font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Learn More
              </Link>
            </div>

            {/* Image Section */}
            <div className="relative w-full md:w-1/2">
              <div className="overflow-hidden rounded-3xl shadow-lg">
                <motion.img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-[500px] object-cover rounded-3xl hover:scale-105 transition-transform duration-700 ease-out"
                  whileHover={{ scale: 1.05 }}
                />
              </div>
              <span className="absolute top-6 left-6 text-gray-300 text-6xl font-light tracking-tighter select-none">
                {service.id}
              </span>
            </div>
          </motion.div>
        ))}
      </section>

      {/* --- CTA --- */}
      <section className="relative py-32 text-center border-t border-gray-200 bg-[#fffdfa]">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-light mb-6 max-w-3xl mx-auto leading-tight"
        >
          Your <span className="text-[#C8A45D] font-medium">vision</span>.  
          Our <span className="text-[#C8A45D] font-medium">craftsmanship</span>.
        </motion.h3>
        <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
          Begin your couture journey today — refined, intentional, and timelessly elegant.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#C8A45D] text-white font-semibold px-10 py-4 rounded-full hover:bg-gray-900 transition-all duration-300"
        >
          Book a Consultation
        </Link>
      </section>
    </main>
  );
}
