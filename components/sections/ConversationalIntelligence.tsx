'use client';

import { motion } from 'motion/react';
import { User, Sparkles, ShieldCheck, Database } from 'lucide-react';

export function ConversationalIntelligence() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text */}
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-light leading-[1.1] mb-6 text-white font-sans">
              Conversations <br /> Powered by <span className="font-bold italic text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-500">Context.</span>
            </h2>
            <p className="text-[#888] text-lg mb-8 leading-relaxed">
              Snara goes beyond scripted chatbots. It reads the room. By injecting real-time behavioral data into the conversational AI, every response is hyper-personalized to the exact micro-moment of the user's journey.
            </p>
            
            <ul className="space-y-6">
              {[
                { icon: Database, title: 'Session History Integration', text: 'AI knows what pages they just read.' },
                { icon: ShieldCheck, title: 'Contextual Tone Mapping', text: 'Adapts messaging based on intent score.' },
                { icon: Sparkles, title: 'Dynamic Goal Alignment', text: 'Guides conversations toward highest-probability conversion.' },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="mt-1 w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="text-zinc-100 font-medium mb-1">{item.title}</h4>
                    <p className="text-zinc-500 text-sm">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual - Holographic Chat Interface */}
          <div className="relative h-[600px] flex items-center justify-center">
            {/* Background glow */}
            <div className="absolute inset-0 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none" />

            <div className="relative w-full max-w-md bg-[#0a0a0a] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden z-10">
              {/* Header */}
              <div className="px-6 py-4 border-b border-zinc-800/50 bg-zinc-950 flex items-center justify-between">
                 <div className="flex items-center gap-3">
                   <div className="relative">
                     <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/40">
                       <Sparkles className="w-4 h-4 text-orange-500" />
                     </div>
                     <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-green-500 border border-black" />
                   </div>
                   <div>
                     <div className="text-sm font-medium text-zinc-100">Snara Intelligence</div>
                     <div className="text-[10px] text-zinc-500">Processing signals...</div>
                   </div>
                 </div>
                 <div className="flex gap-1">
                   <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                   <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                   <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                 </div>
              </div>

              {/* Chat Area */}
              <div className="p-6 space-y-6">
                 {/* User message */}
                 <div className="flex gap-4">
                   <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center shrink-0 border border-zinc-700">
                     <User className="w-4 h-4 text-zinc-400" />
                   </div>
                   <div className="bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm p-4 rounded-2xl rounded-tl-sm w-full">
                     I'm looking for an enterprise solution, but I need to know about security.
                   </div>
                 </div>

                 {/* System AI analyzing */}
                 <motion.div 
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   transition={{ delay: 1 }}
                   className="pl-12 pr-4"
                 >
                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-3 text-[10px] font-mono text-orange-400 mb-2 relative overflow-hidden">
                       <motion.div 
                         initial={{ left: '-100%' }} animate={{ left: '100%' }} transition={{ duration: 2, repeat: Infinity }}
                         className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-orange-500/20 to-transparent"
                       />
                       [SYSTEM: Detected Enterprise intent. User viewed 'Compliance' page for 45s prior to chat. Shifting response tone to High-Security/Enterprise.]
                    </div>
                 </motion.div>

                 {/* AI Response */}
                 <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2 }}
                    className="flex gap-4 flex-row-reverse"
                  >
                   <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-orange-600 to-orange-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                     <Sparkles className="w-4 h-4 text-white" />
                   </div>
                   <div className="bg-black border border-orange-500/30 text-zinc-200 text-sm p-4 rounded-2xl rounded-tr-sm w-full shadow-[0_4px_20px_rgba(249,115,22,0.05)]">
                     <p className="mb-2">I completely understand. Security is critical at the enterprise level.</p>
                     <p>Since you're exploring our compliance standards, would you like me to send you our latest SOC 2 Type II report and HIPAA compliance overview?</p>
                   </div>
                 </motion.div>
              </div>
            </div>

            {/* Floating Holographic Labels */}
            <motion.div 
              animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-8 top-32 bg-black/80 backdrop-blur-md border border-zinc-700/50 rounded-lg p-3 text-xs z-20 hidden md:block"
            >
              <div className="text-zinc-400 mb-1">Intent Match</div>
              <div className="font-mono text-orange-500 text-lg">98.4%</div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -left-12 bottom-40 bg-black/80 backdrop-blur-md border border-zinc-700/50 rounded-lg p-3 text-xs z-20 hidden md:block"
            >
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                 <span className="text-zinc-300 font-mono">Dynamic Context Applied</span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
