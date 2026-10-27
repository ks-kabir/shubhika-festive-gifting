import React, { useState } from 'react';
import { Product } from '../../types';
import { GlowCard } from '../ui/spotlight-card';
import { Plus, Eye, Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onQuickView: (product: Product) => void;
  customGlowColor?: string;
}

export function ProductCard({
  product,
  onAddToCart,
  onQuickView,
  customGlowColor = 'rgba(212, 175, 55, 0.16)', // subtle warm antique gold
}: ProductCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1400);
  };

  const formattedPrice = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(product.price);

  const formattedOriginalPrice = product.originalPrice
    ? new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0,
      }).format(product.originalPrice)
    : null;

  return (
    <GlowCard
      glowColor={customGlowColor}
      size={380}
      className="border border-[#EAE3D2] shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
    >
      {/* Top Image Showcase */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#F6F2EA]">
        {/* Subtle decorative badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-30">
            <span
              className={`inline-block px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-sm shadow-xs ${
                product.badge === 'New'
                  ? 'bg-[#6B1724] text-[#FDFBF7]'
                  : product.badge === 'Bestseller'
                  ? 'bg-[#C59B27] text-[#2C2420]'
                  : 'bg-[#2C2420] text-[#FDFBF7]'
              }`}
            >
              {product.badge}
            </span>
          </div>
        )}

        {/* Quick View Button overlay */}
        <button
          onClick={() => onQuickView(product)}
          className="absolute top-3 right-3 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-[#4A3E39] shadow-xs backdrop-blur-xs hover:bg-[#6B1724] hover:text-white transition-colors"
          title="Quick View Details"
          aria-label={`Quick view details for ${product.name}`}
        >
          <Eye className="h-4 w-4" />
        </button>

        {/* Product Image with Fallback */}
        {!imageError ? (
          <img
            src={product.imageUrl}
            alt={product.name}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#F7F3EB] to-[#EAE3D2] p-6 text-center">
            <span className="font-serif text-2xl text-[#6B1724] mb-1">Shubhika</span>
            <span className="text-xs font-medium text-[#7C6E67]">{product.categoryLabel}</span>
          </div>
        )}
      </div>

      {/* Card Content & Metadata */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Metadata line without pill clutter */}
          <div className="flex items-center gap-2 text-xs text-[#8C7A70] mb-1.5">
            <span className="font-medium text-[#C59B27] tracking-wider uppercase text-[10px]">
              {product.categoryLabel}
            </span>
            <span aria-hidden="true">·</span>
            <span>{product.weight}</span>
          </div>

          <h3 className="font-serif text-xl font-medium text-[#2C2420] group-hover:text-[#6B1724] transition-colors leading-snug">
            {product.name}
          </h3>

          <p className="mt-1.5 text-xs text-[#665851] line-clamp-2 leading-relaxed">
            {product.tagline}
          </p>
        </div>

        {/* Price & Action Row */}
        <div className="mt-5 pt-3.5 border-t border-[#F0EAE1] flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-lg font-semibold text-[#2C2420] tabular-nums">
              {formattedPrice}
            </span>
            {formattedOriginalPrice && (
              <span className="text-xs text-[#9E9087] line-through tabular-nums">
                {formattedOriginalPrice}
              </span>
            )}
          </div>

          <button
            onClick={handleAdd}
            className={`inline-flex items-center gap-1.5 rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 active:scale-95 ${
              isAdded
                ? 'bg-emerald-700 text-white shadow-xs'
                : 'bg-[#6B1724] text-white hover:bg-[#52111B] shadow-xs'
            }`}
            aria-label={`Add ${product.name} to gift box`}
          >
            {isAdded ? (
              <>
                <Check className="h-3.5 w-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <Plus className="h-3.5 w-3.5" />
                <span>Add to Box</span>
              </>
            )}
          </button>
        </div>
      </div>
    </GlowCard>
  );
}
