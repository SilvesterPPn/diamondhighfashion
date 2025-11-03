import React from "react";
import { Link } from "react-router-dom";

export default function Featured(): React.ReactElement {
  return (
    <section className="w-full bg-white text-gray-900 py-8 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        {/* Left Text Content */}
        <div className="space-y-8">
          <div className="border-l-4 border-[#C8A45D] pl-6">
            <h2 className="text-4xl sm:text-5xl font-light leading-tight tracking-tight">
              Redefining <br />
              <span className="font-semibold text-gray-800">Modern Elegance</span>
            </h2>
          </div>

          <p className="text-gray-600 text-lg leading-relaxed max-w-md">
            At <span className="font-medium text-gray-900">Diamond High Fashion</span>, 
            we design with intention blending culture, craftsmanship, and 
            quiet sophistication. Every piece is a narrative of bold minimalism, 
            tailored for those who embody grace and confidence.
          </p>

          <Link
            to="/about"
            className="inline-block border border-gray-900 text-gray-900 px-8 py-3 rounded-full text-sm tracking-wide font-medium hover:bg-gray-900 hover:text-white transition-all duration-300"
          >
            Learn More
          </Link>
        </div>

        {/* Right Image */}
        <div className="relative group">
          <div className="overflow-hidden rounded-2xl shadow-sm">
            <img
              src="/assets/featured2.jpg"
              alt="Luxury Fashion Editorial"
              className="w-full h-[460px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
            />
          </div>

          {/* Subtle accent line under image */}
          <div className="absolute -bottom-6 left-6 w-24 h-[2px] bg-[#C8A45D] rounded-full"></div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="max-w-7xl mx-auto mt-28 pt-10 border-t border-gray-200 flex flex-col sm:flex-row justify-between text-sm text-gray-500 tracking-wide">
        <p>EST. 2025  Crafted in Makurdi</p>
        <p>Timeless Design • Cultural Expression</p>
      </div>
    </section>
  );
}
