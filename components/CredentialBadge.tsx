interface CredentialBadgeProps {
  name: string;
  description?: string;
  type?: "partner" | "speaker" | "affiliation";
}

const typeConfig = {
  partner: {
    bg: "bg-sage-50",
    border: "border-sage-200",
    dot: "bg-sage-500",
    label: "Partner",
  },
  speaker: {
    bg: "bg-gold-50",
    border: "border-gold-200",
    dot: "bg-gold-500",
    label: "Speaker",
  },
  affiliation: {
    bg: "bg-cream-100",
    border: "border-cream-300",
    dot: "bg-crimson-600",
    label: "Affiliation",
  },
};

export default function CredentialBadge({
  name,
  description,
  type = "affiliation",
}: CredentialBadgeProps) {
  const config = typeConfig[type];

  return (
    <div
      className={`inline-flex items-start gap-3 rounded-sm border px-4 py-3 ${config.bg} ${config.border}`}
      role="listitem"
    >
      <span
        className={`mt-1.5 w-2 h-2 rounded-full flex-shrink-0 ${config.dot}`}
        aria-hidden="true"
      />
      <div>
        <p className="font-body text-sm font-semibold text-gray-800 leading-tight">
          {name}
        </p>
        {description && (
          <p className="font-body text-xs text-gray-500 mt-0.5 leading-snug">
            {description}
          </p>
        )}
        <span className="font-body text-[10px] font-semibold tracking-widest uppercase text-gray-400 mt-1 block">
          {config.label}
        </span>
      </div>
    </div>
  );
}

export function CredentialBadgeGroup({
  credentials,
}: {
  credentials: CredentialBadgeProps[];
}) {
  return (
    <div
      className="flex flex-wrap gap-3"
      role="list"
      aria-label="Professional affiliations and credentials"
    >
      {credentials.map((cred, i) => (
        <CredentialBadge key={i} {...cred} />
      ))}
    </div>
  );
}
