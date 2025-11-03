import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact(): React.ReactElement {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("Your message has been sent successfully ✨");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="bg-[#faf8f6] text-gray-900 font-sans overflow-hidden">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[75vh] flex items-center justify-center text-center">
        <motion.img
          src="/assets/contact.jpg"
          alt="Contact Hero"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-light text-white mb-6"
          >
            Get in <span className="text-[#C8A45D] font-medium">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-gray-100 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Reach out to us for appointments, collaborations, or bespoke
            couture inquiries — your story begins here.
          </motion.p>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section className="max-w-7xl mx-auto py-17 px-6 sm:px-12 md:px-20 grid md:grid-cols-2 gap-16 items-start">
        {/* LEFT: Contact Info / Visual */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="space-y-10"
        >
          <div>
            <h2 className="text-4xl font-light mb-4">Let&apos;s Connect</h2>
            <p className="text-gray-700 text-lg leading-relaxed max-w-md">
              Whether you&apos;d like to schedule a private consultation, explore
              our collections, or simply say hello — we&apos;d love to hear from you.
            </p>
          </div>

          <div className="space-y-6 pt-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#C8A45D]/10 flex items-center justify-center">
                <Mail className="text-[#C8A45D]" size={20} />
              </div>
              <div>
                <p className="font-medium">Email</p>
                <p className="text-gray-700">Onahseth81@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#C8A45D]/10 flex items-center justify-center">
                <Phone className="text-[#C8A45D]" size={20} />
              </div>
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-gray-700">+234 805 2837 728</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#C8A45D]/10 flex items-center justify-center">
                <MapPin className="text-[#C8A45D]" size={20} />
              </div>
              <div>
                <p className="font-medium">Studio</p>
                <p className="text-gray-700">N.19 Old Otukpo road, Makurdi Benue State.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT: Form */}
        <motion.form
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-2xl p-10 md:p-14 space-y-6"
        >
          <h3 className="text-3xl font-light mb-4 text-center md:text-left">
            Send Us a Message
          </h3>

          <div className="space-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8A45D]/50"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8A45D]/50"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-600 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C8A45D]/50 resize-none"
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#C8A45D] text-white font-semibold px-6 py-3 rounded-full hover:bg-gray-900 transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>
      </section>

      {/* --- CTA / FOOTER SECTION --- */}
      <section className="relative py-24 text-center bg-[#fffdfa] border-t border-gray-100">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl font-light mb-6 max-w-3xl mx-auto"
        >
          Experience <span className="text-[#C8A45D] font-medium">Luxury</span>  
          — Defined by You.
        </motion.h3>
        <p className="text-gray-600 text-lg mb-10 max-w-xl mx-auto">
          Ready to begin your couture journey? Our team will respond within 24
          hours to assist you personally.
        </p>
        <a
          href="/"
          className="inline-block bg-[#C8A45D] text-white font-semibold px-10 py-4 rounded-full hover:bg-gray-900 transition-all duration-300"
        >
          Back to Home
        </a>
      </section>
    </main>
  );
}
