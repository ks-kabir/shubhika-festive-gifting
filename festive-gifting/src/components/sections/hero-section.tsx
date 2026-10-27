import React, { useState } from 'react';
import { ArrowRight, Sparkles, HeartHandshake, Compass, Film, Image as ImageIcon } from 'lucide-react';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onExplore: () => void;
  onCorporate: () => void;
}

export function HeroSection({ onExplore, onCorporate }: HeroSectionProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [mediaType, setMediaType] = useState<'video' | 'image'>('video');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: y * -12, y: x * 14 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  // Replaced with user's uploaded video and high-resolution festive image
  const heroVideoSrc = '/assets/aistudio/Generated_video_1_7026484e.mp4';
  const heroImageSrc = '/assets/aistudio/Generated_Image_October_27__2026_-_7_55PM__3__b0057e47.jpg';
  const heroBgSrc = '/assets/aistudio/Generated_Image_October_27__2026_-_7_55PM__3__b0057e47.jpg';

  return (
    <section className="relative overflow-hidden bg-[#FDFBF7]">
      {/* Scroll-Expansion Animated Hero Effect with uploaded video and image */}
      <div className="relative">
        {/* Media Switcher Pill (Video vs Image expansion) */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-40 flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md p-1 border border-white/20 text-xs shadow-lg">
          <button
            onClick={() => setMediaType('video')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 ${
              mediaType === 'video'
                ? 'bg-[#C59B27] text-[#2C2420] font-semibold shadow-xs'
                : 'text-white/80 hover:text-white'
            }`}
          >
            <Film className="h-3.5 w-3.5" />
            <span>Festive Video</span>
          </button>
          <button
            onClick={() => setMediaType('image')}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full transition-all duration-200 ${
              mediaType === 'image'
                ? 'bg-[#C59B27] text-[#2C2420] font-semibold shadow-xs'
                : 'text-white/80 hover:text-white'
            }`}
          >
            <ImageIcon className="h-3.5 w-3.5" />
            <span>Hamper Still</span>
          </button>
        </div>

        <ScrollExpandMedia
          mediaType={mediaType}
          mediaSrc={mediaType === 'video' ? heroVideoSrc : heroImageSrc}
          posterSrc={heroImageSrc}
          bgImageSrc={heroBgSrc}
          title="Shubhika Festive Hampers"
          date="Celebrations 2026"
          scrollToExpand="Scroll to expand festive box"
          textBlend={false}
        >
          {/* Content revealed as the user scrolls & expands the media */}
          <div className="mx-auto max-w-7xl pt-4 pb-12 w-full">
            {/* Background Ambient Warm Lighting */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-12 left-1/2 -translate-x-1/2 -z-0 h-[500px] w-[800px] rounded-full bg-gradient-to-tr from-[#C59B27]/12 via-[#6B1724]/8 to-transparent blur-3xl opacity-75"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Editorial Headline & Actions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="lg:col-span-6 space-y-6 text-center lg:text-left"
              >
                {/* Subtle Eyebrow */}
                <div className="inline-flex items-center gap-2 rounded-full border border-[#D8CEBE] bg-[#FDFBF7]/80 px-3.5 py-1 text-xs font-semibold tracking-wider text-[#6B1724] uppercase shadow-2xs">
                  <Sparkles className="h-3.5 w-3.5 text-[#C59B27]" />
                  <span>Festive Collection 2026</span>
                  <span className="text-[#A8988B]">·</span>
                  <span className="text-[#594A42]">Pan-India & NRI Dispatch</span>
                </div>

                {/* Display Headline */}
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2C2420] tracking-tight leading-[1.12] text-balance font-medium">
                  A little more joy in every box.
                </h1>

                {/* Short Supporting Copy */}
                <p className="text-base sm:text-lg text-[#594A42] leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Handcrafted celebratory sweets prepared in small batches with pure A2 cow ghee, Kashmiri saffron, and sun-ripened dry fruits. Presented in keepsake royal boxes for family, friends, and esteemed partners.
                </p>

                {/* CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <button
                    onClick={onExplore}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg bg-[#6B1724] px-7 py-3.5 text-sm font-semibold text-[#FDFBF7] hover:bg-[#52111B] shadow-md transition-all active:scale-[0.98]"
                  >
                    <span>Explore the Collection</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>

                  <button
                    onClick={onCorporate}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-lg border border-[#6B1724]/40 bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#6B1724] hover:bg-white hover:border-[#6B1724] transition-all active:scale-[0.98]"
                  >
                    <span>Corporate Gifting</span>
                  </button>
                </div>

                {/* Trust markers */}
                <div className="pt-6 border-t border-[#EAE3D2]/80 grid grid-cols-3 gap-4 text-left">
                  <div>
                    <p className="text-xs font-semibold text-[#2C2420]">100% Pure Desi Ghee</p>
                    <p className="text-[11px] text-[#7C6E67] mt-0.5">Slow-cooked recipes</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#2C2420]">NRI Ordering</p>
                    <p className="text-[11px] text-[#7C6E67] mt-0.5">Global cards accepted</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#2C2420]">Zero Preservatives</p>
                    <p className="text-[11px] text-[#7C6E67] mt-0.5">Freshly made daily</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column: 3D-Inspired Layered Hamper Showcase using user's photo */}
              <div className="lg:col-span-6 flex justify-center">
                <div
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  className="relative w-full max-w-lg lg:max-w-none perspective-1000 group cursor-pointer"
                  style={{ perspective: '1000px' }}
                >
                  {/* Outer decorative glow shadow */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-[#C59B27]/20 via-[#6B1724]/15 to-[#C59B27]/20 blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* 3D Card Container */}
                  <div
                    className="relative overflow-hidden rounded-2xl border border-[#D8CEBE] bg-[#FDFBF7] shadow-xl transition-transform duration-300 ease-out"
                    style={{
                      transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Hamper Focal Imagery with user's uploaded image */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F2ECE1]">
                      <img
                        src={heroImageSrc}
                        alt="Shubhika Grand Festive Hamper with royal sweets, dry fruits and brass diya"
                        className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Subtle dark bottom scrim for contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10" />

                      {/* Overlaid Badge */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="inline-flex items-center gap-1.5 rounded-sm bg-[#6B1724] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#FDFBF7] shadow-xs">
                          <Sparkles className="h-3 w-3 text-[#E6C687]" />
                          <span>Signature Edition</span>
                        </span>
                      </div>

                      {/* Hamper details preview inside visual card */}
                      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-end justify-between text-white">
                        <div>
                          <p className="text-[11px] font-medium tracking-wider uppercase text-[#E6C687]">
                            Curated Celebration Trunk
                          </p>
                          <h3 className="font-serif text-2xl font-medium leading-tight">
                            The Kohinoor Utsav Trunk
                          </h3>
                          <p className="text-xs text-white/80 mt-1">
                            Kesar Pista Cookies, Gulab Jamun, Chandan & Rose & Brass Diya
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-[11px] text-white/70">From</p>
                          <p className="font-serif text-xl font-bold text-[#E6C687] tabular-nums">
                            ₹3,850
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Floating 3D Badge / Callout Layer */}
                    <div className="p-4 bg-[#FAF6EE] flex items-center justify-between border-t border-[#EAE3D2] text-xs text-[#594A42]">
                      <div className="flex items-center gap-2">
                        <span className="inline-block h-2 w-2 rounded-full bg-[#C59B27]" />
                        <span className="font-medium text-[#2C2420]">Handcrafted Keepsake Gilded Box</span>
                      </div>
                      <span className="text-[#8C7A70]">Limited festive allotment</span>
                    </div>
                  </div>

                  {/* Floating accent badge attached to 3D composition */}
                  <div
                    className="hidden sm:flex absolute -bottom-5 -left-5 z-30 items-center gap-3 rounded-xl border border-[#D8CEBE] bg-[#FDFBF7]/95 px-4 py-3 shadow-lg backdrop-blur-md transition-transform duration-300"
                    style={{
                      transform: `translateZ(40px) translate(${rotate.y * 0.8}px, ${rotate.x * 0.8}px)`,
                    }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6B1724] text-[#E6C687]">
                      <HeartHandshake className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#2C2420]">Handwritten Note</p>
                      <p className="text-[11px] text-[#7C6E67]">Every box penned with care</p>
                    </div>
                  </div>

                  {/* Floating accent badge on top right */}
                  <div
                    className="hidden sm:flex absolute -top-5 -right-5 z-30 items-center gap-2 rounded-xl border border-[#D8CEBE] bg-[#FDFBF7]/95 px-3.5 py-2.5 shadow-lg backdrop-blur-md transition-transform duration-300"
                    style={{
                      transform: `translateZ(30px) translate(${rotate.y * -0.6}px, ${rotate.x * -0.6}px)`,
                    }}
                  >
                    <Compass className="h-4 w-4 text-[#C59B27]" />
                    <span className="text-xs font-semibold text-[#2C2420]">
                      Pan-India Direct Delivery
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollExpandMedia>
      </div>
    </section>
  );
}
