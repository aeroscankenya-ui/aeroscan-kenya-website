import React from 'react';
import { motion } from 'motion/react';
import { Car, Wrench, ShieldAlert, Droplets, MapPin, Search, Calendar, FileText, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

export function AutoCare() {
  const features = [
    { icon: Car, title: 'Vehicle Profiles' },
    { icon: FileText, title: 'Digital Records' },
    { icon: Wrench, title: 'Maintenance History' },
    { icon: Calendar, title: 'Service Reminders' },
    { icon: ShieldAlert, title: 'Insurance Reminders' },
    { icon: Search, title: 'Inspection Reminders' },
    { icon: Droplets, title: 'Fuel Tracking' },
    { icon: Smartphone, title: 'AI Mechanic Assistant' },
    { icon: MapPin, title: 'Garage Discovery' },
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-4 mb-6">
              <img src="/logo-autocare.png" alt="AutoCare Logo" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
              <span className="text-cyan-500 font-mono font-bold tracking-wider uppercase text-sm block">Automotive Node</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-mono">AutoCare<br/><span className="text-3xl text-emerald-400">Companion Kenya</span></h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              A digital vehicle companion designed to help vehicle owners manage their vehicles, maintenance, documents, reminders and automotive services.
            </p>
            <Link to="/login" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-slate-950 bg-white hover:bg-slate-200 transition-colors">
              Get Started
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative h-[600px] bg-slate-900 border border-cyan-600/30 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center"
          >
            {/* Dashboard Mockup */}
            <div className="w-[320px] h-[650px] bg-slate-950 border-4 border-slate-800 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 inset-x-0 h-6 bg-slate-950 z-20 flex justify-center">
                <div className="w-32 h-6 bg-slate-800 rounded-b-xl"></div>
              </div>
              
              <div className="p-6 pt-12 space-y-4">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h3 className="text-white font-bold text-lg">My Garage</h3>
                    <p className="text-slate-500 text-xs">Toyota Hilux • KCD 123A</p>
                  </div>
                  <div className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center border border-cyan-600/20">
                    <Car className="w-5 h-5 text-cyan-500" />
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-cyan-900/40 to-cyan-900/40 border border-cyan-600/20 p-4 rounded-lg">
                  <span className="text-blue-300 text-xs font-medium uppercase mb-1 block">Vehicle Health</span>
                  <div className="flex items-end gap-2">
                    <span className="text-3xl font-bold text-white">98%</span>
                    <span className="text-slate-400 text-sm mb-1">Excellent</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-slate-900 border border-cyan-600/20 p-4 rounded-lg">
                    <Wrench className="w-5 h-5 text-orange-400 mb-2" />
                    <span className="text-white font-medium text-sm block">Service Due</span>
                    <span className="text-slate-500 text-xs">In 1,200 km</span>
                  </div>
                  <div className="bg-slate-900 border border-cyan-600/20 p-4 rounded-lg">
                    <ShieldAlert className="w-5 h-5 text-red-400 mb-2" />
                    <span className="text-white font-medium text-sm block">Insurance</span>
                    <span className="text-slate-500 text-xs">Expires in 14 days</span>
                  </div>
                </div>
                
                <div className="bg-slate-900 border border-cyan-600/20 p-4 rounded-lg">
                   <div className="flex justify-between items-center mb-2">
                     <span className="text-white font-medium text-sm">Recent Fuel</span>
                     <span className="text-cyan-500 text-xs font-medium">+ Add</span>
                   </div>
                   <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                     <div className="h-full bg-cyan-600 w-3/4"></div>
                   </div>
                   <div className="flex justify-between mt-2 text-xs text-slate-500">
                     <span>Avg 12.4 km/L</span>
                     <span>KES 4,500</span>
                   </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Everything Your Vehicle Needs</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900 border border-cyan-600/20 p-6 rounded-lg text-center hover:bg-slate-800 transition-colors"
              >
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-cyan-500" />
                </div>
                <h3 className="text-white font-medium text-sm">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
