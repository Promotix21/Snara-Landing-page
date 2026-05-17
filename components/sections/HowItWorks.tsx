'use client';

import { motion } from 'motion/react';
import { Eye, Brain, Zap } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: Eye,
      title: 'Observe',
      description: 'Ingest thousands of behavioral data points and micro-interactions per second.',
      delay: 0,
    },
    {
      icon: Brain,
      title: 'Understand',
      description: 'Process signals through context-aware neural models to map genuine intent.',
      delay: 0.3,
    },
    {
      icon: Zap,
      title: 'Engage',
      description: 'Trigger highly personalized, high-conversion interventions instantly.',
      delay: 0.6,
    },
  ];

  return (
    <section className="py-32 bg-zinc-950 relative border-t border-zinc-900 overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-light leading-[1.1] mb-6 text-white font-sans">
            Observe. Understand. Engage.
          </h2>
        </div>

        <div className="relative">
          {/* Animated connection line */}
          <div className="hidden md:block absolute top-[44px] left-[15%] right-[15%] h-px bg-zinc-800">
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-left"
            />
             {/* Moving energy pulse */}
             <motion.div
              animate={{ left: ['0%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              className="absolute top-1/2 -translate-y-1/2 w-8 h-1 bg-orange-400 rounded-full shadow-[0_0_10px_rgba(203,160,82,0.8)]"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: step.delay }}
                className="relative flex flex-col items-center text-center"
              >
                <div className="relative mb-8 group">
                  {/* Glowing backdrop */}
                  <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl scale-0 group-hover:scale-150 transition-transform duration-700" />
                  
                  <div className="w-24 h-24 rounded-2xl bg-black border border-zinc-800 rotate-45 flex items-center justify-center relative z-10 overflow-hidden">
                     {/* Internal scanning effect */}
                     <motion.div 
                        animate={{ top: ['-10%', '110%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: step.delay }}
                        className="absolute left-0 right-0 h-[2px] bg-orange-500/50 shadow-[0_0_8px_rgba(203,160,82,0.8)] -rotate-45"
                     />
                    <div className="-rotate-45">
                      <step.icon className="w-8 h-8 text-zinc-300 group-hover:text-orange-500 transition-colors" />
                    </div>
                  </div>
                </div>

                <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-xs font-mono text-zinc-500 mb-4 tracking-widest uppercase">
                  Phase 0{idx + 1}
                </div>
                
                <h3 className="text-2xl font-medium text-zinc-100 mb-4 font-[family-name:var(--font-space-grotesk)]">
                  {step.title}
                </h3>
                
                <p className="text-zinc-400 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
