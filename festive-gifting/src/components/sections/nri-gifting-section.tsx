import React from 'react';
import { Globe, Heart, CreditCard, Send, ShieldCheck } from 'lucide-react';
import { ScrollReveal } from '../shared/scroll-reveal';
import { motion } from 'framer-motion';

interface NriGiftingSectionProps {
  onSendGifts: () => void;
}

export function NriGiftingSection({ onSendGifts }: NriGiftingSectionProps) {
  return (
    <section className="py-20 lg:py-28 bg-[#FAF6EE] border-b border-[#EAE3D2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="rounded-3xl border border-[#D8CEBE] bg-white p-8 sm:p-12 lg:p-16 shadow-xs relative overflow-hidden">
            {/* Subtle decorative background watermarks/glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -right-16 h-80 w-80 rounded-full bg-[#6B1724]/5 blur-2xl"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Copy side */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#FAF6EE] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#6B1724] border border-[#EAE3D2]">
                  <Globe className="h-3.5 w-3.5 text-[#C59B27]" />
                  <span>Worldwide NRI Ordering · Doorstep Delivery in India</span>
                </div>

                <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2420] tracking-tight leading-[1.15] text-balance">
                  Miles away, yet right by the festive thali.
                </h2>

                <p className="text-base text-[#594A42] leading-relaxed">
                  Living in the US, UK, Canada, Australia, or the Gulf shouldn’t mean missing out on gifting authentic festive joy. With Shubhika, you can order from overseas in under two minutes—we handcraft the sweets fresh and deliver them directly to your family, grandparents, and childhood friends anywhere in India.
                </p>

                {/* Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-xl bg-[#FAF6EE] p-4 border border-[#EAE3D2] transition-shadow hover:shadow-xs"
                  >
                    <CreditCard className="h-5 w-5 text-[#6B1724] mb-2" />
                    <p className="text-xs font-bold text-[#2C2420]">Global Cards Accepted</p>
                    <p className="text-[11px] text-[#7C6E67] mt-0.5">Pay seamlessly in USD, GBP, EUR, AED or CAD</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-xl bg-[#FAF6EE] p-4 border border-[#EAE3D2] transition-shadow hover:shadow-xs"
                  >
                    <Heart className="h-5 w-5 text-[#6B1724] mb-2" />
                    <p className="text-xs font-bold text-[#2C2420]">Personalized Note</p>
                    <p className="text-[11px] text-[#7C6E67] mt-0.5">Your heartfelt message penned on gold-embossed paper</p>
                  </motion.div>

                  <motion.div
                    whileHover={{ y: -4 }}
                    className="rounded-xl bg-[#FAF6EE] p-4 border border-[#EAE3D2] transition-shadow hover:shadow-xs"
                  >
                    <ShieldCheck className="h-5 w-5 text-[#6B1724] mb-2" />
                    <p className="text-xs font-bold text-[#2C2420]">Assured Freshness</p>
                    <p className="text-[11px] text-[#7C6E67] mt-0.5">Made upon dispatch for peak festival timing</p>
                  </motion.div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onSendGifts}
                    className="inline-flex items-center gap-2 rounded-lg bg-[#6B1724] px-7 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FDFBF7] hover:bg-[#52111B] shadow-sm transition-all active:scale-[0.98]"
                  >
                    <Send className="h-4 w-4 text-[#E6C687]" />
                    <span>Send Love to India</span>
                  </button>
                </div>
              </div>

              {/* Visual Quote / Trust Card */}
              <div className="lg:col-span-5">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl border border-[#EAE3D2] bg-gradient-to-br from-[#FAF6EE] to-[#F3ECE0] p-6 sm:p-8 space-y-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-full overflow-hidden bg-[#D8CEBE] shrink-0 border border-white">
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80"
                        alt="NRI Customer"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-serif text-base font-semibold text-[#2C2420]">
                        “Felt like I was personally handing the box to Dadi.”
                      </h4>
                      <p className="text-xs text-[#7C6E67]">
                        Rohit & Meghna K. · Seattle, WA (Sent to Chandigarh)
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#594A42] leading-relaxed italic border-t border-[#EAE3D2] pt-4">
                    “The tracking was pinpoint, the packaging was completely intact without a grain of laddoo crumbled, and the handwritten note brought tears of happiness to my grandparents’ eyes.”
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-[#8C7A70] pt-2 border-t border-[#EAE3D2]">
                    <span>Order placed from USA</span>
                    <span className="font-medium text-[#6B1724]">Delivered in 48 hours</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
