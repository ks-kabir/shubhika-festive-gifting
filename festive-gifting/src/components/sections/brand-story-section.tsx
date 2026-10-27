import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '../shared/scroll-reveal';
import { motion } from 'framer-motion';

interface BrandStorySectionProps {
  onExplore: () => void;
}

export function BrandStorySection({ onExplore }: BrandStorySectionProps) {
  return (
    <section id="story" className="py-20 lg:py-28 bg-[#FAF6EE] border-t border-b border-[#EAE3D2] overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Visual Composition with Scroll Transition */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right" distance={40} delay={0.1}>
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Primary Image with hover lift */}
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#D8CEBE] shadow-xl bg-[#EFE8DC] group">
                  <img
                    src="/assets/aistudio/Generated_Image_October_27__2026_-_7_55PM__3__b0057e47.jpg"
                    alt="Artisanal confectionery craft at Shubhika"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="font-serif text-lg font-medium">Small-Batch Confectionery</p>
                    <p className="text-xs text-white/90">Made slowly with patience, purity, and passion</p>
                  </div>
                </div>

                {/* Overlapping secondary detail card */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="hidden sm:block absolute -bottom-8 -right-6 w-64 rounded-xl border border-[#D8CEBE] bg-[#FDFBF7] p-4 shadow-xl"
                >
                  <p className="text-[10px] uppercase tracking-widest text-[#C59B27] font-semibold">
                    Zero Preservatives
                  </p>
                  <p className="font-serif text-sm font-semibold text-[#2C2420] mt-0.5">
                    100% Pure Organic A2 Desi Cow Ghee
                  </p>
                  <p className="text-[11px] text-[#7C6E67] mt-1">
                    Crafted daily in hygienic, climate-controlled artisanal kitchens.
                  </p>
                </motion.div>
              </div>
            </ScrollReveal>
          </div>

          {/* Copy Side with Smooth Entrance */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="left" distance={40} delay={0.2}>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#C59B27]">
                <Sparkles className="h-3.5 w-3.5 text-[#C59B27]" />
                <span>Our Philosophy</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2420] tracking-tight leading-[1.18] text-balance mt-2">
                Reviving the reverent art of Indian festive confections.
              </h2>

              <div className="space-y-4 text-base text-[#594A42] leading-relaxed mt-4">
                <p>
                  Festivals in India have always been celebrated through shared sweetness. Yet somewhere along the way, festive gifting became hurried—swallowed by mass-produced confections wrapped in plastic and loaded with artificial syrups.
                </p>
                <p>
                  Shubhika was founded with a quiet promise: to restore the dignity of Indian sweets. We source handpicked Goan cashews, whole Mamra almonds from Iran, and saffron directly from farmers in Pampore. Every batch is slow-simmered in pure A2 bilona cow ghee, gently infused with whole crushed spices, and hand-cut.
                </p>
                <p>
                  When you hand over a Shubhika box—or send one to someone miles away—you are sharing a memory, an embrace, and a little more joy in every celebration.
                </p>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button
                  onClick={onExplore}
                  className="inline-flex items-center gap-2 rounded-lg bg-[#6B1724] px-6 py-3 text-xs font-semibold text-[#FDFBF7] hover:bg-[#52111B] shadow-xs transition-all active:scale-95"
                >
                  <span>Discover Our Collections</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <div className="border-l border-[#D8CEBE] pl-4">
                  <p className="font-serif italic text-base text-[#2C2420]">
                    “Sweetness is our oldest ritual of love.”
                  </p>
                  <p className="text-[11px] uppercase tracking-wider text-[#8C7A70] mt-0.5">
                    The Shubhika Kitchen Team
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
