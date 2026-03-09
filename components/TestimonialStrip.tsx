"use client";

import { useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "She is the best!!! My son has severe autism and she is amazing with him. I can't believe how calm he was. She is so patient and kind.",
    attribution: "Melissa R.",
    platform: "Facebook Review",
    stars: 5,
  },
  {
    quote:
      "It's the best haircut he has ever had. She came to our home, worked at his pace, and didn't rush him once. We are so grateful we found her.",
    attribution: "Jennifer M.",
    platform: "Facebook Review",
    stars: 5,
  },
  {
    quote:
      "She literally is lifesaving. My son hasn't let anyone near his hair in two years. Kristina worked with him for a full session and got it done. I cried.",
    attribution: "Sarah T.",
    platform: "Facebook Review",
    stars: 5,
  },
  {
    quote:
      "So easy to schedule and very talented. She understands sensory issues on a deep level • you can tell this is her calling, not just a job.",
    attribution: "Amanda K.",
    platform: "Facebook Review",
    stars: 5,
  },
  {
    quote:
      "We had been struggling for years to get my daughter's hair cut without a meltdown. Kristina changed everything. Now my daughter asks for her haircut. I never thought I'd say that.",
    attribution: "Rachel L.",
    platform: "Facebook Review",
    stars: 5,
  },
];

export default function TestimonialStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollTo = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.children[index] as HTMLElement;
    if (card) {
      el.scrollTo({ left: card.offsetLeft - 24, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  return (
    <div>
      {/* Scrollable testimonial row */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onScroll={(e) => {
          const el = e.currentTarget;
          const index = Math.round(
            el.scrollLeft / (el.scrollWidth / testimonials.length)
          );
          setActiveIndex(Math.min(index, testimonials.length - 1));
        }}
        role="list"
        aria-label="Client testimonials"
      >
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} index={i} />
        ))}
      </div>

      {/* Dot indicators */}
      <div
        className="flex items-center justify-center gap-2 mt-6"
        role="tablist"
        aria-label="Testimonial navigation"
      >
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            role="tab"
            aria-selected={activeIndex === i}
            aria-label={`Testimonial ${i + 1}`}
            className={`transition-all duration-300 rounded-full ${
              activeIndex === i
                ? "w-6 h-2 bg-crimson-700"
                : "w-2 h-2 bg-cream-300 hover:bg-cream-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function TestimonialCard({
  quote,
  attribution,
  platform,
  stars,
}: {
  quote: string;
  attribution: string;
  platform: string;
  stars: number;
  index: number;
}) {
  return (
    <article
      className="flex-shrink-0 w-[300px] sm:w-[360px] bg-white border border-cream-200 rounded-sm p-6 snap-start"
      role="listitem"
    >
      {/* Stars */}
      <div className="flex items-center gap-0.5 mb-4" aria-label={`${stars} out of 5 stars`}>
        {Array.from({ length: stars }).map((_, i) => (
          <StarIcon key={i} className="w-4 h-4 text-gold-500 fill-gold-400" />
        ))}
      </div>

      {/* Quote mark */}
      <div
        className="font-display text-5xl text-crimson-200 leading-none mb-2"
        aria-hidden="true"
      >
        &ldquo;
      </div>

      {/* Quote */}
      <blockquote className="font-body text-sm leading-relaxed text-gray-700 mb-5">
        {quote}
      </blockquote>

      {/* Attribution */}
      <footer className="flex items-center justify-between">
        <div>
          <p className="font-body text-sm font-semibold text-gray-900">
            {attribution}
          </p>
          <p className="font-body text-xs text-gray-400">{platform}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-crimson-100 flex items-center justify-center">
          <span
            className="font-display text-crimson-700 text-sm font-semibold"
            aria-hidden="true"
          >
            {attribution[0]}
          </span>
        </div>
      </footer>
    </article>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
