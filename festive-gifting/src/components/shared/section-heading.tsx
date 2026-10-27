import React from 'react';

interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  align?: 'center' | 'left';
  className?: string;
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
  align = 'center',
  className = '',
}: SectionHeadingProps) {
  const isCenter = align === 'center';

  return (
    <div
      className={`mb-12 md:mb-16 ${
        isCenter ? 'text-center mx-auto' : 'text-left'
      } ${className}`}
    >
      {kicker && (
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C59B27] mb-2.5">
          {kicker}
        </p>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2420] tracking-tight leading-[1.15] text-balance">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3.5 text-base sm:text-lg text-[#665851] leading-relaxed max-w-2xl ${
            isCenter ? 'mx-auto' : ''
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
