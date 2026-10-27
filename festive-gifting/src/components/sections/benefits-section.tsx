import React from 'react';
import { Package, Shield, Truck, HeartHandshake, Sparkles } from 'lucide-react';
import { SectionHeading } from '../shared/section-heading';
import { motion } from 'framer-motion';
import { ScrollReveal, StaggerContainer, staggerItemVariants } from '../shared/scroll-reveal';

export function BenefitsSection() {
  const benefits = [
    {
      icon: Sparkles,
      title: 'Carefully Curated Collections',
      description:
        'Small-batch recipes prepared with pure A2 cow ghee, authentic spices, and hand-selected nuts for memorable celebrations.',
    },
    {
      icon: Package,
      title: 'Gift-Ready Royal Presentation',
      description:
        'Rigid keepsake boxes, velvet interior linings, and satin ribbons crafted to evoke royal Indian heritage.',
    },
    {
      icon: HeartHandshake,
      title: 'Thoughtful Options for Every Budget',
      description:
        'From sweet boxes for intimate family gatherings to grand celebratory trunks for cherished relationships.',
    },
    {
      icon: Truck,
      title: 'Reliable Pan-India Delivery',
      description:
        'Secure temperature-managed packaging dispatched seamlessly to doorsteps in major metros and tier-2 cities across India.',
    },
    {
      icon: Shield,
      title: 'Seamless Ordering from Abroad',
      description:
        'NRI patrons can easily celebrate from anywhere in the world using international credit/debit cards with personalized cards.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#FDFBF7]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up" delay={0.1}>
          <SectionHeading
            kicker="The Shubhika Promise"
            title="Why Families & Businesses Choose Us"
            subtitle="Every detail is considered—from pure culinary ingredients to exquisite presentation and dependable doorstep delivery."
          />
        </ScrollReveal>

        <StaggerContainer
          staggerDelay={0.1}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={idx}
                variants={staggerItemVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="rounded-2xl border border-[#EAE3D2] bg-white p-6 shadow-2xs hover:shadow-md hover:border-[#D8CEBE] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FAF6EE] text-[#6B1724] border border-[#EAE3D2] mb-5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-serif text-lg font-medium text-[#2C2420] leading-snug">
                    {b.title}
                  </h3>
                  <p className="mt-2.5 text-xs text-[#665851] leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
