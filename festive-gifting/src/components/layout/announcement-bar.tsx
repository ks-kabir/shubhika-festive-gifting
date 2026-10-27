import React, { useState } from 'react';
import { Sparkles, Globe, X } from 'lucide-react';

export function AnnouncementBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Festive announcement"
      className="relative z-50 bg-[#6B1724] px-4 py-2 text-xs font-medium tracking-wide text-[#FDFBF7] transition-all"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Left note: Worldwide / NRI notice */}
        <div className="hidden sm:flex items-center gap-1.5 text-[#E6C687] text-[11px]">
          <Globe className="h-3.5 w-3.5 stroke-[1.5]" />
          <span>NRI Friendly · Order Abroad, Delivered Across India</span>
        </div>

        {/* Center message */}
        <div className="flex-1 text-center flex items-center justify-center gap-2">
          <Sparkles className="h-3 w-3 text-[#E6C687] shrink-0" />
          <span className="truncate">
            Make every celebration unforgettable <span className="text-[#E6C687] mx-1">·</span> Festive gifting 2026 reservations now open
          </span>
          <span className="hidden md:inline text-[11px] text-[#F3E8D6] opacity-80">
            (Complimentary royal gift packaging on orders above ₹1,999)
          </span>
        </div>

        {/* Right close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="ml-3 shrink-0 rounded p-1 text-[#F3E8D6]/70 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-1 focus:ring-white/40"
          aria-label="Dismiss announcement banner"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </aside>
  );
}
