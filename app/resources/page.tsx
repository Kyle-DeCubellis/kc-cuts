import type { Metadata } from "next";
import Link from "next/link";
import WaveDivider from "@/components/WaveDivider";
import FadeInSection from "@/components/FadeInSection";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Resources for families of children with ASD and SPD — including a guide to sensory-friendly haircuts, what to expect, and tips to prepare your child.",
};

const explainerSections = [
  {
    icon: "✦",
    title: "What Is a Sensory Haircut?",
    body: `A sensory haircut is a therapeutic approach to hair cutting designed specifically for individuals with sensory processing differences — most commonly those with Autism Spectrum Disorder (ASD) or Sensory Processing Disorder (SPD).

Unlike a traditional salon visit, a sensory haircut:
• Takes place in a familiar environment (usually the client's own home)
• Is paced entirely by the client's comfort level — never rushed
• Uses desensitization techniques developed in collaboration with ABA therapy principles
• Accommodates specific sensory triggers: sound, touch, smell, visual stimulation
• May take multiple visits before a full haircut is achieved — and that's intentional`,
  },
  {
    icon: "✦",
    title: "Why Are Haircuts So Hard for Sensory Kids?",
    body: `Haircuts involve an intense combination of sensory inputs that can be overwhelming for children with sensory differences:

• **Touch:** Scissors near the face and neck, capes, hair touching skin
• **Sound:** Clippers, blow dryers, the unfamiliar acoustic environment of a salon
• **Smell:** Hair products, salon chemicals
• **Visual:** Strangers, mirrors, unfamiliar spaces
• **Proprioception:** Sitting still, head positioning, the sensation of hair being pulled

For a neurotypical child, these might be mildly uncomfortable. For a child with ASD or SPD, any one of these inputs can trigger a full sensory meltdown. Layering all of them together in a public salon environment can make haircuts feel impossible.

The good news: with the right approach, they don't have to be.`,
  },
  {
    icon: "✦",
    title: "How Kristina's Approach Is Different",
    body: `Kristina has developed her therapeutic framework over 10+ years of direct work with sensory clients — informed by her collaborations with ABA therapists and her own experience as an ASD parent.

Key elements of her approach:
• **Location:** In your home, where your child already feels safe
• **Desensitization:** Gradual, incremental exposure — scissors might not appear until the second or third visit
• **Predictability:** Consistent routine, consistent stylist, consistent environment
• **Communication:** Uses visual supports and communication tools if helpful
• **Pace:** Client leads. If they need to stop, they stop. Full stop.
• **Family involvement:** Parents and caregivers are active participants, not observers`,
  },
  {
    icon: "✦",
    title: "Preparing Your Child for Their First Visit",
    body: `You don't need to prepare perfectly — Kristina will guide you. But here are some things that can help:

**Before the visit:**
• Let your child know someone is coming to help with their hair — use whatever language feels familiar
• Show them photos or videos of what a haircut looks like (social stories can help)
• Identify their favorite comfort items to have nearby
• Think about the time of day when your child is most regulated

**During the visit:**
• Follow Kristina's lead — she'll signal when to engage and when to step back
• Have your child's preferred snack, toy, or device available
• Don't worry about a perfect outcome on visit one. Relationship first.

**After:**
• Celebrate whatever happened — even if it was just meeting Kristina
• Note what worked and what didn't to share at the next visit`,
  },
];

