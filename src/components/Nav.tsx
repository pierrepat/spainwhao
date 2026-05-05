"use client";

import { useState, useEffect } from "react";
import { LogoMark } from "./Logo";

const links = [
  { href: "#rentals", label: "Rentals" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function getLangSwitch() {
  if (typeof window === "undefined") return { label: "ES", href: "/es" };
  return window.location.pathname.startsWith("/es")
    ? { label: "EN", href: "/" }
    : { label: "ES", href: "/es" };
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-line bg-bg/95 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:h-20">
        <a href="#" className="flex-shrink-0">
          <LogoMark light={!scrolled} />
        </a>

        {/* Desktop links */}
        <div className="hidden gap-10 font-sans text-sm sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors duration-200 ${
                scrolled
                  ? "text-mute hover:text-ink"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href={getLangSwitch().href}
            className={`rounded border px-2.5 py-0.5 text-xs font-medium transition-colors duration-200 ${
              scrolled
                ? "border-line text-mute hover:text-ink"
                : "border-white/30 text-white/70 hover:text-white"
            }`}
          >
            {getLangSwitch().label}
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex flex-col gap-1.5 sm:hidden"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-0.5 w-5 transition-colors ${
                scrolled ? "bg-ink" : "bg-white"
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-line bg-bg px-6 py-6 sm:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-sans text-sm text-mute transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
