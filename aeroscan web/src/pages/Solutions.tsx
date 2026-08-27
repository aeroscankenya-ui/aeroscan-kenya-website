import React from 'react';
import { motion } from 'motion/react';
import { Car, GraduationCap, Building, Zap } from 'lucide-react';

export function Solutions() {
  const solutions = [
    {
      id: 'automotive',
      icon: Car,
      title: 'Automotive',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-600/10',
      borderColor: 'border-cyan-600/20',
      items: ['Vehicle owners', 'Garages', 'Fleets', 'Automotive businesses']
    },
    {
      id: 'education',
      icon: GraduationCap,
      title: 'Education',
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/20',
      items: ['Schools', 'Parents', 'Teachers', 'Administrators']
    },
    {
      id: 'business',
      icon: Building,
      title: 'Business',
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/20',
      items: ['SMEs', 'Enterprises', 'Digital workflows', 'Document management']
    },
    {
      id: 'infrastructure',
      icon: Zap,
      title: 'Digital Infrastructure',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-600/10',
      borderColor: 'border-cyan-600/20',
      items: ['APIs', 'Cloud platforms', 'Data systems', 'Integrations', 'Automation']
    }
  ];

  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Solutions for a Digital Africa</h1>
          <p className="text-xl text-slate-400">
            Tailored digital platforms addressing the core needs of specific industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {solutions.map((sol, i) => (
            <motion.div 
              key={sol.id}
              id={sol.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-slate-900 border ${sol.borderColor} p-8 lg:p-12 rounded-xl relative overflow-hidden group`}
            >
              <div className={`absolute top-0 right-0 w-32 h-32 ${sol.bgColor} rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150`}></div>
              
              <div className="relative z-10">
                <sol.icon className={`w-12 h-12 ${sol.color} mb-6`} />
                <h2 className="text-2xl font-bold text-white mb-6">{sol.title}</h2>
                <ul className="space-y-4">
                  {sol.items.map(item => (
                    <li key={item} className="flex items-center gap-3">
                      <span className={`w-1.5 h-1.5 rounded-full ${sol.bgColor.replace('/10', '')} block`}></span>
                      <span className="text-slate-300 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