const resources = [
  {
    title: "Autism Speaks",
    description: "Comprehensive resources for families navigating an ASD diagnosis.",
    url: "https://www.autismspeaks.org",
    type: "Organization",
  },
  {
    title: "STAR Institute for SPD",
    description:
      "The leading research and treatment center for Sensory Processing Disorder.",
    url: "https://sensoryhealth.org",
    type: "Organization",
  },
  {
    title: "NECC (New England Center for Children)",
    description:
      "One of the world's leading schools for children with autism — a KC Cuts partner.",
    url: "https://www.necc.org",
    type: "Partner",
  },
  {
    title: "BABAT",
    description:
      "Behavioral Analyst Association of MA & CT — conference where Kristina presents.",
    url: "https://www.babat.org",
    type: "Professional",
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="grain-overlay pt-32 pb-20 px-4 sm:px-6 text-center"
        style={{
          background:
            "linear-gradient(160deg, #1a0a0a 0%, #2d0e0e 40%, #3d1515 100%)",
        }}
        aria-labelledby="resources-hero-heading"
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label text-gold-400 mb-4">Resources</p>
          <h1
            id="resources-hero-heading"
            className="font-display text-5xl sm:text-6xl md:text-7xl text-cream-100 leading-tight mb-6"
          >
            Understand.
            <br />
            <em className="text-gold-300">Prepare. Succeed.</em>
          </h1>
          <p className="font-body text-cream-300 text-lg max-w-xl mx-auto leading-relaxed">
            Information and guidance for families navigating sensory haircuts —
            written from experience, not a textbook.
          </p>
        </div>
      </section>

      <WaveDivider fill="#faf7f0" />

      {/* Explainer content */}
      <section
        className="bg-cream-100 py-20 px-4 sm:px-6"
        aria-labelledby="explainer-heading"
      >
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <p className="section-label mb-3">Guide</p>
            <h2
              id="explainer-heading"
              className="font-display text-4xl sm:text-5xl text-gray-900 mb-4"
            >
              The Family&apos;s Guide to Sensory Haircuts
            </h2>
            <p className="font-body text-gray-500 mb-12 max-w-xl">
              Whether you&apos;re brand new to sensory haircuts or have been
              struggling for years, this guide will help you understand what to
              expect — and what&apos;s actually possible.
            </p>
          </FadeInSection>

          <div className="space-y-10">
            {explainerSections.map((section, i) => (
              <FadeInSection key={section.title} delay={i * 80}>
                <article className="bg-white border border-cream-200 rounded-sm p-7 shadow-sm">
                  <div className="flex items-start gap-4 mb-4">
                    <span
                      className="text-gold-500 text-xl mt-0.5"
                      aria-hidden="true"
                    >
                      {section.icon}
                    </span>
                    <h3 className="font-display text-2xl text-gray-900">
                      {section.title}
                    </h3>
                  </div>
                  <div className="pl-8">
                    <div className="font-body text-sm text-gray-600 leading-relaxed whitespace-pre-line prose-headings:font-semibold">
                      {section.body.split("\n").map((line, j) => {
                        if (line.startsWith("**") && line.endsWith("**")) {
                          return (
                            <p key={j} className="font-semibold text-gray-800 mt-4 mb-1">
                              {line.replace(/\*\*/g, "")}
                            </p>
                          );
                        }
                        if (line.startsWith("• ")) {
                          return (
                            <div key={j} className="flex items-start gap-2 my-1">
                              <span className="text-crimson-500 mt-1 flex-shrink-0" aria-hidden="true">•</span>
                              <span>{line.slice(2)}</span>
                            </div>
                          );
                        }
                        if (line === "") return <br key={j} />;
                        // Handle inline bold (**text**)
                        const parts = line.split(/\*\*(.+?)\*\*/g);
                        return (
                          <p key={j} className="mb-1">
                            {parts.map((part, k) =>
                              k % 2 === 1 ? (
                                <strong key={k} className="text-gray-800 font-semibold">
                                  {part}
                                </strong>
                              ) : (
                                part
                              )
                            )}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </article>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fill="#ffffff" flip />

      {/* Instagram placeholder */}
      <section
        className="bg-white py-20 px-4 sm:px-6"
        aria-labelledby="instagram-heading"
      >
        <div className="max-w-4xl mx-auto text-center">
          <FadeInSection>
            <p className="section-label mb-3">Follow Along</p>
            <h2
              id="instagram-heading"
              className="font-display text-4xl sm:text-5xl text-gray-900 mb-4"
            >
              @kccutsandstyle
            </h2>
            <p className="font-body text-gray-500 mb-8">
              Tips, behind-the-scenes moments, and updates from Kristina —
              directly from the families she serves.
            </p>

            {/* TODO: Wire up Instagram embed once API token provided */}
            <div
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8"
              aria-label="Instagram feed placeholder"
            >
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="aspect-square bg-cream-100 border border-cream-200 rounded-sm flex items-center justify-center"
                  aria-hidden="true"
                >
                  <div className="text-center p-4">
                    <InstagramIcon className="w-8 h-8 text-cream-300 mx-auto mb-2" />
                    <p className="font-body text-xs text-cream-400">
                      Feed coming soon
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://www.instagram.com/kccutsandstyle"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex"
              aria-label="Follow KC Cuts on Instagram (opens in new tab)"
            >
              <InstagramIcon className="w-4 h-4" />
              Follow on Instagram
            </a>
          </FadeInSection>
        </div>
      </section>

      <WaveDivider fill="#faf7f0" />

      {/* External resources */}
      <section
        className="bg-cream-100 py-20 px-4 sm:px-6"
        aria-labelledby="external-resources-heading"
      >
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <p className="section-label mb-3">Helpful Links</p>
            <h2
              id="external-resources-heading"
              className="font-display text-4xl sm:text-5xl text-gray-900 mb-10"
            >
              Trusted Organizations
            </h2>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {resources.map((resource, i) => (
              <FadeInSection key={resource.title} delay={i * 60}>
                <a
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white border border-cream-200 rounded-sm p-5 hover:border-crimson-300 hover:shadow-sm transition-all group"
                  aria-label={`${resource.title} — opens in new tab`}
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-display text-xl text-gray-900 group-hover:text-crimson-700 transition-colors">
                      {resource.title}
                    </h3>
                    <span className="flex-shrink-0 text-xs font-body font-semibold tracking-widest uppercase text-gold-600 bg-gold-50 border border-gold-200 px-2 py-0.5 rounded-sm">
                      {resource.type}
                    </span>
                  </div>
                  <p className="font-body text-sm text-gray-500 leading-relaxed">
                    {resource.description}
                  </p>
                  <p className="font-body text-xs text-crimson-600 mt-2 group-hover:text-crimson-700">
                    Visit site →
                  </p>
                </a>
              </FadeInSection>
            ))}
          </div>

          {/* TODO: Add blog/resource posts once content strategy confirmed */}
          <FadeInSection delay={200}>
            <div className="mt-10 border border-dashed border-gold-300 rounded-sm p-7 text-center bg-gold-50/50">
              <p className="section-label text-gold-600 mb-2">Coming Soon</p>
              <h3 className="font-display text-2xl text-gray-900 mb-2">
                Blog & Resource Library
              </h3>
              <p className="font-body text-sm text-gray-500 max-w-md mx-auto">
                In-depth articles, parent stories, and practitioner resources
                from Kristina are in development. Follow{" "}
                <a
                  href="https://www.instagram.com/kccutsandstyle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crimson-700 hover:underline"
                >
                  @kccutsandstyle
                </a>{" "}
                for updates.
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      <WaveDivider fill="#1a0a0a" />

      {/* CTA */}
      <section
        className="grain-overlay py-20 px-4 sm:px-6 text-center"
        style={{ background: "linear-gradient(135deg, #1a0a0a, #2d0e0e)" }}
        aria-labelledby="resources-cta-heading"
      >
        <div className="relative z-10 max-w-xl mx-auto">
          <FadeInSection>
            <h2
              id="resources-cta-heading"
              className="font-display text-4xl text-cream-100 mb-4"
            >
              Ready to Take the Next Step?
            </h2>
            <p className="font-body text-cream-300 mb-8">
              Join the waitlist and let&apos;s figure out together what&apos;s
              possible for your child.
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

function InstagramIcon({ className }: { className?: string }) {
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
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
