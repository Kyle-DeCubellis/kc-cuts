import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import WaveDivider from "@/components/WaveDivider";
import FadeInSection from "@/components/FadeInSection";
import { CredentialBadgeGroup } from "@/components/CredentialBadge";

export const metadata: Metadata = {
  title: "About Kristina Arroyo",
  description:
    "Meet Kristina Arroyo • licensed hairstylist with 25+ years experience, 10+ years specializing in sensory-friendly haircuts for clients with ASD and SPD, and a parent of a child with autism.",
};

const credentials = [
  {
    name: "NECC",
    description: "New England Center for Children • provider partner",
    type: "partner" as const,
  },
  {
    name: "ABS Behavioral Health Services",
    description: "ABA therapy provider collaboration",
    type: "partner" as const,
  },
  {
    name: "The Walden Street School",
    description: "Special education school partnership",
    type: "partner" as const,
  },
  {
    name: "BABAT Speaker",
    description: "Behavioral Analyst Association of MA & CT",
    type: "speaker" as const,
  },
  {
    name: "\"From Tears to Trims!\"",
    description: "Signature parent training program",
    type: "speaker" as const,
  },
  {
    name: "Licensed Hairstylist",
    description: "Commonwealth of Massachusetts",
    type: "affiliation" as const,
  },
];

