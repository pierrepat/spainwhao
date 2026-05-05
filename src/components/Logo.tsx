export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  const color = light ? "#FFFFFF" : "#1F1F1D";
  return (
    <svg
      viewBox="0 0 180 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SpainWhao"
    >
      <text
        x="0"
        y="22"
        fontFamily="var(--font-fraunces), Georgia, serif"
        fontSize="24"
        fontWeight="400"
        letterSpacing="-0.02em"
        fill={color}
      >
        SpainWhao
      </text>
    </svg>
  );
}

export function LogoMark({ className = "", light = false }: { className?: string; light?: boolean }) {
  return (
    <span
      className={`font-serif text-[26px] font-medium tracking-tight sm:text-[30px] ${
        light ? "text-white" : "text-ink"
      } ${className}`}
      aria-label="SpainWhao"
    >
      Spain<span className="font-light italic">Whao</span>
    </span>
  );
}
