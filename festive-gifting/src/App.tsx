/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Product, CartItem } from './types';
import { AnnouncementBar } from './components/layout/announcement-bar';
import { Navbar } from './components/layout/navbar';
import { HeroSection } from './components/sections/hero-section';
import { InteractiveShowcaseSection } from './components/sections/interactive-showcase-section';
import { CategorySection } from './components/sections/category-section';
import { NewArrivalsSection } from './components/sections/new-arrivals-section';
import { BestsellersSection } from './components/sections/bestsellers-section';
import { BrandStorySection } from './components/sections/brand-story-section';
import { BenefitsSection } from './components/sections/benefits-section';
import { CorporateGiftingSection } from './components/sections/corporate-gifting-section';
import { NriGiftingSection } from './components/sections/nri-gifting-section';
import { TestimonialsSection } from './components/sections/testimonials-section';
import { NewsletterSection } from './components/sections/newsletter-section';
import { Footer } from './components/layout/footer';
import { CartDrawer } from './components/shared/cart-drawer';
import { QuickviewModal } from './components/shared/quickview-modal';
import { CorporateModal } from './components/shared/corporate-modal';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCorporateModalOpen, setIsCorporateModalOpen] = useState(false);
  const [quickviewProduct, setQuickviewProduct] = useState<Product | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll Progress Tracking for top progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cart operations (Local state only, no real checkout)
  const handleAddToCart = (product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDFBF7] text-[#2C2420] relative selection:bg-[#6B1724] selection:text-[#FDFBF7]">
      {/* Global Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#C59B27] via-[#E6C687] to-[#6B1724] origin-left z-50 pointer-events-none"
      />

      {/* 1. Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Navigation Bar */}
      <Navbar
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCorporateModal={() => setIsCorporateModalOpen(true)}
      />

      <main className="flex-1">
        {/* 3. Hero Section - With user's uploaded video & scroll expansion */}
        <HeroSection
          onExplore={() => scrollToSection('#categories')}
          onCorporate={() => setIsCorporateModalOpen(true)}
        />

        {/* 4. Interactive Showcase Section with hover animations (Directly after hero) */}
        <InteractiveShowcaseSection
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickviewProduct(p)}
        />

        {/* 5. Shop by Category */}
        <CategorySection
          selectedCategory={selectedCategory}
          onSelectCategory={(categoryId) => {
            setSelectedCategory(categoryId);
            scrollToSection('#new-arrivals');
          }}
        />

        {/* 6. New Arrivals with GlowCard Spotlight effect */}
        <NewArrivalsSection
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickviewProduct(p)}
          selectedCategory={selectedCategory}
          onClearCategory={() => setSelectedCategory(null)}
        />

        {/* 7. Bestsellers */}
        <BestsellersSection
          onAddToCart={handleAddToCart}
          onQuickView={(p) => setQuickviewProduct(p)}
          onScrollToTop={scrollToTop}
        />

        {/* 8. Brand Story */}
        <BrandStorySection
          onExplore={() => scrollToSection('#categories')}
        />

        {/* 9. Why Choose Us / Brand Benefits */}
        <BenefitsSection />

        {/* 10. Corporate Gifting */}
        <CorporateGiftingSection
          onOpenEnquiry={() => setIsCorporateModalOpen(true)}
        />

        {/* 11. NRI / Send Gifts to India */}
        <NriGiftingSection
          onSendGifts={() => scrollToSection('#categories')}
        />

        {/* 12. Testimonials */}
        <TestimonialsSection />

        {/* 13. Newsletter / Updates */}
        <NewsletterSection />
      </main>

      {/* 14. Footer */}
      <Footer onOpenCorporate={() => setIsCorporateModalOpen(true)} />

      {/* Floating Back-To-Top Button */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[#6B1724] text-white shadow-xl hover:bg-[#52111B] transition-all hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
          aria-label="Scroll back to top"
        >
          <ChevronUp className="h-5 w-5" />
        </motion.button>
      )}

      {/* Interactive Overlays */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onOpenCorporate={() => setIsCorporateModalOpen(true)}
      />

      <QuickviewModal
        product={quickviewProduct}
        onClose={() => setQuickviewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CorporateModal
        isOpen={isCorporateModalOpen}
        onClose={() => setIsCorporateModalOpen(false)}
      />
    </div>
  );
}
