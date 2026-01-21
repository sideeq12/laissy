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
    ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.9)"]
  );
  const navBlur = useTransform(scrollY, [0, 100], [0, 12]);
  const navText = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 1)", "rgba(17, 24, 39, 1)"]
  );

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
          <img src="/logopng.png" alt="Lovissa Consulting Logo" className="h-8 w-auto object-contain" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              style={{ color: navText }}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <a
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all"
          >
            Request Consultation
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          style={{ color: navText }}
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </motion.button>
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
