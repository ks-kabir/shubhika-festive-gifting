import React from 'react';
import { Product } from '../../types';
import { BESTSELLERS } from '../../data/products';
import { ProductCard } from '../shared/product-card';
import { Award, Flame } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, staggerItemVariants } from '../shared/scroll-reveal';

interface BestsellersSectionProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onScrollToTop: () => void;
}

export function BestsellersSection({
  onAddToCart,
  onQuickView,
}: BestsellersSectionProps) {
  return (
    <section id="bestsellers" className="py-20 lg:py-28 bg-[#FDFBF7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C59B27] mb-2.5">
              <Flame className="h-3.5 w-3.5 text-[#C59B27]" />
              <span>Cherished by Thousands</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2420] tracking-tight leading-tight">
              Our Festive Bestsellers
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#665851] max-w-2xl leading-relaxed">
              The grand trunks and sweet jewel boxes most chosen by families in India and overseas patrons sending celebratory love across oceans.
            </p>
          </div>
        </ScrollReveal>

        {/* Highlight Banner / Trust Ribbon with Scroll Entrance */}
        <ScrollReveal direction="up" delay={0.18}>
          <div className="mb-10 rounded-2xl bg-gradient-to-r from-[#6B1724] via-[#851E30] to-[#6B1724] p-6 text-[#FDFBF7] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3.5 text-center md:text-left">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#E6C687] border border-white/20">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="font-serif text-lg text-white font-medium">
                  Complimentary Keepsake Gift Box & Wax-Sealed Note
                </p>
                <p className="text-xs text-[#E6C687] mt-0.5">
                  Every bestseller order is shipped in temperature-controlled protective gift packaging.
                </p>
              </div>
            </div>
            <a
              href="#story"
              className="shrink-0 rounded-lg bg-[#E6C687] px-4 py-2 text-xs font-semibold text-[#4A0E18] hover:bg-[#F3DFA2] transition-colors whitespace-nowrap shadow-xs"
            >
              Discover the Craft
            </a>
          </div>
        </ScrollReveal>

        {/* 4-Card Responsive Grid with GlowCard and Staggered Motion */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {BESTSELLERS.map((product) => (
            <motion.div key={product.id} variants={staggerItemVariants}>
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
                customGlowColor="rgba(197, 155, 39, 0.22)" // warmer gold for bestsellers
              />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
