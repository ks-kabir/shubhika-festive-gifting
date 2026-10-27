import React, { useState } from 'react';
import { Sparkles, Eye, Plus, Check, Flame, Gift, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScrollReveal } from '../shared/scroll-reveal';
import { Product } from '../../types';

interface Hotspot {
  id: string;
  name: string;
  subtitle: string;
  x: number; // percentage from left
  y: number; // percentage from top
  detail: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 'cookies',
    name: 'Kesar Pista Royal Cookies',
    subtitle: 'Antique Gilded Canister',
    x: 40,
    y: 28,
    detail: 'Slow-baked buttery almond shortbread infused with whole Kashmiri saffron threads and crushed pistachios.',
  },
  {
    id: 'chandan',
    name: 'Chandan & Rose Ayurvedic Jar',
    subtitle: 'Aromatics & Confection',
    x: 41,
    y: 56,
    detail: 'Handcrafted apothecary jar of pure Kannauj edible rose petals & sandalwood essence.',
  },
  {
    id: 'jamun',
    name: 'Artisanal Gulab Jamun Box',
    subtitle: 'Royal Dessert Tier',
    x: 55,
    y: 65,
    detail: 'Four slow-simmered khoya spheres enriched with green cardamom, edible 24k silver leaf, and pistachio slivers.',
  },
  {
    id: 'diya',
    name: 'Handcrafted Brass Diya',
    subtitle: 'Sacred Illumination',
    x: 88,
    y: 42,
    detail: 'Authentic hand-beaten solid brass oil lamp, providing auspicious golden light for festive evenings.',
  },
  {
    id: 'potli',
    name: 'Zari Embroidered Silk Potli',
    subtitle: 'Keepsake Treasure',
    x: 14,
    y: 78,
    detail: 'Traditional raw silk drawstring bag stitched with gold zari floral embroidery.',
  },
];

interface InteractiveShowcaseSectionProps {
  onAddToCart?: (product: Product) => void;
  onQuickView?: (product: Product) => void;
}

