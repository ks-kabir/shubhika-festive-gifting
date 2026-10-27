import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenCorporate: () => void;
}

export function Footer({ onOpenCorporate }: FooterProps) {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#1C1614] text-[#D8CEBE] pt-16 pb-12 border-t border-[#332A26]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#332A26]">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-3xl tracking-tight text-[#E6C687] block font-medium">
              SHUBHIKA
            </span>
            <p className="text-xs tracking-[0.25em] uppercase text-[#A8988B] font-medium">
              Artisanal Confections & Festive Hampers
            </p>
            <p className="text-xs text-[#A8988B] leading-relaxed max-w-sm">
              Reviving the timeless reverence of Indian festive gifting. Handcrafted in small batches with pure A2 cow ghee, authentic whole spices, and gold-foiled presentation for loved ones across India and worldwide patrons.
            </p>
            <div className="pt-2 text-xs text-[#E6C687]">
              <span>Curated in Jaipur, Mumbai & New Delhi</span>
            </div>
          </div>

          {/* Collections Anchors */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Collections
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('#categories')}
                  className="hover:text-white transition-colors"
                >
                  Artisanal Mithai
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#categories')}
                  className="hover:text-white transition-colors"
                >
                  Royal Dry Fruits
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#categories')}
                  className="hover:text-white transition-colors"
                >
                  Heritage Farsan
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#categories')}
                  className="hover:text-white transition-colors"
                >
                  Celebration Trunks
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#new-arrivals')}
                  className="hover:text-white transition-colors"
                >
                  New Arrivals
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Nav & Experience */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Explore
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => scrollTo('#story')}
                  className="hover:text-white transition-colors"
                >
                  Our Philosophy
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('#bestsellers')}
                  className="hover:text-white transition-colors"
                >
                  Festive Bestsellers
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenCorporate}
                  className="hover:text-white transition-colors flex items-center gap-1 text-[#E6C687]"
                >
                  <span>Corporate Gifting</span>
                  <ArrowUpRight className="h-3 w-3" />
                </button>
              </li>
              <li>
                <a
                  href="#categories"
                  className="hover:text-white transition-colors"
                >
                  NRI Gifting Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Corporate / Contact Callout */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white">
              Corporate Concierge
            </p>
            <p className="text-xs text-[#A8988B] leading-relaxed">
              Planning 25+ festive hampers for your team or leadership partners? Connect directly with our gifting director.
            </p>
            <button
              onClick={onOpenCorporate}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#E6C687]/40 bg-white/5 px-4 py-2 text-xs font-semibold text-[#E6C687] hover:bg-[#E6C687] hover:text-[#4A0E18] transition-colors"
            >
              <span>Request Corporate Catalog</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#7C6E67]">
          <p>© {new Date().getFullYear()} Shubhika Confections & Hampers Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Pure Vegetarian (100%)</span>
            <span>A2 Desi Cow Ghee</span>
            <span>Pan-India Doorstep Dispatch</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
