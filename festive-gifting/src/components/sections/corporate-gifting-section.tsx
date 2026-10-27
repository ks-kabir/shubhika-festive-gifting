import React from 'react';
import { Building2, ArrowRight, Check, Layers } from 'lucide-react';
import { ScrollReveal } from '../shared/scroll-reveal';
import { motion } from 'framer-motion';

interface CorporateGiftingSectionProps {
  onOpenEnquiry: () => void;
}

export function CorporateGiftingSection({ onOpenEnquiry }: CorporateGiftingSectionProps) {
  return (
    <section id="corporate" className="py-20 lg:py-28 bg-[#2C2420] text-[#FDFBF7] relative overflow-hidden">
      {/* Subtle Warm Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#6B1724]/30 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#C59B27]/15 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Mockup Showcase with Scroll Transition */}
          <div className="lg:col-span-6 relative">
            <ScrollReveal direction="right" distance={35} delay={0.1}>
              <div className="relative aspect-[16/11] rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#3D322C] group">
                <img
                  src="/assets/aistudio/Generated_Image_October_27__2026_-_7_55PM__3__b0057e47.jpg"
                  alt="Bespoke corporate gifting hampers with custom foil branding"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-[#E6C687]">
                    Bespoke Corporate Services
                  </span>
                  <p className="font-serif text-2xl text-white font-medium mt-1">
                    Custom Foiled Rigid Boxes for Leading Enterprises
                  </p>
                  <p className="text-xs text-white/80 mt-1">
                    Dispatched seamlessly to 50 to 5,000+ recipient homes across India
                  </p>
                </div>
              </div>

              {/* Overlapping Callout */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="hidden sm:flex absolute -bottom-6 -right-6 items-center gap-3 rounded-xl border border-white/10 bg-[#3A302B]/95 p-4 shadow-xl backdrop-blur-md"
              >
                <Layers className="h-6 w-6 text-[#E6C687]" />
                <div>
                  <p className="text-xs font-bold text-white">Full Pan-India Logistics</p>
                  <p className="text-[11px] text-[#C59B27]">Multi-address direct shipping</p>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Right Column: Copy & Form Trigger with Scroll Transition */}
          <div className="lg:col-span-6 space-y-6">
            <ScrollReveal direction="left" distance={35} delay={0.2}>
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-[#E6C687]">
                <Building2 className="h-3.5 w-3.5" />
                <span>Institutional & Corporate</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-[1.15] text-balance mt-2">
                Celebrate partnerships with gifts of genuine distinction.
              </h2>

              <p className="text-base text-[#D4C8BE] leading-relaxed mt-4">
                Step away from impersonal gift cards and generic store-bought sweets. Shubhika partners with founders, leaders, and HR teams to design bespoke festive gift hampers that reflect your organization’s high standards.
              </p>

              {/* Corporate Perks List */}
              <div className="space-y-3 pt-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#6B1724] text-[#E6C687]">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <p className="text-xs text-[#E5DCD3]">
                    <strong className="text-white">Custom Brand Integration:</strong> Gold or silver foil logo stamping on keepsake boxes and personalized greeting cards signed by your executive team.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#6B1724] text-[#E6C687]">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <p className="text-xs text-[#E5DCD3]">
                    <strong className="text-white">Tailored Confectionery Assortments:</strong> Choose customized proportions of sugar-conscious sweets, royal dry fruits, and artisanal savouries.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-[#6B1724] text-[#E6C687]">
                    <Check className="h-3 w-3 stroke-[3]" />
                  </div>
                  <p className="text-xs text-[#E5DCD3]">
                    <strong className="text-white">Dedicated Corporate Concierge:</strong> Single point of contact managing sample shipments, spreadsheets of employee addresses, and delivery confirmations.
                  </p>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenEnquiry}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#E6C687] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#4A0E18] hover:bg-[#F3DFA2] shadow-md transition-all active:scale-[0.98]"
                >
                  <span>Enquire About Corporate Gifting</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-xs text-[#A8988B] text-center sm:text-left">
                  Bulk tiered pricing starting from 25 hampers.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
