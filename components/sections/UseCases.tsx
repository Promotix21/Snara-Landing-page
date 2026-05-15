'use client';

import { motion } from 'motion/react';
import { Cloud, ShoppingCart, HeartPulse, Building2, GraduationCap, Briefcase } from 'lucide-react';

const cases = [
  {
    icon: Cloud,
    title: 'SaaS Platforms',
    description: 'Identify product-qualified leads based on feature exploration patterns and docs consumption.',
    metric: '+40% Demo Booking Rate',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Detect hesitation during checkout and trigger incentive-based conversational interventions.',
    metric: '-25% Cart Abandonment',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare',
    description: 'Guide patients to the right care paths through secure, context-aware intent mapping.',
    metric: 'HIPAA Compliant Routing',
  },
  {
    icon: Building2,
    title: 'Enterprise Services',
    description: 'Score account-level engagement by aggregating multi-stakeholder activity signals.',
    metric: 'ABM Intelligence',
  },
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'Personalize enrollment journeys based on course viewing history and interaction depth.',
    metric: 'Higher Enrollment Conversions',
  },
  {
    icon: Briefcase,
    title: 'High-Ticket Businesses',
    description: 'Connect VIP prospects directly to sales agents exactly when they show buying readiness.',
    metric: 'Real-Time Sales Routing',
  },
];

export function UseCases() {
  return (
    <section className="py-32 bg-zinc-950 relative border-t border-zinc-900">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-light leading-[1.1] mb-6 text-white font-sans">
            Built for Modern Digital Engagement.
          </h2>
          <p className="text-[#888] text-lg">
            Adaptable intelligence models trained for specific industry workflows and conversion goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((useCase, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white/[0.01] border border-white/5 rounded-2xl p-8 hover:bg-white/[0.03] transition-colors overflow-hidden shadow-xl"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center border border-orange-500/30">
                    <useCase.icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div className="text-[10px] font-bold text-orange-500 bg-orange-500/20 px-3 py-1 rounded border border-orange-500/30 uppercase tracking-widest">
                    {useCase.metric}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </div>

               {/* Decorative grid pattern bottom right */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 opacity-[0.03] group-hover:opacity-10 transition-opacity bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmOTczMTYiLz48L3N2Zz4=')] mask-image-radial-gradient" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
