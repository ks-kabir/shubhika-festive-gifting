import React, { useRef, useState, useEffect, useCallback } from 'react';

export interface GlowCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  size?: number;
  customSize?: number;
  borderGlow?: boolean;
}

/**
 * GlowCard component providing a smooth, pointer-following spotlight/glow effect
 * tailored for luxury Indian festive presentation.
 * Features:
 * - Subtle warm amber / gold radial highlight that follows cursor position.
 * - Non-blocking pointer events (`pointer-events-none`) for zero interference with clicks.
 * - Reduced-motion and touch device fallback (static subtle highlight without mouse tracking).
 * - Full cleanup on unmount to prevent animation frame leaks.
 */
export function GlowCard({
  children,
  className = '',
  glowColor = 'rgba(212, 175, 55, 0.16)', // subtle warm antique gold
  size = 360,
  customSize,
  borderGlow = true,
  ...props
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const effectiveRadius = customSize ?? size;

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);
    const motionListener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    motionQuery.addEventListener('change', motionListener);

    const touchQuery = window.matchMedia('(hover: none)');
    setIsTouchDevice(touchQuery.matches);
    const touchListener = (e: MediaQueryListEvent) => setIsTouchDevice(e.matches);
    touchQuery.addEventListener('change', touchListener);

    return () => {
      motionQuery.removeEventListener('change', motionListener);
      touchQuery.removeEventListener('change', touchListener);
    };
  }, []);

  const handlePointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || isTouchDevice || !cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setPosition({ x, y });
    },
    [prefersReducedMotion, isTouchDevice]
  );

  const handlePointerEnter = useCallback(() => {
    if (prefersReducedMotion || isTouchDevice) return;
    setIsHovered(true);
  }, [prefersReducedMotion, isTouchDevice]);

  const handlePointerLeave = useCallback(() => {
    setIsHovered(false);
    setPosition(null);
  }, []);

  return (
    <div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      className={`group relative overflow-hidden rounded-2xl bg-white transition-all duration-300 ${className}`}
      {...props}
    >
      {/* Dynamic pointer spotlight glow */}
      {!prefersReducedMotion && !isTouchDevice && position && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 transition-opacity duration-300 ease-out"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(${effectiveRadius}px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 70%)`,
          }}
        />
      )}

      {/* Subtle border glow enhancement */}
      {borderGlow && !prefersReducedMotion && !isTouchDevice && position && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-20 rounded-2xl transition-opacity duration-300 ease-out"
          style={{
            opacity: isHovered ? 0.75 : 0,
            boxShadow: `inset 0 0 0 1px rgba(212, 175, 55, 0.35)`,
          }}
        />
      )}

      {/* Static fallback for touch or reduced-motion */}
      {(prefersReducedMotion || isTouchDevice) && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[#C59B27]/5 via-transparent to-transparent opacity-60"
        />
      )}

      {/* Actual Card Content */}
      <div className="relative z-20 flex h-full flex-col">{children}</div>
    </div>
  );
}

export default GlowCard;
