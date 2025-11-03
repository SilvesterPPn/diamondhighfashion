import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Consultation(): React.ReactElement {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Consultation Request:", form);
  };

  return (
    <section className="w-full bg-white/90 text-gray-900 py-10 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-16">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-4xl sm:text-5xl font-light leading-tight mb-6">
            Reach out<span className="font-semibold text-gray-800"> To Our team</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md">
            Work directly with our creative director to bring your vision to life. 
            From couture gowns to bespoke menswear — each piece begins with a conversation.
          </p>

          <div className="space-y-4 text-gray-700 text-base">
            <p>📍 Makurdi, Benue — Nigeria</p>
            <p>📧 Onahseth81@gmail.com</p>
            <p>📞 +234 805 283 9728</p>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-gray-50 p-8 rounded-2xl shadow-md"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C8A45D]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C8A45D]"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message / Design Request
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Describe what you’d like us to create for you..."
                rows={5}
                className="w-full border border-gray-300 rounded-md px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#C8A45D] resize-none"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#C8A45D] text-black font-medium py-3 rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              Request Consultation
            </button>
          </div>
        </motion.form>
      </div>

      {/* Bottom divider / tagline */}
      <div className="max-w-6xl mx-auto mt-20 pt-10 border-t border-gray-200 text-center text-sm text-gray-500 tracking-wide">
        <p>Every masterpiece begins with a conversation. Let&apos;s create yours.</p>
      </div>
    </section>
  );
}
