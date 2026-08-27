import React from 'react';
import { motion } from 'motion/react';
import { FileText, Folder, Search, Share2, Bell, Clock, User, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function DocuFolio() {
  const features = [
    { icon: FileText, title: 'Digital Storage' },
    { icon: Folder, title: 'Document Organization' },
    { icon: Search, title: 'Smart Search' },
    { icon: Folder, title: 'Categories' },
    { icon: Share2, title: 'Secure Sharing' },
    { icon: Bell, title: 'Document Reminders' },
    { icon: Clock, title: 'Document History' },
    { icon: User, title: 'User Profiles' },
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <span className="text-cyan-500 font-semibold tracking-wider uppercase text-sm mb-4 block">Digital Document Management</span>
            <div className="flex items-center gap-4 mb-6">
              <img src="/logo-docufolio.png" alt="Digital DocuFolio Logo" className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl" referrerPolicy="no-referrer" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">Digital DocuFolio</h1>
            </div>
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              A digital platform for securely organizing, managing and accessing important documents.
            </p>
            <Link to="/login" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-slate-950 bg-white hover:bg-slate-200 transition-colors">
              Explore Digital DocuFolio
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative bg-slate-900 border border-cyan-600/30 rounded-lg overflow-hidden shadow-2xl p-6 h-[500px] flex flex-col"
          >
             <div className="flex justify-between items-center mb-8 pb-4 border-b border-cyan-600/20">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden">
                    <img src="/logo-docufolio.png" alt="Digital DocuFolio Icon" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <span className="text-white font-bold block">Digital DocuFolio</span>
                    <span className="text-slate-500 text-xs">Personal Workspace</span>
                  </div>
                </div>
                <div className="bg-slate-800 rounded-full p-2">
                  <Search className="w-4 h-4 text-slate-400" />
                </div>
             </div>

             <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-cyan-900/30 to-cyan-900/30 border border-cyan-600/20 p-4 rounded-xl flex flex-col justify-between h-32">
                  <Folder className="w-6 h-6 text-cyan-500" />
                  <div>
                    <span className="text-white font-medium block">Personal IDs</span>
                    <span className="text-slate-500 text-xs">4 Files</span>
                  </div>
                </div>
                <div className="bg-slate-950 border border-cyan-600/20 p-4 rounded-xl flex flex-col justify-between h-32">
                  <Folder className="w-6 h-6 text-cyan-500" />
                  <div>
                    <span className="text-white font-medium block">Vehicle Reg</span>
                    <span className="text-slate-500 text-xs">2 Files</span>
                  </div>
                </div>
             </div>

             <div className="flex-grow">
               <h4 className="text-white text-sm font-medium mb-4">Expiring Documents</h4>
               <div className="space-y-3">
                 <div className="bg-slate-950 border border-red-500/20 p-3 rounded-xl flex justify-between items-center">
                   <div className="flex items-center gap-3">
                     <div className="p-2 bg-red-500/10 rounded-lg">
                       <FileText className="w-4 h-4 text-red-400" />
                     </div>
                     <div>
                       <span className="text-white text-sm font-medium block">Driving License</span>
                       <span className="text-slate-500 text-xs">Expires in 3 days</span>
                     </div>
                   </div>
                   <span className="w-2 h-2 rounded-full bg-red-500"></span>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>

        {/* Features */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white">Organize Your Digital Life</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900 border border-cyan-600/20 p-6 rounded-lg text-center hover:bg-slate-800 transition-colors"
              >
                <feature.icon className="w-8 h-8 text-cyan-500 mx-auto mb-4" />
                <h3 className="text-white font-medium text-sm">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
