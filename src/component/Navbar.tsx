import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-[#C8A45D]" : "";
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        isOpen &&
        !target.closest(".mobile-menu") &&
        !target.closest(".menu-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // Prevent scroll when menu is open (also set on documentElement for better mobile/iOS support)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className="fixed top-0 left-0 right-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-30">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold tracking-tight text-gray-900">
          <Link to="/">
            <img src="assets/logo.jpeg" className="w-14 h-14 rounded-full" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <li><Link to="/" className={`hover:text-[#C8A45D] transition-colors ${isActive("/")}`}>Home</Link></li>
          <li><Link to="/about" className={`hover:text-[#C8A45D] transition-colors ${isActive("/about")}`}>About</Link></li>
          <li><Link to="/services" className={`hover:text-[#C8A45D] transition-colors ${isActive("/services")}`}>Services</Link></li>
          <li><Link to="/collections" className={`hover:text-[#C8A45D] transition-colors ${isActive("/collections")}`}>Collections</Link></li>
          <li><Link to="/contact" className={`hover:text-[#C8A45D] transition-colors ${isActive("/contact")}`}>Contact</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-[#C8A45D]/10 transition menu-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-black" />
          ) : (
            <Menu className="w-6 h-6 text-black" />
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[9999] transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        {/* Mobile Menu Sidebar */}
        <div
          className={`mobile-menu fixed top-0 right-0 h-screen w-72 z-[10000] bg-gradient-to-b from-black to-[#1a1a1a] text-white shadow-xl transform transition-transform duration-300 ease-in-out flex flex-col overflow-y-auto ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Top section with close */}
          <div>
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="p-2 hover:bg-[#C8A45D]/10 rounded-full"
                aria-label="Close menu"
              >
                <X className="w-6 h-6 text-white" />
              </button>
            </div>

            {/* Menu items */}
            <ul className="flex flex-col gap-2 px-6 py-4 text-lg mb-45 font-medium">
              {[
                { name: "Home", path: "/" },
                 { name: "About", path: "/about" },
                { name: "services", path: "/services" },
                { name: "Collections", path: "/Collections" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="block py-3 px-4 rounded-lg hover:bg-[#C8A45D]/10 hover:text-[#C8A45D] transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom decorative section */}
          <div className="px-6 py-6 bg-[#0d0d0d] border-t border-[#C8A45D]/20 text-center text-sm">
            <div className="flex flex-col items-center gap-2">
              <p className="text-[#C8A45D] font-semibold tracking-wide">
                Diamond High Fashion
              </p>
              <p className="text-gray-400">Elegance • Creativity • Confidence</p>
              <div className="w-12 h-[2px] bg-[#C8A45D] mt-2 rounded-full"></div>
              <p className="text-gray-500 text-xs mt-2">
                © {new Date().getFullYear()} Diamond High Fashion. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