const timeline = [
  {
    year: "25+",
    label: "Years as a\nLicensed Hairstylist",
    detail:
      "Kristina has been behind the chair for over two decades, honing her craft across every hair type, texture, and age group.",
  },
  {
    year: "10+",
    label: "Years Specializing in\nSensory-Friendly Haircuts",
    detail:
      "After recognizing an unmet need • first through her own child, then through her clientele • Kristina developed a specialized therapeutic approach.",
  },
  {
    year: "100s",
    label: "Families\nServed",
    detail:
      "From first-ever successful haircuts to ongoing relationships with ABA providers, Kristina has changed what \"haircut day\" means for hundreds of families.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section
        className="grain-overlay pt-32 pb-20 px-4 sm:px-6 text-center"
        style={{
          background:
            "linear-gradient(160deg, #1a0a0a 0%, #2d0e0e 40%, #3d1515 100%)",
        }}
        aria-labelledby="about-hero-heading"
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label text-gold-400 mb-4">About KC Cuts</p>
          <h1
            id="about-hero-heading"
            className="font-display text-5xl sm:text-6xl md:text-7xl text-cream-100 leading-tight mb-6"
          >
            The Story Behind
            <br />
            <em className="text-gold-300">the Practice</em>
          </h1>
          <p className="font-body text-cream-300 text-lg max-w-xl mx-auto leading-relaxed">
            A licensed hairstylist. A mother. An advocate. Kristina Arroyo built
            KC Cuts and Style for families like her own.
          </p>
        </div>
      </section>

      <WaveDivider fill="#ffffff" />

      {/* Origin story */}
      <section
        className="bg-white py-20 px-4 sm:px-6"
        aria-labelledby="story-heading"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <FadeInSection direction="left">
            <div>
              <p className="section-label mb-3">The Story</p>
              <h2
                id="story-heading"
                className="font-display text-4xl sm:text-5xl text-gray-900 mb-6 leading-tight"
              >
                It Started at Home
              </h2>

              <div className="space-y-5 font-body text-gray-600 leading-relaxed">
                <p>
                  Long before KC Cuts and Style existed, Kristina Arroyo was
                  just a mom • a licensed hairstylist and a mom • trying to give
                  her child a haircut without tears. Her child has ASD, and what
                  should have been a simple routine was anything but.
                </p>
                <p>
                  &ldquo;I knew the techniques. I was a professional. And it
                  was still so hard. I couldn&apos;t imagine what families
                  without that training were going through.&rdquo;
                </p>
                <p>
                  That realization sparked a decade of intensive study,
                  collaboration with ABA therapists, and development of a
                  genuine therapeutic framework for haircuts • one that meets
                  sensory clients exactly where they are.
                </p>
                <p>
                  Today, KC Cuts and Style is the culmination of 25+ years of
                  professional expertise, 10+ years of sensory-specific
                  practice, and a deeply personal understanding of what these
                  families need. Not just a haircut. A safe experience.
                </p>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection direction="right" delay={100}>
            {/* Stats */}
            <div className="space-y-5">
              {timeline.map((item) => (
                <div
                  key={item.year}
                  className="flex gap-5 p-5 border border-cream-200 rounded-sm bg-cream-50"
                >
                  <div className="flex-shrink-0 w-20 text-right">
                    <p className="font-display text-4xl text-crimson-700 font-semibold">
                      {item.year}
                    </p>
                  </div>
                  <div className="border-l border-gold-300 pl-5">
                    <p className="font-body text-sm font-semibold text-gray-800 whitespace-pre-line leading-snug mb-1">
                      {item.label}
                    </p>
                    <p className="font-body text-sm text-gray-500 leading-relaxed">
                      {item.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      <WaveDivider fill="#faf7f0" flip />

      {/* Philosophy */}
      <section
        className="bg-cream-100 py-20 px-4 sm:px-6"
        aria-labelledby="philosophy-heading"
      >
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <p className="section-label mb-3 text-center">Philosophy</p>
            <h2
              id="philosophy-heading"
              className="font-display text-4xl sm:text-5xl text-gray-900 mb-10 text-center"
            >
              How Kristina Approaches Every Visit
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "✦",
                title: "Meet Them Where They Are",
                body: "Every first visit starts with relationship-building, not scissors. Kristina may spend an entire appointment simply getting to know your child before any haircut happens. That&apos;s not a failure • that&apos;s the process.",
              },
              {
                icon: "✦",
                title: "Your Home Is the Clinic",
                body: "Salons are overwhelming • noise, lights, strangers, smells. By coming to you, Kristina removes the biggest sensory barrier from the start. Your child&apos;s space. Your child&apos;s rules.",
              },
              {
                icon: "✦",
                title: "Informed by ABA Principles",
                body: "Kristina collaborates closely with ABA therapists and has trained with the professionals she works alongside. Her techniques are evidence-informed, not improvised.",
              },
              {
                icon: "✦",
                title: "Families Are Partners",
                body: "You know your child best. Kristina works with you, learning what works, what doesn&apos;t, and adjusting every single visit. Nothing is one-size-fits-all here.",
              },
            ].map((item, i) => (
              <FadeInSection key={item.title} delay={i * 80}>
                <div className="bg-white border border-cream-200 rounded-sm p-6">
                  <span
                    className="block text-gold-500 text-xl mb-3"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <h3 className="font-display text-xl text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p
                    className="font-body text-sm text-gray-600 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: item.body }}
                  />
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill="#ffffff" />

      {/* Husband/wife team + credentials */}
      <section
        className="bg-white py-20 px-4 sm:px-6"
        aria-labelledby="team-heading"
      >
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <div className="text-center mb-12">
              <p className="section-label mb-3">The Team</p>
              <h2
                id="team-heading"
                className="font-display text-4xl sm:text-5xl text-gray-900 mb-4"
              >
                A Family Practice
              </h2>
              <p className="font-body text-gray-500 max-w-lg mx-auto">
                KC Cuts and Style is a husband-and-wife venture. Behind every
                successful visit is a team committed to making it work for your
                family.
              </p>
            </div>
          </FadeInSection>

          <FadeInSection delay={100}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
              {/* Kristina card */}
              <div className="bg-cream-50 border border-cream-200 rounded-sm p-6">
                <div className="w-16 h-16 rounded-full overflow-hidden mb-4 relative">
                  <Image
                    src="/kristina.png"
                    alt="Kristina Arroyo"
                    fill
                    className="object-cover object-top"
                    sizes="64px"
                  />
                </div>
                <h3 className="font-display text-2xl text-gray-900 mb-1">
                  Kristina Arroyo
                </h3>
                <p className="section-label text-gold-600 mb-3">
                  Licensed Hairstylist · Founder
                </p>
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  25+ years licensed hairstylist. 10+ years therapeutic /
                  sensory-friendly specialty. ASD parent. Speaker, trainer, and
                  advocate for neurodiverse families throughout MetroWest MA.
                </p>
              </div>

              {/* Partner card */}
              <div className="bg-cream-50 border border-cream-200 rounded-sm p-6">
                <div
                  className="w-16 h-16 rounded-full bg-sage-100 flex items-center justify-center mb-4"
                  aria-hidden="true"
                >
                  <span className="font-display text-sage-700 text-2xl font-semibold">
                    ✦
                  </span>
                </div>
                <h3 className="font-display text-2xl text-gray-900 mb-1">
                  The Arroyo Family
                </h3>
                <p className="section-label text-gold-600 mb-3">
                  Husband/Wife Team · Operations
                </p>
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  KC Cuts is a true family business. Behind every appointment is
                  a team that shares the same values: patience, respect, and the
                  belief that every family deserves access to a skilled,
                  compassionate stylist.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Credentials */}
          <FadeInSection delay={150}>
            <div>
              <h3 className="font-display text-2xl text-gray-900 mb-5">
                Affiliations & Credentials
              </h3>
              <CredentialBadgeGroup credentials={credentials} />
            </div>
          </FadeInSection>
        </div>
      </section>

      <WaveDivider fill="#1a0a0a" />

      {/* CTA */}
      <section
        className="grain-overlay py-20 px-4 sm:px-6 text-center"
        style={{ background: "linear-gradient(135deg, #1a0a0a, #2d0e0e)" }}
        aria-labelledby="about-cta-heading"
      >
        <div className="relative z-10 max-w-xl mx-auto">
          <FadeInSection>
            <h2
              id="about-cta-heading"
              className="font-display text-4xl text-cream-100 mb-4"
            >
              Ready to Work With Kristina?
            </h2>
            <p className="font-body text-cream-300 mb-8">
              Sensory haircut spots are limited. Join the waitlist to start the
              conversation.
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
