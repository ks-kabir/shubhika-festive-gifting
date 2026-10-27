import React, { useState } from 'react';
import { Product } from '../../types';
import { NEW_ARRIVALS } from '../../data/products';
import { ProductCard } from '../shared/product-card';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, staggerItemVariants } from '../shared/scroll-reveal';

interface NewArrivalsSectionProps {
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  selectedCategory: string | null;
  onClearCategory: () => void;
}

export function NewArrivalsSection({
  onAddToCart,
  onQuickView,
  selectedCategory,
  onClearCategory,
}: NewArrivalsSectionProps) {
  const [filter, setFilter] = useState<'all' | 'mithai' | 'dry-fruits' | 'farsan' | 'gift-boxes'>('all');

  // Filter based on local state or category section selection
  const activeCategory = selectedCategory || (filter === 'all' ? null : filter);

  const displayedProducts = activeCategory
    ? NEW_ARRIVALS.filter((p) => p.category === activeCategory)
    : NEW_ARRIVALS;

  return (
    <section id="new-arrivals" className="py-20 lg:py-28 bg-[#FAF6EE] border-t border-b border-[#EAE3D2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C59B27] mb-2">
                Fresh From Our Kitchens
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2420] tracking-tight">
                New Festive Arrivals
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#665851] max-w-xl">
                Limited-run culinary creations introduced for this celebratory season, featuring rare ingredients and gilded presentation.
              </p>
            </div>

            {/* Interactive filter tabs (functional buttons with click handlers) */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#EFE8DC] rounded-xl self-start md:self-auto border border-[#E2D8C7]">
              <button
                onClick={() => {
                  setFilter('all');
                  onClearCategory();
                }}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  !activeCategory
                    ? 'bg-white text-[#6B1724] shadow-xs font-semibold'
                    : 'text-[#665851] hover:text-[#2C2420]'
                }`}
              >
                All Arrivals
              </button>
              <button
                onClick={() => {
                  setFilter('mithai');
                  onClearCategory();
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === 'mithai'
                    ? 'bg-white text-[#6B1724] shadow-xs font-semibold'
                    : 'text-[#665851] hover:text-[#2C2420]'
                }`}
              >
                Mithai
              </button>
              <button
                onClick={() => {
                  setFilter('dry-fruits');
                  onClearCategory();
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === 'dry-fruits'
                    ? 'bg-white text-[#6B1724] shadow-xs font-semibold'
                    : 'text-[#665851] hover:text-[#2C2420]'
                }`}
              >
                Dry Fruits
              </button>
              <button
                onClick={() => {
                  setFilter('farsan');
                  onClearCategory();
                }}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  activeCategory === 'farsan'
                    ? 'bg-white text-[#6B1724] shadow-xs font-semibold'
                    : 'text-[#665851] hover:text-[#2C2420]'
                }`}
              >
                Savouries
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Selected category active indicator */}
        {selectedCategory && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 flex items-center justify-between bg-white border border-[#EAE3D2] px-4 py-2 rounded-lg text-xs text-[#594A42]"
          >
            <span>
              Showing curated items in <strong className="text-[#6B1724] capitalize">{selectedCategory.replace('-', ' ')}</strong>
            </span>
            <button
              onClick={onClearCategory}
              className="text-[#6B1724] font-semibold underline hover:text-[#4A0E18]"
            >
              Reset Category Filter
            </button>
          </motion.div>
        )}

        {/* Responsive Product Grid with Staggered Scroll Animation */}
        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {displayedProducts.length > 0 ? (
            displayedProducts.map((product) => (
              <motion.div key={product.id} variants={staggerItemVariants}>
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                  onQuickView={onQuickView}
                  customGlowColor="rgba(212, 175, 55, 0.18)"
                />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-12 text-center text-[#7C6E67]">
              <p className="font-serif text-lg">No additional new arrivals in this specific category.</p>
              <button
                onClick={() => {
                  setFilter('all');
                  onClearCategory();
                }}
                className="mt-3 text-xs font-semibold text-[#6B1724] underline"
              >
                View all new arrivals
              </button>
            </div>
          )}
        </StaggerContainer>

        {/* Bottom Collection Cue */}
        <ScrollReveal direction="up" delay={0.2} className="mt-12 text-center">
          <a
            href="#bestsellers"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#6B1724] hover:text-[#4A0E18] transition-colors group"
          >
            <span>Explore Our Timeless Bestsellers Below</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1.5" />
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
