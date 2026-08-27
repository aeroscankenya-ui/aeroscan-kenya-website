import React from 'react';
import { motion } from 'motion/react';
import { Users, GraduationCap, Bell, Calendar, FileText, Lock, MessageSquare, AlertTriangle, UserCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export function SchoolConnect() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="flex items-center gap-4 mb-4">
              <img src="/logo-schoolconnect.png" alt="SchoolConnect Logo" className="w-16 h-16 sm:w-20 sm:h-20 object-contain rounded-xl" referrerPolicy="no-referrer" />
              <div>
                <span className="text-emerald-400 font-semibold tracking-wider uppercase text-xs block">Education Technology</span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">SchoolConnect</h1>
              </div>
            </div>
            <p className="text-xl text-white font-medium mb-4">Connecting Schools, Parents and Students</p>
            <p className="text-slate-400 mb-8 leading-relaxed">
              A secure communication and information-sharing platform connecting schools, parents, guardians, teachers and administrators.
            </p>
            <Link to="/login" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-slate-950 bg-white hover:bg-slate-200 transition-colors">
              Request Demo
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative bg-emerald-900/20 border border-emerald-500/20 rounded-xl overflow-hidden shadow-2xl flex items-center justify-center p-8"
          >
            {/* Dashboard Mockup - Parent Portal */}
            <div className="w-full max-w-sm bg-slate-950 border border-cyan-600/30 rounded-xl overflow-hidden shadow-2xl">
               <div className="bg-slate-900 p-4 border-b border-cyan-600/20 flex justify-between items-center">
                 <div className="flex items-center gap-2">
                   <div className="w-8 h-8 bg-emerald-500/20 rounded-full flex items-center justify-center">
                     <GraduationCap className="w-4 h-4 text-emerald-400" />
                   </div>
                   <span className="text-white font-semibold">Parent Portal</span>
                 </div>
                 <div className="flex -space-x-2">
                   <div className="w-8 h-8 bg-slate-800 rounded-full border-2 border-slate-900 flex items-center justify-center text-xs text-white">S1</div>
                   <div className="w-8 h-8 bg-slate-700 rounded-full border-2 border-slate-900 flex items-center justify-center text-xs text-white">S2</div>
                 </div>
               </div>
               
               <div className="p-4 space-y-4">
                 <div className="bg-gradient-to-r from-emerald-900/40 to-slate-900 p-4 rounded-lg border border-emerald-500/20">
                   <div className="flex justify-between items-start mb-2">
                     <span className="text-white font-medium text-sm">Upcoming Term Fee</span>
                     <span className="text-emerald-400 text-xs font-medium">Due in 5 days</span>
                   </div>
                   <span className="text-2xl font-bold text-white block">KES 24,500</span>
                 </div>
                 
                 <div>
                   <span className="text-slate-500 text-xs uppercase tracking-wider font-semibold mb-2 block">Recent Announcements</span>
                   <div className="space-y-2">
                     <div className="bg-slate-900 border border-cyan-600/20 p-3 rounded-xl flex gap-3">
                       <div className="mt-1 w-2 h-2 rounded-full bg-cyan-600"></div>
                       <div>
                         <span className="text-white text-sm font-medium block">Sports Day Rescheduled</span>
                         <span className="text-slate-500 text-xs block">Moved to Friday due to weather.</span>
                       </div>
                     </div>
                     <div className="bg-slate-900 border border-cyan-600/20 p-3 rounded-xl flex gap-3">
                       <div className="mt-1 w-2 h-2 rounded-full bg-emerald-500"></div>
                       <div>
                         <span className="text-white text-sm font-medium block">Term 2 Results Available</span>
                         <span className="text-slate-500 text-xs block">Click to view academic report.</span>
                       </div>
                     </div>
                   </div>
                 </div>
                 
                 <div className="grid grid-cols-3 gap-2">
                   <div className="bg-slate-900 border border-cyan-600/20 p-3 rounded-xl flex flex-col items-center justify-center text-center gap-2">
                     <Calendar className="w-5 h-5 text-slate-400" />
                     <span className="text-slate-400 text-[10px] font-medium uppercase">Events</span>
                   </div>
                   <div className="bg-slate-900 border border-cyan-600/20 p-3 rounded-xl flex flex-col items-center justify-center text-center gap-2">
                     <UserCheck className="w-5 h-5 text-slate-400" />
                     <span className="text-slate-400 text-[10px] font-medium uppercase">Attendance</span>
                   </div>
                   <div className="bg-slate-900 border border-cyan-600/20 p-3 rounded-xl flex flex-col items-center justify-center text-center gap-2">
                     <MessageSquare className="w-5 h-5 text-slate-400" />
                     <span className="text-slate-400 text-[10px] font-medium uppercase">Teachers</span>
                   </div>
                 </div>
               </div>
            </div>
          </motion.div>
        </div>

        {/* Relationship Section */}
        <div className="mb-32 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Stronger School–Parent Relationships Through Technology</h2>
          <p className="text-lg text-slate-400 max-w-3xl mx-auto mb-16">
            SchoolConnect provides a structured communication channel between schools and families, promoting transparency, engagement, and timely information.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 text-sm font-medium text-white max-w-2xl mx-auto mb-16">
            <span className="px-6 py-3 bg-slate-900 rounded-xl border border-cyan-600/30 w-48 text-center">School</span>
            <span className="text-emerald-400">↓</span>
            <span className="px-6 py-3 bg-slate-900 rounded-xl border border-cyan-600/30 w-48 text-center">Teacher</span>
            <span className="text-emerald-400">↓</span>
            <span className="px-6 py-3 bg-emerald-900/50 rounded-xl border border-emerald-500/30 w-48 text-center font-bold">Student</span>
            <span className="text-emerald-400">↑</span>
            <span className="px-6 py-3 bg-slate-900 rounded-xl border border-cyan-600/30 w-48 text-center">Parent / Guardian</span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              { icon: Users, title: 'Student & Parent Management' },
              { icon: Bell, title: 'Targeted Messaging' },
              { icon: UserCheck, title: 'Attendance Tracking' },
              { icon: GraduationCap, title: 'Academic Communication' },
              { icon: FileText, title: 'Fee Communication' },
              { icon: Calendar, title: 'School Calendar & Events' },
              { icon: AlertTriangle, title: 'Emergency Notifications' },
              { icon: Lock, title: 'Controlled Access' },
            ].map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-slate-900 border border-cyan-600/20 p-6 rounded-lg hover:bg-slate-800 transition-colors"
              >
                <feature.icon className="w-6 h-6 text-emerald-400 mb-4" />
                <h3 className="text-white font-medium text-sm">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Security Section */}
        <div className="bg-slate-950 border border-emerald-500/20 rounded-xl p-8 lg:p-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
          
          <div className="relative z-10 max-w-3xl">
            <Lock className="w-12 h-12 text-emerald-400 mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">The Right Information. To the Right Person.</h2>
            <p className="text-lg text-slate-400 mb-8">
              SchoolConnect uses role-based access so that information is shared strictly according to authorization. Designed to be compatible with applicable Kenyan data protection requirements.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
               <div className="bg-slate-900 border border-cyan-600/20 p-4 rounded-xl">
                 <span className="text-white font-medium block mb-1">Teacher → Authorized Students</span>
                 <span className="text-slate-500 text-xs">Only class-specific data</span>
               </div>
               <div className="bg-slate-900 border border-cyan-600/20 p-4 rounded-xl">
                 <span className="text-white font-medium block mb-1">School → Parents</span>
                 <span className="text-slate-500 text-xs">Official announcements</span>
               </div>
               <div className="bg-slate-900 border border-cyan-600/20 p-4 rounded-xl">
                 <span className="text-white font-medium block mb-1">Parent → Authorized Child</span>
                 <span className="text-slate-500 text-xs">Strict access control</span>
               </div>
               <div className="bg-slate-900 border border-cyan-600/20 p-4 rounded-xl">
                 <span className="text-white font-medium block mb-1">Admin → Authorized Staff</span>
                 <span className="text-slate-500 text-xs">Role-based privileges</span>
               </div>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {['Role-Based Access', 'Secure Authentication', 'Controlled Data Access', 'Audit Logging', 'Privacy by Design'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-emerald-900/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider rounded-full border border-emerald-500/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
