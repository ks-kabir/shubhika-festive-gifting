import React from 'react';
import { CATEGORIES } from '../../data/categories';
import { SectionHeading } from '../shared/section-heading';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, staggerItemVariants } from '../shared/scroll-reveal';

interface CategorySectionProps {
  selectedCategory: string | null;
  onSelectCategory: (categoryId: string) => void;
}

export function CategorySection({
  selectedCategory,
  onSelectCategory,
}: CategorySectionProps) {
  return (
    <section id="categories" className="py-20 lg:py-28 bg-[#FDFBF7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeading
            kicker="Curated Collections"
            title="Shop by Festive Category"
            subtitle="Explore distinct culinary traditions, from slow-cooked mithai to royal dried fruit vaults and heirloom savoury delicacies."
          />
        </ScrollReveal>

        {/* 5-Card Staggered Grid */}
        <StaggerContainer
          staggerDelay={0.12}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {CATEGORIES.map((cat, index) => {
            const isSelected = selectedCategory === cat.id;
            const isWide = index === 0 || index === 4;

            return (
              <motion.div
                key={cat.id}
                variants={staggerItemVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                onClick={() => onSelectCategory(cat.id)}
                className={`group relative overflow-hidden rounded-2xl border border-[#EAE3D2] bg-white shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  isWide ? 'sm:col-span-2 lg:col-span-1' : ''
                } ${isSelected ? 'ring-2 ring-[#6B1724]' : ''}`}
              >
                {/* Image Container with Zoom */}
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden bg-[#F6F2EA]">
                  <img
                    src={cat.imageUrl}
                    alt={cat.name}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient scrim for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-opacity group-hover:opacity-90" />

                  {/* Top info */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="text-[11px] font-medium tracking-wider text-[#FDFBF7]/90 bg-black/30 backdrop-blur-xs px-2.5 py-1 rounded-sm">
                      {cat.itemsCount}
                    </span>
                  </div>

                  {/* Bottom title & browse cue */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
                    <h3 className="font-serif text-2xl font-medium tracking-tight text-[#FDFBF7] group-hover:text-[#E6C687] transition-colors">
                      {cat.name}
                    </h3>
                    <p className="mt-1 text-xs text-white/80 line-clamp-1">
                      {cat.subtitle}
                    </p>

                    <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-[#E6C687]">
                      <span>Browse Collection</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
