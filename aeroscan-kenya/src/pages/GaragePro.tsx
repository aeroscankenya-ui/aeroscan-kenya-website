import React from 'react';
import { motion } from 'motion/react';
import { Users, Car, Calendar, FileText, Settings, Banknote, Search, MessageSquare, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

export function GaragePro() {
  const features = [
    { icon: Users, title: 'Customer Management' },
    { icon: Car, title: 'Vehicle Management' },
    { icon: Calendar, title: 'Appointments' },
    { icon: FileText, title: 'Job Cards & Work Orders' },
    { icon: Search, title: 'Inspections' },
    { icon: Wrench, title: 'Technician Management' },
    { icon: Banknote, title: 'Invoicing & Payments' },
    { icon: MessageSquare, title: 'Customer Communication' },
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-4 mb-6">
              <img src="/logo-garagepro.png" alt="Garage Pro Logo" className="w-16 h-16 object-contain" referrerPolicy="no-referrer" />
              <span className="text-cyan-500 font-mono font-bold tracking-wider uppercase text-sm block">Garage Management SaaS</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-mono">AutoCare<br/><span className="text-3xl text-emerald-400">Garage Pro</span></h1>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              A professional digital platform that helps garages manage customers, vehicles, technicians, appointments, work orders, inspections, invoices, payments and service history.
            </p>
            <Link to="/login" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-slate-950 bg-white hover:bg-slate-200 transition-colors">
              Request Demo
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative bg-slate-900 border border-cyan-600/30 rounded-lg overflow-hidden shadow-2xl p-6"
          >
            {/* Desktop Dashboard Mockup */}
            <div className="flex justify-between items-center mb-6 pb-4 border-b border-cyan-600/20">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <Settings className="w-4 h-4 text-cyan-400" />
                </div>
                <span className="text-white font-bold">Garage Pro</span>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-slate-800 rounded-full"></div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: "Today's Appointments", value: '12' },
                { label: 'Active Jobs', value: '8' },
                { label: 'Pending Payments', value: 'KES 45K' },
                { label: 'Completed', value: '24' }
              ].map(stat => (
                <div key={stat.label} className="bg-slate-950 border border-cyan-600/20 p-4 rounded-xl">
                  <span className="text-slate-500 text-xs uppercase block mb-1">{stat.label}</span>
                  <span className="text-white font-bold text-xl">{stat.value}</span>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 bg-slate-950 border border-cyan-600/20 rounded-xl p-4">
                 <h4 className="text-white text-sm font-medium mb-4">Active Work Orders</h4>
                 <div className="space-y-3">
                   {[
                     { vehicle: 'Toyota Hilux KCD 123A', status: 'In Progress', type: 'Major Service' },
                     { vehicle: 'Mazda CX-5 KDA 456B', status: 'Awaiting Parts', type: 'Suspension' },
                     { vehicle: 'Subaru Outback KCE 789C', status: 'Inspection', type: 'Diagnosis' }
                   ].map(job => (
                     <div key={job.vehicle} className="flex justify-between items-center p-3 bg-slate-900 rounded-lg border border-cyan-600/20">
                       <div>
                         <span className="text-white text-sm font-medium block">{job.vehicle}</span>
                         <span className="text-slate-500 text-xs">{job.type}</span>
                       </div>
                       <span className="text-xs px-2 py-1 bg-cyan-500/10 text-cyan-400 rounded-md border border-cyan-500/20">{job.status}</span>
                     </div>
                   ))}
                 </div>
              </div>
              <div className="bg-slate-950 border border-cyan-600/20 rounded-xl p-4">
                <h4 className="text-white text-sm font-medium mb-4">Technicians</h4>
                <div className="space-y-3">
                  {['John D.', 'Michael K.', 'David S.'].map(tech => (
                    <div key={tech} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-slate-400" />
                      </div>
                      <span className="text-white text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Comprehensive Garage Management</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900 border border-cyan-600/20 p-6 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-white font-medium mb-2">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Ecosystem Connection Section */}
        <div className="bg-gradient-to-r from-cyan-900/20 to-cyan-900/20 border border-cyan-600/20 rounded-xl p-8 lg:p-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">One Vehicle. One Connected Digital Journey.</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-12">
            AutoCare Companion and Garage Pro are designed to work together through a shared backend and controlled data access.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm font-medium text-white max-w-4xl mx-auto">
            <span className="px-4 py-2 bg-slate-900 rounded-lg border border-cyan-600/30">Vehicle Owner</span>
            <span className="text-cyan-500">→</span>
            <span className="px-4 py-2 bg-cyan-900/50 rounded-lg border border-cyan-600/30">AutoCare Companion</span>
            <span className="text-cyan-500">→</span>
            <span className="px-4 py-2 bg-cyan-900/50 rounded-lg border border-cyan-500/30">Garage Pro</span>
            <span className="text-cyan-500">→</span>
            <span className="px-4 py-2 bg-slate-900 rounded-lg border border-cyan-600/30">Service History Updated</span>
          </div>
        </div>

      </div>
    </div>
  );
}
