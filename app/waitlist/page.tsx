import type { Metadata } from "next";
import WaveDivider from "@/components/WaveDivider";
import FadeInSection from "@/components/FadeInSection";
import WaitlistForm from "@/components/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description:
    "Join the KC Cuts and Style waitlist for sensory-friendly, therapeutic mobile haircuts in Southborough, MA. We respond within 48 hours.",
};

const faqs = [
  {
    q: "How long is the waitlist?",
    a: "Wait times vary depending on location and service needs. Kristina will give you an honest estimate when she follows up. We appreciate your patience • every family on this list matters.",
  },
  {
    q: "What happens after I submit?",
    a: "Kristina personally reviews every submission and reaches out within 48 hours by phone or email to introduce herself, ask any follow-up questions, and discuss availability. No auto-responders here.",
  },
  {
    q: "Do I need a formal diagnosis to apply?",
    a: "No. If your child has sensory sensitivities that make haircuts difficult • diagnosed or not • this is the right place. Kristina works with all sensory profiles.",
  },
  {
    q: "Is there a consultation before the first haircut?",
    a: "Yes. For sensory clients, Kristina typically begins with a conversation (by phone or in-person) to understand your child's specific needs before scheduling. The first in-home visit may be a \"meet and greet\" with no haircut at all • that's normal and expected.",
  },
  {
    q: "What areas do you serve?",
    a: "Southborough, MA and approximately a 15-mile radius • including Westborough, Marlborough, Northborough, Shrewsbury, and parts of Worcester. Not sure if you're in range? Submit the form and we'll let you know.",
  },
  {
    q: "How do I contact Kristina directly?",
    a: "The best way to reach Kristina is through this form or via Instagram DM @kccutsandstyle. She reads every message personally.",
  },
];

export default function WaitlistPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="grain-overlay pt-32 pb-20 px-4 sm:px-6 text-center"
        style={{
          background:
            "linear-gradient(160deg, #1a0a0a 0%, #2d0e0e 40%, #3d1515 100%)",
        }}
        aria-labelledby="waitlist-hero-heading"
      >
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="section-label text-gold-400 mb-4">
            Currently Accepting Applications
          </p>
          <h1
            id="waitlist-hero-heading"
            className="font-display text-5xl sm:text-6xl md:text-7xl text-cream-100 leading-tight mb-6"
          >
            Join the
            <br />
            <em className="text-gold-300">Waitlist</em>
          </h1>
          <p className="font-body text-cream-300 text-lg max-w-xl mx-auto leading-relaxed">
            Sensory haircut appointments are in high demand. Fill out the form
            below and Kristina will personally reach out within{" "}
            <span className="text-gold-300 font-medium">48 hours</span> to
            discuss your family&apos;s needs and availability.
          </p>
        </div>
      </section>

      <WaveDivider fill="#faf7f0" />

      {/* Main content */}
      <section className="bg-cream-100 py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Sidebar info */}
          <aside className="lg:col-span-2 space-y-6" aria-label="Waitlist information">
            <FadeInSection direction="left">
              <div className="bg-white border border-cream-200 rounded-sm p-6">
                <h2 className="font-display text-2xl text-gray-900 mb-4">
                  What Happens Next
                </h2>
                <ol className="space-y-5" aria-label="Next steps after submitting">
                  {[
                    {
                      step: "1",
                      title: "You submit this form",
                      detail:
                        "Takes about 3 minutes. Be as detailed as you'd like about your child's needs.",
                    },
                    {
                      step: "2",
                      title: "Kristina reviews it personally",
                      detail:
                        "Every submission is read by Kristina herself • not an assistant, not an auto-responder.",
                    },
                    {
                      step: "3",
                      title: "She reaches out within 48 hours",
                      detail:
                        "By phone or email to introduce herself and discuss your situation.",
                    },
                    {
                      step: "4",
                      title: "We schedule a consultation",
                      detail:
                        "For sensory clients, this might be a call or a meet-and-greet before the first haircut.",
                    },
                  ].map((item) => (
                    <li key={item.step} className="flex gap-4">
                      <div
                        className="flex-shrink-0 w-8 h-8 rounded-full bg-crimson-800 text-cream-100 flex items-center justify-center font-body text-sm font-semibold"
                        aria-hidden="true"
                      >
                        {item.step}
                      </div>
                      <div>
                        <p className="font-body text-sm font-semibold text-gray-800">
                          {item.title}
                        </p>
                        <p className="font-body text-xs text-gray-500 mt-0.5 leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </FadeInSection>

            <FadeInSection direction="left" delay={100}>
              <div className="bg-crimson-800 rounded-sm p-6 text-cream-100">
                <p className="section-label text-gold-400 mb-2">A note from Kristina</p>
                <p className="font-display text-xl italic leading-relaxed mb-3">
                  &ldquo;I know how exhausted you are. I know haircut day is one of
                  the hardest days. That&apos;s exactly why I do this • and why I
                  take every inquiry seriously.&rdquo;
                </p>
                <p className="font-body text-sm text-cream-300">
                  • Kristina Arroyo, Licensed Hairstylist & ASD Parent
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="left" delay={150}>
              <div className="bg-white border border-cream-200 rounded-sm p-6">
                <h3 className="font-display text-xl text-gray-900 mb-3">
                  Privacy Promise
                </h3>
                <p className="font-body text-sm text-gray-600 leading-relaxed">
                  Your information • and your family&apos;s health information •
                  is never shared, sold, or used for marketing. It&apos;s used
                  solely to coordinate your care with Kristina.
                </p>
              </div>
            </FadeInSection>
          </aside>

          {/* Form */}
          <FadeInSection className="lg:col-span-3" direction="right">
            <div className="bg-white border border-cream-200 rounded-sm p-6 sm:p-8 shadow-sm">
              <h2 className="font-display text-3xl text-gray-900 mb-2">
                Waitlist Request Form
              </h2>
              <p className="font-body text-sm text-gray-500 mb-7">
                Fields marked with{" "}
                <span className="text-crimson-600" aria-label="asterisk">*</span>{" "}
                are required.
              </p>
              <WaitlistForm />
            </div>
          </FadeInSection>
        </div>
      </section>

      <WaveDivider fill="#ffffff" flip />

      {/* FAQs */}
      <section
        className="bg-white py-20 px-4 sm:px-6"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-3xl mx-auto">
          <FadeInSection>
            <p className="section-label mb-3 text-center">FAQ</p>
            <h2
              id="faq-heading"
              className="font-display text-4xl sm:text-5xl text-gray-900 mb-10 text-center"
            >
              Common Questions
            </h2>
          </FadeInSection>

          <dl className="space-y-5">
            {faqs.map((faq, i) => (
              <FadeInSection key={i} delay={i * 60}>
                <div className="border border-cream-200 rounded-sm p-6 bg-cream-50">
                  <dt className="font-display text-xl text-gray-900 mb-2">
                    {faq.q}
                  </dt>
                  <dd className="font-body text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </dd>
                </div>
              </FadeInSection>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}
