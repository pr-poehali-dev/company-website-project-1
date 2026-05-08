/**
 * Логотип «ИНТЕЛЛЕКТ КОНСАЛТИНГ»
 * Концепция: стрелка вверх, распадающаяся на пиксели (цифровая трансформация)
 * Цвета: синий #1E40AF → бирюза #06B6D4
 */

interface LogoProps {
  size?: number;
  variant?: "default" | "white" | "dark";
  showText?: boolean;
  textSize?: "sm" | "md" | "lg";
}

export default function Logo({
  size = 36,
  variant = "default",
  showText = true,
  textSize = "md",
}: LogoProps) {
  const id = `grad-${size}-${variant}`;

  const textSizes = {
    sm: "text-[13px]",
    md: "text-[15px]",
    lg: "text-[20px]",
  };

  const textColors = {
    intellect: variant === "white" ? "#FFFFFF" : "#1E40AF",
    consulting: variant === "white" ? "rgba(255,255,255,0.85)" : "#06B6D4",
  };

  return (
    <div className="flex items-center gap-2.5 select-none">
      {/* Pixel-arrow icon */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0 }}
      >
        <defs>
          <linearGradient id={id} x1="0" y1="40" x2="40" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>

        {/* Rounded background */}
        <rect width="40" height="40" rx="10" fill={`url(#${id})`} />

        {/* Arrow shaft */}
        <rect x="17" y="14" width="6" height="16" rx="1.5" fill="white" fillOpacity="0.95" />

        {/* Arrow head */}
        <path
          d="M20 7 L28 17 L22 17 L22 14 L18 14 L18 17 L12 17 Z"
          fill="white"
          fillOpacity="0.95"
        />

        {/* Pixel scatter — top right */}
        <rect x="28" y="8" width="4" height="4" rx="1" fill="white" fillOpacity="0.55" />
        <rect x="33" y="5" width="3" height="3" rx="0.8" fill="white" fillOpacity="0.35" />
        <rect x="30" y="14" width="3" height="3" rx="0.8" fill="white" fillOpacity="0.45" />

        {/* Pixel scatter — top left */}
        <rect x="8" y="8" width="4" height="4" rx="1" fill="white" fillOpacity="0.50" />
        <rect x="4" y="5" width="3" height="3" rx="0.8" fill="white" fillOpacity="0.30" />
        <rect x="7" y="14" width="3" height="3" rx="0.8" fill="white" fillOpacity="0.40" />

        {/* Pixel scatter — bottom (fading) */}
        <rect x="3" y="22" width="3" height="3" rx="0.8" fill="white" fillOpacity="0.20" />
        <rect x="34" y="22" width="3" height="3" rx="0.8" fill="white" fillOpacity="0.18" />
        <rect x="6" y="30" width="2.5" height="2.5" rx="0.6" fill="white" fillOpacity="0.12" />
        <rect x="31.5" y="30" width="2.5" height="2.5" rx="0.6" fill="white" fillOpacity="0.10" />
      </svg>

      {/* Text */}
      {showText && (
        <div className={`font-heading font-bold leading-tight ${textSizes[textSize]}`}>
          <span style={{ color: textColors.intellect }}>ИНТЕЛЛЕКТ</span>
          <br />
          <span style={{ color: textColors.consulting, fontSize: "0.82em", letterSpacing: "0.04em" }}>
            КОНСАЛТИНГ
          </span>
        </div>
      )}
    </div>
  );
}
