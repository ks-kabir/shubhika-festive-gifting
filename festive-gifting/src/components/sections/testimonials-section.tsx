import React, { useState } from 'react';
import { TESTIMONIALS } from '../../data/products';
import { SectionHeading } from '../shared/section-heading';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollReveal } from '../shared/scroll-reveal';
import { motion, AnimatePresence } from 'framer-motion';

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prev = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#FDFBF7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeading
            kicker="Stories of Joy"
            title="From Our Extended Family of Gifters"
            subtitle="Illustrative reflections from patrons across India and overseas who entrusted their festive moments to Shubhika."
          />
        </ScrollReveal>

        {/* Editorial Quote Card Carousel with Scroll Reveal */}
        <ScrollReveal direction="up" delay={0.2} className="mx-auto max-w-4xl relative">
          <div className="rounded-2xl border border-[#EAE3D2] bg-white p-8 sm:p-12 shadow-xs relative">
            <Quote className="h-10 w-10 text-[#C59B27]/40 mb-6 stroke-[1.5]" />

            <AnimatePresence mode="wait">
              <motion.blockquote
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="font-serif text-xl sm:text-2xl text-[#2C2420] leading-relaxed italic"
              >
                “{current.quote}”
              </motion.blockquote>
            </AnimatePresence>

            <div className="mt-8 pt-6 border-t border-[#F0EAE1] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p className="font-medium text-base text-[#2C2420]">{current.author}</p>
                <p className="text-xs text-[#7C6E67] mt-0.5">{current.location}</p>
                <p className="text-[11px] font-semibold tracking-wider uppercase text-[#C59B27] mt-1">
                  Occasion: {current.occasion}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <button
                  onClick={prev}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8CEBE] text-[#4A3E39] hover:bg-[#FAF6EE] hover:text-[#6B1724] transition-colors focus:outline-none focus:ring-1 focus:ring-[#6B1724] active:scale-95"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <span className="text-xs text-[#8C7A70] tabular-nums px-2">
                  {activeIndex + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={next}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8CEBE] text-[#4A3E39] hover:bg-[#FAF6EE] hover:text-[#6B1724] transition-colors focus:outline-none focus:ring-1 focus:ring-[#6B1724] active:scale-95"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
