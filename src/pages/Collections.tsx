import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface CollectionItem {
  title: string;
  desc: string;
  img: string;
}

export default function Collection(): React.ReactElement {
  const collections: CollectionItem[] = [
    {
      title: "Ethereal Grace",
      desc: "Soft silhouettes and flowing fabrics meet understated opulence — where movement becomes art, and every curve whispers refinement.",
      img: "/assets/product1.jpeg",
    },
    {
      title: "Urban Royalty",
      desc: "A bold fusion of street heritage and regal tailoring. Defiant lines, lush textures — made for those rewriting the language of luxury.",
      img: "/assets/product2.jpeg",
    },
    {
      title: "Timeless Essence",
      desc: "Quiet confidence in every seam. This collection redefines power dressing with fluid shapes that breathe elegance.",
      img: "/assets/product3.jpeg",
    },
    {
      title: "The New Classic",
      desc: "Simplicity elevated to sophistication. Clean silhouettes, sculpted textures — a tribute to eternal minimalism.",
      img: "/assets/product4.jpeg",
    },
  ];

  return (
    <main className="bg-[#fdfbf9] text-gray-900 font-sans overflow-hidden">
      {/* --- HERO --- */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center">
        <motion.img
          src="/assets/collection.jpg"
          alt="Collection Hero"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 px-6 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-7xl font-light mb-6"
          >
            Our <span className="font-medium text-[#C8A45D]">Collections</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg sm:text-xl text-gray-100 max-w-2xl mx-auto leading-relaxed"
          >
            Explore our signature collections — each crafted to merge art,
            craftsmanship, and timeless modernity.
          </motion.p>
        </div>
      </section>

      {/* --- COLLECTION SECTIONS --- */}
      <section className="flex flex-col">
        {collections.map((item, index) => (
          <CollectionSection
            key={index}
            title={item.title}
            desc={item.desc}
            img={item.img}
            reverse={index % 2 !== 0}
          />
        ))}
      </section>
    </main>
  );
}

/* --- Individual Scroll Sections --- */
function CollectionSection({
  title,
  desc,
  img,
  reverse = false,
}: {
  title: string;
  desc: string;
  img: string;
  reverse?: boolean;
}) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      className={`relative flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } items-center justify-center py-24 md:py-40 gap-16 px-6 md:px-20`}
    >
      {/* Image */}
      <motion.div
        style={{ y }}
        initial={{ opacity: 0, x: reverse ? 80 : -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="relative w-full md:w-1/2 rounded-3xl overflow-hidden shadow-2xl"
      >
        <img
          src={img}
          alt={title}
          className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent"></div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 text-center md:text-left"
      >
        <h3 className="text-4xl sm:text-5xl font-light mb-6">{title}</h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-10">
          {desc}
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#C8A45D] text-white font-medium px-10 py-3 rounded-full hover:bg-gray-900 transition-all duration-300"
        >
          Explore Collection
        </a>
      </motion.div>
    </section>
  );
}
