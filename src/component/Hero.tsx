import React from "react";
import { Link } from "react-router-dom";

export default function Hero(): React.ReactElement {
  return (
    <section className="w-full pt-8 sm:pt-12 lg:pt-16 pb-16 px-4 sm:px-8 md:px-12">
      {/* Hero Container */}
      <div className="max-w-7xl mx-auto relative bg-black text-white rounded-3xl overflow-hidden shadow-2xl h-[75vh] sm:h-[80vh] md:h-[85vh] flex items-center justify-center">
        
        {/* Background Image */}
        <img
          src="/assets/hero2.jpg"
          alt="Diamond High Fashion Model"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>

        {/* Text Content */}
        <div className="relative z-10 px-4 sm:px-6 md:px-10 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
            <span className="block text-white">ELEVATING STYLE</span>
            <span className="block text-[#d2b67b] font-light">
              CRAFTED WITH PURPOSE
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed px-2">
            Diamond High Fashion — where culture meets craftsmanship. Rooted in
            Makurdi, redefining elegance through creativity, precision, and timeless artistry.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Link
              to="/collections"
              className="bg-[#d2b67b]/90 text-black font-semibold px-8 py-3 rounded-full hover:bg-[#e0c98b] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View Portfolio
            </Link>
            <Link
              to="/about"
              className="border border-gray-400 px-8 py-3 rounded-full font-semibold text-gray-200 hover:bg-white/10 hover:border-white transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[0.65rem] sm:text-xs md:text-sm text-gray-400 font-medium tracking-widest uppercase text-center">
            <span>Designed for Excellence</span>
            <span>Inspired by Culture</span>
            <span>Crafted in Makurdi</span>
            <span>Diamond Standard</span>
          </div>
        </div>
      </div>
    </section>
  );
}

