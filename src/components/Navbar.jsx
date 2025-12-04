import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./Button";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = ["About", "Services", "Blog", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`sticky top-0 z-100 w-full transition-all duration-300 ${
        scrolled ? "backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {/* Home Link */}
          <div className="relative">
            <Link
              to="/"
              className={`relative text-sm text-white font-medium transition-colors ${
                location.pathname === "/" ? "text-white" : "text-gray-800"
              }`}
            >
              Home
            </Link>
            <AnimatePresence mode="wait">
              {location.pathname === "/" && (
                <motion.span
                  key="home-underline"
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "50%", opacity: 1 }}
                  exit={{ width: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute left-0 bottom-0 h-0.5 bg-white"
                />
              )}
            </AnimatePresence>
          </div>

          {/* Other Links */}
          {navLinks.map((link) => {
            const path = `/${link.toLowerCase()}`;
            const isActive = location.pathname === path;
            return (
              <div key={link} className="relative">
                <Link
                  to={path}
                  className={`relative text-sm text-white font-medium transition-colors ${
                    isActive ? "text-white" : "text-gray-800"
                  }`}
                >
                  {link}
                </Link>
                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.span
                      key={`${link}-underline`}
                      initial={{ width: 0, opacity: 0 }}
                      animate={{ width: "50%", opacity: 1 }}
                      exit={{ width: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 bottom-0 h-0.5 bg-white"
                    />
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* CTA Button */}
          <Button>Dental IT 365</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -115 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -115 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-[60px] left-0 right-0 z-[99] bg-white/95 backdrop-blur-md shadow-xl md:hidden"
          >
            <div className="max-w-7xl mx-auto px-6 pb-4 space-y-4 pt-3">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className={`block text-gray-800 hover:text-yellow-500 transition-colors ${
                  location.pathname === "/"
                    ? "font-semibold text-yellow-500"
                    : ""
                }`}
              >
                Home
              </Link>

              {navLinks.map((link) => {
                const path = `/${link.toLowerCase()}`;
                const isActive = location.pathname === path;
                return (
                  <Link
                    key={link}
                    to={path}
                    onClick={() => setOpen(false)}
                    className={`block text-gray-800 hover:text-yellow-500 transition-colors ${
                      isActive ? "font-semibold text-yellow-500" : ""
                    }`}
                  >
                    {link}
                  </Link>
                );
              })}

              <button className="w-full bg-yellow-500 text-black font-semibold px-5 py-2 rounded-full">
                Dental IT 365
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
