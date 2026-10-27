import React, { useState } from 'react';
import { X, Building2, CheckCircle2, Send, Calendar, Users, Mail, Phone, User } from 'lucide-react';

interface CorporateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CorporateModal({ isOpen, onClose }: CorporateModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    quantity: '50-100 hampers',
    festivalDate: '',
    notes: '',
    customBranding: true,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.contactName.trim()) errs.contactName = 'Contact person name is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email))
      errs.email = 'Valid corporate email required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      quantity: '50-100 hampers',
      festivalDate: '',
      notes: '',
      customBranding: true,
    });
    setErrors({});
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="corporate-modal-title"
    >
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-[#FDFBF7] shadow-2xl border border-[#EAE3D2] z-10 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#EAE3D2] px-6 py-5 bg-[#FAF6EE]">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-full bg-[#6B1724]/10 flex items-center justify-center text-[#6B1724]">
              <Building2 className="h-4 w-4" />
            </div>
            <div>
              <h3 id="corporate-modal-title" className="font-serif text-xl sm:text-2xl text-[#2C2420] font-semibold">
                Corporate & Bulk Gifting Enquiry
              </h3>
              <p className="text-xs text-[#7C6E67]">
                Customized hampers, branded ribbon sleeves & multi-destination dispatch
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="rounded-full p-1.5 text-[#665851] hover:bg-[#EAE3D2] transition-colors focus:outline-none"
            aria-label="Close dialog"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="flex-1 overflow-y-auto p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-800">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h4 className="font-serif text-2xl text-[#2C2420]">Enquiry Received</h4>
              <p className="text-sm text-[#594A42] max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-semibold text-[#2C2420]">{formData.contactName}</span>. 
                Our Corporate Concierge team will review your requirements for{' '}
                <span className="font-semibold text-[#2C2420]">{formData.companyName}</span> ({formData.quantity}) and email you a tailored catalog & bespoke quotation within 4 business hours.
              </p>
              <div className="rounded-xl bg-[#FAF6EE] p-4 text-xs text-[#7C6E67] text-left max-w-sm mx-auto space-y-1.5 border border-[#EAE3D2]">
                <p><span className="font-semibold text-[#2C2420]">Email:</span> {formData.email}</p>
                <p><span className="font-semibold text-[#2C2420]">Phone:</span> {formData.phone}</p>
                <p><span className="font-semibold text-[#2C2420]">Custom Branding:</span> {formData.customBranding ? 'Gold Foil Stamping & Custom Sleeve Requested' : 'Standard Royal Packaging'}</p>
              </div>
              <button
                onClick={handleReset}
                className="mt-4 inline-block rounded-lg bg-[#6B1724] px-6 py-2.5 text-xs font-semibold text-[#FDFBF7] hover:bg-[#52111B] transition-colors"
              >
                Close & Return to Catalog
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3D322C] mb-1">
                    Company / Organisation *
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-[#8C7A70]" />
                    <input
                      type="text"
                      placeholder="e.g. Goldman Sachs / Apex Ventures"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full rounded-lg border border-[#D8CEBE] bg-white py-2 pl-9 pr-3 text-xs text-[#2C2420] focus:border-[#6B1724] focus:outline-none focus:ring-1 focus:ring-[#6B1724]"
                    />
                  </div>
                  {errors.companyName && (
                    <p className="mt-1 text-[11px] text-red-600">{errors.companyName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3D322C] mb-1">
                    Contact Person *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-2.5 h-4 w-4 text-[#8C7A70]" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full rounded-lg border border-[#D8CEBE] bg-white py-2 pl-9 pr-3 text-xs text-[#2C2420] focus:border-[#6B1724] focus:outline-none focus:ring-1 focus:ring-[#6B1724]"
                    />
                  </div>
                  {errors.contactName && (
                    <p className="mt-1 text-[11px] text-red-600">{errors.contactName}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3D322C] mb-1">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-4 w-4 text-[#8C7A70]" />
                    <input
                      type="email"
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-lg border border-[#D8CEBE] bg-white py-2 pl-9 pr-3 text-xs text-[#2C2420] focus:border-[#6B1724] focus:outline-none focus:ring-1 focus:ring-[#6B1724]"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-[11px] text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3D322C] mb-1">
                    Phone / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-[#8C7A70]" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-lg border border-[#D8CEBE] bg-white py-2 pl-9 pr-3 text-xs text-[#2C2420] focus:border-[#6B1724] focus:outline-none focus:ring-1 focus:ring-[#6B1724]"
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1 text-[11px] text-red-600">{errors.phone}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#3D322C] mb-1">
                    Estimated Quantity
                  </label>
                  <div className="relative">
                    <Users className="absolute left-3 top-2.5 h-4 w-4 text-[#8C7A70]" />
                    <select
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full rounded-lg border border-[#D8CEBE] bg-white py-2 pl-9 pr-3 text-xs text-[#2C2420] focus:border-[#6B1724] focus:outline-none focus:ring-1 focus:ring-[#6B1724]"
                    >
                      <option value="25-50 hampers">25 – 50 hampers</option>
                      <option value="50-100 hampers">50 – 100 hampers</option>
                      <option value="100-250 hampers">100 – 250 hampers</option>
                      <option value="250-500 hampers">250 – 500 hampers</option>
                      <option value="500+ hampers">500+ hampers (Enterprise tier)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#3D322C] mb-1">
                    Preferred Delivery Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-2.5 h-4 w-4 text-[#8C7A70]" />
                    <input
                      type="date"
                      value={formData.festivalDate}
                      onChange={(e) => setFormData({ ...formData, festivalDate: e.target.value })}
                      className="w-full rounded-lg border border-[#D8CEBE] bg-white py-2 pl-9 pr-3 text-xs text-[#2C2420] focus:border-[#6B1724] focus:outline-none focus:ring-1 focus:ring-[#6B1724]"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="branding"
                  checked={formData.customBranding}
                  onChange={(e) => setFormData({ ...formData, customBranding: e.target.checked })}
                  className="rounded border-[#D8CEBE] text-[#6B1724] focus:ring-[#6B1724]"
                />
                <label htmlFor="branding" className="text-xs text-[#594A42]">
                  Include custom corporate logo foil-stamping & personalized CEO note
                </label>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#3D322C] mb-1">
                  Specific Preferences or Pan-India Dispatch Details (Optional)
                </label>
                <textarea
                  rows={3}
                  placeholder="e.g. Needs delivery to 15 different branch addresses across 4 cities. Mix of sweets & dry fruit boxes."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full rounded-lg border border-[#D8CEBE] bg-white p-2.5 text-xs text-[#2C2420] focus:border-[#6B1724] focus:outline-none focus:ring-1 focus:ring-[#6B1724]"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#6B1724] py-3 text-xs font-semibold text-[#FDFBF7] hover:bg-[#52111B] shadow-sm transition-all active:scale-[0.99]"
              >
                <Send className="h-3.5 w-3.5" />
                <span>Submit Corporate Enquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
