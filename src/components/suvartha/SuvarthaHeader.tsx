"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import SuvarthaLogo from "./SuvarthaLogo";

export default function SuvarthaHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Change header when scrolled past hero section (approximately 600px)
      setIsScrolled(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-emerald-800" : "bg-emerald-800 text-white"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <SuvarthaLogo 
            size="md" 
            variant={isScrolled ? "color" : "light"}
            showText={true}
            className="transition-all duration-300"
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#home"
              className={`transition-colors text-sm font-medium ${
                isScrolled ? "hover:text-emerald-600" : "hover:text-emerald-200"
              }`}
            >
              Home
            </Link>
            <Link
              href="#services"
              className={`transition-colors text-sm font-medium ${
                isScrolled ? "hover:text-emerald-600" : "hover:text-emerald-200"
              }`}
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className={`transition-colors text-sm font-medium ${
                isScrolled ? "hover:text-emerald-600" : "hover:text-emerald-200"
              }`}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className={`transition-colors text-sm font-medium ${
                isScrolled ? "hover:text-emerald-600" : "hover:text-emerald-200"
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-2">
              <Link
                href="#home"
                className={`transition-colors py-2 text-sm ${
                  isScrolled
                    ? "hover:text-emerald-600"
                    : "hover:text-emerald-200"
                }`}
              >
                Home
              </Link>
              <Link
                href="#services"
                className={`transition-colors py-2 text-sm ${
                  isScrolled
                    ? "hover:text-emerald-600"
                    : "hover:text-emerald-200"
                }`}
              >
                Services
              </Link>
              <Link
                href="#testimonials"
                className={`transition-colors py-2 text-sm ${
                  isScrolled
                    ? "hover:text-emerald-600"
                    : "hover:text-emerald-200"
                }`}
              >
                Testimonials
              </Link>
              <Link
                href="#contact"
                className={`transition-colors py-2 text-sm ${
                  isScrolled
                    ? "hover:text-emerald-600"
                    : "hover:text-emerald-200"
                }`}
              >
                Contact
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
