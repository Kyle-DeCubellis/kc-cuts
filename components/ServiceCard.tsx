import Link from "next/link";

export interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  tagline: string;
  description: string;
  details?: string[];
  href?: string;
  featured?: boolean;
}

export default function ServiceCard({
  icon,
  title,
  tagline,
  description,
  details = [],
  href = "/services",
  featured = false,
}: ServiceCardProps) {
  return (
    <article
      className={`relative flex flex-col rounded-sm border transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg ${
        featured
          ? "bg-crimson-800 border-crimson-700 text-cream-100"
          : "bg-white border-cream-200 text-gray-800"
      }`}
    >
      {featured && (
        <div className="absolute -top-3 left-6">
          <span className="inline-block bg-gold-500 text-white text-xs font-body font-semibold tracking-widest uppercase px-3 py-1 rounded-sm">
            Signature Service
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Icon */}
        <div
          className={`w-12 h-12 rounded-sm flex items-center justify-center mb-5 ${
            featured ? "bg-crimson-700" : "bg-cream-100"
          }`}
        >
          <span
            className={featured ? "text-gold-300" : "text-crimson-700"}
            aria-hidden="true"
          >
            {icon}
          </span>
        </div>

        {/* Label */}
        <p
          className={`section-label mb-2 ${
            featured ? "text-gold-400" : "text-gold-600"
          }`}
        >
          {tagline}
        </p>

        {/* Title */}
        <h3
          className={`font-display text-2xl font-semibold leading-tight mb-3 ${
            featured ? "text-cream-100" : "text-gray-900"
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`font-body text-sm leading-relaxed mb-4 flex-1 ${
            featured ? "text-cream-300" : "text-gray-600"
          }`}
        >
          {description}
        </p>

        {/* Details list */}
        {details.length > 0 && (
          <ul className="space-y-1.5 mb-5">
            {details.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span
                  className={`mt-1 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                    featured ? "bg-gold-400" : "bg-crimson-600"
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`font-body text-xs ${
                    featured ? "text-cream-300" : "text-gray-500"
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Link */}
        <Link
          href={href}
          className={`inline-flex items-center gap-2 font-body text-sm font-medium transition-colors group-hover:gap-3 ${
            featured
              ? "text-gold-300 hover:text-gold-200"
              : "text-crimson-700 hover:text-crimson-800"
          }`}
          aria-label={`Learn more about ${title}`}
        >
          Learn more
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      {/* Gold bottom accent */}
      <div
        className={`h-px mx-6 mb-6 ${
          featured ? "bg-gold-600/40" : "bg-gold-300/40"
        }`}
        aria-hidden="true"
      />
    </article>
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
