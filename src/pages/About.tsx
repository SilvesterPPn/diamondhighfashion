import React from "react";
import { Link } from "react-router-dom";
import Faq from "../component/Faq";

export default function About(): React.ReactElement {
  return (
    <main className="bg-white text-gray-900 w-full overflow-hidden">
      {/* --- HERO --- */}
      <section className="relative w-full h-[85vh] flex items-center justify-center">
        <img
          src="/assets/hero.jpg"
          alt="About Diamond High Fashion"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-6">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-light text-white tracking-tight mb-6 leading-tight">
            The <span className="text-[#C8A45D] font-medium">Art</span> of
            <br /> Timeless Expression
          </h1>
          <p className="text-gray-200 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Where craftsmanship meets culture — Diamond High Fashion redefines
            modern elegance through refined simplicity.
          </p>
        </div>
      </section>

      {/* --- SIGNATURE QUOTE STRIP --- */}
      <section className="py-14 bg-[#fafafa] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-2xl sm:text-3xl font-light leading-relaxed text-gray-700 italic">
            “We do not follow fashion — we *compose* it.”
          </p>
          <div className="mt-6 w-16 h-[2px] bg-[#C8A45D] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* --- STORY --- */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-17 grid md:grid-cols-2 gap-20 items-center">
        {/* Text */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-light leading-snug mb-8">
            Our <span className="font-semibold text-[#C8A45D]">Story</span>
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            Founded in Makurdi, <strong>Diamond High Fashion</strong> emerged
            from a desire to merge artistic discipline with cultural identity.
            What began as a single thread of inspiration evolved into a
            collective pursuit — crafting silhouettes that embody grace and
            individuality.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We believe that true luxury lies not in abundance, but in
            refinement — in the precision of every stitch, and the story every
            piece tells.
          </p>
        </div>

        {/* Image */}
        <div className="relative group">
          <img
            src="/assets/featured1.jpg"
            alt="Luxury craftsmanship"
            className="rounded-3xl w-full object-cover shadow-lg group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>
        </div>
      </section>

      {/* --- THE EXPERIENCE --- */}
      <section className="w-full bg-black text-white py-16 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 grid md:grid-cols-2 gap-20 items-center">
          <div className="order-2 md:order-1">
            <img
              src="/assets/factory.jpg"
              alt="The Atelier"
              className="rounded-3xl w-full object-cover shadow-md opacity-90"
            />
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-4xl sm:text-5xl font-light mb-6 leading-tight">
              The <span className="text-[#C8A45D] font-medium">Atelier</span>
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Every creation begins with emotion — translated through fabric,
              structure, and the human form. Our atelier is a sanctuary for
              innovation, precision, and artistic integrity.
            </p>
            <Link
              to="/collections"
              className="inline-block border border-white text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all duration-300"
            >
              View Our Works
            </Link>
          </div>
        </div>
      </section>

      {/* --- DESIGNER --- */}
      <section className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 py-16 grid md:grid-cols-12 gap-20 items-center">
        <div className="md:col-span-7">
          <h3 className="text-3xl font-light mb-2 text-[#C8A45D]">
            Creative Direction
          </h3>
          <h4 className="text-xl font-medium mb-6 text-gray-900">
            Onah Seth Agidah
          </h4>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Guided by a deep respect for culture and detail, Seth brings an
            avant garde approach to minimalism balancing bold character with
            refined composition. Each design invites quiet confidence and
            powerful presence.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#C8A45D] text-black px-8 py-3 rounded-full text-sm font-semibold hover:bg-white transition-all duration-300"
          >
            Get in Touch
          </Link>
        </div>
        <div className="md:col-span-3">
          <img
            src="/assets/seth.jpeg"
            alt="Creative Director"
            className="w-full rounded-3xl object-cover shadow-lg"
          />
        </div>
      </section>
      <Faq />
    </main>
  );
}


