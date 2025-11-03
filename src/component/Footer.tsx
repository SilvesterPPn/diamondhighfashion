import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer(): React.ReactElement {
  return (
    <footer className="w-full bg-black text-gray-300 pt-8 pb-10 px-6 sm:px-10 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 border-b border-gray-800 pb-12">
        {/* Brand Section */}
        <div className="col-span-1 sm:col-span-2 md:col-span-1">
          <img src="assets/logo.jpeg" className="w-17 rounded-full" alt="" />
          <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
            Merging art, culture, and craftsmanship to redefine modern luxury.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-white font-medium mb-2 text-sm tracking-wide uppercase">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Portfolio", path: "/portfolio" },
              { name: "Services", path: "/services" },
              { name: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="hover:text-[#C8A45D] transition-colors duration-300"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-medium mb-4 text-sm tracking-wide uppercase">
            Contact
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-[#C8A45D] mt-0.5" />
              <span>Makurdi, Benue, Nigeria</span>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-[#C8A45D] mt-0.5" />
              <span>OnahSeth81@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-[#C8A45D] mt-0.5" />
              <span>+234 805 283 9728</span>
            </li>
          </ul>
        </div>

        {/* Newsletter or Socials */}
        <div>
          <h3 className="text-white font-medium mb-4 text-sm tracking-wide uppercase">
            Stay Connected
          </h3>
          <p className="text-sm text-gray-400 mb-4">
            Get updates on new collections, events, and collaborations.
          </p>
          <form className="flex items-center border border-gray-700 rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your email"
              className="w-full bg-transparent text-sm text-gray-300 px-4 py-2 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-[#C8A45D] text-black text-sm font-semibold px-5 py-2 hover:bg-white transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500 border-t border-gray-800 pt-6">
        <p>© {new Date().getFullYear()} Diamond High Fashion. All rights reserved.</p>
        <p className="text-[#C8A45D] mt-4 sm:mt-0">
          Design by <span className="font-medium text-gray-400">Uhana Silvester Elijah</span>
        </p>
      </div>
    </footer>
  );
}
