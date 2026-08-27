import React from 'react';
import { motion } from 'motion/react';
import { Cloud, Cpu, Database, Link as LinkIcon, Smartphone, ShieldCheck } from 'lucide-react';

export function Technology() {
  const techCards = [
    { icon: Cloud, title: 'CLOUD', desc: 'Scalable cloud infrastructure.' },
    { icon: Cpu, title: 'AI', desc: 'Intelligent assistance and automation.' },
    { icon: Database, title: 'DATA', desc: 'Secure and structured data platforms.' },
    { icon: LinkIcon, title: 'APIs', desc: 'Integration-ready digital systems.' },
    { icon: Smartphone, title: 'MOBILE', desc: 'Mobile-first experiences.' },
    { icon: ShieldCheck, title: 'SECURITY', desc: 'Authentication, authorization and controlled access.' },
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Built for the Connected Africa</h1>
          <p className="text-xl text-slate-400">
            A robust, scalable, and secure technology stack powering all our platforms.
          </p>
        </div>

        <div className="flex flex-col items-center mb-32">
          {/* Architecture Visual */}
          <div className="w-full max-w-2xl">
            <div className="space-y-4 relative">
               {/* Connection Line */}
               <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-cyan-600/50 via-cyan-500/50 to-cyan-600/50 hidden md:block"></div>
               
               {[
                 { label: 'User Interfaces', highlight: 'text-cyan-500', border: 'border-cyan-600/30' },
                 { label: 'Applications', highlight: 'text-cyan-400', border: 'border-cyan-500/30' },
                 { label: 'Authentication', highlight: 'text-emerald-400', border: 'border-emerald-500/30' },
                 { label: 'APIs', highlight: 'text-cyan-500', border: 'border-cyan-600/30' },
                 { label: 'Cloud Infrastructure', highlight: 'text-cyan-500', border: 'border-cyan-600/30' },
                 { label: 'Data', highlight: 'text-cyan-400', border: 'border-cyan-500/30' },
                 { label: 'Analytics', highlight: 'text-emerald-400', border: 'border-emerald-500/30' }
               ].map((layer, i) => (
                 <motion.div 
                   key={layer.label}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="relative z-10"
                 >
                   <div className="md:hidden w-px h-4 bg-white/10 mx-auto"></div>
                   <div className={`bg-slate-900/80 backdrop-blur-sm border ${layer.border} p-4 rounded-xl text-center shadow-xl w-full max-w-sm mx-auto`}>
                     <span className={`font-bold ${layer.highlight}`}>{layer.label}</span>
                   </div>
                 </motion.div>
               ))}
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCards.map((tech, i) => (
            <motion.div 
              key={tech.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-slate-900 border border-cyan-600/20 p-8 rounded-xl hover:bg-slate-800 transition-colors"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                <tech.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold tracking-wider mb-3">{tech.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
