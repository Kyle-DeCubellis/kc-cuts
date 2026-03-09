import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import TestimonialStrip from "@/components/TestimonialStrip";
import WaveDivider from "@/components/WaveDivider";
import FadeInSection from "@/components/FadeInSection";
import { CredentialBadgeGroup } from "@/components/CredentialBadge";

export const metadata: Metadata = {
  title: "Sensory-Friendly Mobile Haircuts | KC Cuts and Style LLC",
  description:
    "KC Cuts and Style LLC • therapeutic, sensory-friendly mobile haircuts for children and adults with ASD and SPD. Serving Southborough, MA and surrounding MetroWest communities.",
};

const credentials = [
  { name: "NECC", description: "New England Center for Children", type: "partner" as const },
  { name: "ABS Behavioral Health", description: "ABA Provider Partner", type: "partner" as const },
  { name: "The Walden Street School", description: "Special Education Partner", type: "partner" as const },
  { name: "BABAT Speaker", description: "Behavioral Analyst Assoc. of MA", type: "speaker" as const },
  { name: "\"From Tears to Trims!\"", description: "Parent Training Program", type: "speaker" as const },
];

const services = [
  {
    icon: <HeartHandsIcon className="w-6 h-6" />,
    tagline: "Therapeutic · Sensory",
    title: "Sensory-Friendly Haircuts",
    description:
      "Designed for clients with ASD, SPD, and sensory sensitivities. Kristina works at your child's pace, in your home, with the accommodations that make haircuts possible.",
    details: [
      "Mobile, in-home visits • your child's safe space",
      "Extended session times, no rush",
      "Weighted lap pads, noise-reducing tools available",
      "Full desensitization approach for first visits",
    ],
    featured: true,
  },
  {
    icon: <HouseIcon className="w-6 h-6" />,
    tagline: "Mobile · General",
    title: "Mobile Haircuts",
    description:
      "Convenient, professional haircuts for the whole family • in the comfort of your own home. No waiting rooms, no unfamiliar environments.",
    details: [
      "All ages, all hair types",
      "Serving Southborough & 15-mile radius",
      "Flexible scheduling",
    ],
    featured: false,
  },
  {
    icon: <CakeIcon className="w-6 h-6" />,
    tagline: "Celebration",
    title: "Birthday Party Packages",
    description:
      "Make your child's celebration special with an interactive hair styling party • braiding, styles, and fun for the whole group.",
    details: [
      "Customized to your theme",
      "Great for neurodiverse friend groups",
      "Inclusive, low-sensory environment",
    ],
    featured: false,
  },
  {
    icon: <BookOpenIcon className="w-6 h-6" />,
    tagline: "Education · Consulting",
    title: "Parent Training & Consulting",
    description:
      "Learn the techniques Kristina uses with her own and her clients' children • from the award-winning \"From Tears to Trims!\" parent training program.",
    details: [
      "Individual family sessions",
      "Professional training for ABA providers",
      "Presented at BABAT conferences",
    ],
    featured: false,
  },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Mission strip */}
      <section className="bg-crimson-800 py-12" aria-label="Mission statement">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-display text-2xl sm:text-3xl text-cream-100 italic leading-relaxed">
            &ldquo;Every child deserves a haircut that feels safe. I built this
            practice for families who thought that wasn&apos;t possible.&rdquo;
          </p>
          <p className="font-body text-gold-300 text-sm mt-4 tracking-widest uppercase">
            • Kristina Arroyo, Licensed Hairstylist & ASD Parent
          </p>
        </div>
      </section>

      <WaveDivider fill="#faf7f0" />

      {/* Services overview */}
      <section
        className="bg-cream-100 py-20 px-4 sm:px-6"
        aria-labelledby="services-heading"
      >
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <p className="section-label mb-3">What We Offer</p>
              <h2
                id="services-heading"
                className="font-display text-4xl sm:text-5xl text-gray-900 mb-4"
              >
                Services Built Around <em>Your Child</em>
              </h2>
              <p className="font-body text-gray-500 max-w-xl mx-auto">
                From therapeutic first haircuts to family mobile services •
                Kristina brings 25+ years of experience to your door.
              </p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((service, i) => (
              <FadeInSection key={service.title} delay={i * 80}>
                <ServiceCard {...service} href="/services" />
              </FadeInSection>
            ))}
          </div>

          <FadeInSection className="text-center mt-10">
            <Link href="/services" className="btn-secondary">
              View All Services & Details
            </Link>
          </FadeInSection>
        </div>
      </section>

      <WaveDivider fill="#ffffff" flip />

      {/* About teaser */}
      <section
        className="bg-white py-20 px-4 sm:px-6"
        aria-labelledby="about-heading"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <FadeInSection direction="left">
            <div className="relative aspect-square max-w-sm mx-auto lg:mx-0 rounded-sm overflow-hidden">
              <Image
                src="/kristina.png"
                alt="Kristina Arroyo, licensed hairstylist and founder of KC Cuts and Style LLC"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 384px, 384px"
                priority
              />
              {/* Gold corner accents */}
              <div
                className="absolute top-4 right-4 w-12 h-12 border-t border-r border-gold-500/60 z-10"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-gold-500/60 z-10"
                aria-hidden="true"
              />
            </div>
          </FadeInSection>

          <FadeInSection direction="right">
            <div>
              <p className="section-label mb-3">About Kristina</p>
              <h2
                id="about-heading"
                className="font-display text-4xl sm:text-5xl text-gray-900 mb-5 leading-tight"
              >
                A Specialist.
                <br />A Parent.
                <br />
                <em className="text-crimson-700">An Advocate.</em>
              </h2>
              <div className="gold-accent-left mb-6">
                <p className="font-body text-gray-600 leading-relaxed">
                  With over 25 years as a licensed hairstylist • and more than
                  a decade specializing in sensory-friendly techniques • Kristina
                  Arroyo brings both professional mastery and deeply personal
                  understanding to every appointment.
                </p>
              </div>
              <p className="font-body text-gray-600 leading-relaxed mb-6">
                As a parent of a child with ASD herself, Kristina didn&apos;t
                just build a service • she built the service she wished had
                existed for her own family.
              </p>

              <div className="mb-8">
                <CredentialBadgeGroup credentials={credentials} />
              </div>

              <Link href="/about" className="btn-primary">
                Kristina&apos;s Full Story
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>

      <WaveDivider fill="#faf7f0" />

      {/* Testimonials */}
      <section
        className="bg-cream-100 py-20 px-4 sm:px-6"
        aria-labelledby="testimonials-heading"
      >
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="mb-10">
              <p className="section-label mb-3">What Families Say</p>
              <h2
                id="testimonials-heading"
                className="font-display text-4xl sm:text-5xl text-gray-900"
              >
                Real Stories. Real Relief.
              </h2>
            </div>
          </FadeInSection>
          <FadeInSection delay={100}>
            <TestimonialStrip />
          </FadeInSection>
        </div>
      </section>

      <WaveDivider fill="#1a0a0a" />

      {/* CTA Banner */}
      <section
        className="grain-overlay py-24 px-4 sm:px-6 text-center"
        style={{
          background:
            "linear-gradient(135deg, #1a0a0a 0%, #2d0e0e 50%, #3d1515 100%)",
        }}
        aria-labelledby="cta-heading"
      >
        <div className="relative z-10 max-w-2xl mx-auto">
          <FadeInSection>
            <p className="section-label text-gold-400 mb-4">
              Currently Accepting Waitlist Applications
            </p>
            <h2
              id="cta-heading"
              className="font-display text-4xl sm:text-5xl text-cream-100 mb-5"
            >
              Ready to Take the First Step?
            </h2>
            <p className="font-body text-cream-300 mb-8 leading-relaxed">
              Sensory haircut spots are limited and in high demand. Join the
              waitlist today and Kristina will reach out within 48 hours to
              discuss your child&apos;s needs.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/waitlist" className="btn-ghost text-base px-8 py-4">
                Join the Waitlist
              </Link>
              <Link
                href="/resources"
                className="font-body text-cream-400 hover:text-gold-300 text-sm transition-colors"
              >
                Learn about sensory haircuts first →
              </Link>
            </div>
          </FadeInSection>
        </div>
      </section>
    </>
  );
}

// Icon components

function HeartHandsIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0 0 4h1l4.5 4.5a1 1 0 0 0 1.5-.86V4a2 2 0 0 0-2-2zM13 2a2 2 0 0 1 2 2v5h5a2 2 0 0 1 0 4h-1l-4.5 4.5a1 1 0 0 1-1.5-.86V4a2 2 0 0 1 2-2z" />
      <path d="M12 17.5c0 2.485-2 4.5-4.5 4.5S3 19.985 3 17.5c0-1.785.95-3.295 2.35-4.15M12 17.5c0 2.485 2 4.5 4.5 4.5S21 19.985 21 17.5c0-1.785-.95-3.295-2.35-4.15" />
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

function CakeIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1" />
      <path d="M2 21h20" />
      <path d="M7 8v2" />
      <path d="M12 8v2" />
      <path d="M17 8v2" />
      <path d="M7 4h.01" />
      <path d="M12 4h.01" />
      <path d="M17 4h.01" />
    </svg>
  );
}

function BookOpenIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}
