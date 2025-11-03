import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Faq(): React.ReactElement {
  const faqs = [
    {
      question: "What makes Diamond High Fashion unique?",
      answer:
        "Our designs blend cultural heritage with modern minimalism, crafted with precision and intention. Each piece represents individuality and timeless sophistication.",
    },
    {
      question: "Do you offer custom design services?",
      answer:
        "Yes, we create exclusive custom pieces tailored to each client’s vision  from concept sketches to final fitting, ensuring a perfect representation of your style.",
    },
    {
      question: "Where is Diamond High Fashion located?",
      answer:
        "We are proudly based in N19 old otukpo road Makurdi, Benue State, Nigeria. serving clients locally and internationally through bespoke consultations and curated collections.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes. Our team coordinates international shipping and personalized care to ensure your designs arrive safely and beautifully packaged.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white text-gray-900 py-15 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light tracking-tight mb-4">
            Got questions? <span className="font-semibold text-gray-800">We've got Answers</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Find answers to some of the most common questions about our process, designs, and philosophy.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-gray-200 pb-5 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg sm:text-xl font-medium">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: activeIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-gray-600" />
                </motion.div>
              </div>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-gray-600 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Bottom line or tagline */}
        <div className="mt-16 text-center text-sm text-gray-500 tracking-wide border-t border-gray-200 pt-8">
          <p>
            Still have questions?{" "}
            <span className="text-[#C8A45D] font-medium hover:underline cursor-pointer">
              Contact our team
            </span>{" "}
            — we&apos;d love to assist.
          </p>
        </div>
      </div>
    </section>
  );
}
