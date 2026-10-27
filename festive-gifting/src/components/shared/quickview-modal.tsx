import React from 'react';
import { Product } from '../../types';
import { X, Check, ShieldCheck, Sparkles, Clock, Scale } from 'lucide-react';

interface QuickviewModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function QuickviewModal({ product, onClose, onAddToCart }: QuickviewModalProps) {
  if (!product) return null;

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(product.price);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quickview-title"
    >
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-3xl overflow-hidden rounded-2xl bg-[#FDFBF7] shadow-2xl border border-[#EAE3D2] z-10 max-h-[90vh] flex flex-col md:flex-row">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 rounded-full bg-white/80 p-1.5 text-[#665851] shadow-xs backdrop-blur-xs hover:bg-[#6B1724] hover:text-white transition-colors"
          aria-label="Close dialog"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Media Side */}
        <div className="md:w-1/2 relative bg-[#F6F2EA] min-h-[260px] md:min-h-full">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="h-full w-full object-cover"
          />
          {product.badge && (
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wider uppercase rounded-sm bg-[#6B1724] text-white">
                {product.badge}
              </span>
            </div>
          )}
        </div>

        {/* Content Side */}
        <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-[#C59B27] uppercase tracking-wider mb-1">
              <span>{product.categoryLabel}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#8C7A70] normal-case">{product.weight}</span>
            </div>

            <h3 id="quickview-title" className="font-serif text-2xl sm:text-3xl text-[#2C2420] font-semibold leading-tight">
              {product.name}
            </h3>

            <div className="mt-2 flex items-baseline gap-3">
              <span className="font-serif text-2xl font-bold text-[#6B1724] tabular-nums">
                {formattedPrice}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-[#9E9087] line-through tabular-nums">
                  {new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                    maximumFractionDigits: 0,
                  }).format(product.originalPrice)}
                </span>
              )}
            </div>

            <p className="mt-4 text-sm text-[#594A42] leading-relaxed">
              {product.description}
            </p>

            {/* Ingredients & Details Highlights */}
            <div className="mt-5 space-y-3 pt-4 border-t border-[#EAE3D2] text-xs text-[#594A42]">
              <div className="flex items-start gap-2">
                <Sparkles className="h-4 w-4 text-[#C59B27] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-[#2C2420]">Key Ingredients: </span>
                  <span>{product.ingredients.join(', ')}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[#C59B27] shrink-0" />
                <div>
                  <span className="font-semibold text-[#2C2420]">Freshness & Shelf Life: </span>
                  <span>{product.shelfLife}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#C59B27] shrink-0" />
                <span>100% Vegetarian · Made with pure A2 cow ghee & zero preservatives</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-[#EAE3D2]">
            <button
              onClick={() => {
                onAddToCart(product);
                onClose();
              }}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#6B1724] py-3 text-sm font-semibold text-[#FDFBF7] hover:bg-[#52111B] shadow-sm transition-all active:scale-[0.99]"
            >
              <Check className="h-4 w-4" />
              <span>Add to Festive Gift Box</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
