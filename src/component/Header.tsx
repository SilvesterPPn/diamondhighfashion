import React from "react";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

export default function Header(): React.ReactElement {
  return (
    <header className="w-full bg-black text-gray-300 text-xs sm:text-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-2 px-3 sm:px-6 lg:px-8 gap-2 sm:gap-6 flex-wrap">
        {/* Left side - Contact info */}
        <div className="flex items-center gap-2 sm:gap-3 min-w-fit">
          <Mail size={14} className="text-[#C8A45D]" />
          <span className="truncate">Onahseth81@gmail.com</span>
        </div>

        {/* Right side - Links + Socials */}
        <div className="flex items-center gap-3 sm:gap-5 flex-wrap justify-center sm:justify-end">
          {/* Quick Links */}
          <div className="flex items-center gap-3 sm:gap-5">
            <Link
              to="/contact"
              className="hover:text-[#C8A45D] transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/faq"
              className="hover:text-[#C8A45D] transition-colors"
            >
              FAQ
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C8A45D] transition-colors"
            >
              <Instagram size={15} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C8A45D] transition-colors"
            >
              <Facebook size={15} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#C8A45D] transition-colors"
            >
              <Twitter size={15} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