export function InteractiveShowcaseSection({
  onAddToCart,
  onQuickView,
}: InteractiveShowcaseSectionProps) {
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isAdded, setIsAdded] = useState(false);

  // Representation of this featured hamper
  const featuredHamper: Product = {
    id: 'royal-diwali-utsav-box',
    name: 'The Royal Diwali Utsav Keepsake Box',
    category: 'hampers',
    categoryLabel: 'Signature Edition',
    price: 3850,
    originalPrice: 4200,
    badge: 'Limited Edition',
    tagline: 'Kesar Pista Cookies, Gulab Jamun, Chandan & Rose & Brass Diya in Gilded Box',
    weight: '1.4 kg luxury hamper',
    description:
      'Our quintessential festive presentation. A rigid matte gold keepsake box containing a heritage tin of Kesar Pista Cookies, apothecary glass jar of Chandan & Rose, four artisanal Gulab Jamuns with silver leaf, hand-beaten brass lotus diya, and zari embroidered silk potli.',
    ingredients: [
      'Pure Khoya',
      'A2 Cow Ghee',
      'Kashmiri Mongra Saffron',
      'Kannauj Rose Petals',
      'Iranian Pistachios',
      'Solid Brass Diya',
    ],
    shelfLife: '18 days for sweets; 6 months for cookies & jar',
    imageUrl: '/assets/aistudio/Generated_Image_October_27__2026_-_7_55PM__3__b0057e47.jpg',
    rating: 5.0,
    reviewsCount: 264,
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const handleAddHamper = () => {
    if (onAddToCart) {
      onAddToCart(featuredHamper);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 1500);
    }
  };

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EE] to-[#FDFBF7] border-b border-[#EAE3D2] overflow-hidden">
      {/* Decorative ambient background accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-0 -translate-y-1/2 h-96 w-96 rounded-full bg-[#C59B27]/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-0 -translate-y-1/2 h-96 w-96 rounded-full bg-[#6B1724]/8 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#D8CEBE] bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#6B1724] shadow-xs mb-3">
              <Sparkles className="h-3.5 w-3.5 text-[#C59B27]" />
              <span>Interactive Unboxing Experience</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2C2420] tracking-tight leading-tight">
              Anatomy of the Royal Utsav Keepsake Box
            </h2>
            <p className="mt-3 text-base sm:text-lg text-[#665851] leading-relaxed">
              Hover over the box to experience the depth and explore each handcrafted element—from pure khoya sweets to hand-beaten brass illumination.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Box Showcase with Hover Animations & Hotspots */}
        <ScrollReveal direction="up" delay={0.25}>
          <div className="relative mx-auto max-w-5xl">
            {/* Outer golden rim shadow */}
            <div
              className={`absolute -inset-3 rounded-3xl bg-gradient-to-r from-[#C59B27]/30 via-[#6B1724]/20 to-[#C59B27]/30 blur-2xl transition-opacity duration-700 ${
                isHovered ? 'opacity-90' : 'opacity-40'
              }`}
            />

            {/* 3D Perspective Card Container */}
            <div
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={handleMouseLeave}
              className="relative overflow-hidden rounded-3xl border border-[#D8CEBE] bg-white shadow-2xl transition-transform duration-300 ease-out cursor-crosshair group"
              style={{
                perspective: '1200px',
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Main Photo with smooth zoom */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#F6F2EA]">
                <img
                  src="/assets/aistudio/Generated_Image_October_27__2026_-_7_55PM__3__b0057e47.jpg"
                  alt="Royal Diwali Utsav Keepsake Box with Kesar Pista cookies, Gulab Jamun and brass diya"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Shimmer light sweep on hover */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                />

                {/* Subtle vignette border */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

                {/* Interactive Hotspots / Pulsing Pins */}
                {HOTSPOTS.map((hotspot) => {
                  const isActive = activeHotspot?.id === hotspot.id;

                  return (
                    <div
                      key={hotspot.id}
                      style={{
                        left: `${hotspot.x}%`,
                        top: `${hotspot.y}%`,
                      }}
                      className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                    >
                      <button
                        onClick={() => setActiveHotspot(isActive ? null : hotspot)}
                        onMouseEnter={() => setActiveHotspot(hotspot)}
                        className="group/pin relative flex items-center justify-center p-2 focus:outline-none"
                        aria-label={`Inspect ${hotspot.name}`}
                      >
                        {/* Outer pulsing ring */}
                        <span className="absolute h-8 w-8 rounded-full bg-[#C59B27]/40 animate-ping" />
                        {/* Middle halo */}
                        <span
                          className={`relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-white shadow-md transition-all duration-300 ${
                            isActive
                              ? 'bg-[#6B1724] scale-125 ring-4 ring-[#C59B27]'
                              : 'bg-[#C59B27] hover:scale-110 hover:bg-[#6B1724]'
                          }`}
                        >
                          <Sparkles className="h-3 w-3 text-white" />
                        </span>
                      </button>

                      {/* Hotspot Floating Tooltip */}
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9, y: 8 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: 8 }}
                          className="absolute left-1/2 bottom-full mb-3 -translate-x-1/2 w-64 sm:w-72 rounded-xl bg-white/95 p-3.5 shadow-2xl border border-[#D8CEBE] backdrop-blur-md z-40 text-left pointer-events-auto"
                        >
                          <div className="flex items-center justify-between text-[10px] font-semibold tracking-wider uppercase text-[#C59B27] mb-0.5">
                            <span>{hotspot.subtitle}</span>
                            <span className="text-[#8C7A70]">Tap to focus</span>
                          </div>
                          <h4 className="font-serif text-base font-semibold text-[#2C2420] leading-snug">
                            {hotspot.name}
                          </h4>
                          <p className="mt-1 text-xs text-[#594A42] leading-relaxed">
                            {hotspot.detail}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  );
                })}

                {/* Bottom Overlay Info Banner */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 z-20 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white pointer-events-none">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 text-[10px] font-bold tracking-widest uppercase bg-[#6B1724] text-white rounded-sm shadow-xs mb-1">
                      Featured Masterpiece
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-medium text-white drop-shadow-md">
                      The Royal Diwali Utsav Keepsake Box
                    </h3>
                    <p className="text-xs sm:text-sm text-white/90 drop-shadow-sm hidden sm:block">
                      Move your cursor to inspect each hand-assembled treasure
                    </p>
                  </div>

                  {/* Pricing and quick CTA inside showcase */}
                  <div className="flex items-center gap-3 pointer-events-auto self-start sm:self-auto">
                    <div className="text-right hidden sm:block">
                      <span className="text-[11px] text-[#E6C687] block">Complete Set</span>
                      <span className="font-serif text-2xl font-bold text-white tabular-nums">
                        ₹3,850
                      </span>
                    </div>

                    <button
                      onClick={handleAddHamper}
                      className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold shadow-lg transition-all active:scale-95 ${
                        isAdded
                          ? 'bg-emerald-700 text-white'
                          : 'bg-[#C59B27] text-[#2C2420] hover:bg-[#D4AF37]'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="h-4 w-4" />
                          <span>Added to Box</span>
                        </>
                      ) : (
                        <>
                          <Plus className="h-4 w-4" />
                          <span>Add to Box · ₹3,850</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom detail summary bar */}
              <div className="bg-[#FAF6EE] p-4 sm:p-5 border-t border-[#EAE3D2] flex flex-wrap items-center justify-between gap-4 text-xs text-[#594A42]">
                <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-[#C59B27]" />
                    <span className="font-medium text-[#2C2420]">Kesar Pista Tin</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gift className="h-4 w-4 text-[#6B1724]" />
                    <span className="font-medium text-[#2C2420]">Silver Leaf Gulab Jamuns</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Flame className="h-4 w-4 text-[#C59B27]" />
                    <span className="font-medium text-[#2C2420]">Hand-Beaten Brass Diya</span>
                  </div>
                </div>

                <button
                  onClick={() => onQuickView && onQuickView(featuredHamper)}
                  className="inline-flex items-center gap-1 font-semibold text-[#6B1724] hover:text-[#4A0E18] transition-colors"
                >
                  <span>View Full Box Ingredients</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
