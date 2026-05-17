'use client';

import { motion } from 'motion/react';
import { ArrowRight, Play, Activity, Target, Zap, Waves } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Signals & Atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,143,0,0.1),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,143,0,0.15),transparent_60%)]" />
        
        {/* Animated Particles / Signals */}
        {/* Removed animated particles based on feedback */}
      </div>

      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_var(--color-orange-500)] animate-pulse" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-orange-500 font-bold">Real-Time Visitor Intelligence</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-6 text-white font-sans">
            Understand Visitor <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-500">Intent</span> Before They Convert.
          </h1>
          
          <p className="text-lg text-zinc-400 mb-10 leading-relaxed max-w-xl">
            Snara analyzes behavioral signals, conversational patterns, and engagement activity in real time — helping businesses identify intent, personalize interactions, and activate smarter engagement journeys.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="h-12 px-8 bg-orange-500 text-black font-bold rounded-sm text-xs uppercase tracking-widest hover:bg-orange-400 transition-colors flex items-center justify-center space-x-2">
              <span>Explore Intelligence Layer</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="h-12 px-8 border border-white/20 text-white font-bold rounded-sm text-xs uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center space-x-2">
              <Play className="w-4 h-4" />
              <span>Watch in Action</span>
            </button>
          </div>
        </motion.div>

        {/* Right Side Visual */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:h-[600px] flex justify-center items-center"
        >
          {/* Main Context Stream Panel */}
          <div className="relative w-full max-w-md border border-white/5 bg-white/[0.02] backdrop-blur-xl rounded-2xl p-6 shadow-2xl">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20 pointer-events-none rounded-2xl" />

            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)] animate-pulse" />
                  <span className="text-xs font-medium text-white">Live Intelligence Stream</span>
                </div>
                <span className="text-[10px] text-[#555] font-mono">SN-8829-QX</span>
              </div>

              {/* Event Feed */}
              <div className="space-y-4">
                {/* Event 1 */}
                <div className="flex gap-4">
                   <div className="mt-1 relative">
                     <div className="absolute top-6 bottom-[-24px] left-1/2 -translate-x-1/2 w-px bg-white/5" />
                     <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative z-10">
                       <Waves className="w-3 h-3 text-[#888]" />
                     </div>
                   </div>
                   <div className="flex-1 bg-white/5 border border-white/5 rounded-lg p-3">
                     <div className="flex justify-between items-start mb-1">
                       <span className="text-xs font-bold text-white">Page Navigation</span>
                       <span className="text-[10px] text-[#555]">Just now</span>
                     </div>
                     <p className="text-[11px] text-[#888]">Visitor navigated to Pricing page and expanded Enterprise tier details.</p>
                   </div>
                </div>

                {/* Event 2 */}
                <div className="flex gap-4 relative">
                   <div className="mt-1 relative">
                     <div className="absolute top-6 bottom-[-24px] left-1/2 -translate-x-1/2 w-px bg-white/5" />
                     <div className="w-6 h-6 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center relative z-10 shadow-[0_0_10px_rgba(249,115,22,0.3)]">
                       <Zap className="w-3 h-3 text-orange-500" />
                     </div>
                   </div>
                   <div className="flex-1 bg-orange-500/5 border border-orange-500/20 rounded-lg p-3">
                     <div className="flex justify-between items-start mb-1">
                       <span className="text-xs font-bold text-orange-500">High Intent Signal</span>
                       <span className="text-[10px] text-[#555]">12s ago</span>
                     </div>
                     <p className="text-[11px] text-[#888] mb-2">Dwell time on API docs exceeded 40 seconds. Scroll depth 85%.</p>
                     {/* Progress bar representing intent increase */}
                     <div className="flex items-center gap-2">
                       <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                         <motion.div 
                           initial={{ width: '40%' }}
                           animate={{ width: '92%' }}
                           transition={{ duration: 1.5, ease: 'easeOut', delay: 0.5 }}
                           className="h-full bg-orange-500 rounded-full" 
                         />
                       </div>
                       <span className="text-[10px] font-bold text-orange-500">92%</span>
                     </div>
                   </div>
                </div>
                
                {/* Event 3 */}
                <div className="flex gap-4">
                   <div className="mt-1 relative">
                     <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center relative z-10">
                       <Target className="w-3 h-3 text-[#888]" />
                     </div>
                   </div>
                   <div className="flex-1 bg-white/5 border border-white/5 rounded-lg p-3 opacity-60">
                     <div className="flex justify-between items-start mb-1">
                       <span className="text-xs font-bold text-white">Initial Touchpoint</span>
                       <span className="text-[10px] text-[#555]">1m ago</span>
                     </div>
                     <p className="text-[11px] text-[#888]">Visitor arrived via organic search for &quot;real-time analytics API&quot;.</p>
                   </div>
                </div>
              </div>
              
              {/* Auto-generate action */}
              <div className="mt-6 pt-4 border-t border-white/5">
                <div className="flex items-center justify-between bg-black border border-white/10 rounded-lg p-3">
                   <div className="flex items-center gap-3">
                     <div className="w-8 h-8 rounded bg-orange-500/10 flex items-center justify-center">
                       <Activity className="w-4 h-4 text-orange-500" />
                     </div>
                     <div>
                       <div className="text-[10px] text-[#555] uppercase tracking-wider mb-0.5">Recommended Action</div>
                       <div className="text-xs font-bold text-white">Trigger Contextual Chat</div>
                     </div>
                   </div>
                   <motion.div 
                     animate={{ opacity: [1, 0.5, 1] }} 
                     transition={{ duration: 2, repeat: Infinity }}
                     className="px-3 py-1.5 bg-orange-500 text-black text-[10px] uppercase font-bold tracking-widest rounded-sm cursor-pointer hover:bg-orange-400"
                   >
                     Execute
                   </motion.div>
                </div>
              </div>

            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
