import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Settings, Users, FileText, Car } from 'lucide-react';
import { config } from '../config';

const categoryIcons: Record<string, React.ElementType> = {
  'Automotive Technology': Car,
  'Garage Management SaaS': Settings,
  'Education Technology': Users,
  'Digital Document Management': FileText,
};

export function Products() {
  return (
    <div className="pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Our Digital Products</h1>
          <p className="text-xl text-slate-400">
            One technology ecosystem. Multiple solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-32">
          {config.products.map((product, i) => {
            const Icon = categoryIcons[product.category] || ArrowRight;
            
            return (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 border border-cyan-600/20 rounded-xl p-8 lg:p-12 group hover:bg-slate-800 transition-colors relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-600/5 rounded-full blur-3xl group-hover:bg-cyan-600/10 transition-colors pointer-events-none"></div>
                
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 bg-slate-950 rounded-lg flex items-center justify-center border border-cyan-500/50 group-hover:border-emerald-400 group-hover:scale-110 transition-transform overflow-hidden shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                    {product.logo ? (
                      <img src={product.logo} alt={product.name} className="w-10 h-10 object-contain" referrerPolicy="no-referrer" />
                    ) : (
                      <Icon className="w-7 h-7 text-white" />
                    )}
                  </div>
                  <span className="text-xs font-mono font-bold tracking-wider text-cyan-400 uppercase bg-slate-950 px-3 py-1 border border-cyan-500/30">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">{product.name}</h3>
                <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                  {product.description}
                </p>
                
                <Link
                  to={product.url}
                  className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-slate-950 bg-white hover:bg-slate-200 transition-colors w-fit"
                >
                  Explore {product.name.split(' ')[0]}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-12">Future Expansion</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {config.futureCategories.map((cat, i) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-4 py-2 rounded-full border border-cyan-600/30 bg-slate-900/50 text-slate-500 text-sm font-medium flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-slate-700"></span>
                {cat}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
