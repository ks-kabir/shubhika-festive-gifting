import React, { useState } from 'react';
import { Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from '../shared/scroll-reveal';
import { motion } from 'framer-motion';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  return (
    <section className="py-20 bg-[#FAF6EE] border-t border-[#EAE3D2]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 text-center">
        <ScrollReveal direction="up" delay={0.1}>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#C59B27] mb-2.5">
            Festive Announcements & Seasonal Menus
          </p>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#2C2420] tracking-tight">
            Be the first to know when seasonal batches open.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-[#665851] max-w-xl mx-auto leading-relaxed">
            Receive seasonal festival notices, limited Diwali trunk pre-releases, and bespoke corporate gifting catalogs directly in your inbox.
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} className="mt-8 max-w-md mx-auto">
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="rounded-xl border border-emerald-300 bg-emerald-50/80 p-4 text-emerald-900 flex items-center justify-center gap-2.5 text-xs shadow-xs"
            >
              <CheckCircle2 className="h-4 w-4 text-emerald-700 shrink-0" />
              <span>
                <strong>Demo confirmation:</strong> Thank you! You will be notified at <strong>{email}</strong> when new seasonal collections launch.
              </span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-2">
              <div className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3.5 top-3 h-4 w-4 text-[#8C7A70]" />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    className="w-full rounded-lg border border-[#D8CEBE] bg-white py-2.5 pl-10 pr-4 text-xs text-[#2C2420] focus:border-[#6B1724] focus:outline-none focus:ring-1 focus:ring-[#6B1724]"
                    aria-label="Email address for festive updates"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-[#6B1724] px-5 py-2.5 text-xs font-semibold text-[#FDFBF7] hover:bg-[#52111B] shadow-xs transition-colors shrink-0 flex items-center justify-center gap-1.5 active:scale-95"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
              {error && <p className="text-left text-[11px] text-red-600 pl-1">{error}</p>}
              <p className="text-[11px] text-[#8C7A70] text-center pt-1">
                No spam ever. You can unsubscribe anytime with one click.
              </p>
            </form>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}
