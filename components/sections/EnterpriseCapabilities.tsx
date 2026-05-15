'use client';

import { motion } from 'motion/react';
import { Cpu, Activity, Orbit, Network, Key, Layers, Terminal, Fingerprint, Lock, Server } from 'lucide-react';

const caps = [
  { icon: Cpu, label: 'Real-Time Signal Processing' },
  { icon: Orbit, label: 'AI Intent Detection' },
  { icon: Activity, label: 'Behavioral Analysis Engine' },
  { icon: Terminal, label: 'Conversational Intelligence' },
  { icon: Network, label: 'Dynamic Engagement Workflows' },
  { icon: Layers, label: 'Multi-Session Understanding' },
  { icon: Fingerprint, label: 'Unified Visitor Intelligence' },
  { icon: Key, label: 'Smart Activation Systems' },
  { icon: Server, label: 'Scalable AI Infrastructure' },
  { icon: Lock, label: 'Enterprise Security & Compliance' },
];

export function EnterpriseCapabilities() {
  return (
    <section className="py-32 bg-zinc-950 relative border-t border-zinc-900 border-b overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] pointer-events-none opacity-50" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-light leading-[1.1] mb-6 text-white font-sans">
            Enterprise-Ready <br /> <span className="text-[#888] font-mono text-3xl md:text-4xl">&lt;Intelligence.Infrastructure /&gt;</span>
          </h2>
          <p className="text-[#888] text-lg">
            High-throughput architecture designed for zero-latency signal processing and maximum data security.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-px bg-white/5 rounded-2xl overflow-hidden border border-white/5">
          {caps.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="bg-[#050505] p-8 flex flex-col items-center justify-center text-center group hover:bg-white/[0.02] transition-colors relative"
            >
              {/* Corner tech accents */}
              <div className="absolute top-2 left-2 w-1 h-1 border-t border-l border-zinc-700 opacity-0 group-hover:opacity-100" />
              <div className="absolute top-2 right-2 w-1 h-1 border-t border-r border-zinc-700 opacity-0 group-hover:opacity-100" />
              <div className="absolute bottom-2 left-2 w-1 h-1 border-b border-l border-zinc-700 opacity-0 group-hover:opacity-100" />
              <div className="absolute bottom-2 right-2 w-1 h-1 border-b border-r border-zinc-700 opacity-0 group-hover:opacity-100" />

              <cap.icon className="w-8 h-8 text-zinc-600 mb-4 group-hover:text-orange-500 transition-colors duration-500" />
              <span className="text-xs font-mono text-zinc-400 group-hover:text-zinc-200 transition-colors max-w-[120px] leading-relaxed">
                {cap.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
