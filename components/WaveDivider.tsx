interface WaveDividerProps {
  /** Fill color for the wave — matches the section below */
  fill?: string;
  /** Whether to flip the wave horizontally */
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  fill = "#faf7f0",
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${flip ? "scale-x-[-1]" : ""} ${className}`}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 md:h-20 block"
      >
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}

export function WaveDividerTop({
  fill = "#ffffff",
  className = "",
}: {
  fill?: string;
  className?: string;
}) {
  return (
    <div
      className={`w-full overflow-hidden leading-none ${className}`}
      aria-hidden="true"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        className="w-full h-12 sm:h-16 md:h-20 block"
      >
        <path
          d="M0,40 C240,0 480,80 720,40 C960,0 1200,80 1440,40 L1440,0 L0,0 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
