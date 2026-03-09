"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden grain-overlay"
      aria-labelledby="hero-heading"
    >
      {/* Background: layered warm gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse at 20% 50%, rgba(139,26,26,0.15) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 20%, rgba(212,160,23,0.12) 0%, transparent 50%),
            radial-gradient(ellipse at 50% 80%, rgba(94,131,98,0.08) 0%, transparent 50%),
            linear-gradient(160deg, #1a0a0a 0%, #2d0e0e 30%, #3d1515 60%, #2a1010 100%)
          `,
        }}
        aria-hidden="true"
      />

      {/* Decorative gold circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-gold-800/20 opacity-30 z-0"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-gold-900/10 opacity-20 z-0"
        aria-hidden="true"
      />

      {/* Decorative scissors SVG */}
      <div className="absolute right-8 bottom-24 opacity-5 z-0 hidden lg:block" aria-hidden="true">
        <ScissorsSVG className="w-64 h-64 text-gold-400" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
        <div
          className={`transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="section-label text-gold-400 mb-4">
            Southborough, MA · Mobile Hairstylist
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-100 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h1
            id="hero-heading"
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-100 leading-[1.05] mb-6"
          >
            Where Every
            <br />
            <em className="text-gold-300 not-italic">Haircut</em>
            <br />
            Feels Safe.
          </h1>
        </div>

        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-body text-cream-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Mobile haircut services for children and adults with ASD, SPD, and
            sensory sensitivities • brought to your home, on your terms, at your
            child&apos;s pace.
          </p>
        </div>

        <div
          className={`transition-all duration-700 delay-300 flex flex-col sm:flex-row items-center justify-center gap-4 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <Link href="/waitlist" className="btn-ghost text-base px-8 py-4">
            Join the Waitlist
          </Link>
          <Link
            href="/services"
            className="font-body text-cream-300 text-base hover:text-gold-300 transition-colors flex items-center gap-2"
          >
            View Services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Social proof pill */}
        <div
          className={`transition-all duration-700 delay-500 mt-16 inline-flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-5 py-2.5 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex -space-x-1">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-gradient-to-br from-gold-400 to-crimson-700 border-2 border-white/20 flex items-center justify-center text-[10px] text-white font-semibold"
                aria-hidden="true"
              >
                {["M", "J", "S", "A"][i]}
              </div>
            ))}
          </div>
          <p className="font-body text-cream-300 text-sm">
            Trusted by{" "}
            <span className="text-gold-300 font-medium">families across MetroWest</span>
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10" aria-hidden="true">
        <div
          className={`flex flex-col items-center gap-2 transition-all duration-1000 delay-700 ${
            visible ? "opacity-60" : "opacity-0"
          }`}
        >
          <p className="font-body text-xs text-cream-400 tracking-widest uppercase">
            Scroll
          </p>
          <div className="w-px h-8 bg-gradient-to-b from-cream-400 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}

function ScissorsSVG({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}
