'use client';

import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Snara Explore',
    price: '0',
    description: 'Perfect for understanding visitor basics.',
    features: ['Basic intent tracking', 'Up to 1,000 tracked sessions/mo', 'Standard AI chat widget', '7-day data retention'],
    popular: false,
  },
  {
    name: 'Snara Core',
    price: '1,499',
    description: 'For growing brands needing engagement automation.',
    features: ['Advanced intent scoring', 'Up to 10,000 tracked sessions/mo', 'Context-aware conversational AI', 'Custom intervention triggers', '30-day data retention'],
    popular: false,
  },
  {
    name: 'Snara Growth',
    price: '3,999',
    description: 'Full-scale intelligence for high-volume conversion.',
    features: ['Real-time behavioral mapping', 'Up to 50,000 tracked sessions/mo', 'Multi-session intent aggregation', 'VIP prospect routing', 'Unlimited data retention', 'Premium support SLA'],
    popular: true,
  },
  {
    name: 'Snara Agency',
    price: '12,999',
    description: 'Multi-client ecosystem management.',
    features: ['All Growth features', 'Unlimited sub-accounts', 'White-label dashboard', 'Custom AI model fine-tuning', 'Dedicated intelligence architect'],
    popular: false,
  },
];

export function Pricing() {
  return (
    <section className="py-32 bg-black relative">
      {/* Background glow for pricing */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-orange-500/5 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-light leading-[1.1] mb-6 text-white font-sans">
            Scale Engagement <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 to-zinc-600">With Smarter Intelligence.</span>
          </h2>
          <p className="text-[#888] text-lg">
            Flexible conversation and engagement intelligence plans designed for businesses, growing brands, and multi-client ecosystems.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-xl p-8 flex flex-col h-full transition-all duration-300 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-[#111] to-[#050505] border border-orange-500/20 md:-translate-y-4' 
                  : 'bg-white/[0.01] border border-white/5 hover:bg-white/[0.03]'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full text-[10px] font-mono font-medium text-black uppercase tracking-widest shadow-[0_0_10px_rgba(203,160,82,0.5)]">
                  Maximum Intelligence
                </div>
              )}
              
              <div className="mb-8">
                <h3 className={`text-lg font-medium mb-2 font-[family-name:var(--font-space-grotesk)] ${plan.popular ? 'text-orange-400' : 'text-zinc-100'}`}>
                  {plan.name}
                </h3>
                <p className="text-zinc-500 text-sm h-10">{plan.description}</p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl text-zinc-500 font-medium">₹</span>
                  <span className="text-4xl font-semibold tracking-tight text-zinc-100 font-[family-name:var(--font-space-grotesk)]">{plan.price}</span>
                  <span className="text-zinc-500 font-mono text-xs">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 flex-grow mb-8">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex gap-3 text-sm text-zinc-300">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.popular ? 'text-orange-500' : 'text-zinc-600'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full h-10 rounded-sm text-xs font-bold uppercase tracking-widest transition-all ${
                plan.popular
                  ? 'bg-orange-500 hover:bg-orange-400 text-black'
                  : 'border border-white/20 hover:bg-white/5 text-white'
              }`}>
                {plan.price === '0' ? 'Start Exploring' : 'Select Plan'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
