import React from 'react';
import { CartItem } from '../../types';
import { X, Trash2, Plus, Minus, Gift, ArrowRight } from 'lucide-react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onOpenCorporate: () => void;
}

export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onOpenCorporate,
}: CartDrawerProps) {
  if (!isOpen) return null;

  const totalAmount = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const formattedTotal = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(totalAmount);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-labelledby="cart-title">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
        <div className="w-screen max-w-md bg-[#FDFBF7] shadow-2xl flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#EAE3D2] px-6 py-5 bg-[#FAF6EE]">
            <div className="flex items-center gap-2">
              <Gift className="h-5 w-5 text-[#6B1724]" />
              <h2 id="cart-title" className="font-serif text-2xl font-semibold text-[#2C2420]">
                Your Festive Gift Box
              </h2>
            </div>
            <button
              onClick={onClose}
              className="rounded-full p-1.5 text-[#665851] hover:bg-[#EAE3D2] transition-colors focus:outline-none"
              aria-label="Close gift bag"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Items list */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <div className="h-16 w-16 rounded-full bg-[#F2ECE1] flex items-center justify-center text-[#8C7A70] mb-4">
                  <Gift className="h-8 w-8 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-xl text-[#2C2420]">Your gift box is empty</h3>
                <p className="mt-2 text-sm text-[#7C6E67] max-w-xs leading-relaxed">
                  Explore our handcrafted mithai, royal dry fruit chests, and celebration hampers to add joy.
                </p>
                <button
                  onClick={onClose}
                  className="mt-6 rounded-lg bg-[#6B1724] px-5 py-2.5 text-xs font-semibold text-[#FDFBF7] hover:bg-[#52111B] transition-colors"
                >
                  Start Exploring
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="flex gap-4 p-3.5 rounded-xl border border-[#EAE3D2] bg-white shadow-2xs"
                >
                  <img
                    src={item.product.imageUrl}
                    alt={item.product.name}
                    className="h-20 w-20 rounded-lg object-cover shrink-0 bg-[#F6F2EA]"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-serif text-base font-medium text-[#2C2420] leading-snug">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id)}
                          className="text-[#9E9087] hover:text-red-700 p-1 transition-colors"
                          aria-label={`Remove ${item.product.name}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      <p className="text-xs text-[#8C7A70] mt-0.5">{item.product.weight}</p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-[#EAE3D2] rounded-md bg-[#FAF6EE]">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, -1)}
                          className="p-1 text-[#665851] hover:text-[#2C2420] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-semibold tabular-nums text-[#2C2420]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, 1)}
                          className="p-1 text-[#665851] hover:text-[#2C2420] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>

                      <span className="text-sm font-semibold text-[#2C2420] tabular-nums">
                        {new Intl.NumberFormat('en-IN', {
                          style: 'currency',
                          currency: 'INR',
                          maximumFractionDigits: 0,
                        }).format(item.product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout Note */}
          {items.length > 0 && (
            <div className="border-t border-[#EAE3D2] p-6 bg-[#FAF6EE] space-y-4">
              <div className="rounded-lg bg-[#F3ECE0] p-3 text-xs text-[#665851] flex items-center gap-2.5">
                <Gift className="h-4 w-4 text-[#C59B27] shrink-0" />
                <span>
                  Complimentary royal gift packaging & handwritten festive blessing card included with every box.
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-[#665851]">Subtotal</span>
                <span className="font-serif text-2xl font-bold text-[#6B1724] tabular-nums">
                  {formattedTotal}
                </span>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => {
                    alert('Demo Mode: Thank you! In production, this proceeds to secure payment and recipient address collection.');
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#6B1724] py-3.5 text-sm font-semibold text-[#FDFBF7] hover:bg-[#52111B] shadow-md transition-all active:scale-[0.99]"
                >
                  <span>Proceed to Delivery Details</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-center text-[11px] text-[#8C7A70]">
                  Looking to send 10+ hampers for a team or corporate clients?{' '}
                  <button
                    onClick={() => {
                      onClose();
                      onOpenCorporate();
                    }}
                    className="underline text-[#6B1724] font-medium hover:text-[#4A0E18]"
                  >
                    Corporate Enquiry
                  </button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
