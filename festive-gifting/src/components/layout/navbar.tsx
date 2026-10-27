import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenCorporateModal: () => void;
}

export function Navbar({ cartCount, onOpenCart, onOpenCorporateModal }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Shop', href: '#categories' },
    { label: 'New Arrivals', href: '#new-arrivals' },
    { label: 'Bestsellers', href: '#bestsellers' },
    { label: 'Our Story', href: '#story' },
    { label: 'Corporate Gifting', href: '#corporate' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FDFBF7]/95 backdrop-blur-md shadow-xs border-b border-[#EAE3D2]'
          : 'bg-[#FDFBF7] border-b border-[#F0EAE1]'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8 h-20">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="group flex flex-col items-start leading-none whitespace-nowrap shrink-0 focus:outline-none"
        >
          <span className="font-serif text-2xl sm:text-3xl tracking-tight text-[#6B1724] group-hover:text-[#4A0E18] transition-colors">
            SHUBHIKA
          </span>
          <span className="text-[10px] tracking-[0.25em] uppercase text-[#C59B27] font-medium mt-0.5">
            Artisanal Confections & Hampers
          </span>
        </a>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-7 lg:gap-8 text-sm font-medium text-[#4A3E39]"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="relative py-1 whitespace-nowrap shrink-0 hover:text-[#6B1724] transition-colors group"
            >
              {link.label}
              <span className="absolute inset-x-0 bottom-0 h-[1.5px] bg-[#6B1724] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions (Search, Cart & Corporate CTA) */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <a
            href="#categories"
            onClick={(e) => handleLinkClick(e, '#categories')}
            className="p-2 text-[#4A3E39] hover:text-[#6B1724] transition-colors rounded-full hover:bg-[#F2ECE1]"
            aria-label="Browse categories"
            title="Browse Collections"
          >
            <Search className="h-4 w-4" />
          </a>

          <button
            onClick={onOpenCart}
            className="relative p-2 text-[#4A3E39] hover:text-[#6B1724] transition-colors rounded-full hover:bg-[#F2ECE1] focus:outline-none focus:ring-1 focus:ring-[#6B1724]"
            aria-label={`Shopping bag with ${cartCount} items`}
          >
            <ShoppingBag className="h-5 w-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-4.5 min-w-4.5 items-center justify-center rounded-full bg-[#6B1724] px-1 text-[10px] font-bold text-[#FDFBF7] ring-2 ring-[#FDFBF7] tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          <button
            onClick={onOpenCorporateModal}
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-[#6B1724] px-4 py-2 text-xs font-semibold text-[#FDFBF7] hover:bg-[#52111B] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 shadow-xs"
          >
            <span>Bulk Enquiries</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-80" />
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#4A3E39] hover:text-[#6B1724] focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile navigation dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#EAE3D2] bg-[#FDFBF7] px-6 py-5 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-base font-medium text-[#4A3E39] hover:text-[#6B1724] py-1 border-b border-[#F2ECE1]"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCorporateModal();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#6B1724] py-2.5 text-sm font-semibold text-[#FDFBF7]"
              >
                <span>Corporate & Bulk Enquiries</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCart();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-lg border border-[#6B1724] py-2.5 text-sm font-medium text-[#6B1724]"
              >
                <ShoppingBag className="h-4 w-4" />
                <span>View Bag ({cartCount} items)</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
