import React from "react";
import { Link } from "react-router-dom";

export default function NewDrops(): React.ReactElement {
  const drops = [
    {
      id: 1,
      image: "/assets/product1.jpeg",
      title: "The Avant-Garde Ensemble",
      subtitle: "Fluid  modern luxury.",
    },
    {
      id: 2,
      image: "/assets/product2.jpeg",
      title: "Elegent Senator design",
      subtitle: "A balance of form, texture, and poise.",
    },
    {
      id: 3,
      image: "/assets/product3.jpeg",
      title: "Essence of Royalty",
      subtitle: "Timeless craftsmanship meets bold expression.",
    },
  ];

  return (
    <section className="w-full bg-white py-17 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight mb-4">
          NEW <span className="font-semibold text-gray-800">DROPS</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-16">
          Discover our latest pieces crafted with elegance, intention, and individuality.
        </p>

        {/* Grid of New Drops */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {drops.map((item) => (
            <div key={item.id} className="group">
              <div className="relative overflow-hidden rounded-2xl shadow-md">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[480px] object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="mt-5">
                <h3 className="text-lg font-semibold text-gray-800 uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16">
          <Link to="/portfolio" ><button className="border border-gray-900 text-gray-900 px-8 py-3 rounded-full text-sm tracking-wide font-medium hover:bg-gray-900 hover:text-white transition-all duration-300">
            View All Collections
          </button></Link>
        </div>
      </div>
    </section>
  );
}
