'use client';

import { motion } from 'motion/react';
import { MessageCircle, Zap, Box } from 'lucide-react';

const topups = [
  { amount: 100, price: '₹499', icon: MessageCircle },
  { amount: 300, price: '₹1,299', icon: Zap },
  { amount: 1000, price: '₹3,499', icon: Box },
];

export function TopUps() {
  return (
    <section className="py-24 bg-zinc-950 relative border-t border-zinc-900 border-b">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-between">
          <div className="max-w-xl text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-light leading-[1.1] mb-4 text-white font-sans">
              Expand Conversation Capacity <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-500">Instantly.</span>
            </h2>
            <p className="text-[#888]">
              Running a high-traffic campaign? Seamlessly add supplemental AI conversation tokens without upgrading your base tier.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 w-full lg:w-auto">
            {topups.map((pack, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.02 }}
                className="group relative bg-[#050505] border border-white/5 hover:bg-white/[0.02] rounded-xl p-6 text-center cursor-pointer transition-all overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10">
                   <div className="mx-auto w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-4 group-hover:border-orange-500/30 group-hover:text-orange-400 transition-colors">
                     <pack.icon className="w-4 h-4 text-zinc-500 group-hover:text-orange-500" />
                   </div>
                   <div className="font-[family-name:var(--font-space-grotesk)] text-2xl font-medium text-zinc-100 mb-1">
                     +{pack.amount}
                   </div>
                   <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-4">Conversations</div>
                   
                   <div className="inline-block px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-300">
                     {pack.price}
                   </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
