import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 grain-overlay"
      style={{
        background: "linear-gradient(160deg, #1a0a0a 0%, #2d0e0e 60%, #3d1515 100%)",
      }}
    >
      <div className="relative z-10 text-center max-w-md">
        <p className="font-body text-gold-400 text-xs tracking-widest uppercase mb-4">
          404
        </p>
        <h1 className="font-display text-5xl text-cream-100 mb-4">
          Page Not Found
        </h1>
        <p className="font-body text-cream-300 mb-8">
          Looks like this page wandered off. Let&apos;s get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-ghost">
            Back to Home
          </Link>
          <Link
            href="/waitlist"
            className="font-body text-gold-300 hover:text-gold-200 text-sm transition-colors flex items-center justify-center gap-2"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </div>
  );
}
