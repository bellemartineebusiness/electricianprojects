"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/services", label: "Tjänster" },
  { href: "/about", label: "Om oss" },
  { href: "/contact", label: "Kontakt" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-[#1a3a5c] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo + Brand */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Logo size={40} />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-wide text-white">ElektroProff</span>
              <span className="text-xs text-amber-400 font-medium tracking-widest uppercase">Elektriker</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Huvudnavigering">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  pathname === link.href
                    ? "text-amber-400 border-b-2 border-amber-400 pb-0.5"
                    : "text-gray-200"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-4 bg-amber-500 hover:bg-amber-400 text-[#1a3a5c] font-semibold text-sm px-5 py-2 rounded transition-colors"
            >
              Begär offert
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded text-gray-200 hover:text-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400"
            aria-label="Öppna meny"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="block w-6 h-0.5 bg-current mb-1.5 transition-transform" style={menuOpen ? { transform: "rotate(45deg) translate(3px, 7px)" } : {}} />
            <span className="block w-6 h-0.5 bg-current mb-1.5 transition-opacity" style={menuOpen ? { opacity: 0 } : {}} />
            <span className="block w-6 h-0.5 bg-current transition-transform" style={menuOpen ? { transform: "rotate(-45deg) translate(3px, -7px)" } : {}} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[#122a43] border-t border-[#2a5080] px-4 pb-4 pt-2" aria-label="Mobilnavigering">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm font-medium border-b border-[#1e4060] transition-colors hover:text-amber-400 ${
                pathname === link.href ? "text-amber-400" : "text-gray-200"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-4 block text-center bg-amber-500 hover:bg-amber-400 text-[#1a3a5c] font-semibold text-sm px-5 py-2.5 rounded transition-colors"
          >
            Begär offert
          </Link>
        </nav>
      )}
    </header>
  );
}
