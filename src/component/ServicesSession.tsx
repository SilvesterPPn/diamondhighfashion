import React from "react";
import { Scissors, Palette, Camera, Crown } from "lucide-react";

export default function ServicesSession(): React.ReactElement {
  const services = [
    {
      icon: <Crown className="w-8 h-8 text-[#C8A45D]" />,
      title: "Luxury Bespoke Design",
      description:
        "Tailored couture pieces crafted with precision — embodying individuality, luxury, and timeless beauty.",
    },
    {
      icon: <Palette className="w-8 h-8 text-[#C8A45D]" />,
      title: "Creative Direction",
      description:
        "From concept to execution, our creative team curates visually striking collections and campaigns that define elegance.",
    },
    {
      icon: <Scissors className="w-8 h-8 text-[#C8A45D]" />,
      title: "Tailoring & Fit Perfection",
      description:
        "Expert artisans ensure each garment meets the Diamond Standard — refined, flattering, and made to last.",
    },
    {
      icon: <Camera className="w-8 h-8 text-[#C8A45D]" />,
      title: "Editorial Styling",
      description:
        "Crafting elevated looks for editorials, campaigns, and private clients — merging art and fashion effortlessly.",
    },
  ];

  return (
    <section className="w-full bg-white py-10 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-light mb-4 tracking-tight">
          What We <span className="font-semibold text-gray-900">Offfer</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          We combine artistry, craftsmanship, and cultural influence to deliver a fashion experience that goes beyond clothing.
        </p>
        <div className="w-16 h-[2px] bg-[#C8A45D] mx-auto mt-6 rounded-full"></div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="group border border-gray-200 rounded-2xl p-8 text-center hover:border-[#C8A45D] hover:shadow-md transition-all duration-300"
          >
            <div className="flex justify-center mb-6">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-[#C8A45D] transition-colors">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
