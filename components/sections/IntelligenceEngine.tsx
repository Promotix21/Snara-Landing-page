'use client';

import { motion } from 'motion/react';
import { Network, MessageSquareText, Target, Crosshair, Zap, Blocks } from 'lucide-react';

const features = [
  {
    title: 'Behavioral Signal Analysis',
    description: 'Detect micro-interactions, scroll density, and navigation patterns to map genuine interest levels.',
    icon: Network,
  },
  {
    title: 'Conversational Intelligence',
    description: 'Understand context and nuance in real-time chat, dynamically adapting responses to visitor sentiment.',
    icon: MessageSquareText,
  },
  {
    title: 'Intent Scoring Engine',
    description: 'Assign dynamic scores based on cumulative visitor actions, identifying high-propensity targets instantly.',
    icon: Target,
  },
  {
    title: 'Real-Time Visitor Understanding',
    description: 'Build comprehensive session profiles as they happen, moving beyond static delayed analytics.',
    icon: Crosshair,
  },
  {
    title: 'Smart Engagement Activation',
    description: 'Trigger personalized interventions and workflows at the exact moment of highest conversion probability.',
    icon: Zap,
  },
  {
    title: 'Unified Intelligence View',
    description: 'Consolidate cross-channel behavioral data into a single, actionable command center.',
    icon: Blocks,
  },
];

export function IntelligenceEngine() {
  return (
    <section className="py-32 bg-black relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-light leading-[1.1] mb-6 text-white font-sans">
            The Intelligence Layer Behind Smarter Engagement.
          </h2>
          <p className="text-[#888] text-lg">
             A modular neural architecture designed to process, understand, and activate visitor data in milliseconds.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 rounded-xl transition-all duration-500 hover:shadow-[0_0_30px_rgba(203,160,82,0.1)]"
            >
              
              <div className="relative h-full rounded-xl p-6 flex flex-col justify-between overflow-hidden">
                {/* Subtle internal noise/texture */}
                <div className="absolute inset-0 opacity-[0.02] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDEpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] pointer-events-none" />

                <div>
                  <div className="w-8 h-8 rounded bg-orange-500/10 border border-orange-500/30 flex items-center justify-center mb-4">
                    <feature.icon className="w-4 h-4 text-orange-500" />
                  </div>
                  <h3 className="text-white font-bold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#666] leading-relaxed text-xs">
                    {feature.description}
                  </p>
                </div>
                
                {/* Holographic accent line */}
                <div className="h-[2px] w-0 bg-gradient-to-r from-orange-500 to-transparent group-hover:w-full transition-all duration-700 mt-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
