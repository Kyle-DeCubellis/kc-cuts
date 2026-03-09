"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/waitlist", label: "Join Waitlist" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isOpen
          ? "bg-cream-50/98 backdrop-blur-sm shadow-sm border-b border-cream-200"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="KC Cuts and Style — Home"
          >
            <KCLogo />
            <div className="hidden sm:block">
              <p className="font-display text-crimson-800 text-lg leading-tight font-semibold tracking-wide">
                KC Cuts & Style
              </p>
              <p className="font-body text-xs text-gold-600 tracking-[0.15em] uppercase">
                LLC
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {links.slice(0, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 font-body text-sm font-medium rounded-sm transition-colors ${
                  pathname === link.href
                    ? "text-crimson-800"
                    : "text-gray-600 hover:text-crimson-800"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="block h-px bg-gold-400 mt-0.5" />
                )}
              </Link>
            ))}
            <Link
              href="/waitlist"
              className="ml-3 btn-primary text-sm py-2.5 px-5"
            >
              Join Waitlist
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-sm text-crimson-800 hover:bg-cream-200 transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{isOpen ? "Close" : "Open"} menu</span>
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-crimson-800 transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-crimson-800 transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-crimson-800 transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-screen opacity-100 pb-6" : "max-h-0 opacity-0"
          }`}
          aria-hidden={!isOpen}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-cream-200">
            {links.slice(0, -1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-3 font-body text-base font-medium rounded-sm transition-colors ${
                  pathname === link.href
                    ? "text-crimson-800 bg-cream-200"
                    : "text-gray-700 hover:text-crimson-800 hover:bg-cream-100"
                }`}
                tabIndex={isOpen ? 0 : -1}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/waitlist"
              className="btn-primary mt-3 justify-center"
              tabIndex={isOpen ? 0 : -1}
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}

function KCLogo() {
  return (
    <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle cx="40" cy="40" r="38" fill="#8B1A1A" />
        <circle cx="40" cy="40" r="36" fill="none" stroke="#d4a017" strokeWidth="1" />
        {/* Scissors */}
        <g stroke="#d4a017" strokeWidth="1.2" strokeLinecap="round">
          <circle cx="26" cy="30" r="4" fill="none" />
          <circle cx="26" cy="50" r="4" fill="none" />
          <line x1="29.5" y1="32.5" x2="54" y2="40" />
          <line x1="29.5" y1="47.5" x2="54" y2="40" />
          <line x1="51" y1="38" x2="58" y2="36" />
          <line x1="51" y1="42" x2="58" y2="44" />
        </g>
        {/* KC text */}
        <text
          x="40"
          y="46"
          textAnchor="middle"
          fill="#d4a017"
          fontFamily="Georgia, serif"
          fontSize="22"
          fontWeight="600"
          letterSpacing="1"
        >
          KC
        </text>
      </svg>
    </div>
  );
}
