import { useState, useEffect, useRef } from "react";

export function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export function Fade({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

export function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="section-badge mb-4">{children}</div>
  );
}

export function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        background: "linear-gradient(135deg, #1E40AF, #06B6D4)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
      }}
    >
      {children}
    </span>
  );
}

export function PageHero({
  badge,
  h1,
  sub,
  children,
  dark = false,
}: {
  badge?: string;
  h1: React.ReactNode;
  sub?: string;
  children?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <section
      className="pt-28 pb-16 relative overflow-hidden"
      style={
        dark
          ? { background: "linear-gradient(155deg, #0F172A 0%, #1E3A8A 55%, #0C1F6B 100%)" }
          : { background: "linear-gradient(135deg, #F8FAFF 0%, #EFF6FF 100%)" }
      }
    >
      {dark && <div className="absolute inset-0 pixel-bg opacity-30" />}
      <div className="container mx-auto px-5 relative z-10 text-center max-w-3xl">
        {badge && (
          <Fade>
            <div
              className="section-badge mb-5 mx-auto"
              style={
                dark
                  ? { background: "rgba(6,182,212,0.15)", borderColor: "rgba(6,182,212,0.4)", color: "#67E8F9" }
                  : {}
              }
            >
              {badge}
            </div>
          </Fade>
        )}
        <Fade delay={0.1}>
          <h1
            className="font-heading text-3xl md:text-5xl font-extrabold mb-5 leading-tight"
            style={{ color: dark ? "white" : "#111827" }}
          >
            {h1}
          </h1>
        </Fade>
        {sub && (
          <Fade delay={0.2}>
            <p
              className="font-body text-lg leading-relaxed"
              style={{ color: dark ? "rgba(255,255,255,0.75)" : "#6B7280" }}
            >
              {sub}
            </p>
          </Fade>
        )}
        {children && (
          <Fade delay={0.3}>
            <div className="mt-7">{children}</div>
          </Fade>
        )}
      </div>
      {dark && (
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" preserveAspectRatio="none" style={{ display: "block" }}>
            <path d="M0,60 L1440,60 L1440,0 Q720,60 0,0 Z" fill="white" />
          </svg>
        </div>
      )}
    </section>
  );
}
