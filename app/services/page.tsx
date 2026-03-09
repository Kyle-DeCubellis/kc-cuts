import type { Metadata } from "next";
import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";
import FadeInSection from "@/components/FadeInSection";

export const metadata: Metadata = {
  title: "Services",
  description:
    "KC Cuts and Style services: sensory-friendly therapeutic haircuts, mobile in-home haircuts, birthday party packages, parent training (From Tears to Trims!), and braiding classes.",
};

const services = [
  {
    id: "sensory",
    badge: "Signature Service",
    tagline: "Therapeutic · ASD · SPD",
    title: "Sensory-Friendly Haircuts",
    icon: <HeartIcon className="w-8 h-8" />,
    description:
      "Kristina's signature service • the reason KC Cuts exists. Designed specifically for clients with ASD, SPD, and other sensory sensitivities, these in-home visits are led by a licensed hairstylist who is also an ASD parent and trained therapeutic specialist.",
    whatToExpect: [
      "Initial consultation call to understand your child's specific sensory profile",
      "First visit may be a \"meet and greet\" • building trust before any scissors appear",
      "You choose the environment: lighting, music, white noise, distractions",
      "Sessions run longer than a typical haircut • never rushed",
      "Weighted lap pads, noise-reducing tools, and sensory accommodations available",
      "Full desensitization approach for first-time clients",
      "Ongoing visits build a routine your child can predict and feel safe in",
    ],
    accommodations: [
      "Mobile • we come to you",
      "Flexible session length",
      "Calm, predictable structure",
      "ABA-informed techniques",
      "Parent/caregiver involvement welcomed",
      "Communication boards available",
    ],
    note: "Currently waitlist-only for new sensory clients. Join the waitlist to start the process.",
    cta: { label: "Join the Waitlist", href: "/waitlist" },
    featured: true,
  },
  {
    id: "mobile",
    badge: null,
    tagline: "Mobile · General",
    title: "General Mobile Haircuts",
    icon: <HouseIcon className="w-8 h-8" />,
    description:
      "Professional haircuts for the whole family • brought to your home. Whether you have a child who prefers familiar environments, a family member with mobility challenges, or simply love the convenience of in-home service, Kristina brings the salon to you.",
    whatToExpect: [
      "Scheduling by phone, text, or Instagram DM",
      "Kristina arrives with full professional kit",
      "Cuts for all ages and hair types",
      "Clean-up included",
    ],
    accommodations: [
      "All ages welcome",
      "All hair types and textures",
      "Flexible scheduling",
      "Southborough & 15-mile radius",
    ],
    note: null,
    cta: { label: "Join the Waitlist", href: "/waitlist" },
    featured: false,
  },
  {
    id: "birthday",
    badge: null,
    tagline: "Celebration · Group",
    title: "Birthday Party Packages",
    icon: <StarIcon className="w-8 h-8" />,
    description:
      "Transform birthday celebrations into a creative, sensory-conscious hair styling experience. Kristina works with your theme to create a fun, inclusive event • perfect for neurodiverse birthday parties where a traditional party environment might be overwhelming.",
    whatToExpect: [
      "Custom consultation to match your party theme",
      "Braiding, styling, and fun updos for guests",
      "Inclusive, low-pressure environment",
      "Accommodations available for sensory-sensitive guests",
      "Package duration and capacity discussed during booking",
    ],
    accommodations: [
      "Sensory-conscious atmosphere",
      "Flexible pace for all guests",
      "Indoor, home-based events",
      "Custom packages available",
    ],
    note: null,
    cta: { label: "Ask About Packages", href: "/waitlist" },
    featured: false,
  },
  {
    id: "training",
    badge: null,
    tagline: "Training · Consulting",
    title: "Parent Training & Consulting",
    icon: <AcademicIcon className="w-8 h-8" />,
    description:
      "Kristina's \"From Tears to Trims!\" program teaches parents and caregivers the same techniques she uses with her clients • so you can support the haircut process at home between visits. She also offers professional consulting for ABA providers, special education schools, and other organizations serving neurodiverse populations.",
    whatToExpect: [
      '"From Tears to Trims!" parent workshops • group and individual formats',
      "One-on-one family training sessions",
      "Professional development for ABA therapists and aides",
      "Presentations at conferences and organizations (BABAT and others)",
      "Consulting for schools and ABA centers on sensory haircut protocols",
    ],
    accommodations: [
      "Presented at BABAT conferences",
      "Available for school/ABA provider bookings",
      "In-home or remote formats available",
      "Tailored to your family or organization",
    ],
    note: "Kristina is an active speaker at BABAT and welcomes inquiries from organizations.",
    cta: { label: "Inquire About Training", href: "/waitlist" },
    featured: false,
  },
  {
    id: "braiding",
    badge: null,
    tagline: "Classes · Skill-Building",
    title: "Braiding Classes",
    icon: <ScissorsIcon className="w-8 h-8" />,
    description:
      "Learn the art of braiding in a relaxed, hands-on class format. Whether you're a parent wanting to style your child's hair at home, or someone looking to build a new skill, Kristina's braiding classes are approachable, fun, and thorough.",
    whatToExpect: [
      "Beginner-friendly instruction",
      "Small group or individual format",
      "Classic braids, cornrows, and creative styles",
      "Ongoing class schedule • inquire for upcoming dates",
    ],
    accommodations: [
      "Sensory-aware class environment",
      "Small group sizes",
      "All skill levels welcome",
      "Great for parents & caregivers",
    ],
    note: null,
    cta: { label: "Inquire About Classes", href: "/waitlist" },
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="grain-overlay pt-32 pb-20 px-4 sm:px-6 text-center"
        style={{
          background: "linear-gradient(160deg, #1a0a0a 0%, #2d0e0e 40%, #3d1515 100%)",
        }}
        aria-labelledby="services-hero-heading"
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label text-gold-400 mb-4">Services</p>
          <h1
            id="services-hero-heading"
            className="font-display text-5xl sm:text-6xl md:text-7xl text-cream-100 leading-tight mb-6"
          >
            What We Do.
            <br />
            <em className="text-gold-300">How We Do It.</em>
          </h1>
          <p className="font-body text-cream-300 text-lg max-w-xl mx-auto leading-relaxed">
            Every service at KC Cuts is designed with intention • for the child
            who needs extra time, the family that needs extra support, and the
            community that deserves better options.
          </p>
        </div>
      </section>

      <WaveDivider fill="#faf7f0" />

      {/* Service area note */}
      <div className="bg-cream-100 py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-center gap-2 text-center">
          <LocationIcon className="w-4 h-4 text-gold-500 flex-shrink-0" />
          <p className="font-body text-sm text-gray-600">
            {/* TODO: Confirm service area towns with Kristina */}
            Serving <strong>Southborough, MA</strong> and a 15-mile radius •
            Westborough, Marlborough, Northborough, Shrewsbury, and surrounding
            MetroWest communities.
          </p>
        </div>
      </div>

      {/* Services list */}
      <section
        className="bg-cream-100 pb-24 px-4 sm:px-6"
        aria-label="Services offered"
      >
        <div className="max-w-5xl mx-auto space-y-10 pt-10">
          {services.map((service, i) => (
            <FadeInSection key={service.id} delay={i * 60}>
              <article
                id={service.id}
                className={`rounded-sm border overflow-hidden ${
                  service.featured
                    ? "border-crimson-700 shadow-lg"
                    : "border-cream-200 bg-white shadow-sm"
                }`}
              >
                {/* Header */}
                <div
                  className={`p-6 sm:p-8 ${
                    service.featured
                      ? "bg-crimson-800 text-cream-100"
                      : "bg-white"
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-sm flex items-center justify-center ${
                        service.featured ? "bg-crimson-700" : "bg-cream-100"
                      }`}
                    >
                      <span
                        className={
                          service.featured ? "text-gold-300" : "text-crimson-700"
                        }
                      >
                        {service.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <p
                          className={`section-label ${
                            service.featured ? "text-gold-400" : "text-gold-600"
                          }`}
                        >
                          {service.tagline}
                        </p>
                        {service.badge && (
                          <span className="inline-block bg-gold-500 text-white text-xs font-body font-semibold tracking-widest uppercase px-2.5 py-0.5 rounded-sm">
                            {service.badge}
                          </span>
                        )}
                      </div>
                      <h2
                        className={`font-display text-3xl sm:text-4xl font-semibold leading-tight mb-3 ${
                          service.featured ? "text-cream-100" : "text-gray-900"
                        }`}
                      >
                        {service.title}
                      </h2>
                      <p
                        className={`font-body leading-relaxed ${
                          service.featured ? "text-cream-300" : "text-gray-600"
                        }`}
                      >
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div
                  className={`p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-2 gap-8 ${
                    service.featured ? "bg-crimson-900/50" : "bg-cream-50"
                  }`}
                >
                  {/* What to expect */}
                  <div>
                    <h3
                      className={`font-body text-xs font-semibold tracking-widest uppercase mb-4 ${
                        service.featured ? "text-gold-400" : "text-gold-600"
                      }`}
                    >
                      What to Expect
                    </h3>
                    <ul className="space-y-2.5">
                      {service.whatToExpect.map((item, j) => (
                        <li key={j} className="flex items-start gap-2.5">
                          <span
                            className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                              service.featured ? "bg-gold-400" : "bg-crimson-500"
                            }`}
                            aria-hidden="true"
                          />
                          <span
                            className={`font-body text-sm leading-snug ${
                              service.featured ? "text-cream-300" : "text-gray-600"
                            }`}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Accommodations */}
                  <div>
                    <h3
                      className={`font-body text-xs font-semibold tracking-widest uppercase mb-4 ${
                        service.featured ? "text-gold-400" : "text-gold-600"
                      }`}
                    >
                      Key Details
                    </h3>
                    <ul className="space-y-2.5 mb-6">
                      {service.accommodations.map((item, j) => (
                        <li key={j} className="flex items-center gap-2.5">
                          <CheckIcon
                            className={`w-4 h-4 flex-shrink-0 ${
                              service.featured ? "text-gold-400" : "text-sage-600"
                            }`}
                          />
                          <span
                            className={`font-body text-sm ${
                              service.featured ? "text-cream-300" : "text-gray-600"
                            }`}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {service.note && (
                      <div
                        className={`p-3 rounded-sm border text-xs font-body leading-relaxed mb-5 ${
                          service.featured
                            ? "bg-crimson-800/60 border-crimson-700 text-cream-300"
                            : "bg-gold-50 border-gold-200 text-gray-600"
                        }`}
                      >
                        <strong>Note:</strong> {service.note}
                      </div>
                    )}

                    <Link
                      href={service.cta.href}
                      className={
                        service.featured ? "btn-ghost inline-flex" : "btn-primary inline-flex"
                      }
                    >
                      {service.cta.label}
                    </Link>
                  </div>
                </div>
              </article>
            </FadeInSection>
          ))}
        </div>
      </section>

      <WaveDivider fill="#1a0a0a" />

      {/* Footer CTA */}
      <section
        className="grain-overlay py-20 px-4 sm:px-6 text-center"
        style={{ background: "linear-gradient(135deg, #1a0a0a, #2d0e0e)" }}
        aria-labelledby="services-cta-heading"
      >
        <div className="relative z-10 max-w-xl mx-auto">
          <FadeInSection>
            <h2
              id="services-cta-heading"
              className="font-display text-4xl text-cream-100 mb-4"
            >
              Not Sure Where to Start?
            </h2>
            <p className="font-body text-cream-300 mb-8 leading-relaxed">
              Fill out the waitlist form and Kristina will reach out to discuss
              which service is the right fit for your family.
            </p>
            <Link href="/waitlist" className="btn-ghost">
              Join the Waitlist
            </Link>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}

// Icons

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

function HouseIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function AcademicIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
  );
}

function ScissorsIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
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
