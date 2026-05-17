'use client';

import { motion } from 'motion/react';
import { BarChart3, PieChart, MousePointerClick, BrainCircuit, Activity, Network } from 'lucide-react';

export function TheProblem() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden border-y border-zinc-900">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-light leading-[1.1] mb-6 text-white font-sans">
            Most Platforms Track Clicks. <strong className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-500">Snara Tracks Intent.</strong>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center bg-white/[0.02] rounded-2xl border border-white/5 p-4 lg:p-8">
          
          {/* Legacy Side */}
          <div className="relative h-[400px] bg-black/50 rounded-xl border border-white/5 p-8 overflow-hidden group">
            <div className="absolute top-6 left-8 text-sm font-mono text-zinc-500 uppercase tracking-widest whitespace-nowrap">The Legacy Way</div>
            
            {/* Static UI Mockups */}
            <div className="mt-12 space-y-6 opacity-60 grayscale transition-all duration-700 group-hover:opacity-40">
              <div className="flex gap-4 items-end h-32 border-b border-zinc-800 pb-2">
                {[40, 70, 30, 80, 50, 90, 60].map((h, i) => (
                  <div key={i} className="w-8 bg-zinc-800 rounded-t-sm" style={{ height: `${h}%` }} />
                ))}
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-zinc-800/50 h-24 rounded-xl border border-zinc-700/50 flex flex-col justify-center px-4">
                  <PieChart className="w-5 h-5 text-zinc-500 mb-2" />
                  <div className="h-2 w-16 bg-zinc-700 rounded-full mb-2" />
                  <div className="h-2 w-24 bg-zinc-700 rounded-full" />
                </div>
                <div className="bg-zinc-800/50 h-24 rounded-xl border border-zinc-700/50 flex flex-col justify-center px-4">
                   <MousePointerClick className="w-5 h-5 text-zinc-500 mb-2" />
                  <div className="h-2 w-12 bg-zinc-700 rounded-full mb-2" />
                  <div className="h-2 w-20 bg-zinc-700 rounded-full" />
                </div>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-8 left-8 right-8 text-center text-zinc-400 text-sm">
              Disconnected metrics without context or intelligence.
            </div>
          </div>

          {/* Snara Side */}
          <div className="relative h-[400px] bg-white/[0.01] rounded-xl border border-white/5 p-8 overflow-hidden shadow-2xl">
            <div className="absolute top-6 right-8 text-[10px] font-bold text-orange-500 uppercase tracking-widest whitespace-nowrap z-20">The Snara Way</div>

             {/* Background glow */}
             <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(223,178,86,0.1),transparent_70%)]" />

            {/* Dynamic UI Engine */}
            <div className="relative mt-8 h-full z-10 flex items-center justify-center">
              
              {/* Central intent node */}
              <motion.div 
                animate={{ scale: [1, 1.05, 1] }} 
                transition={{ duration: 4, repeat: Infinity }}
                className="w-24 h-24 rounded-full bg-black border border-orange-500/40 shadow-[0_0_20px_rgba(203,160,82,0.4)] flex items-center justify-center z-20"
              >
                <BrainCircuit className="w-8 h-8 text-orange-500" />
              </motion.div>

              {/* Orbiting nodes */}
              {[0, 120, 240].map((deg, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20 + i * 5, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 z-10"
                >
                  <div 
                    className="absolute top-1/2 left-1/2 -mt-4 -ml-4 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center"
                    style={{ transform: `rotate(${deg}deg) translateX(100px) rotate(-${deg}deg)` }}
                  >
                    {i === 0 && <Activity className="w-3 h-3 text-zinc-300" />}
                    {i === 1 && <Network className="w-3 h-3 text-zinc-300" />}
                    {i === 2 && <MousePointerClick className="w-3 h-3 text-orange-400" />}
                  </div>
                </motion.div>
              ))}

              {/* Glowing pathways */}
               <motion.svg className="absolute inset-0 w-full h-full text-orange-500/20" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.circle 
                    cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2"
                    animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.circle 
                    cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.2"
                  />
               </motion.svg>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none z-30" />
            <div className="absolute bottom-8 left-8 right-8 text-center text-zinc-300 text-sm z-30">
              Correlated behavioral signals mapping real-time intent.
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
