'use client';

import { motion } from 'motion/react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function Cta() {
  return (
    <section className="relative py-40 overflow-hidden bg-black flex items-center justify-center min-h-[70vh]">
      {/* Cinematic Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(223,178,86,0.15),transparent_60%)]" />
        
        {/* Particle nodes */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {Array.from({ length: 30 }).map((_, i) => (
             <motion.div
               key={i}
               className="absolute w-1 h-1 bg-orange-500 rounded-full"
               style={{
                 left: `${(i * 23) % 100}%`,
                 top: `${(i * 37) % 100}%`,
                 filter: 'blur(1px)',
               }}
               animate={{
                 y: [0, -((i * 11) % 100) - 50],
                 opacity: [0, 0.8, 0],
                 scale: [0, 1.5, 0],
               }}
               transition={{
                 duration: ((i * 13) % 5) + 5,
                 repeat: Infinity,
                 delay: (i * 17) % 5,
                 ease: "easeOut"
               }}
             />
          ))}
        </motion.div>

        {/* Dense Grid Floor */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-64 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiIGZpbGw9Im5vbmUiLz4KPHBhdGggZD0iTTAgNDBoNDBNNDAgMHY0MCIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiLz4KPC9zdmc+')] [transform:perspective(1000px)rotateX(75deg)] origin-bottom opacity-40" 
          style={{ maskImage: 'linear-gradient(to top, black, transparent)' }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-orange-500/30 mb-8 mx-auto shadow-[0_0_20px_rgba(203,160,82,0.2)]">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-[10px] font-bold text-orange-500 tracking-[0.2em] uppercase">The Future of Engagement</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-light leading-[1.1] mb-8 text-white font-sans">
            A Smarter Way to Engage.
          </h2>
          
          <p className="text-xl text-[#888] mb-12 max-w-2xl mx-auto leading-relaxed">
            Snara transforms visitor interactions into real-time intelligence and adaptive engagement systems. Provide context. Know the intent. Close the gap.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="h-12 px-8 bg-orange-500 text-black font-bold rounded-sm text-xs uppercase tracking-widest hover:bg-orange-400 transition-colors flex items-center justify-center space-x-2 shadow-[0_0_30px_rgba(203,160,82,0.4)]">
              <span>Explore Snara</span>
            </button>
            <button className="h-12 px-8 border border-white/20 text-white font-bold rounded-sm text-xs uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center">
              Request a Demo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
