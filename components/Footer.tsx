import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Kristina" },
  { href: "/services", label: "Services" },
  { href: "/resources", label: "Resources" },
  { href: "/waitlist", label: "Join Waitlist" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-950 text-cream-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-center gap-3 mb-4 group"
              aria-label="KC Cuts and Style — Home"
            >
              <FooterLogo />
              <div>
                <p className="font-display text-cream-100 text-lg font-semibold leading-tight">
                  KC Cuts & Style
                </p>
                <p className="font-body text-xs text-gold-500 tracking-widest uppercase">
                  LLC
                </p>
              </div>
            </Link>
            <p className="font-body text-sm text-gray-400 leading-relaxed max-w-xs">
              Therapeutic, sensory-friendly haircuts for children and adults
              with ASD and SPD. Brought to your home.
            </p>
            <a
              href="https://www.instagram.com/kccutsandstyle"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-sm text-gold-400 hover:text-gold-300 transition-colors font-body"
              aria-label="Follow KC Cuts on Instagram (opens in new tab)"
            >
              <InstagramIcon className="w-4 h-4" />
              @kccutsandstyle
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-gray-400 hover:text-cream-100 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {[
                "Sensory Haircuts",
                "Mobile Haircuts",
                "Birthday Packages",
                "Parent Training",
                "Braiding Classes",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="font-body text-sm text-gray-400 hover:text-cream-100 transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-body text-xs font-semibold tracking-[0.2em] uppercase text-gold-500 mb-4">
              Contact & Area
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <LocationIcon className="w-4 h-4 text-gold-500 mt-0.5 flex-shrink-0" />
                <p className="font-body text-sm text-gray-400">
                  Southborough, MA
                  <br />
                  <span className="text-xs">
                    Serving a 15-mile radius:{" "}
                    {/* TODO: Confirm service area towns with Kristina */}
                    Westborough, Marlborough, Northborough, Shrewsbury &amp;
                    surrounding communities
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 text-gold-500 flex-shrink-0" />
                <a
                  href="mailto:Kccutsnstyle@gmail.com"
                  className="font-body text-sm text-gray-400 hover:text-cream-100 transition-colors"
                >
                  Kccutsnstyle@gmail.com
                </a>
              </div>
            </div>

            <div className="mt-6">
              <Link href="/waitlist" className="btn-primary text-sm py-2 px-4">
                Join Waitlist
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-gray-500">
            &copy; {year} KC Cuts and Style LLC. All rights reserved.
          </p>
          <div className="flex items-center gap-1">
            <span className="font-body text-xs text-gray-600">
              Licensed Hairstylist · MA License
            </span>
            <span className="mx-2 text-gray-700">·</span>
            <span className="font-body text-xs text-gray-600">
              Serving MetroWest MA
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <div className="w-9 h-9 flex-shrink-0">
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="40" cy="40" r="38" fill="#8B1A1A" />
        <circle cx="40" cy="40" r="36" fill="none" stroke="#d4a017" strokeWidth="1" />
        <text x="40" y="47" textAnchor="middle" fill="#d4a017" fontFamily="Georgia, serif" fontSize="24" fontWeight="600" letterSpacing="1">KC</text>
      </svg>
    </div>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LocationIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
