'use client';

import { motion } from 'motion/react';
import { User, Activity, AlertCircle, CheckCircle2 } from 'lucide-react';

export function LiveVisualization() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-light leading-[1.1] mb-6 text-white font-sans">
            Engagement Intelligence — In Motion.
          </h2>
          <p className="text-[#888] text-lg">
            Watch the AI process digital body language and map conversion pathways instantly.
          </p>
        </div>

        {/* The Visualization Stage */}
        <div className="mx-auto max-w-5xl h-[500px] md:h-[600px] relative bg-zinc-900/20 rounded-3xl border border-zinc-800/50 backdrop-blur-md overflow-hidden">
          
          {/* Ambient lighting */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.08),transparent_70%)] pointer-events-none" />

          {/* Core Processing Unit Component */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-10">
             <motion.div 
               animate={{ rotate: 360 }}
               transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
               className="absolute inset-0 rounded-full border border-orange-500/20 border-dashed"
             />
             <div className="absolute inset-2 bg-black rounded-full border border-zinc-700 flex items-center justify-center shadow-[0_0_40px_rgba(249,115,22,0.15)] overflow-hidden">
                <motion.div 
                   animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="absolute inset-0 bg-orange-500/20 rounded-full blur-md"
                />
                <Activity className="w-8 h-8 text-orange-500 relative z-10" />
             </div>
          </div>

          {/* Connection to core - 100x100 SVG to match percentage coordinates */}
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
            {[
              { x: 20, y: 30, intent: 45 },
              { x: 80, y: 25, intent: 92 },
              { x: 75, y: 75, intent: 12 },
              { x: 25, y: 70, intent: 78 },
              { x: 50, y: 15, intent: 99 },
            ].map((node, i) => (
              <line 
                key={i}
                x1="50" y1="50" 
                x2={node.x} y2={node.y} 
                stroke={node.intent > 70 ? '#CBA052' : '#52525b'} 
                strokeWidth="0.2" 
                strokeDasharray="1 1"
              />
            ))}
          </svg>

          {/* Floating Nodes (Visitors) */}
          {[
            { x: 20, y: 30, delay: 0, status: 'evaluating', intent: 45 },
            { x: 80, y: 25, delay: 1, status: 'high_intent', intent: 92 },
            { x: 75, y: 75, delay: 2, status: 'idle', intent: 12 },
            { x: 25, y: 70, delay: 1.5, status: 'engaged', intent: 78 },
            { x: 50, y: 15, delay: 3, status: 'converting', intent: 99 },
          ].map((node, i) => (
            <motion.div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut", delay: node.delay }}
            >
              <div className="relative group cursor-default">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center border bg-black backdrop-blur-md ${node.intent > 70 ? 'border-orange-500/50 shadow-[0_0_15px_rgba(249,115,22,0.3)]' : 'border-zinc-700'}`}>
                   <User className={`w-4 h-4 ${node.intent > 70 ? 'text-orange-400' : 'text-zinc-500'}`} />
                </div>
                {/* Node info card */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-zinc-900 border border-zinc-800 rounded-lg p-2 text-xs w-32 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-20 pointer-events-none">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-zinc-400 font-mono">INTENT</span>
                    <span className={node.intent > 70 ? 'text-orange-400' : 'text-zinc-300'}>{node.intent}%</span>
                  </div>
                  <div className="h-1 bg-zinc-800 rounded-full overflow-hidden">
                    <div className={`h-full ${node.intent > 70 ? 'bg-orange-500' : 'bg-zinc-600'}`} style={{ width: `${node.intent}%` }} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Scanning Line */}
          <motion.div
            animate={{ top: ['-20%', '120%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            className="absolute left-0 right-0 h-32 bg-gradient-to-b from-transparent via-orange-500/5 to-transparent pointer-events-none border-b border-orange-500/20"
          />
        </div>
      </div>
    </section>
  );
}
