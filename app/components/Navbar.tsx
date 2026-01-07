"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "FAQ", href: "#faq" }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(10, 10, 10, 0)", "rgba(10, 10, 10, 0.9)"]
  );
  const navBlur = useTransform(scrollY, [0, 100], [0, 12]);

  return (
    <motion.nav
      style={{
        backgroundColor: navBackground,
        backdropFilter: useTransform(navBlur, (blur) => `blur(${blur}px)`),
      }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 transition-all"
    >
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="glass w-full max-w-7xl px-6 py-4 rounded-full flex items-center justify-between"
      >
        <div className="flex items-center">
          <span className="text-xl font-bold tracking-tighter uppercase">Lovissa<span className="text-primary"> Consulting Ltd</span></span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute top-20 left-4 right-4 glass p-6 rounded-2xl md:hidden flex flex-col gap-4 text-center"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-primary w-full py-4 rounded-xl font-bold block text-center text-white">
            Get Started
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
