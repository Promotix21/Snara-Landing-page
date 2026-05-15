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
          {/* Main Holographic Panel */}
          <div className="relative w-full max-w-sm border border-white/5 bg-white/[0.02] backdrop-blur-xl rounded-2xl p-6 overflow-hidden shadow-2xl">
            {/* Grid overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] opacity-20" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div>
                  <div className="text-[10px] text-[#555] uppercase tracking-wider mb-1">Live Signal Capture</div>
                  <div className="text-xl font-mono text-white">ID: SN-8829-QX</div>
                </div>
                <div className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded text-[10px] text-orange-500 font-bold">
                  HIGH INTENT DETECTED
                </div>
              </div>

              {/* Circular Signal Visual */}
              <div className="relative w-48 h-48 mx-auto mb-8 flex items-center justify-center">
                <motion.div 
                  animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0 border border-orange-500/30 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border border-white/10 rounded-full border-dashed"
                />
                <div className="absolute inset-8 border-[0.5px] border-white/5 rounded-full" />
                
                <div className="text-center relative z-10">
                  <div className="text-5xl font-bold text-white tracking-tighter">94<span className="text-2xl text-orange-500">%</span></div>
                  <div className="text-[9px] text-[#888] uppercase tracking-[0.2em] mt-1">Intent Score</div>
                </div>

                {/* Small Nodes */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 origin-center"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.8)]" />
                </motion.div>
                <div className="absolute bottom-[15%] right-[15%] w-1.5 h-1.5 bg-white/40 rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
              </div>

              {/* Bottom Stats */}
              <div className="space-y-3">
                <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 backdrop-blur-sm">
                    <div className="text-[9px] text-[#555] uppercase tracking-widest mb-1 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-zinc-500" />
                      Dwell Time
                    </div>
                    <div className="text-lg text-white font-mono">04:12.8s</div>
                  </div>
                  <div className="bg-orange-500/5 p-4 rounded-xl border border-orange-500/10 backdrop-blur-sm">
                    <div className="text-[9px] text-[#555] uppercase tracking-widest mb-1 flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                      Signal Quality
                    </div>
                    <div className="text-lg text-orange-500 font-mono">Optimal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
