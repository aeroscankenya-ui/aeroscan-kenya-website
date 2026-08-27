import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Shield, Zap, RefreshCw, Cpu, Layers, Link as LinkIcon, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { config } from '../config';

function Hero() {
  return (
    <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-48 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-900 border border-cyan-500/50 mb-6 font-mono shadow-[0_0_10px_rgba(6,182,212,0.2)]">
              <span className="w-2 h-2 bg-emerald-400 animate-pulse"></span>
              <span className="text-xs text-cyan-400 tracking-wider uppercase font-bold">SYS.INIT // Ecosystem</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 font-mono">
              <span className="block text-white mb-2">Building Africa's</span>
              <span className="block bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">Digital Future</span>
            </h1>
            
            <p className="text-xl text-slate-400 mb-8 max-w-2xl font-light">
              Aero Scan Kenya builds secure, scalable digital platforms that connect people, businesses and institutions through intelligent technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products" className="relative group inline-flex items-center justify-center px-8 py-4 border border-cyan-500/50 text-base font-bold font-mono text-slate-950 bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] transition-all overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">[ INIT_EXPLORE ] <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link to="/partners" className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 hover:border-cyan-500 text-base font-mono font-medium text-cyan-500 bg-slate-950 hover:bg-slate-900 hover:text-emerald-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all shadow-sm">
                &gt; PARTNER_NODE
              </Link>
            </div>
          </motion.div>
          
          {/* Hero Technology Animation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] lg:h-[500px] w-full flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-600/5 to-emerald-500/5 rounded-full blur-2xl"></div>
            
            {/* Center Node (Microchip) */}
            <div className="absolute z-20 w-56 h-56 md:w-72 md:h-72 bg-transparent border-2 border-cyan-500/40 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.25)] relative">
              {/* Chip Pins */}
              <div className="absolute -top-2 left-6 right-6 flex justify-between"><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div></div>
              <div className="absolute -bottom-2 left-6 right-6 flex justify-between"><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div></div>
              <div className="absolute top-6 bottom-6 -left-2 flex flex-col justify-between"><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div></div>
              <div className="absolute top-6 bottom-6 -right-2 flex flex-col justify-between"><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div><div className="w-2 h-2 md:w-3 md:h-3 bg-cyan-500"></div></div>
              
              <img src="/logo-partner-node.gif" alt="Center Node" className="w-48 h-48 md:w-64 md:h-64 object-contain relative z-10 bg-transparent mix-blend-screen" referrerPolicy="no-referrer" />
            </div>
            
            {/* Orbiting Nodes (Data Packets) */}
            {['AUTOMOTIVE', 'EDUCATION', 'DOCUMENTS', 'BUSINESS', 'DATA', 'AI'].map((label, i) => {
              const angle = (i * 360) / 6;
              const radius = 220;
              return (
                <motion.div
                  key={label}
                  className="absolute z-10 hidden md:flex items-center justify-center"
                  initial={{ rotate: angle }}
                  animate={{ rotate: angle + 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  style={{ width: radius * 2, height: radius * 2 }}
                  >
                  <motion.div 
                    className="absolute top-0 -translate-y-1/2 px-3 py-1 bg-slate-900 border border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.4)] flex items-center gap-2"
                    initial={{ rotate: -angle }}
                    animate={{ rotate: -(angle + 360) }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  >
                    <span className="w-2 h-2 bg-emerald-400 animate-pulse"></span>
                    <span className="text-[10px] font-bold tracking-widest text-cyan-100 uppercase font-mono">{label}</span>
                  </motion.div>
                </motion.div>
              );
            })}
            
            {/* Connection Lines (Traces) */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 500 500">
              <circle cx="250" cy="250" r="220" fill="none" stroke="rgba(6,182,212,0.2)" strokeWidth="2" strokeDasharray="5 5" />
              <circle cx="250" cy="250" r="160" fill="none" stroke="rgba(6,182,212,0.1)" strokeWidth="1" />
              <line x1="250" y1="30" x2="250" y2="130" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />
              <line x1="250" y1="370" x2="250" y2="470" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />
              <line x1="30" y1="250" x2="130" y2="250" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />
              <line x1="370" y1="250" x2="470" y2="250" stroke="rgba(6,182,212,0.3)" strokeWidth="2" />
            </svg>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}

function WhatWeBuild() {
  const cards = [
    { title: 'CONNECT', icon: LinkIcon, desc: 'Connecting people, businesses and institutions.' },
    { title: 'AUTOMATE', icon: RefreshCw, desc: 'Replacing manual processes with intelligent digital workflows.' },
    { title: 'PROTECT', icon: Shield, desc: 'Building secure systems around data, identity and access.' },
    { title: 'SCALE', icon: Globe, desc: 'Creating platforms capable of expanding across Kenya and Africa.' }
  ];

  return (
    <section className="py-24 bg-slate-900/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center mb-4 text-cyan-500 text-sm tracking-widest uppercase font-semibold">
            Core Architecture
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Technology Built Around Real Problems</h2>
          <p className="text-lg text-slate-400">
            Aero Scan Kenya develops practical digital platforms designed to solve everyday problems while creating scalable technology infrastructure for Africa.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, i) => (
            <motion.div 
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-slate-900 border border-cyan-600/20 rounded-lg p-8 hover:bg-slate-800 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-600/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
              <card.icon className="w-10 h-10 text-cyan-500 mb-6" />
              <h3 className="text-lg font-bold text-white tracking-wide mb-3">{card.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsPreview() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 md:flex justify-between items-end border-b border-cyan-600/20 pb-8">
          <div className="max-w-2xl">
            <span className="text-cyan-500 font-semibold text-sm tracking-widest uppercase mb-2 block">Digital Solutions</span>
            <h2 className="text-4xl font-bold mb-4 text-white">Our Digital Products</h2>
            <p className="text-xl text-slate-400">One technology ecosystem. Multiple solutions.</p>
          </div>
          <Link to="/products" className="hidden md:inline-flex items-center gap-2 text-cyan-500 hover:text-emerald-400 font-medium text-sm transition-colors mt-6 md:mt-0">
            View All Products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {config.products.map((product, i) => (
            <motion.div 
              key={product.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group bg-slate-900/40 backdrop-blur-md border border-white/5 hover:border-cyan-500/30 rounded-2xl p-8 lg:p-12 relative overflow-hidden shadow-2xl transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/0 via-cyan-600/0 to-cyan-600/10 group-hover:to-cyan-600/20 transition-colors duration-500"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <span className="text-xs font-bold tracking-wider text-cyan-400 uppercase mb-4">{product.category}</span>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-emerald-400 group-hover:to-cyan-400 transition-all">{product.name}</h3>
                <p className="text-slate-400 mb-8 flex-grow leading-relaxed">{product.description}</p>
                
                <Link to={product.url} className="inline-flex items-center gap-2 text-emerald-400 font-medium group-hover:text-cyan-400 transition-colors w-fit">
                  Explore <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="py-32 bg-slate-950 relative overflow-hidden border-y border-cyan-600/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-950 to-slate-950"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">One Company.<br/>A Growing Digital Ecosystem.</h2>
        </div>
        
        <div className="relative h-[600px] w-full max-w-4xl mx-auto">
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full" style={{ filter: 'drop-shadow(0 0 8px rgba(6,182,212,0.5))' }}>
            <path d="M50% 50% L20% 20% L10% 20%" stroke="rgba(6,182,212,0.4)" strokeWidth="2" fill="none" />
            <path d="M50% 50% L80% 20% L90% 20%" stroke="rgba(6,182,212,0.4)" strokeWidth="2" fill="none" />
            <path d="M50% 50% L20% 80% L10% 80%" stroke="rgba(6,182,212,0.4)" strokeWidth="2" fill="none" />
            <path d="M50% 50% L80% 80% L90% 80%" stroke="rgba(6,182,212,0.4)" strokeWidth="2" fill="none" />
            
            {/* Horizontal Traces */}
            <path d="M50% 50% L10% 50%" stroke="rgba(16,185,129,0.3)" strokeWidth="1" strokeDasharray="5 5" fill="none" />
            <path d="M50% 50% L90% 50%" stroke="rgba(16,185,129,0.3)" strokeWidth="1" strokeDasharray="5 5" fill="none" />
          </svg>
          
          {/* Center Logo (CPU Core) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div className="w-32 h-32 md:w-48 md:h-48 bg-transparent border-2 border-emerald-500/50 shadow-[0_0_30px_rgba(16,185,129,0.3)] flex items-center justify-center p-4 relative">
              <div className="absolute inset-2 border border-cyan-500/30"></div>
               <img src={config.company.logo} alt="Aero Scan" className="w-full h-full object-contain relative z-10 bg-transparent" referrerPolicy="no-referrer" />
            </div>
          </div>
          
          {/* Nodes */}
          <div className="absolute top-[15%] left-[5%] md:left-[10%] text-center group cursor-pointer">
            <div className="w-20 h-20 bg-slate-900/60 backdrop-blur-md border-l-2 border-cyan-500 group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center mx-auto mb-3 transition-all duration-300 relative overflow-hidden">
               <div className="absolute top-0 bottom-0 left-1 flex flex-col justify-evenly"><div className="w-1 h-1 bg-cyan-800"></div><div className="w-1 h-1 bg-cyan-800"></div></div>
               <img src="/logo-autocare.png" alt="AutoCare" className="w-14 h-14 object-contain relative z-10 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" referrerPolicy="no-referrer" />
            </div>
            <p className="text-cyan-600/70 text-[10px] uppercase tracking-widest font-mono">NODE_01</p>
          </div>
          
          <div className="absolute top-[15%] right-[5%] md:right-[10%] text-center group cursor-pointer">
            <div className="w-20 h-20 bg-slate-900/60 backdrop-blur-md border-r-2 border-cyan-500 group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center mx-auto mb-3 transition-all duration-300 relative overflow-hidden">
               <div className="absolute top-0 bottom-0 right-1 flex flex-col justify-evenly"><div className="w-1 h-1 bg-cyan-800"></div><div className="w-1 h-1 bg-cyan-800"></div></div>
               <img src="/logo-garagepro.png" alt="Garage Pro" className="w-14 h-14 object-contain relative z-10 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" referrerPolicy="no-referrer" />
            </div>
            <p className="text-cyan-600/70 text-[10px] uppercase tracking-widest font-mono">NODE_02</p>
          </div>
          
          <div className="absolute bottom-[15%] left-[5%] md:left-[10%] text-center group cursor-pointer">
            <div className="w-20 h-20 bg-slate-900/60 backdrop-blur-md border-l-2 border-cyan-500 group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center mx-auto mb-3 transition-all duration-300 relative overflow-hidden">
               <div className="absolute top-0 bottom-0 left-1 flex flex-col justify-evenly"><div className="w-1 h-1 bg-cyan-800"></div><div className="w-1 h-1 bg-cyan-800"></div></div>
               <img src="/logo-schoolconnect.png" alt="SchoolConnect" className="w-14 h-14 object-contain relative z-10 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" referrerPolicy="no-referrer" />
            </div>
            <p className="text-cyan-600/70 text-[10px] uppercase tracking-widest font-mono">NODE_03</p>
          </div>
          
          <div className="absolute bottom-[15%] right-[5%] md:right-[10%] text-center group cursor-pointer">
            <div className="w-20 h-20 bg-slate-900/60 backdrop-blur-md border-r-2 border-cyan-500 group-hover:border-emerald-400 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] flex items-center justify-center mx-auto mb-3 transition-all duration-300 relative overflow-hidden">
               <div className="absolute top-0 bottom-0 right-1 flex flex-col justify-evenly"><div className="w-1 h-1 bg-cyan-800"></div><div className="w-1 h-1 bg-cyan-800"></div></div>
               <img src="/logo-docufolio.png" alt="Digital DocuFolio" className="w-14 h-14 object-contain relative z-10 opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all" referrerPolicy="no-referrer" />
            </div>
            <p className="text-cyan-600/70 text-[10px] uppercase tracking-widest font-mono">NODE_04</p>
          </div>

          {/* Coming Soon Nodes */}
          <div className="absolute top-[50%] left-0 -translate-y-1/2 text-center opacity-50">
             <div className="w-16 h-16 bg-slate-900/50 border border-cyan-600/20 border-dashed rounded-lg flex items-center justify-center mx-auto mb-2">
               <span className="text-slate-500 text-[10px] uppercase">Coming<br/>Soon</span>
             </div>
             <p className="text-slate-500 text-[10px] uppercase tracking-wider">Fleet Tech</p>
          </div>
          <div className="absolute top-[50%] right-0 -translate-y-1/2 text-center opacity-50">
             <div className="w-16 h-16 bg-slate-900/50 border border-cyan-600/20 border-dashed rounded-lg flex items-center justify-center mx-auto mb-2">
               <span className="text-slate-500 text-[10px] uppercase">Coming<br/>Soon</span>
             </div>
             <p className="text-slate-500 text-[10px] uppercase tracking-wider">Logistics</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function TechnologyLayer() {
  const layers = [
    { title: 'User Interfaces', type: 'frontend' },
    { title: 'Applications', type: 'app' },
    { title: 'Authentication & Access', type: 'security' },
    { title: 'APIs & Integration', type: 'api' },
    { title: 'Cloud Infrastructure', type: 'cloud' },
    { title: 'Data Platforms', type: 'data' },
    { title: 'Analytics & AI', type: 'ai' }
  ];

  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Built for the Connected Africa</h2>
          <p className="text-lg text-slate-400">A robust technology stack designed for scalability, security, and seamless integration.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Architecture Stack */}
          <div className="flex flex-col gap-3 relative pl-8 border-l-2 border-cyan-500/30">
            {layers.map((layer, i) => (
              <motion.div 
                key={layer.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-slate-950 border border-cyan-500/20 hover:border-emerald-500/50 hover:bg-slate-900 px-6 py-4 rounded-none flex items-center justify-between transition-all group shadow-[inset_0_0_20px_rgba(6,182,212,0.05)]"
              >
                <div className="absolute -left-8 w-8 h-px bg-cyan-500/30 group-hover:bg-emerald-400 transition-colors"></div>
                <div className="absolute -left-10 w-4 h-4 bg-slate-950 border-2 border-cyan-500 group-hover:border-emerald-400 group-hover:shadow-[0_0_10px_rgba(16,185,129,0.8)] -translate-y-1/2 top-1/2 transition-all"></div>
                <span className="font-mono font-bold text-white group-hover:text-emerald-400 transition-colors">{layer.title}</span>
                <span className="text-xs text-cyan-600/70 font-mono hidden sm:block">SYS_LAYER_0{i+1}</span>
              </motion.div>
            ))}
          </div>
          
          {/* Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { icon: Globe, title: 'CLOUD', desc: 'Scalable cloud infrastructure.' },
              { icon: Cpu, title: 'AI', desc: 'Intelligent assistance and automation.' },
              { icon: Layers, title: 'DATA', desc: 'Secure and structured data platforms.' },
              { icon: LinkIcon, title: 'APIs', desc: 'Integration-ready digital systems.' },
              { icon: Lock, title: 'SECURITY', desc: 'Authentication, authorization and controlled access.' }
            ].map((item, index) => (
              <div key={item.title} className={`bg-slate-900/40 backdrop-blur-sm border border-white/5 hover:border-cyan-500/30 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${index === 4 ? 'sm:col-span-2 md:col-span-1' : ''}`}>
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-emerald-400" />
                </div>
                <h4 className="text-sm font-bold text-white tracking-wider mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AfricaMap() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl font-bold text-white mb-4">Built in Kenya. <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">Designed for Africa.</span></h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
          Aero Scan Kenya develops technology locally with the potential to scale across African markets.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-medium tracking-widest text-slate-500 uppercase">
          <span className="text-white bg-slate-800/80 px-4 py-2 rounded-full border border-white/10">Kenya</span>
          <ArrowRight className="w-4 h-4 text-cyan-500" />
          <span className="bg-slate-800/40 px-4 py-2 rounded-full border border-white/5">East Africa</span>
          <ArrowRight className="w-4 h-4 text-cyan-500" />
          <span className="bg-slate-800/20 px-4 py-2 rounded-full border border-white/5">Africa</span>
        </div>
      </div>
    </section>
  );
}

export function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <WhatWeBuild />
      <ProductsPreview />
      <Ecosystem />
      <TechnologyLayer />
      <AfricaMap />
    </div>
  );
}
