import React from 'react';
import { motion } from 'motion/react';
import { Globe, Lightbulb, Lock, Maximize, Target, Zap } from 'lucide-react';
import { config } from '../config';

export function About() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Hero Section with Company Intro & Dedicated About Graphic */}
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={config.company.logo} 
                alt={config.company.name} 
                className="w-12 h-12 object-contain" 
                referrerPolicy="no-referrer"
              />
              <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest px-3 py-1 bg-cyan-950/60 border border-cyan-500/30 rounded-full">
                Pioneering African Technology
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
              Technology With <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Purpose</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-300 mb-8 leading-relaxed">
              Aero Scan Kenya Ltd is an African technology company focused on developing practical, intelligent, and scalable digital platforms that solve real-world problems.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-cyan-500/10">
              <div className="bg-slate-900/50 border border-cyan-500/20 p-4 rounded-xl">
                <p className="text-2xl font-bold text-emerald-400">4+</p>
                <p className="text-xs text-slate-400 mt-1">Core Platforms</p>
              </div>
              <div className="bg-slate-900/50 border border-cyan-500/20 p-4 rounded-xl">
                <p className="text-2xl font-bold text-cyan-400">100%</p>
                <p className="text-xs text-slate-400 mt-1">African Grounded</p>
              </div>
              <div className="bg-slate-900/50 border border-cyan-500/20 p-4 rounded-xl col-span-2 sm:col-span-1">
                <p className="text-2xl font-bold text-purple-400">24/7</p>
                <p className="text-xs text-slate-400 mt-1">Cloud Reliability</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-2xl bg-white border border-cyan-500/30 p-4 sm:p-6 flex items-center justify-center shadow-[0_0_50px_rgba(6,182,212,0.2)] overflow-hidden">
              <img 
                src="/about-vision.png" 
                alt="Aero Scan Connected Vision" 
                className="w-full h-full object-contain relative z-10 bg-white rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-slate-900 border border-cyan-600/20 rounded-xl p-8 lg:p-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              To build accessible, secure and intelligent technology that improves how people, businesses and institutions operate.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900 border border-cyan-600/20 rounded-xl p-8 lg:p-12"
          >
            <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              To become a leading African technology company building connected digital solutions for the future.
            </p>
          </motion.div>
        </div>

        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Why Aero Scan</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Globe, title: 'AFRICAN-FIRST', desc: 'Technology designed with African realities in mind.' },
              { icon: Target, title: 'PRACTICAL', desc: 'Solutions focused on real problems.' },
              { icon: Zap, title: 'CONNECTED', desc: 'Products designed to work within larger ecosystems.' },
              { icon: Maximize, title: 'SCALABLE', desc: 'Architecture prepared for growth.' },
              { icon: Lock, title: 'SECURE', desc: 'Privacy and access control built into the architecture.' },
              { icon: Lightbulb, title: 'INNOVATIVE', desc: 'AI, cloud, mobile and emerging technologies.' },
            ].map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900 border border-cyan-600/20 p-8 rounded-xl hover:bg-slate-800 transition-colors"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-white font-bold tracking-wider mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
